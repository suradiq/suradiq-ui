// app/(auth)/layout.tsx
import type { Metadata } from "next";
import "../../globals.css";
import localFont from "next/font/local";

import { 
  BookOpen, 
  MessageCircle, 
  Package, 
  Settings,
  Home 
} from 'lucide-react';
import Link from 'next/link';

interface SidebarLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}
const sidebarLinks: SidebarLink[] = [
  {
    label: 'الرئيسية',
    href: '/dashboard',
    icon: <Home className="w-5 h-5" />
  },
  {
    label: 'الكتب',
    href: '/dashboard/books',
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    label: 'الطلبات',
    href: '/dashboard/orders',
    icon: <Package className="w-5 h-5" />
  },
  {
    label: 'الرسائل',
    href: '/dashboard/messages',
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    label: 'الإعدادات',
    href: '/dashboard/settings',
    icon: <Settings className="w-5 h-5" />
  }
];

const notoKufiArabic = localFont({
  src: [
    {
      path: '../../fonts/NotoKufiArabic-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../fonts/NotoKufiArabic-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../fonts/NotoKufiArabic-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../fonts/NotoKufiArabic-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../fonts/NotoKufiArabic-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../fonts/NotoKufiArabic-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../fonts/NotoKufiArabic-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../fonts/NotoKufiArabic-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../fonts/NotoKufiArabic-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
  ],
  variable: '--font-noto-kufi-arabic'
})

export const metadata: Metadata = {
  title: "سُرادق",
  description: "منصة سُرادق",
  keywords: ["سُرادق"],
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoKufiArabic.variable} font-sans`}>
      <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">لوحة التحكم</h1>
        </div>
        <nav className="space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <span className="ml-3">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
      </body>
    </html>
  );
}