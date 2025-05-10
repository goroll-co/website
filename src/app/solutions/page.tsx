// src/app/solutions/page.tsx

"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Solution } from "../interfaces";
import AppShowcase from "@/components/solutions/AppShowcase";

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
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(
    null
  );
  const [activeTab, setActiveTab] = useState<"features" | "benefits">(
    "features"
  );
  const [showComingSoon, setShowComingSoon] = useState(false);

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
            Coming Soon!
          </h3>
          <p className="text-gray-600 mb-6">
            We are working hard to bring you something amazing. Stay tuned!
          </p>
          <button
            onClick={() => setShowComingSoon(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
        <p className="text-xl max-w-3xl mx-auto px-4">
          Innovative solutions designed to make mobility accessible and
          inclusive for everyone
        </p>
      </section>

      {/* App Showcase Section */}
      <AppShowcase />

      {/* Solutions Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedSolution(solution)}
          >
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
                {solution.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <button
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSolution(solution);
                }}
              >
                Learn More
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Solution Details Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedSolution.title}
                  </h2>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mt-2">
                    {selectedSolution.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedSolution.image}
                  alt={selectedSolution.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-6">
                <p className="text-gray-600">{selectedSolution.description}</p>
              </div>

              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-4">
                  <button
                    className={`pb-2 px-4 ${
                      activeTab === "features"
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("features")}
                  >
                    Features
                  </button>
                  <button
                    className={`pb-2 px-4 ${
                      activeTab === "benefits"
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("benefits")}
                  >
                    Benefits
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {(activeTab === "features"
                  ? selectedSolution.features
                  : selectedSolution.benefits
                ).map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-600 list-disc list-inside"
                  >
                    {item}
                  </li>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setSelectedSolution(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="text-center bg-blue-50 py-12 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Make Mobility Accessible?
        </h2>
        <p className="text-gray-600 mb-6">
          Join us in creating an inclusive community where everyone can travel
          with confidence
        </p>
        <a
          href="https://gorollth-prototype.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          Get Started
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
