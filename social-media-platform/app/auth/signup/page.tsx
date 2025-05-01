"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function SignUp() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [timer, setTimer] = useState(0)
  const [generatedCode, setGeneratedCode] = useState("")

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Generate a random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setGeneratedCode(code)

    // In a real app, you would send this code via email
    // For demo purposes, we'll just show it in a toast
    toast({
      title: "Verification Code Sent",
      description: `Your verification code is: ${code}`,
    })

    setTimer(60) // Set a 60-second timer for resending
    setStep(2)
  }

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (verificationCode === generatedCode) {
      setStep(3)
    } else {
      toast({
        title: "Invalid Code",
        description: "The verification code you entered is incorrect. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleResendCode = () => {
    if (timer === 0) {
      // Generate a new random 6-digit code
      const code = Math.floor(100000 + Math.random() * 900000).toString()
      setGeneratedCode(code)

      // In a real app, you would send this code via email
      // For demo purposes, we'll just show it in a toast
      toast({
        title: "Verification Code Resent",
        description: `Your new verification code is: ${code}`,
      })

      setTimer(60) // Reset the timer
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => (step > 1 ? setStep(step - 1) : null)}
            disabled={step === 1}
            className="text-white hover:bg-blue-800/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-white ml-2">
            {step === 1 && "Create Account"}
            {step === 2 && "Verify Email"}
            {step === 3 && "Complete Profile"}
          </h1>
        </div>

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

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                Phone Number (Optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white/20 border-blue-400 text-white placeholder:text-blue-200"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Verify Email
            </Button>

            <div className="text-center text-sm text-blue-200">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-blue-400 hover:underline">
                Sign In
              </Link>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerificationSubmit} className="space-y-4">
            <p className="text-blue-200 mb-4">
              We've sent a verification code to <span className="font-medium text-white">{email}</span>. Please enter
              the code below to verify your email.
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
              Verify Code
            </Button>

            <div className="text-center text-sm text-blue-200">
              Didn't receive a code?{" "}
              <button
                type="button"
                className={`text-blue-400 ${timer > 0 ? "opacity-50 cursor-not-allowed" : "hover:underline"}`}
                onClick={handleResendCode}
                disabled={timer > 0}
              >
                Resend Code {timer > 0 && `(${timer}s)`}
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="text-blue-200 mb-4">Your email has been verified! Complete your profile to continue.</p>

            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <Link href="/auth/create-profile">Complete Profile</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
