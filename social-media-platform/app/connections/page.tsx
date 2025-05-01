import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"

export default function ConnectionsPage() {
  // Dummy connections data
  const followers = [
    {
      id: "user1",
      name: "Jane Cooper",
      username: "janecooper",
      avatar: "https://i.pravatar.cc/150?img=1",
      bio: "UX Designer | Coffee Enthusiast",
      isFollowing: true,
    },
    {
      id: "user2",
      name: "Alex Morgan",
      username: "alexmorgan",
      avatar: "https://i.pravatar.cc/150?img=2",
      bio: "Software Engineer at Tech Co.",
      isFollowing: false,
    },
    {
      id: "user3",
      name: "Taylor Swift",
      username: "taylorswift",
      avatar: "https://i.pravatar.cc/150?img=3",
      bio: "Digital Marketing Specialist",
      isFollowing: true,
    },
  ]

  const following = [
    {
      id: "user1",
      name: "Jane Cooper",
      username: "janecooper",
      avatar: "https://i.pravatar.cc/150?img=1",
      bio: "UX Designer | Coffee Enthusiast",
    },
    {
      id: "user3",
      name: "Taylor Swift",
      username: "taylorswift",
      avatar: "https://i.pravatar.cc/150?img=3",
      bio: "Digital Marketing Specialist",
    },
    {
      id: "user5",
      name: "Sophia Williams",
      username: "sophiaw",
      avatar: "https://i.pravatar.cc/150?img=5",
      bio: "Content Creator | Lifestyle",
    },
    {
      id: "user6",
      name: "Emma Johnson",
      username: "emmaj",
      avatar: "https://i.pravatar.cc/150?img=6",
      bio: "UX Designer | Coffee Enthusiast",
    },
  ]

  const suggestions = [
    {
      id: "user4",
      name: "David Chen",
      username: "davidchen",
      avatar: "https://i.pravatar.cc/150?img=4",
      bio: "Photographer | Traveler",
      mutualConnections: 3,
    },
    {
      id: "user7",
      name: "Michael Brown",
      username: "michaelb",
      avatar: "https://i.pravatar.cc/150?img=7",
      bio: "Software Engineer at Tech Co.",
      mutualConnections: 2,
    },
    {
      id: "user8",
      name: "Olivia Davis",
      username: "oliviad",
      avatar: "https://i.pravatar.cc/150?img=8",
      bio: "Digital Marketing Specialist",
      mutualConnections: 5,
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
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search connections"
                  className="w-full pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
            </div>

            <Tabs defaultValue="followers" className="w-full">
              <TabsList className="grid grid-cols-3 bg-slate-800 rounded-none">
                <TabsTrigger value="followers" className="data-[state=active]:bg-blue-600">
                  Followers
                </TabsTrigger>
                <TabsTrigger value="following" className="data-[state=active]:bg-blue-600">
                  Following
                </TabsTrigger>
                <TabsTrigger value="suggestions" className="data-[state=active]:bg-blue-600">
                  Suggestions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="followers" className="mt-0 divide-y divide-blue-900/30">
                {followers.map((user) => (
                  <div key={user.id} className="p-4 flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="bg-blue-600">{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Link href={`/profile/${user.username}`} className="font-semibold text-white hover:underline">
                          {user.name}
                        </Link>
                        <p className="text-sm text-slate-400">@{user.username}</p>
                        <p className="text-sm text-slate-300 mt-1">{user.bio}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant={user.isFollowing ? "outline" : "default"}
                      className={
                        user.isFollowing
                          ? "border-blue-400 text-white hover:bg-blue-800/20"
                          : "bg-blue-600 hover:bg-blue-700"
                      }
                    >
                      {user.isFollowing ? "Following" : "Follow"}
                    </Button>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="following" className="mt-0 divide-y divide-blue-900/30">
                {following.map((user) => (
                  <div key={user.id} className="p-4 flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="bg-blue-600">{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Link href={`/profile/${user.username}`} className="font-semibold text-white hover:underline">
                          {user.name}
                        </Link>
                        <p className="text-sm text-slate-400">@{user.username}</p>
                        <p className="text-sm text-slate-300 mt-1">{user.bio}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-blue-400 text-white hover:bg-blue-800/20">
                      Following
                    </Button>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="suggestions" className="mt-0 divide-y divide-blue-900/30">
                {suggestions.map((user) => (
                  <div key={user.id} className="p-4 flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="bg-blue-600">{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Link href={`/profile/${user.username}`} className="font-semibold text-white hover:underline">
                          {user.name}
                        </Link>
                        <p className="text-sm text-slate-400">@{user.username}</p>
                        <p className="text-sm text-slate-300 mt-1">{user.bio}</p>
                        <p className="text-xs text-blue-400 mt-1">{user.mutualConnections} mutual connections</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Follow
                    </Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
