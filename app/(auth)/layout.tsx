// app/(auth)/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";

const notoKufiArabic = localFont({
  src: [
    {
      path: '../fonts/NotoKufiArabic-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../fonts/NotoKufiArabic-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../fonts/NotoKufiArabic-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/NotoKufiArabic-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/NotoKufiArabic-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/NotoKufiArabic-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/NotoKufiArabic-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/NotoKufiArabic-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../fonts/NotoKufiArabic-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
  ],
  variable: '--font-noto-kufi-arabic'
})

export const metadata: Metadata = {
  title: "سُرادق",
  description: "منصة سُرادق",
  keywords: ["سُرادق", "تسجيل الدخول", "إنشاء حساب"],
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoKufiArabic.variable} font-sans`}>
        <div className="flex flex-col">

          {/* Main Content */}
          <main className="flex-grow flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="py-4 px-6 text-center text-sm text-gray-600">
            <div className="max-w-7xl mx-auto">
              <p>جميع الحقوق محفوظة © {new Date().getFullYear()} سُرادق</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}