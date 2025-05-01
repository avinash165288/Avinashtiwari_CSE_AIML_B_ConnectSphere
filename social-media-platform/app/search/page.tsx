"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search } from "lucide-react"
import Link from "next/link"

// Dummy data for search results
const dummyUsers = [
  {
    id: "user1",
    name: "Jane Cooper",
    username: "janecooper",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "UX Designer | Coffee Enthusiast",
    followers: 1243,
  },
  {
    id: "user2",
    name: "Alex Morgan",
    username: "alexmorgan",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Software Engineer at Tech Co.",
    followers: 876,
  },
  {
    id: "user3",
    name: "Taylor Swift",
    username: "taylorswift",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Digital Marketing Specialist",
    followers: 2345,
  },
  {
    id: "user4",
    name: "David Chen",
    username: "davidchen",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Photographer | Traveler",
    followers: 543,
  },
  {
    id: "user5",
    name: "Sophia Williams",
    username: "sophiaw",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Content Creator | Lifestyle",
    followers: 987,
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6 flex gap-6">
        <DashboardSidebar className="hidden lg:block w-64 flex-shrink-0" />

        <main className="flex-1 max-w-3xl mx-auto">
          <div className="mb-6">
            <form className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="search"
                placeholder="Search users, posts, and more..."
                className="w-full pl-10 py-6 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus-visible:ring-blue-600 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          <Tabs defaultValue="people" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6 bg-slate-800">
              <TabsTrigger value="people" className="data-[state=active]:bg-blue-600">
                People
              </TabsTrigger>
              <TabsTrigger value="posts" className="data-[state=active]:bg-blue-600">
                Posts
              </TabsTrigger>
              <TabsTrigger value="tags" className="data-[state=active]:bg-blue-600">
                Tags
              </TabsTrigger>
            </TabsList>

            <TabsContent value="people" className="space-y-4 mt-0">
              {dummyUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-start justify-between gap-4 p-4 bg-slate-900 border border-blue-900 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback className="bg-blue-600 text-lg">{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <Link
                        href={`/profile/${user.username}`}
                        className="font-semibold text-white hover:underline text-lg"
                      >
                        {user.name}
                      </Link>
                      <p className="text-sm text-slate-400">@{user.username}</p>
                      <p className="text-sm text-slate-300 mt-1">{user.bio}</p>
                      <p className="text-xs text-slate-400 mt-1">{user.followers.toLocaleString()} followers</p>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Follow</Button>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="posts" className="mt-0">
              <div className="text-center py-8 text-slate-400">
                <p>Search for posts by entering keywords above.</p>
              </div>
            </TabsContent>

            <TabsContent value="tags" className="mt-0">
              <div className="text-center py-8 text-slate-400">
                <p>Search for hashtags by entering keywords above.</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
