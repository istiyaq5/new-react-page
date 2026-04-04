import { useState } from "react";

const navItems = ["News", "Free Trial", "About Us", "Clients", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 backdrop-blur-xl bg-slate-950/60 border-b border-white/10">
        <a
          href="#"
          className="text-lg font-semibold tracking-[0.28em] text-white uppercase"
        >
          Studio
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 transition hover:bg-white/10"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open menu</span>
          <div className="flex h-5 w-6 flex-col justify-between">
            <span className="block h-0.5 w-full rounded-full bg-white" />
            <span className="block h-0.5 w-full rounded-full bg-white" />
            <span className="block h-0.5 w-full rounded-full bg-white" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex flex-col gap-3 px-6 py-4 text-sm text-slate-200">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-2xl px-3 py-2 transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
