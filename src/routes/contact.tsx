import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mohamed Samba Doumbia" },
      { name: "description", content: "Get in touch with Mohamed Samba Doumbia for roles, freelance or collaborations." },
      { property: "og:title", content: "Contact — Mohamed Samba Doumbia" },
      { property: "og:description", content: "Let's build something good together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Section
      eyebrow="Say hello"
      title="Let’s build something good."
      description="I’m currently open to senior engineering roles and selective freelance work. Usually reply within 24 hours."
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
        <ContactForm />
        <div className="glass rounded-2xl p-6 space-y-4 min-w-[260px]">
          <h3 className="font-display font-semibold">Elsewhere</h3>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground">
            <Mail className="h-4 w-4 text-primary" /> {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4 text-primary" /> github.com/alexcarter
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground">
            <Linkedin className="h-4 w-4 text-primary" /> linkedin.com/in/alexcarter
          </a>
        </div>
      </div>
    </Section>
  );
}
