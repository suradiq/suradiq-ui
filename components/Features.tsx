import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";
import * as Icons from "lucide-react";


const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            لماذا تختار منصتنا؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم لك تجربة فريدة في بيع و شراء الكتب مع مجموعة من المميزات الحصرية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = Icons[feature.icon];
            return (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto flex items-center justify-center text-primary">
                  {Icon && <Icon className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;