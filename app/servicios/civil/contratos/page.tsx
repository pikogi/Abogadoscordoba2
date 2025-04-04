import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContratosPage() {
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
                <span>Contratos Civiles</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Especialistas en Contratos Civiles
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Redacción, revisión y negociación de contratos entre particulares con las máximas garantías legales.
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
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Nuestros Servicios de Contratos</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Servicios de contratos"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-muted-foreground mb-4">
                      Un contrato bien redactado es la mejor garantía para evitar conflictos futuros. En nuestro bufete,
                      nos especializamos en la redacción, revisión y negociación de todo tipo de contratos civiles.
                    </p>
                    <p className="text-muted-foreground">
                      Nuestro equipo de abogados expertos en derecho contractual le asesorará para proteger sus
                      intereses y asegurar que todos los acuerdos cumplan con la legislación vigente.
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
                      <h4 className="text-xl font-bold mb-2">Contratos de Compraventa</h4>
                      <p className="text-muted-foreground">
                        Redacción y revisión de contratos para la compraventa de bienes muebles e inmuebles, con todas
                        las garantías legales.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Contratos de Arrendamiento</h4>
                      <p className="text-muted-foreground">
                        Elaboración de contratos de alquiler de viviendas, locales comerciales y otros inmuebles,
                        protegiendo los intereses de propietarios e inquilinos.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Contratos de Préstamo</h4>
                      <p className="text-muted-foreground">
                        Redacción de contratos de préstamo entre particulares, estableciendo claramente las condiciones
                        de devolución y garantías.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Contratos de Servicios</h4>
                      <p className="text-muted-foreground">
                        Elaboración de contratos para la prestación de servicios profesionales, obras y reformas, con
                        cláusulas específicas según el sector.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Nuestro Proceso</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Análisis de Necesidades</h4>
                      <p className="text-muted-foreground">
                        Estudiamos en detalle sus necesidades y objetivos para determinar el tipo de contrato más
                        adecuado a su situación.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Redacción del Contrato</h4>
                      <p className="text-muted-foreground">
                        Elaboramos un contrato a medida, incluyendo todas las cláusulas necesarias para proteger sus
                        intereses y cumplir con la legislación vigente.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Revisión y Ajustes</h4>
                      <p className="text-muted-foreground">
                        Revisamos el contrato con usted, explicando cada cláusula y realizando los ajustes necesarios
                        hasta su completa satisfacción.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Negociación</h4>
                      <p className="text-muted-foreground">
                        Si es necesario, negociamos con la otra parte para llegar a un acuerdo que satisfaga a ambas
                        partes, siempre defendiendo sus intereses.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Formalización</h4>
                      <p className="text-muted-foreground">
                        Asistimos a la firma del contrato y, cuando sea necesario, gestionamos su elevación a escritura
                        pública e inscripción en registros.
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
                      ¿Qué elementos debe contener un contrato para ser válido?
                    </AccordionTrigger>
                    <AccordionContent>
                      Un contrato válido debe tener consentimiento de las partes, objeto lícito, causa lícita y, en
                      algunos casos, formalidades específicas como escritura pública. Además, las partes deben tener
                      capacidad legal para contratar.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-left">
                      ¿Puedo rescindir un contrato unilateralmente?
                    </AccordionTrigger>
                    <AccordionContent>
                      Generalmente no, salvo que el contrato lo permita expresamente o existan causas legales como
                      incumplimiento de la otra parte o vicios en el consentimiento. Cada caso debe analizarse
                      individualmente según el tipo de contrato y las circunstancias.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-left">
                      ¿Es necesario que un abogado redacte mis contratos?
                    </AccordionTrigger>
                    <AccordionContent>
                      Aunque no es obligatorio, es altamente recomendable para asegurar que el contrato cumpla con la
                      legislación vigente y proteja adecuadamente sus intereses. Un contrato mal redactado puede generar
                      problemas y costes mucho mayores en el futuro.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-left">
                      ¿Qué diferencia hay entre arras y señal en un contrato de compraventa?
                    </AccordionTrigger>
                    <AccordionContent>
                      Las arras son una garantía que puede ser confirmatoria (parte del precio), penitencial (permite
                      desistir del contrato con penalización) o penales (indemnización por incumplimiento). La señal
                      suele referirse a un pago a cuenta del precio sin consecuencias específicas por desistimiento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5">
                    <AccordionTrigger className="text-left">
                      ¿Cuánto cuesta la redacción de un contrato?
                    </AccordionTrigger>
                    <AccordionContent>
                      El coste varía según la complejidad del contrato, el valor de la operación y el tiempo necesario
                      para su elaboración. En nuestra primera consulta, le proporcionaremos un presupuesto detallado sin
                      compromiso, adaptado a sus necesidades específicas.
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
                  <h3 className="text-xl font-bold mb-4">¿Necesita Asesoramiento en Contratos?</h3>
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
                      <span>Especialistas en derecho contractual con amplia experiencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Contratos personalizados según sus necesidades específicas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Lenguaje claro y comprensible en todos nuestros documentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Asesoramiento integral durante todo el proceso</span>
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
                        "Gracias a su asesoramiento, pudimos redactar un contrato de compraventa que nos protegió de
                        problemas futuros. Su profesionalidad y claridad en las explicaciones fueron excepcionales."
                      </p>
                      <p className="text-sm font-medium">Pedro M.</p>
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
                        "Contratamos sus servicios para revisar un contrato de arrendamiento y detectaron cláusulas
                        abusivas que nos habrían perjudicado. Su intervención fue decisiva para negociar condiciones
                        justas."
                      </p>
                      <p className="text-sm font-medium">Laura T.</p>
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
                Asegure sus Acuerdos con Contratos Profesionales
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Nuestro equipo de abogados especializados está listo para redactar, revisar o negociar sus contratos con
                las máximas garantías legales.
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

