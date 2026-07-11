import { createContext, useContext, useState } from 'react'

// Estat compartit d'obertura del sonòmetre flotant. Cal que Layout el conegui
// per poder desplaçar el contingut cap a l'esquerra quan el panell és obert
// (si no, el panell (a la dreta) es solapa amb el text de la pàgina).
const STORAGE_KEY = 'portal-bio-soundmeter-open'

const SoundMeterContext = createContext({ open: false, setOpen: () => {} })

export function SoundMeterProvider({ children }) {
  const [open, setOpenState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })

  const setOpen = (next) => {
    setOpenState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next ? '1' : '0')
    } catch {
      // localStorage no disponible: ignorem
    }
  }

  return (
    <SoundMeterContext.Provider value={{ open, setOpen }}>{children}</SoundMeterContext.Provider>
  )
}

export const useSoundMeter = () => useContext(SoundMeterContext)
