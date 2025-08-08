import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900">Careers</h1>
        <p className="mt-2 text-muted-foreground">Explore internships, job postings, and employer partners.</p>
        <ul className="mt-4 list-inside list-disc text-sm text-muted-foreground">
          <li>Resume and interview workshops</li>
          <li>On-campus recruitment and job fairs</li>
        </ul>
      </section>
    </SiteShell>
  )
}
