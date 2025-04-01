import { Facebook, Instagram, Youtube } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4">
      <a
        href="https://www.instagram.com/faqu_perez"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-800 hover:bg-red-700 transition-colors p-3 rounded-full"
        aria-label="Instagram"
      >
        <Instagram className="text-amber-400 h-6 w-6" />
      </a>

      <a
        href="https://www.youtube.com/@faqundoperez"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-800 hover:bg-red-700 transition-colors p-3 rounded-full"
        aria-label="YouTube"
      >
        <Youtube className="text-amber-400 h-6 w-6" />
      </a>

      <a
        href="https://www.facebook.com/facundoperez"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-800 hover:bg-red-700 transition-colors p-3 rounded-full"
        aria-label="Facebook"
      >
        <Facebook className="text-amber-400 h-6 w-6" />
      </a>
    </div>
  )
}

