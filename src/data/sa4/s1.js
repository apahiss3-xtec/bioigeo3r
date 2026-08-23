// SA4 · Sessió 1 — «Qui som? El lloc de l'ésser humà»
// Reconciliat 2026-08-23 amb la spec «SA4 - Sessió 1 - SPEC» del vault.
// Canvis d'aquell run (vegeu §8 de la spec):
//  · ELIMINATS els `video:` de t1/t2/t3. Apuntaven a /animacions/sa4-s4-t*.mp4,
//    que són les animacions de MÈTODES ANTICONCEPTIUS I ISTs: les carpetes
//    animacions/sa4-sN-tM/ van quedar desfasades una posició quan es va inserir
//    «Qui som?» com a sessió 1. Per a la taxonomia no hi ha cap animació; la
//    spec (§2bis) decideix imatge + text, que és el format adequat.
//  · Les `hints` donaven la resposta que la fitxa demana omplir → ara enfoquen.
//  · fitxaUrl (PDF inexistent) → fitxaUrls per nivell, als HTML reals publicats.
export const sa4s1 = {
  id: "s1", saId: "sa4",
  title: "Qui som? El lloc de l'ésser humà",
  sessionNumber: 1, biome: "sa4", duration: "2h",
  engageImage: "/images/sa4-s1-arbre-vida.jpg",

  engageQuestion: "Som animals? Què ens fa humans: que pensem, que parlem, que tenim cultura... o també alguna cosa biològica? On col·locaries l'ésser humà en un arbre amb un ximpanzé, un peix i una planta?",
  engageContext: "Obertura de la bústia de preguntes anònimes (queda oberta tota la unitat i alimenta les sessions següents): tothom escriu com a mínim una pregunta sobre el cos, la reproducció o la sexualitat, o bé un 'no en tinc cap' (perquè ningú quedi marcat). Es presenta l'acord d'aula: es respecta, no es jutja, s'usa vocabulari científic, el que es diu a l'aula es queda a l'aula. Hook: una imatge de l'arbre de la vida amb l'humà com una branca minúscula entre milions — som una sola espècie del gènere Homo, totes les altres s'han extingit.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  // Han de coincidir literalment amb la caixa 🎯 de la fitxa del mateix nivell.
  levelObjectives: {
    A: [
      "Critico l'eina que faig servir: detecto quin caràcter no serveix per separar cap grup i per quina raó.",
      "Argumento quan un caràcter perdut pot fer equivocar un arbre evolutiu.",
      "Arbitro entre dos tipus de prova (ADN i morfologia) i reconec en quin cas cadascuna és la millor.",
      "Formulo una hipòtesi sobre l'extinció d'una espècie i dic quina dada la falsaria.",
      "Explico la convergència: per quina raó dues espècies no emparentades s'assemblen."
    ],
    B: [
      "Situo l'ésser humà com un ésser viu més i com l'única espècie viva del gènere Homo, i ho justifico amb caràcters, no amb impressions.",
      "Construeixo un cladograma ordenant espècies segons els caràcters que comparteixen.",
      "Explico que les classificacions científiques són provisionals i canvien amb proves noves, com l'ADN.",
      "Distingeixo una pregunta 'de biologia' d'una pregunta 'de decisió i valors'."
    ],
    C: [
      "Sé què és un caràcter i sé col·locar una espècie a l'arbre.",
      "Sé que el nostre gènere és Homo i que som l'única espècie que en queda viva.",
      "Sé les tres funcions vitals que fa tot ésser viu.",
      "Sé que un arbre de la vida pot canviar si apareixen proves noves."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Tens l'arbre ja començat (el pi, la formiga i l'humà hi són) i una graella de caràcters per marcar amb ✓ i ✗. Només has d'escriure el nom de les set espècies que falten dins de les caixes buides.",
      challenge: "Dels nou caràcters, n'hi ha un que no separa cap grup nou en aquesta llista. Troba'l, explica per quina raó no serveix aquí i digues amb quina espècie nova sí que serviria."
    },
    "2": {
      scaffold: "Cada bloc comença amb una imatge i una càpsula 'Per llegir'. La taula de funcions vitals ja té quatre caselles resoltes com a exemple.",
      challenge: "Formula una hipòtesi de per quina raó Homo neanderthalensis es va extingir i Homo sapiens no — i digues quina dada et faria abandonar-la."
    },
    "3": {
      scaffold: "El dofí i les altres dues espècies es resolen encerclant entre dues opcions i aparellant amb fletxes; la pregunta d'escriptura va bastida amb OBSERVO → EM PREGUNTO → CONNECTO → DEDUEIXO.",
      challenge: "Explica per quina raó el dofí i un peix s'assemblen tant tot i no ser parents propers (convergència), i parteix una pregunta de la bústia en la seva meitat científica i la seva meitat de valors."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Comencem una unitat nova. Escriu i dibuixa el que penses ara — no es corregeix, i el tornaràs a mirar al final per veure com ha canviat el teu pensament.",
    prompts: [
      {
        kind: "draw",
        text: "On col·locaries l'ésser humà en un arbre amb un ximpanzé, un peix i una planta? Dibuixa'n un esbós ràpid.",
        starter: "El meu arbre té l'humà a..."
      },
      {
        kind: "write",
        text: "Som animals? Què et sembla que ens fa humans: que pensem, que parlem, que tenim cultura... o també alguna cosa biològica?",
        starter: "Crec que som... perquè..."
      }
    ]
  },

  exploreInstructions: [
    "En grups de 4: rebeu 10 targetes d'espècies (pi, formiga, truita, granota, llangardaix, serp, macaco, goril·la, ximpanzé i humà) i 9 targetes de caràcters (té cèl·lules, ha de menjar altres éssers vius, té columna vertebral, té quatre extremitats, es reprodueix fora de l'aigua, té pèl i les cries mamen, té el polze oposable, no té cua, camina sempre dret sobre dues cames)",
    "Pregunta investigadora prèvia: quin criteri faràs servir per ordenar de 'més semblant' a 'menys semblant' a l'humà?",
    "Tasca 1: poseu cada targeta de caràcter al costat de TOTES les espècies que el tenen (el pi només en té una: és normal)",
    "Tasca 2: ordeneu les espècies de més a menys properes a l'humà segons quants caràcters comparteixen",
    "Tasca 3: dibuixeu l'arbre a la fitxa — cada branca marca on apareix un caràcter nou — i situeu-hi l'humà justificant-ho amb un caràcter, no amb una impressió",
    "Posada en comú: tots els grups heu obtingut el mateix arbre? On difereix? Per quina raó?",
    "Moment epistèmic: dos casos us hauran fet dubtar (la serp i l'empat goril·la/ximpanzé). Quin tipus de prova és més fiable, la forma del cos o l'ADN? Pot canviar un arbre que avui sembla segur?"
  ],
  exploreDuration: "35 min",
  exploreMaterials: [
    "Targetes d'espècies i de caràcters — 1 joc per grup de 4 (full imprimible 'Targetes del cladograma')",
    "Fitxa del teu nivell, amb la pregunta investigadora i l'espai per dibuixar l'arbre"
  ],

  // Material físic que la sessió dona per existent (comprovació transversal 'ah').
  sessionMaterials: [
    { id: "M1", title: "Targetes del cladograma (10 espècies + 9 caràcters + solucionari docent)", url: "/fitxes/sa4-s1-targetes-cladograma.html", who: "docent imprimeix, 1 joc per grup de 4" },
    { id: "M2", title: "Bústia de preguntes anònimes: caixa + papers petits + cartell de l'acord d'aula", url: null, who: "docent" },
    { id: "M3", title: "Full de sortida (nivells A i B)", url: "/fitxes/sa4-s1-full-sortida.html", who: "es reparteix als últims 7 minuts" },
    { id: "M4", title: "Full de sortida (nivell C)", url: "/fitxes/sa4-s1-full-sortida-C.html", who: "es reparteix als últims 7 minuts" }
  ],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "==Funcions vitals== compartides per tots els éssers vius",
      text: "Tot ésser viu fa ==nutrició==, ==relació== i ==reproducció==, i intercanvia matèria i energia amb el medi. Connexió amb les unitats anteriors: la cèl·lula i el cos humà que ja heu vist són un cas particular d'aquest patró universal — des del bacteri més senzill fins a l'humà. El pi també fa les tres, però la nutrició la fa ==fabricant-se el menjar amb la llum|g== (la fotosíntesi de la primera unitat).",
      type: "concept",
      image: "/images/sa4-s1-funcions-vitals.svg",
      imageCaption: "Un bacteri, un pi i tu feu les mateixes tres funcions. El que canvia és com les feu."
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Taxonomia i el gènere ==Homo==",
      text: "La classificació biològica té nivells encaixats (regne → fílum → classe → ordre → família → ==gènere== → ==espècie==). ==Homo sapiens|g== és l'==única espècie vivent|g== del gènere Homo. Altres espècies del mateix gènere ja ==extingides|r==: Homo habilis, Homo erectus i Homo neanderthalensis — i sapiens i neanderthalensis ==van conviure== a Europa. Caràcters distintius de la nostra espècie: ==bipedisme==, ==encèfal gran==, ==llenguatge==.",
      type: "concept",
      image: "/images/sa4-s1-linia-temps-homo.svg",
      imageCaption: "Compte amb la marca // de l'eix: l'escala canvia, i per això Homo erectus va durar molt més temps del que sembla."
    },
    {
      id: "t3",
      apartat: "2",
      heading: "La ==ciència canvia==: classificacions provisionals",
      text: "Els dos casos que us han fet dubtar amb les targetes es resolen aquí. (a) La ==serp== no té quatre extremitats, però els seus avantpassats sí que en tenien: les va ==perdre|o==, i algunes serps encara conserven un trosset d'os de la pelvis. Un caràcter que es perd pot enganyar si només mires la forma del cos. (b) ==Goril·la o ximpanzé?== Amb les targetes queden ==empatats|o==; el desempat el dona l'==ADN|p==. Quan es va poder llegir l'ADN, molts arbres construïts només amb morfologia ==van canviar|o==. No és que abans estiguessin 'malament': és que la ciència ==millora amb proves noves|g==.",
      type: "epistemic",
      badge: "🔬 Moment epistèmic"
    }
  ],

  graphicResources: [
    { id: "F1", apartat: "2", title: "Les tres funcions vitals en tres éssers vius", src: "/images/sa4-s1-funcions-vitals.svg", note: "Bacteri / pi / humà × nutrició / relació / reproducció, amb un exemple per casella." },
    { id: "F2", apartat: "2", title: "Línia temporal del gènere Homo", src: "/images/sa4-s1-linia-temps-homo.svg", note: "Quatre espècies del gènere Homo amb la seva durada real. L'eix està partit i la ruptura d'escala hi va marcada." },
    { id: "F3", apartat: "1", title: "L'arbre a mig fer (nivell C)", src: "/images/sa4-s1-arbre-semiconstruit.svg", note: "Cladograma amb el pi, la formiga i l'humà ja col·locats i set caixes buides. Només s'usa a la fitxa de nivell C." }
  ],

  fitxaUrls: {
    A: "/fitxes/sa4-s1-fitxa-A.html",
    B: "/fitxes/sa4-s1-fitxa-B.html",
    C: "/fitxes/sa4-s1-fitxa-C.html"
  },
  teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa Sessió 1 — Qui som?",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "7 min", phase: "engage", instruction: "Apartat 0: primer dibuixa un arbre amb humà, ximpanzé, peix i planta; després escriu si creus que som animals i què ens fa humans. No es corregeix ara: el compararàs al final de la unitat.", hints: [] },
      { apartat: "1", title: "El cladograma de targetes", time: "35 min", phase: "explore", instruction: "Apartat 1: amb el teu grup, reparteix les targetes de caràcter sobre les espècies, ordena-les i dibuixa l'arbre. Situa-hi l'humà i justifica-ho amb un caràcter.", hints: [
        "Fixa't en els caràcters concrets de les targetes, no en l'aspecte general ('sembla un mico').",
        "Compta quants caràcters comparteix cada espècie amb l'humà abans de decidir l'ordre.",
        "Si hi ha una espècie que no us encaixa, no la forceu: anoteu quina és i per quina raó. Es parla a la posada en comú."
      ] },
      { apartat: "2", title: "Funcions vitals i gènere Homo", time: "20 min", phase: "explica", instruction: "Apartat 2: omple la taula de funcions vitals (Fig. 1) i la del gènere Homo (Fig. 2). Després respon les dues preguntes del moment epistèmic.", hints: [
        "La Fig. 1 té un exemple a cada casella: mira com ho fa cada ésser viu abans d'escriure.",
        "Per a la taula del gènere Homo, llegeix la Fig. 2 de dreta a esquerra i mira quines barres es toquen en el temps.",
        "Compte amb la marca // de l'eix de la Fig. 2: l'escala canvia i les llargades no es poden comparar directament."
      ] },
      { apartat: "3", title: "Espècies noves i preguntes de la bústia", time: "18 min", phase: "elabora", instruction: "Apartat 3: col·loca el dofí, el cocodril i el cargol a l'arbre justificant-ho amb un caràcter. Després classifica les preguntes de la bústia que llegeixi el docent.", hints: [
        "Per a cada espècie nova, pregunta't primer quins dels nou caràcters té — i només després on va.",
        "El dofí té trampa: viure a l'aigua no és cap dels nou caràcters de la llista.",
        "Per classificar una pregunta: es pot comprovar amb una dada o un experiment? Si sí, és 'de biologia'."
      ] },
      { apartat: "4", title: "Metacognició", time: "3 min", phase: "avalua", instruction: "Apartat 4: marca el semàfor, escriu una cosa que t'ha sorprès de l'arbre de la vida i repassa la llista d'objectius.", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketNote: "El full de sortida va en un FULL A PART (no és dins la fitxa), es fa individualment i sense ajuda els últims 7 minuts, i es recull. Porta les mateixes tres preguntes als tres nivells; el nivell C les té bastides i el nivell A hi afegeix una quarta pregunta.",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Dona dos caràcters que compartim amb un ximpanzé i un que ens diferencia. Per quina raó l'humà és un animal?", hint: "Pensa en les targetes que heu fet servir i en les tres funcions vitals." },
    { id: "q2", type: "open", text: "Un arbre de la vida fet fa 100 anys, seria igual que el d'avui? Per quina raó?", hint: "Pensa en quines proves tenien fa 100 anys i quines tenim ara." },
    { id: "q3", type: "open", text: "De les preguntes de la bústia, quina creus que la ciència pot respondre i quina és més aviat una decisió personal?", hint: "Pregunta't si es podria comprovar amb una dada o un experiment." }
  ],

  homework: {
    description: "Cap deures obligatoris. Si et ve una pregunta al cap durant la setmana, escriu-la i posa-la a la bústia el proper dia. I fixa't en algun animal que vegis pel carrer o en una sèrie: quins dels nou caràcters d'avui tindria?",
    deadline: null
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina: funcions vitals compartides, taxonomia i gènere Homo, i el moment epistèmic",
    "Mira les figures F1 (funcions vitals) i F2 (línia temporal del gènere Homo)",
    "Descarrega la fitxa del teu nivell i fes els apartats 1, 2 i 3. Per a l'apartat 1 pots fer servir el full de targetes imprès (M1) o dibuixar l'arbre directament a partir dels nou caràcters",
    "Passa pel despatx a fer el full de sortida abans de la sessió següent"
  ],
  oaLinks: ["OA1"], competencies: ["CE1"]
}
