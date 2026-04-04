export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-16 border-t border-white/20">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white/70">
          © 2024 GlassPlatform. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition hover:text-white hover:scale-110"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition hover:text-white hover:scale-110"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
