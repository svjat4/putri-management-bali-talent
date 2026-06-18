"use client";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { ShieldCheck, Volume2, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HostPartyBaliPage() {
  const { openWhatsApp } = useWhatsApp();

  const specificFaqs = [
    { q: "Apakah host menguasai bahasa asing?", a: "Ya, jajaran Host/MC utama kami fasih berkomunikasi multibahasa (Bilingual, Indonesia-Inggris) dengan aksen profesional." },
    { q: "Dapatkah membantu menyusun susunan rundown?", a: "Tentu saja. Host kami akan berkoordinasi erat dengan pihak panitia Anda semenjak H-3 demi kelancaran penyampaian poin jalannya acara." }
  ];

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-gold transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Kembali Ke Utama
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-neutral-800">
            <Image src="https://images.unsplash.com/photo-1496337589254-7e19d01ccc44?auto=format&fit=crop&q=80&w=600" alt="Host Party Bali Premium Service" fill className="object-cover" />
          </div>
          <div>
            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">PREMIUM ROSTER</span>
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase mb-4">Host Party Bali</h1>
            <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
              Kunci dari sebuah pesta yang sukses terletak pada pembawa acara yang karismatik. Layanan Host Party Bali dari Putri Management menghadirkan deretan MC & Host berenergi tinggi, berkepribadian memikat, serta piawai dalam melakukan *crowd engagement* untuk memastikan keseruan pesta Anda mengalir tanpa jeda kaku dari awal hingga akhir.
            </p>
            <Button onClick={() => openWhatsApp("Landing Page - Booking Host Party Bali")} className="w-full sm:w-auto">Book Host Party Now</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <Volume2 className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Vokal & Diksi Prima</h3>
            <p className="text-neutral-400 text-xs font-light">Intonasi artikulatif yang jelas serta ritme berbicara yang sangat nyaman didengarkan.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <Star className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Crowd Control Handal</h3>
            <p className="text-neutral-400 text-xs font-light">Piawai mencairkan suasana beku dan membangun keterikatan emosi audiens masif.</p>
          </div>
          <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-gold mb-3" />
            <h3 className="text-white font-bold mb-1.5 text-sm">Adaptasi Cepat</h3>
            <p className="text-neutral-400 text-xs font-light">Sangat lihai menghadapi perubahan situasi *force majeure* di atas panggung secara taktis.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white uppercase mb-6 text-center">FAQ Host Party</h2>
          {specificFaqs.map((f, i) => (
            <AccordionItem key={i} title={f.q}>{f.a}</AccordionItem>
          ))}
        </div>
      </div>
    </main>
  );
}