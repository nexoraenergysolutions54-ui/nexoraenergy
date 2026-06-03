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
      <div className="relative grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white animate-pulse-glow shadow-2xl transition-transform hover:scale-110">
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.508-1.318.13-.302.166-.66.166-.99 0-.43-1.706-1.318-2.06-1.418ZM16.16 24.36c-1.518 0-3.022-.387-4.354-1.118l-4.83 1.418 1.418-4.83a9.166 9.166 0 0 1-1.118-4.354c0-5.116 4.182-9.298 9.298-9.298 5.116 0 9.298 4.182 9.298 9.298 0 5.116-4.182 9.298-9.298 9.298Z" />
        </svg>
      </div>
      <span
        className={`absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full glass px-4 py-2 text-xs font-medium text-foreground transition-all ${
          hover ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Chat With Nexora
      </span>
    </a>
  );
}
