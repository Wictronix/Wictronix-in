"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  X, 
  ChevronRight,
  ArrowRight,
  Quote,
  ArrowUpRight
} from "lucide-react";

const LinkedInIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const XIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
);

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { blogPosts, Post } from "@/data/blogData";
import { notFound } from "next/navigation";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.featured))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Dark Immersive Header */}
      <header className="relative pt-48 pb-20 px-6 md:px-12 overflow-hidden bg-black text-white">
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <Link 
                href="/insights" 
                className="inline-flex items-center gap-3 text-accent font-bold text-[9px] uppercase tracking-[0.4em] group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
                Back to intelligence
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-3 mb-10">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-accent text-white text-[8px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full shadow-lg shadow-accent/20">
                    {tag}
                  </span>
                ))}
                <div className="h-px w-10 bg-white/10 self-center" />
                <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 tracking-tighter leading-[0.9] max-w-5xl">
                {post.title}
              </h1>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 pt-12 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                    <img src="/images/wx.png" alt="WictroniX" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <div className="font-bold text-[10px] uppercase tracking-[0.4em] text-white">WictroniX Research</div>
                    <div className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] mt-1">{post.displayDate}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.4em] hidden sm:block">Share Research</span>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                      suppressHydrationWarning
                      className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-500 group/share"
                      title="Share on X"
                    >
                      <XIcon size={16} className="group-hover/share:rotate-12 transition-transform" />
                    </button>
                    <button 
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      suppressHydrationWarning
                      className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-500 group/share"
                      title="Share on LinkedIn"
                    >
                      <LinkedInIcon size={16} className="group-hover/share:-rotate-12 transition-transform" />
                    </button>
                    <button 
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({ title: post.title, url: window.location.href });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          alert("Link copied to clipboard!");
                        }
                      }}
                      suppressHydrationWarning
                      className="w-11 h-11 rounded-2xl bg-accent text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-500 shadow-lg shadow-accent/20 group/share"
                      title="Copy Link"
                    >
                      <Share2 size={16} className="group-hover/share:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Parallax Background Accent */}
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-accent/[0.03] -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.12) 1.5px, transparent 0)`,
            backgroundSize: '30px 30px',
          }}
        />
      </header>

      {/* Ultra Wide Featured Image - Fine-tuned Dimensions */}
      <section className="px-6 md:px-12 -mt-12 mb-24 relative z-20">
        <div className="max-w-[1004px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[350px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)]"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      {/* Article Content - Reduced Scale */}
      <section className="px-6 md:px-12 pb-32 relative bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-xl prose-slate max-w-none 
              prose-headings:font-bold prose-headings:tracking-tighter prose-headings:text-black
              prose-p:text-[#4A4A4F] prose-p:leading-[1.6] prose-p:font-medium prose-p:text-lg
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:bg-[#FAFAFA] prose-blockquote:p-8 md:prose-blockquote:p-10 prose-blockquote:rounded-[2rem] prose-blockquote:text-black prose-blockquote:font-bold prose-blockquote:text-xl md:prose-blockquote:text-2xl
              prose-ul:list-none prose-ul:p-0
              prose-li:before:content-['→'] prose-li:before:text-accent prose-li:before:mr-4 prose-li:before:font-bold
            ">
              <div className="mb-20 relative">
                <Quote size={60} className="text-black/5 absolute -top-8 -left-8 -z-10" />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Contextual Intelligence CTA */}
              <div className="not-prose my-24 p-10 md:p-14 rounded-[3rem] bg-black text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tighter leading-tight">
                      {post.category === 'Tech' && "Ready to architect your next breakthrough?"}
                      {post.category === 'Business & Finance' && "Looking to optimize your growth strategy?"}
                      {post.category === 'Industry Analysis' && "Need deep intelligence for your sector?"}
                      {post.category === 'Execution Playbooks' && "Ready to execute with precision?"}
                      {(!['Tech', 'Business & Finance', 'Industry Analysis', 'Execution Playbooks'].includes(post.category)) && "Ready to take your project to the next level?"}
                    </h3>
                    <p className="text-white/60 text-base font-medium leading-relaxed">
                      Our experts are ready to turn these insights into your next success story. Let's build something exceptional together.
                    </p>
                  </div>
                  <Link 
                    href="/contact" 
                    className="px-10 py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl flex items-center gap-3 shrink-0 group-hover:scale-105 active:scale-95"
                  >
                    Discuss your idea <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Final Article Signature */}
              <div className="not-prose pt-12 border-t-2 border-black/5 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center rotate-3 group hover:rotate-0 transition-transform duration-500 overflow-hidden border-4 border-[#FAFAFA] shadow-xl">
                    <img src="/images/wx.png" alt="WictroniX" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight">WictroniX Research Lab</h4>
                    <p className="text-black/40 text-xs font-medium">Published under the WictroniX Editorial standard.</p>
                  </div>
                </div>
                
                <Link href="/insights" className="px-8 py-4 bg-black text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-accent transition-all flex items-center gap-2 shadow-xl shadow-black/10">
                  Explore Archives <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Magazine Style Related Grid - Reduced Scale */}
      {relatedPosts.length > 0 && (
        <section className="px-6 md:px-12 py-24 bg-[#FAFAFA] border-t border-black/5">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
              <div>
                <span className="text-accent font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">Continue Research</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">More <span className="text-accent">Intelligence</span> /</h2>
              </div>
              <Link 
                href="/insights"
                className="inline-flex items-center gap-3 text-lg font-bold text-black hover:text-accent transition-all group"
              >
                Full Access <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {relatedPosts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
