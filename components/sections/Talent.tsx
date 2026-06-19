"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TALENTS } from "@/constants/data";
import { Button } from "@/components/ui/Button";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { Zap } from "lucide-react";

export default function Talent() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section id="talents" className="py-24 bg-neutral-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">OUR MASTERPIECE</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-4">Eksklusif Talent Rosters</h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm font-light">Pilih dari katalog talenta panggung terbaik kami untuk memeriahkan momen eksklusif Anda.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TALENTS.map((talent, index) => (
            <motion.div
              key={talent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-gold/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]"
            >
              {/* Image Container with Dynamic Optimization */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={talent.img}
                  alt={`Putri Management Premium ${talent.name} Talent Bali`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  // 4 Gambar pertama (index 0-3) menggunakan priority
                  priority={index < 4}
                  // Gambar sisanya akan otomatis menggunakan lazy loading
                  loading={index < 4 ? undefined : "lazy"}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              </div>

              {/* Text Information Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-xl group-hover:text-gold transition-colors mb-2">{talent.name}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed font-light mb-4">{talent.desc}</p>
                  
                  <div className="bg-neutral-950/60 rounded-lg p-2.5 border border-neutral-800 flex items-start gap-2 mb-6">
                    <Zap className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] text-neutral-300 font-medium"><strong className="text-gold">Keunggulan:</strong> {talent.keunggulan}</span>
                  </div>
                </div>

                <Button 
                  onClick={() => openWhatsApp(`Talent Card - Hire ${talent.name}`)}
                  className="w-full py-2.5 text-xs font-bold rounded-xl"
                >
                  Hire Talent
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}