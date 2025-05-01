"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

// Dummy data for suggested users
const initialSuggestedUsers = [
  {
    id: "user6",
    name: "Emma Johnson",
    username: "emmaj",
    avatar: "https://i.pravatar.cc/150?img=6",
    bio: "UX Designer | Coffee Enthusiast",
    isFollowing: false,
  },
  {
    id: "user7",
    name: "Michael Brown",
    username: "michaelb",
    avatar: "https://i.pravatar.cc/150?img=7",
    bio: "Software Engineer at Tech Co.",
    isFollowing: false,
  },
  {
    id: "user8",
    name: "Olivia Davis",
    username: "oliviad",
    avatar: "https://i.pravatar.cc/150?img=8",
    bio: "Marketing Specialist | Travel Lover",
    isFollowing: false,
  },
]

// Changed from default export to named export
export function SuggestedUsers() {
  const [suggestedUsers, setSuggestedUsers] = useState(initialSuggestedUsers)
  const { toast } = useToast()

  const handleFollow = (id: string) => {
    setSuggestedUsers((prevUsers) => prevUsers.map((user) => (user.id === id ? { ...user, isFollowing: true } : user)))
    toast({
      title: "Followed!",
      description: "You are now following this user.",
    })
  }

  return (
    <Card className="bg-slate-900 border-blue-900 text-white">
      <CardHeader>
        <CardTitle className="text-lg">Who to follow</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="bg-blue-600">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <Link href={`/profile/${user.username}`} className="font-semibold hover:underline">
                  {user.name}
                </Link>
                <p className="text-sm text-slate-400">@{user.username}</p>
                <p className="text-sm text-slate-300 mt-1">{user.bio}</p>
              </div>
            </div>
            <Button
              size="sm"
              className={user.isFollowing ? "bg-slate-700 hover:bg-slate-600" : "bg-blue-600 hover:bg-blue-700"}
              onClick={() => handleFollow(user.id)}
              disabled={user.isFollowing}
            >
              {user.isFollowing ? "Following" : "Follow"}
            </Button>
          </div>
        ))}

        <Button variant="ghost" className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-950/50">
          Show more
        </Button>
      </CardContent>
    </Card>
  )
}
