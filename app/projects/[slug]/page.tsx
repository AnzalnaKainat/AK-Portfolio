import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Anzalna Kainat`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="container py-16 sm:py-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> all projects
      </Link>

      <div className="mt-8 max-w-3xl">
        <div className="flex items-center gap-3">
          <p className="eyebrow">
            {project.year} · {project.role}
          </p>
          {project.status === "flagship" && (
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-signal-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-blue" />
              flagship
            </span>
          )}
        </div>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "default" })}
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              <Github className="h-4 w-4" /> Source
            </a>
          )}
        </div>
      </div>

      <div className="mt-14 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-12">
          <ProjectSection eyebrow="// overview.md" title="Overview">
            <p>{project.overview}</p>
          </ProjectSection>

          <ProjectSection eyebrow="// problem.md" title="The problem">
            <p>{project.problem}</p>
          </ProjectSection>

          <ProjectSection eyebrow="// solution.md" title="The solution">
            <p>{project.solution}</p>
          </ProjectSection>

          <ProjectSection eyebrow="// features.ts" title="Key features">
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-green" />
                  {feature}
                </li>
              ))}
            </ul>
          </ProjectSection>

          <ProjectSection eyebrow="// challenges.md" title="Challenges & solutions">
            <div className="space-y-6">
              {project.challenges.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <p className="font-mono text-xs text-signal-rose">
                    Challenge
                  </p>
                  <p className="mt-1.5 text-sm text-foreground">
                    {item.challenge}
                  </p>
                  <p className="mt-4 font-mono text-xs text-signal-green">
                    Solution
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </ProjectSection>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-ink-800 to-ink-900 font-mono text-xs text-muted-foreground dark:from-ink-900 dark:to-black">
              screenshot — {project.name}
            </div>
            <div className="flex aspect-video items-center justify-center border-t border-border bg-muted font-mono text-xs text-muted-foreground">
              screenshot — detail view
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <p className="eyebrow">{"// meta.json"}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Role</dt>
                <dd className="text-right">{project.role}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="capitalize">{project.status}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      <div className="mt-24 border-t border-border pt-10">
        <p className="eyebrow">{"// up next"}</p>
        <Link
          href={`/projects/${next.slug}`}
          className={cn(
            "group mt-3 flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
          )}
        >
          <div>
            <p className="font-display text-xl font-semibold">{next.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{next.tagline}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </Link>
      </div>
    </div>
  );
}

function ProjectSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground [&_p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
