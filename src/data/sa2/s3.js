export const sa2s3 = {
  id: "s3", saId: "sa2",
  title: "La sang en moviment — primera pista de l'analítica",
  sessionNumber: 3, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s3-circulatori.jpg",

  // Repte oral curt: hook visual del tub de sang centrifugada, abans d'escriure les idees prèvies.
  engageChallenge: "Ensenyem un tub de sang centrifugada: es veuen 3 capes (plasma groc 55%, eritròcits vermells 44%, leucòcits i plaquetes <1%). Per quina raó la sang sembla vermella si la majoria és plasma groc?",
  engageQuestion: "Avui comencem a desxifrar l'analítica de sang de la paret. La hemoglobina és baixa: 9.2 g/dL. Però primer: saps de quines coses es compon la sang?",
  engageContext: "Hook visual: tub sang centrifugada → 3 capes visibles. 'Per quina raó la sang sembla vermella si el 55% és groc (plasma)?'",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Raono per quina raó un hematòcrit elevat (>55% eritròcits) pot ser avantatge en altitud però risc cardiovascular a nivell del mar.",
      "Aplico el raonament de Harvey: calculo el volum de sang bombejat en 30 min i dedueixo per quina raó la sang ha de circular.",
      "Explico mecanísticament la cadena causal completa: ferro baix → menys Hb → menys O₂/L sang → cor compensa FC → fatiga precoç.",
      "Distingeixo per quina raó la doble circulació és necessària (no redundant): pressions incompatibles als mateixos vasos."
    ],
    B: [
      "Descric la composició de la sang (3 components i funció de cadascun).",
      "Explico la funció de l'hemoglobina i per quina raó necessita ferro per unir-se a l'O₂.",
      "Descric la doble circulació (petita/gran) i per quina raó calen 2 circuits de pressions separades.",
      "Interpreto valors bàsics d'una analítica: Hb, eritròcits i ferro — i vinculo els alterats a l'enigma 2."
    ],
    C: [
      "Nomeno 3 components de la sang i el color de cadascun (plasma, eritròcits, leucòcits).",
      "Completo: «l'hemoglobina és la proteïna que porta _______ des dels _______ fins als _______».",
      "Reconec que la circulació petita va als _______ i la gran va a _______.",
      "A l'analítica del Marc, marco quin valor és BAIX respecte al rang normal."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "100 targetes = 100%. El nombre de targetes de cada color = el seu percentatge. Completa: ___% plasma (groc) + ___% eritròcits (vermells) + ___% leucòcits. La sang sembla vermella tot i que el 55% és plasma perquè _______.",
      challenge: "Si el % d'eritròcits augmentés al 55% (policitèmia), com afectaria la viscositat de la sang i el treball que ha de fer el cor? Raona quins risks cardiovasculars podria generar."
    },
    "2": {
      scaffold: "Usa el banc de paraules: aurícola · ventricle · tabi · pulmons · cos · vena cava · aorta. Les cavitats de DALT _______ sang (aurí______). Les de BAIX _______ sang (ven_______). El tabi separa dreta (sang _______ d'O₂) d'esquerra (sang _______ d'O₂).",
      challenge: "Harvey va calcular: 70 mL/batec × 70 bat/min × 30 min = _______ litres bombejats en mitja hora. El cos té ~5 L de sang. Quina conclusió hi dedueixes? Aplica el mateix mètode hipoteticodeductiu a un cas nou: ¿pot una persona tenir 6 L de sang als vasos si el cor en bomba 7.000 L al dia?"
    },
    "4": {
      scaffold: "Mira la taula de valors normals. Omple: Hb del Marc = ___ g/dL (normal: ___). Ferro = ___ (normal: ___). Eritròcits = ___ (normals: petits o grans?). El problema és que el Marc té MASSA _______ o MASSA POC _______?",
      challenge: "Raona la cadena causal COMPLETA de l'enigma 2: Ferro baix → _______ → eritròcits petits → _______ per litre de sang → cor _______ → fatiga precoç. Connecto-ho: si el Marc prengués ferro, en quines setmanes esperaries que millorés la Hb? Per quina raó no immediat?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui comencem a desxifrar l'analítica de la paret. Però primer anoteu el que ja sabeu sobre la sang — res és incorrecte ara, i no es corregirà.",
    prompts: [
      {
        kind: "write",
        text: "La sang té molts components. Quins creus que hi ha? Fes una llista de tot el que creus que conté.",
        starter: "Crec que la sang conté..."
      },
      {
        kind: "write",
        text: "Quan et fas un tall i sagnes, la sang és vermella. Però si la centrifugues, la part de dalt és groga. Per quina raó creus que passa?",
        starter: "Crec que és perquè..."
      }
    ]
  },

  exploreActivity: {
    what: "Amb un sobre de 100 targetes (55 plasma, 44 eritròcits, 1 leucòcits/plaquetes), ordena-les i calcula els percentatges de cada component de la sang.",
    who: { mode: "grup4", label: "Grups de 4 (un sobre per grup)" },
    time: 15,
    note: "Després, fes l'app del sistema circulatori (20 min) per seguir l'O₂ des de l'alvèol fins al mitocondri del peu del corredor."
  },
  exploreInstructions: [
    "Obre el sobre: 100 targetes per grup (55 grogues = plasma, 44 vermelles = eritròcits, 1 blanca = leucòcits+plaquetes)",
    "Ordena, compta i calcula els percentatges",
    "Per quina raó la sang sembla vermella si el 55% és plasma groc?",
    "Anèmia: quines targetes estaran afectades? (pensa-ho, no t'ho diem)",
    "Amb l'app de sistema circulatori: segueix l'O₂ des de l'alvèol fins al mitocondri del peu del corredor"
  ],
  exploreDuration: "35 min",
  exploreMaterials: ["Sobre amb 100 targetes de colors (55 grogues, 44 vermelles, 1 blanca)"],
  appSrc: "/apps/app_sistema_circulatori.html",
  exploreNote: "App interactiva: segueix una molècula d'O₂ per 7 estacions (alvèol → hemoglobina → cor esquerre → aorta → capil·lar → mitocondri → tornada). Botó 'Mode anèmia' connecta amb l'enigma 2 del Marc. Inclou Simplifica + ajuda àrab/castellà/urdú i quiz autocorrectiu de 3 preguntes.",

  theoryPoints: [
    { id: "t5", apartat: "1", heading: "Harvey (1628): la deducció matemàtica", text: "William Harvey va calcular que si el ==cor== bomba ~70 mL per batec × 70 batecs/min, en mitja hora hauria bombejat més sang de la que hi ha al cos. Va concloure que la ==sang circula==. Va precedir el microscopi per 30 anys.", type: "epistemic", badge: "🔬 Com funciona la ciència", video: "/animacions/sa2-s3-t5.mp4" },
    { id: "t1", apartat: "2", heading: "Composició de la sang", text: "==55% plasma|o== (groc): transport de nutrients, hormones, CO₂. ==44% eritròcits|r== (vermells): transport ==O₂|b== via ==hemoglobina==. ==<1% leucòcits i plaquetes==: defensa i coagulació.", type: "concept", video: "/animacions/sa2-s3-t1.mp4" },
    { id: "t2", apartat: "2", heading: "==Hemoglobina==: la proteïna que porta l'O₂", text: "L'==hemoglobina== és una proteïna dels ==eritròcits|r== que conté ==ferro==. Als ==pulmons|b==, el ferro s'uneix a l'==O₂|b== (es torna vermell brillant). Als ==teixits==, el cedeix. Sense ferro → no es forma hemoglobina → menys O₂ als músculs.", type: "concept", video: "/animacions/sa2-s3-t2.mp4" },
    { id: "t3", apartat: "3", heading: "Per quina raó la circulació és doble", text: "==Petita circulació|b==: cor → pulmons → cor (oxigenació). ==Gran circulació|o==: cor → tot el cos → cor (distribució). Calen ==4 cavitats== per mantenir les pressions separades. Si es barregen ==sang oxigenada i desoxigenada|r== → menys eficiència.", type: "concept", video: "/animacions/sa2-s3-t3.mp4" },
    { id: "t4", apartat: "4", heading: "Primera lectura de l'analítica", text: "Marc Fontana: ==Hb 9.2 g/dL|r== (normal >13), ==eritròcits petits|r==, ==ferro baix|r==. Diagnòstic parcial: ==anèmia ferropènica==. Per quina raó es fatiga tant? Porta menys ==O₂|b== per litre de sang → els músculs no reben prou combustible.", type: "keyequation", badge: "🔗 Enigma 2 — segon pas", video: "/animacions/sa2-s3-t4.mp4" }
  ],

  graphicResources: [
    { id: "Fig.1", title: "Composició de la sang (en volum)", src: "/images/sa2-composicio-sang.png", note: "55% plasma (groc) + 45% cèl·lules sanguínies, de les quals >99% són glòbuls vermells. Per això la sang sembla vermella tot i ser majoritàriament plasma groc." },
    { id: "Fig.2", title: "Frotis de sang al microscopi", src: "/images/sa2-frotis-sang.png", note: "Glòbuls vermells (1), glòbuls blancs (2) i plaquetes (3) tal com es veuen en una analítica real." },
    { id: "Fig.3", title: "La doble circulació", src: "/images/sa2-circulacio-doble.png", note: "Circuit pulmonar (cor → pulmons → cor, a oxigenar) i circuit general (cor → cos → cor, a repartir). Les 4 cavitats mantenen separades les pressions." },
    { id: "Fig.4", title: "Els tres tipus de vasos sanguinis", src: "/images/sa2-vasos-sanguinis.png", note: "Artèria (paret gruixuda, alta pressió), vena (vàlvules, baixa pressió) i capil·lar (una sola cèl·lula de gruix, on es fa l'intercanvi de substàncies)." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s3-fitxa-A.html", B: "/fitxes/sa2-s3-fitxa-B.html", C: "/fitxes/sa2-s3-fitxa-C.html" }, teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S3 — La sang i la circulació",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Omple l'apartat 0 — Idees prèvies del full: escriu tot el que creus que la sang transporta pel cos.", hints: [] },
      { apartat: "1", title: "Les targetes de la sang", time: "—", phase: "explore", instruction: "Amb les 100 targetes del sobre, omple l'apartat 1 del full: compta i calcula els percentatges de cada component.", hints: [
        "100 targetes fan fàcil el percentatge: el nombre de targetes d'un color JA és el seu %.",
        "Si la sang és majoritàriament plasma groc, per què la veiem vermella? Pensa quin component li dona el color."
      ] },
      { apartat: "2", title: "Etiqueta el cor", time: "—", phase: "explica", instruction: "Amb el banc de paraules, omple l'apartat 2 del full: etiqueta el diagrama del cor en secció.", hints: [
        "Les cavitats de dalt reben (aurícules); les de baix bomben (ventricles). Dreta i esquerra no es barregen."
      ] },
      { apartat: "3", title: "La doble circulació", time: "—", phase: "explica", instruction: "Omple l'apartat 3 del full: per quina raó en calen dues?", hints: [
        "Un circuit va als pulmons (a buscar O₂); l'altre, a tot el cos (a repartir-lo). Què passaria amb un de sol?"
      ] },
      { apartat: "4", title: "Desxifra l'analítica del Marc", time: "—", phase: "elabora", instruction: "A l'apartat 4 del full, analitza els valors de l'analítica de Marc Fontana i marca quins estan fora de rang.", hints: [
        "Compara cada valor amb el seu rang normal. Tres pistes apunten al mateix problema: hemoglobina, ferro i mida dels eritròcits.",
        "No diguis encara el diagnòstic complet: només identifica QUÈ està alterat. La causa la lligaràs a S5."
      ] }
    ]
  },

  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica la cadena causal: ferro baix → ? → ? → ? → corredor es fatiga molt aviat.", hint: "Cada fletxa és una conseqüència. Ferro → hemoglobina → O₂ que arriba al múscul → energia disponible. Omple els passos." },
    { id: "q2", type: "open", text: "Per quina raó la circulació humana és doble (petita + gran)? Quin avantatge té respecte una de sola?", hint: "Pensa en les pressions: els pulmons són delicats (pressió baixa) i el cos és gran (pressió alta). Es poden fer alhora amb una sola bomba?" },
    { id: "q3", type: "multiple", text: "Un esportista d'elit en altitud té l'hematòcrit (% eritròcits) elevat naturalment. Per quina raó és un avantatge?", options: ["Porta més O₂ per litre de sang als músculs", "La sang és més lleuger", "El cor batega menys vegades", "Els músculs necessiten menys ATP"], correct: 0 }
  ],
  homework: { description: "Cap. (Opcional: vídeo cor per dins per preparar S4 amb curiositat.)", deadline: null },
  recoveryInstructions: [
    "Fes Part A amb paper i tisores: 100 quadradets (55 grocs, 44 vermells, 1 blanc). Observa els percentatges.",
    "Mira el diagrama de doble circulació d'aquesta pàgina",
    "Llegeix la teoria (apartat EXPLICA)",
    "Omple la fitxa S3 i fes el formulari online aquí"
  ],
  oaLinks: ["OA2"], competencies: ["CE2", "CE4"]
}
