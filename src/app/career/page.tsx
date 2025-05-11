"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, DollarSign, Search } from "lucide-react";
import { Career } from "../interfaces";
import CommonHeroSection from "@/components/CommonHeroSection";
import { careers } from "../../data/career";
import { useLanguage } from "@/context/LanguageContext";

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { t, language } = useLanguage();

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
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {selectedJob.department}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedJob.type}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {selectedJob.salary}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t("description")}
                  </h3>
                  <p className="text-gray-600">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t("requirements")}
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="text-gray-600">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t("responsibilities")}
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index} className="text-gray-600">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setSelectedJob(null)}
                  >
                    {t("close")}
                  </button>
                  {selectedJob.applicationUrl && (
                    <a
                      href={selectedJob.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                    >
                      {t("apply_now")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
