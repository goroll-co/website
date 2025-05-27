// src/components/home/TestimonialsSection.tsx
import React from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t("testimonial1_name"),
      role: t("testimonial1_role"),
      content: t("testimonial1_content"),
      avatar: "/testimonials/user1.jpg",
      rating: 5,
    },
    {
      name: t("testimonial2_name"),
      role: t("testimonial2_role"),
      content: t("testimonial2_content"),
      avatar: "/testimonials/user2.jpg",
      rating: 5,
    },
    {
      name: t("testimonial3_name"),
      role: t("testimonial3_role"),
      content: t("testimonial3_content"),
      avatar: "/testimonials/user3.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {t("testimonials_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
