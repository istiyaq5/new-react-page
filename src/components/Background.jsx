export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Night sky gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(148,163,184,0.08),_transparent_30%),radial-gradient(circle_at_top_left,_rgba(79,70,229,0.18),_transparent_25%),linear-gradient(180deg,_#020617_0%,_#0b1226_40%,_#06070f_100%)]" />

      {/* Moon in the top-right */}
      <div className="absolute right-10 top-10 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100/10 shadow-[0_0_80px_rgba(192,132,252,0.35)] ring-1 ring-white/10">
        <div className="h-16 w-16 rounded-full bg-slate-100/80 shadow-[0_0_60px_rgba(255,255,255,0.35)] animate-moon-glow" />
      </div>

      {/* Overlay for tint and depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/90" />

      {/* Stars scattered in the sky */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-10 top-20 h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_14px_rgba(255,255,255,0.5)] animate-twinkle" />
        <span className="absolute left-28 top-12 h-1 w-1 rounded-full bg-slate-200/70 shadow-[0_0_12px_rgba(226,232,240,0.4)] animate-twinkle" />
        <span className="absolute right-24 top-16 h-1 w-1 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.4)] animate-twinkle" />
        <span className="absolute right-16 top-36 h-2 w-2 rounded-full bg-slate-100/80 shadow-[0_0_16px_rgba(255,255,255,0.45)] animate-twinkle" />
        <span className="absolute left-1/2 top-28 h-1 w-1 rounded-full bg-slate-200/80 shadow-[0_0_10px_rgba(241,245,249,0.4)] animate-twinkle" />
        <span className="absolute left-1/3 top-10 h-1.5 w-1.5 rounded-full bg-slate-100/75 shadow-[0_0_14px_rgba(255,255,255,0.4)] animate-twinkle" />
        <span className="absolute right-32 top-8 h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.55)] animate-twinkle" />
        <span className="absolute left-14 top-40 h-1 w-1 rounded-full bg-slate-200/80 shadow-[0_0_10px_rgba(241,245,249,0.4)] animate-twinkle" />
      </div>

      {/* Mountain silhouettes */}
      <div className="absolute inset-x-0 bottom-0 h-[45vh] sm:h-[50vh]">
        <svg
          viewBox="0 0 1440 520"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 320L80 288C160 256 320 192 480 208C640 224 800 320 960 336C1120 352 1280 288 1360 256L1440 224V520H0V320Z"
            fill="rgba(15,23,42,0.95)"
          />
          <path
            d="M0 376L80 352C160 328 320 280 480 296C640 312 800 392 960 392C1120 392 1280 336 1360 304L1440 272V520H0V376Z"
            fill="rgba(15,23,42,0.8)"
          />
          <path
            d="M0 448L80 432C160 416 320 368 480 360C640 352 800 392 960 392C1120 392 1280 360 1360 336L1440 312V520H0V448Z"
            fill="rgba(15,23,42,0.6)"
          />
        </svg>

        {/* Fog effect */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent opacity-80 blur-3xl" />
      </div>
    </div>
  );
}
