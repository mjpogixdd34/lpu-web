import { Button } from "@/components/ui/button"

export default function EmptyState({
  title = "Nothing here yet",
  description = "When content is available, you’ll see it here.",
  action,
}: {
  title?: string
  description?: string
  action?: { label: string; href: string }
}) {
  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6 text-center">
      <div className="text-lg font-semibold text-amber-900">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      {action && (
        <div className="mt-3">
          <Button asChild className="bg-amber-700 text-amber-50 hover:bg-amber-800">
            <a href={action.href}>{action.label}</a>
          </Button>
        </div>
      )}
    </div>
  )
}
