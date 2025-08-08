import SiteShell from "@/components/site-shell"

export default function Page({ params }: { params: { id: string } }) {
  const title = decodeURIComponent(params.id).replace(/-/g, " ")
  return (
    <SiteShell>
      <article className="container mx-auto px-4 py-8">
        <header>
          <h1 className="text-3xl font-bold text-amber-900">{title}</h1>
          <div className="mt-2 text-sm text-muted-foreground">Journal • 2024 • Tags: SDG 4 Quality Education</div>
        </header>
        <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
          <div>
            <img src="/placeholder.svg?height=320&width=640" alt="" className="w-full rounded-lg border" />
            <section className="mt-4">
              <h2 className="text-xl font-semibold text-amber-900">Abstract</h2>
              <p className="mt-2 text-sm text-muted-foreground">This study explores inclusive educational technologies powered by AI, presenting methods and outcomes across pilot schools.</p>
            </section>
          </div>
          <aside className="h-max rounded-lg border bg-amber-50 p-4">
            <div className="text-sm font-semibold text-amber-900">Article Access</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a className="underline" href="/docs/research-article.pdf" download>Download Full Text (PDF)</a></li>
              <li><a className="underline" href="/research">Back to Publications</a></li>
            </ul>
          </aside>
        </div>
      </article>
    </SiteShell>
  )
}
