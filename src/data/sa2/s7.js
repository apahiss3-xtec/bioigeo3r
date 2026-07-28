export const sa2s7 = {
  id: "s7", saId: "sa2",
  title: "Síntesi: resolució dels enigmes + informe FC",
  sessionNumber: 7, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s7-corredor-meta.jpg",
  isFinalSession: true,

  engageQuestion: "Mireu els dos enigmes a la paret. Han estat aquí tota la SA. Qui pot ara explicar TOTA la gràfica FC de la Mercè, d'inici a fi? I l'analítica del Marc Fontana, per quina raó es fatiga tant?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Construeixo la cadena causal completa de l'enigma 2 (ferro → Hb → eritròcits → O₂/L sang → FC → fatiga) i proposo un tractament raonat.",
      "Explico per quina raó la recomanació del metge (ferro + repòs) és o no és adequada des del punt de vista fisiològic.",
      "Comparo la gràfica G3 (cas nou) amb la de la Mercè i formulo una hipòtesi sobre el diagnòstic possible, amb evidència concreta.",
      "Sintetitzo els 4 aparells (digestiu, respiratori, circulatori, excretor) en una sola cadena funcional i n'explico les interdependències."
    ],
    B: [
      "Explico la resolució de l'enigma 1: per quina raó la gràfica FC de la Mercè és asimètrica (puja ràpid, baixa lent).",
      "Explico la resolució de l'enigma 2: la cadena causal ferro baix → Hb baixa → menys O₂/sang → FC alta → fatiga.",
      "Descric el cicle complet: glucosa (digestiu) + O₂ (respiratori) → ATP al mitocondri → residus (CO₂ i urea) eliminats.",
      "Interpreto una gràfica FC nova (G3) i formulo una hipòtesi sobre la causa del patró diferent."
    ],
    C: [
      "Completo la cadena: ferro baix → menys _______ → menys _______ als músculs → cor bat _______ → fatiga.",
      "Reconec en la gràfica de la Mercè: el tram que puja ràpid correspon a _______ i el tram que baixa lentament correspon a _______.",
      "Associo cada aparell a la seva funció: digestiu → porta _______ · respiratori → porta _______ · ronyó → elimina _______.",
      "Sé dir que el Marc es fatigava perquè la seva sang portava _______ O₂ del normal per cada litre."
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
    what: "En parelles, compareu el gràfic G2 (esportista d'elit vs. sedentari) i n'escriviu 3 conclusions en forma d'afirmació científica. Després, individualment i sense ajuda, analitzeu el gràfic G3 (cas nou, sense anotacions) per inferir-ne el diagnòstic.",
    who: { mode: "parelles+individual", label: "Parelles (G2) i després individual (G3, avaluació sumativa)" },
    time: 35,
    note: "G3 es recull al final per avaluar individualment (CE4): no es pot demanar ajuda."
  },

  theoryPoints: [
    { id: "t1", apartat: "2", heading: "El cicle complet: entrada → ús → eliminació", text: "==Glucosa|o== (digestiu) + ==O₂|b== (respiratori) → ==ATP|g== al ==mitocondri muscular== (connexió SA1). ==CO₂|r== surt pels ==pulmons|b==. ==Urea, sals i aigua|o== pel ==ronyó|g==. Quatre aparells, una sola feina: la ==nutrició==.", type: "synthesis", video: "/animacions/sa2-s7-t1.mp4" },
    { id: "t2", apartat: "2", heading: "Resolució enigma 1 — Gràfica Mercè", text: "Puja ràpid: ==SN simpàtic|b== (ms) + ==adrenalina|o== (30 seg) activen. ==Pic==: màxima demanda d'==ATP|g== dels músculs. ==Recuperació lenta|r==: normalitzar hormones, netejar ==lactat|r==, tornar al ==parasimpàtic==. Asimetria: baixar és sempre ==més lent que pujar|r==.", type: "synthesis", badge: "✅ Enigma 1 — resolt", video: "/animacions/sa2-s7-t2.mp4" },
    { id: "t3", apartat: "3", heading: "Resolució enigma 2 — Analítica Marc", text: "==Ferro baix|r== → menys ==hemoglobina|r== → ==eritròcits petits|r== → cada litre de sang porta molt menys ==O₂|b== → cor compensa amb ==FC alta|r== → músculs en ==anèmia aeròbica|r== → ==fatiga precoç|r==. La ==creatinina i urea normals|g== → el ronyó va bé, el problema és el ==ferro|r==.", type: "synthesis", badge: "✅ Enigma 2 — resolt", video: "/animacions/sa2-s7-t3.mp4" }
  ],

  graphicResources: [
    { id: "G1", apartat: "3", title: "Gràfica FC de la Mercè (referència)", src: "/images/sa2-g1-merce.svg", note: "Enigma 1, ja resolt. Es manté a la vista com a REFERÈNCIA per comparar amb G3 (no cal analitzar-la de memòria)." },
    { id: "G2", apartat: "3", title: "Gràfica G2 — esportista d'elit vs. sedentari", src: "/images/sa2-g2-elit-sedentari.svg", note: "Treball en parelles (Explore) i base de comparació per a la Discussió de l'informe." },
    { id: "G3", apartat: "3", title: "Gràfica cas individual nou", src: "/images/sa2-g3-cas-nou.svg", note: "Sense anotacions. Avaluació sumativa individual. Alumne ha d'inferir el diagnòstic COMPARANT amb G1 (a la vista)." }
  ],

  fitxaUrl: null, teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S7 — Síntesi SA2",
    steps: [
      { apartat: "0", title: "Idees prèvies — revisió individual", time: "5 min", phase: "engage", instruction: "Omple l'apartat 0: escriu ara el que saps dels dos enigmes, SENSE mirar les notes. Compara-ho amb el que vas escriure a S1.", hints: [] },
      { apartat: "2", title: "El cicle complet i resolució enigma 1", time: "25 min", phase: "explica", instruction: "Apartat 2: completa el diagrama del cicle complet (digestiu+respiratori→mitocondri→excretor) i anota la resolució de la gràfica FC de la Mercè.", hints: [
        "Cada aparell fa UNA funció clau al cicle. Quin aporta glucosa? Quin aporta O₂? Quins treuen residus?",
        "Gràfica FC: per quina raó puja ràpid (SN simpàtic) i baixa lentament (normalitzar hormones + lactat)?"
      ] },
      { apartat: "3", title: "Resolució enigma 2 i gràfica G3", time: "25 min", phase: "explica", instruction: "Apartat 3: escriu la cadena causal (ferro→Hb→eritròcits→O₂→FC→fatiga). Analitza la gràfica G3 individualment i sense ajuda.", hints: [
        "G3: compara la forma amb la de la Mercè. Puja igual de ràpid? La recuperació és diferent? Quin valor de l'analítica estaria alterat?",
        "Recorda: creatinina i urea normals indiquen ronyó sa. Quin altre valor caldria mirar?"
      ] }
    ]
  },
  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Mira la gràfica G3 (a sobre). Descriu el que veus i formula una hipòtesi: per quina raó aquesta persona té un patró tan diferent de la Mercè? Quin valor de l'analítica creus que estaria alterat?", hint: "Compara la forma amb la de la Mercè: puja igual? Recupera igual de ràpid? Lliga la diferència amb un valor concret de l'analítica." },
    { id: "q2", type: "open", text: "El metge recomana a Marc Fontana que prengui ferro i deixi de córrer 3 mesos. A partir del que has après, per quina raó creus que és (o no és) una recomanació adequada?", hint: "Pensa en les dues parts per separat: el ferro ataca la causa (l'anèmia)? I deixar de córrer del tot, ajuda o no a recuperar-se?" }
  ],
  exitTicketNote: "Avaluació sumativa CE1 + CE4. Individual, sense ajuda.",

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
    method: "FC en repòs mesurada 3 matins en despertar-se (30 s × 2). Després, prova d'esforç: 3 min de repòs, 2 min de cursa suau, 7 min de recuperació asseguda.",
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
    note: "Pic ~178 bpm (just per sobre del llindar anaeròbic 175: toca la zona anaeròbica un moment) i recuperació RÀPIDA: en 5 min ja torna a prop del repòs. És el patró sa que serveix de base per a la Discussió."
  },

  homework: { description: "Acabar l'informe FC i entregar a Classroom.", deadline: "2026-XX-XX (1 setmana)" },

  recoveryInstructions: [
    "Fes la gràfica G3 individualment (descàrrega a ELABORA): respon les 4 preguntes sense ajuda",
    "Fes el formulari G3 i analítica online (apartat EXIT TIQUET)",
    "Per a l'informe: contacta amb el/la teu/teva company/a de parella i repartiu-vos les seccions. Entrega les teves seccions a Classroom.",
    "Si no tens les teves dades de FC (vas faltar a S5/S6): usa el JOC DE DADES DE RESERVA (la Berta) per completar Mètode i Resultats."
  ],
  oaLinks: ["OA1", "OA2", "OA3", "OA4"], competencies: ["CE1", "CE2", "CE4"]
}
