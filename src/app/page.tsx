"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import SocialTrust from "@/components/SocialTrust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.2, 
        delay: 0, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="min-h-screen relative overflow-x-clip"
    >
      <Navbar />
      <Hero />
      <Philosophy />
      <SelectedWork />
      <Services />
      <Methodology />
      <SocialTrust />
      <CTA />
      <Footer />
    </motion.main>
  );
}
