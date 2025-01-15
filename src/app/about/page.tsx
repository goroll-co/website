"use client";

import Image from "next/image";
import { useState } from "react";
import { Users, Target, Heart, Clock } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Title",
    role: "CEO & Co-founder",
    bio: "Physiotherapist",
    image: "/api/placeholder/400/400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Film",
    role: "CTO & Co-founder",
    bio: "B.Eng. in Computer Engineering",
    image: "/about/teammember/film.JPG",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Maprang",
    role: "Head of Marketing & Co-founder",
    bio: "ห",
    image: "/api/placeholder/400/400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Prima",
    role: "Head of Design & Co-founder",
    bio: "BAScii",
    image: "/api/placeholder/400/400",
    social: {
      linkedin: "#",
    },
  },
];

const values = [
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: "Inclusivity",
    description:
      "We believe in creating a world where every space is accessible and welcoming for wheelchair users and people of all abilities.",
  },
  {
    icon: <Heart className="w-8 h-8 text-orange-500" />,
    title: "Community-Driven",
    description:
      "Our strength comes from our community. We empower users to share experiences and support each other in making mobility more accessible.",
  },
  {
    icon: <Target className="w-8 h-8 text-orange-500" />,
    title: "Accessibility First",
    description:
      "Every feature we build starts with accessibility in mind, ensuring our solutions truly serve the needs of wheelchair users.",
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-500" />,
    title: "Empowerment",
    description:
      "We're dedicated to helping wheelchair users travel independently and confidently, transforming challenges into opportunities.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Company Founded",
    description: "Started with a simple idea and a passionate team of four.",
  },
  {
    year: "2024",
    title: "Series A Funding",
    description: "Raised THB 500K to accelerate growth and expand our team.",
  },
  // {
  //   year: "2021",
  //   title: "First Major Product Launch",
  //   description:
  //     "Successfully launched our flagship product and secured initial customers.",
  // },
  // {
  //   year: "2025",
  //   title: "Major Milestone",
  //   description:
  //     "Reached 100 users and launched revolutionary new features.",
  // },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="max-w-7xl mx-auto space-y-16 px-4 py-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-600">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to transform accessibility through innovation and
          dedication to inclusive mobility.
        </p>
      </section>

      {/* Story Section */}
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
            The GOROLL project is an application developed based on the
            experience of working with individuals with mobility impairments.
            This experience has led to a deeper awareness of the challenges
            faced by wheelchair users when traveling in Thailand.
          </p>
          <p className="text-gray-600">
            The primary goal of this project is to create an equitable society
            by improving the travel experience for wheelchair users. It focuses
            on reducing travel expenses and raising social awareness about the
            travel challenges faced by wheelchair users.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-orange-50 py-16 px-4 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-1/2" />
                <div className="w-4 h-4 bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10" />
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-sm text-orange-500 font-semibold">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-500 mb-2">{member.role}</p>
                <p className="text-gray-600 line-clamp-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                  <p className="text-orange-500">{selectedMember.role}</p>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/3 h-64">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-600 mb-4">{selectedMember.bio}</p>
                  <div className="flex space-x-4">
                    {selectedMember.social.linkedin && (
                      <a
                        href={selectedMember.social.linkedin}
                        className="text-gray-600 hover:text-orange-500"
                      >
                        LinkedIn
                      </a>
                    )}
                    {selectedMember.social.twitter && (
                      <a
                        href={selectedMember.social.twitter}
                        className="text-gray-600 hover:text-orange-500"
                      >
                        Twitter
                      </a>
                    )}
                    {selectedMember.social.github && (
                      <a
                        href={selectedMember.social.github}
                        className="text-gray-600 hover:text-orange-500"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-16 px-4 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">0</div>
            <div>Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">4</div>
            <div>Team Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1</div>
            <div>Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">0%</div>
            <div>Customer Satisfaction</div>
          </div>
        </div>
      </section>
    </div>
  );
}