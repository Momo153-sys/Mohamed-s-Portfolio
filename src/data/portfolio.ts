export const profile = {
  name: "Mohamed Samba Doumbia",
  role: "Full‑Stack Software Engineer",
  tagline: "Building scalable, real-time applications with strong system design and clean user experiences.",
  location: "Remote · Turkey",
  email: "mohameddoum2000@gmail.com",
  github: "https://github.com/Momo153-sys",
  linkedin: "https://www.linkedin.com/in/mohamed-samba-doumbia-136072238/",
  resume: "/resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "TanStack Query", "Tailwind CSS"],
    },
  {
    category: "Backend",
    items: ["Node.js", "SQL", "MongoDB", "Appwrite", "REST APIs"],
  },
  {
    category: "Systems",
    items: ["WebSockets", "State Management", "Event-Driven Architecture"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  },
] as const;

export const projects = [
  {
    title: "Collaborative Whiteboard by Mohamed", 
    summary:
      "A high-performance collaborative workspace for real-time visual brainstorming and vector-based drawing.",
    problem: "Rendering complex shapes and synchronizing thousands of stroke coordinates across multiple clients without lag.",
    solution: "Engineered a custom rendering engine using the HTML5 Canvas API and optimized WebSocket payloads to broadcast real-time vector data via Appwrite.",
    stack: ["Next.js", "TypeScript", "Appwrite", "Canvas API", "TanStack Query"],
    github: "https://github.com/Momo153-sys/Collaborative-Whiteboard",
    demo: "https://superb-dodol-7b1481.netlify.app",
    accent: "from-accent/30 to-primary/20",
},
  {
    title: "MoChat App", 
    summary:
      "A real-time messaging suite with instant delivery, global presence tracking, and persistent message history.",
    problem: "Handling race conditions and state mismatches in high-frequency real-time environments.",
    solution: "Developed an event-driven architecture using Appwrite WebSockets for data streaming and TanStack Query for robust cache management and background synchronization.",
    stack: ["React", "TypeScript", "Appwrite", "TanStack Query", "Tailwind CSS"],
    github: "https://github.com/Momo153-sys/Realtime-Chat-App",
    demo: "https://realtime-chat-app-seven-sepia.vercel.app/",
    accent: "from-primary/30 to-accent/20",
},
  
  
  {
    title: "Sentiment Analysis AI", // Suggestion: Something sleek and AI-focused
    summary:
      "A natural language processing (NLP) tool that analyzes text sentiment in real-time to gauge emotional tone and intent.",
    problem: "Raw text data is often difficult to quantify for internal communication and feedback loops.",
    solution: "Developed a Python-based sentiment engine using NLTK/TextBlob and exposed it via a RESTful API to a lightweight, responsive frontend.",
    stack: ["Python", "Flask/FastAPI", "NLP", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Momo153-sys/Sentiment-Analysis-Model",
    demo: "https://momo153-sys.github.io/Sentiment-Analysis-Model/",
    accent: "from-primary/30 to-accent/20",
},
  {
    title: "Tic-Tac-Toe with AI", 
    summary:
      "An unbeatable AI opponent powered by the Minimax algorithm, featuring Alpha-Beta pruning for optimized decision-making.",
    problem: "Standard game logic often feels predictable or computationally expensive when calculating future outcomes.",
    solution: "Implemented a recursive Minimax engine with Alpha-Beta pruning to reduce the search space, ensuring a perfect game every time with zero latency.",
    stack: ["JavaScript (ES6+)", "CSS3 (Modern UI)", "HTML5"],
    github: "https://github.com/Momo153-sys/Tic-Tac-Toe-with-AI",
    demo: "https://momo153-sys.github.io/Tic-Tac-Toe-with-AI/",
    accent: "from-accent/30 to-primary/20",
},
  {
    title: "Millionaire: Interactive Quiz Engine",
    summary:
      "A high-stakes trivia platform featuring complex game-state management, dynamic DOM rendering, and probability-based assistant logic.",
    problem: "Static quizzes lack the tension and multi-layered logic found in broadcast-style game shows.",
    solution: "Developed a centralized quiz engine in Vanilla JS that handles conditional win-states, session persistence, and simulated lifeline algorithms (50/50, Public Vote).",
    stack: ["JavaScript (ES6)", "Bootstrap 5", "HTML5", "CSS3"],
    github: "https://github.com/Momo153-sys/Who-wants-to-be-a-millionaire",
    demo: "https://momo153-sys.github.io/Who-wants-to-be-a-millionaire/",
    accent: "from-primary/30 to-accent/20",
},
  {
    title: "MoBlog App",
    summary:
      "A complete content management system with server-side rendering, persistent sessions, and a dynamic NoSQL database.",
    problem: "Static content platforms lack the flexibility for user-driven data and secure content management.",
    solution: "Built a robust Node.js/Express server using EJS for dynamic templating and MongoDB for flexible data persistence and complex querying.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    github: "https://github.com/Momo153-sys/blog-project",
    demo: "-", 
    accent: "from-accent/30 to-primary/20",
},
{
    title: "MoShop App",
    summary:
      "A feature-rich marketplace platform supporting dual-role authentication, dynamic cart orchestration, and automated order processing.",
    problem: "Coordinating real-time inventory updates and secure payment/order transitions across different user permissions.",
    solution: "Engineered an Express-based backend with MongoDB to manage a complex state machine for orders (Pending/Fullfilled) and implemented Multer-based media pipelines for product management.",
    stack: ["Node.js", "Express", "MongoDB", "Bcrypt", "Multer", "EJS"],
    github: "https://github.com/Momo153-sys/shop-project",
    demo: "-",
    accent: "from-primary/30 to-accent/20",
},
] as const;

export const timeline = [
  {
    kind: "work",
    title: "Software Developer",
    org: "REMAX WISE",
    location: "Lisbon, Portugal (Remote)",
    period: "Feb 2025 — Sept 2025",
    points: [
      "Architected a production-ready real estate platform using Next.js and TypeScript, optimizing for SEO and Core Web Vitals.",
      "Integrated AI-powered assistants to automate property inquiries and enhance customer engagement workflows.",
      "Developed a headless CMS ecosystem using Sanity Studio for dynamic, real-time content management.",
    ],
  },
  {
    kind: "work",
    title: "Full-Stack Developer Intern",
    org: "Eman Halıcılık San. Tic. Ltd. Şti.",
    location: "Istanbul, Turkey",
    period: "April 2025 — Oct 2025",
    points: [
      "Orchestrated large-scale product and sales data synchronization across global marketplaces (Amazon, Trendyol, Hepsiburada).",
      "Enhanced enterprise website performance and security, focusing on horizontal scalability for high-traffic sales periods.",
      "Automated internal data reporting tools to provide actionable insights for multi-market operations.",
    ],
  },
  {
    kind: "work",
    title: "Application Full-Stack Developer Intern",
    org: "Proceedit",
    location: "Barcelona, Spain (Remote)",
    period: "Feb 2024 — Aug 2024",
    points: [
      "Developed responsive cross-platform UI components using Flutter and Dart for enterprise-level applications.",
      "Optimized production PostgreSQL databases and authored Python automation scripts to streamline backend services.",
      "Managed cloud-based development workflows and infrastructure deployments within the AWS ecosystem.",
    ],
  },
  {
    kind: "edu",
    title: "B.Sc. Computer Engineering",
    org: "Altinbas University",
    period: "2022 — 2026 (Expected)",
    points: [
      "Final year student focusing on the intersection of Control Systems (PID, Logic) and Full-Stack Software Engineering.",
      "Dean's List / Relevant Coursework: Data Structures, AI for Communication, and Industrial Automation.",
    ],
  },
] as const;
