import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mohamed Samba Doumbia" },
      { name: "description", content: "A selection of products, libraries and tools built by Mohamed Samba Doumbia." },
      { property: "og:title", content: "Projects — Mohamed Samba Doumbia" },
      { property: "og:description", content: "Real-world projects with problem, solution and stack." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <Section
      eyebrow="Work"
      title="Projects"
      description="Each card includes the problem, the solution, and the stack — the way I’d talk about it in a 1:1."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
