// src/components/FaqComponent.tsx
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqComponentProps {
  title: string;
  faqs: FaqItem[];
  className?: string;
}

export default function FaqComponent({
  title,
  faqs,
  className = "",
}: FaqComponentProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeAccordion === index}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <div className="flex-shrink-0 ml-4">
                  {activeAccordion === index ? (
                    <ChevronUp size={20} className="text-blue-600" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeAccordion === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                style={{
                  overflow: "hidden",
                }}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
