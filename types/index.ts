export interface Project {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: { challenge: string; solution: string }[];
  stack: string[];
  role: string;
  year: string;
  status: "flagship" | "shipped" | "archived";
  github: string | null;
  demo: string | null;
  accent: "blue" | "green" | "amber" | "rose";
}

export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string | null;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface SkillGroup {
  label: string;
  description: string;
  items: string[];
}
