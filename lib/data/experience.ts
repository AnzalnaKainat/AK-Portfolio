import { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    company: "State Life Insurance Corporation of Pakistan",
    role: "Frontend Engineer",
    start: "2024",
    end: null,
    location: "Hybird",
    summary:
      "Building and maintaining internal enterprise applications used across a national insurance provider, where reliability matters as much as polish. I work closest to the interfaces that case handlers and policy staff use every day, translating dense internal workflows into screens that hold up under real daily use.",
    highlights: [
      "Rebuilt legacy internal tools in React and Next.js, cutting page load times and reducing reported UI bugs",
      "Introduced React Query for server-state management, replacing scattered manual fetch logic with a consistent caching layer",
      "Set up Jest test suites for shared components, catching regressions before they reached staff-facing tools",
      "Worked directly with backend teams to shape REST APIs around what the interface actually needed, rather than adapting the UI to whatever the API returned",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "React Query",
      "Axios",
      "Jest",
      "Vite",
    ],
  },
  {
    company: "OneCube Agency",
    role: "React Developer Intern",
    start: " June 2023",
    end: "September 2023",
    location: "Remote",
    summary:
      "Started here as a React developer intern, working across several client projects at once — the kind of environment that forces fast learning because every project has different constraints, codebases, and clients to satisfy.",
    highlights: [
      "Built reusable UI components adopted across multiple client codebases, reducing duplicate work on future projects",
      "Integrated third-party and internal APIs into client-facing dashboards",
      "Diagnosed and fixed cross-browser layout and state bugs reported by clients post-launch",
      "Improved responsiveness across several existing projects that had been built desktop-first",
    ],
    stack: ["React", "JavaScript", "REST APIs", "Git", "Figma"],
  },
];
