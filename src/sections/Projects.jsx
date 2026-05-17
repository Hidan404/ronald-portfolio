import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiExternalLink, HiCode, HiTag } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'

const projects = [
  {
    id: 1,
    title: 'FastAPI Auth Service',
    desc: 'Microserviço de autenticação com JWT, refresh tokens, roles e middleware de permissões. Pronto para integrar em qualquer sistema empresarial.',
    tags: ['Python', 'FastAPI', 'JWT', 'MySQL', 'Docker'],
    category: 'API REST',
    color: 'blue',
    status: 'Concluído',
    highlights: ['Autenticação JWT', 'Refresh tokens', 'Rate limiting', 'Swagger UI'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Data Pipeline ETL',
    desc: 'Pipeline de extração, transformação e carga de dados de múltiplas fontes (APIs externas + CSV) para MySQL, com agendamento automático via cron.',
    tags: ['Python', 'Pandas', 'MySQL', 'Requests', 'Cron'],
    category: 'Automação',
    color: 'cyan',
    status: 'Concluído',
    highlights: ['ETL automatizado', 'Multi-source', 'Logging', 'Retry logic'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Dashboard Analytics API',
    desc: 'API backend para geração de relatórios e dashboards em tempo real. Integração com Power BI via REST endpoints JSON com filtros avançados.',
    tags: ['Python', 'FastAPI', 'MySQL', 'Power BI', 'Charts'],
    category: 'Analytics',
    color: 'purple',
    status: 'Concluído',
    highlights: ['Power BI integration', 'Cache Redis', 'Filtros dinâmicos', 'Export PDF'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Sistema de Monitoramento',
    desc: 'Bot Python que monitora endpoints e serviços 24/7, envia alertas via webhook (Telegram/Slack) e gera relatórios de uptime automáticos.',
    tags: ['Python', 'aiohttp', 'Asyncio', 'Telegram Bot', 'SQLite'],
    category: 'DevOps',
    color: 'green',
    status: 'Ativo',
    highlights: ['99.9% uptime track', 'Alertas em tempo real', 'Dashboard web', 'Histórico'],
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'API Gateway Integrador',
    desc: 'Gateway que padroniza e integra múltiplas APIs de terceiros (pagamento, CEP, NF-e) em uma interface unificada com cache e retry automático.',
    tags: ['Python', 'FastAPI', 'Redis', 'httpx', 'Pydantic'],
    category: 'Integração',
    color: 'orange',
    status: 'Concluído',
    highlights: ['Multi-API', 'Redis cache', 'Retry exponencial', 'Documentação auto'],
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    title: 'Automação de Relatórios',
    desc: 'Script Python que coleta dados de sistemas legados (SQL), gera relatórios Excel formatados e os envia automaticamente por e-mail via agendamento.',
    tags: ['Python', 'openpyxl', 'MySQL', 'smtplib', 'Schedule'],
    category: 'Automação',
    color: 'yellow',
    status: 'Em Produção',
    highlights: ['Excel formatado', 'E-mail automático', 'Múltiplos destinatários', 'Log de envios'],
    github: '#',
    demo: '#',
  },
]

const colorMap = {
  blue: { bg: 'bg-blue-500/8', border: 'border-blue-500/20', tag: 'bg-blue-500/10 text-blue-400 border-blue-500/20', accent: 'bg-blue-500', glow: 'shadow-blue-500/10', dot: 'bg-blue-400' },
  cyan: { bg: 'bg-cyan-500/8', border: 'border-cyan-500/20', tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', accent: 'bg-cyan-500', glow: 'shadow-cyan-500/10', dot: 'bg-cyan-400' },
  purple: { bg: 'bg-purple-500/8', border: 'border-purple-500/20', tag: 'bg-purple-500/10 text-purple-400 border-purple-500/20', accent: 'bg-purple-500', glow: 'shadow-purple-500/10', dot: 'bg-purple-400' },
  green: { bg: 'bg-green-500/8', border: 'border-green-500/20', tag: 'bg-green-500/10 text-green-400 border-green-500/20', accent: 'bg-green-500', glow: 'shadow-green-500/10', dot: 'bg-green-400' },
  orange: { bg: 'bg-orange-500/8', border: 'border-orange-500/20', tag: 'bg-orange-500/10 text-orange-400 border-orange-500/20', accent: 'bg-orange-500', glow: 'shadow-orange-500/10', dot: 'bg-orange-400' },
  yellow: { bg: 'bg-yellow-500/8', border: 'border-yellow-500/20', tag: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', accent: 'bg-yellow-400', glow: 'shadow-yellow-500/10', dot: 'bg-yellow-400' },
}

const statusColor = {
  'Concluído': 'text-green-400',
  'Ativo': 'text-blue-400',
  'Em Produção': 'text-purple-400',
}

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView()
  const c = colorMap[project.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`glass-card border ${c.border} rounded-2xl overflow-hidden group hover:shadow-2xl ${c.glow} hover:-translate-y-1 transition-all duration-400 flex flex-col`}
    >
      {/* Top accent bar */}
      <div className={`h-0.5 w-full ${c.accent} opacity-60`} />

      {/* Fake thumbnail */}
      <div className={`relative h-36 ${c.bg} flex items-center justify-center border-b border-white/5 overflow-hidden`}>
        {/* Abstract grid visual */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="relative font-mono text-xs text-left w-4/5">
          <div className="text-white/20 mb-1"># {project.category}</div>
          <div className="text-green-400/70">{'@router.get("/api/v1/{...}")'}</div>
          <div className="text-white/40">async def handler(</div>
          <div className="text-blue-400/60 pl-4">db: Session = Depends(...)</div>
          <div className="text-white/40">):</div>
          <div className="text-purple-400/60 pl-4">return await service.run()</div>
        </div>
        {/* Status badge */}
        <div className={`absolute top-3 right-3 flex items-center gap-1.5 glass border border-white/10 rounded-full px-2.5 py-1 text-[10px] font-mono ${statusColor[project.status]}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} ${project.status === 'Em Produção' ? 'animate-pulse' : ''}`} />
          {project.status}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-white text-lg leading-tight">{project.title}</h3>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.highlights.map(h => (
            <span key={h} className="text-[10px] text-white/40 bg-white/3 border border-white/5 rounded px-2 py-0.5 font-mono">
              ✓ {h}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className={`text-[11px] border rounded-md px-2 py-0.5 font-mono ${c.tag}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <a href={project.github} className="flex items-center gap-1.5 px-4 py-2 glass-card border border-white/8 rounded-lg text-white/60 hover:text-white text-sm font-medium transition-all duration-300 hover:border-white/15 flex-1 justify-center">
            <SiGithub className="text-base" />
            GitHub
          </a>
          <a href={project.demo} className={`flex items-center gap-1.5 px-4 py-2 ${c.bg} border ${c.border} rounded-lg text-sm font-medium transition-all duration-300 hover:brightness-110 flex-1 justify-center`} style={{ color: 'rgb(255 255 255 / 0.8)' }}>
            <HiExternalLink className="text-base" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projetos" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[130px]" />

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
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Projetos</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            O que eu{' '}
            <span className="text-gradient">construo</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            Projetos backend focados em performance, escalabilidade e automação real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
