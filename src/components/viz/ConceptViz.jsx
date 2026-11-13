import T from '../../translate/T.jsx'

// Esquemes senzills fets amb HTML/CSS a partir de dades (`visual` a un punt de
// teoria). Serveixen perquè cap explicació quedi només en text (DUA: mateixa
// idea per dues vies). Tres formes:
//   flow    → caixes encadenades amb fletxes   { kind:'flow', items:[{label, sub, c}] }
//   compare → columnes de comparació           { kind:'compare', columns:[{title, c, items:[]}] }
//   cards   → graella de fitxes curtes         { kind:'cards', items:[{title, text, big, c}] }
// `c` és la mateixa clau de color que el ressaltat ==terme|c== (a, p, o, g, r, b).
const COLORS = {
  a: 'var(--biome-accent)',
  p: 'var(--purple-ink)',
  o: 'var(--orange)',
  g: '#3e7c4f',
  r: '#c0392b',
  b: '#1f8ad0',
}
const ink = (c) => COLORS[c] || COLORS.a
const tint = (c) => `color-mix(in srgb, ${ink(c)} 10%, white)`
const edge = (c) => `color-mix(in srgb, ${ink(c)} 35%, white)`

function Flow({ items }) {
  return (
    <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-stretch">
      {items.map((it, i) => (
        <li key={i} className="flex min-w-0 flex-1 flex-col items-stretch gap-2 md:flex-row md:items-center">
          {i > 0 && (
            <span aria-hidden="true" className="self-center font-display text-2xl leading-none text-[var(--muted)]">
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </span>
          )}
          <div
            className="min-w-0 flex-1 rounded-xl border px-3 py-3 text-center md:h-full"
            style={{ background: tint(it.c), borderColor: edge(it.c) }}
          >
            {it.big && (
              <p className="font-display text-3xl font-bold leading-none" style={{ color: ink(it.c) }}>
                {it.big}
              </p>
            )}
            <p className="font-display text-lg font-semibold leading-tight" style={{ color: ink(it.c) }}>
              <T>{it.label}</T>
            </p>
            {it.sub && (
              <p className="mt-1 text-sm leading-snug text-[var(--text)]/80">
                <T>{it.sub}</T>
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}

function Compare({ columns }) {
  return (
    <div className={`grid gap-3 ${columns.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {columns.map((col, i) => (
        <div key={i} className="min-w-0 rounded-xl border p-4" style={{ background: tint(col.c), borderColor: edge(col.c) }}>
          <p className="mb-2 font-display text-xl font-semibold leading-tight" style={{ color: ink(col.c) }}>
            <T>{col.title}</T>
          </p>
          <ul className="space-y-1.5 text-sm leading-snug">
            {col.items.map((txt, j) => (
              <li key={j} className="flex gap-2">
                <span aria-hidden="true" style={{ color: ink(col.c) }}>
                  ●
                </span>
                <span className="min-w-0">
                  <T>{txt}</T>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function Cards({ items }) {
  const cols = items.length === 2 ? 'sm:grid-cols-2' : items.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3'
  return (
    <div className={`grid gap-3 ${cols}`}>
      {items.map((it, i) => (
        <div key={i} className="min-w-0 rounded-xl border p-3" style={{ background: tint(it.c), borderColor: edge(it.c) }}>
          {it.big && (
            <p className="font-display text-3xl font-bold leading-none" style={{ color: ink(it.c) }}>
              {it.big}
            </p>
          )}
          <p className="font-display text-lg font-semibold leading-tight" style={{ color: ink(it.c) }}>
            <T>{it.title}</T>
          </p>
          {it.text && (
            <p className="mt-1 text-sm leading-snug text-[var(--text)]/80">
              <T>{it.text}</T>
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default function ConceptViz({ visual }) {
  if (!visual) return null
  return (
    <figure className="mt-5">
      {visual.title && (
        <p className="kicker mb-2">
          <T>{visual.title}</T>
        </p>
      )}
      {visual.kind === 'flow' && <Flow items={visual.items} />}
      {visual.kind === 'compare' && <Compare columns={visual.columns} />}
      {visual.kind === 'cards' && <Cards items={visual.items} />}
      {visual.caption && (
        <figcaption className="mt-2 text-xs text-[var(--muted)]">
          <T>{visual.caption}</T>
        </figcaption>
      )}
    </figure>
  )
}
