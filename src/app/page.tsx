import ProgressBar from "@/components/ui/progress-bar";
import EnhancedHeader from "@/components/Header";
import EnhancedHero from "@/components/Hero";
import ParticleBackground from "@/components/ui/particle-background";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <ParticleBackground />
      <EnhancedHeader />
      <EnhancedHero />
    </>
  );
}
