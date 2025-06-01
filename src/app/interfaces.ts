// src/app/interfaces.ts

// จาก src/app/about/page.tsx
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// จาก src/app/achievements/page.tsx
export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
  category: string;
  organizer: string;
  coverImage: string;
  images: string[];
  longDescription?: string;
}

// จาก src/app/components/achievement-card.tsx
export interface AchievementCardProps {
  title: string;
  description: string;
  date: string;
  icon: string;
  category: string;
}

// จาก src/app/career/page.tsx
export interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  applicationUrl: string;
}

// จาก src/app/solutions/page.tsx
export interface Solution {
  id: number;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  category: string;
}

// เพิ่มใหม่ - จาก src/components/about/SponsorSection.tsx
export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  website: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}
