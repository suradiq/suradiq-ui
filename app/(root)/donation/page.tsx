import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, AlertCircle, Users, GiftIcon, Book, BookOpen } from 'lucide-react';

const DonationPage = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <BookOpen className="w-16 h-16 text-emerald-600 mx-auto" />
          <h1 className="text-4xl font-bold text-gray-900">ادعم مجتمع الكتب الجزائري</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ساهم في تطوير منصتنا لمحبي الكتب في الجزائر. اختر طريقة الدعم المناسبة لك.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-700">
                <Book className="w-6 h-6" />
                تبرع بالكتب
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-emerald-900">
                تبرع بكتبك المستعملة لمكتباتنا المجتمعية. سنضمن وصولها لمن يحتاجها.
              </p>
              <button className="mt-4 w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700">
                اعرف المزيد
              </button>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <GiftIcon className="w-6 h-6" />
                دعم مادي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-900">
                ساهم في تطوير المنصة وتوسيع نشاطاتنا الثقافية في مختلف ولايات الوطن.
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                ادعم الآن
              </button>
            </CardContent>
          </Card>

          <Card className="bg-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <Users className="w-6 h-6" />
                كن متطوعاً
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-900">
                شارك في تنظيم الفعاليات الأدبية ونوادي القراءة في منطقتك.
              </p>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                انضم إلينا
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Financial Support Section */}

        {/* Main Content */}
        <Tabs defaultValue="bank-transfer" className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
            <TabsTrigger value="bank-transfer">تحويل بنكي</TabsTrigger>
            <TabsTrigger value="postal">حساب بريدي</TabsTrigger>
          </TabsList>

          <TabsContent value="bank-transfer">
            <div className="grid gap-6 mt-6">
              {/* BNA */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <img src="bna.png" alt="شعار البنك الوطني الجزائري" className="w-8 h-8" />
                    البنك الوطني الجزائري
                  </CardTitle>
                  <CardDescription>أحد أكبر البنوك العمومية في الجزائر</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-mono">007 00001 0100000123 45</span>
                      <button className="text-blue-600 hover:text-blue-800">
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* BEA */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <img src="/bea.png" alt="شعار بنك الجزائر الخارجي" className="w-8 h-8" />
                    بنك الجزائر الخارجي
                  </CardTitle>
                  <CardDescription>متخصص في عمليات التجارة الخارجية</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-mono">002 00002 0200000456 78</span>
                      <button className="text-blue-600 hover:text-blue-800">
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* BADR */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <img src="/badr.png" alt="شعار بنك الفلاحة والتنمية الريفية" className="w-8 h-8" />
                    بنك الفلاحة والتنمية الريفية
                  </CardTitle>
                  <CardDescription>دعم التنمية الزراعية والريفية</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-mono">003 00003 0300000789 12</span>
                      <button className="text-blue-600 hover:text-blue-800">
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="postal">
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img src="/poste-algerie.svg" alt="شعار بريد الجزائر" className="w-8 h-8" />
                  الحساب الجاري البريدي
                </CardTitle>
                <CardDescription>حساب بريد الجزائر</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-mono">00100 0000000123456 78</span>
                    <button className="text-blue-600 hover:text-blue-800">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Impact Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">تأثير دعمك</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">+5000</div>
              <div className="text-gray-600">كتاب تم تداوله</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">48</div>
              <div className="text-gray-600">ولاية نشطة</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">+100</div>
              <div className="text-gray-600">نادي قراءة</div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 p-4 rounded-lg flex gap-3">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div className="text-sm text-blue-700">
            <p className="font-semibold">معاً نبني مجتمعاً قارئاً:</p>
            <p>
              كل دعم، مهما كان بسيطاً، يساهم في توسيع مجتمعنا وإيصال الكتب لمزيد من القراء في الجزائر.
              للمساهمات المادية فوق 1000 دج، يمكنك الحصول على شهادة تبرع.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;