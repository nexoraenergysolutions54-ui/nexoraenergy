interface LogoProps {
  size?: number;
  withWordmark?: boolean;
}

export function Logo({ size = 36, withWordmark = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size * 0.85}
        viewBox="0 0 100 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Nexora logo"
      >
        <path d="M10 5 L40 5 L50 45 L10 5 Z" fill="var(--primary)" />
        <path d="M90 5 L60 5 L50 45 L90 5 Z" fill="var(--gold)" />
        <path d="M50 45 L30 80 L70 80 Z" fill="var(--primary)" opacity="0.85" />
      </svg>
      {withWordmark && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
            NEXORA
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
            Energy Solutions
          </span>
        </div>
      )}
    </div>
  );
}
