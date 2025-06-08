"use client"
import React from 'react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Search, Grid, List, SortDesc } from 'lucide-react';
import { Card } from "@/components/ui/card";

interface Book {
  id: string;
  title: string;
  titleAr: string;
  author: string;
  authorAr: string;
  genre: string;
  genreAr: string;
  rating: number;
  price: number;
  available: boolean;
  coverUrl: string;
  publishedDate: string;
}

const BooksPage = () => {
  const sampleBooks: Book[] = [
    {
      id: "1",
      title: "The Great Adventure",
      titleAr: "المغامرة العظيمة",
      author: "John Smith",
      authorAr: "جون سميث",
      genre: "Fiction",
      genreAr: "خيال",
      rating: 4.5,
      price: 29.99,
      available: true,
      coverUrl: "/api/placeholder/200/300",
      publishedDate: "2024-01-15"
    },
    {
      id: "2",
      title: "Science of Tomorrow",
      titleAr: "علوم المستقبل",
      author: "Jane Doe",
      authorAr: "جين دو",
      genre: "Non-Fiction",
      genreAr: "غير خيالي",
      rating: 4.8,
      price: 34.99,
      available: true,
      coverUrl: "/api/placeholder/200/300",
      publishedDate: "2024-01-10"
    },
  ];

  const [books, setBooks] = useState<Book[]>(sampleBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"title" | "price" | "rating">("title");

  const genres = [
    { en: "Fiction", ar: "خيال" },
    { en: "Non-Fiction", ar: "غير خيالي" },
    { en: "Science Fiction", ar: "خيال علمي" },
    { en: "Mystery", ar: "غموض" },
    { en: "Biography", ar: "سيرة ذاتية" }
  ];

  const translations = {
    booksCatalog: "فهرس الكتب",
    searchPlaceholder: "البحث عن الكتب أو المؤلفين...",
    allGenres: "جميع الأنواع",
    sortBy: "ترتيب حسب",
    title: "العنوان",
    price: "السعر",
    rating: "التقييم",
    by: "تأليف",
    addToCart: "أضف إلى السلة",
    outOfStock: "نفذت الكمية"
  };

  const filteredAndSortedBooks = books
    .filter(book => {
      const matchesSearch = 
        book.titleAr.includes(searchTerm) ||
        book.authorAr.includes(searchTerm) ||
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = genreFilter === "all" || book.genre === genreFilter;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.titleAr.localeCompare(b.titleAr, 'ar');
      }
    });

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`text-sm ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
        <span className="mr-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6 text-right bg-gray-50 min-h-screen" dir="rtl">
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl font-bold">{translations.booksCatalog}</h1>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={translations.searchPlaceholder}
                className="pr-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={genreFilter} onValueChange={setGenreFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder={translations.allGenres} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{translations.allGenres}</SelectItem>
                {genres.map(genre => (
                  <SelectItem key={genre.en} value={genre.en}>{genre.ar}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:w-[180px]">
                  <SortDesc className="ml-2 h-4 w-4" />
                  {translations.sortBy}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortBy("title")}>
                  {translations.title}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("price")}>
                  {translations.price}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("rating")}>
                  {translations.rating}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredAndSortedBooks.map((book) => (
              <Card key={book.id} className={viewMode === "list" ? "flex flex-row" : ""}>
                <div className={`${viewMode === "list" ? "w-48 p-4" : "p-4"}`}>
                  <img
                    src={book.coverUrl}
                    alt={book.titleAr}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 p-4">
                  <h3 className="font-semibold text-lg mb-2">{book.titleAr}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {translations.by} {book.authorAr}
                  </p>
                  <Badge className="mb-2">{book.genreAr}</Badge>
                  <div className="mt-2">
                    <StarRating rating={book.rating} />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold text-lg">{book.price} ر.س</span>
                    <Button variant={book.available ? "default" : "secondary"}>
                      {book.available ? translations.addToCart : translations.outOfStock}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
  );
};

export default BooksPage;