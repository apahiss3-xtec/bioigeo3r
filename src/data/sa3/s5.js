export const sa3s5 = {
  id: "s5", saId: "sa3",
  title: "Drogues, addicció i síntesi",
  sessionNumber: 5, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s5-drogues.jpg",
  isFinalSession: true,

  engageQuestion: "Avui és la sessió final de la SA. Resoleu els dos enigmes que han estat a la paret tot el mes. Però primer: per quina raó costa tant deixar una addicció? És només qüestió de «voluntat»?",
  engageContext: "Revisió formulari comprensió prèvia (S4 deures). Connexió amb els dos enigmes — avui es resolen tots dos. El docent explica l'estructura de la sessió: classificació de substàncies → la sinapsi i la droga → mapa de síntesi de tota la unitat → la campanya de comunicació científica.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Explico la sinapsi i el mecanisme de recompensa de la dopamina a nivell molecular.",
      "Analitzo com les drogues segresten el sistema de recompensa (agonisme, antagonisme, bloqueig de la recaptació).",
      "Explico l'addicció com a plasticitat neuronal (reducció de receptors, tolerància, abstinència).",
      "Faig una síntesi connectant tots els conceptes de la unitat en un mapa conceptual argumentat i resolc els dos enigmes amb l'evidència acumulada.",
      "Dissenyo una campanya de comunicació científica i en justifico les decisions davant d'una audiència concreta."
    ],
    B: [
      "Explico la sinapsi i com la dopamina marca la recompensa.",
      "Explico que les drogues fan arribar molta més dopamina als receptors, per camins diferents segons quina sigui.",
      "Explico l'addicció com un canvi físic del cervell (tolerància, abstinència), no com a debilitat moral.",
      "Connecto els conceptes de la unitat en un mapa (patogen → defenses → vacuna → fàrmac → droga) i resolc els dos enigmes.",
      "Dissenyo una campanya de comunicació científica aplicant els 4 criteris de qualitat d'una font."
    ],
    C: [
      "Sé que les drogues actuen com a neurotransmissors i inunden els receptors de dopamina.",
      "Sé que l'addicció és un canvi físic del cervell, no una qüestió de voluntat.",
      "Sé que la tolerància significa que cal cada vegada més dosi per sentir el mateix.",
      "Sé connectar els conceptes de la unitat: patogen → defenses → vacuna → fàrmac → droga.",
      "Preparo amb el meu grup una campanya que desmunta un mite sobre la salut."
    ]
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui és la sessió final de la SA. Resoleu els dos enigmes que han estat a la paret tot el mes. Abans d'escoltar les explicacions, escriviu individualment el que sabeu ara — compareu amb el que vau escriure a S1.",
    prompts: [
      {
        kind: "write",
        text: "Què és per a tu una «droga»? Creus que l'alcohol n'és una? I el cafè?",
        starter: "Per a mi, una droga és..."
      },
      {
        kind: "write",
        text: "Per quina raó costa tant deixar una addicció? És només qüestió de «voluntat»?",
        starter: "Crec que costa tant perquè..."
      }
    ]
  },

  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "==Endogen== vs ==exogen==: medicament o droga?",
      text: "Hi ha substàncies que el cos fabrica (==endògenes|g==: dopamina, endorfines) i d'altres que entren des de fora (==exògenes|o==: cafè, alcohol, fàrmacs, drogues). Una ==droga== és una substància exògena que altera el sistema nerviós i pot crear dependència. El ==cafè i l'alcohol també són drogues|r== — encara que siguin legals. La classificació legal ==no sempre reflecteix el risc real|r== per a la salut.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      image: "/images/s5_droga_vs_neurotransmissor.png",
      imageCaption: "① Poques molècules: el senyal normal. ② Moltíssimes de cop: la inundació dels receptors.",
      heading: "==Drogues==: per quina raó enganyen el cervell",
      text: "Moltes drogues imiten els neurotransmissors naturals (com la ==dopamina==) però en concentracions molt més altes: ==inunden|r== els receptors del nucli accumbens (centre de recompensa). El cervell interpreta: «==això ha estat bo, repeteix-ho|g==». No totes ho fan igual: unes ==imiten|o== el neurotransmissor, d'altres impedeixen que es ==retiri|r== de la sinapsi (cocaïna) i d'altres fan que la neurona n'==alliberi més|p==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      image: "/images/s5_receptors_tolerancia.svg",
      imageCaption: "① sinapsi normal · ② la droga inunda · ③ el cervell retira receptors (tolerància) · ④ sense la droga, el senyal cau per sota del normal (abstinència).",
      heading: "==Tolerància== i ==abstinència==: la base física de l'addicció",
      text: "Amb l'ús repetit, el cervell redueix els ==receptors|r== de dopamina (el que en diem <em>reducció de receptors</em>) → cal cada cop ==més dosi|r== per sentir el mateix efecte (==tolerància==). Si la droga falta, apareix un malestar físic real (==abstinència==). ==Addicció|r==: comportament compulsiu de recerca de la droga malgrat les conseqüències negatives. ==Idea clau|g==: és una malaltia del cervell amb base física, NO una qüestió de voluntat.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Síntesi SA3: de la ==infecció== a la ==decisió==",
      text: "Cadena completa: ==patogen entra|r== (S1) → SI innata (hores) → SI adaptativa (dies): anticossos + memòria (S2) → ==vacuna|g== = entrenar el SI per avançat (S3) → ==immunitat de grup|g== = protecció col·lectiva → fàrmac tracta el ==símptoma|o== (S4) → droga ==segresta la sinapsi|r== (S5). I ara ja tens tot el que et cal per tancar els ==dos enigmes|g== de la paret: el de la grip de la Martina i el de l'article sobre les vacunes.",
      type: "synthesis",
      badge: "✅ SA3 Síntesi completa"
    }
  ],

  sessionMaterials: [
    { name: "Targetes de substàncies (20 targetes retallables + solucionari docent)", url: "/fitxes/sa3-s5-targetes-substancies.html" },
    { name: "Rúbrica de la campanya de comunicació científica", url: "/fitxes/sa3-s5-rubrica-campanya.html" },
    { name: "Full de sortida — nivells A i B", url: "/fitxes/sa3-s5-full-sortida.html" },
    { name: "Full de sortida — nivell C (amb bastida)", url: "/fitxes/sa3-s5-full-sortida-C.html" }
  ],

  fitxaUrl: { A: "/fitxes/sa3-s5-fitxa-A.html", B: "/fitxes/sa3-s5-fitxa-B.html", C: "/fitxes/sa3-s5-fitxa-C.html" }, teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa Sessió 5 — Drogues, addicció i síntesi",
    steps: [
      { apartat: "0", title: "Idees prèvies i la demostració de les pilotes", time: "10 min", phase: "engage", instruction: "Apartat 0: escriu què és per a tu una droga i per quina raó costa tant deixar una addicció. Després mira la demostració de les pilotes de ping-pong i anota què li passa a la neurona que rep.", hints: [] },
      { apartat: "1", title: "Classificació de substàncies", time: "25 min", phase: "explore", instruction: "Apartat 1: amb les targetes de substàncies, completa el quadre (endògena/exògena, medicament, droga recreativa i zona grisa) amb 2 exemples a cada casella i el criteri que has fet servir.", hints: [
        "Endògena = el cos la produeix (dopamina, endorfines). Exògena = entra des de fora (cafè, alcohol, fàrmacs, drogues).",
        "La zona grisa (cafè, alcohol, tabac) és legal però també altera el sistema nerviós i pot crear dependència.",
        "Hi ha targetes que no cauen net en una sola casella (morfina, diazepam): són les que fan pensar."
      ] },
      { apartat: "2", title: "La sinapsi i la droga", time: "25 min", phase: "explica", instruction: "Apartat 2: completa les frases sobre com una droga imita un neurotransmissor, resol el cas de la Idoia i explica per quina raó el cervell redueix receptors amb l'ús repetit.", hints: [
        "Dopamina: neurotransmissor de la recompensa. Una droga inunda els receptors amb molta més concentració que el procés natural.",
        "Tolerància: el cervell s'adapta reduint receptors → cal més dosi. Abstinència: malestar físic quan falta la droga."
      ] },
      { apartat: "3", title: "Mapa de síntesi i els dos enigmes", time: "15 min", phase: "explica", instruction: "Apartat 3: dibuixa el mapa conceptual connectant com a mínim 6 conceptes de la unitat i escriu la resolució dels dos enigmes de la paret.", hints: [
        "Enigma A (Martina): hi ha dues explicacions possibles i totes dues poden ser certes alhora. Una depèn del seu cos; l'altra, de la gent del seu voltant.",
        "Enigma B (article Wakefield): aplica-hi els 4 criteris de qualitat de la Sessió 3, un per un, i mira quins incompleix. Les dades són a la teva fitxa."
      ] },
      { apartat: "4", title: "La campanya de comunicació científica", time: "25 min", phase: "elabora", instruction: "Apartat 4, en grup: planifiqueu la campanya que desmunta un mite sobre la salut. Ompliu el guió de 4 apartats, decidiu l'audiència i el canal, i repartiu-vos la feina. L'acabareu a casa.", hints: [
        "El mite ha de fallar almenys un dels 4 criteris de qualitat de la Sessió 3: revisió per parells, mida de la mostra, conflicte d'interès, replicació.",
        "Llegiu la rúbrica de la campanya ABANS de començar: us diu exactament què es valora."
      ] }
    ]
  },

  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Resol l'enigma A: per quina raó la Martina (no vacunada) i la seva àvia (vacunada) van escapar de la grip de novembre? Dona almenys 2 explicacions fonamentades per a la Martina.", hint: "Per a la Martina hi ha dos camins possibles i tots dos són compatibles: un depèn del SEU cos i l'altre de la gent del SEU VOLTANT. Per a l'àvia n'hi ha prou amb el mecanisme de la Sessió 3." },
    { id: "q2", type: "open", text: "L'article de Wakefield afirmava que les vacunes causen autisme. Per quina raó la revista científica el va retirar? Cita almenys 2 raons concretes.", hint: "Repassa els 4 criteris de qualitat de la Sessió 3 i mira quins incompleix l'article. La caixa «Dades per a l'Enigma B» de la teva fitxa té els números." },
    { id: "q3", type: "open", text: "Per quina raó l'addicció NO és «només qüestió de voluntat»? Usa les paraules dopamina i receptors.", hint: "Comença pel que passa als receptors quan la droga hi arriba, i segueix amb el que fa el cervell si això es repeteix cada dia. La figura dels quatre quadres de l'apartat 2 explica tota la cadena." }
  ],
  exitTicketNote: "Avaluació sumativa CE1 + CE2 + CE5 (resolució dels dos enigmes de la unitat). Individual, sense ajuda, i es recull. Es pot respondre a l'ordinador o en paper: el full imprès porta les mateixes tres preguntes. /fitxes/sa3-s5-full-sortida.html (nivells A i B) i /fitxes/sa3-s5-full-sortida-C.html (nivell C, amb bastida).",

  deliverables: [
    { name: "Campanya de comunicació científica (cartell o vídeo de 60 s)", note: "Es comença a classe a l'apartat 4 i s'acaba a casa. Entrega a Classroom, termini 1 setmana. Desmunta un mite sobre salut aplicant els 4 criteris de qualitat. Rúbrica: /fitxes/sa3-s5-rubrica-campanya.html" }
  ],

  campanyaStructure: {
    title: "Campanya: estructura mínima",
    sections: [
      "1. L'afirmació que desmuntes (cita la font original)",
      "2. Per quina raó és un mite: aplica els 4 criteris de qualitat a la font original",
      "3. L'evidència real: cita almenys 1 estudi científic vàlid",
      "4. Missatge final: clar, breu i dirigit al públic objectiu (companys de classe)"
    ]
  },

  homework: { description: "Prova escrita de la SA (Defensors del cos): repassa el mapa síntesi, els dos enigmes i els mecanismes (vacuna, fàrmac, droga). Acaba i entrega la campanya de comunicació científica a Classroom.", deadline: "1 setmana (data acordada a Classroom)" },

  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (endogen/exogen, sinapsi i dopamina, tolerància i abstinència, síntesi SA3)",
    "Omple el diagrama de síntesi: patogen → SI innata → SI adaptativa → tractament → prevenció (vacuna) → fàrmac → droga",
    "Escriu la resolució dels dos enigmes (Martina + article Wakefield) amb les cadenes causals",
    "Prepara la campanya de comunicació científica amb el guió de 4 apartats i entrega-la a Classroom (cartell o vídeo de 60 s), seguint la rúbrica"
  ],
  oaLinks: ["OA4"], competencies: ["CE1", "CE2", "CE5"]
}
