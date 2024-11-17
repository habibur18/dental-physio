"use client";
import { motion } from "framer-motion";
import { ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Quick Links",
    items: ["About", "Services", "Team", "Testimonials", "Contact"],
  },
  {
    title: "Services",
    items: [
      "Sports Injury Rehabilitation",
      "Chronic Pain Management",
      "Post-Surgery Recovery",
      "Pediatric Physiotherapy",
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-900 via-black to-teal-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/futuristic-metaverse-empty-room-product-display-presentation-abstract-technology-scifi-with-neon-light-3d-background_56104-2314.jpg')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-teal-300">
              Austin Physio Clinic
            </h3>
            <p className="text-sm text-teal-100">
              Restoring health and improving lives through expert physiotherapy
              care in the heart of Austin, Texas.
            </p>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-300">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-teal-100 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-teal-500 group-hover:text-white transition-colors duration-300" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-teal-300">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-teal-100 hover:text-white transition-colors duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
            <Link
              href="/careers"
              className="text-sm text-teal-100 hover:text-white transition-colors duration-300 flex items-center group"
            >
              <ChevronRight className="w-4 h-4 mr-2 text-teal-500 group-hover:text-white transition-colors duration-300" />
              Careers
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-teal-800 text-center text-sm text-teal-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          © {new Date().getFullYear()} Austin Physio Clinic. All rights
          reserved.
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
    </footer>
  );
}
