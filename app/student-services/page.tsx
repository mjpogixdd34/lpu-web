import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"
import { SERVICES } from "@/lib/mock-data"

export default function Page() {
  const items = SERVICES.map(s => ({
    title: s.title,
    description: s.summary,
    href: `/student-services/${s.slug}`,
    image: s.image,
  }))
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Student Services</h1>
        <p className="mt-2 text-muted-foreground">Support from enrollment to graduation.</p>
        <div className="mt-6">
          <CardGrid items={items} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
