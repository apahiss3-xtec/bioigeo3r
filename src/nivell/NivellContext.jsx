import { createContext, useContext, useState } from 'react'

// Nivell de diferenciació de la fitxa (A/B/C). És el mateix concepte que les
// tres versions impreses de cada full:
//   A — Ampliació  (autonomia, preguntes obertes, hipòtesis, connexions entre SAs)
//   B — Estàndard  (per a la majoria; guiatge moderat) ← per defecte
//   C — Adaptació  (més suport: inicis de frase, frases a completar, patró fix, imatges)
// No s'ha de confondre amb el mode SIMPLIFICA (accessibilitat lectora) ni amb
// els nivells d'assoliment NA/AS/AN/AE de l'autoavaluació.
export const NIVELLS = ['A', 'B', 'C']
export const DEFAULT_NIVELL = 'B'

const STORAGE_KEY = 'portal-bio-nivell'

const NivellContext = createContext({ nivell: DEFAULT_NIVELL, setNivell: () => {} })

export function NivellProvider({ children }) {
  const [nivell, setNivellState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return NIVELLS.includes(saved) ? saved : DEFAULT_NIVELL
    } catch {
      return DEFAULT_NIVELL
    }
  })

  const setNivell = (n) => {
    if (!NIVELLS.includes(n)) return
    setNivellState(n)
    try {
      localStorage.setItem(STORAGE_KEY, n)
    } catch {
      // localStorage no disponible: ignorem
    }
  }

  return (
    <NivellContext.Provider value={{ nivell, setNivell }}>{children}</NivellContext.Provider>
  )
}

export const useNivell = () => useContext(NivellContext)

// Tria el contingut adequat al nivell actual. Accepta:
//   - un valor pla → es mostra a tots els nivells
//   - un objecte { A, B, C } → tria pel nivell (amb fallback B → A → C)
export const pickLevel = (value, nivell) => {
  if (value && typeof value === 'object' && !Array.isArray(value) &&
      ('A' in value || 'B' in value || 'C' in value)) {
    return value[nivell] ?? value.B ?? value.A ?? value.C
  }
  return value
}
