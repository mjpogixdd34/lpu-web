import SiteShell from "@/components/site-shell"
import FaqAccordion from "@/components/faq-accordion"

export default function Page() {
  const items = [
    { q: "Borrowing Policy", a: "Students can borrow up to 5 items for 14 days; renewals allowed if not reserved." },
    { q: "Access to E-Resources", a: "Use Campus Mail credentials on and off campus with MFA enabled." },
    { q: "ARC Use", a: "Follow quiet study rules and present your ID upon entry." },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">ARC Policies</h1>
        <div className="mt-6">
          <FaqAccordion items={items} />
        </div>
      </section>
    </SiteShell>
  )
}
