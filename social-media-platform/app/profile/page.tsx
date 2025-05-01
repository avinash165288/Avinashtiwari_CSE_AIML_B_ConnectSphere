"use client"

import type React from "react"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PostFeed } from "@/components/post-feed"
import { Edit, MapPin, Calendar, LinkIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProfilePage() {
  // Dummy user data
  const [user, setUser] = useState({
    name: "John Doe",
    username: "johndoe",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Software Developer | Tech Enthusiast | Coffee Lover",
    location: "San Francisco, CA",
    website: "johndoe.dev",
    joinedDate: "Joined January 2023",
    following: 245,
    followers: 1024,
    coverImage: "https://i.pravatar.cc/1200?img=30",
  })

  const [editForm, setEditForm] = useState({
    name: user.name,
    bio: user.bio,
    location: user.location,
    website: user.website,
  })

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setUser((prev) => ({ ...prev, ...editForm }))
    setIsDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6 flex gap-6">
        <DashboardSidebar className="hidden lg:block w-64 flex-shrink-0" />

        <main className="flex-1 max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-blue-900 rounded-lg overflow-hidden mb-6">
            {/* Cover image */}
            <div className="h-48 bg-blue-900/30 relative">
              <img src={user.coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-4 right-4 bg-slate-900/50 backdrop-blur-sm border-slate-700 text-white"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-900 border-blue-900 text-white">
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription className="text-slate-400">
                      Make changes to your profile information.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={editForm.name}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-white">
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={editForm.bio}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-700 text-white min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-white">
                        Location
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        value={editForm.location}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-white">
                        Website
                      </Label>
                      <Input
                        id="website"
                        name="website"
                        value={editForm.website}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-700 text-white"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                        className="border-blue-400 text-white hover:bg-blue-800/20"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Profile info */}
            <div className="px-6 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-12 sm:-mt-16 mb-4">
                <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                  <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-slate-900">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="bg-blue-600 text-3xl">JD</AvatarFallback>
                  </Avatar>
                  <div className="mt-2 sm:mt-0 sm:mb-2">
                    <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                    <p className="text-slate-400">@{user.username}</p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 flex gap-4">
                  <div className="text-center">
                    <p className="font-bold text-white">{user.following.toLocaleString()}</p>
                    <p className="text-sm text-slate-400">Following</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-white">{user.followers.toLocaleString()}</p>
                    <p className="text-sm text-slate-400">Followers</p>
                  </div>
                </div>
              </div>

              <p className="text-white mb-4">{user.bio}</p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                {user.location && (
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {user.location}
                  </div>
                )}
                {user.website && (
                  <div className="flex items-center">
                    <LinkIcon className="h-4 w-4 mr-1" />
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {user.website}
                    </a>
                  </div>
                )}
                {user.joinedDate && (
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {user.joinedDate}
                  </div>
                )}
              </div>
            </div>
          </div>

          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6 bg-slate-800">
              <TabsTrigger value="posts" className="data-[state=active]:bg-blue-600">
                Posts
              </TabsTrigger>
              <TabsTrigger value="media" className="data-[state=active]:bg-blue-600">
                Media
              </TabsTrigger>
              <TabsTrigger value="likes" className="data-[state=active]:bg-blue-600">
                Likes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="mt-0">
              <PostFeed />
            </TabsContent>

            <TabsContent value="media" className="mt-0">
              <div className="text-center py-8 text-slate-400">
                <p>Media posts will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="likes" className="mt-0">
              <div className="text-center py-8 text-slate-400">
                <p>Liked posts will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
