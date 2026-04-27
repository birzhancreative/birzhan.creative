import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <Hero />
      
      <IntroSection />

      <ProjectGrid />

      <AboutSection />

      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}
