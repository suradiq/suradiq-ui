import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-teal-500" />
      
      {/* Content */}
      <Card className="relative border-none rounded-none bg-transparent">
        <CardContent className="container mx-auto px-6 py-16">
          <div className="text-center space-y-6 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              هل أنتم مستعدون لبدء شراء وبيع الكتب؟
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              انضموا إلى آلاف عشاق الكتب على منصتنا. ابدأوا بعرض كتبكم للبيع أو اكتشاف كتب جديدة اليوم!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-lg font-semibold bg-white hover:bg-white/90 text-blue-500"
              >
                سجل الآن مجاناً
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-lg font-semibold bg-white hover:bg-white/90 text-blue-500"
                asChild
              >
                <a href="">
                  تعرف على المزيد
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CtaSection;