export const sa2s7 = {
  id: "s7", saId: "sa2",
  title: "Síntesi: tanquem els dos enigmes",
  sessionNumber: 7, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s7-corredor-meta.jpg",
  isFinalSession: true,
  guiaPerApartats: true,

  engageQuestion: "Mireu els dos enigmes a la paret. Han estat aquí tota la unitat. Qui pot ara explicar TOTA la gràfica de freqüència cardíaca de la Mercè, d'inici a fi? I l'analítica del Marc Fontana, per quina raó es fatiga tant?",

  // ── OBJECTIUS D'APRENENTATGE PER VERSIÓ (A/B/C) ──────────
  // Han de coincidir LITERALMENT amb els OA impresos a la fitxa de cada versió
  // (build_fitxes_s7.py → OA).
  levelObjectives: {
    A: [
      "Quantifico l'enigma 2: calculo quant oxigen porta cada litre de sang del Marc i quanta sang més ha de moure el seu cor per compensar-ho.",
      "Argumento si la recomanació del metge (ferro i tres mesos sense córrer) és adequada, separant-ne les dues parts.",
      "Formulo una hipòtesi sobre el cas nou (G3) amb evidència numèrica i dic quin resultat la refutaria.",
      "Predic com canviaria la gràfica del cas nou després del tractament i justifico quins dos trets han de canviar.",
      "Integro els quatre aparells en una sola cadena funcional i mostro com un sol paràmetre (el ferro) els afecta tots."
    ],
    B: [
      "Explico per quina raó la gràfica de la Mercè puja de pressa i baixa a poc a poc.",
      "Explico la cadena de l'enigma 2, del ferro a la fatiga, sense saltar-me cap baula.",
      "Escric tres conclusions científiques comparant l'esportista d'elit amb la persona sedentària.",
      "Interpreto una gràfica de freqüència cardíaca nova i formulo una hipòtesi sobre la causa del patró.",
      "Descric el cicle complet: glucosa i oxigen entren, es fa ATP al mitocondri, i el CO₂ i la urea surten."
    ],
    C: [
      "Sé completar la cadena del Marc, de la falta de ferro a la fatiga.",
      "Sé mirar una gràfica de freqüència cardíaca i dir si la recuperació és ràpida o lenta.",
      "Sé comparar la gràfica del cas nou (G3) amb la de la Mercè i dir dues diferències.",
      "Sé dir quin aparell aporta la glucosa, quin aporta l'oxigen i quins treuen els residus.",
      "Sé escriure una hipòtesi seguint els quatre passos (Observo → Em pregunto → Connecto → Dedueixo)."
    ]
  },

  // ── APARTAT 0 · REPÀS DE TOTA LA UNITAT (mateixes preguntes que la fitxa B) ──
  repas: {
    startPoint: "Els dos enigmes han estat a la paret tota la unitat i has anat trobant les peces sessió rere sessió. Avui les recuperes de memòria abans de fer-les servir.",
    prompts: [
      { text: "La glucosa (sessions 1 i 2). La Mercè ha dinat abans de la cursa. On passa la glucosa a la sang, i què en fa el mitocondri del múscul?" },
      { text: "Enigma 2, en Marc Fontana (sessions 3 i 4). Escriu tota la cadena que explica per quina raó es fatiga tant: comença pel ferro i acaba a la fatiga. Quina cavitat del cor envia aquesta sang a tot el cos?" },
      { text: "Enigma 1, la Mercè (sessions 5 i 6). La seva gràfica puja de pressa i baixa a poc a poc. Per quina raó és asimètrica?" },
      { text: "El ronyó (sessió 6). Mira l'analítica del Marc a la teva fitxa. Què et diuen la urea i la creatinina normals sobre el seu problema?" }
    ],
    note: "Primer de memòria. Després comprova-ho a les teves fitxes de les sessions 2, 3, 5 i 6, i ho posem en comú."
  },

  exploreActivity: {
    what: "En parelles, compareu el gràfic G2 (esportista d'elit vs. sedentari) i n'escriviu 3 conclusions en forma d'afirmació científica. Després, individualment i sense ajuda, analitzeu el gràfic G3 (en Nil, 14 anys, el mateix eix de temps que la gràfica de la Mercè) per formular-ne una hipòtesi.",
    who: { mode: "parelles+individual", label: "Parelles (G2) i després individual (G3, avaluació sumativa)" },
    time: 42,
    note: "L'apartat 2 (G3) és individual: no pots demanar ajuda. Comptem uns 18 min per a G2 en parelles i uns 24 min per a G3 sol o sola."
  },

  // Tota la teoria va a l'apartat 3: l'apartat 0 es fa de memòria i l'apartat 2
  // (G3) es recull. La cadena del Marc abans del G3 serviria de plantilla per
  // a la hipòtesi d'en Nil.
  theoryPoints: [
    { id: "t1", apartat: "3", heading: "El cicle complet: entrada → ús → eliminació", text: "==Glucosa|o== (digestiu) + ==O₂|b== (respiratori) → ==ATP|g== al ==mitocondri muscular== (connexió SA1), i d'aquesta reacció en surten ==CO₂|r== i ==aigua|b==, que marxen pels ==pulmons|b==. La ==urea|o== ve d'una altra banda: de les ==proteïnes|o== que sobren, i surt pel ==ronyó|g== amb les sals. Quatre aparells, una sola feina: la ==nutrició==.", type: "synthesis", video: "/animacions/sa2-s7-t1.mp4" },
    { id: "t2", images: [{"src":"images/sa2-fotos/s7-t2.jpg","caption":"Línia d'arribada d'una marató: el cor s'adapta a l'esforç i després es recupera.","credit":"John Marino · CC0 · Wikimedia Commons"}], apartat: "3", heading: "Resolució enigma 1 — Gràfica Mercè", text: "Puja ràpid: ==SN simpàtic|b== (ms) + ==adrenalina|o== (30 seg) activen. ==Pic==: màxima demanda d'==ATP|g== dels músculs. ==Recuperació lenta|r==: normalitzar hormones, netejar ==lactat|r==, tornar al ==parasimpàtic==. Asimetria: baixar és sempre ==més lent que pujar|r==.", type: "synthesis", badge: "✅ Enigma 1 — resolt" },
    { id: "t3", images: [{"src":"images/sa2-fotos/s7-t3.jpg","caption":"Glòbuls vermells més petits del normal (microcitosi): una pista clau en una analítica.","credit":"Prof. Osaro Erhabor · CC0 · Wikimedia Commons"}], apartat: "3", heading: "Resolució enigma 2 — Analítica Marc", text: "==Ferro baix|r== → menys ==hemoglobina|r== → ==eritròcits petits|r== → cada litre de sang porta molt menys ==O₂|b== → cor compensa amb ==FC alta|r== → els músculs es queden ==sense prou oxigen|r== → ==fatiga precoç|r==. La ==creatinina i urea normals|g== → el ronyó va bé, el problema és el ==ferro|r==.", type: "synthesis", badge: "✅ Enigma 2 — resolt" }
  ],

  // Mateix ordre que la fitxa B: G2 a l'apartat 1; G1 i G3 a l'apartat 2.
  graphicResources: [
    { id: "G2", apartat: "1", before: true, title: "Mateix esforç, dues persones de 20 anys", src: "/images/sa2-g2-elit-sedentari.svg", caption: "Dues persones de 20 anys fan el mateix esforç de 5 minuts. Mireu tres coses: on comença cada corba, on arriba i quanta estona triga a baixar.", note: "Es treballa en parelles i serveix de base de comparació per a la Discussió de l'informe." },
    { id: "G1", apartat: "2", before: true, title: "La Mercè (14 anys) — cursa de 10 km", src: "/images/sa2-g1-merce.svg", caption: "La gràfica que ja vas analitzar a la sessió 5. La tens aquí per comparar-la amb la d'en Nil: llegeix la franja de sota per saber quin esforç va fer.", note: "Enigma 1: repòs 65, 185 al minut 55, per sota de 80 al minut 70." },
    { id: "G3", apartat: "2", before: true, title: "Cas nou — en Nil, 14 anys", src: "/images/sa2-g3-cas-nou.svg", caption: "Gràfica nova, mateixos eixos que la de la Mercè. Llegeix la franja de sota per saber quin esforç ha fet en Nil, i busca-hi els números que et demana la fitxa.", note: "Avaluació individual: el peu no ha de dir res de la causa. Mateixa edat, eixos i llindar que G1." }
  ],

  // 2026-08-20: la fitxa impresa A/B/C ja existeix (abans NO n'hi havia cap
  // per a A i B, tot i que la fitxaGuide hi enviava l'alumnat).
  fitxaUrl: { A: "/fitxes/sa2-s7-fitxa-A.html", B: "/fitxes/sa2-s7-fitxa-B.html", C: "/fitxes/sa2-s7-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa2-s7-teoria.pdf",

  sessionMaterials: [
    { id: "fitxaAcollidaUR", title: "Fitxa de la sessió · acollida (urdú)", url: "/fitxes/sa2-s7-fitxa-acollida-UR.html", who: "alumnat d'acollida: mateixos apartats que la classe" },
    { id: "fitxaAcollidaAR", title: "Fitxa de la sessió · acollida (àrab)", url: "/fitxes/sa2-s7-fitxa-acollida-AR.html", who: "alumnat d'acollida: mateixos apartats que la classe" },
    { id: "sortida", title: "Exit tiquet (versions A i B)", url: "/fitxes/sa2-s7-exit-ticket.html", who: "per al final de la sessió" },
    { id: "sortidaC", title: "Exit tiquet (versió C)", url: "/fitxes/sa2-s7-exit-ticket-C.html", who: "per al final de la sessió" },
    { id: "rubrica", title: "Rúbrica de l'informe FC", url: "/fitxes/sa2-s7-rubrica-informe.html", who: "consulta-la des del primer minut de l'apartat 4" }
  ],

  fitxaGuide: {
    fitxaName: "Fitxa Sessió 7 — Síntesi de la unitat",
    steps: [
      { apartat: "—", title: "Formulari de comprensió de la lectura", time: "5 min", phase: "engage", instruction: "Abans de començar la fitxa, fes el formulari de comprensió (Google Forms) de la lectura de la sessió 7 que havies de llegir a casa.", hints: [] },
      { apartat: "0", title: "Repàs — les peces dels dos enigmes", time: "10 min", phase: "engage", instruction: "Apartat 0, sol o sola i sense mirar res: respon de memòria les preguntes que recuperen les peces de les sessions anteriors. Després comprova-ho a les teves fitxes i ho posem en comú.", hints: [
        "A l'enigma 1 hi ha DUES coses que expliquen la baixada lenta: què ha de fer el cos amb les hormones que ha alliberat, i què ha d'eliminar dels músculs.",
        "A l'enigma 2, comença pel ferro i no et saltis cap baula fins a la fatiga."
      ] },
      { apartat: "1", title: "Mateix esforç, dos cossos diferents", time: "18 min", phase: "explora", instruction: "Apartat 1, en parelles: compareu l'esportista d'elit i la persona sedentària a la gràfica G2 i escriviu tres conclusions en forma d'afirmació científica: una sobre el repòs, una sobre el pic i una sobre la recuperació.", hints: [
        "Una afirmació científica porta una dada i una explicació: «fa el mateix esforç a 150 i no a 182, perquè…».",
        "Mireu tres coses diferents: on comencen (repòs), on arriben (pic) i quanta estona triguen a baixar."
      ] },
      { apartat: "2", title: "Un cas que no has vist mai", time: "24 min", phase: "explora", instruction: "Apartat 2, individual i sense ajuda: analitza la gràfica d'en Nil (G3) i formula una hipòtesi. Aquest apartat es recull i s'avalua. Ho tens tot a la fitxa: tanca el web fins que l'hagis acabat.", hints: [
        "Llegeix la franja de sota de cada gràfica: hi diu l'edat i quin exercici ha fet cadascú. No és el mateix.",
        "Cada afirmació ha de portar un número llegit a la gràfica. Una hipòtesi ben raonada i equivocada val més que un encert sense arguments."
      ] },
      { apartat: "3", title: "Quatre aparells, una sola feina", time: "18 min", phase: "explica", instruction: "Apartat 3: completa el cicle complet (glucosa i O₂ entren → ATP al mitocondri → CO₂ i urea surten) i explica com una sola mancança, el ferro, acaba afectant-ho tot.", hints: [
        "Quin aparell aporta la glucosa? Quin aporta l'oxigen? Quins dos treuen residus, i quin residu cadascun?",
        "Si un pas de la cadena falla, els altres han de treballar més per compensar-ho. Això és el que li passa al cor del Marc."
      ] },
      { apartat: "4", title: "L'informe de la vostra freqüència cardíaca", time: "25 min", phase: "elabora", instruction: "Apartat 4, en parelles amb rols: Rol A fa Mètode i Resultats; Rol B fa Discussió i Conclusions; la pregunta d'investigació la feu junts. Llegiu la rúbrica abans de començar (és a «Materials», més avall, amb l'estructura de l'informe). S'entrega a Classroom.", hints: [
        "Si no tens les teves dades de la sessió 5, fes servir el joc de reserva (la Berta) que hi ha a la mateixa fitxa i digues-ho a l'informe.",
        "Els Resultats són només dades: cap explicació. L'explicació va a la Discussió."
      ] },
      { apartat: "—", title: "Final de la unitat: torna als objectius", time: "8 min", phase: "elabora", instruction: "A l'últim full de la fitxa: marca els objectius que has aconseguit i respon les tres preguntes finals. Ves a buscar el que vas escriure el primer dia de la unitat i el dibuix del cor d'abans de la dissecció.", hints: [] },
      { apartat: "—", title: "Full d'avaluació final", time: "12 min", phase: "elabora", instruction: "Abans de marxar, individual: respon el full d'avaluació final i entrega'l amb l'apartat 2 de la fitxa.", hints: [] }
    ]
  },
  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Mira la gràfica G3 (a sobre). Descriu el que veus i formula una hipòtesi: per quina raó aquesta persona té un patró tan diferent de la Mercè? Quin valor de l'analítica creus que estaria alterat?", hint: "Compara la forma amb la de la Mercè: puja igual? Recupera igual de ràpid? Lliga la diferència amb un valor concret de l'analítica." },
    { id: "q2", type: "open", text: "El metge recomana a Marc Fontana que prengui ferro i deixi de córrer 3 mesos. A partir del que has après, per quina raó creus que és (o no és) una recomanació adequada?", hint: "Pensa en les dues parts per separat: el ferro ataca la causa (l'anèmia)? I deixar de córrer del tot, ajuda o no a recuperar-se?" }
  ],
  exitTicketNote: "Aquest exit tiquet és individual i sense ajuda. Si no tens dispositiu, tens la versió en paper a l'apartat de materials; porta només la pregunta q1 (gràfica G3 del Nil + hipòtesi).",

  deliverables: [
    { name: "Informe FC en parelles (Rols A + B)", note: "Entrega a Classroom. Termini 1 setmana si no s'acaba a classe. Rúbrica: /fitxes/sa2-s7-rubrica-informe.html" }
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
    when: "Fes-lo servir NOMÉS si vas faltar o no tens les teves dades de les sessions 5 o 6. Així tothom pot completar Mètode i Resultats.",
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
    note: "Pic ~178 bat/min (just per sobre del llindar anaeròbic 175: toca la zona anaeròbica un moment, i per això la cursa és curta i a fons) i recuperació RÀPIDA: en 5 min ja torna a prop del repòs. És el patró sa que serveix de base per a la Discussió."
  },

  homework: { description: "Acabar l'informe FC i entregar a Classroom en un termini d'una setmana." },

  recoveryInstructions: [
    "Baixa la fitxa i fes l'apartat 0 de memòria; després comprova-ho a les teves fitxes de les sessions anteriors.",
    "Fes l'apartat 1 amb la gràfica G2 i escriu-ne les tres conclusions.",
    "Fes l'apartat 2 (gràfica d'en Nil) sol o sola i sense ajuda, i NO miris l'apartat 3 fins que l'hagis acabat. Entrega'l al teu professor o professora.",
    "Fes l'apartat 3 amb la teoria que hi ha en aquest apartat del web.",
    "Apartat 4, l'informe: contacta amb el/la teu/teva company/a de parella i repartiu-vos les seccions. Entrega les teves seccions a Classroom. Si vas faltar a les sessions 5 o 6 i no tens dades de freqüència cardíaca, usa el joc de reserva (la Berta) per completar Mètode i Resultats.",
    "Fes el formulari de la gràfica d'en Nil i l'analítica (l'exit tiquet en línia, a l'acordió de sota)."
  ],
  // CE5: la pregunta 4 del full de sortida (a les TRES versions)
  // demana valorar una recomanació de salut a partir de la fisiologia, que és
  // literalment el que descriu el criteri 5.3.
  oaLinks: ["OA1", "OA2", "OA3", "OA4"], competencies: ["CE1", "CE2", "CE4", "CE5"]
}
