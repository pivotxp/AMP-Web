"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/media/copy_DACDA6F0-0261-43AC-A720-AB1E54410F3E.mov" type="video/quicktime" />
          <source src="/media/copy_DACDA6F0-0261-43AC-A720-AB1E54410F3E.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      {/* Massive Slam Logo */}
      <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scale: 5, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 0.15, filter: "blur(0px)" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for "slam" feel
            delay: 0.2 
          }}
          className="relative w-[150%] aspect-square max-w-[1200px]"
        >
          <Image 
            src="/media/logo.png" 
            alt="AMP Watermark" 
            fill 
            className="object-contain grayscale brightness-200"
            priority
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Main Hero Logo */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative w-48 h-24 md:w-64 md:h-32 mx-auto mb-8"
          >
            <Image 
              src="/media/logo.png" 
              alt="Athlete Mode Performance" 
              fill 
              className="object-contain drop-shadow-[0_0_30px_rgba(57,255,20,0.3)]"
              priority
            />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-4 uppercase leading-[0.9]">
            Train With <span className="text-neon-green">Purpose.</span><br />
            Perform With <span className="text-neon-green">Confidence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-medium">
            Elite speed, strength, and athletic development for youth athletes — plus high-level personal training for adults who expect more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#training"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-neon-green text-black font-black uppercase tracking-widest text-lg rounded-sm text-center"
            >
              Train With Us
            </motion.a>
            <motion.a
              href="#calendar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white font-black uppercase tracking-widest text-lg rounded-sm hover:bg-white hover:text-black transition-colors text-center"
            >
              Book a Session
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-neon-green to-transparent" />
      </motion.div>
    </section>
  );
}
