"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Languages, Menu, UserRound } from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsLangMenuOpen(false); // Close language menu when opening user menu
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
    setIsUserMenuOpen(false); // Close user menu when opening language menu
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-gradient-to-l from-blue-500 to-teal-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-3xl font-bold text-white transition duration-200">
            سُرادق
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-5">
            <Link href="/" className="text-white text-lg hover:text-lightGray transition duration-200">الرئيسية</Link>
            <Link href="/about" className="text-white text-lg hover:text-lightGray transition duration-200">عنا</Link>
            <Link href="/contact" className="text-white text-lg hover:text-lightGray transition duration-200">اتصل بنا</Link>
          </div>

          <div className="flex items-center justify-between gap-2 relative">
      {/* User Account */}
      <div className="relative">
        <button
          onClick={toggleUserMenu}
          className="text-white text-lg hover:text-lightGray transition duration-200 p-2"
        >
          <UserRound className="size-5" />
        </button>
        {isUserMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
            <Link 
              href="/profile" 
              className="block px-4 py-2 text-gray-800 hover:bg-lightGray hover:text-white transition duration-200"
            >
              الملف الشخصي
            </Link>
            <Link 
              href="/logout" 
              className="block px-4 py-2 text-gray-800 hover:bg-lightGray hover:text-white transition duration-200"
            >
              تسجيل الخروج
            </Link>
          </div>
        )}
      </div>

      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={toggleLangMenu}
          className="text-white text-lg hover:text-lightGray transition duration-200 p-2"
        >
          <Languages className="size-5" />
        </button>
        {isLangMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
            <Link 
              href="#" 
              className="block px-4 py-2 text-gray-800 hover:bg-lightGray hover:text-white transition duration-200"
            >
              العربية
            </Link>
            <Link 
              href="#" 
              className="block px-4 py-2 text-gray-800 hover:bg-lightGray hover:text-white transition duration-200"
            >
              English
            </Link>
          </div>
        )}
      </div>
    </div>

          {/* زر القائمة المنسدلة للأجهزة المحمولة */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white text-2xl hover:text-lightGray">
              <Menu className='size-5' />
            </button>
          </div>
        </div>

        {/* قائمة التنقل المحمولة (منسدلة) */}
        <div className={`md:hidden bg-white shadow-lg mt-4 rounded-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-lightGray hover:text-white transition duration-200">الرئيسية</Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-lightGray hover:text-white transition duration-200">عنا</Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-lightGray hover:text-white transition duration-200">اتصل بنا</Link>
          <Link href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-lightGray hover:text-white transition duration-200">تسجيل الخروج</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
