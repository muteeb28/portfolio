import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Muteeb",
  lastName: "Masoodi",
  displayName: "Muteeb Masoodi",
  username: "muteeb28",
  gender: "male",
  pronouns: "he/him",
  bio: "Developer-focused engineer with experience building and shipping backend platforms.",
  flipSentences: [
    "Developer-focused engineer.",
    "Fullstack Engineer",
    "Backend Platform Builder",
  ],
  address: "India",
  phoneNumber: "KzkxOTEwMzE5MzMxNA==", // E.164 format, base64 encoded
  email: "bXV0ZWVibWFzb29kaTI4QGdtYWlsLmNvbQ==", // base64 encoded (muteebmasoodi28@gmail.com)
  website: "https://github.com/muteeb28",
  jobTitle: "Fullstack Engineer",
  jobs: [
    {
      title: "Founding Member",
      company: "Yoursportz",
      website: "https://yoursportz.com", // Placeholder if unknown, or remove
    },
  ],
  about: `
- **Fullstack Engineer** with experience building and shipping backend platforms.
- Developer - focused engineer.
`,
  avatar: "/images/me.jpg", // Placeholder
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1764345394", // Placeholder
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "muteeb masoodi",
    "muteeb28",
    "fullstack engineer",
    "backend engineer",
  ],
  dateCreated: "2025-12-26", // YYYY-MM-DD
} satisfies User;
