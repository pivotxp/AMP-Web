"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, MapPin, Clock, ChevronRight } from "lucide-react";

export default function Calendar() {
  const classes = [
    {
      id: 1,
      name: "Youth Speed & SAQ",
      time: "4:30 PM - 5:30 PM",
      location: "Waxhaw Hwy Facility",
      date: "Monday, Jan 19",
      category: "Youth"
    },
    {
      id: 2,
      name: "Adult Performance",
      time: "6:00 AM - 7:00 AM",
      location: "Waxhaw Hwy Facility",
      date: "Tuesday, Jan 20",
      category: "Adult"
    },
    {
      id: 3,
      name: "Elite Strength",
      time: "5:30 PM - 6:30 PM",
      location: "Waxhaw Hwy Facility",
      date: "Wednesday, Jan 21",
      category: "Advanced"
    }
  ];

  return (
    <section id="calendar" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-neon-green font-bold tracking-[0.3em] uppercase text-sm block mb-4">Live Schedule</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">Upcoming <span className="text-white/30">Classes</span></h2>
          </div>
          <div className="flex items-center gap-2 text-white/50 text-sm font-bold uppercase tracking-widest pb-2 border-b border-neon-green">
            <CalendarIcon size={16} className="text-neon-green" />
            Google Calendar Sync Active
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {classes.map((cls, idx) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col md:flex-row items-center justify-between p-8 bg-white/5 border border-white/10 hover:border-neon-green/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
                <div className="text-center md:text-left min-w-[120px]">
                  <p className="text-neon-green font-black text-xl uppercase leading-none mb-1">{cls.date.split(',')[1]}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">{cls.date.split(',')[0]}</p>
                </div>

                <div className="h-px w-12 bg-white/10 hidden md:block" />

                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-center md:text-left group-hover:text-neon-green transition-colors">
                    {cls.name}
                  </h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-white/50 text-sm">
                    <span className="flex items-center gap-1"><Clock size={14} className="text-neon-green" /> {cls.time}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} className="text-neon-green" /> {cls.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-0">
                <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-neon-green hover:text-black font-bold uppercase tracking-widest text-xs transition-all">
                  Join Class <ChevronRight size={16} />
                </button>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-neon-green group-hover:h-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm italic mb-6">
            Integrating with Google Calendar to provide real-time location and coach updates.
          </p>
          <button className="text-neon-green border-b border-neon-green/30 pb-1 font-bold uppercase tracking-widest text-sm hover:text-white hover:border-white transition-all">
            View Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
