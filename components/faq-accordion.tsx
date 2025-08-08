"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqAccordion({
  items = [
    { q: "What are the general admission requirements?", a: "Standard forms, transcripts, and identification. See the full checklist on the Apply page." },
    { q: "Do you offer scholarships?", a: "Yes, merit and need-based. Browse the Scholarships section for criteria and deadlines." },
  ],
}: {
  items?: { q: string; a: string }[]
}) {
  return (
    <Accordion type="multiple" className="w-full">
      {items.map((it, idx) => (
        <AccordionItem key={idx} value={`faq-${idx}`}>
          <AccordionTrigger className="text-left">{it.q}</AccordionTrigger>
          <AccordionContent>{it.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
