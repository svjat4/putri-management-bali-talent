import type { Metadata } from "next";
import "./globals.css"; 
import FloatingWA from "@/components/FloatingWA";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics"; // 👈 Tambahkan import ini
import { BUSINESS_INFO } from "@/constants/data";
import React from "react"; 

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.baseUrl),
  title: {
    default: "Putri Management Bali | Premium Entertainment Talent Agency",
    template: "%s | Putri Management Bali"
  },
  description: "Putri Management Bali menyediakan berbagai talent profesional untuk event, club, gathering, corporate, villa party, dan wedding di Bali. Booking Instan via WhatsApp.",
  keywords: [
    "putri management bali", "talent bali", "entertainment bali", "bali entertainment agency",
    "sexy dancer bali", "fire dance bali", "belly dance bali", "balinese dancer bali", "host party bali"
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Putri Management Bali | Premium Entertainment Talent Agency",
    description: "Penyedia talent profesional terpercaya di Bali untuk segala skala event mewah.",
    url: BUSINESS_INFO.baseUrl,
    siteName: "Putri Management Bali",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Putri Management Bali | Premium Entertainment Talent Agency",
    description: "Penyedia talent profesional terpercaya di Bali untuk segala skala event mewah.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; 
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-background text-white antialiased selection:bg-gold/30 selection:text-gold">
        <GoogleAnalytics /> {/* 👈 Panggil komponennya di sini, di bawah tag body */}
        {children}
        <FloatingWA />
        <JsonLd />
      </body>
    </html>
  );
}