import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DivorciosPage() {
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
                <Link href="/categorias/civil" className="hover:underline">
                  Derecho Civil
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Divorcios</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Especialistas en Divorcios
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Asesoramiento legal experto en procesos de divorcio, separación de bienes y custodia de hijos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contacto">Solicitar Consulta</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary bg-white hover:bg-primary hover:text-white"
              >
                <Link href="https://wa.me/5493517410304" target="_blank" rel="noopener noreferrer">
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
                      src="/placeholder.svg?height=300&width=500"
                      alt="Servicios de divorcio"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-muted-foreground mb-4">
                      En nuestro bufete jurídico, entendemos que el divorcio es uno de los momentos más difíciles en la
                      vida de una persona. Por eso, ofrecemos un servicio integral y personalizado para guiarle durante
                      todo el proceso.
                    </p>
                    <p className="text-muted-foreground">
                      Nuestro equipo de abogados especializados en derecho de familia le asesorará sobre sus derechos y
                      opciones, buscando siempre la solución más favorable para usted y su familia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div>
                <h3 className="text-2xl font-bold mb-6">¿Cómo Podemos Ayudarle?</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
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
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
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
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
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
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
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

              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Proceso de Divorcio</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Consulta Inicial</h4>
                      <p className="text-muted-foreground">
                        Evaluamos su situación, le explicamos sus derechos y opciones, y diseñamos una estrategia
                        personalizada para su caso.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Negociación</h4>
                      <p className="text-muted-foreground">
                        Intentamos llegar a un acuerdo con la otra parte sobre los términos del divorcio, evitando en lo
                        posible un proceso contencioso.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Presentación de la Demanda</h4>
                      <p className="text-muted-foreground">
                        Redactamos y presentamos la demanda de divorcio ante el juzgado competente, ya sea de mutuo
                        acuerdo o contencioso.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Procedimiento Judicial</h4>
                      <p className="text-muted-foreground">
                        Le representamos en todas las fases del procedimiento, incluyendo vistas y comparecencias ante
                        el juez.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Sentencia y Ejecución</h4>
                      <p className="text-muted-foreground">
                        Una vez obtenida la sentencia de divorcio, le ayudamos con la ejecución de las medidas acordadas
                        y cualquier modificación posterior que sea necesaria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger className="text-left">
                      ¿Cuánto tiempo toma un proceso de divorcio?
                    </AccordionTrigger>
                    <AccordionContent>
                      El tiempo puede variar dependiendo de si es un divorcio de mutuo acuerdo o contencioso. En casos
                      de mutuo acuerdo, puede resolverse en 2-3 meses, mientras que los contenciosos pueden durar 1 año
                      o más.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-left">
                      ¿Qué documentos necesito para iniciar un divorcio?
                    </AccordionTrigger>
                    <AccordionContent>
                      Generalmente se requiere el certificado de matrimonio, identificaciones, información sobre bienes
                      comunes y, si hay hijos, sus certificados de nacimiento. Nuestro equipo le guiará en la
                      recopilación de toda la documentación necesaria.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-left">
                      ¿Cómo se determina la custodia de los hijos?
                    </AccordionTrigger>
                    <AccordionContent>
                      La custodia se determina considerando el mejor interés del menor, evaluando factores como la
                      relación con cada padre, estabilidad, capacidad para atender sus necesidades, entre otros. El juez
                      puede solicitar informes psicosociales para tomar la decisión.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-left">
                      ¿Puedo modificar las medidas acordadas después del divorcio?
                    </AccordionTrigger>
                    <AccordionContent>
                      Sí, las medidas como la custodia, régimen de visitas o pensiones pueden modificarse si hay un
                      cambio sustancial en las circunstancias. Nuestros abogados pueden asesorarle y representarle en
                      estos procedimientos de modificación.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5">
                    <AccordionTrigger className="text-left">
                      ¿Cuál es el coste de un procedimiento de divorcio?
                    </AccordionTrigger>
                    <AccordionContent>
                      El coste varía según la complejidad del caso y si es de mutuo acuerdo o contencioso. En nuestra
                      primera consulta, le proporcionaremos un presupuesto detallado sin compromiso, adaptado a sus
                      necesidades específicas.
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
                  <h3 className="text-xl font-bold mb-4">¿Necesita Ayuda con su Divorcio?</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestros abogados especialistas están listos para ayudarle. Contáctenos hoy para una consulta
                    inicial sin compromiso.
                  </p>
                  <div className="space-y-4">
                    <Button asChild className="w-full">
                      <Link href="/contacto" className="flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Solicitar Cita
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary bg-white hover:bg-primary hover:text-white"
                    >
                      <Link
                        href="https://wa.me/5493517410304"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
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
                        WhatsApp
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
                      <span>Más de 20 años de experiencia en derecho de familia</span>
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
                              className="text-primary"
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
                              className="text-primary"
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
              <Button asChild size="lg">
                <Link href="/contacto">Solicitar Consulta Gratuita</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary bg-white hover:bg-primary hover:text-white"
              >
                <Link href="https://wa.me/5493517410304" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

