import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  HiCode, HiRefresh, HiLightningBolt, HiChartBar,
  HiServer, HiCog, HiDatabase, HiPuzzle
} from 'react-icons/hi'

const services = [
  {
    icon: HiCode,
    title: 'Desenvolvimento de APIs',
    desc: 'APIs REST robustas com FastAPI e Python — autenticação JWT, documentação automática, versionamento e escalabilidade para produção.',
    price: 'A combinar',
    color: 'blue',
    features: ['FastAPI + Pydantic', 'JWT / OAuth2', 'Swagger/OpenAPI', 'Testes automatizados'],
  },
  {
    icon: HiRefresh,
    title: 'Integração de APIs',
    desc: 'Conexão entre sistemas, plataformas e serviços externos. Padronização de dados, tratamento de erros e retry automático.',
    price: 'A combinar',
    color: 'cyan',
    features: ['APIs de terceiros', 'Webhooks', 'Transformação de dados', 'Monitoramento'],
  },
  {
    icon: HiLightningBolt,
    title: 'Automação Python',
    desc: 'Scripts e bots que eliminam tarefas repetitivas: coleta de dados, envio de relatórios, processamento de arquivos e muito mais.',
    price: 'A combinar',
    color: 'purple',
    features: ['Bots e scrapers', 'Agendamento (cron)', 'Relatórios automáticos', 'Alertas e notificações'],
  },
  {
    icon: HiChartBar,
    title: 'Dashboards Power BI',
    desc: 'Criação e integração de dashboards interativos com Power BI, conectados a bancos de dados e APIs para visualização em tempo real.',
    price: 'A combinar',
    color: 'green',
    features: ['Conexão com MySQL', 'KPIs e métricas', 'Relatórios periódicos', 'Filtros dinâmicos'],
  },
  {
    icon: HiServer,
    title: 'Sistemas Backend',
    desc: 'Desenvolvimento de sistemas completos: CRUD, regras de negócio, autenticação, controle de acesso e arquitetura limpa.',
    price: 'A combinar',
    color: 'orange',
    features: ['Arquitetura limpa', 'CRUD completo', 'Controle de acesso', 'Documentação'],
  },
  {
    icon: HiDatabase,
    title: 'Tratamento de Dados',
    desc: 'Pipelines ETL, limpeza e normalização de dados, migração entre bancos e geração de relatórios estruturados em Excel/CSV.',
    price: 'A combinar',
    color: 'yellow',
    features: ['ETL completo', 'Limpeza de dados', 'Migração de banco', 'Export Excel/CSV'],
  },
]

const colorMap = {
  blue: { bg: 'bg-blue-500/6', border: 'border-blue-500/15', icon: 'text-blue-400', iconBg: 'bg-blue-500/10', check: 'text-blue-400' },
  cyan: { bg: 'bg-cyan-500/6', border: 'border-cyan-500/15', icon: 'text-cyan-400', iconBg: 'bg-cyan-500/10', check: 'text-cyan-400' },
  purple: { bg: 'bg-purple-500/6', border: 'border-purple-500/15', icon: 'text-purple-400', iconBg: 'bg-purple-500/10', check: 'text-purple-400' },
  green: { bg: 'bg-green-500/6', border: 'border-green-500/15', icon: 'text-green-400', iconBg: 'bg-green-500/10', check: 'text-green-400' },
  orange: { bg: 'bg-orange-500/6', border: 'border-orange-500/15', icon: 'text-orange-400', iconBg: 'bg-orange-500/10', check: 'text-orange-400' },
  yellow: { bg: 'bg-yellow-500/6', border: 'border-yellow-500/15', icon: 'text-yellow-400', iconBg: 'bg-yellow-500/10', check: 'text-yellow-400' },
}

function ServiceCard({ service, delay }) {
  const [ref, inView] = useInView()
  const c = colorMap[service.color]
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`glass-card border ${c.border} rounded-2xl p-6 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 flex flex-col group cursor-default`}
    >
      <div className={`w-12 h-12 ${c.iconBg} border ${c.border} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className={`text-2xl ${c.icon}`} />
      </div>

      <h3 className="font-bold text-white text-lg mb-2">{service.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{service.desc}</p>

      <ul className="space-y-1.5 mb-5">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-white/50">
            <span className={`text-base ${c.check}`}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div className={`mt-auto pt-4 border-t border-white/5 flex items-center justify-between`}>
        <span className="text-white/30 text-xs font-mono">Orçamento</span>
        <span className={`font-mono text-sm font-semibold ${c.icon}`}>{service.price}</span>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="servicos" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-surface-800/50" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute left-1/2 top-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] -translate-x-1/2" />

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
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Serviços</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Como posso{' '}
            <span className="text-gradient">ajudar</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            Soluções backend sob medida para empresas e freelancers que precisam de tecnologia real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 0.08} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-4 text-lg">Tem um projeto em mente?</p>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  )
}
