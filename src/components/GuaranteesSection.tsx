import { Star, Heart } from "lucide-react";

const guarantees = [
  {
    icon: Star,
    title: "5-Star Guarantee",
    text: "If you're not happy with our crawl space repair, we'll make it right – ASAP!",
  },
  {
    icon: Heart,
    title: "Zero Contact Service",
    text: "Safe and convenient service options for your peace of mind.",
  },
];

const GuaranteesSection = () => {
  return (
    <section id="about-us" className="bg-secondary text-secondary-foreground py-12 md:py-16 scroll-mt-28">
      <div className="container mx-auto px-4">
        {/* Who We Are */}
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-6">
          Who We Are
        </h2>
        <p className="text-secondary-foreground/80 leading-relaxed max-w-3xl mx-auto text-center mb-12">
          At Nashville Home Improvements, we proudly serve homeowners across Tennessee with expert solutions to protect and enhance their homes. Our services include fencing, drainage systems, crawlspace encapsulations, mold remediation, foundation waterproofing, and custom carpentry. As a trusted local company, we're committed to delivering quality workmanship and reliable results that stand the test of time.
        </p>

        <h3 className="text-xl md:text-2xl font-heading font-bold text-center mb-10">
          Our Guarantees
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
