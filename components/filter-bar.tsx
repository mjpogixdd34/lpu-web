"use client"

import { useState } from "react"
import { X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type FilterBarProps = {
  categories: string[]
  sdgTags: string[]
  onChange?: (state: { query: string; category?: string; tags: string[] }) => void
}

export default function FilterBar({
  categories = ["All", "Journals", "Conference", "Reports"],
  sdgTags = ["SDG 4 Quality Education", "SDG 9 Industry", "SDG 11 Cities", "SDG 13 Climate Action"],
  onChange,
}: FilterBarProps) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string | undefined>("All")
  const [tags, setTags] = useState<string[]>([])

  function toggleTag(t: string) {
    setTags((prev) => {
      const next = prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
      onChange?.({ query, category, tags: next })
      return next
    })
  }

  function setCat(c: string) {
    setCategory(c)
    onChange?.({ query, category: c, tags })
  }

  return (
    <div className="rounded-lg border bg-white p-3">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex-1">
          <label htmlFor="pubs-query" className="sr-only">
            Search publications
          </label>
          <Input
            id="pubs-query"
            placeholder="Search publications by title, author, or keyword"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              onChange?.({ query: e.target.value, category, tags })
            }}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Button
              key={c}
              type="button"
              variant={c === category ? "default" : "outline"}
              onClick={() => setCat(c)}
              className={cn(c === category ? "bg-amber-700 text-amber-50 hover:bg-amber-800" : "")}
            >
              {c}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <div className="text-sm font-medium">Filter by SDG tags</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {sdgTags.map((t) => {
            const active = tags.includes(t)
            return (
              <button
                key={t}
                type="button"
                aria-pressed={active}
                onClick={() => toggleTag(t)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600",
                  active ? "border-amber-700 bg-amber-100 text-amber-900" : "bg-white"
                )}
              >
                {t}
              </button>
            )
          })}
        </div>
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground">Active tags:</span>
            {tags.map((t) => (
              <span key={t} className="inline-flex items-center gap-1 rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-900">
                {t}
                <button aria-label={`Remove ${t}`} onClick={() => toggleTag(t)}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
