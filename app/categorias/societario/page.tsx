import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SubcategoryCard } from "@/components/subcategory-card"

export default function CorporateLawPage() {
  const subcategories = [
    {
      id: "constitucion",
      title: "Constitución de Empresas",
      description:
        "Asesoramiento legal en la creación y constitución de sociedades, elección de forma jurídica y trámites administrativos.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Qué forma jurídica es la más adecuada para mi negocio?",
          answer:
            "Depende de factores como el número de socios, capital inicial, responsabilidad deseada y régimen fiscal. Las opciones más comunes son autónomo, sociedad limitada (SL) o sociedad anónima (SA).",
        },
        {
          question: "¿Cuánto cuesta constituir una sociedad limitada?",
          answer:
            "Los costes incluyen el capital social mínimo (3.000€), gastos notariales, inscripción en el Registro Mercantil, y posibles honorarios de asesoramiento. En total, puede oscilar entre 3.500€ y 4.500€.",
        },
        {
          question: "¿Cuánto tiempo toma constituir una empresa?",
          answer:
            "El proceso completo puede llevar entre 2 y 6 semanas, dependiendo de la complejidad de la sociedad, la carga de trabajo de los organismos públicos y si se utiliza la tramitación telemática.",
        },
      ],
    },
    {
      id: "fusiones",
      title: "Fusiones y Adquisiciones",
      description: "Asesoramiento legal en procesos de fusión, adquisición, escisión y reestructuración empresarial.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Cuáles son las etapas de una fusión o adquisición?",
          answer:
            "El proceso incluye: valoración inicial, carta de intenciones, due diligence, negociación del contrato, cierre de la operación e integración post-fusión.",
        },
        {
          question: "¿Qué aspectos legales debo considerar en una fusión?",
          answer:
            "Es importante analizar aspectos laborales, fiscales, contractuales, de propiedad intelectual, competencia, y obtener las autorizaciones regulatorias necesarias.",
        },
        {
          question: "¿Cuál es la diferencia entre fusión y adquisición?",
          answer:
            "En una fusión, dos empresas se unen para formar una nueva entidad, mientras que en una adquisición, una empresa compra a otra y mantiene su identidad, absorbiendo a la empresa adquirida.",
        },
      ],
    },
    {
      id: "contratos-comerciales",
      title: "Contratos Comerciales",
      description:
        "Redacción, revisión y negociación de contratos mercantiles, acuerdos de distribución, franquicias y joint ventures.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Qué elementos debe incluir un contrato comercial?",
          answer:
            "Debe incluir identificación de las partes, objeto del contrato, precio y forma de pago, duración, obligaciones de las partes, cláusulas de confidencialidad, exclusividad, resolución de conflictos y ley aplicable.",
        },
        {
          question: "¿Qué es un contrato de distribución?",
          answer:
            "Es un acuerdo por el que una parte (distribuidor) adquiere productos de otra (proveedor) para revenderlos en un territorio determinado, estableciendo las condiciones comerciales de esta relación.",
        },
        {
          question: "¿Cuáles son los riesgos de no formalizar adecuadamente un contrato comercial?",
          answer:
            "Los riesgos incluyen interpretaciones divergentes de los acuerdos, dificultad para exigir el cumplimiento, problemas en la resolución de conflictos y posibles responsabilidades no previstas.",
        },
      ],
    },
    {
      id: "propiedad-intelectual",
      title: "Propiedad Intelectual e Industrial",
      description: "Protección de marcas, patentes, derechos de autor y secretos comerciales en el ámbito empresarial.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Cómo puedo proteger la marca de mi empresa?",
          answer:
            "La protección se obtiene mediante el registro de la marca en la Oficina de Propiedad Intelectual correspondiente, lo que otorga derechos exclusivos de uso en el territorio registrado.",
        },
        {
          question: "¿Qué diferencia hay entre propiedad intelectual e industrial?",
          answer:
            "La propiedad intelectual protege creaciones del intelecto (obras literarias, artísticas), mientras que la industrial protege invenciones técnicas (patentes), signos distintivos (marcas) y diseños industriales.",
        },
        {
          question: "¿Por cuánto tiempo está protegida una patente?",
          answer:
            "Generalmente, una patente tiene una duración de 20 años desde la fecha de solicitud, siempre que se paguen las tasas de mantenimiento correspondientes.",
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
                <span>Derecho Societario</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Derecho Societario</h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Asesoramiento legal integral para empresas en todas las etapas de su desarrollo, desde su constitución
                hasta operaciones complejas de fusión y adquisición.
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Nuestros Servicios de Derecho Societario
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore nuestras áreas de especialización en derecho societario y descubra cómo podemos ayudar a su
              empresa.
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
                ¿Necesita Asesoramiento en Derecho Societario?
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

