"use client"

import { useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import SiteShell from "@/components/site-shell"
import CardGrid from "@/components/card-grid"
import { SEARCH_INDEX } from "@/lib/mock-data"

function SearchContent() {
  const params = useSearchParams()
  const q = (params.get("q") || "").toLowerCase().trim()

  const results = useMemo(() => {
    const corpus = [
      ...SEARCH_INDEX.programs,
      ...SEARCH_INDEX.publications,
      ...SEARCH_INDEX.news,
      ...SEARCH_INDEX.services,
      ...SEARCH_INDEX.pages,
    ]
    if (!q) return corpus
    return corpus.filter(item => (item.title + " " + item.text).toLowerCase().includes(q))
  }, [q])

  const items = results.map((r) => ({
    title: r.title,
    description: r.text.slice(0, 120) + (r.text.length > 120 ? "..." : ""),
    href: r.href,
    image: "/placeholder.svg?height=180&width=320",
    meta: (r as any).type ?? "Result",
  }))

  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Search</h1>
        <p className="mt-2 text-muted-foreground">{q ? `Results for “${q}”` : "Showing all indexed content."}</p>
        <div className="mt-6">
          <CardGrid items={items} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}

export default function Page() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  )
}