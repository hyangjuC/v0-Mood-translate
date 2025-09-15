import type { MoodMode } from "@/app/page"

// Predefined mood modes with Korean messages
const moodModes: MoodMode[] = [
  {
    id: "trex",
    name: "T-REX 모드",
    emoji: "🦖",
    message: "네 불꽃은 세상을 바꾸는 힘이야",
    color: "text-green-500",
  },
  {
    id: "volcano",
    name: "화산 모드",
    emoji: "🌋",
    message: "네 분노는 혁신의 불씨야",
    color: "text-red-500",
  },
  {
    id: "rainbow",
    name: "무지개 모드",
    emoji: "🌈",
    message: "오늘은 세상이 너를 축하해",
    color: "text-pink-500",
  },
  {
    id: "heart",
    name: "하트 폭발 모드",
    emoji: "💖",
    message: "네 설렘이 우주를 흔들어",
    color: "text-pink-400",
  },
  {
    id: "zombie",
    name: "월요일 좀비 모드",
    emoji: "🧟",
    message: "피곤해도 넌 최고야",
    color: "text-purple-500",
  },
  {
    id: "burger",
    name: "햄버거 소환 모드",
    emoji: "🍔",
    message: "배고픔도 너의 에너지원이야",
    color: "text-yellow-500",
  },
  {
    id: "dark-lord",
    name: "암흑 마왕 모드",
    emoji: "😈",
    message: "네 중2병이 세상을 구원해",
    color: "text-purple-600",
  },
  {
    id: "unicorn",
    name: "유니콘 모드",
    emoji: "🦄",
    message: "네 순수함이 마법을 만들어",
    color: "text-indigo-400",
  },
]

// Simple mood analysis based on keywords
export function analyzeMood(input: string): MoodMode {
  const lowerInput = input.toLowerCase()

  // Keyword mapping to mood modes
  if (lowerInput.includes("빡") || lowerInput.includes("화") || lowerInput.includes("짜증")) {
    return moodModes[1] // volcano
  }
  if (lowerInput.includes("좋") || lowerInput.includes("행복") || lowerInput.includes("기쁘")) {
    return moodModes[2] // rainbow
  }
  if (lowerInput.includes("설레") || lowerInput.includes("사랑") || lowerInput.includes("좋아")) {
    return moodModes[3] // heart
  }
  if (lowerInput.includes("졸") || lowerInput.includes("피곤") || lowerInput.includes("잠")) {
    return moodModes[4] // zombie
  }
  if (lowerInput.includes("배고") || lowerInput.includes("먹") || lowerInput.includes("음식")) {
    return moodModes[5] // burger
  }
  if (lowerInput.includes("중2") || lowerInput.includes("멋") || lowerInput.includes("쿨")) {
    return moodModes[6] // dark lord
  }
  if (lowerInput.includes("순수") || lowerInput.includes("깨끗") || lowerInput.includes("예쁘")) {
    return moodModes[7] // unicorn
  }

  // Default fallback to T-REX mode
  return moodModes[0]
}

// Get random positive message for a mode
export function getRandomMessage(mode: MoodMode): string {
  const messages = [
    mode.message,
    "오늘도 넌 최고야 🔥",
    "세상도 너를 못 이겨 ✨",
    "네 에너지가 우주를 움직여 🌟",
    "이런 기분도 너답다 💫",
  ]

  return messages[Math.floor(Math.random() * messages.length)]
}
