import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar } from 'lucide-react';
import { books } from "@/data/books";

const LatestAddedBooks = () => {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">آخر الكتب المضافة</h2>
          <Badge variant="outline" className="text-base">
            عرض الكل
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="group hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-0">
                <div className="relative aspect-[1/1] overflow-hidden">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-1/3 h-1/3 text-gray-400" />
                  </div>
                  <Badge 
                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm"
                    variant="secondary"
                  >
                    {book.category}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    بواسطة {book.author}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {book.publishYear}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestAddedBooks;