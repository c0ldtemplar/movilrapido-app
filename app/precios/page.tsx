import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight, Calculator } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteFormModal } from "@/components/quote-form-modal"

export default function PreciosPage() {
  const pricingCategories = [
    {
      category: "Mantenimiento Preventivo",
      featured: false,
      services: [
        {
          name: "Cambio de Aceite Básico",
          price: "$25.000 - $35.000",
          includes: ["Aceite mineral 5L", "Filtro de aceite", "Revisión de niveles"],
        },
        {
          name: "Cambio de Aceite Premium",
          price: "$45.000 - $60.000",
          includes: ["Aceite sintético 5L", "Filtro de aceite", "Inspección completa"],
        },
        {
          name: "Revisión de Frenos",
          price: "$15.000 - $25.000",
          includes: ["Inspección visual", "Medición de pastillas", "Prueba de frenado"],
        },
        {
          name: "Rotación de Neumáticos",
          price: "$15.000 - $20.000",
          includes: ["Rotación 4 neumáticos", "Revisión de presión", "Inspección visual"],
        },
      ],
    },
    {
      category: "Reparaciones de Frenos",
      featured: true,
      services: [
        {
          name: "Cambio Pastillas Delanteras",
          price: "$45.000 - $80.000",
          includes: ["Pastillas de freno", "Mano de obra", "Limpieza de calipers"],
        },
        {
          name: "Cambio Pastillas Completas",
          price: "$80.000 - $140.000",
          includes: ["Pastillas delanteras y traseras", "Mano de obra", "Inspección completa"],
        },
        {
          name: "Cambio de Discos",
          price: "$120.000 - $200.000",
          includes: ["Discos de freno", "Pastillas incluidas", "Instalación profesional"],
        },
        {
          name: "Líquido de Frenos",
          price: "$20.000 - $30.000",
          includes: ["Líquido DOT 4", "Purgado completo", "Revisión de sistema"],
        },
      ],
    },
    {
      category: "Diagnóstico y Electricidad",
      featured: false,
      services: [
        {
          name: "Diagnóstico Computarizado",
          price: "$15.000 - $25.000",
          includes: ["Escaneo completo", "Lectura de códigos", "Reporte detallado"],
        },
        {
          name: "Cambio de Batería",
          price: "$10.000 + batería",
          includes: ["Instalación", "Limpieza de bornes", "Test de alternador"],
        },
        {
          name: "Reparación de Alternador",
          price: "$50.000 - $100.000",
          includes: ["Diagnóstico", "Reparación o cambio", "Garantía incluida"],
        },
        {
          name: "Sistema de Arranque",
          price: "$40.000 - $80.000",
          includes: ["Diagnóstico", "Reparación", "Prueba de funcionamiento"],
        },
      ],
    },
    {
      category: "Motor y Transmisión",
      featured: false,
      services: [
        {
          name: "Cambio de Bujías",
          price: "$30.000 - $60.000",
          includes: ["Bujías incluidas", "Limpieza de área", "Test de encendido"],
        },
        {
          name: "Limpieza de Inyectores",
          price: "$40.000 - $70.000",
          includes: ["Limpieza ultrasónica", "Prueba de rendimiento", "Aditivos incluidos"],
        },
        {
          name: "Correa de Distribución",
          price: "$150.000 - $300.000",
          includes: ["Correa y tensores", "Cambio de bomba agua (opcional)", "Garantía 6 meses"],
        },
        {
          name: "Afinamiento Completo",
          price: "$80.000 - $150.000",
          includes: ["Bujías, filtros", "Limpieza de inyectores", "Optimización motor"],
        },
      ],
    },
    {
      category: "Aire Acondicionado",
      featured: false,
      services: [
        {
          name: "Recarga de Gas",
          price: "$30.000 - $50.000",
          includes: ["Gas refrigerante", "Revisión de presión", "Detección de fugas"],
        },
        {
          name: "Mantención A/C",
          price: "$40.000 - $60.000",
          includes: ["Limpieza de sistema", "Cambio filtro cabina", "Desinfección"],
        },
        {
          name: "Reparación de Compresor",
          price: "$150.000 - $300.000",
          includes: ["Diagnóstico", "Reparación o cambio", "Recarga incluida"],
        },
      ],
    },
    {
      category: "Otros Servicios",
      featured: false,
      services: [
        {
          name: "Cambio de Amortiguadores",
          price: "$100.000 - $200.000",
          includes: ["Amortiguadores par", "Instalación", "Alineación básica"],
        },
        {
          name: "Revisión Pre-ITV",
          price: "$25.000 - $35.000",
          includes: ["Inspección completa", "Reporte detallado", "Recomendaciones"],
        },
        {
          name: "Escaneo de Fallas",
          price: "$15.000",
          includes: ["Diagnóstico completo", "Lectura de sensores", "Informe técnico"],
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-orange-600 text-white hover:bg-orange-700">Precios Transparentes</Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl">Precios Justos y Sin Sorpresas</h1>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-slate-300">
              Conoce nuestras tarifas antes de agendar. Todos los precios incluyen mano de obra y desplazamiento dentro
              de La Florida y Puente Alto.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/calculadora">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular Presupuesto
                </Link>
              </Button>
              <QuoteFormModal>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Solicitar Cotización
                </Button>
              </QuoteFormModal>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">Información Importante:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span>Los precios incluyen mano de obra y desplazamiento en La Florida y Puente Alto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span>Repuestos y materiales se cotizan según marca y calidad seleccionada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span>Todos los trabajos incluyen garantía por escrito</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span>Aceptamos efectivo, transferencia y tarjetas de crédito/débito</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            {pricingCategories.map((category, i) => (
              <div key={i}>
                <div className="mb-6 flex items-center gap-3">
                  <h2 className="text-2xl font-bold md:text-3xl">{category.category}</h2>
                  {category.featured && <Badge className="bg-orange-600 text-white">Más Solicitado</Badge>}
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, j) => (
                    <Card key={j} className={category.featured ? "border-2 border-orange-200" : ""}>
                      <CardHeader>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <p className="text-2xl font-bold text-orange-600">{service.price}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3 text-sm font-medium text-muted-foreground">Incluye:</p>
                        <ul className="space-y-2">
                          {service.includes.map((item, k) => (
                            <li key={k} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="bg-muted/50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Paquetes Especiales</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Ahorra más con nuestros paquetes de mantenimiento integral
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Paquete Básico",
                price: "$75.000",
                savings: "Ahorra $15.000",
                services: [
                  "Cambio de aceite",
                  "Filtros (aceite + aire)",
                  "Revisión de frenos",
                  "Inspección visual completa",
                  "Rotación de neumáticos",
                ],
              },
              {
                name: "Paquete Premium",
                price: "$150.000",
                savings: "Ahorra $30.000",
                featured: true,
                services: [
                  "Cambio de aceite sintético",
                  "Todos los filtros",
                  "Cambio de pastillas",
                  "Diagnóstico computarizado",
                  "Limpieza de inyectores",
                  "Afinamiento básico",
                ],
              },
              {
                name: "Paquete Completo",
                price: "$250.000",
                savings: "Ahorra $50.000",
                services: [
                  "Todo del Premium",
                  "Cambio de bujías",
                  "Revisión A/C",
                  "Cambio de batería",
                  "Sistema eléctrico completo",
                  "Garantía extendida 1 año",
                ],
              },
            ].map((pkg, i) => (
              <Card key={i} className={pkg.featured ? "border-2 border-orange-600 shadow-lg" : ""}>
                {pkg.featured && <div className="h-2 bg-gradient-to-r from-orange-600 to-orange-700" />}
                <CardHeader className="text-center">
                  {pkg.featured && <Badge className="mx-auto mb-2 w-fit bg-orange-600 text-white">Más Popular</Badge>}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <p className="text-4xl font-bold text-orange-600">{pkg.price}</p>
                    <p className="mt-2 text-sm text-green-600">{pkg.savings}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.services.map((service, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <QuoteFormModal>
                    <Button className="mt-6 w-full bg-orange-600 hover:bg-orange-700">Agendar Ahora</Button>
                  </QuoteFormModal>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Preguntas Frecuentes sobre Precios</h2>
          <div className="space-y-6">
            {[
              {
                q: "¿Los precios incluyen repuestos?",
                a: "Los precios mostrados son por mano de obra. Los repuestos se cotizan según la marca, calidad y modelo de tu vehículo. Siempre te informamos el costo total antes de comenzar.",
              },
              {
                q: "¿Hay cargo adicional por desplazamiento?",
                a: "No. El desplazamiento dentro de La Florida y Puente Alto está incluido en todos nuestros servicios. Para otras comunas, consultar disponibilidad.",
              },
              {
                q: "¿Aceptan tarjetas de crédito?",
                a: "Sí, aceptamos efectivo, transferencia bancaria, y tarjetas de crédito/débito (aplican cargos del banco emisor).",
              },
              {
                q: "¿Ofrecen garantía?",
                a: "Sí, todos nuestros trabajos incluyen garantía por escrito. La duración varía según el servicio (3 a 6 meses típicamente).",
              },
            ].map((faq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">¿Necesitas un Presupuesto Personalizado?</h2>
          <p className="mb-8 text-pretty text-lg text-orange-100">
            Contáctanos y te enviaremos una cotización detallada sin compromiso
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <QuoteFormModal>
              <Button size="lg" variant="secondary" className="bg-white text-orange-700 hover:bg-orange-50">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteFormModal>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contacto">Contactar por WhatsApp</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
