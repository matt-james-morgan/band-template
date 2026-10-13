import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { bandConfig } from "@/config/bandConfig";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
      setIsHidden(y > 100 && y > lastScrollY.current);
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMobileMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // scroll-padding-top in index.css keeps the section clear of the header
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isHidden && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0",
          isScrolled
            ? "py-2 md:py-3 bg-background/95 backdrop-blur-md border-b border-border/20"
            : "py-3 md:py-5 bg-transparent",
          className
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-end">
          <nav className="hidden md:flex items-center space-x-8">
            {bandConfig.nav.map((link) => (
              <button
                key={link.label}
                className="py-2 text-xs uppercase tracking-widest font-light text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => scrollToSection(link.href)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="block w-6">
              <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
              <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
              <span className="block w-4 h-0.5 bg-foreground" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu — rendered outside <header> so its transform/blur can't trap this fixed overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background flex flex-col px-6 pt-20 pb-10 transition-transform duration-500 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full invisible"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          className="absolute top-3 right-2 flex h-11 w-11 items-center justify-center"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="relative block w-6 h-6">
            <span className="absolute left-0 top-1/2 block w-6 h-0.5 bg-foreground rotate-45" />
            <span className="absolute left-0 top-1/2 block w-6 h-0.5 bg-foreground -rotate-45" />
          </span>
        </button>

        <nav className="flex flex-col">
          {bandConfig.nav.map((link) => (
            <button
              key={link.label}
              className="py-4 text-left text-2xl uppercase tracking-widest font-light text-foreground/70 hover:text-foreground border-b border-border/40 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                // Wait for the scroll lock to release before scrolling
                setTimeout(() => scrollToSection(link.href), 0);
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
