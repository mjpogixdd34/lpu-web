import Link from "next/link"
import { SquareArrowOutUpRight } from 'lucide-react'

export default function UtilityLinks() {
  const items = [
    { label: "Login to myLPU", href: "/systems/mylpu" },
    { label: "Access Campus Mail", href: "/systems/campus-mail" },
    { label: "Search OPAC", href: "/library/opac" },
  ]
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {items.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          className="group inline-flex items-center justify-between rounded-md border bg-white px-3 py-3 text-sm shadow-sm hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
        >
          <span className="font-medium text-amber-900">{i.label}</span>
          <SquareArrowOutUpRight className="h-4 w-4 text-amber-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      ))}
    </div>
  )
}
