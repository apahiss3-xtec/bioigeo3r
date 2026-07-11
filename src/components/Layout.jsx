import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import TranslationBar from './TranslationBar.jsx'
import SoundMeter from './SoundMeter.jsx'
import { useSoundMeter } from '../soundmeter/SoundMeterContext.jsx'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const { open } = useSoundMeter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {/* Es desplaça cap a l'esquerra quan el sonòmetre és obert perquè el
          panell (fixed a la dreta) no es solapi amb el contingut. El sonòmetre
          i la barra de traducció queden FORA d'aquest contenidor perquè són
          overlays fixos al viewport i no s'han de moure amb el contingut. */}
      <div className="content-shift min-h-screen flex flex-col" data-shifted={open}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <TranslationBar />
      <SoundMeter />
    </>
  )
}
