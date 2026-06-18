"use client";
import { FAQS } from "@/constants/data";
import { AccordionItem } from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-neutral-950 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">Frequently Asked Questions</h2>
        </div>

        <div>
          {FAQS.map((faq, idx) => (
            <AccordionItem key={idx} title={faq.q}>
              {faq.a}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}