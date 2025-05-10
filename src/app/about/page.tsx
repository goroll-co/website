// src/app/about/page.tsx

"use client";

import { useEffect } from "react";
import StorySection from "../../components/about/StorySection";
import ValuesSection from "../../components/about/ValuesSection";
import TimelineSection from "../../components/TimelineSection";
import TeamSection from "../../components/about/TeamSection";
import StatsSection from "../../components/home/StatsSection";
import FadeInSection from "../../components/about/FadeInSection";
import { useLanguage } from "@/context/LanguageContext";
import "../../components/home/animations.css";
import "../../components/about/animations.css";

export default function AboutPage() {
  const { language } = useLanguage();

  // เพิ่ม classes สำหรับ animation ใน team cards
  useEffect(() => {
    const teamCards = document.querySelectorAll(".team-card");
    teamCards.forEach((card) => {
      card.classList.add("team-card");
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-16 px-4 py-8">
      {/* Story Section ด้วย FadeInSection */}
      <FadeInSection>
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <StorySection />
        </div>
      </FadeInSection>

      {/* Values Section ด้วย animation จากซ้ายและขวา */}
      <FadeInSection>
        <ValuesSection />
      </FadeInSection>

      {/* Timeline Section ด้วย animation pop */}
      <FadeInSection>
        <TimelineSection />
      </FadeInSection>

      {/* Team Section ด้วย hover effects */}
      <FadeInSection>
        <TeamSection />
      </FadeInSection>

      {/* Stats Section ด้วย parallax effect */}
      <FadeInSection>
        <div className="parallax">
          <StatsSection />
        </div>
      </FadeInSection>
    </div>
  );
}
