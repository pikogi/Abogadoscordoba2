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
          src="/images/jubilados3.jpg"
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
                Especialistas en Jubilaciones y Pensiones
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Asesoramiento experto en trámites de jubilación, pensiones y reclamaciones ante Anses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#433E3F] text-[#433E3F] hover:bg-green-500 hover:text-white"
              >
                <Link href="https://wa.me/5493517410304?text=Hola%2C%20quiero%20hacer%20una%20consulta%20por%20Jubilación." target="_blank" rel="noopener noreferrer">
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
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Nuestros Servicios de Jubilaciones</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image src="/images/jubilado3.jpg" alt="Servicios de jubilaciones" fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-muted-foreground mb-4">
                      La jubilación es una etapa crucial en la vida de toda persona. En nuestro bufete, le ofrecemos
                      asesoramiento especializado para que pueda acceder a la pensión que le corresponde.
                    </p>
                    <p className="text-muted-foreground">
                      Nuestro equipo de abogados expertos en derecho de la seguridad social le guiará en todos los
                      trámites necesarios, defendiendo sus derechos ante la administración.
                    </p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Nuestro Proceso</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Análisis de su Situación</h4>
                      <p className="text-muted-foreground">
                        Estudiamos su vida laboral, cotizaciones y circunstancias personales para determinar las
                        opciones de jubilación más favorables.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Cálculo de Pensión</h4>
                      <p className="text-muted-foreground">
                        Realizamos un cálculo detallado de la pensión que le correspondería según diferentes escenarios
                        y momentos de jubilación.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Tramitación de la Solicitud</h4>
                      <p className="text-muted-foreground">
                        Preparamos y presentamos toda la documentación necesaria ante la Seguridad Social para solicitar
                        su pensión.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Seguimiento del Expediente</h4>
                      <p className="text-muted-foreground">
                        Realizamos un seguimiento continuo de su expediente, respondiendo a posibles requerimientos de
                        la administración.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Reclamaciones si es Necesario</h4>
                      <p className="text-muted-foreground">
                        En caso de resolución desfavorable o cálculo incorrecto, presentamos las reclamaciones y
                        recursos necesarios para defender sus derechos.
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
                      <h4 className="text-xl font-bold mb-2">Jubilación Ordinaria</h4>
                      <p className="text-muted-foreground">
                        Asesoramiento completo para la solicitud de jubilación ordinaria, calculando la pensión óptima
                        según su historial laboral.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#433E3F]/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-[#433E3F]" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Jubilación Anticipada</h4>
                      <p className="text-muted-foreground">
                        Análisis de su situación para determinar si puede acceder a la jubilación anticipada y en qué
                        condiciones, minimizando las penalizaciones.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#433E3F]/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-[#433E3F]" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Pensiones de Viudedad</h4>
                      <p className="text-muted-foreground">
                        Tramitación de pensiones de viudedad, orfandad y en favor de familiares, asegurando el
                        reconocimiento de todos sus derechos.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#433E3F]/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-[#433E3F]" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Reclamaciones</h4>
                      <p className="text-muted-foreground">
                        Representación en reclamaciones por denegación de pensiones, cálculos incorrectos o cualquier
                        otra discrepancia con la Seguridad Social.
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
                      ¿Cuáles son los requisitos para jubilarse?
                    </AccordionTrigger>
                    <AccordionContent>
                      Generalmente se requiere una edad mínima (entre 65-67 años según el año de nacimiento y los años
                      cotizados) y un período mínimo de cotización a la seguridad social (15 años, de los cuales al
                      menos 2 deben estar dentro de los 15 años anteriores a la jubilación).
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-left">¿Qué hacer si me deniegan la jubilación?</AccordionTrigger>
                    <AccordionContent>
                      Puede presentar una reclamación previa ante la entidad gestora en el plazo de 30 días desde la
                      notificación. Si esta es denegada, puede interponer una demanda judicial en el plazo de 30 días
                      ante el Juzgado de lo Social. Nuestros abogados le representarán en todo el proceso.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-left">
                      ¿Puedo trabajar mientras recibo una pensión?
                    </AccordionTrigger>
                    <AccordionContent>
                      Depende del tipo de pensión y la modalidad de trabajo. Existen fórmulas como la jubilación activa
                      o la jubilación flexible que permiten compatibilizar trabajo y pensión con ciertas condiciones.
                      Nuestros abogados pueden asesorarle sobre la opción más favorable en su caso.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-left">
                      ¿Cómo se calcula la pensión de jubilación?
                    </AccordionTrigger>
                    <AccordionContent>
                      La pensión se calcula aplicando un porcentaje a la base reguladora. La base reguladora se obtiene
                      de las bases de cotización de un período determinado (actualmente 25 años, aumentando
                      progresivamente). El porcentaje depende de los años cotizados, alcanzando el 100% con 36 años y 6
                      meses (aumentando progresivamente hasta 37 años).
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5">
                    <AccordionTrigger className="text-left">
                      ¿Qué documentos necesito para solicitar la jubilación?
                    </AccordionTrigger>
                    <AccordionContent>
                      Generalmente se requiere el DNI, certificado de nacimiento, vida laboral, últimas nóminas y, en
                      algunos casos, documentación específica según su situación personal y laboral. Nuestro despacho le
                      ayudará a recopilar toda la documentación necesaria.
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
                  <h3 className="text-xl font-bold mb-4">¿Necesita asesoramiento sobre Jubilaciones?</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestros abogados especialistas están listos para ayudarle. Contáctenos hoy para una consulta
                    inicial sin compromiso.
                  </p>
                  <div className="space-y-4">
                    <Button asChild className="w-full bg-[#212d4b]">
                    <Link href="https://wa.me/5493517410304?text=Hola%2C%20quiero%20hacer%20una%20consulta%20por%20Jubilación." className="flex items-center justify-center gap-2">
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
                      <ChevronRight className="h-5 w-5 text-[#433E3F] flex-shrink-0 mt-0.5" />
                      <span>Especialistas en derecho de la seguridad social</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-[#433E3F] flex-shrink-0 mt-0.5" />
                      <span>Cálculos precisos de su pensión en diferentes escenarios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-[#433E3F] flex-shrink-0 mt-0.5" />
                      <span>Alto porcentaje de éxito en reclamaciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-[#433E3F] flex-shrink-0 mt-0.5" />
                      <span>Gestión integral de todos los trámites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-[#433E3F] flex-shrink-0 mt-0.5" />
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
                        "Gracias a su asesoramiento, pude jubilarme en el momento óptimo y con una pensión superior a la
                        que me ofrecía inicialmente la Seguridad Social. Su gestión fue impecable."
                      </p>
                      <p className="text-sm font-medium">Antonio R.</p>
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
                        "Me denegaron la pensión de viudedad por un error administrativo. Gracias a su intervención y
                        recursos presentados, finalmente me la concedieron con efectos retroactivos."
                      </p>
                      <p className="text-sm font-medium">Carmen L.</p>
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
                Asegure su Futuro con Asesoramiento Experto
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Nuestro equipo de abogados especializados está listo para ayudarle a obtener la pensión que merece.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg"className="bg-[#212d4b]">
              <Link href="https://wa.me/5493517410304?text=Hola%2C%20quiero%20hacer%20una%20consulta%20por%20Jubilación.">Solicitar Consulta Gratuita</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
