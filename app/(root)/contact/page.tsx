"use client"
// ContactPage.tsx
import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    
    setLoading(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            هل لديك سؤال أو ترغب في العمل معنا؟ نحن نحب أن نسمع منك.
            أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.
          </p>
        </div>

        {/* Contact Information Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="p-3 bg-blue-50 rounded-full ml-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">موقعنا</h3>
                <p className="text-gray-600">حي ديار الهناء، عين بودينار</p>
                <p className="text-gray-600">مستغانم، الجزائر</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="p-3 bg-blue-50 rounded-full ml-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">الهاتف</h3>
                <p className="text-gray-600">+213662370162</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="p-3 bg-blue-50 rounded-full ml-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">البريد الإلكتروني</h3>
                <p className="text-gray-600">contact@suradiq.com</p>
                <p className="text-gray-600">support@suradiq.com</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    الاسم
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="اسمك"
                    required
                    className="text-right"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="بريدك@example.com"
                    required
                    className="text-right"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  الموضوع
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="كيف يمكننا مساعدتك؟"
                  required
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  الرسالة
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا..."
                  rows={6}
                  required
                  className="text-right"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  'جاري الإرسال...'
                ) : (
                  <>
                    إرسال الرسالة
                    <Send className="mr-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}