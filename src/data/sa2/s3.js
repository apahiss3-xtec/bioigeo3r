export const sa2s3 = {
  id: "s3", saId: "sa2",
  title: "El Sistema Circulatori i la Sang",
  sessionNumber: 3, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s3-circulatori.jpg",

  // Repte oral curt: hook visual del tub de sang centrifugada, abans d'escriure les idees prèvies.
  engageChallenge: "Observem un tub de sang centrifugada: es veuen 3 capes (plasma groc 55%, eritròcits vermells 44%, leucòcits i plaquetes <1%). Per quina raó la sang sembla vermella si la majoria és plasma groc?",
  engageQuestion: "Avui comencem a desxifrar l'analítica de sang de la paret. La hemoglobina és baixa: 9,2 g/dL. Però primer: saps de quines coses es compon la sang?",
  engageContext: "Un tub de sang centrifugada es parteix en tres capes ben visibles, i la més gran és groga. Si el 55 % de la sang és plasma groc, per quina raó la veiem vermella?",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures). Tasca 2, 09/09/2026.
  teacherNotes: "Hook visual: tub de sang centrifugada amb les 3 capes. Sessió reformulada (26/10/2026) per cabre en 2h: fora les 100 targetes i l'etiquetatge del cor (ja es fa a S4). L'explora és la coavaluació del pòster de SA1: cal tenir els pòsters a l'aula, la bastida impresa (1 per alumne) i la rúbrica d'EdVoice oberta. L'app de circulació passa a opcional / casa.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Raono per quina raó un hematòcrit elevat (>55% eritròcits) pot ser avantatge en altitud però risc cardiovascular a nivell del mar.",
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
      scaffold: "Mira el tub centrifugat: ___% plasma (part de dalt) + ___% cèl·lules (part de baix). Al frotis, les cèl·lules més abundants són els _______. La sang sembla vermella tot i que el 55% és plasma perquè _______.",
      challenge: "Si el % d'eritròcits augmentés al 55% (policitèmia), com afectaria la viscositat de la sang i el treball que ha de fer el cor? Raona quins riscos cardiovasculars podria generar."
    },
    "2": {
      scaffold: "Circuit PETIT: cor _______ → pulmons (la sang agafa _______) → cor _______. Circuit GRAN: cor _______ → tot el cos (la sang deixa _______) → cor _______. Calen dos circuits perquè els pulmons necessiten pressió _______ i el cos, pressió _______.",
      challenge: "Imagina un animal amb un sol circuit: la sang passa pels pulmons i, sense tornar al cor, va a tot el cos. Per quina raó arribaria als músculs amb menys pressió? Quin avantatge té, doncs, la doble circulació per a un corredor com el Marc?"
    },
    "3": {
      scaffold: "Mira la taula de valors normals. Omple: Hb del Marc = ___ g/dL (normal: ___). Ferro = ___ (normal: ___). Eritròcits = ___ (normals: petits o grans?). El problema és que el Marc té MASSA _______ o MASSA POC _______?",
      challenge: "Raona la cadena causal COMPLETA de l'enigma 2: Ferro baix → _______ → eritròcits petits → _______ per litre de sang → cor _______ → fatiga precoç. Connecta-ho: si el Marc prengués ferro, en quines setmanes esperaries que millorés la Hb? Per quina raó no immediat?"
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
    what: "Coavalua el pòster de SA1 (La cèl·lula viva) d'un company. Ja l'has autoavaluat: ara toca mirar-ne un altre amb ulls d'expert, amb la bastida visual, i posar-hi nota a la rúbrica d'EdVoice.",
    who: { mode: "parelles", label: "Per parelles (us intercanvieu el pòster)" },
    time: 15,
    note: "3 min per mirar el pòster sencer, 8 min per buscar les pistes de cada criteri a la bastida i 4 min per passar-ho a EdVoice."
  },
  exploreInstructions: [
    "Agafa el pòster del company que et toqui i la bastida «Coavaluació del pòster»",
    "Mira 3 min: llegeix el pòster sencer sense escriure res",
    "Busca 8 min: a cada criteri (①–⑥), marca les pistes ✔ que hi trobes, l'estrella ★ si n'hi ha i l'alerta 🚩 si cal. Compta les ✔ i encercla el nivell amb la clau (🚩 o cap ✔ = NA · 1–2 ✔ = AS · 3 ✔ = AN · 3 ✔ + ★ = AE)",
    "Escriu una cosa que funciona molt bé i una que milloraria",
    "Posa-ho a EdVoice 4 min: obre la rúbrica que t'ha enviat el company per EdVoice, posa a cada criteri el nivell que has encerclat a la targeta i escriu-hi els dos comentaris"
  ],
  exploreDuration: "15 min",
  exploreMaterials: ["Pòsters de SA1 de la classe", "Bastida «Coavaluació del pòster» (1 per alumne)", "Rúbrica del pòster a EdVoice (ordinador o mòbil)"],
  appSrc: "/apps/app_sistema_circulatori.html",
  exploreNote: "Opcional, per a casa o si acabes abans — App interactiva: segueix una molècula d'O₂ per 7 estacions (alvèol → hemoglobina → cor esquerre → aorta → capil·lar → mitocondri → tornada). Prova el botó «Mode anèmia»: t'ajudarà a entendre l'enigma 2 del Marc. Inclou el mode Simplifica, ajuda en àrab, castellà i urdú, i un quiz autocorrectiu de 3 preguntes.",

  theoryPoints: [
    { id: "t1", apartat: "1", heading: "Composició de la sang", text: "==55% plasma|o== (groc): transport de nutrients, hormones, CO₂. ==44% eritròcits|r== (vermells): transport ==O₂|b== via ==hemoglobina==. ==<1% leucòcits i plaquetes==: defensa i coagulació.", type: "concept" },
    { id: "t2", apartat: "1", heading: "==Hemoglobina==: la proteïna que porta l'O₂", text: "L'==hemoglobina== és una proteïna dels ==eritròcits|r== que conté ==ferro==. Als ==pulmons|b==, el ferro s'uneix a l'==O₂|b== (es torna vermell brillant). Als ==teixits==, el cedeix. Sense ferro → no es forma hemoglobina → menys O₂ als músculs.", type: "concept", video: "/animacions/sa2-s3-t2.mp4" },
    { id: "t3", apartat: "2", heading: "Per quina raó la circulació és doble", text: "==Petita circulació|b==: cor → pulmons → cor (oxigenació). ==Gran circulació|o==: cor → tot el cos → cor (distribució). Dos circuits permeten ==dues pressions==: baixa als pulmons (alvèols delicats) i alta cap al cos. Si es barregen ==sang oxigenada i desoxigenada|r== → menys eficiència.", type: "concept" },
    { id: "t4", apartat: "3", heading: "Primera lectura de l'analítica", text: "Marc Fontana: ==Hb 9,2 g/dL|r== (normal >13), ==eritròcits petits|r==, ==ferro baix|r==. Diagnòstic parcial: ==anèmia ferropènica==. Per quina raó es fatiga tant? Porta menys ==O₂|b== per litre de sang → els músculs no reben prou combustible.", type: "keyequation", badge: "🔗 Enigma 2 — segon pas" }
  ],

  graphicResources: [
    { id: "Fig.1", title: "Composició de la sang (en volum)", src: "/images/sa2-composicio-sang.png", note: "55% plasma (groc) + 45% cèl·lules sanguínies, de les quals >99% són glòbuls vermells. Per això la sang sembla vermella tot i ser majoritàriament plasma groc." },
    { id: "Fig.2", title: "Frotis de sang al microscopi", src: "/images/sa2-frotis-sang.png", note: "Glòbuls vermells (1), glòbuls blancs (2) i plaquetes (3) tal com es veuen en una analítica real." },
    { id: "Fig.3", title: "La doble circulació", src: "/images/sa2-circulacio-doble.png", note: "Circuit pulmonar (cor → pulmons → cor, a oxigenar) i circuit general (cor → cos → cor, a repartir). Cada circuit té la seva pressió: baixa als pulmons i alta cap al cos." },
    { id: "Fig.4", title: "Els tres tipus de vasos sanguinis", src: "/images/sa2-vasos-sanguinis.png", note: "Artèria (paret gruixuda, alta pressió), vena (vàlvules, baixa pressió) i capil·lar (una sola cèl·lula de gruix, on es fa l'intercanvi de substàncies)." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s3-fitxa-A.html", B: "/fitxes/sa2-s3-fitxa-B.html", C: "/fitxes/sa2-s3-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa2-s3-teoria.pdf",

  sessionMaterials: [
    { id: "bastidaCoav", title: "Bastida per coavaluar el pòster de SA1", url: "/fitxes/sa2-s3-bastida-coavaluacio.html", who: "per a l'explora (1 per alumne), abans d'omplir la rúbrica d'EdVoice" },
    { id: "bastidaCoavUR", title: "Bastida per coavaluar el pòster de SA1 · acollida (urdú)", url: "/fitxes/sa2-s3-bastida-coavaluacio-UR.html", who: "alumnat d'acollida que llegeix urdú (català + urdú, 2 fulls)" },
    { id: "bastidaCoavAR", title: "Bastida per coavaluar el pòster de SA1 · acollida (àrab)", url: "/fitxes/sa2-s3-bastida-coavaluacio-AR.html", who: "alumnat d'acollida que llegeix àrab (català + àrab, 2 fulls)" },
    { id: "sortida", title: "Exit tiquet (versions A i B)", url: "/fitxes/sa2-s3-exit-ticket.html", who: "per al final de la sessió" },
    { id: "sortidaC", title: "Exit tiquet (versió C)", url: "/fitxes/sa2-s3-exit-ticket-C.html", who: "per al final de la sessió" },
    { id: "labVirtual", title: "Laboratori virtual (si has faltat a la pràctica)", url: "/labs/sa2/lab_s3_circulatori.html", who: "per fer a casa si no vas poder fer la pràctica" }
  ],

  fitxaGuide: {
    fitxaName: "Fitxa S3 — La sang i la circulació",
    steps: [
      { apartat: "—", title: "Formulari de comprensió de la lectura", time: "5 min", phase: "engage", instruction: "Abans de començar la fitxa, fes el formulari de comprensió (Google Forms) de la lectura de la sessió 3 que havies de llegir a casa.", hints: [] },
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Omple l'apartat 0 — Idees prèvies del full: escriu tot el que creus que la sang transporta pel cos.", hints: [] },
      { apartat: "—", title: "Coavalua el pòster de SA1", time: "15 min", phase: "explore", instruction: "Amb la bastida «Coavaluació del pòster», revisa el pòster d'un company criteri a criteri i després omple la rúbrica que t'ha enviat per EdVoice.", hints: [
        "Primer mira el pòster sencer sense escriure. Després busca les pistes ✔ de cada criteri.",
        "Un comentari útil diu QUÈ funciona i QUÈ milloraries, amb un exemple concret del pòster."
      ] },
      { apartat: "1", title: "Què hi ha dins la sang?", time: "15 min", phase: "explica", instruction: "Omple l'apartat 1 del full: fes la hipòtesi, identifica les cèl·lules del frotis i compara-ho amb el tub de sang centrifugada.", hints: [
        "Al tub, la part de dalt (groga) és el plasma; la de baix, les cèl·lules.",
        "Si la sang és majoritàriament plasma groc, per què la veiem vermella? Pensa quin component li dóna el color."
      ] },
      { apartat: "2", title: "La doble circulació", time: "20 min", phase: "explica", instruction: "Omple l'apartat 2 del full: per quina raó en calen dues?", hints: [
        "Un circuit va als pulmons (a buscar O₂); l'altre, a tot el cos (a repartir-lo). Què passaria amb un de sol?"
      ] },
      { apartat: "3", title: "Desxifra l'analítica del Marc", time: "20 min", phase: "elabora", instruction: "A l'apartat 3 del full, analitza els valors de l'analítica de Marc Fontana i marca quins estan fora de rang.", hints: [
        "Compara cada valor amb el seu rang normal. Tres pistes apunten al mateix problema: hemoglobina, ferro i mida dels eritròcits.",
        "No diguis encara el diagnòstic complet: només identifica QUÈ està alterat. La causa la lligaràs a S5."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica la cadena causal: ferro baix → ? → ? → ? → corredor es fatiga molt aviat.", hint: "Cada fletxa és una conseqüència. Ferro → hemoglobina → O₂ que arriba al múscul → energia disponible. Omple els passos." },
    { id: "q2", type: "open", text: "Per quina raó la circulació humana és doble (petita + gran)? Quin avantatge té respecte una de sola?", hint: "Pensa en les pressions: els pulmons són delicats (pressió baixa) i el cos és gran (pressió alta). Es poden fer alhora amb una sola bomba?" },
    { id: "q3", type: "multiple", text: "Un esportista d'elit en altitud té l'hematòcrit (% eritròcits) elevat naturalment. Per quina raó és un avantatge?", options: ["Porta més O₂ per litre de sang als músculs", "La sang és més lleuger", "El cor batega menys vegades", "Els músculs necessiten menys ATP"], correct: 0 }
  ],
  homework: {
    readingNext: {
      session: 4,
      text: "Llegeix la lectura de la Sessió 4. A l'inici de la propera sessió faràs el formulari de comprensió (Google Forms).",
      pdfUrl: "/lectures/sa2-s4-lectura.pdf",
      easyUrl: "/lectures/sa2-s4-lectura-FACIL.pdf",
    }, description: "Prepara la Sessió 4: mesura el teu pols en repòs (sense haver fet exercici l'última hora). Posa els dits índex i mig al coll o al canell, compta les pulsacions durant 30 segons i multiplica per 2. Anota el resultat a la fitxa i porta'l a la Sessió 4. Són 2 minuts; necessites un rellotge i els teus propis dits. No es pot fer amb IA." },
  recoveryInstructions: [
    "Mira la imatge del tub de sang centrifugada i la del frotis d'aquesta pàgina i omple l'apartat 1 de la fitxa",
    "Coavalua el pòster de SA1 que et digui el docent amb la bastida i omple la rúbrica que t'ha enviat per EdVoice",
    "Mira el diagrama de doble circulació d'aquesta pàgina",
    "Llegeix la teoria (apartat EXPLICA)",
    "Fes la pràctica al laboratori virtual (botó de sota) i copia el resum a la fitxa",
    "Omple la fitxa S3 i fes l'exit tiquet online a l'acordió de sota"
  ],
  recoveryLinks: [{ label: "Laboratori virtual de la pràctica", url: "/labs/sa2/lab_s3_circulatori.html", icon: "🧪" }],
  oaLinks: ["OA1"], competencies: ["CE1", "CE2", "CE4"]
}
