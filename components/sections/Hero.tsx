"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { Star } from "lucide-react";

export default function Hero() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 px-4">
      {/* Luxury Event Background Image Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Bali Nightlife Performance Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-105 filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Elite Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest mb-6"
        >
          <Star className="w-3.5 h-3.5 fill-gold" />
          #1 Premium Entertainment Agency In Bali
        </motion.div>

        {/* Premium Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase"
        >
          Professional Entertainment <br />
          <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            Talent Bali
          </span>
        </motion.h1>

        {/* Elegant Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-neutral-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10"
        >
          Putri Management Bali menyediakan berbagai talent profesional untuk event, club, gathering, birthday party, corporate event, anniversary, villa party, beach club event, dan berbagai acara eksklusif di Bali.
        </motion.p>

        {/* High Conversion CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Button onClick={() => openWhatsApp("Hero - Book Now Button")} className="w-full sm:w-auto">
            Book Now
          </Button>
          <Button onClick={() => openWhatsApp("Hero - WhatsApp Us Button")} variant="outline" className="w-full sm:w-auto">
            WhatsApp Us
          </Button>
        </motion.div>
      </div>

      {/* Subtle Bottom Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}