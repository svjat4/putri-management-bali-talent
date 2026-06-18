import { BUSINESS_INFO } from "@/constants/data";

export function useWhatsApp() {
  const getWAlink = (contextText?: string) => {
    const baseMessage = `Halo Putri Management Bali,
Saya tertarik untuk booking talent untuk event saya.

Nama:
Tanggal Event:
Lokasi:
Jenis Event:
Jumlah Talent:
${contextText ? `Catatan Tambahan: Mengajukan Ketertarikan Pada [${contextText}]` : ""}

Mohon informasi lebih lanjut.
Terima kasih.`;

    return `https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(baseMessage)}`;
  };

  const openWhatsApp = (contextText?: string) => {
    window.open(getWAlink(contextText), "_blank", "noopener,noreferrer");
  };

  return { getWAlink, openWhatsApp };
}