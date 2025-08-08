"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import SiteShell from "@/components/site-shell"
import { useAuth } from "@/components/auth-provider"

export default function Page() {
  const { logout } = useAuth()
  const router = useRouter()
  useEffect(() => {
    logout()
    router.replace("/")
  }, [logout, router])
  return (
    <SiteShell>
      <div className="p-6 text-sm text-muted-foreground">Signing you out…</div>
    </SiteShell>
  )
}
