"use client"

import { useState } from "react"
import { Play, Calendar, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LatestVideoProps {
  id: string
  title: string
  description: string
  date: string
  views: string
  thumbnail: string
}

export default function LatestVideo({ id, title, description, date, views, thumbnail }: LatestVideoProps) {
  const [showVideo, setShowVideo] = useState(false)

  const handlePlayClick = () => {
    setShowVideo(true)
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <div className="relative aspect-video w-full">
        {!showVideo ? (
          <>
            <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
              <Button
                onClick={handlePlayClick}
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-6 transition-transform hover:scale-110"
                aria-label="Reproducir video"
              >
                <Play className="h-8 w-8 fill-white" />
              </Button>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-3">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{views} vistas</span>
          </div>
        </div>
      </div>
    </div>
  )
}

