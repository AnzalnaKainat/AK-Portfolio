import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { SkillsSection } from "@/components/skills-section";
import { projects } from "@/lib/data/projects";
import { buttonVariants } from "@/components/ui/button";

const featured = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-t border-border py-20 sm:py-28">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              path="// projects/featured.ts"
              title="A few things I’ve shipped recently"
              description="From an AI knowledge base to a real-time editor — projects that made me a better engineer, one bug at a time."
            />
            <Link
              href="/projects"
              className="hidden font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex sm:items-center sm:gap-1"
            >
              all projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <Link
            href="/projects"
            className="mt-8 flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:hidden"
          >
            all projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            path="// skills.json"
            title="What I reach for, and why"
            description="Frontend is home, but shipping full-stack means owning the whole path from database to browser."
          />
          <div className="mt-10">
            <SkillsSection />
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-8 py-14 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10 grid-paper opacity-30 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,black,transparent)]"
              aria-hidden
            />
            <p className="eyebrow">{"// contact.ts"}</p>
            <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Have a project in mind, or an opening on your team?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              I read every message myself, and I’m quick to reply.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", className: "mt-8" })}
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
