import { useLocation } from 'react-router-dom'
import { t } from '../t.js'
import { getSA } from '../data/sas.js'
import { asset } from '../utils.js'

export default function Footer() {
  const { pathname } = useLocation()
  const match = pathname.match(/^\/sa\/([^/]+)/)
  const sa = match ? getSA(match[1]) : null
  const guia = sa?.guiaDocent

  return (
    <footer className="border-t border-[var(--rule)] mt-16">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
        <span className="font-display uppercase tracking-wider">{t('common.footer')}</span>
        <span>{t('common.footerGdpr')}</span>
        {guia && (
          <a
            href={asset(guia)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Guia docent (només per a professorat)"
            title="Guia docent"
            className="ml-auto text-[10px] leading-none opacity-20 hover:opacity-60 transition-opacity no-underline"
          >
            ·
          </a>
        )}
      </div>
    </footer>
  )
}
