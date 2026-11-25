export const sa3s5 = {
  id: "s5", saId: "sa3",
  title: "Tancament: campanyes i prova",
  sessionNumber: 5, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s5-drogues.jpg",
  isFinalSession: true,
  // Sessió de tancament (25/11/2026): sense fitxa ni full de sortida.
  noFitxa: true,
  noExitTicket: true,

  engageQuestion: "Avui és la sessió final de la SA. Cada grup presenta la seva campanya: quin mite desmunteu i amb quina evidència? Després, la prova escrita.",
  engageContext: "Primer, 10 minuts per acabar de muntar el cartell o el vídeo. Després, les presentacions (3–4 minuts per grup) i, per acabar, la prova escrita de la SA.",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures). Tasca 2, 09/09/2026.
  teacherNotes: "Tancament de la SA3 (decisió 25/11/2026: sense S6). Muntatge final 10 · presentacions ~8 grups × 3–4 min amb la rúbrica 35 · prova escrita (versió estàndard de 55 min, B i C) 55 · marge 10. La campanya no s'entrega al Classroom: s'avalua a la presentació. Retorn de la prova i la campanya a la SA4·S1.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Presento una campanya que desmunta un mite de salut i en justifico les decisions davant del públic.",
      "Responc a les preguntes de la classe amb evidència de la SA.",
      "Demostro a la prova el que he après de tota la SA."
    ],
    B: [
      "Presento amb el meu grup una campanya que desmunta un mite de salut.",
      "Explico quin criteri de fiabilitat falla en el mite i quina és l'evidència real.",
      "Demostro a la prova el que he après de tota la SA."
    ],
    C: [
      "Presento amb el meu grup la part de la campanya que he preparat.",
      "Sé dir per què el mite és fals.",
      "Faig la prova de la SA."
    ]
  },

  theoryPoints: [
    {
      id: "t4",
      images: [
        {
          "src": "images/sa3-fotos/s5-t4.jpg",
          "caption": "Neutròfil (en groc) que engoleix bacteris: la primera defensa davant d'una infecció.",
          "credit": "Volker Brinkmann · CC BY 2.5 · Wikimedia Commons"
        }
      ],
      apartat: "3",
      heading: "Síntesi SA3: de la ==infecció== a la ==decisió==",
      text: "Cadena completa: ==patogen entra|r== (S1) → SI innata (hores) → SI adaptativa (dies): anticossos + memòria (S2) → ==vacuna|g== = entrenar el SI per avançat (S3) → ==immunitat de grup|g== = protecció col·lectiva → fàrmac tracta el ==símptoma|o== (S4) → droga ==segresta la sinapsi|r== (S4). És el fil de la prova d'avui: repassa'l abans de començar, amb els ==dos enigmes|g== de la paret (la grip de la Martina i l'article sobre les vacunes).",
      type: "synthesis",
      badge: "✅ SA3 Síntesi completa"
    }
  ],

  sessionMaterials: [
    { name: "Rúbrica de la campanya de comunicació científica", url: "/fitxes/sa3-s5-rubrica-campanya.html" }
  ],

  teoriaPdfUrl: "/teoria/sa3-s5-teoria.pdf",

  fitxaGuide: {
    fitxaName: "Guió de la S5 — Tancament (sense fitxa)",
    steps: [
      { apartat: "1", title: "Muntatge final", time: "10 min", phase: "elabora", instruction: "Cada grup acaba de muntar el cartell o prepara el vídeo per projectar. Els cartells es pengen a la paret.", hints: [] },
      { apartat: "2", title: "Presentacions de les campanyes", time: "35 min", phase: "elabora", instruction: "Cada grup presenta en 3–4 minuts: el mite, per què és un mite (quin criteri falla), l'evidència real i el missatge final. Tothom del grup en presenta una part. El docent avalua amb la rúbrica.", hints: ["Rúbrica de la campanya a Materials."] },
      { apartat: "3", title: "Prova escrita", time: "55 min", phase: "explica", instruction: "Prova individual de tota la SA: defenses i vacunes, fonts fiables, medicaments i drogues, i disseny d'un experiment.", hints: [] },
      { apartat: "4", title: "Marge", time: "10 min", phase: "elabora", instruction: "Temps de reserva per a les presentacions o la prova. Si sobra, la classe tanca el pòster del model (v3).", hints: [] }
    ]
  },

  deliverables: [
    { name: "Campanya de comunicació científica (cartell o vídeo de 60 s)", note: "Es planifica a la S4 (apartat 5), s'acaba en grup durant la setmana i es presenta a classe a la S5 (3–4 min per grup). No s'entrega al Classroom: s'avalua amb la rúbrica durant la presentació." }
  ],

  campanyaStructure: {
    title: "Campanya: estructura mínima",
    sections: [
      "1. El mite que desmunteu (i on l'heu vist)",
      "2. Per quina raó és un mite: quin criteri de fiabilitat falla",
      "3. L'evidència real: una dada o un experiment de la SA",
      "4. Missatge final: clar, breu i dirigit al públic (companys de classe)"
    ]
  },

  homework: { description: "Cap.", note: "La prova i la campanya es retornen a la SA4·S1." },

  recoveryInstructions: [
    "Si has faltat el dia de les presentacions, parla amb el docent: presentaràs la part de la campanya del teu grup un altre dia",
    "La prova es farà un altre dia; repassa la síntesi de la SA d'aquesta pàgina i les fitxes S1–S4"
  ],
  oaLinks: ["OA3"], competencies: ["CE1", "CE2", "CE5"]
}
