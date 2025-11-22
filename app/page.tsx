import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Clock, MapPin, Shield, Star, PhoneCall, CheckCircle2, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteFormModal } from "@/components/quote-form-modal"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-20 text-white md:py-32">
        <div className="absolute inset-0 bg-[url('/automotive-tools-pattern.jpg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit bg-orange-600 text-white hover:bg-orange-700">
                Servicio a Domicilio en Santiago
              </Badge>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Tu Mecánico Experto Llega a Tu Puerta
              </h1>
              <p className="mb-8 text-pretty text-lg leading-relaxed text-slate-300 md:text-xl">
                Servicio de mecánica automotriz profesional a domicilio en La Florida y Puente Alto. Ahorra tiempo y
                dinero sin salir de casa.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <QuoteFormModal>
                  <Button size="lg" className="bg-orange-600 text-lg hover:bg-orange-700">
                    Solicitar Cotización Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </QuoteFormModal>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white text-lg text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="https://wa.me/56912345678" target="_blank">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    WhatsApp: +569 1234 5678
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-900 bg-slate-600" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <p className="text-slate-400">500+ clientes satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="/mechanic-working-on-car-professional.jpg"
                alt="Mecánico profesional trabajando"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">¿Por Qué Elegir TorqueExpress?</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Experiencia, confianza y conveniencia en un solo servicio
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: "Servicio a Domicilio",
                description: "Llegamos a tu casa u oficina en La Florida y Puente Alto",
              },
              {
                icon: Clock,
                title: "Horarios Flexibles",
                description: "Agenda tu servicio cuando más te convenga, incluso fines de semana",
              },
              {
                icon: Shield,
                title: "Garantía Total",
                description: "Todos nuestros trabajos incluyen garantía de servicio y repuestos",
              },
              {
                icon: Wrench,
                title: "Mecánicos Certificados",
                description: "Equipo profesional con años de experiencia y certificaciones",
              },
            ].map((feature, i) => (
              <Card key={i} className="border-2 transition-all hover:border-orange-600 hover:shadow-lg">
                <CardContent className="p-6">
                  <feature.icon className="mb-4 h-12 w-12 text-orange-600" />
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-muted/50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Nuestros Servicios</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Soluciones completas para el mantenimiento y reparación de tu vehículo
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mantenimiento Preventivo",
                items: [
                  "Cambio de aceite y filtros",
                  "Revisión de frenos",
                  "Alineación y balanceo",
                  "Cambio de neumáticos",
                ],
                price: "Desde $25.000",
              },
              {
                title: "Diagnóstico y Reparación",
                items: [
                  "Escaneo computarizado",
                  "Diagnóstico de motor",
                  "Sistema eléctrico",
                  "Reparación de suspensión",
                ],
                price: "Desde $35.000",
              },
              {
                title: "Servicios Especializados",
                items: [
                  "Cambio de batería",
                  "Cambio de amortiguadores",
                  "Reparación de aire acondicionado",
                  "Afinamiento completo",
                ],
                price: "Desde $40.000",
              },
            ].map((service, i) => (
              <Card key={i} className="overflow-hidden border-2">
                <div className="h-2 bg-orange-600" />
                <CardContent className="p-6">
                  <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                  <ul className="mb-6 space-y-2">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mb-4 text-xl font-bold text-orange-600">{service.price}</p>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link href="/servicios">Ver Detalles</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild variant="outline">
              <Link href="/calculadora">
                Calcular Presupuesto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Lo Que Dicen Nuestros Clientes</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Carlos Méndez",
                location: "La Florida",
                text: "Excelente servicio. El mecánico llegó puntual a mi casa y resolvió el problema de mi auto en menos de una hora. Muy profesional.",
              },
              {
                name: "María González",
                location: "Puente Alto",
                text: "Me encantó la comodidad de no tener que llevar mi auto al taller. El precio fue justo y el trabajo impecable. Los recomiendo 100%.",
              },
              {
                name: "Roberto Silva",
                location: "La Florida",
                text: "Contraté el servicio de cambio de aceite y me sorprendió la rapidez y profesionalismo. Definitivamente volveré a usar TorqueExpress.",
              },
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">{testimonial.text}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            ¿Listo Para Darle el Cuidado Que Tu Auto Merece?
          </h2>
          <p className="mb-8 text-pretty text-lg leading-relaxed text-orange-100">
            Solicita tu cotización gratuita hoy mismo y descubre por qué somos la opción preferida en La Florida y
            Puente Alto
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <QuoteFormModal>
              <Button size="lg" variant="secondary" className="bg-white text-lg text-orange-700 hover:bg-orange-50">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteFormModal>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-lg text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contacto">Más Información</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
