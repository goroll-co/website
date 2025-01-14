import React from 'react';
import { MapPin, Users, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to GOROLL
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A platform for accessible journeys and inclusive communities
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey
          </button>
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
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-orange-400"
              >
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with others, share accessible routes, and make mobility easier for everyone
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed -z-10 top-0 left-0 w-64 h-64 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}

const features = [
  {
    title: "Accessible Routes",
    description:
      "Find and share wheelchair-friendly paths with real-time updates and community-verified information.",
    icon: <MapPin size={32} className="text-orange-500" />
  },
  {
    title: "Inclusive Community",
    description:
      "Connect with others, share experiences, and contribute to making places more accessible for everyone.",
    icon: <Users size={32} className="text-orange-500" />
  },
  {
    title: "Safe Transportation",
    description:
      "Access reliable and affordable transportation options with our verified GOROLL Carpool service.",
    icon: <Shield size={32} className="text-orange-500" />
  },
];