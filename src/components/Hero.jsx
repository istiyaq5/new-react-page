export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16 text-center sm:px-10 lg:px-16">
      {/* Overlay gradient for better text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/10 to-slate-950/90" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-6">
        <h1 className="animate-fade-up text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          ENJOY YOUR LIFE
        </h1>

        <p className="animate-fade-in-delay max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Dive into a calm, dark mountain landing page inspired by the night
          sky. Soft gradients, quiet stars, and glass-like buttons create a
          premium, peaceful experience.
        </p>

        <div className="animate-fade-in-delay flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#learn-more"
            className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(255,255,255,0.06)] backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-cyan-300/60 hover:bg-white/15"
          >
            Learn more
          </a>
          <a
            href="#contact-us"
            className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-white/20 bg-slate-900/40 px-8 py-3 text-sm font-semibold text-slate-100 shadow-[0_0_30px_rgba(59,130,246,0.08)] backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-fuchsia-300/60 hover:bg-slate-800/60"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
