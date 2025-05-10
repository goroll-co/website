// src/components/home/FaqSection.tsx
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("faq1_question"),
      answer: t("faq1_answer"),
    },
    {
      question: t("faq2_question"),
      answer: t("faq2_answer"),
    },
    {
      question: t("faq3_question"),
      answer: t("faq3_answer"),
    },
    {
      question: t("faq4_question"),
      answer: t("faq4_answer"),
    },
  ];

  // การสลับสถานะของ Accordion
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {t("faq_title")}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {activeAccordion === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <div
                className={`px-4 pb-4 transition-all duration-300 ${
                  activeAccordion === index ? "block" : "hidden"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
