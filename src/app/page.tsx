import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import YouthTraining from "@/components/YouthTraining";
import AdultTraining from "@/components/AdultTraining";
import Gallery from "@/components/Gallery";
import CoachStory from "@/components/CoachStory";
import Philosophy from "@/components/Philosophy";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-green selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <div id="training">
        <YouthTraining />
        <AdultTraining />
      </div>
      <Calendar />
      <CoachStory />
      <Philosophy />
      <Gallery />
      <Contact />
      <FinalCTA />
      
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="relative w-32 h-16">
            <Image 
              src="/media/logo.png" 
              alt="Athlete Mode Performance Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Athlete Mode Performance. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-neon-green transition-colors">Instagram</a>
            <a href="#" className="hover:text-neon-green transition-colors">Facebook</a>
            <a href="#" className="hover:text-neon-green transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
