// src/app/about/page.tsx

"use client";

import HeroSection from "../../components/home/HeroSection";
import StorySection from "../../components/StorySection";
import ValuesSection from "../../components/ValuesSection";
import TimelineSection from "../../components/TimelineSection";
import TeamSection from "../../components/TeamSection";
import StatsSection from "../../components/home/StatsSection";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-16 px-4 py-8">
      {/* Hero Section */}
      <HeroSection />

      {/* Story Section */}
      <StorySection />

      {/* Values Section */}
      <ValuesSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Team Section */}
      <TeamSection />

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
}
