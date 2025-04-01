import { Headphones, BookOpen, Music, Instagram, Youtube, Video } from "lucide-react"

export default function PodcastSection() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">Bitácora Podcast</h2>
        <p className="text-gray-500">
          Un espacio donde exploramos historias, conversaciones y reflexiones sobre viajes, vida rural y experiencias
          que inspiran. Acompáñame en este viaje auditivo donde compartimos con invitados especiales sus experiencias y
          conocimientos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Podcast Card */}
        <div className="podcast-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f2e6cf] p-4 rounded-full">
                <Headphones className="h-10 w-10 text-gray-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-600 text-center mb-4">Escucha el Podcast</h3>
            <p className="text-gray-500 text-center mb-6">
              Disponible en todas las plataformas principales de podcast. Nuevos episodios cada semana.
            </p>
            <div className="space-y-3">
              <a
                href="https://open.spotify.com/show/5wN4BV8WeAtgH8rcy0hePR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#1DB954] hover:bg-[#1ed760] text-white py-2 px-4 rounded-md transition-colors"
              >
                <Music className="h-5 w-5" />
                Escuchar en Spotify
              </a>
              <a
                href="https://www.youtube.com/@Bitacora_Podcast"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#FF0000] hover:bg-[#ff1a1a] text-white py-2 px-4 rounded-md transition-colors"
              >
                <Youtube className="h-5 w-5" />
                Ver en YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Book Card */}
        <div className="book-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f2e6cf] p-4 rounded-full">
                <BookOpen className="h-10 w-10 text-gray-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-600 text-center mb-4">Mi Libro</h3>
            <p className="text-gray-500 text-center mb-6">
              "Viajes, Reflexiones y Aventuras" - Un recorrido por mis experiencias y aprendizajes en el camino.
            </p>
            <div className="flex justify-center mb-4">
              <img
                src="/portada.png"
                alt="Portada del libro"
                className="h-40 object-contain rounded-md shadow-sm"
              />
            </div>
            <a
              href="https://a.co/d/2irFtsV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#FF9900] hover:bg-[#ffad33] text-white py-2 px-4 rounded-md transition-colors"
            >
              Comprar en Amazon
            </a>
          </div>
        </div>

        {/* Social Media Card */}
        <div className="podcast-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f2e6cf] p-4 rounded-full">
                <Instagram className="h-10 w-10 text-gray-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-600 text-center mb-4">Síguenos</h3>
            <p className="text-gray-500 text-center mb-6">
              Mantente al día con nuestro contenido y novedades siguiéndonos en redes sociales.
            </p>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/bitacora_podcast_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#E1306C] hover:bg-[#e4457c] text-white py-2 px-4 rounded-md transition-colors"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@faquperez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#000000] hover:bg-[#333333] text-white py-2 px-4 rounded-md transition-colors"
              >
                <Video className="h-5 w-5" />
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Episode */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-600 mb-4">Episodio Destacado</h3>
        <div className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG"
            title="Bitácora Podcast - Episodios"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

