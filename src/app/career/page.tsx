// src/app/career/page.tsx

"use client";

import { useState, useEffect } from "react";
import { Briefcase, MapPin, Clock, DollarSign, Search } from "lucide-react";
import { Career } from "../interfaces";
import CommonHeroSection from "@/components/CommonHeroSection";
import JobDetailsModal from "@/components/career/JobDetailsModal";
import { getCareers } from "../../data/career";
import { useLanguage } from "@/context/LanguageContext";

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [careers, setCareers] = useState<Career[]>([]);
  const { t, language } = useLanguage();

  // เพิ่ม useEffect เพื่อ update ข้อมูล career เมื่อภาษาเปลี่ยน
  useEffect(() => {
    const updatedCareers = getCareers(language as "th" | "en");
    setCareers(updatedCareers);

    // ถ้ามี selectedJob อยู่ ให้ update ข้อมูลใน modal ด้วย
    if (selectedJob) {
      const updatedSelectedJob = updatedCareers.find(
        (career) => career.id === selectedJob.id
      );
      if (updatedSelectedJob) {
        setSelectedJob(updatedSelectedJob);
      }
    }
  }, [language, selectedJob?.id]);

  const filteredJobs = careers.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <CommonHeroSection
        title={t("career_title")}
        subtitle={t("career_subtitle")}
      />

      {/* Culture Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{t("our_culture")}</h2>
          <p className="text-gray-600">{t("culture_desc")}</p>
          <ul className="space-y-4 text-gray-700">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="text-blue-600">✓</span>
                <span>{t(`culture_point${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Job Listings Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">{t("open_positions")}</h2>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={t("search_positions")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.department}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJob(job);
                    }}
                  >
                    {t("view_details")}
                  </button>
                  {job.applicationUrl && (
                    <a
                      href={job.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t("apply_now")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Details Modal */}
      <JobDetailsModal
        selectedJob={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
}
