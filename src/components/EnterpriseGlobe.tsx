/* GCC Regional Operations Network — Nexora Energy Solutions */

const HQ = { cx: 345, cy: 198 };

/*
 * Geographic positions scaled to a 600×390 SVG.
 * Bahrain placed visually further from Qatar HQ for label clarity.
 * lx/la/ly1/ly2 define explicit label positions per marker.
 */
const sites = [
  {
    id: "KW",
    name: "Kuwait",
    cx: 162,
    cy: 78,
    d: "M345,198 Q252,136 162,78",
    delay: 0,
    lx: 175,
    la: "start" as const,
    ly1: 68,
    ly2: 80,
  },
  {
    id: "BH",
    name: "Bahrain",
    cx: 260,
    cy: 150,
    d: "M345,198 Q300,174 260,150",
    delay: 0.6,
    lx: 248,
    la: "end" as const,
    ly1: 140,
    ly2: 152,
  },
  {
    id: "SA",
    name: "Saudi Arabia",
    cx: 100,
    cy: 278,
    d: "M345,198 Q220,246 100,278",
    delay: 1.2,
    lx: 114,
    la: "start" as const,
    ly1: 268,
    ly2: 280,
  },
  {
    id: "AE",
    name: "UAE",
    cx: 468,
    cy: 240,
    d: "M345,198 Q406,220 468,240",
    delay: 1.8,
    lx: 455,
    la: "end" as const,
    ly1: 230,
    ly2: 242,
  },
  {
    id: "OM",
    name: "Oman",
    cx: 544,
    cy: 316,
    d: "M345,198 Q468,240 544,316",
    delay: 2.4,
    lx: 530,
    la: "end" as const,
    ly1: 306,
    ly2: 318,
  },
];

const LATS = [50, 90, 130, 170, 210, 250, 290, 330, 370];
const LONS = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550];

export function EnterpriseGlobe() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#010c17]"
      style={{
        boxShadow: "0 0 100px -30px rgba(47,208,196,0.38), 0 0 0 1px rgba(47,208,196,0.07)",
      }}
    >
      {/* Ambient glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_58%_50%_at_57%_48%,rgba(47,208,196,0.11),transparent),radial-gradient(ellipse_40%_45%_at_17%_65%,rgba(24,119,242,0.09),transparent)]" />

      {/* Header bar */}
      <div className="relative flex items-center justify-between border-b border-white/8 px-5 py-4">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/35">
            GCC Operations Network
          </p>
          <p className="mt-0.5 text-sm font-extrabold text-white">
            Doha · Command Coordination Centre
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-energy/30 bg-energy/8 px-3 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-energy" />
          <span className="text-[11px] font-bold text-energy">Live</span>
        </div>
      </div>

      {/* SVG map */}
      <svg
        viewBox="0 0 600 390"
        className="relative w-full"
        aria-label="GCC operations network map centred on Qatar"
        style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
      >
        <defs>
          {/* Dot grid pattern */}
          <pattern id="eg-dots" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="0.5" cy="0.5" r="0.7" fill="rgba(255,255,255,0.05)" />
          </pattern>

          {/* Qatar HQ radial aura */}
          <radialGradient id="eg-hq-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2FD0C4" stopOpacity="0.30" />
            <stop offset="60%" stopColor="#2FD0C4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#2FD0C4" stopOpacity="0" />
          </radialGradient>

          {/* Radar sweep gradient — transparent at origin, bright at tip */}
          <linearGradient
            id="eg-sweep"
            gradientUnits="userSpaceOnUse"
            x1={HQ.cx}
            y1={HQ.cy}
            x2={HQ.cx}
            y2="8"
          >
            <stop offset="0%" stopColor="#2FD0C4" stopOpacity="0.0" />
            <stop offset="30%" stopColor="#2FD0C4" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2FD0C4" stopOpacity="0.07" />
          </linearGradient>

          {/* HQ glow */}
          <filter id="eg-hq-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Route line glow */}
          <filter id="eg-line-glow" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Particle glow */}
          <filter id="eg-particle-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Marker glow */}
          <filter id="eg-marker-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Named route paths for animateMotion */}
          {sites.map((s) => (
            <path key={`def-${s.id}`} id={`eg-r-${s.id}`} d={s.d} />
          ))}
        </defs>

        {/* Dot background */}
        <rect width="600" height="390" fill="url(#eg-dots)" />

        {/* Latitude grid lines */}
        {LATS.map((y) => (
          <line
            key={`lat-${y}`}
            x1="20"
            y1={y}
            x2="580"
            y2={y}
            stroke="rgba(47,208,196,0.05)"
            strokeWidth="0.5"
          />
        ))}

        {/* Longitude grid lines */}
        {LONS.map((x) => (
          <line
            key={`lon-${x}`}
            x1={x}
            y1="20"
            x2={x}
            y2="370"
            stroke="rgba(24,119,242,0.045)"
            strokeWidth="0.5"
          />
        ))}

        {/* Arabian Gulf water body (simplified shape) */}
        <path
          d="M162,78 Q202,92 232,118 Q258,142 262,152 Q252,160 246,168 Q228,152 210,130 Q188,106 162,78Z"
          fill="rgba(47,208,196,0.065)"
          stroke="rgba(47,208,196,0.14)"
          strokeWidth="0.8"
        />

        {/* Qatar HQ glow aura */}
        <circle cx={HQ.cx} cy={HQ.cy} r="70" fill="url(#eg-hq-aura)" />

        {/* ── Radar sweep ── */}
        <line
          x1={HQ.cx}
          y1={HQ.cy}
          x2={HQ.cx}
          y2="12"
          stroke="url(#eg-sweep)"
          strokeWidth="2"
          filter="url(#eg-line-glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${HQ.cx} ${HQ.cy}`}
            to={`360 ${HQ.cx} ${HQ.cy}`}
            dur="6s"
            repeatCount="indefinite"
          />
        </line>

        {/* ── Qatar HQ expanding rings ── */}
        {[0, 0.93, 1.86].map((delay, i) => (
          <circle
            key={`ring-${i}`}
            cx={HQ.cx}
            cy={HQ.cy}
            r="12"
            fill="none"
            stroke="rgba(47,208,196,0.72)"
            strokeWidth="1.2"
          >
            <animate
              attributeName="r"
              from="12"
              to="70"
              dur="2.8s"
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              from="0.72"
              to="0"
              dur="2.8s"
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* ── Animated dashed route lines ── */}
        {sites.map((s) => (
          <path
            key={`line-${s.id}`}
            d={s.d}
            fill="none"
            stroke="rgba(47,208,196,0.48)"
            strokeWidth="1.2"
            filter="url(#eg-line-glow)"
            className="gcc-route-flow"
            style={{ animationDelay: `${s.delay}s` }}
          />
        ))}

        {/* ── Particles travelling along routes ── */}
        {sites.map((s) => (
          <circle key={`p-${s.id}`} r="3.2" fill="#2FD0C4" filter="url(#eg-particle-glow)">
            <animateMotion dur="2.8s" begin={`${s.delay}s`} repeatCount="indefinite">
              <mpath href={`#eg-r-${s.id}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.12;0.82;1"
              dur="2.8s"
              begin={`${s.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* ── Deployment site markers ── */}
        {sites.map((s) => (
          <g key={`site-${s.id}`}>
            {/* Outer expanding pulse ring */}
            <circle
              cx={s.cx}
              cy={s.cy}
              r="11"
              fill="rgba(24,119,242,0.10)"
              stroke="rgba(24,119,242,0.42)"
              strokeWidth="0.8"
            >
              <animate
                attributeName="r"
                from="11"
                to="22"
                dur="2.2s"
                begin={`${s.delay + 0.4}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                from="0.42"
                to="0"
                dur="2.2s"
                begin={`${s.delay + 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Main blue dot */}
            <circle cx={s.cx} cy={s.cy} r="5.5" fill="#1877F2" filter="url(#eg-marker-glow)" />
            <circle cx={s.cx} cy={s.cy} r="2.8" fill="rgba(255,255,255,0.92)" />
            {/* Country code */}
            <text
              x={s.lx}
              y={s.ly1}
              textAnchor={s.la}
              fontSize="10"
              fontWeight="800"
              fill="rgba(255,255,255,0.88)"
            >
              {s.id}
            </text>
            {/* Country name */}
            <text
              x={s.lx}
              y={s.ly2}
              textAnchor={s.la}
              fontSize="8.5"
              fontWeight="600"
              fill="rgba(255,255,255,0.38)"
            >
              {s.name}
            </text>
          </g>
        ))}

        {/* ── Qatar HQ marker ── */}
        <circle cx={HQ.cx} cy={HQ.cy} r="11" fill="#2FD0C4" filter="url(#eg-hq-glow)" />
        <circle cx={HQ.cx} cy={HQ.cy} r="5.5" fill="white" />

        {/* DOHA · HQ label */}
        <rect
          x={HQ.cx - 40}
          y={HQ.cy + 16}
          width="80"
          height="20"
          rx="5"
          fill="rgba(47,208,196,0.15)"
          stroke="rgba(47,208,196,0.45)"
          strokeWidth="0.8"
        />
        <text
          x={HQ.cx}
          y={HQ.cy + 30}
          textAnchor="middle"
          fontSize="10"
          fontWeight="800"
          fill="#2FD0C4"
          letterSpacing="1.5"
        >
          DOHA · HQ
        </text>

        {/* Gulf label */}
        <text
          x="196"
          y="218"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="700"
          fill="rgba(47,208,196,0.20)"
          letterSpacing="2"
        >
          ARABIAN GULF
        </text>
      </svg>

      {/* Country strip */}
      <div className="grid grid-cols-3 border-t border-white/8 sm:grid-cols-6">
        {[
          { code: "QA", name: "Qatar", hq: true },
          { code: "SA", name: "Saudi Arabia", hq: false },
          { code: "AE", name: "UAE", hq: false },
          { code: "KW", name: "Kuwait", hq: false },
          { code: "BH", name: "Bahrain", hq: false },
          { code: "OM", name: "Oman", hq: false },
        ].map((c, i) => (
          <div
            key={c.code}
            className={[
              "flex flex-col items-center gap-1.5 px-2 py-3 text-center",
              i > 0 ? "border-l border-white/8" : "",
              c.hq ? "bg-energy/6" : "",
            ].join(" ")}
          >
            <span
              className={`text-[11px] font-extrabold tracking-widest ${c.hq ? "text-energy" : "text-white/55"}`}
            >
              {c.code}
            </span>
            <span className="text-[9px] font-semibold leading-none text-white/25">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
