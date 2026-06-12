import { useState } from "react";

export function WhatsAppButton() {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="https://wa.me/96500000000?text=Hello%20Nexora%20Energy%20Solutions"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with Nexora on WhatsApp"
    >
      <div className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_20px_50px_-24px_rgba(7,28,44,0.55)] ring-1 ring-white/50 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.04]">
        <span className="absolute inset-0 rounded-full border border-[#25D366]/50 animate-premium-ping" />
        <svg
          viewBox="0 0 16 16"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326ZM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592Zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.397 2.133 3.383 2.991.473.205.842.327 1.13.418.475.152.904.129 1.246.08.38-.058 1.17-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232Z" />
        </svg>
      </div>
      <span
        className={`absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full glass px-4 py-2 text-xs font-medium text-foreground transition-all ${
          hover ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
        }`}
      >
        Chat With Nexora
      </span>
    </a>
  );
}
