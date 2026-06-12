import nexoraLogo from "@/assets/nexora-logo-new.png";
import nexoraLogoLight from "@/assets/nexora-logo-new-light.png";

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
      className={`block object-contain ${variantClass} ${className ?? ""}`}
      style={{ height: size, width: "auto" }}
    />
  );
}
