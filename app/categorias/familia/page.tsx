import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SubcategoryCard } from "@/components/subcategory-card"

export default function FamiliaLawPage() {
  const subcategories = [
    {
      id: "divorcios",
      title: "Divorcios",
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
    {
      id: "Cuota Alimentaria",
      title: "Cuota Alimentaria",
      description: "Gestión de testamentos, sucesiones y distribución de bienes tras el fallecimiento.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Qué ocurre si alguien fallece sin testamento?",
          answer:
            "Se aplica la sucesión intestada, donde la ley determina quiénes son los herederos y en qué proporción recibirán los bienes según el orden de parentesco.",
        },
        {
          question: "¿Cuánto tiempo tengo para reclamar una herencia?",
          answer:
            "El plazo para aceptar o renunciar a una herencia generalmente es de 10 años, aunque puede variar según la jurisdicción.",
        },
        {
          question: "¿Puedo impugnar un testamento?",
          answer:
            "Sí, un testamento puede impugnarse por causas como vicios de forma, incapacidad del testador, coacción o fraude, dentro de los plazos legales establecidos.",
        },
      ],
    },
    {
      id: "Regimen de Comunicacion",
      title: "Régimen de Comunicación",
      description: "Redacción, revisión y negociación de contratos entre particulares.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Qué elementos debe contener un contrato para ser válido?",
          answer:
            "Un contrato válido debe tener consentimiento de las partes, objeto lícito, causa lícita y, en algunos casos, formalidades específicas como escritura pública.",
        },
        {
          question: "¿Puedo rescindir un contrato unilateralmente?",
          answer:
            "Generalmente no, salvo que el contrato lo permita expresamente o existan causas legales como incumplimiento de la otra parte o vicios en el consentimiento.",
        },
        {
          question: "¿Es necesario que un abogado redacte mis contratos?",
          answer:
            "Aunque no es obligatorio, es altamente recomendable para asegurar que el contrato cumpla con la legislación vigente y proteja adecuadamente sus intereses.",
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
                <span>Derecho Familia</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Derecho Familia</h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Nuestro equipo de abogados especialistas en derecho Familia le brindará el asesoramiento legal que
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
                ¿Necesita Asesoramiento en Derecho Familia?
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

