import SiteShell from "@/components/site-shell"
import { NEWS } from "@/lib/mock-data"

export default function Page({ params }: { params: { slug: string } }) {
  const item = NEWS.find(n => n.slug === params.slug)
  if (!item) {
    return (
      <SiteShell>
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-amber-900">Not found</h1>
        </section>
      </SiteShell>
    )
  }
  return (
    <SiteShell>
      <article className="container mx-auto px-4 py-8">
        <header>
          <div className="text-sm text-muted-foreground">{item.kind} • {new Date(item.date).toLocaleDateString()}</div>
          <h1 className="mt-1 text-3xl font-bold text-amber-900">{item.title}</h1>
        </header>
        <img src={item.image || "/placeholder.svg"} alt="" className="mt-6 h-64 w-full rounded-lg object-cover" />
        <div className="prose mt-6 max-w-none text-sm text-neutral-800">
          <p>{item.content}</p>
        </div>
      </article>
    </SiteShell>
  )
}
