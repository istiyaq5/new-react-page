export default function Features() {
  const features = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description:
        "Lightning-fast loading times and optimized performance for all devices.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee.",
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description:
        "Stunning UI/UX that engages users and enhances productivity.",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description:
        "Responsive design that works perfectly on all screen sizes.",
    },
  ];

  return (
    <section
      id="features"
      className="relative mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Features</h2>
        <p className="mt-4 text-lg text-white/70">
          Discover the powerful features that make GlassPlatform the perfect
          choice for your needs.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-white/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
