"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MoodCharacter } from "@/components/mood-character"

interface CompletionScreenProps {
  onTryAgain: () => void
}

export function CompletionScreen({ onTryAgain }: CompletionScreenProps) {
  const [showFireworks, setShowFireworks] = useState(false)

  useEffect(() => {
    setShowFireworks(true)
    const timer = setTimeout(() => setShowFireworks(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="glass-effect p-8 text-center space-y-8 border-0 shadow-2xl relative overflow-hidden">
      {/* Fireworks Animation */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              <MoodCharacter emoji={["🎆", "🎇", "✨", "🌟", "💫", "⭐"][Math.floor(Math.random() * 6)]} size="sm" />
            </div>
          ))}
        </div>
      )}

      {/* Success Message */}
      <div className="space-y-6 relative z-10">
        <div className="space-y-4">
          <MoodCharacter emoji="🚀" size="xl" animated className="pulse-glow" />
          <h1 className="text-2xl font-bold text-primary text-balance">당신의 기분이 우주로 전송되었습니다</h1>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center space-x-2">
            <MoodCharacter emoji="🌍" size="md" animated />
            <MoodCharacter emoji="➡️" size="sm" />
            <MoodCharacter emoji="🌌" size="md" animated />
          </div>
          <p className="text-muted-foreground text-pretty">
            오늘도 당신의 특별한 기분을
            <br />
            우주가 기억할 거예요 ✨
          </p>
        </div>

        {/* Celebration characters */}
        <div className="flex justify-center space-x-4 py-4">
          <MoodCharacter emoji="🎉" size="sm" animated />
          <MoodCharacter emoji="🥳" size="sm" animated />
          <MoodCharacter emoji="🎊" size="sm" animated />
        </div>
      </div>

      {/* Try Again Button */}
      <Button
        onClick={onTryAgain}
        size="lg"
        className="w-full text-lg py-6 rounded-2xl font-semibold pulse-glow relative z-10"
      >
        다시 해보기 🔄
      </Button>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 opacity-30">
        <MoodCharacter emoji="🌟" size="sm" animated className="sparkle" />
      </div>
      <div className="absolute bottom-4 right-4 opacity-30">
        <MoodCharacter emoji="✨" size="sm" animated className="sparkle" />
      </div>
    </Card>
  )
}
