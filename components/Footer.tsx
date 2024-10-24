import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 border-2 border-white flex items-center justify-center">
              <span className="text-2xl font-bold">+</span>
            </div>
            <h2 className="text-xl font-bold">Serenity Haven Wellness</h2>
          </div>
          <p className="text-sm">
            Serenity Haven Wellness is a compassionate and holistic mental health center dedicated to providing personalized care for individuals seeking emotional well-being and inner peace.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-200"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-gray-200"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-gray-200"><Youtube size={20} /></Link>
            <Link href="#" className="hover:text-gray-200"><Linkedin size={20} /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">FAQs</Link></li>
            <li><Link href="#" className="hover:underline">Teams</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Get Support</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Our Services</Link></li>
            <li><Link href="#" className="hover:underline">Testimonials</Link></li>
            <li><Link href="#" className="hover:underline">Blog Post</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Update</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Email Alert</Link></li>
            <li><Link href="#" className="hover:underline">New Offer</Link></li>
            <li><Link href="#" className="hover:underline">Wellness Tips</Link></li>
            <li><Link href="#" className="hover:underline">Event Update</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}