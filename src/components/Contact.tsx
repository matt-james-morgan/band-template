import React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";
import { bandConfig } from "@/config/bandConfig";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <section id="contact" className={cn("bg-background", className)}>
      <div className="container mx-auto px-5 sm:px-8 md:px-16 py-20 md:py-32">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6 md:mb-8 font-light">
            Contact
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-8 md:mb-12 max-w-lg">
            Booking, collabs, or just want to say hey.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-8">
            <a
              href={`mailto:${bandConfig.contact.email}`}
              className="py-2 break-words text-foreground/60 hover:text-foreground transition-colors text-sm uppercase tracking-widest font-light"
            >
              {bandConfig.contact.email}
            </a>
            {bandConfig.contact.instagram.url && (
              <a
                href={bandConfig.contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 break-words text-foreground/60 hover:text-foreground transition-colors text-sm uppercase tracking-widest font-light"
              >
                {bandConfig.contact.instagram.handle}
              </a>
            )}
            {bandConfig.contact.facebook.url && (
              <a
                href={bandConfig.contact.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 break-words text-foreground/60 hover:text-foreground transition-colors text-sm uppercase tracking-widest font-light"
              >
                Facebook
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
