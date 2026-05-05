"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight, ArrowRight } from "lucide-react";
import { Post } from "@/data/blogData";

export default function PostCard({ post, priority = false }: { post: Post, priority?: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-[2rem] border border-border overflow-hidden hover:border-black hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col h-full transform-gpu isolate"
    >
      <Link href={`/insights/${post.slug}`} className="block relative group overflow-hidden h-60">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
            <ArrowRight size={24} />
          </div>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-grow bg-white">
        <div className="flex items-center gap-3 mb-3 text-[9px] font-bold text-muted uppercase tracking-[0.2em] whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-1.5 shrink-0">
            <Clock size={12} className="text-black" />
            {post.readTime}
          </div>
          <span className="w-1 h-1 rounded-full bg-border shrink-0" />
          <span className="shrink-0">{post.displayDate}</span>
        </div>

        <Link href={`/insights/${post.slug}`}>
          <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors line-clamp-2 leading-[1.2] tracking-tight">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-[#4A4A4F] text-sm line-clamp-3 mb-6 flex-grow leading-relaxed font-medium">
          {post.excerpt}
        </p>

        <div className="pt-8 border-t border-border flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-[8px] font-bold uppercase tracking-[0.1em] text-accent bg-accent/5 px-2.5 py-1 rounded-md border border-accent/10 whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-end">
            <Link 
              href={`/insights/${post.slug}`}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black group-hover:gap-3 transition-all duration-300"
            >
              Read <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
