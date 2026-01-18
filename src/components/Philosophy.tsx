"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  const points = [
    {
      title: "Performance Over Hype",
      desc: "We don’t chase fitness trends or viral social media workouts. We build athletes through time-tested principles of biomechanics and physiological adaptation. If it doesn't transfer to the field or the quality of your life, it doesn't happen here."
    },
    {
      title: "Movement Quality Is The Floor",
      desc: "Poor movement quality is a ceiling for speed and a doorway for injury. We coach mechanics first — always. We don't add weight to dysfunction; we earn the right to load through technical mastery."
    },
    {
      title: "Drills With Strategic Intent",
      desc: "Every sprint, every jump, and every lift is a conscious decision. We don't train to 'get tired' — we train to 'get better.' Strategic intent ensures that every ounce of effort contributes to your ultimate goal."
    },
    {
      title: "The Long-Game Wins",
      desc: "Resilience isn't built in a weekend. We prioritize long-term development over rushed seasons. This approach creates athletes who don't just perform today, but continue to peak year after year."
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background Video for texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale"
        >
          <source src="/media/IMG_0657.mov" type="video/mp4" />
          <source src="/media/IMG_0657.mov" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase mb-4"
          >
            Training <span className="text-neon-green">Philosophy</span>
          </motion.h2>
          <div className="w-24 h-1 bg-neon-green mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-neon-green transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-lg text-white/60 leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-white/5 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-neon-green" />
          <h3 className="text-2xl md:text-3xl font-bold italic mb-6">
            "Athlete Mode Performance exists to develop fast, strong, confident athletes through intentional training and leadership by example."
          </h3>
          <p className="text-white/50 uppercase tracking-widest text-sm font-bold">Our Mission</p>
        </motion.div>
      </div>
    </section>
  );
}
