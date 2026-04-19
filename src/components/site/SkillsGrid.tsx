import { skills } from "@/data/portfolio";
import { Layers, Server, Wrench, Cloud } from "lucide-react";

const icons = {
  Frontend: Layers,
  Backend: Server,
  Systems: Cloud,
  Tools: Wrench,
} as const;

export function SkillsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {skills.map((cat) => {
        const Icon = icons[cat.category as keyof typeof icons];
        return (
          <div
            key={cat.category}
            className="group relative glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:ring-glow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold">{cat.category}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary/70 text-secondary-foreground border border-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
