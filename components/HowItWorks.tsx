import { Card, CardContent } from "@/components/ui/card";
import { steps } from "@/data/howItWorks";
import * as Icons from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            كيف تبدأ؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            انضم لمجتمع القراء في خطوات بسيطة
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = Icons[step.icon];
            return (
              <Card key={step.id} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-full" />
                <CardContent className="pt-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto flex items-center justify-center text-primary mb-4">
                    {Icon && <Icon className="w-8 h-8" />}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;