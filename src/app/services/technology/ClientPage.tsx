"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Smartphone, Cpu, Layers, Cloud, Layout, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";
import GridBackground from "@/components/GridBackground";

const services = [
  {
    title: "Custom Web Development",
    icon: Code,
    image: "/images/tech-web.png",
    deliverables: ["Production-ready web applications", "Admin dashboards & client portals", "E-commerce platforms", "Landing pages & marketing sites"],
    stack: "Next.js, React, Node.js, TypeScript, Tailwind CSS",
    methodology: "We don't waterfall. Every project runs in 2-week sprints with CI/CD from day 1. You see progress every 14 days, not after 3 months.",
    different: "Most agencies build websites. We build digital infrastructure that your marketing and sales teams can actually use to generate pipeline."
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    image: "/images/tech-mobile.png",
    deliverables: ["iOS + Android applications", "Cross-platform builds (React Native, Flutter)", "App store optimization & launch"],
    methodology: "Prototype → User test → Ship → Iterate",
    different: "We don't hand you an app and disappear. We stay through the first 1000 users."
  },
  {
    title: "AI Agents & Automation",
    icon: Cpu,
    image: "/images/tech-ai.png",
    deliverables: ["Custom AI agents (GPT-powered)", "Workflow automation (n8n, Make, custom)", "RAG systems & knowledge bases", "AI integration into existing tools"],
    methodology: "Audit workflows → Identify automation opportunities → Build → Monitor → Optimize",
    different: "We don't build AI for AI's sake. We automate the work that's costing you time and money, then measure the difference."
  },
  {
    title: "SaaS Product Development",
    icon: Layers,
    image: "/images/tech-saas.png",
    deliverables: ["Full-stack SaaS architecture", "MVP to production pipeline", "Multi-tenant infrastructure", "Billing & subscription systems"],
    methodology: "Lean validation → Core build → Scale architecture",
    different: "We've built SaaS products from zero. We know what to build first and what to skip."
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    image: "/images/tech-cloud.png",
    deliverables: ["AWS / GCP infrastructure setup", "CI/CD pipelines", "Monitoring & alerting", "Cost optimization"],
    methodology: "Infrastructure-as-code, zero-downtime deployments.",
    different: "Your infrastructure should be boring. It should just work. We make it boring."
  },
  {
    title: "UI/UX Design",
    icon: Layout,
    image: "/images/tech-uiux.png",
    deliverables: ["Design systems", "Wireframes & prototypes (Figma)", "User research & testing", "High-fidelity visual design"],
    methodology: "Research → IA → Wireframe → Visual → Handoff → QA.",
    different: "We design for conversion and usability, not for Dribbble likes."
  }
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white selection:bg-accent/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center relative">
            {/* Localized Grid Accent (Hero) */}
            <div className="absolute -inset-20 z-0 pointer-events-none opacity-[0.15]"
              style={{
                backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
                backgroundSize: '15px 15px',
                maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
                Engineering Excellence
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[100px] font-display font-bold tracking-tighter leading-[0.95] md:leading-[0.85] mb-10 text-[#0A0A0B]"
            >
              Building the <br />
              <span className="text-accent">Future of Digital.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-black/50 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              We bridge the gap between complex engineering and business growth. High-performance products, built for scale, delivered with precision.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="space-y-20 md:space-y-32">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-h-0 lg:min-h-[600px] flex items-center"
              >
                <div className={`container mx-auto flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-24`}>
                  {/* Visual Section: Immersive Blend */}
                  <div className="relative w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square group">
                    <div className="absolute inset-0 z-10 pointer-events-none">
                      {/* Fade edges to background color without affecting center opacity */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${i % 2 === 0 ? "from-transparent via-transparent to-[#0A0A0B] via-[70%]" : "from-[#0A0A0B] via-transparent to-transparent via-[30%]"} hidden lg:block`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B] via-[15%] group-even:via-[85%]" />
                    </div>
                    
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover" 
                    />
                    
                    {/* Floating Icon Indicator */}
                    <div className={`absolute ${i % 2 === 0 ? "-left-4" : "-right-4"} top-1/2 -translate-y-1/2 z-20 hidden lg:block`}>
                      <div className="w-16 h-16 rounded-full bg-accent/10 backdrop-blur-3xl border border-accent/20 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(0,82,255,0.3)] group-hover:scale-110 transition-transform duration-700">
                        <service.icon className="w-7 h-7 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section: Refined Editorial Style */}
                  <div className="w-full lg:w-1/2 relative z-10">
                    {/* Localized Grid Accent */}
                    <div className="absolute -inset-10 z-0 pointer-events-none opacity-[0.05] hidden lg:block"
                      style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '15px 15px',
                        maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                      }}
                    />
                    <div className="inline-flex items-center space-x-4 mb-8">
                      <span className="text-[10px] font-mono font-bold text-accent tracking-[0.5em] uppercase">Engine_{i + 1}</span>
                      <div className="h-px w-12 bg-accent/30" />
                    </div>

                    <div className="mb-10">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-[0.9] text-white group-hover:text-accent transition-colors duration-700 mb-6">
                        {service.title}
                      </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-10 lg:gap-14">
                      {/* Left: Deliverables */}
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent mb-6 opacity-50">Deliverables</h4>
                          <ul className="space-y-3">
                            {service.deliverables.map(item => (
                              <li key={item} className="flex items-start space-x-3">
                                <div className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                <span className="text-[11px] font-medium text-white/40 leading-tight group-hover:text-white/80 transition-colors">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {service.stack && (
                          <div className="pt-6 border-t border-white/5">
                            <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent mb-3 opacity-50">Core Stack</h4>
                            <p className="text-[9px] font-mono font-medium text-white/20 leading-relaxed uppercase tracking-[0.2em]">
                              {service.stack}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Right: Strategy */}
                      <div className="flex flex-col justify-between space-y-8">
                        <div className="space-y-4">
                          <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent mb-6 opacity-50">Strategy</h4>
                          <p className="text-[13px] text-white/30 font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                            {service.methodology}
                          </p>
                        </div>

                        <div className="pt-8 border-t border-white/5 group/edge">
                          <div className="flex items-center space-x-3 mb-3">
                            <Sparkles className="w-3 h-3 text-accent opacity-50 group-hover/edge:rotate-12 transition-transform" />
                            <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent opacity-80">The Edge</h4>
                          </div>
                          <p className="text-[13px] text-white/60 font-bold leading-relaxed">
                            "{service.different}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Proof */}
      <section className="py-20 md:py-32 relative border-y border-white/5 bg-[#0A0A0B]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h2 className="text-3xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-white">Case Studies.</h2>
              <p className="text-white/40 max-w-md">Real-world engineering solving real-world business problems.</p>
            </div>
            <Link href="/work" className="inline-flex items-center space-x-3 text-accent text-xs font-bold uppercase tracking-widest group">
              <span className="border-b border-accent/30 pb-1 group-hover:border-accent transition-colors">Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Social Impact NGO",
                tag: "Web App & Community",
                image: "/images/work/ngo.png",
                metric: "100K+ Meta views in 30 days"
              },
              {
                name: "Doctor-Patient App",
                tag: "Mobile App & Growth",
                image: "/images/work/healthtech.png",
                metric: "2,500+ users in 90 days"
              }
            ].map((proj) => (
              <div key={proj.name} className="group relative aspect-[16/10] overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                <Image 
                  src={proj.image} 
                  alt={proj.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 backdrop-blur-md px-5 py-2 rounded-full border border-accent/20">
                      {proj.tag}
                    </span>
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                      {proj.metric}
                    </span>
                  </div>
                  <h3 className="text-4xl font-display font-bold text-white tracking-tight flex items-center justify-between">
                    <span>{proj.name}</span>
                    <ArrowRight className="w-8 h-8 -rotate-45 group-hover:rotate-0 group-hover:translate-x-2 transition-all duration-500 text-accent" />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech-Specific Logos */}
      <LogoMarquee 
        title="Engineering partners we've served"
        subtitle="Technical Excellence"
      />

      {/* CTA Section */}
      <section className="py-40 bg-[#0A0A0B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,82,255,0.05),transparent_70%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-12">
              Ready to build <br />something <span className="text-accent">legendary?</span>
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-6 bg-accent text-white px-12 py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_50px_-10px_rgba(0,82,255,0.5)] group"
            >
              <span>Initialize Project</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
