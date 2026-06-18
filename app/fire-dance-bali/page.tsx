"use client";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { ShieldCheck, Flame, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FireDanceBaliPage() {
  const { openWhatsApp } = useWhatsApp();

  const specificFaqs = [
    { q: "Apakah aman untuk lokasi area tertutup (Indoor)?", a: "Sangat direkomendasikan untuk area outdoor atau semi-outdoor demi alasan sirkulasi asap dan keamanan plafon tinggi." },
    { q: "Berapa durasi total aksi pertunjukan api?", a: "Umumnya durasi pertunjukan berlangsung intens selama 15-20 menit penuh aksi berisiko tinggi yang memukau." }
  ];

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-gold transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Kembali Ke Utama
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-neutral-800">
            <Image src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600" alt="Fire Dance Bali Premium Service" fill className="object-cover" />
          </div>
          <div>
            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">PREMIUM ROSTER</span>
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase mb-4">Fire Dance Bali</h1>
            <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
              Saksikan ketegangan seni manipulasi api ekstrem yang dikemas elegan. Layanan Fire Dance Bali kami menawarkan pertunjukan teatrikal spektakuler dengan protokol keamanan ketat yang sangat cocok bagi beach club, resort dinner, dan outdoor wedding party.
            </p>
            <Button onClick={() => openWhatsApp("Landing Page - Booking Fire Dance Bali")} className="w-full sm:w-auto">Book Fire Dance Now</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Certified Safety</h3>
            <p className="text-neutral-400 text-xs font-light">Setiap talenta dibekali pemahaman sirkulasi dan peralatan *safety fire blankets* lengkap.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <Flame className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Atraksi Variatif</h3>
            <p className="text-neutral-400 text-xs font-light">Kombinasi penggunaan fire poppers, fire staff, hingga trik semburan api kolosal.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <Star className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Atmosfer Eksotis</h3>
            <p className="text-neutral-400 text-xs font-light">Menghidupkan esensi malam tropis eksotis khas Bali yang dramatis.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white uppercase mb-6 text-center">FAQ Fire Dance</h2>
          {specificFaqs.map((f, i) => (
            <AccordionItem key={i} title={f.q}>{f.a}</AccordionItem>
          ))}
        </div>
      </div>
    </main>
  );
}