"use client";
import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/constants/data";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { MessageSquare, Instagram, Mail } from "lucide-react";

export default function Contact() {
  const { openWhatsApp } = useWhatsApp();

  const channels = [
    { title: "WhatsApp Direct", value: `+${BUSINESS_INFO.phone}`, icon: MessageSquare, action: () => openWhatsApp("Contact Center Channel - WA Link") },
    { title: "Instagram Profile", value: `@${BUSINESS_INFO.instagram}`, icon: Instagram, action: () => window.open(`https://instagram.com/${BUSINESS_INFO.instagram}`, "_blank") },
    { title: "Official Email Address", value: BUSINESS_INFO.email, icon: Mail, action: () => window.open(`mailto:${BUSINESS_INFO.email}`) },
  ];

  return (
    <section id="contact" className="py-24 bg-background px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">Contact & Booking Channels</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                onClick={ch.action}
                className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl cursor-pointer text-center group hover:border-gold transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-950 flex items-center justify-center mx-auto text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-1">{ch.title}</h3>
                <p className="text-neutral-400 text-xs font-light tracking-wide">{ch.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}