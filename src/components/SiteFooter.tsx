import { Phone, MapPin, Facebook, Youtube, Instagram } from "lucide-react";

const serviceLinks = [
  "Encapsulation", "Waterproofing", "Dehumidifier", "Vapor Barrier",
  "Drainage System", "Sump Pump", "French Drain", "Free Inspection",
  "Basement Waterproofing", "Crawl Space Repair", "Structural Repair",
  "Spray Foam Insulation", "Moisture Remediation",
];

const locationLinks = [
  "Charlotte NC", "Nashville TN", "Raleigh NC", "Greensboro NC",
  "Asheville NC", "Greenville SC", "Columbia SC", "Washington DC",
  "Arlington VA", "Laurel MD", "Rockville MD",
];

const SiteFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-extrabold text-primary mb-4">
              CRAWL SPACE BROTHERS
            </h3>
            <a
              href="tel:+16154362325"
              className="flex items-center gap-2 text-accent font-heading font-bold text-lg mb-3 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              (615) 436-2325
            </a>
            <p className="text-sm text-secondary-foreground/60 mb-1">Call Us Today!</p>
            <p className="flex items-start gap-2 text-sm text-secondary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              5233 Harding Pl Suite 5243, Nashville, TN 37217
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-secondary-foreground/50 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/50 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/50 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-1.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Locations</h4>
            <ul className="space-y-1.5">
              {locationLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-4 text-center text-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} CRAWL SPACE BROTHERS INC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
