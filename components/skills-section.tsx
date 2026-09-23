import { skillGroups } from "@/lib/data/skills";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div
          key={group.label}
          className="rounded-xl border border-border bg-card p-6"
        >
          <h3 className="font-display text-sm font-semibold">{group.label}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {group.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
