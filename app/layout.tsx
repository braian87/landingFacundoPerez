import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Facundo Perez - Viajero y Creador de Contenido",
  description: "Viajero en moto, constructor de casita rural y contador de historias con pasión",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

import "./globals.css"



import './globals.css'