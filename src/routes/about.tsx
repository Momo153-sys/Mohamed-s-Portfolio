import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { SkillsGrid } from "@/components/site/SkillsGrid";
import { Sparkles, Target, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Carter" },
      { name: "description", content: "The story, mindset and strengths behind Alex Carter, full-stack software engineer." },
      { property: "og:title", content: "About — Alex Carter" },
      { property: "og:description", content: "Developer mindset, focus and strengths." },
    ],
  }),
  component: About,
});

const traits = [
  { icon: Sparkles, title: "Craft over hype", body: "I obsess over the details users feel but never name — micro-interactions, perceived performance, copy." },
  { icon: Target, title: "Outcome-driven", body: "I prioritize the work that moves a metric. Shipping is half the job — measuring is the other half." },
  { icon: Users, title: "Multiplier on teams", body: "I write docs, mentor, and build the small tools that make everyone around me 10% faster." },
];

function About() {
  return (
    <>
      <Section
        eyebrow="About"
        title="A developer who treats software like a craft."
        description="I’ve spent the last 5 years shipping products end-to-end — from early prototypes to platforms serving millions. I love the moment a system starts to feel inevitable."
      >
        <div className="grid md:grid-cols-3 gap-5">
          {traits.map((t) => (
            <div key={t.title} className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary mb-4">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Skills" title="What’s in my toolbelt">
        <SkillsGrid />
      </Section>
    </>
  );
}
