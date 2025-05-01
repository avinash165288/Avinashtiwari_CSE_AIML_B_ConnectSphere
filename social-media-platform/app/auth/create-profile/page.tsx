"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Camera, Smile } from "lucide-react"

export default function CreateProfile() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [bio, setBio] = useState("")
  const [profileType, setProfileType] = useState("photo")
  const [avatarIndex, setAvatarIndex] = useState(0)

  // Dummy avatars
  const avatars = [
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the profile data
    // For demo purposes, we'll just redirect to the dashboard
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6">Create Your Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label className="text-white">Profile Picture</Label>

            <Tabs defaultValue="photo" onValueChange={setProfileType} className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="photo" className="data-[state=active]:bg-blue-600">
                  <Camera className="h-4 w-4 mr-2" />
                  Photo
                </TabsTrigger>
                <TabsTrigger value="avatar" className="data-[state=active]:bg-blue-600">
                  <Smile className="h-4 w-4 mr-2" />
                  Avatar
                </TabsTrigger>
                <TabsTrigger value="none" className="data-[state=active]:bg-blue-600">
                  <User className="h-4 w-4 mr-2" />
                  None
                </TabsTrigger>
              </TabsList>

              <TabsContent value="photo" className="flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-blue-800/30 flex items-center justify-center border-2 border-dashed border-blue-400">
                  <Camera className="h-8 w-8 text-blue-300" />
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                </div>
              </TabsContent>

              <TabsContent value="avatar" className="flex flex-wrap justify-center gap-2">
                {avatars.map((avatar, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`relative rounded-full overflow-hidden ${
                      avatarIndex === index ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-blue-900" : ""
                    }`}
                    onClick={() => setAvatarIndex(index)}
                  >
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={avatar || "/placeholder.svg"} alt={`Avatar ${index + 1}`} />
                      <AvatarFallback className="bg-blue-800 text-white">{index + 1}</AvatarFallback>
                    </Avatar>
                  </button>
                ))}
              </TabsContent>

              <TabsContent value="none" className="flex justify-center">
                <Avatar className="h-32 w-32">
                  <AvatarFallback className="bg-blue-800 text-white text-4xl">
                    <User className="h-16 w-16" />
                  </AvatarFallback>
                </Avatar>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Choose a unique username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-white/20 border-blue-400 text-white placeholder:text-blue-200"
            />
            <p className="text-xs text-blue-200">Your username must be unique and cannot be changed later.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="text-white">
              Bio
            </Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bg-white/20 border-blue-400 text-white placeholder:text-blue-200 min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  )
}
