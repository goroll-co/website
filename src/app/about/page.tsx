'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Users, Target, Heart, Clock } from 'lucide-react';

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
    name: "Sarah Johnson",
    role: "CEO & Co-founder",
    bio: "Sarah brings 15 years of industry experience and a passion for innovation. She previously led product strategy at major tech companies.",
    image: "/api/placeholder/400/400",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO & Co-founder",
    bio: "With a Ph.D. in Computer Science, Michael leads our technical strategy and ensures we're always pushing technological boundaries.",
    image: "/api/placeholder/400/400",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Head of Design",
    bio: "Emma's eye for design and user experience has shaped our product into what it is today. She advocates for user-centered design in everything we do.",
    image: "/api/placeholder/400/400",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "David Kumar",
    role: "Head of Operations",
    bio: "David ensures our company runs smoothly and efficiently. His background in operations management has been crucial to our growth.",
    image: "/api/placeholder/400/400",
    social: {
      linkedin: "#"
    }
  }
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a simple idea and a passionate team of two."
  },
  {
    year: "2021",
    title: "First Major Product Launch",
    description: "Successfully launched our flagship product and secured initial customers."
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "Raised $10M to accelerate growth and expand our team."
  },
  {
    year: "2023",
    title: "International Expansion",
    description: "Opened offices in Europe and Asia, serving customers globally."
  },
  {
    year: "2024",
    title: "Major Milestone",
    description: "Reached 1 million users and launched revolutionary new features."
  }
];

const values = [
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "Customer First",
    description: "We put our customers at the heart of everything we do, ensuring their success is our success."
  },
  {
    icon: <Target className="w-8 h-8 text-indigo-600" />,
    title: "Innovation",
    description: "We constantly push boundaries and explore new possibilities to solve complex problems."
  },
  {
    icon: <Heart className="w-8 h-8 text-indigo-600" />,
    title: "Passion",
    description: "We're deeply passionate about our work and committed to making a positive impact."
  },
  {
    icon: <Clock className="w-8 h-8 text-indigo-600" />,
    title: "Reliability",
    description: "We build trust through consistent delivery and unwavering commitment to quality."
  }
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="max-w-7xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to transform the industry through innovation and dedication to excellence.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96">
          <Image
            src="/api/placeholder/800/600"
            alt="Our Story"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2020, we started with a simple idea: to make technology more accessible and useful for businesses.
            What began as a small team working out of a garage has grown into a global company serving customers worldwide.
          </p>
          <p className="text-gray-600">
            Today, we're proud to be leading the industry in innovation and customer satisfaction. Our journey has been
            marked by continuous learning, adaptation, and an unwavering commitment to our mission.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-4 rounded-xl">
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
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2" />
                <div className="w-4 h-4 bg-indigo-600 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10" />
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-sm text-indigo-600 font-semibold">{milestone.year}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
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
                <p className="text-indigo-600 mb-2">{member.role}</p>
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
                  <p className="text-indigo-600">{selectedMember.role}</p>
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
                      <a href={selectedMember.social.linkedin} className="text-gray-600 hover:text-indigo-600">
                        LinkedIn
                      </a>
                    )}
                    {selectedMember.social.twitter && (
                      <a href={selectedMember.social.twitter} className="text-gray-600 hover:text-indigo-600">
                        Twitter
                      </a>
                    )}
                    {selectedMember.social.github && (
                      <a href={selectedMember.social.github} className="text-gray-600 hover:text-indigo-600">
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
      <section className="bg-indigo-600 text-white py-16 px-4 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">1M+</div>
            <div>Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div>Team Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">20+</div>
            <div>Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div>Customer Satisfaction</div>
          </div>
        </div>
      </section>
    </div>
  );
}