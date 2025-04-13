"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "@/components/mobile-menu"

interface HeaderProps {
  navLinks: {
    href: string
    label: string
  }[]
}

export function Header({ navLinks }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Cuando se hace scroll, el header se vuelve fijo y blanco
  // Cuando no hay scroll, el header es parte del banner (transparente)
  const headerClasses = scrolled
    ? "fixed top-0 left-0 right-0 z-50 bg-[#212d4b] border-b shadow-sm transition-all duration-300"
    : "absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300"

  return (
    <header className={headerClasses}>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 ms:ml-10 md:ml-20">
          <div className="h-40 w-auto relative">
            <Image
              src="/images/logoabogado.png"
              alt="Logo Bufete Jurídico"
              width={400}
              height={200}
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium hover:underline underline-offset-4 transition-colors ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto md:hidden text-white">
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  )
}

