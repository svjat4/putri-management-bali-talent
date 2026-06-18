"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

export default function FloatingWA() {
  const { openWhatsApp } = useWhatsApp();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Floating Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mb-3 bg-neutral-900 border border-gold/40 text-white text-xs px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md max-w-xs pointer-events-auto flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Butuh talent mendadak? Hubungi kami sekarang!</span>
            </motion.div>

            {/* Main Sticky Circular WA Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => openWhatsApp("Sticky Floating Button")}
              className="pointer-events-auto p-4 bg-emerald-500 text-white rounded-full shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:bg-emerald-600 transition-transform duration-300 hover:scale-110 active:scale-95"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle className="w-7 h-7 fill-white" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}