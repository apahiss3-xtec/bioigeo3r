export const sa2s5 = {
  id: "s5", saId: "sa2",
  title: "Respiració i esforç: la freqüència cardíaca",
  sessionNumber: 5, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s5-fc-esport.jpg",
  isKeySession: true,
  guiaPerApartats: true,

  // Repte oral curt: la hipòtesi escrita es fa a l'inici de l'apartat 1 de la fitxa.
  engageChallenge: "Tornem als dos enigmes de la paret. La Mercè: per quina raó la seva FC puja de pressa i baixa a poc a poc? El Marc Fontana, amb l'hemoglobina a 9,2 g/dL: per quina raó, fent el mateix esforç que tu, arriba abans al límit? Avui tens les teves pròpies dades per començar a respondre.",
  engageQuestion: "Si ara et posessis a saltar dos minuts, què creus que li passaria al teu cor? En parlem un moment abans de començar.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (iguals que a les fitxes A/B/C) ──
  levelObjectives: {
    A: [
      "Analitzo críticament la nostra mesura de FC com a investigació científica (mostra, condicions, variabilitat).",
      "Construeixo la cadena causal completa: esforç → més ATP → més O₂ → el cor i els pulmons s'acceleren.",
      "Interpreto i comparo gràfiques de FC (G1 i G2) i en redacto conclusions argumentades.",
      "Predic com respondrà al mateix esforç el cor d'una persona amb anèmia i ho justifico amb l'hemoglobina."
    ],
    B: [
      "Mesuro la meva FC en repòs, exercici i recuperació, i represento les dades en una gràfica pròpia.",
      "Explico per quina raó augmenta la FC durant l'exercici (més O₂ per als mitocondris dels músculs).",
      "Calculo la FCmàx (220 − edat) i distingeixo la zona aeròbica de l'anaeròbica.",
      "Interpreto gràfiques de FC reals (la Mercè, esportista vs. sedentari) i explico les diferències."
    ],
    C: [
      "Sé mesurar el meu pols al canell i calcular els batecs per minut.",
      "Sé que quan faig exercici el cor batega més ràpid perquè els músculs necessiten més oxigen.",
      "Sé calcular la meva FC màxima amb la fórmula 220 − edat.",
      "Sé llegir una gràfica de FC: trobar el pic i veure quan torna al repòs.",
      "Sé que una persona entrenada es recupera més ràpid que una de sedentària."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Per calcular la FC: compta els batecs durant 15 segons i multiplica per 4. Omple: repòs: ___ × 4 = ___ bat/min · just en parar: ___ × 4 = ___ bat/min · recuperació, minut 1: ___ × 4 = ___ bat/min. La meva FCmàx estimada (220 − edat) = ___.",
      challenge: "Les nostres dades tindrien problemes per publicar-se en una revista científica. Identifica 3 limitacions metodològiques (pensa en: control, rèpliques, precisió de mesura, factors de confusió). Per a cada una, proposa com es podria resoldre."
    },
    "2": {
      scaffold: "Tria l'escala de l'eix vertical: mira el teu valor MÉS ALT i el MÉS BAIX, i deixa-hi una mica de marge. Cada punt de la gràfica és un moment de la taula: Rep 0', Rep 1', Rep 2', Exercici, Rec 1', Rec 2', Rec 3', Rec 4', Rec 5'. Uneix els punts amb una línia.",
      challenge: "Compara la teva corba amb les dades del company o companya de la taula. Identifica 2 diferències amb valors concrets i proposa quins factors personals les podrien explicar."
    },
    "3": {
      scaffold: "Per llegir un punt: posa el dit sobre la línia. Baixa fins a l'eix horitzontal per saber el minut i ves cap a l'esquerra per saber la FC.",
      challenge: "Explica per quina raó la recuperació de la Mercè és més lenta que la pujada. Fes servir: sistema nerviós simpàtic, adrenalina, àcid làctic. Després compara-la amb la teva gràfica de l'apartat 2: què s'hi assembla i què no?"
    },
    "4": {
      challenge: "Prediu com seria, en aquest mateix esforç, la corba d'una persona amb l'hemoglobina baixa, i justifica-ho amb el que vas veure a la sessió 3."
    }
  },

  // ── APARTAT 0 · REPÀS DE LES SESSIONS 3 I 4 ───────────────
  repas: {
    prompts: [
      { text: "A l'analítica de la sessió 3, el Marc Fontana té l'hemoglobina baixa. Quina feina fa l'hemoglobina, i dins de quines cèl·lules de la sang es troba?" },
      { text: "La sang fa dues voltes. Cap a on va cadascuna, i en quina es carrega d'O₂?" },
      { text: "Quin ventricle té la paret més gruixuda? Per quina raó?" },
      { text: "Per a què serveixen les vàlvules del cor?" }
    ],
    note: "Primer de memòria. Després comprova-ho a les teves fitxes de les sessions 3 i 4."
  },

  exploreActivity: {
    what: "Mesura la teva pròpia freqüència cardíaca: en repòs (minuts 0, 1 i 2), just en parar després de 2 minuts d'exercici i durant la recuperació (un cop cada minut, fins al minut 5).",
    who: { mode: "parelles", label: "Per parelles (tota la classe alhora, mateix protocol)" },
    time: 35,
    note: "Primer mesures tu i el company o companya et compta el temps; després ho feu al revés. Si et mareges o et fa mal el pit, para immediatament i avisa el professor."
  },
  exploreInstructions: [
    "Com es pren: 2 dits (índex i mig, mai el polze) al canell o al coll, prement fluix. Compta els batecs durant 15 segons i multiplica × 4.",
    "Repòs: asseguts en silenci, mesura als minuts 0, 1 i 2. Apunta cada valor a la taula.",
    "Exercici, 2 minuts: salt a peu coix, cursa al passadís o, si no pots saltar, elevacions ràpides de braços assegut/da.",
    "Just en parar: mesura la FC en aquell mateix segon.",
    "Recuperació: mesura un cop cada minut fins al minut 5.",
    "Apunta també les dades del company o companya i calcula'n la diferència."
  ],
  exploreDuration: "35 min",
  exploreMaterials: ["Rellotge de paret o de l'aula", "Els teus dits: no cal cap aparell"],

  theoryPoints: [
    { id: "t1", apartat: "1", heading: "Per quina raó augmenta la ==FC==", text: "El múscul treballa → gasta més ==ATP|g== → necessita més ==O₂|b== → la sang n'ha de portar més → el ==cor== batega més ràpid i més fort. Qui li ho ordena? El ==cervell== detecta l'esforç i activa el ==sistema nerviós simpàtic==, que arriba al cor per un nervi i allibera ==adrenalina== a la sang. Per això la ==FC== puja en segons, sense que hi pensis.", type: "keyequation", video: "/animacions/sa2-s5-t1.mp4" },
    { id: "t2", apartat: "1", heading: "Zones de ==FC==", text: "==FCmàx== estimada: 220 − edat. ==Zona aeròbica|g== (fins al 85% de la FCmàx): arriba prou O₂ i els músculs cremen glucosa i greixos. ==Zona anaeròbica|r== (per sobre del 85%): el múscul crema glucosa sense O₂ i es produeix ==lactat i acidesa|r==, que t'obliguen a abaixar el ritme.", type: "concept" },
    { id: "t5", apartat: "1", heading: "D'on surt l'==O₂== que la sang reparteix", text: "L'aire baixa per ==tràquea== → ==bronquis== → ==bronquíols== → ==alvèols|b==. A l'==alvèol== la paret és tan prima que l'==O₂|b== hi passa a la sang i el ==CO₂|r== fa el camí contrari. Mira la figura de sota i respon les preguntes de la fitxa.", type: "concept" },
    { id: "t3", apartat: "3", heading: "Enigma 1: com llegir la gràfica de la Mercè", text: "Llegeix la corba per ==trams==: la pujada de l'inici, el ==pic== i la ==recuperació== després de la meta. Per a cada tram, mira quants minuts dura i quants bat/min canvia. Una idea per a la teva explicació: quan pares de córrer, el cos encara «deu» oxigen, perquè cal netejar el ==CO₂== i l'==àcid làctic== dels músculs.", type: "concept", badge: "🔗 Enigma 1" },
    { id: "t6", apartat: "4", heading: "Què li passa a un ==cor== entrenat", text: "Entrenar fa el ==ventricle esquerre== més gran i més fort. Per això, amb ==un sol batec==, un cor entrenat expulsa molta més sang que un cor sedentari. Si cada batec ret més, en calen menys per moure la mateixa sang.", type: "concept" },
    { id: "t4", apartat: "4", heading: "Enigma 2: i el Marc Fontana?", text: "El Marc té ==Hb = 9,2 g/dL|r== (en un home adult, el normal és 13,5–17,5 g/dL). Recorda la sessió 3: si cada litre de sang porta menys ==O₂|b==, què hauria de fer el ==cor== per repartir-ne el mateix durant un esforç? Pensa-hi mirant G2: ho reprendràs a la sessió 7.", type: "concept", badge: "🔗 Enigma 2" }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s5-fitxa-A.html", B: "/fitxes/sa2-s5-fitxa-B.html", C: "/fitxes/sa2-s5-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa2-s5-teoria.pdf",

  sessionMaterials: [
    { id: "sortida", title: "Exit tiquet (versions A i B)", url: "/fitxes/sa2-s5-exit-ticket.html", who: "per al final de la sessió" },
    { id: "sortidaC", title: "Exit tiquet (versió C)", url: "/fitxes/sa2-s5-exit-ticket-C.html", who: "per al final de la sessió" },
    { id: "labVirtual", title: "Laboratori virtual (si has faltat a la pràctica)", url: "/labs/sa2/lab_s5_fc.html", who: "per fer a casa si no vas poder fer la pràctica" }
  ],

  fitxaGuide: {
    fitxaName: "Fitxa de la Sessió 5 — Freqüència cardíaca",
    steps: [
      { apartat: "—", title: "Formulari de comprensió de la lectura", time: "5 min", phase: "engage", instruction: "Abans de començar la fitxa, fes el formulari de comprensió (Google Forms) de la lectura de la sessió 5 que havies de llegir a casa.", hints: [] },
      { apartat: "0", title: "Repàs — la sang i el cor", time: "7 min", phase: "engage", instruction: "Sol/a, respon l'apartat 0 de la fitxa. Primer de memòria; després comprova-ho a les fitxes de les sessions 3 i 4 i corregeix el que calgui.", hints: [] },
      { apartat: "1", title: "Mesura la teva FC — l'experiment", time: "35 min", phase: "explore", explora: true, instruction: "A l'apartat 1 de la fitxa: primer, 3 minuts per escriure la teva hipòtesi i les tres estimacions, i llegeix els dos enigmes. Després feu l'experiment i omple la taula. Acaba calculant la FCmàx i el llindar, llegint els textos, responent les preguntes dels alvèols i la reflexió científica.", hints: [
        "No trobes el pols? Mou una mica els dits, prem més fluix o prova al coll.",
        "Compta 15 segons i multiplica × 4 per tenir batecs per minut.",
        "Pren la mesura de l'exercici just en parar: cada segon que esperes, la FC ja ha començat a baixar."
      ] },
      { apartat: "2", title: "La gràfica de la teva FC", time: "15 min", phase: "explica", instruction: "Sol/a, a l'apartat 2 de la fitxa: tria l'escala de l'eix vertical, escriu-ne els valors i representa cada punt de la taula. Uneix els punts amb una línia i contesta les dues caselles de sota.", hints: [
        "Tria una escala que aprofiti tot l'espai: mira el teu valor més alt i el més baix abans de numerar l'eix.",
        "Mira la forma que t'ha sortit: quanta estona triga a pujar i quanta a baixar? Ho necessitaràs a l'apartat 3."
      ] },
      { apartat: "3", title: "G1 — La Mercè · resolució de l'enigma 1", time: "15 min", phase: "explica", instruction: "A l'apartat 3 de la fitxa: primer llegim junts la gràfica G1; després, sol/a, respon les tres preguntes sobre la corba de la Mercè.", hints: [
        "Abans de res, llegeix els dos eixos: què hi ha a cadascun i en quines unitats?",
        "Busca el punt més alt de la línia i baixa fins a l'eix del temps.",
        "Compara els minuts que triga a pujar amb els que triga a baixar. Quan ja ha parat, què ha de fer encara el seu cos?"
      ] },
      { apartat: "4", title: "G2 — Esportista d'elit vs. persona sedentària", time: "20 min", phase: "elabora", instruction: "En parelles, a l'apartat 4 de la fitxa: compareu les dues corbes de G2, llegiu el text del cor entrenat i responeu les tres preguntes.", hints: [
        "Primer mira quina línia és cada persona: la contínua verda i la discontínua lila.",
        "Compara quanta sang mou cada cor a cada batec, no quants batecs fa.",
        "Per a la darrera pregunta, posa la teva gràfica de l'apartat 2 al costat de G2."
      ] },
      { apartat: "—", title: "Posada en comú i metacognició", time: "10 min", phase: "elabora", instruction: "Torna als objectius del principi de la fitxa i marca el que has après. Rellegeix la teva hipòtesi de l'apartat 1: era encertada? En què t'equivocaves? Apunta també què encara et preguntes.", hints: [] }
    ]
  },

  graphicResources: [
    { id: "Figura 1", apartat: "1", before: true, title: "On buscar el pols", src: "/images/sa2-s5-on-prendre-pols.png", caption: "Dues opcions per trobar el pols (tria'n una): al canell (①) o al coll (③). Hi poses dos dits, l'índex i el mig, i prems fluix." },
    { id: "Figura 2", apartat: "1", title: "Aparell respiratori i alvèols", src: "/images/sa2-s5-respiratori-alveols.png", caption: "El camí de l'aire: tràquea, bronquis, bronquíols i alvèols. A la dreta, un alvèol enganxat a un capil·lar: fixa't en els colors de la sang quan hi arriba i quan en surt." },
    { id: "G1", apartat: "3", before: true, title: "FC de la Mercè durant una cursa de 10 km", src: "/images/sa2-s5-g1-merce.svg", caption: "Eix horitzontal: minuts des de l'escalfament. Eix vertical: FC en bat/min. Hi ha marcats l'inici de la cursa, la meta i les zones d'esforç. Dades recreades amb finalitat didàctica.", note: "Exportada de la fitxa, sense anotacions. Les gràfiques sa2-g1-merce.svg i sa2-g2-elit-sedentari.svg porten les respostes escrites i són per a la sessió 7." },
    { id: "G2", apartat: "4", before: true, title: "Dues persones de 20 anys fan exactament el mateix exercici", src: "/images/sa2-s5-g2-elit-sedentari.svg", caption: "Línia contínua verda: esportista d'elit (FC en repòs ≈45 bat/min). Línia discontínua lila: persona sedentària (FC en repòs ≈78 bat/min). Mateixa intensitat i mateixa estona (5 min). FCmàx de tots dos = 200, llindar = 170 bat/min." }
  ],

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Amb les teves dades: la FC que vas mesurar just en parar, superava el teu llindar anaeròbic? Escriu els dos números i digues a quina zona vas estar.", hint: "Els dos números els tens a l'apartat 1 de la fitxa: la FC «just en parar» és a la taula i el llindar, a la caixa de càlcul (a la versió C, a la columna verda de la taula d'edats)." },
    { id: "q2", type: "open", text: "Per quina raó una persona amb anèmia tindria la FC en repòs més alta que una persona sana?", hint: "Si cada batec reparteix menys O₂ (poca hemoglobina), el cor ho ha de compensar d'alguna manera fins i tot en repòs. Com?" }
  ],

  homework: {
    readingNext: {
      session: 6,
      text: "Llegeix la lectura de la Sessió 6. A l'inici de la propera sessió faràs el formulari de comprensió (Google Forms).",
      pdfUrl: "/lectures/sa2-s6-lectura.pdf",
      easyUrl: "/lectures/sa2-s6-lectura-FACIL.pdf",
    },
    description: "Tasca per a casa — els propers 3 matins (prepara la Sessió 6). Just en llevar-te (abans d'esmorzar i sense moure't gaire), mesura la teva FC en repòs: compta els batecs durant 30 segons i multiplica × 2 (a casa comptem el doble d'estona que a classe perquè, en repòs, com més estona comptes més fiable surt la mesura). Apunta-ho a la taula de la fitxa. A partir de les teves dades, formula una pregunta d'investigació pròpia. Són 2 min cada matí; no es pot fer amb IA: les pulsacions són teves.",
    note: "Porta la fitxa a la Sessió 6: posarem en comú les dades de tota la classe. Sense dades no pots participar-hi.",
  },

  recoveryInstructions: [
    "Apartat 0: fes el repàs de memòria i comprova-ho a les fitxes de les sessions 3 i 4.",
    "Apartat 1: escriu la hipòtesi i les estimacions. Mesura la teva FC a casa: en repòs (minuts 0, 1 i 2, comptant 15 segons × 4), just en parar després de 2 min d'exercici i cada minut durant 5 min de recuperació. Si no pots fer-ho, fes la pràctica al laboratori virtual (botó de sota) i copia el resum a la fitxa. Després segueix la teoria d'aquest apartat i respon les preguntes.",
    "Apartat 2: fes la gràfica amb les teves dades.",
    "Apartats 3 i 4: analitza les gràfiques G1 i G2 d'aquesta pàgina i respon les preguntes de la fitxa.",
    "Acaba amb els objectius i la metacognició de la fitxa, i fes l'exit tiquet (el trobaràs a Materials).",
    "La feina a casa de FC en repòs 3 matins és IGUALMENT OBLIGATÒRIA: necessites les dades per a la Sessió 6."
  ],
  recoveryLinks: [{ label: "Laboratori virtual de la pràctica", url: "/labs/sa2/lab_s5_fc.html", icon: "🧪" }],
  oaLinks: ["OA3"], competencies: ["CE1", "CE4"]
}
