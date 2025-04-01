"use client"

import { useState, useEffect } from "react"
import { Youtube } from "lucide-react"

interface YouTubeButtonProps {
  channelUrl: string
}

export default function YouTubeButton({ channelUrl }: YouTubeButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <a
      href={channelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
      aria-label="Visitar canal de YouTube"
    >
      <Youtube className="h-6 w-6" />
    </a>
  )
}

