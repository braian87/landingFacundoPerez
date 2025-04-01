"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface FeaturedVideoCardProps {
  id: string
  title: string
  description?: string
  
 
  thumbnail: string
}

export default function FeaturedVideoCard({ id, title, description, thumbnail }: FeaturedVideoCardProps) {
  const [showVideo, setShowVideo] = useState(false)

  const handleClick = () => {
    setShowVideo(true)
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden">
        {!showVideo ? (
          <>
            <img
              src={thumbnail || `/placeholder.svg?height=200&width=300`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors">
              <button
                onClick={handleClick}
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-4 transition-transform hover:scale-110"
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
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  )
}

