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
      th: "นักออกแบบ UX/UI (งานนี้จะช่วยเพิ่มความแข็งแกร่งให้กับพอร์ตโฟลิโอของคุณ)",
      en: "UX/UI Designer (This work can help boost your portfolio.)",
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
      th: "เรากำลังมองหานักออกแบบ UX/UI ที่มีความสามารถเพื่อสร้างประสบการณ์ผู้ใช้ที่สวยงามและใช้งานง่าย",
      en: "We are seeking a talented UX/UI Designer to create beautiful and intuitive user experiences.",
    },
    requirements: [
      {
        th: "ประสบการณ์ในการออกแบบ UX/UI อย่างน้อย 1 ปี",
        en: "1+ years of UX/UI design experience",
      },
      {
        th: "ความชำนาญในการใช้ Figma และเครื่องมือออกแบบ",
        en: "Proficiency in Figma and design tools",
      },
      {
        th: "มีพอร์ตโฟลิโอที่แสดงผลงาน UI/UX ที่แข็งแกร่ง",
        en: "Strong portfolio demonstrating UI/UX work",
      },
      {
        th: "ประสบการณ์ในการวิจัยผู้ใช้และการทดสอบการใช้งาน",
        en: "Experience with user research and testing",
      },
      {
        th: "สามารถทำงานภายใต้ความกดดันได้",
        en: "Working under pressure",
      },
    ],
    responsibilities: [
      {
        th: "ออกแบบส่วนติดต่อผู้ใช้สำหรับแอปพลิเคชันมือถือ",
        en: "Design user interfaces for mobile applications",
      },
      {
        th: "สร้างโครงร่าง ต้นแบบ และการออกแบบความละเอียดสูง",
        en: "Create wireframes, prototypes, and high-fidelity designs",
      },
      {
        th: "ดำเนินการวิจัยผู้ใช้และการทดสอบการใช้งาน",
        en: "Conduct user research and usability testing",
      },
      {
        th: "ทำงานร่วมกับทีมผลิตภัณฑ์และวิศวกรรม",
        en: "Collaborate with product and engineering teams",
      },
    ],
    applicationUrl: "https://forms.gle/LVSuZWb1aLFpKCQR8",
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
