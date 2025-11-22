"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, CheckCircle2, ArrowRight, FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteFormModal } from "@/components/quote-form-modal"

interface Service {
  id: string
  name: string
  basePrice: number
  description: string
}

interface ServiceCategory {
  category: string
  services: Service[]
}

const serviceData: ServiceCategory[] = [
  {
    category: "Mantenimiento Preventivo",
    services: [
      { id: "oil-basic", name: "Cambio de Aceite Básico", basePrice: 30000, description: "Aceite mineral + filtro" },
      {
        id: "oil-premium",
        name: "Cambio de Aceite Premium",
        basePrice: 52500,
        description: "Aceite sintético + filtro",
      },
      { id: "brake-check", name: "Revisión de Frenos", basePrice: 20000, description: "Inspección completa" },
      { id: "tire-rotation", name: "Rotación de Neumáticos", basePrice: 17500, description: "4 neumáticos" },
    ],
  },
  {
    category: "Sistema de Frenos",
    services: [
      {
        id: "brake-pads-front",
        name: "Cambio Pastillas Delanteras",
        basePrice: 62500,
        description: "Incluye pastillas",
      },
      {
        id: "brake-pads-all",
        name: "Cambio Pastillas Completas",
        basePrice: 110000,
        description: "Delanteras y traseras",
      },
      { id: "brake-discs", name: "Cambio de Discos", basePrice: 160000, description: "Discos + pastillas" },
      { id: "brake-fluid", name: "Cambio Líquido de Frenos", basePrice: 25000, description: "DOT 4 + purgado" },
    ],
  },
  {
    category: "Diagnóstico y Electricidad",
    services: [
      { id: "diagnostic", name: "Diagnóstico Computarizado", basePrice: 20000, description: "Escaneo completo" },
      { id: "battery", name: "Cambio de Batería", basePrice: 10000, description: "Solo instalación" },
      { id: "alternator", name: "Reparación de Alternador", basePrice: 75000, description: "Reparación o cambio" },
      { id: "starter", name: "Sistema de Arranque", basePrice: 60000, description: "Diagnóstico + reparación" },
    ],
  },
  {
    category: "Motor y Transmisión",
    services: [
      { id: "spark-plugs", name: "Cambio de Bujías", basePrice: 45000, description: "Bujías incluidas" },
      { id: "injector-cleaning", name: "Limpieza de Inyectores", basePrice: 55000, description: "Ultrasónica" },
      { id: "timing-belt", name: "Correa de Distribución", basePrice: 225000, description: "Correa + tensores" },
      { id: "tune-up", name: "Afinamiento Completo", basePrice: 115000, description: "Servicio integral" },
    ],
  },
  {
    category: "Aire Acondicionado",
    services: [
      { id: "ac-recharge", name: "Recarga de Gas A/C", basePrice: 40000, description: "Gas + revisión" },
      { id: "ac-maintenance", name: "Mantención A/C", basePrice: 50000, description: "Limpieza completa" },
      { id: "ac-compressor", name: "Reparación Compresor A/C", basePrice: 225000, description: "Reparación o cambio" },
    ],
  },
  {
    category: "Otros Servicios",
    services: [
      { id: "shocks", name: "Cambio de Amortiguadores", basePrice: 150000, description: "Par de amortiguadores" },
      { id: "pre-inspection", name: "Revisión Pre-ITV", basePrice: 30000, description: "Inspección completa" },
      { id: "scan", name: "Escaneo de Fallas", basePrice: 15000, description: "Diagnóstico básico" },
    ],
  },
]

export default function CalculadoraPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [vehicleType, setVehicleType] = useState<string>("")
  const [comuna, setComuna] = useState<string>("")

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const getVehicleMultiplier = () => {
    switch (vehicleType) {
      case "sedan":
        return 1.0
      case "suv":
        return 1.15
      case "pickup":
        return 1.2
      case "van":
        return 1.25
      default:
        return 1.0
    }
  }

  const calculateTotal = () => {
    let total = 0
    const multiplier = getVehicleMultiplier()

    selectedServices.forEach((serviceId) => {
      serviceData.forEach((category) => {
        const service = category.services.find((s) => s.id === serviceId)
        if (service) {
          total += service.basePrice * multiplier
        }
      })
    })

    // Descuento por múltiples servicios
    if (selectedServices.length >= 3) {
      total *= 0.9 // 10% descuento
    }

    return Math.round(total)
  }

  const getSelectedServiceDetails = () => {
    const details: Array<{ name: string; price: number }> = []
    const multiplier = getVehicleMultiplier()

    selectedServices.forEach((serviceId) => {
      serviceData.forEach((category) => {
        const service = category.services.find((s) => s.id === serviceId)
        if (service) {
          details.push({
            name: service.name,
            price: Math.round(service.basePrice * multiplier),
          })
        }
      })
    })

    return details
  }

  const total = calculateTotal()
  const hasDiscount = selectedServices.length >= 3
  const subtotal = hasDiscount ? Math.round(total / 0.9) : total

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-orange-600 text-white hover:bg-orange-700">Calculadora de Precios</Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl">Calcula el Costo de tu Servicio</h1>
            <p className="text-pretty text-lg leading-relaxed text-slate-300">
              Obtén una estimación instantánea seleccionando los servicios que necesitas. Precios transparentes y sin
              sorpresas.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Service Selection */}
            <div className="lg:col-span-2">
              {/* Vehicle Type Selection */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>1. Información del Vehículo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Tipo de Vehículo *</Label>
                      <Select value={vehicleType} onValueChange={setVehicleType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedán / Hatchback</SelectItem>
                          <SelectItem value="suv">SUV / Crossover (+15%)</SelectItem>
                          <SelectItem value="pickup">Pickup / Camioneta (+20%)</SelectItem>
                          <SelectItem value="van">Van / Minivan (+25%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Comuna</Label>
                      <Select value={comuna} onValueChange={setComuna}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu comuna" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="la-florida">La Florida</SelectItem>
                          <SelectItem value="puente-alto">Puente Alto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>2. Selecciona los Servicios</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Marca todos los servicios que necesitas. Obtén 10% de descuento al seleccionar 3 o más.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {serviceData.map((category, i) => (
                    <div key={i}>
                      <h3 className="mb-3 text-lg font-bold">{category.category}</h3>
                      <div className="space-y-3">
                        {category.services.map((service) => (
                          <div
                            key={service.id}
                            className="flex items-start space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                          >
                            <Checkbox
                              id={service.id}
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={() => toggleService(service.id)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <label htmlFor={service.id} className="flex cursor-pointer items-start justify-between">
                                <div>
                                  <p className="font-medium">{service.name}</p>
                                  <p className="text-sm text-muted-foreground">{service.description}</p>
                                </div>
                                <p className="ml-4 font-bold text-orange-600">
                                  ${Math.round(service.basePrice * getVehicleMultiplier()).toLocaleString()}
                                </p>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-2 border-orange-200">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-orange-600" />
                    Resumen del Presupuesto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  {selectedServices.length === 0 ? (
                    <div className="py-8 text-center text-muted-foreground">
                      <FileText className="mx-auto mb-2 h-12 w-12 opacity-50" />
                      <p>Selecciona servicios para ver el presupuesto</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-3">
                        <h4 className="font-medium">Servicios Seleccionados:</h4>
                        {getSelectedServiceDetails().map((item, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{item.name}</span>
                            <span className="font-medium">${item.price.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-4">
                        {hasDiscount && (
                          <>
                            <div className="mb-2 flex justify-between text-sm">
                              <span className="text-muted-foreground">Subtotal:</span>
                              <span className="line-through">${subtotal.toLocaleString()}</span>
                            </div>
                            <div className="mb-2 flex justify-between text-sm">
                              <span className="text-green-600">Descuento (10%):</span>
                              <span className="text-green-600">-${(subtotal - total).toLocaleString()}</span>
                            </div>
                          </>
                        )}
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total Estimado:</span>
                          <span className="text-orange-600">${total.toLocaleString()}</span>
                        </div>
                      </div>

                      {hasDiscount && (
                        <Badge className="w-full justify-center bg-green-600 text-white">
                          ¡10% de descuento aplicado!
                        </Badge>
                      )}

                      <div className="space-y-2 rounded-lg bg-muted p-3 text-xs">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                          <span>Incluye mano de obra y desplazamiento</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                          <span>Repuestos según marca y calidad</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                          <span>Garantía incluida por escrito</span>
                        </div>
                      </div>

                      <QuoteFormModal>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700">
                          Solicitar Cotización Oficial
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </QuoteFormModal>

                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <a
                          href={`https://wa.me/56912345678?text=${encodeURIComponent(
                            `Hola! Me interesa cotizar los siguientes servicios:\n\n${getSelectedServiceDetails()
                              .map((s) => `- ${s.name}`)
                              .join(
                                "\n",
                              )}\n\nTotal estimado: $${total.toLocaleString()}\n\nTipo de vehículo: ${vehicleType || "No especificado"}`,
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Enviar por WhatsApp
                        </a>
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">Información Importante</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Precios Estimados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  Los precios mostrados son estimaciones basadas en servicios estándar. El precio final puede variar
                  según:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
                  <li>Marca y modelo específico del vehículo</li>
                  <li>Calidad de repuestos seleccionados</li>
                  <li>Condición actual del vehículo</li>
                  <li>Servicios adicionales necesarios</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo Funciona?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <ol className="ml-4 list-decimal space-y-2">
                  <li>Selecciona tu tipo de vehículo y comuna</li>
                  <li>Marca los servicios que necesitas</li>
                  <li>Revisa el presupuesto estimado</li>
                  <li>Solicita una cotización oficial detallada</li>
                  <li>Agenda tu servicio a domicilio</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold">¿Tienes Dudas sobre el Presupuesto?</h2>
          <p className="mb-8 text-pretty text-lg text-orange-100">
            Nuestro equipo está listo para ayudarte con una cotización personalizada
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <QuoteFormModal>
              <Button size="lg" variant="secondary" className="bg-white text-orange-700 hover:bg-orange-50">
                Hablar con un Asesor
              </Button>
            </QuoteFormModal>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <a href="tel:+56912345678">Llamar: +569 1234 5678</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
