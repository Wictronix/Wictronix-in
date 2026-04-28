"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 3D Tilt Effect for Form
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX((y - centerY) / 30);
    setRotateY((centerX - x) / 30);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <main className="min-h-screen bg-white selection:bg-accent/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block"
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.95] mb-8"
            >
              Let's Build Something <br />
              That <span className="text-accent">Ships.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted font-medium leading-relaxed max-w-2xl opacity-80"
            >
              Whether you're a founder with an idea, a growth-stage company with execution gaps, or an enterprise looking for an embedded team—this is where it starts.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Contact Form */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                rotateX, 
                rotateY,
                perspective: 1000
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black p-8 md:p-12 rounded-[40px] shadow-2xl relative preserve-3d"
            >
              <div className="absolute -inset-2 bg-accent/10 blur-3xl -z-10 pointer-events-none" />
              
              <form className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Your Name *</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Email *</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Company Name</label>
                    <input type="text" placeholder="Acme Inc" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Company Website</label>
                    <input type="url" placeholder="https://acme.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">What do you need? *</label>
                    <select required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                      <option className="bg-black" value="">Select a service</option>
                      <option className="bg-black" value="technology">Technology</option>
                      <option className="bg-black" value="marketing">Marketing</option>
                      <option className="bg-black" value="consulting">Consulting</option>
                      <option className="bg-black" value="embedded">Embedded Team</option>
                      <option className="bg-black" value="multiple">Multiple Services</option>
                      <option className="bg-black" value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Budget Range</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                      <option className="bg-black" value="">Select range</option>
                      <option className="bg-black" value="under-5l">Under ₹5L</option>
                      <option className="bg-black" value="5l-15l">₹5L - ₹15L</option>
                      <option className="bg-black" value="15l-50l">₹15L - ₹50L</option>
                      <option className="bg-black" value="50l-1cr">₹50L - ₹1Cr</option>
                      <option className="bg-black" value="1cr+">₹1Cr+</option>
                      <option className="bg-black" value="discuss">Let's discuss</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Tell us about your project</label>
                  <textarea rows={4} placeholder="Briefly describe your vision, goals, and challenges..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors resize-none" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">How did you hear about us?</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                    <option className="bg-black" value="">Select an option</option>
                    <option className="bg-black" value="linkedin">LinkedIn</option>
                    <option className="bg-black" value="google">Google Search</option>
                    <option className="bg-black" value="referral">Referral</option>
                    <option className="bg-black" value="social">Social Media</option>
                    <option className="bg-black" value="other">Other</option>
                  </select>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  className="w-full bg-accent text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-3 shadow-xl shadow-accent/20 group"
                >
                  <span>Send Message</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column: Office Details + Map */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-2xl">🇮🇳</span>
                    <h2 className="text-xl font-display font-bold tracking-tight uppercase">India (Headquarters)</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-black/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                        <MapPin size={18} className="text-muted group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-lg font-medium leading-snug">
                          Prestige Trade Tower, <br />
                          Palace Rd, High Grounds, <br />
                          Sampangi Rama Nagar, <br />
                          Bengaluru, Karnataka 560001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-black/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                        <Phone size={18} className="text-muted group-hover:text-white transition-colors" />
                      </div>
                      <a href="tel:+919876543210" className="text-lg font-medium hover:text-accent transition-colors">
                        +91 98765 43210
                      </a>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-black/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                        <Mail size={18} className="text-muted group-hover:text-white transition-colors" />
                      </div>
                      <a href="mailto:india@wictronix.com" className="text-lg font-medium hover:text-accent transition-colors">
                        india@wictronix.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
