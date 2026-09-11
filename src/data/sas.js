import { sa1, sa1Sessions } from './sa1/sa1-sessions.js'
import { sa2, sa2Sessions } from './sa2/sa2-sessions.js'
import { sa3, sa3Sessions } from './sa3/sa3-sessions.js'
import { sa4, sa4Sessions } from './sa4/sa4-sessions.js'
import { sa5, sa5Sessions } from './sa5/sa5-sessions.js'
import { sa6, sa6Sessions } from './sa6/sa6-sessions.js'
import { sa1Avaluacio } from './sa1/avaluacio.js'
import { sa2Avaluacio } from './sa2/avaluacio.js'
import { sa3Avaluacio } from './sa3/avaluacio.js'
import { sa4Avaluacio } from './sa4/avaluacio.js'
import { sa5Avaluacio } from './sa5/avaluacio.js'
import { sa6Avaluacio } from './sa6/avaluacio.js'

// ─────────────────────────────────────────────────────────────────────────────
// Reestructuració del 10/09/2026
//
// Fora: «La xarxa de la vida» (ecologia) i «El planeta que s'escalfa» (clima),
// que tractaven el mateix bloc de sabers partit en dos contextos diferents.
// Dins: SA6 «Ens enfonsem», projecte STEM compartit amb Tecnologia i
// Digitalització, que els reuneix al voltant d'un problema real i local.
// La geologia (antiga SA7) passa a SA5 i es fa abans del projecte.
//
// El curs queda, doncs, en SIS situacions d'aprenentatge, no set.
// ─────────────────────────────────────────────────────────────────────────────

// SA publicades: el text de sessió ja està net i revisat, així que es publica.
// SA1–SA4 porten fitxa imprimible real (HTML A/B/C a public/fitxes/); SA5 encara
// no en té cap i el seu `fitxaUrl` és `null` — la pàgina de sessió mostra llavors
// «la fitxa es reparteix a classe» en comptes d'un enllaç trencat.
export const publishedSAs = [
  { ...sa1, sessionsData: sa1Sessions, avaluacio: sa1Avaluacio, published: true },
  { ...sa2, sessionsData: sa2Sessions, avaluacio: sa2Avaluacio, published: true },
  { ...sa3, sessionsData: sa3Sessions, avaluacio: sa3Avaluacio, published: true },
  { ...sa4, sessionsData: sa4Sessions, avaluacio: sa4Avaluacio, published: true },
  { ...sa5, sessionsData: sa5Sessions, avaluacio: sa5Avaluacio, published: true }
]

// SA6 hi és mentre no tingui cap sessió fabricada: la portada la pinta com a
// casella destacada amb l'etiqueta «Projecte STEM» i l'estat «Pròximament».
// Quan `sa6Sessions` deixi de ser buit, moure-la a `publishedSAs` — la casella
// destacada es manté igualment perquè depèn de `sa6.stem`, no de si és publicada.
export const upcomingSAs = [
  { ...sa6, sessionsData: sa6Sessions, avaluacio: sa6Avaluacio, published: false }
]

export const allSAs = [...publishedSAs, ...upcomingSAs]

export const getSA = (saId) => allSAs.find((sa) => sa.id === saId)

export const getSession = (saId, sessionId) => {
  const sa = publishedSAs.find((s) => s.id === saId)
  if (!sa) return null
  return sa.sessionsData.find((s) => s.id === sessionId) || null
}
