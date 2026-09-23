import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const accentMap = {
  blue: "group-hover:border-signal-blue/50 group-hover:shadow-signal-blue/10",
  green: "group-hover:border-signal-green/50 group-hover:shadow-signal-green/10",
  amber: "group-hover:border-signal-amber/50 group-hover:shadow-signal-amber/10",
  rose: "group-hover:border-signal-rose/50 group-hover:shadow-signal-rose/10",
} as const;

const dotMap = {
  blue: "bg-signal-blue",
  green: "bg-signal-green",
  amber: "bg-signal-amber",
  rose: "bg-signal-rose",
} as const;

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor-hover
      className={cn(
        "group relative flex h-full flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-lg shadow-black/[0.02] transition-all hover:-translate-y-1 dark:shadow-black/20",
        accentMap[project.accent]
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            0{index + 1} / {project.year}
            {project.status === "flagship" && (
              <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider">
                <span className={cn("h-1.5 w-1.5 rounded-full", dotMap[project.accent])} />
                flagship
              </span>
            )}
          </p>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {project.stack.length > 4 && (
          <Badge>+{project.stack.length - 4}</Badge>
        )}
      </div>
    </Link>
  );
}
