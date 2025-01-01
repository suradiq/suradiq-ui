import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {

  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/hero.jpg)' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <Card className="w-full max-w-2xl bg-transparent border-none shadow-none">
          <CardContent className="space-y-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              اكتشف كتابك المفضل التالي
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium">
              تصفح مجموعتنا الواسعة من الكتب، من الكلاسيكيات الخالدة إلى أحدث الكتب الأكثر مبيعًا. ابدأ رحلتك هنا!
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <div className="relative w-full sm:w-96">
                <Input
                  name="search"
                  dir="rtl"
                  className="w-full px-6 py-6 bg-white/95 text-gray-900 placeholder:text-gray-500 border-0 focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="ابحث عن الكتب أو المؤلفين أو الأنواع..."
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full sm:w-auto py-6 px-8 text-lg font-semibold"
              >
                <Search className="ml-2 h-5 w-5" />
                بحث
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;