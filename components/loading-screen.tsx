"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { MoodCharacter } from "@/components/mood-character"
import { analyzeMood } from "@/lib/mood-analyzer"
import type { MoodMode } from "@/app/page"

interface LoadingScreenProps {
  userInput: string
  onComplete: (mode: MoodMode) => void
}

export function LoadingScreen({ userInput, onComplete }: LoadingScreenProps) {
  const [loadingText, setLoadingText] = useState("네 기분을 분석 중")
  const [dots, setDots] = useState("")

  useEffect(() => {
    // Animated loading text
    const textInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    // Simulate AI analysis with actual mood analysis
    const analysisTimer = setTimeout(() => {
      const result = analyzeMood(userInput)
      onComplete(result)
    }, 2000)

    return () => {
      clearInterval(textInterval)
      clearTimeout(analysisTimer)
    }
  }, [userInput, onComplete])

  return (
    <Card className="glass-effect p-8 text-center space-y-8 border-0 shadow-2xl">
      {/* Animated dice/character */}
      <div className="space-y-4">
        <div className="relative">
          <MoodCharacter emoji="🎲" size="xl" animated className="pulse-glow" />
          {/* Sparkle effects around the dice */}
          <div className="absolute -top-2 -left-2">
            <MoodCharacter emoji="✨" size="sm" className="sparkle" />
          </div>
          <div className="absolute -top-2 -right-2">
            <MoodCharacter emoji="💫" size="sm" className="sparkle" />
          </div>
          <div className="absolute -bottom-2 -left-2">
            <MoodCharacter emoji="⭐" size="sm" className="sparkle" />
          </div>
          <div className="absolute -bottom-2 -right-2">
            <MoodCharacter emoji="🌟" size="sm" className="sparkle" />
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-primary">
          {loadingText}
          <span className="inline-block w-8 text-left">{dots}</span>
        </h2>
        <p className="text-sm text-muted-foreground">잠깐만 기다려줘 🌀</p>
      </div>

      {/* User input display */}
      <div className="bg-secondary/20 rounded-2xl p-4 border border-secondary/30">
        <p className="text-sm text-muted-foreground mb-1">분석 중인 기분:</p>
        <p className="font-medium text-foreground">"{userInput}"</p>
      </div>
    </Card>
  )
}
