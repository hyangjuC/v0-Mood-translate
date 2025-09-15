interface MoodCharacterProps {
  emoji: string
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  className?: string
}

export function MoodCharacter({ emoji, size = "md", animated = false, className = "" }: MoodCharacterProps) {
  const sizeClasses = {
    sm: "text-4xl",
    md: "text-6xl",
    lg: "text-8xl",
    xl: "text-9xl",
  }

  return (
    <div
      className={`
        ${sizeClasses[size]} 
        ${animated ? "float-animation" : ""} 
        ${className}
        select-none
      `}
    >
      {emoji}
    </div>
  )
}
