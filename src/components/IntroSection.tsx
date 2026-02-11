import { ShieldCheck } from "lucide-react";


const services = [
  "Crawl Space Encapsulation",
  "Crawl Space Vapor Barriers",
  "Crawl Space Insulation",
  "Crawl Space Mold Removal",
  "Crawl Space Waterproofing",
  "Crawl Space Dehumidifiers",
  "Crawl Space Sump Pumps",
  "Crawl Space Vent Insulation",
  "Crawl Space Repair",
  "Crawl Space Moisture Remediation",
  "Crawl Space Drainage Systems",
  "FREE Inspections",
];

const IntroSection = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="flex-1">
            <p className="text-primary font-heading font-bold text-sm uppercase tracking-wider mb-2">
              Nashville TN Top Crawl Space Repair Contractors
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 leading-tight">
              Crawl Space Encapsulation, Waterproofing, Repair, Mold Removal, And More!
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The crawl space is an essential part of your home. That's why you need it to be sturdy and strong. But often, homeowners neglect their crawl spaces and suffer the consequences—water damage, mold, and insect infestation that affect the entire home and indoor air quality.
              </p>
              <p>
                <a href="#" className="text-accent font-semibold hover:underline">
                Nashville Home Improvements
              </a>{" "}
              is proud to be the market leader in protecting and repairing Nashville homeowners' crawl spaces. Our team of certified technicians will carefully investigate any problem in your crawl space in order to find the right solution for your home. We provide a{" "}
              <a href="#" className="text-accent font-semibold hover:underline">
                5 Star Experience
              </a>
              , giving you peace of mind from knowing that your home is being treated the right way.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mt-10 mb-6">
              Our Comprehensive Crawl Space Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((service) => (
                <a
                  key={service}
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-accent transition-colors" />
                  <span className="text-sm font-medium">{service}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;
