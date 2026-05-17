import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = [
    'Inicializando ambiente...',
    'Carregando stack...',
    'Compilando projetos...',
    'Pronto.',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onDone, 400)
          return 100
        }
        return prev + 2
      })
    }, 25)

    const phaseTimer = setInterval(() => {
      setPhase((p) => Math.min(p + 1, phases.length - 1))
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(phaseTimer)
    }
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-surface-900 flex flex-col items-center justify-center"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-16 h-16 rounded-2xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center glow-blue">
            <span className="font-mono text-blue-400 text-2xl font-bold">&gt;_</span>
          </div>
          <div className="font-mono text-white/60 text-sm tracking-widest uppercase">
            ronald.dev
          </div>
        </motion.div>

        {/* Terminal line */}
        <div className="w-72 font-mono text-xs text-blue-400/70 h-5">
          <motion.span
            key={phase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            $ {phases[phase]}
            <span className="cursor-blink ml-0.5 text-blue-400">▋</span>
          </motion.span>
        </div>

        {/* Progress bar */}
        <div className="w-72 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        <div className="font-mono text-white/20 text-xs">
          {progress}%
        </div>
      </div>
    </motion.div>
  )
}
