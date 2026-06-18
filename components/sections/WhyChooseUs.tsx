"use client";
import { motion } from "framer-motion";
import { ShieldCheck, ShieldAlert, Award, Calendar, Zap, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { title: "Professional Talent", desc: "Seluruh talenta panggung terlatih secara profesional & berpengalaman tinggi.", icon: Award },
    { title: "Experienced Team", desc: "Didukung oleh kru manajemen panggung taktis yang sigap mengontrol jalannya event.", icon: ShieldCheck },
    { title: "Flexible Schedule", desc: "Penjadwalan dinamis, kami siap sedia menyesuaikan seluruh timeline rundown acara Anda.", icon: Calendar },
    { title: "Trusted Event Partner", desc: "Telah dipercaya oleh ratusan korporasi, club ternama, dan wedding organizer di Bali.", icon: ShieldAlert },
    { title: "Premium Performance", desc: "Kostum mewah kelas atas dikombinasikan aksi pertunjukan spektakuler berskala tinggi.", icon: Sparkles },
    { title: "Fast Response Booking", desc: "Alur komunikasi responsif langsung via WhatsApp terenkripsi untuk konfirmasi instan.", icon: Zap },
  ];

  return (
    <section className="py-24 bg-background relative px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">WHY CHOOSE US</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase">6 Keunggulan Premium</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl relative overflow-hidden group hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feat.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-light">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}