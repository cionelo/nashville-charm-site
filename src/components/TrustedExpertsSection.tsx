import { Phone, Clock, Star, DollarSign, ShieldCheck } from "lucide-react";


const highlights = [
  { icon: ShieldCheck, text: "Zero Contact Service" },
  { icon: Clock, text: "OPEN • 8AM-6PM • 7 Days a Week" },
  { icon: Star, text: "Recommended By Our Local Realtor® Partners" },
  { icon: DollarSign, text: "FREE Estimates" },
];

const TrustedExpertsSection = () => {
  return (
    <section className="bg-section-alt py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-lg font-heading font-semibold text-primary uppercase tracking-wider mb-2">
            Crawl Space Repair Experts Trusted in Middle Tennessee
          </h3>
          <a
            href="tel:+14053349493"
            className="inline-block text-3xl md:text-4xl font-heading font-extrabold text-accent hover:text-primary transition-colors mb-8"
          >
            <Phone className="inline w-7 h-7 mr-2 -mt-1" />
            (405) 334-9493
          </a>
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-section-alt-foreground">
            {highlights.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-2 bg-background rounded-lg px-4 py-3 shadow-sm border border-border"
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustedExpertsSection;
