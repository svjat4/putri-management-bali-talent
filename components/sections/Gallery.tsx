"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// 1. Definisikan tipe data props untuk TypeScript
interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  // 2. Pola ukuran masonry mewah yang akan berulang otomatis secara bergantian
  const masonrySizes = [
    "row-span-2 col-span-2",
    "row-span-1",
    "row-span-1",
    "col-span-2 row-span-1",
    "row-span-2",
    "col-span-1",
  ];

  // Jalankan fallback jika folder images masih kosong
  if (!images || images.length === 0) {
    return (
      <section id="gallery" className="py-24 bg-background px-4 text-center text-neutral-500 text-sm">
        Belum ada dokumentasi foto di folder public/images/
      </section>
    );
  }

  return (
    <section id="gallery" className="py-24 bg-background px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">
            VISUAL PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase">
            Masonry Gallery Modern
          </h2>
          <p className="text-neutral-400 max-w-sm mx-auto text-xs mt-2 font-light">
            Dokumentasi performa panggung eksklusif tim Putri Management Bali.
          </p>
        </div>

        {/* Masonry Responsive Layout Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] sm:auto-rows-[220px]">
          {images.map((src, idx) => {
            // 3. Menentukan ukuran berdasarkan urutan indeks foto saat ini
            const assignedSize = masonrySizes[idx % masonrySizes.length];

            return (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 6) * 0.05 }}
                className={`relative rounded-2xl overflow-hidden border border-neutral-800 group ${assignedSize}`}
              >
                <Image
                  src={src}
                  alt={`Putri Management Production Gallery Record ${idx}`}
                  fill
                  sizes="(max-w-6xl) 33vw, 50vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}