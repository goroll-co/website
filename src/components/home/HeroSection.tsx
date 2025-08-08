import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import CommonHeroSection from "../CommonHeroSection";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <CommonHeroSection
      title={t("welcome")}
      subtitle={t("tagline")}
      buttonText={t("start_journey")}
      buttonLink="/solutions"
    />
  );
}
