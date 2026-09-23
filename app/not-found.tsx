import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-card text-left shadow-xl">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-signal-rose/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-green/70" />
          <span className="ml-3 font-mono text-[11px] text-muted-foreground">
            terminal
          </span>
        </div>
        <div className="px-5 py-6 font-mono text-sm">
          <p className="text-muted-foreground">$ find . -name &ldquo;{"{this-page}"}&rdquo;</p>
          <p className="mt-2 text-signal-rose">
            error: 404 — no route matches this path
          </p>
          <p className="mt-4 text-muted-foreground">
            <span className="text-signal-green">$</span> suggestion: head back
            home and try again
          </p>
        </div>
      </div>

      <Link href="/" className={buttonVariants({ size: "lg", className: "mt-8" })}>
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
    </div>
  );
}
