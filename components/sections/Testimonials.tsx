"use client";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/constants/data";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-background px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">REVIEWS</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase">9 Testimonial Premium</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 bg-neutral-900/40 border border-neutral-800 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                  ))}
                </div>
                <p className="text-neutral-300 italic text-xs leading-relaxed font-light mb-6">"{t.review}"</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">{t.name}</h4>
                <span className="text-gold text-[10px] tracking-wider uppercase block mt-0.5">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}