import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Interface",
    description: "Where I spend most of my time — fast, accessible, hard to misuse.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Application state",
    description: "Keeping data predictable as an app grows past its first few screens.",
    items: ["Redux", "React Query", "NextAuth", "Clerk", "Zod"],
  },
  {
    label: "Service & data layer",
    description: "The other half of full-stack — APIs, databases, and the glue between them.",
    items: ["Node.js", "PostgreSQL", "MongoDB", "MySQL", "Prisma", "Firebase", "REST APIs"],
  },
  {
    label: "Workflow",
    description: "The tools that keep shipping sustainable, not just possible.",
    items: ["Git", "GitHub", "Vercel", "Jest", "Figma", "SSR"],
  },
];

export const allSkills = skillGroups.flatMap((group) => group.items);
