import Background from "../Background";
import Hero from "../Hero";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Background />
      <Hero />
    </div>
  );
}

export default Home;
