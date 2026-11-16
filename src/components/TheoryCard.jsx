import { motion } from 'framer-motion'
import T from '../translate/T.jsx'
import { asset } from '../utils.js'
import CorPressions from './viz/CorPressions.jsx'
import CorCavitats from './viz/CorCavitats.jsx'
import ConceptViz from './viz/ConceptViz.jsx'

// Visualitzacions interactives per punt de teoria (`viz` a les dades).
const VIZ = { 'cor-pressions': CorPressions, 'cor-cavitats': CorCavitats }

// Targeta de teoria. El tipus decideix l'estil:
// keyequation → destacada amb fórmula; epistemic/preview → amb badge;
// synthesis → barra de bioma; concept/transfer → estàndard.
// DUA: el text llarg es parteix en `text` (entrada curta) + `bullets` (una idea
// per línia) + `keyIdea` (la frase que s'ha d'endur tothom) i sempre va amb un
// suport visual: `image`, `video`, `viz` o `visual` (esquema fet amb dades).
// `figLabel`: codi de la figura al full (F1, G2…) quan la imatge és la mateixa.
export default function TheoryCard({ point, index, figLabel }) {
  const isKey = point.type === 'keyequation'
  const isSynthesis = point.type === 'synthesis'
  const figure = point.image && (
    <figure className="mt-4 overflow-hidden rounded-xl border border-[var(--rule)] bg-white">
      <img
        src={asset(point.image)}
        alt={point.imageAlt || ''}
        className="w-full block"
        loading="lazy"
      />
      {(point.imageCaption || figLabel) && (
        <figcaption className="px-4 py-2 text-xs text-[var(--muted)]">
          {figLabel && <strong className="text-[var(--text)]">{figLabel}{point.imageCaption ? ' — ' : ''}</strong>}
          {point.imageCaption && <T>{point.imageCaption}</T>}
        </figcaption>
      )}
    </figure>
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className={`card p-6 ${isKey ? 'border-[var(--biome-accent)]' : ''} ${
        isSynthesis ? 'border-s-4' : ''
      }`}
      style={isSynthesis ? { borderInlineStartColor: 'var(--biome)' } : undefined}
    >
      {point.badge && (
        <span className="mb-3 inline-block rounded-full border border-[var(--rule-strong)] px-3 py-0.5 text-xs font-semibold tracking-wide text-[var(--muted)]">
          {point.badge}
        </span>
      )}
      <div className="flex gap-4">
        <span className="bignum decorative" style={{ color: 'var(--biome-accent)' }}>
          {index + 1}
        </span>
        <div className="min-w-0">
          <h3 className="text-2xl mb-2">
            <T>{point.heading}</T>
          </h3>
          {point.text && (
            <p className="text-[var(--text)]/90">
              <T>{point.text}</T>
            </p>
          )}
          {point.bullets?.length > 0 && (
            <ul className="mt-3 space-y-2.5">
              {point.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 leading-snug">
                  <span
                    aria-hidden="true"
                    className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full"
                    style={{ background: 'var(--biome-accent)' }}
                  />
                  <span className="min-w-0 text-[var(--text)]/90">
                    <T>{b}</T>
                  </span>
                </li>
              ))}
            </ul>
          )}
          {point.keyIdea && (
            <p
              className="mt-4 rounded-xl border-s-4 px-4 py-3 font-medium"
              style={{ borderInlineStartColor: 'var(--biome-accent)', background: 'var(--bg-soft)' }}
            >
              <span className="kicker me-2">💡 Idea clau</span>
              <T>{point.keyIdea}</T>
            </p>
          )}
          {point.formula && (
            <p
              className="mt-4 rounded-xl bg-[var(--bg-soft)] px-4 py-3 text-center font-display text-xl md:text-2xl font-semibold"
              style={{ color: 'var(--biome-accent)' }}
            >
              {point.formula}
            </p>
          )}
          {point.video && (
            <figure className="mt-4 overflow-hidden rounded-xl border border-[var(--rule)] bg-black">
              <video
                src={asset(point.video)}
                className="w-full block"
                controls
                muted
                loop
                playsInline
                preload="metadata"
              />
              <figcaption className="px-4 py-2 text-xs text-[var(--muted)]">
                🎬 Animació: <T>{point.heading}</T>
              </figcaption>
            </figure>
          )}
          {point.image && !point.imageWide && figure}
          {point.images?.length > 0 && (
            <div className={`mt-4 grid gap-3 ${point.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
              {point.images.map((im, i) => (
                <figure
                  key={i}
                  className={`overflow-hidden rounded-xl border border-[var(--rule)] bg-white ${im.wide ? 'sm:col-span-2' : ''}`}
                >
                  <img
                    src={asset(im.src)}
                    alt={im.alt || im.caption || ''}
                    className={`block w-full ${im.wide ? '' : 'h-56 object-contain bg-white'}`}
                    loading="lazy"
                  />
                  {(im.caption || im.credit) && (
                    <figcaption className="px-4 py-2 text-xs text-[var(--muted)]">
                      {im.caption && <T>{im.caption}</T>}
                      {im.credit && <span className="block mt-0.5 opacity-75">📷 {im.credit}</span>}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
          {point.youtube && (
            <figure className="mt-4 overflow-hidden rounded-xl border border-[var(--rule)] bg-black">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${point.youtube.id}?rel=0${point.youtube.start ? `&start=${point.youtube.start}` : ''}`}
                  title={point.youtube.title || point.heading}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption className="px-4 py-2 text-xs text-[var(--muted)] bg-white">
                🎬 {point.youtube.note ? <T>{point.youtube.note}</T> : point.youtube.title}
                {point.youtube.credit && <span className="block mt-0.5 opacity-75">{point.youtube.credit}</span>}
              </figcaption>
            </figure>
          )}
        </div>
      </div>
      {/* visual: esquema de caixes/columnes a tot l'ample de la targeta */}
      {point.visual && <ConceptViz visual={point.visual} />}
      {/* viz: interactiu a tot l'ample de la targeta */}
      {point.viz && VIZ[point.viz] && (() => { const Viz = VIZ[point.viz]; return <Viz /> })()}
      {/* imageWide: imatge amb text a dins → a tot l'ample de la targeta (no a la columna del text) */}
      {point.image && point.imageWide && figure}
    </motion.article>
  )
}
