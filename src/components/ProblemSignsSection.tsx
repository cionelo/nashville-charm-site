import { AlertTriangle } from "lucide-react";

const signs = [
  "Moisture and mold in your home or crawl space",
  "A stale or musty scent in your house",
  "Moisture on your HVAC ductwork",
  "Cupped hardwood flooring",
  "Insect infestations",
];

const ProblemSignsSection = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            How to Know If You Have A Crawl Space Problem
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Are you afraid your Nashville home might have a crawl space problem? There are a few simple things you can check to find out if your crawl space needs repair:
          </p>
          <ul className="space-y-3 mb-8">
            {signs.map((sign) => (
              <li key={sign} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-medium">{sign}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            At{" "}
            <a href="#" className="text-accent font-semibold hover:underline">
              Nashville Home Improvements
            </a>
            , crawl space moisture removal and repair are our specialty. We have years of experience helping folks in Middle Tennessee find the right solution for their crawl space. When our skilled technicians come to inspect your home, their first goal is to identify the root cause of the problem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSignsSection;
