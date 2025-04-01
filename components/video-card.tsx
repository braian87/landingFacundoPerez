"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoCardProps {
  id: string
  title: string
  description?: string
  views: string
  date: string
  thumbnail: string
}

export default function VideoCard({ id, title, description, views, date, thumbnail }: VideoCardProps) {
  const [showVideo, setShowVideo] = useState(false)

  const handleClick = () => {
    setShowVideo(true)
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden">
        {!showVideo ? (
          <>
            <img
              src={thumbnail || "https://via.placeholder.com/300x200"}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors">
              <button
                onClick={handleClick}
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-4 transition-transform hover:scale-110"
                aria-label="Reproducir video"
              >
                <Play className="h-6 w-6 fill-white" />
              </button>
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
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-600 line-clamp-2 mb-2">{title}</h3>
        {description && <p className="text-gray-500 text-sm line-clamp-3 mb-4">{description}</p>}
        <div className="mt-auto flex items-center text-xs text-gray-500">
          <span>{views} vistas</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  )
}

