import About from "../About";
import CTA from "../CTA";
import Features from "../Features";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
