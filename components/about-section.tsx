import Image from "next/image"
import VideoCard from "./video-card"

interface AboutSectionProps {
  title: string
  content: string
  image: string
  imagePosition: "left" | "right"
  relatedVideos?: {
    id: string
    title: string
    views: string
    date: string
    thumbnail: string
  }[]
}

export default function AboutSection({ title, content, image, imagePosition, relatedVideos }: AboutSectionProps) {
  return (
    <div className="mb-16 last:mb-0">
      <div
        className={`flex flex-col ${
          imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 items-center`}
      >
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-amber-400 mb-4">{title}</h3>
          <p className="text-amber-100">{content}</p>
        </div>
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg border-2 border-amber-500">
            <Image src={image || "https://via.placeholder.com/800x600"} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Related Videos Section */}
      {relatedVideos && relatedVideos.length > 0 && (
        <div className="mt-8">
          <h4 className="text-xl font-semibold text-amber-400 mb-4">Videos Relacionados</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {relatedVideos.map((video, index) => (
              <VideoCard
                key={index}
                id={video.id}
                title={video.title}
                views={video.views}
                date={video.date}
                thumbnail={video.thumbnail}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

