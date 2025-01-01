import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const TestimonialCard = ({ testimonial }) => (
  <Card className="relative transition-all hover:shadow-lg">
    <CardContent className="pt-6">
      <Quote className="absolute top-6 right-6 h-8 w-8 text-muted-foreground opacity-20" />
      <p className="text-lg text-muted-foreground leading-relaxed mb-6 pr-12">
        {testimonial.quote}
      </p>
    </CardContent>
    <CardFooter>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
        </Avatar>
        <div className="text-right">
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </CardFooter>
  </Card>
);

const TestimonialSection = () => {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            آراء مستخدمينا الكرام
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            لا تصدقنا على كلامنا فقط، إليك ما يقوله مستخدمونا عن تجربتهم معنا!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;