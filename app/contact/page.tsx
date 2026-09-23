import type { Metadata } from "next";
import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Anzalna Kainat about full-time roles, freelance projects, or a quick technical question.",
};

const details = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: Clock, label: "Timezone", value: "GMT+5 (Asia/Karachi)" },
];

const social = [
  { icon: Github, label: "GitHub", href: siteConfig.social.github },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
  // { icon: Twitter, label: "Twitter / X", href: siteConfig.social.twitter },
];

export default function ContactPage() {
  return (
    <div className="container py-16 sm:py-24">
      <SectionHeading
        path="// contact.ts"
        title="Let's build something worth shipping."
        description="Whether it's a full-time role, a freelance project, or a question about how something on this site was built — I read every message myself."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="flex items-center gap-2 font-mono text-xs text-signal-green">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
              {siteConfig.availability}
            </p>

            <dl className="mt-6 space-y-4">
              {details.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <dt className="font-mono text-xs text-muted-foreground">
                      {item.label}
                    </dt>
                    {item.href ? (
                      <dd>
                        <a
                          href={item.href}
                          className="text-sm transition-colors hover:text-signal-blue"
                        >
                          {item.value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="text-sm">{item.value}</dd>
                    )}
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <p className="eyebrow">{"// elsewhere"}</p>
            <ul className="mt-4 space-y-3">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <item.icon className="h-4 w-4" /> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
