import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id={id} ref={ref} className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div className="reveal mb-12 max-w-2xl">
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/90">
            <span className="h-px w-8 bg-primary/60" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-5xl font-semibold text-gradient">{title}</h2>
        {description && (
          <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>
        )}
      </div>
      <div className="reveal">{children}</div>
    </section>
  );
}
