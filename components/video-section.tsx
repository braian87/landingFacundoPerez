import VideoCard from "./video-card"

interface VideoSectionProps {
  title: string
  description: string
  videos: {
    id: string
    title: string
    description?: string
    views: string
    date: string
    thumbnail: string
  }[]
}

export default function VideoSection({ title, description, videos }: VideoSectionProps) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-600 text-center mb-4">{title}</h2>
      <p className="text-gray-500 text-center max-w-4xl mx-auto mb-12">{description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            id={video.id}
            title={video.title}
            description={video.description}
            views={video.views}
            date={video.date}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

