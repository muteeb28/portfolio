import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "levelup",
    title: "LevelUp",
    period: {
      start: "01.2024", // Approximate start
    },
    link: "https://levelup.com", // Placeholder link
    skills: [
      "Developer Education",
      "Content Creation",
      "System Design",
      "Backend Integrations",
    ],
    description: `Developer Learning Platform.

Built an EdTech platform focused on hands-on learning (APIs, payments, sharding, system design).
Created developer-facing tutorials that emphasize practical implementation over abstract theory.
Helped developers move from documentation to production-ready integrations through real examples.`,
    logo: "", // Placeholder
    isExpanded: true,
  },
  {
    id: "resumebot",
    title: "ResumeBot",
    period: {
      start: "09.2025",
    },
    link: "", // No link provided yet
    skills: ["Fullstack", "API", "Payment Flow", "System Design"],
    description: `AI-Powered Resume Optimizer.
- Built a full-stack application with a public-facing API and payment flow.
- Owned system design, implementation, and iteration end-to-end.
- Balanced feature delivery with clarity, stability, and maintainability.`,
    logo: "", // Placeholder
  },
];
