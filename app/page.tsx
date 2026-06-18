import fs from "fs";
import path from "path";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Talent from "@/components/sections/Talent";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import EventSection from "@/components/sections/EventSection";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import JournalPreview from "@/components/sections/JournalPreview";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  // 1. Tentukan jalur fisik ke folder public/images
  const imagesDirectory = path.join(process.cwd(), "public/images");
  let localImages: string[] = [];

  try {
    // 2. Cek apakah folder ada, lalu baca isinya
    if (fs.existsSync(imagesDirectory)) {
      const filenames = fs.readdirSync(imagesDirectory);

      // 3. Filter file yang hanya berupa gambar, dan ubah menjadi path URL
      localImages = filenames
        .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
        .map((file) => `/images/${file}`);
    }
  } catch (error) {
    console.error("Gagal membaca folder public/images:", error);
  }

  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <About />
      <Talent />
      <WhyChooseUs />
      <EventSection />
      
      {/* 4. Kirim daftar gambar sebagai props ke komponen Gallery */}
      <Gallery images={localImages} />
      
      <Pricing />
      <Testimonials />
      <FAQ />
      <JournalPreview />
      <Contact />
      <Footer />
    </main>
  );
}