// src/components/home/TestimonialCard.tsx
import React from "react";
import { Star } from "lucide-react";
import type { Testimonial } from "@/app/interfaces";

interface TestimonialCardProps extends Testimonial {
  className?: string;
}

export default function TestimonialCard({
  name,
  role,
  content,
  avatar,
  rating,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    >
      {/* Header with Avatar and Info */}
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          {avatar && avatar !== "/testimonials/user1.jpg" ? (
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="h-12 w-12 rounded-full object-cover"
              onError={(e) => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span class="text-blue-600 font-bold text-lg">${name.charAt(
                        0
                      )}</span>
                    </div>
                  `;
                }
              }}
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="ml-4 flex-1">
          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="mb-4 flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating
                ? "text-yellow-400 fill-yellow-400 transition-colors"
                : "text-gray-300 transition-colors"
            }
          />
        ))}
        <span className="ml-2 text-sm text-gray-500">({rating}/5)</span>
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-gray-700 leading-relaxed">
        <p className="relative">
          <span className="text-blue-600 text-2xl leading-none">"</span>
          {content}
          <span className="text-blue-600 text-2xl leading-none">"</span>
        </p>
      </blockquote>
    </div>
  );
}
