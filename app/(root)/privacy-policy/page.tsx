"use client"
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PrivacyPolicy = () => {
  const [openSections, setOpenSections] = React.useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const sections = [
    {
      title: "نظرة عامة على سياسة الخصوصية",
      content: `مرحباً بك في منصتنا. نحن نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. تشرح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند استخدام منصتنا لبيع وشراء الكتب والتفاعل مع مجتمع القراء.`
    },
    {
      title: "المعلومات التي نجمعها",
      content: `نجمع المعلومات التالية:
      • معلومات الحساب: الاسم، البريد الإلكتروني، رقم الهاتف، وعنوان الشحن
      • معلومات المعاملات: سجل المشتريات والمبيعات
      • المحتوى المنشور: المراجعات، التعليقات، والمنشورات
      • البيانات التقنية: عنوان IP، معلومات المتصفح، وسجلات النشاط`
    },
    {
      title: "كيفية استخدام معلوماتك",
      content: `نستخدم معلوماتك للأغراض التالية:
      • تسهيل عمليات البيع والشراء
      • تحسين تجربة المستخدم
      • التواصل معك بخصوص طلباتك ونشاطاتك
      • حماية أمن المنصة ومستخدميها
      • تطوير خدماتنا وتحسينها`
    },
    {
      title: "مشاركة المعلومات",
      content: `نشارك معلوماتك فقط في الحالات التالية:
      • مع البائعين والمشترين لإتمام المعاملات
      • مع مزودي خدمات الدفع والشحن
      • عند الضرورة القانونية
      • بموافقتك الصريحة`
    },
    {
      title: "حقوقك وخياراتك",
      content: `لديك الحق في:
      • الوصول إلى بياناتك الشخصية
      • تصحيح معلوماتك
      • حذف حسابك
      • تقييد استخدام بياناتك
      • طلب نسخة من بياناتك`
    },
    {
      title: "أمن البيانات",
      content: `نتخذ إجراءات أمنية صارمة لحماية بياناتك، تشمل:
      • التشفير المتقدم
      • المراقبة المستمرة
      • التحديثات الأمنية المنتظمة
      • التدريب المستمر لفريقنا`
    }
  ];

  return (
    <div className="p-6 bg-white" dir="rtl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">سياسة الخصوصية</h1>
      
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-6 py-4 text-right bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {section.title}
              </h2>
              {openSections.includes(index) ? (
                <ChevronUp className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              )}
            </button>
            
            {openSections.includes(index) && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-600 text-sm">
        آخر تحديث: {new Date().toLocaleDateString('ar-DZ')}
      </div>
    </div>
  );
};

export default PrivacyPolicy;