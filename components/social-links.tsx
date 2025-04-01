import { Instagram, Youtube, Video } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4">
      <a
        href="https://www.instagram.com/faqu_perez"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white hover:bg-gray-100 transition-colors p-3 rounded-full shadow-sm"
        aria-label="Instagram"
      >
        <Instagram className="text-gray-600 h-6 w-6" />
      </a>

      <a
        href="https://www.youtube.com/@faqundoperez"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white hover:bg-gray-100 transition-colors p-3 rounded-full shadow-sm"
        aria-label="YouTube"
      >
        <Youtube className="text-gray-600 h-6 w-6" />
      </a>

      <a
        href="https://www.facebook.com/faqkpo.perez"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white hover:bg-gray-100 transition-colors p-3 rounded-full shadow-sm"
        aria-label="Facebook"
      >
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
          className="text-gray-600 h-6 w-6"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </a>

      <a
        href="https://www.tiktok.com/@faquperez"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white hover:bg-gray-100 transition-colors p-3 rounded-full shadow-sm"
        aria-label="TikTok"
      >
        <Video className="text-gray-600 h-6 w-6" />
      </a>
    </div>
  )
}

