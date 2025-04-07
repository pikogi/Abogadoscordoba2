"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Loader() {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className={cn("transition-all duration-700 transform", pulse ? "scale-110" : "scale-100")}>
        <div className="relative h-48 w-48 mb-4">
          <Image
            src="/images/logoabogado.png" // Tu imagen personalizada
            alt="Cargando..."
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">Cargando...</p>
    </div>
  )
}

