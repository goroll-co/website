// src/components/home/TestimonialsSection.tsx
import React from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "สมชาย ใจดี",
      role: "ผู้ใช้วีลแชร์",
      content:
        "GOROLL ทำให้การเดินทางของผมง่ายขึ้นมาก ผมสามารถวางแผนเส้นทางที่เข้าถึงได้และแบ่งปันประสบการณ์กับคนอื่นๆ ได้",
      avatar: "/testimonials/user1.jpg",
      rating: 5,
    },
    {
      name: "นภา วงศ์สมบูรณ์",
      role: "นักท่องเที่ยว",
      content:
        "แอพนี้ช่วยให้ดิฉันวางแผนการเดินทางสำหรับคุณแม่ที่ใช้วีลแชร์ได้ดีมาก ขอบคุณ GOROLL ที่ทำให้การท่องเที่ยวเข้าถึงได้สำหรับทุกคน",
      avatar: "/testimonials/user2.jpg",
      rating: 5,
    },
    {
      name: "วิชัย สุขสันต์",
      role: "คนขับรถ GOROLL",
      content:
        "ผมดีใจที่ได้เป็นส่วนหนึ่งของชุมชน GOROLL การช่วยให้ผู้ใช้วีลแชร์เดินทางได้สะดวกทำให้ผมรู้สึกภูมิใจมาก",
      avatar: "/testimonials/user3.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          เสียงจากผู้ใช้งานของเรา
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    {/* ใส่รูปจริงตรงนี้ถ้ามี */}
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
