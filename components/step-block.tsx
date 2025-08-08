import { CheckCircle2 } from 'lucide-react'
import { cn } from "@/lib/utils"

export type Step = {
  title: string
  content: string
}

export default function StepBlock({
  steps = [],
  variant = "default",
}: {
  steps?: Step[]
  variant?: "default" | "numbered"
}) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((s, i) => (
        <li key={i} className={cn("rounded-lg border bg-white p-4")}>
          <div className="flex items-start gap-3">
            {variant === "numbered" ? (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-700 font-semibold text-white">
                {i + 1}
              </div>
            ) : (
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-700" />
            )}
            <div>
              <div className="font-medium">{s.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.content}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
