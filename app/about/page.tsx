import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { SkillsSection } from "@/components/skills-section";
import { experience } from "@/lib/data/experience";
import { formatDateRange } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Anzalna Kainat got into software, how she approaches building products, and what she's learning next.",
};

const learning = [
  "Retrieval-augmented generation and vector search at production scale",
  "Postgres performance tuning — indexing, query planning, and connection pooling",
  "Design systems: building component libraries that stay consistent across products",
];

const education = [
  {
    title: "BS Computer Science",
    place: "University Of Sindh, Pakistan",
    note: "Focused electives in web technologies, databases, and software design.",
  },
];

const certifications = [
  "Meta Front-End Developer Professional Certificate",
  "Google UX Design Certificate",
];

export default function AboutPage() {
  return (
    <div className="container py-16 sm:py-24">
      <SectionHeading
        path="// about.md"
        title="I like software that gets out of the way."
      />

      <div className="mt-10 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            I got into programming the way a lot of developers do — by trying
            to fix something that annoyed me. An early attempt to tweak a
            simple website turned into hours of trial and error, and
            somewhere in that mess of broken layouts I realized I liked the
            problem more than I was frustrated by it. That curiosity is still
            the thing that gets me to open the editor on a weekend.
          </p>
          <p>
            I’m a full-stack JavaScript developer based in Pakistan.
            My strongest instincts are on the frontend — I care a lot about
            how an interface feels under a person’s hands, whether an
            interaction is a half-second too slow, whether a form makes
            sense on the first try. But I don’t think of that as separate
            from the backend. The best frontend decisions are usually
            informed by understanding exactly what the API and database can
            and can’t do cheaply, so I’ve made a habit of building the whole
            path myself whenever I can.
          </p>
          <p>
            Day to day, that means building and maintaining internal
            applications at an insurance provider that thousands of staff
            rely on, where “it works on my machine” isn’t good enough — it
            has to work reliably for people who didn’t choose the software
            and can’t easily work around its bugs. Alongside that, I build my
            own products, like SecondBrain AI, to stay close to newer tools
            and ideas I don’t get to use in day-to-day enterprise work.
          </p>
          <p>
            My approach to a new feature is fairly consistent: understand
            the actual problem before opening an editor, sketch the data
            model before the component tree, and keep the first version
            small enough to be wrong quickly rather than slowly. I’d rather
            ship something narrow and correct, then widen it based on what I
            learn, than guess at every edge case up front. Tests, types, and
            clear naming aren’t extra credit to me — they’re what let me
            move fast six months from now instead of just this week.
          </p>
          <p>
            Outside of assigned work, I’m usually deep in whatever concept
            most recently made me feel behind — right now that’s retrieval
            and search, prompted by building SecondBrain AI. I’d rather learn
            a new idea by shipping something small with it than by finishing
            a course about it.
          </p>
        </div>

        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="eyebrow">{"// education.json"}</p>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="font-display text-sm font-semibold">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.place}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <p className="eyebrow">{"// certifications.json"}</p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-muted-foreground">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <p className="eyebrow">{"// currently-learning.json"}</p>
            <ul className="mt-4 space-y-3">
              {learning.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <SectionHeading path="// experience.ts" title="Where I’ve worked" />

        <div className="mt-10 space-y-6">
          {experience.map((entry) => (
            <div
              key={entry.company}
              className="rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {entry.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {entry.company} · {entry.location}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {formatDateRange(entry.start, entry.end)}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {entry.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {entry.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {entry.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <SectionHeading
          path="// skills.json"
          title="The toolkit, grouped by what it’s for"
        />
        <div className="mt-10">
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}
