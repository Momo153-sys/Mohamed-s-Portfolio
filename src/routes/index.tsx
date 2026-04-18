import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { SkillsGrid } from "@/components/site/SkillsGrid";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Full-Stack Software Engineer" },
      { name: "description", content: "I design and build fast, accessible products. Available for senior engineering roles." },
      { property: "og:title", content: "Alex Carter — Full-Stack Software Engineer" },
      { property: "og:description", content: "Portfolio, projects and experience of Alex Carter." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Section
        eyebrow="What I do"
        title="A polyglot toolkit"
        description="From pixel-perfect interfaces to resilient backends and the infra to ship them — I’m comfortable across the stack."
      >
        <SkillsGrid />
      </Section>

      <Section
        eyebrow="Selected work"
        title="Projects I’m proud of"
        description="A glance at a few things I’ve built recently. More on the projects page."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            See all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>
    </>
  );
}
