export const sa2s3 = {
  id: "s3", saId: "sa2",
  title: "El Sistema Circulatori i la Sang",
  sessionNumber: 3, biome: "sa2", duration: "2h",
  guiaPerApartats: true,
  engageImage: "/images/sa2-s3-circulatori.jpg",

  // Repte oral curt: hook visual del tub de sang centrifugada, abans del repàs i de la fitxa.
  engageChallenge: "Observem un tub de sang centrifugada: es veuen 3 capes (plasma groc 55%, eritròcits vermells 44%, leucòcits i plaquetes <1%). Per quina raó la sang sembla vermella si la majoria és plasma groc?",
  engageQuestion: "Avui comencem a desxifrar l'analítica de sang de la paret. L'hemoglobina és baixa: 9,2 g/dL. Però primer: saps de quines coses es compon la sang?",
  engageContext: "Un tub de sang centrifugada es parteix en tres capes ben visibles, i la més gran és groga. Si el 55 % de la sang és plasma groc, per quina raó la veiem vermella?",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures). Tasca 2, 09/09/2026.
  teacherNotes: "Hook visual: tub de sang centrifugada amb les 3 capes. Sessió reformulada (26/10/2026) per cabre en 2h: fora les 100 targetes i l'etiquetatge del cor (ja es fa a S4). L'explora és la coavaluació del pòster de SA1: cal tenir els pòsters a l'aula, la bastida impresa (1 per alumne) i la rúbrica d'EdVoice oberta. L'app de circulació passa a opcional / casa. L'apartat 0 és repàs individual de les sessions 1 i 2 (04/11/2026); la hipòtesi de les 100 cèl·lules i l'esquema de la versió A són a l'inici de l'apartat 1. El laboratori virtual antic (targetes i etiquetatge del cor) ja no s'enllaça.",

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
      scaffold: "Mira la taula de l'analítica. Omple: Hb del Marc = ___ g/dL (normal: ___). Ferro = ___ (normal: ___). Eritròcits = ___ (normals: petits o grans?). El problema és que el Marc té MASSA _______ o MASSA POC _______?",
      challenge: "Raona la cadena causal COMPLETA de l'enigma 2: Ferro baix → _______ → eritròcits petits → _______ per litre de sang → cor _______ → fatiga precoç. Connecta-ho: si el Marc prengués ferro, en quantes setmanes esperaries que millorés la Hb? Per quina raó no és immediat?"
    }
  },

  // ── APARTAT 0 · REPÀS DE LES SESSIONS 1 I 2 ───────────────
  // Mateixes preguntes que la fitxa B.
  repas: {
    prompts: [
      { text: "Quin nutrient és el combustible ràpid de la cèl·lula? De quin grup d'aliments l'obtens?" },
      { text: "En quin òrgan passen els nutrients a la sang? Quines estructures de la seva paret ho fan possible?" },
      { text: "Escriu el camí de la glucosa des de l'intestí fins a una cèl·lula del múscul. On acaba i què s'hi obté?" },
      { text: "Per a què serveix el ferro que hi ha al menjar? Digues un aliment que en tingui." }
    ],
    note: "Primer de memòria. Després comprova-ho amb les fitxes de les sessions 1 i 2 i la teoria de la sessió 1 al web."
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
  appApartat: "2",
  appNote: "Opcional, per a casa o si acabes abans: segueix una molècula d'O₂ per 7 estacions (alvèol → hemoglobina → cor esquerre → aorta → capil·lar → mitocondri → tornada). Prova el botó «Mode anèmia»: t'ajudarà a entendre l'enigma 2 del Marc. Inclou el mode Simplifica, ajuda en àrab, castellà i urdú, i un quiz autocorrectiu de 3 preguntes.",

  theoryPoints: [
    { id: "t1", apartat: "1", heading: "Composició de la sang", text: "==55% plasma|o== (groc): transport de nutrients, hormones, CO₂. ==44% eritròcits|r== (vermells): transport ==O₂|b== via ==hemoglobina==. ==<1% leucòcits i plaquetes==: defensa i coagulació.", type: "concept" },
    { id: "t2", apartat: "1", heading: "==Hemoglobina==: la proteïna que porta l'O₂", text: "L'==hemoglobina== és una proteïna dels ==eritròcits|r== que conté ==ferro==. Als ==pulmons|b==, el ferro s'uneix a l'==O₂|b== (es torna vermell brillant). Als ==teixits==, el cedeix. Sense ferro → no es forma hemoglobina → menys O₂ als músculs.", type: "concept", video: "/animacions/sa2-s3-t2.mp4",
      image: "/images/sa2-hemoglobina.svg", imageWide: true,
      imageAlt: "A l'esquerra, la molècula real d'hemoglobina amb quatre cadenes de proteïna, vermelles i blaves, i els grups hemo amb el ferro marcats en taronja. A la dreta, un esquema: als pulmons el ferro s'uneix a l'oxigen i la sang és vermell brillant; als teixits el deixa anar cap a la cèl·lula del múscul i la sang és vermell fosc.",
      imageCaption: "L'hemoglobina té 4 cadenes de proteïna i cada una té un grup hemo amb un àtom de ferro: per això pot portar fins a 4 O₂. Molècula: estructura 1GZX, Zephyris, Wikimedia Commons (CC BY-SA 3.0)." },
    { id: "t3", apartat: "2", heading: "Per quina raó la circulació és doble", text: "==Petita circulació|b==: cor → pulmons → cor (oxigenació). ==Gran circulació|o==: cor → tot el cos → cor (distribució). Dos circuits permeten ==dues pressions==: baixa als pulmons (alvèols delicats) i alta cap al cos. Si es barregen ==sang oxigenada i desoxigenada|r== → menys eficiència.", type: "concept" },
    { id: "t4", apartat: "3", heading: "Com es llegeix una analítica", text: "Cada valor es compara amb el seu ==rang de referència==. Un sol valor fora de rang diu poca cosa: l'important és veure si els que surten del rang ==apunten al mateix==, i els que hi queden dins serveixen de control. Quan falta ferro i per això es fabrica menys hemoglobina, parlem d'==anèmia ferropènica==.", type: "keyequation", badge: "🔗 Enigma 2 — segon pas" }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "Frotis de sang al microscopi", src: "/images/sa2-frotis-sang.png", caption: "Frotis de sang real al microscopi. Cada número assenyala un tipus de cèl·lula: fixa't en la forma, el color i si tenen nucli.", note: "Glòbuls vermells (1), glòbuls blancs (2) i plaquetes (3) tal com es veuen en una analítica real." },
    { id: "Fig.2", apartat: "1", before: true, title: "Composició de la sang (en volum)", src: "/images/sa2-composicio-sang.png", caption: "Tub de sang centrifugada: mira quina part ocupa cada capa i contrasta-ho amb la teva hipòtesi.", note: "55% plasma (groc) + 45% cèl·lules sanguínies, de les quals >99% són glòbuls vermells. Per això la sang sembla vermella tot i ser majoritàriament plasma groc." },
    { id: "Fig.3", apartat: "2", before: true, title: "La doble circulació", src: "/images/sa2-circulacio-doble.png", caption: "Segueix les fletxes des del cor: on agafa O₂ la sang i on el deixa? Compta quantes vegades passa pel cor a cada volta.", note: "Circuit pulmonar (cor → pulmons → cor, a oxigenar) i circuit general (cor → cos → cor, a repartir). Cada circuit té la seva pressió: baixa als pulmons i alta cap al cos." },
    { id: "Fig.4", apartat: "2", title: "Els tres tipus de vasos sanguinis", src: "/images/sa2-vasos-sanguinis.png", caption: "Compara el gruix de la paret dels tres vasos i busca on hi ha vàlvules.", note: "Artèria (paret gruixuda, alta pressió), vena (vàlvules, baixa pressió) i capil·lar (una sola cèl·lula de gruix, on es fa l'intercanvi de substàncies)." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s3-fitxa-A.html", B: "/fitxes/sa2-s3-fitxa-B.html", C: "/fitxes/sa2-s3-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa2-s3-teoria.pdf",

  sessionMaterials: [
    { id: "fitxaAcollidaUR", title: "Fitxa de la sessió · acollida (urdú)", url: "/fitxes/sa2-s3-fitxa-acollida-UR.html", who: "alumnat d'acollida: mateixos apartats que la classe" },
    { id: "fitxaAcollidaAR", title: "Fitxa de la sessió · acollida (àrab)", url: "/fitxes/sa2-s3-fitxa-acollida-AR.html", who: "alumnat d'acollida: mateixos apartats que la classe" },
    { id: "bastidaCoav", title: "Bastida per coavaluar el pòster de SA1", url: "/fitxes/sa2-s3-bastida-coavaluacio.html", who: "per a la coavaluació (1 per alumne), abans d'omplir la rúbrica d'EdVoice" },
    { id: "bastidaCoavUR", title: "Bastida per coavaluar el pòster de SA1 · acollida (urdú)", url: "/fitxes/sa2-s3-bastida-coavaluacio-UR.html", who: "alumnat d'acollida que llegeix urdú (català + urdú, 2 fulls)" },
    { id: "bastidaCoavAR", title: "Bastida per coavaluar el pòster de SA1 · acollida (àrab)", url: "/fitxes/sa2-s3-bastida-coavaluacio-AR.html", who: "alumnat d'acollida que llegeix àrab (català + àrab, 2 fulls)" },
    { id: "sortida", title: "Exit tiquet (versions A i B)", url: "/fitxes/sa2-s3-exit-ticket.html", who: "per al final de la sessió" },
    { id: "sortidaC", title: "Exit tiquet (versió C)", url: "/fitxes/sa2-s3-exit-ticket-C.html", who: "per al final de la sessió" }
  ],

  fitxaGuide: {
    fitxaName: "Fitxa de la sessió 3 — La sang i la circulació",
    steps: [
      { apartat: "—", title: "Formulari de comprensió de la lectura", time: "5 min", phase: "engage", instruction: "Abans de començar la fitxa, fes el formulari de comprensió (Google Forms) de la lectura de la sessió 3 que havies de llegir a casa.", hints: [] },
      { apartat: "0", title: "Repàs — del menjar a la cèl·lula", time: "5 min", phase: "engage", instruction: "Omple l'apartat 0 de la fitxa, sol o sola: repàs de les sessions 1 i 2.", hints: [] },
      { apartat: "—", title: "Coavalua el pòster de SA1", time: "15 min", phase: "explore", explora: true, instruction: "Amb la bastida «Coavaluació del pòster», revisa el pòster d'un company criteri a criteri i després omple la rúbrica que t'ha enviat per EdVoice.", hints: [
        "Primer mira el pòster sencer sense escriure. Després busca les pistes ✔ de cada criteri.",
        "Un comentari útil diu QUÈ funciona i QUÈ milloraries, amb un exemple concret del pòster."
      ] },
      { apartat: "1", title: "Què hi ha dins la sang?", time: "15 min", phase: "explica", instruction: "A l'apartat 1 de la fitxa: escriu la teva hipòtesi (a la versió A, comença per l'esquema del viatge de la sang), identifica les cèl·lules del frotis, contrasta la hipòtesi amb el tub de sang centrifugada i respon la pregunta clau.", hints: [
        "Al frotis, fixa't en la forma de cada cèl·lula i en si té nucli. El glossari de la fitxa t'ajuda amb les paraules de la imatge.",
        "Al tub, la part de dalt (groga) és el plasma; la de baix, les cèl·lules.",
        "Si la sang és majoritàriament plasma groc, per quina raó la veiem vermella? Pensa quin component li dóna el color."
      ] },
      { apartat: "2", title: "La doble circulació — per quina raó en calen dues?", time: "20 min", phase: "explica", instruction: "A l'apartat 2 de la fitxa: segueix el camí de la sang a l'esquema (a la versió A, compara'l amb el teu i corregeix-lo), respon el «Reflexiona» i compara els tres tipus de vasos.", hints: [
        "Un circuit va als pulmons (a buscar O₂); l'altre, a tot el cos (a repartir-lo). Què passaria amb un de sol?",
        "Mira el gruix de la paret de cada vas: quin ha d'aguantar més pressió?"
      ] },
      { apartat: "3", title: "Desxifra l'analítica del Marc", time: "20 min", phase: "elabora", instruction: "A l'apartat 3 de la fitxa: compara cada valor de l'analítica amb el seu rang, marca Baix, Correcte o Alt, escriu què vol dir cada valor que en surt i acaba amb el diagnòstic.", hints: [
        "Compara cada valor del Marc amb el rang, número per número. No et fiïs de la impressió general.",
        "Mira quins valors surten del rang: tenen alguna cosa en comú? Els altres et serveixen de control.",
        "Per al diagnòstic, pensa què necessita l'hemoglobina i què porta."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica la cadena causal: ferro baix → ? → ? → ? → corredor es fatiga molt aviat.", hint: "Cada fletxa és una conseqüència. Pensa què fabrica el cos amb el ferro, què transporta aquesta molècula i per a què la necessita el múscul." },
    { id: "q2", type: "open", text: "Per quina raó la circulació humana és doble (petita + gran)? Quin avantatge té respecte una de sola?", hint: "Pensa en les pressions: què aguanten els alvèols i què cal per arribar a tot el cos? Es pot fer tot alhora amb una sola volta?" },
    { id: "q3", type: "multiple", text: "Un esportista d'elit en altitud té l'hematòcrit (% eritròcits) elevat naturalment. Per quina raó és un avantatge?", options: ["Porta més O₂ per litre de sang als músculs", "La sang és més lleugera", "El cor batega menys vegades", "Els músculs necessiten menys ATP"], correct: 0 }
  ],
  homework: {
    readingNext: {
      session: 4,
      text: "Llegeix la lectura de la Sessió 4. A l'inici de la propera sessió faràs el formulari de comprensió (Google Forms).",
      pdfUrl: "/lectures/sa2-s4-lectura.pdf",
      easyUrl: "/lectures/sa2-s4-lectura-FACIL.pdf",
    }, description: "Prepara la Sessió 4: mesura el teu pols en repòs (sense haver fet exercici l'última hora). Posa els dits índex i mig al coll o al canell, compta les pulsacions durant 30 segons i multiplica per 2. Anota el resultat a la fitxa i porta'l a la Sessió 4. Són 2 minuts; necessites un rellotge i els teus propis dits. No es pot fer amb IA." },
  recoveryInstructions: [
    "Fes el formulari de comprensió de la lectura de la sessió 3",
    "Omple l'apartat 0 de la fitxa: primer de memòria i després comprova-ho amb les fitxes de les sessions 1 i 2 i la teoria de la sessió 1",
    "Coavalua el pòster de SA1 que et digui el docent amb la bastida i omple la rúbrica que t'ha enviat per EdVoice",
    "Omple l'apartat 1 de la fitxa amb el frotis i el tub de sang centrifugada d'aquesta pàgina",
    "Omple l'apartat 2 de la fitxa amb la figura de la doble circulació, la dels vasos i la teoria d'aquest apartat",
    "Omple l'apartat 3 de la fitxa: compara cada valor de l'analítica del Marc amb el seu rang",
    "Fes l'exit tiquet en paper i dóna'l al docent"
  ],
  oaLinks: ["OA1"], competencies: ["CE1", "CE2", "CE4"]
}
