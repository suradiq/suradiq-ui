import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { stats } from "@/data/socialProof";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => (
  <Card className="transition-all hover:shadow-lg">
    <CardHeader>
      <h3 className="text-3xl font-bold text-primary">{number}</h3>
    </CardHeader>
    <CardContent>
      <p className="text-lg text-muted-foreground">{label}</p>
    </CardContent>
  </Card>
);

const SocialProofSection = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            بعض الأرقام التي نفتخر بها
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            منصتنا ساعدت الآلاف في بيع وشراء الكتب، وتُظهر هذه الأرقام النجاح الكبير الذي حققناه معاً!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;