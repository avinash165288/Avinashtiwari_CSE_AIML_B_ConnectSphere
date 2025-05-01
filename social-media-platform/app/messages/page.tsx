"use client"

import type React from "react"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Send, ImageIcon, Mic, Smile } from "lucide-react"

// Dummy data for conversations
const conversations = [
  {
    id: "conv1",
    user: {
      id: "user1",
      name: "Jane Cooper",
      username: "janecooper",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    lastMessage: {
      text: "Hey, how's it going?",
      timestamp: "10:42 AM",
      isRead: true,
      isFromMe: false,
    },
  },
  {
    id: "conv2",
    user: {
      id: "user2",
      name: "Alex Morgan",
      username: "alexmorgan",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
    },
    lastMessage: {
      text: "Let's catch up soon!",
      timestamp: "Yesterday",
      isRead: true,
      isFromMe: true,
    },
  },
  {
    id: "conv3",
    user: {
      id: "user3",
      name: "Taylor Swift",
      username: "taylorswift",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    lastMessage: {
      text: "Thanks for the help with the project!",
      timestamp: "Yesterday",
      isRead: false,
      isFromMe: false,
    },
  },
]

// Dummy data for the active conversation
const messages = [
  {
    id: "msg1",
    text: "Hey, how's it going?",
    timestamp: "10:42 AM",
    isFromMe: false,
  },
  {
    id: "msg2",
    text: "Pretty good! Working on that new project I told you about.",
    timestamp: "10:45 AM",
    isFromMe: true,
  },
  {
    id: "msg3",
    text: "That sounds exciting! Can you tell me more about it?",
    timestamp: "10:47 AM",
    isFromMe: false,
  },
  {
    id: "msg4",
    text: "It's a social media platform that combines features from different platforms. I'm focusing on the authentication flow right now.",
    timestamp: "10:50 AM",
    isFromMe: true,
  },
  {
    id: "msg5",
    text: "That's really cool! Let me know if you need any help with testing.",
    timestamp: "10:52 AM",
    isFromMe: false,
  },
]

export default function MessagesPage() {
  const [newMessage, setNewMessage] = useState("")
  const [activeConversation, setActiveConversation] = useState(conversations[0])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the message to your backend
    setNewMessage("")
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6 flex gap-6">
        <DashboardSidebar className="hidden lg:block w-64 flex-shrink-0" />

        <main className="flex-1 flex bg-slate-900 border border-blue-900 rounded-lg overflow-hidden">
          {/* Conversations sidebar */}
          <div className="w-80 border-r border-blue-900 flex flex-col">
            <div className="p-3 border-b border-blue-900">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search messages"
                  className="w-full pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  className={`w-full flex items-start gap-3 p-3 hover:bg-slate-800 text-left ${
                    activeConversation.id === conversation.id ? "bg-slate-800" : ""
                  }`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conversation.user.avatar || "/placeholder.svg"} alt={conversation.user.name} />
                      <AvatarFallback className="bg-blue-600">{conversation.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {conversation.user.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-slate-900"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium text-white truncate">{conversation.user.name}</span>
                      <span className="text-xs text-slate-400">{conversation.lastMessage.timestamp}</span>
                    </div>
                    <p
                      className={`text-sm truncate ${
                        !conversation.lastMessage.isRead && !conversation.lastMessage.isFromMe
                          ? "text-white font-medium"
                          : "text-slate-400"
                      }`}
                    >
                      {conversation.lastMessage.isFromMe && "You: "}
                      {conversation.lastMessage.text}
                    </p>
                  </div>
                  {!conversation.lastMessage.isRead && !conversation.lastMessage.isFromMe && (
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active conversation */}
          <div className="flex-1 flex flex-col">
            <div className="p-3 border-b border-blue-900 flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={activeConversation.user.avatar || "/placeholder.svg"}
                  alt={activeConversation.user.name}
                />
                <AvatarFallback className="bg-blue-600">{activeConversation.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium text-white">{activeConversation.user.name}</h2>
                <p className="text-xs text-slate-400">{activeConversation.user.online ? "Online" : "Offline"}</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isFromMe ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[70%] rounded-lg px-4 py-2 ${
                      message.isFromMe ? "bg-blue-600 text-white" : "bg-slate-800 text-white"
                    }`}
                  >
                    <p>{message.text}</p>
                    <span
                      className={`text-xs ${message.isFromMe ? "text-blue-200" : "text-slate-400"} block text-right mt-1`}
                    >
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t border-blue-900 flex gap-2">
              <Button type="button" variant="ghost" size="icon" className="text-slate-400">
                <ImageIcon className="h-5 w-5" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="text-slate-400">
                <Mic className="h-5 w-5" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="text-slate-400">
                <Smile className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Type a message..."
                className="flex-1 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700" disabled={!newMessage.trim()}>
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
