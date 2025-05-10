// src/app/data/achievements.ts

import { Achievement } from "../app/interfaces";

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "BIT Social Scale Up 2024",
    description:
      "Selected for business, project management, and soft skills training in BIT Social Scale Up 2024: Incubation Program by Edvisory and NIA",
    longDescription:
      "Selected as a participant in the prestigious BIT Social Scale Up program, which provided extensive training in business development, project management methodologies, and essential soft skills. This program aimed to equip participants with the knowledge and capabilities to effectively address real-world challenges and drive impactful solutions within their respective fields.",
    date: "2024",
    icon: "🚀",
    category: "Incubation",
    organizer: "Edvisory and NIA",
    coverImage: "/achievements/achievement01/achievement01.jpg",
    images: [
      "/achievements/achievement01/achievement01_01.png",
      "/achievements/achievement01/achievement01_02.png",
    ],
  },
  {
    id: 2,
    title: "HealthTech X 2 The Future",
    description:
      "Finalist in the top 22 teams, received a fund for development from HealthTech X 2 The Future by ThaiHealth",
    longDescription:
      "Finalist among the top 22 teams in the prestigious HealthTech X The Future competition, securing development funding to advance innovative solutions in healthcare technology. This recognition highlights our team's dedication, creativity, and ability to deliver impactful ideas that address pressing challenges in the healthcare industry. The funding provided has been instrumental in supporting our project, enabling us to further develop and refine our vision while positioning us to make a meaningful contribution to the field.",
    date: "2024",
    icon: "💵",
    category: "Funding",
    organizer: "ThaiHealth",
    coverImage: "/achievements/achievement02/achievement02.jpg",
    images: [
      "/achievements/achievement02/achievement02_01.jpg",
      "/achievements/achievement02/achievement02_02.jpg",
      "/achievements/achievement02/achievement02_03.png",
    ],
  },
  {
    id: 3,
    title: "Academy for Women Entrepreneurs Thailand 2024",
    description: "Finalist in the top 30 teams from 193 application",
    longDescription:
      "We were selected and have successfully completed the AWE 2024 program, organized by the U.S. Embassy, True Digital Park, and the Y.I.Y. Foundation. During the program, I joined online courses from the “100 Million Learners” platform, attended 3 hands-on masterclasses, and showcased my business at the Demo Day. The program helped me grow as an entrepreneur and connect with a strong community of women in business.",
    date: "2024",
    icon: "🚀",
    category: "Incubation",
    organizer:
      "The U.S. Embassy, in collaboration with True Digital Park and the Y.I.Y. Foundation.",
    coverImage: "/achievements/achievement03/achievement03.jpg",
    images: [
      "/achievements/achievement03/achievement03_01.jpg",
      "/achievements/achievement03/achievement03_02.jpg",
      "/achievements/achievement03/achievement03_03.jpg",
      "/achievements/achievement03/achievement03_04.jpg",
    ],
  },
].reverse();
