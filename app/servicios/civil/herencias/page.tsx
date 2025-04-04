import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HerenciasPage() {
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
                <span>Herencias y Sucesiones</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Especialistas en Herencias y Sucesiones
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Asesoramiento legal experto en testamentos, sucesiones y distribución de bienes tras el fallecimiento.
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
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Nuestros Servicios de Herencias</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Servicios de herencias"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-muted-foreground mb-4">
                      La gestión de una herencia puede ser un proceso complejo y emocionalmente difícil. En nuestro
                      bufete, le ofrecemos un asesoramiento integral para facilitar todos los trámites sucesorios.
                    </p>
                    <p className="text-muted-foreground">
                      Nuestro equipo de abogados especializados en derecho sucesorio le guiará en cada paso, desde la
                      planificación testamentaria hasta la distribución final de los bienes.
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
                      <h4 className="text-xl font-bold mb-2">Testamentos</h4>
                      <p className="text-muted-foreground">
                        Redacción, revisión y asesoramiento en la elaboración de testamentos, asegurando que reflejen
                        fielmente su voluntad y cumplan con todos los requisitos legales.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Sucesiones Intestadas</h4>
                      <p className="text-muted-foreground">
                        Gestión completa del proceso sucesorio cuando no existe testamento, determinando los herederos
                        legales y sus derechos según la legislación vigente.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Partición de Herencia</h4>
                      <p className="text-muted-foreground">
                        Asesoramiento y representación en el proceso de división y adjudicación de los bienes
                        hereditarios entre los herederos.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Impuestos Sucesorios</h4>
                      <p className="text-muted-foreground">
                        Planificación fiscal y gestión de los impuestos derivados de la herencia, buscando la
                        optimización fiscal dentro del marco legal.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Proceso de Tramitación de Herencias</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Consulta Inicial</h4>
                      <p className="text-muted-foreground">
                        Evaluamos su situación, recopilamos la documentación necesaria y le explicamos el proceso a
                        seguir.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Certificado de Últimas Voluntades</h4>
                      <p className="text-muted-foreground">
                        Obtenemos el certificado para verificar la existencia o no de testamento y determinamos los
                        herederos legales.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Inventario de Bienes</h4>
                      <p className="text-muted-foreground">
                        Realizamos un inventario completo de los bienes, derechos y obligaciones que componen la
                        herencia.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Aceptación y Adjudicación</h4>
                      <p className="text-muted-foreground">
                        Preparamos la escritura de aceptación y adjudicación de herencia, distribuyendo los bienes según
                        el testamento o la ley.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Liquidación de Impuestos</h4>
                      <p className="text-muted-foreground">
                        Gestionamos la liquidación del Impuesto de Sucesiones y otros tributos aplicables dentro de los
                        plazos legales.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Inscripción Registral</h4>
                      <p className="text-muted-foreground">
                        Inscribimos los bienes inmuebles y otros activos registrables a nombre de los nuevos
                        propietarios.
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
                      ¿Qué ocurre si alguien fallece sin testamento?
                    </AccordionTrigger>
                    <AccordionContent>
                      Se aplica la sucesión intestada, donde la ley determina quiénes son los herederos y en qué
                      proporción recibirán los bienes según el orden de parentesco establecido en el Código Civil.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-left">
                      ¿Cuánto tiempo tengo para reclamar una herencia?
                    </AccordionTrigger>
                    <AccordionContent>
                      El plazo para aceptar o renunciar a una herencia generalmente es de 10 años, aunque puede variar
                      según la jurisdicción. Sin embargo, el Impuesto de Sucesiones debe liquidarse en un plazo de 6
                      meses desde el fallecimiento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-left">¿Puedo impugnar un testamento?</AccordionTrigger>
                    <AccordionContent>
                      Sí, un testamento puede impugnarse por causas como vicios de forma, incapacidad del testador,
                      coacción o fraude, dentro de los plazos legales establecidos. Nuestros abogados pueden asesorarle
                      sobre la viabilidad de la impugnación en su caso concreto.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-left">
                      ¿Qué es la legítima y quiénes son los herederos forzosos?
                    </AccordionTrigger>
                    <AccordionContent>
                      La legítima es la porción de la herencia que la ley reserva a determinados herederos, llamados
                      herederos forzosos o legitimarios. En España, son legitimarios los hijos y descendientes, y en su
                      defecto, los padres y ascendientes. El cónyuge viudo también tiene derechos legitimarios.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5">
                    <AccordionTrigger className="text-left">
                      ¿Cuál es el coste de tramitar una herencia?
                    </AccordionTrigger>
                    <AccordionContent>
                      El coste varía según la complejidad de la herencia, el número de herederos y el valor de los
                      bienes. Incluye honorarios de abogados, notarios, registradores e impuestos. En nuestra primera
                      consulta, le proporcionaremos un presupuesto detallado sin compromiso.
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
                  <h3 className="text-xl font-bold mb-4">¿Necesita Ayuda con una Herencia?</h3>
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
                      <span>Especialistas en derecho sucesorio con amplia experiencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Gestión integral de todo el proceso hereditario</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Asesoramiento personalizado y cercano</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Optimización fiscal dentro del marco legal</span>
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
                        "En un momento tan difícil como la pérdida de un ser querido, su asesoramiento profesional y
                        humano fue fundamental para gestionar la herencia sin conflictos familiares."
                      </p>
                      <p className="text-sm font-medium">Ana L.</p>
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
                        "Gracias a su experiencia, pudimos resolver una herencia compleja con propiedades en diferentes
                        países. Su gestión fue impecable y nos ahorraron muchos quebraderos de cabeza."
                      </p>
                      <p className="text-sm font-medium">Miguel S.</p>
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
                Gestione su Herencia con Asesoramiento Experto
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Nuestro equipo de abogados especializados está listo para guiarle en cada paso del proceso sucesorio.
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

