// src/app/data/career.ts

import { Career } from "../interfaces";

export const careers: Career[] = [
  {
    id: 3,
    title: "UX/UI Designer (This work can help boost your portfolio.)",
    department: "Design",
    location: "Bangkok, Thailand & Remote",
    type: "Full-time",
    salary: "-",
    description:
      "We are seeking a talented UX/UI Designer to create beautiful and intuitive user experiences.",
    requirements: [
      "1+ years of UX/UI design experience",
      "Proficiency in Figma and design tools",
      "Strong portfolio demonstrating UI/UX work",
      "Experience with user research and testing",
      "Working under pressure",
    ],
    responsibilities: [
      "Design user interfaces for mobile applications",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with product and engineering teams",
    ],
    applicationUrl: "https://forms.gle/LVSuZWb1aLFpKCQR8",
  },
  {
    id: 2,
    title: "Legal Executive (Coming Soon)",
    department: "Legal",
    location: "Bangkok, Thailand & Remote",
    type: "Full-time",
    salary: "-",
    description: "Coming Soon",
    requirements: ["Coming Soon"],
    responsibilities: ["Coming Soon"],
    applicationUrl: "",
  },
];
