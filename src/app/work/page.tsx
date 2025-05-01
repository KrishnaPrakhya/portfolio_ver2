import ProgressBar from "@/components/ui/progress-bar";
import EnhancedHeader from "@/components/Header";
import EnhancedProjects from "@/components/projects";
import ParticleBackground from "@/components/ui/particle-background";

export default function WorkPage() {
  return (
    <>
      <ProgressBar />
      <ParticleBackground />
      <EnhancedHeader />
      <EnhancedProjects />
    </>
  );
}
