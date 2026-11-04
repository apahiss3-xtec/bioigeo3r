export const sa2s2 = {
  id: "s2", saId: "sa2",
  title: "El Sistema Digestiu",
  sessionNumber: 2, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s2-digestiu.jpg",
  guiaPerApartats: true,

  // Gancho: el viatge de la glucosa (sessió de 120': simulació abreujada + viatge de la glucosa com a nucli).
  engageChallenge: "Una corredora esmorza pa abans de la cursa. Cinc hores després, la glucosa d'aquell pa és dins d'un múscul de la cama. Com hi ha arribat? Quin camí ha fet?",
  engageQuestion: "Com arriba la glucosa del pa fins al múscul d'una corredora? Avui seguirem el menjar per dins del cos, molècula a molècula. I sí: parlarem de la caca.",
  engageContext: "Un tros de pa fa un viatge de uns 9 metres de tub digestiu abans que la seva glucosa arribi a una cèl·lula. Avui el seguirem fins al mitocondri, i al final del recorregut parlarem també del que no s'aprofita.",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures).
  teacherNotes: "Repartiment (120'): 5' deures (etiquetes de la sessió 1) · 15' formulari de lectura · 5' repàs de la sessió 1 (apt. 0) · 15' apt. 1 · 30' simulació (apt. 2) · 30' viatge de la glucosa (apt. 3) · 5' microbiota (apt. 4) · 5' Bristol (apt. 5) · 10' exit tiquet. La versió C fa 10' a l'apt. 1 i 20' a l'apt. 2.",

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
    "2": {
      scaffold: "A la simulació: vinagre → representa l'HCl de l'estómac (pH ~___). Bicarbonat → neutralitza fins a pH ___. La mitja de niló → representa _______ perquè deixa passar _______ però NO _______.",
      challenge: "Identifica 2 passos de la simulació que NO reflecteixen la digestió real. Per cada pas: (a) descriu la simplificació i (b) proposa com es podria millorar l'experiment mantenint la seguretat a l'aula."
    },
    "3": {
      scaffold: "Viatge de la glucosa: intestí prim → _______ de la vellositat → vena _______ → sang → cèl·lula del múscul → _______ (on es fa l'ATP).",
      challenge: "La paret del capil·lar té una sola capa de cèl·lules. Què canviaria per a la glucosa si aquesta paret fos molt més gruixuda? Raona-ho i arriba fins al que notaria el múscul."
    },
    "4": {
      scaffold: "Els antibiòtics maten bacteris. A l'intestí hi ha bacteris _______ que ens ajuden a _______.",
      challenge: "Si prens antibiòtics durant 10 dies, argumenta 3 conseqüències possibles sobre la microbiota i el sistema immunitari. Usa la informació del punt de teoria per raonar, no per repetir."
    }
  },

  // ── APARTAT 0 · REPÀS DE LA SESSIÓ 1 ──────────────────────
  repas: {
    startPoint: "Abans de seguir el menjar per dins del cos, recupera el que vas descobrir sobre els nutrients.",
    prompts: [
      { text: "Quina diferència hi ha entre un aliment i un nutrient?" },
      { text: "Al laboratori, com vas saber que un aliment tenia midó?" },
      { text: "En quina molècula es transformen els hidrats del pa? A quina part de la cèl·lula s'obté l'ATP?" },
      { text: "Tria greixos o proteïnes i escriu quina feina fan al cos." }
    ],
    note: "Primer de memòria. Després comprova-ho a la teva fitxa de la sessió 1."
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
    { id: "t2", apartat: "2", heading: "Per quina raó el ==pàncrees== secreta ==bicarbonat== al ==duodè==", text: "L'estómac produeix ==HCl|r== (àcid clorhídric: l'àcid de l'estómac, com el vinagre però més fort). Per això el ==quimo== (pasta àcida i semilíquida) que arriba al duodè és molt àcid. El ==bicarbonat pancreàtic== el neutralitza fins a ==pH 7–8|g== perquè els ==enzims intestinals== (lipasa, proteasa) funcionin. Sense neutralització, els enzims no funcionen.", type: "concept" },
    { id: "t1", apartat: "2", heading: "Per quina raó l'absorció és a l'==intestí prim== i no a l'==estómac==", text: "Després del duodè, l'==intestí prim== té ==vellositats|o== que multipliquen la ==superfície d'absorció|o== (~30–40 m²). El ==pH== és neutre (favorable per a ==enzims==). L'estómac té ==pH àcid (2–3)|r== que ==desnaturalitza|r== enzims (els deforma i deixen de funcionar) però mata bacteris.", type: "concept" },
    { id: "t5", apartat: "2", heading: "Fins on arriba el ==model== de simulació", text: "Tot ==model== simplifica la realitat. Mentre mires la simulació, pregunta't: a quina temperatura passa això dins del cos? Quant de temps dura de debò? La mitja de niló tria les molècules igual que una ==vellositat==?", type: "epistemic", badge: "🔬 Límits del model" },
    { id: "t6", apartat: "3", heading: "La ==vellositat==: la porta d'entrada a la ==sang==", text: "Dins de cada ==vellositat|o== hi ha un ==capil·lar|o== (vas sanguini finíssim, amb una paret d'una sola cèl·lula). Com que la paret és tan prima, les molècules petites com la ==glucosa|o== i els aminoàcids hi passen de l'intestí a la ==sang==.", type: "concept", badge: "🔗 Viatge de la glucosa" },
    { id: "t3", apartat: "3", heading: "Connexió central: ==glucosa== → ==sang== → ==mitocondri==", text: "La ==glucosa|o== passa al ==capil·lar== de la vellositat → ==vena porta== (la vena que du la sang de l'intestí al fetge) → ==sang== (cor i artèries) → ==múscul== → ==mitocondri== de cada cèl·lula, on s'obté ==ATP|g== (connexió amb la SA1 i la sessió 1).", type: "transfer", badge: "🔗 Connexió SA1", video: "/animacions/sa2-s2-t3.mp4" },
    { id: "t4", apartat: "4", heading: "==Microbiota==: els 0,5 kg de bacteris que t'ajuden", text: "El teu intestí conté >100 bilions de bacteris (==microbiota==). Produeixen ==vitamines|g==, protegeixen de ==patògens|r== i regulen el ==sistema immunitari==. Per a la pregunta de la fitxa: què fan els ==antibiòtics== amb els bacteris, i quins bacteris hi ha a l'intestí?", type: "concept" }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "El tub digestiu, amb números", src: "/images/sa2-s2-digestiu-mut.png", caption: "Set parts numerades, en l'ordre per on passa el menjar. Són els mateixos números de la teva fitxa.", note: "Versió muda, la mateixa de la fitxa B (imatge + números). Sense rètols perquè és la tasca de l'apartat." },
    { id: "Fig.2", apartat: "2", before: true, title: "L'aparell digestiu humà complet", src: "/images/sa2-aparell-digestiu.png", caption: "Comprova els noms del teu apartat 1. Localitza també el fetge i el pàncrees: els sucs que hi aboquen surten a la simulació.", note: "Amb rètols: va a l'apartat 2 perquè l'alumnat ja ha contestat l'apartat 1." },
    { id: "Fig.3", apartat: "3", before: true, title: "Una vellositat de l'intestí prim, en tall", src: "/images/sa2-s2-vellositat-esquema.png", caption: "A l'esquerra, la paret de l'intestí; a la dreta, una vellositat molt ampliada amb quatre parts numerades. Els hexàgons taronges són molècules de glucosa.", note: "Versió muda, la mateixa de la fitxa B. Substitueix sa2-vellositats.png, amb rètols que donen les respostes de l'apartat." },
    { id: "Fig.4", apartat: "5", before: true, title: "L'escala de Bristol", src: "/images/sa2-s2-bristol-tira.jpg", caption: "Els set tipus de femta, de les boletes dures a la femta líquida. Mira'ls abans d'aplicar l'escala als tres casos.", note: "La fitxa B fa la tira amb emojis. Retall sense la part de factors de sa2-escala-bristol.png, que té marca de NotebookLM i dóna les respostes dels casos." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s2-fitxa-A.html", B: "/fitxes/sa2-s2-fitxa-B.html", C: "/fitxes/sa2-s2-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa2-s2-teoria.pdf",

  sessionMaterials: [
    { id: "sortida", title: "Exit tiquet (versions A i B)", url: "/fitxes/sa2-s2-exit-ticket.html", who: "per al final de la sessió" },
    { id: "sortidaC", title: "Exit tiquet (versió C)", url: "/fitxes/sa2-s2-exit-ticket-C.html", who: "per al final de la sessió" },
    { id: "labVirtual", title: "Laboratori virtual (si has faltat a la pràctica)", url: "/labs/sa2/lab_s2_digestiu.html", who: "per fer a casa si no vas poder fer la pràctica" }
  ],

  fitxaGuide: {
    fitxaName: "Fitxa de la sessió 2 — El sistema digestiu",
    steps: [
      { apartat: "—", title: "Etiquetes nutricionals", time: "5 min", phase: "engage", instruction: "Revisió oral dels deures de la sessió 1: explica a la parella i després a la classe què has trobat a les etiquetes dels teus productes.", hints: [] },
      { apartat: "—", title: "Formulari de comprensió de la lectura", time: "15 min", phase: "engage", instruction: "Abans de començar la fitxa, fes el formulari de comprensió (Google Forms) de la lectura de la sessió 2 que havies de llegir a casa.", hints: [] },
      { apartat: "0", title: "Repàs — què recordes de la Sessió 1?", time: "5 min", phase: "engage", instruction: "Sol o sola, contesta les preguntes de l'apartat 0 de memòria. Quan acabis, comprova-les amb la teva fitxa de la sessió 1 i corregeix el que calgui.", hints: [] },
      { apartat: "1", title: "Posa nom al sistema digestiu", time: "15 min", phase: "explore", instruction: "Amb el banc de paraules, escriu a la taula de l'apartat 1 el nom de les 7 parts numerades i la funció que falta. Després respon la Pregunta clau.", hints: [
        "Segueix el recorregut del menjar de dalt a baix, número a número.",
        "Per a la funció pensa què hi PASSA al menjar a cada òrgan, no només com es diu.",
        "Per a la Pregunta clau, compara l'estómac i l'intestí prim: quina acidesa hi ha a cadascun i com és la seva paret?"
      ] },
      { apartat: "2", title: "El procés digestiu — simulació pas a pas", time: "30 min", phase: "explica", explora: true, instruction: "Observa la simulació de taula i completa les columnes buides de l'apartat 2. Al final, escriu què representa bé el model i què no reflecteix.", hints: [
        "Per a cada fase, relaciona la substància simulada amb la real (vinagre = HCl, l'àcid de l'estómac; sabó groc = bilis...).",
        "Pregunta't a cada pas: per què cal aquest pas? Què no funcionaria si te'l saltessis?"
      ] },
      { apartat: "3", title: "El viatge de la glucosa: del budell al mitocondri", time: "30 min", phase: "elabora", instruction: "A l'apartat 3, llegeix les paraules noves, etiqueta la vellositat i traça-hi el camí de la glucosa. Després completa la taula fins al mitocondri i respon la pregunta de la Mercè.", hints: [
        "Per posar nom a cada número, pensa on és el menjar, quina capa toca primer la glucosa i per quin vas marxa.",
        "A la taula, pregunta't a cada pas: on és ara la glucosa i què ha de passar perquè avanci?",
        "Recorda la Sessió 1: què necessita el mitocondri per obtenir ATP?",
        "Per a la Mercè, busca a la cadena quina peça falta si no ha dinat i què suposa això per als músculs."
      ] },
      { apartat: "4", title: "La microbiota intestinal", time: "5 min", phase: "explica", instruction: "Llegeix la caixa de l'apartat 4 i respon la pregunta: per quina raó prendre antibiòtics pot provocar diarrea?", hints: [
        "Pensa què fan els bacteris de l'intestí quan tot va bé. Què deixa de passar si en falten?"
      ] },
      { apartat: "5", title: "L'escala de Bristol — indicador de salut intestinal", time: "5 min", phase: "elabora", instruction: "Llegeix com funciona l'escala i, a l'apartat 5, escriu el tipus que esperaries en cada un dels tres casos i per quina raó.", hints: [
        "Connecta-ho amb l'aigua: l'intestí gros n'absorbeix. Massa aigua o massa poca, com afecta el resultat?",
        "Pregunta't quant de temps ha passat la femta a l'intestí gros en cada cas."
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
    "Apartat 0: fes el repàs de memòria i comprova'l amb la teva fitxa de la sessió 1",
    "Apartat 1: posa nom a les 7 parts del dibuix i respon la Pregunta clau",
    "Apartat 2: fes la pràctica al laboratori virtual (botó de sota) i copia el resum a la fitxa. Si vols, pots fer la simulació a casa amb bol, pa, plàtan, vinagre, bicarbonat, mitja de niló i drap vell (© Fátima Miró); si tens poc temps, centra't en l'estómac, el duodè i l'intestí prim",
    "Apartat 3: mira l'animació d'aquesta pàgina, etiqueta la vellositat i dibuixa el viatge d'una molècula de glucosa fins al mitocondri",
    "Apartats 4 i 5: llegeix les caixes de la fitxa i respon la microbiota i els tres casos de Bristol",
    "Fes l'exit tiquet online a l'acordió de sota (el viatge de la glucosa)"
  ],
  recoveryLinks: [{ label: "Laboratori virtual de la pràctica", url: "/labs/sa2/lab_s2_digestiu.html", icon: "🧪" }],
  oaLinks: ["OA2"], competencies: ["CE1", "CE2", "CE4"]
}
