import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-primary py-12 md:py-16" id="schedule">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary-foreground mb-4">
          Schedule Your FREE Crawl Space Inspection in Nashville, Tennessee
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Homeowners in the Nashville area can depend on Crawl Space Brothers for all of their crawl space waterproofing and encapsulation needs. If you think you have a problem with your crawl space, reach out to our office today.
        </p>
        <a
          href="tel:+16154362325"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold text-xl px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors shadow-lg"
        >
          <Phone className="w-6 h-6" />
          (629) 249-8519
        </a>
        <p className="text-primary-foreground/70 text-sm mt-3">
          Call us today for service to your home in Nashville, Tennessee and the surrounding areas.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
