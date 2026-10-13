import React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";
import { bandConfig } from "@/config/bandConfig";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn("relative bg-muted", className)}>
      <div className="container mx-auto px-5 sm:px-8 md:px-16 py-20 md:py-32">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6 md:mb-8 font-light">
            About
          </p>
        </FadeIn>
        {bandConfig.bio.map((paragraph, i) => (
          <FadeIn key={i} delay={i * 100}>
            <p
              className={cn(
                "font-light leading-relaxed text-foreground/80 max-w-2xl mb-6",
                i === 0 ? "text-2xl sm:text-3xl md:text-5xl leading-tight text-foreground mb-8 md:mb-12" : "text-base md:text-lg"
              )}
            >
              {paragraph}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default About;
