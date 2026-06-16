"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
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
              Terms of <br />
              <span className="text-accent">Use.</span>
            </h1>
            
            <div className="space-y-12 text-white/70 leading-relaxed font-medium">
              <div>
                <p className="text-xl text-white mb-6">
                  The WictroniX website located at https://www.wictronix.com/ is a copyrighted work belonging to WictroniX.
                </p>
                <p>
                  Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Acceptance of Terms</h2>
                <p>
                  These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Access to the Site</h2>
                <div className="space-y-4">
                  <p>
                    <span className="text-white font-bold">Subject to these Terms:</span> Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.
                  </p>
                  <p>
                    <span className="text-white font-bold">Certain Restrictions:</span> The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Intellectual Property</h2>
                <p>
                  Excluding any User Content that you may provide, you are aware that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company’s suppliers. Note that these Terms and access to the Site do not give you any rights, title or interest in or to any intellectual property rights, except for the limited access rights expressed in Section 2.1.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Third-Party Links & Ads</h2>
                <p>
                  The Site may contain links to third-party websites and services, and/or display advertisements for third-parties. Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads. Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Disclaimers</h2>
                <p>
                  The site is provided on an &quot;as-is&quot; and &quot;as available&quot; basis, and company and our suppliers expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Limitation on Liability</h2>
                <p>
                  To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to these terms or your use of, or incapability to use the site.
                </p>
              </div>

              {/* Cancellation & Refund Section */}
              <div className="pt-12 border-t border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">Cancellation & Refund Policy</h2>
                <div className="space-y-6">
                  <p>
                    You have the right to cancel your subscription or request a refund for products or services purchased on our website, subject to the following terms and conditions. To initiate a cancellation or refund request, you must contact our customer support team within a specified timeframe.
                  </p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li><span className="text-white font-bold">Eligibility:</span> Based on factors such as the type of product or service purchased and specific terms of purchase.</li>
                    <li><span className="text-white font-bold">Request Process:</span> Contact customer support with required information or documentation.</li>
                    <li><span className="text-white font-bold">Timeframe:</span> Defined based on the date of purchase or initiation of the subscription.</li>
                    <li><span className="text-white font-bold">Refund Method:</span> Processed within a reasonable timeframe using the original payment method.</li>
                  </ul>
                  <p className="mt-4">
                    We reserve the right to refuse refunds if we determine, at our discretion, that the request is not valid or that the product or service has been adequately provided.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Contact Information</h2>
                <p>
                  Address: Vadodara, Gujarat, India<br />
                  Email: info@wictronix.com
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
