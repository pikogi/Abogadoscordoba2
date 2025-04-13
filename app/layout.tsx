import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { PageLoader } from "@/components/page-loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Abogados Cordoba",
  description: "Expertos en derecho civil, familia, previsional, laboral y societario",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <PageLoader>
          <div className="flex flex-col min-h-screen">
            <Header navLinks={navLinks} />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0 bg-[#212d4b] text-white">
              <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-12">
                  <div className="space-y-4 md:py-8">
                    <Link href="/" className="flex items-center gap-2">
                      <div className="h-40 w-auto relative">
                        <Image
                          src="/images/logoabogado.png"
                          alt="Logo Bufete Jurídico"
                          width={10}
                          height={18}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    </Link>
                    <p className="text-sm text-muted-foreground text-white">
                    Comprometidos con la excelencia y resultados para
                      nuestros clientes.
                    </p>
                    <div className="flex gap-4">
                      <Link href="#" className="text-muted-foreground hover:text-foreground">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-4 md:py-8">
                    <h3 className="text-base font-medium">Áreas de Práctica</h3>
                    <ul className="space-y-2 text-sm text-white">
                      <li>
                      <Link href="/categorias/familia" className="text-muted-foreground hover:text-foreground text-white">
                          Derecho Familia
                        </Link>
                        </li>
                        <li>
                        <Link href="/categorias/previsional" className="text-muted-foreground hover:text-foreground text-white">
                          Derecho Previsional
                        </Link>
                        </li>
                        <li>
                        <Link href="/categorias/civil" className="text-muted-foreground hover:text-foreground text-white">
                          Derecho Civil
                        </Link>
                      </li>
                      <li>
                        <Link href="/categorias/laboral" className="text-muted-foreground hover:text-foreground text-white">
                          Derecho Laboral
                        </Link>
                      </li>
                      <li>
                        <Link href="/categorias/societario" className="text-muted-foreground hover:text-foreground text-white">
                          Derecho Societario
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4 md:py-8">
                    <h3 className="text-base font-medium">Enlaces Rápidos</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/" className="text-muted-foreground hover:text-foreground text-white">
                          Inicio
                        </Link>
                      </li>
                      <li>
                        <Link href="/contacto" className="text-muted-foreground hover:text-foreground text-white">
                          Contacto
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4 md:py-8">
                    <h3 className="text-base font-medium">Contacto</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-muted-foreground text-white">Ayacucho 127, Córdoba Capital.</li>
                      <li>
                        <Link
                          href="https://wa.me/5493517410304"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                            <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                          </svg>
                          +54 9 3517 41-0304
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="mailto:info@abogadoscba.com"
                          className="text-muted-foreground hover:text-foreground text-white"
                        >
                          info@abogadoscba.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground text-white">
                  <p>© {new Date().getFullYear()} Bufete Jurídico Profesional. Todos los derechos reservados.</p>
                </div>
              </div>
            </footer>
          </div>
          </PageLoader>
        </ThemeProvider>
      </body>
    </html>
  )
}