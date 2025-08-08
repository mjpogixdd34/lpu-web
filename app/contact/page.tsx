"use client"

import { useState } from "react"
import SiteShell from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Page() {
  const [values, setValues] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  function validate() {
    const e: { [k: string]: string } = {}
    if (!values.name) e.name = "Name is required"
    if (!values.email || !/\S+@\S+/.test(values.email)) e.email = "Valid email is required"
    if (!values.message) e.message = "Message is required"
    setErrors(e)
    return Object.keys(e).length === 0
  }
  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    alert("Thanks! We received your message.")
    setValues({ name: "", email: "", message: "" })
  }
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold text-amber-900">Contact Us</h1>
          <p className="mt-2 text-muted-foreground">We’d love to hear from you. Fill out the form below.</p>
        </header>
        <form className="mt-6 max-w-xl space-y-3" onSubmit={submit} noValidate>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={values.name} onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
            {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="cemail">Email</Label>
            <Input id="cemail" type="email" value={values.email} onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cemail-error" : undefined} />
            {errors.email && <p id="cemail-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} value={values.message} onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
            {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>
          <Button type="submit" className="bg-amber-700 text-amber-50 hover:bg-amber-800">Send</Button>
        </form>
      </section>
    </SiteShell>
  )
}
