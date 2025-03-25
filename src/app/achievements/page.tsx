// src/app/achievements/page.tsx

"use client";

import React, { useState } from "react";
import { Achievement } from "../interfaces";
import AchievementCard from "../components/AchievementCard";
import AchievementModal from "../components/AchievementModal";
import { achievements } from "../data/achievements";

export default function AchievementPage() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-block">
          <h1 className="text-4xl font-bold mb-4 relative text-gray-700">
            Our Achievements
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Celebrating our milestones and successes as we continue to innovate
          and grow
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            {...achievement}
            onClick={() => setSelectedAchievement(achievement)}
          />
        ))}
      </div>

      {/* Achievement Modal */}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}

      {/* Footer Message */}
      <div className="text-center bg-blue-50 py-12 rounded-xl">
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          These achievements represent our commitment to excellence and
          innovation.
          <br />
          <span className="text-blue-600 font-medium">
            Stay tuned for more exciting milestones!
          </span>
        </p>
      </div>
    </div>
  );
}
