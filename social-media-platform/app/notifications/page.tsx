import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, UserPlus } from "lucide-react"
import Link from "next/link"

export default function NotificationsPage() {
  // Dummy notifications data
  const notifications = [
    {
      id: "notif1",
      type: "like",
      user: {
        id: "user1",
        name: "Jane Cooper",
        username: "janecooper",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      content: "liked your post",
      time: "2 minutes ago",
      read: false,
    },
    {
      id: "notif2",
      type: "follow",
      user: {
        id: "user2",
        name: "Alex Morgan",
        username: "alexmorgan",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      content: "started following you",
      time: "1 hour ago",
      read: false,
    },
    {
      id: "notif3",
      type: "comment",
      user: {
        id: "user3",
        name: "Taylor Swift",
        username: "taylorswift",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      content: 'commented on your post: "This is amazing!"',
      time: "3 hours ago",
      read: true,
    },
    {
      id: "notif4",
      type: "like",
      user: {
        id: "user4",
        name: "David Chen",
        username: "davidchen",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
      content: "liked your comment",
      time: "5 hours ago",
      read: true,
    },
    {
      id: "notif5",
      type: "follow",
      user: {
        id: "user5",
        name: "Sophia Williams",
        username: "sophiaw",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      content: "started following you",
      time: "1 day ago",
      read: true,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6 flex gap-6">
        <DashboardSidebar className="hidden lg:block w-64 flex-shrink-0" />

        <main className="flex-1 max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-blue-900 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-blue-900 flex items-center justify-between">
              <h1 className="text-xl font-bold text-white">Notifications</h1>
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                Mark all as read
              </Button>
            </div>

            <div className="divide-y divide-blue-900/30">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 flex items-start gap-3 ${notification.read ? "" : "bg-blue-950/20"}`}
                >
                  <div className="relative mt-1">
                    {notification.type === "like" && (
                      <div className="absolute -right-1 -bottom-1 bg-red-500 rounded-full p-1">
                        <Heart className="h-3 w-3 text-white" />
                      </div>
                    )}
                    {notification.type === "follow" && (
                      <div className="absolute -right-1 -bottom-1 bg-blue-500 rounded-full p-1">
                        <UserPlus className="h-3 w-3 text-white" />
                      </div>
                    )}
                    {notification.type === "comment" && (
                      <div className="absolute -right-1 -bottom-1 bg-green-500 rounded-full p-1">
                        <MessageCircle className="h-3 w-3 text-white" />
                      </div>
                    )}
                    <Avatar>
                      <AvatarImage src={notification.user.avatar || "/placeholder.svg"} alt={notification.user.name} />
                      <AvatarFallback className="bg-blue-600">{notification.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <p className="text-white">
                      <Link href={`/profile/${notification.user.username}`} className="font-semibold hover:underline">
                        {notification.user.name}
                      </Link>{" "}
                      {notification.content}
                    </p>
                    <p className="text-sm text-slate-400">{notification.time}</p>
                  </div>
                  {!notification.read && <span className="h-2 w-2 rounded-full bg-blue-600 mt-2"></span>}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
