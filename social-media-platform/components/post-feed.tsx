"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, MessageCircle, Share2, Bookmark, ImageIcon, Mic, BarChart2, Send } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

// Dummy data for posts
const initialPosts = [
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
    liked: false,
    bookmarked: false,
    comments: 12,
    timestamp: "2h ago",
  },
  {
    id: 2,
    user: {
      id: "user2",
      name: "Alex Morgan",
      username: "alexmorgan",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    content: "Working on a new project with an amazing team. Can't wait to share more details soon!",
    likes: 28,
    liked: false,
    bookmarked: false,
    comments: 5,
    timestamp: "4h ago",
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
        { id: 1, text: "Pomodoro Technique", votes: 45, selected: false },
        { id: 2, text: "Time Blocking", votes: 32, selected: false },
        { id: 3, text: "To-do Lists", votes: 28, selected: false },
        { id: 4, text: "Other", votes: 15, selected: false },
      ],
      totalVotes: 120,
      voted: false,
    },
    likes: 76,
    liked: false,
    bookmarked: false,
    comments: 34,
    timestamp: "6h ago",
  },
  {
    id: 4,
    user: {
      id: "user4",
      name: "David Chen",
      username: "davidchen",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    content:
      "Just finished reading an amazing book on artificial intelligence. Highly recommend it to anyone interested in the field!",
    likes: 53,
    liked: false,
    bookmarked: false,
    comments: 8,
    timestamp: "12h ago",
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
    liked: false,
    bookmarked: false,
    comments: 18,
    timestamp: "1d ago",
  },
]

// Trending posts
const trendingPosts = [
  {
    id: 6,
    user: {
      id: "user6",
      name: "Emma Johnson",
      username: "emmaj",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    content:
      "🚀 Just hit 1 million followers! Thank you all for your support on this incredible journey. #Milestone #Grateful",
    likes: 3542,
    liked: false,
    bookmarked: false,
    comments: 421,
    timestamp: "5h ago",
  },
  {
    id: 7,
    user: {
      id: "user7",
      name: "Michael Brown",
      username: "michaelb",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    content:
      "Breaking: Major tech company announces revolutionary AI assistant that can understand and respond to complex human emotions. #TechNews #AI",
    likes: 2187,
    liked: false,
    bookmarked: false,
    comments: 312,
    timestamp: "8h ago",
  },
  {
    id: 8,
    user: {
      id: "user8",
      name: "Olivia Davis",
      username: "oliviad",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    content: "Poll: What's your favorite programming language in 2023?",
    poll: {
      options: [
        { id: 1, text: "JavaScript", votes: 1245, selected: false },
        { id: 2, text: "Python", votes: 982, selected: false },
        { id: 3, text: "TypeScript", votes: 876, selected: false },
        { id: 4, text: "Other", votes: 543, selected: false },
      ],
      totalVotes: 3646,
      voted: false,
    },
    likes: 1876,
    liked: false,
    bookmarked: false,
    comments: 245,
    timestamp: "1d ago",
  },
]

export function PostFeed() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPostContent, setNewPostContent] = useState("")
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false)
  const [isPollDialogOpen, setIsPollDialogOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [pollOptions, setPollOptions] = useState(["", "", ""])
  const [activeTab, setActiveTab] = useState("all")
  const { toast } = useToast()

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPostContent.trim()) return

    const newPost = {
      id: Date.now(),
      user: {
        id: "currentUser",
        name: "John Doe",
        username: "johndoe",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      content: newPostContent,
      likes: 0,
      liked: false,
      bookmarked: false,
      comments: 0,
      timestamp: "Just now",
    }

    setPosts([newPost, ...posts])
    setNewPostContent("")
    toast({
      title: "Post Created",
      description: "Your post has been published successfully!",
    })
  }

  const handleSubmitImagePost = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPostContent.trim() || !imageUrl.trim()) return

    const newPost = {
      id: Date.now(),
      user: {
        id: "currentUser",
        name: "John Doe",
        username: "johndoe",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      content: newPostContent,
      image: imageUrl,
      likes: 0,
      liked: false,
      bookmarked: false,
      comments: 0,
      timestamp: "Just now",
    }

    setPosts([newPost, ...posts])
    setNewPostContent("")
    setImageUrl("")
    setIsImageDialogOpen(false)
    toast({
      title: "Image Post Created",
      description: "Your image post has been published successfully!",
    })
  }

  const handleSubmitPollPost = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPostContent.trim() || pollOptions.filter((option) => option.trim()).length < 2) return

    const filteredOptions = pollOptions.filter((option) => option.trim())

    const newPost = {
      id: Date.now(),
      user: {
        id: "currentUser",
        name: "John Doe",
        username: "johndoe",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      content: newPostContent,
      poll: {
        options: filteredOptions.map((option, index) => ({
          id: index + 1,
          text: option,
          votes: 0,
          selected: false,
        })),
        totalVotes: 0,
        voted: false,
      },
      likes: 0,
      liked: false,
      bookmarked: false,
      comments: 0,
      timestamp: "Just now",
    }

    setPosts([newPost, ...posts])
    setNewPostContent("")
    setPollOptions(["", "", ""])
    setIsPollDialogOpen(false)
    toast({
      title: "Poll Created",
      description: "Your poll has been published successfully!",
    })
  }

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
            liked: !post.liked,
          }
        }
        return post
      }),
    )
  }

  const handleBookmark = (postId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            bookmarked: !post.bookmarked,
          }
        }
        return post
      }),
    )
    toast({
      title: (post) => (post.bookmarked ? "Removed from Bookmarks" : "Added to Bookmarks"),
      description: (post) =>
        post.bookmarked
          ? "This post has been removed from your bookmarks."
          : "This post has been added to your bookmarks.",
    })
  }

  const handleVote = (postId: number, optionId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId && post.poll && !post.poll.voted) {
          const updatedOptions = post.poll.options.map((option) => {
            if (option.id === optionId) {
              return { ...option, votes: option.votes + 1, selected: true }
            }
            return option
          })

          return {
            ...post,
            poll: {
              ...post.poll,
              options: updatedOptions,
              totalVotes: post.poll.totalVotes + 1,
              voted: true,
            },
          }
        }
        return post
      }),
    )
    toast({
      title: "Vote Recorded",
      description: "Your vote has been recorded successfully!",
    })
  }

  const handleAddPollOption = () => {
    setPollOptions([...pollOptions, ""])
  }

  const handlePollOptionChange = (index: number, value: string) => {
    const newOptions = [...pollOptions]
    newOptions[index] = value
    setPollOptions(newOptions)
  }

  const handleRemovePollOption = (index: number) => {
    if (pollOptions.length <= 2) return
    const newOptions = [...pollOptions]
    newOptions.splice(index, 1)
    setPollOptions(newOptions)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-slate-900 border-blue-900 text-white">
        <CardHeader className="pb-3">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Your profile" />
              <AvatarFallback className="bg-blue-600">JD</AvatarFallback>
            </Avatar>
            <Textarea
              placeholder="What's on your mind?"
              className="flex-1 bg-slate-800/50 border-slate-700 resize-none focus-visible:ring-blue-600"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardFooter className="border-t border-blue-900/30 pt-3 flex justify-between">
          <div className="flex gap-2">
            <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-slate-300">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Image
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-blue-900 text-white">
                <DialogHeader>
                  <DialogTitle>Create Image Post</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmitImagePost} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="post-content" className="text-white">
                      Post Content
                    </Label>
                    <Textarea
                      id="post-content"
                      placeholder="What's on your mind?"
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image-url" className="text-white">
                      Image URL
                    </Label>
                    <Input
                      id="image-url"
                      placeholder="Enter image URL"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsImageDialogOpen(false)}
                      className="border-blue-400 text-white hover:bg-blue-800/20"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={!newPostContent.trim() || !imageUrl.trim()}
                    >
                      Post
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={isPollDialogOpen} onOpenChange={setIsPollDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-slate-300">
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Poll
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-blue-900 text-white">
                <DialogHeader>
                  <DialogTitle>Create Poll</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmitPollPost} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="poll-question" className="text-white">
                      Poll Question
                    </Label>
                    <Textarea
                      id="poll-question"
                      placeholder="Ask a question..."
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Poll Options</Label>
                    {pollOptions.map((option, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          placeholder={`Option ${index + 1}`}
                          value={option}
                          onChange={(e) => handlePollOptionChange(index, e.target.value)}
                          className="bg-slate-800/50 border-slate-700 text-white"
                        />
                        {pollOptions.length > 2 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemovePollOption(index)}
                            className="text-slate-400 hover:text-red-400"
                          >
                            &times;
                          </Button>
                        )}
                      </div>
                    ))}
                    {pollOptions.length < 6 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleAddPollOption}
                        className="mt-2 border-blue-400 text-white hover:bg-blue-800/20"
                      >
                        Add Option
                      </Button>
                    )}
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsPollDialogOpen(false)}
                      className="border-blue-400 text-white hover:bg-blue-800/20"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={!newPostContent.trim() || pollOptions.filter((option) => option.trim()).length < 2}
                    >
                      Create Poll
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <Button variant="ghost" size="sm" className="text-slate-300">
              <Mic className="h-4 w-4 mr-2" />
              Audio
            </Button>
          </div>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleSubmitPost}
            disabled={!newPostContent.trim()}
          >
            <Send className="h-4 w-4 mr-2" />
            Post
          </Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-4 bg-slate-800">
          <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">
            All
          </TabsTrigger>
          <TabsTrigger value="following" className="data-[state=active]:bg-blue-600">
            Following
          </TabsTrigger>
          <TabsTrigger value="trending" className="data-[state=active]:bg-blue-600">
            Trending
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-0">
          {posts.map((post) => (
            <Card key={post.id} className="bg-slate-900 border-blue-900 text-white">
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
                      const percentage = Math.round((option.votes / post.poll.totalVotes) * 100) || 0
                      return (
                        <button
                          key={option.id}
                          className={`relative w-full text-left ${
                            post.poll?.voted ? "cursor-default" : "hover:bg-slate-800/50"
                          } ${option.selected ? "bg-blue-900/30" : ""}`}
                          onClick={() => !post.poll?.voted && handleVote(post.id, option.id)}
                          disabled={post.poll?.voted}
                        >
                          <div className="flex justify-between mb-1">
                            <span>{option.text}</span>
                            <span>{percentage}%</span>
                          </div>
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: `${percentage}%` }} />
                          </div>
                        </button>
                      )
                    })}
                    <p className="text-sm text-slate-400 mt-2">
                      {post.poll.totalVotes} {post.poll.totalVotes === 1 ? "vote" : "votes"}
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t border-blue-900/30 pt-3">
                <div className="flex justify-between w-full">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={post.liked ? "text-red-500" : "text-slate-300"}
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${post.liked ? "fill-current" : ""}`} />
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
                  <Button
                    variant="ghost"
                    size="sm"
                    className={post.bookmarked ? "text-blue-500" : "text-slate-300"}
                    onClick={() => handleBookmark(post.id)}
                  >
                    <Bookmark className={`h-4 w-4 mr-2 ${post.bookmarked ? "fill-current" : ""}`} />
                    Save
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="following" className="space-y-4 mt-0">
          <div className="text-center py-8 text-slate-400">
            <p>Posts from people you follow will appear here.</p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Find People to Follow</Button>
          </div>
        </TabsContent>

        <TabsContent value="trending" className="space-y-4 mt-0">
          {activeTab === "trending" &&
            trendingPosts.map((post) => (
              <Card key={post.id} className="bg-slate-900 border-blue-900 text-white">
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

                  {post.poll && (
                    <div className="mt-4 space-y-2">
                      {post.poll.options.map((option) => {
                        const percentage = Math.round((option.votes / post.poll.totalVotes) * 100) || 0
                        return (
                          <button
                            key={option.id}
                            className={`relative w-full text-left ${
                              post.poll?.voted ? "cursor-default" : "hover:bg-slate-800/50"
                            } ${option.selected ? "bg-blue-900/30" : ""}`}
                            onClick={() => !post.poll?.voted && handleVote(post.id, option.id)}
                            disabled={post.poll?.voted}
                          >
                            <div className="flex justify-between mb-1">
                              <span>{option.text}</span>
                              <span>{percentage}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-600 rounded-full" style={{ width: `${percentage}%` }} />
                            </div>
                          </button>
                        )
                      })}
                      <p className="text-sm text-slate-400 mt-2">
                        {post.poll.totalVotes} {post.poll.totalVotes === 1 ? "vote" : "votes"}
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t border-blue-900/30 pt-3">
                  <div className="flex justify-between w-full">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={post.liked ? "text-red-500" : "text-slate-300"}
                      onClick={() => handleLike(post.id)}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${post.liked ? "fill-current" : ""}`} />
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
                    <Button
                      variant="ghost"
                      size="sm"
                      className={post.bookmarked ? "text-blue-500" : "text-slate-300"}
                      onClick={() => handleBookmark(post.id)}
                    >
                      <Bookmark className={`h-4 w-4 mr-2 ${post.bookmarked ? "fill-current" : ""}`} />
                      Save
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
