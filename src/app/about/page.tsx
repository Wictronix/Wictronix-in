"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Target, Rocket, ArrowUpRight } from "lucide-react";

const leadership = [
  {
    role: "Co-founder & CEO",
    name: "Mihir Gandhi",
    highlights: [
      "Program Manager, Amazon",
      "Venture Partner, Picus Capital",
      "IIMA' 27",
      "Ex-Product Manager, Chingari",
      "NIT CSE'24"
    ],
    image: "/images/CEO.webp",
    linkedin: "https://www.linkedin.com/in/mihir--gandhi/",
  },
  {
    role: "Co-Founder & CMO",
    name: "Sunil Poonia",
    highlights: [
      "CSE'24"
    ],
    image: "/images/CMO.webp",
    linkedin: "https://www.linkedin.com/in/sunil-kumar-",
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollYProgress: valuesProgress } = useScroll({
    target: valuesRef,
    offset: ["start end", "end start"]
  });

  const smoothValuesProgress = useSpring(valuesProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const valuesScrollX = useTransform(smoothValuesProgress, [0, 1], [1500, -1500]);

  // Hero transforms
  const portalScale = useTransform(smoothProgress, [0, 0.35, 0.5], isMobile ? [1, 2.5, 6] : [1, 5, 25]);
  const portalRotate = useTransform(smoothProgress, [0, 0.4], isMobile ? [0, 15] : [0, 45]);
  
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  const cubeY = useTransform(smoothProgress, [0, 1], [-200, 1500]);
  const cubeRotateX = useTransform(smoothProgress, [0, 1], isMobile ? [0, 360] : [0, 1080]);
  const cubeRotateY = useTransform(smoothProgress, [0, 1], isMobile ? [0, 720] : [0, 2160]);
  
  return (
    <main ref={containerRef} className="relative bg-white min-h-screen">
      <Navbar />
      
      {/* Section 1: Visionary Intro with Portal Effect */}
      <section className="relative h-[100vh] overflow-hidden flex items-center">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Hero Content */}
            <motion.div 
              style={{ y: heroTextY, opacity: heroTextOpacity }}
              className="text-left"
            >
              <motion.span 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-8 mt-[30px] md:mt-0 inline-block"
              >
                About WictroniX
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-[0.95] md:leading-[0.9] tracking-tighter mb-8 md:mb-10 text-foreground"
              >
                We Exist Because <br className="hidden md:block" />
                Execution Shouldn't Be <br className="hidden md:block" />
                the <span className="text-accent">Bottleneck.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted text-sm md:text-lg max-w-xl font-medium leading-relaxed opacity-80"
              >
                WictroniX was built for the gap between great ideas and shipped outcomes. Three years, four countries, and 50+ projects later, execution is all we do.
              </motion.p>
            </motion.div>

            {/* Right Column: THE PORTAL */}
            <div className="relative flex justify-center lg:justify-end">
              <motion.div 
                style={{ 
                  scale: isMobile ? 1.2 : portalScale, 
                  rotate: isMobile ? 0 : portalRotate,
                  willChange: "transform"
                }}
                animate={isMobile ? { rotate: 360 } : {}}
                transition={isMobile ? { duration: 30, repeat: Infinity, ease: "linear" } : {}}
                className="relative pointer-events-none"
              >
                <div className="relative w-[240px] h-[240px] md:w-[450px] md:h-[450px]">
                  <div className={`absolute inset-0 rounded-full border-[1px] border-accent/30 ${!isMobile ? 'animate-[spin_20s_linear_infinite]' : ''}`} />
                  <div className="absolute inset-[-30px] rounded-full border-[1px] border-accent/10 animate-[spin_30s_linear_infinite_reverse] hidden md:block" />
                  <div className="absolute inset-[-60px] rounded-full border-[1px] border-accent/5 animate-[spin_40s_linear_infinite] hidden md:block" />
                  
                  <div className={`absolute inset-8 rounded-full overflow-hidden border-[1px] border-white/20 ${!isMobile ? 'shadow-[0_0_100px_rgba(0,82,255,0.2)]' : 'shadow-lg'} bg-foreground`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-blue-500/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-40 h-40 rounded-full border border-white/5" />
                      <div className="absolute w-56 h-56 rounded-full border border-white/5" />
                      
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className={`absolute w-16 h-16 bg-accent rounded-full ${!isMobile ? 'blur-2xl' : 'blur-lg'}`}
                      />
                      <div className="relative w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#fff] animate-pulse z-10" />
                      
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute w-40 h-40"
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--color-accent)]" />
                      </motion.div>
                      
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute w-56 h-56"
                      >
                        <div className="absolute top-1/2 left-0 w-1 h-1 bg-white rounded-full opacity-40" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[120%] h-[120%] border border-accent/5 rounded-full"
                    />
                  </div>

                  <div className={`absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full ${!isMobile ? 'blur-sm animate-float' : ''}`} />
                  <div className={`absolute bottom-1/4 right-0 w-3 h-3 bg-blue-400 rounded-full ${!isMobile ? 'blur-md animate-float [animation-delay:2s]' : ''}`} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Static Background Blur */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Section 1: Our Story - Reverted to Grid Layout */}
      <section className="py-20 md:py-32 relative bg-white border-t border-black/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Title & Cube */}
            <div className="relative">
              <span className="text-accent text-[9px] font-bold tracking-[0.3em] uppercase mb-6 block">Our Story</span>
              <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-10 md:mb-12">
                Why <span className="text-accent">WictroniX?</span>
              </h2>

              {/* 3D Cube - Scaled & Centered with Translation */}
              <div className="mt-12 md:mt-16 h-64 md:h-80 flex items-center justify-center" style={{ perspective: "1500px" }}>
                <motion.div 
                  style={{ 
                    rotateX: isMobile ? 0 : cubeRotateX,
                    rotateY: isMobile ? 0 : cubeRotateY,
                    y: isMobile ? 0 : cubeY,
                    transformStyle: "preserve-3d",
                    willChange: "transform"
                  }}
                  animate={isMobile ? { rotateX: 360, rotateY: 360 } : {}}
                  transition={isMobile ? { duration: 20, repeat: Infinity, ease: "linear" } : {}}
                  className="w-32 h-32 md:w-40 md:h-40 relative"
                >
                  {[
                    { transform: `rotateY(0deg) translateZ(${isMobile ? 64 : 80}px)` },
                    { transform: `rotateY(90deg) translateZ(${isMobile ? 64 : 80}px)` },
                    { transform: `rotateY(180deg) translateZ(${isMobile ? 64 : 80}px)` },
                    { transform: `rotateY(270deg) translateZ(${isMobile ? 64 : 80}px)` },
                    { transform: `rotateX(90deg) translateZ(${isMobile ? 64 : 80}px)` },
                    { transform: `rotateX(-90deg) translateZ(${isMobile ? 64 : 80}px)` }
                  ].map((face, i) => (
                    <div 
                      key={i}
                      className={`absolute inset-0 bg-white/80 ${!isMobile ? 'backdrop-blur-sm' : ''} border-[3px] border-accent/40 shadow-[inset_0_0_50px_rgba(0,82,255,0.1)] flex items-center justify-center overflow-hidden rounded-xl`}
                      style={{ 
                        transform: face.transform,
                        backfaceVisibility: "visible"
                      }}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_80%)] opacity-20" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            {/* Right Column: Narrative & Philosophy */}
            <div className="space-y-16">
              <div className="space-y-8 text-base md:text-lg font-medium text-muted leading-relaxed">
                <p>
                  Every company we've worked with had the same problem: talented people, good tools, solid ideas and a massive gap between 'strategy deck' and 'shipped outcome.'
                </p>
                <p>
                  That gap isn't about skill. It's about integration. Marketing doesn't talk to tech. Tech doesn't understand the business model. Strategy gets made in a boardroom and dies in a Slack channel.
                </p>
                <p>
                  WictroniX was built to be the <span className="text-foreground font-bold">execution layer</span> that connects these domains, a single cross-functional team with the accountability of a co-founder and the speed of an agency.
                </p>
                <p>
                  We've been doing this for three years. For startups and MNCs. From India, serving the US, Australia, Canada, and beyond.
                </p>
              </div>

              {/* Redesigned Outcome Statement */}
              <div className="pt-24 relative">
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.6em] block mb-8">The Philosophy</span>
                  <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tighter leading-[0.8] text-foreground">
                    We don't <br />sell services. <br />
                    <span className="relative inline-block mt-4">
                      <span className="relative z-10 text-accent">We sell outcomes.</span>
                      <motion.span 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1.2 }}
                        className="absolute bottom-1 left-0 h-[0.15em] bg-accent/10 -z-10"
                      />
                    </span>
                  </h3>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Partner With Us (The DNA) - Curved Card Layout */}
      <section ref={valuesRef} className="mx-4 md:mx-8 rounded-[32px] md:rounded-[64px] py-20 md:py-32 relative overflow-hidden bg-foreground text-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-20">
        <div className="absolute top-0 right-0 w-full h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <motion.div 
          className="container mx-auto px-6 md:px-12 relative z-10"
          style={{ mixBlendMode: "difference" as any }}
        >
          <div className="text-center mb-20">
            <span className="text-accent text-[9px] font-bold tracking-[0.3em] uppercase mb-6 inline-block">The DNA</span>
            <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tighter leading-tight">
              What Makes This <br />
              <span className="text-accent">Different.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {[
              { 
                icon: Zap, 
                title: "A Team, Not a Vendor", 
                body: "You get a cross-functional squad, tech, marketing, strategy, not a project manager and a prayer. Our team sits inside your workflows, your Slack, your OKRs." 
              },
              { 
                icon: Target, 
                title: "Outcomes, Not Deliverables", 
                body: "We don't measure success in mockups delivered or blog posts published. We measure in pipeline generated, products shipped, and revenue influenced. If the number doesn't move, we haven't done our job." 
              },
              { 
                icon: Rocket, 
                title: "Flexibility at Scale", 
                body: "Start with a single project. Grow to a retainer. Scale to an embedded team. Shrink when you need to. No long-term lock-ins. No HR overhead." 
              }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-700 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-8 group-hover:rotate-[10deg] transition-transform shadow-lg shadow-accent/20">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 tracking-tight">{value.title}</h3>
                <p className="text-[11px] md:text-[12px] text-background/50 font-medium leading-relaxed">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Large Background Quote with Parallax */}
          <div className="mt-32 text-center relative">
            <motion.div 
              style={{ x: isMobile ? 0 : valuesScrollX, willChange: "transform" }}
              className={`absolute -top-12 left-0 right-0 text-[10vw] font-display font-bold opacity-[0.03] whitespace-nowrap pointer-events-none ${isMobile ? 'hidden' : ''}`}
            >
              EXECUTION IS EVERYTHING EXECUTION IS EVERYTHING
            </motion.div>
            <p className="text-xl md:text-3xl font-display font-medium tracking-tight max-w-3xl mx-auto leading-tight opacity-90">
              "We don't just build companies. We build the <span className="text-accent font-bold">future of execution</span> for the most ambitious teams."
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Leadership Staggered Grid */}
      <section className="py-20 md:py-32 bg-[#FAFAFA] relative z-10 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-xl mb-20 mx-auto text-center">
            <span className="text-accent text-[9px] font-bold tracking-[0.2em] mb-4 block uppercase opacity-60">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter leading-none">
              The People Running <br />Your <span className="text-accent">Execution.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 max-w-5xl mx-auto">
            {leadership.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col group"
              >
                <div className="relative aspect-[4/5] mb-6 md:mb-8 overflow-hidden rounded-[32px] md:rounded-[40px] bg-muted shadow-2xl max-w-[320px] mx-auto w-full">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={i === 0}
                  />
                </div>
                
                <div className="px-2">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1 tracking-tight">
                    {leader.name}
                  </h3>
                  <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase mb-4 block">
                    {leader.role}
                  </span>
                  
                  <div className="space-y-1.5 mb-8">
                    {leader.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <p className="text-[13px] text-muted font-medium leading-tight opacity-90">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={leader.linkedin} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors group/linkedin"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/linkedin:translate-x-0.5 group-hover/linkedin:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 3.5: Team Strength */}
      <section className="py-20 bg-white relative z-10 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-[9px] font-bold tracking-[0.2em] mb-4 block uppercase opacity-60">The Squad</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter leading-tight mb-8">
                Execution-First <br /><span className="text-accent">DNA.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <Zap className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Team Size - 25</h3>
                    <p className="text-sm text-muted font-medium leading-relaxed">
                      A lean, high-velocity squad of 25 specialists operating across three execution engines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <Target className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Team Strength</h3>
                    <p className="text-sm text-muted font-medium leading-relaxed">
                      Our squad consists of top graduates with incredible problem solving and analytical skills, 
                      hand-picked for their ability to thrive in high-stakes execution environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="bg-[#FAFAFA] border border-black/5 rounded-[40px] p-10 relative overflow-hidden">
                <p className="text-xl md:text-2xl font-display font-medium leading-relaxed text-foreground opacity-80">
                  "We don't hire 'employees.' We hire founders-in-waiting who understand that in the real world, 
                  execution is the only currency that matters."
                </p>
                <div className="mt-8 flex items-center space-x-3">
                  <div className="w-8 h-px bg-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">WictroniX Selection Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pulse of Execution (Weekly Sprint Graph) */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <span className="text-accent text-[9px] font-bold tracking-[0.3em] mb-4 block uppercase opacity-70">Operational Alpha v4.0</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter leading-[1.1] md:leading-[0.95] mb-6">
                The rhythm of <br />
                <span className="text-accent">pure execution.</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-8">
              {[
                { label: "High Intensity", color: "bg-[#78350f]" },
                { label: "Strategic Sync", color: "bg-accent" },
                { label: "Pure Execution", color: "bg-green-500" }
              ].map(item => (
                <div key={item.label} className="flex items-center space-x-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`} />
                  <span className="text-[10px] font-bold text-muted uppercase tracking-[0.15em]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side-by-Side Dashboard Layout */}
          <div className="relative group max-w-6xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/5 via-transparent to-blue-500/5 blur-2xl rounded-[48px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-[#050505] border border-white/5 rounded-[24px] md:rounded-[32px] p-4 md:p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left: Reduced Size Chart */}
                <div className="w-full lg:w-3/5">
                  <div className="relative h-[200px] md:h-[250px] w-[92%] md:w-full mx-auto md:ml-4">
                    <svg viewBox="0 0 1000 250" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="grad-brown" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#78350f" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="grad-blue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="grad-green" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Y-Axis Grid Lines & Labels */}
                      {[0, 1, 2].map(i => (
                        <g key={i}>
                          <line 
                            x1="0" y1={250 - i * 100} 
                            x2="1000" y2={250 - i * 100} 
                            stroke="white" strokeOpacity="0.05" strokeWidth="1" 
                          />
                          <text x="-35" y={255 - i * 100} className="text-[12px] md:text-[9px] font-bold fill-white/20">{i * 50}%</text>
                        </g>
                      ))}

                      {/* Dynamic X-Axis Labels (Current Month to Today) */}
                      {(() => {
                        const now = new Date();
                        const month = now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
                        const today = now.getDate();
                        
                        const milestones = [
                          1, 
                          Math.floor(today * 0.25) || 1, 
                          Math.floor(today * 0.5) || 1, 
                          Math.floor(today * 0.75) || 1, 
                          today
                        ];
                        
                        const uniqueMilestones = Array.from(new Set(milestones)).sort((a, b) => a - b);
                        
                        return uniqueMilestones.map((day, i) => {
                          const dateStr = `${month} ${day < 10 ? '0' + day : day}`;
                          return (
                            <text 
                              key={dateStr}
                              x={(i * 1000) / (uniqueMilestones.length - 1)} y="280" 
                              textAnchor="middle" 
                              className="text-[12px] md:text-[9px] font-bold fill-white/30 uppercase tracking-widest"
                            >
                              {dateStr}
                            </text>
                          );
                        });
                      })()}

                      {/* Area 1: Brown (Starts at high baseline) */}
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M0,180 C100,210 300,180 400,190 C550,220 800,170 1000,150 L1000,250 L0,250 Z"
                        fill="url(#grad-brown)"
                        stroke="#78350f"
                        strokeWidth="1.5"
                      />

                      {/* Area 2: Blue (Starts at high baseline) */}
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                        d="M0,140 C150,170 350,120 550,150 C750,180 900,70 1000,120 L1000,250 L0,250 Z"
                        fill="url(#grad-blue)"
                        stroke="var(--color-accent)"
                        strokeWidth="1.5"
                      />

                      {/* Area 3: Green (Starts at high baseline) */}
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
                        d="M0,100 C100,150 300,20 500,80 C700,150 900,10 1000,50 L1000,250 L0,250 Z"
                        fill="url(#grad-green)"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                      />

                      {/* Axes Lines */}
                      <line x1="0" y1="250" x2="1000" y2="250" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
                      <line x1="0" y1="0" x2="0" y2="250" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

                {/* Right: 2x2 Stats Grid */}
                <div className="w-full lg:w-2/5 grid grid-cols-2 gap-x-8 gap-y-10 lg:pl-12 lg:border-l border-white/5">
                  {[
                    { label: "Global Commits", value: "1,420", sub: "Last 30 Days" },
                    { label: "Coffee Consumed", value: "324", sub: "Cups of Fuel" },
                    { label: "Meeting Minutes", value: "12,450", sub: "Building > Talking" },
                    { label: "Midnight Sprints", value: "48", sub: "Pushed to Prod" }
                  ].map((stat, i) => (
                     <div key={stat.label} className="relative group/stat text-white">
                       <span className="text-[9px] md:text-[8px] font-bold text-white/40 uppercase tracking-[0.2em] block mb-2">{stat.label}</span>
                       <div className="text-xl md:text-2xl font-display font-bold tracking-tighter mb-0.5 group-hover/stat:text-accent transition-colors">
                         {stat.value}
                       </div>
                       <span className="text-[10px] md:text-[9px] font-medium text-accent tracking-tight opacity-80">{stat.sub}</span>
                     </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-accent text-[9px] font-bold tracking-[0.3em] uppercase mb-4 block">Next Steps</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tighter mb-10">
            Ready to close the gap?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3 rounded-full bg-foreground text-background text-[11px] font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center space-x-2 group"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
