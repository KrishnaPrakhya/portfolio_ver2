import ProjectDetail from "@/components/project-details";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProjectDetail id={params.id} />;
}
