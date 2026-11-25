export const sa3s4 = {
  id: "s4", saId: "sa3",
  title: "Medicaments i drogues",
  sessionNumber: 4, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s4-farmacs.jpg",

  engageQuestion: "La teva mare et dóna un antibiòtic perquè tens grip. El teu pare et diu que no el prenguis. Qui té raó? I per quina raó costa tant deixar una addicció: és només qüestió de «voluntat»?",
  engageContext: "Avui passaràs per les estacions de medicaments, dissenyaràs un assaig per saber si un fàrmac funciona de debò i entraràs a la sinapsi per veure què hi fa una droga. Acabaràs planificant amb el teu grup la campanya que presentareu a la S5.",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures). Tasca 2, 09/09/2026.
  teacherNotes: "Fusió 25/11/2026 (la S5 passa a ser el tancament). Estructura: ↺ droga o no? 5 · estacions 25 · assaig placebo 25 · sinapsi i droga amb la demostració de les pilotes 25 · automedicació 10 · campanya 15 · full de sortida 10. Les targetes de substàncies queden com a material opcional.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Classifico els fàrmacs i explico el mecanisme de l'ibuprofèn (COX) i per què l'antibiòtic no actua sobre virus.",
      "Dissenyo un assaig amb grup control, placebo i doble cec, i en valoro l'ètica.",
      "Explico com diferents drogues alteren la sinapsi i per què la tolerància i l'abstinència tenen una base física.",
      "Analitzo les resistències bacterianes als antibiòtics com a conseqüència de la selecció natural.",
      "Planifico una campanya que desmunta un mite de salut amb evidència."
    ],
    B: [
      "Classifico els fàrmacs en famílies i explico per què l'antibiòtic no cura la grip.",
      "Dissenyo un assaig amb grup control i doble cec, i sé que «millorar» no prova que un fàrmac funcioni.",
      "Explico que una droga fa arribar molta més dopamina als receptors i per què això crea tolerància i abstinència.",
      "Justifico per quina raó automedicar-se (sobretot antibiòtics per a virus) és un risc.",
      "Planifico amb el grup una campanya contra un mite de salut."
    ],
    C: [
      "Sé per a què serveixen alguns medicaments i que l'antibiòtic no mata els virus.",
      "Sé que per comprovar un fàrmac cal un grup control (placebo).",
      "Sé que una droga inunda els receptors del cervell i que la tolerància vol dir necessitar cada vegada més dosi.",
      "Sé que automedicar-se és perillós.",
      "Sé quina part de la campanya em toca fer."
    ]
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Escriu el que en saps ara: ho compararàs al final de la sessió.",
    prompts: [
      {
        kind: "write",
        text: "Què prens quan tens mal de cap? Saps què fa la pastilla dins el teu cos?",
        starter: "Crec que la pastilla..."
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
      video: "/animacions/sa3-s4-t1.mp4",
      heading: "==Antibiòtics==: arma de doble tall",
      text: "Els ==antibiòtics|g== maten o frenen bacteris atacant estructures pròpies dels ==procariotes== (paret cel·lular, ribosomes 70S). ==No funcionen contra virus|r==. La ==grip és un virus|r== → antibiòtic ineficaç i contraproduent. ==Resistències|r==: ús excessiu → selecció natural → bacteris resistents (==superbugs|r==). ==No automedicar-se|o==: cada antibiòtic té un bacteri diana, ús incorrecte és pitjor que no prendre'n.",
      type: "concept",
      badge: "⚕️ No automedicació"
    },
    {
      id: "t5",
      images: [
        {
          "src": "images/sa3-fotos/s4-t5.jpg",
          "caption": "Càpsula d'un antiviral (oseltamivir): actua només contra el virus de la grip.",
          "credit": "Mk2010 · CC BY-SA 4.0 · Wikimedia Commons"
        }
      ],
      apartat: "1",
      heading: "==Antivirals==: contra virus concrets",
      text: "Els ==antivirals|g== actuen contra ==virus específics|o== (per exemple, el Tamiflu contra la grip o els antiretrovirals contra el VIH). Com que el virus s'amaga dins les cèl·lules, ==és molt més difícil== atacar-lo sense fer mal a la cèl·lula: per això n'hi ha ==molts menys que d'antibiòtics|r==. Cada antiviral serveix només per al virus per al qual s'ha fet, i ==no és un antibiòtic|r==. Per això una vacuna, que prepara el sistema immunitari abans, és tan important contra els virus.",
      type: "concept"
    },
    {
      id: "t2",
      images: [
        {
          "src": "images/sa3-fotos/s4-t2.jpg",
          "caption": "El paracetamol és analgèsic i antipirètic, però no antiinflamatori.",
          "credit": "Mk2010 · CC BY-SA 3.0 · Wikimedia Commons"
        }
      ],
      apartat: "1",
      heading: "==Analgèsics== i ==antipirètics==: no tot és igual",
      text: "==Paracetamol==: analgèsic + antipirètic. Actua al cervell. Risc hepàtic si s'abusa. ==Ibuprofèn|o==: AINE — analgèsic + antiinflamatori + antipirètic. Actua als teixits. Risc gàstric. ==Cap dels dos mata el virus|r== — tracten els símptomes mentre el SI lluita. Mai combinar sense prescripció. La febre moderada és beneficiosa (S1): ==no cal baixar-la sempre|o==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "1",
      video: "/animacions/sa3-s4-t3.mp4",
      heading: "El fàrmac tracta el ==símptoma==, no sempre la ==causa==",
      text: "Cadena: ==patogen|r== → malaltia → símptoma (dolor, febre) → fàrmac. L'==ibuprofèn|o== bloqueja l'enzim ==COX== → menys prostaglandines → menys dolor i inflamació (però les prostaglandines també protegeixen l'estómac: per això pot irritar-lo). L'==antibiòtic|g== ataca estructures pròpies dels bacteris → ==no té diana en un virus|r==. Baixar la febre amb paracetamol ==no cura la infecció|r==: només alleuja el símptoma mentre el sistema immunitari fa la feina.",
      type: "concept"
    },
    {
      id: "t4",
      images: [
        {
          "src": "images/sa3-fotos/s4-t4.jpg",
          "caption": "Pastilles: prendre-les sense consell mèdic té riscos, encara que semblin inofensives.",
          "credit": "epSos .de · CC BY 2.0 · Wikimedia Commons"
        }
      ],
      apartat: "2",
      heading: "==Automedicació== i efecte ==placebo==",
      text: "Automedicar-se sense llegir el prospecte (p. ex. combinar ibuprofèn i paracetamol, o prendre antibiòtics que sobren) pot ser perillós. ==Efecte placebo|o==: una pastilla sense principi actiu pot reduir el dolor de debò — el cervell allibera ==endorfines== quan espera millorar. Per això cap fàrmac es valida sense grup placebo: ==«millorar» després de prendre alguna cosa no demostra per si sol que aquella cosa hagi funcionat|r==. Un assaig fiable compara un ==grup control== (que pren placebo) amb el grup que pren el fàrmac, amb prou participants i en ==doble cec== (ni el pacient ni qui l'avalua saben qui pren què).",
      type: "concept",
      badge: "🔬 Pensament crític"
    },
    {
      id: "t6",
      images: [
        {
          "src": "images/sa3-fotos/s5-t1.jpg",
          "caption": "Model de la dopamina: el cos la fabrica (és endògena), i moltes drogues n'alteren els nivells.",
          "credit": "Jynto · CC0 · Wikimedia Commons"
        }
      ],
      apartat: "3",
      heading: "==Endogen== vs ==exogen==: medicament o droga?",
      text: "Hi ha substàncies que el cos fabrica (==endògenes|g==: dopamina, endorfines) i d'altres que entren des de fora (==exògenes|o==: cafè, alcohol, fàrmacs, drogues). Una ==droga== és una substància exògena que altera el sistema nerviós i pot crear dependència. El ==cafè i l'alcohol també són drogues|r== — encara que siguin legals. La classificació legal ==no sempre reflecteix el risc real|r== per a la salut.",
      type: "concept"
    },
    {
      id: "t7",
      apartat: "3",
      image: "/images/s5_droga_vs_neurotransmissor.png",
      imageCaption: "① Poques molècules: el senyal normal. ② Moltíssimes de cop: la inundació dels receptors.",
      heading: "==Drogues==: per quina raó enganyen el cervell",
      text: "Moltes drogues imiten els neurotransmissors naturals (com la ==dopamina==) però en concentracions molt més altes: ==inunden|r== els receptors del nucli accumbens (centre de recompensa). El cervell interpreta: «==això ha estat bo, repeteix-ho|g==». No totes ho fan igual: unes ==imiten|o== el neurotransmissor, d'altres impedeixen que es ==retiri|r== de la sinapsi (cocaïna) i d'altres fan que la neurona n'==alliberi més|p==.",
      type: "concept"
    },
    {
      id: "t8",
      apartat: "3",
      image: "/images/s5_receptors_tolerancia.svg",
      imageCaption: "① sinapsi normal · ② la droga inunda · ③ el cervell retira receptors (tolerància) · ④ sense la droga, el senyal cau per sota del normal (abstinència).",
      heading: "==Tolerància== i ==abstinència==: la base física de l'addicció",
      text: "Amb l'ús repetit, el cervell redueix els ==receptors|r== de dopamina (el que en diem <em>reducció de receptors</em>) → cal cada cop ==més dosi|r== per sentir el mateix efecte (==tolerància==). Si la droga falta, apareix un malestar físic real (==abstinència==). ==Addicció|r==: comportament compulsiu de recerca de la droga malgrat les conseqüències negatives. ==Idea clau|g==: és una malaltia del cervell amb base física, NO una qüestió de voluntat.",
      type: "concept"
    },
    {
      id: "t9",
      images: [
        {
          "src": "images/sa3-fotos/s5-t5.jpg",
          "caption": "Sinapsi: la comunicació entre neurones és el punt on actuen les drogues.",
          "credit": "vectorization: Mouagip Synapse_diag1.png: Drawn by fr:Utilis · CC BY-SA 3.0 · Wikimedia Commons"
        }
      ],
      apartat: "3",
      heading: "Tres famílies de ==drogues== segons com actuen",
      text: "==Depressores|b==: alenteixen el sistema nerviós (alcohol, benzodiazepines). ==Estimulants|o==: l'acceleren (cocaïna, amfetamines, cafeïna). ==Al·lucinògenes|p==: alteren la percepció de la realitat (LSD, psilocibina). La classificació agrupa per l'==efecte sobre el sistema nerviós|g==, no per la legalitat: l'alcohol i la cafeïna hi són, tot i ser legals. Cada droga pot tenir ==més d'un efecte|o== i el seu risc depèn de la dosi i de la persona.",
      type: "concept"
    }
  ],

  sessionMaterials: [
    { name: "Full de sortida — versions A i B", url: "/fitxes/sa3-s4-exit-ticket.html" },
    { name: "Full de sortida — versió C (amb bastida)", url: "/fitxes/sa3-s4-exit-ticket-C.html" },
    { name: "Rúbrica de la campanya (es presenta a la S5)", url: "/fitxes/sa3-s5-rubrica-campanya.html" },
    { name: "Targetes de substàncies (opcional, 20 targetes retallables)", url: "/fitxes/sa3-s5-targetes-substancies.html" },
    { name: "Fitxa de la sessió · acollida (urdú)", url: "/fitxes/sa3-s4-fitxa-acollida-UR.html" },
    { name: "Fitxa de la sessió · acollida (àrab)", url: "/fitxes/sa3-s4-fitxa-acollida-AR.html" }
  ],

  fitxaUrl: { A: "/fitxes/sa3-s4-fitxa-A.html", B: "/fitxes/sa3-s4-fitxa-B.html", C: "/fitxes/sa3-s4-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa3-s4-teoria.pdf",

  fitxaGuide: {
    fitxaName: "Fitxa S4 — Medicaments i drogues",
    steps: [
      { apartat: "↺", title: "Droga o no?", time: "5 min", phase: "engage", instruction: "Escriu la substància que vas pensar a casa i si creus que és una «droga». Votació a mà alçada i tres raons a la pissarra; ho resoldrem a l'apartat 3.", hints: [] },
      { apartat: "1", title: "Estacions de medicaments", time: "25 min", phase: "explore", instruction: "Passa per les estacions (analgèsics, antiinflamatoris, antisèptics, antibiòtics) i omple la graella. A l'última estació, completa com actuen: l'ibuprofèn bloqueja l'enzim COX i l'antibiòtic no serveix contra els virus.", hints: ["Baixar la febre no mata el virus: tracta el símptoma."] },
      { apartat: "2", title: "Funciona de debò? Dissenyem l'assaig", time: "25 min", phase: "elabora", instruction: "Cas Yasmina: digues dos errors i per què millorar no demostra res. Dissenya un assaig amb placebo: grups, què mesuraries, què ha de ser igual i doble cec.", hints: ["Grup control = pren placebo i no sap quin pren."] },
      { apartat: "3", title: "La sinapsi i la droga", time: "25 min", phase: "explica", instruction: "Demostració de les pilotes (neurones i neurotransmissors). Completa com una droga inunda la sinapsi, per què el cervell retira receptors (tolerància) i què passa quan falta (abstinència). Cas Idoia: el cafè és una droga?", hints: ["Més dosi per notar el mateix = tolerància."] },
      { apartat: "4", title: "Automedicació i resistències", time: "10 min", phase: "elabora", instruction: "Per què acabar l'antibiòtic i no guardar-ne les sobres protegeix també els altres.", hints: [] },
      { apartat: "5", title: "La campanya", time: "15 min", phase: "elabora", instruction: "En grup, a partir de l'esbós de la S3: el mite, quin criteri de fiabilitat falla, l'evidència real, el missatge final i qui fa què. Es presenta a la S5.", hints: ["Rúbrica de la campanya a Materials."] },
      { apartat: "Final", title: "Full de sortida", time: "10 min", phase: "elabora", instruction: "Sol/a i sense ajuda, en un full a part. A les versions A i B, les respostes obertes van a la llibreta sense copiar l'enunciat; només s'omplen a la fitxa les taules, les frases i els esquemes (icona 📄).", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "«Em vaig prendre una til·la i el mal de cap va marxar: la til·la cura el mal de cap.» Per què no és una prova? Com ho comprovaries (grup control, placebo, doble cec)?", hint: "Grup control = pren placebo; ningú sap qui pren què." },
    { id: "q2", type: "open", text: "Per què l'addicció NO és «només qüestió de voluntat»? Fes servir les paraules dopamina, receptors i tolerància.", hint: "Amb l'ús repetit el cervell retira receptors…" },
    { id: "q3", type: "open", text: "Enigma A. Per què la Martina (no vacunada) i la seva àvia (vacunada) van escapar de la grip? Dona dues explicacions per a la Martina.", hint: "Ja l'havia passada? Immunitat de grup?" }
  ],
  exitTicketNote: "Fulls de sortida individuals, sense ajuda, es recullen. Versions A i B: dos fulls per A4 (es retallen); versió C: un per pàgina, amb pistes. Qui ha faltat pot respondre-les en línia.",

  homework: { description: "En grup: acabeu el cartell o el vídeo de 60 s de la campanya. A l'inici de la S5 tindreu 10 minuts per al muntatge final i després el presentareu a classe (3–4 min per grup, amb la rúbrica)." },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (famílies de fàrmacs, mecanisme COX, placebo, sinapsi i droga, tolerància i abstinència)",
    "Omple la graella de famílies de fàrmacs i el disseny de l'assaig amb placebo de la fitxa",
    "Explica per quina raó l'addicció no és «només voluntat» fent servir dopamina, receptors i tolerància",
    "Parla amb el teu grup per saber quina part de la campanya et toca preparar per a la S5",
    "Fes l'exit tiquet online a l'acordió de sota"
  ],
  oaLinks: ["OA3", "OA4"], competencies: ["CE2", "CE3", "CE5"]
}
