"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Filter, Search, Zap, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { blogPosts, Post } from "@/data/blogData";

const CATEGORIES = ["All", "Tech", "Business & Finance", "Industry Analysis", "Execution Playbooks"] as const;

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];
  
  const filteredPosts = useMemo(() => {
    // Start with all posts except the featured one
    let posts = blogPosts.filter(p => p.id !== featuredPost.id);
    
    // Sort by date (latest first)
    posts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Filter by category
    if (activeCategory !== "All") {
      posts = posts.filter(p => p.category === activeCategory);
    }
    
    // Search query
    if (searchQuery) {
      posts = posts.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return posts;
  }, [activeCategory, featuredPost.id, searchQuery]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Dark Hero Section with Parallax */}
      <section ref={heroRef} className="pt-56 pb-40 px-6 md:px-12 relative overflow-hidden bg-black text-white min-h-[75vh] flex items-center">
        <motion.div style={{ y: y1, opacity }} className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-10"
              >
                <Zap size={16} className="text-accent fill-accent" />
                <span className="text-white text-[11px] font-bold tracking-[0.4em] uppercase">
                  WictroniX Intelligence
                </span>
              </motion.div>
              <h1 className="text-7xl md:text-8xl lg:text-[7.5rem] font-bold mb-10 tracking-tighter leading-[0.8] text-white">
                Execution <br />
                <span className="text-accent">Intelligence.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-[1.2] font-medium tracking-tight">
                Our internal playbook on scaling, systems, and the future of technology, published weekly.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-1/3 w-full"
            >
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-accent transition-colors" size={24} />
                <input 
                  type="text" 
                  placeholder="Search the archives..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  suppressHydrationWarning
                  className="w-full pl-16 pr-10 py-5 rounded-2xl bg-white/5 border-2 border-white/10 outline-none focus:border-accent transition-all text-xl font-medium placeholder:text-white/20"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Parallax Decorative Elements */}
        <motion.div style={{ y: y2 }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -right-10 w-[70vw] h-[70vw] bg-accent/10 rounded-full blur-[150px]" />
          <div className="absolute -bottom-20 -left-20 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.15) 1.5px, transparent 0)`,
              backgroundSize: '30px 30px',
            }}
          />
        </motion.div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-6 md:px-12 bg-white relative z-10 -mt-20 rounded-t-[4rem]">
        <div className="container mx-auto">
          {/* Featured Post - Reduced Size & 3D Effect */}
          {!searchQuery && (
            <motion.div
              style={{ scale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-32 max-w-6xl mx-auto"
            >
              <div className="mb-10 flex items-center gap-6">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black whitespace-nowrap">Flagship Analysis</h2>
                <div className="h-px flex-grow bg-black/10" />
              </div>

              <Link href={`/insights/${featuredPost.slug}`} className="group block relative perspective-2000">
                <motion.div 
                  whileHover={{ rotateX: 0.5, rotateY: -0.5, scale: 1.005 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="relative transform-gpu isolate"
                >
                  <div 
                    className="relative overflow-hidden rounded-[3rem] bg-black text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] transition-all duration-1000 transform-gpu"
                    style={{ 
                      WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="flex flex-col lg:flex-row min-h-[500px]">
                    <div className="lg:w-3/5 relative h-64 lg:h-auto overflow-hidden border-r border-white/5">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-[2.5s] group-hover:scale-105 opacity-90"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent hidden lg:block" />
                    </div>
                    
                    <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center relative z-10">
                      <div className="flex flex-wrap gap-3 mb-6">
                        {featuredPost.tags.map((tag) => (
                          <span key={tag} className="bg-white/10 text-white text-[7px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                            {tag}
                          </span>
                        ))}
                        <span className="text-white text-[9px] font-bold uppercase tracking-[0.3em] self-center ml-2 flex items-center gap-2">
                          <Clock size={12} />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-accent transition-colors duration-500 tracking-tighter leading-[1.1]">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-white/60 text-base mb-8 line-clamp-3 leading-relaxed font-medium tracking-tight">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-8 border-t border-white/10">
                        <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-white">{featuredPost.displayDate}</div>
                        <div className="flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                          Full Research <ArrowUpRight size={16} className="text-accent" />
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          )}

          {/* Minimalist High-Contrast Filters */}
          <div className="mb-16 pt-20 border-t border-black/5">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  suppressHydrationWarning
                  className={`
                    px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 border
                    ${activeCategory === cat 
                      ? "bg-black text-white border-black shadow-2xl shadow-black/20 scale-105" 
                      : "bg-transparent text-black/40 border-black/10 hover:border-black hover:text-black"}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} priority={index < 4} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="py-40 text-center bg-[#FAFAFA] rounded-[4rem] border-2 border-dashed border-black/5 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center mb-8">
                <Search size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">No results in this sector</h3>
              <p className="text-black/40 text-lg font-medium max-w-sm mx-auto leading-relaxed">
                We haven't published any frameworks matching your criteria yet.
              </p>
              <button 
                onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                suppressHydrationWarning
                className="mt-10 px-8 py-4 bg-black text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-accent transition-colors shadow-xl"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
