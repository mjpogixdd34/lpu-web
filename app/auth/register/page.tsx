"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import SiteShell from "@/components/site-shell"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Page() {
  const { register } = useAuth()
  const router = useRouter()
  const [values, setValues] = useState({ email: "", password: "", firstName: "", lastName: "" })
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPending(true)
    const res = await register(values)
    setPending(false)
    if (!res.ok) {
      setError(res.error || "Registration failed")
      return
    }
    router.push("/student/dashboard")
  }

  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-md rounded-lg border bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-amber-900">Create Account</h1>
          <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="first">First Name</Label>
              <Input id="first" value={values.firstName} onChange={(e) => setValues((v) => ({ ...v, firstName: e.target.value }))} required />
            </div>
            <div>
              <Label htmlFor="last">Last Name</Label>
              <Input id="last" value={values.lastName} onChange={(e) => setValues((v) => ({ ...v, lastName: e.target.value }))} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={values.email} onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))} required />
            </div>
            <div>
              <Label htmlFor="pw">Password</Label>
              <Input id="pw" type="password" value={values.password} onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))} required />
            </div>
            {error && <div className="text-sm text-red-600">{error}</div>}
            <Button type="submit" disabled={pending} className="bg-amber-700 text-amber-50 hover:bg-amber-800">
              {pending ? "Creating..." : "Create Account"}
            </Button>
          </form>
          <div className="mt-3 text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
