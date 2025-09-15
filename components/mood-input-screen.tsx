"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MoodCharacter } from "@/components/mood-character"

interface MoodInputScreenProps {
  onSubmit: (mood: string) => void
}

export function MoodInputScreen({ onSubmit }: MoodInputScreenProps) {
  const [mood, setMood] = useState("")
  const maxLength = 15

  const handleSubmit = () => {
    if (mood.trim()) {
      onSubmit(mood.trim())
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && mood.trim()) {
      handleSubmit()
    }
  }

  return (
    <Card className="glass-effect p-8 space-y-8 border-0 shadow-2xl">
      {/* Title with animated character */}
      <div className="text-center space-y-4">
        <MoodCharacter emoji="✍️" size="lg" animated />
        <h2 className="text-2xl font-bold text-primary text-balance">오늘 기분 한 줄로 말해줘</h2>
      </div>

      {/* Input Section */}
      <div className="space-y-4">
        <div className="relative">
          <Input
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="예: 출근길에 지하철 놓쳐서 빡침"
            maxLength={maxLength}
            className="text-center text-lg py-6 rounded-2xl border-2 border-primary/20 focus:border-primary/50 bg-card/80 backdrop-blur-sm"
          />
          <div className="absolute -bottom-6 right-0 text-xs text-muted-foreground">
            {mood.length}/{maxLength}
          </div>
        </div>

        {/* Example moods for inspiration */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground text-center">또는 이런 기분은 어때요?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["햇빛 쨍쨍 좋아", "졸려죽겠음", "배고파 죽겠어", "설레서 미치겠어"].map((example) => (
              <Button
                key={example}
                variant="outline"
                size="sm"
                onClick={() => setMood(example)}
                className="text-xs rounded-full bg-secondary/50 hover:bg-secondary border-secondary/30"
              >
                {example}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        disabled={!mood.trim()}
        size="lg"
        className="w-full text-lg py-6 rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed pulse-glow"
      >
        기분 보내기 🚀
      </Button>

      {/* Decorative floating characters */}
      <div className="absolute -top-4 -left-4 opacity-30">
        <MoodCharacter emoji="💭" size="sm" animated />
      </div>
      <div className="absolute -bottom-4 -right-4 opacity-30">
        <MoodCharacter emoji="✨" size="sm" animated className="sparkle" />
      </div>
    </Card>
  )
}
