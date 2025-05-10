// src/components/home/StatsSection.tsx
import React from "react";

export default function StatsSection() {
  const stats = [
    { value: "98%", label: "ความพึงพอใจ" },
    { value: "200+", label: "สถานที่ที่เข้าถึงได้" },
    { value: "50+", label: "คนขับที่ผ่านการตรวจสอบ" },
    { value: "24/7", label: "การสนับสนุน" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl overflow-hidden my-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
