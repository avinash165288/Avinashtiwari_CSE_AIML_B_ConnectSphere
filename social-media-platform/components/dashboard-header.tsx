"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Home, MessageSquare, Bell, User, LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function DashboardHeader() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900 bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-slate-900 text-white border-blue-900">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                <Link href="/messages" className="flex items-center gap-2 text-lg font-semibold">
                  <MessageSquare className="h-5 w-5" />
                  Messages
                </Link>
                <Link href="/notifications" className="flex items-center gap-2 text-lg font-semibold">
                  <Bell className="h-5 w-5" />
                  Notifications
                </Link>
                <Link href="/profile" className="flex items-center gap-2 text-lg font-semibold">
                  <User className="h-5 w-5" />
                  Profile
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/dashboard" className="text-xl font-bold text-white">
            ConnectSphere
          </Link>
        </div>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search users, posts, and more..."
              className="w-full pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus-visible:ring-blue-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="text-white hidden sm:flex" asChild>
            <Link href="/dashboard">
              <Home className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="text-white hidden sm:flex" asChild>
            <Link href="/messages">
              <MessageSquare className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="text-white hidden sm:flex" asChild>
            <Link href="/notifications">
              <Bell className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="text-white md:hidden" asChild>
            <Link href="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback className="bg-blue-600">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-slate-900 border-blue-900 text-white">
              <DropdownMenuItem asChild>
                <Link href="/profile" className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-blue-900/50" />
              <DropdownMenuItem className="text-red-400 cursor-pointer" asChild>
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
