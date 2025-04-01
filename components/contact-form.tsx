"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ContactFormProps {
  emailAddress: string
}

export default function ContactForm({ emailAddress }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({})

    try {
      // Format the email content
      const subject = encodeURIComponent(`Mensaje de contacto de ${formData.firstName} ${formData.lastName}`)
      const body = encodeURIComponent(`
Nombre: ${formData.firstName} ${formData.lastName}
Teléfono: ${formData.phone}
Email: ${formData.email}

Mensaje:
${formData.message}
      `)

      // Open Gmail with pre-filled content
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`

      // Try to open Gmail first
      window.open(gmailUrl, "_blank")

      // Also provide a fallback to the default mailto
      setTimeout(() => {
        const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`
        window.location.href = mailtoUrl
      }, 300)

      // Show success message
      setSubmitStatus({
        success: true,
        message: "¡Gracias por tu mensaje! Se abrirá tu cliente de correo para enviar el mensaje.",
      })

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus.message && (
        <div
          className={`p-4 mb-4 rounded-md ${
            submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-gray-600">
            Nombre
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="bg-white border-gray-300 text-gray-600 placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-gray-600">
            Apellido
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Tu apellido"
            className="bg-white border-gray-300 text-gray-600 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-gray-600">
          Teléfono
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Tu número de teléfono"
          className="bg-white border-gray-300 text-gray-600 placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-600">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Tu correo electrónico"
          className="bg-white border-gray-300 text-gray-600 placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-600">
          Mensaje
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Escribe tu mensaje aquí"
          rows={4}
          className="bg-white border-gray-300 text-gray-600 placeholder:text-gray-400"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  )
}

