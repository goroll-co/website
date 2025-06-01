// src/app/achievements/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import AchievementCard from "../../components/achievements/AchievementCard";
import AchievementModal from "../../components/achievements/AchievementModal";
import AchievementFilter from "../../components/achievements/AchievementFilter";
import FeaturedAchievement from "../../components/achievements/FeaturedAchievement";
import { getAchievements } from "../../data/achievements";
import { Achievement } from "../interfaces";
import CommonHeroSection from "@/components/CommonHeroSection";
import "../../components/achievements/animations.css";
import { useLanguage } from "@/context/LanguageContext";

export default function AchievementPage() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t, language } = useLanguage();

  // ใช้ getAchievements function ที่รองรับ multilingual
  const achievements = getAchievements(language as "th" | "en");

  // ดึงหมวดหมู่ที่ไม่ซ้ำกันจากข้อมูล achievements
  const categories = [
    ...new Set(achievements.map((achievement) => achievement.category)),
  ];

  // กรองผลงานตามหมวดหมู่
  const filteredAchievements =
    selectedCategory === "all"
      ? achievements
      : achievements.filter(
          (achievement) => achievement.category === selectedCategory
        );

  // ดึง featured achievement (ผลงานล่าสุดหรือสำคัญที่สุด)
  const featuredAchievement = achievements[0]; // ใช้ล่าสุดเป็น featured (เพราะมีการเรียงจากใหม่ไปเก่า)

  // ติดตามตำแหน่งการเลื่อนเพื่อใช้ในการแสดง animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <CommonHeroSection
        title={t("achievements_title")}
        subtitle={t("achievements_subtitle")}
      />

      {/* ส่วนเนื้อหาหลัก */}
      <div className="max-w-7xl mx-auto px-4">
        {/* ส่วน Featured Achievement */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 slide-in-left">
            {t("latest_achievement")}
          </h2>
          <FeaturedAchievement
            achievement={featuredAchievement}
            onClick={() => setSelectedAchievement(featuredAchievement)}
          />
        </div>

        {/* ส่วนตัวกรองหมวดหมู่ */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 slide-in-left">
            {t("all_achievements")}
          </h2>
          <AchievementFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* กริดแสดงผลงาน */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              {...achievement}
              onClick={() => setSelectedAchievement(achievement)}
              animationDelay={index % 5} // สร้างดีเลย์ที่หลากหลาย
            />
          ))}
        </div>

        {/* ข้อความเพิ่มเติมที่ด้านล่าง */}
        <div className="text-center bg-blue-50 py-12 rounded-xl mt-16 slide-in-left">
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            {t("achievements_footer")}
            <br />
            <span className="text-blue-600 font-medium">
              {t("follow_updates")}
            </span>
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}

      {/* Decorative Elements */}
      <div
        className="fixed -z-10 top-20 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
      ></div>
      <div
        className="fixed -z-10 bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"
        style={{ transform: `translateY(${-scrollPosition * 0.1}px)` }}
      ></div>
    </div>
  );
}
