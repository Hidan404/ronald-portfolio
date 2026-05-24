import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

import {
  HiCode,
  HiLightningBolt,
  HiServer,
  HiDatabase,
  HiCube
} from 'react-icons/hi'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const services = [
  {
    icon: HiCode,
    title: 'APIs REST',
    desc: 'FastAPI • JWT • MySQL',
    color: 'blue',
  },
  {
    icon: HiLightningBolt,
    title: 'Automações',
    desc: 'Bots • Scripts • ETL',
    color: 'cyan',
  },
  {
    icon: HiServer,
    title: 'Backend Systems',
    desc: 'CRUD • Auth • APIs',
    color: 'purple',
  },
  {
    icon: HiDatabase,
    title: 'Data & Reports',
    desc: 'Excel • SQL • Dashboards',
    color: 'green',
  },
  {
    icon: HiCube,
    title: 'Linux & DevOps',
    desc: 'Docker • Monitoramento',
    color: 'orange',
  },
]

const colorMap = {
  blue: {
    border: 'border-blue-500/20',
    icon: 'text-blue-400',
    glow: 'shadow-blue-500/10',
    bg: 'bg-blue-500/10',
  },

  cyan: {
    border: 'border-cyan-500/20',
    icon: 'text-cyan-400',
    glow: 'shadow-cyan-500/10',
    bg: 'bg-cyan-500/10',
  },

  purple: {
    border: 'border-purple-500/20',
    icon: 'text-purple-400',
    glow: 'shadow-purple-500/10',
    bg: 'bg-purple-500/10',
  },

  green: {
    border: 'border-green-500/20',
    icon: 'text-green-400',
    glow: 'shadow-green-500/10',
    bg: 'bg-green-500/10',
  },

  orange: {
    border: 'border-orange-500/20',
    icon: 'text-orange-400',
    glow: 'shadow-orange-500/10',
    bg: 'bg-orange-500/10',
  },
}

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section
      id="servicos"
      className="relative py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      <div className="absolute left-1/2 top-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-blue-500/30" />

            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
              Especialidades
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white">
            O que eu{' '}
            <span className="text-gradient">
              construo
            </span>
          </h2>

          <p className="text-slate-500 mt-3 max-w-lg">
            Backend moderno, automações e soluções
            focadas em performance e produtividade.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 1.2,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service) => {
            const c = colorMap[service.color]

            return (
              <SwiperSlide key={service.title}>
                <div
                  className={`
                    glass-card
                    border
                    ${c.border}
                    rounded-3xl
                    p-6
                    h-[220px]
                    flex
                    flex-col
                    justify-between
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    ${c.glow}
                  `}
                >
                  <div>

                    <div
                      className={`
                        w-14 h-14
                        rounded-2xl
                        flex items-center justify-center
                        ${c.bg}
                        mb-5
                      `}
                    >
                      <service.icon
                        className={`text-3xl ${c.icon}`}
                      />
                    </div>

                    <h3 className="text-white text-xl font-bold mb-2">
                      {service.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/30 font-mono">
                    <span className={`w-2 h-2 rounded-full ${c.bg}`} />
                    backend service
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}