"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Users, TrendingUp, SearchIcon, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";

const services = [
  {
    title: "Go-To-Market Strategy",
    icon: Compass,
    image: "/images/consulting-gtm.png",
    deliverables: ["GTM playbook", "ICP definition", "Channel strategy", "Launch plan", "Pricing strategy"],
    methodology: "ICP research → Channel mapping → Hypothesis → Test → Scale.",
    different: "We don't just write the GTM plan. We run the first sprint ourselves. If it doesn't work, we're accountable, not just consultants."
  },
  {
    title: "Business Development (Embedded)",
    icon: Users,
    image: "/images/consulting-bd.png",
    deliverables: ["Outbound engine", "Partnership development", "Pipeline generation", "CRM setup"],
    methodology: "We build and operate your BD engine from inside your team. ICP targeting, outbound sequences, partnership identification executed, not just planned.",
    different: "This is the core of our embedded model. We generate pipeline, not recommendations."
  },
  {
    title: "Fundraising Support",
    icon: TrendingUp,
    image: "/images/consulting-fundraising.png",
    deliverables: ["Pitch deck", "Financial model", "Investor pipeline", "Narrative crafting", "Data room"],
    methodology: "Story-driven deck + metric-backed model.",
    different: "We've seen both sides of the table. We know what investors actually look at and what they skip."
  },
  {
    title: "Market Research & Intelligence",
    icon: SearchIcon,
    image: "/images/consulting-research.png",
    deliverables: ["Market sizing", "Competitor mapping", "Opportunity analysis", "Trend reports"],
    methodology: "Primary + secondary research, delivered as actionable briefs (not 80-page decks).",
    different: "Research without recommendations is just data. Every report ends with 'Here's what to do.'"
  }
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white selection:bg-accent/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
                Strategic Excellence
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[100px] font-display font-bold tracking-tighter leading-[0.95] md:leading-[0.85] mb-10 text-[#0A0A0B]"
            >
              Strategy That Stays <br />
              <span className="text-accent">Until It's Executed.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-black/50 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              Most consultants hand you a deck and leave. We stay for the execution, ensuring the strategy actually hits the market. Results-first consulting.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
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
                  {/* Visual Section */}
                  <div className="relative w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square group">
                    <div className="absolute inset-0 z-10 pointer-events-none">
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
                    
                    <div className={`absolute ${i % 2 === 0 ? "-left-4" : "-right-4"} top-1/2 -translate-y-1/2 z-20 hidden lg:block`}>
                      <div className="w-16 h-16 rounded-full bg-accent/10 backdrop-blur-3xl border border-accent/20 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(0,82,255,0.3)] group-hover:scale-110 transition-transform duration-700">
                        <service.icon className="w-7 h-7 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 relative z-10">
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

      {/* Growth Proof Section */}
      <section className="py-20 md:py-32 relative border-y border-white/5 bg-[#0A0A0B]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h2 className="text-3xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-white">Strategy in motion.</h2>
              <p className="text-white/40 max-w-md">Real-world results through strategic execution.</p>
            </div>
            <Link href="/work" className="inline-flex items-center space-x-3 text-accent text-xs font-bold uppercase tracking-widest group">
              <span className="border-b border-accent/30 pb-1 group-hover:border-accent transition-colors">Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "NGO Marketplace",
                tag: "GTM & Marketplace Strategy",
                image: "/images/work/ngo-marketplace.png",
                metric: "50+ Features. 4 Stakeholder Portals"
              },
              {
                name: "Healthcare Provider",
                tag: "Strategy & Market Research",
                image: "/images/work/ndis.png",
                metric: "Top 3 Rankings in Australia"
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

      <LogoMarquee 
        title="Leadership teams we've consulted and executed for"
        subtitle="Strategic Partners"
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
              Ready to execute <br />your <span className="text-accent">strategy?</span>
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-6 bg-accent text-white px-12 py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_50px_-10px_rgba(0,82,255,0.5)] group"
            >
              <span>Initialize Engagement</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
