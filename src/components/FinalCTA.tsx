"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none">
        <h2 className="text-[20vw] font-black uppercase italic text-white/20 select-none leading-none">
          PERFORMANCE
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-[0.9]">
            Ready to Train the <span className="text-neon-green">Right Way?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12">
            Whether you’re a parent looking for elite youth development or an adult ready to train with purpose — Athlete Mode Performance is where standards are set.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#calendar" className="px-12 py-5 bg-neon-green text-black font-black uppercase tracking-widest text-lg hover:bg-white transition-all transform hover:scale-105 text-center">
              Book a Session
            </a>
            <a href="#contact" className="px-12 py-5 border-2 border-white text-white font-black uppercase tracking-widest text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105 text-center">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
