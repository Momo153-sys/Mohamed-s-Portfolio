import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Timeline } from "@/components/site/Timeline";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mohamed Samba Doumbia" },
      { name: "description", content: "Work history, internships and education of Mohamed Samba Doumbia." },
      { property: "og:title", content: "Experience — Mohamed Samba Doumbia" },
      { property: "og:description", content: "A timeline of roles, impact and education." },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <Section
      eyebrow="Journey"
      title="Experience & Education"
      description="A timeline of roles, impact and the things I’ve learned along the way."
    >
      <Timeline />
    </Section>
  );
}
