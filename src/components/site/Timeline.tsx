import { timeline } from "@/data/portfolio";
import { Briefcase, GraduationCap } from "lucide-react";

export function Timeline() {
  return (
    <ol className="relative border-l border-border ml-3">
      {timeline.map((t, i) => {
        const Icon = t.kind === "edu" ? GraduationCap : Briefcase;
        return (
          <li key={i} className="mb-10 ml-6">
            <span className="absolute -left-3 grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary ring-4 ring-background">
              <Icon className="h-3 w-3" />
            </span>
            <div className="glass rounded-xl p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold">
                  {t.title} <span className="text-muted-foreground font-normal">· {t.org}</span>
                </h3>
                <span className="text-xs text-muted-foreground font-mono">{t.period}</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc list-inside marker:text-primary/60">
                {t.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
