import { Building, Mail, MapPin, Phone } from "lucide-react"

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
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/80 to-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Envíenos un Mensaje</h2>
              <p className="text-muted-foreground mb-8">
                Complete el formulario a continuación y uno de nuestros abogados se pondrá en contacto con usted a la
                mayor brevedad posible.
              </p>

              <form className="space-y-6 w-full">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Nombre</Label>
                    <Input id="first-name" placeholder="Juan" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Apellidos</Label>
                    <Input id="last-name" placeholder="Pérez" className="w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="juan.perez@ejemplo.com" className="w-full" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" placeholder="+34 600 000 000" className="w-full" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Área de Interés</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccione un área legal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="civil">Derecho Civil</SelectItem>
                      <SelectItem value="laboral">Derecho Laboral</SelectItem>
                      <SelectItem value="societario">Derecho Societario</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Describa brevemente su consulta..."
                    className="min-h-[120px] w-full"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Enviar Consulta
                </Button>
              </form>
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
                      <p>Calle Gran Vía 123, 28013 Madrid, España</p>
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
                      <p>+34 910 000 000</p>
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
                      <p>info@bufetejuridico.com</p>
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

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Nuestra Ubicación</h2>
            <p className="text-muted-foreground">
              Estamos ubicados en el centro de Madrid, con fácil acceso en transporte público.
            </p>
          </div>

          <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder for map - in a real implementation, you would use Google Maps or similar */}
            <div className="w-full h-full bg-muted-foreground/20 flex items-center justify-center">
              <p className="text-muted-foreground">Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

