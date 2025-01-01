"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/data/faq";

const FAQSection = () => {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            إذا كان لديك أي استفسار، هنا تجد إجابات على أكثر الأسئلة تكرارًا.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible dir="rtl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-right text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;