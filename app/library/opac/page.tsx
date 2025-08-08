import SiteShell from "@/components/site-shell"
import OpacSearch from "@/components/opac-search"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold text-amber-900">Library OPAC</h1>
          <p className="mt-2 text-muted-foreground">Search by title, author, or keyword. Filter by material type and provider. Access e-resources from Gale, Emerald, and Cambridge.</p>
        </header>
        <div className="mt-6">
          <OpacSearch />
        </div>
      </section>
    </SiteShell>
  )
}
