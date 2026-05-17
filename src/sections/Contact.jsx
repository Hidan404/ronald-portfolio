import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiMail, HiPhone, HiExternalLink, HiCheckCircle } from 'react-icons/hi'
import { SiGithub, SiWhatsapp } from 'react-icons/si'
import { FaLinkedinIn as SiLinkedin } from 'react-icons/fa'

const socials = [
  {
    icon: SiGithub,
    label: 'GitHub',
    handle: '@ronalddev',
    href: 'https://github.com',
    color: 'text-white/70',
    bg: 'bg-white/5',
    border: 'border-white/10',
    hover: 'hover:border-white/20 hover:text-white',
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    handle: 'ronald-backend',
    href: 'https://linkedin.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/20',
    hover: 'hover:border-blue-400/40',
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    handle: '+55 (xx) 9xxxx-xxxx',
    href: 'https://wa.me/55xx',
    color: 'text-green-400',
    bg: 'bg-green-500/8',
    border: 'border-green-500/20',
    hover: 'hover:border-green-400/40',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1500)
  }

  return (
    <section id="contato" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-surface-800/40" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/6 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/30" />
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Contato</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Vamos{' '}
            <span className="text-gradient">trabalhar juntos</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            Tem um projeto, ideia ou quer conversar sobre tecnologia? Me manda uma mensagem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Email card */}
            <div className="glass-card border border-white/6 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <HiMail className="text-2xl text-blue-400" />
              </div>
              <div>
                <div className="text-white/40 text-xs font-mono mb-0.5">Email</div>
                <a href="mailto:contato@ronald.dev" className="text-white/80 hover:text-blue-400 transition-colors font-medium">
                  contato@ronald.dev
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className={`flex items-center gap-4 glass-card border ${s.border} ${s.bg} rounded-2xl p-4 group ${s.hover} transition-all duration-300`}
                >
                  <s.icon className={`text-2xl ${s.color}`} />
                  <div className="flex-1">
                    <div className="text-white/90 font-medium text-sm">{s.label}</div>
                    <div className="text-white/30 text-xs font-mono">{s.handle}</div>
                  </div>
                  <HiExternalLink className="text-white/20 group-hover:text-white/50 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <div className="glass-card border border-green-500/15 bg-green-500/5 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Disponível agora</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Aberto para projetos freelancer, oportunidades CLT/PJ e colaborações remotas em backend Python.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card border border-white/6 rounded-2xl p-6"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <HiCheckCircle className="text-5xl text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Mensagem enviada!</h3>
                <p className="text-slate-500">Obrigado pelo contato. Retorno em até 24h.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 text-blue-400 text-sm hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'name', label: 'Nome', placeholder: 'Seu nome' },
                    { name: 'email', label: 'Email', placeholder: 'seu@email.com', type: 'email' },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-white/50 text-xs font-mono mb-1.5 uppercase tracking-wide">{field.label}</label>
                      <input
                        required
                        type={field.type || 'text'}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={form[field.name]}
                        onChange={handleChange}
                        className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white/80 placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/5 transition-all duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-mono mb-1.5 uppercase tracking-wide">Assunto</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    placeholder="API REST, automação Python, dashboard..."
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white/80 placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/5 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-mono mb-1.5 uppercase tracking-wide">Mensagem</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Descreva seu projeto ou necessidade..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white/80 placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/5 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-blue-500 hover:bg-blue-400 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
