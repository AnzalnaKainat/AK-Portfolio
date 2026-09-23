"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, MapPin, Wifi } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useClock } from "@/hooks/use-clock";
import { siteConfig } from "@/lib/site-config";
import { AmbientBackground } from "@/components/animated-gradient";
import { buttonVariants } from "@/components/ui/button";

const introLine = "Building fast, dependable products across the whole stack.";

export function Hero() {
  const { output, done } = useTypewriter(introLine, 22, 500);
  const time = useClock(siteConfig.timezone);

  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <AmbientBackground />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card/80 shadow-2xl shadow-black/5 backdrop-blur-sm dark:shadow-black/40"
        >
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-signal-rose/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-green/70" />
            <span className="ml-3 font-mono text-[11px] text-muted-foreground">
              about-me.ts
            </span>
          </div>

          {/* code block */}
          <div className="px-5 py-8 font-mono text-[13px] leading-relaxed sm:px-8 sm:text-base">
            <p className="text-muted-foreground">
              <span className="text-signal-green">{"// "}{output}</span>
              {!done && (
                <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-signal-green" />
              )}
            </p>

            <p className="mt-5">
              <span className="text-signal-blue">const</span>{" "}
              <span className="text-foreground">developer</span> = {"{"}
            </p>
            <p className="pl-5">
              name:{" "}
              <span className="text-signal-amber">
                &ldquo;{siteConfig.name}&rdquo;
              </span>
              ,
            </p>
            <p className="pl-5">
              role:{" "}
              <span className="text-signal-amber">
                &ldquo;{siteConfig.role}&rdquo;
              </span>
              ,
            </p>
            <p className="pl-5">
              focus: [
              <span className="text-signal-amber">&ldquo;React&rdquo;</span>,{" "}
              <span className="text-signal-amber">&ldquo;Next.js&rdquo;</span>,{" "}
              <span className="text-signal-amber">&ldquo;TypeScript&rdquo;</span>
              ],
            </p>
            <p className="pl-5">
              approach: <span className="text-signal-green">buildThoughtfully</span>
              (),
            </p>
            <p>{"}"}</p>
          </div>

          {/* status bar */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border bg-background/40 px-5 py-3 font-mono text-[11px] text-muted-foreground sm:px-8">
            <span className="flex items-center gap-1.5">
              <GitBranch className="h-3 w-3" /> main
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" /> {siteConfig.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Wifi className="h-3 w-3 text-signal-green" />
              {time ?? "--:--"} local
            </span>
            <span className="ml-auto hidden items-center gap-1.5 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
              {siteConfig.availability}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            I turn complicated problems into interfaces people don&apos;t
            have to think about.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Full-stack developer from Pakistan, most at home in React and
            Next.js, and just as comfortable shaping the API and database
            underneath.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/projects" className={buttonVariants({ size: "lg" })}>
              View projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Start a conversation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
