"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MoodCharacter } from "@/components/mood-character"
import type { MoodMode } from "@/app/page"

interface ShareScreenProps {
  mode: MoodMode
  userInput: string
  onComplete: () => void
}

export function ShareScreen({ mode, userInput, onComplete }: ShareScreenProps) {
  const shareCardRef = useRef<HTMLDivElement>(null)

  const handleSaveImage = async () => {
    // In a real app, you would use html2canvas or similar library
    // For now, we'll simulate the action
    alert("이미지가 저장되었습니다! (실제 구현에서는 html2canvas 라이브러리를 사용하세요)")
  }

  const handleShare = (platform: string) => {
    const text = `오늘은 ${mode.name}! ${mode.message} 🔥`
    const url = window.location.href

    switch (platform) {
      case "kakao":
        // KakaoTalk sharing would require Kakao SDK
        alert("카카오톡 공유 기능 (실제 구현에서는 Kakao SDK 필요)")
        break
      case "instagram":
        // Instagram sharing
        navigator.clipboard.writeText(text)
        alert("텍스트가 복사되었습니다! 인스타그램에 붙여넣기 하세요")
        break
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`)
        break
      default:
        navigator.clipboard.writeText(text)
        alert("텍스트가 복사되었습니다!")
    }
  }

  return (
    <div className="space-y-6">
      {/* Share Preview Card */}
      <Card ref={shareCardRef} className="glass-effect p-6 border-0 shadow-2xl liquid-gradient">
        <div className="text-center space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-primary">오늘의 기분 큐브</h3>
            <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto"></div>
          </div>

          {/* User Input */}
          <div className="bg-white/80 rounded-xl p-3 border border-white/40">
            <p className="text-sm text-muted-foreground">기분:</p>
            <p className="font-medium text-foreground">"{userInput}"</p>
          </div>

          {/* Mode Result */}
          <div className="space-y-3">
            <MoodCharacter emoji={mode.emoji} size="lg" />
            <h2 className={`text-xl font-bold ${mode.color}`}>{mode.name}</h2>
            <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
              <p className="text-sm font-semibold text-primary text-pretty">{mode.message} 🔥</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-xs text-muted-foreground opacity-70">v0.app에서 만든 기분 분석</div>
        </div>
      </Card>

      {/* Share Options */}
      <Card className="glass-effect p-6 space-y-4 border-0 shadow-xl">
        <h3 className="text-lg font-semibold text-center text-primary">공유하기</h3>

        {/* Save Image Button */}
        <Button onClick={handleSaveImage} variant="outline" size="lg" className="w-full rounded-xl bg-transparent">
          📱 이미지 저장
        </Button>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <Button
            onClick={() => handleShare("kakao")}
            variant="outline"
            className="flex flex-col items-center p-4 h-auto rounded-xl bg-yellow-50 hover:bg-yellow-100 border-yellow-200"
          >
            <span className="text-2xl mb-1">💬</span>
            <span className="text-xs">카카오톡</span>
          </Button>

          <Button
            onClick={() => handleShare("instagram")}
            variant="outline"
            className="flex flex-col items-center p-4 h-auto rounded-xl bg-pink-50 hover:bg-pink-100 border-pink-200"
          >
            <span className="text-2xl mb-1">📷</span>
            <span className="text-xs">인스타그램</span>
          </Button>

          <Button
            onClick={() => handleShare("twitter")}
            variant="outline"
            className="flex flex-col items-center p-4 h-auto rounded-xl bg-blue-50 hover:bg-blue-100 border-blue-200"
          >
            <span className="text-2xl mb-1">🐦</span>
            <span className="text-xs">트위터</span>
          </Button>
        </div>

        {/* Complete Button */}
        <Button onClick={onComplete} size="lg" className="w-full rounded-xl pulse-glow">
          완료 ✨
        </Button>
      </Card>
    </div>
  )
}
