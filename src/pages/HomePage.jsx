import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '../t.js'
import { publishedSAs, upcomingSAs } from '../data/sas.js'
import BiomeImage from '../components/BiomeImage.jsx'

const cardMotion = (i) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, delay: i * 0.06 }
})

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="py-12 md:py-16">
        <p className="kicker mb-3">{t('home.kicker')}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{t('home.title')}</h1>
        <p className="text-lg text-[var(--muted)] max-w-2xl">{t('home.intro')}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {publishedSAs.map((sa, i) => (
          <motion.div key={sa.id} {...cardMotion(i)}>
            <Link
              to={`/sa/${sa.id}`}
              className={`tap biome-${sa.biome} card group block overflow-hidden hover:border-[var(--biome-accent)]`}
            >
              <div className="relative h-48 overflow-hidden">
                <BiomeImage
                  src={sa.portadaImage}
                  title={sa.title}
                  biome={sa.biome}
                  className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <span
                  className="absolute top-3 start-3 section-bar"
                  style={{ background: 'var(--biome)' }}
                >
                  {sa.id.toUpperCase()}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-3xl mb-1">{sa.title}</h2>
                <p className="italic text-[var(--muted)] mb-4">{sa.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted)]">
                    {/* El recompte surt de les sessions que realment es poden obrir, no de
                        les planificades: la SA5 en té 4 al disseny i només 1 feta. */}
                    {t('home.sessionsCount', { count: sa.sessionsData?.length ?? sa.sessions })}
                  </span>
                  <span
                    className="font-display font-semibold uppercase tracking-wider text-sm"
                    style={{ color: 'var(--biome-accent)' }}
                  >
                    {t('home.open')} →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {upcomingSAs.map((sa, i) => {
          const i18n = { count: sa.sessions }

          // Casella destacada del projecte STEM: ocupa les dues columnes i porta
          // etiqueta pròpia. No és un enllaç mentre no hi hagi cap sessió feta.
          if (sa.stem) {
            return (
              <motion.div
                key={sa.id}
                className="md:col-span-2"
                {...cardMotion(publishedSAs.length + i)}
              >
                <div
                  className={`biome-${sa.biome} card overflow-hidden border-2`}
                  style={{ borderColor: 'var(--biome-accent)' }}
                  aria-label={`${sa.title} — ${t('home.stemProject')} — ${t('home.comingSoon')}`}
                >
                  <div
                    className="flex flex-wrap items-center gap-3 px-6 py-3"
                    style={{ background: 'var(--biome)' }}
                  >
                    <span className="font-display font-bold uppercase tracking-[0.18em] text-sm text-white">
                      ⚙︎ {t('home.stemProject')}
                    </span>
                    <span className="text-sm text-white/80">
                      {sa.partners?.join(` ${t('home.stemWith')} `)}
                    </span>
                    <span className="ms-auto rounded-full border border-white/50 px-3 py-0.5 text-xs uppercase tracking-wider text-white/90">
                      {t('home.comingSoon')}
                    </span>
                  </div>

                  <div className="p-6 md:flex md:gap-8">
                    <div className="md:flex-1">
                      <h2 className="text-4xl mb-1">{sa.title}</h2>
                      <p className="italic text-[var(--muted)] mb-4">{sa.subtitle}</p>
                      <p className="text-[var(--muted)] max-w-2xl">{sa.description}</p>
                    </div>
                    <div className="mt-6 md:mt-0 md:w-64 shrink-0">
                      <p className="kicker mb-2">{t('sa.product')}</p>
                      <p className="text-sm text-[var(--muted)]">{sa.product}</p>
                      <p className="mt-4 text-sm font-display uppercase tracking-wider text-[var(--muted)]">
                        {t('home.sessionsCount', i18n)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          }

          return (
            <motion.div key={sa.id} {...cardMotion(publishedSAs.length + i)}>
              <div
                className={`biome-${sa.biome} card h-full p-6 opacity-70`}
                aria-label={`${sa.title} — ${t('home.comingSoon')}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="section-bar" style={{ background: 'var(--biome)' }}>
                    {sa.id.toUpperCase()}
                  </span>
                  <span className="rounded-full border border-[var(--rule-strong)] px-3 py-0.5 text-xs uppercase tracking-wider text-[var(--muted)]">
                    {t('home.comingSoon')}
                  </span>
                </div>
                <h2 className="text-2xl mb-1">{sa.title}</h2>
                <p className="italic text-[var(--muted)]">{sa.subtitle}</p>
              </div>
            </motion.div>
          )
        })}
      </section>
    </div>
  )
}
