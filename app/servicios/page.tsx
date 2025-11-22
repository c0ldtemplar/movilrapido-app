import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wrench,
  Car,
  Gauge,
  Zap,
  Wind,
  Battery,
  Cog,
  FileText,
  CheckCircle2,
  Clock,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteFormModal } from "@/components/quote-form-modal"

export default function ServiciosPage() {
  const services = [
    {
      icon: Wrench,
      title: "Mantenimiento Preventivo",
      description: "Mantén tu vehículo en óptimas condiciones con nuestro servicio de mantenimiento programado.",
      features: [
        "Cambio de aceite y filtros",
        "Revisión de niveles de fluidos",
        "Inspección de correas y mangueras",
        "Revisión de sistema de frenos",
        "Rotación de neumáticos",
        "Inspección visual completa",
      ],
      price: "Desde $25.000",
      time: "1-2 horas",
      warranty: "3 meses",
    },
    {
      icon: Car,
      title: "Sistema de Frenos",
      description: "Tu seguridad es lo primero. Revisión y reparación completa del sistema de frenos.",
      features: [
        "Cambio de pastillas de freno",
        "Cambio de discos de freno",
        "Revisión de líquido de frenos",
        "Inspección de calipers",
        "Ajuste de freno de mano",
        "Prueba de frenado",
      ],
      price: "Desde $35.000",
      time: "2-3 horas",
      warranty: "6 meses",
    },
    {
      icon: Gauge,
      title: "Diagnóstico Computarizado",
      description: "Escaneo completo con equipos profesionales para detectar cualquier falla en tu vehículo.",
      features: [
        "Lectura de códigos de error",
        "Análisis de sensores",
        "Revisión de sistema de inyección",
        "Diagnóstico de motor",
        "Reporte detallado",
        "Recomendaciones de reparación",
      ],
      price: "Desde $15.000",
      time: "30-60 min",
      warranty: "N/A",
    },
    {
      icon: Cog,
      title: "Reparación de Motor",
      description: "Reparaciones especializadas del motor para restaurar el rendimiento óptimo.",
      features: [
        "Cambio de bujías",
        "Limpieza de inyectores",
        "Cambio de correa de distribución",
        "Afinamiento de motor",
        "Reparación de fugas",
        "Optimización de rendimiento",
      ],
      price: "Desde $40.000",
      time: "2-4 horas",
      warranty: "6 meses",
    },
    {
      icon: Zap,
      title: "Sistema Eléctrico",
      description: "Diagnóstico y reparación de problemas eléctricos y electrónicos.",
      features: [
        "Revisión de alternador",
        "Cambio de batería",
        "Reparación de arranque",
        "Revisión de fusibles",
        "Reparación de luces",
        "Sistema de carga",
      ],
      price: "Desde $20.000",
      time: "1-2 horas",
      warranty: "3 meses",
    },
    {
      icon: Wind,
      title: "Aire Acondicionado",
      description: "Mantén el confort en tu vehículo con nuestro servicio de aire acondicionado.",
      features: [
        "Recarga de gas refrigerante",
        "Revisión de compresor",
        "Limpieza de condensador",
        "Cambio de filtro de cabina",
        "Detección de fugas",
        "Desinfección del sistema",
      ],
      price: "Desde $30.000",
      time: "1-2 horas",
      warranty: "3 meses",
    },
    {
      icon: Battery,
      title: "Batería y Alternador",
      description: "Asegura el arranque confiable de tu vehículo con nuestro servicio especializado.",
      features: [
        "Test de batería",
        "Cambio de batería",
        "Revisión de alternador",
        "Limpieza de bornes",
        "Revisión de sistema de carga",
        "Instalación profesional",
      ],
      price: "Desde $10.000",
      time: "30-60 min",
      warranty: "Según fabricante",
    },
    {
      icon: FileText,
      title: "Revisión Pre-ITV",
      description: "Prepara tu vehículo para pasar la inspección técnica sin problemas.",
      features: [
        "Revisión de luces y señalización",
        "Inspección de neumáticos",
        "Revisión de frenos",
        "Check de emisiones",
        "Verificación de seguridad",
        "Reporte completo",
      ],
      price: "Desde $25.000",
      time: "1-2 horas",
      warranty: "N/A",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-orange-600 text-white hover:bg-orange-700">Servicios Profesionales</Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl">
              Servicios de Mecánica Automotriz a Domicilio
            </h1>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-slate-300">
              Ofrecemos una amplia gama de servicios de mantenimiento y reparación automotriz, todos realizados por
              mecánicos certificados en la comodidad de tu hogar u oficina.
            </p>
            <QuoteFormModal>
              <Button size="lg" className="bg-orange-600 text-lg hover:bg-orange-700">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteFormModal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Ahorra Tiempo",
                description: "Sin filas ni esperas. Trabajamos en tu horario.",
              },
              {
                icon: Shield,
                title: "Garantía Incluida",
                description: "Todos nuestros servicios cuentan con garantía.",
              },
              {
                icon: Award,
                title: "Mecánicos Certificados",
                description: "Equipo profesional con años de experiencia.",
              },
            ].map((item, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <item.icon className="mx-auto mb-4 h-12 w-12 text-orange-600" />
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-muted/50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Nuestros Servicios Especializados</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Soluciones completas para todas las necesidades de tu vehículo
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <service.icon className="mb-4 h-12 w-12 text-orange-600" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Precio:</span>
                      <span className="font-bold text-orange-600">{service.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duración:</span>
                      <span className="font-medium">{service.time}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Garantía:</span>
                      <span className="font-medium">{service.warranty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">¿Cómo Funciona Nuestro Servicio?</h2>
            <p className="text-pretty text-lg text-muted-foreground">Simple, rápido y conveniente</p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Solicita Cotización",
                description: "Completa el formulario o contáctanos por WhatsApp",
              },
              {
                step: "2",
                title: "Agenda Tu Cita",
                description: "Elige el día y hora que mejor te convenga",
              },
              {
                step: "3",
                title: "Recibe el Servicio",
                description: "Nuestro mecánico llega a tu domicilio equipado",
              },
              {
                step: "4",
                title: "Paga y Disfruta",
                description: "Realiza el pago y recibe tu garantía por escrito",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            ¿No Encuentras el Servicio que Necesitas?
          </h2>
          <p className="mb-8 text-pretty text-lg text-orange-100">
            Contáctanos y te ayudaremos con cualquier necesidad de tu vehículo
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <QuoteFormModal>
              <Button size="lg" variant="secondary" className="bg-white text-orange-700 hover:bg-orange-50">
                Contactar Ahora
              </Button>
            </QuoteFormModal>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/calculadora">Calcular Presupuesto</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
