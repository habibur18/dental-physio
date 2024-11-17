"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import AboutSection from "./AboutUs";
import { CalendarTest } from "./CalenderTest";
import ContactSection from "./ContactUs";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { HomePageDBCopy } from "./HomePageDBCopy";
import Navbar from "./Navbar";
import ServicesSection from "./ServiceSection";
import TeamSection from "./TeamSection";
import TestimonialTwo from "./TestimonialTwo";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Austin Physio Clinic | Expert Physiotherapy in Central Austin",
  description:
    "Austin Physio Clinic offers expert physiotherapy services in Central Austin. Specializing in sports injuries, chronic pain, and rehabilitation. Book your appointment today!",
};

export function BlockPage() {
  return (
    <div className={`flex flex-col min-h-screen ${montserrat.className}`}>
      <header className="hidden sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image
              src="/logo.svg"
              alt="Austin Physio Clinic Logo"
              width={40}
              height={40}
            /> */}
            <span className="text-2xl font-bold text-teal-600">
              Austin Physio
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {["About", "Services", "Team", "Testimonials", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-teal-600 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
            <Link href="#book">Book Appointment</Link>
          </Button>
        </div>
      </header>
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="hidden relative py-20 md:py-32  h-[600px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://videocdn.cdnpk.net/videos/ecc96deb-2c2a-41be-9775-1cdfc7847c76/horizontal/previews/watermarked/large.mp4"
            >
              {" "}
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-teal-900 to-black opacity-80"></div>
          </div>
          <div className="container mx-auto relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-5xl mx-auto">
              Expert Physiotherapy in the Heart of Austin,Texas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Restore your mobility, relieve your pain, and revitalize your life
              with our specialized care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white duration-300 rounded-lg"
              >
                <Link href="#book">Book a Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="  bg-teal-200 hover:bg-teal-400  text-teal-600 hover:text-white border-none duration-300 rounded-lg"
              >
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
        <HeroSection />

        {/*  About Us section */}
        <section id="about" className="hidden py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              About Austin Physio Clinic
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  At Austin Physio Clinic, we&apos;re committed to providing
                  top-tier physiotherapy services in the heart of Austin. Our
                  team of expert physiotherapists combines years of experience
                  with cutting-edge techniques to deliver personalized care that
                  gets results.
                </p>
                <p className="text-lg mb-4">
                  Whether you&apos;re recovering from an injury, managing
                  chronic pain, or looking to improve your overall physical
                  performance, we&apos;re here to guide you every step of the
                  way.
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-teal-600 w-6 h-6" />
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-teal-600 w-6 h-6" />
                    <span>5000+ Happy Patients</span>
                  </div>
                </div>
              </div>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  src="/about-us.jpg"
                  alt="Austin Physio Clinic Interior"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </AspectRatio>
            </div>
          </div>
        </section>
        <AboutSection />
        {/* calender */}
        <section className="">
          {/* <CalenderTest /> */}
          <CalendarTest />
          <div className="hidden">
            <HomePageDBCopy />
          </div>
        </section>
        {/* services section */}

        <ServicesSection />

        {/* team section */}
        <TeamSection />

        <section id="testimonials" className=" hidden py-16 md:py-24 bg-white">
          {/* <EnhancedTestimonialCarouselComponent /> */}
          {/* <TestimonialOne /> */}
        </section>
        <TestimonialTwo />

        {/* action buttons section */}
        <section
          // id="book"
          className="py-16 md:py-24 bg-gradient-to-br from-black via-teal-900 to-black text-white relative overflow-hidden"
        >
          {/* <div className="absolute inset-0 bg-[url('/https://png.pngtree.com/background/20211217/original/pngtree-abstract-bg-picture-image_1596862.jpg')] opacity-10 bg-cover bg-center"></div> */}
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-teal-300">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-teal-100">
              Book your initial consultation today and take the first step
              towards a pain-free life. Our expert team is ready to create a
              personalized treatment plan just for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-sm hover:shadow-teal-500/50"
              >
                <Link href="https://booking.Austinphysioclinic.com">
                  Schedule Your Appointment
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 hover:text-white text-white border-teal-500 hover:border-teal-400 shadow-md shadow-teal-500/50 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
        </section>

        {/* contact section */}

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
