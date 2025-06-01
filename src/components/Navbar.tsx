// src/components/Navbar.tsx

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navigation = [
    { name: t("about"), href: "/about" },
    { name: t("solutions"), href: "/solutions" },
    { name: t("achievements"), href: "/achievements" },
    { name: t("career"), href: "/career" },
    { name: t("contact"), href: "/contact" },
  ];

  const isActivePath = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-[70]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                GOROLL
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors text-center min-w-[112px] ${
                  isActivePath(item.href)
                    ? "text-blue-500 bg-blue-50"
                    : "text-gray-500 hover:text-blue-500 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden fixed inset-0 z-40 transform transition-all duration-300 ease-in-out`}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          onClick={() => setIsOpen(false)}
        />
        <div className="relative float-right bg-white h-full w-64 shadow-xl">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between mb-6">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
              >
                GOROLL
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActivePath(item.href)
                      ? "text-blue-500 bg-blue-50"
                      : "text-gray-500 hover:text-blue-500 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 px-3 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
