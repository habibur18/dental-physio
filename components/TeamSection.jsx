import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Crown,
  Heart,
  Shield,
  Sparkles,
  Star,
  SmileIcon as Tooth,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Dentist",
    image:
      "https://img.freepik.com/free-photo/nurse-hijab-portrait-hospital_23-2150780432.jpg",
    specialization: "Cosmetic Dentistry",
    icon: Sparkles,
    featured: true,
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    image:
      "https://www.nydailynews.com/wp-content/uploads/migration/2022/03/27/QPNBI5ZPZZDM5MC5EDE3MKHYKE.jpg",
    specialization: "Braces & Aligners",
    icon: Crown,
    featured: true,
  },
  {
    name: "Dr. Emma Rodriguez",
    role: "Pediatric Dentist",
    image:
      "https://cdn.askapollo.com/live/images/doctors/physiotherapy/dr-ashish-jain-physiotherapy-in-bangalore.png",
    specialization: "Children's Dental Care",
    icon: Heart,
    featured: true,
  },
  {
    name: "Dr. James Wilson",
    role: "Periodontist",
    image:
      "https://img.freepik.com/premium-photo/moroccan-dentist-man-holding-tools-isolated-blue-wall-giving-thumbs-up-gesture_1368-180921.jpg",
    specialization: "Gum Health",
    icon: Shield,
  },
  {
    name: "Dr. Aisha Patel",
    role: "Endodontist",
    image:
      "https://img.freepik.com/free-photo/lovely-afroamerican-doctor-holding-copy-space_23-2148500112.jpg",
    specialization: "Root Canal Therapy",
    icon: Tooth,
  },
  {
    name: "Dr. David Kim",
    role: "Oral Surgeon",
    image:
      "https://img.freepik.com/free-photo/portrait-happy-boy-sitting-dental-chair-gesturing-ok-sign_23-2147905965.jpg",
    specialization: "Dental Implants",
    icon: Star,
  },
  {
    name: "Dr. Smith",
    role: "Oral Surgeon",
    image:
      "https://img.freepik.com/premium-photo/young-medical-doctor_93675-37904.jpg",
    specialization: "Dental Implants",
    icon: Star,
  },
];

const FeaturedCard = ({ member }) => (
  <Card className="h-max group relative overflow-hidden bg-gradient-to-br from-teal-900/50 to-black/50 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
    <AspectRatio ratio={3 / 4} className="bg-teal-950">
      <Image
        src={member.image}
        alt={member.name}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-full bg-teal-500/20 backdrop-blur-sm">
            <member.icon className="w-4 h-4 text-teal-300" />
          </div>
          <span className="text-teal-300 text-sm font-medium">
            {member.specialization}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-teal-200 font-medium">{member.role}</p>
      </div>
    </AspectRatio>
  </Card>
);

// const CompactCard = ({ member }) => (
//   <Card className="group relative overflow-hidden bg-gradient-to-br from-teal-900/50 to-black/50 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
//     <div className="flex items-center p-4">
//       <div className="w-16 h-16 border  rounded-full overflow-hidden mr-4">
//         <Image
//           src={member.image}
//           alt={member.name}
//           width={64}
//           height={64}
//           objectFit="cover"
//           objectPosition="130% 110%"
//           className="group-hover:scale-110 transition-transform duration-300"
//         />
//       </div>
//       <div>
//         <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
//         <p className="text-teal-200 text-sm font-medium mb-2">{member.role}</p>
//         <div className="flex items-center gap-2">
//           <div className="p-1 rounded-full bg-teal-500/20">
//             <member.icon className="w-3 h-3 text-teal-300" />
//           </div>
//           <span className="text-teal-300 text-xs">{member.specialization}</span>
//         </div>
//       </div>
//     </div>
//   </Card>
// );

const CompactCard = ({ member }) => (
  <Card className="group relative overflow-hidden bg-gradient-to-br from-teal-900 to-black/90 border-teal-800 hover:border-teal-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
    <div className="flex items-center p-4">
      <div className="relative w-16 h-16 rounded-full overflow-hidden border border-teal-500/20 flex-shrink-0 mr-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-teal-200 text-lg font-medium mb-2">{member.role}</p>
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-full bg-teal-500/20">
            <member.icon className="w-3 h-3 text-teal-300" />
          </div>
          <span className="text-teal-300 text-">{member.specialization}</span>
        </div>
      </div>
    </div>
  </Card>
);
export default function TeamSection() {
  return (
    <section id="team">
      <div className="py-16 md:py-24 bg-gradient-to-br from-black via-teal-900 to-black relative overflow-hidden">
        <div className="relative z-20 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Meet Our Expert Team
              </h2>
              <p className="text-teal-100 text-lg">
                Our experienced dental professionals are committed to providing
                you with the highest quality care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {teamMembers.slice(0, 3).map((member, index) => (
                <FeaturedCard key={index} member={member} />
              ))}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-to-tl from-teal-900 to-black via-teal-900 border-teal-500 p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Our Specialties
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {teamMembers.slice(3, 7).map((member, index) => (
                      <CompactCard key={index} member={member} />
                    ))}
                  </div>
                </Card>
              </div>
              <div className="lg:col-span-1">
                <Card className="bg-gradient-to-br from-teal-700/95 to-black border-teal-500/40 p-6 h-full flex flex-col justify-center items-center text-center">
                  <Tooth className="w-16 h-16 text-teal-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Comprehensive Dental Care
                  </h3>
                  <p className="text-teal-100 mb-6">
                    From routine check-ups to advanced procedures, we&apos;ve
                    got you covered.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8"
                  >
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white rounded-full px-8 border border-teal-500/50"
              >
                <Link href="/team">View Our Full Team</Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
