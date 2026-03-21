import React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";
import { bandConfig } from "@/config/bandConfig";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-start overflow-hidden justify-center bg-background",
        className
      )}
    >
      <FadeIn className="w-full flex flex-col items-center pt-40 px-4">
        <div
          className="text-[12vw] leading-none font-semibold text-foreground"
          style={{ fontFamily: "'Ano', 'Jost', sans-serif", letterSpacing: "-0.03em" }}
        >
          {bandConfig.name.toUpperCase()}
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
