import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SubcategoryCard } from "@/components/subcategory-card"

export default function PrevisionalLawPage() {
  const subcategories = [
    {
      id: "jubilaciones",
      title: "Jubilaciones",
      description: "Asesoramiento en trámites de jubilación, pensiones y reclamaciones ante la seguridad social.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Cuáles son los requisitos para jubilarse?",
          answer:
            "Generalmente se requiere una edad mínima (entre 60-67 años según el país) y un período mínimo de cotización a la seguridad social.",
        },
        {
          question: "¿Qué hacer si me deniegan la jubilación?",
          answer:
            "Puede presentar un recurso administrativo y, si este es denegado, acudir a la vía judicial mediante una demanda contra la entidad de seguridad social.",
        },
        {
          question: "¿Puedo trabajar mientras recibo una pensión?",
          answer:
            "Depende del tipo de pensión y la legislación aplicable. En algunos casos es posible, pero puede implicar reducciones en la cuantía de la pensión.",
        },
      ],
    },
    {
      id: "Pensiones",
      title: "Pensiones",
      description: "Asesoramiento legal en procesos de divorcio, separación de bienes y custodia de hijos.",
      image: "/placeholder.svg?height=200&width=300",
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
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/80 to-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm mb-4">
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Derecho Previsional</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Derecho Previsional</h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Nuestro equipo de abogados especialistas en derecho previsional le brindará el asesoramiento legal que
                necesita para resolver sus asuntos personales y familiares.
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Servicios de Derecho Previsional</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore nuestras áreas de especialización en derecho previsional y descubra cómo podemos ayudarle.
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
                faqs={subcategory.faqs}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                ¿Necesita Asesoramiento en Derecho Previsional?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Nuestro equipo de abogados expertos está listo para ayudarle. Contáctenos hoy para una consulta inicial.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg">
                <Link href="/contacto">Solicitar Consulta</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="tel:+123456789">Llamar Ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

