export const sa2s7 = {
  id: "s7", saId: "sa2",
  title: "Síntesi: resolució dels enigmes + informe FC",
  sessionNumber: 7, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s7-corredor-meta.jpg",
  isFinalSession: true,

  engageQuestion: "Mireu els dos enigmes a la paret. Han estat aquí tota la SA. Qui pot ara explicar TOTA la gràfica FC de la Mercè, d'inici a fi? I l'analítica del Marc Fontana, per quina raó es fatiga tant?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  // Han de coincidir LITERALMENT amb els OA impresos a la fitxa de cada nivell
  // (build_fitxes_s7.py → OA). Revisió 2026-08-20.
  levelObjectives: {
    A: [
      "Quantifico l'enigma 2: calculo quant oxigen porta cada litre de sang del Marc i quanta sang més ha de moure el seu cor per compensar-ho.",
      "Argumento si la recomanació del metge (ferro i tres mesos sense córrer) és adequada, separant-ne les dues parts.",
      "Formulo una hipòtesi sobre el cas nou (G3) amb evidència numèrica i dic quin resultat la refutaria.",
      "Prediuo com canviaria la gràfica del cas nou després del tractament i justifico quins dos trets han de canviar.",
      "Integro els quatre aparells en una sola cadena funcional i mostro com un sol paràmetre (el ferro) els afecta tots."
    ],
    B: [
      "Explico per quina raó la gràfica de la Mercè puja de pressa i baixa a poc a poc.",
      "Explico la cadena de l'enigma 2: ferro baix → hemoglobina baixa → menys oxigen per litre de sang → freqüència cardíaca alta → fatiga.",
      "Escric tres conclusions científiques comparant l'esportista d'elit amb la persona sedentària.",
      "Interpreto una gràfica de freqüència cardíaca nova i formulo una hipòtesi sobre la causa del patró.",
      "Descric el cicle complet: glucosa i oxigen entren, es fa ATP al mitocondri, i el CO₂ i la urea surten."
    ],
    C: [
      "Sé completar la cadena del Marc: falta ferro → menys hemoglobina → menys oxigen → el cor batega més ràpid → fatiga.",
      "Sé mirar una gràfica de freqüència cardíaca i dir si la recuperació és ràpida o lenta.",
      "Sé comparar la gràfica del cas nou (G3) amb la de la Mercè i dir dues diferències.",
      "Sé dir quin aparell aporta la glucosa, quin aporta l'oxigen i quins treuen els residus.",
      "Sé escriure una hipòtesi seguint els quatre passos (Observo → Em pregunto → Connecto → Dedueixo)."
    ]
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui és la sessió de síntesi. Els dos enigmes han estat a la paret tota la SA. Abans de resoldre'ls en grup, escriu individualment el que saps ara — compara-ho amb el que vas escriure a S1.",
    prompts: [
      {
        kind: "write",
        text: "Per quina raó el Marc Fontana es fatigava tant fent exercici? Escriu tota la cadena causal que recordes, de dalt a baix.",
        starter: "El Marc es fatigava perquè..."
      },
      {
        kind: "write",
        text: "La gràfica FC de la Mercè puja molt ràpid i baixa lentament. Per quina raó és asimètrica?",
        starter: "La recuperació és més lenta perquè..."
      }
    ]
  },

  exploreActivity: {
    what: "En parelles, compareu el gràfic G2 (esportista d'elit vs. sedentari) i n'escriviu 3 conclusions en forma d'afirmació científica. Després, individualment i sense ajuda, analitzeu el gràfic G3 (en Nil, 14 anys, el mateix eix de temps que la gràfica de la Mercè) per formular-ne una hipòtesi.",
    who: { mode: "parelles+individual", label: "Parelles (G2) i després individual (G3, avaluació sumativa)" },
    time: 40,
    note: "L'apartat 2 (G3) es recull al final per avaluar individualment (CE4): no es pot demanar ajuda. 18 min de G2 en parelles + 22 min de G3 individual."
  },

  theoryPoints: [
    { id: "t1", apartat: "2", heading: "El cicle complet: entrada → ús → eliminació", text: "==Glucosa|o== (digestiu) + ==O₂|b== (respiratori) → ==ATP|g== al ==mitocondri muscular== (connexió SA1), i d'aquesta reacció en surten ==CO₂|r== i ==aigua|b==, que marxen pels ==pulmons|b==. La ==urea|o== ve d'una altra banda: de les ==proteïnes|o== que sobren, i surt pel ==ronyó|g== amb les sals. Quatre aparells, una sola feina: la ==nutrició==.", type: "synthesis", video: "/animacions/sa2-s7-t1.mp4" },
    { id: "t2", apartat: "2", heading: "Resolució enigma 1 — Gràfica Mercè", text: "Puja ràpid: ==SN simpàtic|b== (ms) + ==adrenalina|o== (30 seg) activen. ==Pic==: màxima demanda d'==ATP|g== dels músculs. ==Recuperació lenta|r==: normalitzar hormones, netejar ==lactat|r==, tornar al ==parasimpàtic==. Asimetria: baixar és sempre ==més lent que pujar|r==.", type: "synthesis", badge: "✅ Enigma 1 — resolt", video: "/animacions/sa2-s7-t2.mp4" },
    { id: "t3", apartat: "3", heading: "Resolució enigma 2 — Analítica Marc", text: "==Ferro baix|r== → menys ==hemoglobina|r== → ==eritròcits petits|r== → cada litre de sang porta molt menys ==O₂|b== → cor compensa amb ==FC alta|r== → els músculs es queden ==sense prou oxigen|r== → ==fatiga precoç|r==. La ==creatinina i urea normals|g== → el ronyó va bé, el problema és el ==ferro|r==.", type: "synthesis", badge: "✅ Enigma 2 — resolt", video: "/animacions/sa2-s7-t3.mp4" }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Gràfica FC de la Mercè (referència)", src: "/images/sa2-g1-merce.svg", note: "Enigma 1, ja resolt. És EXACTAMENT la gràfica de la sessió 5 (repòs 65, meta al minut 55 a 185, per sota de 80 al minut 70). Es manté a la vista per comparar-la amb G3 sense haver de recordar-la." },
    { id: "G2", apartat: "1", title: "Gràfica G2 — esportista d'elit vs. sedentari", src: "/images/sa2-g2-elit-sedentari.svg", note: "Treball en parelles (Explore) i base de comparació per a la Discussió de l'informe. Els dos subjectes tenen 20 anys i fan el mateix esforç." },
    { id: "G3", apartat: "2", title: "Gràfica del cas nou — en Nil, 14 anys", src: "/images/sa2-g3-cas-nou.svg", note: "Avaluació sumativa individual. Mateixa edat que la Mercè, mateixos eixos i mateix llindar que G1: la comparació és legítima. El protocol de cadascú és a la franja de notes de la seva gràfica." }
  ],

  // 2026-08-20: la fitxa impresa A/B/C ja existeix (abans NO n'hi havia cap
  // per a A i B, tot i que la fitxaGuide hi enviava l'alumnat).
  fitxaUrl: { A: "/fitxes/sa2-s7-fitxa-A.html", B: "/fitxes/sa2-s7-fitxa-B.html", C: "/fitxes/sa2-s7-fitxa-C.html" }, teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa Sessió 7 — Síntesi de la unitat",
    steps: [
      { apartat: "0", title: "Els dos enigmes, resolts", time: "12 min", phase: "engage", instruction: "Apartat 0: escriu la cadena del Marc i per quina raó la gràfica de la Mercè és asimètrica. Fes-ho ABANS de la posada en comú.", hints: [
        "A l'enigma 1 hi ha DUES coses que expliquen la baixada lenta: les hormones que s'han d'anar normalitzant i el lactat que s'ha de netejar.",
        "A l'enigma 2, comença pel ferro i no et saltis cap baula fins a la fatiga."
      ] },
      { apartat: "1", title: "Mateix esforç, dos cossos diferents (G2)", time: "18 min", phase: "explora", instruction: "Apartat 1, en parelles: compareu l'esportista d'elit i la persona sedentària i escriviu tres conclusions en forma d'afirmació científica.", hints: [
        "Una afirmació científica porta una dada i una explicació: «fa el mateix esforç a 150 i no a 182, perquè…».",
        "Mireu tres coses diferents: on comencen (repòs), on arriben (pic) i quanta estona triguen a baixar."
      ] },
      { apartat: "2", title: "Un cas que no has vist mai (G3)", time: "22 min", phase: "explora", instruction: "Apartat 2, individual i sense ajuda: analitza la gràfica d'en Nil i formula una hipòtesi. Aquest apartat es recull i s'avalua.", hints: [
        "Llegeix la franja de sota de cada gràfica: hi diu l'edat i quin exercici ha fet cadascú. No és el mateix.",
        "La creatinina i la urea normals indiquen que el ronyó va bé. Quin altre valor caldria mirar?"
      ] },
      { apartat: "3", title: "Quatre aparells, una sola feina", time: "18 min", phase: "explica", instruction: "Apartat 3: completa el cicle complet (glucosa i O₂ entren → ATP al mitocondri → CO₂ i urea surten) i explica com una sola mancança, el ferro, acaba afectant-ho tot.", hints: [
        "Quin aparell aporta la glucosa? Quin aporta l'oxigen? Quins dos treuen residus, i quin residu cadascun?",
        "Si un pas de la cadena falla, els altres han de treballar més per compensar-ho. Això és el que li passa al cor del Marc."
      ] },
      { apartat: "4", title: "L'informe de la vostra freqüència cardíaca", time: "30 min", phase: "elabora", instruction: "Apartat 4, en parelles amb rols: Rol A fa Mètode i Resultats; Rol B fa Discussió i Conclusions; la pregunta d'investigació la feu junts. S'entrega a Classroom.", hints: [
        "Si no tens les teves dades d'S5, fes servir el joc de reserva (la Berta) que hi ha a la mateixa fitxa i digues-ho a l'informe.",
        "Els Resultats són només dades: cap explicació. L'explicació va a la Discussió."
      ] }
    ]
  },
  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Mira la gràfica G3 (a sobre). Descriu el que veus i formula una hipòtesi: per quina raó aquesta persona té un patró tan diferent de la Mercè? Quin valor de l'analítica creus que estaria alterat?", hint: "Compara la forma amb la de la Mercè: puja igual? Recupera igual de ràpid? Lliga la diferència amb un valor concret de l'analítica." },
    { id: "q2", type: "open", text: "El metge recomana a Marc Fontana que prengui ferro i deixi de córrer 3 mesos. A partir del que has après, per quina raó creus que és (o no és) una recomanació adequada?", hint: "Pensa en les dues parts per separat: el ferro ataca la causa (l'anèmia)? I deixar de córrer del tot, ajuda o no a recuperar-se?" }
  ],
  exitTicketNote: "Avaluació sumativa CE1 + CE4. Individual, sense ajuda. Hi ha versió EN PAPER per a qui no tingui dispositiu: exit_ticket_s7_VISUAL.html (A i B) i exit_ticket_s7_C_VISUAL.html (C). El full de paper porta les MATEIXES DUES preguntes obertes d'aquí, i a més dues de tancades autocorrectives sobre les gràfiques. Qui fa el formulari de Google respon les tancades allà: ningú fa una prova més llarga que un altre.",

  deliverables: [
    { name: "Informe FC en parelles (Rols A + B)", note: "Entrega a Classroom. Termini 1 setmana si no s'acaba a classe." }
  ],

  reportStructure: {
    title: "Informe FC — estructura",
    roles: {
      A: "Investigador/a de camp: Secció 2 (Mètode: protocol, materials, condicions) + Secció 3 (Resultats: taula + gràfica FC personal). Si no tens les teves dades, usa el JOC DE DADES DE RESERVA (la Berta).",
      B: "Analista: Secció 4 (Discussió: per quina raó la FC va canviar, zones aeròbica/anaeròbica, comparació amb G1 i G2) + Secció 5 (Conclusions: resposta a la pregunta d'investigació)"
    },
    sections: ["1. Pregunta d'investigació (conjunt)", "2. Mètode [Rol A]", "3. Resultats [Rol A]", "4. Discussió [Rol B]", "5. Conclusions [Rol B]"]
  },

  reserveDataset: {
    title: "Joc de dades de reserva — la Berta (14 anys)",
    when: "Fes-lo servir NOMÉS si vas faltar o no tens les teves dades d'S5/S6. Així tothom pot completar Mètode i Resultats.",
    subject: "Berta, 14 anys. Sense problemes de salut (patró NORMAL, per contrast amb el Marc).",
    method: "FC en repòs mesurada 3 matins en despertar-se (30 s × 2). Després, prova d'esforç: 3 min de repòs, 2 min de cursa A FONS, 7 min de recuperació asseguda.",
    restingMornings: [
      { day: "Matí 1", fc: 70 },
      { day: "Matí 2", fc: 74 },
      { day: "Matí 3", fc: 72 }
    ],
    restingMean: 72,
    fcMaxTeorica: 206,          // 220 − 14
    llindarAnaerobic: 175,      // ~0,85 × FCmàx
    exerciseSeries: [
      { t: 0, fc: 73 }, { t: 1, fc: 72 }, { t: 2, fc: 74 }, { t: 3, fc: 72 },
      { t: 4, fc: 132 }, { t: 5, fc: 178 }, { t: 6, fc: 141 }, { t: 7, fc: 118 },
      { t: 8, fc: 104 }, { t: 9, fc: 96 }, { t: 10, fc: 90 }, { t: 11, fc: 87 }, { t: 12, fc: 85 }
    ],
    graphic: { id: "GR", title: "Gràfica FC de la Berta (dades de reserva)", src: "/images/sa2-s7-dades-reserva.svg" },
    note: "Pic ~178 bpm (just per sobre del llindar anaeròbic 175: toca la zona anaeròbica un moment, i per això la cursa és curta i a fons) i recuperació RÀPIDA: en 5 min ja torna a prop del repòs. És el patró sa que serveix de base per a la Discussió."
  },

  homework: { description: "Acabar l'informe FC i entregar a Classroom.", deadline: "2026-XX-XX (1 setmana)" },

  recoveryInstructions: [
    "Fes la gràfica G3 individualment (descàrrega a ELABORA): respon les 4 preguntes sense ajuda",
    "Fes el formulari G3 i analítica online (apartat EXIT TIQUET)",
    "Per a l'informe: contacta amb el/la teu/teva company/a de parella i repartiu-vos les seccions. Entrega les teves seccions a Classroom.",
    "Si no tens les teves dades de FC (vas faltar a S5/S6): usa el JOC DE DADES DE RESERVA (la Berta) per completar Mètode i Resultats."
  ],
  // CE5 afegida 2026-08-20: la pregunta 4 del full de sortida (als TRES nivells)
  // demana valorar una recomanació de salut a partir de la fisiologia, que és
  // literalment el que descriu el criteri 5.3. Fins avui es declarava a
  // l'Estructura de la SA però no aquí.
  oaLinks: ["OA1", "OA2", "OA3", "OA4", "OA5"], competencies: ["CE1", "CE2", "CE4", "CE5"]
}
