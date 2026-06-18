"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PRICING_PACKAGES } from "@/constants/data";
import { Button } from "@/components/ui/Button";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section id="pricing" className="py-24 bg-neutral-950 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">INVESTMENT RATE</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase">Premium Pricing Card</h2>
          <p className="text-neutral-400 text-xs mt-1 font-light">Penawaran transparan untuk jaminan kualitas hiburan tanpa batas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-neutral-900 border rounded-2xl overflow-hidden flex flex-col justify-between relative ${
                pkg.badge === "MOST POPULAR" ? "border-gold ring-1 ring-gold shadow-[0_4px_30px_rgba(212,175,55,0.15)]" : "border-neutral-800"
              }`}
            >
              {pkg.badge && (
                <span className="absolute top-4 right-4 z-10 bg-gold text-black text-[10px] font-extrabold px-2.5 py-1 rounded-md tracking-wider uppercase">
                  {pkg.badge}
                </span>
              )}

              {/* Package Graphic Card Header */}
              <div className="relative h-44 w-full">
                <Image src={pkg.img} alt={pkg.name} fill className="object-cover brightness-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-black/30" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-white text-xl font-black uppercase tracking-wide">{pkg.name}</h3>
                </div>
              </div>

              {/* Price Content Details */}
              <div className="p-6 flex-grow flex flex-col justify-between bg-neutral-900">
                <div>
                  <div className="mb-4">
                    <span className="text-2xl font-black text-gold block">{pkg.price}</span>
                    {pkg.paket && <span className="text-xs text-neutral-400 font-light block mt-0.5">Paket Hemat: {pkg.paket}</span>}
                  </div>

                  <div className="h-[1px] bg-neutral-800 my-4" />

                  <ul className="space-y-2.5 mb-8">
                    {pkg.benefit.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2.5 text-neutral-300 text-xs font-light">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={() => openWhatsApp(`Pricing Card - Package: ${pkg.name}`)}
                  className="w-full text-xs py-3 rounded-xl uppercase font-bold"
                >
                  Book via WhatsApp
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Policy Statement */}
        <p className="text-center text-[11px] text-neutral-500 font-light mt-12 max-w-xl mx-auto leading-relaxed">
          <strong className="text-neutral-400 uppercase">Disclaimer:</strong> Harga dapat berubah tergantung lokasi spesifik venue, durasi total acara, kumulatif jumlah talent yang dipesan, serta kompleksitas kebutuhan custom event tambahan.
        </p>
      </div>
    </section>
  );
}