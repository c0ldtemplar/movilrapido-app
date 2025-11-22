import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Target, Heart, CheckCircle2, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteFormModal } from "@/components/quote-form-modal"

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit bg-orange-600 text-white hover:bg-orange-700">Sobre Nosotros</Badge>
              <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl">Pasión por la Excelencia Automotriz</h1>
              <p className="text-pretty text-lg leading-relaxed text-slate-300">
                Somos un equipo de mecánicos certificados apasionados por ofrecer servicios automotrices de calidad en
                la comodidad de tu hogar. Con más de 5 años de experiencia, hemos atendido a más de 500 clientes
                satisfechos en La Florida y Puente Alto.
              </p>
            </div>
            <div className="relative">
              <img src="/professional-mechanic-team.jpg" alt="Equipo TorqueExpress" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Nuestros Valores</h2>
            <p className="text-pretty text-lg text-muted-foreground">Lo que nos define como equipo</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: "Excelencia",
                description: "Cada trabajo lo realizamos con los más altos estándares de calidad",
              },
              {
                icon: Users,
                title: "Confianza",
                description: "Construimos relaciones duraderas basadas en honestidad y transparencia",
              },
              {
                icon: Target,
                title: "Compromiso",
                description: "Tu satisfacción es nuestra prioridad número uno",
              },
              {
                icon: Heart,
                title: "Pasión",
                description: "Amamos lo que hacemos y se nota en cada servicio",
              },
            ].map((value, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                    <value.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-balance text-3xl font-bold md:text-4xl">¿Por Qué Elegir TorqueExpress?</h2>
              <div className="space-y-4">
                {[
                  "Mecánicos certificados con años de experiencia",
                  "Servicio a domicilio: ahorra tiempo y comodidad",
                  "Precios transparentes sin costos ocultos",
                  "Garantía en todos nuestros trabajos",
                  "Horarios flexibles, incluso fines de semana",
                  "Equipamiento profesional y herramientas especializadas",
                  "Atención personalizada y asesoramiento experto",
                  "Rapidez sin sacrificar calidad",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-orange-600" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Card className="border-2 border-orange-200 bg-orange-50">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-bold">Nuestra Misión</h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    Revolucionar la forma en que las personas cuidan sus vehículos, ofreciendo servicios de mecánica
                    profesional directamente en su domicilio, eliminando las molestias de los talleres tradicionales y
                    proporcionando transparencia, calidad y confianza en cada interacción.
                  </p>
                  <h3 className="mb-4 text-2xl font-bold">Nuestra Visión</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Ser el servicio de mecánica a domicilio líder en Santiago, reconocidos por nuestra excelencia,
                    innovación y compromiso con la satisfacción del cliente, expandiendo gradualmente a más comunas y
                    ofreciendo servicios cada vez más especializados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Nuestro Equipo</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Conoce a los profesionales detrás de TorqueExpress
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Carlos Méndez",
                role: "Fundador y Mecánico Principal",
                experience: "15 años de experiencia",
                specialty: "Especialista en motores y transmisiones",
                image: "/professional-mechanic-portrait.jpg",
              },
              {
                name: "Roberto Silva",
                role: "Mecánico Certificado",
                experience: "10 años de experiencia",
                specialty: "Experto en sistemas eléctricos y diagnóstico",
                image: "/auto-technician-portrait.jpg",
              },
              {
                name: "Miguel Torres",
                role: "Mecánico Especializado",
                experience: "8 años de experiencia",
                specialty: "Especialista en frenos y suspensión",
                image: "/professional-car-mechanic.png",
              },
            ].map((member, i) => (
              <Card key={i}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <p className="mb-2 text-orange-600">{member.role}</p>
                  <p className="mb-1 text-sm text-muted-foreground">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="bg-muted/50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold">Área de Cobertura</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Actualmente ofrecemos nuestros servicios en las siguientes comunas:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                comuna: "La Florida",
                description: "Cobertura completa en toda la comuna",
              },
              {
                comuna: "Puente Alto",
                description: "Atención en todos los sectores",
              },
            ].map((area, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-orange-600">{area.comuna}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            ¿Estás en otra comuna? Contáctanos para consultar disponibilidad
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">¿Listo Para Conocer la Diferencia?</h2>
          <p className="mb-8 text-pretty text-lg text-orange-100">
            Únete a los cientos de clientes que ya confían en TorqueExpress
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
              <Link href="/galeria">Ver Nuestros Trabajos</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
