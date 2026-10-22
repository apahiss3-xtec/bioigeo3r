export const sa2s2 = {
  id: "s2", saId: "sa2",
  title: "El Sistema Digestiu",
  sessionNumber: 2, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s2-digestiu.jpg",

  // Gancho: el viatge de la glucosa (sessió de 120': simulació abreujada + viatge de la glucosa com a nucli).
  engageChallenge: "Una corredora esmorza pa abans de la cursa. Cinc hores després, la glucosa d'aquell pa és dins d'un múscul de la cama. Com hi ha arribat? Quin camí ha fet?",
  engageQuestion: "Com arriba la glucosa del pa fins al múscul d'una corredora? Avui seguirem el menjar per dins del cos, molècula a molècula. I sí: parlarem de la caca.",
  engageContext: "Un tros de pa fa un viatge de uns 9 metres de tub digestiu abans que la seva glucosa arribi a una cèl·lula. Avui el seguirem fins al mitocondri, i al final del recorregut parlarem també del que no s'aprofita.",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures).
  teacherNotes: "Repartiment (120'): 5' deures (etiquetes S1) · 15' formulari de lectura · 5' idees prèvies · 30' procés digestiu (simulació + apt. 1) · 30' viatge de la glucosa · 5' microbiota · 5' Bristol · 10' exit tiquet.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Avaluo els límits del model de simulació: identifico 3 simplificacions i proposo com es podrien millorar.",
      "Raono per quina raó la neutralització al duodè és imprescindible per a la digestió de greixos, usant el concepte d'enzim i pH òptim.",
      "Explico el paper de la microbiota en la immunitat i per quina raó els antibiòtics poden alterar el medi intern intestinal.",
      "Construeixo la cadena causal completa: menjar → absorció → glucosa → sang → mitocondri → ATP (la «moneda» d'energia de la cèl·lula).",
      "Explico per quina raó la vellositat té un capil·lar (vas sanguini finíssim, de paret d'una sola cèl·lula) i com això fa que la glucosa passi a la sang."
    ],
    B: [
      "Explico per quina raó l'absorció es produeix a l'intestí prim i no a l'estómac (2 arguments: pH i superfície).",
      "Descric la funció del bicarbonat pancreàtic i per quina raó sense ell els enzims no funcionarien.",
      "Traço el viatge de la glucosa: intestí prim → vellositat → capil·lar (vas sanguini finíssim, de paret d'una sola cèl·lula) → vena porta → sang → múscul → mitocondri, i el relaciono amb la SA1.",
      "Explico quines funcions fa la microbiota intestinal i per quina raó els antibiòtics causen diarrea."
    ],
    C: [
      "Nomeno 3 parts del sistema digestiu en l'ordre pel qual passa el menjar.",
      "Completo: «l'absorció passa a l'_______ perquè té _______ que fan la superfície molt gran».",
      "Reconec que a la simulació, el vinagre representa l'àcid de l'estómac i el bicarbonat serveix per _______.",
      "Ordeno el camí de la glucosa: intestí prim → capil·lar (vas sanguini molt fi) → sang → múscul → mitocondri.",
      "Sé dir que la microbiota és _______ que viuen a l'intestí i ens ajuden a _______."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Segueix el recorregut del menjar de dalt a baix: boca → _______ → estómac → _______ → intestí gros → _______. Per a cada pas anota UNA funció amb el patró: «aquí el menjar ___».",
      challenge: "L'intestí prim mesura ~6 m però té ~30 m² de superfície d'absorció gràcies a les vellositats. Per quina raó et sembla que el cos «necessita» tanta superfície per passar la glucosa a la sang?"
    },
    "3": {
      scaffold: "A la simulació: vinagre → representa l'HCl de l'estómac (pH ~___). Bicarbonat → neutralitza fins a pH ___. La mitja de niló → representa _______ perquè deixa passar _______ però NO _______.",
      challenge: "Identifica 2 passos de la simulació que NO reflecteixen la digestió real. Per cada pas: (a) descriu la simplificació i (b) proposa com es podria millorar l'experiment mantenint la seguretat a l'aula."
    },
    "4": {
      scaffold: "Viatge de la glucosa: intestí prim → _______ de la vellositat → vena _______ → sang → cèl·lula del múscul → _______ (on es fa l'ATP).",
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
    what: "Simuleu la digestió amb materials de cuina, fase a fase i en versió abreujada: boca i esòfag (1 minut), estómac, duodè, intestí prim (la fase clau: la glucosa passa a la sang), intestí gros i producte final.",
    who: { mode: "classe", label: "Tota la classe (voluntaris roten per fases)" },
    time: 30,
    note: "Per acabar: què fa bé aquest model i què NO reflecteix de la digestió real?"
  },
  exploreInstructions: [
    "Cada fase la fa un voluntari amb bata, guants i ulleres. Anem ràpid: boca i esòfag junts, en 1 minut",
    "Boca + esòfag: tisores (incisius), morter (molars), sabó escumós (saliva) → bolo alimentici; bossa allargada → peristaltisme (les contraccions del tub que empenyen el menjar, com un tub de pasta de dents)",
    "Estómac: vinagre (representa l'HCl, l'àcid clorhídric de l'estómac, com el vinagre però més fort), Pepsi (la pepsina, l'enzim de l'estómac), gel (mucositat que protegeix la paret) → quimo (pasta àcida i semilíquida)",
    "Duodè: bicarbonat+gel (neutralització), sabó groc (bilis, del fetge). Per quina raó cal neutralitzar l'àcid?",
    "Intestí prim (la fase clau): mitja de niló + got amb aigua vermella (sang) → les molècules petites, com la glucosa, travessen la mitja = absorció. Aquí comença el viatge de la glucosa!",
    "Intestí gros: drap vell (per escórrer l'aigua) → absorció d'aigua → massa fecal",
    "Anus: bossa amb forat → producte final 💩",
    "Per acabar (1 minut): què fa bé aquest model i què NO reflecteix de la digestió real?"
  ],
  exploreDuration: "30 min",
  exploreMaterials: ["Bol, pa, plàtan, mantega, tisores, morter, pinces, sabó, vinagre, Pepsi, bicarbonat, mitja de niló, drap vell, bossa zip", "Bates, guants, ulleres"],
  exploreNote: "Simulació adaptada de © Fátima Miró (larubiscoeslomas.com).",

  theoryPoints: [
    { id: "t5", apartat: "1", heading: "Límits del model de simulació", text: "La simulació NO reprodueix: la temperatura (37 °C), la pressió de l'estómac, la velocitat real (~24h), la ==selectivitat molecular|o== de les ==vellositats==. Tot ==model== simplifica la realitat.", type: "epistemic", badge: "🔬 Límits del model" },
    { id: "t2", apartat: "3", heading: "Per quina raó el ==pàncrees== secreta ==bicarbonat== al ==duodè==", text: "L'estómac produeix ==HCl|r== (àcid clorhídric: l'àcid de l'estómac, com el vinagre però més fort). Per això el ==quimo== (pasta àcida i semilíquida) que arriba al duodè és molt àcid. El ==bicarbonat pancreàtic== el neutralitza fins a ==pH 7–8|g== perquè els ==enzims intestinals== (lipasa, proteasa) funcionin. Sense neutralització, els enzims no funcionen.", type: "concept" },
    { id: "t1", apartat: "3", heading: "Per quina raó l'absorció és a l'==intestí prim== i no a l'==estómac==", text: "Després del duodè, l'==intestí prim== té ==vellositats|o== que multipliquen la ==superfície d'absorció|o== (~30–40 m²). El ==pH== és neutre (favorable per a ==enzims==). L'estómac té ==pH àcid (2–3)|r== que ==desnaturalitza|r== enzims (els deforma i deixen de funcionar) però mata bacteris.", type: "concept" },
    { id: "t6", apartat: "4", heading: "La ==vellositat==: la porta d'entrada a la ==sang==", text: "Dins de cada ==vellositat|o== hi ha un ==capil·lar|o== (vas sanguini finíssim, amb una paret d'una sola cèl·lula). Com que la paret és tan prima, les molècules petites com la ==glucosa|o== i els aminoàcids hi passen de l'intestí a la ==sang==.", type: "concept", badge: "🔗 Viatge de la glucosa" },
    { id: "t3", apartat: "4", heading: "Connexió central: ==glucosa== → ==sang== → ==mitocondri==", text: "La ==glucosa|o== passa al ==capil·lar== de la vellositat → ==vena porta== (la vena que du la sang de l'intestí al fetge) → ==sang== (cor i artèries) → ==múscul== → ==mitocondri== de cada cèl·lula, on s'obté ==ATP|g== (connexió SA1 i S1).", type: "transfer", badge: "🔗 Connexió SA1", video: "/animacions/sa2-s2-t3.mp4" },
    { id: "t4", apartat: "4", heading: "==Microbiota==: els 0,5 kg de bacteris que t'ajuden", text: "El teu intestí conté >100 bilions de bacteris (==microbiota==). Produeixen ==vitamines|g==, protegeixen de ==patògens|r== i regulen el ==sistema immunitari==. Per quina raó els ==antibiòtics== causen diarrea? Maten els bacteris dolents però també els ==bacteris bons|g==.", type: "concept" }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", inExplora: true, caption: "Comprova el teu apartat 1: el recorregut del menjar de la boca a l'anus i les glàndules (fetge, pàncrees) que hi aboquen sucs.", title: "L'aparell digestiu humà complet", src: "/images/sa2-aparell-digestiu.png", note: "El recorregut del menjar: boca → esòfag → estómac → intestí prim → intestí gros → anus, amb les glàndules (fetge, pàncrees) que hi aboquen sucs." },
    { id: "Fig.2", apartat: "4", before: true, title: "Per què s'absorbeix a l'intestí prim", src: "/images/sa2-vellositats.png", note: "Les vellositats i microvellositats multipliquen la superfície fins a uns 30–40 m². Cada vellositat té un capil·lar sanguini per on se'n va la glucosa." },
    { id: "Fig.3", apartat: "5", title: "L'escala de Bristol", src: "/images/sa2-escala-bristol.png", note: "Classifica les femtes en 7 tipus segons el temps de trànsit intestinal. La fas servir a l'apartat 5 del full." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s2-fitxa-A.html", B: "/fitxes/sa2-s2-fitxa-B.html", C: "/fitxes/sa2-s2-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa2-s2-teoria.pdf",

  sessionMaterials: [
    { id: "sortida", title: "Exit tiquet (versions A i B)", url: "/fitxes/sa2-s2-exit-ticket.html", who: "per al final de la sessió" },
    { id: "sortidaC", title: "Exit tiquet (versió C)", url: "/fitxes/sa2-s2-exit-ticket-C.html", who: "per al final de la sessió" },
    { id: "labVirtual", title: "Laboratori virtual (si has faltat a la pràctica)", url: "/labs/sa2/lab_s2_digestiu.html", who: "per fer a casa si no vas poder fer la pràctica" }
  ],

  fitxaGuide: {
    fitxaName: "Fitxa S2 — El sistema digestiu",
    steps: [
      { apartat: "📋", title: "Etiquetes nutricionals", time: "5 min", phase: "engage", instruction: "Revisió oral dels deures de la S1: explica a la parella i després a la classe què has trobat a les etiquetes nutricionals.", hints: [] },
      { apartat: "—", title: "Formulari de comprensió de la lectura", time: "15 min", phase: "engage", instruction: "Abans de començar la fitxa, fes el formulari de comprensió (Google Forms) de la lectura de la sessió 2 que havies de llegir a casa.", hints: [] },
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Omple l'apartat 0 — Idees prèvies del full: escriu les parts del sistema digestiu que recordes i l'ordre per on passa el menjar.", hints: [] },
      { apartat: "1", title: "Posa nom al sistema digestiu", time: "10 min", phase: "explore", instruction: "Amb el banc de paraules, omple l'apartat 1 del full: nom i funció de cada òrgan numerat al diagrama.", hints: [
        "Segueix el recorregut del menjar de dalt a baix: boca, esòfag, estómac, intestins.",
        "Per a la funció pensa què hi PASSA al menjar a cada òrgan, no només com es diu."
      ] },
      { apartat: "3", title: "Simulació de la digestió pas a pas", time: "20 min", phase: "explica", instruction: "Mentre observes la simulació de taula (versió ràpida), completa les columnes buides de l'apartat 3 del full.", hints: [
        "Per a cada fase, relaciona la substància simulada amb la real (vinagre = HCl, l'àcid de l'estómac; sabó groc = bilis...).",
        "Pregunta't a cada pas: per què cal aquest pas? Què no funcionaria si te'l saltessis?"
      ] },
      { apartat: "🔗", title: "Del budell al mitocondri", time: "30 min", phase: "elabora", instruction: "El viatge de la glucosa: ordena el camí d'una molècula de glucosa del pa, des de l'intestí prim fins al mitocondri d'una cèl·lula del múscul, i respon la pregunta competencial de la Mercè.", hints: [
        "Fase 1 · Intestí prim: la glucosa travessa la paret i entra a una vellositat (és una molècula petita).",
        "Fase 2 · Vellositat: dins hi ha un capil·lar, un vas sanguini finíssim de paret d'una sola cèl·lula. La glucosa hi passa i se l'endú la sang.",
        "Fase 3 · Vena porta: la sang de l'intestí va primer al fetge i després al cor.",
        "Fase 4 · Sang i múscul: el cor la impulsa per les artèries fins al capil·lar del múscul i la glucosa entra a la cèl·lula.",
        "Fase 5 · Mitocondri: glucosa + O₂ → CO₂ + H₂O + ATP (SA1). Quin pas falla si la Mercè no ha dinat?"
      ] },
      { apartat: "4", title: "La microbiota intestinal", time: "5 min", phase: "explica", instruction: "Omple l'apartat 4 del full sobre els bacteris beneficiosos de l'intestí.", hints: [
        "Pensa per què prendre antibiòtics molt sovint pot causar problemes digestius."
      ] },
      { apartat: "5", title: "L'escala de Bristol", time: "5 min", phase: "elabora", instruction: "A l'apartat 5 del full, relaciona cada tipus amb la dieta o la salut.", hints: [
        "Connecta-ho amb l'aigua: l'intestí gros n'absorbeix. Massa aigua o massa poca, com afecta el resultat?"
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Ordena el camí d'una molècula de glucosa del pa fins al múscul de la Mercè: intestí prim, capil·lar de la vellositat, vena porta, sang (cor i artèries), mitocondri.", hint: "Comença a l'intestí prim i acaba a la central d'energia de la cèl·lula. El capil·lar és un vas sanguini finíssim." },
    { id: "q2", type: "multiple", text: "Una molècula de glucosa és dins l'intestí prim. Per on arriba a la sang?", options: ["Travessa la paret i entra al capil·lar sanguini", "Torna a l'estómac per començar de nou", "Cap: la glucosa es queda a l'intestí", "Els dos per igual"], correct: 0 },
    { id: "q3", type: "open", text: "L'Aya diu: «La glucosa del pa passa de l'estómac directament al múscul.» Hi estàs d'acord? Argumenta-ho: per on passa realment i per què s'absorbeix a l'intestí prim.", hint: "Pensa en les vellositats (superfície), el capil·lar i la sang." }
  ],
  homework: {
    readingNext: {
      session: 3,
      text: "Llegeix la lectura de la Sessió 3. A l'inici de la propera sessió faràs el formulari de comprensió (Google Forms).",
      pdfUrl: "/lectures/sa2-s3-lectura.pdf",
      easyUrl: "/lectures/sa2-s3-lectura-FACIL.pdf",
    }, description: "Tasca per a casa (opcional) — Prepara la Sessió 3: observa la teva femta i memoritza a quin tipus de l'escala de Bristol s'assembla (no cal escriure-ho). A classe ho respondràs de manera anònima. És una observació personal: no es pot fer amb cap IA." },
  recoveryInstructions: [
    "Pots fer la simulació a casa (és divertida): necessites bol, pa, plàtan, vinagre, bicarbonat, mitja de niló, drap vell",
    "Segueix la guia de la simulació (descàrrega aquí — © Fátima Miró, citat); si tens poc temps, centra't en l'estómac, el duodè i l'intestí prim",
    "Mira l'animació del sistema digestiu d'aquesta pàgina",
    "Fes la pràctica al laboratori virtual (botó de sota) i copia el resum a la fitxa",
    "Omple la fitxa S2 seccions 1–3",
    "Dibuixa el viatge d'una molècula de glucosa: intestí prim → capil·lar de la vellositat → sang → múscul → mitocondri",
    "Fes l'exit tiquet online a l'acordió de sota (el viatge de la glucosa)"
  ],
  recoveryLinks: [{ label: "Laboratori virtual de la pràctica", url: "/labs/sa2/lab_s2_digestiu.html", icon: "🧪" }],
  oaLinks: ["OA2"], competencies: ["CE1", "CE2", "CE4"]
}
