import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"
import { PROGRAMS, COLLEGES } from "@/lib/mock-data"

export default function Page({ searchParams }: { searchParams: { college?: string; level?: string; q?: string } }) {
  const { college, level, q } = searchParams
  const filtered = PROGRAMS.filter(p => {
    const matchCollege = college ? p.college === college : true
    const matchLevel = level ? p.level.toLowerCase() === level.toLowerCase() : true
    const matchQ = q ? (p.title + " " + p.summary).toLowerCase().includes(q.toLowerCase()) : true
    return matchCollege && matchLevel && matchQ
  })

  const items = filtered.map(p => ({
    title: p.title,
    description: p.summary,
    href: `/academics/${p.slug}`,
    image: p.image,
    meta: `${p.level}`,
    tags: [COLLEGES.find(c => c.slug === p.college)?.name ?? ""].filter(Boolean),
  }))

  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold text-amber-900">Academic Programs</h1>
          <p className="mt-2 text-muted-foreground">Discover undergraduate and graduate programs across our colleges.</p>
        </header>
        <div className="mt-6">
          <CardGrid items={items} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
