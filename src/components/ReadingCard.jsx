import { useNivell } from '../nivell/NivellContext.jsx'
import T from '../translate/T.jsx'
import { asset } from '../utils.js'

// Lectura de deures (aula invertida) dins l'apartat «Feina a casa» d'una sessió.
// Dades: session.homework.reading (vegeu data/sa1/lectura_s2.js). Versions:
//   A i B → text estàndard (la A hi afegeix el bloc «Per anar més enllà»)
//   C     → lectura fàcil (frases curtes, càpsules «Per llegir», paraules noves)
// Tot el text passa per <T>: ressaltat ==paraula== i traducció per hover.
const LABEL = { A: 'Versió A/B', B: 'Versió A/B', C: 'Versió C (lectura fàcil)' }

const Block = ({ b }) => {
  switch (b.t) {
    case 'h':
      return <h4 className="mt-6 mb-2 text-xl font-display font-bold text-[var(--purple-ink)]"><T>{b.x}</T></h4>
    case 'p':
      return <p className="mb-3"><T>{b.x}</T></p>
    case 'nota':
      return (
        <p className="mb-4 rounded-xl border-s-4 bg-[var(--bg-soft)] p-3" style={{ borderInlineStartColor: 'var(--biome)' }}>
          <T>{b.x}</T>
        </p>
      )
    case 'cap':
      return (
        <div className="my-3 flex gap-3 rounded-xl border-s-4 p-3 font-semibold" style={{ borderInlineStartColor: 'var(--teal, #3a9e8c)', background: 'var(--teal-tint, #e6f4f1)' }}>
          <span className="kicker shrink-0 pt-0.5" style={{ color: 'var(--teal, #3a9e8c)' }}>Per llegir</span>
          <span><T>{b.x}</T></span>
        </div>
      )
    case 'key':
      return (
        <p className="my-4 rounded-xl border p-3 font-bold" style={{ background: 'var(--yellow-tint, #fdf7e2)', borderColor: 'var(--yellow, #c8960a)' }}>
          <T>{b.x}</T>
        </p>
      )
    case 'ul':
      return (
        <ul className="mb-3 list-disc space-y-1 ps-6">
          {b.items.map((i, k) => <li key={k}><T>{i}</T></li>)}
        </ul>
      )
    case 'img':
      return (
        <figure className="my-4 overflow-hidden rounded-xl border border-[var(--rule)] bg-white">
          <img src={asset(b.src)} alt={b.alt || ''} loading="lazy"
               className={`w-full block ${b.fit === 'cover' ? 'max-h-64 object-cover' : 'max-h-72 object-contain'}`} />
          <figcaption className="px-4 py-2 text-xs italic text-[var(--muted)]"><T>{b.cap}</T></figcaption>
        </figure>
      )
    case 'table':
      return (
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>{b.head.map((c, k) => <th key={k} className="bg-[var(--purple-ink)] p-2 text-start text-white"><T>{c}</T></th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, k) => (
                    <td key={k} className={`border border-[var(--rule-strong)] p-2 ${k === 0 ? 'bg-[var(--bg-soft)] font-semibold' : ''}`}><T>{c}</T></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'vocab':
      return (
        <div className="my-4 rounded-xl border border-[var(--rule-strong)] p-4">
          <p className="kicker mb-2"><T>{b.title}</T></p>
          <dl className="grid gap-x-4 gap-y-1 sm:grid-cols-[10rem_1fr]">
            {b.rows.map(([a, d], i) => (
              <div key={i} className="contents">
                <dt className="font-bold"><T>{a}</T></dt>
                <dd><T>{d}</T></dd>
              </div>
            ))}
          </dl>
        </div>
      )
    case 'cards':
      return (
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          {b.items.map((c, i) => (
            <div key={i} className="rounded-xl border-2 border-[var(--rule-strong)] bg-[var(--bg-soft)] p-3">
              <p className="mb-1 font-bold"><T>{c.title}</T></p>
              <p><T>{c.text}</T></p>
            </div>
          ))}
        </div>
      )
    case 'recap':
      return (
        <div className="my-5 rounded-xl border-2 border-[var(--rule-strong)] p-4">
          <p className="kicker mb-2"><T>{b.title}</T></p>
          <ul className="list-disc space-y-1 ps-6">{b.items.map((i, k) => <li key={k}><T>{i}</T></li>)}</ul>
        </div>
      )
    case 'extra':
      return (
        <div className="my-5 rounded-xl border-2 border-dashed p-4" style={{ borderColor: 'var(--orange)', background: 'var(--orange-tint, #fdf0e8)' }}>
          <p className="kicker mb-2" style={{ color: 'var(--orange)' }}><T>{b.title}</T></p>
          <ol className="list-decimal space-y-2 ps-6">{b.items.map((i, k) => <li key={k}><T>{i}</T></li>)}</ol>
        </div>
      )
    default:
      return null
  }
}

export default function ReadingCard({ reading }) {
  const { nivell } = useNivell()
  const key = nivell === 'C' ? 'C' : 'AB'
  const blocks = reading[key] || []
  const printUrl = reading.printUrl?.[nivell] || reading.printUrl?.B

  return (
    <section className="mt-6 rounded-2xl border-2 border-[var(--rule-strong)] p-5">
      <p className="kicker mb-1" style={{ color: 'var(--biome-accent)' }}>📖 Lectura per a casa · {LABEL[nivell] || LABEL.B}</p>
      <h3 className="text-2xl md:text-3xl leading-tight"><T>{reading.title[key]}</T></h3>
      <p className="mb-4 italic text-[var(--muted)]"><T>{reading.subtitle[key]}</T></p>
      {printUrl && (
        <p className="mb-4 text-sm">
          <a className="underline" href={asset(printUrl)} target="_blank" rel="noopener noreferrer">Obre la lectura en una pàgina a part (per imprimir-la)</a>
        </p>
      )}
      {blocks.map((b, i) => <Block key={i} b={b} />)}
      {nivell === 'A' && reading.extraA && <Block b={reading.extraA} />}
    </section>
  )
}
