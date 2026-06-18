"use client";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { ShieldCheck, Flower, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BalineseDancerBaliPage() {
  const { openWhatsApp } = useWhatsApp();

  const specificFaqs = [
    { q: "Jenis tari Bali apa saja yang dapat dipesan?", a: "Kami melayani Tari Pendet (penyambutan), Tari Kecak, Tari Legong, hingga modifikasi Tari Kontemporer Bali." },
    { q: "Apakah sudah termasuk iringan musik gamelan live?", a: "Harga standar menggunakan audio playback resolusi tinggi. Untuk iringan live Gamelan/Angklung Bali, silakan ajukan paket tambahan." }
  ];

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-gold transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Kembali Ke Utama
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-neutral-800">
            <Image src="https://images.unsplash.com/photo-1573155993874-d5d48af862ba?auto=format&fit=crop&q=80&w=600" alt="Balinese Dancer Bali Premium Service" fill className="object-cover" />
          </div>
          <div>
            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">CULTURAL LUXE</span>
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase mb-4">Balinese Dancer Bali</h1>
            <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
              Hadirkan kesakralan spiritual estetis tanah Dewata melalui seni Tari Tradisional Bali kelas atas. Mengutamakan presisi gerakan mata (Seledet), kelenturan jemari, dan keaslian pakem busana adat agung, talenta kami siap menghidupkan kemewahan budaya lokal pada pembukaan konferensi internasional maupun resepsi pernikahan mewah Anda.
            </p>
            <Button onClick={() => openWhatsApp("Landing Page - Booking Balinese Dancer Bali")} className="w-full sm:w-auto">Book Balinese Dancer Now</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <Flower className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Pakem Tradisi Autentik</h3>
            <p className="text-neutral-400 text-xs font-light">Setiap gerakan dikoreografi ketat berbasis struktur tarian Bali asli yang sakral.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <Star className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Riasan Agung Mewah</h3>
            <p className="text-neutral-400 text-xs font-light">Aura magis dipancarkan maksimal lewat detail makeup karakter berkelas tinggi.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Prestise Budaya Tinggi</h3>
            <p className="text-neutral-400 text-xs font-light">Sempurna meningkatkan impresi berkelas di mata tamu asing multinasional.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white uppercase mb-6 text-center">FAQ Balinese Dancer</h2>
          {specificFaqs.map((f, i) => (
            <AccordionItem key={i} title={f.q}>{f.a}</AccordionItem>
          ))}
        </div>
      </div>
    </main>
  );
}