import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  stack: readonly string[];
  github: string;
  demo: string;
  accent: string;
};

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group relative rounded-2xl glass p-6 overflow-hidden transition-all hover:-translate-y-1 hover:ring-glow">
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold">{p.title}</h3>
          <div className="flex items-center gap-1">
            <a href={p.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-secondary/60" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href={p.demo} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-secondary/60" aria-label="Live demo">
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>

        <dl className="mt-5 space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="text-primary/90 font-medium shrink-0">Problem</dt>
            <dd className="text-muted-foreground">{p.problem}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-primary/90 font-medium shrink-0">Solution</dt>
            <dd className="text-muted-foreground">{p.solution}</dd>
          </div>
        </dl>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <li key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/70 border border-border text-secondary-foreground">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
