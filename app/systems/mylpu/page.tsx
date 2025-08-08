"use client"

import { useState } from "react"
import SiteShell from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from 'lucide-react'

export default function Page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [step, setStep] = useState<"idle" | "handoff" | "done">("idle")

  function login(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !password) return
    setStep("handoff")
    setTimeout(() => setStep("done"), 1200)
  }

  return (
    <SiteShell>
      <section className="container mx-auto grid gap-8 px-4 py-8 xl:grid-cols-[1fr_420px]">
        <div>
          <header className="max-w-2xl">
            <h1 className="text-3xl font-bold text-amber-900">myLPU LMS</h1>
            <p className="mt-2 text-muted-foreground">
              Use your Campus Mail credentials to sign in. After authentication, you’ll be redirected to Teams, OneDrive, and course tools via identity handoff.
            </p>
          </header>

          <div className="mt-6 grid gap-4">
            <div className="rounded-lg border bg-white p-4">
              <h2 className="text-lg font-semibold">Sign In</h2>
              <form className="mt-3 grid gap-3" onSubmit={login}>
                <div>
                  <Label htmlFor="email">Campus Mail (Microsoft 365)</Label>
                  <Input id="email" type="email" placeholder="firstname.lastname@demo.lpu.edu" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Button type="submit" className="bg-amber-700 text-amber-50 hover:bg-amber-800" disabled={step !== "idle"}>
                  {step === "idle" && "Login"}
                  {step === "handoff" && (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Redirecting to Microsoft 365...
                    </span>
                  )}
                  {step === "done" && (
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> Signed in
                    </span>
                  )}
                </Button>
              </form>
            </div>

            <div className="rounded-lg border bg-white p-4">
              <h2 className="text-lg font-semibold">After Sign-In</h2>
              <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                <li>Identity handoff connects your session to Teams and OneDrive.</li>
                <li>Course shells and assignments sync automatically.</li>
                <li>Access records (grades, attendance) from the Dashboard.</li>
              </ul>
              <div className="mt-3">
                <a className="underline mr-2" href="/systems/teams">Open Teams</a>
                <a className="underline mr-2" href="/systems/onedrive">Open OneDrive</a>
                <a className="underline" href="/lms">Open LMS Dashboard</a>
              </div>
            </div>
          </div>
        </div>

        <aside className="h-max rounded-lg border bg-amber-50 p-4">
          <h2 className="text-sm font-semibold text-amber-900">Provisioning Steps</h2>
          <ol className="mt-2 list-inside list-decimal text-sm">
            <li>Receive campus email and temporary password.</li>
            <li>First login triggers Microsoft sign-in and password update.</li>
            <li>Set MFA for account protection.</li>
            <li>Return to myLPU to complete onboarding.</li>
          </ol>
          <div className="mt-3">
            <a className="underline" href="/docs/campus-mail-guide.pdf" download>Campus Mail Guide (PDF)</a>
          </div>
        </aside>
      </section>
    </SiteShell>
  )
}
