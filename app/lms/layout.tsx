"use client"

import AuthGuard from "@/components/auth-guard"
import SiteShell from "@/components/site-shell"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const top = [
  { label: "Dashboard", href: "/lms" },
  { label: "Courses", href: "/lms/courses" },
  { label: "Calendar", href: "/lms/calendar" },
  { label: "Profile", href: "/lms/profile" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <AuthGuard>
      <SiteShell>
        <div className="border-b bg-amber-50/40">
          <nav className="container mx-auto flex gap-2 px-4 py-2">
            {top.map(t => (
              <Link
                key={t.href}
                href={t.href}
                className={cn(
                  "rounded px-3 py-1 text-sm hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600",
                  pathname === t.href && "bg-white border"
                )}
              >
                {t.label}
              </Link>
            ))}
          </nav>
        </div>
        <section className="container mx-auto px-4 py-6">{children}</section>
      </SiteShell>
    </AuthGuard>
  )
}
