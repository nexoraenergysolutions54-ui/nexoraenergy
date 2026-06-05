import nexoraLogo from "@/assets/nexora-logo-final.png";

interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

export function Logo({ size = 40, withWordmark = true, className }: LogoProps) {
  const aspectRatio = withWordmark ? 2.9 : 1.45;
  const width = Math.round(size * aspectRatio);

  return (
    <img
      src={nexoraLogo}
      alt="Nexora Energy Solutions"
      className={`block object-contain ${className ?? ""}`}
      style={{
        width,
        height: size,
        objectPosition: withWordmark ? "left center" : "left center",
      }}
    />
  );
}
