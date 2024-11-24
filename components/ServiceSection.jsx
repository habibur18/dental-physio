// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { CheckCircle } from "lucide-react";
// import Image from "next/image";

// export default function ServicesSection() {
//   return (
//     <section
//       id="services"
//       className="relative py-16 md:py-24 bg-gradient-to-br from-black via-teal-900 to-black overflow-hidden"
//     >
//       {/* Gradient Orbs */}
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

//       <div className="container relative mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-white">
//           Our Services
//         </h2>
//         <Tabs defaultValue="sports" className="w-full">
//           <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:max-w-[640px] mx-auto bg-black/40 backdrop-blur-sm p-1.5 rounded-2xl border border-teal-500/20">
//             <TabsTrigger
//               value="sports"
//               className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-400 data-[state=active]:text-white text-teal-100 rounded-xl transition-all duration-300"
//             >
//               Sports Injuries
//             </TabsTrigger>
//             <TabsTrigger
//               value="chronic"
//               className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-400 data-[state=active]:text-white text-teal-100 rounded-xl transition-all duration-300"
//             >
//               Chronic Pain
//             </TabsTrigger>
//             <TabsTrigger
//               value="rehab"
//               className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-400 data-[state=active]:text-white text-teal-100 rounded-xl transition-all duration-300"
//             >
//               Rehabilitation
//             </TabsTrigger>
//           </TabsList>
//           <TabsContent value="sports" className="mt-8">
//             <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-teal-500/20 rounded-2xl overflow-hidden">
//               <CardContent className="p-6 md:p-8">
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div className="space-y-6">
//                     <h3 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-white">
//                       Sports Injury Rehabilitation
//                     </h3>
//                     <p className="text-teal-100 leading-relaxed">
//                       Our sports injury rehabilitation program is designed to
//                       get athletes back in the game quickly and safely. We use a
//                       combination of manual therapy, exercise prescription, and
//                       cutting-edge techniques to treat a wide range of
//                       sports-related injuries.
//                     </p>
//                     <ul className="space-y-4">
//                       {[
//                         "Personalized treatment plans",
//                         "Advanced injury assessment",
//                         "Sport-specific rehabilitation exercises",
//                       ].map((item, index) => (
//                         <li
//                           key={index}
//                           className="flex items-center space-x-3 group"
//                         >
//                           <div className="relative">
//                             <div className="absolute inset-0 bg-teal-500/20 rounded-full blur group-hover:bg-teal-500/40 transition-colors duration-300" />
//                             <CheckCircle className="relative text-teal-300 w-5 h-5 group-hover:text-teal-200 transition-colors duration-300" />
//                           </div>
//                           <span className="text-teal-100 group-hover:text-white transition-colors duration-300">
//                             {item}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <AspectRatio
//                     ratio={16 / 9}
//                     className="bg-black/30 rounded-xl overflow-hidden group"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
//                     <Image
//                       src="/Sports Injuries.jpg"
//                       alt="Sports Injury Rehabilitation"
//                       layout="fill"
//                       objectFit="cover"
//                       className="group-hover:scale-110 transition-transform duration-700"
//                     />
//                   </AspectRatio>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           {/* Chronic Pain and Rehab tabs follow the same pattern - keeping code complete but concise */}
//           <TabsContent value="chronic" className="mt-8">
//             <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-teal-500/20 rounded-2xl overflow-hidden">
//               <CardContent className="p-6 md:p-8">
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div className="space-y-6">
//                     <h3 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-white">
//                       Chronic Pain Management
//                     </h3>
//                     <p className="text-teal-100 leading-relaxed">
//                       Our chronic pain management program focuses on providing
//                       long-term relief and improving quality of life for those
//                       suffering from persistent pain conditions. We employ a
//                       multidisciplinary approach to address the complex nature
//                       of chronic pain.
//                     </p>
//                     <ul className="space-y-4">
//                       {[
//                         "Comprehensive pain assessment",
//                         "Custom exercise programs",
//                         "Education on pain science and self-management",
//                       ].map((item, index) => (
//                         <li
//                           key={index}
//                           className="flex items-center space-x-3 group"
//                         >
//                           <div className="relative">
//                             <div className="absolute inset-0 bg-teal-500/20 rounded-full blur group-hover:bg-teal-500/40 transition-colors duration-300" />
//                             <CheckCircle className="relative text-teal-300 w-5 h-5 group-hover:text-teal-200 transition-colors duration-300" />
//                           </div>
//                           <span className="text-teal-100 group-hover:text-white transition-colors duration-300">
//                             {item}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <AspectRatio
//                     ratio={16 / 9}
//                     className="bg-black/30 rounded-xl overflow-hidden group"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
//                     <Image
//                       src="/chronic pain.jpg"
//                       alt="Chronic Pain Management"
//                       layout="fill"
//                       objectFit="cover"
//                       className="group-hover:scale-110 transition-transform duration-700"
//                     />
//                   </AspectRatio>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="rehab" className="mt-8">
//             <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-teal-500/20 rounded-2xl overflow-hidden">
//               <CardContent className="p-6 md:p-8">
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div className="space-y-6">
//                     <h3 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-white">
//                       Post-Surgery Rehabilitation
//                     </h3>
//                     <p className="text-teal-100 leading-relaxed">
//                       Our post-surgery rehabilitation program is tailored to
//                       support your recovery and help you regain function as
//                       quickly and safely as possible. We work closely with your
//                       surgeon to ensure a coordinated approach to your care.
//                     </p>
//                     <ul className="space-y-4">
//                       {[
//                         "Early mobilization techniques",
//                         "Graduated strength and flexibility training",
//                         "Functional retraining for daily activities",
//                       ].map((item, index) => (
//                         <li
//                           key={index}
//                           className="flex items-center space-x-3 group"
//                         >
//                           <div className="relative">
//                             <div className="absolute inset-0 bg-teal-500/20 rounded-full blur group-hover:bg-teal-500/40 transition-colors duration-300" />
//                             <CheckCircle className="relative text-teal-300 w-5 h-5 group-hover:text-teal-200 transition-colors duration-300" />
//                           </div>
//                           <span className="text-teal-100 group-hover:text-white transition-colors duration-300">
//                             {item}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <AspectRatio
//                     ratio={16 / 9}
//                     className="bg-black/30 rounded-xl overflow-hidden group"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
//                     <Image
//                       src="/post-surgery.jpg"
//                       alt="Post-Surgery Rehabilitation"
//                       layout="fill"
//                       objectFit="cover"
//                       className="group-hover:scale-110 transition-transform duration-700"
//                     />
//                   </AspectRatio>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   );
// }

// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { CheckCircle } from "lucide-react";
// import Image from "next/image";

// export default function ServicesSection() {
//   return (
//     <section
//       id="services"
//       className="py-16 md:py-24 bg-gradient-to-br from-black via-teal-900 to-black overflow-hidden"
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
//           Our Services
//         </h2>
//         <Tabs defaultValue="sports" className="w-full">
//           <TabsList className="w-full flex justify-between max-w-[640px] mx-auto bg-[#002626] rounded-full p-2 mb-8">
//             <TabsTrigger
//               value="sports"
//               className="flex-1 data-[state=active]:bg-teal-500 data-[state=active]:text-white text-teal-100 rounded-full transition-all duration-300"
//             >
//               Sports Injuries
//             </TabsTrigger>
//             <TabsTrigger
//               value="chronic"
//               className="flex-1 data-[state=active]:bg-teal-500 data-[state=active]:text-white text-teal-100 rounded-full transition-all duration-300"
//             >
//               Chronic Pain
//             </TabsTrigger>
//             <TabsTrigger
//               value="rehab"
//               className="flex-1 data-[state=active]:bg-teal-500 data-[state=active]:text-white text-teal-100 rounded-full transition-all duration-300"
//             >
//               Rehabilitation
//             </TabsTrigger>
//           </TabsList>
//           <TabsContent value="sports">
//             <Card className="bg-[#002626] border-none">
//               <CardContent className="p-6 md:p-8">
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div className="space-y-6">
//                     <div>
//                       <h3 className="text-2xl font-bold text-white mb-4">
//                         Sports Injury Rehabilitation
//                       </h3>
//                       <p className="text-teal-100 leading-relaxed">
//                         Our sports injury rehabilitation program is designed to
//                         get athletes back in the game quickly and safely. We use
//                         a combination of manual therapy, exercise prescription,
//                         and cutting-edge techniques to treat a wide range of
//                         sports-related injuries.
//                       </p>
//                     </div>
//                     <ul className="space-y-4">
//                       {[
//                         "Personalized treatment plans",
//                         "Advanced injury assessment",
//                         "Sport-specific rehabilitation exercises",
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center space-x-3">
//                           <CheckCircle className="text-teal-400 w-5 h-5 shrink-0" />
//                           <span className="text-teal-100">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <AspectRatio
//                     ratio={16 / 9}
//                     className="bg-[#001a1a] rounded-lg overflow-hidden"
//                   >
//                     <Image
//                       src="/Sports Injuries.jpg"
//                       alt="Sports Injury Rehabilitation"
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded-lg transition-transform duration-500 hover:scale-105"
//                     />
//                   </AspectRatio>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="chronic">
//             <Card className="bg-[#002626] border-none">
//               <CardContent className="p-6 md:p-8">
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div className="space-y-6">
//                     <div>
//                       <h3 className="text-2xl font-bold text-white mb-4">
//                         Chronic Pain Management
//                       </h3>
//                       <p className="text-teal-100 leading-relaxed">
//                         Our chronic pain management program focuses on providing
//                         long-term relief and improving quality of life for those
//                         suffering from persistent pain conditions. We employ a
//                         multidisciplinary approach to address the complex nature
//                         of chronic pain.
//                       </p>
//                     </div>
//                     <ul className="space-y-4">
//                       {[
//                         "Comprehensive pain assessment",
//                         "Custom exercise programs",
//                         "Education on pain science and self-management",
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center space-x-3">
//                           <CheckCircle className="text-teal-400 w-5 h-5 shrink-0" />
//                           <span className="text-teal-100">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <AspectRatio
//                     ratio={16 / 9}
//                     className="bg-[#001a1a] rounded-lg overflow-hidden"
//                   >
//                     <Image
//                       src="/chronic pain.jpg"
//                       alt="Chronic Pain Management"
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded-lg transition-transform duration-500 hover:scale-105"
//                     />
//                   </AspectRatio>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="rehab">
//             <Card className="bg-[#002626] border-none">
//               <CardContent className="p-6 md:p-8">
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div className="space-y-6">
//                     <div>
//                       <h3 className="text-2xl font-bold text-white mb-4">
//                         Post-Surgery Rehabilitation
//                       </h3>
//                       <p className="text-teal-100 leading-relaxed">
//                         Our post-surgery rehabilitation program is tailored to
//                         support your recovery and help you regain function as
//                         quickly and safely as possible. We work closely with
//                         your surgeon to ensure a coordinated approach to your
//                         care.
//                       </p>
//                     </div>
//                     <ul className="space-y-4">
//                       {[
//                         "Early mobilization techniques",
//                         "Graduated strength and flexibility training",
//                         "Functional retraining for daily activities",
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center space-x-3">
//                           <CheckCircle className="text-teal-400 w-5 h-5 shrink-0" />
//                           <span className="text-teal-100">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <AspectRatio
//                     ratio={16 / 9}
//                     className="bg-[#001a1a] rounded-lg overflow-hidden"
//                   >
//                     <Image
//                       src="/post-surgery.jpg"
//                       alt="Post-Surgery Rehabilitation"
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded-lg transition-transform duration-500 hover:scale-105"
//                     />
//                   </AspectRatio>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   );
// }

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  // bg-gradient-to-br from-black via-teal-900 to-black
  return (
    <div
      id="services"
      className=" py-16 md:py-24 bg-gradient-to-br from-teal-900 via-black to-teal-900 overflow-hidden"
    >
      <section className="relative z-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-white">
            Our Services
          </h2>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="w-full flex justify-between max-w-[640px] mx-auto bg-teal-900/40 backdrop-blur-sm rounded-full p-3 h-14 mb-8">
              <TabsTrigger
                value="general"
                className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-400 data-[state=active]:text-white text-teal-100 rounded-full h-10 transition-all duration-300"
              >
                General Dentistry
              </TabsTrigger>
              <TabsTrigger
                value="cosmetic"
                className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-400 data-[state=active]:text-white text-teal-100 rounded-full h-10 transition-all duration-300"
              >
                Cosmetic Dentistry
              </TabsTrigger>
              <TabsTrigger
                value="orthodontics"
                className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-400 data-[state=active]:text-white text-teal-100 rounded-full h-10 transition-all duration-300"
              >
                Orthodontics
              </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <Card className="bg-[#002626] border-none">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          General Dentistry
                        </h3>
                        <p className="text-teal-100 leading-relaxed">
                          Our general dentistry services focus on preventive
                          care and maintaining your overall oral health. We
                          provide comprehensive check-ups, cleanings, and
                          treatments to ensure your smile stays healthy and
                          bright.
                        </p>
                      </div>
                      <ul className="space-y-4">
                        {[
                          "Routine check-ups and cleanings",
                          "Cavity fillings and root canals",
                          "Gum disease treatment",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-teal-500/20 rounded-full blur" />
                              <CheckCircle className="relative text-teal-300 w-5 h-5" />
                            </div>
                            <span className="text-teal-100">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <AspectRatio
                      ratio={16 / 9}
                      className="bg-black/30 rounded-lg overflow-hidden"
                    >
                      <Image
                        src="https://cdn.pixabay.com/photo/2014/08/26/21/54/dentist-428646_1280.jpg"
                        alt="General Dentistry"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-transform duration-500 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cosmetic">
              <Card className="bg-[#002626] border-none">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Cosmetic Dentistry
                        </h3>
                        <p className="text-teal-100 leading-relaxed">
                          Enhance your smile with our cosmetic dentistry
                          services. We offer a range of treatments to improve
                          the appearance of your teeth, giving you the
                          confidence to show off your smile.
                        </p>
                      </div>
                      <ul className="space-y-4">
                        {[
                          "Teeth whitening",
                          "Porcelain veneers",
                          "Dental bonding and contouring",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-teal-500/20 rounded-full blur" />
                              <CheckCircle className="relative text-teal-300 w-5 h-5" />
                            </div>
                            <span className="text-teal-100">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <AspectRatio
                      ratio={16 / 9}
                      className="bg-black/30 rounded-lg overflow-hidden"
                    >
                      <Image
                        src="https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_1280.jpg"
                        alt="Cosmetic Dentistry"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-transform duration-500 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="orthodontics">
              <Card className="bg-[#002626] border-none">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Orthodontics
                        </h3>
                        <p className="text-teal-100 leading-relaxed">
                          Achieve a straighter, more aligned smile with our
                          orthodontic treatments. We offer various options to
                          correct misaligned teeth and improve your bite,
                          enhancing both function and aesthetics.
                        </p>
                      </div>
                      <ul className="space-y-4">
                        {[
                          "Traditional braces",
                          "Clear aligners",
                          "Retainers and post-treatment care",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-teal-500/20 rounded-full blur" />
                              <CheckCircle className="relative text-teal-300 w-5 h-5" />
                            </div>
                            <span className="text-teal-100">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <AspectRatio
                      ratio={16 / 9}
                      className="bg-black/30 rounded-lg overflow-hidden"
                    >
                      <Image
                        src="https://cdn.pixabay.com/photo/2016/06/05/14/16/dentist-1437430_960_720.jpg"
                        alt="Orthodontics"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-transform duration-500 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        {/*     <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div> */}
      </section>
    </div>
  );
}
