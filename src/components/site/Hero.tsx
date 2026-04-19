import { Link } from "@tanstack/react-router";
import { ArrowRight, Github, FileDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import { AvailableBadge } from "./Available";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl pointer-events-none animate-float" />

      <div className="relative mx-auto max-w-6xl px-4 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="flex flex-col items-start gap-6">
          <AvailableBadge />
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">{profile.name}.</span>
            <br />
            <span className="text-muted-foreground">I craft software</span>
            <br />
            <span className="text-foreground">that feels </span>
            <span className="relative inline-block">
              <span className="text-gradient">effortless</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                <path d="M2 6 Q 50 1 100 5 T 198 4" stroke="oklch(0.78 0.16 155)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>

          <p className="max-w-xl text-base md:text-lg text-muted-foreground">
            {profile.role} based in {profile.location}. {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all ring-glow"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-secondary/60 transition-colors font-medium"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:bg-secondary/60 transition-colors font-medium"
            >
              <FileDown className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl">
            {[
              { k: "2+", v: "Years building" },
              { k: "5+", v: "Shipped projects" },
              { k: "100%", v: "Care given" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-4">
                <div className="text-2xl font-display font-semibold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
