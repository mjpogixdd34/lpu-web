export type College = { id: string; name: string; slug: string; description: string; image?: string }
export type Program = { slug: string; title: string; level: "Undergraduate" | "Graduate"; college: string; summary: string; image?: string }
export type Publication = { slug: string; title: string; type: "Journal" | "Conference" | "Report"; year: number; tags: string[]; abstract: string; image?: string }
export type NewsItem = { slug: string; title: string; kind: "News" | "Event" | "Announcement"; date: string; excerpt: string; image?: string; content: string }
export type Service = { slug: string; title: string; summary: string; image?: string }
export type Campus = { slug: string; name: string; city: string; description: string; image?: string }
export type EResource = { id: string; title: string; provider: "Gale" | "Emerald" | "Cambridge"; type: "eBook" | "Journal" | "Database"; year?: number; description?: string }

export const COLLEGES: College[] = [
  { id: "engineering", name: "College of Engineering", slug: "engineering", description: "Civil, Electrical, Mechanical, and more.", image: "/engineering-lab.png" },
  { id: "business", name: "College of Business", slug: "business", description: "Accountancy, Marketing, and Entrepreneurship.", image: "/diverse-business-students.png" },
  { id: "ccs", name: "College of Computer Studies", slug: "ccs", description: "Computer Science, IT, IS, Data Science.", image: "/computer-science-students.png" },
  { id: "cas", name: "College of Arts & Sciences", slug: "cas", description: "Communication, Psychology, and more.", image: "/liberal-arts-collage.png" },
]

export const PROGRAMS: Program[] = [
  { slug: "bs-computer-science", title: "BS Computer Science", level: "Undergraduate", college: "ccs", summary: "AI, systems, and software engineering tracks.", image: "/computer-science-students.png" },
  { slug: "bs-civil-engineering", title: "BS Civil Engineering", level: "Undergraduate", college: "engineering", summary: "Build infrastructure for tomorrow.", image: "/placeholder-w4nkp.png" },
  { slug: "bs-accountancy", title: "BS Accountancy", level: "Undergraduate", college: "business", summary: "CPA board exam-ready curriculum.", image: "/accountancy-students.png" },
  { slug: "ba-communication", title: "BA Communication", level: "Undergraduate", college: "cas", summary: "Media, PR, and digital storytelling.", image: "/communication-students.png" },
  { slug: "ms-data-science", title: "MS Data Science", level: "Graduate", college: "ccs", summary: "Advanced analytics and machine learning.", image: "/data-science-grad-students.png" },
]

export const PUBLICATIONS: Publication[] = [
  { slug: "ai-inclusive-edu", title: "AI for Inclusive Education", type: "Journal", year: 2024, tags: ["SDG 4 Quality Education"], abstract: "Improving accessibility through AI tools.", image: "/ai-education.png" },
  { slug: "resilient-urban-mobility", title: "Resilient Urban Mobility", type: "Conference", year: 2023, tags: ["SDG 11 Cities", "SDG 13 Climate Action"], abstract: "Transport planning amid climate risks.", image: "/urban-mobility.png" },
  { slug: "smi", title: "Sustainable Manufacturing Index", type: "Report", year: 2022, tags: ["SDG 9 Industry"], abstract: "Assessing industry sustainability KPIs.", image: "/modern-manufacturing-facility.png" },
  { slug: "edtech-equity", title: "EdTech & Equity", type: "Journal", year: 2025, tags: ["SDG 4 Quality Education"], abstract: "Equitable outcomes with digital tools.", image: "/edtech-concept.png" },
]

export const NEWS: NewsItem[] = [
  { slug: "research-impact-ranking", title: "University ranks in top research impact", kind: "News", date: "2025-08-02", excerpt: "Our scholars advance SDG-focused research.", image: "/research-impact.png", content: "Long-form content about rankings and impact across colleges." },
  { slug: "hackathon-winners-2025", title: "Hackathon winners announced", kind: "Event", date: "2025-09-14", excerpt: "Student teams built innovative apps.", image: "/hackathon-winners.png", content: "Event recap, winners, photos, and judge comments." },
  { slug: "alumni-career-fair-2025", title: "Alumni Career Fair 2025", kind: "Event", date: "2025-10-05", excerpt: "Meet recruiters and industry partners.", image: "/career-fair.png", content: "Schedule, participating companies, registration steps." },
  { slug: "green-campus-initiative", title: "Green Campus Initiative", kind: "Announcement", date: "2025-07-12", excerpt: "Sustainability projects launching this term.", image: "/lush-green-campus.png", content: "Details and volunteer opportunities." },
]

export const SERVICES: Service[] = [
  { slug: "registrar", title: "Registrar", summary: "Records, grades, transcripts, enrollment forms.", image: "/registrar-office.png" },
  { slug: "guidance", title: "Guidance", summary: "Counseling, wellness, student development.", image: "/placeholder-gg5ux.png" },
  { slug: "finance", title: "Financial Services", summary: "Billing, fees, scholarships, refunds.", image: "/finance-office.png" },
]

export const CAMPUSES: Campus[] = [
  { slug: "manila", name: "LPU Manila", city: "Manila", description: "Historic urban campus tuned for industry linkages.", image: "/manila-campus.png" },
  { slug: "laguna", name: "LPU Laguna", city: "Laguna", description: "Tech-forward facilities and research hubs.", image: "/placeholder.svg?height=180&width=320" },
]

export const ERESOURCES: EResource[] = [
  { id: "gale-edu-101", title: "Education Source", provider: "Gale", type: "Database", description: "Peer-reviewed education resources." },
  { id: "gale-ebk-green", title: "Green Cities Handbook", provider: "Gale", type: "eBook", year: 2021, description: "Urban planning for sustainability." },
  { id: "emerald-ba", title: "Business Analytics Journal", provider: "Emerald", type: "Journal", year: 2022, description: "Quarterly on analytics." },
  { id: "cambridge-ds", title: "Data Science Insights", provider: "Cambridge", type: "Journal", year: 2023, description: "Research in data science applications." },
]

export const SDG_TAGS = ["SDG 4 Quality Education", "SDG 9 Industry", "SDG 11 Cities", "SDG 13 Climate Action"]

// Aggregated global search index
export const SEARCH_INDEX = {
  programs: PROGRAMS.map(p => ({ type: "Program" as const, title: p.title, href: `/academics/${p.slug}`, text: `${p.summary} ${p.level} ${p.college}` })),
  publications: PUBLICATIONS.map(pub => ({ type: "Publication" as const, title: pub.title, href: `/research/publications/${pub.slug}`, text: `${pub.abstract} ${pub.type} ${pub.year} ${(pub.tags || []).join(" ")}` })),
  news: NEWS.map(n => ({ type: "News" as const, title: n.title, href: `/news/${n.slug}`, text: `${n.excerpt} ${n.kind} ${n.date}` })),
  services: SERVICES.map(s => ({ type: "Service" as const, title: s.title, href: `/student-services/${s.slug}`, text: s.summary })),
  pages: [
    { type: "Page" as const, title: "Admissions", href: "/admissions", text: "apply requirements scholarships" },
    { type: "Page" as const, title: "Library OPAC", href: "/library/opac", text: "search title author keyword ebook print" },
    { type: "Page" as const, title: "E-Resources", href: "/library/e-resources", text: "Gale Emerald Cambridge journals databases ebooks" },
    { type: "Page" as const, title: "About", href: "/about", text: "profile governance campuses" },
  ],
}
