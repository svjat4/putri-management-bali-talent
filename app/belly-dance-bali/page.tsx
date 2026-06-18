"use client";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { ShieldCheck, Flame, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BellyDanceBaliPage() {
  const { openWhatsApp } = useWhatsApp();

  const specificFaqs = [
    { q: "Bisa untuk mengiringi tamu penting (Welcoming)?", a: "Sangat bisa, tarian ini memiliki sifat luwes dan interaktif yang anggun untuk menyambut tamu kehormatan." },
    { q: "Berapa kuota talent dalam satu panggung?", a: "Kami menyediakan opsi pertunjukan solo (1 talent) hingga grup korporat besar berisi 3-5 talent sekaligus." }
  ];

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-gold transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Kembali Ke Utama
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-neutral-800">
            <Image src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=600" alt="Belly Dance Bali Premium Service" fill className="object-cover" />
          </div>
          <div>
            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">PREMIUM ROSTER</span>
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase mb-4">Belly Dance Bali</h1>
            <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
              Sajikan kemewahan kultur Timur Tengah yang memikat melalui Belly Dance profesional di Bali. Gerakan tubuh yang fleksibel dikombinasikan dengan kostum berkilau premium akan membawa nuansa eksotis magis ke tengah-tengah acara makan malam, pesta privat, atau gala dinner Anda.
            </p>
            <Button onClick={() => openWhatsApp("Landing Page - Booking Belly Dance Bali")} className="w-full sm:w-auto">Book Belly Dance Now</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <Star className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Kostum Otentik</h3>
            <p className="text-neutral-400 text-xs font-light">Setiap set pakaian dirancang detail dengan manik-manik mewah berkelas.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <Flame className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Teknik Tinggi</h3>
            <p className="text-neutral-400 text-xs font-light">Ditarikan oleh penari berpengalaman dengan penguasaan isolasi otot perut yang mumpuni.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Interaksi Audiens</h3>
            <p className="text-neutral-400 text-xs font-light">Talent kami lihai berbaur mengajak tamu berdansa gembira bersama.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white uppercase mb-6 text-center">FAQ Belly Dance</h2>
          {specificFaqs.map((f, i) => (
            <AccordionItem key={i} title={f.q}>{f.a}</AccordionItem>
          ))}
        </div>
      </div>
    </main>
  );
}