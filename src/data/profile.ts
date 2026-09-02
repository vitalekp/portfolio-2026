export const profile = {
  name: "Vitalii Pushkarov",
  role: "Fullstack Developer",
  tagline: "I build fast, reliable products with React, Next.js and Node.js.",
  location: "Ukraine",
  availability: "Available for new opportunities",
  email: "vitalekpushkarov@gmail.com",
  github: "https://github.com/vitalekp",
  linkedin: "https://linkedin.com/in/your-profile",
  resumeUrl: "#",
  initials: "VP",
  yearsOfExperience: 4,
};

export const about = {
  intro:
    "Fullstack developer with 4 years of experience building web products end to end — from database schema to pixel-perfect UI.",
  bio: [
    "I specialize in React and Next.js on the frontend and Node.js on the backend, shipping products that are fast, accessible and easy to maintain.",
    "I enjoy owning features fully: talking to stakeholders, designing the data model, writing the API, and polishing the UI that ships to users.",
  ],
  focus: [
    "Building and scaling Next.js applications",
    "Designing REST/GraphQL APIs",
    "Turning product requirements into shipped features",
  ],
};

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL"] },
  { category: "Data", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "CI/CD", "Vercel"] },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Fullstack Developer",
    company: "Company name",
    period: "2024 — Present",
    description:
      "Own end-to-end delivery of features across a Next.js frontend and Node.js backend, from technical design to production rollout.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    role: "Frontend Developer",
    company: "Previous company",
    period: "2022 — 2024",
    description:
      "Built and maintained customer-facing React applications, improving performance and shipping new product features.",
    stack: ["React", "Redux", "REST APIs"],
  },
  {
    role: "Junior Developer",
    company: "First company",
    period: "2021 — 2022",
    description:
      "Started as a junior developer working on internal tools and learning production-grade frontend and backend practices.",
    stack: ["JavaScript", "React", "Node.js"],
  },
];

export type Project = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Flagship project name",
    description:
      "A full-stack web application solving a real problem for its users, built and shipped end to end.",
    problem:
      "Describe the concrete problem or pain point this project solves for its users.",
    solution:
      "Describe the approach taken: key technical decisions, architecture, and what makes it work well.",
    impact: [
      "Result or metric, e.g. reduced load time by 40%",
      "Result or metric, e.g. used by 500+ active users",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "https://github.com/vitalekp",
    featured: true,
  },
  {
    title: "Second project name",
    description: "One or two sentences describing what this project does and who it's for.",
    problem: "The problem this project addresses.",
    solution: "The key technical approach used to solve it.",
    impact: ["Result or metric worth highlighting"],
    stack: ["React", "Node.js", "MongoDB"],
    repoUrl: "https://github.com/vitalekp",
  },
  {
    title: "Third project name",
    description: "One or two sentences describing what this project does and who it's for.",
    problem: "The problem this project addresses.",
    solution: "The key technical approach used to solve it.",
    impact: ["Result or metric worth highlighting"],
    stack: ["Next.js", "Express"],
    repoUrl: "https://github.com/vitalekp",
  },
];
