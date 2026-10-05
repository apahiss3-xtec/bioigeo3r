export const sa3s1 = {
  id: "s1", saId: "sa3",
  title: "L'enemic entra",
  sessionNumber: 1, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s1-contagi.jpg",

  engageQuestion: "Avui sou actors d'una epidèmia. Alguns de vosaltres porteu un virus sense saber-ho. Al final de la sessió, descobrirem quantes persones s'han 'infectat'. Però primer: per quina raó creus que la grip es propaga tan ràpid en un espai tancat com una aula?",
  engageContext: "Els dos enigmes queden penjats a la paret tota la situació: la grip de gener i un article contra les vacunes. Per començar: quina diferència hi ha entre un refredat i una grip? I per quina raó de vegades agafes la grip i d'altres no?",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures). Tasca 2, 09/09/2026.
  teacherNotes: "Presentació dels dos enigmes de la SA, que queden a la paret tota la SA. Idees prèvies.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Calculo el R₀ a partir de les dades de la simulació i interpreto el valor en termes de corba epidèmica (creixement exponencial vs extinció).",
      "Argumento per quina raó un antibiòtic eficaç contra la tuberculosi no funciona contra la grip, citant diferències estructurals entre bacteris i virus.",
      "Dissenyo una mesura d'aïllament que reduiria el R₀ de la grip a la classe, justificant-la amb la via de transmissió específica.",
      "Explico per quina raó la febre alta és perillosa però la febre moderada és, de fet, una resposta beneficiosa del cos."
    ],
    B: [
      "Distingeixo entre bacteris (cèl·lules procariotes) i virus (no cèl·lules) i explico per quina raó els antibiòtics no funcionen contra la grip.",
      "Interpreto el R₀ de la simulació: si R₀>1, l'epidèmia s'estén; si R₀<1, s'extingeix.",
      "Identifico les vies de transmissió principals i relaciono cada via amb una mesura preventiva concreta.",
      "Explico per quina raó tenim febre i per quina raó la febre moderada és una resposta útil del cos."
    ],
    C: [
      "Distingeixo: bacteris (cèl·lules vives → antibiòtic pot matar-los) vs virus (no cèl·lules → antibiòtic no funciona).",
      "Reconec que si una persona infectada en contagia 3, l'epidèmia _____ (s'estén / s'extingeix).",
      "Identifico 2 vies de transmissió de la grip i 1 mesura preventiva per a cadascuna.",
      "Completo: la febre és la manera que té el cos de _____ la temperatura per dificultar la supervivència del patogen."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Durant el joc de rols: a la ronda 1 (lliure), anota amb qui interactues (dónes la mà o parles cara a cara). A la ronda 2, anota si portaves 'mascareta' (paper doblat) o no. Al final, compta quantes persones has 'contagiat' si la teva targeta era 'VIRUS': aquest és el teu R₀ personal.",
      challenge: "A partir de les dades de la simulació: calcula el R₀ mig de la classe a la ronda 1 i a la ronda 2, i el % de reducció. Compara'l amb el R₀ de la grip real (2–3) i el xarampió (12–18). Per quina raó el R₀ del xarampió és tan alt? Quina intervenció addicional faria que R₀ baixés per sota d'1?"
    },
    "2": {
      scaffold: "Omplena la taula: Bacteris → Té membrana cel·lular? (sí/no) → Pot reproduir-se sol? (sí/no) → L'antibiòtic el mata? (sí/no). Virus → el mateix. Pista: el virus necessita entrar dins una cèl·lula per copiar-se.",
      challenge: "Explica, pas a pas, com el virus de la grip entra, es replica i destrueix la cèl·lula hoste. Quina part de la cèl·lula usa com a 'fàbrica'? Connecta-ho amb la SA1 (nucli, ribosomes, membrana)."
    },
    "3": {
      scaffold: "Per a cada via de transmissió (aèria, contacte directe, fomites), escriu una mesura preventiva concreta. Pista: si va per l'aire → mascareta/ventilació; si va per contacte → rentar mans; si va per superfícies → desinfectar.",
      challenge: "La febre moderada (37.5–39°C) sembla paradoxal: el cos es 'fa mal' a si mateix pujant la temperatura. Justifica, des de la selecció natural, per quina raó l'evolució ha conservat aquesta resposta. Quin cost té pujar la temperatura, i per quina raó compensa igualment?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui comencem SA3 sobre els defensors del cos. Teniu dos enigmes a la paret que haureu de resoldre al final. Avui poseu la primera peça. Anoteu sense por — les idees prèvies no es corregeixen, es comparen al final.",
    prompts: [
      {
        kind: "write",
        text: "Pensa en l'última vegada que vas estar malalt/a. Per quina raó creus que vas agafar aquella malaltia? I per quina raó et vas curar?",
        starter: "Crec que vaig agafar-la perquè..."
      },
      {
        kind: "write",
        text: "Quina diferència creus que hi ha entre un bacteri i un virus? Per quina raó els antibiòtics no funcionen per a totes les malalties?",
        starter: "Crec que un bacteri és... i un virus és..."
      }
    ]
  },

  exploreInstructions: [
    "Cada alumne rep una targeta (ningú la mostra): la majoria estan en blanc, però 2-3 estan marcades 'VIRUS' en secret",
    "Activitat 1 (5 min): lliure circulació per l'aula — doneu la mà o parleu cara a cara amb 4 persones (simuleu interaccions normals)",
    "Activitat 2 (5 min): segona ronda — ara podeu 'posar-vos mascareta' (doblar el paper) si voleu. Seguiu interactuant",
    "Revelació: qui tenia el virus s'asseu; els que van interactuar amb ells (sense mascareta) s'assenten amb una creu",
    "Moment epistèmic: recompte a la pissarra → quants infectats per 'cas 0'? → aquest és el R₀ de la simulació"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Targetes (1 per alumne, 2-3 marcades 'VIRUS')", "Llista de contactes buida (per anotar interaccions)", "Pissarra per recompte col·lectiu"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "==Bacteris== vs ==virus==: l'enemic no és un de sol",
      text: "==Bacteris|r==: cèl·lules ==procariotes|o== amb membrana pròpia, es reprodueixen ells sols, l'==antibiòtic|g== pot matar-los. ==Virus|r==: no són cèl·lules, no tenen metabolisme propi, necessiten una ==cèl·lula hoste|o== per copiar-se — l'antibiòtic ==no els afecta|r==. Per la grip cal un ==antiviral==, no un antibiòtic.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa3-s1-t2.mp4",
      heading: "Per quina raó la grip es propaga tan ràpid — el ==R₀==",
      text: "==R₀== (nombre reproductiu bàsic): quantes persones contagia de mitjana 1 infectat. ==Grip==: R₀ ≈ 2–3 (cada cas genera 2 o 3 nous). ==Xarampió==: R₀ ≈ 12–18. ==Si R₀>1|r== → l'epidèmia creix. ==Si R₀<1|g== → s'extingeix. Vies: ==aire (droplets)|o==, contacte directe, superfícies (fomites).",
      type: "concept",
      badge: "🔢 Connexió simulació"
    },
    {
      id: "t6",
      apartat: "2",
      heading: "==Vies de transmissió== i mesures preventives",
      text: "Cada via té la seva mesura. ==Aire (gotetes i aerosols)|o==: grip, COVID, xarampió → mascareta i ventilació. ==Contacte directe|o==: herpes, varicel·la → rentar-se les mans, evitar el contacte. ==Superfícies (fomites)|o==: gastroenteritis vírica → desinfecció i higiene. ==Sang i fluids corporals|r==: VIH, hepatitis B → preservatiu, no compartir agulles. ==Aliments o aigua|g==: salmonel·la, còlera → cuinar bé, aigua potable. Són ==barreres físiques|g== que actuen abans que entrin en joc els anticossos.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      video: "/animacions/sa3-s1-t3.mp4",
      heading: "==Incubació==: el perill invisible",
      text: "==Període d'incubació==: temps entre la infecció i els primers símptomes. ==Grip==: 1–4 dies. Durant aquest temps es pot ser ==contagiós sense saber-ho|r== — per quina raó la grip s'estén tan ràpid: la gent va a classe sense saber que és portadora.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Malalties ==infeccioses== vs ==no infeccioses==",
      text: "==Infeccioses|r==: causades per patògens (bacteris, virus, fongs, paràsits) → transmissibles (grip, tuberculosi, VIH). ==No infeccioses==: factors genètics, ambientals o d'estil de vida (==diabetis tipus 2|o==, ==càncer|r==, malaltia cardiovascular). Connexió SA2: l'anèmia del Marc era ==no infecciosa|o== (manca de ferro).",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Per quina raó tenim ==febre==?",
      text: "La ==febre== és una resposta controlada: el cos puja la temperatura per ==dificultar la reproducció del patogen|o== i activar millor les cèl·lules immunitàries. ==Febre moderada (37.5–39°C)|g==: beneficiosa, no cal baixar-la de seguida. ==Febre alta (>39.5°C)|r==: cal tractament, pot ser perillosa per al cervell.",
      type: "concept",
      badge: "🌡️ Paradoxa beneficiosa"
    }
  ],

  sessionMaterials: [
    { name: "Full de sortida — versions A i B", url: "/fitxes/sa3-s1-exit-ticket.html" },
    { name: "Full de sortida — versió C (amb bastida)", url: "/fitxes/sa3-s1-exit-ticket-C.html" }
  ],

  fitxaUrl: { A: "/fitxes/sa3-s1-fitxa-A.html", B: "/fitxes/sa3-s1-fitxa-B.html", C: "/fitxes/sa3-s1-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa3-s1-teoria.pdf",

  fitxaGuide: {
    fitxaName: "Fitxa S1 — L'enemic entra",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Apartat 0: pensa en l'última vegada que vas estar malalt/a i escriu per quina raó creus que et va passar i per quina et vas curar. Escriu també quina diferència creus que hi ha entre un bacteri i un virus. No es corregeix ara: ho compararàs al final de la SA.", hints: [] },
      { apartat: "1", title: "Simulació del contagi", time: "25 min", phase: "explore", instruction: "Apartat 1: durant el joc de rols, anota amb qui interactues a cada ronda (la ronda 2 pot ser amb «mascareta»). Després del recompte, calcula el teu R₀ individual i el de la classe, interpreta si és més gran o més petit que 1 i apunta un límit del model de la simulació.", hints: [
        "Anota TOTES les interaccions, fins i tot les curtes. El virus no avisa.",
        "R₀ > 1: l'epidèmia s'estén. R₀ < 1: s'extingeix."
      ] },
      { apartat: "2", title: "Qui és l'enemic?", time: "20 min", phase: "explica", instruction: "Apartat 2: completa la taula de bacteris vs virus, explica amb les dades de la taula per quina raó l'antibiòtic no pot matar el virus de la grip i completa les frases del R₀ (2,5 · 0,8 · xarampió).", hints: [
        "Mira a la taula què té el bacteri que el virus no té. L'antibiòtic ataca alguna d'aquestes parts?",
        "Si R₀ = 2,5, cada cas en genera 2,5 de nous i l'epidèmia s'estén."
      ] },
      { apartat: "3", title: "Com funciona la infecció?", time: "15 min", phase: "explica", instruction: "Apartat 3: observa les barreres del cos, omple la taula de vies de transmissió amb una mesura preventiva concreta, explica per quina raó es pot contagiar sense saber que s'és malalt/a, per quina raó la febre moderada pot ser útil i formula una hipòtesi per a l'enigma de la Martina.", hints: [
        "Cada via suggereix una mesura: aire → mascareta o ventilació; contacte → rentar mans; superfícies → netejar.",
        "Pensa què li fa la temperatura alta al patogen i a les defenses del cos."
      ] },
      { apartat: "Final", title: "Full de sortida i metacognició", time: "13 min", phase: "elabora", instruction: "Full de sortida (10 min): sol/a i sense ajuda, tres preguntes de cas; el lliures a la professora. Després, metacognició (3 min): torna als objectius del principi, marca el que has après i apunta què et continues preguntant.", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "En Biel té mal de coll i el metge li ha dit que l'ha causat un virus. La seva mare vol donar-li l'antibiòtic que va sobrar de l'hivern passat. Serviria? Justifica-ho amb una diferència entre un bacteri i un virus.", hint: "Un bacteri és una cèl·lula i el virus no. L'antibiòtic ataca estructures dels bacteris: el virus no en té." },
    { id: "q2", type: "open", text: "Tres malalties inventades tenen aquests R₀: X = 0,8 · Y = 2,5 · Z = 15. Quina s'extingiria sola i quina s'estendria més de pressa? Justifica-ho amb el significat de R₀.", hint: "R₀ < 1 → l'epidèmia s'extingeix (X). R₀ gran → s'estén més de pressa (Z)." },
    { id: "q3", type: "open", text: "La Nora té 38,3 °C de febre. La seva àvia diu: «cal baixar-la ara mateix, la febre és dolenta». Hi estàs d'acord? Justifica-ho explicant què li fa la temperatura al patogen.", hint: "Febre moderada (37,5–39 °C): dificulta la reproducció del patogen i accelera les defenses; no sempre cal baixar-la." }
  ],
  exitTicketNote: "Avaluació formativa. Criteri avaluat: 1.1 (OA1). Les tres preguntes són de cas i es responen sol/a i sense ajuda. Es fa en un full a part: /fitxes/sa3-s1-exit-ticket.html (versions A i B) i /fitxes/sa3-s1-exit-ticket-C.html (versió C, amb bastida). Qui ha faltat pot respondre-les en línia.",

  homework: null, // S1 no té feina a casa — decisió de disseny (spec SA3-S1, 02/07/2026)
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (bacteris vs virus, R₀, febre)",
    "Fes el joc de rols simplificat: llança un dau — si treu 1 o 2, ets 'infectat'. Conta quantes persones fictícies contagiaries en R₀=2.5",
    "Omple la fitxa S1 apartats 0–3",
    "Exit tiquet en paper a S2 o fes-lo online a l'acordió de sota"
  ],
  oaLinks: ["OA1"], competencies: ["CE2", "CE5"]
}
