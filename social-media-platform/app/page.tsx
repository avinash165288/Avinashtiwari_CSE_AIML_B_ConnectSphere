import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">ConnectSphere</h1>
          <p className="text-blue-200">Connect, Share, Engage</p>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/auth/signin">Sign In</Link>
          </Button>

          <Button asChild variant="outline" className="w-full border-blue-400 text-white hover:bg-blue-800/20">
            <Link href="/auth/signup">Create Account</Link>
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-blue-200">
          <p>Join thousands of users already connecting on ConnectSphere</p>
        </div>
      </div>
    </div>
  )
}
