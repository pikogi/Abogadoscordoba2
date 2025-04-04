"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollIndicatorProps {
  targetId?: string
  className?: string
}

export function ScrollIndicator({ targetId = "categories", className }: ScrollIndicatorProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Ocultar el indicador cuando se hace scroll
      if (window.scrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTarget = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button
      onClick={scrollToTarget}
      className={cn(
        "hidden md:flex flex-col items-center justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white transition-opacity duration-300 cursor-pointer hover:opacity-80",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
        className,
      )}
      aria-label="Desplazar hacia abajo"
    >
      <span className="text-sm font-medium mb-2">Desplazar</span>
      <ChevronDown className="h-6 w-6 animate-bounce" />
    </button>
  )
}

