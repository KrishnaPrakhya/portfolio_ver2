import ProgressBar from "@/components/ui/progress-bar";
import EnhancedHeader from "@/components/Header";
import EnhancedServices from "@/components/services";
import ParticleBackground from "@/components/ui/particle-background";

export default function ServicesPage() {
  return (
    <>
      <ProgressBar />
      <ParticleBackground />
      <EnhancedHeader />
      <EnhancedServices />
    </>
  );
}
