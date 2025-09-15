"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MoodCharacter } from "@/components/mood-character"
import { getRandomMessage } from "@/lib/mood-analyzer"
import type { MoodMode } from "@/app/page"

interface ResultScreenProps {
  mode: MoodMode
  userInput: string
  onTryAgain: () => void
  onShare: () => void
}

export function ResultScreen({ mode, userInput, onTryAgain, onShare }: ResultScreenProps) {
  const [message, setMessage] = useState(mode.message)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Show confetti animation on mount
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 3000)

    // Set random message
    setMessage(getRandomMessage(mode))

    return () => clearTimeout(timer)
  }, [mode])

  return (
    <Card className="glass-effect p-8 text-center space-y-8 border-0 shadow-2xl relative overflow-hidden">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            >
              <MoodCharacter emoji={["🎉", "✨", "🌟", "💫", "⭐"][Math.floor(Math.random() * 5)]} size="sm" />
            </div>
          ))}
        </div>
      )}

      {/* Result Title */}
      <div className="space-y-4 relative z-10">
        <h2 className="text-2xl font-bold text-primary text-balance">오늘은</h2>
        <div className="space-y-2">
          <MoodCharacter emoji={mode.emoji} size="xl" animated className="pulse-glow" />
          <h1 className={`text-3xl font-bold ${mode.color} text-balance`}>{mode.name}네요!</h1>
        </div>
      </div>

      {/* User Input Display */}
      <div className="bg-secondary/20 rounded-2xl p-4 border border-secondary/30 relative z-10">
        <p className="text-sm text-muted-foreground mb-1">당신의 기분:</p>
        <p className="font-medium text-foreground">"{userInput}"</p>
      </div>

      {/* Positive Message */}
      <div className="space-y-4 relative z-10">
        <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
          <p className="text-lg font-semibold text-primary text-pretty leading-relaxed">{message} 🔥</p>
        </div>

        {/* Mode-specific animation area */}
        <div className="flex justify-center space-x-2">
          {mode.id === "volcano" && (
            <>
              <MoodCharacter emoji="🔥" size="sm" animated />
              <MoodCharacter emoji="💥" size="sm" animated />
              <MoodCharacter emoji="🔥" size="sm" animated />
            </>
          )}
          {mode.id === "rainbow" && (
            <>
              <MoodCharacter emoji="🌈" size="sm" animated />
              <MoodCharacter emoji="☀️" size="sm" animated />
              <MoodCharacter emoji="🌈" size="sm" animated />
            </>
          )}
          {mode.id === "heart" && (
            <>
              <MoodCharacter emoji="💖" size="sm" animated />
              <MoodCharacter emoji="💕" size="sm" animated />
              <MoodCharacter emoji="💖" size="sm" animated />
            </>
          )}
          {mode.id === "trex" && (
            <>
              <MoodCharacter emoji="🦖" size="sm" animated />
              <MoodCharacter emoji="💪" size="sm" animated />
              <MoodCharacter emoji="🦖" size="sm" animated />
            </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 relative z-10">
        <Button onClick={onShare} size="lg" className="w-full text-lg py-6 rounded-2xl font-semibold pulse-glow">
          공유하기 📤
        </Button>
        <Button
          onClick={onTryAgain}
          variant="outline"
          size="lg"
          className="w-full text-lg py-6 rounded-2xl font-semibold bg-secondary/50 hover:bg-secondary border-secondary/30"
        >
          다시 해보기 🔄
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 opacity-20">
        <MoodCharacter emoji="✨" size="sm" animated className="sparkle" />
      </div>
      <div className="absolute bottom-4 left-4 opacity-20">
        <MoodCharacter emoji="🌟" size="sm" animated className="sparkle" />
      </div>
    </Card>
  )
}
