"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Desktop-only contextual sidebar using shadcn/ui sidebar primitives [^4]
export function ContextualLayout({
  menu = [
    { title: "Overview", href: "#" },
    { title: "Curriculum", href: "#curriculum" },
    { title: "Requirements", href: "#requirements" },
    { title: "Downloads", href: "#downloads" },
    { title: "Contact", href: "/contact" },
  ],
  children,
  title = "Context",
}: {
  title?: string
  menu?: { title: string; href: string }[]
  children: React.ReactNode
}) {
  return (
    <div className="hidden xl:block">
      <SidebarProvider>
        <div className="flex">
          <Sidebar className="bg-amber-50">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>{title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menu.map((m) => (
                      <SidebarMenuItem key={m.href}>
                        <SidebarMenuButton asChild>
                          <Link href={m.href} className="text-sm">{m.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="bg-background p-6">{children}</SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
