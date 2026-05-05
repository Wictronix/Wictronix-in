"use client";

import Link from "next/link";
import { ExternalLink, Zap, Mail, MapPin, Phone } from "lucide-react";

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="py-24 bg-foreground text-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center mb-10 bg-white p-3 rounded-2xl">
              <img 
                src="/main_logo.svg" 
                alt="WictroniX Logo" 
                className="h-7 w-auto" 
              />
            </Link>
            <p className="text-background/60 text-base max-w-sm mb-10 font-medium leading-relaxed">
              The execution layer for high-growth teams. We integrate, direct, and execute across tech, marketing, and strategy.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/wictronix/" },
                { Icon: XIcon, href: "https://x.com/WictroniX" },
                { Icon: InstagramIcon, href: "https://www.instagram.com/wictronix/" }
              ].map((item, i) => (
                <Link key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 scale-90">
                  <item.Icon />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-accent mb-8">Navigation</h4>
            <ul className="space-y-4 text-base font-display font-bold">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Work", href: "/work" },
                { name: "Insights", href: "/insights" },
                { name: "Contact", href: "/contact" }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-accent mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@wictronix.com" className="text-sm font-medium hover:text-accent transition-colors">info@wictronix.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+917717596969" className="text-sm font-medium hover:text-accent transition-colors">+91 7717596969</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span className="text-sm font-medium leading-relaxed">Vadodara, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold tracking-[0.1em] text-background/50 text-center md:text-left">
          <p>© 2024 WictroniX. No placeholders. Just execution.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
