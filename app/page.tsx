import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import Models from "@/components/home/Models";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
<main className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />

      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Models />
      <Footer />
    </main>
  );
}