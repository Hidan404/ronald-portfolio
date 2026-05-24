import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiOfficeBuilding, HiAcademicCap, HiBriefcase } from 'react-icons/hi'

const timeline = [
  {
  type: 'work',

  icon: HiOfficeBuilding,

  title: 'Operador de Sistemas',

  company: 'Mix Mateus Varejista',

  period: '10/2020 — 07/2024',

  color: 'blue',

  desc: 'Atuação no suporte e monitoramento de sistemas operacionais da empresa, prestando suporte técnico, acompanhamento de processos internos e resolução de incidentes operacionais.',

  achievements: [
    'Suporte técnico operacional',
    'Monitoramento de sistemas internos',
    'Atendimento e resolução de incidentes',
    'Apoio em processos e infraestrutura'
  ],
},
  {
    type: 'study',
    icon: HiAcademicCap,
    title: 'Desenvolvimento Backend com Python',
    company: 'Estudo Autodidata + Projetos Pessoais',
    period: '2023 — Presente',
    color: 'purple',
    desc: 'Aprendizado intensivo e prático em Python, FastAPI, MySQL, Power BI e integração de APIs. Construção de projetos reais para consolidar os conhecimentos.',
    achievements: [
      'FastAPI e APIs REST com autenticação JWT',
      'MySQL, queries SQL avançadas e modelagem de dados',
      'Python para automações e scripts de produção',
      'Power BI para dashboards e análise de dados',
    ],
  },
  {
    type: 'freelance',
    icon: HiBriefcase,
    title: 'Freelancer — Automações e Backend',
    company: 'Projetos Independentes',
    period: '2026 — Presente',
    color: 'cyan',
    desc: 'Desenvolvimento de soluções backend, automações Python e integrações de API para clientes e projetos pessoais. Foco em entrega de qualidade e soluções que realmente funcionam em produção.',
    achievements: [
      'APIs REST para sistemas de gestão',
      'Scripts de automação e ETL de dados',
      'Integrações com APIs de terceiros',
      'Relatórios automáticos em Excel/PDF',
    ],
  },
]

const colorMap = {
  blue: { border: 'border-blue-500/20', bg: 'bg-blue-500/8', icon: 'text-blue-400', dot: 'bg-blue-500', line: 'from-blue-500/40' },
  purple: { border: 'border-purple-500/20', bg: 'bg-purple-500/8', icon: 'text-purple-400', dot: 'bg-purple-500', line: 'from-purple-500/40' },
  cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/8', icon: 'text-cyan-400', dot: 'bg-cyan-500', line: 'from-cyan-500/40' },
}

function TimelineItem({ item, delay, isLast }) {
  const [ref, inView] = useInView()
  const c = colorMap[item.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="relative flex gap-6"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0 z-10`}>
          <item.icon className={`text-lg ${c.icon}`} />
        </div>
        {!isLast && (
          <div className={`w-px flex-1 mt-2 bg-gradient-to-b ${c.line} to-transparent`} style={{ minHeight: '40px' }} />
        )}
      </div>

      {/* Content */}
      <div className={`glass-card border ${c.border} rounded-2xl p-5 flex-1 mb-8`}>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-white text-lg">{item.title}</h3>
            <div className="text-white/40 text-sm mt-0.5">{item.company}</div>
          </div>
          <span className={`font-mono text-xs ${c.icon} glass-card border ${c.border} px-3 py-1 rounded-full whitespace-nowrap`}>
            {item.period}
          </span>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>

        <ul className="space-y-1.5">
          {item.achievements.map(a => (
            <li key={a} className="flex items-start gap-2 text-sm text-white/50">
              <span className={`text-base ${c.icon} flex-shrink-0 mt-0.5`}>›</span>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experiencia" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/30" />
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Experiência</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Minha{' '}
            <span className="text-gradient">trajetória</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            Da operação de sistemas ao desenvolvimento backend — uma visão técnica construída na prática.
          </p>
        </motion.div>

        <div>
          {timeline.map((item, i) => (
            <TimelineItem
              key={item.title}
              item={item}
              delay={i * 0.15}
              isLast={i === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
