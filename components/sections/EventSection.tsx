"use client";
import { motion } from "framer-motion";
import { EVENTS } from "@/constants/data";
import { PartyPopper } from "lucide-react";

export default function EventSection() {
  return (
    <section className="py-24 bg-neutral-950 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">OUR SERVICE SPECTRUM</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">Jenis Event Yang Dilayani</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {EVENTS.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-4 p-5 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-gold/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center text-gold flex-shrink-0">
                <PartyPopper className="w-5 h-5" />
              </div>
              <span className="text-white font-semibold text-sm tracking-wide">{event}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}