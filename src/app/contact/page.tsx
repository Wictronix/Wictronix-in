"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  // Mouse tilt effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 20;
    const yPct = (mouseY / height - 0.5) * -20;

    rotateX.set(yPct);
    rotateY.set(xPct);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    message: "",
    source: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mlgzedqw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Form Submission Result:", result);
      
      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          website: "",
          service: "",
          budget: "",
          message: "",
          source: ""
        });
      } else {
        console.error("Submission failed:", result.errors ? result.errors.map((err: any) => err.message).join(", ") : "Unknown error");
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("error");
    }
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
              Whether you're a founder with an idea, a growth-stage company with execution gaps, or an enterprise looking for an embedded team, this is where it starts.
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
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center space-y-8 relative z-10"
                  >
                    <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-4 relative">
                      <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full animate-pulse" />
                      <Send className="text-accent w-10 h-10 relative z-10" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">Thank You!</h2>
                      <p className="text-white/60 text-lg md:text-xl font-medium max-w-xs mx-auto leading-relaxed">
                        We have received your inquiry and will be <span className="text-accent">getting back to you soon.</span>
                      </p>
                    </div>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="text-white font-bold uppercase tracking-widest text-[10px] bg-white/5 border border-white/10 px-10 py-5 rounded-2xl hover:bg-white/10 transition-all active:scale-95 mt-8"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Your Name *</label>
                        <input 
                          required 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Email *</label>
                        <input 
                          required 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Company Name</label>
                        <input 
                          type="text" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Inc" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Company Website</label>
                        <input 
                          type="url" 
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://acme.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2 relative">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">What do you need? *</label>
                        <select 
                          required 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                        >
                          <option className="bg-black" value="">Select a service</option>
                          <optgroup label="Technology" className="bg-black text-accent font-bold">
                            <option className="bg-black text-white" value="web-dev">Full-Stack Web Dev</option>
                            <option className="bg-black text-white" value="mobile-apps">Mobile Apps (iOS/Android)</option>
                            <option className="bg-black text-white" value="ai-automation">AI Agents & Automation</option>
                            <option className="bg-black text-white" value="saas-products">Custom SaaS Products</option>
                            <option className="bg-black text-white" value="ui-ux">UI/UX Design</option>
                            <option className="bg-black text-white" value="erp-crm">ERP/CRM Systems</option>
                          </optgroup>
                          <optgroup label="Marketing" className="bg-black text-accent font-bold">
                            <option className="bg-black text-white" value="seo">SEO & Organic Growth</option>
                            <option className="bg-black text-white" value="performance-marketing">Performance Marketing</option>
                            <option className="bg-black text-white" value="social-media">Social Media Strategy</option>
                            <option className="bg-black text-white" value="brand-identity">Brand Identity</option>
                          </optgroup>
                          <optgroup label="Consulting" className="bg-black text-accent font-bold">
                            <option className="bg-black text-white" value="gtm-strategy">GTM Strategy</option>
                            <option className="bg-black text-white" value="fundraising">Fundraising Strategy</option>
                            <option className="bg-black text-white" value="business-dev">Business Development</option>
                            <option className="bg-black text-white" value="tech-consulting">Tech Consulting</option>
                          </optgroup>
                          <optgroup label="Enterprise" className="bg-black text-accent font-bold">
                            <option className="bg-black text-white" value="embedded-team">Embedded Team</option>
                            <option className="bg-black text-white" value="multiple">Multiple Engines</option>
                            <option className="bg-black text-white" value="other">Other / Let's Discuss</option>
                          </optgroup>
                        </select>
                        <div className="absolute right-6 top-[54px] pointer-events-none opacity-40">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>
                      <div className="space-y-2 relative">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Budget Range</label>
                        <select 
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                        >
                          <option className="bg-black" value="">Select range</option>
                          <option className="bg-black" value="under-10k">Under ₹10k</option>
                          <option className="bg-black" value="10k-50k">₹10k - ₹50k</option>
                          <option className="bg-black" value="50k-1l">₹50k - ₹1L</option>
                          <option className="bg-black" value="1l-5l">₹1L - ₹5L</option>
                          <option className="bg-black" value="5l-15l">₹5L - ₹15L</option>
                          <option className="bg-black" value="15l+">₹15L+</option>
                          <option className="bg-black" value="other">Other / Let's Discuss</option>
                        </select>
                        <div className="absolute right-6 top-[54px] pointer-events-none opacity-40">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Tell us about your project</label>
                      <textarea 
                        rows={4} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your vision, goals, and challenges..." 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors resize-none" 
                      />
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">How did you hear about us?</label>
                      <select 
                          name="source"
                          value={formData.source}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                        >
                          <option className="bg-black" value="">Select an option</option>
                          <option className="bg-black" value="linkedin">LinkedIn</option>
                          <option className="bg-black" value="google">Google Search</option>
                          <option className="bg-black" value="referral">Referral</option>
                          <option className="bg-black" value="social">Social Media</option>
                          <option className="bg-black" value="other">Other</option>
                        </select>
                        <div className="absolute right-6 top-[54px] pointer-events-none opacity-40">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>

                    <motion.button 
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }} 
                      className={`w-full bg-accent text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-3 shadow-xl shadow-accent/20 group transition-opacity ${status === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                      {status !== "submitting" && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </motion.button>

                    {status === "error" && (
                      <p className="text-red-400 text-xs font-bold text-center mt-4">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
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
                          Vadodara, <br />
                          Gujarat, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-black/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                        <Phone size={18} className="text-muted group-hover:text-white transition-colors" />
                      </div>
                      <a href="tel:+917717596969" className="text-lg font-medium hover:text-accent transition-colors">
                        +91 77175 96969
                      </a>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-black/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                        <Mail size={18} className="text-muted group-hover:text-white transition-colors" />
                      </div>
                      <a href="mailto:info@wictronix.com" className="text-lg font-medium hover:text-accent transition-colors">
                        info@wictronix.com
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
