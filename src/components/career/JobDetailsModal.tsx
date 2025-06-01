// src/components/career/JobDetailsModal.tsx
"use client";

import { Briefcase, MapPin, Clock, DollarSign, X } from "lucide-react";
import { Career } from "../../app/interfaces";
import { useLanguage } from "@/context/LanguageContext";

interface JobDetailsModalProps {
  selectedJob: Career | null;
  onClose: () => void;
}

export default function JobDetailsModal({
  selectedJob,
  onClose,
}: JobDetailsModalProps) {
  const { t } = useLanguage();

  if (!selectedJob) return null;

  return (
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
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">{t("description")}</h3>
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
                onClick={onClose}
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
  );
}
