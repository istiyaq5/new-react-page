export default function CTA() {
  const handleStartNow = () => {
    console.log("Start Now clicked!");
    // You can add navigation or signup logic here
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Join thousands of users who have already transformed their experience
          with GlassPlatform. Start your journey today and unlock new
          possibilities.
        </p>
        <button
          onClick={handleStartNow}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          Start Now
        </button>
      </div>
    </section>
  );
}
