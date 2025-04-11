"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Cerrar el menú cuando se navega a una nueva página
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:w-[450px] pt-10">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left text-xl">Menú</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg py-2 px-4 rounded-md transition-colors ${
                pathname === link.href ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Cerrar menú</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

