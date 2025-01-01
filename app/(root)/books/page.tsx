"use client"
import React, { useState } from 'react';
import { BookOpen, Search, SlidersHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BooksPage = () => {
  const [books] = useState([
    {
      id: 1,
      title: "١٩٨٤",
      author: "جورج أورويل",
      price: 45,
      category: "رواية",
      language: "العربية",
      condition: "جديد",
      coverImg: "/api/placeholder/200/300"
    },
    {
      id: 2,
      title: "مئة عام من العزلة",
      author: "غابرييل غارسيا ماركيز",
      price: 50,
      category: "رواية",
      language: "العربية",
      condition: "مستعمل",
      coverImg: "/api/placeholder/200/300"
    }
  ]);

  const [filters, setFilters] = useState({
    category: 'all',
    language: 'all',
    condition: 'all',
    sort: 'newest'
  });

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="flex flex-col gap-6">
        {/* Search and Filter Header */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث عن كتاب..."
              className="w-full py-2 pr-10 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              dir="rtl"
            />
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <Select
              value={filters.category}
              onValueChange={(value) => setFilters({...filters, category: value})}
            >
              <SelectTrigger className="w-32">
                <SelectValue placeholder="التصنيف" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="novel">رواية</SelectItem>
                <SelectItem value="science">علوم</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.sort}
              onValueChange={(value) => setFilters({...filters, sort: value})}
            >
              <SelectTrigger className="w-32">
                <SelectValue placeholder="الترتيب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">الأحدث</SelectItem>
                <SelectItem value="price-asc">السعر: الأقل</SelectItem>
                <SelectItem value="price-desc">السعر: الأعلى</SelectItem>
              </SelectContent>
            </Select>

            <button className="p-2 border rounded-lg">
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="flex flex-col">
              <CardHeader className="p-0">
              <div className="w-full h-full bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                    <BookOpen className="w-1/3 h-1/3 text-gray-400" />
                  </div>
              </CardHeader>
              <CardContent className="flex-1 p-4">
                <CardTitle className="text-lg mb-2">{book.title}</CardTitle>
                <p className="text-gray-600 text-sm">{book.author}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {book.category}
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {book.condition}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <div className="flex justify-between items-center w-full">
                  <span className="font-bold">{book.price} ر.س</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    شراء
                  </button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;