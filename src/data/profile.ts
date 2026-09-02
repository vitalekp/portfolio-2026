export const profile = {
  name: "Vitalii Pushkarov",
  role: "Software Developer",
  tagline: "I build reliable web applications and enjoy solving hard problems.",
  email: "vitalekpushkarov@gmail.com",
  github: "https://github.com/vitalekp",
  location: "Ukraine",
};

export const about = {
  summary:
    "Short bio goes here — background, years of experience, main stack and what kind of work you're looking for.",
};

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker"] },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project name",
    description: "One or two sentences describing what this project does and the problem it solves.",
    stack: ["Next.js", "TypeScript"],
    repo: "https://github.com/vitalekp",
  },
];
