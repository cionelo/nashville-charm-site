import { Phone, MapPin, Facebook, Youtube, Instagram } from "lucide-react";
import nhiLogo from "@/assets/nhi-logo.png";

const serviceLinks = [
  "Encapsulation", "Waterproofing", "Dehumidifier", "Vapor Barrier",
  "Drainage System", "Sump Pump", "French Drain", "Free Inspection",
  "Basement Waterproofing", "Crawl Space Repair", "Structural Repair",
  "Spray Foam Insulation", "Moisture Remediation",
];

const locationLinks: string[] = [];

const SiteFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <img src={nhiLogo} alt="Nashville Home Improvements" className="h-10 w-10 rounded-full" />
              <h3 className="font-heading text-xl font-extrabold text-primary">
                NASHVILLE HOME IMPROVEMENTS
              </h3>
            </a>
            <a
              href="tel:+14053349493"
              className="flex items-center gap-2 text-accent font-heading font-bold text-lg mb-3 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              (405) 334-9493
            </a>
            <p className="text-sm text-secondary-foreground/60 mb-1">Call Us Today!</p>
            <p className="flex items-start gap-2 text-sm text-secondary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              710 Cleo Miller Dr, East Nashville, TN 37206
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

        </div>

        <div className="border-t border-secondary-foreground/10 pt-4 text-center text-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} NASHVILLE HOME IMPROVEMENTS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
