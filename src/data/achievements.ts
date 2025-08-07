// src/data/achievements.ts

import { Achievement } from "../app/interfaces";

interface BilingualText {
  th: string;
  en: string;
}

interface BilingualAchievement {
  id: number;
  title: BilingualText;
  description: BilingualText;
  longDescription: BilingualText;
  date: string;
  icon: string;
  category: BilingualText;
  organizer: BilingualText;
  coverImage: string;
  images: string[];
}

const achievementsData: BilingualAchievement[] = [
  {
    id: 1,
    title: {
      th: "BIT Social Scale Up 2024",
      en: "BIT Social Scale Up 2024",
    },
    description: {
      th: "ได้รับคัดเลือกให้เข้าร่วมการฝึกอบรมด้านธุรกิจ การบริหารโครงการ และทักษะทางสังคมใน BIT Social Scale Up 2024: โครงการบ่มเพาะโดย Edvisory และ NIA",
      en: "Selected for business, project management, and soft skills training in BIT Social Scale Up 2024: Incubation Program by Edvisory and NIA",
    },
    longDescription: {
      th: "ได้รับคัดเลือกให้เข้าร่วมโครงการ BIT Social Scale Up ที่มีชื่อเสียง ซึ่งให้การฝึกอบรมอย่างครอบคลุมในด้านการพัฒนาธุรกิจ ระเบียบวิธีการบริหารโครงการ และทักษะทางสังคมที่จำเป็น โครงการนี้มีจุดมุ่งหมายเพื่อเสริมสร้างความรู้และความสามารถให้ผู้เข้าร่วมสามารถแก้ไขปัญหาในโลกแห่งความจริงและขับเคลื่อนโซลูชันที่สร้างผลกระทบในสาขาต่างๆ ได้อย่างมีประสิทธิภาพ",
      en: "Selected as a participant in the prestigious BIT Social Scale Up program, which provided extensive training in business development, project management methodologies, and essential soft skills. This program aimed to equip participants with the knowledge and capabilities to effectively address real-world challenges and drive impactful solutions within their respective fields.",
    },
    date: "2024",
    icon: "🚀",
    category: {
      th: "โครงการบ่มเพาะ",
      en: "Incubation",
    },
    organizer: {
      th: "Edvisory และ NIA",
      en: "Edvisory and NIA",
    },
    coverImage: "/achievements/achievement01/achievement01.jpg",
    images: [
      "/achievements/achievement01/achievement01_01.png",
      "/achievements/achievement01/achievement01_02.png",
    ],
  },
  {
    id: 2,
    title: {
      th: "HealthTech X 2 The Future",
      en: "HealthTech X 2 The Future",
    },
    description: {
      th: "ผู้เข้ารอบสุดท้าย 22 ทีมจาก 234 ทีม ได้รับทุนสนับสนุนการพัฒนาจาก HealthTech X 2 The Future โดย ThaiHealth",
      en: "Finalist in the top 22 teams out of 234 teams, received a fund for development from HealthTech X 2 The Future by ThaiHealth",
    },
    longDescription: {
      th: "GOROLL ได้รับคัดเลือกเป็นหนึ่งใน 22 ทีมสุดท้ายจากทั้งหมด 234 ทีม ในการแข่งขัน HealthTech X 2 The Future ซึ่งเป็นเวทีที่สนับสนุนโซลูชันด้านเทคโนโลยีเพื่อสุขภาพที่มีศักยภาพสูง พร้อมรับทุนสนับสนุนการพัฒนาจำนวน 500,000 บาท เพื่อยกระดับโครงการให้สามารถสร้างผลกระทบในวงกว้าง การได้รับการยอมรับในครั้งนี้สะท้อนถึงความมุ่งมั่น ความคิดสร้างสรรค์ และความสามารถของทีมในการพัฒนาแพลตฟอร์มที่ตอบโจทย์ความท้าทายด้านการเข้าถึงและความเท่าเทียมในการเดินทางของผู้ใช้วีลแชร์ ทุนที่ได้รับช่วยเสริมศักยภาพให้เราสามารถต่อยอดฟีเจอร์สำคัญ ปรับปรุงประสบการณ์การใช้งาน และเดินหน้าสร้างสรรค์สังคมที่ครอบคลุมและเข้าถึงได้สำหรับทุกคน",
      en: "GOROLL was selected as one of the top 22 finalist teams out of 234 entries in HealthTech X 2 The Future, a prestigious platform supporting high-potential health technology solutions. The project was awarded 500,000 THB in development funding to further enhance its impact and scalability. This recognition reflects our team’s commitment, creativity, and capability in addressing critical challenges related to accessibility and equity in transportation for wheelchair users. The funding has empowered us to expand key features, improve user experience, and continue building a more inclusive and accessible society for everyone.",
    },

    date: "2024",
    icon: "💵",
    category: {
      th: "การได้รับทุน",
      en: "Funding",
    },
    organizer: {
      th: "ThaiHealth",
      en: "ThaiHealth",
    },
    coverImage: "/achievements/achievement02/achievement02.jpg",
    images: [
      "/achievements/achievement02/achievement02_01.jpg",
      "/achievements/achievement02/achievement02_02.jpg",
      "/achievements/achievement02/achievement02_03.png",
    ],
  },
  {
    id: 3,
    title: {
      th: "Academy for Women Entrepreneurs Thailand 2024",
      en: "Academy for Women Entrepreneurs Thailand 2024",
    },
    description: {
      th: "ผู้เข้ารอบสุดท้าย 30 ทีมจาก 193 ใบสมัคร",
      en: "Finalist in the top 30 teams from 193 applications",
    },
    longDescription: {
      th: 'เราได้รับคัดเลือกเข้ารอบสุดท้าย 30 ทีม จาก 193 ทีม และจบการฝึกอบรมโครงการ AWE 2024 เรียบร้อยแล้ว ซึ่งจัดโดยสถานทูตสหรัฐฯ True Digital Park และมูลนิธิ Y.I.Y. ระหว่างการฝึกอบรม ฉันได้เข้าร่วมคอร์สออนไลน์จากแพลตฟอร์ม "100 Million Learners" เข้าร่วม masterclass เชิงปฏิบัติ 3 ครั้ง และนำเสนอธุรกิจในงาน Demo Day โครงการนี้ช่วยให้ฉันเติบโตในฐานะผู้ประกอบการและเชื่อมโยงกับชุมชนผู้หญิงในธุรกิจที่แข็งแกร่ง',
      en: 'We were selected as finalists among the top 30 teams from 193 applications and have successfully completed the AWE 2024 program, organized by the U.S. Embassy, True Digital Park, and the Y.I.Y. Foundation. During the program, I joined online courses from the "100 Million Learners" platform, attended 3 hands-on masterclasses, and showcased my business at the Demo Day. The program helped me grow as an entrepreneur and connect with a strong community of women in business.',
    },
    date: "2024",
    icon: "🚀",
    category: {
      th: "โครงการบ่มเพาะ",
      en: "Incubation",
    },
    organizer: {
      th: "สถานทูตสหรัฐฯ ร่วมกับ True Digital Park และมูลนิธิ Y.I.Y.",
      en: "The U.S. Embassy, in collaboration with True Digital Park and the Y.I.Y. Foundation.",
    },
    coverImage: "/achievements/achievement03/achievement03.jpg",
    images: [
      "/achievements/achievement03/achievement03_01.jpg",
      "/achievements/achievement03/achievement03_02.jpg",
      "/achievements/achievement03/achievement03_03.jpg",
      "/achievements/achievement03/achievement03_04.jpg",
    ],
  },
];

// Function สำหรับแปลงข้อมูลตามภาษาที่เลือก
export const getAchievements = (language: "th" | "en"): Achievement[] => {
  return achievementsData
    .map((achievement) => ({
      id: achievement.id,
      title: achievement.title[language],
      description: achievement.description[language],
      longDescription: achievement.longDescription[language],
      date: achievement.date,
      icon: achievement.icon,
      category: achievement.category[language],
      organizer: achievement.organizer[language],
      coverImage: achievement.coverImage,
      images: achievement.images,
    }))
    .reverse();
};

// Function สำหรับดึงหมวดหมู่ที่ไม่ซ้ำกันในภาษาที่เลือก
export const getCategories = (language: "th" | "en"): string[] => {
  const categories = achievementsData.map(
    (achievement) => achievement.category[language]
  );
  return [...new Set(categories)];
};

// สำหรับ backward compatibility - ถ้ามีการใช้งานแบบเก่า
export const achievements = getAchievements("en");
