"use client"

import { useState } from "react"
import SiteShell from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from 'lucide-react'

export default function Page() {
  const [email, setEmail] = useState("")
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0)

  function start() {
    setStep(1)
    setTimeout(() => setStep(2), 1000)
    setTimeout(() => setStep(3), 2000)
  }

  return (
    <SiteShell>
      <section className="container mx-auto grid gap-8 px-4 py-8 xl:grid-cols-[1fr_420px]">
        <div>
          <header className="max-w-2xl">
            <h1 className="text-3xl font-bold text-amber-900">Campus Mail (Microsoft 365)</h1>
            <p className="mt-2 text-muted-foreground">Access Outlook, Teams, and OneDrive with your provisioned institutional account.</p>
          </header>
          <div className="mt-6 rounded-lg border bg-white p-4">
            <h2 className="text-lg font-semibold">First-time Sign-in</h2>
            <div className="mt-2 grid gap-3">
              <div>
                <Label htmlFor="campus-email">Email</Label>
                <Input id="campus-email" type="email" placeholder="firstname.lastname@demo.lpu.edu" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <Button className="bg-amber-700 text-amber-50 hover:bg-amber-800 w-full md:w-auto" onClick={start} disabled={!email || step > 0}>
                Begin Sign-in
              </Button>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  {step >= 1 ? <CheckCircle2 className="h-4 w-4 text-amber-700" /> : <Loader2 className="h-4 w-4 opacity-30" />}
                  Redirect to Microsoft Login
                </li>
                <li className="flex items-center gap-2">
                  {step >= 2 ? <CheckCircle2 className="h-4 w-4 text-amber-700" /> : <Loader2 className="h-4 w-4 opacity-30" />}
                  Update Temporary Password
                </li>
                <li className="flex items-center gap-2">
                  {step >= 3 ? <CheckCircle2 className="h-4 w-4 text-amber-700" /> : <Loader2 className="h-4 w-4 opacity-30" />}
                  Configure MFA (Authenticator/SMS)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <aside className="h-max rounded-lg border bg-amber-50 p-4">
          <h2 className="text-sm font-semibold text-amber-900">After Setup</h2>
          <ul className="mt-2 list-inside list-disc text-sm">
            <li>Access Outlook for email and calendar</li>
            <li>Teams for courses and collaboration</li>
            <li>OneDrive for cloud storage</li>
          </ul>
          <div className="mt-3">
            <a className="underline" href="/docs/campus-mail-guide.pdf" download>Campus Mail Guide (PDF)</a>
          </div>
          <div className="mt-3">
            <a className="underline" href="/systems/mylpu">Proceed to myLPU LMS</a>
          </div>
        </aside>
      </section>
    </SiteShell>
  )
}
