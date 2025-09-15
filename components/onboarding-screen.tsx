"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MoodCharacter } from "@/components/mood-character"

interface OnboardingScreenProps {
  onStart: () => void
}

export function OnboardingScreen({ onStart }: OnboardingScreenProps) {
  return (
    <Card className="glass-effect p-8 text-center space-y-8 border-0 shadow-2xl">
      {/* App Logo/Character */}
      <div className="space-y-4">
        <div className="flex justify-center items-center space-x-2">
          <MoodCharacter emoji="🎲" size="lg" animated />
          <MoodCharacter emoji="✨" size="md" animated className="sparkle" />
        </div>
        <h1 className="text-3xl font-bold text-primary text-balance">오늘의 기분 큐브</h1>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
          오늘 기분을 말해주면
          <br />
          <span className="text-primary font-semibold">엉뚱하게 해석</span>해드려요!
        </p>

        {/* Preview characters */}
        <div className="flex justify-center items-center space-x-4 py-4">
          <MoodCharacter emoji="🦖" size="sm" />
          <MoodCharacter emoji="🌋" size="sm" />
          <MoodCharacter emoji="🌈" size="sm" />
          <MoodCharacter emoji="💖" size="sm" />
        </div>

        <p className="text-sm text-muted-foreground">1분 안에 즐기는 재미있는 기분 분석</p>
      </div>

      {/* Start Button */}
      <Button onClick={onStart} size="lg" className="w-full pulse-glow text-lg py-6 rounded-2xl font-semibold">
        시작하기 ✨
      </Button>
    </Card>
  )
}
