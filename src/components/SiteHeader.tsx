import { useState } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Locations", href: "#locations" },
  { label: "Learning Center", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#" },
  { label: "Financing", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const TopBar = () => (
  <div className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 gap-3">
      <div className="flex items-center gap-6">
        <span className="font-heading text-xl font-extrabold tracking-tight text-primary">
          CRAWL SPACE BROTHERS
        </span>
        <span className="hidden md:flex items-center gap-1.5 text-sm text-secondary-foreground/80">
          <MapPin className="w-4 h-4 text-primary" />
          5233 Harding Pl Suite 5243, Nashville, TN 37217
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="tel:+16154362325"
          className="flex items-center gap-2 text-accent font-heading font-bold text-lg md:text-2xl hover:text-primary transition-colors"
        >
          <Phone className="w-5 h-5" />
          (615) 436-2325
        </a>
        <a
          href="#schedule"
          className="hidden md:inline-flex bg-primary text-primary-foreground font-heading font-bold text-sm px-5 py-2.5 rounded hover:brightness-110 transition-all"
        >
          SCHEDULE FREE INSPECTION
        </a>
      </div>
    </div>
  </div>
);

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <nav className="bg-nav text-nav-foreground border-t border-nav-foreground/10">
        <div className="container mx-auto px-4 flex items-center justify-between h-12">
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-nav-foreground/90 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-nav border-t border-nav-foreground/10">
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block px-6 py-3 text-sm font-semibold uppercase tracking-wide text-nav-foreground/90 hover:text-primary hover:bg-nav-foreground/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#schedule"
                  className="block mx-4 my-2 text-center bg-primary text-primary-foreground font-heading font-bold text-sm px-5 py-2.5 rounded hover:brightness-110 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  SCHEDULE FREE INSPECTION
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default SiteHeader;
