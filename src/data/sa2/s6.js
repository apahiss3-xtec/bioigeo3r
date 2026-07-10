export const sa2s6 = {
  id: "s6", saId: "sa2",
  title: "El sistema de control i l'equilibri intern",
  sessionNumber: 6, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s6-neuronal.jpg",
  flippedReading: "Lectura prèvia a casa: text breu sobre sistema nerviós, hormones i ronyó (disponible a Classroom)",

  // Repte oral curt: "l'enigma del control" — pregunta oberta deixada penjada fins a l'Explica.
  engageChallenge: "Quan l'àrbitre va xiular i la Mercè va sortir a córrer, la seva FC JA pujava ABANS d'agafar ritme. Per quina raó? Ningú li ha dit conscientment al cor que bategui més ràpid. (Pregunta oberta — la resoldreu a l'Explica.)",
  engageQuestion: "Has mesurat la FC en repòs 3 matins. Posem-la en comú: hi ha molta variabilitat a la classe. Per quina raó? (Edat, estrès, son, temperatura...) Escriu també: quin sistema creus que controla el cor, el pols, els reflexos?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Raono per quina raó el SN simpàtic i el sistema endocrí no són redundants sinó complementaris: velocitat (ms) vs. durada (minuts-hores).",
      "Explico per quina raó l'EPO és útil com a dopatge, seguint la cadena: EPO → eritròcits → Hb → O₂/L sang → rendiment.",
      "Dissenyo un experiment per mesurar el temps de reacció i controlo les variables (dominant/no dominant, cansament, distracció).",
      "Argumento per quina raó la FC de la Mercè ja pujava ABANS d'arrencar, usant els conceptes de SN simpàtic i anticipació."
    ],
    B: [
      "Distingeixo el SN simpàtic (elèctric, ms) del sistema endocrí (hormonal, seg-min) amb exemples concrets de cada situació.",
      "Explico la funció del ronyó en l'homeòstasi: eliminació d'urea i regulació de l'aigua (ADH).",
      "Relaciono EPO → eritròcits → O₂ disponible i per quina raó el Marc amb ronyó sa no té problema d'EPO.",
      "Interpreto per quina raó la orina és més fosca quan beus poca aigua (ADH + ronyó)."
    ],
    C: [
      "Nomeno 2 hormones i la glàndula que les fabrica (adrenalina → _______, insulina → _______).",
      "Completo: «el sistema nerviós actua en _______ (ms) i el sistema endocrí en _______ (minuts)».",
      "Sé dir que l'ADH és una hormona que diu al ronyó que _______ més aigua, per això l'orina és _______.",
      "Reconec que el ronyó fa 2 coses: filtra _______ (urea/sals) i controla la quantitat d'_______."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Test temps de reacció: la distància caiguda indica quant de temps ha trigat el teu sistema nerviós. Omple: distàncies caiguda: ___, ___, ___, ___, ___ cm. Temps de reacció (cm → ms: d=½gt²): ___ ms de mitjana. La 5a repetició és _______ ràpida perquè _______.",
      challenge: "El temps de reacció mesurat aquí inclou: (1) receptor, (2) via nerviosa aferent, (3) processament, (4) via eferent, (5) contracció muscular. Quin d'aquests passos creus que consumeix MÉS temps? Proposa un experiment que ho pogués aïllar."
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
        starter: "Crec que el color de la orina canvia perquè..."
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
    { id: "Fig.3", apartat: "1", title: "L'arc reflex", src: "/images/sa2-arc-reflex.png", note: "Receptor (dit) → nervi aferent → medul·la espinal → nervi eferent → múscul, sense passar pel cervell. Per això retires la mà abans d'adonar-te'n. És la simulació de la Part B." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s6-fitxa-A.html", B: "/fitxes/sa2-s6-fitxa-B.html", C: "/fitxes/sa2-s6-fitxa-C.html" }, teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S6 — Sistema de control i equilibri intern",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Omple l'apartat 0 del full: per quina raó creus que el cor s'accelera ABANS d'arrencar? Per quina raó l'orina pot ser clara o fosca?", hints: [] },
      { apartat: "1", title: "Experiments de control nerviós", time: "35 min", phase: "explore", instruction: "Part A: test temps de reacció (5 repeticions, anota distàncies en cm → converteix a ms). Part B: arc reflex en grup. Part C: targetes hormones. Part D: residus invisibles de l'analítica.", hints: [
        "Part A: anota TOTES les distàncies sense arrodonir — la variabilitat és la dada interessant.",
        "Part C: llegeix la targeta EFECTE abans d'encaixar hormona + glàndula + situació."
      ] },
      { apartat: "2", title: "El sistema nerviós i el sistema endocrí", time: "20 min", phase: "explica", instruction: "Omple l'apartat 2: per quina raó el SN actua en mil·lisegons i les hormones en minuts? Completa la taula SN vs. SE amb via, velocitat i exemple.", hints: [
        "Via elèctrica (neurones) vs. via química (hormones per la sang): quin recorregut és més ràpid?",
        "EPO la fabrica el ronyó — per quina raó el Marc, amb ronyó sa, no té problema d'EPO?"
      ] },
      { apartat: "3", title: "Sistema excretor i enigma EPO", time: "15 min", phase: "explica", instruction: "Apartat 3: quins residus produeix el cos? Per on surt cada un? Connecta: EPO → eritròcits → O₂ disponible.", hints: [
        "CO₂ → pulmons; urea i sals → ronyó. Anota-ho al diagrama del full.",
        "ADH: quan el cos en fabrica més, quan beus molt o quan beus poc? Per quina raó?"
      ] },
      { apartat: "4", title: "Integració i homeòstasi", time: "10 min", phase: "explica", instruction: "Apartat 4: completa la taula comparativa (velocitat/durada/exemple) i respon la pregunta de síntesi sobre homeòstasi.", hints: [
        "Homeòstasi = mantenir constant el medi intern (temperatura, glucosa, O₂, pH). El cos usa els dos sistemes."
      ] }
    ]
  },
  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "multiple", text: "Posa en ordre de velocitat: hormona / nervi / reflex", options: ["Reflex (ms) < Nervi voluntari (ms-seg) < Hormona (seg-min)", "Hormona < Nervi < Reflex", "Tots tres actuen a la mateixa velocitat", "Nervi < Reflex < Hormona"], correct: 0 },
    { id: "q2", type: "open", text: "Per quina raó l'adrenalina inhibeix la digestió durant l'exercici físic intens? Usa el concepte de 'prioritat de recursos'.", hint: "El cos no pot donar molta sang als músculs i a l'intestí alhora. Si està fugint o competint, quin dels dos prioritza?" },
    { id: "q3", type: "open", text: "Per quina raó la orina és més fosca quan beus poca aigua? Connecta-ho amb l'ADH i el ronyó.", hint: "Quan en falta, l'ADH ordena al ronyó retenir aigua. Si retens aigua, l'orina queda més diluïda o més concentrada?" }
  ],
  homework: { description: "Cap nova. Porta les dades FC en repòs dels 3 matins (de la feina de S5) — NECESSÀRIES per a S7.", deadline: null },
  recoveryInstructions: [
    "Fes el test temps de reacció a casa: moneda des de 30 cm d'altura, mesura distància caiguda, 5 repeticions",
    "Llegeix la teoria d'aquesta pàgina (SN + SE + excretor)",
    "Omple la fitxa S6 seccions 1–4",
    "Recorda: necessites les dades FC en repòs 3 matins per a S7"
  ],
  oaLinks: ["OA4"], competencies: ["CE2", "CE1", "CE3"]
}
