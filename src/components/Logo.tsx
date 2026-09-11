import nexoraLogo from "@/assets/optimized/nexora-logo-new.webp";
import nexoraLogoLight from "@/assets/optimized/nexora-logo-new-light.webp";

interface LogoProps {
  size?: number;
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ size = 40, variant = "dark", className }: LogoProps) {
  const src = variant === "light" ? nexoraLogoLight : nexoraLogo;
  const variantClass = variant === "light" ? "drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)]" : "";

  return (
    <img
      src={src}
      alt="Nexora Energy Solutions"
      width={500}
      height={234}
      className={`block object-contain ${variantClass} ${className ?? ""}`}
      style={{ height: size, width: "auto" }}
    />
  );
}
