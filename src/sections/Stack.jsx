import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  SiPython, SiFastapi, SiSpringboot, SiMysql,
  SiGit, SiGithub, SiLinux, SiDocker, SiPostgresql,
  SiRedis, SiSwagger, SiSpring,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { HiChartBar, HiCube, HiCode, HiDatabase } from 'react-icons/hi'

const categories = [
  {
    label: 'Backend',
    icon: HiCode,
    color: 'blue',
    items: [
      { icon: SiPython, name: 'Python', level: 'Principal' },
      { icon: SiFastapi, name: 'FastAPI', level: 'Principal' },
      { icon: FaJava, name: 'Java', level: 'Intermediário' },
      { icon: SiSpringboot, name: 'Spring Boot', level: 'Aprendendo' },
      { icon: SiSwagger, name: 'REST APIs', level: 'Principal' },
    ],
  },
  {
    label: 'Banco de Dados',
    icon: HiDatabase,
    color: 'cyan',
    items: [
      { icon: SiMysql, name: 'MySQL', level: 'Principal' },
      { icon: SiPostgresql, name: 'PostgreSQL', level: 'Intermediário' },
      { icon: SiRedis, name: 'Redis', level: 'Aprendendo' },
    ],
  },
  {
    label: 'DevOps & Ferramentas',
    icon: HiCube,
    color: 'purple',
    items: [
      { icon: SiGit, name: 'Git', level: 'Principal' },
      { icon: SiGithub, name: 'GitHub', level: 'Principal' },
      { icon: SiLinux, name: 'Linux', level: 'Intermediário' },
      { icon: SiDocker, name: 'Docker', level: 'Aprendendo' },
    ],
  },
  {
    label: 'Dados & Analytics',
    icon: HiChartBar,
    color: 'green',
    items: [
      { icon: HiChartBar, name: 'Power BI', level: 'Principal' },
      { icon: HiChartBar, name: 'Dashboards', level: 'Principal' },
      { icon: HiChartBar, name: 'ETL / Pipelines', level: 'Intermediário' },
      { icon: HiChartBar, name: 'APIs de Dados', level: 'Principal' },
    ],
  },
]

const colorMap = {
  blue: { bg: 'bg-blue-500/8', border: 'border-blue-500/15', text: 'text-blue-400', dot: 'bg-blue-400', header: 'bg-blue-500/5' },
  cyan: { bg: 'bg-cyan-500/8', border: 'border-cyan-500/15', text: 'text-cyan-400', dot: 'bg-cyan-400', header: 'bg-cyan-500/5' },
  purple: { bg: 'bg-purple-500/8', border: 'border-purple-500/15', text: 'text-purple-400', dot: 'bg-purple-400', header: 'bg-purple-500/5' },
  green: { bg: 'bg-green-500/8', border: 'border-green-500/15', text: 'text-green-400', dot: 'bg-green-400', header: 'bg-green-500/5' },
}

const levelColor = {
  'Principal': 'text-green-400',
  'Intermediário': 'text-blue-400',
  'Aprendendo': 'text-yellow-400/70',
}

function TechItem({ icon: Icon, name, level, color }) {
  const c = colorMap[color]
  return (
    <div className={`flex items-center justify-between py-2.5 px-3 rounded-lg ${c.bg} border ${c.border} hover:scale-[1.02] transition-all duration-200 cursor-default`}>
      <div className="flex items-center gap-2.5">
        <Icon className={`text-xl ${c.text}`} />
        <span className="text-white/80 text-sm font-medium">{name}</span>
      </div>
      <span className={`text-[10px] font-mono font-semibold ${levelColor[level]}`}>{level}</span>
    </div>
  )
}

export default function Stack() {
  const [ref, inView] = useInView()

  return (
    <section id="stack" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px]" />

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
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Stack técnica</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Ferramentas e{' '}
            <span className="text-gradient">tecnologias</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            Stack focada em backend robusto, automações eficientes e análise de dados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => {
            const c = colorMap[cat.color]
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: ci * 0.1 }}
                className="glass-card border border-white/5 rounded-2xl overflow-hidden"
              >
                {/* Card header */}
                <div className={`flex items-center gap-3 px-5 py-4 ${c.header} border-b border-white/5`}>
                  <div className={`w-8 h-8 ${c.bg} border ${c.border} rounded-lg flex items-center justify-center`}>
                    <cat.icon className={`text-base ${c.text}`} />
                  </div>
                  <span className="font-semibold text-white/90">{cat.label}</span>
                  <div className={`ml-auto w-2 h-2 rounded-full ${c.dot} animate-pulse`} />
                </div>

                {/* Items */}
                <div className="p-4 space-y-2">
                  {cat.items.map((item, ii) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: ci * 0.1 + ii * 0.06 + 0.2 }}
                    >
                      <TechItem {...item} color={cat.color} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
