"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, BarChart3, Palette, PenTool, Share2, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";

const services = [
  {
    title: "SEO & Organic Growth",
    icon: Search,
    image: "/images/marketing-seo-white.png",
    deliverables: ["Technical SEO audit", "Content strategy", "Programmatic SEO", "Link building", "Keyword clustering"],
    methodology: "Programmatic + editorial hybrid. We build the technical foundation, then layer content that actually ranks and converts.",
    different: "We report in pipeline influenced, not keyword rankings. Position 1 means nothing if it doesn't generate revenue."
  },
  {
    title: "Performance Marketing",
    icon: BarChart3,
    image: "/images/marketing-performance-white.png",
    deliverables: ["Google Ads", "Meta Ads", "LinkedIn Ads management", "Creative production", "Landing page optimization"],
    methodology: "Test 10 variants → Kill losers → Scale winners → Automate. Every ₹1 spent is tracked to revenue.",
    different: "We optimize for CAC:LTV ratio, not click-through rates. If ROAS looks great but revenue doesn't, something's wrong and we'll find it."
  },
  {
    title: "Brand & Identity Design",
    icon: Palette,
    image: "/images/marketing-brand.png",
    deliverables: ["Logo systems", "Brand guidelines", "Pitch decks", "Collateral", "Social templates"],
    methodology: "Strategy-first: a brand is a business tool, not just an aesthetic choice.",
    different: "Your brand should make sales easier. If it doesn't, it's just decoration."
  },
  {
    title: "Content & Thought Leadership",
    icon: PenTool,
    image: "/images/marketing-content.png",
    deliverables: ["Blog strategy", "LinkedIn ghostwriting", "Newsletter", "Video scripting", "Whitepapers"],
    methodology: "Founder-led content engine that compounds. Every piece has a distribution plan and a conversion goal.",
    different: "We don't write content for content's sake. Every article is mapped to a keyword, a buyer stage, and a conversion path."
  },
  {
    title: "Social Media Management",
    icon: Share2,
    image: "/images/marketing-social.png",
    deliverables: ["Platform strategy", "Content calendar", "Community management", "Analytics"],
    methodology: "Platform-native content, not cross-posted noise.",
    different: "LinkedIn ≠ Instagram ≠ Twitter. We speak each platform's language."
  }
];

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0B] selection:bg-accent/10">
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
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 mb-8 relative z-10"
            >
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
                Growth Engineering
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[100px] font-display font-bold tracking-tighter leading-[0.95] md:leading-[0.85] mb-10 text-[#0A0A0B] relative z-10"
            >
              Marketing That Generates <br />
              <span className="text-accent">Pipeline, Not Impressions.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-black/50 font-medium leading-relaxed max-w-3xl mx-auto relative z-10"
            >
              We build marketing engines that compound: SEO that ranks, ads that convert, content that sells. Data-led growth, executed with precision.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-20 md:py-32 relative bg-[#0A0A0B]">
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
                  {/* Visual Section: Clean Blend */}
                  <div className="relative w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square group overflow-hidden border border-white/5">
                    <div className="absolute inset-0 z-10 pointer-events-none">
                      <div className={`absolute inset-0 bg-gradient-to-r ${i % 2 === 0 ? "from-transparent via-transparent to-[#0A0A0B] via-[75%]" : "from-[#0A0A0B] via-transparent to-transparent via-[25%]"} hidden lg:block`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B] via-[10%] group-even:via-[90%]" />
                    </div>
                    
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    
                    <div className={`absolute ${i % 2 === 0 ? "-left-4" : "-right-4"} top-1/2 -translate-y-1/2 z-20 hidden lg:block`}>
                      <div className="w-16 h-16 rounded-full bg-accent/10 backdrop-blur-3xl border border-accent/20 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(0,82,255,0.3)] group-hover:scale-110 transition-transform duration-700">
                        <service.icon className="w-7 h-7 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
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
                      <div className="h-px w-12 bg-accent/20" />
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
                          <p className="text-[12px] text-white/80 font-bold leading-relaxed">
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
              <h2 className="text-3xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-white">Growth proof.</h2>
              <p className="text-white/40 max-w-md">Real marketing results for ambitious teams.</p>
            </div>
            <Link href="/work" className="inline-flex items-center space-x-3 text-accent text-xs font-bold uppercase tracking-widest group">
              <span className="border-b border-accent/30 pb-1 group-hover:border-accent transition-colors">Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "HVAC Distributor",
                tag: "SEO & AI Search",
                image: "/images/work/hvac.png",
                metric: "14,000+ organic clicks"
              },
              {
                name: "FinTech Trading",
                tag: "Social & Influencer",
                image: "/images/work/fintech.png",
                metric: "100+ leads in 30 days"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30">
                      {proj.tag}
                    </span>
                    <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">
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
        title="Brands we've scaled through strategic marketing"
        subtitle="Growth Partners"
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
              Ready to scale <br />your <span className="text-accent">pipeline?</span>
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-6 bg-accent text-white px-12 py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_50px_-10px_rgba(0,82,255,0.5)] group"
            >
              <span>Start Growth Engine</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

