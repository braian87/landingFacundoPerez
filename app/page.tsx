import { MessageCircle, Youtube } from "lucide-react"
import ContactForm from "@/components/contact-form"
import VideoSection from "@/components/video-section"
import MobileMenu from "@/components/mobile-menu"
import AboutSection from "@/components/about-section"
import FeaturedVideoCard from "@/components/featured-video-card"
import SocialLinks from "@/components/social-links"
import LatestVideo from "@/components/latest-video"
import PodcastSection from "@/components/podcast-section"
import YouTubeButton from "@/components/youtube-button"

export default function Home() {
  const whatsappNumber = "+549112345678"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  const emailAddress = "contactofeperez@gmail.com"
  const youtubeChannelUrl = "https://www.youtube.com/@faqundoperez"

  // Latest video
  const latestVideo = {
    id: "6wlC91nseIM",
    title: "¡Restauración Total! PINTAMOS Hasta la MOTO",
    description:
      "En este video restauramos completamente nuestra moto para continuar nuestro viaje por Argentina. Descubre todo el proceso paso a paso y los resultados finales.",
    views: "5.6K",
    date: "1 month ago",
    thumbnail: "https://i.ytimg.com/vi/6wlC91nseIM/maxresdefault.jpg",
  }

  // Update the featured videos with correct YouTube IDs
  const featuredVideos = [
    {
      id: "6wlC91nseIM",
      title: "¡Restauración Total! PINTAMOS Hasta la MOTO",
      description: "En este video restauramos completamente nuestra moto para continuar nuestro viaje por Argentina.",
      views: "5.6K",
      date: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/6wlC91nseIM/hqdefault.jpg",
    },
    {
      id: "QBdGTB9K42U",
      title: "TRABAJAMOS a Full en el Proyecto RURAL ¡Y el RESULTADO es INCREÍBLE!",
      description: "Un día productivo trabajando en nuestra casita rural, mostrando todo el proceso y los avances.",
      views: "8.2K",
      date: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/QBdGTB9K42U/hqdefault.jpg",
    },
    {
      id: "g_DY8nygLb0",
      title: "We build a Wooden Wall! - Rurallife Project",
      description: "Construimos una pared de madera para nuestra casa rural, mostrando todo el proceso paso a paso.",
      views: "15K",
      date: "2 months ago",
      thumbnail: "https://i.ytimg.com/vi/g_DY8nygLb0/hqdefault.jpg",
    },
  ]

  // Update Casita Rural videos with correct YouTube IDs
  const casitaRuralVideos = [
    {
      id: "6wlC91nseIM",
      title: "¡Restauración Total! PINTAMOS Hasta la MOTO",
      description: "En este video restauramos completamente nuestra moto para continuar nuestro viaje por Argentina.",
      views: "5.6K",
      date: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/6wlC91nseIM/hqdefault.jpg",
    },
    {
      id: "QBdGTB9K42U",
      title: "TRABAJAMOS a Full en el Proyecto RURAL ¡Y el RESULTADO es INCREÍBLE!",
      description: "Un día productivo trabajando en nuestra casita rural, mostrando todo el proceso y los avances.",
      views: "8.2K",
      date: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/QBdGTB9K42U/hqdefault.jpg",
    },
    {
      id: "g_DY8nygLb0",
      title: "We build a Wooden Wall! - Rurallife Project",
      description: "Construimos una pared de madera para nuestra casa rural, mostrando todo el proceso paso a paso.",
      views: "15K",
      date: "2 months ago",
      thumbnail: "https://i.ytimg.com/vi/g_DY8nygLb0/hqdefault.jpg",
    },
    {
      id: "HAaQNvzMnzs",
      title: "Desafío Bajo el Sol! Trabajando en Nuestra Casita Rural",
      description: "Trabajando bajo el intenso sol para avanzar en nuestro proyecto de casa rural.",
      views: "10K",
      date: "2 months ago",
      thumbnail: "https://i.ytimg.com/vi/HAaQNvzMnzs/hqdefault.jpg",
    },
    {
      id: "Ks0cLYeJtJY",
      title: "¡INCREÍBLE Cambio! PINTAMOS 🧠 Nuestra CASITA RURAL",
      description: "Transformamos completamente nuestra casita rural con una nueva capa de pintura.",
      views: "13K",
      date: "3 months ago",
      thumbnail: "https://i.ytimg.com/vi/Ks0cLYeJtJY/hqdefault.jpg",
    },
    {
      id: "XZJZgwGBHXE",
      title: "¿Misión Imposible? AIRE Acondicionado en Nuestra CASITA RURAL",
      description: "Instalamos aire acondicionado en nuestra casita rural, un desafío que parecía imposible.",
      views: "11K",
      date: "4 months ago",
      thumbnail: "https://i.ytimg.com/vi/XZJZgwGBHXE/hqdefault.jpg",
    },
  ]

  // Update Gente con Pasión videos with unique YouTube IDs
  const genteConPasionVideos = [
    {
      id: "7yLxxyzGiko",
      title: "ARTESANO en el CAMPO: Una Vida SIMPLE y FELIZ",
      description: "Conocemos a un artesano que decidió vivir en el campo, llevando una vida simple y feliz.",
      views: "7.8K",
      date: "5 months ago",
      thumbnail: "https://i.ytimg.com/vi/7yLxxyzGiko/hqdefault.jpg",
    },
    {
      id: "9bZkp7q19f0",
      title: "VIVEN de lo que AMAN: Granja AUTOSUSTENTABLE",
      description: "Visitamos una granja autosustentable donde sus dueños viven de lo que aman hacer.",
      views: "9.3K",
      date: "6 months ago",
      thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "COMPRAR CASA SIN DINERO: La Historia de Juan",
      description: "Juan nos cuenta cómo logró comprar su casa sin tener dinero, a través de trueques e ingenio.",
      views: "12.5K",
      date: "7 months ago",
      thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    },
    {
      id: "JGwWNGJdvx8",
      title: "INVERTIR en un PUEBLO CHICO: ¿Conviene?",
      description: "Analizamos si conviene invertir en pueblos pequeños, con testimonios de quienes lo hicieron.",
      views: "8.7K",
      date: "8 months ago",
      thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg",
    },
    {
      id: "pRpeEdMmmQ0",
      title: "MECÁNICO de MOTOS en la MONTAÑA",
      description: "Conocemos a un mecánico de motos que decidió establecer su taller en plena montaña.",
      views: "6.9K",
      date: "9 months ago",
      thumbnail: "https://i.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg",
    },
  ]

  // Update Viajes en Moto videos with unique YouTube IDs
  const viajesEnMotoVideos = [
    {
      id: "fJ9rUzIMcZQ",
      title: "CRUZANDO los ANDES en MOTO",
      description: "Nuestra aventura cruzando la cordillera de los Andes en motocicleta.",
      views: "18.2K",
      date: "10 months ago",
      thumbnail: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
    },
    {
      id: "YR5ApYxkU-U",
      title: "RUTA 40: El NORTE ARGENTINO en MOTO",
      description: "Recorremos el norte argentino por la mítica Ruta 40 en nuestra motocicleta.",
      views: "15.7K",
      date: "11 months ago",
      thumbnail: "https://i.ytimg.com/vi/YR5ApYxkU-U/hqdefault.jpg",
    },
    {
      id: "2zNSgSzhBfM",
      title: "PATAGONIA: Los PAISAJES más INCREÍBLES",
      description: "Descubrimos los paisajes más impresionantes de la Patagonia argentina en moto.",
      views: "20.3K",
      date: "1 year ago",
      thumbnail: "https://i.ytimg.com/vi/2zNSgSzhBfM/hqdefault.jpg",
    },
    {
      id: "aJOTlE1K90k",
      title: "CATARATAS del IGUAZÚ en MOTO",
      description: "Nuestro viaje en moto hasta las impresionantes Cataratas del Iguazú.",
      views: "14.8K",
      date: "1 year ago",
      thumbnail: "https://i.ytimg.com/vi/aJOTlE1K90k/hqdefault.jpg",
    },
    {
      id: "V1bFr2SWP1I",
      title: "MENDOZA: Viñedos y MONTAÑAS en MOTO",
      description: "Recorremos los viñedos y montañas de Mendoza en nuestra motocicleta.",
      views: "12.1K",
      date: "1 year ago",
      thumbnail: "https://i.ytimg.com/vi/V1bFr2SWP1I/hqdefault.jpg",
    },
  ]

  // Update About sections with related videos
  const aboutSections = [
    {
      title: "¿Quién es Facundo Perez?",
      content:
        "Soy Facundo, un apasionado viajero y creador de contenido argentino. Mi aventura comenzó hace algunos años cuando decidí recorrer Argentina en motocicleta, documentando cada kilómetro del camino. Lo que empezó como un simple viaje se transformó en un estilo de vida y en un canal de YouTube donde comparto mis experiencias, aprendizajes y las historias de personas increíbles que encuentro en el camino.",
      image: "/facundo1.png",
      relatedVideos: [
        {
          id: "QBdGTB9K42U",
          title: "Mi Historia: De la Ciudad a la Ruta",
          views: "25.3K",
          date: "2 years ago",
          thumbnail: "https://i.ytimg.com/vi/QBdGTB9K42U/hqdefault.jpg",
        },
        {
          id: "6wlC91nseIM",
          title: "¿Por qué Elegí Viajar en Moto?",
          views: "18.7K",
          date: "2 years ago",
          thumbnail: "https://i.ytimg.com/vi/6wlC91nseIM/hqdefault.jpg",
        },
      ],
    },
    {
      title: "Nuestra Casita Rural",
      content:
        "Uno de los proyectos más importantes que comparto en mi canal es la construcción de nuestra casita rural. Junto con mi pareja, decidimos establecernos en un pequeño pueblo alejado de la ciudad para construir nuestro hogar con nuestras propias manos. Este proyecto representa nuestro sueño de una vida más simple, conectada con la naturaleza y autosustentable. A través de mis videos, muestro cada etapa del proceso, desde la compra del terreno hasta los detalles más pequeños de la construcción.",
      image: "https://images.unsplash.com/photo-1570793005386-840846445fed?q=80&w=1000",
      relatedVideos: [
        {
          id: "g_DY8nygLb0",
          title: "Compramos un TERRENO en el CAMPO",
          views: "32.1K",
          date: "1.5 years ago",
          thumbnail: "https://i.ytimg.com/vi/g_DY8nygLb0/hqdefault.jpg",
        },
        {
          id: "HAaQNvzMnzs",
          title: "Primeros PLANOS de Nuestra CASA",
          views: "28.5K",
          date: "1.5 years ago",
          thumbnail: "https://i.ytimg.com/vi/HAaQNvzMnzs/hqdefault.jpg",
        },
      ],
    },
    {
      title: "Gente con Pasión",
      content:
        "Una de las secciones más queridas de mi canal es 'Gente con Pasión', donde entrevisto a personas que han decidido vivir de lo que aman. Desde artesanos hasta emprendedores rurales, mecánicos de montaña y agricultores autosustentables, estas historias buscan inspirar a otros a seguir sus sueños y demostrar que existen múltiples formas de vida más allá del camino convencional.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
      relatedVideos: [
        {
          id: "7yLxxyzGiko",
          title: "CARPINTERO de MONTAÑA: 40 Años de Oficio",
          views: "15.9K",
          date: "1 year ago",
          thumbnail: "https://i.ytimg.com/vi/7yLxxyzGiko/hqdefault.jpg",
        },
        {
          id: "9bZkp7q19f0",
          title: "PANADERÍA ARTESANAL: Un Negocio Familiar",
          views: "14.2K",
          date: "1 year ago",
          thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
        },
      ],
    },
    {
      title: "Viajes en Moto",
      content:
        "Mi pasión por las motocicletas y los viajes me ha llevado a recorrer gran parte de Argentina, desde la Patagonia hasta el Norte, pasando por la cordillera de los Andes y la costa atlántica. En mis videos de viajes comparto no solo los paisajes impresionantes, sino también los desafíos, las reparaciones en ruta, los encuentros con locales y todas las aventuras que surgen al viajar sobre dos ruedas.",
      image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=1000",
      relatedVideos: [
        {
          id: "fJ9rUzIMcZQ",
          title: "PREPARANDO la MOTO para un VIAJE LARGO",
          views: "22.7K",
          date: "1.5 years ago",
          thumbnail: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
        },
        {
          id: "YR5ApYxkU-U",
          title: "EQUIPO BÁSICO para VIAJAR en MOTO",
          views: "19.8K",
          date: "1.5 years ago",
          thumbnail: "https://i.ytimg.com/vi/YR5ApYxkU-U/hqdefault.jpg",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen cream-bg">
      {/* Background blur image */}
      <div className="bg-blur"></div>

      <div className="content-wrapper">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" className="flex items-center gap-3">
              {/* Logo is now clickable and redirects to home */}
              <img src="/logo.png" width={50} height={50} className="rounded-full" alt="Logo Facundo Perez" />
              <h1 className="text-2xl font-bold text-gray-600">Facundo Perez</h1>
            </a>

            <nav className="hidden md:block">
              <ul className="flex gap-6">
                <li>
                  <a href="#destacados" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Destacados
                  </a>
                </li>
                <li>
                  <a href="#ultimo-video" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Último Video
                  </a>
                </li>
                <li>
                  <a href="#sobre-mi" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#casita-rural" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Casita Rural
                  </a>
                </li>
                <li>
                  <a href="#gente-con-pasion" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Gente con Pasión
                  </a>
                </li>
                <li>
                  <a href="#viajes-en-moto" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Viajes en Moto
                  </a>
                </li>
                <li>
                  <a href="#bitacora-podcast" className="text-gray-600 hover:text-gray-800 transition-colors">
                    Bitácora Podcast
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-600 hover:text-gray-800 transition-colors">
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
        <section id="inicio" className="py-16 md:py-24 cream-bg">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center mb-8">
              {/* Replace with actual profile image or use a placeholder */}
              <img
                src="/facu.png"
                alt="Facundo Perez"
                width={150}
                height={150}
                className="rounded-full border-4 border-white mb-4"
              />
              <h2 className="text-3xl md:text-5xl font-bold text-gray-600 mb-2">Facundo Perez</h2>
              <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto">
                Viajero, constructor y contador de historias
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                  10K suscriptores
                </span>
                <span className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm font-medium">172 videos</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-8">
              ¡Hola! Soy Facu y recorro Argentina en moto 🏍️ compartiendo historias, construyendo mi casita rural y
              mostrando gente con pasión por lo que hace.
            </p>

            <SocialLinks />

            <div className="mt-8">
              <a
                href="https://www.youtube.com/@faqundoperez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                <Youtube className="h-5 w-5" />
                Suscribirse
              </a>
            </div>
          </div>
        </section>

        {/* Latest Video Section */}
        <section id="ultimo-video" className="py-16 md:py-24 cream-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 text-center mb-12">Último Video</h2>
            <div className="max-w-4xl mx-auto">
              <LatestVideo
                id={latestVideo.id}
                title={latestVideo.title}
                description={latestVideo.description}
                views={latestVideo.views}
                date={latestVideo.date}
                thumbnail={latestVideo.thumbnail}
              />
            </div>
          </div>
        </section>

        {/* Featured Videos Section */}
        <section id="destacados" className="py-16 md:py-24 cream-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 text-center mb-12">Videos Destacados</h2>

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
        <section id="sobre-mi" className="py-16 md:py-24 cream-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 text-center mb-12">Sobre Mí</h2>

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
        <section id="casita-rural" className="py-16 md:py-24 cream-bg">
          <div className="container mx-auto px-4">
            <VideoSection
              title="Haciendo Nuestra Casita Rural 🏡"
              description="En esta playlist te cuento cómo desarrollamos nuestro Proyecto de vivienda 🏡 en un pueblito rural y alejado de la ciudad 🏙️, de acuerdo a nuestras posibilidades económicas 🤑"
              videos={casitaRuralVideos}
            />
          </div>
        </section>

        {/* Gente con Pasión Videos Section */}
        <section id="gente-con-pasion" className="py-16 md:py-24 cream-bg">
          <div className="container mx-auto px-4">
            <VideoSection
              title="Gente con Pasión 🔥"
              description="Historias de quienes viven con pasión por su oficio y su trabajo. Desde mecánicos hasta revendedores de autos, pasando por artesanos, emprendedores y más. En esta serie recorremos Argentina conociendo personas inspiradoras."
              videos={genteConPasionVideos}
            />
          </div>
        </section>

        {/* Viajes en Moto Videos Section */}
        <section id="viajes-en-moto" className="py-16 md:py-24 cream-bg">
          <div className="container mx-auto px-4">
            <VideoSection
              title="Viajes en Moto por Argentina 🏍️"
              description="Recorriendo los paisajes más impresionantes de Argentina en motocicleta. Desde la Patagonia hasta el Norte, pasando por la cordillera de los Andes y la costa atlántica."
              videos={viajesEnMotoVideos}
            />
          </div>
        </section>

        {/* Bitácora Podcast Section */}
        <section id="bitacora-podcast" className="py-16 md:py-24 cream-bg">
          <img src="/bitacora.png" />
          <div className="container mx-auto px-4">
            <PodcastSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24 cream-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 text-center mb-12">Contáctame</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">Información de Contacto</h3>

                <div className="space-y-4 text-gray-500">
  
                 {/* aqui iba link de whatsapp*/}

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
                      className="text-gray-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg> 
                    <span>Email: </span>
                    <a href={`mailto:${emailAddress}`} className="text-gray-600 hover:underline">
                      {emailAddress}
                    </a>
                  </p>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-600 mb-6">Sígueme</h3>

                  <SocialLinks />
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">Envíame un Mensaje</h3>
                <ContactForm emailAddress={emailAddress} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Column 1: About */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {/* Replace with actual logo or use a placeholder */}
                  <img src="/logo.png" width={50} height={50} className="rounded-full" alt="Logo Facundo Perez" />
                  <h2 className="text-xl font-bold text-white">Facundo Perez</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  Viajero, constructor y contador de historias. Recorriendo Argentina en moto y compartiendo
                  experiencias únicas.
                </p>
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold">10K</span> suscriptores • <span className="font-semibold">172</span>{" "}
                  videos
                </p>
                <SocialLinks />
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#destacados" className="text-gray-300 hover:text-white transition-colors">
                      Videos Destacados
                    </a>
                  </li>
                  <li>
                    <a href="#sobre-mi" className="text-gray-300 hover:text-white transition-colors">
                      Sobre Mí
                    </a>
                  </li>
                  <li>
                    <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@faqundoperez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Canal de YouTube
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Categories */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Categorías</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#casita-rural" className="text-gray-300 hover:text-white transition-colors">
                      Casita Rural
                    </a>
                  </li>
                  <li>
                    <a href="#gente-con-pasion" className="text-gray-300 hover:text-white transition-colors">
                      Gente con Pasión
                    </a>
                  </li>
                  <li>
                    <a href="#viajes-en-moto" className="text-gray-300 hover:text-white transition-colors">
                      Viajes en Moto
                    </a>
                  </li>
                  <li>
                    <a href="#bitacora-podcast" className="text-gray-300 hover:text-white transition-colors">
                      Bitácora Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@faqundoperez/playlists"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Todas las Playlists
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Facundo Perez. Todos los derechos reservados.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Términos de Servicio
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* YouTube Floating Button */}
        <YouTubeButton channelUrl={youtubeChannelUrl} />
      </div>
    </main>
  )
}

