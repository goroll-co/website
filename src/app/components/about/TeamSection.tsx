// src/app/components/about/TeamSection.tsx
import { useState } from "react";
import Image from "next/image";
import { TeamMember } from "../../interfaces";

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Title",
      role: "CEO & Co-founder",
      bio: "A physiotherapist",
      image: "/about/teammember/title.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Film",
      role: "CTO & Co-founder",
      bio: "A computer engineering student",
      image: "/about/teammember/film.JPG",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Coquette",
      role: "Head of Marketing",
      bio: "A marketing student",
      image: "/about/teammember/coquette.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 line-clamp-3">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                  <p className="text-blue-600">{selectedMember.role}</p>
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
                        className="text-gray-600 hover:text-blue-600"
                      >
                        LinkedIn
                      </a>
                    )}
                    {selectedMember.social.twitter && (
                      <a
                        href={selectedMember.social.twitter}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        Twitter
                      </a>
                    )}
                    {selectedMember.social.github && (
                      <a
                        href={selectedMember.social.github}
                        className="text-gray-600 hover:text-blue-600"
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
    </section>
  );
}
