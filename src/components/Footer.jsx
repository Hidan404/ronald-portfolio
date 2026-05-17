import { SiGithub, SiWhatsapp } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-white/30">
            &gt;_ <span className="text-blue-400/60">ronald.dev</span>
          </span>
          <span className="text-white/20 text-sm">· Backend Developer · Python & FastAPI</span>
        </div>
        <div className="flex items-center gap-1">
          {[
            { icon: SiGithub, href: 'https://github.com/Hidan404' },
            { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/ronaldousadev' },
            { icon: SiWhatsapp, href: 'https://wa.me/5594991444502' },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/30 hover:text-white/70 transition-colors"
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>
        <div className="text-white/20 text-xs font-mono">
          © {new Date().getFullYear()} · Feito com React ⚛️ + Vite ⚡
        </div>
      </div>
    </footer>
  )
}
