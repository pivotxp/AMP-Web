"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AdultTraining() {
  const points = [
    "Strength & Power Development",
    "Conditioning & Work Capacity",
    "Movement Quality & Injury Resilience",
    "Long-Term Health & Longevity"
  ];

  return (
    <section id="adult" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-neon-green font-bold tracking-[0.3em] uppercase text-sm block mb-4">Performance For Life</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-[0.9]">
                Redefining Your <span className="text-neon-green">Peak.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-10">
                <p>
                  Most adult fitness programs are designed for maintenance or weight loss. Ours is designed for <span className="text-white font-bold">progression.</span> We take the same elite standards we use with college athletes and adapt them for high-performers who refuse to let age dictate their output.
                </p>
                <p>
                  Whether you’re a former athlete looking to reclaim your edge or a professional who values performance-based training, we provide the structure, intent, and accountability required to move the needle.
                </p>

                <div className="space-y-6 mt-10">
                  <div className="group">
                    <h4 className="text-neon-green font-black uppercase flex items-center gap-3">
                      <span className="text-white/20 group-hover:text-neon-green transition-colors">01</span> Force Production
                    </h4>
                    <p className="text-sm pl-8">We don't just "lift weights." We train your nervous system to produce force efficiently, rebuilding the explosive power and "pop" that most people lose after their competitive years.</p>
                  </div>
                  <div className="group">
                    <h4 className="text-neon-green font-black uppercase flex items-center gap-3">
                      <span className="text-white/20 group-hover:text-neon-green transition-colors">02</span> Metabolic Conditioning
                    </h4>
                    <p className="text-sm pl-8">High-intensity, performance-based conditioning that builds a massive engine and improves work capacity without the mindless wear-and-tear of high-impact steady-state cardio.</p>
                  </div>
                  <div className="group">
                    <h4 className="text-neon-green font-black uppercase flex items-center gap-3">
                      <span className="text-white/20 group-hover:text-neon-green transition-colors">03</span> Movement Quality & Longevity
                    </h4>
                    <p className="text-sm pl-8">We prioritize mechanics to ensure you aren't just getting stronger, but moving better. Our goal is to make you as resilient as you are powerful, bulletproofing your body for the long haul.</p>
                  </div>
                </div>

                <p className="text-white font-bold italic mt-8 border-l-4 border-neon-green pl-4">
                  "The same standards we hold our athletes to — we hold you to. No shortcuts, just intentional results."
                </p>
              </div>

              <a href="#contact" className="inline-block px-8 py-4 bg-neon-green text-black font-bold uppercase tracking-widest hover:bg-white transition-all">
                Start Adult Training
              </a>
            </motion.div>
          </div>

          <div className="flex-1 relative w-full aspect-[4/5] md:aspect-square">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full h-full overflow-hidden"
            >
              <Image 
                src="/media/IMG_2236.jpeg" 
                alt="Adult Performance Training" 
                fill 
                className="object-cover z-10"
              />
              <div className="absolute inset-0 bg-neon-green/10 mix-blend-overlay z-20" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
