// src/app/about/page.tsx
"use client";

import { useEffect } from "react";
import StorySection from "../../components/about/StorySection";
import ValuesSection from "../../components/about/ValuesSection";
import TimelineSection from "../../components/about/TimelineSection";
import TeamSection from "../../components/about/TeamSection";
import StatsSection from "../../components/home/StatsSection";
import FadeInSection from "../../components/about/FadeInSection";
import { useLanguage } from "@/context/LanguageContext";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import "../../components/home/animations.css";
import "../../components/about/animations.css";

export default function AboutPage() {
  const { language } = useLanguage();

  useEffect(() => {
    const teamCards = document.querySelectorAll(".team-card");
    teamCards.forEach((card) => {
      card.classList.add("team-card");
    });
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <AboutHeroSection />

      <div className="max-w-7xl mx-auto space-y-16 px-4 py-8">
        {/* Story Section - ลบ animation */}
        <FadeInSection>
          <div className="relative overflow-hidden rounded-xl">
            {/* ลบ animate-blob ออก */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            {/* ลบ animate-blob และ animation-delay-2000 ออก */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <StorySection />
          </div>
        </FadeInSection>

        {/* Values Section */}
        <FadeInSection>
          <ValuesSection />
        </FadeInSection>

        {/* Timeline Section */}
        <FadeInSection>
          <TimelineSection />
        </FadeInSection>

        {/* Team Section */}
        <FadeInSection>
          <TeamSection />
        </FadeInSection>

        {/* Stats Section */}
        <FadeInSection>
          <div className="parallax">
            <StatsSection />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
