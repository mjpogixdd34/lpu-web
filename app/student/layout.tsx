"use client"

import AuthGuard from "@/components/auth-guard"
import { StudentShell } from "@/components/student-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <StudentShell>{children}</StudentShell>
    </AuthGuard>
  )
}
