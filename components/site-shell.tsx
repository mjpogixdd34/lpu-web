import { SiteHeader } from "./site-header"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="min-h-[60vh]">
        {children}
      </main>
      <footer className="mt-12 border-t bg-amber-50/40">
        <div className="container mx-auto grid gap-6 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-semibold text-amber-900">Lighthouse Polytechnic University</div>
            <p className="mt-2 text-sm text-muted-foreground">A warm, research-driven institution for 21st-century learners.</p>
          </div>
          <div>
            <div className="text-sm font-semibold">Admissions</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a className="hover:underline" href="/admissions/apply">Apply</a></li>
              <li><a className="hover:underline" href="/admissions/requirements">Requirements</a></li>
              <li><a className="hover:underline" href="/admissions/scholarships">Scholarships</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Systems</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a className="hover:underline" href="/systems/mylpu">myLPU LMS</a></li>
              <li><a className="hover:underline" href="/systems/campus-mail">Campus Mail</a></li>
              <li><a className="hover:underline" href="/library/opac">Library OPAC</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a className="hover:underline" href="/contact">Get in touch</a></li>
              <li><a className="hover:underline" href="/guide">Guide</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} LPU. For demo purposes only.</div>
      </footer>
    </>
  )
}
