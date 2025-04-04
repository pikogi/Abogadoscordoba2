"use client"

import { useState, useEffect } from "react"

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Función para verificar si estamos en un dispositivo móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Verificar al inicio
    checkMobile()

    // Verificar al cambiar el tamaño de la ventana
    window.addEventListener("resize", checkMobile)

    // Limpiar el event listener
    return () => window.removeEventListener("resize", checkMobile)
  }, [breakpoint])

  return isMobile
}

