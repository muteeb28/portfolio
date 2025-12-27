import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "yoursportz",
    companyName: "Yoursportz",
    companyLogo: "", // Placeholder or remove if optional
    positions: [
      {
        id: "yoursportz-founding-member",
        title: "Founding Member",
        employmentPeriod: {
          start: "02.2024",
          end: "Present",
        },
        employmentType: "Remote",
        icon: "code",
        description: `- Built and shipped a production MVP from zero to one, owning architecture, implementation, and iteration.
- Designed backend services and workflows with a focus on developer ergonomics, maintainability, and clear interfaces.
- Regularly debugged production issues by isolating edge cases, reproducing failures, and applying targeted fixes.
- Wrote internal technical documentation and implementation notes to reduce onboarding friction for engineers.
- Worked cross-functionally with frontend and backend contributors, coordinating reviews and resolving integration issues.

Appwrite alignment: Developer experience, backend platform ownership, debugging, internal documentation, and shipping.`,
        skills: [
          "Backend Architecture",
          "MVP Development",
          "Debugging",
          "Technical Documentation",
          "Cross-functional Collaboration",
          "Appwrite",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "tripimpressions",
    companyName: "Tripimpressions",
    companyLogo: "", // Placeholder
    positions: [
      {
        id: "tripimpressions-fullstack",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "01.2023",
          end: "11.2024",
        },
        employmentType: "Remote",
        icon: "code",
        description: `- Built backend services using Go, Node.js, Express, and TypeScript, centered around APIs, authentication, and data integrity.
- Implemented a centralized JWT-based authentication gateway, acting as a secure access layer across services.
- Solved concurrency and consistency problems using idempotency keys and Redis-based distributed locking, ensuring reliable writes.
- Designed async, event-driven workflows (queues, background processing) to decouple critical user paths.
- Investigated and resolved bugs by creating minimal reproducible examples, collaborating via code changes and reviews.
- Maintained system reliability through migrations, scheduled jobs, and operational tooling.

Appwrite alignment: Auth, APIs, databases, background jobs, debugging, and platform tradeoffs.`,
        skills: [
          "Go",
          "Node.js",
          "Express",
          "TypeScript",
          "JWT Authentication",
          "Redis",
          "Event-driven Architecture",
          "Debugging",
        ],
      },
    ],
  },
];
