export const personalInfo = {
  name: "Fatima",
  title: "Full Stack Engineer & Cloud Architect",
  tagline: "Architecting scalable systems, robust microservices, and immersive web experiences.",
  location: "Remote / Worldwide",
  availability: "Available for new projects & full-time roles",
  email: "fatima.dev@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  about: `I am a passionate Full Stack Software Engineer with a strong foundation in designing resilient cloud architectures and crafting pixel-perfect, responsive user interfaces. With hands-on experience spanning from modern frontend frameworks like React & Next.js to enterprise backends using Node.js, Python, and Go, I bridge the gap between complex business logic and seamless user experiences.`,
  stats: [
    { label: "Years of Experience", value: "4+", icon: "Briefcase" },
    { label: "Projects Completed", value: "35+", icon: "CheckCircle2" },
    { label: "Cloud Services Deployed", value: "15+", icon: "Cloud" },
    { label: "Code Commits / Contributions", value: "2,400+", icon: "GitCommit" },
  ],
  pillars: [
    {
      title: "Scalable Architecture",
      description: "Designing decoupled, distributed microservices and event-driven systems tailored for high availability and throughput.",
      icon: "Layers"
    },
    {
      title: "Pixel-Perfect Frontend",
      description: "Crafting fluid, accessible, and high-performance user interfaces with modern React, animations, and responsive styling.",
      icon: "Layout"
    },
    {
      title: "Cloud & DevOps Automation",
      description: "Implementing CI/CD pipelines, container orchestration with Docker/K8s, and automated cloud deployments on AWS & GCP.",
      icon: "CloudLightning"
    },
    {
      title: "API & Database Optimization",
      description: "Engineering low-latency REST and GraphQL APIs backed by optimized PostgreSQL, Redis caching, and NoSQL clusters.",
      icon: "Database"
    }
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "React / Next.js", level: 95, popular: true },
        { name: "TypeScript / JavaScript", level: 92, popular: true },
        { name: "HTML5 / CSS3 / SCSS", level: 95, popular: false },
        { name: "Tailwind & Modern CSS", level: 90, popular: true },
        { name: "State Management (Redux/Zustand)", level: 88, popular: false },
        { name: "Three.js / WebGL / Canvas", level: 78, popular: false },
      ]
    },
    {
      name: "Backend & APIs",
      skills: [
        { name: "Node.js & Express", level: 94, popular: true },
        { name: "Python / FastAPI / Django", level: 88, popular: true },
        { name: "Go (Golang)", level: 80, popular: false },
        { name: "RESTful & GraphQL APIs", level: 92, popular: true },
        { name: "WebSockets & Real-time PubSub", level: 85, popular: false },
        { name: "Microservices Architecture", level: 84, popular: false },
      ]
    },
    {
      name: "Databases & Caching",
      skills: [
        { name: "PostgreSQL", level: 90, popular: true },
        { name: "MongoDB", level: 88, popular: true },
        { name: "Redis (Caching & Queues)", level: 86, popular: true },
        { name: "Supabase & Firebase", level: 90, popular: false },
        { name: "Prisma & TypeORM", level: 88, popular: false },
      ]
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Docker & Containerization", level: 90, popular: true },
        { name: "Kubernetes (K8s)", level: 78, popular: false },
        { name: "AWS (S3, Lambda, EC2, ECS)", level: 85, popular: true },
        { name: "CI/CD & GitHub Actions", level: 88, popular: true },
        { name: "Linux / Bash Shell", level: 86, popular: false },
        { name: "Git & Version Control", level: 96, popular: true },
      ]
    }
  ]
};

export const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "Nexus Cloud Systems",
    period: "2023 - Present",
    location: "San Francisco, CA (Remote)",
    description: "Spearheaded the development of a real-time data analytics dashboard handling 10M+ daily events. Led cross-functional team across React frontend and Node.js microservices.",
    achievements: [
      "Reduced API response latency by 42% through Redis caching & query optimizations",
      "Architected real-time WebSocket infrastructure serving 50k concurrent users",
      "Automated zero-downtime deployment pipelines using GitHub Actions and AWS ECS"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"]
  },
  {
    role: "Full Stack Developer",
    company: "Apex Digital Solutions",
    period: "2021 - 2023",
    location: "New York, NY (Hybrid)",
    description: "Built scalable SaaS applications and custom web solutions for enterprise clients. Collaborated closely with UI/UX designers and product managers to deliver seamless features.",
    achievements: [
      "Developed high-traffic customer portal with Next.js and modern CSS",
      "Integrated Stripe billing, role-based access control, and automated invoicing",
      "Mentored junior developers and instituted automated code linting & testing"
    ],
    technologies: ["Next.js", "React", "Python", "FastAPI", "MongoDB", "CSS Modules", "Stripe API"]
  },
  {
    role: "Frontend Engineer Intern",
    company: "Innovate Labs",
    period: "2020 - 2021",
    location: "Austin, TX",
    description: "Designed and implemented interactive web components, modernized legacy codebases to React hooks, and improved web vitals performance scores.",
    achievements: [
      "Improved Lighthouse performance scores from 64 to 98 across core landing pages",
      "Created reusable component library used across 4 internal products"
    ],
    technologies: ["JavaScript (ES6+)", "React", "HTML5/CSS3", "Webpack", "REST APIs"]
  }
];

export const projects = [
  {
    id: "nexus-analytics",
    title: "NexusPulse - Realtime Cloud Observability",
    category: "Full Stack",
    description: "An enterprise-grade telemetry and cloud metrics dashboard featuring live WebSocket charts, incident alerting, and distributed query logs.",
    longDescription: "NexusPulse is an end-to-end observability platform engineered to monitor distributed services in real-time. It features interactive anomaly detection charts, distributed tracing visualizations, and automated alerting integrations with Slack and Webhooks. Built for high performance with WebSocket stream aggregation and low memory footprint.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/nexus-pulse",
    featured: true,
    highlights: [
      "Live WebSocket chart streaming at 60 FPS",
      "Multi-tenant access control with JWT and OAuth2",
      "Optimized timeseries aggregations in PostgreSQL"
    ]
  },
  {
    id: "ai-code-copilot",
    title: "SynthCode - AI Intelligent Code Assistant",
    category: "AI & ML",
    description: "AI-powered developer productivity tool that analyzes pull requests, generates automated unit tests, and detects security vulnerabilities.",
    longDescription: "SynthCode integrates with GitHub API to review code changes automatically. It leverages LLM embeddings to understand repository-wide context and offers actionable refactor suggestions, edge-case unit test generation, and compliance checks directly in code review threads.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "FastAPI", "React", "OpenAI API", "Vector DB", "Docker"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/synth-code",
    featured: true,
    highlights: [
      "Context-aware codebase indexing using Pinecone vector embeddings",
      "Interactive diff viewer with inline suggestions",
      "Automated test suite generation with 90%+ pass rate"
    ]
  },
  {
    id: "orbit-commerce",
    title: "Orbit - Headless E-Commerce Platform",
    category: "Full Stack",
    description: "Blazing-fast headless e-commerce store with instant product search, dynamic filtering, Stripe checkout, and an admin inventory management panel.",
    longDescription: "A modern storefront built with Next.js App Router, Supabase, and Stripe. Provides microsecond-level page transitions, server-side rendered catalog pages, localized pricing, real-time inventory updates, and responsive mobile checkout flow.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Supabase", "Stripe", "Vanilla CSS", "Zustand"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/orbit-store",
    featured: true,
    highlights: [
      "Sub-100ms full-text fuzzy product search",
      "Secure Stripe webhooks handling dynamic subscriptions & orders",
      "Admin dashboard with sales graphs and inventory controls"
    ]
  },
  {
    id: "cloud-guard",
    title: "CloudGuard - K8s Security & Compliance Scanner",
    category: "Cloud / Backend",
    description: "Automated Kubernetes cluster security scanner that inspects pods for misconfigurations, leaked secrets, and CVE vulnerabilities.",
    longDescription: "Engineered in Go and Node.js to scan container images and Kubernetes manifests for security anomalies. Generates comprehensive audit reports and triggers automated pull requests with remediated configurations.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tags: ["Go", "Kubernetes", "Docker", "Node.js", "GraphQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/cloud-guard",
    featured: false,
    highlights: [
      "Continuous runtime monitoring agent with minimal overhead",
      "Custom security rule engine matching CIS benchmarks",
      "Interactive vulnerability matrix with remediation guide"
    ]
  },
  {
    id: "lumina-design",
    title: "Lumina UI - Component Design System",
    category: "Frontend / UI",
    description: "An accessible, themeable design system and React component library with built-in dark mode, fluid physics animations, and WCAG AAA compliance.",
    longDescription: "A comprehensive open-source React component library crafted with high attention to detail. Includes 40+ accessible primitives, keyboard navigation support, customizable token themes, and Storybook documentation.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "TypeScript", "CSS Modules", "Storybook", "Web Components"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/lumina-ui",
    featured: false,
    highlights: [
      "40+ fully tested and accessible UI components",
      "Zero layout shift design with smooth CSS transitions",
      "Interactive documentation playground"
    ]
  },
  {
    id: "flow-sync",
    title: "FlowSync - Distributed Task Scheduler",
    category: "Cloud / Backend",
    description: "Fault-tolerant distributed job scheduler and workflow coordinator with real-time DAG visualizations and auto-retry logic.",
    longDescription: "A distributed workflow manager designed to orchestrate complex background processing pipelines across serverless workers. Features DAG visualizer, dead letter queues, and cron scheduling.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Redis", "PostgreSQL", "Docker", "WebSockets"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/flow-sync",
    featured: false,
    highlights: [
      "Directed Acyclic Graph (DAG) task execution pipeline",
      "Automatic retry with exponential backoff & alerts",
      "Interactive monitoring console"
    ]
  }
];

export const testimonials = [
  {
    quote: "Fatima's architectural insight and frontend finesse completely elevated our product. She delivers clean, scalable code rapidly while keeping the user experience at the forefront.",
    author: "Alex Morgan",
    role: "VP of Engineering",
    company: "Nexus Systems",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "One of the most talented full-stack engineers I've collaborated with. Her ability to transition from complex database queries to polished micro-interactions is truly exceptional.",
    author: "David Chen",
    role: "Lead Architect",
    company: "Apex Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Fatima turned our vision into a high-performance web app that handled our launch traffic seamlessly. Diligent, proactive, and a pleasure to work with!",
    author: "Elena Rostova",
    role: "Product Director",
    company: "Innovate Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const terminalCommands = {
  help: "Available commands: 'bio', 'skills', 'projects', 'experience', 'contact', 'socials', 'clear', 'sudo hire'",
  bio: "Fatima — Full Stack Software Engineer & Cloud Architect. Passionate about building fast, resilient, and beautiful digital products.",
  skills: "• Frontend: React, Next.js, TypeScript, Modern CSS\n• Backend: Node.js, Express, Python, FastAPI, Go\n• Cloud & DB: AWS, Docker, Kubernetes, PostgreSQL, Redis, MongoDB",
  projects: "• NexusPulse (Cloud Observability)\n• SynthCode (AI Code Reviewer)\n• Orbit (Headless E-Commerce)\n• CloudGuard (K8s Security Scanner)",
  experience: "• Senior Full Stack Engineer @ Nexus Cloud Systems (2023 - Present)\n• Full Stack Developer @ Apex Digital Solutions (2021 - 2023)\n• Frontend Engineer @ Innovate Labs (2020 - 2021)",
  contact: "Email: fatima.dev@example.com | Location: Remote / Worldwide | Open for opportunities!",
  socials: "GitHub: https://github.com\nLinkedIn: https://linkedin.com\nTwitter: https://twitter.com",
  "sudo hire": "🎉 ACCESS GRANTED! Fatima is available for immediate hire. Let's build something exceptional together!"
};


