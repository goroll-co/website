// src/app/page.tsx

"use client";

import React, { useState } from "react";
import { MapPin, Users, Shield, X } from "lucide-react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const ComingSoonModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="relative bg-white rounded-2xl p-6 max-w-md w-full m-4 shadow-xl transform transition-all">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setShowModal(false)}
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
            onClick={() => setShowModal(false)}
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
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to GOROLL
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A platform for accessible journeys and inclusive communities
          </p>
          <a
            href="https://gorollth-prototype.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Making Mobility Accessible
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500"
              >
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with others, share accessible routes, and make mobility
            easier for everyone
          </p>
          <a
            href="https://gorollth-prototype.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed -z-10 top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>

      {/* Modal (ยังเก็บไว้เผื่อต้องการใช้ในอนาคต) */}
      {showModal && <ComingSoonModal />}
    </div>
  );
}

const features = [
  {
    title: "Accessible Routes",
    description:
      "Find and share wheelchair-friendly paths with real-time updates and community-verified information.",
    icon: <MapPin size={32} className="text-blue-600" />,
  },
  {
    title: "Inclusive Community",
    description:
      "Connect with others, share experiences, and contribute to making places more accessible for everyone.",
    icon: <Users size={32} className="text-blue-600" />,
  },
  {
    title: "Safe Transportation",
    description:
      "Access reliable and affordable transportation options with our verified GOROLL Carpool service.",
    icon: <Shield size={32} className="text-blue-600" />,
  },
];
