"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const suits = [
    "Night Club", "Birthday Party", "Gathering", "Anniversary",
    "Corporate Event", "Villa Party", "Beach Club Event", "Wedding Event", "Private Event"
  ];

  // 1. Daftar gambar yang akan bergeser otomatis di dalam section About
  const aboutImages = [
    "/images/awal.png",
    "/images/awal2.png", // Siapkan file ini di public/images/ jika ada
    "/images/awal3.png", // Siapkan file ini di public/images/ jika ada
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Timer untuk menggeser gambar otomatis setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [aboutImages.length]);

  // Efek transisi cross-fade yang halus antar gambar
  const fadeVariants = {
    initial: { opacity: 0, scale: 1.03 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 1.0 } },
  };

  return (
    <section id="about" className="py-24 bg-background px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Interactive Image Block (Auto-Sliding Inside About) */}
        <div className="relative h-[450px] sm:h-[550px] w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={aboutImages[currentIndex]}
                alt={`Putri Management Bali Premium Event Showcase ${currentIndex + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient Overlay tetap berada di atas gambar */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          
          {/* Floating Badge Premium tetap stay kokoh di atas slider */}
          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-gold/20 z-20">
            <h4 className="text-gold font-semibold text-lg mb-1">High-End Quality Assurance</h4>
            <p className="text-neutral-400 text-xs">Seluruh talent kami melewati audisi ketat demi menjaga prestise acara premium Anda.</p>
          </div>

          {/* Indikator titik kecil di pojok kanan atas slider */}
          <div className="absolute top-4 right-4 z-20 flex gap-1.5 bg-black/40 backdrop-blur-sm p-2 rounded-full">
            {aboutImages.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-4 bg-gold" : "w-1.5 bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Information Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">EXCLUSIVE AGENCY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-6">
            Tentang Putri Management Bali
          </h2>
          <div className="h-[2px] w-20 bg-gold mb-6" />
          
          {/* Paragraf Utama */}
          <p className="text-neutral-300 leading-relaxed font-light mb-4">
            Putri Management Bali adalah agency penyedia talent profesional yang siap mendukung berbagai acara dan event di Bali. Kami menyediakan berbagai pilihan talent berkualitas yang dapat meningkatkan pengalaman tamu dan memberikan hiburan terbaik untuk setiap acara.
          </p>

          {/* Paragraf Sisipan Sister Company (Jajanan Magetan) */}
          <p className="text-neutral-400 text-sm leading-relaxed font-light mb-8 italic border-l-2 border-gold/30 pl-4">
            Sebagai bagian dari portofolio grup kami yang lebih luas, manajemen kami juga turut mendukung inisiatif kuliner nusantara melalui jaringan sister-company kami,{" "}
            <a 
              href="https://jajananmagetan.biz.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gold transition-colors font-medium not-italic border-b border-gold/30 hover:border-gold pb-0.5"
            >
              Jajanan Magetan
            </a>.
          </p>

          <h3 className="text-white font-semibold text-lg mb-4">Sempurna Untuk Menyemarakkan:</h3>
          <div className="grid grid-cols-2 gap-3">
            {suits.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-neutral-400 text-sm">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}