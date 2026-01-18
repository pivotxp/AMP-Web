"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoachStory() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-neon-green font-bold tracking-[0.3em] uppercase text-sm block mb-4">Lead By Example</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-[0.9]">
              Built on Credibility.<br />
              <span className="text-neon-green">Driven by Example.</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Athlete Mode Performance was founded on a simple belief: 
                <span className="text-white font-bold italic"> "If a drill can’t be demonstrated, it shouldn’t be coached."</span>
              </p>
              <p>
                The founder is a former college wide receiver and 3-year starter at Ferris State University. 
                Now based in Waxhaw, NC, the same speed work, strength training, and movement drills taught to athletes are still trained and demonstrated daily.
              </p>
              <p>
                This isn’t theory-based coaching. It’s experience, accountability, and action. 
                Athletes don’t just hear what excellence looks like — they see it.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden">
              <Image 
                src="/media/IMG_0422.jpeg" 
                alt="Coach Story" 
                fill 
                className="object-cover rounded-sm border-2 border-white/10 z-10"
              />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-neon-green/10 -z-10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
