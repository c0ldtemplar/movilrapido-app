"use client"

import type React from "react"

import { useState, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface QuoteFormModalProps {
  children: ReactNode
}

export function QuoteFormModal({ children }: QuoteFormModalProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setLoading(false)
    setOpen(false)
    alert("¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Solicitar Cotización</DialogTitle>
          <DialogDescription>Completa el formulario y te contactaremos en menos de 24 horas</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo *</Label>
              <Input id="name" required placeholder="Juan Pérez" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono *</Label>
              <Input id="phone" type="tel" required placeholder="+569 1234 5678" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="juan@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comuna">Comuna *</Label>
            <Select required>
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
            <Select required>
              <SelectTrigger id="service">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cambio-aceite">Cambio de Aceite</SelectItem>
                <SelectItem value="frenos">Revisión de Frenos</SelectItem>
                <SelectItem value="diagnostico">Diagnóstico</SelectItem>
                <SelectItem value="mantencion">Mantención General</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle">Marca y Modelo del Vehículo</Label>
            <Input id="vehicle" placeholder="Ej: Toyota Corolla 2015" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje / Detalles</Label>
            <Textarea id="message" placeholder="Cuéntanos más sobre el servicio que necesitas..." rows={3} />
          </div>
          <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={loading}>
            {loading ? "Enviando..." : "Solicitar Cotización"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
