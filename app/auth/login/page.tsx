"use client"

import type { ReactNode } from "react"
import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import SiteShell from "@/components/site-shell"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

function LoginForm() {
  const { login } = useAuth()
  const router = useRouter()
  const params = useSearchParams()
  const next = params.get("next") || "/student/dashboard"

  const [email, setEmail] = useState("student@demo.lpu.edu")
  const [password, setPassword] = useState("Password123")
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    const res = await login(email, password)
    setPending(false)
    if (!res.ok) {
      setError(res.error || "Login failed")
      return
    }
    router.push(next)
  }

  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-md rounded-lg border bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-amber-900">Student Login</h1>
          <p className="mt-1 text-sm text-muted-foreground">Use the seeded demo account or register a new one.</p>
          <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div>
              <Label htmlFor="pw">Password</Label>
              <Input 
                id="pw" 
                type="password" 
                value={password} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
                required 
              />
            </div>
            {error && <div className="text-sm text-red-600">{error}</div>}
            <Button type="submit" disabled={pending} className="bg-amber-700 text-amber-50 hover:bg-amber-800">
              {pending ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-3 text-sm">
            New here?{" "}
            <Link href="/auth/register" className="underline">
              Create an account
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

export default function Page() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
