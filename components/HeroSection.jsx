// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {
//   Clock,
//   Crown,
//   Heart,
//   Shield,
//   Sparkles,
//   Star,
//   SmileIcon as Tooth,
// } from "lucide-react";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-teal-900 to-black">
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 z-0">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//             // src="https://videocdn.cdnpk.net/videos/ecc96deb-2c2a-41be-9775-1cdfc7847c76/horizontal/previews/watermarked/large.mp4"
//             src="https://videocdn.cdnpk.net/videos/5570319c-95e7-4df4-831a-fa717811b5c3/horizontal/previews/watermarked/large.mp4"
//           >
//             <track kind="captions" />
//           </video>
//           {/* <div className="absolute inset-0 bg-black opacity-40" /> */}
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-teal-900/85 to-black/80"></div>
//       </div>

//       <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />

//       <div className="container relative mx-auto px-4 py-20 md:py-32">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column */}
//           <div className="space-y-8">
//             <Badge
//               variant="outline"
//               className="bg-teal-500/10 text-teal-300 border-teal-500/30 px-4 py-1.5"
//             >
//               <Star className="mr-2 h-3.5 w-3.5 fill-teal-300" />
//               Trusted by 10,000+ Patients
//             </Badge>

//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
//                 Transform Your Smile with Expert Dental Care
//               </h1>

//               <p className="text-xl text-teal-100 max-w-xl leading-relaxed">
//                 Experience exceptional dental care in Austin, TX. Our
//                 award-winning team combines advanced technology with gentle
//                 treatment for your perfect smile.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 h-12 text-lg"
//               >
//                 <Link href="#book">Book Appointment</Link>
//               </Button>
//               <Button
//                 asChild
//                 size="lg"
//                 variant="outline"
//                 className="bg-white/10  hover:text-white hover:border-teal-600 hover:border-2 hover:shadow-md duration-300 hover:bg-transparent text-white border-white/30 rounded-full px-8 h-12 text-lg"
//               >
//                 <Link href="#services">Our Services</Link>
//               </Button>
//             </div>

//             <div className="grid grid-cols-3 gap-8 pt-4">
//               <div>
//                 <div className="text-3xl font-bold text-white">20+</div>
//                 <div className="text-sm text-teal-200">Years Experience</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white">4.9/5</div>
//                 <div className="text-sm text-teal-200">Patient Rating</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white">100%</div>
//                 <div className="text-sm text-teal-200">Satisfaction</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="grid sm:grid-cols-2 gap-4">
//             {services.map((service, index) => (
//               <Card
//                 key={index}
//                 className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/[0.15] transition-colors group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="rounded-lg bg-teal-500/10 p-3 group-hover:bg-teal-500/20 transition-colors">
//                     <service.icon className="h-6 w-6 text-teal-300" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-white mb-1">
//                       {service.title}
//                     </h3>
//                     <p className="text-sm text-teal-100">
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const services = [
//   {
//     icon: Tooth,
//     title: "General Dentistry",
//     description: "Comprehensive care for all your dental needs",
//   },
//   {
//     icon: Sparkles,
//     title: "Cosmetic Dentistry",
//     description: "Transform your smile with expert treatments",
//   },
//   {
//     icon: Crown,
//     title: "Dental Implants",
//     description: "Permanent solution for missing teeth",
//   },
//   {
//     icon: Clock,
//     title: "Emergency Care",
//     description: "Same-day emergency dental services",
//   },
//   {
//     icon: Shield,
//     title: "Advanced Technology",
//     description: "State-of-the-art dental equipment",
//   },
//   {
//     icon: Heart,
//     title: "Patient Comfort",
//     description: "Gentle care and sedation options",
//   },
// ];

// 2nd
// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {
//   ArrowRight,
//   Clock,
//   Crown,
//   Heart,
//   MapPin,
//   Shield,
//   Sparkles,
//   Star,
//   SmileIcon as Tooth,
// } from "lucide-react";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-black via-teal-900 to-black overflow-hidden">
//       {/* SEO Optimization */}
//       <div className="sr-only">
//         <h1>
//           Best Dental Care in Austin, TX - Expert Dentists & Modern Technology
//         </h1>
//         <p>
//           Transform your smile with Austin&apos;s premier dental care. Offering
//           general dentistry, cosmetic procedures, and emergency services.
//           Trusted by over 10,000 patients with a 4.9/5 rating.
//         </p>
//       </div>

//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
//       <div className="absolute top-0 right-0 w-2/3 h-full">
//         <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-[50%] transform translate-x-1/3" />
//       </div>

//       <div className="container relative mx-auto px-4 py-12">
//         <div className="grid gap-16">
//           {/* Top Section */}
//           <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               <Badge
//                 variant="outline"
//                 className="bg-teal-500/10 text-teal-300 border-teal-500/30 px-4 py-1.5"
//               >
//                 <Star className="mr-2 h-3.5 w-3.5 fill-teal-300" />
//                 Trusted by 10,000+ Patients
//               </Badge>

//               <div className="space-y-6">
//                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
//                   Transform Your Smile with{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
//                     Expert Dental Care
//                   </span>
//                 </h2>

//                 <p className="text-xl text-teal-100 max-w-xl leading-relaxed">
//                   Experience exceptional dental care in Austin, TX. Our
//                   award-winning team combines advanced technology with gentle
//                   treatment for your perfect smile.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   asChild
//                   size="lg"
//                   className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 h-12 text-lg group"
//                 >
//                   <Link href="#book">
//                     Book Appointment
//                     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Link>
//                 </Button>
//                 <Button
//                   asChild
//                   size="lg"
//                   variant="outline"
//                   className="bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-full px-8 h-12 text-lg group"
//                 >
//                   <Link href="#locations">
//                     <MapPin className="mr-2 h-4 w-4" />
//                     Find Locations
//                   </Link>
//                 </Button>
//               </div>

//               {/* Stats with Highlights */}
//               <div className="grid grid-cols-3 gap-8 pt-4">
//                 <div className="relative group cursor-pointer">
//                   <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full transition-all group-hover:blur-2xl group-hover:bg-teal-500/30" />
//                   <div className="relative">
//                     <div className="text-3xl font-bold text-white">20+</div>
//                     <div className="text-sm text-teal-200">
//                       Years Experience
//                     </div>
//                   </div>
//                 </div>
//                 <div className="relative group cursor-pointer">
//                   <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full transition-all group-hover:blur-2xl group-hover:bg-teal-500/30" />
//                   <div className="relative">
//                     <div className="text-3xl font-bold text-white">4.9/5</div>
//                     <div className="text-sm text-teal-200">Patient Rating</div>
//                   </div>
//                 </div>
//                 <div className="relative group cursor-pointer">
//                   <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full transition-all group-hover:blur-2xl group-hover:bg-teal-500/30" />
//                   <div className="relative">
//                     <div className="text-3xl font-bold text-white">100%</div>
//                     <div className="text-sm text-teal-200">Satisfaction</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Video */}
//             <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transform lg:translate-x-12">
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover"
//                 src="https://videocdn.cdnpk.net/videos/5570319c-95e7-4df4-831a-fa717811b5c3/horizontal/previews/watermarked/large.mp4"
//               >
//                 <track kind="captions" />
//               </video>
//               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
//             </div>
//           </div>

//           {/* Services Section with Dynamic Widths and Varied Designs */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//             {services.map((service, index) => {
//               // Determine if the service should have a special design
//               const isSpecial = index === 0 || index === 3;
//               const isWide = index === 2;

//               return (
//                 <Card
//                   key={index}
//                   className={`
//                     group relative overflow-hidden transition-all duration-300
//                     ${
//                       isSpecial
//                         ? "bg-gradient-to-br from-teal-500/20 to-teal-500/5"
//                         : "bg-white/5"
//                     }
//                     ${isWide ? "md:col-span-2 lg:col-span-1" : ""}
//                     backdrop-blur-sm border-white/20 hover:border-teal-500/30
//                   `}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   <div className="relative p-6">
//                     <div className="flex items-start gap-4">
//                       <div
//                         className={`
//                         rounded-lg p-3 transition-colors
//                         ${
//                           isSpecial
//                             ? "bg-white/10 group-hover:bg-white/20"
//                             : "bg-teal-500/10 group-hover:bg-teal-500/20"
//                         }
//                       `}
//                       >
//                         <service.icon
//                           className={`
//                           h-6 w-6
//                           ${isSpecial ? "text-white" : "text-teal-300"}
//                         `}
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-teal-300 transition-colors">
//                           {service.title}
//                         </h3>
//                         <p className="text-teal-100/80">
//                           {service.description}
//                         </p>
//                         {isSpecial && (
//                           <Button
//                             variant="link"
//                             className="mt-4 text-teal-300 p-0 h-auto font-semibold group/btn"
//                           >
//                             Learn More
//                             <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
//                           </Button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   {isSpecial && (
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/50 to-teal-300/50" />
//                   )}
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const services = [
//   {
//     icon: Tooth,
//     title: "General Dentistry",
//     description:
//       "Comprehensive care for all your dental needs. Regular check-ups, cleanings, and preventive care.",
//   },
//   {
//     icon: Sparkles,
//     title: "Cosmetic Dentistry",
//     description:
//       "Transform your smile with expert treatments. Whitening, veneers, and smile makeovers.",
//   },
//   {
//     icon: Crown,
//     title: "Dental Implants",
//     description:
//       "Permanent solution for missing teeth. Natural-looking, durable, and comfortable replacement teeth.",
//   },
//   {
//     icon: Clock,
//     title: "Emergency Care",
//     description:
//       "Same-day emergency dental services available. Quick relief for dental pain and urgent issues.",
//   },
//   {
//     icon: Shield,
//     title: "Advanced Technology",
//     description:
//       "State-of-the-art dental equipment for precise and comfortable treatments.",
//   },
//   {
//     icon: Heart,
//     title: "Patient Comfort",
//     description:
//       "Gentle care and sedation options for a relaxing dental experience.",
//   },
// ];

// 3rd

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Clock,
  Crown,
  Heart,
  MapPin,
  Shield,
  Sparkles,
  Star,
  SmileIcon as Tooth,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-teal-900 to-black overflow-hidden">
      <div className="relative z-10">
        {/* SEO Optimization */}
        <div className="sr-only">
          <h1>
            Best Dental Care in Austin, TX - Expert Dentists & Modern Technology
          </h1>
          <p>
            Transform your smile with Austin&apos;s premier dental care.
            Offering general dentistry, cosmetic procedures, and emergency
            services. Trusted by over 10,000 patients with a 4.9/5 rating.
          </p>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-[50%] transform translate-x-1/3" />
        </div>

        <div className="container relative mx-auto px-4 py-12">
          <div className="grid gap-16">
            {/* Top Section */}
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <Badge
                  variant="outline"
                  className="bg-teal-500/10 text-teal-300 border-teal-500/30 px-4 py-1.5"
                >
                  <Star className="mr-2 h-3.5 w-3.5 fill-teal-300" />
                  Trusted by 10,000+ Patients
                </Badge>

                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                    Transform Your Smile with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                      Expert Dental Care
                    </span>
                  </h2>

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
                    className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 h-12 text-lg group"
                  >
                    <Link href="#book">
                      Book Appointment
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-full px-8 h-12 text-lg group"
                  >
                    <Link href="#locations">
                      <MapPin className="mr-2 h-4 w-4" />
                      Find Locations
                    </Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full transition-all group-hover:blur-2xl group-hover:bg-teal-500/30" />
                    <div className="relative">
                      <div className="text-3xl font-bold text-white">20+</div>
                      <div className="text-sm text-teal-200">
                        Years Experience
                      </div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full transition-all group-hover:blur-2xl group-hover:bg-teal-500/30" />
                    <div className="relative">
                      <div className="text-3xl font-bold text-white">4.9/5</div>
                      <div className="text-sm text-teal-200">
                        Patient Rating
                      </div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full transition-all group-hover:blur-2xl group-hover:bg-teal-500/30" />
                    <div className="relative">
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-sm text-teal-200">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Video */}
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transform lg:translate-x-12">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://videocdn.cdnpk.net/videos/5570319c-95e7-4df4-831a-fa717811b5c3/horizontal/previews/watermarked/large.mp4"
                >
                  <track kind="captions" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className={`
                  relative overflow-hidden transition-all duration-300
                  ${
                    service.isSpecial
                      ? "bg-teal-400/10 hover:bg-teal-400/15"
                      : "bg-teal-950 hover:bg-teal-950/80"
                  }
                  backdrop-blur-sm border-white/10 hover:border-teal-500/30
                `}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`
                      rounded-lg p-3
                      ${service.isSpecial ? "bg-white/20" : "bg-teal-500/10"}
                    `}
                      >
                        <service.icon className="h-6 w-6 text-teal-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-2">
                          {service.title}
                        </h3>
                        <p
                          className={`
                        ${
                          service.isSpecial
                            ? "text-teal-50/90"
                            : "text-teal-100/70"
                        }
                        text-base
                      `}
                        >
                          {service.description}
                        </p>
                        {service.isSpecial && (
                          <Button
                            variant="link"
                            className="mt-4 text-teal-300 p-0 h-auto font-semibold hover:text-teal-200 group"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Tooth,
    title: "General Dentistry",
    description:
      "Comprehensive care for all your dental needs. Regular check-ups, cleanings, and preventive care.",
    isSpecial: true,
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with expert treatments. Whitening, veneers, and smile makeovers.",
    isSpecial: false,
  },
  {
    icon: Crown,
    title: "Dental Implants",
    description:
      "Permanent solution for missing teeth. Natural-looking, durable, and comfortable replacement teeth.",
    isSpecial: false,
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description:
      "Same-day emergency dental services available. Quick relief for dental pain and urgent issues.",
    isSpecial: true,
  },
  {
    icon: Shield,
    title: "Advanced Technology",
    description:
      "State-of-the-art dental equipment for precise and comfortable treatments.",
    isSpecial: false,
  },
  {
    icon: Heart,
    title: "Patient Comfort",
    description:
      "Gentle care and sedation options for a relaxing dental experience.",
    isSpecial: false,
  },
];
