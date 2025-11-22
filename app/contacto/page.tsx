"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comuna: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Generate WhatsApp message
    const whatsappMessage = `Hola! Solicito agendar un servicio:%0A%0ANombre: ${formData.name}%0ATeléfono: ${formData.phone}%0AEmail: ${formData.email}%0AComuna: ${formData.comuna}%0AServicio: ${formData.service}%0AFecha preferida: ${formData.date}%0AHora preferida: ${formData.time}%0A%0AMensaje: ${formData.message}`

    // Open WhatsApp
    window.open(`https://wa.me/56912345678?text=${whatsappMessage}`, "_blank")

    setLoading(false)
    alert("¡Gracias! Te redirigiremos a WhatsApp para confirmar tu reserva.")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-orange-600 text-white hover:bg-orange-700">Contáctanos</Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl">Estamos Listos Para Ayudarte</h1>
            <p className="text-pretty text-lg leading-relaxed text-slate-300">
              Agenda tu servicio o contáctanos para resolver todas tus dudas. Nuestro equipo está disponible de lunes a
              sábado.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Teléfono</h3>
                <a href="tel:+56912345678" className="text-lg text-orange-600 hover:underline">
                  +569 1234 5678
                </a>
                <p className="mt-2 text-sm text-muted-foreground">Lun - Sáb: 8:00 - 20:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <MessageCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">WhatsApp</h3>
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-orange-600 hover:underline"
                >
                  Chatear Ahora
                </a>
                <p className="mt-2 text-sm text-muted-foreground">Respuesta en minutos</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Mail className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Email</h3>
                <a href="mailto:contacto@torqueexpress.cl" className="text-lg text-orange-600 hover:underline">
                  contacto@torqueexpress.cl
                </a>
                <p className="mt-2 text-sm text-muted-foreground">Respuesta en 24 hrs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content - Form and Info */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Booking Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Calendar className="h-6 w-6 text-orange-600" />
                    Agendar Servicio
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Completa el formulario y te contactaremos para confirmar tu reserva
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="space-y-4">
                      <h3 className="font-bold">Información Personal</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre Completo *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Juan Pérez"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+569 1234 5678"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="juan@email.com"
                        />
                      </div>
                    </div>

                    {/* Service Info */}
                    <div className="space-y-4">
                      <h3 className="font-bold">Detalles del Servicio</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="comuna">Comuna *</Label>
                          <Select
                            required
                            value={formData.comuna}
                            onValueChange={(value) => setFormData({ ...formData, comuna: value })}
                          >
                            <SelectTrigger id="comuna">
                              <SelectValue placeholder="Selecciona tu comuna" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="la-florida">La Florida</SelectItem>
                              <SelectItem value="puente-alto">Puente Alto</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Tipo de Servicio *</Label>
                          <Select
                            required
                            value={formData.service}
                            onValueChange={(value) => setFormData({ ...formData, service: value })}
                          >
                            <SelectTrigger id="service">
                              <SelectValue placeholder="Selecciona un servicio" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cambio-aceite">Cambio de Aceite</SelectItem>
                              <SelectItem value="frenos">Revisión/Cambio de Frenos</SelectItem>
                              <SelectItem value="diagnostico">Diagnóstico Computarizado</SelectItem>
                              <SelectItem value="mantencion">Mantención General</SelectItem>
                              <SelectItem value="ac">Aire Acondicionado</SelectItem>
                              <SelectItem value="suspension">Suspensión</SelectItem>
                              <SelectItem value="motor">Reparación de Motor</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="date">Fecha Preferida *</Label>
                          <Input
                            id="date"
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Hora Preferida *</Label>
                          <Select
                            required
                            value={formData.time}
                            onValueChange={(value) => setFormData({ ...formData, time: value })}
                          >
                            <SelectTrigger id="time">
                              <SelectValue placeholder="Selecciona horario" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="08:00-10:00">08:00 - 10:00</SelectItem>
                              <SelectItem value="10:00-12:00">10:00 - 12:00</SelectItem>
                              <SelectItem value="12:00-14:00">12:00 - 14:00</SelectItem>
                              <SelectItem value="14:00-16:00">14:00 - 16:00</SelectItem>
                              <SelectItem value="16:00-18:00">16:00 - 18:00</SelectItem>
                              <SelectItem value="18:00-20:00">18:00 - 20:00</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje / Detalles del Problema</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Describe los síntomas o lo que necesitas..."
                          rows={4}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-600 text-lg hover:bg-orange-700"
                      size="lg"
                      disabled={loading}
                    >
                      {loading ? "Procesando..." : "Continuar con WhatsApp"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Al enviar, serás redirigido a WhatsApp para confirmar tu reserva
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Side Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Hours Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-orange-600" />
                      Horarios de Atención
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Lunes - Viernes:</span>
                      <span className="text-muted-foreground">8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sábados:</span>
                      <span className="text-muted-foreground">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Domingos:</span>
                      <span className="text-muted-foreground">Cerrado</span>
                    </div>
                    <div className="mt-4 rounded-lg bg-orange-50 p-3 text-sm">
                      <p className="font-medium text-orange-900">Servicios de Emergencia</p>
                      <p className="text-orange-700">Consultar disponibilidad para urgencias</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Coverage Area */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-orange-600" />
                      Área de Cobertura
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-medium">La Florida</p>
                      <p className="text-sm text-muted-foreground">Cobertura completa</p>
                    </div>
                    <div>
                      <p className="font-medium">Puente Alto</p>
                      <p className="text-sm text-muted-foreground">Todos los sectores</p>
                    </div>
                    <div className="mt-4 rounded-lg border p-3 text-sm">
                      <p className="mb-2 font-medium">¿Estás en otra comuna?</p>
                      <p className="text-muted-foreground">
                        Contáctanos para consultar disponibilidad y posibles cargos adicionales
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card>
                  <CardHeader>
                    <CardTitle>Preguntas Frecuentes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div>
                      <p className="mb-1 font-medium">¿Debo estar presente?</p>
                      <p className="text-muted-foreground">Sí, necesitamos que estés disponible durante el servicio</p>
                    </div>
                    <div>
                      <p className="mb-1 font-medium">¿Qué formas de pago aceptan?</p>
                      <p className="text-muted-foreground">Efectivo, transferencia y tarjetas de crédito/débito</p>
                    </div>
                    <div>
                      <p className="mb-1 font-medium">¿Puedo cancelar la cita?</p>
                      <p className="text-muted-foreground">Sí, con 24 horas de anticipación sin costo</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold">Nuestra Área de Servicio</h2>
            <p className="text-lg text-muted-foreground">Cobertura en La Florida y Puente Alto, Santiago</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <div className="aspect-video w-full bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106493.02346181858!2d-70.69108959999999!3d-33.525745599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0a962fa2abf%3A0x28b5efc8e3ffaa49!2sLa%20Florida%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de La Florida"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold">¿Prefieres Hablar Directamente?</h2>
          <p className="mb-8 text-pretty text-lg text-orange-100">Nuestro equipo está listo para atenderte</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white text-orange-700 hover:bg-orange-50">
              <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chatear por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <a href="tel:+56912345678">
                <Phone className="mr-2 h-5 w-5" />
                Llamar: +569 1234 5678
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
