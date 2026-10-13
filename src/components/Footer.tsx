import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { bandConfig } from "@/config/bandConfig";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("py-10 md:py-12 bg-background border-t border-border", className)}>
      <div className="container mx-auto px-5 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center">
        <Link
          to="/"
          className="text-sm uppercase tracking-[0.3em] text-foreground/40 font-light hover:text-foreground transition-colors"
        >
          {bandConfig.name}
        </Link>
        <p className="text-xs text-foreground/30 font-light">
          &copy; {new Date().getFullYear()} {bandConfig.name}.
        </p>
        <a
          href={`mailto:${bandConfig.contact.email}`}
          className="py-2 break-all text-xs uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors font-light"
        >
          {bandConfig.contact.email}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
