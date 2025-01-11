"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'عن المنصة', href: '/about' },
    { name: 'اتصل بنا', href: '/contact'}
  ];

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-lg hover:text-lightGray transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button className='text-charcoalBlack' variant="outline" size="sm">
              تسجيل الدخول
            </Button>
            <Button size="sm">
              إنشاء حساب
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-10 w-10" />
              ) : (
                <Menu className="h-10 w-10" />
              )}
            </Button>
          </div>
        </div>
      </div>

        {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full justify-center">
                تسجيل الدخول
              </Button>
              <Button className="w-full justify-center">
                إنشاء حساب
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
