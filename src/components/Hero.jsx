export default function Hero() {
  const handleGetStarted = () => {
    console.log("Get Started clicked!");
    // You can add navigation logic here
  };

  const handleLearnMore = () => {
    console.log("Learn More clicked!");
    // Scroll to About section
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16 text-center sm:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Welcome to GlassPlatform
        </h1>

        <p className="text-xl text-white/80 sm:text-2xl">
          Discover the future of seamless experiences
        </p>

        <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          Our platform combines cutting-edge technology with elegant design to
          deliver unparalleled user experiences. Join thousands of users who
          have transformed their workflows with our innovative solutions.
        </p>

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={handleGetStarted}
            className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Get Started
          </button>
          <button
            onClick={handleLearnMore}
            className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
