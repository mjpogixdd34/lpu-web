import SiteShell from "@/components/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <section className="container mx-auto px-4 py-8">
        <header>
          <h1 className="text-3xl font-bold text-amber-900">Design & Behavior Guide</h1>
          <p className="mt-2 text-muted-foreground">Overview of screen type behaviors, components, and functional flows.</p>
        </header>

        <div className="mt-6 grid gap-8">
          <section aria-labelledby="screen-types">
            <h2 id="screen-types" className="text-xl font-semibold text-amber-900">Screen Types</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <span className="font-medium">Desktop (≥1200px):</span> Full horizontal navbar with dropdowns, wide split grids (e.g., 2fr/1fr layouts), 3–4 column cards, contextual sidebars on detail pages.
              </li>
              <li>
                <span className="font-medium">Tablet (768–1199px):</span> Collapsed menu via touch-friendly drawer, 2-column grids, tighter padding, stacked CTA blocks.
              </li>
              <li>
                <span className="font-medium">Mobile (≤767px):</span> Sticky header, drawer-based accordion nav, single-column scrolling, collapsible sections for dense content (FAQs, forms), bottom-fixed CTA buttons where appropriate.
              </li>
            </ul>
          </section>

          <section aria-labelledby="components">
            <h2 id="components" className="text-xl font-semibold text-amber-900">Component Specs</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <span className="font-medium">Navigational bars:</span> Desktop dropdowns; tablet/mobile drawers with accordion hierarchy; utility links for myLPU, Campus Mail, OPAC.
              </li>
              <li>
                <span className="font-medium">Hero sections:</span> Strong imagery, clear headings, and primary/secondary CTAs like “Apply” and “Explore Programs”.
              </li>
              <li>
                <span className="font-medium">Card modules:</span> Support meta, tags, and responsive 1–4 column layouts.
              </li>
              <li>
                <span className="font-medium">Procedural steps:</span> Numbered or checklisted blocks for “How to Apply” and system onboarding.
              </li>
              <li>
                <span className="font-medium">FAQs:</span> Accordion with accessible triggers and content.
              </li>
              <li>
                <span className="font-medium">Filterable search:</span> Inputs and labeled tags for Research & OPAC pages.
              </li>
            </ul>
          </section>

          <section aria-labelledby="flows">
            <h2 id="flows" className="text-xl font-semibold text-amber-900">Functional Flows</h2>
            <ol className="mt-2 space-y-2 text-sm list-inside list-decimal">
              <li>
                <span className="font-medium">Prospective Students:</span> Admissions → Explore Academics → Review Requirements → Download forms → Proceed to myLPU portal (Apply).
              </li>
              <li>
                <span className="font-medium">Current Students:</span> myLPU and Campus Mail credentials sign-in → identity handoff to Teams/OneDrive → access records and e-resources.
              </li>
              <li>
                <span className="font-medium">Research Users:</span> Publications hub → Filter by category/SDG → Open article details → Download files.
              </li>
              <li>
                <span className="font-medium">Library Users:</span> OPAC search by field (Keyword/Title/Author) → Filter by material type and provider → Access e-resources.
              </li>
            </ol>
          </section>

          <section aria-labelledby="accessibility">
            <h2 id="accessibility" className="text-xl font-semibold text-amber-900">Accessibility</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Semantic HTML structure, visible focus indicators, keyboard-accessible navigation and components.</li>
              <li>Mobile-first inputs with inline validation and aria attributes for errors.</li>
              <li>High-contrast warm palette for readable hierarchy.</li>
            </ul>
          </section>
        </div>
      </section>
    </SiteShell>
  )
}
