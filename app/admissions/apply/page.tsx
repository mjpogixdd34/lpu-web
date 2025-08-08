"use client"

import { useState } from "react"
import SiteShell from "@/components/site-shell"
import BottomCTA from "@/components/bottom-cta"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  const [values, setValues] = useState({ email: "", first: "", last: "" })
  const [errors, setErrors] = useState<{ [k: string]: string }>({})

  function validate() {
    const e: { [k: string]: string } = {}
    if (!values.first) e.first = "First name is required"
    if (!values.last) e.last = "Last name is required"
    if (!values.email || !/\S+@\S+/.test(values.email)) e.email = "Valid email is required"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    alert("Your pre-application was captured. Proceed to myLPU portal to complete.")
    window.location.href = "/systems/mylpu"
  }

  return (
    <SiteShell>
      <section className="container mx-auto grid gap-8 px-4 py-8 xl:grid-cols-[1fr_380px]">
        <div>
          <header className="max-w-2xl">
            <h1 className="text-3xl font-bold text-amber-900">Apply to LPU</h1>
            <p className="mt-2 text-muted-foreground">You can start online and return anytime. Download forms if you prefer offline submission.</p>
          </header>

          <div id="requirements" className="mt-6">
            <h2 className="text-xl font-semibold text-amber-900">Admission Requirements</h2>
            <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
              <li>Completed application form</li>
              <li>Secondary/tertiary transcripts</li>
              <li>Valid government-issued ID</li>
              <li>Program-specific prerequisites</li>
            </ul>
            <div className="mt-3">
              <a className="underline" href="/docs/admissions-application.pdf" download>
                Download Application Form (PDF)
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-white p-4">
            <h2 className="text-lg font-semibold">Start Online Application</h2>
            <form className="mt-3 grid gap-3" onSubmit={submit} noValidate>
              <div>
                <Label htmlFor="first">First Name</Label>
                <Input
                  id="first"
                  autoComplete="given-name"
                  value={values.first}
                  onChange={(e) => setValues((v) => ({ ...v, first: e.target.value }))}
                  aria-invalid={!!errors.first}
                  aria-describedby={errors.first ? "first-error" : undefined}
                />
                {errors.first && <p id="first-error" className="mt-1 text-sm text-red-600">{errors.first}</p>}
              </div>
              <div>
                <Label htmlFor="last">Last Name</Label>
                <Input
                  id="last"
                  autoComplete="family-name"
                  value={values.last}
                  onChange={(e) => setValues((v) => ({ ...v, last: e.target.value }))}
                  aria-invalid={!!errors.last}
                  aria-describedby={errors.last ? "last-error" : undefined}
                />
                {errors.last && <p id="last-error" className="mt-1 text-sm text-red-600">{errors.last}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div className="pt-2">
                <Button type="submit" className="bg-amber-700 text-amber-50 hover:bg-amber-800 w-full md:w-auto">Proceed to Application Portal</Button>
              </div>
            </form>
          </div>
        </div>
        <aside className="h-max rounded-lg border bg-amber-50 p-4">
          <h2 className="text-sm font-semibold text-amber-900">External Systems Gateway</h2>
          <ol className="mt-2 list-inside list-decimal text-sm">
            <li><a className="underline" href="/systems/mylpu">myLPU LMS</a> — complete application and track status.</li>
            <li><a className="underline" href="/systems/campus-mail">Campus Mail</a> — receive official messages.</li>
            <li><a className="underline" href="/library/opac">Library OPAC</a> — access digital resources.</li>
          </ol>
          <div id="downloads" className="mt-4">
            <div className="text-sm font-semibold">Downloads</div>
            <ul className="mt-1 text-sm">
              <li><a className="underline" href="/docs/program-brochure.pdf" download>Program Brochure (PDF)</a></li>
              <li><a className="underline" href="/docs/admissions-application.pdf" download>Application Form (PDF)</a></li>
            </ul>
          </div>
        </aside>
      </section>
      <BottomCTA label="Apply Now" href="/admissions/apply" />
    </SiteShell>
  )
}
