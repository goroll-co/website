import React, { useState, useEffect } from "react";
import { Linkedin, Twitter, Github, X } from "lucide-react";
import { TeamMember } from "@/app/interfaces";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [, setHoveredMember] = useState<number | null>(null);
  const { language, t } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Title",
      role: t("ceo_role"),
      bio:
        language === "th"
          ? "นักกายภาพบำบัดที่มีความหลงใหลในการทำให้การเดินทางเป็นเรื่องเข้าถึงได้สำหรับทุกคน มีประสบการณ์ทำงานกับผู้ใช้วีลแชร์มากว่า 5 ปี"
          : "A physiotherapist passionate about making travel accessible for everyone. Has over 5 years of experience working with wheelchair users.",
      image: "/about/teammember/title.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Film",
      role: t("cto_role"),
      bio:
        language === "th"
          ? "นักศึกษาวิศวกรรมคอมพิวเตอร์ที่มีความหลงใหลในการใช้เทคโนโลยีเพื่อสร้างผลกระทบเชิงบวกต่อสังคม เชี่ยวชาญด้านการพัฒนาแอพพลิเคชัน"
          : "A computer engineering student passionate about using technology to create positive social impact. Specialized in application development.",
      image: "/about/teammember/film.JPG",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Coquette",
      role: t("marketing_role"),
      bio:
        language === "th"
          ? "นักศึกษาด้านการตลาดที่มีความเชี่ยวชาญในการสร้างแบรนด์และการทำการตลาดดิจิทัล มีประสบการณ์ทำงานกับ startups หลายแห่ง"
          : "A marketing student specialized in branding and digital marketing. Has experience working with several startups.",
      image: "/about/teammember/coquette.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  useEffect(() => {
    const teamCards = document.querySelectorAll(".team-card");
    teamCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate-fade-in");
      }, index * 200);
    });
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("our_team")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`team-card relative group opacity-0 transition-all rounded-3xl shadow-md hover:shadow-2xl duration-500 delay-${
                index * 100
              } transform hover:-translate-y-2 cursor-pointer overflow-hidden`}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-[420px] bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="bg-blue-600 text-white text-sm px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-xl">
                      {t("view_details")}
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors hover:scale-110 transform duration-300"
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="bg-white p-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="bg-white p-2 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-colors hover:scale-110 transform duration-300"
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 pb-8">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 line-clamp-2 mb-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden animate-scale-in shadow-2xl">
            <div className="relative h-64 md:h-80">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedMember.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors hover:scale-110 transform duration-300"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                <p className="text-xl text-blue-300">{selectedMember.role}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6 flex space-x-4">
                {selectedMember.social.linkedin && (
                  <a
                    href={selectedMember.social.linkedin}
                    className="text-blue-600 hover:text-blue-800 transition-colors hover:scale-125 transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                {selectedMember.social.twitter && (
                  <a
                    href={selectedMember.social.twitter}
                    className="text-blue-400 hover:text-blue-600 transition-colors hover:scale-125 transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={24} />
                  </a>
                )}
                {selectedMember.social.github && (
                  <a
                    href={selectedMember.social.github}
                    className="text-gray-700 hover:text-gray-900 transition-colors hover:scale-125 transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors hover:scale-105 transform duration-300 shadow-md hover:shadow-lg"
                >
                  {t("close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
