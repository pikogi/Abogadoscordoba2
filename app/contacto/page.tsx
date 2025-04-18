import { Building, Mail, MapPin, Phone, MessageCircleMore } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full min-h-[60vh] py-12 md:py-24 bg-[#212d4b] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-14">
            Contacte con Nuestros Abogados
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/90">
                Estamos aquí para ayudarle. Complete el formulario a continuación o utilice nuestros datos de contacto
                para programar una consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="w-full">
              <h2 className="text-3xl font-bold tracking-tighter mb-4 flex items-center gap-2">
                Envíenos un Mensaje por Whatsapp</h2>
              <p className="text-muted-foreground mb-8">
              Envíenos un mensaje por Whatsapp y uno de nuestros abogados se pondrá en contacto con usted a la
                mayor brevedad posible.
              </p>
                <Button asChild className="w-full bg-[#212d4b]">
                  <Link href="https://wa.me/5493517410304?text=Hola%2C%20quiero%20hacer%20una%20consulta%20general.">
                    Enviar Consulta Gratuita
                  </Link>
                </Button>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Información de Contacto</h2>
              <p className="text-muted-foreground mb-8">
                También puede contactarnos directamente utilizando la siguiente información.
              </p>

              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      Oficina Principal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <p>Av. Colón 1234, Córdoba, Argentina</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Teléfono
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <p>+54 9 351 741 0304</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Lunes a Viernes: 9:00 - 18:00</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Correo Electrónico
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <p>info@abogadoscordoba.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Horario de Atención</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes</span>
                        <span>9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado</span>
                        <span>10:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo</span>
                        <span>Cerrado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

