import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    slug: "cuando-cambiar-aceite-motor",
    title: "¿Cada Cuánto Debo Cambiar el Aceite de Mi Auto?",
    excerpt:
      "Aprende la frecuencia correcta para el cambio de aceite según el tipo de vehículo y aceite que uses. Te explicamos las diferencias entre aceite mineral y sintético.",
    category: "Mantenimiento",
    date: "15 de Enero, 2025",
    readTime: "5 min",
    author: "Carlos Méndez",
    image: "/placeholder.svg?key=52djd",
    featured: true,
  },
  {
    slug: "senales-pastillas-freno-gastadas",
    title: "5 Señales de que tus Pastillas de Freno Están Gastadas",
    excerpt:
      "Identificar a tiempo el desgaste de las pastillas de freno puede salvarte de accidentes y reparaciones costosas. Conoce las señales de alerta.",
    category: "Seguridad",
    date: "12 de Enero, 2025",
    readTime: "4 min",
    author: "Miguel Torres",
    image: "/placeholder.svg?key=c8xfu",
    featured: true,
  },
  {
    slug: "diagnostico-computarizado-que-es",
    title: "Diagnóstico Computarizado: ¿Qué es y Por Qué lo Necesitas?",
    excerpt:
      "El diagnóstico computarizado es fundamental para detectar fallas en los sistemas modernos de tu vehículo. Te explicamos cómo funciona.",
    category: "Tecnología",
    date: "10 de Enero, 2025",
    readTime: "6 min",
    author: "Roberto Silva",
    image: "/placeholder.svg?key=52mnb",
    featured: false,
  },
  {
    slug: "mantenimiento-preventivo-ahorro",
    title: "Cómo el Mantenimiento Preventivo te Ahorra Dinero",
    excerpt:
      "Invertir en mantenimiento preventivo puede parecer costoso, pero te ahorrará miles en reparaciones mayores. Descubre por qué.",
    category: "Consejos",
    date: "8 de Enero, 2025",
    readTime: "5 min",
    author: "Carlos Méndez",
    image: "/placeholder.svg?key=92bhf",
    featured: false,
  },
  {
    slug: "aire-acondicionado-auto-verano",
    title: "Prepara el Aire Acondicionado de tu Auto para el Verano",
    excerpt:
      "El verano está llegando y necesitas que tu aire acondicionado funcione perfectamente. Te damos los mejores consejos de mantenimiento.",
    category: "Mantenimiento",
    date: "5 de Enero, 2025",
    readTime: "4 min",
    author: "Roberto Silva",
    image: "/placeholder.svg?key=vnc74",
    featured: false,
  },
  {
    slug: "neumaticos-cuando-cambiar",
    title: "Neumáticos: ¿Cuándo es el Momento de Cambiarlos?",
    excerpt:
      "Los neumáticos son cruciales para tu seguridad. Aprende a identificar cuándo es necesario cambiarlos y cómo elegir los correctos.",
    category: "Seguridad",
    date: "3 de Enero, 2025",
    readTime: "5 min",
    author: "Miguel Torres",
    image: "/placeholder.svg?key=gk3jr",
    featured: false,
  },
]

const categories = ["Todos", "Mantenimiento", "Seguridad", "Tecnología", "Consejos"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-orange-600 text-white hover:bg-orange-700">Blog & Consejos</Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl">
              Consejos y Guías de Mantenimiento Automotriz
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-slate-300">
              Aprende todo sobre el cuidado de tu vehículo con artículos escritos por nuestros mecánicos expertos. Tips,
              guías y consejos prácticos.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="border-b bg-muted/50 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="hover:border-orange-600 hover:text-orange-600 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-2xl font-bold">Artículos Destacados</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="group overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute right-3 top-3">
                        <Badge className="bg-orange-600 text-white">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-xl font-bold group-hover:text-orange-600">{post.title}</h3>
                      <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="bg-muted/50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-2xl font-bold">Todos los Artículos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute right-2 top-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 font-bold group-hover:text-orange-600">{post.title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader className="text-center">
              <h2 className="mb-2 text-2xl font-bold">Suscríbete a Nuestro Newsletter</h2>
              <p className="text-muted-foreground">
                Recibe consejos de mantenimiento y ofertas exclusivas directamente en tu email
              </p>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 rounded-lg border border-input bg-white px-4 py-2 sm:max-w-sm"
                  required
                />
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Suscribirse
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
