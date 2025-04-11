import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { CategoryCard } from "@/components/category-card"
import { ScrollIndicator } from "@/components/scroll-indicator"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        Hero Section con header integrado dentro del banner
      */}
      <section className="relative w-full md:min-h-screen flex flex-col items-center py-12 md:py-24 lg:py-32 text-white">
        {/* Overlay para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Gradiente sobre la imagen */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* Imagen de fondo usando Next.js Image para mejor rendimiento y garantizar la carga */}
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <Image src="/images/Abogado2.jpg" alt="Fondo de bufete jurídico" fill priority className="object-cover" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col h-full">
          <div className="flex flex-col items-center space-y-4 text-center mt-16">
            <div className="mt:space-y-6 sm:space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                ABOGADOS CORDOBA
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Expertos en derecho previsional, civil, laboral, Familia y societario.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row mt-12 sm:space-x-6 space-y-4 sm:space-y-0 sm:pt-8">
            <Button asChild size="lg" className="bg-white text-[#433E3F] hover:bg-white/60">
            <Link href="#categories">Nuestros Servicios</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-[#433E3F] hover:bg-white/60">
             <Link href="https://wa.me/5493517410304" target="_blank" rel="noopener noreferrer">
              Contactar por WhatsApp
            </Link>
            </Button>
            </div>
          </div>
        </div>

        {/* Indicador de scroll - solo visible en desktop */}
        <ScrollIndicator targetId="categories" />
      </section>

      {/* Categories Section */}
      <section id="categories" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl text-[#433E3F] font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
              <p className="mx-auto max-w-[700px] text-[#433E3F]  md:text-xl">
                Explore nuestras áreas de especialización y descubra cómo podemos ayudarle con sus necesidades legales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
            <CategoryCard
                title="Derecho Previsional"
                description="Jubilaciones y pensiones."
                href="/categorias/previsional"
                icon="pension"
              />
            <CategoryCard
                title="Derecho Familia"
                description="Divorcio, Cuota alimentaria, Régimen de comunicación."
                href="/categorias/familia"
                icon="family"
              />
              <CategoryCard
                title="Derecho Civil"
                description="Accidentes de tránsito, declaratorias de herederos, contratos y más"
                href="/categorias/civil"
                icon="scale"
              />
              <CategoryCard
                title="Derecho Laboral"
                description="Relaciones laborales, despidos, compensaciones."
                href="/categorias/laboral"
                icon="briefcase"
              />
              <CategoryCard
                title="Derecho Societario"
                description="Constitución de sociedades, fusiones, adquisiciones."
                href="/categorias/societario"
                icon="building"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl text-[#433E3F] font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Necesita Asesoramiento Legal?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl text-[#433E3F]">
                Nuestro equipo de abogados expertos está listo para ayudarle. Contáctenos hoy para una consulta inicial.
              </p>
            </div>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contacto" className="flex items-center gap-2">
                Solicitar Consulta <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#433E3F]">Lo Que Dicen Nuestros Clientes</h2>
              <p className="mx-auto max-w-[700px] md:text-xl text-[#433E3F]">
                Testimonios de clientes satisfechos con nuestros servicios legales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col p-6 bg-background rounded-lg shadow-sm w-full">
                  <div className="flex items-center space-x-2 mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <svg
                          key={j}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-yellow-600 h-5 w-5"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                  </div>
                  <p className="italic mb-4 text-[#433E3F]">
                    "El equipo de abogados resolvió mi caso con profesionalismo y dedicación. Altamente recomendados."
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-[#433E3F]">Cliente Satisfecho {i}</p>
                    <p className="text-sm text-yellow-600">Caso de Derecho Civil</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

