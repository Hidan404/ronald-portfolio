import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiCode, HiDatabase, HiChip, HiLightningBolt } from 'react-icons/hi'

const traits = [
  {
    icon: HiCode,
    title: 'Backend First',
    desc: 'Foco em construir lógica de negócio sólida, APIs seguras e sistemas de alta performance.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/15',
  },
  {
    icon: HiDatabase,
    title: 'Orientado a Dados',
    desc: 'MySQL, ETL e Power BI para transformar dados brutos em dashboards e insights acionáveis.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/8',
    border: 'border-cyan-500/15',
  },
  {
    icon: HiLightningBolt,
    title: 'Automação Python',
    desc: 'Scripts e bots que eliminam trabalho manual: relatórios, integrações, monitoramento.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/8',
    border: 'border-purple-500/15',
  },
  {
    icon: HiChip,
    title: 'Sistemas Operacionais',
    desc: 'Experiência real com monitoramento, estabilidade e suporte técnico em ambientes críticos.',
    color: 'text-green-400',
    bg: 'bg-green-500/8',
    border: 'border-green-500/15',
  },
]

const skills = [
  { label: 'Python / FastAPI' },
  { label: 'APIs REST & JWT' },
  { label: 'MySQL / SQL' },
  { label: 'Power BI / Dashboards' },
  { label: 'Git / GitHub' },
  { label: 'Linux / Bash' },
]

function SkillBar({ label, delay }) {
  const [ref, inView] = useInView()

  return (
    <div ref={ref}>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

        <span className="text-white/70 font-medium">
          {label}
        </span>
      </div>

      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: '100%' } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="sobre" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/30" />
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Sobre mim</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Quem está por{' '}
            <span className="text-gradient">trás do código</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-slate-400 text-lg leading-relaxed">
                Sou um desenvolvedor backend apaixonado por <span className="text-white font-medium">Python</span> e pela construção de sistemas que realmente resolvem problemas. Minha trajetória começou em operação e suporte de sistemas — o que me deu uma visão única de{' '}
                <span className="text-white font-medium">estabilidade, confiabilidade e infraestrutura</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-slate-400 text-lg leading-relaxed">
                Hoje, combino esse background com desenvolvimento ativo em <span className="text-white font-medium">FastAPI, APIs REST, automações Python</span> e integração de sistemas. Acredito que bom software é invisível: funciona, escala e não quebra às 3 da manhã.
              </p>
            </motion.div>

            {/* Skill bars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-4 mt-8"
            >
              {skills.map((s, i) => (
                <SkillBar key={s.label} label={s.label} pct={s.pct} delay={0.4 + i * 0.08} />
              ))}
            </motion.div>
          </div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className={`glass-card border ${t.border} rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 cursor-default group`}
              >
                <div className={`w-10 h-10 ${t.bg} border ${t.border} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <t.icon className={`text-xl ${t.color}`} />
                </div>
                <h3 className="font-semibold text-white mb-2">{t.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
