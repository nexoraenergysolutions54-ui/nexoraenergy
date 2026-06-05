import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-28 right-0 w-[32rem] h-[32rem] rounded-full gradient-radial-teal blur-3xl" />
      <div className="absolute top-24 left-0 w-[26rem] h-[26rem] rounded-full gradient-radial-blue blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {eyebrow && (
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-[0.28em] text-primary font-bold mb-6 px-4 py-1.5 rounded-full border border-energy-soft glass">
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.08}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.04] text-foreground">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
