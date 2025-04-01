import { MessageCircle, Youtube } from "lucide-react"
import ContactForm from "@/components/contact-form"
import VideoSection from "@/components/video-section"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileMenu from "@/components/mobile-menu"
import AboutSection from "@/components/about-section"
import FeaturedVideoCard from "@/components/featured-video-card"
import SocialLinks from "@/components/social-links"

export default function Home() {
  const whatsappNumber = "+5491163604558"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  // Featured videos with actual YouTube embed IDs
  const featuredVideos = [
    {
      id: "6wlC91nseIM", // Example YouTube video ID
      title: "¡Restauración Total! PINTAMOS Hasta la MOTO",
      description: "En este video restauramos completamente nuestra moto para continuar nuestro viaje por Argentina.",
      views: "5.6K", 
      date: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/6wlC91nseIM/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "QBdGTB9K42U", // Example YouTube video ID
      title: "TRABAJAMOS a Full en el Proyecto RURAL ¡Y el RESULTADO es INCREÍBLE!",
      description: "Un día productivo trabajando en nuestra casita rural, mostrando todo el proceso y los avances.",
      views: "8.2K",
      date: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/QBdGTB9K42U/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "g_DY8nygLb0", // Example YouTube video ID
      title: "We build a Wooden Wall! - Rurallife Project",
      description: "Construimos una pared de madera para nuestra casa rural, mostrando todo el proceso paso a paso.",
      views: "15K",
      date: "2 months ago",
      thumbnail: "https://i.ytimg.com/vi/g_DY8nygLb0/hqdefault.jpg", // Using actual YouTube thumbnail
    },
  ]

  // Casita Rural videos with actual YouTube embed IDs
  const casitaRuralVideos = [
    {
      id: "6wlC91nseIM", // Example YouTube video ID
      title: "¡Restauración Total! PINTAMOS Hasta la MOTO",
      description: "En este video restauramos completamente nuestra moto para continuar nuestro viaje por Argentina.",
      views: "5.6K", 
      date: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/6wlC91nseIM/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "QBdGTB9K42U", // Example YouTube video ID
      title: "TRABAJAMOS a Full en el Proyecto RURAL ¡Y el RESULTADO es INCREÍBLE!",
      description: "Un día productivo trabajando en nuestra casita rural, mostrando todo el proceso y los avances.",
      views: "8.2K",
      date: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/QBdGTB9K42U/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "g_DY8nygLb0", // Example YouTube video ID
      title: "We build a Wooden Wall! - Rurallife Project",
      description: "Construimos una pared de madera para nuestra casa rural, mostrando todo el proceso paso a paso.",
      views: "15K",
      date: "2 months ago",
      thumbnail: "https://i.ytimg.com/vi/g_DY8nygLb0/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "HAaQNvzMnzs", // Example YouTube video ID
      title: "Desafío Bajo el Sol! Trabajando en Nuestra Casita Rural",
      description: "Trabajando bajo el intenso sol para avanzar en nuestro proyecto de casa rural.",
      views: "10K",
      date: "2 months ago",
      thumbnail: "https://i.ytimg.com/vi/HAaQNvzMnzs/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "¡INCREÍBLE Cambio! PINTAMOS 🧠 Nuestra CASITA RURAL",
      description: "Transformamos completamente nuestra casita rural con una nueva capa de pintura.",
      views: "13K",
      date: "3 months ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "¿Misión Imposible? AIRE Acondicionado en Nuestra CASITA RURAL",
      description: "Instalamos aire acondicionado en nuestra casita rural, un desafío que parecía imposible.",
      views: "11K",
      date: "4 months ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
  ]

  // Gente con Pasión videos with actual YouTube embed IDs
  const genteConPasionVideos = [
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "ARTESANO en el CAMPO: Una Vida SIMPLE y FELIZ",
      description: "Conocemos a un artesano que decidió vivir en el campo, llevando una vida simple y feliz.",
      views: "7.8K",
      date: "5 months ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "VIVEN de lo que AMAN: Granja AUTOSUSTENTABLE",
      description: "Visitamos una granja autosustentable donde sus dueños viven de lo que aman hacer.",
      views: "9.3K",
      date: "6 months ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "COMPRAR CASA SIN DINERO: La Historia de Juan",
      description: "Juan nos cuenta cómo logró comprar su casa sin tener dinero, a través de trueques e ingenio.",
      views: "12.5K",
      date: "7 months ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "INVERTIR en un PUEBLO CHICO: ¿Conviene?",
      description: "Analizamos si conviene invertir en pueblos pequeños, con testimonios de quienes lo hicieron.",
      views: "8.7K",
      date: "8 months ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "MECÁNICO de MOTOS en la MONTAÑA",
      description: "Conocemos a un mecánico de motos que decidió establecer su taller en plena montaña.",
      views: "6.9K",
      date: "9 months ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
  ]

  // Viajes en Moto videos with actual YouTube embed IDs
  const viajesEnMotoVideos = [
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "CRUZANDO los ANDES en MOTO",
      description: "Nuestra aventura cruzando la cordillera de los Andes en motocicleta.",
      views: "18.2K",
      date: "10 months ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "RUTA 40: El NORTE ARGENTINO en MOTO",
      description: "Recorremos el norte argentino por la mítica Ruta 40 en nuestra motocicleta.",
      views: "15.7K",
      date: "11 months ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "PATAGONIA: Los PAISAJES más INCREÍBLES",
      description: "Descubrimos los paisajes más impresionantes de la Patagonia argentina en moto.",
      views: "20.3K",
      date: "1 year ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "CATARATAS del IGUAZÚ en MOTO",
      description: "Nuestro viaje en moto hasta las impresionantes Cataratas del Iguazú.",
      views: "14.8K",
      date: "1 year ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
    {
      id: "dQw4w9WgXcQ", // Example YouTube video ID
      title: "MENDOZA: Viñedos y MONTAÑAS en MOTO",
      description: "Recorremos los viñedos y montañas de Mendoza en nuestra motocicleta.",
      views: "12.1K",
      date: "1 year ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
    },
  ]

  // About sections with related videos
  const aboutSections = [
    {
      title: "¿Quién es Facundo Perez?",
      content:
        "Soy Facundo, un apasionado viajero y creador de contenido argentino. Mi aventura comenzó hace algunos años cuando decidí recorrer Argentina en motocicleta, documentando cada kilómetro del camino. Lo que empezó como un simple viaje se transformó en un estilo de vida y en un canal de YouTube donde comparto mis experiencias, aprendizajes y las historias de personas increíbles que encuentro en el camino.",
      image: "/logo.png", // Example profile image
      relatedVideos: [
        {
          id: "dQw4w9WgXcQ", // Example YouTube video ID
          title: "Mi Historia: De la Ciudad a la Ruta",
          views: "25.3K",
          date: "2 years ago",
          thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
        },
        {
          id: "dQw4w9WgXcQ", // Example YouTube video ID
          title: "¿Por qué Elegí Viajar en Moto?",
          views: "18.7K",
          date: "2 years ago",
          thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
        },
      ],
    },
    {
      title: "Nuestra Casita Rural",
      content:
        "Uno de los proyectos más importantes que comparto en mi canal es la construcción de nuestra casita rural. Junto con mi pareja, decidimos establecernos en un pequeño pueblo alejado de la ciudad para construir nuestro hogar con nuestras propias manos. Este proyecto representa nuestro sueño de una vida más simple, conectada con la naturaleza y autosustentable. A través de mis videos, muestro cada etapa del proceso, desde la compra del terreno hasta los detalles más pequeños de la construcción.",
      image: "https://images.unsplash.com/photo-1570793005386-840846445fed?q=80&w=1000", // Example rural house image
      relatedVideos: [
        {
          id: "dQw4w9WgXcQ", // Example YouTube video ID
          title: "Compramos un TERRENO en el CAMPO",
          views: "32.1K",
          date: "1.5 years ago",
          thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
        },
        {
          id: "dQw4w9WgXcQ", // Example YouTube video ID
          title: "Primeros PLANOS de Nuestra CASA",
          views: "28.5K",
          date: "1.5 years ago",
          thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
        },
      ],
    },
    {
      title: "Gente con Pasión",
      content:
        "Una de las secciones más queridas de mi canal es 'Gente con Pasión', donde entrevisto a personas que han decidido vivir de lo que aman. Desde artesanos hasta emprendedores rurales, mecánicos de montaña y agricultores autosustentables, estas historias buscan inspirar a otros a seguir sus sueños y demostrar que existen múltiples formas de vida más allá del camino convencional.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000", // Example people with passion image
      relatedVideos: [
        {
          id: "dQw4w9WgXcQ", // Example YouTube video ID
          title: "CARPINTERO de MONTAÑA: 40 Años de Oficio",
          views: "15.9K",
          date: "1 year ago",
          thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
        },
        {
          id: "dQw4w9WgXcQ", // Example YouTube video ID
          title: "PANADERÍA ARTESANAL: Un Negocio Familiar",
          views: "14.2K",
          date: "1 year ago",
          thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
        },
      ],
    },
    {
      title: "Viajes en Moto",
      content:
        "Mi pasión por las motocicletas y los viajes me ha llevado a recorrer gran parte de Argentina, desde la Patagonia hasta el Norte, pasando por la cordillera de los Andes y la costa atlántica. En mis videos de viajes comparto no solo los paisajes impresionantes, sino también los desafíos, las reparaciones en ruta, los encuentros con locales y todas las aventuras que surgen al viajar sobre dos ruedas.",
      image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=1000", // Example motorcycle travel image
      relatedVideos: [
        {
          id: "dQw4w9WgXcQ", // Example YouTube video ID
          title: "PREPARANDO la MOTO para un VIAJE LARGO",
          views: "22.7K",
          date: "1.5 years ago",
          thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
        },
        {
          id: "dQw4w9WgXcQ", // Example YouTube video ID
          title: "EQUIPO BÁSICO para VIAJAR en MOTO",
          views: "19.8K",
          date: "1.5 years ago",
          thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Using actual YouTube thumbnail
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-600 to-amber-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-red-700/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Replace with actual logo or use a placeholder */}
            <img
              src="/logo.png"
              width={50}
              height={50}
              className="rounded-full"
              alt="Logo Facundo Perez"
            />
            <h1 className="text-2xl font-bold text-amber-400">Facundo Perez</h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#inicio" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#destacados" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Destacados
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#casita-rural" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Casita Rural
                </a>
              </li>
              <li>
                <a href="#gente-con-pasion" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Gente con Pasión
                </a>
              </li>
              <li>
                <a href="#viajes-en-moto" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Viajes en Moto
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-16 md:py-24 bg-gradient-to-r from-red-700 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-8">
            {/* Replace with actual profile image or use a placeholder */}
            <img
              src="/facu.png"
              alt="Facundo Perez"
              width={150}
              height={150}
              className="rounded-full border-4 border-amber-400 mb-4"
            />
            <h2 className="text-3xl md:text-5xl font-bold text-amber-400 mb-2">Facundo Perez</h2>
            <p className="text-xl md:text-2xl text-amber-300 max-w-3xl mx-auto">
              Viajero, constructor y contador de historias
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-red-800 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
                10K suscriptores
              </span>
              <span className="bg-red-800 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">172 videos</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto mb-8">
            ¡Hola! Soy Facu y recorro Argentina en moto 🏍️ compartiendo historias, construyendo mi casita rural y
            mostrando gente con pasión por lo que hace.
          </p>

          <SocialLinks />

          <div className="mt-8">
            <a
              href="https://www.youtube.com/@faqundoperez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <Youtube className="h-5 w-5" />
              Suscribirse
            </a>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section id="destacados" className="py-16 md:py-24 bg-red-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 text-center mb-12">Videos Destacados</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <FeaturedVideoCard
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
      </section>

      {/* About Sections */}
      <section id="sobre-mi" className="py-16 md:py-24 bg-gradient-to-r from-red-700 to-red-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 text-center mb-12">Sobre Mí</h2>

          {aboutSections.map((section, index) => (
            <AboutSection
              key={index}
              title={section.title}
              content={section.content}
              image={section.image}
              imagePosition={index % 2 === 0 ? "right" : "left"}
              relatedVideos={section.relatedVideos}
            />
          ))}
        </div>
      </section>

      {/* Casita Rural Videos Section */}
      <section id="casita-rural" className="py-16 md:py-24 bg-red-800">
        <div className="container mx-auto px-4">
          <VideoSection
            title="Haciendo Nuestra Casita Rural 🏡"
            description="En esta playlist te cuento cómo desarrollamos nuestro Proyecto de vivienda 🏡 en un pueblito rural y alejado de la ciudad 🏙️, de acuerdo a nuestras posibilidades económicas 🤑"
            videos={casitaRuralVideos}
          />
        </div>
      </section>

      {/* Gente con Pasión Videos Section */}
      <section id="gente-con-pasion" className="py-16 md:py-24 bg-gradient-to-r from-red-700 to-red-600">
        <div className="container mx-auto px-4">
          <VideoSection
            title="Gente con Pasión 🔥"
            description="Historias de quienes viven con pasión por su oficio y su trabajo. Desde mecánicos hasta revendedores de autos, pasando por artesanos, emprendedores y más. En esta serie recorremos Argentina conociendo personas inspiradoras."
            videos={genteConPasionVideos}
          />
        </div>
      </section>

      {/* Viajes en Moto Videos Section */}
      <section id="viajes-en-moto" className="py-16 md:py-24 bg-red-800">
        <div className="container mx-auto px-4">
          <VideoSection
            title="Viajes en Moto por Argentina 🏍️"
            description="Recorriendo los paisajes más impresionantes de Argentina en motocicleta. Desde la Patagonia hasta el Norte, pasando por la cordillera de los Andes y la costa atlántica."
            videos={viajesEnMotoVideos}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-gradient-to-r from-red-700 to-red-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 text-center mb-12">Contáctame</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-red-800 rounded-xl p-8 shadow-lg border border-amber-500">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Información de Contacto</h3>

              <div className="space-y-4 text-amber-100">
                <p className="flex items-center gap-3">
                  <MessageCircle className="text-amber-400" />
                  <span>WhatsApp: </span>
                  <a href={whatsappUrl} className="text-amber-400 hover:underline">
                    {whatsappNumber}
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Email: </span>
                  <a href="mailto:contacto@facundoperez.com" className="text-amber-400 hover:underline">
                    contacto@facundoperez.com
                  </a>
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">Sígueme</h3>

                <SocialLinks />
              </div>
            </div>

            <div className="bg-red-800 rounded-xl p-8 shadow-lg border border-amber-500">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Envíame un Mensaje</h3>
              <ContactForm whatsappNumber={whatsappNumber} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-amber-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* Replace with actual logo or use a placeholder */}
                <img
                  src="https://via.placeholder.com/50"
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="Logo Facundo Perez"
                />
                <h2 className="text-xl font-bold text-amber-400">Facundo Perez</h2>
              </div>
              <p className="text-amber-200 mb-4">
                Viajero, constructor y contador de historias. Recorriendo Argentina en moto y compartiendo experiencias
                únicas.
              </p>
              <p className="text-amber-200 mb-4">
                <span className="font-semibold">10K</span> suscriptores • <span className="font-semibold">172</span>{" "}
                videos
              </p>
              <SocialLinks />
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-amber-200 hover:text-amber-300 transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#destacados" className="text-amber-200 hover:text-amber-300 transition-colors">
                    Videos Destacados
                  </a>
                </li>
                <li>
                  <a href="#sobre-mi" className="text-amber-200 hover:text-amber-300 transition-colors">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-amber-200 hover:text-amber-300 transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@faqundoperez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-200 hover:text-amber-300 transition-colors"
                  >
                    Canal de YouTube
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-4">Categorías</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#casita-rural" className="text-amber-200 hover:text-amber-300 transition-colors">
                    Casita Rural
                  </a>
                </li>
                <li>
                  <a href="#gente-con-pasion" className="text-amber-200 hover:text-amber-300 transition-colors">
                    Gente con Pasión
                  </a>
                </li>
                <li>
                  <a href="#viajes-en-moto" className="text-amber-200 hover:text-amber-300 transition-colors">
                    Viajes en Moto
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@faqundoperez/playlists"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-200 hover:text-amber-300 transition-colors"
                  >
                    Todas las Playlists
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-4">Suscríbete al Newsletter</h3>
              <p className="text-amber-200 mb-4">
                Recibe notificaciones sobre nuevos videos y actualizaciones de nuestros proyectos.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-2 rounded-md bg-red-800 border border-amber-500 text-amber-100 placeholder:text-amber-300/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-red-900 font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-amber-300 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Facundo Perez. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-amber-300 hover:text-amber-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-amber-300 hover:text-amber-400 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton whatsappNumber={whatsappNumber} />
    </main>
  )
}

