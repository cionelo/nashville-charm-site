import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Menu, X } from "lucide-react";
import nhiLogo from "@/assets/nhi-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Learning Center", href: "/learning-center" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const TopBar = () => (
  <div className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 gap-3">
      <div className="flex items-center gap-6">
        <a href="#" className="flex items-center gap-3">
          <img src={nhiLogo} alt="Nashville Home Improvements" className="h-10 w-10 rounded-full" />
          <span className="font-heading text-xl font-extrabold tracking-tight text-primary">
            NASHVILLE HOME IMPROVEMENTS
          </span>
        </a>
        <span className="hidden md:flex items-center gap-1.5 text-sm text-secondary-foreground/80">
          <MapPin className="w-4 h-4 text-primary" />
          710 Cleo Miller Dr, East Nashville, TN 37206
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="tel:+14053349493"
          className="flex items-center gap-2 text-accent font-heading font-bold text-lg md:text-2xl hover:text-primary transition-colors"
        >
          <Phone className="w-5 h-5" />
          (405) 334-9493
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
                {link.href.startsWith("/") ? (
                  <Link
                    to={link.href}
                    className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-nav-foreground/90 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-nav-foreground/90 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-nav border-t border-nav-foreground/10">
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="block px-6 py-3 text-sm font-semibold uppercase tracking-wide text-nav-foreground/90 hover:text-primary hover:bg-nav-foreground/5 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="block px-6 py-3 text-sm font-semibold uppercase tracking-wide text-nav-foreground/90 hover:text-primary hover:bg-nav-foreground/5 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
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
