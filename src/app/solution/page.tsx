'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Solution {
  id: number;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  category: string;
}

const solutions: Solution[] = [
  {
    id: 1,
    title: "Enterprise Management System",
    description: "A comprehensive solution for managing your enterprise operations with advanced analytics and reporting capabilities.",
    features: [
      "Real-time performance monitoring",
      "Automated workflow management",
      "Advanced data analytics",
      "Custom reporting tools"
    ],
    benefits: [
      "Increase operational efficiency by 50%",
      "Reduce manual work by 70%",
      "Improve decision making with real-time insights",
      "Scale operations seamlessly"
    ],
    image: "/api/placeholder/600/400",
    category: "Enterprise"
  },
  {
    id: 2,
    title: "Cloud Integration Platform",
    description: "Seamlessly integrate your existing systems with our cloud-based platform for enhanced scalability and performance.",
    features: [
      "Multi-cloud support",
      "Automated deployments",
      "Security compliance",
      "API management"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve system reliability",
      "Enhanced security measures",
      "Faster deployment cycles"
    ],
    image: "/api/placeholder/600/400",
    category: "Cloud"
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    description: "Leverage the power of artificial intelligence to gain deeper insights from your data and make informed decisions.",
    features: [
      "Predictive analytics",
      "Machine learning algorithms",
      "Natural language processing",
      "Automated reporting"
    ],
    benefits: [
      "Increase forecast accuracy by 85%",
      "Automate data analysis",
      "Identify patterns and trends",
      "Real-time decision support"
    ],
    image: "/api/placeholder/600/400",
    category: "Analytics"
  }
];

export default function SolutionPage() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [activeTab, setActiveTab] = useState<'features' | 'benefits'>('features');

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our innovative solutions designed to transform your business and drive growth
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedSolution(solution)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm mb-4">
                {solution.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <button 
                className="text-indigo-600 hover:text-indigo-800 font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSolution(solution);
                }}
              >
                Learn More →
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
                <h2 className="text-2xl font-bold">{selectedSolution.title}</h2>
                <button 
                  onClick={() => setSelectedSolution(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="relative h-64 w-full mb-6">
                <Image
                  src={selectedSolution.image}
                  alt={selectedSolution.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="mb-6">
                <p className="text-gray-600">{selectedSolution.description}</p>
              </div>

              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-4">
                  <button
                    className={`pb-2 px-4 ${
                      activeTab === 'features'
                        ? 'border-b-2 border-indigo-600 text-indigo-600'
                        : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab('features')}
                  >
                    Features
                  </button>
                  <button
                    className={`pb-2 px-4 ${
                      activeTab === 'benefits'
                        ? 'border-b-2 border-indigo-600 text-indigo-600'
                        : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab('benefits')}
                  >
                    Benefits
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {activeTab === 'features' ? (
                  <ul className="list-disc list-inside space-y-2">
                    {selectedSolution.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                ) : (
                  <ul className="list-disc list-inside space-y-2">
                    {selectedSolution.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-600">{benefit}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
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
      <section className="text-center bg-gray-50 py-12 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-gray-600 mb-6">
          Contact us today to learn how our solutions can help you achieve your goals
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Get Started
        </button>
      </section>
    </div>
  );
}