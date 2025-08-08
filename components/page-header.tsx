import { Button } from "@/components/ui/button"

export default function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string
  title: string
  description?: string
  actions?: { label: string; href: string; variant?: "default" | "outline" }[]
}) {
  return (
    <header className="mx-auto max-w-3xl">
      {eyebrow && <div className="text-xs font-medium uppercase tracking-wide text-amber-800">{eyebrow}</div>}
      <div className="mt-1 text-balance text-3xl font-bold leading-tight text-amber-900 sm:text-4xl">
        {title}
      </div>
      {description && <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>}
      {actions && actions.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {actions.map((a) => (
            <Button
              key={a.href}
              asChild
              variant={a.variant ?? "default"}
              className={a.variant === "outline" ? "" : "bg-amber-700 text-amber-50 hover:bg-amber-800"}
            >
              <a href={a.href}>{a.label}</a>
            </Button>
          ))}
        </div>
      )}
    </header>
  )
}
