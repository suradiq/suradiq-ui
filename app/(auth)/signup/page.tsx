"use client";

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignup } from '@/hooks/useSignup';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { formData, message, isLoading, handleChange, handleSubmit } = useSignup();

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-50 items-center justify-center">
        <img
          src="/placeholder.jpg"
          alt="Reading illustration"
          className="w-full h-full object-fill"
        />
      </div>

      {/* Right side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">إنشاء حساب جديد</h2>
            <p className="mt-2 text-gray-600">انضم إلى مجتمع القراء اليوم</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="firstName">الاسم الأول</Label>
                <Input
                  id="firstName"
                  type="text"
                  className="mt-1"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="lastName">الاسم الأخير</Label>
                <Input
                  id="lastName"
                  type="text"
                  className="mt-1"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="mt-1"
                dir="ltr"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password">كلمة المرور</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pr-10"
                  dir="ltr"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-primary border-gray-300 rounded"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <Label htmlFor="terms" className="mr-2">
                أوافق على{' '}
                <Link href="/terms" className="text-primary hover:text-primary/90">
                  الشروط والأحكام
                </Link>
              </Label>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'جاري التسجيل...' : 'إنشاء حساب'}
            </Button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              لديك حساب بالفعل؟{' '}
              <Link href="/login" className="text-primary hover:text-primary/90 font-semibold">
                تسجيل الدخول
              </Link>
            </p>

            {/* Display message */}
            {message && (
              <p className="text-center text-sm text-gray-700">{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;