"use client";
import { motion } from "framer-motion";
import { HospitalIcon, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import SlideTabs from "./ui/slide-tabs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { useActionFloatButtonContext } from "@/context/useActionFloatButtonContext";
import { FaWhatsapp } from "react-icons/fa";
import useContactWA from "@/hooks/useContactWA";

const tabs = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Service's" },
  { href: "#appointments", label: "Appointment's" },
  { href: "#questions", label: "FAQ's" },
  { href: "#locations", label: " Location's" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { setIsDrawerOpen } = useActionFloatButtonContext();
  const whatsappUrl = useContactWA();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="w-full fixed top-0 z-50"
        initial={{ backdropFilter: "blur(0px)", opacity: 1 }}
        animate={{
          backdropFilter: scrollY > 0 ? "blur(10px)" : "blur(0px)",
          backgroundColor:
            scrollY > 0 ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0)",
          transition: { duration: 0.3 },
        }}
      >
        {/* Blur effect background */}
        <div className="relative px-4 sm:px-6 lg:px-4">
          <div className="flex max-w-6xl mx-auto items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <HospitalIcon className="text-primary" />
              <h2 className="text-xl font-bold hidden md:inline-block">
                HeartCare
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <SlideTabs tabs={tabs} />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-primary"
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
      </motion.nav>

      {/* Mobile Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="flex flex-col justify-between">
          <div className="space-y-3">
            <SheetHeader className="text-start">
              <SheetTitle>HeartCare</SheetTitle>
              <SheetDescription>
                Quick links to different sections of our website.
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 text-start">
              {tabs.map((tab) => (
                <Link
                  onClick={() => setIsOpen(false)}
                  href={tab.href}
                  key={tab.href}
                  className="block px-2 py-1 text-lg hover:bg-muted rounded-md transition-colors"
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
          </div>
          <SheetFooter>
            <div className="flex flex-col gap-y-2 text-white">
              <SheetHeader className="text-start">
                <SheetTitle>Consult with us</SheetTitle>
                <SheetDescription>
                  Consul with us right now through this contact below
                </SheetDescription>
              </SheetHeader>
              <Button
                onClick={() => setIsDrawerOpen(true)}
                className="py-2 w-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Mail className="w-5 h-5" />
                <p>Email</p>
              </Button>
              <Link
                className="w-full"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="py-2 bg-green-500 w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  <FaWhatsapp className="w-5 h-5" />
                  <p>Whatsapp</p>
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
