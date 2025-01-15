'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-16rem)] space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Have questions? Here&#39;s how you can reach us.
        </p>
      </div>

      {/* Contact Information */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-700">+66 830796796</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-700">gorollth@outlook.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-700">
                  Bangkok, Thailand
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Business Hours</h3>
                <p className="text-gray-700">Monday - Friday: 10:00 - 18:00</p>
                <p className="text-gray-700">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed -z-10 top-20 right-0 w-64 h-64 bg-orange-400 rounded-full opacity-10 blur-3xl" aria-hidden="true"></div>
      <div className="fixed -z-10 bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl" aria-hidden="true"></div>
    </div>
  );
}