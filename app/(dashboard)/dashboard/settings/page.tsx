// app/(dashboard)/settings/page.tsx
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  CreditCard, 
  HelpCircle,
  ChevronLeft
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">الإعدادات</h1>

      {/* الملف الشخصي */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>الملف الشخصي</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">الصورة الشخصية</h3>
                <p className="text-sm text-gray-500">تغيير صورة ملفك الشخصي</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <Button variant="outline">تغيير</Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">الاسم</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md"
                  placeholder="أحمد محمد"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  className="w-full p-2 border rounded-md"
                  placeholder="ahmed@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">رقم الهاتف</label>
                <input 
                  type="tel" 
                  className="w-full p-2 border rounded-md"
                  placeholder="+966 50 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">المدينة</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md"
                  placeholder="الرياض"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* الإشعارات */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            <span>الإشعارات</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">إشعارات البريد الإلكتروني</h3>
                <p className="text-sm text-gray-500">استلام إشعارات عبر البريد الإلكتروني</p>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">إشعارات الطلبات</h3>
                <p className="text-sm text-gray-500">إشعارات عند وجود طلبات جديدة</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">إشعارات الرسائل</h3>
                <p className="text-sm text-gray-500">إشعارات عند استلام رسائل جديدة</p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* الخصوصية والأمان */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>الخصوصية والأمان</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">تغيير كلمة المرور</h3>
              <div className="space-y-4">
                <input 
                  type="password" 
                  className="w-full p-2 border rounded-md"
                  placeholder="كلمة المرور الحالية"
                />
                <input 
                  type="password" 
                  className="w-full p-2 border rounded-md"
                  placeholder="كلمة المرور الجديدة"
                />
                <input 
                  type="password" 
                  className="w-full p-2 border rounded-md"
                  placeholder="تأكيد كلمة المرور الجديدة"
                />
                <Button>تحديث كلمة المرور</Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">المصادقة الثنائية</h3>
                <p className="text-sm text-gray-500">تفعيل المصادقة الثنائية لحماية حسابك</p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* الدفع */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            <span>وسائل الدفع</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-gray-200 rounded"></div>
                <div>
                  <h3 className="font-medium">**** **** **** 4242</h3>
                  <p className="text-sm text-gray-500">تنتهي في 12/24</p>
                </div>
              </div>
              <Button variant="outline">تعديل</Button>
            </div>
            <Button variant="outline" className="w-full">
              إضافة بطاقة جديدة
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* اللغة والمنطقة */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span>اللغة والمنطقة</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">اللغة</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="اختر اللغة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">المنطقة الزمنية</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المنطقة الزمنية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asia-riyadh">توقيت الرياض (GMT+3)</SelectItem>
                  <SelectItem value="asia-dubai">توقيت دبي (GMT+4)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* المساعدة والدعم */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            <span>المساعدة والدعم</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-between">
              <span>مركز المساعدة</span>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <span>تواصل مع الدعم</span>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <span>الأسئلة الشائعة</span>
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* حذف الحساب */}
      <Card className="mb-6 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600">حذف الحساب</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            عند حذف حسابك، سيتم حذف جميع بياناتك بشكل نهائي ولا يمكن استعادتها.
          </p>
          <Button variant="destructive">
            حذف الحساب
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}