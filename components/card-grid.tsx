import Link from "next/link"

export type CardItem = {
  title: string
  description?: string
  href: string
  image?: string
  meta?: string
  tags?: string[]
}

export default function CardGrid({
  items = [],
  columns = { base: 1, md: 2, xl: 3, "2xl": 4 },
}: {
  items?: CardItem[]
  columns?: { base: number; md: number; xl: number; "2xl"?: number }
}) {
  const gridClasses = [
    "grid gap-4",
    `grid-cols-${columns.base}`,
    `md:grid-cols-${columns.md}`,
    `xl:grid-cols-${columns.xl}`,
    columns["2xl"] ? `2xl:grid-cols-${columns["2xl"]}` : "",
  ].join(" ")
  return (
    <div className={gridClasses}>
      {items.map((item) => (
        <article key={item.href} className="group overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-amber-600">
          <Link href={item.href} className="block">
            <img
              src={item.image ?? "/placeholder.svg?height=180&width=320&query=academic%20card%20image"}
              alt=""
              className="h-40 w-full object-cover"
            />
          </Link>
          <div className="p-4">
            {item.meta && <div className="text-xs text-muted-foreground">{item.meta}</div>}
            <h3 className="mt-1 text-base font-semibold">
              <Link href={item.href} className="hover:underline">
                {item.title}
              </Link>
            </h3>
            {item.description && <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{item.description}</p>}
            {item.tags && (
              <div className="mt-3 flex flex-wrap gap-1">
                {item.tags.map((t) => (
                  <span key={t} className="rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-900">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
