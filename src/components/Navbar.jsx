import { useState } from "react";

const navItems = ["Home", "About", "Features", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <a href="#" className="text-xl font-bold text-white">
          GlassPlatform
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="transition hover:text-white hover:scale-105"
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
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
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-b border-white/20">
          <div className="flex flex-col gap-3 px-6 py-4 text-sm text-white/80">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="rounded-2xl px-3 py-2 transition hover:bg-white/20 text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
