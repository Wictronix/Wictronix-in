"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 border border-accent/20">
              Legal
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-12">
              Website <br />
              <span className="text-accent">Disclaimer.</span>
            </h1>
            
            <div className="space-y-12 text-white/70 leading-relaxed font-medium">
              <div>
                <p className="text-xl text-white mb-6">
                  If you require any more information or have any questions about our site&apos;s disclaimer, please feel free to contact us by email at info@wictronix.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Disclaimers for WictroniX</h2>
                <p>
                  All the information on this website - https://www.wictronix.com/ - is published in good faith and for general information purpose only. WictroniX does not make any warranties about the completeness, reliability and accuracy of this information.
                </p>
                <p className="mt-4">
                  Any action you take upon the information you find on this website (WictroniX), is strictly at your own risk. WictroniX will not be liable for any losses and/or damages in connection with the use of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">External Links</h2>
                <p>
                  From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone &apos;bad&apos;.
                </p>
                <p className="mt-4">
                  Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their &quot;Terms of Service&quot; before engaging in any business or uploading any information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Consent</h2>
                <p>
                  By using our website, you hereby consent to our disclaimer and agree to its terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Update</h2>
                <p>
                  Should we update, amend or make any changes to this document, those changes will be prominently posted here.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Background */}
        <div className="absolute top-20 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      </section>

      <Footer />
    </main>
  );
}
