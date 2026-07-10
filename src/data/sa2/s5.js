export const sa2s5 = {
  id: "s5", saId: "sa2",
  title: "Respiració i esforç: la freqüència cardíaca ★",
  sessionNumber: 5, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s5-fc-esport.jpg",
  isKeySession: true,

  // Repte oral curt: resolució parcial dels enigmes, abans d'escriure les idees prèvies de FC.
  engageChallenge: "Traiem els enigmes de la paret un moment: avui finalment podeu començar a respondre per quina raó la gràfica de la Mercè té aquesta forma, i per quina raó algú amb hemoglobina baixa es fatiga molt més. Ho veureu en acció avui — no us ho revelem encara.",
  engageQuestion: "Per quina raó creus que la FC augmenta quan fas exercici? Escriu-ho ara. Al final de la sessió compararàs amb el que has après.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Dissenyo un protocol d'investigació millor sobre FC: identifico 3 limitacions de l'experiment de classe i proposo com controlar-les.",
      "Raono per quina raó la recuperació de FC és asimètrica (sempre més lenta que la pujada), usant els conceptes d'àcid làctic i hormones.",
      "Explico mecanísticament per quina raó una persona amb anèmia entra a zona anaeròbica molt més aviat que una persona sana.",
      "Comparo les gràfiques d'un esportista d'elit i un sedentari: quines adaptacions cardíaques expliquen les diferències?"
    ],
    B: [
      "Explico la cadena causal: exercici → músculs necessiten ATP → necessiten O₂ → hemoglobina circula més ràpid → FC augmenta.",
      "Calculo la meva FCmàx (220 − edat) i distingeixo zona aeròbica (≤85%) de zona anaeròbica (>85%).",
      "Interpreto la gràfica de la Mercè identificant els 3 trams (pujada / pic / recuperació lenta) i la causa de cadascun.",
      "Relaciono la FC elevada de Marc Fontana (Hb 9.2) amb la seva anèmia ferropènica."
    ],
    C: [
      "Mesuro el meu pols: compto els batecs en _____ seg i multiplico per _____ per tenir bat/min.",
      "Completo: «la FC puja perquè els músculs necessiten més _______ per fer _______».",
      "Reconec que la zona anaeròbica és quan la FC supera el _____% de la FCmàx, i que és dolorosa i _______ de mantenir.",
      "A la gràfica de la Mercè, identifico quin tram puja ràpid i quin baixa lentament."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Per calcular la FC: compta els batecs en 30 seg i multiplica per 2. Omple: repòs: ___ × 2 = ___ bat/min · esforç: ___ × 2 = ___ bat/min · als 2 min recuperació: ___ × 2 = ___ bat/min. La meva FCmàx estimada (220 − edat) = ___.",
      challenge: "Les nostres dades tindrien problemes per publicar-se en una revista científica. Identifica 3 limitacions metodològiques (pensa en: control, rèpliques, precisió de mesura, factors de confusió). Per cada una, proposa com es podria resoldre."
    },
    "2": {
      scaffold: "Tria l'escala de l'eix Y: mira el teu valor MÉS ALT i el MÉS BAIX. Deixa un marge per sobre. Cada punt al gràfic correspon a un moment: 0 min (repòs), 2 min (esforç), 2.5, 3, 4, 5, 6, 7 min (recuperació). Uneix els punts amb una línia contínua.",
      challenge: "Compara la teva gràfica amb la de la Mercè (G1). Identifica 2 diferències quantitatives (valors concrets) i raona per quina raó es produeixen. Quins factors personals (edat, entrenament, Hb...) podrien explicar les diferències?"
    },
    "3": {
      challenge: "La recuperació de la Mercè és asimètrica: puja en 2 min però triga 5+ min a baixar. Explica mecanísticament per quina raó baixar és sempre més lent que pujar. Usa: SN simpàtic, adrenalina, àcid làctic, FC de repòs."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui mesurareu la vostra FC. Primer feu la predicció — les idees prèvies no es corregeixen, es comparen al final.",
    prompts: [
      {
        kind: "write",
        text: "Ara mateix, en repòs, quin creus que és el teu pols (batecs/minut)? Escriu la teva estimació i a continuació mesura'l.",
        starter: "Crec que el meu pols ara és d'uns ___ bat/min. Mesurant: ___ bat/min."
      },
      {
        kind: "write",
        text: "Quan fas esforç físic intens, el cor bat molt més de pressa. Per quina raó creus que passa?",
        starter: "Crec que la FC augmenta perquè..."
      }
    ]
  },

  exploreActivity: {
    what: "Mesura la teva pròpia freqüència cardíaca: en repòs (3 min), després d'un esforç breu (salt a peu coix, 2 min) i durant la recuperació (5 min), prenent el pols cada 30 segons.",
    who: { mode: "individual", label: "Individual (tota la classe alhora, mateix protocol)" },
    time: 35,
    note: "Compara les teves dades amb les del company o companya de costat. Al final: podríem publicar aquestes dades en una revista científica? Quins problemes hi veieu?"
  },
  exploreInstructions: [
    "Repòs 3 min: asseguts en silenci. Mesura el pols al canell cada 30 seg. Registra a la taula.",
    "Exercici 2 min: salt a peu coix. Mesura immediatament al parar.",
    "Recuperació 5 min: mesura FC cada 30 seg fins als 5 minuts.",
    "Registra les dades del/de la company/a de costat",
    "Moment epistèmic NDC: 'Les nostres dades podrien sortir en una revista científica? Quins problemes tindria la nostra investigació?'"
  ],
  exploreDuration: "35 min",
  exploreMaterials: ["Rellotge de paret o del professor. Cada alumne mesura el seu pols."],

  theoryPoints: [
    { id: "t1", apartat: "2", heading: "Per quina raó augmenta la ==FC==", text: "Exercici → músculs necessiten més ==ATP|g== → necessiten més ==O₂|b== → ==hemoglobina== ha de circular més ràpid → ==cor== batega més de pressa i més fort. La cadena sencera des del ==mitocondri== fins al cor.", type: "keyequation", video: "/animacions/sa2-s5-t1.mp4" },
    { id: "t2", apartat: "2", heading: "Zones de ==FC==", text: "==FCmàx== estimada: 220 − edat. ==Zona aeròbica|g== (≤85% FCmàx): usa greixos + glucosa, pot mantenir-se molt de temps. ==Zona anaeròbica|r== (>85%): usa glucosa → ==àcid làctic|r==, dolorosa i insostenible.", type: "concept", video: "/animacions/sa2-s5-t2.mp4" },
    { id: "t3", apartat: "3", heading: "Connexió enigma 1: La gràfica de la Mercè", text: "Puja ràpid (==sistema simpàtic== + ==adrenalina== actius). ==Pic== als ~5 min. ==Recuperació lenta|o== (el cos ha de netejar ==àcid làctic==, normalitzar hormones). Per quina raó és ==asimètrica==: baixar és sempre més lent que pujar.", type: "keyequation", badge: "🔗 Enigma 1 — resolució parcial", video: "/animacions/sa2-s5-t3.mp4" },
    { id: "t4", apartat: "3", heading: "Connexió enigma 2: Marc Fontana amb anèmia", text: "Amb ==Hb = 9.2 g/dL|r==, cada litre de sang porta molt menys ==O₂|b==. El ==cor== ha de compensar batent molt més de pressa. Per quina raó s'esgota: entra en ==zona anaeròbica|r== molt abans que una persona sana.", type: "keyequation", badge: "🔗 Enigma 2 — resolució parcial", video: "/animacions/sa2-s5-t4.mp4" }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s5-fitxa-A.html", B: "/fitxes/sa2-s5-fitxa-B.html", C: "/fitxes/sa2-s5-fitxa-C.html" }, teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S5 — Freqüència cardíaca",
    steps: [
      { apartat: "0", title: "Idees prèvies — els dos enigmes", time: "5 min", phase: "engage", instruction: "Omple l'apartat 0 del full: per què creus que la FC puja amb l'exercici? No es corregeix ara; ho compararàs al final.", hints: [] },
      { apartat: "1", title: "Mesura la teva FC — l'experiment", time: "35 min", phase: "explore", instruction: "Durant l'experiment, omple la taula de l'apartat 1 del full: FC en repòs, després de l'esforç i durant la recuperació.", hints: [
        "Mesura el pols 30 segons i multiplica per 2 per tenir batecs/minut.",
        "Pren la mesura de l'esforç IMMEDIATAMENT en parar: la FC baixa molt de pressa."
      ] },
      { apartat: "2", title: "La gràfica de la teva FC", time: "10 min", phase: "explica", instruction: "A l'apartat 2 del full, representa les teves dades: tria tu l'escala de l'eix vertical i marca cada punt.", hints: [
        "Tria una escala que aprofiti tot l'espai: mira el teu valor més alt i el més baix abans de numerar l'eix.",
        "La forma puja ràpida i baixa lenta? Aquesta asimetria és la clau de l'enigma 1."
      ] },
      { apartat: "3", title: "G1 — La Mercè, resolució de l'enigma 1", time: "10 min", phase: "explica", instruction: "Amb la gràfica G1, omple l'apartat 3 del full: desxifra la corba de la Mercè.", hints: [
        "Relaciona cada tram amb una causa: pujada (sistema simpàtic + adrenalina), pic (màxima demanda), baixada lenta (recuperació)."
      ] },
      { apartat: "4", title: "G2 — Elit vs. sedentari", time: "10 min", phase: "elabora", instruction: "En parelles, compareu les dues gràfiques a l'apartat 4 del full.", hints: [
        "El mateix esforç, dos cors diferents: qui té la FC de repòs més baixa i recupera abans? Què ens diu de l'entrenament?"
      ] }
    ]
  },

  graphicResources: [
    { id: "G1", title: "Gràfica FC corredor Mercè", src: "/images/sa2-g1-merce.svg", note: "Per a interpretació col·lectiva guiada" },
    { id: "G2", title: "Esportista elit vs. sedentari", src: "/images/sa2-g2-elit-sedentari.svg", note: "Per a treball en parelles" }
  ],

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Amb les teves dades: en quin moment de l'exercici vas entrar a zona anaeròbica? Com ho saps?", hint: "Calcula la teva FCmàx (220 − edat) i el 85%. Mira a la teva taula quan vas superar aquest valor." },
    { id: "q2", type: "open", text: "Per quina raó una persona amb anèmia tindria la FC en repòs més alta que una persona sana?", hint: "Si cada batec reparteix menys O₂ (poca hemoglobina), el cor ho ha de compensar d'alguna manera fins i tot en repòs. Com?" }
  ],

  homework: {
    description: "Durant 3 matins consecutius, just en llevar-te, mesura la teva FC en repòs (pols al canell, 30 seg × 2). Anota-la a la taula de la fitxa S5 secció 6. Escriu una pregunta d'investigació pròpia basada en les dades.",
    note: "OBLIGATORI per a S6. Sense dades no pots participar en la posada en comú.",
    deadline: "3 matins consecutius"
  },

  recoveryInstructions: [
    "Mesura la teva FC a casa: (a) Reposa 3 min assegut/da. Mesura el pols 30 seg × 2. (b) Salta a peu coix 2 min, mesura immediatament. (c) Mesura cada 30 seg durant 5 min de recuperació.",
    "Llegeix la teoria d'aquesta pàgina",
    "Analitza les gràfiques G1 i G2 (a la secció EXPLICA) i respon les preguntes de la fitxa",
    "La feina a casa de FC en repòs 3 matins és IGUALMENT OBLIGATÒRIA — necessites les dades per a S6",
    "Exit tiquet online aquí"
  ],
  oaLinks: ["OA3"], competencies: ["CE1", "CE4"]
}
