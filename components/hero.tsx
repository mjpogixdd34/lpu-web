import { Button } from "@/components/ui/button"

type CTA = { label: string; href: string; variant?: "default" | "outline" }

export default function Hero({
  title = "Shaping futures with excellence and heart",
  subtitle = "Discover programs, research, and student services designed to help you thrive.",
  ctas = [
    { label: "Apply", href: "/admissions/apply" },
    { label: "Explore Programs", href: "/academics", variant: "outline" },
  ],
  image = "/university-aerial-warm.png",
}: {
  title?: string
  subtitle?: string
  ctas?: CTA[]
  image?: string
}) {
  return (
    <section className="relative">
      <img
        src={image || "/placeholder.svg"}
        alt="University campus hero"
        className="h-[50vh] w-full object-cover object-center sm:h-[60vh] lg:h-[70vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" aria-hidden />
      <div className="absolute inset-0">
        <div className="container mx-auto flex h-full items-end px-4 py-10">
          <div className="max-w-2xl rounded bg-white/85 p-4 backdrop-blur-md sm:p-6">
            <h1 className="text-2xl font-bold text-amber-900 sm:text-4xl">{title}</h1>
            <p className="mt-2 text-sm text-neutral-700 sm:text-base">{subtitle}</p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              {ctas.map((cta) => (
                <Button
                  key={cta.href}
                  asChild
                  variant={cta.variant ?? "default"}
                  className="bg-amber-700 text-amber-50 hover:bg-amber-800"
                >
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
