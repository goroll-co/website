// src/app/page.tsx

"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import ComingSoonModal from "@/components/ComingsoonModal";
import "@/components/animations.css";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection onLearnMoreClick={handleShowModal} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Stats Section */}
      <StatsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Community/CTA Section */}
      <CtaSection onVideoClick={handleShowModal} />

      {/* Decorative Elements */}
      <div className="fixed -z-10 top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>

      {/* Modal */}
      {showModal && <ComingSoonModal onClose={handleCloseModal} />}
    </div>
  );
}
