import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { ARTICLES } from "@/constants/articles";

// Tambahkan SEO Metadata untuk halaman daftar artikel
export const metadata: Metadata = {
  title: "The Journal - Insights & Event Tips | Putri Management Bali",
  description: "Kumpulan artikel, tips, dan panduan memilih hiburan premium untuk event, villa party, dan corporate gathering di Bali.",
};

export default function JournalIndexPage() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Tombol Kembali */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-gold transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>

        {/* Header Halaman */}
        <div className="mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">
            KUMPULAN ARTIKEL
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            The Journal
          </h1>
          <p className="text-neutral-400 max-w-2xl mt-4 font-light leading-relaxed">
            Eksplorasi wawasan, tips, dan panduan mendalam seputar dunia entertainment 
            untuk menyukseskan event premium Anda di Bali.
          </p>
        </div>

        {/* Grid Semua Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="group cursor-pointer flex flex-col h-full"
            >
              <Link href={`/journal/${article.slug}`} className="flex flex-col h-full">
                {/* Gambar Thumbnail */}
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 border border-neutral-800">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] text-gold uppercase tracking-wider font-semibold">
                    {article.category}
                  </div>
                </div>
                
                {/* Info & Judul */}
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                  <time>{article.date}</time>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-gold transition-colors line-clamp-2">
                  {article.title}
                </h2>
                
                {/* Cuplikan Teks */}
                <p className="text-neutral-400 text-sm line-clamp-3 font-light leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>

                {/* Tombol Baca */}
                <div className="mt-auto">
                  <span className="text-gold text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                    Baca Selengkapnya
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}