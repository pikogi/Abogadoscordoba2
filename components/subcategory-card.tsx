"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface FAQ {
  question: string
  answer: string
}

interface SubcategoryCardProps {
  id: string
  title: string
  description: string
  image: string
  faqs: FAQ[]
  consultUrl?: string // URL a la que redirigir cuando se hace clic en el botón
}

export function SubcategoryCard({ id, title, description, image, faqs, consultUrl }: SubcategoryCardProps) {
  const router = useRouter()

  const handleConsultClick = () => {
    // Si se proporciona una URL, navegar a ella
    if (consultUrl) {
      router.push(consultUrl)
    }
  }

  return (
    <div id={id} className="scroll-mt-20">
      <Card className="overflow-hidden w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-full w-full">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <CardContent className="p-4 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Preguntas Frecuentes</h4>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${id}-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-6">
              <Button className="w-full" onClick={handleConsultClick}>
                Consultar sobre {title}
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
