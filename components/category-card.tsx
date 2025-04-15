"use client"

import Link from "next/link"
import { Scale, Briefcase, Building, ChevronRight, Users, Landmark, type LucideIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CategoryCardProps {
  title: string
  description: string
  href: string
  icon: "scale" | "briefcase" | "building" | "family" | "pension"
}

export function CategoryCard({ title, description, href, icon }: CategoryCardProps) {
  const IconComponent = getIcon(icon)
  const subcategories = getSubcategories(icon)
  const subcategoryLinks = getSubcategoryLinks(icon)

  return (
    <Card className="flex flex-col h-full transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-[#433E3F]/10 flex items-center justify-center mb-4">
          <IconComponent className="h-6 w-6 text-[#433E3F]" />
        </div>
        <CardTitle className="flex-grow text-[#433E3F]">{title}</CardTitle>
        <CardDescription className="flex-grow text-[#433E3F]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow text-[#433E3F]">
        <ul className="space-y-3">
          {subcategories.map((subcategory, index) => (
            <li key={index} className="block w-full">
              <Link
                href={subcategoryLinks[index]}
                className="flex items-center w-full p-1 hover:bg-[#433E3F]/5 rounded transition-colors group"
              >
                <ChevronRight className="h-4 w-4 mr-2 text-[#433E3F] flex-shrink-0" />
                <span className="group-hover:text-[#433E3F] group-hover:underline">{subcategory}</span>
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
    case "family":
      return Users
    case "pension":
      return Landmark
    default:
      return Scale
  }
}

function getSubcategories(icon: string): string[] {
  switch (icon) {
    case "scale":
      return ["Accidente de tránsito", "Declaratoria de herederos", "Contratos", "Cobranzas"]
    case "briefcase":
      return ["Despidos", "Accidentes laborales", "Negociaciones", "Trabajo en negro"]
    case "building":
      return ["Constitución de Empresas", "Registro de marca", "Adquisiciones", "Contratos Comerciales"]
    case "family":
      return ["Divorcio", "Cuota alimentaria", "Régimen de comunicación"]
    case "pension":
      return ["Jubilaciones", "Pensiones"]
    default:
      return []
  }
}

function getSubcategoryLinks(icon: string): string[] {
  switch (icon) {
    case "scale":
      return [
        "/servicios/civil/accidentes",
        "/servicios/civil/herencias",
        "/servicios/civil/contratos",
        "/servicios/civil/cobranzas",
      ]
    case "briefcase":
      return [
        "/servicios/laboral/despidos",
        "/servicios/laboral/accidentes",
        "/servicios/laboral/negociaciones",
        "/servicios/laboral/trabajo-negro",
      ]
    case "building":
      return [
        "/servicios/societario/constitucion",
        "/servicios/societario/marcas",
        "/servicios/societario/adquisiciones",
        "/servicios/societario/contratos-comerciales",
      ]
    case "family":
      return [
        "/servicios/familia/divorcio",
        "/servicios/familia/cuota-alimentaria",
        "/servicios/familia/regimen-de-comunicacion",
        "/servicios/familia/adopcion",
      ]
    case "pension":
      return [
        "/servicios/previsional/jubilaciones",
        "/servicios/previsional/pensiones",
        "/servicios/previsional/reajustes",
        "/servicios/previsional/asesoramiento",
      ]
    default:
      return []
  }
}
