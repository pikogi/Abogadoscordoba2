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
          src="/images/cuotaalimentaria.jpg"
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
            Especialistas en Cuota Alimentaria
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Asesoramiento legal experto en Cuota Alimentaria.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#433E3F] text-[#433E3F] hover:bg-green-500 hover:text-white"
              >
               <Link href="https://wa.me/5493517410304?text=Hola%2C%20quiero%20hacer%20una%20consulta%20por%20Cuota%20Alimentaria." target="_blank" rel="noopener noreferrer">
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
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Nuestros Servicios de Cuota Alimentaria</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/images/cuotaalimentaria1.jpg?height=300&width=500"
                      alt="Servicios de divorcio"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-muted-foreground mb-4">
                    Garantizar el bienestar económico de los hijos es una responsabilidad fundamental. En nuestro estudio, lo asesoramos en todo lo relacionado con la fijación, modificación o ejecución de la cuota alimentaria.
                    </p>
                    <p className="text-muted-foreground">
                    Nuestro equipo de abogados especializados en derecho de familia trabaja para asegurar que se respeten los derechos de los niños, defendiendo tanto a quienes deben recibir como a quienes deben cumplir con esta obligación.
                    </p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Proceso de Cuota Alimentaria</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Evaluación de la Situación Familiar y Económica</h4>
                      <p className="text-muted-foreground">
                      Analizamos los ingresos, necesidades del menor y capacidad económica de las partes para determinar un monto justo y sostenible.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Negociación entre las Partes</h4>
                      <p className="text-muted-foreground">
                      Intentamos lograr un acuerdo extrajudicial que contemple los intereses de ambas partes y priorice el bienestar de los hijos.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Presentación Judicial de la Demanda</h4>
                      <p className="text-muted-foreground">
                      En caso de desacuerdo, iniciamos el proceso judicial para solicitar la fijación o actualización de la cuota ante el juez de familia.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Seguimiento del Cumplimiento</h4>
                      <p className="text-muted-foreground">
                      Controlamos que la parte obligada cumpla con el pago en tiempo y forma, y actuamos ante cualquier incumplimiento.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#212d4b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Reajustes o Reclamos Judiciales</h4>
                      <p className="text-muted-foreground">
                      Si cambian las circunstancias o se acumulan deudas, iniciamos los reclamos y solicitudes de reajuste correspondientes.
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
                    ¿Quién puede solicitar una cuota alimentaria?
                    </AccordionTrigger>
                    <AccordionContent>
                    El progenitor que convive con el menor, o en su representación un abogado, puede solicitarla. También puede hacerlo un tutor legal.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-left">
                    ¿Qué gastos cubre la cuota alimentaria?
                    </AccordionTrigger>
                    <AccordionContent>
                    Incluye alimentación, vivienda, vestimenta, educación, salud, actividades extracurriculares y otros gastos esenciales del menor.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-left">
                    ¿Cómo se determina el monto?
                    </AccordionTrigger>
                    <AccordionContent>
                    Se evalúa la necesidad del niño y la capacidad económica del progenitor obligado a pagar. No hay un porcentaje fijo, pero suele oscilar entre el 20% y el 30% de los ingresos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-left">
                    ¿Qué hacer si no se paga la cuota?
                    </AccordionTrigger>
                    <AccordionContent>
                    Se puede iniciar una ejecución judicial, solicitar embargos o incluso medidas más severas, como la inhibición o el pedido de restricción para salir del país.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5">
                    <AccordionTrigger className="text-left">
                    ¿Puede modificarse la cuota con el tiempo?
                    </AccordionTrigger>
                    <AccordionContent>
                    Sí, si cambian las circunstancias económicas de alguna de las partes o las necesidades del hijo, puede solicitarse una actualización judicial.
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
                  <h3 className="text-xl font-bold mb-4">¿Necesita ayuda con la Cuota Alimentaria?</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestros abogados especialistas están listos para ayudarle. Contáctenos hoy para una consulta
                    inicial sin compromiso.
                  </p>
                  <div className="space-y-4">
                    <Button asChild className="w-full bg-[#212d4b]">
                    <Link href="https://wa.me/5493517410304?text=Hola%2C%20quiero%20hacer%20una%20consulta%20por%20Cuota%20Alimentaria." className="flex items-center justify-center gap-2">
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
              <Button asChild size="lg"className="bg-[#212d4b]">
              <Link href="https://wa.me/5493517410304?text=Hola%2C%20quiero%20hacer%20una%20consulta%20por%20Cuota%20Alimentaria.">Solicitar Consulta Gratuita</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

