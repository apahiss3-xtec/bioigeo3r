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
      apartat: "1",
      heading: "==Antivirals==: contra virus concrets",
      text: "Els ==antivirals|g== actuen contra ==virus específics|o== (per exemple, el Tamiflu contra la grip o els antiretrovirals contra el VIH). Com que el virus s'amaga dins les cèl·lules, ==és molt més difícil== atacar-lo sense fer mal a la cèl·lula: per això n'hi ha ==molts menys que d'antibiòtics|r==. Cada antiviral serveix només per al virus per al qual s'ha fet, i ==no és un antibiòtic|r==. Per això una vacuna, que prepara el sistema immunitari abans, és tan important contra els virus.",
      type: "concept"
    },
    {
      id: "t2",
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
      apartat: "3",
      heading: "==Automedicació== i efecte ==placebo==",
      text: "Automedicar-se sense llegir el prospecte (p. ex. combinar ibuprofèn i paracetamol, o prendre antibiòtics que sobren) pot ser perillós. ==Efecte placebo|o==: una pastilla sense principi actiu pot reduir el dolor de debò — el cervell allibera ==endorfines== quan espera millorar. Per això cap fàrmac es valida sense grup placebo: ==«millorar» després de prendre alguna cosa no demostra per si sol que aquella cosa hagi funcionat|r==. Un assaig fiable compara un ==grup control== (que pren placebo) amb el grup que pren el fàrmac, amb prou participants i en ==doble cec== (ni el pacient ni qui l'avalua saben qui pren què).",
      type: "concept",
      badge: "🔬 Pensament crític"
    }
  ],

  sessionMaterials: [
    { name: "Full de sortida — versions A i B", url: "/fitxes/sa3-s4-exit-ticket.html" },
    { name: "Full de sortida — versió C (amb bastida)", url: "/fitxes/sa3-s4-exit-ticket-C.html" }
  ],

  fitxaUrl: { A: "/fitxes/sa3-s4-fitxa-A.html", B: "/fitxes/sa3-s4-fitxa-B.html", C: "/fitxes/sa3-s4-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa3-s4-teoria.pdf",

  fitxaGuide: {
    fitxaName: "Fitxa S4 — Medicaments: com actuen",
    steps: [
      { apartat: "0", title: "Posada en comú dels deures i idees prèvies", time: "10 min", phase: "engage", instruction: "Primer, posada en comú de la reflexió de S3: per què creus que una substància és o no és una «droga» (5 min). Després, apartat 0: escriu què prens quan tens mal de cap i febre i si saps què fa la pastilla dins el cos. Ho compararàs al final de la SA.", hints: [] },
      { apartat: "1", title: "Estacions de medicaments", time: "30 min", phase: "explore", instruction: "Apartat 1: llegeix les targetes de cada família i completa la graella (per a què serveix, on actua, si cal recepta). Compte amb la trampa: hi ha fàrmacs que surten a més d'una família. Respon per què un mateix fàrmac pot tenir més d'un efecte i si «alleuja el dolor a l'instant» és prova o promesa.", hints: [
        "El paracetamol és analgèsic i antitèrmic; l'ibuprofèn també és antiinflamatori.",
        "L'antisèptic actua a la pell; els altres actuen per dins el cos."
      ] },
      { apartat: "2", title: "Com actuen per dins", time: "25 min", phase: "explica", instruction: "Apartat 2: mira la cadena causa → malaltia → símptoma → fàrmac i completa les frases sobre l'ibuprofèn (enzim COX) i per quina raó un antibiòtic no serveix per a la grip.", hints: [
        "Molts fàrmacs actuen sobre el símptoma, no sobre la causa: baixar la febre no mata el virus.",
        "Els antibiòtics ataquen estructures que només tenen els bacteris; el virus no en té."
      ] },
      { apartat: "3", title: "Automedicació, placebo i cas Yasmina", time: "25 min", phase: "explica", instruction: "Apartat 3: llegeix el cas de la Yasmina, digues quins errors ha comès (mínim 2) i explica per quina raó «millorar el dia 5» no demostra que els antibiòtics funcionessin. Després, a «Com es comprova un fàrmac», detecta els errors de disseny de l'assaig del xarop i explica com el milloraries (grup control, placebo i doble cec).", hints: [
        "Grup control: el que NO rep el fàrmac (rep un placebo) per poder comparar. Doble cec: ni el pacient ni qui avalua saben qui pren què.",
        "El cervell allibera endorfines quan espera millorar: per això cap fàrmac es valida sense grup placebo.",
        "La grip dura uns 5-7 dies: la Yasmina podria haver-se curat igualment."
      ] },
      { apartat: "Final", title: "Full de sortida i metacognició", time: "13 min", phase: "elabora", instruction: "Full de sortida (10 min): sol/a i sense ajuda, tres preguntes de cas; el lliures a la professora. Després, metacognició (3 min): torna als objectius del principi, marca el que has après i apunta què et continues preguntant.", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "La Laia té el turmell inflat i adolorit. Pot triar entre paracetamol i ibuprofèn. Quin li convindria més? Justifica-ho explicant què atura aquest fàrmac dins el cos (enzim COX).", hint: "Ibuprofèn: bloqueja l'enzim COX → menys prostaglandines → menys inflamació i dolor. El paracetamol no és antiinflamatori." },
    { id: "q2", type: "open", text: "En Pau té mal de coll víric i es pren un antibiòtic que li va sobrar. Dona dues raons per les quals és una mala decisió per a la seva salut.", hint: "(1) L'antibiòtic no té diana en un virus. (2) L'ús innecessari afavoreix les resistències bacterianes (i pot fer efectes adversos)." },
    { id: "q3", type: "open", text: "La iaia diu: «em vaig prendre una til·la i el mal de cap va marxar, així que la til·la cura el mal de cap». Per quina raó això no és una prova? Com ho comprovaries de debò? Fes servir un grup control i digues què vol dir que sigui doble cec.", hint: "El mal de cap també hauria pogut marxar sol. Caldria un assaig amb grup control (placebo): til·la real vs. til·la «buida», i en doble cec: ni qui la pren ni qui avalua sap qui pren què. (OA4)" }
  ],
  exitTicketNote: "Avaluació formativa. Criteris avaluats: 5.3 (OA3, preguntes 1 i 2) i 4.2 i 1.1 (OA4, pregunta 3). Les tres preguntes són de cas i es responen sol/a i sense ajuda. Es fa en un full a part: /fitxes/sa3-s4-exit-ticket.html (versions A i B) i /fitxes/sa3-s4-exit-ticket-C.html (versió C, amb bastida). Qui ha faltat pot respondre-les en línia.",

  homework: { description: "Pensa en una substància que creus que pot generar dependència i una raó. Ho comentareu en veu alta a l'inici de S5 (no cal recerca)." },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (famílies de fàrmacs, mecanisme COX, automedicació, placebo)",
    "Omple la taula de famílies de fàrmacs (analgèsic / antitèrmic / antisèptic / antiinflamatori)",
    "Explica per quina raó un antibiòtic no serveix per a un virus i per quina raó cal un grup placebo per validar un fàrmac",
    "Fes l'exit tiquet online a l'acordió de sota"
  ],
  oaLinks: ["OA3", "OA4"], competencies: ["CE2"]
}
