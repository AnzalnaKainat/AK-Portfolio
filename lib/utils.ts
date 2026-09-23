import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a date range like "2023 — Present" for experience entries. */
export function formatDateRange(start: string, end: string | null) {
  return `${start} — ${end ?? "Present"}`;
}
