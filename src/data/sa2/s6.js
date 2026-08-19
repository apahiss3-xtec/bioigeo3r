export const sa2s6 = {
  id: "s6", saId: "sa2",
  title: "El sistema de control i l'equilibri intern",
  sessionNumber: 6, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s6-neuronal.jpg",
  flippedReading: "Lectura prèvia a casa (2 versions, Classroom): les dues vies de control del cos — els nervis (elèctrics, mil·lisegons) i les hormones (per la sang, minuts). Idea clau que cal portar a classe: una via és ràpida i breu; l'altra, lenta i duradora.",

  // Repte oral curt: "l'enigma del control" — pregunta oberta deixada penjada fins a l'Explica.
  engageChallenge: "Quan l'àrbitre va xiular i la Mercè va sortir a córrer, la seva FC JA pujava ABANS d'agafar ritme. Per quina raó? Ningú li ha dit conscientment al cor que bategui més ràpid. (Pregunta oberta — la resoldreu a l'Explica.)",
  engageQuestion: "Has mesurat la FC en repòs 3 matins. Posem-la en comú: hi ha molta variabilitat a la classe. Per quina raó? (Edat, estrès, son, temperatura...) Escriu també: quin sistema creus que controla el cor, el pols, els reflexos?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Argumento per quina raó la via nerviosa i la via hormonal no són redundants sinó complementàries (velocitat contra durada).",
      "Critico la mesura del temps de reacció identificant variable independent, dependent, control i rèpliques, i dic quin resultat refutaria la meva hipòtesi.",
      "Explico el ronyó com a filtre selectiu (filtració + reabsorció) i argumento què li passaria al medi intern si deixés de filtrar.",
      "Integro pulmons i ronyó com un sistema coordinat d'eliminació i ho lligo a la respiració cel·lular (unitat de la cèl·lula, SA1).",
      "Comparo DUES analítiques diferents i argumento amb dades per quina raó el problema del Marc Fontana és el ferro i no el ronyó."
    ],
    B: [
      "Distingeixo la via nerviosa (elèctrica, mil·lisegons) de la via hormonal (per la sang, minuts) amb un exemple de cadascuna.",
      "Explico per quina raó la freqüència cardíaca de la Mercè ja pujava ABANS d'arrencar (nervi simpàtic i adrenalina).",
      "Descric com el ronyó filtra la sang i forma l'orina (ronyó → urèter → bufeta) i per quina raó és un filtre selectiu.",
      "Relaciono les dues portes de sortida dels residus: els pulmons (CO₂) i el ronyó (urea, sals i aigua).",
      "Interpreto la urea i la creatinina d'una analítica i connecto l'EPO que fabrica el ronyó amb l'anèmia."
    ],
    C: [
      "Sé que els nervis porten l'ordre molt de pressa (mil·lisegons) i que les hormones van per la sang i triguen més (minuts).",
      "Sé nomenar dues hormones i dir què fan: l'adrenalina i l'ADH.",
      "Sé que el ronyó filtra la sang i fabrica l'orina, i sé el camí: ronyó → urèter → bufeta.",
      "Sé que els pulmons treuen el CO₂ i que el ronyó treu la urea, les sals i l'aigua que sobren.",
      "Sé explicar per quina raó, si bec poca aigua, la meva orina és més fosca (l'ADH)."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Estació A (regle de 30 cm): anota les 5 distàncies de la mà dominant i les 5 de l'altra a la taula de la fitxa i passa-les a mil·lisegons amb la taula de conversió (5 cm → 101 ms · 10 → 143 · 15 → 175 · 20 → 202 · 25 → 226 · 30 → 247).",
      challenge: "El temps que has mesurat inclou 5 passos: (1) receptor, (2) via nerviosa que puja, (3) processament, (4) via que baixa, (5) contracció del múscul. Quin creus que en consumeix més? Proposa una mesura que ho pogués aïllar."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Heu mesurat la FC 3 matins. Avui en parlem. Però primer: anoteu individualment per quina raó creieu que la FC varia de dia a dia, i com el cos «sap» quan cal accelerar el cor.",
    prompts: [
      {
        kind: "write",
        text: "Quan et poses nerviós/osa o t'assusteixes, el cor s'accelera sense que tu li diguis res. Per quina raó creus que passa?",
        starter: "Crec que el cor s'accelera perquè..."
      },
      {
        kind: "write",
        text: "La teva orina té sempre el mateix color? Per quina raó creus que alguns dies és molt clara i d'altres molt fosca?",
        starter: "Crec que el color de l'orina canvia perquè..."
      }
    ]
  },

  exploreActivity: {
    what: "4 estacions analògiques: (A) test de temps de reacció amb un regle, (B) simulació d'un arc reflex en grup, (C) targetes d'aparellar hormona-glàndula-efecte, (D) mini-investigació sobre on van els residus de les cèl·lules (urea, CO₂).",
    who: { mode: "parelles+grup5", label: "Parelles (A, C, D) i grups de 5 (B, arc reflex)" },
    time: 35,
    note: "Part A: compara la teva mà dominant amb la no dominant i les 5 repeticions entre elles."
  },
  exploreInstructions: [
    "Part A — Test temps reacció (parelles): regle 30 cm. A deixa caure sense avisar, B tanca la mà. Mesurar distància caiguda → convertir a temps. 5 repeticions.",
    "Per quina raó la 5a rep és més ràpida? Per quina raó la mà dominant és lleugerament més ràpida?",
    "Part B — Simulació arc reflex (grup 5): receptor (peu), nervi aferent, medul·la espinal, nervi eferent, efector. Passar una pilota en ordre. Eliminar el 'cervell' → el reflex continua. Per quina raó?",
    "Part C — Targetes hormones (parelles): adrenalina, insulina, tiroxina, cortisol, ADH, EPO → fer coincidir hormona + glàndula + situació + efecte",
    "Part D — El residu invisible: usant l'analítica, 'a part de CO₂, quins residus produeixen les cèl·les? Per on surten?'"
  ],
  exploreDuration: "35 min",
  exploreMaterials: ["Regle 30 cm (parelles)", "Pilota o tap (arc reflex)", "Targetes hormones (impreses)"],

  theoryPoints: [
    { id: "t1", apartat: "2", heading: "==Sistema nerviós==: la via ràpida", text: "==SN Simpàtic==: 'fight or flight' → augmenta ==FC|o==, dilata bronquis, inhibeix digestió. Actua en ==mil·lisegons|g== (via elèctrica). Per quina raó la Mercè puja la FC abans d'arrencar: el ==SN simpàtic== anticipa l'esforç.", type: "concept", video: "/animacions/sa2-s6-t1.mp4" },
    { id: "t2", apartat: "2", heading: "==Sistema endocrí==: la via lenta però duradora", text: "==Adrenalina|o== (medul·la suprarenal): glucosa ↑, FC ↑. Efecte als ==30 seg|o== (via sang). ==Insulina|g== (pàncrees): glucosa entra a les cèl·les. ==EPO|b== (ronyó): estimula producció eritròcits — per quina raó l'EPO és el ==dopatge|r== dels ciclistes.", type: "concept", video: "/animacions/sa2-s6-t2.mp4" },
    { id: "t3", apartat: "3", heading: "==Sistema excretor==: treure el que sobra", text: "Les cèl·les que treballen produeixen residus: ==CO₂|r== (surt pels ==pulmons|b==), ==urea i sals|o== (surten pels ==ronyons|g== com a orina). El ronyó filtra la sang i manté constant el medi intern (==homeòstasi==). L'==ADH|p== (hormona) controla quanta aigua retén el ronyó: poca orina quan tens set.", type: "concept", video: "/animacions/sa2-s6-t3.mp4" },
    { id: "t4", apartat: "3", heading: "Connexió enigma: ==EPO== i anèmia", text: "El ==ronyó|g== fabrica ==EPO==, que ordena als ossos fabricar ==eritròcits|r==. Marc Fontana té pocs eritròcits però el seu problema és el ==FERRO|r== (no el ronyó). Però un problema de ronyó TAMBÉ pot causar ==anèmia|r== (via EPO). L'analítica ho confirma: ==creatinina i urea normals|g== = ronyó sa.", type: "keyequation", badge: "🔗 Enigma 2 — tercera pista", video: "/animacions/sa2-s6-t4.mp4" },
    { id: "t5", apartat: "4", heading: "La integració: rapidesa nerviosa vs. hormonal", text: "==Nervis|b==: ==mil·lisegons|g== (via elèctrica). ==Hormones|o==: ==30 seg – minuts|o== (via sang). Per quina raó les hormones van 'més tard': han de viatjar per la ==circulació==. Però els seus ==efectes duren molt més|g==.", type: "synthesis", video: "/animacions/sa2-s6-t5.mp4" }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", title: "La neurona", src: "/images/sa2-neurona.png", note: "Dendrites (reben el senyal), soma, axó amb mielina (el condueix ràpid) i sinapsi (el passa a la neurona següent). La via elèctrica de mil·lisegons." },
    { id: "Fig.2", apartat: "2", title: "La sinapsi: com es comuniquen les neurones", src: "/images/sa2-sinapsi.png", note: "La neurona presinàptica allibera neurotransmissors que travessen l'espai sinàptic fins a la postsinàptica. El pas químic del missatge." },
    { id: "Fig.3", apartat: "1", title: "L'arc reflex", src: "/images/sa2-arc-reflex.png", note: "Receptor (dit) → nervi aferent → medul·la espinal → nervi eferent → múscul, sense passar pel cervell. Per això retires la mà abans d'adonar-te'n. És la simulació de l'estació B." },
    { id: "Fig.4", apartat: "3", title: "El ronyó com a filtre de la sang", src: "/imatges-cientifiques/s6_ronyo_marcadors.png", note: "① sang que arriba amb residus (els puntets són la urea) · ② ronyó · ③ sang ja filtrada · ④ urèter · ⑤ bufeta. Compte: aquí «neta» vol dir sense urea, no amb oxigen." },
    { id: "Fig.5", apartat: "3", title: "Les dues hormones del ronyó", src: "/imatges-cientifiques/s6_hormones_etiquetada.png", note: "Esquerra (ADH): el cervell mana al ronyó retenir aigua i l'aigua torna a la sang. Dreta (EPO): el ronyó mana a la medul·la òssia fabricar eritròcits nous." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s6-fitxa-A.html", B: "/fitxes/sa2-s6-fitxa-B.html", C: "/fitxes/sa2-s6-fitxa-C.html" }, teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa Sessió 6 — El sistema de control i l'equilibri intern",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "8 min", phase: "engage", instruction: "Dibuixa la teva hipòtesi (per on surten els residus líquids) i respon les tres preguntes de l'apartat 0. No es corregeix: ho compararàs al final.", hints: [] },
      { apartat: "1", title: "Quatre estacions — com dona ordres el cos", time: "35 min", phase: "explore", instruction: "Rota per les 4 estacions i omple-les a la fitxa. A: temps de reacció amb regle (5 proves per mà, cm → ms). B: arc reflex en grup. C: taula d'hormones. D: analítica del Marc Fontana.", hints: [
        "Estació A: anota TOTES les distàncies sense arrodonir — la variabilitat és la dada interessant.",
        "Estació C: llegeix primer la columna EFECTE; després decideix la glàndula i la situació.",
        "Estació D: abans de mirar la urea del Marc, pregunta't què esperaries trobar-hi si el ronyó no filtrés."
      ] },
      { apartat: "2", title: "Dues vies de control: el nervi i l'hormona", time: "20 min", phase: "explica", instruction: "Omple la taula comparativa (per on viatja, quant triga, quant dura, exemple) i respon la pregunta de la Mercè.", hints: [
        "Via elèctrica pel nervi contra via química per la sang: quin recorregut és més curt?",
        "La FC de la Mercè pujava ABANS d'arrencar: mira els temps de la teva taula i digues quina de les dues vies ho pot haver començat."
      ] },
      { apartat: "3", title: "El sistema excretor: el ronyó", time: "30 min", phase: "explica", instruction: "Apartat 3: llegeix el dibuix amb la llegenda numerada, completa el recorregut ronyó → urèter → bufeta, classifica els residus per porta de sortida i treballa l'ADH i l'EPO.", hints: [
        "CO₂ → pulmons; urea, sals i excés d'aigua → ronyó.",
        "Compte: aquí «sang neta» vol dir sense urea, no amb oxigen.",
        "ADH: en fabriques més quan beus molt o quan beus poc? Per quina raó?"
      ] },
      { apartat: "4", title: "Integració i homeòstasi", time: "20 min", phase: "elabora", instruction: "Apartat 4: completa el bucle de l'ADH, tanca el cas del Marc Fontana amb dades de l'analítica i respon el moment epistèmic sobre l'EPO.", hints: [
        "Homeòstasi = mantenir estable el medi intern. Fixa't que l'efecte del bucle apaga la causa que l'havia engegat."
      ] }
    ]
  },
  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "multiple", text: "Posa en ordre de velocitat: hormona / nervi / reflex", options: ["Reflex (ms) < Nervi voluntari (ms-seg) < Hormona (seg-min)", "Hormona < Nervi < Reflex", "Tots tres actuen a la mateixa velocitat", "Nervi < Reflex < Hormona"], correct: 0 },
    { id: "q2", type: "open", text: "Per quina raó l'adrenalina inhibeix la digestió durant l'exercici físic intens? Usa el concepte de 'prioritat de recursos'.", hint: "El cos no pot donar molta sang als músculs i a l'intestí alhora. Si està fugint o competint, quin dels dos prioritza?" },
    { id: "q3", type: "open", text: "Per quina raó l'orina és més fosca quan beus poca aigua? Connecta-ho amb l'ADH i el ronyó.", hint: "Quan en falta, l'ADH ordena al ronyó retenir aigua. Si retens aigua, l'orina queda més diluïda o més concentrada?" }
  ],
  homework: { description: "Durant un dia, anota a la fitxa quants gots d'aigua beus i de quin color és la teva orina (4 moments). A més, NO t'oblidis les dades de FC en repòs dels 3 matins de la sessió passada: són NECESSÀRIES per a la Sessió 7.", deadline: null },
  recoveryInstructions: [
    "Fes el test de temps de reacció a casa: que algú et deixi caure un regle de 30 cm sense avisar; anota on l'agafes, 5 vegades amb cada mà",
    "Llegeix la teoria d'aquesta pàgina (les dues vies de control + el sistema excretor)",
    "Omple la fitxa de la Sessió 6, apartats 0 a 4",
    "Recorda: necessites les dades de FC en repòs dels 3 matins per a la Sessió 7"
  ],
  oaLinks: ["OA4"], competencies: ["CE1", "CE2", "CE3", "CE4"]
}
