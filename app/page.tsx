import AnimatedGrid from "@/components/ui/AnimatedGrid";
import WorkspacePreview from "@/components/home/WorkspacePreview";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import Models from "@/components/home/Models";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />
<AnimatedGrid />
      <Navbar />
      <Hero />
      <Stats />
      <WorkspacePreview />
      <Features />
      <Models />
      <CTA />
      <Footer />
    </main>
  );
}