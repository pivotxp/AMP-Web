"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function YouthTraining() {
  const points = [
    "Speed, Agility & Quickness (SAQ)",
    "Strength Training",
    "Athletic Movement & Coordination",
    "Confidence, Discipline, and Accountability"
  ];

  return (
    <section id="youth" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-neon-green font-bold tracking-[0.3em] uppercase text-sm block mb-4">The Developmental Blueprint</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-[0.9]">
                Youth Athlete Development <span className="text-white/30">Is A Science.</span>
              </h2>
              
              <div className="space-y-8 text-lg text-white/70 leading-relaxed mb-10">
                <p>
                  We don't believe in "filler" drills or chasing fatigue for the sake of a workout. At Athlete Mode Performance, youth athletes are developed — not rushed. We focus on the foundations that matter most for long-term athletic success, moving away from the "more is better" trap and toward "better is better."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="border-l-2 border-neon-green pl-6">
                    <h4 className="text-white font-bold uppercase mb-2">Linear & Lateral Speed</h4>
                    <p className="text-sm">Mastery of mechanics. We teach athletes how to apply force into the ground to explode out of the gate and decelerate with precision to avoid non-contact injuries.</p>
                  </div>
                  <div className="border-l-2 border-neon-green pl-6">
                    <h4 className="text-white font-bold uppercase mb-2">Structural Strength</h4>
                    <p className="text-sm">Before we load the bar, we master the body. We build resilient joints and core stability that serves as the engine for all powerful athletic movement.</p>
                  </div>
                  <div className="border-l-2 border-neon-green pl-6">
                    <h4 className="text-white font-bold uppercase mb-2">Cognitive Agility</h4>
                    <p className="text-sm">Sport isn't played in a straight line. We train reactive speed — the ability to process visual cues and change direction without losing momentum or balance.</p>
                  </div>
                  <div className="border-l-2 border-neon-green pl-6">
                    <h4 className="text-white font-bold uppercase mb-2">The Athlete Mindset</h4>
                    <p className="text-sm">Performance is 90% mental. We instill the discipline of "The Standard" — showing up with intent, owning your progress, and competing with confidence.</p>
                  </div>
                </div>

                <p className="italic text-white/50 border-t border-white/10 pt-6">
                  This is not random workouts. Every drill has a purpose. Every session builds toward a more resilient, faster, and more confident athlete.
                </p>
              </div>

              <a href="#contact" className="inline-block px-8 py-4 border-2 border-neon-green text-neon-green font-bold uppercase tracking-widest hover:bg-neon-green hover:text-black transition-all">
                Learn More About Youth Training
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
              <div className="absolute -inset-4 border-2 border-neon-green/20 z-0" />
              <Image 
                src="/media/IMG_3951.jpeg" 
                alt="Youth Athlete Development" 
                fill 
                className="object-cover transition-all duration-700 z-10"
              />
              <div className="absolute bottom-0 right-0 bg-neon-green p-8 z-20">
                <p className="text-black font-black text-3xl uppercase italic leading-[0.8] tracking-tighter">
                  Move Better.<br />Play Faster.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
