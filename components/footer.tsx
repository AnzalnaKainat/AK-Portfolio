import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

const social = [
  { href: siteConfig.social.github, label: "GitHub", icon: Github },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
  // { href: siteConfig.social.twitter, label: "Twitter", icon: Twitter },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-mono text-xs text-muted-foreground">
              ~/{siteConfig.name.toLowerCase().replace(" ", "-")}
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Building interfaces and the systems behind them, one focused
              project at a time — from {siteConfig.location}.
            </p>
          </div>

          <div>
            <p className="eyebrow">{"// navigate"}</p>
            <ul className="mt-3 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">{"// elsewhere"}</p>
            <ul className="mt-3 space-y-2">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Built from scratch, line by line.</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-green" />
            status: shipping
          </p>
        </div>
      </div>
    </footer>
  );
}
