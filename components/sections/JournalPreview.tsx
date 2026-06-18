"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/constants/articles";

export default function JournalPreview() {
  return (
    <section className="py-24 bg-neutral-950 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">THE JOURNAL</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Event Insights
            </h2>
          </div>
          <Link 
            href="/journal" 
            className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-gold transition-colors"
          >
            Lihat Semua Artikel 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.slice(0, 3).map((article, idx) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/journal/${article.slug}`}>
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
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                  <time>{article.date}</time>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-gold transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-neutral-400 text-sm line-clamp-3 font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}