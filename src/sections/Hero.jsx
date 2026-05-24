import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { SiPython, SiFastapi, SiMysql, SiGit } from 'react-icons/si'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const typewords = ['Backend Developer', 'Python Engineer', 'API Architect', 'Automation Expert']

function ProfileWidget() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow background */}
      <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-90" />

      {/* Card */}
      <div className="relative glass-card border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
        
        {/* Top gradient */}
        <div className="h-24 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30" />

        {/* Photo */}
        <div className="relative flex justify-center -mt-14">
          <div className="relative group">
            
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl scale-110 group-hover:scale-125 transition-all duration-500" />

            <img
              src="/images/ronald.jpg"
              alt="Ronald Sousa"
              className="
                relative
                w-40 h-40
                md:w-52 md:h-52
                rounded-full
                object-cover
                border-4
                border-[#0f172a]
                shadow-2xl
                group-hover:scale-105
                transition-all
                duration-500
              "
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 pt-4 text-center">
          
          <h3 className="text-white text-xl font-bold">
            Ronald Sousa
          </h3>

          <p className="text-cyan-400 text-sm font-mono mt-1">
            Backend Developer • Python • FastAPI
          </p>

          <p className="text-slate-400 text-sm leading-relaxed mt-4">
            Desenvolvedor focado em APIs REST, automação,
            Linux e sistemas backend modernos com Python.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {[
              'FastAPI',
              'Python',
              'Docker',
              'Linux',
              'MySQL'
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-3 py-1
                  rounded-full
                  text-xs
                  font-mono
                  bg-cyan-500/10
                  text-cyan-300
                  border border-cyan-500/20
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % typewords.length), 3000)
    return () => clearInterval(t)
  }, [])

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-purple-600/8 rounded-full blur-[100px] animate-float-delayed" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 glass-card border border-blue-500/20 rounded-full px-4 py-2 text-xs font-mono text-blue-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Disponível para projetos
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2">
              Ronald
            </motion.h1>

            {/* Animated title */}
            <motion.div {...fadeUp(0.3)} className="mb-6 h-14 flex items-center">
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-2xl lg:text-3xl font-semibold text-gradient"
              >
                {typewords[wordIdx]}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p {...fadeUp(0.4)} className="text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
              Especializado em construir <span className="text-white/80 font-medium">APIs escaláveis</span>, 
              {' '}<span className="text-white/80 font-medium">automações Python</span> e 
              {' '}<span className="text-white/80 font-medium">integrações de sistemas</span> para 
              empresas que precisam de soluções robustas e eficientes.
            </motion.p>

            {/* Tech badges */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-2 mb-10">
              {[
                { icon: SiPython, label: 'Python', color: 'text-yellow-400' },
                { icon: SiFastapi, label: 'FastAPI', color: 'text-green-400' },
                { icon: SiMysql, label: 'MySQL', color: 'text-blue-400' },
                { icon: SiGit, label: 'Git', color: 'text-orange-400' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-1.5 glass-card border border-white/5 rounded-lg px-3 py-1.5 text-sm text-white/60 hover:border-white/10 transition-all duration-300">
                  <Icon className={`text-base ${color}`} />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('#projetos')}
                className="group flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Ver Projetos
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollTo('#contato')}
                className="flex items-center gap-2 px-6 py-3 glass-card border border-white/10 text-white/80 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:border-white/20 hover:-translate-y-0.5"
              >
                Entrar em Contato
              </button>
            </motion.div>
          </div>

          {/* Right: Terminal widget */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 lg:items-end animate-float"
          >
            <ProfileWidget />

            {/* Mini API diagram */}
            
          </motion.div>
        </div>

        
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
