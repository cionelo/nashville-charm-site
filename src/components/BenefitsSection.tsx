import { CheckCircle } from "lucide-react";

const benefits = [
  "Decreasing your entire home's humidity levels",
  "Making your family's breathing air healthier and cleaner",
  "Protecting the integrity of your home's crawl space",
  "Increased storage space",
  "Extending the life of plumbing pipes and HVAC ductwork",
  "Raising your home's resale value",
];

const BenefitsSection = () => {
  return (
    <section className="bg-section-alt py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            The Benefits of Crawl Space Waterproofing
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            In Nashville TN, many homes are built on red clay. When it rains, the water will seep down into the clay and infiltrate your home's crawl spaces if there are any cracks, gaps, or weak areas. This can lead to flooding, mold, and pests.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            <a href="#" className="text-accent font-semibold hover:underline">
              Waterproofing your crawl space
            </a>{" "}
            is the perfect way to avoid all of these problems. When you call Nashville Home Improvements to waterproof your crawl space, our certified technicians will review the solution which best addresses the challenges facing your crawlspace.
          </p>
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">
            Key Benefits Include:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 bg-background rounded-lg p-4 shadow-sm border border-border">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
