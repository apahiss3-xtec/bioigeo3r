export const sa2s2 = {
  id: "s2", saId: "sa2",
  title: "El sistema digestiu — 'Fem caca a classe'",
  sessionNumber: 2, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s2-digestiu.jpg",

  // Repte oral curt: demo física de l'ovillo + "el titular", abans d'escriure les idees prèvies.
  engageChallenge: "Desenrotllem l'ovillo de llana pels 9 metres de l'aula (esòfag, intestí prim, intestí gros). Després, en veu alta: 'Avui farem caca a classe.'",
  engageQuestion: "Tens 9 metres de tub digestiu dins teu. Avui el convertirem en l'aula. I sí: al final farem 'caca a classe'.",
  engageContext: "Ovillo de llana de 9 metres: un alumne aguanta l'extrem, es desenrotlla per tota la classe. Esòfag 25 cm, intestí prim ~6 m, intestí gros ~1.5 m. Visual i físic.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Avaluo els límits del model de simulació: identifico 3 simplificacions i proposo com es podrien millorar.",
      "Raono per quina raó la neutralització al duodè és imprescindible per a la digestió de greixos, usant el concepte d'enzim i pH òptim.",
      "Explico el paper de la microbiota en la immunitat i per quina raó els antibiòtics poden alterar el medi intern intestinal.",
      "Construeixo la cadena causal completa: menjar → absorció → glucosa → sang → mitocondri → ATP."
    ],
    B: [
      "Explico per quina raó l'absorció es produeix a l'intestí prim i no a l'estómac (2 arguments: pH i superfície).",
      "Descric la funció del bicarbonat pancreàtic i per quina raó sense ell els enzims no funcionarien.",
      "Traço la cadena glucosa absorbida → sang → mitocondri i la relaciono amb la SA1.",
      "Explico quines funcions fa la microbiota intestinal i per quina raó els antibiòtics causen diarrea."
    ],
    C: [
      "Nomeno 3 parts del sistema digestiu en l'ordre pel qual passa el menjar.",
      "Completo: «l'absorció passa a l'_______ perquè té _______ que fan la superfície molt gran».",
      "Reconec que a la simulació, el vinagre representa _______ i el bicarbonat serveix per _______.",
      "Sé dir que la microbiota és _______ que viuen a l'intestí i ens ajuden a _______."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Segueix el recorregut del menjar de dalt a baix: boca → _______ → estómac → _______ → intestí gros → _______. Per a cada pas anota UNA funció amb el patró: «aquí el menjar ___».",
      challenge: "L'intestí prim mesura ~6 m però fa molta superfície: per quina raó el cos 'necessita' tanta longitud? Calcula el radi aproximat d'un vas cilíndric de 6 m sense vellositats que tingués la mateixa superfície que els 200 m² reals. Quina diferència de volum implicaria?"
    },
    "3": {
      scaffold: "A la simulació: vinagre → representa _______ (pH ~___). Bicarbonat → neutralitza fins a pH ___. La mitja de niló → representa _______ perquè deixa passar _______ però NO _______.",
      challenge: "Identifica 2 passos de la simulació que NO reflecteixen la digestió real. Per cada pas: (a) descriu la simplificació i (b) proposa com es podria millorar l'experiment mantenint la seguretat a l'aula."
    },
    "4": {
      challenge: "Si prens antibiòtics durant 10 dies, argumenta 3 conseqüències possibles sobre la microbiota i el sistema immunitari. Usa la informació del punt de teoria per raonar, no per repetir."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui el sistema digestiu serà literalment l'aula. Però primer: escriu el que ja saps. No es corregirà ara — ho compararàs amb el que hagis après al final de la sessió.",
    prompts: [
      {
        kind: "draw",
        text: "Dibuixa el recorregut que fa un tros de pa des que el poses a la boca fins que no queda res útil. Posa el nom de tot el que recordes."
      },
      {
        kind: "write",
        text: "Per quina raó creus que fem caca? D'on vénen les coses que surten del cos?",
        starter: "Crec que les femtes són..."
      }
    ]
  },

  exploreActivity: {
    what: "Simuleu la digestió completa amb materials de cuina, fase a fase: boca, esòfag, estómac, duodè, intestí prim, intestí gros, fins al producte final.",
    who: { mode: "classe", label: "Tota la classe (voluntaris roten per fases)" },
    time: 55,
    note: "Moment de modelització final: què fa bé aquest model i què NO reflecteix de la digestió real?"
  },
  exploreInstructions: [
    "Voluntaris amb bata, guants i ulleres per a cada fase de la simulació",
    "Boca: tisores (incisius), morter (molars), pinces (ullals), sabó escumós (saliva) → bolo alimentici",
    "Esòfag: bossa allargada → peristaltisme (com un tub de pasta de dents)",
    "Estómac: vinagre (HCl), Pepsi (pepsina=mnemotècnic), gel (mucositat) → quimo",
    "Duodè: bicarbonat+gel (neutralització), sabó groc (bilis), suc pancreàtic. Per quina raó cal neutralitzar?",
    "Intestí prim: mitja de niló + got amb aigua vermella (sang) → nutrients travessen la mitja = absorció",
    "Intestí gros: drap vell (escórrer) → absorció d'aigua → massa fecal",
    "Anus: bossa amb forat → producte final 💩",
    "Moment modelització: Quines coses fa bé aquest model i quines NO reflecteix de la digestió real?"
  ],
  exploreDuration: "55 min",
  exploreMaterials: ["Bol, pa, plàtan, mantequilla, tisores, morter, pinces, sabó, vinagre, Pepsi, bicarbonat, mitja de niló, drap vell, bossa zip", "Bates, guants, ulleres"],
  exploreNote: "Simulació adaptada de © Fátima Miró (larubiscoeslomas.com) — citar autoria a la fitxa i al portal.",

  theoryPoints: [
    { id: "t5", apartat: "1", heading: "Límits del model de simulació", text: "La simulació NO reprodueix: la temperatura (37ºC), la pressió de l'estómac, la velocitat real (~24h), la ==selectivitat molecular|o== de les ==vellositats==. Tot ==model== simplifica la realitat.", type: "epistemic", badge: "🔬 Límits del model", video: "/animacions/sa2-s2-t5.mp4" },
    { id: "t1", apartat: "3", heading: "Per quina raó l'absorció és a l'==intestí prim== i no a l'==estómac==", text: "L'==intestí prim== té ==vellositats|o== que multipliquen la ==superfície d'absorció|o== (~200 m²). El ==pH== és neutre (favorable per a ==enzims==). L'estómac té ==pH àcid (2–3)|r== que ==desnaturalitza|r== enzims però mata bacteris.", type: "concept", video: "/animacions/sa2-s2-t1.mp4" },
    { id: "t2", apartat: "3", heading: "Per quina raó el ==pàncrees== secreta ==bicarbonat==", text: "El ==quimo== que arriba del estómac és molt àcid. El ==bicarbonat pancreàtic== el neutralitza fins a ==pH 7–8|g== perquè els ==enzims intestinals== (lipasa, proteasa) funcionin. Sense neutralització, els enzims no funcionen.", type: "concept", video: "/animacions/sa2-s2-t2.mp4" },
    { id: "t3", apartat: "4", heading: "Connexió central: ==glucosa== → ==sang== → ==mitocondri==", text: "La ==glucosa|o== absorbida a l'==intestí prim== passa als ==capil·lars== de les vellositats → ==vena porta== → circulació general → ==mitocondri== de cada cèl·lula (connexió SA1 i S1).", type: "transfer", badge: "🔗 Connexió SA1", video: "/animacions/sa2-s2-t3.mp4" },
    { id: "t4", apartat: "4", heading: "==Microbiota==: els 0.5 kg de bacteris que t'ajuden", text: "El teu intestí conté >100 bilions de bacteris (==microbiota==). Produeixen ==vitamines|g==, protegeixen de ==patògens|r== i regulen el ==sistema immunitari==. Per quina raó els ==antibiòtics== causen diarrea? Maten els bacteris dolents però també els ==bacteris bons|g==.", type: "concept", video: "/animacions/sa2-s2-t4.mp4" }
  ],

  graphicResources: [
    { id: "Fig.1", title: "L'aparell digestiu humà complet", src: "/images/sa2-aparell-digestiu.png", note: "El recorregut del menjar: boca → esòfag → estómac → intestí prim → intestí gros → anus, amb les glàndules (fetge, pàncrees) que hi aboquen sucs." },
    { id: "Fig.2", title: "Per què s'absorbeix a l'intestí prim", src: "/images/sa2-vellositats.png", note: "Les vellositats i microvellositats multipliquen la superfície fins a ~200 m². Cada vellositat té capil·lars (glucosa, aminoàcids) i vasos limfàtics (greixos)." },
    { id: "Fig.3", title: "L'escala de Bristol", src: "/images/sa2-escala-bristol.png", note: "Classifica les femtes en 7 tipus segons el temps de trànsit intestinal. La fas servir a l'apartat 5 del full." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s2-fitxa-A.html", B: "/fitxes/sa2-s2-fitxa-B.html", C: "/fitxes/sa2-s2-fitxa-C.html" }, teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S2 — El sistema digestiu",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Omple l'apartat 0 — Idees prèvies del full: escriu les parts del sistema digestiu que recordes i l'ordre per on passa el menjar.", hints: [] },
      { apartat: "1", title: "Posa nom al sistema digestiu", time: "10 min", phase: "explore", instruction: "Amb el banc de paraules, omple l'apartat 1 del full: nom i funció de cada òrgan numerat al diagrama.", hints: [
        "Segueix el recorregut del menjar de dalt a baix: boca, esòfag, estómac, intestins.",
        "Per a la funció pensa què hi PASSA al menjar a cada òrgan, no només com es diu."
      ] },
      { apartat: "2", title: "L'ovillo de llana — longitud real", time: "10 min", phase: "explore", instruction: "Completa la taula d'escala 1:100 de l'apartat 2 del full (cada metre real = 1 cm a l'ovillo).", hints: [
        "Escala 1:100 vol dir dividir per 100. 6 metres reals → quants centímetres a l'ovillo?"
      ] },
      { apartat: "3", title: "Simulació de la digestió pas a pas", time: "—", phase: "explica", instruction: "Mentre observes la simulació de taula, completa les columnes buides de l'apartat 3 del full.", hints: [
        "Per a cada fase, relaciona la substància simulada amb la real (vinagre = àcid de l'estómac, sabó groc = bilis...).",
        "Pregunta't a cada pas: per què cal aquest pas? Què no funcionaria si te'l saltessis?"
      ] },
      { apartat: "4", title: "La microbiota intestinal", time: "—", phase: "explica", instruction: "Omple l'apartat 4 del full sobre els bacteris beneficiosos de l'intestí.", hints: [
        "Pensa per què prendre antibiòtics molt sovint pot causar problemes digestius."
      ] },
      { apartat: "5", title: "L'escala de Bristol", time: "—", phase: "elabora", instruction: "A l'apartat 5 del full, relaciona cada tipus amb la dieta o la salut.", hints: [
        "Connecta-ho amb l'aigua: l'intestí gros n'absorbeix. Massa o massa poca, com afecta el resultat?"
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica per quina raó l'absorció de nutrients passa a l'intestí prim i no a l'estómac. Usa almenys dos arguments.", hint: "Pensa en dos factors: la superfície (les vellositats) i el pH (àcid a l'estómac, neutre a l'intestí). Quin afavoreix els enzims?" },
    { id: "q2", type: "open", text: "Per quina raó no és bon moment per menjar just abans de córrer? Connecta-ho amb el que has après avui.", hint: "Durant l'esforç la sang va als músculs. Si has de digerir alhora, dos òrgans es disputen el mateix recurs: quin?" },
    { id: "q3", type: "multiple", text: "Quin és el paper del bicarbonat que secreta el pàncrees?", options: ["Neutralitzar el quimo àcid per permetre que els enzims intestinals funcionin", "Afegir acidesa per destruir bacteris", "Absorbir greixos", "Produir glucosa"], correct: 0 }
  ],
  homework: { description: "Cap.", deadline: null },
  recoveryInstructions: [
    "Pots fer la simulació a casa (és divertida): necessites bol, pa, plàtan, vinagre, bicarbonat, mitja de niló, drap vell",
    "Segueix la guia de la simulació (descàrrega aquí — © Fátima Miró, citat)",
    "Mira l'animació del sistema digestiu d'aquesta pàgina",
    "Omple la fitxa S2 seccions 1–3",
    "Exit tiquet online aquí"
  ],
  oaLinks: ["OA1"], competencies: ["CE2", "CE1"]
}
