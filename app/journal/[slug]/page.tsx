import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { ARTICLES } from "@/constants/articles";
import { BUSINESS_INFO } from "@/constants/data";

// Type untuk Next.js 15 App Router dynamic params
type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Generate SEO Metadata Otomatis untuk Google
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: `${article.title} | The Journal - Putri Management Bali`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `${BUSINESS_INFO.baseUrl}/journal/${slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

// 2. Tampilan Halaman Baca Artikel
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) notFound(); // Otomatis ke halaman 404 jika URL ngawur

  return (
    <main className="bg-background min-h-screen pt-32 pb-24 px-4 selection:bg-gold/30 selection:text-gold">
      <article className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>
        
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-gold mb-6">
            <span>{article.category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
            <time className="text-neutral-500">{article.date}</time>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-8">
            {article.title}
          </h1>
          
          <div className="relative w-full h-[300px] sm:h-[500px] rounded-2xl overflow-hidden border border-neutral-800">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </header>

        {/* Render Konten Artikel HTML yang ada di database */}
        <div 
          className="prose prose-invert prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:font-light prose-strong:text-white max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  );
}