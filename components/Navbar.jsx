"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, SmileIcon as Tooth, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-teal-500/20 bg-gradient-to-r from-black via-teal-900 to-black backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Tooth className="h-8 w-8 text-teal-500" />
            <span className="text-2xl font-bold text-white">Austin Physio</span>
          </Link>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-teal-100 hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden sm:inline-flex border-teal-500  hover:bg-teal-500/10 hover:text-teal-300 bg-teal-500/20 text-teal-300"
                >
                  <User className="mr-2 h-4 w-4" />
                  Account
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-teal-900 text-teal-100 *:bg-teal-800 *:hover:bg-teal-700 border-teal-500/20 space-y-1"
              >
                <DropdownMenuItem className="hover:!bg-teal-600 hover:!text-teal-100">
                  <Link href="/login" className="w-full">
                    Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:!bg-teal-600 hover:!text-teal-100">
                  <Link href="/register" className="w-full">
                    Register
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              asChild
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold"
            >
              <Link href="#book">Book Now</Link>
            </Button>

            <Button
              variant="ghost"
              className="md:hidden text-teal-100 hover:bg-teal-500/10 hover:text-teal-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-sm font-medium text-teal-100 hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-2 px-4 text-sm font-medium text-teal-100 hover:bg-teal-500/10 hover:text-teal-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
