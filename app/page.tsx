import type { Metadata } from 'next'
import SiteShell from "@/components/site-shell"
import Hero from "@/components/hero"
import CardGrid from "@/components/card-grid"
import UtilityLinks from "@/components/utility-links"
import { COLLEGES, NEWS } from "@/lib/mock-data"

export const metadata: Metadata = {
  title: 'Home | Lighthouse Polytechnic University',
  description: 'Welcome to Lighthouse Polytechnic University - A warm, research-driven institution for 21st-century learners',
}

export default function Page() {
  const colleges = COLLEGES.map(c => ({
    title: c.name,
    description: c.description,
    href: `/academics?college=${c.slug}`,
    image: c.image,
  }))

  const news = NEWS.slice(0, 3).map(n => ({
    title: n.title,
    meta: `${n.kind} • ${new Date(n.date).toLocaleString(undefined, { month: "short", year: "numeric" })}`,
    href: `/news/${n.slug}`,
    image: n.image,
  }))

  return (
    <SiteShell>
      <Hero />
      <section className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-xl font-semibold text-amber-900">Explore Colleges</h2>
            <p className="text-sm text-muted-foreground">Find the right program for you.</p>
            <div className="mt-4">
              <CardGrid items={colleges} columns={{ base: 1, md: 2, xl: 3, "2xl": 4 }} />
            </div>
          </div>
          <aside className="rounded-lg border bg-amber-50 p-4">
            <h3 className="text-sm font-semibold text-amber-900">Quick Access</h3>
            <p className="mt-1 text-sm text-muted-foreground">Your essential systems</p>
            <div className="mt-3">
              <UtilityLinks />
            </div>
          </aside>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold text-amber-900">News & Events</h2>
        <div className="mt-4">
          <CardGrid items={news} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
