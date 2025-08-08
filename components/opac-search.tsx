"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CardGrid, { type CardItem } from "./card-grid"

type Material = "All" | "eBook" | "Print"
type Provider = "Gale" | "Emerald" | "Cambridge"

const SAMPLE: CardItem[] = [
  { title: "Data Structures in Practice", description: "Advanced algorithms and data structures.", href: "#", meta: "Print • 2019", tags: ["Author: J. Cruz", "Gale"], image: "/placeholder-69hzr.png" },
  { title: "Green Cities Handbook", description: "Urban planning for sustainability.", href: "#", meta: "eBook • 2021", tags: ["Author: A. Santos", "Cambridge"], image: "/placeholder-4c0ky.png" },
  { title: "Business Analytics Journal", description: "Quarterly journal on analytics.", href: "#", meta: "eBook • 2022", tags: ["Author: M. Reyes", "Emerald"], image: "/journal-analytics.png" },
]

export default function OpacSearch() {
  const [field, setField] = useState<"Keyword" | "Title" | "Author">("Keyword")
  const [q, setQ] = useState("")
  const [material, setMaterial] = useState<Material>("All")
  const [providers, setProviders] = useState<Provider[]>([])

  const results = useMemo(() => {
    return SAMPLE.filter((item) => {
      const text = `${item.title} ${item.description ?? ""} ${item.meta ?? ""} ${(item.tags ?? []).join(" ")}`
      const matchQ = q.trim() ? text.toLowerCase().includes(q.toLowerCase()) : true
      const matchMaterial =
        material === "All" ? true : material === "eBook" ? item.meta?.toLowerCase().includes("ebook") : item.meta?.toLowerCase().includes("print")
      const matchProvider = providers.length === 0 ? true : providers.some((p) => (item.tags ?? []).includes(p))
      return matchQ && !!matchMaterial && matchProvider
    })
  }, [q, material, providers])

  function toggleProvider(p: Provider) {
    setProviders((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]))
  }

  return (
    <section aria-labelledby="opac-search">
      <h2 id="opac-search" className="sr-only">OPAC Search</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-4">
          <div className="grid gap-3">
            <div>
              <Label className="text-sm">Search Field</Label>
              <Select value={field} onValueChange={(v: "Keyword" | "Title" | "Author") => setField(v)}>
                <SelectTrigger aria-label="Search Field">
                  <SelectValue placeholder="Keyword" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Keyword">Keyword</SelectItem>
                  <SelectItem value="Title">Title</SelectItem>
                  <SelectItem value="Author">Author</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="opac-q" className="text-sm">Query</Label>
              <Input
                id="opac-q"
                placeholder={`Enter ${field.toLowerCase()}...`}
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm">Material Type</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {(["All", "eBook", "Print"] as Material[]).map((m) => (
                  <Button key={m} type="button" variant={material === m ? "default" : "outline"} onClick={() => setMaterial(m)} className={material === m ? "bg-amber-700 text-amber-50 hover:bg-amber-800" : ""}>
                    {m}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Label className="text-sm">Providers</Label>
              <div className="mt-2 grid gap-2">
                {(["Gale", "Emerald", "Cambridge"] as Provider[]).map((p) => (
                  <label key={p} className="flex items-center gap-2">
                    <Checkbox checked={providers.includes(p)} onCheckedChange={() => toggleProvider(p)} aria-label={p} />
                    <span className="text-sm">{p}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="pt-2">
              <Button className="w-full bg-amber-700 text-amber-50 hover:bg-amber-800" onClick={() => { /* filters already reactive */ }}>
                Search OPAC
              </Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="mb-2 text-sm text-muted-foreground">{results.length} results</div>
          <CardGrid items={results} columns={{ base: 1, md: 1, xl: 2 }} />
        </div>
      </div>
    </section>
  )
}
