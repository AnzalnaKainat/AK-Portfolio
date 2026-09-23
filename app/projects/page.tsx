import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack projects by Anzalna Kainat, from an AI knowledge base to a real-time collaborative editor.",
};

export default function ProjectsPage() {
  return (
    <div className="container py-16 sm:py-24">
      <SectionHeading
        path="// projects/index.ts"
        title="Things I've built end to end"
        description="Each one taught me something I couldn't have learned from a tutorial — mostly by breaking first."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
