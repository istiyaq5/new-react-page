export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          About GlassPlatform
        </h2>
        <p className="mt-4 text-lg text-white/70">
          GlassPlatform is a cutting-edge solution designed to streamline your
          digital workflow. We combine modern technology with intuitive design
          to create experiences that matter.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <h3 className="text-xl font-semibold text-white">Innovative</h3>
          <p className="mt-2 text-white/70">
            Leveraging the latest technologies to deliver unparalleled
            performance.
          </p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <h3 className="text-xl font-semibold text-white">User-Centric</h3>
          <p className="mt-2 text-white/70">
            Designed with users in mind, ensuring intuitive and delightful
            experiences.
          </p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <h3 className="text-xl font-semibold text-white">Scalable</h3>
          <p className="mt-2 text-white/70">
            Built to grow with your needs, from startup to enterprise level.
          </p>
        </div>
      </div>
    </section>
  );
}
