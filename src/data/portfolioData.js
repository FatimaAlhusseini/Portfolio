export const personalInfo = {
  name: "Fatima Al-Husseini",
  title: "Web Developer | ASP.NET & React Developer",
  tagline:
    "CIS student with hands-on experience building full-stack web applications using ASP.NET Core, React, and SQL Server.",
  location: "Jordan",
  availability: "Open to Web Development & Software Engineering opportunities",
  email: "fatimahusseini192@gmail.com",
  phone: "+962781884506",
  github: "https://github.com/FatimaAlhusseini",
  linkedin: "https://linkedin.com/in/fatima-al-husseini-0a02601bb/",
  twitter: "",

  about: `Computer Information Systems (CIS) student at Al Al-Bayt University with a strong interest in web development and backend technologies. Skilled in ASP.NET, React, and SQL Server databases. Eager to leverage hands-on training experience and technical skills in software engineering and web development opportunities.`,

  education: {
    degree: "Bachelor of Computer Information Systems (CIS)",
    university: "Al Al-Bayt University",
    status: "In Progress"
  },

  certifications: [
    "ASP.NET Course",
    "Introduction to Front-End Development – Meta"
  ],

  languages: ["Arabic", "English"],

  stats: [
    { label: "Backend", value: "ASP.NET", icon: "Server" },
    { label: "Frontend", value: "React", icon: "Layout" },
    { label: "Database", value: "SQL Server", icon: "Database" },
    { label: "Reporting", value: "SSRS & BI", icon: "BarChart2" }
  ],

  pillars: [
    {
      title: "Full-Stack Web Development",
      description:
        "Building end-to-end web applications using ASP.NET Core MVC for the backend and React/JavaScript for the frontend.",
      icon: "Globe"
    },
    {
      title: "ASP.NET Core & APIs",
      description:
        "Developing secure REST APIs with authentication, DTOs, rate limiting, custom middlewares, and email service integration.",
      icon: "Server"
    },
    {
      title: "Database Engineering",
      description:
        "Designing and implementing SQL Server and Oracle DB schemas including stored procedures, triggers, functions, and scheduled jobs.",
      icon: "Database"
    },
    {
      title: "Reporting & BI",
      description:
        "Creating interactive dashboards and data reports using Power BI with custom HTML/CSS visuals and SQL Server Reporting Services (SSRS).",
      icon: "BarChart2"
    }
  ]
};


export const skillsData = {
  categories: [
    {
      name: "Backend & APIs",
      skills: [
        { name: "ASP.NET / ASP.NET Core MVC", level: 82, popular: true },
        { name: "C#", level: 78, popular: true },
        { name: "REST APIs & DTOs", level: 78, popular: true },
        { name: "Custom Middlewares", level: 72, popular: false },
        { name: "Basic Authentication", level: 70, popular: false },
        { name: "Rate Limiting", level: 68, popular: false }
      ]
    },
    {
      name: "Frontend & UI",
      skills: [
        { name: "HTML5 & CSS3", level: 85, popular: true },
        { name: "JavaScript", level: 75, popular: true },
        { name: "React", level: 75, popular: true },
        { name: "Bootstrap", level: 78, popular: true },
        { name: "Responsive Design", level: 80, popular: true },
        { name: "Multi-language Localization", level: 72, popular: false }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "SQL Server", level: 85, popular: true },
        { name: "Oracle DB", level: 72, popular: true },
        { name: "Stored Procedures", level: 80, popular: true },
        { name: "Triggers & Functions", level: 75, popular: false },
        { name: "Database Transactions", level: 74, popular: false },
        { name: "Database Design", level: 80, popular: true }
      ]
    },
    {
      name: "Reporting & Tools",
      skills: [
        { name: "Power BI", level: 70, popular: true },
        { name: "SSRS", level: 72, popular: true },
        { name: "IIS Server", level: 68, popular: false },
        { name: "Git & GitHub", level: 75, popular: true },
        { name: "Postman", level: 72, popular: true },
        { name: "OOP", level: 78, popular: true }
      ]
    }
  ]
};


export const experiences = [
  {
    role: "Software Development Intern",
    company: "Royal Scientific Society (RSS)",
    period: "Aug 2026 – Sep 2026",
    location: "Jordan",
    description:
      "Developed and maintained full-stack web applications using ASP.NET Core MVC and Oracle/SQL Server databases during practical training at RSS.",
    achievements: [
      "Built RESTful APIs with Basic Authentication, DTOs, Email Service integration, and Rate Limiting for security",
      "Implemented complex database objects including Stored Procedures, Triggers, Functions, and SQL Server Jobs for task automation",
      "Designed interactive dashboards and reports using Power BI (HTML/CSS visuals) and SQL Server Reporting Services (SSRS)",
      "Enforced performance and security enhancements using custom Middlewares, server/client-side pagination, and Database Transactions",
      "Applied multi-language support (Arabic/English localization) across application UI components"
    ],
    technologies: [
      "ASP.NET Core MVC", "C#", "SQL Server", "Oracle DB",
      "REST APIs", "Power BI", "SSRS", "IIS", "Git", "JavaScript", "HTML", "CSS"
    ]
  }
];


export const projects = [
  {
    id: "insightcv",
    title: "InsightCV – Job Portal with AI Enhancement",
    category: "Full Stack",
    description:
      "Full-stack job portal system connecting job seekers, employers, and admins with dynamic resume generation and AI features.",
    longDescription:
      "InsightCV is a graduation project — a full-stack job recruitment platform connecting job seekers, employers, and administrators. Built with a React (Vite) frontend featuring custom Glassmorphism and RTL/multi-language support, and a scalable ASP.NET Core 8 Web API backend with Entity Framework Core and SQL Server.",
    image:
      "/projects/insightcv-cover.png",
    tags: ["React (Vite)", "ASP.NET Core 8", "Entity Framework Core", "SQL Server", "React Query", "AI"],
    demoUrl: "",
    githubUrl: "https://github.com/FatimaAlhusseini/GraduationProject",
    featured: true,
    highlights: [
      "Designed full relational schema and RESTful Web API endpoints in ASP.NET Core 8",
      "Built multi-role architecture for Job Seekers, Employers, and Admins",
      "Implemented dynamic resume builder and application tracking features",
      "Crafted responsive modern frontend with React Query, Context API, and RTL support",
      "Integrated AI capabilities for CV matching and recommendations"
    ]
  },
  {
    id: "tasksystem",
    title: "Task Management System – RSS Training Project",
    category: "ASP.NET Core MVC",
    description:
      "Full-stack task management web application deployed on IIS with authentication, reporting, and automated file verification.",
    longDescription:
      "Built during practical training at the Royal Scientific Society. An ASP.NET Core MVC task management system deployed on IIS with a complete backend including authentication, profile image handling, rate-limiting, request sanitization, automated file verification, and advanced reporting.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    tags: ["ASP.NET Core MVC", "C#", "SQL Server", "IIS", "SSRS", "Power BI", "JavaScript"],
    demoUrl: "",
    githubUrl: "",
    featured: true,
    highlights: [
      "Deployed on Internet Information Services (IIS)",
      "Backend authentication, profile image handling, rate-limiting, and HTML tag sanitization",
      "Automated file verification system matching database records against hard disk storage",
      "Daily SQL Server scheduled jobs for automated task processing",
      "Responsive dashboards using SSRS and Power BI with custom HTML content visuals"
    ]
  }
];


export const testimonials = [];


export const terminalCommands = {
  help:
    "Available commands: 'bio', 'skills', 'projects', 'experience', 'contact', 'clear'",

  bio:
    "Fatima Al-Husseini — CIS student at Al Al-Bayt University. Web Developer specializing in ASP.NET Core, React, SQL Server, and Oracle DB.",

  skills:
    "• Backend: ASP.NET Core MVC, C#, REST APIs, Custom Middlewares\n• Frontend: React, JavaScript, HTML5, CSS3, Bootstrap\n• Database: SQL Server, Oracle DB, Stored Procedures, Triggers\n• Reporting: SSRS, Power BI\n• Tools: IIS, Git/GitHub, Postman",

  projects:
    "• InsightCV — AI-Enhanced Job Portal (Graduation Project)\n• Task Management System — RSS Training (ASP.NET Core MVC + IIS)",

  experience:
    "• Software Development Intern @ Royal Scientific Society (RSS) — Aug 2026 to Sep 2026",

  contact:
    "Email: fatimahusseini192@gmail.com | Phone: +962781884506 | Location: Jordan",

  "sudo hire":
    "🎉 Fatima is actively looking for Web Development & Software Engineering opportunities. Let's connect!"
};
