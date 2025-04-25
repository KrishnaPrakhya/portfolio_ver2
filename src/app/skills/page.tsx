import ProgressBar from "@/components/ui/progress-bar";
import EnhancedHeader from "@/components/Header";
import EnhancedSkills from "@/components/skills";
import ParticleBackground from "@/components/ui/particle-background";

export default function SkillsPage() {
  return (
    <>
      <ProgressBar />
      <ParticleBackground />
      <EnhancedHeader />
      <EnhancedSkills />
    </>
  );
}
