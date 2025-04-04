"use client"

import Link from "next/link"
import { Scale, Briefcase, Building, ChevronRight, type LucideIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CategoryCardProps {
  title: string
  description: string
  href: string
  icon: "scale" | "briefcase" | "building"
}

export function CategoryCard({ title, description, href, icon }: CategoryCardProps) {
  const IconComponent = getIcon(icon)
  const subcategories = getSubcategories(icon)
  const subcategoryLinks = getSubcategoryLinks(icon)

  return (
    <Card className="flex flex-col h-full transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {subcategories.map((subcategory, index) => (
            <li key={index} className="block w-full">
              <Link
                href={subcategoryLinks[index]}
                className="flex items-center w-full p-1 hover:bg-primary/5 rounded transition-colors group"
              >
                <ChevronRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <span className="group-hover:text-primary group-hover:underline">{subcategory}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={href}>Ver Todos los Servicios</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function getIcon(icon: string): LucideIcon {
  switch (icon) {
    case "scale":
      return Scale
    case "briefcase":
      return Briefcase
    case "building":
      return Building
    default:
      return Scale
  }
}

function getSubcategories(icon: string): string[] {
  switch (icon) {
    case "scale":
      return ["Divorcios", "Herencias", "Contratos", "Jubilaciones"]
    case "briefcase":
      return ["Despidos", "Accidentes Laborales", "Negociaciones", "Pensiones"]
    case "building":
      return ["Constitución de Empresas", "Fusiones", "Adquisiciones", "Contratos Comerciales"]
    default:
      return []
  }
}

function getSubcategoryLinks(icon: string): string[] {
  switch (icon) {
    case "scale":
      return [
        "/servicios/civil/divorcios",
        "/servicios/civil/herencias",
        "/servicios/civil/contratos",
        "/servicios/civil/jubilaciones",
      ]
    case "briefcase":
      return [
        "/servicios/laboral/despidos",
        "/servicios/laboral/accidentes",
        "/servicios/laboral/negociaciones",
        "/servicios/laboral/pensiones",
      ]
    case "building":
      return [
        "/servicios/societario/constitucion",
        "/servicios/societario/fusiones",
        "/servicios/societario/adquisiciones",
        "/servicios/societario/contratos-comerciales",
      ]
    default:
      return []
  }
}

