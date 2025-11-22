import Link from "next/link"
import { Wrench, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">TorqueExpress</span>
            </Link>
            <p className="mb-4 text-sm text-slate-400">
              Tu mecánico de confianza a domicilio en La Florida y Puente Alto, Santiago.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios" className="text-slate-400 hover:text-orange-600">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/calculadora" className="text-slate-400 hover:text-orange-600">
                  Calculadora
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-slate-400 hover:text-orange-600">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-orange-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-slate-400 hover:text-orange-600">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">Cambio de Aceite</li>
              <li className="text-slate-400">Revisión de Frenos</li>
              <li className="text-slate-400">Diagnóstico Computarizado</li>
              <li className="text-slate-400">Mantención Preventiva</li>
              <li className="text-slate-400">Reparaciones Generales</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
                <span className="text-slate-400">
                  La Florida y Puente Alto
                  <br />
                  Santiago, Chile
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-orange-600" />
                <a href="tel:+56912345678" className="text-slate-400 hover:text-orange-600">
                  +569 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-orange-600" />
                <a href="mailto:contacto@torqueexpress.cl" className="text-slate-400 hover:text-orange-600">
                  contacto@torqueexpress.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} TorqueExpress. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
