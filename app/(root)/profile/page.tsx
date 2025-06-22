'use client'
import { UserRound, Book, BookOpen, Award, Edit2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useProfile } from '@/hooks/useProfile';

const ProfilePage = () => {

  const { profile, isLoading, error } = useProfile();

  if (isLoading) {
    return <div className="flex justify-center p-8">جاري التحميل...</div>;
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto p-6 bg-red-50 border border-red-200 rounded-lg shadow-sm my-8">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-red-800">خطأ في تحميل الملف الشخصي</h3>
        </div>
        <p className="mt-3 text-red-700">{error.message || "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى."}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
        >
          إعادة المحاولة
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Profile Image & Basic Info */}
        <div className="w-full md:w-1/3">
          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserRound className="w-16 h-16 text-gray-400" />
                </div>  
                <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
              <h2 className="mt-4 text-2xl font-bold">{`${profile?.first_name} ${profile?.last_name}`}</h2>
              <p className="text-gray-500">{`@${profile?.username}`}</p>
              {profile?.bio && (
  <p className="mt-2 text-gray-600">{profile.bio}</p>
)}
              
              <div className="mt-6 w-full grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h4 className="font-bold text-xl">156</h4>
                  <p className="text-gray-500 text-sm">كتب</p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xl">23k</h4>
                  <p className="text-gray-500 text-sm">متابعون</p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xl">891</h4>
                  <p className="text-gray-500 text-sm">يتابع</p>
                </div>
              </div>
              
              <Button className="mt-6 w-full">تعديل الملف الشخصي</Button>
            </div>
          </Card>
        </div>

        {/* Reading Stats & Goals */}
        <div className="w-full md:w-2/3 space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">إحصائيات القراءة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-2">هدف القراءة السنوي</p>
                <div className="flex items-center gap-4 mb-2">
                  <BookOpen className="text-primary" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">32/50 كتاب</span>
                      <span className="text-sm text-gray-500">64%</span>
                    </div>
                    <Progress value={64} className="h-2" />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-2">صفحات هذا الشهر</p>
                <div className="flex items-center gap-4">
                  <Book className="text-primary" />
                  <span className="text-2xl font-bold">1,256</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Currently Reading */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">أقرأ حالياً</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-24 bg-gray-200 rounded"></div>
                <div>
                  <h4 className="font-semibold">ألف شمس مشرقة</h4>
                  <p className="text-gray-500 text-sm">خالد حسيني</p>
                  <div className="mt-2">
                    <Progress value={45} className="h-1 w-24" />
                    <span className="text-xs text-gray-500">45%</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-16 h-24 bg-gray-200 rounded"></div>
                <div>
                  <h4 className="font-semibold">عداء الطائرة الورقية</h4>
                  <p className="text-gray-500 text-sm">خالد حسيني</p>
                  <div className="mt-2">
                    <Progress value={75} className="h-1 w-24" />
                    <span className="text-xs text-gray-500">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">النشاط الأخير</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-4 pb-4 border-b last:border-0">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">أكمل قراءة كتاب مئة عام من العزلة</p>
                  <p className="text-gray-500 text-sm">منذ 3 ساعات</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;