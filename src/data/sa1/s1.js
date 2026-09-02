export const sa1s1 = {
  id: "s1",
  saId: "sa1",
  title: "Per què ens morim si no mengem ni respirem?",
  sessionNumber: 1,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s1-microcosmos.png",

  // ── ENGANXA (hook) ───────────────────────────────────────
  // Repte oral curt per arrencar (pluja d'idees), abans de la pregunta gran.
  engageChallenge: "Repte ràpid, tots alhora: aguanteu la respiració. Quants segons aguanteu? Ara penseu... per què el cos us obliga a respirar tan aviat, però sí que podeu passar hores —i fins i tot dies— sense menjar?",
  engageQuestion: "Pots aguantar setmanes sense menjar, però només minuts sense respirar. Per quina raó? Què hi ha dins teu que necessita tant l'aire i el menjar?",
  engageContext: "La cèl·lula: la cosa viva més petita, i necessita menjar i aire. Avui descobriràs per què.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  // Mateixos aprenentatges que les 3 versions de la fitxa impresa.
  // Font: vault «SA1 — Aprenentatges per nivell».
  levelObjectives: {
    A: [
      "Justifico per què la cèl·lula és la primera estructura «viva» i no l'orgànul ni la molècula.",
      "Explico, en termes de flux d'energia, per què un heteròtrof ha de menjar i un autòtrof no (fotosíntesi vs. respiració).",
      "Raono com un defecte al mitocondri afectaria tota la cèl·lula i quins teixits ho notarien més.",
      "Valoro què implica que el mitocondri fos un bacteri lliure (Margulis): el model de cèl·lula és revisable."
    ],
    B: [
      "Identifico la cèl·lula com a unitat viva que necessita matèria i energia per crear-se, mantenir-se i reparar-se.",
      "Relaciono les 3 parts clau amb la seva funció: membrana (frontera), nucli (instruccions), mitocondri (energia).",
      "Explico amb les meves paraules què és la respiració cel·lular (glucosa + O₂ → energia) i per què mengem i respirem.",
      "Distingeixo autòtrof d'heteròtrof i situo la cèl·lula a l'escala d'organització."
    ],
    C: [
      "Sé dir què necessita una cèl·lula per viure: aliment i aire (oxigen).",
      "Reconec i anomeno 3 parts de la cèl·lula amb el seu paper en una frase: membrana, nucli, mitocondri.",
      "Completo que al mitocondri es «crema» el menjar i l'aire per fer energia.",
      "Identifico a partir d'una imatge on és cada part."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffold → es mostra a NIVELL C (suport: frases a completar, patró fix)
  // challenge → es mostra a NIVELL A (ampliació: pregunta oberta, connexió)
  apartatExtras: {
    "1": {
      challenge:
        "El mitocondri té el seu PROPI ADN, diferent del del nucli. Quina pista et dóna això sobre el seu origen? Connecta-ho amb la idea de Lynn Margulis."
    },
    "2": {
      scaffold:
        "Completa: la cèl·lula obté energia combinant ________ (el menjar) amb ________ (de l'aire). Aquest procés es diu ____________.",
      challenge:
        "Explica, en termes de FLUX D'ENERGIA, per què un heteròtrof ha de menjar i un autòtrof no. Relaciona la fotosíntesi amb la respiració cel·lular."
    },
    "3": {
      scaffold:
        "Fes servir sempre el mateix patró: «La ________ serveix per a ________». Aplica'l a la membrana, el nucli i el mitocondri.",
      challenge:
        "Raona com un defecte al mitocondri afectaria TOTA la cèl·lula. Quins teixits (múscul, cervell…) ho notarien més i per què?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES (l'enganxada del full) ─────
  // Mateixa lògica que la fitxa: punt de partida de la SA + idees prèvies
  // ABANS de tocar cap teoria. No es corregeix; es compara al final.
  ideesPrevies: {
    startPoint:
      "Avui no estudiem «totes les parts» de la cèl·lula. Estudiem una pregunta: per què el teu cos necessita menjar i aire. La resposta és dins de cada cèl·lula. Anota sense por — les idees prèvies incorrectes no resten: les compararàs amb el que aprenguis.",
    prompts: [
      {
        kind: "draw",
        text: "Dibuixa una cosa viva molt petita del teu cos (per exemple, una cèl·lula). Com creus que és?"
      },
      {
        kind: "write",
        text: "Què creus que necessita aquesta cosa viva per seguir viva?",
        starter: "Crec que necessita…"
      },
      {
        kind: "write",
        text: "Pots aguantar setmanes sense menjar, però només uns minuts sense respirar. Per què creus que passa això?",
        starter: "Crec que passa perquè…"
      }
    ]
  },

  // ── EXPLORA ──────────────────────────────────────────────
  // Instruccions senzilles per projectar a classe: Què / Qui / Temps.
  exploreActivity: {
    what: "Explora l'app de la cèl·lula i busca on es 'crema' el menjar i l'aire, i per on entren i surten les coses. Anota 2–3 hipòtesis a la fitxa.",
    who: { mode: "individual", label: "Individual (després ho posem en comú)" },
    time: 30,
    note: "Exploració guiada, no lliure: primer hipòtesis, després confirmem clicant."
  },
  exploreInstructions: [
    "Obre l'app interactiva de la cèl·lula (a sota)",
    "Pregunta guia: busca dins la cèl·lula on creus que es 'crema' el menjar i l'aire per fer energia, i per on creus que entren i surten les coses",
    "Anota 2–3 hipòtesis a la fitxa ABANS de confirmar res"
  ],
  exploreDuration: "30 min",
  appSrc: "/apps/app_celula.html",
  exploreNote: "Exploració guiada, no lliure: la pregunta guia centra l'atenció en la funció, no en el catàleg.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "La ==cèl·lula== és la primera cosa viva",
      text: "La cèl·lula és la ==unitat viva mínima==: per estar viva ha d'incorporar ==matèria i energia|o== per crear-se, mantenir-se i reparar-se. Ni un orgànul sol, ni una molècula, no estan 'vius' per si sols.",
      type: "concept",
      video: "/animacions/sa1-s1-t1.mp4"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "On es 'crema' el menjar: el ==mitocondri==",
      text: "Al mitocondri, la ==glucosa|o== (del menjar) reacciona amb l'==O₂|b== (de l'aire) i produeix energia en forma d'==ATP|g==. Sense menjar → sense glucosa. Sense respirar → sense O₂. Sense cap dels dos → sense energia → la cèl·lula mor.",
      formula: "glucosa + O₂ → CO₂ + H₂O + ATP",
      type: "keyequation",
      video: "/animacions/sa1-s1-t2.mp4"
    },
    {
      id: "t5",
      apartat: "2",
      heading: "Autòtrofs vs. heteròtrofs",
      text: "Les plantes (autòtrofs) fabriquen el seu propi aliment amb llum solar (fotosíntesi): CO₂ + H₂O + llum → glucosa. Per això no 'mengen'. Els animals (heteròtrofs) han d'obtenir la glucosa menjant altres éssers vius.",
      type: "concept",
      video: "/animacions/sa1-s1-t5.mp4"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "La ==membrana|p==: la frontera intel·ligent",
      text: "La membrana cel·lular és la ==frontera selectiva== que deixa entrar el que la cèl·lula necessita (glucosa, O₂) i treure el que sobra (CO₂). No és una paret rígida: és dinàmica i selectiva.",
      type: "concept",
      video: "/animacions/sa1-s1-t3.mp4"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "El nucli: les instruccions",
      text: "El nucli conté l'ADN: les instruccions per fabricar totes les proteïnes i per reproduir-se. Sense nucli, la cèl·lula no pot reparar-se ni dividir-se.",
      type: "concept",
      video: "/animacions/sa1-s1-t4.mp4"
    },
    {
      id: "t6",
      apartat: "1",
      heading: "El model de cèl·lula és revisable",
      text: "Lynn Margulis va proposar que el mitocondri va ser un bacteri lliure que va ser 'engolot' per una altra cèl·lula (endosimbiosi). Va ser rebutjada durant anys. Avui és teoria acceptada. La ciència canvia els seus models.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència",
      video: "/animacions/sa1-s1-t6.mp4"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "3", title: "Les 3 parts clau de la cèl·lula", src: "/images/sa1-cel-3-parts.png", note: "Membrana (1), nucli (2) i mitocondri (3) — els tres protagonistes de la sessió. Identifica'ls a l'app interactiva." },
    { id: "Fig.2", apartat: "3", title: "Cèl·lula animal per etiquetar", src: "/images/sa1-cel-etiquetable.png", note: "Posa nom als orgànuls a partir del que has explorat. Útil per repassar abans de l'exit tiquet." },
    { id: "Fig.3", apartat: "2", before: true, title: "Els nivells d'organització de la vida", src: "/images/sa1-nivells-organitzacio.png", note: "De l'àtom a l'organisme: situa't abans de res. La cèl·lula és el primer nivell que considerem viu — ara veurem per què. Et servirà també per a la maqueta de la feina de casa." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa1-s1-fitxa-A.html", B: "/fitxes/sa1-s1-fitxa-B.html", C: "/fitxes/sa1-s1-fitxa-C.html" },
  teoriaPdfUrl: null,
  elaborateNote: "Pregunta central de la fitxa: 'Per quina raó una cèl·lula muscular té molts més mitocondris que una de la pell?'",

  // ── GUIA DE LA FITXA (apartats reals del full imprès) ────
  fitxaGuide: {
    fitxaName: "Fitxa S1 — La cèl·lula viva",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "5 min",
        phase: "engage",
        instruction: "Omple l'apartat 0 — Idees prèvies del full: dibuixa una cosa viva molt petita del teu cos i escriu què creus que necessita per viure. No hi ha respostes dolentes.",
        hints: []
      },
      {
        apartat: "1",
        title: "Explore: mira dins la cèl·lula",
        time: "25 min",
        phase: "explore",
        instruction: "Mentre explores l'app, omple l'apartat 1 del full. Anota les teves 2–3 hipòtesis ABANS de confirmar res clicant.",
        hints: [
          "Busca l'orgànul que consumeix oxigen: és on es 'crema' el menjar.",
          "Per on poden entrar i sortir les coses? Fixa't en la frontera de la cèl·lula, no en el que hi ha al mig."
        ]
      },
      {
        apartat: "2",
        title: "La cèl·lula necessita menjar i respirar",
        time: "20 min",
        phase: "explica",
        instruction: "Amb la teoria llegida, omple l'apartat 2 del full.",
        hints: [
          "Connecta tres coses en cadena: aliment, oxigen i energia. Què passa si en falta una?",
          "Sense menjar → sense glucosa. Sense respirar → sense O₂. I llavors, què no pot fer el mitocondri?"
        ]
      },
      {
        apartat: "3",
        title: "Les 3 parts clau de la cèl·lula",
        time: "20 min",
        phase: "explica",
        instruction: "Omple l'apartat 3 del full: membrana, nucli i mitocondri.",
        hints: [
          "Per a cada part escriu la FUNCIÓ, no només el nom: pregunta't què passaria si la cèl·lula no la tingués.",
          "Una és frontera, una guarda instruccions i una fabrica energia. Explica-ho amb les teves paraules i un exemple."
        ]
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Explica amb les teves paraules per quina raó diem que la cèl·lula és la unitat bàsica de la vida. Per quina raó un orgànul sol no és 'viu'?",
      hint: "Pensa en les funcions vitals: alimentar-se, mantenir-se, reparar-se, reproduir-se. Un orgànul sol pot fer tot això?"
    },
    {
      id: "q2",
      type: "open",
      text: "Relaciona el mitocondri amb el fet que necessitem menjar i respirar cada dia. Explica la connexió de manera causal.",
      hint: "Pista del full: parla del mitocondri, de l'oxigen, de l'aliment i de l'energia — i posa'ls en ordre de causa a efecte."
    },
    {
      id: "q3",
      type: "multiple",
      text: "Una cèl·lula muscular té molts mitocondris. Per quina raó?",
      options: [
        "Perquè el múscul necessita molta energia (ATP) per contraure's",
        "Perquè el múscul és molt gran",
        "Perquè el mitocondri és l'orgànul més petit",
        "Perquè el múscul no té nucli"
      ],
      correct: 0
    }
  ],

  // ── METACOGNICIÓ (part de l'exit tiquet) ─────────────────
  metacognition: {
    prompt: "Compara el dibuix que vas fer al principi amb el que saps ara. Quina cosa t'ha sorprès més?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Posa un ou en vinagre blanc (ou cru o dur, en un got amb vinagre que el cobreixi). Deixa'l 48 hores. Observa i mesura. Ho portaràs a la propera sessió per a l'experiment d'osmosi.",
    secondTask: "Comença la representació dels 10 nivells d'organització (de l'àtom a la biosfera), en el format que triïs. Entrega a S2. I fes el dibuix de memòria de les 3 parts de la cèl·lula, sense mirar apunts.",
    deadline: "2026-09-XX",
    note: "L'experiment de l'ou és imprescindible per a S2. Si no pots posar-lo avui, posa'l demà al matí."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix les seccions 'La cèl·lula com a unitat de la vida' i 'Mitocondri, membrana i nucli' a l'apartat EXPLICA d'aquesta pàgina",
    "Explora l'app interactiva de la cèl·lula: clica el mitocondri, la membrana i el nucli i llegeix les seves funcions",
    "Descarrega i omple la fitxa S1 (apartat ELABORA)",
    "Posa un ou en vinagre (48 hores) per poder fer l'experiment de S2 — imprescindible",
    "L'exit tiquet en paper el trobaràs a classe a S2, o fes-lo online aquí (apartat EXIT TIQUET)"
  ],

  // ── COMPETÈNCIES I OBJECTIUS ─────────────────────────────
  oaLinks: ["OA1"],
  competencies: ["CE2"]
}
