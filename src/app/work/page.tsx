"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Aura AI",
    category: "B2B SaaS • AI Integration",
    description: "Built a ₹40L pipeline in 60 days by implementing custom AI sales agents.",
    image: "/images/project-1.png",
    metric: "₹40L Pipeline",
    tags: ["Next.js", "OpenAI", "Salesforce"],
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Flux Commerce",
    category: "E-commerce • CRO",
    description: "3x conversion rate optimization through headless commerce architecture.",
    image: "/images/project-2.png",
    metric: "300% Conversion",
    tags: ["Shopify", "React", "Node.js"],
    color: "bg-purple-500"
  },
  {
    id: 3,
    title: "Zenith Fintech",
    category: "Fintech • GTM Strategy",
    description: "Scaled to 120% MoM growth for 6 months using data-driven marketing.",
    image: "/images/project-3.png",
    metric: "120% MoM Growth",
    tags: ["Finance", "Strategy", "Web3"],
    color: "bg-emerald-500"
  },
  {
    id: 4,
    title: "Pulse Health",
    category: "HealthTech • MVP Development",
    description: "Shipped a fully functional medical MVP in just 14 days.",
    image: "/images/project-4.jpg",
    metric: "14 Days MVP",
    tags: ["TypeScript", "HIPAA", "Auth0"],
    color: "bg-rose-500"
  },
  {
    id: 5,
    title: "Stellar Cloud",
    category: "Cloud Infra • DevOps",
    description: "Optimized infrastructure costs by 45% while increasing uptime.",
    image: "/images/project-1.png", // Reusing for dummy
    metric: "45% Cost Cut",
    tags: ["AWS", "Terraform", "Kubernetes"],
    color: "bg-amber-500"
  },
  {
    id: 6,
    title: "Nexus Gaming",
    category: "Web3 • Community",
    description: "Built a community platform for 50k+ active daily gamers.",
    image: "/images/project-2.png", // Reusing for dummy
    metric: "50k+ Users",
    tags: ["Solana", "Next.js", "Vercel"],
    color: "bg-indigo-500"
  }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 border border-accent/20">
              Proof of Work
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 text-foreground">
              Our Impact <br />
              <span className="text-accent">in Action.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted font-medium max-w-2xl leading-relaxed">
              We don't just build software. We build growth engines. Every project we take on is a commitment to founder-level accountability and measurable outcomes.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent -z-10 blur-3xl opacity-50" />
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-border/50 hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-accent/5"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  
                  {/* Floating Metric */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-accent font-bold text-xs uppercase tracking-wider">{project.metric}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-display font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-muted/5 border border-border rounded-md text-muted/80">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/work/${project.id}`}
                    className="mt-auto inline-flex items-center space-x-2 text-foreground font-bold group/link"
                  >
                    <span>View Case Study</span>
                    <div className="relative overflow-hidden w-5 h-5">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover/link:translate-x-full group-hover/link:-translate-y-full" />
                      <ArrowUpRight className="w-5 h-5 absolute top-full -left-full transition-transform duration-500 group-hover/link:translate-x-full group-hover/link:-translate-y-full" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                Have a project <br />
                <span className="text-accent">in mind?</span>
              </h2>
              <p className="text-muted-foreground/80 text-lg">
                Let's discuss how we can build your next growth engine.
              </p>
            </div>
            <Link 
              href="/contact"
              className="px-10 py-5 bg-accent text-white rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
