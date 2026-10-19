import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { asset } from '../../utils.js'

// SA2·S4 · t2 — Arquitectura del cor.
// Marcadors en % sobre la secció real del cor etiquetat (Fig.1, que abans
// quedava solta a sota de tot). Tres maneres de mirar-lo: cavitats,
// recorregut de la sang i gruix de les parets.
const IMG = '/images/sa2-cor-etiquetat.png'
const BLUE = '#1f8ad0'
const RED = '#c0392b'

const CAVITATS = [
  { id: 'AD', name: 'Aurícula dreta', x: 40.8, y: 51.5, color: BLUE, role: 'REP', text: 'Rep la sang pobra en O₂ que torna de tot el cos per les venes caves.' },
  { id: 'VD', name: 'Ventricle dret', x: 49.5, y: 77, color: BLUE, role: 'BOMBA', text: 'Bomba la sang pobra en O₂ cap als pulmons (artèria pulmonar). Pressió baixa.' },
  { id: 'AE', name: 'Aurícula esquerra', x: 59, y: 47, color: RED, role: 'REP', text: 'Rep la sang rica en O₂ que arriba dels pulmons per les venes pulmonars.' },
  { id: 'VE', name: 'Ventricle esquerre', x: 60, y: 72, color: RED, role: 'BOMBA', text: 'Bomba la sang rica en O₂ cap a tot el cos (aorta). Pressió alta.' }
]

// Recorregut complet: cos → cor dret → pulmons → cor esquerre → cos.
const RECORREGUT = [
  { name: 'Venes caves', x: 41.5, y: 25, color: BLUE, text: 'La sang pobra en O₂ torna del cos.' },
  { name: 'Aurícula dreta', x: 40.8, y: 51.5, color: BLUE, text: 'La rep i la passa avall, a través de la vàlvula tricúspide.' },
  { name: 'Ventricle dret', x: 49.5, y: 77, color: BLUE, text: 'Es contreu i l’empeny cap als pulmons.' },
  { name: 'Artèria pulmonar', x: 62, y: 30, color: BLUE, text: 'Porta la sang als pulmons: allà deixa CO₂ i agafa O₂.' },
  { name: 'Venes pulmonars', x: 65.5, y: 42, color: RED, text: 'La sang torna dels pulmons, ara rica en O₂.' },
  { name: 'Aurícula esquerra', x: 59, y: 47, color: RED, text: 'La rep i la passa avall, a través de la vàlvula mitral.' },
  { name: 'Ventricle esquerre', x: 60, y: 72, color: RED, text: 'Es contreu amb molta força i l’empeny cap a tot el cos.' },
  { name: 'Aorta', x: 53.5, y: 17, color: RED, text: 'Reparteix la sang rica en O₂ per tot el cos… i torna a començar.' }
]

// Parets dels ventricles (calibrades sobre la imatge).
const PARETS = [
  { id: 'dreta', label: 'Paret prima', x: 41.3, y: 75, w: 2.2, h: 12, rot: -18, color: BLUE },
  { id: 'esquerra', label: 'Paret 3× més gruixuda', x: 64.2, y: 74, w: 4.4, h: 16, rot: 10, color: RED }
]

const MODES = [
  { id: 'cavitats', label: 'Les 4 cavitats' },
  { id: 'recorregut', label: 'Segueix la sang' },
  { id: 'parets', label: 'Gruix de les parets' }
]

export default function CorCavitats() {
  const [mode, setMode] = useState('cavitats')
  const [sel, setSel] = useState('AD')
  const [pas, setPas] = useState(0)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (!play) return
    const t = setInterval(() => setPas((p) => (p + 1) % RECORREGUT.length), 1800)
    return () => clearInterval(t)
  }, [play])

  useEffect(() => {
    setPlay(mode === 'recorregut')
    setPas(0)
  }, [mode])

  const cav = CAVITATS.find((c) => c.id === sel)
  const step = RECORREGUT[pas]

  return (
    <div className="mt-5 rounded-xl border border-[var(--rule)] bg-white overflow-hidden">
      <div className="flex flex-wrap gap-2 p-3 border-b border-[var(--rule)]">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            aria-pressed={mode === m.id}
            className={`rounded-full px-3 py-1 text-sm font-semibold border transition-colors ${
              mode === m.id
                ? 'bg-[var(--purple-ink)] border-[var(--purple-ink)] text-white'
                : 'border-[var(--rule-strong)] text-[var(--text)]'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <img src={asset(IMG)} alt="Secció del cor humà amb les cavitats, les vàlvules i els grans vasos etiquetats" className="w-full block" />

        {mode === 'cavitats' &&
          CAVITATS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSel(c.id)}
              aria-label={c.name}
              className="absolute rounded-full font-bold text-white text-[10px] sm:text-xs flex items-center justify-center transition-transform"
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
                width: 'clamp(22px, 3.2vw, 34px)',
                aspectRatio: '1',
                transform: `translate(-50%, -50%) scale(${sel === c.id ? 1.2 : 1})`,
                background: c.color,
                boxShadow: sel === c.id ? `0 0 0 5px ${c.color}44, 0 2px 6px rgba(0,0,0,.25)` : '0 2px 6px rgba(0,0,0,.25)'
              }}
            >
              {c.id}
            </button>
          ))}

        {mode === 'recorregut' && (
          <>
            {RECORREGUT.map((r, i) => (
              <span
                key={r.name}
                className="absolute rounded-full text-white text-[10px] sm:text-xs font-bold flex items-center justify-center transition-opacity"
                style={{
                  left: `${r.x}%`,
                  top: `${r.y}%`,
                  width: 'clamp(18px, 2.4vw, 26px)',
                  aspectRatio: '1',
                  transform: 'translate(-50%, -50%)',
                  background: r.color,
                  opacity: i <= pas ? 1 : 0.25
                }}
              >
                {i + 1}
              </span>
            ))}
            <motion.span
              className="absolute rounded-full pointer-events-none"
              animate={{ left: `${step.x}%`, top: `${step.y}%`, borderColor: step.color }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              style={{
                width: 'clamp(34px, 4.6vw, 52px)',
                aspectRatio: '1',
                x: '-50%',
                y: '-50%',
                border: '3px solid',
                boxShadow: '0 0 0 6px rgba(124,58,237,.15)'
              }}
            />
          </>
        )}

        {mode === 'parets' &&
          PARETS.map((w, i) => (
            <motion.div
              key={w.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.25 }}
              className="absolute pointer-events-none"
              style={{ left: `${w.x}%`, top: `${w.y}%`, width: `${w.w}%`, height: `${w.h}%`, x: '-50%', y: '-50%', rotate: w.rot }}
            >
              <span
                className="block w-full h-full rounded-full"
                style={{ background: `${w.color}55`, border: `2px dashed ${w.color}` }}
              />
            </motion.div>
          ))}
      </div>

      {/* ── Panell inferior segons el mode ── */}
      <div className="p-4 border-t border-[var(--rule)] min-h-[92px]">
        <AnimatePresence mode="wait">
          {mode === 'cavitats' && (
            <motion.div key={sel} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <p className="font-display text-lg font-semibold" style={{ color: cav.color }}>
                {cav.name}{' '}
                <span className="ms-1 rounded-full px-2 py-0.5 text-xs text-white align-middle" style={{ background: cav.color }}>
                  {cav.role}
                </span>
              </p>
              <p className="text-sm text-[var(--text)]/90 mt-1">{cav.text}</p>
              <p className="text-xs text-[var(--muted)] mt-2">
                Toca cada cercle. Les <strong>aurícules</strong> (a dalt) reben; els <strong>ventricles</strong> (a baix) bomben.
              </p>
            </motion.div>
          )}

          {mode === 'recorregut' && (
            <motion.div key={'r' + pas} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <p className="font-display text-lg font-semibold" style={{ color: step.color }}>
                {pas + 1}. {step.name}
              </p>
              <p className="text-sm text-[var(--text)]/90 mt-1">{step.text}</p>
              <div className="mt-3 flex gap-2">
                <button type="button" onClick={() => setPlay((p) => !p)} className="rounded-lg border border-[var(--rule-strong)] px-3 py-1 text-sm font-semibold">
                  {play ? '⏸ Pausa' : '▶ Reprèn'}
                </button>
                <button
                  type="button"
                  onClick={() => { setPlay(false); setPas((p) => (p + 1) % RECORREGUT.length) }}
                  className="rounded-lg border border-[var(--rule-strong)] px-3 py-1 text-sm font-semibold"
                >
                  Pas següent →
                </button>
              </div>
            </motion.div>
          )}

          {mode === 'parets' && (
            <motion.div key="parets" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="space-y-2">
                <Barra label="Ventricle dret · cap als pulmons" value={25} max={120} color={BLUE} gruix="paret prima" />
                <Barra label="Ventricle esquerre · cap a tot el cos" value={120} max={120} color={RED} gruix="paret 3× més gruixuda" />
              </div>
              <p className="text-sm text-[var(--text)]/90 mt-3">
                Més pressió per generar → més múscul a la paret. Ho comprovaràs amb el dit a la dissecció.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function Barra({ label, value, max, color, gruix }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold">
        <span style={{ color }}>{label}</span>
        <span className="text-[var(--muted)]">≈ {value} mmHg · {gruix}</span>
      </div>
      <div className="h-3 rounded-full bg-[var(--surface-2)] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: `${(value / max) * 100}%` }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
    </div>
  )
}
