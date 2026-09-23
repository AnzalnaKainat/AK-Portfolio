"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const tabs = [
  { href: "/", label: "home.tsx" },
  { href: "/about", label: "about.md" },
  { href: "/projects", label: "projects/index.ts" },
  { href: "/contact", label: "contact.ts" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass border-b border-border">
        <nav className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded bg-signal-blue/15 text-signal-blue">
              &gt;_
            </span>
            <span className="hidden sm:inline">anzalna</span>
            <span className="text-muted-foreground">.dev</span>
          </Link>

          <div className="hidden items-center gap-1 rounded-lg border border-border bg-background/40 p-1 md:flex">
            {tabs.map((tab) => {
              const active =
                tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={cn(
                    "relative rounded-md px-3 py-1.5 font-mono text-xs transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-tab"
                      className="absolute inset-0 rounded-md bg-card shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-1.5">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        active ? "bg-signal-green" : "bg-muted-foreground/40"
                      )}
                    />
                    {tab.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:flex" />
            <Link
              href="/contact"
              className="hidden rounded-md bg-foreground px-4 py-2 font-mono text-xs font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
            >
              say hello →
            </Link>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="glass border-b border-border md:hidden"
        >
          <div className="container flex flex-col gap-1 py-3">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-sm text-muted-foreground hover:bg-card hover:text-foreground"
              >
                {tab.label}
              </Link>
            ))}
            <div className="mt-1 flex items-center justify-between px-3">
              <span className="font-mono text-xs text-muted-foreground">theme</span>
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
