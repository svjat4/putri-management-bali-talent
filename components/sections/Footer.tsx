"use client";
import Link from "next/link";
import { BUSINESS_INFO } from "@/constants/data";
import { useWhatsApp } from "@/hooks/useWhatsApp";

export default function Footer() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 py-12 px-4 text-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500 font-light">
        
        {/* Bagian Kiri: Info Brand */}
        <div>
          <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-1">
            {BUSINESS_INFO.name}
          </h3>
          <p className="text-xs text-neutral-600">
            Premium Entertainment Talent Agency. Based in Bali, Indonesia.
          </p>
        </div>

        {/* Bagian Kanan: Menu Navigasi */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest">
          <Link href="/#about" className="hover:text-gold transition-colors">About</Link>
          <Link href="/#talents" className="hover:text-gold transition-colors">Talents</Link>
          <Link href="/#pricing" className="hover:text-gold transition-colors">Pricing</Link>
          <Link href="/#journal" className="hover:text-gold transition-colors">The Journal</Link>
          
          <button 
            onClick={() => openWhatsApp("Footer Nav Line Link")} 
            className="hover:text-gold transition-colors text-xs uppercase tracking-widest"
          >
            Request Quote
          </button>
        </div>

      </div>

      {/* Garis Pemisah */}
      <div className="h-[1px] bg-neutral-900 my-8 max-w-5xl mx-auto" />

      {/* Bagian Bawah: Partner & Copyright */}
      <div className="flex flex-col items-center gap-4">
        {/* Sisipan Link Jajanan Magetan */}
        <div>
          <p className="text-[10px] text-neutral-700 uppercase tracking-widest mb-1">
            Our Partner
          </p>
          <a 
            href="https://jajananmagetan.biz.id" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-neutral-500 hover:text-gold transition-colors"
          >
            Jajanan Magetan
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-neutral-600">
          &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. Crafted for High Conversions.
        </p>
      </div>
    </footer>
  );
}