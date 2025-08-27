// src/data/career.ts

import { Career } from "../app/interfaces";

interface BilingualText {
  th: string;
  en: string;
}

interface BilingualCareer {
  id: number;
  title: BilingualText;
  department: BilingualText;
  location: BilingualText;
  type: BilingualText;
  salary: BilingualText;
  description: BilingualText;
  requirements: BilingualText[];
  responsibilities: BilingualText[];
  applicationUrl: string;
}

const careersData: BilingualCareer[] = [
  {
    id: 3,
    title: {
      th: "นักออกแบบ UX/UI (เร็วๆ นี้)",
      en: "UX/UI Designer (Coming Soon)",
    },
    department: {
      th: "ฝ่ายออกแบบ",
      en: "Design",
    },
    location: {
      th: "กรุงเทพฯ, ประเทศไทย และทำงานระยะไกล",
      en: "Bangkok, Thailand & Remote",
    },
    type: {
      th: "เต็มเวลา",
      en: "Full-time",
    },
    salary: {
      th: "-",
      en: "-",
    },
    description: {
      th: "เร็วๆ นี้",
      en: "Coming Soon",
    },
    requirements: [
      {
        th: "เร็วๆ นี้",
        en: "Coming Soon",
      },
    ],
    responsibilities: [
      {
        th: "เร็วๆ นี้",
        en: "Coming Soon",
      },
    ],
    applicationUrl: "",
  },
  {
    id: 2,
    title: {
      th: "ผู้บริหารด้านกฎหมาย (เร็วๆ นี้)",
      en: "Legal Executive (Coming Soon)",
    },
    department: {
      th: "ฝ่ายกฎหมาย",
      en: "Legal",
    },
    location: {
      th: "กรุงเทพฯ, ประเทศไทย และทำงานระยะไกล",
      en: "Bangkok, Thailand & Remote",
    },
    type: {
      th: "เต็มเวลา",
      en: "Full-time",
    },
    salary: {
      th: "-",
      en: "-",
    },
    description: {
      th: "เร็วๆ นี้",
      en: "Coming Soon",
    },
    requirements: [
      {
        th: "เร็วๆ นี้",
        en: "Coming Soon",
      },
    ],
    responsibilities: [
      {
        th: "เร็วๆ นี้",
        en: "Coming Soon",
      },
    ],
    applicationUrl: "",
  },
];

// Function สำหรับแปลงข้อมูลตามภาษาที่เลือก
export const getCareers = (language: "th" | "en"): Career[] => {
  return careersData.map((career) => ({
    id: career.id,
    title: career.title[language],
    department: career.department[language],
    location: career.location[language],
    type: career.type[language],
    salary: career.salary[language],
    description: career.description[language],
    requirements: career.requirements.map((req) => req[language]),
    responsibilities: career.responsibilities.map((resp) => resp[language]),
    applicationUrl: career.applicationUrl,
  }));
};

// Function สำหรับดึงแผนกที่ไม่ซ้ำกันในภาษาที่เลือก
export const getDepartments = (language: "th" | "en"): string[] => {
  const departments = careersData.map((career) => career.department[language]);
  return [...new Set(departments)];
};

// สำหรับ backward compatibility - ถ้ามีการใช้งานแบบเก่า
export const careers = getCareers("en");
