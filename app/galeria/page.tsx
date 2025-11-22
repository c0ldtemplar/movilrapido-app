"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteFormModal } from "@/components/quote-form-modal"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface GalleryItem {
  id: string
  title: string
  category: string
  location: string
  vehicle: string
  image: string
  description: string
  beforeAfter?: boolean
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Cambio Completo de Frenos",
    category: "Frenos",
    location: "La Florida",
    vehicle: "Toyota Corolla 2018",
    image: "/mechanic-changing-brake-pads.jpg",
    description:
      "Cambio de pastillas y discos delanteros. El cliente notaba vibraciones al frenar. Realizamos un servicio completo incluyendo limpieza de calipers.",
    beforeAfter: true,
  },
  {
    id: "2",
    title: "Mantención Mayor 80.000 km",
    category: "Mantenimiento",
    location: "Puente Alto",
    vehicle: "Chevrolet Cruze 2016",
    image: "/car-engine-oil-change-service.jpg",
    description:
      "Servicio completo de mantenimiento: cambio de aceite sintético, filtros, revisión de correas, líquidos y sistema de frenos.",
    beforeAfter: false,
  },
  {
    id: "3",
    title: "Diagnóstico y Reparación Motor",
    category: "Motor",
    location: "La Florida",
    vehicle: "Nissan Sentra 2015",
    image: "/automotive-diagnostic-scanner.jpg",
    description:
      "Vehículo presentaba fallas de encendido. Diagnóstico computarizado detectó bujías defectuosas. Cambio de bujías y limpieza de inyectores.",
    beforeAfter: false,
  },
  {
    id: "4",
    title: "Recarga Sistema Aire Acondicionado",
    category: "Aire Acondicionado",
    location: "Puente Alto",
    vehicle: "Hyundai Accent 2017",
    image: "/car-air-conditioning-recharge.jpg",
    description:
      "Sistema de A/C sin enfriar adecuadamente. Recarga de gas refrigerante, limpieza de condensador y cambio de filtro de cabina.",
    beforeAfter: false,
  },
  {
    id: "5",
    title: "Cambio de Correa de Distribución",
    category: "Motor",
    location: "La Florida",
    vehicle: "Volkswagen Gol 2014",
    image: "/timing-belt-replacement.jpg",
    description:
      "Servicio preventivo a los 100.000 km. Cambio de correa de distribución, tensores y bomba de agua. Trabajo de 4 horas.",
    beforeAfter: false,
  },
  {
    id: "6",
    title: "Sistema Eléctrico - Cambio Alternador",
    category: "Electricidad",
    location: "Puente Alto",
    vehicle: "Kia Rio 2013",
    image: "/car-alternator-replacement.jpg",
    description:
      "Batería se descargaba constantemente. Diagnóstico detectó falla en alternador. Cambio de alternador y test completo del sistema de carga.",
    beforeAfter: false,
  },
  {
    id: "7",
    title: "Cambio de Amortiguadores",
    category: "Suspensión",
    location: "La Florida",
    vehicle: "Mazda 3 2016",
    image: "/car-shock-absorber-replacement.jpg",
    description:
      "Vehículo presentaba ruidos y mal manejo. Cambio de amortiguadores delanteros con alineación posterior incluida.",
    beforeAfter: true,
  },
  {
    id: "8",
    title: "Limpieza Profunda de Inyectores",
    category: "Motor",
    location: "Puente Alto",
    vehicle: "Suzuki Swift 2015",
    image: "/fuel-injector-cleaning-ultrasonic.jpg",
    description:
      "Motor con falta de potencia y alto consumo. Limpieza ultrasónica de inyectores y cambio de filtro de combustible.",
    beforeAfter: false,
  },
  {
    id: "9",
    title: "Revisión Pre-ITV Completa",
    category: "Inspección",
    location: "La Florida",
    vehicle: "Peugeot 208 2014",
    image: "/car-inspection-mechanic.jpg",
    description:
      "Revisión completa para inspección técnica. Ajuste de luces, revisión de frenos, neumáticos y emisiones. Vehículo aprobó sin problemas.",
    beforeAfter: false,
  },
]

const categories = [
  "Todos",
  "Frenos",
  "Mantenimiento",
  "Motor",
  "Aire Acondicionado",
  "Electricidad",
  "Suspensión",
  "Inspección",
]

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems =
    selectedCategory === "Todos" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-orange-600 text-white hover:bg-orange-700">Nuestros Trabajos</Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl">Galería de Trabajos Realizados</h1>
            <p className="text-pretty text-lg leading-relaxed text-slate-300">
              Conoce algunos de los servicios que hemos realizado para nuestros clientes satisfechos en La Florida y
              Puente Alto. Calidad y profesionalismo en cada trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-muted/50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { number: "500+", label: "Clientes Satisfechos" },
              { number: "1200+", label: "Servicios Completados" },
              { number: "5 años", label: "de Experiencia" },
              { number: "98%", label: "Clientes que Recomiendan" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="mb-2 text-4xl font-bold text-orange-600">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 py-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute right-2 top-2">
                    <Badge className="bg-orange-600 text-white">{item.category}</Badge>
                  </div>
                  {item.beforeAfter && (
                    <div className="absolute left-2 top-2">
                      <Badge variant="secondary">Antes/Después</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{item.vehicle}</p>
                    <p>{item.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No hay trabajos en esta categoría aún.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">¿Quieres un Servicio Como Estos?</h2>
          <p className="mb-8 text-pretty text-lg text-orange-100">
            Solicita tu cotización y recibe el mismo nivel de calidad y profesionalismo
          </p>
          <QuoteFormModal>
            <Button size="lg" variant="secondary" className="bg-white text-orange-700 hover:bg-orange-50">
              Solicitar Cotización Gratis
            </Button>
          </QuoteFormModal>
        </div>
      </section>

      {/* Gallery Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl">
          {selectedItem && (
            <>
              <DialogHeader>
                <div className="mb-2 flex gap-2">
                  <Badge className="bg-orange-600 text-white">{selectedItem.category}</Badge>
                  {selectedItem.beforeAfter && <Badge variant="secondary">Antes/Después</Badge>}
                </div>
                <DialogTitle className="text-2xl">{selectedItem.title}</DialogTitle>
                <DialogDescription>
                  {selectedItem.vehicle} - {selectedItem.location}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <img
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="leading-relaxed text-muted-foreground">{selectedItem.description}</p>
                <div className="flex gap-4 pt-4">
                  <QuoteFormModal>
                    <Button className="flex-1 bg-orange-600 hover:bg-orange-700">Solicitar Servicio Similar</Button>
                  </QuoteFormModal>
                  <Button variant="outline" className="flex-1 bg-transparent" asChild>
                    <a
                      href={`https://wa.me/56912345678?text=${encodeURIComponent(`Hola! Me interesa el servicio: ${selectedItem.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
