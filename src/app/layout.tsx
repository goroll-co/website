// src/app/layout.tsx
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // เพิ่ม import Footer component ใหม่
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/LanguageContext"; // ลบ useLanguage ออก
import CookieConsent from "@/components/CookieConsent";
// ลบ import useState, PrivacyPolicy, TermsOfService ออก

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "GOROLL",
  description: "Your route, your rights",
};

// ลบ Footer function ทั้งหมดออก

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer /> {/* ใช้ Footer component ใหม่ */}
          </div>
          <CookieConsent />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
