// src/app/[locale]/layout.tsx
import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from "@/components/Navbar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GOROLL",
  description: "We are on the ROLL to GO for ALL",
  icons: {
    icon: "favicon.ico",
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'th' }];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <footer className="bg-gray-800 text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-gray-300">
                      We are on the ROLL to GO for ALL
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-gray-300">Email: gorollth@outlook.com</p>
                    <p className="text-gray-300">Phone: +66 830796796</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="space-x-4">
                      
                        href="https://www.facebook.com/people/Goroll-Thailand-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%A7%E0%B8%B5%E0%B8%A5%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C/61567019297171/"
                        className="text-gray-300 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                      
                        href="https://www.instagram.com/gorollth/"
                        className="text-gray-300 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                      
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                      
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                  <p>© 2024 GOROLL. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}