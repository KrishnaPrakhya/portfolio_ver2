import ProgressBar from "@/components/ui/progress-bar";
import EnhancedHeader from "@/components/Header";
import EnhancedAbout from "@/components/About";
import ParticleBackground from "@/components/ui/particle-background";

export default function AboutPage() {
  return (
    <>
      <ProgressBar />
      <ParticleBackground />
      <EnhancedHeader />
      <EnhancedAbout />
    </>
  );
}
