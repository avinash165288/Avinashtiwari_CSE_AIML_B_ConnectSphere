import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"
import Link from "next/link"

export default function BookmarksPage() {
  // Dummy bookmarked posts
  const bookmarkedPosts = [
    {
      id: 1,
      user: {
        id: "user1",
        name: "Jane Cooper",
        username: "janecooper",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      content:
        "Just launched my new portfolio website! Check it out and let me know what you think. #webdesign #portfolio",
      image: "https://i.pravatar.cc/600?img=20",
      likes: 42,
      comments: 12,
      timestamp: "2h ago",
    },
    {
      id: 3,
      user: {
        id: "user3",
        name: "Taylor Swift",
        username: "taylorswift",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      content:
        "What's your favorite productivity hack? I've been using the Pomodoro technique and it's been a game-changer for me.",
      poll: {
        options: [
          { id: 1, text: "Pomodoro Technique", votes: 45 },
          { id: 2, text: "Time Blocking", votes: 32 },
          { id: 3, text: "To-do Lists", votes: 28 },
          { id: 4, text: "Other", votes: 15 },
        ],
        totalVotes: 120,
        voted: false,
      },
      likes: 76,
      comments: 34,
      timestamp: "6h ago",
    },
    {
      id: 5,
      user: {
        id: "user5",
        name: "Sophia Williams",
        username: "sophiaw",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      content: "Beautiful sunset at the beach today! 🌅",
      image: "https://i.pravatar.cc/600?img=25",
      likes: 124,
      comments: 18,
      timestamp: "1d ago",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6 flex gap-6">
        <DashboardSidebar className="hidden lg:block w-64 flex-shrink-0" />

        <main className="flex-1 max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-blue-900 rounded-lg overflow-hidden mb-6">
            <div className="p-4 border-b border-blue-900">
              <h1 className="text-xl font-bold text-white">Bookmarks</h1>
              <p className="text-sm text-slate-400">Posts you've saved</p>
            </div>

            <div className="divide-y divide-blue-900/30">
              {bookmarkedPosts.map((post) => (
                <Card key={post.id} className="bg-transparent border-none rounded-none text-white">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                        <AvatarFallback className="bg-blue-600">{post.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Link href={`/profile/${post.user.username}`} className="font-semibold hover:underline">
                          {post.user.name}
                        </Link>
                        <p className="text-sm text-slate-400">
                          @{post.user.username} · {post.timestamp}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="mb-3">{post.content}</p>

                    {post.image && (
                      <div className="mt-3 rounded-lg overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt="Post image"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}

                    {post.poll && (
                      <div className="mt-4 space-y-2">
                        {post.poll.options.map((option) => {
                          const percentage = Math.round((option.votes / post.poll.totalVotes) * 100)
                          return (
                            <div key={option.id} className="relative">
                              <div className="flex justify-between mb-1">
                                <span>{option.text}</span>
                                <span>{percentage}%</span>
                              </div>
                              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${percentage}%` }} />
                              </div>
                            </div>
                          )
                        })}
                        <p className="text-sm text-slate-400 mt-2">{post.poll.totalVotes} votes</p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="border-t border-blue-900/30 pt-3">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm" className="text-slate-300">
                        <Heart className="h-4 w-4 mr-2" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-300">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-300">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-400">
                        <Bookmark className="h-4 w-4 mr-2 fill-current" />
                        Saved
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
