// src/components/about/EnhancedTeamSection.tsx
import React, { useState } from "react";
import Image from "next/image";
import { TeamMember } from "@/app/interfaces";
import { Linkedin, Twitter, Github, X } from "lucide-react";

export default function EnhancedTeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Title",
      role: "CEO & Co-founder",
      bio: "นักกายภาพบำบัดที่มีความหลงใหลในการทำให้การเดินทางเป็นเรื่องเข้าถึงได้สำหรับทุกคน มีประสบการณ์ทำงานกับผู้ใช้วีลแชร์มากว่า 5 ปี",
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
      bio: "นักศึกษาวิศวกรรมคอมพิวเตอร์ที่มีความหลงใหลในการใช้เทคโนโลยีเพื่อสร้างผลกระทบเชิงบวกต่อสังคม เชี่ยวชาญด้านการพัฒนาแอพพลิเคชัน",
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
      bio: "นักศึกษาด้านการตลาดที่มีความเชี่ยวชาญในการสร้างแบรนด์และการทำการตลาดดิจิทัล มีประสบการณ์ทำงานกับ startups หลายแห่ง",
      image: "/about/teammember/coquette.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 relative">
          <span className="relative inline-block">
            ทีมของเรา
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-blue-500"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-96 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="bg-white p-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                        >
                          <Twitter size={18} />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="bg-white p-2 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 line-clamp-2">{member.bio}</p>
                </div>
              </div>

              {hoveredMember === member.id && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full shadow-lg">
                  คลิกเพื่อดูข้อมูลเพิ่มเติม
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ส่วนแสดงข้อมูลทีมเพิ่มเติมเมื่อคลิก */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full overflow-hidden animate-scale-in">
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                <p className="text-xl text-blue-300">{selectedMember.role}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex space-x-4">
                {selectedMember.social.linkedin && (
                  <a
                    href={selectedMember.social.linkedin}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                {selectedMember.social.twitter && (
                  <a
                    href={selectedMember.social.twitter}
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                )}
                {selectedMember.social.github && (
                  <a
                    href={selectedMember.social.github}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                )}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedMember.bio}
              </p>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  ปิด
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
