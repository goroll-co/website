"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, DollarSign, Search } from "lucide-react";

interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  applicationUrl: string;
}

const jobPostings: JobPosting[] = [
  {
    id: 3,
    title: "UX/UI Designer (This work can help boost your portfolio.)",
    department: "Design",
    location: "Bangkok, Thailand & Remote",
    type: "Full-time",
    salary: "-",
    description:
      "We are seeking a talented UX/UI Designer to create beautiful and intuitive user experiences.",
    requirements: [
      "1+ years of UX/UI design experience",
      "Proficiency in Figma and design tools",
      "Strong portfolio demonstrating UI/UX work",
      "Experience with user research and testing",
      "Working under pressure"
    ],
    responsibilities: [
      "Design user interfaces for mobile applications",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with product and engineering teams",
    ],
    applicationUrl: "https://forms.gle/LVSuZWb1aLFpKCQR8",
  },
  {
    id: 2,
    title: "Legal Executive (Coming Soon)",
    department: "Legal",
    location: "Bangkok, Thailand & Remote",
    type: "Full-time",
    salary: "-",
    description: "Coming Soon",
    requirements: ["Coming Soon"],
    responsibilities: ["Coming Soon"],
    applicationUrl: "",
  },
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobPostings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-orange-400 to-orange-500 text-white py-16 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl max-w-3xl mx-auto">
          We are building something special and we are always looking for talented
          individuals to join our journey.
        </p>
      </section>

      {/* Culture Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Culture</h2>
          <p className="text-gray-600">
            We believe in creating an environment where people can do their best
            work. Our culture is built on collaboration, innovation, and mutual
            respect.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start space-x-3">
              <span className="text-orange-500">✓</span>
              <span>Collaborative and supportive environment</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-500">✓</span>
              <span>Focus on innovation and creativity</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-500">✓</span>
              <span>Work hard play hard (NO WORK-LIFE BALANCE)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-500">✓</span>
              <span>Opportunities for growth and learning</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Job Listings Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Open Positions</h2>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search positions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJob(job);
                    }}
                  >
                    View Details
                  </button>
                  {job.applicationUrl && (
                    <a
                      href={job.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Apply Now
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
                  <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
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
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-gray-600">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="text-gray-600">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
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
                    Close
                  </button>
                  {selectedJob.applicationUrl && (
                    <a
                      href={selectedJob.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors text-center"
                    >
                      Apply Now
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