// src/components/home/TestimonialsSection.tsx
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/app/interfaces";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials: Testimonial[] = [
    {
      name: t("testimonial1_name"),
      role: t("testimonial1_role"),
      content: t("testimonial1_content"),
      avatar: "/testimonials/user1.jpg", // จะใช้ fallback เป็น initial
      rating: 5,
    },
    {
      name: t("testimonial2_name"),
      role: t("testimonial2_role"),
      content: t("testimonial2_content"),
      avatar: "/testimonials/user2.jpg", // จะใช้ fallback เป็น initial
      rating: 5,
    },
    {
      name: t("testimonial3_name"),
      role: t("testimonial3_role"),
      content: t("testimonial3_content"),
      avatar: "/testimonials/user3.jpg", // จะใช้ fallback เป็น initial
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {t("testimonials_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              className="group" // เพิ่ม group class สำหรับ hover effects
            />
          ))}
        </div>

        {/* Optional: Add a CTA or additional content */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {t("testimonials_title")} - {t("join_community")}
          </p>
        </div>
      </div>
    </section>
  );
}
