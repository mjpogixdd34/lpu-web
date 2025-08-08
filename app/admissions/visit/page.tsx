import SiteShell from "@/components/site-shell"
import VisitForm from "./visit-form"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Visit Campus</h1>
        <p className="mt-2 text-muted-foreground">Book a guided campus tour to experience life at LPU.</p>
        <div className="mt-6 rounded-lg border bg-white p-4">
          <VisitForm />
        </div>
      </section>
    </SiteShell>
  )
}
