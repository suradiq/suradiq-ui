"use client";
import React, { useState } from 'react';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// تعريف نوع البيانات للكتاب
interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  category: string;
  coverImage: string;
}

const BookManagement = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: '1',
      title: 'رحلة ابن بطوطة',
      author: 'ابن بطوطة',
      description: 'كتاب في أدب الرحلات',
      price: 50,
      category: 'أدب',
      coverImage: '/api/placeholder/200/300',
    },
  ]);
  
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [formData, setFormData] = useState<Omit<Book, 'id'>>({
    title: '',
    author: '',
    description: '',
    price: 0,
    category: '',
    coverImage: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBook) {
      // تحديث كتاب موجود
      setBooks(books.map(book => 
        book.id === selectedBook.id ? { ...formData, id: book.id } : book
      ));
    } else {
      // إضافة كتاب جديد
      setBooks([...books, { ...formData, id: Date.now().toString() }]);
    }
    handleCloseDialog();
  };

  const handleEdit = (book: Book) => {
    setSelectedBook(book);
    setFormData(book);
    setIsAddDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleCloseDialog = () => {
    setIsAddDialogOpen(false);
    setSelectedBook(null);
    setFormData({
      title: '',
      author: '',
      description: '',
      price: 0,
      category: '',
      coverImage: '',
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة الكتب</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <PlusCircle className="w-4 h-4" />
              إضافة كتاب جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] rtl">
            <DialogHeader>
              <DialogTitle>
                {selectedBook ? 'تعديل كتاب' : 'إضافة كتاب جديد'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">عنوان الكتاب</label>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">المؤلف</label>
                <Input
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">الوصف</label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">السعر</label>
                <Input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">التصنيف</label>
                <Input
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">رابط صورة الغلاف</label>
                <Input
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="submit" className="gap-2">
                  {selectedBook ? 'تحديث' : 'إضافة'}
                </Button>
                <Button type="button" variant="outline" onClick={handleCloseDialog}>
                  إلغاء
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>الغلاف</TableHead>
            <TableHead>العنوان</TableHead>
            <TableHead>المؤلف</TableHead>
            <TableHead>السعر</TableHead>
            <TableHead>التصنيف</TableHead>
            <TableHead>الإجراءات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-16 h-24 object-cover rounded"
                />
              </TableCell>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.price} ر.س</TableCell>
              <TableCell>{book.category}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(book)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(book.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookManagement;