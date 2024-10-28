'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useState } from "react"

export default function AdminHeader() {
  const { setTheme, theme } = useTheme()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <Button variant="ghost" size="icon" className="mr-4 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <div className="flex items-center flex-1">
          <Image src="/favicon.ico" alt="Logo" width={24} height={24} className="mr-2" />
          <h1 className="text-lg font-semibold">SemDeals Admin</h1>
        </div>
        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] md:w-[300px]"
            />
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Image
              src="/placeholder-user.jpg"
              alt="User avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="sr-only">User menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}