import { useTranslate } from '../translate/TranslateContext.jsx'

// Idiomes d'AJUDA: la web sempre és en català. Activar ES/AR/UR/UK fa que,
// en passar per sobre de paraules i expressions del glossari, aparegui
// la traducció. CA = ajuda desactivada.
const HELP_LANGS = [
  { code: null, label: 'CA' },
  { code: 'es', label: 'ES' },
  { code: 'ar', label: 'AR' },
  { code: 'ur', label: 'UR' },
  { code: 'uk', label: 'UK' }
]

export default function TranslationBar() {
  const { helpLang, setHelpLang } = useTranslate()

  return (
    <div
      className="fixed bottom-4 end-4 z-50 flex items-center gap-1 rounded-full border border-[var(--rule-strong)] bg-[var(--surface)] px-2 py-1.5 shadow-lg"
      role="group"
      aria-label="Ajuda de traducció"
    >
      {HELP_LANGS.map(({ code, label }) => (
        <button
          key={label}
          onClick={() => setHelpLang(code)}
          className={`tap font-display text-sm font-semibold rounded-full px-2.5 py-1 ${
            helpLang === code
              ? 'bg-[var(--purple-ink)] text-white'
              : 'text-[var(--muted)] hover:text-[var(--text)]'
          }`}
          aria-pressed={helpLang === code}
          title={
            code
              ? `Ajuda de traducció: passa per sobre de les paraules subratllades (${label})`
              : 'Sense ajuda de traducció'
          }
        >
          {label}
        </button>
      ))}
    </div>
  )
}
