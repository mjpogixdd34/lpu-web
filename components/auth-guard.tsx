"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./auth-provider"

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login?next=/student/dashboard")
    }
  }, [user, loading, router])

  if (loading || !user) {
    return <div className="p-6 text-sm text-muted-foreground">Checking your session…</div>
  }

  return <>{children}</>
}
