import { Button } from "@/components/ui/button"

export default function BottomCTA({
  label = "Apply Now",
  href = "/admissions/apply",
}: {
  label?: string
  href?: string
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 p-3 shadow md:hidden">
      <Button asChild className="w-full bg-amber-700 text-amber-50 hover:bg-amber-800">
        <a href={href}>{label}</a>
      </Button>
    </div>
  )
}
