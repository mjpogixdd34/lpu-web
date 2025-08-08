export type NavItem = {
  title: string
  href?: string
  children?: { title: string; href: string; description?: string }[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "About",
    href: "/about",
    children: [
      { title: "University Profile", href: "/about/profile" },
      { title: "Governance", href: "/about/governance" },
      { title: "Campuses", href: "/about/campuses" },
    ],
  },
  {
    title: "Admissions",
    href: "/admissions",
    children: [
      { title: "Apply", href: "/admissions/apply" },
      { title: "Requirements", href: "/admissions/requirements" },
      { title: "Scholarships", href: "/admissions/scholarships" },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    children: [
      { title: "Undergraduate", href: "/academics?level=ug" },
      { title: "Graduate", href: "/academics?level=grad" },
      { title: "Colleges", href: "/academics#colleges" },
    ],
  },
  {
    title: "Research & Publications",
    href: "/research",
    children: [
      { title: "Publications", href: "/research" },
      { title: "Journals", href: "/research?type=journal" },
      { title: "By SDG Tags", href: "/research?view=sdg" },
    ],
  },
  {
    title: "Student Services",
    href: "/student-services",
    children: [
      { title: "Registrar", href: "/student-services/registrar" },
      { title: "Guidance", href: "/student-services/guidance" },
      { title: "Financial Services", href: "/student-services/finance" },
    ],
  },
  {
    title: "Library & ARC",
    href: "/library",
    children: [
      { title: "OPAC Search", href: "/library/opac" },
      { title: "E-Resources", href: "/library/e-resources" },
      { title: "ARC Policies", href: "/library/policies" },
    ],
  },
  {
    title: "News & Events",
    href: "/news",
    children: [
      { title: "Latest News", href: "/news" },
      { title: "Events", href: "/news?tab=events" },
      { title: "Announcements", href: "/news?tab=announcements" },
    ],
  },
  {
    title: "Alumni & Careers",
    href: "/alumni-careers",
    children: [
      { title: "Alumni", href: "/alumni-careers#alumni" },
      { title: "Careers", href: "/alumni-careers#careers" },
      { title: "Industry Partners", href: "/alumni-careers#partners" },
    ],
  },
  { title: "Contact", href: "/contact" },
]

export const UTILITY_LINKS = [
  { label: "Login to myLPU", href: "/systems/mylpu" },
  { label: "Access Campus Mail", href: "/systems/campus-mail" },
  { label: "Search OPAC", href: "/library/opac" },
]
