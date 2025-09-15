"use client"

import { useState } from "react"
import { OnboardingScreen } from "@/components/onboarding-screen"
import { MoodInputScreen } from "@/components/mood-input-screen"
import { LoadingScreen } from "@/components/loading-screen"
import { ResultScreen } from "@/components/result-screen"
import { ShareScreen } from "@/components/share-screen"
import { CompletionScreen } from "@/components/completion-screen"

export type MoodMode = {
  id: string
  name: string
  emoji: string
  message: string
  color: string
}

export type AppScreen = "onboarding" | "input" | "loading" | "result" | "share" | "completion"

export default function MoodCubeApp() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("onboarding")
  const [userInput, setUserInput] = useState("")
  const [currentMode, setCurrentMode] = useState<MoodMode | null>(null)

  const handleScreenChange = (screen: AppScreen) => {
    setCurrentScreen(screen)
  }

  const handleMoodSubmit = (mood: string) => {
    setUserInput(mood)
    setCurrentScreen("loading")
  }

  const handleModeResult = (mode: MoodMode) => {
    setCurrentMode(mode)
    setCurrentScreen("result")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {currentScreen === "onboarding" && <OnboardingScreen onStart={() => handleScreenChange("input")} />}
        {currentScreen === "input" && <MoodInputScreen onSubmit={handleMoodSubmit} />}
        {currentScreen === "loading" && <LoadingScreen userInput={userInput} onComplete={handleModeResult} />}
        {currentScreen === "result" && currentMode && (
          <ResultScreen
            mode={currentMode}
            userInput={userInput}
            onTryAgain={() => handleScreenChange("input")}
            onShare={() => handleScreenChange("share")}
          />
        )}
        {currentScreen === "share" && currentMode && (
          <ShareScreen mode={currentMode} userInput={userInput} onComplete={() => handleScreenChange("completion")} />
        )}
        {currentScreen === "completion" && <CompletionScreen onTryAgain={() => handleScreenChange("input")} />}
      </div>
    </div>
  )
}
