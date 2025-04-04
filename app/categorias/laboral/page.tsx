import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SubcategoryCard } from "@/components/subcategory-card"

export default function LaborLawPage() {
  const subcategories = [
    {
      id: "despidos",
      title: "Despidos",
      description:
        "Asesoramiento legal en casos de despido injustificado, negociación de indemnizaciones y reclamaciones laborales.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Qué debo hacer si me despiden injustificadamente?",
          answer:
            "Debe solicitar por escrito la carta de despido, no firmar documentos sin asesoramiento legal, y consultar con un abogado laboral lo antes posible para evaluar la legalidad del despido y las posibles acciones a tomar.",
        },
        {
          question: "¿Cuál es el plazo para reclamar por un despido?",
          answer:
            "Generalmente, el plazo para presentar una demanda por despido injustificado es de 20 días hábiles desde la fecha efectiva del despido, aunque puede variar según la jurisdicción.",
        },
        {
          question: "¿Qué indemnización me corresponde por despido?",
          answer:
            "La indemnización depende de varios factores como el tiempo trabajado, el salario, el tipo de contrato y la causa del despido. Un despido improcedente suele conllevar una indemnización mayor que uno procedente.",
        },
      ],
    },
    {
      id: "accidentes",
      title: "Accidentes Laborales",
      description:
        "Representación legal en casos de accidentes de trabajo, enfermedades profesionales y reclamaciones de indemnización.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Qué debo hacer si sufro un accidente laboral?",
          answer:
            "Debe informar inmediatamente a su empleador, buscar atención médica, asegurarse de que se registre el accidente, y consultar con un abogado especializado para proteger sus derechos a compensación.",
        },
        {
          question: "¿Puedo reclamar si la empresa no cumplía con las medidas de seguridad?",
          answer:
            "Sí, si el accidente se debe a incumplimientos en materia de prevención de riesgos laborales, puede reclamar un recargo en las prestaciones de la Seguridad Social e incluso una indemnización adicional por daños y perjuicios.",
        },
        {
          question: "¿Qué es una enfermedad profesional y cómo se diferencia de un accidente?",
          answer:
            "Una enfermedad profesional es aquella contraída como resultado de la exposición a factores de riesgo en el trabajo a lo largo del tiempo, mientras que un accidente es un suceso súbito y concreto. Ambos pueden generar derecho a prestaciones e indemnizaciones.",
        },
      ],
    },
    {
      id: "negociaciones",
      title: "Negociaciones Colectivas",
      description:
        "Asesoramiento en negociaciones de convenios colectivos, representación sindical y conflictos laborales colectivos.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Qué es un convenio colectivo?",
          answer:
            "Es un acuerdo entre representantes de los trabajadores y empresarios que regula las condiciones de trabajo (salarios, jornada, vacaciones, etc.) y establece derechos y obligaciones de las partes firmantes.",
        },
        {
          question: "¿Cómo se inicia una negociación colectiva?",
          answer:
            "Se inicia mediante la constitución de la comisión negociadora, con representantes de los trabajadores y de la empresa, tras la denuncia del convenio anterior o la propuesta de uno nuevo.",
        },
        {
          question: "¿Qué ocurre si no se llega a un acuerdo en la negociación?",
          answer:
            "Si no hay acuerdo, se puede recurrir a la mediación o al arbitraje. También puede derivar en medidas de presión como huelgas por parte de los trabajadores o aplicación de condiciones mínimas legales por parte de la empresa.",
        },
      ],
    },
    {
      id: "pensiones",
      title: "Pensiones Laborales",
      description:
        "Asesoramiento en derechos de pensión, planes de jubilación y reclamaciones ante la seguridad social.",
      image: "/placeholder.svg?height=200&width=300",
      faqs: [
        {
          question: "¿Cómo se calcula mi pensión de jubilación?",
          answer:
            "La pensión se calcula en base a la base reguladora (determinada por las bases de cotización de un período específico) y el porcentaje aplicable según los años cotizados, con posibles reducciones por jubilación anticipada.",
        },
        {
          question: "¿Puedo seguir trabajando después de jubilarme?",
          answer:
            "Sí, existen modalidades como la jubilación activa o la jubilación flexible que permiten compatibilizar la pensión con un trabajo, aunque con ciertas limitaciones y posibles reducciones en la cuantía de la pensión.",
        },
        {
          question: "¿Qué ocurre con mi pensión si he trabajado en varios países?",
          answer:
            "Los períodos cotizados en países con convenios de Seguridad Social pueden totalizarse para acceder a prestaciones. Cada país pagará la parte proporcional al tiempo cotizado en su sistema.",
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
                <span>Derecho Laboral</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Derecho Laboral</h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Protegemos los derechos de trabajadores y empresas en todas las áreas del derecho laboral, desde
                contrataciones hasta despidos y negociaciones colectivas.
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Servicios de Derecho Laboral</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore nuestras áreas de especialización en derecho laboral y descubra cómo podemos ayudarle.
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
                ¿Necesita Asesoramiento en Derecho Laboral?
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

