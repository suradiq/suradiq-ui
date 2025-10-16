import localFont from 'next/font/local';
import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';

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
  title: "Suradiq",
  description: "Suradiq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${notoKufiArabic.variable} font-sans`}
      >

        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
