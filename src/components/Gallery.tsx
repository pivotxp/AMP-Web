"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const items = [
    { type: "video", src: "/media/IMG_0225.MOV", poster: "/media/IMG_2238.jpeg", span: "md:col-span-2 md:row-span-2" },
    { type: "image", src: "/media/IMG_2240.jpeg", span: "col-span-1" },
    { type: "image", src: "/media/IMG_3392.jpeg", span: "col-span-1" },
    { type: "video", src: "/media/copy_E96F1F7B-59EF-4A75-8A93-87C009146655.mov", poster: "/media/IMG_3475.jpeg", span: "col-span-1" },
    { type: "image", src: "/media/IMG_3970.jpeg", span: "col-span-1" },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-neon-green font-bold tracking-[0.3em] uppercase text-sm block mb-4">In Action</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase">Training <span className="text-white/30">Gallery</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group overflow-hidden border border-white/10 ${item.span}`}
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={item.poster}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={item.src} type="video/mp4" />
                  <source src={item.src} type="video/quicktime" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt="Training Moment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 border-2 border-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
