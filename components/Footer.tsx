import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  HospitalIcon,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12  px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 border-2 border-primary-foreground flex items-center justify-center rounded-full">
                <HospitalIcon className="text-white text-2xl " />
              </div>
              <h2 className="text-xl font-bold">HeartCare</h2>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Professional mental health support for every stage of life and
              from children to adults, and for parents striving to nurture
              emotionally strong families
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Blog Post
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-tertiary" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <Link
              href="#"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              <Youtube className="w-6 h-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Serenity Haven Wellness. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
