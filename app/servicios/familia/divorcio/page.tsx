import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function JubilacionesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] py-12 md:py-24 text-white overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/images/divorcio2.jpg"
          alt="Servicios de jubilaciones"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Capa oscura (opcional, para mejorar contraste) */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Contenido */}
        <div className="relative z-20 container px-4 md:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-14">
            Especialistas en Divorcios
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Asesoramiento legal experto en procesos de divorcio, separación de bienes y custodia de hijos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#433E3F] text-[#433E3F] bg-white hover:bg-green-500 hover:text-white">
                <Link href="https://wa.me/5493517410304?text=Hola%2C%20quiero%20hacer%20una%20consulta%20por%20un%20divorcio." target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4" />
                  Contactar por WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              {/* Service Description */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Nuestros Servicios de Divorcio</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/images/divorcio6.jpg?height=300&width=500"
                      alt="Servicios de divorcio"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-muted-foreground mb-4">
                    El divorcio representa una etapa delicada y trascendental en la vida de una persona. En nuestro estudio, brindamos un acompañamiento legal integral para que pueda atravesar este proceso con seguridad y claridad.
                    </p>
                    <p className="text-muted-foreground">
                    Contamos con un equipo de abogados especializados en derecho de familia que lo asesorará en cada instancia, garantizando la protección de sus derechos y la mejor resolución posible en temas como división de bienes, tenencia, régimen de visitas y alimentos.
                    </p>
                  </div>
                </div>
              </div>
              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Proceso de Divorcio</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Consulta y Análisis de la Situación</h4>
                      <p className="text-muted-foreground">
                      Escuchamos su caso con confidencialidad y empatía, evaluando su situación personal, patrimonial y familiar para definir la mejor estrategia legal.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Negociación y Acuerdos</h4>
                      <p className="text-muted-foreground">
                      En los casos posibles, buscamos acuerdos consensuados sobre temas clave como división de bienes, tenencia de hijos, régimen de visitas y alimentos.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Redacción y Presentación de la Demanda</h4>
                      <p className="text-muted-foreground">
                      Preparamos toda la documentación legal necesaria y presentamos la demanda de divorcio ante el juzgado correspondiente, ya sea de mutuo acuerdo o contencioso.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Acompañamiento en el Proceso Judicial</h4>
                      <p className="text-muted-foreground">
                      Lo representamos en cada instancia judicial, manteniéndolo informado y velando por sus intereses durante todo el trámite.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Ejecución y Modificaciones Posteriores</h4>
                      <p className="text-muted-foreground">
                      Una vez dictada la sentencia, lo asistimos en la ejecución de lo acordado y en eventuales modificaciones si las circunstancias cambian con el tiempo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Services List */}
              <div>
                <h3 className="text-2xl font-bold mb-6">¿Cómo Podemos Ayudarle?</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#433E3F]/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-[#433E3F]" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Divorcio de Mutuo Acuerdo</h4>
                      <p className="text-muted-foreground">
                        Facilitamos el proceso cuando ambas partes están de acuerdo, redactando el convenio regulador y
                        tramitando todo el procedimiento de la manera más ágil posible.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#433E3F]/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-[#433E3F]" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Divorcio Contencioso</h4>
                      <p className="text-muted-foreground">
                        Representación legal completa cuando no hay acuerdo entre las partes, defendiendo sus intereses
                        en todas las fases del procedimiento judicial.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#433E3F]/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-[#433E3F]" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Custodia de Hijos</h4>
                      <p className="text-muted-foreground">
                        Asesoramiento especializado en la determinación de la custodia, régimen de visitas y pensión
                        alimenticia, priorizando siempre el bienestar de los menores.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#433E3F]/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-[#433E3F]" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">División de Bienes</h4>
                      <p className="text-muted-foreground">
                        Gestión de la liquidación del régimen económico matrimonial, asegurando un reparto equitativo de
                        los bienes comunes.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger className="text-left">
                    ¿Cuáles son los requisitos para iniciar un divorcio?
                    </AccordionTrigger>
                    <AccordionContent>
                    Para comenzar un trámite de divorcio, solo se necesita la decisión de una o ambas partes de disolver el vínculo. No es necesario invocar una causa, y puede hacerse de común acuerdo o en forma unilateral.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-left">
                    ¿Qué sucede con los bienes después del divorcio?
                    </AccordionTrigger>
                    <AccordionContent>
                    Los bienes adquiridos durante el matrimonio se dividen según el régimen patrimonial vigente (comunidad de bienes o separación). Si no hay acuerdo, el juez determinará la división.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-left">
                    ¿Qué pasa con los hijos menores?
                    </AccordionTrigger>
                    <AccordionContent>
                      Se debe acordar o solicitar judicialmente un régimen de cuidado personal (tenencia), visitas y alimentos, siempre priorizando el interés superior del niño.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-left">
                    ¿Cuánto tiempo demora un divorcio?
                    </AccordionTrigger>
                    <AccordionContent>
                    Depende del tipo de divorcio. Si es de mutuo acuerdo, puede resolverse en pocas semanas. En casos contenciosos, el proceso puede extenderse varios meses.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5">
                    <AccordionTrigger className="text-left">
                    ¿Necesito abogado para divorciarme?
                    </AccordionTrigger>
                    <AccordionContent>
                    Sí. La ley exige que cada parte cuente con patrocinio letrado, o uno conjunto si es de mutuo acuerdo.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">¿Necesita ayuda con su Divorcio?</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestros abogados especialistas están listos para ayudarle. Contáctenos hoy para una consulta
                    inicial sin compromiso.
                  </p>
                  <div className="space-y-4">
                    <Button asChild className="w-full bg-[#212d4b]">
                      <Link href="https://wa.me/5493517410304?text=Hola%2C%20quiero%20hacer%20una%20consulta%20por%20un%20divorcio." className="flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Solicitar Consulta Gratuita
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>


              {/* Why Choose Us */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">¿Por Qué Elegirnos?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Más de 10 años de experiencia en derecho de familia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Equipo especializado en divorcios y custodia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Atención personalizada y cercana</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Altas tasas de éxito en acuerdos amistosos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Honorarios transparentes sin sorpresas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Testimonials */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Testimonios de Clientes</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-yellow-600"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                      </div>
                      <p className="text-sm italic text-muted-foreground">
                        "Gracias a su profesionalidad y empatía, mi divorcio se resolvió de forma rápida y con un
                        acuerdo justo para ambas partes. Altamente recomendable."
                      </p>
                      <p className="text-sm font-medium">María G.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-yellow-600"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                      </div>
                      <p className="text-sm italic text-muted-foreground">
                        "En un momento tan difícil, contar con abogados que realmente se preocupan por tu caso marca la
                        diferencia. Consiguieron la custodia compartida que tanto deseaba."
                      </p>
                      <p className="text-sm font-medium">Carlos R.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Comience su Proceso de Divorcio con Asesoramiento Experto
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Nuestro equipo de abogados especializados está listo para guiarle en cada paso del camino.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="bg-[#212d4b]">
              <Link href="https://wa.me/5493517410304?text=Hola%2C%20quiero%20hacer%20una%20consulta%%20por%20un%20divorcio.">Solicitar Consulta Gratuita</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

