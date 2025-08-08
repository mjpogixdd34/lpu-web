"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { ChevronDown, ChevronRight, Mail, Menu, Search, SquareArrowOutUpRight, UserSquare2, LibraryBig, PanelLeftOpen } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/components/auth-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import { NAV_ITEMS, UTILITY_LINKS } from "./navigation-data"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileQuery, setMobileQuery] = useState("")
  const router = useRouter()
  const { user, logout } = useAuth()

  function goSearch() {
    const q = mobileQuery.trim()
    setMobileOpen(false)
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search")
  }

  return (
    <header
      className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75"
      role="banner"
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded bg-amber-100 px-3 py-1 text-sm text-amber-900">
        Skip to content
      </a>
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Mobile/Tablet Menu */}
          <div className="xl:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[90vw] max-w-sm overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-left">University Navigation</SheetTitle>
                </SheetHeader>

                <div className="mt-4">
                  {/* Utility links first */}
                  <div className="grid gap-2">
                    {UTILITY_LINKS.map((u) => (
                      <Link
                        key={u.href}
                        href={u.href}
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex items-center justify-between rounded-md border bg-muted px-3 py-2 text-sm hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
                      >
                        <span>{u.label}</span>
                        <SquareArrowOutUpRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                  {!user ? (
                    <a href="/auth/login" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex w-full items-center justify-between rounded-md border bg-amber-700 px-3 py-2 text-sm text-white hover:bg-amber-800">
                      <span>Student Login</span>
                    </a>
                  ) : (
                    <a href="/student/dashboard" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm hover:bg-muted">
                      <span>Student Dashboard</span>
                      <ChevronRight className="h-4 w-4 opacity-70" />
                    </a>
                  )}
                  {/* Search */}
                  <div className="mt-4">
                    <label htmlFor="mobile-site-search" className="mb-1 block text-sm font-medium">
                      Site Search
                    </label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="mobile-site-search"
                        placeholder="Search site"
                        aria-label="Search site"
                        value={mobileQuery}
                        onChange={(e) => setMobileQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && goSearch()}
                      />
                      <Button size="icon" aria-label="Search" onClick={goSearch}>
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {/* Accordion-based nav hierarchy */}
                  <nav aria-label="Primary" className="mt-4">
                    <Accordion type="multiple" className="w-full">
                      {NAV_ITEMS.map((item) =>
                        item.children ? (
                          <AccordionItem key={item.title} value={item.title}>
                            <AccordionTrigger className="text-left">
                              <span className="font-medium">{item.title}</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="grid gap-1 pl-2">
                                {item.children.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={() => setMobileOpen(false)}
                                      className={cn(
                                        "flex items-center justify-between rounded px-2 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600",
                                        pathname === child.href && "bg-muted"
                                      )}
                                    >
                                      <span>{child.title}</span>
                                      <ChevronRight className="h-4 w-4 opacity-70" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <div key={item.title} className="py-1">
                            <Link
                              href={item.href ?? "#"}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                "block rounded px-2 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600",
                                pathname === item.href && "bg-muted"
                              )}
                            >
                              {item.title}
                            </Link>
                          </div>
                        )
                      )}
                    </Accordion>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Branding */}
          <Link href="/" className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600">
            <PanelLeftOpen className="h-6 w-6 text-amber-700 transition-transform group-hover:-translate-x-0.5" aria-hidden />
            <span className="font-semibold tracking-tight text-amber-900">Lighthouse Polytechnic University</span>
            <span className="sr-only">Home</span>
          </Link>
        </div>

        {/* Utility links visible on md+ */}
        <div className="hidden md:flex items-center gap-2">
          <a href="/systems/mylpu" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600">
            <UserSquare2 className="h-4 w-4" aria-hidden />
            <span>Login to myLPU</span>
          </a>
          <a href="/systems/campus-mail" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600">
            <Mail className="h-4 w-4" aria-hidden />
            <span>Access Campus Mail</span>
          </a>
          <a href="/library/opac" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600">
            <LibraryBig className="h-4 w-4" aria-hidden />
            <span>Search OPAC</span>
          </a>
          {!user ? (
            <a href="/auth/login" className="inline-flex items-center gap-2 rounded-md bg-amber-700 px-3 py-2 text-sm text-white hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600">
              <span>Student Login</span>
            </a>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild><a href="/student/dashboard">Student Dashboard</a></DropdownMenuItem>
                <DropdownMenuItem asChild><a href="/student/profile">Profile</a></DropdownMenuItem>
                <DropdownMenuItem asChild><a href="/auth/logout">Logout</a></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-4">
          <DesktopNav />
        </div>
      </div>
    </header>
  )
}

function DesktopNav() {
  const pathname = usePathname()
  return (
    <nav aria-label="Global">
      <NavigationMenu>
        <NavigationMenuList>
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="gap-1">
                  {item.title}
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[700px] grid-cols-2 gap-2 p-3">
                    {item.children.map((child) => (
                      <NavigationMenuLink asChild key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "group grid h-full w-full items-start gap-1 rounded-md p-3 text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600",
                            pathname === child.href && "bg-accent"
                          )}
                        >
                          <div className="font-medium group-hover:underline">{child.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {child.description ?? "Explore more"}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuLink key={item.title} asChild>
                <Link
                  href={item.href ?? "#"}
                  className={cn(
                    "inline-flex h-9 items-center rounded-md px-3 text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600",
                    pathname === item.href && "bg-accent"
                  )}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
