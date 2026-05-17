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

function TerminalWidget() {
  const lines = [
    { text: '$ python main.py --start', color: 'text-blue-400', delay: 0 },
    { text: '→ FastAPI server running on :8000', color: 'text-green-400', delay: 0.4 },
    { text: '→ Connected to MySQL database', color: 'text-green-400', delay: 0.8 },
    { text: '→ 847 endpoints registered', color: 'text-cyan-400', delay: 1.2 },
    { text: '→ JWT auth middleware loaded', color: 'text-purple-400', delay: 1.6 },
    { text: '→ All systems operational ✓', color: 'text-emerald-400', delay: 2.0 },
  ]

  return (
    <div className="glass-card rounded-xl p-5 font-mono text-xs w-full max-w-sm border border-white/5">
      {/* Window bar */}
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-white/20 text-[10px] tracking-wide">terminal — python</span>
      </div>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: line.delay + 0.8, duration: 0.4 }}
          className={`${line.color} mb-1.5 leading-relaxed`}
        >
          {line.text}
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="text-blue-400 mt-2"
      >
        $ <span className="cursor-blink">▋</span>
      </motion.div>
    </div>
  )
}

/*function StatsRow() {
  const stats = [
    { value: '12+', label: 'APIs desenvolvidas' },
    { value: '30+', label: 'Automações criadas' },
    { value: '99.8%', label: 'Uptime médio' },
    { value: '8+', label: 'Integrações ativas' },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          {...fadeUp(0.9 + i * 0.1)}
          className="glass-card rounded-xl p-4 border border-white/5 text-center group hover:border-blue-500/20 transition-all duration-300"
        >
          <div className="text-2xl font-bold text-gradient-blue font-mono">{s.value}</div>
          <div className="text-white/40 text-xs mt-1">{s.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
*/
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
            <TerminalWidget />

            {/* Mini API diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="glass-card border border-white/5 rounded-xl p-4 w-full max-w-sm"
            >
              <div className="text-[10px] font-mono text-white/30 mb-3 uppercase tracking-widest">API Request Flow</div>
              <div className="flex items-center justify-between text-xs font-mono">
                {['Client', '→', 'FastAPI', '→', 'MySQL', '→', 'Response'].map((item, i) => (
                  <span key={i} className={
                    item === '→' ? 'text-blue-500/50' :
                    i === 0 ? 'text-white/50' :
                    i === 2 ? 'text-green-400/80' :
                    i === 4 ? 'text-blue-400/80' :
                    i === 6 ? 'text-emerald-400/80' : 'text-white/50'
                  }>{item}</span>
                ))}
              </div>
              <div className="mt-3 h-0.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.5, duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <div className="mt-2 text-[10px] font-mono text-green-400/60">200 OK · 47ms avg latency</div>
            </motion.div>
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
