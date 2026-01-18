"use client";

import { motion } from "framer-motion";
import { Zap, Target, Shield, Award } from "lucide-react";

export default function Features() {
  const values = [
    {
      title: "Youth Athletes (8-18)",
      desc: "We develop the complete athlete from the ground up. Our program focuses on mastering the mechanics of speed, the foundations of structural strength, and the mental discipline required to compete at the highest levels.",
      subDesc: "Speed • Strength • Confidence • Discipline",
      icon: <Zap className="text-neon-green" size={32} />,
    },
    {
      title: "Adult Personal Training",
      desc: "Designed for those who refuse to settle for average fitness. We apply elite athletic training principles to help you reclaim your edge, build explosive power, and ensure long-term physical resilience.",
      subDesc: "Performance • conditioning • Longevity",
      icon: <Target className="text-neon-green" size={32} />,
    },
    {
      title: "What Makes Us Different",
      desc: "No hype. No shortcuts. Every drill is demonstrated, every movement has intent, and every session is backed by a commitment to results that actually transfer to your sport and your life.",
      subDesc: "Intentional Training • Lead by Example",
      icon: <Shield className="text-neon-green" size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group p-10 border border-white/5 bg-white/5 hover:border-neon-green/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-neon-green group-hover:h-full transition-all duration-500" />
              
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-none">{item.title}</h3>
              
              <p className="text-neon-green/80 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {item.subDesc}
              </p>
              
              <p className="text-white/60 leading-relaxed text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
