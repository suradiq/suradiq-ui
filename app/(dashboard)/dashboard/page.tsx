// types.ts
interface Stats {
    booksListed: number;
    activeOrders: number;
    newMessages: number;
    totalFollowers: number;
  }
  
  interface RecentActivity {
    id: string;
    type: 'book_added' | 'order_received' | 'message_received';
    message: string;
    timestamp: string;
  }
  
  // app/dashboard/page.tsx
  import React from 'react';
  import { 
    BarChart, 
    BookOpen, 
    MessageCircle, 
    Package, 
    Plus, 
    Settings, 
    Users 
  } from 'lucide-react';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQ';
import CtaSection from '@/components/CTA';
import TestimonialSection from '@/components/Testimonial';
import FeaturesSection from '@/components/Features';
import HowItWorksSection from '@/components/HowItWorks';
import LatestAddedBooks from '@/components/LatestAddedBooks';
import SocialProofSection from '@/components/SocialProof';
  
  const Dashboard: React.FC = () => {
    const stats: Stats = {
      booksListed: 12,
      activeOrders: 3,
      newMessages: 5,
      totalFollowers: 48
    };
  
    const recentActivities: RecentActivity[] = [
      {
        id: '1',
        type: 'book_added',
        message: 'تم إضافة كتاب جديد',
        timestamp: 'منذ 3 ساعات'
      },
      {
        id: '2',
        type: 'order_received',
        message: 'طلب شراء جديد',
        timestamp: 'منذ 5 ساعات'
      },
      {
        id: '3',
        type: 'message_received',
        message: 'رسالة جديدة من أحمد',
        timestamp: 'منذ 6 ساعات'
      }
    ];
  
    const QuickStatCard: React.FC<{
      icon: React.ReactNode;
      bgColor: string;
      iconColor: string;
      label: string;
      value: number;
    }> = ({ icon, bgColor, iconColor, label, value }) => (
      <Card>
        <CardContent className="flex items-center p-6">
          <div className={`${bgColor} p-3 rounded-full`}>
            <div className={iconColor}>{icon}</div>
          </div>
          <div className="mr-4 text-right">
            <p className="text-sm text-gray-600">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        </CardContent>
      </Card>
    );
  
    const QuickActionButton: React.FC<{
      icon: React.ReactNode;
      label: string;
      iconColor: string;
      onClick?: () => void;
    }> = ({ icon, label, iconColor, onClick }) => (
      <button 
        onClick={onClick}
        className="flex flex-col items-center p-4 bg-white rounded-lg border hover:shadow-md transition"
      >
        <div className={`h-8 w-8 mb-2 ${iconColor}`}>{icon}</div>
        <span className="text-sm">{label}</span>
      </button>
    );
  
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">مرحباً، عبد الرحمن</h1>
          <p className="text-gray-600">نظرة عامة على نشاطك في المنصة</p>
        </div>
  
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <QuickStatCard
            icon={<BookOpen className="h-6 w-6" />}
            bgColor="bg-blue-100"
            iconColor="text-blue-600"
            label="الكتب المعروضة"
            value={stats.booksListed}
          />
          <QuickStatCard
            icon={<Package className="h-6 w-6" />}
            bgColor="bg-green-100"
            iconColor="text-green-600"
            label="الطلبات النشطة"
            value={stats.activeOrders}
          />
          <QuickStatCard
            icon={<MessageCircle className="h-6 w-6" />}
            bgColor="bg-yellow-100"
            iconColor="text-yellow-600"
            label="رسائل جديدة"
            value={stats.newMessages}
          />
          <QuickStatCard
            icon={<Users className="h-6 w-6" />}
            bgColor="bg-purple-100"
            iconColor="text-purple-600"
            label="المتابعون"
            value={stats.totalFollowers}
          />
        </div>
  
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">إجراءات سريعة</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickActionButton
              icon={<Plus />}
              label="إضافة كتاب"
              iconColor="text-blue-600"
            />
            <QuickActionButton
              icon={<MessageCircle />}
              label="الرسائل"
              iconColor="text-green-600"
            />
            <QuickActionButton
              icon={<BarChart />}
              label="الإحصائيات"
              iconColor="text-yellow-600"
            />
            <QuickActionButton
              icon={<Settings />}
              label="الإعدادات"
              iconColor="text-purple-600"
            />
          </div>
        </div>
  
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>النشاطات الأخيرة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="mr-3">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default Dashboard;