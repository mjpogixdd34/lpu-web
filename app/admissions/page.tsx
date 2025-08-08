import SiteShell from "@/components/site-shell"
import StepBlock from "@/components/step-block"
import CardGrid from "@/components/card-grid"
import FaqAccordion from "@/components/faq-accordion"

export default function Page() {
  const steps = [
    { title: "Choose a Program", content: "Browse Academic offerings to find your fit." },
    { title: "Prepare Requirements", content: "Valid ID, transcripts, forms. See full list." },
    { title: "Submit Application", content: "Apply online or submit downloadable forms." },
    { title: "Take Assessments", content: "Program-specific exams or interviews if applicable." },
    { title: "Receive Admission Decision", content: "Monitor your email and myLPU portal." },
    { title: "Enroll & Onboard", content: "Finalize fees, schedules, and orientation." },
  ]
  const modules = [
    { title: "Apply Now", description: "Start your application online.", href: "/admissions/apply", image: "/call-to-action-button.png" },
    { title: "Requirements", description: "Checklists and downloadable forms.", href: "/admissions/requirements", image: "/placeholder.svg?height=180&width=320" },
    { title: "Scholarships", description: "Merit and need-based awards.", href: "/admissions/scholarships", image: "/placeholder.svg?height=180&width=320" },
    { title: "Visit Campus", description: "Book a guided campus tour.", href: "/admissions/visit", image: "/placeholder.svg?height=180&width=320" },
  ]
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold text-amber-900">Admissions</h1>
          <p className="mt-2 text-muted-foreground">Start your journey at LPU. We’ve outlined a simple, guided process to help you apply.</p>
        </header>

        <div className="mt-6">
          <StepBlock steps={steps} variant="numbered" />
        </div>

        <div className="mt-8">
          <CardGrid items={modules} columns={{ base: 1, md: 2, xl: 3 }} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section aria-labelledby="admissions-faq">
            <h2 id="admissions-faq" className="text-xl font-semibold text-amber-900">Admissions FAQ</h2>
            <div className="mt-3">
              <FaqAccordion />
            </div>
          </section>
          <aside className="rounded-lg border bg-amber-50 p-4">
            <h3 className="text-sm font-semibold text-amber-900">Need Help?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Contact our Admissions Office for assistance.</p>
            <ul className="mt-2 text-sm">
              <li>Email: admissions@demo.lpu.edu</li>
              <li>Phone: (02) 555-1234</li>
              <li><a className="underline" href="/contact">Contact form</a></li>
            </ul>
          </aside>
        </div>
      </section>
    </SiteShell>
  )
}
