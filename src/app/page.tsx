import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import SocialTrust from "@/components/SocialTrust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Philosophy />
      <SelectedWork />
      <Services />
      <Methodology />
      <SocialTrust />
      <CTA />
      <Footer />
    </main>
  );
}
