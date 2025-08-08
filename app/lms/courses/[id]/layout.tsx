"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getCourse } from "@/lib/lms-mock"
import { cn } from "@/lib/utils"

const tabs = [
  { label: "Overview", seg: "" },
  { label: "Modules", seg: "modules" },
  { label: "Assignments", seg: "assignments" },
  { label: "Quizzes", seg: "quizzes" },
  { label: "Grades", seg: "grades" },
  { label: "Files", seg: "files" },
  { label: "Discussions", seg: "discussions" },
  { label: "Announcements", seg: "announcements" },
]

export default function CourseLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  const pathname = usePathname()
  const course = getCourse(params.id)

  return (
    <div className="space-y-4">
      <header className="rounded-lg border bg-white p-4">
        <div className="text-sm text-muted-foreground">{course?.code} • {course?.term}</div>
        <h1 className="text-2xl font-bold text-amber-900">{course?.title}</h1>
        <div className="text-sm text-muted-foreground">{course?.professor} • {course?.schedule}</div>
      </header>
      <nav className="sticky top-[64px] z-30 -mx-4 border-b bg-amber-50/60 px-4 py-2 backdrop-blur">
        <ul className="flex flex-wrap gap-2">
          {tabs.map(t => {
            const href = `/lms/courses/${params.id}${t.seg ? `/${t.seg}` : ""}`
            const active = pathname === href
            return (
              <li key={t.seg}>
                <Link
                  href={href}
                  className={cn(
                    "rounded px-3 py-1 text-sm hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600",
                    active && "bg-white border"
                  )}
                >
                  {t.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  )
}
