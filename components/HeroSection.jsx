import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Clock,
  Crown,
  Heart,
  Shield,
  Sparkles,
  Star,
  SmileIcon as Tooth,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-teal-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            // src="https://videocdn.cdnpk.net/videos/ecc96deb-2c2a-41be-9775-1cdfc7847c76/horizontal/previews/watermarked/large.mp4"
            src="https://videocdn.cdnpk.net/videos/5570319c-95e7-4df4-831a-fa717811b5c3/horizontal/previews/watermarked/large.mp4"
          >
            <track kind="captions" />
          </video>
          {/* <div className="absolute inset-0 bg-black opacity-40" /> */}
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-teal-900/85 to-black/80"></div>
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="bg-teal-500/10 text-teal-300 border-teal-500/30 px-4 py-1.5"
            >
              <Star className="mr-2 h-3.5 w-3.5 fill-teal-300" />
              Trusted by 10,000+ Patients
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Transform Your Smile with Expert Dental Care
              </h1>

              <p className="text-xl text-teal-100 max-w-xl leading-relaxed">
                Experience exceptional dental care in Austin, TX. Our
                award-winning team combines advanced technology with gentle
                treatment for your perfect smile.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 h-12 text-lg"
              >
                <Link href="#book">Book Appointment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10  hover:text-white hover:border-teal-600 hover:border-2 hover:shadow-md duration-300 hover:bg-transparent text-white border-white/30 rounded-full px-8 h-12 text-lg"
              >
                <Link href="#services">Our Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-teal-200">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-teal-200">Patient Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-teal-200">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/[0.15] transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-teal-500/10 p-3 group-hover:bg-teal-500/20 transition-colors">
                    <service.icon className="h-6 w-6 text-teal-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-teal-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Tooth,
    title: "General Dentistry",
    description: "Comprehensive care for all your dental needs",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with expert treatments",
  },
  {
    icon: Crown,
    title: "Dental Implants",
    description: "Permanent solution for missing teeth",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "Same-day emergency dental services",
  },
  {
    icon: Shield,
    title: "Advanced Technology",
    description: "State-of-the-art dental equipment",
  },
  {
    icon: Heart,
    title: "Patient Comfort",
    description: "Gentle care and sedation options",
  },
];
