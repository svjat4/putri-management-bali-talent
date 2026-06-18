"use client";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { ShieldCheck, Flame, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SexyDancerBaliPage() {
  const { openWhatsApp } = useWhatsApp();

  const specificFaqs = [
    { q: "Berapa kostum ganti dalam satu event?", a: "Umumnya kami menyediakan 2 set kostum premium berbeda per talent yang disesuaikan dengan tema besar event Anda." },
    { q: "Apakah koreografi bisa disesuaikan?", a: "Tentu. Tim profesional kami mampu menyesuaikan beat tempo lagu dan jenis gerakan panggung sesuai request." }
  ];

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-gold transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Kembali Ke Utama
        </Link>

        {/* Hero Section Page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-neutral-800">
            <Image src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600" alt="Sexy Dancer Bali Premium Service" fill className="object-cover" />
          </div>
          <div>
            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">PREMIUM ROSTER</span>
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase mb-4">Sexy Dancer Bali</h1>
            <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
              Hadirkan kemeriahan lantai dansa sesungguhnya dengan jajaran Sexy Dancer profesional terbaik di Bali dari Putri Management. Sempurna untuk peluncuran produk, kelab malam, pesta privat villa, dan perayaan eksklusif.
            </p>
            <Button onClick={() => openWhatsApp("Landing Page - Booking Sexy Dancer Bali")} className="w-full sm:w-auto">Book Sexy Dancer Now</Button>
          </div>
        </div>

        {/* Dynamic Unique Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <Star className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Talent Terseleksi</h3>
            <p className="text-neutral-400 text-xs font-light">Penampilan visual menarik, tinggi proporsional, serta komunikatif.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <Flame className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">High Energy Show</h3>
            <p className="text-neutral-400 text-xs font-light">Koreografi dinamis yang dijamin membakar atmosfer panggung utama.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Manajemen Profesional</h3>
            <p className="text-neutral-400 text-xs font-light">Sistem kontrol rundown ketat menjamin kehadiran kru tepat waktu.</p>
          </div>
        </div>

        {/* Unique FAQ Page */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white uppercase mb-6 text-center">FAQ Sexy Dancer</h2>
          {specificFaqs.map((f, i) => (
            <AccordionItem key={i} title={f.q}>{f.a}</AccordionItem>
          ))}
        </div>
      </div>
    </main>
  );
}