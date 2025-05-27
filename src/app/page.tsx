// src/app/page.tsx

"use client";

import React, { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import ComingSoonModal from "@/components/home/ComingsoonModal";
import "@/components/home/animations.css";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

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
