"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isWorkPage = pathname === "/work" || pathname?.startsWith("/work/");
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Scrolled state for background
    setIsScrolled(latest > 50);

    // Visibility state (Hide on scroll down, show on scroll up)
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const shouldShowBg = isScrolled || isWorkPage;

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        backgroundColor: shouldShowBg ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0)",
        backdropFilter: shouldShowBg ? "blur(40px) saturate(180%)" : "blur(0px) saturate(100%)",
        borderBottom: shouldShowBg ? "1px solid rgba(0, 0, 0, 0.05)" : "1px solid rgba(255, 255, 255, 0)",
        boxShadow: shouldShowBg ? "0 4px 30px rgba(0, 0, 0, 0.03)" : "0 0px 0px rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-screen z-[100] py-2.5 transition-all duration-500 overflow-x-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group flex items-center">
          <img 
            src="/main_logo.svg" 
            alt="WictroniX Logo" 
            className="h-7 w-auto" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-black hover:text-accent transition-colors relative group tracking-tight"
            >
              <span>{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="group relative flex items-center space-x-2.5 bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-accent transition-all duration-500 overflow-hidden shadow-xl"
          >
            <span className="relative z-10">Start a Project</span>
            <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-foreground text-background shadow-xl border border-white/10 transition-transform active:scale-95"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-display font-bold text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-white px-8 py-4 rounded-2xl text-center font-bold shadow-lg shadow-accent/20"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
