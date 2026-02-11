import { Star, ShieldCheck, DollarSign, Heart } from "lucide-react";

const guarantees = [
  {
    icon: Star,
    title: "5-Star Guarantee",
    text: "If you're not happy with our crawl space repair, we'll make it right – ASAP!",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Transferable Warranty",
    text: "If something goes wrong with a service that we provide, we will make sure it gets fixed quickly.",
  },
  {
    icon: DollarSign,
    title: "18-Month No Interest Offer",
    text: "Flexible financing options available to fit your budget.",
  },
  {
    icon: Heart,
    title: "Zero Contact Service",
    text: "Safe and convenient service options for your peace of mind.",
  },
];

const GuaranteesSection = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">
          Our Guarantees
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="text-center p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10"
            >
              <g.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-lg mb-2">{g.title}</h4>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
