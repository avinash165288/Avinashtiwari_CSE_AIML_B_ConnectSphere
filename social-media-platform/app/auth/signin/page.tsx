"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [step, setStep] = useState(1)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send a verification code to the email
    // For demo purposes, we'll just move to the next step
    setStep(2)
  }

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would verify the code
    // For demo purposes, we'll just redirect to the dashboard
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">{step === 1 ? "Sign In" : "Verify Email"}</h1>

        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/20 border-blue-400 text-white placeholder:text-blue-200"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Continue
            </Button>

            <div className="text-center text-sm text-blue-200">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-blue-400 hover:underline">
                Sign Up
              </Link>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerificationSubmit} className="space-y-4">
            <p className="text-blue-200 mb-4">
              We've sent a verification code to <span className="font-medium text-white">{email}</span>. Please enter
              the code below to sign in.
            </p>

            <div className="space-y-2">
              <Label htmlFor="code" className="text-white">
                Verification Code
              </Label>
              <Input
                id="code"
                type="text"
                placeholder="Enter verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
                className="bg-white/20 border-blue-400 text-white placeholder:text-blue-200"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>

            <div className="text-center text-sm text-blue-200">
              Didn't receive a code?{" "}
              <button type="button" className="text-blue-400 hover:underline">
                Resend Code
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
