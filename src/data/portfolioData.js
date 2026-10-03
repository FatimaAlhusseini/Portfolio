import insightcvCover from "../assets/insightcv-cover.png";
import taskSystem from "../assets/taskSystem.PNG";
import middleware from "../assets/middleware.jpg";
import fileSearch from "../assets/fileSearch.PNG";

export const personalInfo = {
  name: "Fatima Al-Husseini",
  title: "Web Developer | ASP.NET Core",
  tagline:
    "Building modern web applications with ASP.NET Core, React, and SQL Server, with hands-on experience in full-stack development and RESTful APIs.",
  location: "Jordan",
  availability:
    "Open to Web Development & Software Engineering opportunities",
  email: "fatimahusseini192@gmail.com",
  phone: "+962781884506",
  github: "https://github.com/FatimaAlhusseini",
  linkedin: "https://linkedin.com/in/fatima-al-husseini-0a02601bb/",
  twitter: "",

  about: `Computer Information Systems (CIS) graduate from Al Al-Bayt University with hands-on experience in web development and backend technologies. Skilled in ASP.NET Core, C#, React, SQL Server, REST APIs, and database development. Experienced in building web applications through academic projects and practical training at the Royal Scientific Society.`,

  education: {
    degree: "Bachelor of Computer Information Systems (CIS)",
    university: "Al Al-Bayt University",
    status: "Graduated"
  },

  certifications: [
    "ASP.NET Course from Hope International",
    "Introduction to Front-End Development – Meta"
  ],

  languages: ["Arabic", "English"],

  stats: [
    { label: "Backend", value: "ASP.NET Core", icon: "Server" },
    { label: "Frontend", value: "React", icon: "Layout" },
    { label: "Database", value: "SQL Server", icon: "Database" },
    { label: "Reporting", value: "SSRS & Power BI", icon: "BarChart2" }
  ],

  pillars: [
    {
      title: "Web Development",
      description:
        "Building responsive web applications using ASP.NET Core MVC, React, JavaScript, HTML, CSS, and Bootstrap.",
      icon: "Globe"
    },
    {
      title: "ASP.NET Core & APIs",
      description:
        "Developing REST APIs and web applications with authentication, DTOs, rate limiting, custom middleware, and email service integration.",
      icon: "Server"
    },
    {
      title: "Database Development",
      description:
        "Designing and working with SQL Server and Oracle databases including stored procedures, triggers, functions, transactions, and scheduled jobs.",
      icon: "Database"
    },
    {
      title: "Reporting & BI",
      description:
        "Creating dashboards and reports using Power BI and SQL Server Reporting Services (SSRS), including custom HTML/CSS visuals.",
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
        { name: "Custom Middleware", level: 72, popular: false },
        { name: "Authentication", level: 70, popular: false },
        { name: "Rate Limiting", level: 68, popular: false }
      ]
    },
    {
      name: "Frontend & UI",
      skills: [
        { name: "HTML5 & CSS3", level: 85, popular: true },
        { name: "JavaScript", level: 75, popular: true },
        { name: "React", level: 50, popular: true },
        { name: "Bootstrap", level: 78, popular: true },
        { name: "Responsive Design", level: 80, popular: true },
        { name: "Multi-language Localization", level: 72, popular: false }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "SQL Server", level: 85, popular: true },
        { name: "PostgreSQL", level: 72, popular: true },
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
      "Developed and maintained web applications using ASP.NET Core MVC and Oracle/SQL Server databases during practical training at RSS.",
    achievements: [
      "Built RESTful APIs with authentication, DTOs, Email Service integration, and Rate Limiting",
      "Implemented database objects including Stored Procedures, Triggers, Functions, and SQL Server Jobs for task automation",
      "Designed interactive dashboards and reports using Power BI and SQL Server Reporting Services (SSRS)",
      "Implemented performance and security enhancements using custom middleware, server/client-side pagination, and database transactions",
      "Applied multi-language support with Arabic/English localization across application UI components"
    ],
    technologies: [
      "ASP.NET Core MVC",
      "C#",
      "SQL Server",
      "Oracle DB",
      "REST APIs",
      "Power BI",
      "SSRS",
      "IIS",
      "Git",
      "JavaScript",
      "HTML",
      "CSS"
    ]
  },

  {
    role: "Software QA Trainee",
    company: "Dalil Jordan",
    period: "Jul 2026 – Present",
    location: "Jordan",
    description:
      "Currently undergoing practical training in software quality assurance, with hands-on experience in manual testing, API testing, test case design, and defect tracking.",
    achievements: [
      "Writing and organizing test cases based on user stories and acceptance criteria",
      "Performing manual testing for web application features",
      "Testing REST APIs using Postman",
      "Working with Jira and Zephyr for test management and defect tracking"
    ],
    technologies: [
      "Database Testing",
      "Manual Testing",
      "API Testing",
      "Postman",
      "Jira",
      "Zephyr"
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
      "InsightCV is a graduation project — a full-stack job recruitment platform connecting job seekers, employers, and administrators. Built with a React (Vite) frontend featuring custom Glassmorphism and RTL/multi-language support, and an ASP.NET Core 8 Web API backend with Entity Framework Core and SQL Server.",
    image: insightcvCover,
    tags: [
      "React (Vite)",
      "ASP.NET Core 8",
      "Entity Framework Core",
      "SQL Server",
      "React Query",
      "AI"
    ],
    demoUrl: "",
    githubUrl: "https://github.com/FatimaAlhusseini/GraduationProject",
    featured: true,
    highlights: [
      "Designed the frontend experience for a multi-role recruitment platform",
      "Built responsive interfaces using React, React Query, Context API, and RTL support",
      "Implemented dynamic resume builder and application tracking features",
      "Integrated the frontend with ASP.NET Core Web API services",
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
      "Built during practical training at the Royal Scientific Society. An ASP.NET Core MVC task management system deployed on IIS with a complete backend including authentication, profile image handling, rate limiting, request sanitization, automated file verification, and advanced reporting.",
    image: taskSystem,
    tags: [
      "ASP.NET Core MVC",
      "C#",
      "SQL Server",
      "IIS",
      "SSRS",
      "Power BI",
      "JavaScript"
    ],
    demoUrl: "",
    githubUrl: "https://github.com/FatimaAlhusseini/TaskSystem",
    featured: true,
    highlights: [
      "Deployed the application using Internet Information Services (IIS)",
      "Implemented authentication, profile image handling, rate limiting, and HTML tag sanitization",
      "Built an automated file verification system matching database records against hard disk storage",
      "Implemented daily SQL Server scheduled jobs for automated task processing",
      "Created responsive dashboards and reports using SSRS and Power BI with custom HTML content visuals"
    ]
  },

  {
    id: "htmlmiddleware",
    title: "HTML Middleware MVC",
    category: "ASP.NET Core MVC",
    description:
      "ASP.NET Core MVC application demonstrating custom middleware for processing and handling HTML content within the web request pipeline.",
    longDescription:
      "A practical ASP.NET Core MVC project focused on implementing and working with custom middleware within the HTTP request pipeline. The project demonstrates how middleware can intercept and process requests and responses while working within an MVC application.",
    image: middleware,
    tags: [
      "ASP.NET Core MVC",
      "C#",
      "Custom Middleware",
      "HTML",
      "HTTP Pipeline"
    ],
    demoUrl: "",
    githubUrl: "https://github.com/FatimaAlhusseini/HtmlMiddlewareMVC",
    featured: false,
    highlights: [
      "Implemented custom ASP.NET Core middleware",
      "Worked with the HTTP request and response pipeline",
      "Integrated middleware within an MVC application",
      "Applied C# and ASP.NET Core development concepts"
    ]
  },

  {
    id: "searchfilessystem",
    title: "Search Files System",
    category: "ASP.NET Core MVC",
    description:
      "ASP.NET Core application for searching and working with files through a web-based interface.",
    longDescription:
      "A .NET-based file search system designed to provide a web interface for searching files and working with file-system data. The project focuses on backend file-system operations and integrating them into an ASP.NET application.",
    image: fileSearch,
    tags: [
      "ASP.NET Core",
      "C#",
      "File System",
      "Search",
      "MVC"
    ],
    demoUrl: "",
    githubUrl: "https://github.com/FatimaAlhusseini/SearchFilesSystem",
    featured: false,
    highlights: [
      "Implemented file-system search functionality",
      "Worked with C# file and directory operations",
      "Built a web-based interface for file searching",
      "Applied ASP.NET development concepts"
    ]
  }
];


export const testimonials = [];


export const terminalCommands = {
  help:
    "Available commands: 'bio', 'skills', 'projects', 'experience', 'contact', 'clear'",

  bio:
    "Fatima Al-Husseini — CIS graduate from Al Al-Bayt University. Web Developer specializing in ASP.NET Core, React, SQL Server, and Oracle DB.",

  skills:
    "• Backend: ASP.NET Core MVC, C#, REST APIs, Custom Middleware\n• Frontend: React, JavaScript, HTML5, CSS3, Bootstrap\n• Database: SQL Server, PostgreSQL, Oracle DB, Stored Procedures, Triggers\n• Reporting: SSRS, Power BI\n• Tools: IIS, Git/GitHub, Postman",

  projects:
    "• InsightCV — AI-Enhanced Job Portal\n• Task Management System — RSS Training\n• HTML Middleware MVC\n• Search Files System",

  experience:
    "• Software Development Intern @ Royal Scientific Society (RSS) — Aug 2026 to Sep 2026\n• Software QA Trainee @ Dalil Jordan — Jul 2026 to Present",

  contact:
    "Email: fatimahusseini192@gmail.com | Phone: +962781884506 | Location: Jordan",

  "sudo hire":
    "Fatima is currently open to Web Development and Software Engineering opportunities. Let's connect!"
};