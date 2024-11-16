import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Award, CheckCircle, ThumbsUp, Users } from "lucide-react";
import Image from "next/image";

// bg-gradient-to-br from-black via-teal-900 to-black
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-br from-teal-900 via-black to-teal-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Austin Dental Clinic
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-teal-100">
              At Austin Dental Clinic, we&apos;re committed to providing
              top-tier dental services in the heart of Austin. Our team of
              expert dentists combines years of experience with cutting-edge
              techniques to deliver personalized care that gets results.
            </p>
            <p className="text-lg text-teal-100">
              Whether you&apos;re coming in for a routine check-up, cosmetic
              procedure, or complex dental work, we&apos;re here to ensure your
              comfort and satisfaction every step of the way.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 border-white/20 p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-teal-500/10 p-3">
                      <stat.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-teal-200">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <AspectRatio
              ratio={4 / 3}
              className="bg-muted rounded-lg overflow-hidden"
            >
              <Image
                src="https://cdn.pixabay.com/photo/2014/11/20/10/56/clinic-538920_960_720.jpg"
                alt="Austin Dental Clinic Interior"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </AspectRatio>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500 rounded-full blur-2xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500 rounded-full blur-2xl opacity-50" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
    </section>
  );
}

const stats = [
  { icon: Award, value: "20+ Years", label: "Experience" },
  { icon: Users, value: "10,000+", label: "Happy Patients" },
  { icon: CheckCircle, value: "50+", label: "Expert Staff" },
  { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate" },
];
