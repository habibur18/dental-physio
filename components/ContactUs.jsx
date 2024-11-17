"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For this example, we'll just set the submitted state
    setIsSubmitted(true);
  };
  //  bg-gradient-to-br from-black via-teal-900 to-black

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-teal-900 via-black to-teal-900 text-white relative overflow-hidden"
    >
      {/* Gradient Orbs */}
      {/* <div className="absolute inset-0 bg-[url('https://png.pngtree.com/background/20211217/original/pngtree-abstract-bg-picture-image_1596862.jpg')] opacity-10 bg-cover bg-center"></div> */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-teal-300">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-teal-500/20 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-teal-300">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      Icon: MapPin,
                      text: "123 Harley Street, Austin, W1G 7JU",
                    },
                    { Icon: Phone, text: "020 7123 4567" },
                    { Icon: Mail, text: "info@Austinphysioclinic.com" },
                    { Icon: Clock, text: "Mon-Fri: 8am-7pm, Sat: 9am-5pm" },
                  ].map(({ Icon, text }, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="bg-teal-500/20 p-3 rounded-full">
                        <Icon className="text-teal-300 w-6 h-6" />
                      </div>
                      <span className="text-teal-100">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-teal-500/20 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-teal-300">
                  Send Us a Message
                </h3>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full"
                  >
                    <CheckCircle className="w-16 h-16 text-teal-400 mb-4" />
                    <p className="text-teal-100 text-xl text-center">
                      Thank you for your message! We&apos;ll get back to you
                      soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-white/5 border-teal-500/30 text-white placeholder:text-teal-200/50"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/5 border-teal-500/30 text-white placeholder:text-teal-200/50"
                      required
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className="bg-white/5 border-teal-500/30 text-white placeholder:text-teal-200/50"
                      required
                    ></Textarea>
                    <Button
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-semibold rounded-full"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
    </section>
  );
}
