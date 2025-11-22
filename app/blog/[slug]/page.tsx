import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteFormModal } from "@/components/quote-form-modal"

// This would typically come from a CMS or database
const blogPost = {
  title: "¿Cada Cuánto Debo Cambiar el Aceite de Mi Auto?",
  category: "Mantenimiento",
  date: "15 de Enero, 2025",
  readTime: "5 min",
  author: "Carlos Méndez",
  authorRole: "Mecánico Principal",
  image: "/placeholder.svg?key=cvuh2",
  content: `
El cambio de aceite es uno de los mantenimientos más importantes y frecuentes que requiere tu vehículo. Sin embargo, existe mucha confusión sobre la frecuencia ideal para realizarlo.

## ¿Por Qué es Importante el Cambio de Aceite?

El aceite de motor cumple funciones vitales:
- Lubrica las partes móviles del motor
- Reduce la fricción y el desgaste
- Ayuda a enfriar el motor
- Limpia y previene la acumulación de residuos
- Protege contra la corrosión

## Frecuencia Recomendada

### Aceite Mineral
Si usas aceite mineral convencional, la recomendación general es cambiarlo cada:
- **5,000 - 7,500 km** o cada **6 meses**, lo que ocurra primero
- En condiciones de uso severo (ciudad, tráfico intenso, temperaturas extremas): cada 5,000 km

### Aceite Sintético
El aceite sintético ofrece mejor protección y duración:
- **10,000 - 15,000 km** o cada **12 meses**
- Algunos aceites sintéticos de alta gama pueden durar hasta 20,000 km

## Factores que Afectan la Frecuencia

1. **Tipo de Conducción**
   - Ciudad vs. carretera
   - Tráfico pesado aumenta el desgaste
   - Trayectos cortos frecuentes son más exigentes

2. **Condiciones Climáticas**
   - Temperaturas extremas aceleran el deterioro
   - Humedad y polvo afectan la calidad del aceite

3. **Antigüedad del Vehículo**
   - Motores más antiguos pueden requerir cambios más frecuentes
   - Motores con alto kilometraje necesitan atención especial

4. **Tipo de Motor**
   - Motores turbo son más exigentes
   - Motores diesel tienen diferentes requerimientos

## Señales de que Necesitas Cambiar el Aceite

No esperes a alcanzar el kilometraje recomendado si notas:
- Aceite muy oscuro o sucio al verificar la varilla
- Ruidos extraños del motor
- Luz de aceite encendida en el tablero
- Olor a aceite quemado
- Humo excesivo del escape

## Nuestra Recomendación

En TorqueExpress, recomendamos:
1. Seguir el manual del fabricante como guía base
2. Considerar las condiciones de uso de tu vehículo
3. Usar aceite de calidad apropiada para tu motor
4. Cambiar también el filtro de aceite en cada cambio
5. Llevar un registro de mantenimiento

## ¿Necesitas un Cambio de Aceite?

Nuestro equipo puede realizar el cambio de aceite en la comodidad de tu hogar u oficina. Usamos aceites de calidad y cambiamos el filtro incluido en el servicio.

**Precios desde $25,000 (aceite mineral) o $45,000 (aceite sintético)**

Agenda tu servicio hoy mismo y mantén tu motor en óptimas condiciones.
  `,
}

const relatedPosts = [
  {
    slug: "senales-pastillas-freno-gastadas",
    title: "5 Señales de que tus Pastillas de Freno Están Gastadas",
    image: "/placeholder.svg?key=39cj2",
  },
  {
    slug: "mantenimiento-preventivo-ahorro",
    title: "Cómo el Mantenimiento Preventivo te Ahorra Dinero",
    image: "/placeholder.svg?key=sk2md",
  },
  {
    slug: "diagnostico-computarizado-que-es",
    title: "Diagnóstico Computarizado: ¿Qué es y Por Qué lo Necesitas?",
    image: "/placeholder.svg?key=ms3nf",
  },
]

export default function BlogPostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Image */}
      <section className="relative h-[400px] overflow-hidden bg-slate-900">
        <img
          src={blogPost.image || "/placeholder.svg"}
          alt={blogPost.title}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-6 pb-12">
            <Badge className="mb-4 bg-orange-600 text-white">{blogPost.category}</Badge>
            <h1 className="mb-4 text-balance text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime} de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="border-b px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {blogPost.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="mb-4 mt-8 text-2xl font-bold">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              } else if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="mb-3 mt-6 text-xl font-bold">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              } else if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n- ").map((item) => item.replace("- ", ""))
                return (
                  <ul key={i} className="mb-4 ml-6 list-disc space-y-1">
                    {items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )
              } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p key={i} className="mb-4 font-bold">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                )
              } else if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split(/\n\d+\.\s/).filter((item) => item.trim())
                return (
                  <ol key={i} className="mb-4 ml-6 list-decimal space-y-2">
                    {items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ol>
                )
              } else if (paragraph.trim()) {
                return (
                  <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                )
              }
              return null
            })}
          </div>

          {/* Author Bio */}
          <Card className="mt-12 border-2 border-orange-200 bg-orange-50">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="h-16 w-16 flex-shrink-0 rounded-full bg-orange-600" />
              <div>
                <p className="font-bold">{blogPost.author}</p>
                <p className="text-sm text-muted-foreground">{blogPost.authorRole} - TorqueExpress</p>
                <p className="mt-2 text-sm">
                  Con más de 15 años de experiencia en mecánica automotriz, Carlos comparte su conocimiento para
                  ayudarte a mantener tu vehículo en las mejores condiciones.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Share Buttons */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm font-medium">Compartir:</span>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-12 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">¿Necesitas un Cambio de Aceite?</h2>
          <p className="mb-6 text-lg text-orange-100">Agenda tu servicio y nosotros vamos a tu domicilio</p>
          <QuoteFormModal>
            <Button size="lg" variant="secondary" className="bg-white text-orange-700 hover:bg-orange-50">
              Solicitar Servicio Ahora
            </Button>
          </QuoteFormModal>
        </div>
      </section>

      {/* Related Posts */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-2xl font-bold">Artículos Relacionados</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold group-hover:text-orange-600">{post.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
