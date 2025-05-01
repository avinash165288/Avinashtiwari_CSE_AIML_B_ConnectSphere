import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6 flex gap-6">
        <DashboardSidebar className="hidden lg:block w-64 flex-shrink-0" />

        <main className="flex-1 max-w-3xl mx-auto">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6 bg-slate-800">
              <TabsTrigger value="profile" className="data-[state=active]:bg-blue-600">
                Profile
              </TabsTrigger>
              <TabsTrigger value="account" className="data-[state=active]:bg-blue-600">
                Account
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-600">
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-blue-600">
                Privacy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-0 space-y-6">
              <Card className="bg-slate-900 border-blue-900 text-white">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription className="text-slate-400">
                    Update your profile information and how it appears to others.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                    <div className="relative">
                      <Avatar className="h-24 w-24 border-2 border-blue-600">
                        <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Profile" />
                        <AvatarFallback className="bg-blue-600 text-2xl">JD</AvatarFallback>
                      </Avatar>
                      <Button
                        size="icon"
                        className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            defaultValue="John Doe"
                            className="bg-slate-800/50 border-slate-700 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input
                            id="username"
                            defaultValue="johndoe"
                            className="bg-slate-800/50 border-slate-700 text-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          defaultValue="Software Developer | Tech Enthusiast | Coffee Lover"
                          className="bg-slate-800/50 border-slate-700 text-white min-h-[100px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        defaultValue="San Francisco, CA"
                        className="bg-slate-800/50 border-slate-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        defaultValue="johndoe.dev"
                        className="bg-slate-800/50 border-slate-700 text-white"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
                </CardFooter>
              </Card>

              <Card className="bg-slate-900 border-blue-900 text-white">
                <CardHeader>
                  <CardTitle>Cover Image</CardTitle>
                  <CardDescription className="text-slate-400">Update your profile cover image.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 bg-slate-800 rounded-lg overflow-hidden">
                    <img src="https://i.pravatar.cc/1200?img=30" alt="Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button className="bg-blue-600 hover:bg-blue-700">Change Cover</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="mt-0 space-y-6">
              <Card className="bg-slate-900 border-blue-900 text-white">
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription className="text-slate-400">
                    Update your account email and phone number.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
                </CardFooter>
              </Card>

              <Card className="bg-slate-900 border-blue-900 text-white">
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription className="text-slate-400">Change your password.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" className="bg-slate-800/50 border-slate-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600 hover:bg-blue-700">Change Password</Button>
                </CardFooter>
              </Card>

              <Card className="bg-slate-900 border-blue-900 text-white">
                <CardHeader>
                  <CardTitle>Delete Account</CardTitle>
                  <CardDescription className="text-slate-400">
                    Permanently delete your account and all of your content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-red-400">
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive">Delete Account</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-0 space-y-6">
              <Card className="bg-slate-900 border-blue-900 text-white">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription className="text-slate-400">Configure how you receive notifications.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-slate-400">Receive notifications via email.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-slate-400">Receive notifications on your device.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Follower Notifications</p>
                      <p className="text-sm text-slate-400">Notify when someone follows you.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Post Like Notifications</p>
                      <p className="text-sm text-slate-400">Notify when someone likes your post.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Comment Notifications</p>
                      <p className="text-sm text-slate-400">Notify when someone comments on your post.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Message Notifications</p>
                      <p className="text-sm text-slate-400">Notify when you receive a message.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600 hover:bg-blue-700">Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="mt-0 space-y-6">
              <Card className="bg-slate-900 border-blue-900 text-white">
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription className="text-slate-400">
                    Control your privacy and visibility on the platform.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Private Account</p>
                      <p className="text-sm text-slate-400">Only approved followers can see your posts.</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Activity Status</p>
                      <p className="text-sm text-slate-400">Let others see when you're active.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Allow Tagging</p>
                      <p className="text-sm text-slate-400">Allow others to tag you in posts.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Read Receipts</p>
                      <p className="text-sm text-slate-400">Let others know when you've read their messages.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600 hover:bg-blue-700">Save Settings</Button>
                </CardFooter>
              </Card>

              <Card className="bg-slate-900 border-blue-900 text-white">
                <CardHeader>
                  <CardTitle>Blocked Users</CardTitle>
                  <CardDescription className="text-slate-400">
                    Manage the users you've blocked from interacting with you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">You haven't blocked any users yet.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
