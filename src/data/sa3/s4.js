export const sa3s4 = {
  id: "s4", saId: "sa3",
  title: "Medicaments: com actuen",
  sessionNumber: 4, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s4-farmacs.jpg",

  engageQuestion: "La teva mare et dóna un antibiòtic perquè tens grip. El teu pare et diu que no el prenguis. Qui té raó? Avui descobriràs com actuen els medicaments per dins — i per quina raó «millorar» no sempre prova que un fàrmac ha funcionat.",
  engageContext: "Avui passaràs per les estacions de medicaments, després miraràs què fan per dins, a escala molecular, i acabaràs amb l'automedicació i l'efecte placebo.",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures). Tasca 2, 09/09/2026.
  teacherNotes: "Posada en comú de la reflexió «és una droga?» (deures de S3). El docent explica l'estructura de la sessió.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Classifico els fàrmacs per mecanisme d'acció i distingeixo tractar el símptoma de tractar la causa.",
      "Explico el mecanisme molecular de l'ibuprofèn (inhibició de l'enzim COX) i les conseqüències per a l'estómac.",
      "Analitzo les resistències bacterianes als antibiòtics com a conseqüència de la selecció natural.",
      "Dissenyo un experiment controlat amb grup placebo per distingir l'efecte real d'un fàrmac d'una simple expectativa."
    ],
    B: [
      "Classifico els fàrmacs en 4 famílies (analgèsics, antitèrmics, antisèptics, antiinflamatoris) segons per a què serveixen i on actuen.",
      "Explico amb un model senzill com actua un fàrmac (p. ex. l'ibuprofèn bloqueja l'enzim COX).",
      "Justifico per quina raó automedicar-se (sobretot antibiòtics per a virus) és un risc.",
      "Distingeixo que un fàrmac tracta el símptoma i que «millorar» no prova per si sol que el fàrmac funcioni (efecte placebo), i que per comprovar-ho cal un grup control i un assaig doble cec."
    ],
    C: [
      "Sé que els fàrmacs es classifiquen per la seva funció: analgèsics, antitèrmics, antisèptics i antiinflamatoris.",
      "Sé que l'ibuprofèn bloqueja l'enzim COX i per això baixa el dolor i la inflamació.",
      "Sé que automedicar-se (sobretot antibiòtics per a virus) és perillós.",
      "Sé que l'efecte placebo és quan millores sense principi actiu, només per expectativa, i que per comprovar un fàrmac cal un grup control (placebo)."
    ]
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui descobriràs com actuen els medicaments per dins. Escriu el que en saps ara — ho compararàs al final de la sessió.",
    prompts: [
      {
        kind: "write",
        text: "Què prens quan tens mal de cap? I quan tens febre? És el mateix medicament?",
        starter: "Quan tinc mal de cap prenc... i quan tinc febre..."
      },
      {
        kind: "write",
        text: "Saps què fa la pastilla dins el teu cos, o només saps que al cap d'una estona el dolor marxa?",
        starter: "Crec que la pastilla..."
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
      apartat: "2",
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
      apartat: "3",
      heading: "==Automedicació== i efecte ==placebo==",
      text: "Automedicar-se sense llegir el prospecte (p. ex. combinar ibuprofèn i paracetamol, o prendre antibiòtics que sobren) pot ser perillós. ==Efecte placebo|o==: una pastilla sense principi actiu pot reduir el dolor de debò — el cervell allibera ==endorfines== quan espera millorar. Per això cap fàrmac es valida sense grup placebo: ==«millorar» després de prendre alguna cosa no demostra per si sol que aquella cosa hagi funcionat|r==. Un assaig fiable compara un ==grup control== (que pren placebo) amb el grup que pren el fàrmac, amb prou participants i en ==doble cec== (ni el pacient ni qui l'avalua saben qui pren què).",
      type: "concept",
      badge: "🔬 Pensament crític"
    }
  ],

  sessionMaterials: [
    { name: "Full de sortida — versions A i B", url: "/fitxes/sa3-s4-exit-ticket.html" },
    { name: "Full de sortida — versió C (amb bastida)", url: "/fitxes/sa3-s4-exit-ticket-C.html" },
    { name: "Fitxa de la sessió · acollida (urdú)", url: "/fitxes/sa3-s4-fitxa-acollida-UR.html" },
    { name: "Fitxa de la sessió · acollida (àrab)", url: "/fitxes/sa3-s4-fitxa-acollida-AR.html" }
  ],

  fitxaUrl: { A: "/fitxes/sa3-s4-fitxa-A.html", B: "/fitxes/sa3-s4-fitxa-B.html", C: "/fitxes/sa3-s4-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa3-s4-teoria.pdf",

  fitxaGuide: {
    fitxaName: "Fitxa S4 — Medicaments",
    steps: [
      { apartat: "↺", title: "Droga o no?", time: "5 min", phase: "engage", instruction: "Escriu la substància que vas pensar a casa i si creus que és una «droga». Votació a mà alçada i tres raons a la pissarra; hi tornarem a la S5.", hints: [] },
      { apartat: "1", title: "Estacions de medicaments", time: "30 min", phase: "explore", instruction: "Passa per les estacions de les 5 famílies (analgèsics, antiinflamatoris, antibiòtics, antivirals, vacunes) i omple la taula.", hints: [] },
      { apartat: "2", title: "Com actuen per dins", time: "20 min", phase: "explica", instruction: "Símptoma, causa i mecanisme: on actua cada fàrmac (per exemple, l'ibuprofèn bloqueja l'enzim COX).", hints: [] },
      { apartat: "3", title: "Funciona de debò? Dissenyem l'assaig", time: "40 min", phase: "elabora", instruction: "Cas Yasmina: com sabríem si un remei funciona de debò? Dissenya un assaig amb placebo: grups, què mesuraries, cec/doble cec i què faria canviar la conclusió.", hints: ["Grup control = pren placebo i no sap quin pren."] },
      { apartat: "4", title: "Automedicació", time: "10 min", phase: "elabora", instruction: "Riscos de l'automedicació i com es generen les resistències als antibiòtics.", hints: [] },
      { apartat: "Final", title: "Full de sortida", time: "10 min", phase: "elabora", instruction: "Sol/a i sense ajuda, en un full a part. A les versions A i B, les respostes obertes van a la llibreta sense copiar l'enunciat; només s'omplen a la fitxa les taules, les frases i els esquemes (icona 📄).", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "La Laia té el turmell inflat i adolorit. Paracetamol o ibuprofèn? Justifica-ho amb el que atura el fàrmac dins el cos (enzim COX).", hint: "L'ibuprofèn bloqueja la COX → menys inflamació." },
    { id: "q2", type: "open", text: "En Pau té mal de coll víric i es pren un antibiòtic que li va sobrar. Dona dues raons per les quals és una mala decisió.", hint: "Virus vs bacteri; resistències." },
    { id: "q3", type: "open", text: "«Em vaig prendre una til·la i el mal de cap va marxar: la til·la cura el mal de cap.» Per què no és una prova? Com ho comprovaries (grup control, doble cec)?", hint: "Grup control = pren placebo." }
  ],
  exitTicketNote: "Fulls de sortida individuals, sense ajuda, es recullen. Versions A i B: dos fulls per A4 (es retallen); versió C: un per pàgina, amb pistes. Qui ha faltat pot respondre-les en línia.",

  homework: { description: "Pensa en una substància que creus que pot generar dependència i una raó. La posarem en comú a l'apartat 1 de la S5 (no cal recerca)." },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (famílies de fàrmacs, mecanisme COX, automedicació, placebo)",
    "Omple la taula de famílies de fàrmacs (analgèsic / antitèrmic / antisèptic / antiinflamatori)",
    "Explica per quina raó un antibiòtic no serveix per a un virus i per quina raó cal un grup placebo per validar un fàrmac",
    "Fes l'exit tiquet online a l'acordió de sota"
  ],
  oaLinks: ["OA3", "OA4"], competencies: ["CE2", "CE3"]
}
