"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { User2, BookOpen, ClipboardCheck, Library, CreditCard, MessageSquareText, Settings, Home } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const items = [
  { title: "Dashboard", href: "/student/dashboard", icon: Home },
  { title: "Courses", href: "/student/courses", icon: BookOpen },
  { title: "Records", href: "/student/records", icon: ClipboardCheck },
  { title: "Resources", href: "/student/resources", icon: Library },
  { title: "Messages", href: "/student/messages", icon: MessageSquareText },
  { title: "Billing", href: "/student/billing", icon: CreditCard },
  { title: "Profile", href: "/student/profile", icon: Settings },
]

export function StudentShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar className="bg-amber-50">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2">
              <User2 className="h-4 w-4" />
              Student Portal
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((it) => (
                  <SidebarMenuItem key={it.href}>
                    <SidebarMenuButton asChild isActive={pathname === it.href}>
                      <Link href={it.href}>
                        <it.icon />
                        <span>{it.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="text-xs text-muted-foreground">
          <div className="rounded-md border bg-white p-2">
            <div className="font-medium text-amber-900">Helpful</div>
            <div className="mt-1">
              <a className="underline" href="/systems/mylpu">myLPU</a> •{" "}
              <a className="underline" href="/systems/campus-mail">Campus Mail</a>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="text-sm text-muted-foreground">
            Student Portal
          </div>
          <div className="ml-auto">
            <Button asChild variant="outline" size="sm">
              <a href="/library/opac">Open OPAC</a>
            </Button>
          </div>
        </header>
        <div className="p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
