import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { asset } from '../../utils.js'

// SA2·S4 · t1 — Per quina raó calen 4 cavitats.
// Marcadors en % sobre l'esquema real de la doble circulació (no SVG
// d'anatomia propi) + experiment «una sola bomba»: cap pressió única
// serveix alhora per als alvèols i per arribar al peu.
const IMG = '/images/sa2-circulacio-doble.png'
const BLUE = '#1f8ad0'
const RED = '#c0392b'

const STEPS = [
  {
    id: 'petita',
    label: 'Petita circulació',
    color: BLUE,
    rings: [{ x: 47, y: 13, r: 13 }, { x: 45.5, y: 56, r: 5 }],
    badge: { x: 12, y: 40, text: '≈ 25 mmHg' },
    title: 'Ventricle dret → pulmons',
    body: 'Trajecte curt. Pressió BAIXA: les parets dels alvèols i dels seus capil·lars són finíssimes (perquè hi passin l’O₂ i el CO₂) i una pressió alta les trencaria.'
  },
  {
    id: 'gran',
    label: 'Gran circulació',
    color: RED,
    rings: [{ x: 49, y: 89, r: 11 }, { x: 54, y: 58, r: 5 }],
    badge: { x: 87, y: 62, text: '≈ 120 mmHg' },
    title: 'Ventricle esquerre → tot el cos',
    body: 'Trajecte llarg: del cap fins al peu, i contra la gravetat. Pressió ALTA: si no, la sang no arribaria a les cèl·lules musculars més llunyanes.'
  },
  {
    id: 'septe',
    label: 'El septe',
    color: '#7c3aed',
    rings: [{ x: 49.5, y: 63, r: 4.5 }],
    title: 'Una paret que separa les dues bombes',
    body: 'El septe és complet: la sang pobra en O₂ (blava) i la rica en O₂ (vermella) no es barregen mai, i cada costat del cor pot treballar a la seva pressió.'
  }
]

// Valors esquemàtics (aproximats) per raonar, no per memoritzar.
const ALVEOL_MAX = 30
const PEU_MIN = 90

export default function CorPressions() {
  const [step, setStep] = useState('petita')
  const [p, setP] = useState(60)
  const s = STEPS.find((x) => x.id === step)
  const alveolOk = p <= ALVEOL_MAX
  const peuOk = p >= PEU_MIN

  return (
    <div className="mt-5 space-y-5">
      {/* ── Esquema amb marcadors ── */}
      <div className="rounded-xl border border-[var(--rule)] bg-white overflow-hidden">
        <div className="flex flex-wrap gap-2 p-3 border-b border-[var(--rule)]">
          {STEPS.map((x) => (
            <button
              key={x.id}
              type="button"
              onClick={() => setStep(x.id)}
              className="rounded-full px-3 py-1 text-sm font-semibold border transition-colors"
              style={
                step === x.id
                  ? { background: x.color, borderColor: x.color, color: '#fff' }
                  : { borderColor: 'var(--rule-strong)', color: 'var(--text)' }
              }
              aria-pressed={step === x.id}
            >
              {x.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <img src={asset(IMG)} alt="Esquema de la doble circulació: circuit pulmonar a dalt, resta del cos a baix i el cor al mig" className="w-full block" />
          <AnimatePresence>
            {s.rings.map((r, i) => (
              <motion.span
                key={step + i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: i * 0.12 }}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: `${r.x}%`,
                  top: `${r.y}%`,
                  width: `${r.r * 2}%`,
                  aspectRatio: '1',
                  x: '-50%',
                  y: '-50%',
                  border: `3px solid ${s.color}`,
                  boxShadow: `0 0 0 6px ${s.color}33`
                }}
              />
            ))}
            {s.badge && (
              <motion.span
                key={step + 'badge'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute rounded-lg px-2 py-0.5 text-xs sm:text-sm font-bold text-white shadow"
                style={{ left: `${s.badge.x}%`, top: `${s.badge.y}%`, x: '-50%', y: '-50%', background: s.color }}
              >
                {s.badge.text}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="p-4 border-t border-[var(--rule)]" style={{ borderInlineStart: `4px solid ${s.color}` }}>
          <p className="font-display text-lg font-semibold" style={{ color: s.color }}>{s.title}</p>
          <p className="text-sm text-[var(--text)]/90 mt-1">{s.body}</p>
        </div>
      </div>

      {/* ── Experiment mental: una sola bomba ── */}
      <div className="rounded-xl border border-[var(--rule)] bg-[var(--bg-soft)] p-4">
        <p className="kicker mb-1">Prova-ho · I si el cor fos una sola bomba?</p>
        <p className="text-sm text-[var(--muted)] mb-3">
          Una sola bomba = una sola pressió per a pulmons i cos. Mou la pressió i busca un valor que funcioni per a tots dos.
        </p>
        <label className="flex items-center gap-3 text-sm font-semibold">
          <span className="w-24 shrink-0">{p} mmHg</span>
          <input
            type="range"
            min="10"
            max="140"
            step="5"
            value={p}
            onChange={(e) => setP(Number(e.target.value))}
            className="w-full accent-[var(--biome-accent)]"
            aria-label="Pressió d'una sola bomba"
          />
        </label>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Status ok={alveolOk} color={BLUE} title="Alvèols (pulmons)"
            okText="Aguanten: la paret no es trenca."
            koText="Es trenquen: entra líquid als pulmons." />
          <Status ok={peuOk} color={RED} title="Peu (gran circulació)"
            okText="La sang hi arriba amb força."
            koText="No hi arriba: les cèl·lules es queden sense O₂." />
        </div>
        <p className="mt-3 text-sm font-semibold" style={{ color: 'var(--biome-accent)' }}>
          {alveolOk && peuOk
            ? ''
            : 'Cap pressió serveix per a tots dos → calen DUES bombes separades (cor dret i cor esquerre), amb el septe entremig.'}
        </p>
        <p className="mt-1 text-xs text-[var(--muted)]">Valors aproximats, per raonar.</p>
      </div>
    </div>
  )
}

function Status({ ok, color, title, okText, koText }) {
  return (
    <div
      className="rounded-lg bg-white p-3 border transition-colors"
      style={{ borderColor: ok ? '#3e7c4f' : '#c0392b' }}
    >
      <p className="text-sm font-semibold" style={{ color }}>
        {ok ? '✅' : '❌'} {title}
      </p>
      <p className="text-sm text-[var(--text)]/90">{ok ? okText : koText}</p>
    </div>
  )
}
