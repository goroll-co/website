// src/app/solutions/page.tsx

"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Solution } from "../interfaces";
import AppShowcase from "@/components/solutions/AppShowcase";
import CommonHeroSection from "@/components/CommonHeroSection";
import { useLanguage } from "@/context/LanguageContext";

const solutions: Solution[] = [
  {
    id: 1,
    title: "Map",
    description:
      "Provide information on accessible locations with routes and method.",
    features: [
      "Real-time location tracking",
      "Accessible route planning",
      "Obstacle reporting system",
      "Community-verified paths",
    ],
    benefits: [
      "Find wheelchair-friendly routes easily",
      "Save time on journey planning",
      "Access reliable accessibility information",
      "Contribute to community knowledge",
    ],
    image: "/solutions/solution1.png",
    category: "Navigation",
  },
  {
    id: 2,
    title: "Community",
    description:
      "Provide information, situation happened in society, leading people aware and change into UD places.",
    features: [
      "Social networking platform",
      "Experience sharing",
      "Location reviews",
      "Accessibility awareness",
    ],
    benefits: [
      "Connect with like-minded people",
      "Share valuable experiences",
      "Promote inclusive design",
      "Build supportive community",
    ],
    image: "/solutions/solution2.png",
    category: "Social",
  },
  {
    id: 3,
    title: "Carpool",
    description:
      "Provide suitable cost-saving transportation options (GOROLL Carpool service/other choices for transport) which fit with their wheelchair.",
    features: [
      "Wheelchair-friendly vehicle matching",
      "Real-time ride tracking",
      "Secure payment system",
      "Driver verification",
    ],
    benefits: [
      "Reduce transportation costs",
      "Access reliable transport options",
      "Ensure safety and comfort",
      "Support from verified drivers",
    ],
    image: "/solutions/solution3.png",
    category: "Transport",
  },
];

export default function SolutionPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const { t } = useLanguage();

  const ComingSoonModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setShowComingSoon(false)}
      ></div>
      <div className="relative bg-white rounded-2xl p-6 max-w-md w-full m-4 shadow-xl transform transition-all">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setShowComingSoon(false)}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="text-center pt-4">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {t("coming_soon")}
          </h3>
          <p className="text-gray-600 mb-6">{t("working_hard")}</p>
          <button
            onClick={() => setShowComingSoon(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {t("got_it")}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <CommonHeroSection
        title={t("our_solutions")}
        subtitle={t("solutions_hero_subtitle")}
      />

      {/* App Showcase */}
      <AppShowcase solutions={solutions} />

      {/* Call to Action */}
      <section className="text-center bg-blue-50 py-12 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          {t("ready_to_make_mobility_accessible")}
        </h2>
        <p className="text-gray-600 mb-6">{t("join_inclusive_community")}</p>
        <a
          href="https://gorollth-prototype.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          {t("get_started")}
        </a>
      </section>

      {/* Coming Soon Modal */}
      {showComingSoon && <ComingSoonModal />}

      {/* Decorative Elements */}
      <div className="fixed -z-10 top-20 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
    </div>
  );
}
