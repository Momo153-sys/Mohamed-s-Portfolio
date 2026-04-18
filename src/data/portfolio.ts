export const profile = {
  name: "Alex Carter",
  role: "Full‑Stack Software Engineer",
  tagline: "I build fast, accessible products with thoughtful UX and resilient backends.",
  location: "Remote · EU",
  email: "hello@alexcarter.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resume: "/resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "TanStack", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Bun", "PostgreSQL", "Prisma", "GraphQL", "tRPC"],
  },
  {
    category: "Tools",
    items: ["Git", "Vite", "Vitest", "Playwright", "Figma", "Storybook"],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "Cloudflare", "GitHub Actions", "Terraform", "Linux"],
  },
] as const;

export const projects = [
  {
    title: "Lumen Analytics",
    summary:
      "Real-time product analytics for SaaS teams. Reduced query times by 8× with a custom columnar pipeline.",
    problem: "Existing dashboards lagged on 100M+ events.",
    solution: "Designed a streaming ingest layer + materialized rollups served from edge.",
    stack: ["Next.js", "TypeScript", "ClickHouse", "Cloudflare Workers"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-primary/30 to-accent/20",
  },
  {
    title: "Orbit UI Kit",
    summary:
      "Accessible, themeable React component library used by 4 production apps and 2k weekly downloads.",
    problem: "Inconsistent UI across teams slowed shipping.",
    solution: "Built a token-driven design system with strict a11y testing in CI.",
    stack: ["React", "Radix", "Tailwind", "Storybook"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-accent/30 to-primary/20",
  },
  {
    title: "Tideflow",
    summary:
      "Self-hosted workflow engine with a visual builder and durable, replayable executions.",
    problem: "Teams needed Zapier-like flows without vendor lock-in.",
    solution: "Built an event-sourced runtime with idempotent steps and resume-from-failure.",
    stack: ["Node.js", "PostgreSQL", "BullMQ", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-primary/25 to-accent/25",
  },
  {
    title: "Pagebreak",
    summary:
      "Markdown-first writing app with collaborative cursors and offline-first sync.",
    problem: "Writers wanted Notion-grade UX without the bloat.",
    solution: "CRDT-backed sync layer + a focused editor with zero-jank typing.",
    stack: ["React", "Yjs", "IndexedDB", "Tauri"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-accent/25 to-primary/30",
  },
  {
    title: "Northwind v2",
    summary:
      "A modern reference e‑commerce app showcasing edge rendering, A/B testing and full observability.",
    problem: "Demos rarely show production-grade patterns end-to-end.",
    solution: "Stitched together SSR, feature flags, OpenTelemetry and SLO dashboards.",
    stack: ["Next.js", "Stripe", "OpenTelemetry", "Vercel"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-primary/30 to-accent/30",
  },
  {
    title: "DevPulse CLI",
    summary:
      "Terminal dashboard for engineers — PRs, CI, on-call, and inbox at a glance.",
    problem: "Context switching between tabs killed flow.",
    solution: "Single TUI consolidating GitHub, Linear, PagerDuty with smart filters.",
    stack: ["Bun", "Ink", "TypeScript"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-accent/20 to-primary/30",
  },
] as const;

export const timeline = [
  {
    kind: "work",
    title: "Senior Software Engineer",
    org: "Northbeam Labs",
    period: "2023 — Present",
    points: [
      "Lead a 4-person platform team owning auth, billing and observability.",
      "Cut p95 API latency from 480ms → 110ms via caching + query rewrites.",
    ],
  },
  {
    kind: "work",
    title: "Full‑Stack Engineer",
    org: "Helio Studio",
    period: "2021 — 2023",
    points: [
      "Shipped 12+ client products end‑to‑end across fintech and health.",
      "Built internal CLI used by 30+ engineers, saving ~6h/week each.",
    ],
  },
  {
    kind: "work",
    title: "Software Engineering Intern",
    org: "Atomly",
    period: "Summer 2020",
    points: [
      "Owned migration to TypeScript across the web client.",
      "Authored RFC adopted as company-wide testing standard.",
    ],
  },
  {
    kind: "edu",
    title: "B.Sc. Computer Science",
    org: "TU Delft",
    period: "2017 — 2021",
    points: ["Focus on distributed systems and HCI. Graduated with honors."],
  },
] as const;
