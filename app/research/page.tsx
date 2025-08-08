"use client"

import { useMemo, useState } from "react"
import SiteShell from "@/components/site-shell"
import FilterBar from "@/components/filter-bar"
import CardGrid, { type CardItem } from "@/components/card-grid"

const PUBS: CardItem[] = [
  { title: "AI for Inclusive Education", href: "/research/publications/ai-inclusive-edu", description: "Improving accessibility through AI tools.", meta: "Journal • 2024", tags: ["SDG 4 Quality Education"], image: "/placeholder.svg?height=180&width=320" },
  { title: "Resilient Urban Mobility", href: "/research/publications/resilient-urban-mobility", description: "Transport planning amid climate risks.", meta: "Conference • 2023", tags: ["SDG 11 Cities", "SDG 13 Climate Action"], image: "/placeholder.svg?height=180&width=320" },
  { title: "Sustainable Manufacturing Index", href: "/research/publications/smi", description: "Assessing industry sustainability KPIs.", meta: "Report • 2022", tags: ["SDG 9 Industry"], image: "/placeholder.svg?height=180&width=320" },
]

export default function Page() {
  const [state, setState] = useState<{ query: string; category?: string; tags: string[] }>({ query: "", category: "All", tags: [] })
  const filtered = useMemo(() => {
    return PUBS.filter((p) => {
      const q = state.query.toLowerCase()
      const matchQ = q ? `${p.title} ${p.description ?? ""} ${p.meta ?? ""}`.toLowerCase().includes(q) : true
      const matchCat = state.category === "All" || !state.category ? true : (p.meta ?? "").toLowerCase().includes(state.category.toLowerCase())
      const matchTags = state.tags.length === 0 ? true : state.tags.every((t) => (p.tags ?? []).includes(t))
      return matchQ && matchCat && matchTags
    })
  }, [state])

  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold text-amber-900">Research & Publications</h1>
          <p className="mt-2 text-muted-foreground">Browse articles, journals, and reports. Filter by category or SDG tags and download available files.</p>
        </header>
        <div className="mt-6">
          <FilterBar onChange={setState} />
        </div>
        <div className="mt-6">
          <CardGrid items={filtered} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>
      </section>
    </SiteShell>
  )
}
