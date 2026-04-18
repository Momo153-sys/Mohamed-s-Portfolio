import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass ring-glow" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 font-display font-semibold">
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">
              <Code2 className="h-4 w-4" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary glow-dot animate-pulse-ring" />
            </span>
            <span className="text-sm tracking-tight">alex.dev</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-1.5 text-sm text-muted-foreground rounded-lg hover:text-foreground hover:bg-secondary/60 transition-colors"
                activeProps={{ className: "px-3 py-1.5 text-sm rounded-lg text-foreground bg-secondary/80" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="/resume.pdf"
              className="text-sm px-3 py-1.5 rounded-lg border border-border hover:bg-secondary/60 transition-colors"
            >
              Resume
            </a>
            <Link
              to="/contact"
              className="text-sm px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Hire me
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary/60"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                activeProps={{ className: "px-3 py-2 rounded-lg text-sm text-foreground bg-secondary/80" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <a href="/resume.pdf" className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground">
              Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
