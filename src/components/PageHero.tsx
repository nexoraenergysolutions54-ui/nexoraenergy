import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  backgroundImage?: string;
  imagePosition?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  imagePosition = "object-[62%_center]",
}: PageHeroProps) {
  const hasImage = Boolean(backgroundImage);

  return (
    <section
      className={cn(
        "industrial-page-hero relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44",
        hasImage && "min-h-[720px] bg-navy pb-24 pt-40 md:min-h-[760px] md:pb-32 md:pt-48",
      )}
    >
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className={cn(
              "absolute inset-0 h-full w-full object-cover opacity-[0.82]",
              imagePosition,
            )}
          />
          <div className="absolute inset-0 bg-linear-to-r from-navy/95 via-navy/74 to-navy/26" />
          <div className="absolute inset-0 bg-linear-to-t from-navy/96 via-navy/30 to-navy/14" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-energy/10 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 grid-bg opacity-55" />
          <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-b from-white via-background/92 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/18 to-transparent" />
          <div className="absolute left-1/2 top-28 h-px w-[78vw] -translate-x-1/2 bg-linear-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute right-[12%] top-40 hidden h-32 w-px bg-linear-to-b from-primary/25 to-transparent lg:block" />
          <div className="absolute left-[9%] top-56 hidden h-24 w-px bg-linear-to-b from-energy/30 to-transparent lg:block" />
          <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
            <span className="industrial-scan-line absolute left-0 top-32 h-px w-full bg-linear-to-r from-transparent via-energy/45 to-transparent" />
          </div>
        </>
      )}

      <div
        className={cn(
          "relative mx-auto max-w-7xl px-6 lg:px-8",
          hasImage ? "text-left" : "text-center",
        )}
      >
        {eyebrow && (
          <Reveal>
            <span
              className={cn(
                "mb-6 inline-flex items-center gap-3 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] shadow-sm backdrop-blur",
                hasImage
                  ? "border border-white/18 bg-white/10 text-white/78"
                  : "border border-primary/15 bg-white/74 text-primary",
              )}
            >
              <span className="h-px w-8 bg-energy" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.08}>
          <h1
            className={cn(
              "max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-display text-foreground md:text-6xl lg:text-7xl",
              !hasImage && "mx-auto",
              hasImage && "max-w-3xl text-white drop-shadow-[0_3px_22px_rgba(0,0,0,0.42)]",
            )}
          >
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p
              className={cn(
                "mt-8 max-w-2xl text-lg leading-8 text-muted-foreground",
                !hasImage && "mx-auto",
                hasImage && "text-white/74",
              )}
            >
              {description}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.24}>
          <div
            className={cn(
              "mt-10 flex max-w-3xl flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground",
              !hasImage && "mx-auto justify-center",
              hasImage && "justify-start text-white/58",
            )}
          >
            {["Technical manpower", "Industrial services", "Procurement support"].map((item) => (
              <span
                key={item}
                className={cn(
                  "rounded-md border px-3 py-2 shadow-sm backdrop-blur",
                  hasImage
                    ? "border-white/18 bg-white/10"
                    : "border-border bg-white/70",
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
