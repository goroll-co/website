// src/app/components/about/StorySection.tsx
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative h-96">
        <Image
          src="/home.png"
          alt="Our Story"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-600">Our Story</h2>
        <p className="text-gray-900">
          The GOROLL project is an application developed based on the experience
          of working with individuals with mobility impairments. This experience
          has led to a deeper awareness of the challenges faced by wheelchair
          users when traveling in Thailand.
        </p>
        <p className="text-gray-600">
          The primary goal of this project is to create an equitable society by
          improving the travel experience for wheelchair users. It focuses on
          reducing travel expenses and raising social awareness about the travel
          challenges faced by wheelchair users.
        </p>
      </div>
    </section>
  );
}
