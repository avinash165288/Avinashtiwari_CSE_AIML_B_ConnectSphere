import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { PostFeed } from "@/components/post-feed"
import { SuggestedUsers } from "@/components/suggested-users"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6 flex gap-6">
        <DashboardSidebar className="hidden lg:block w-64 flex-shrink-0" />

        <main className="flex-1 max-w-2xl mx-auto">
          <PostFeed />
        </main>

        <aside className="hidden xl:block w-80 flex-shrink-0">
          <SuggestedUsers />
        </aside>
      </div>
    </div>
  )
}
