"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
              Privacy <br />
              <span className="text-accent">Policy.</span>
            </h1>

            <div className="space-y-12 text-white/70 leading-relaxed font-medium">
              <div>
                <p className="text-xl text-white mb-6">
                  At WictroniX, accessible from https://www.wictronix.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by The Wizards and how we use it.
                </p>
                <p>
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
                <p className="mt-4">
                  This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in WictroniX. This policy is not applicable to any information collected offline or via channels other than this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Consent</h2>
                <p>
                  By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Information we collect</h2>
                <p>
                  The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                </p>
                <p className="mt-4">
                  If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                </p>
                <p className="mt-4">
                  When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">How we use your information</h2>
                <p className="mb-4">We use the information we collect in various ways, including to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                  <li>Send you emails</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Log Files</h2>
                <p>
                  WictroniX follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Google DoubleClick DART Cookie</h2>
                <p>
                  Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL <a href="https://policies.google.com/technologies/ads" className="text-accent hover:underline">https://policies.google.com/technologies/ads</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Advertising Partners Privacy Policies</h2>
                <p>
                  You may consult this list to find the Privacy Policy for each of the advertising partners of WictroniX.
                </p>
                <p className="mt-4">
                  Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on WictroniX, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                </p>
                <p className="mt-4">
                  Note that WictroniX has no access to or control over these cookies that are used by third-party advertisers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Third Party Privacy Policies</h2>
                <p>
                  WictroniX&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                </p>
                <p className="mt-4">
                  You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">CCPA Privacy Rights</h2>
                <p className="mb-4 font-bold text-white">Under the CCPA, among other rights, California consumers have the right to:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                  <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                  <li>Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</li>
                </ul>
                <p className="mt-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">GDPR Data Protection Rights</h2>
                <p className="mb-4 font-bold text-white">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                  <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                  <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                  <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                  <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>
                <p className="mt-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Children&apos;s Information</h2>
                <p>
                  Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                <p className="mt-4">
                  WictroniX does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
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
