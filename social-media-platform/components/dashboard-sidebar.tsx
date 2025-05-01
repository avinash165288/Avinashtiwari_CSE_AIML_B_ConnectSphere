import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, Search, MessageSquare, Bell, User, Users, Bookmark, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardSidebarProps {
  className?: string
}

export function DashboardSidebar({ className }: DashboardSidebarProps) {
  return (
    <aside className={cn("space-y-6", className)}>
      <nav className="space-y-1">
        <Button variant="ghost" className="w-full justify-start text-white" asChild>
          <Link href="/dashboard">
            <Home className="mr-3 h-5 w-5" />
            Home
          </Link>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white" asChild>
          <Link href="/search">
            <Search className="mr-3 h-5 w-5" />
            Explore
          </Link>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white" asChild>
          <Link href="/messages">
            <MessageSquare className="mr-3 h-5 w-5" />
            Messages
          </Link>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white" asChild>
          <Link href="/notifications">
            <Bell className="mr-3 h-5 w-5" />
            Notifications
          </Link>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white" asChild>
          <Link href="/profile">
            <User className="mr-3 h-5 w-5" />
            Profile
          </Link>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white" asChild>
          <Link href="/connections">
            <Users className="mr-3 h-5 w-5" />
            Connections
          </Link>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white" asChild>
          <Link href="/bookmarks">
            <Bookmark className="mr-3 h-5 w-5" />
            Bookmarks
          </Link>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white" asChild>
          <Link href="/settings">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
        </Button>
      </nav>

      <div className="pt-4 border-t border-blue-900">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Create Post</Button>
      </div>
    </aside>
  )
}
