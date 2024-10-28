'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronRight, LayoutDashboard, Search, BarChart, FolderKanban, FileText, Settings, LogOut } from "lucide-react"

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "SEO Tools", href: "/admin/seo-tools", icon: Search },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart },
  { name: "Projects", href: "/admin/projects", icon: FolderKanban },
  { name: "Blog Pages", href: "/admin/blog", icon: FileText },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-muted/40",
        isCollapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronRight className={cn("h-6 w-6 transition-all", isCollapsed && "rotate-180")} />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-2">
          {sidebarLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={pathname === link.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isCollapsed && "justify-center px-0"
                )}
              >
                <link.icon className={cn("h-5 w-5", !isCollapsed && "mr-2")} />
                {!isCollapsed && <span>{link.name}</span>}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="border-t p-2">
        <Button variant="ghost" className="w-full justify-start">
          <LogOut className={cn("h-5 w-5", !isCollapsed && "mr-2")} />
          {!isCollapsed && <span>Logout</span>}
        </Button>
      </div>
    </div>
  )
}