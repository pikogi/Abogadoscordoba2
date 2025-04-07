"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Loader } from "@/components/loader"
// Si prefieres usar la versión con imagen personalizada, importa ImageLoader en su lugar
// import { ImageLoader as Loader } from "@/components/image-loader"

interface PageLoaderProps {
  children: React.ReactNode
}

export function PageLoader({ children }: PageLoaderProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Función para verificar si todas las imágenes se han cargado
    const checkImagesLoaded = () => {
      // Obtener todas las imágenes del documento, excluyendo la imagen del loader
      const images = document.querySelectorAll('img:not([alt="Cargando..."])')

      // Si no hay imágenes, finalizar la carga
      if (images.length === 0) {
        setLoading(false)
        return
      }

      let loadedImages = 0
      const totalImages = images.length

      // Función para manejar cuando una imagen se carga
      const imageLoaded = () => {
        loadedImages++
        if (loadedImages === totalImages) {
          setLoading(false)
        }
      }

      // Verificar cada imagen
      images.forEach((img) => {
        // Si la imagen ya está cargada
        if (img instanceof HTMLImageElement && img.complete) {
          imageLoaded()
        } else {
          // Si la imagen aún se está cargando
          img.addEventListener("load", imageLoaded)
          // Si hay un error al cargar la imagen
          img.addEventListener("error", imageLoaded)
        }
      })
    }

    // Establecer un tiempo máximo de carga (3 segundos)
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 3000)

    // Verificar las imágenes después de que el DOM esté listo
    window.addEventListener("load", checkImagesLoaded)

    // Limpieza
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("load", checkImagesLoaded)
    }
  }, [])

  return (
    <>
      {loading && <Loader />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>{children}</div>
    </>
  )
}

