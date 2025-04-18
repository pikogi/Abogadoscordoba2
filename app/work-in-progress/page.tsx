import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function WorkInProgressPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-primary">Trabajo en Progreso</h1>
          <p className="text-xl text-muted-foreground">
            Esta página está actualmente en desarrollo. Volveremos pronto con contenido actualizado.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-[#212d4b]">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a Inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 