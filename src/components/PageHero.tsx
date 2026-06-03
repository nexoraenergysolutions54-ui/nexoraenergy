import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 gradient-radial-red opacity-50" />
      <div className="absolute top-32 right-10 w-96 h-96 rounded-full gradient-radial-gold blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {eyebrow && (
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-[0.4em] text-gold font-semibold mb-6 px-4 py-1.5 rounded-full border border-gold-soft glass">
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.08}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.05]">
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
