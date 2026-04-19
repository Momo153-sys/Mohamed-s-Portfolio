import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { SkillsGrid } from "@/components/site/SkillsGrid";
import { Sparkles, Target, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mohamed Samba Doumbia" },
      {
        name: "description",
        content:
          "Full-stack software engineer specializing in real-time systems, scalable architecture, and performance-focused applications.",
      },
      { property: "og:title", content: "About — Mohamed Samba Doumbia" },
      {
        property: "og:description",
        content:
          "Engineer focused on building reliable, scalable, and high-performance applications.",
      },
    ],
  }),
  component: About,
});

const traits = [
  {
    icon: Sparkles,
    title: "Engineering craft",
    body:
      "I focus on building systems that feel fast, reliable, and intuitive — from rendering performance to clean architecture.",
  },
  {
    icon: Target,
    title: "Outcome-driven",
    body:
      "I prioritize work that improves real outcomes — performance, reliability, and user experience — not just shipping features.",
  },
  {
    icon: Users,
    title: "Team impact",
    body:
      "I contribute beyond code by documenting decisions, simplifying systems, and helping teams move faster.",
  },
];

function About() {
  return (
    <>
      <Section
        eyebrow="About"
        title="Full-stack engineer focused on real-world systems."
        description="I build end-to-end applications with a strong focus on performance, real-time data synchronization, and scalable architecture. My work spans from frontend interfaces to backend systems, with a particular interest in solving complex state and concurrency problems."
      >
        <div className="grid md:grid-cols-3 gap-5">
          {traits.map((t) => (
            <div
              key={t.title}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary mb-4">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Skills" title="Core technologies and tools">
        <SkillsGrid />
      </Section>
    </>
  );
}