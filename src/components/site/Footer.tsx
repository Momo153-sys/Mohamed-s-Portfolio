import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
     
<script src="https://elfsightcdn.com/platform.js" async></script>
<div className="elfsight-app-9c0e2806-d48e-40a8-9dfa-47f30cbf037c" data-elfsight-app-lazy></div>

      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohamed Samba Doumbia. Crafted with care.
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/Momo153-sys" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-secondary/60" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-samba-doumbia-136072238/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-secondary/60" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://x.com/momo1of1?s=21" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-secondary/60" aria-label="Twitter">
            <Twitter className="h-4 w-4" />
          </a>
          <Link to="/contact" className="p-2 rounded-lg hover:bg-secondary/60" aria-label="Contact">
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
