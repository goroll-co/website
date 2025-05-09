// src/app/about/page.tsx

"use client";

import HeroSection from "../../components/about/HeroSection";
import StorySection from "../../components/about/StorySection";
import ValuesSection from "../../components/about/ValuesSection";
import TimelineSection from "../../components/about/TimelineSection";
import TeamSection from "../../components/about/TeamSection";
import StatsSection from "../../components/about/StatsSection";

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
