"use client";
import { HospitalIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Service" },
    { href: "/appointments", label: "Appointments" },
    { href: "/contact", label: "Contact Us", isButton: true },
  ];

  return (
    <nav className="w-full fix">
      <div className="px-4 sm:px-6 lg:px-4">
        <div className="flex max-w-6xl mx-auto items-center justify-between h-16">
        <div className="flex items-center space-x-2">
        <HospitalIcon/>
            <h2 className="text-xl font-bold hidden md:inline-block">Serenity Haven Wellness</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <Link
              href={navLinks[4].href}
              className="bg-[#FFBF99] text-white hover:bg-[#f8a080] px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
            >
              {navLinks[4].label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  link.isButton
                    ? "bg-[#F8B195] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
