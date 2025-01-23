// components/Footer.tsx
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-blue-500 to-teal-500 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-3">سُرادق</h3>
            <p className="text-sm">منصة اجتماعية تجمع محبي القراءة لتبادل الخبرات و مراجعات الكتب، مع إمكانية البيع و الشراء بين الأعضاء. توفر نوادي قراءة، تتبع للقراءات</p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">روابط</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:underline">عن الشركة</Link></li>
              <li><Link href="/terms" className="hover:underline">الشروط والأحكام</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">سياسة الخصوصية</Link></li>
              <li><Link href="/donation" className="hover:underline">ساهم معنا</Link></li>
              <li><Link href="/contact" className="hover:underline">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">تابعنا</h4>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
                <Facebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                <Twitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500">
                <Instagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-6 border-t border-white pt-4 text-center text-sm">
          <p>© 2024 منصة سُرادق. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
