import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SubcategoryCard } from "@/components/subcategory-card"

export default function FamiliaLawPage() {
  const subcategories = [
    {
      id: "divorcios",
      url: "/servicios/familia/divorcio",
      title: "Divorcios",
      description: "Asesoramiento legal en procesos de divorcio, separación de bienes y custodia de hijos.",
      image: "/images/divorcio2.jpg?height=200&width=300",
      faqs: [
        {
          question: "¿Cuánto tiempo toma un proceso de divorcio?",
          answer:
            "El tiempo puede variar dependiendo de si es un divorcio de mutuo acuerdo o contencioso. En casos de mutuo acuerdo, puede resolverse en 2-3 meses, mientras que los contenciosos pueden durar 1 año o más.",
        },
        {
          question: "¿Qué documentos necesito para iniciar un divorcio?",
          answer:
            "Generalmente se requiere el certificado de matrimonio, identificaciones, información sobre bienes comunes y, si hay hijos, sus certificados de nacimiento.",
        },
        {
          question: "¿Cómo se determina la custodia de los hijos?",
          answer:
            "La custodia se determina considerando el mejor interés del menor, evaluando factores como la relación con cada padre, estabilidad, capacidad para atender sus necesidades, entre otros.",
        },
      ],
    },
    {
      id: "Cuota Alimentaria",
      title: "Cuota Alimentaria",
      url: "/servicios/familia/cuota-alimentaria",
      description: "Gestión de testamentos, sucesiones y distribución de bienes tras el fallecimiento.",
      image: "/images/cuotaalimentaria.jpg?height=200&width=300",
      faqs: [
        {
          question: "¿Quién puede solicitar una cuota alimentaria?",
          answer: 
            "El progenitor que convive con el menor, o en su representación un abogado, puede solicitarla. También puede hacerlo un tutor legal.",
        },
        {
          question: "¿Qué gastos cubre la cuota alimentaria?",
          answer:
            "Incluye alimentación, vivienda, vestimenta, educación, salud, actividades extracurriculares y otros gastos esenciales del menor.",
        },
        {
          question: "¿Cómo se determina el monto?",
          answer:
            "Se evalúa la necesidad del niño y la capacidad económica del progenitor obligado a pagar. No hay un porcentaje fijo, pero suele oscilar entre el 20% y el 30% de los ingresos.",
        },
      ],
    },
    {
      id: "Regimen de Comunicacion",
      title: "Régimen de Comunicación",
      url: "/servicios/familia/regimen-de-comunicacion",
      description: "Redacción, revisión y negociación de contratos entre particulares.",
      image: "/images/regimen1.jpg?height=200&width=300",
      faqs: [
        {
          question: "¿Qué es el régimen comunicacional?",
          answer:
            "Es el derecho del progenitor que no convive con el menor (y otros familiares cercanos) a mantener contacto regular y significativo con él.",
        },
        {
          question: "¿Quién lo establece?",
          answer:
            "Puede establecerse por acuerdo entre los padres o, en caso de conflicto, lo fija un juez con base en lo que más convenga al menor.",
        },
        {
          question: "¿Qué pasa si el otro progenitor impide el contacto?",
          answer:
            "Se puede denunciar judicialmente el impedimento de contacto y solicitar medidas urgentes para restablecer el vínculo.",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-24 bg-[#212d4b] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Derecho Familia</h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Nuestro equipo de abogados especialistas en derecho Familia le brindará el asesoramiento legal que
                necesita.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contacto">Solicitar Consulta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Servicios de Derecho Familia</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore nuestras áreas de especialización en derecho familia y descubra cómo podemos ayudarle.
            </p>
          </div>

          <div className="grid gap-10">
            {subcategories.map((subcategory) => (
              <SubcategoryCard
                key={subcategory.id}
                id={subcategory.id}
                title={subcategory.title}
                description={subcategory.description}
                image={subcategory.image}
                consultUrl={subcategory.url}
                faqs={subcategory.faqs}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

