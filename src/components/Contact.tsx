"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-green font-bold tracking-[0.3em] uppercase text-sm block mb-4">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-[0.9]">
              Start Your <span className="text-neon-green">Evolution.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Ready to set the standard? Whether you're inquiring about youth development or adult performance, we're here to help you perform with purpose.
            </p>

            <div className="space-y-6">
              <a href="mailto:info@athletedoneperformance.com" className="flex items-center gap-4 text-white hover:text-neon-green transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-neon-green/20">
                  <Mail className="text-neon-green" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-white/40">Email Us</p>
                  <p className="font-bold">info@athletemodeperformance.com</p>
                </div>
              </a>
              <a href="tel:+15173760596" className="flex items-center gap-4 text-white hover:text-neon-green transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-neon-green/20">
                  <Phone className="text-neon-green" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-white/40">Call Us</p>
                  <p className="font-bold">517-376-0596</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <MapPin className="text-neon-green" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-white/40">Location</p>
                  <p className="font-bold leading-tight">6012 Waxhaw Hwy<br />Waxhaw, NC 28173</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-black text-white/40 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:border-neon-green outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase font-black text-white/40 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-black border border-white/10 p-4 text-white focus:border-neon-green outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase font-black text-white/40 mb-2">Interested In</label>
                <select className="w-full bg-black border border-white/10 p-4 text-white focus:border-neon-green outline-none transition-colors appearance-none">
                  <option>Youth Athlete Development</option>
                  <option>Adult Personal Training</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase font-black text-white/40 mb-2">Your Message</label>
                <textarea rows={4} className="w-full bg-black border border-white/10 p-4 text-white focus:border-neon-green outline-none transition-colors" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button className="w-full py-4 bg-neon-green text-black font-black uppercase tracking-widest hover:bg-white transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
