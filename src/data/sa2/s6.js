export const sa2s6 = {
  id: "s6", saId: "sa2",
  title: "El sistema de control i l'equilibri intern",
  sessionNumber: 6, biome: "sa2", duration: "2h",
  guiaPerApartats: true,
  engageImage: "/images/sa2-s6-neuronal.jpg",
  flippedReading: "Les dues vies de control del cos: els nervis (elèctrics, mil·lisegons) i les hormones (per la sang, minuts). Idea clau: una via és ràpida i breu; l'altra, lenta i duradora.",

  // Repte oral curt: "l'enigma del control" — pregunta oberta deixada penjada fins a l'apartat 2.
  engageChallenge: "Quan l'àrbitre va xiular i la Mercè va sortir a córrer, la seva FC JA pujava ABANS d'agafar ritme. Per quina raó? Ningú li ha dit conscientment al cor que bategui més ràpid. (És una pregunta oberta: la resoldràs a l'apartat 2.)",
  engageQuestion: "Has mesurat la FC en repòs 3 matins. Posem-la en comú: hi ha molta variabilitat a la classe. Per quina raó? (Edat, estrès, son, temperatura...) I quin sistema creus que controla el cor, el pols i els reflexos?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Argumento per quina raó la via nerviosa i la via hormonal no són redundants sinó complementàries (velocitat contra durada).",
      "Critico la mesura del temps de reacció identificant variable independent, dependent, control i rèpliques, i dic quin resultat refutaria la meva hipòtesi.",
      "Explico el ronyó com a filtre selectiu (filtració + reabsorció) i argumento què li passaria al medi intern si deixés de filtrar.",
      "Integro pulmons i ronyó com un sistema coordinat d'eliminació i ho lligo a la respiració cel·lular (unitat de la cèl·lula, SA1).",
      "Comparo DUES analítiques diferents i argumento amb dades per quina raó el problema del Marc Fontana és el ferro i no el ronyó."
    ],
    B: [
      "Distingeixo la via nerviosa (elèctrica, mil·lisegons) de la via hormonal (per la sang, minuts) amb un exemple de cadascuna.",
      "Explico per quina raó la freqüència cardíaca de la Mercè ja pujava ABANS d'arrencar (nervi simpàtic i adrenalina).",
      "Descric com el ronyó filtra la sang i forma l'orina (ronyó → urèter → bufeta) i per quina raó és un filtre selectiu.",
      "Relaciono les dues portes de sortida dels residus: els pulmons (CO₂) i el ronyó (urea, sals i aigua).",
      "Interpreto la urea i la creatinina d'una analítica i connecto l'EPO que fabrica el ronyó amb l'anèmia."
    ],
    C: [
      "Sé que els nervis porten l'ordre molt de pressa (mil·lisegons) i que les hormones van per la sang i triguen més (minuts).",
      "Sé nomenar dues hormones i dir què fan: l'adrenalina i l'ADH.",
      "Sé que el ronyó filtra la sang i fabrica l'orina, i sé el camí: ronyó → urèter → bufeta.",
      "Sé que els pulmons treuen el CO₂ i que el ronyó treu la urea, les sals i l'aigua que sobren.",
      "Sé explicar per quina raó, si bec poca aigua, la meva orina és més fosca (l'ADH)."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Estació A (regle de 30 cm): anota les 5 distàncies de la mà dominant i les 5 de l'altra a la taula de la fitxa i passa-les a mil·lisegons amb la taula de conversió (5 cm → 101 ms · 10 → 143 · 15 → 175 · 20 → 202 · 25 → 226 · 30 → 247).",
      challenge: "El temps que has mesurat inclou 5 passos: (1) receptor, (2) via nerviosa que puja, (3) processament, (4) via que baixa, (5) contracció del múscul. Quin creus que en consumeix més? Proposa una mesura que ho pogués aïllar."
    }
  },

  // ── APARTAT 0 · REPÀS (la hipòtesi antiga és ara a l'inici de l'apartat 1) ──
  repas: {
    startPoint: "Tanca les fitxes de les sessions 4 i 5 i prova de recordar: el cor per dins i les gràfiques G1 i G2.",
    prompts: [
      { text: "Sessió 4. Quin ventricle té la paret més gruixuda? Per quina raó?" },
      { text: "Sessió 5. Com calcules la teva FCmàx? A partir de quin percentatge d'aquesta FCmàx entres a la zona anaeròbica?" },
      { text: "Gràfica G1. La FC de la Mercè puja de pressa però baixa a poc a poc. Per quina raó el cor no torna al repòs de cop en creuar la meta?" },
      { text: "Gràfica G2. Qui té la FC en repòs més baixa, l'esportista d'elit o la persona sedentària? Per quina raó?" }
    ],
    note: "Primer de memòria. Després comprova-ho a les teves fitxes de les sessions 4 i 5."
  },

  // 28/09/2026: cau l'estació D (mini-investigació sobre els residus amb
  // l'analítica del Marc). La sessió anava a 35' i el cas ja es treballa a
  // fons a la S3, apartat 3. La fitxa i el generador també l'han perduda.
  exploreActivity: {
    what: "3 estacions analògiques: (A) test de temps de reacció amb un regle, (B) simulació d'un arc reflex en grup, (C) targetes d'aparellar hormona-glàndula-efecte",
    who: { mode: "parelles+grup5", label: "Parelles (A i C) i grups de 5 (B, arc reflex)" },
    time: 25,
    note: "Part A: compara la teva mà dominant amb la no dominant i les 5 repeticions entre elles."
  },
  exploreInstructions: [
    "Estació A — Temps de reacció (parelles): regle de 30 cm. Un deixa caure el regle sense avisar i l'altre tanca la mà. Mesura la distància de caiguda i converteix-la en temps. 5 proves per mà.",
    "La 5a prova, ha sortit més ràpida que la 1a? Proposa'n una explicació. La mà dominant, és més ràpida que l'altra?",
    "Estació B — Arc reflex (grups de 5): receptor (peu), nervi aferent, medul·la espinal, nervi eferent, múscul. Passeu-vos una pilota en ordre. Traieu el «cervell» de la cadena: el reflex continua. Per quina raó?",
    "Estació C — Targetes d'hormones (parelles): adrenalina, insulina, ADH i EPO. Fes coincidir cada hormona amb la seva glàndula, la situació i l'efecte."
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Regle 30 cm (parelles)", "Pilota o tap (arc reflex)", "Targetes hormones (impreses)"],

  theoryPoints: [
    { id: "t1", apartat: "2", heading: "==Sistema nerviós==: la via ràpida", text: "==SN simpàtic==: el mode d'alerta. Augmenta la ==FC|o==, dilata els bronquis i frena la digestió. Actua en ==mil·lisegons|g== perquè l'ordre viatja com un senyal elèctric pels nervis.", type: "concept", video: "/animacions/sa2-s6-t1.mp4" },
    { id: "t2", images: [{"src":"images/sa2-fotos/s6-t2.jpg","caption":"Les glàndules del sistema endocrí: cadascuna aboca les seves hormones a la sang.","credit":"US Government · Public domain · Wikimedia Commons"}], apartat: "2", heading: "==Sistema endocrí==: la via lenta però duradora", text: "==Adrenalina|o== (glàndula suprarenal): puja la glucosa i la FC. Fa efecte als ==30 segons|o== perquè viatja per la sang. ==Insulina|g== (pàncrees): fa entrar la glucosa a les cèl·lules. ==EPO|b== (ronyó): estimula la producció d'eritròcits; hi tornaràs a l'apartat 4.", type: "concept" },
    { id: "t5", images: [{"src":"images/sa2-fotos/s6-t5.jpg","caption":"La neurona: el missatge nerviós hi viatja en mil·lisegons, molt més ràpid que una hormona.","credit":"Sanu N · CC BY-SA 4.0 · Wikimedia Commons"}], apartat: "2", heading: "Rapidesa: ==nervis== contra ==hormones==", text: "==Nervis|b==: ==mil·lisegons|g== (via elèctrica). ==Hormones|o==: de ==30 segons a minuts|o== (via sang). Per quina raó les hormones van més tard: han de viatjar per la ==circulació==. Però els seus ==efectes duren molt més|g==.", type: "synthesis" },
    { id: "t3", apartat: "3", heading: "==Sistema excretor==: treure el que sobra", text: "Les cèl·lules que treballen produeixen residus: ==CO₂|r== (surt pels ==pulmons|b==), ==urea i sals|o== (surten pels ==ronyons|g== com a orina). El ronyó filtra la sang i manté constant el medi intern (==homeòstasi==). L'==ADH|p== (hormona) controla quanta aigua reté el ronyó.", type: "concept", video: "/animacions/sa2-s6-t3.mp4" },
    { id: "t4", images: [{"src":"images/sa2-fotos/s6-t4.jpg","caption":"Un ronyó (aquí de vedella, molt semblant al nostre): és on es fabrica l'EPO que fa produir glòbuls vermells.","credit":"Wagner Souza e Silva · CC BY-SA 4.0 · Wikimedia Commons"}], apartat: "3", heading: "Connexió amb l'enigma: ==EPO== i anèmia", text: "El ==ronyó|g== fabrica ==EPO==, que ordena als ossos fabricar ==eritròcits|r==. Per tant, un problema de ronyó també pot causar ==anèmia|r==. La ==creatinina== i la ==urea== de la sang diuen si el ronyó filtra bé. A l'apartat 4 decidiràs tu què li passa al Marc Fontana.", type: "keyequation", badge: "🔗 Enigma 2 — tercera pista" },
    { id: "t6", images: [{"src":"images/sa2-fotos/s6-t6.jpg","caption":"Regulació de la glucosa a la sang: si puja, la insulina la fa baixar; si baixa, el glucagó la fa pujar.","credit":"Christinelmiller · CC0 · Wikimedia Commons"}], apartat: "4", heading: "L'==homeòstasi== és un bucle", text: "Pensa en un termòstat: fa fred → s'encén la calefacció → la casa s'escalfa → el termòstat ho nota i ==s'apaga sol|g==. El cos treballa igual: un canvi al medi intern engega una resposta, i l'efecte d'aquesta resposta ==apaga el senyal== que l'havia engegada.", type: "synthesis" }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", title: "La neurona", src: "/images/sa2-neurona.png", caption: "Les parts d'una neurona. Segueix amb el dit el camí del senyal elèctric, de les dendrites fins a l'extrem de l'axó.", note: "Dendrites (reben el senyal), soma, axó amb mielina (el condueix ràpid) i sinapsi (el passa a la neurona següent). La via elèctrica de mil·lisegons." },
    { id: "Fig.2", apartat: "2", title: "La sinapsi: com es comuniquen les neurones", src: "/images/sa2-sinapsi.png", caption: "El punt on una neurona passa el missatge a la següent. Fixa't que no es toquen: hi ha un espai entre totes dues.", note: "La neurona presinàptica allibera neurotransmissors que travessen l'espai sinàptic fins a la postsinàptica. El pas químic del missatge." },
    { id: "Fig.3", apartat: "3", before: true, title: "El ronyó com a filtre de la sang", src: "/images/sa2-s6-ronyo-marcadors.png", caption: "Cinc números sobre el camí de la sang i de l'orina, sense noms: és el dibuix de la teva fitxa. Els puntets són la urea; mira on n'hi ha i on ja no.", note: "① sang que arriba amb residus (els puntets són la urea) · ② ronyó · ③ sang ja filtrada · ④ urèter · ⑤ bufeta. Compte: aquí «neta» vol dir sense urea, no amb oxigen." },
    { id: "Fig.4", apartat: "3", title: "La nefrona, de més a prop", src: "/images/sa2-s6-nefrona-a.png", caption: "Una ampliació de la unitat que filtra dins del ronyó, amb cinc números. És el dibuix que treballa la versió A; a les altres versions et pot servir per veure el filtre de més a prop.", note: "Només surt a la fitxa A (filtració i reabsorció numerades)." },
    { id: "Fig.5", apartat: "3", title: "Les dues hormones del ronyó", src: "/images/sa2-s6-hormones-etiquetada.png", caption: "Dos esquemes, un per a cada hormona. Segueix cada fletxa i digues qui dóna l'ordre i qui l'obeeix.", note: "Esquerra (ADH): el cervell mana al ronyó retenir aigua i l'aigua torna a la sang. Dreta (EPO): el ronyó mana a la medul·la òssia fabricar eritròcits nous. Va després de la teoria perquè els rètols donen la resposta." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s6-fitxa-A.html", B: "/fitxes/sa2-s6-fitxa-B.html", C: "/fitxes/sa2-s6-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa2-s6-teoria.pdf",

  sessionMaterials: [
    { id: "fitxaAcollidaUR", title: "Fitxa de la sessió · acollida (urdú)", url: "/fitxes/sa2-s6-fitxa-acollida-UR.html", who: "alumnat d'acollida: mateixos apartats que la classe" },
    { id: "fitxaAcollidaAR", title: "Fitxa de la sessió · acollida (àrab)", url: "/fitxes/sa2-s6-fitxa-acollida-AR.html", who: "alumnat d'acollida: mateixos apartats que la classe" },
    { id: "sortida", title: "Exit tiquet (versions A i B)", url: "/fitxes/sa2-s6-exit-ticket.html", who: "per al final de la sessió" },
    { id: "sortidaC", title: "Exit tiquet (versió C)", url: "/fitxes/sa2-s6-exit-ticket-C.html", who: "per al final de la sessió" },
    { id: "labVirtual", title: "Laboratori virtual (si has faltat a la pràctica)", url: "/labs/sa2/lab_s6_control.html", who: "per fer a casa si no vas poder fer la pràctica" }
  ],

  fitxaGuide: {
    fitxaName: "Fitxa Sessió 6 — El sistema de control i l'equilibri intern",
    steps: [
      { apartat: "—", title: "Formulari de comprensió de la lectura", time: "5 min", phase: "engage", instruction: "Abans de començar la fitxa, fes el formulari de comprensió (Google Forms) de la lectura de la sessió 6 que havies de llegir a casa.", hints: [] },
      { apartat: "0", title: "Repàs — el cor i la FC de les sessions 4 i 5", time: "8 min", phase: "engage", instruction: "Sol/a i amb les fitxes tancades, respon les preguntes de l'apartat 0. Després obre les fitxes de les sessions 4 i 5, comprova-ho i corregeix el que calgui.", hints: [] },
      { apartat: "1", title: "Tres estacions — com dóna ordres el teu cos", time: "25 min", phase: "explore", explora: true, instruction: "Primer, sol/a i en 3 minuts: dibuixa la teva hipòtesi (per on surten els residus líquids) i respon les dues preguntes. No es corregeix: la compararàs al final. Després rota per les 3 estacions i omple-les a la fitxa. A: temps de reacció amb regle (5 proves per mà a les versions B i C, 3 a la A; de cm a ms). B: arc reflex en grup. C: targetes d'hormones.", hints: [
        "Estació A: anota TOTES les distàncies sense arrodonir — la variabilitat és la dada interessant.",
        "Estació C: llegeix primer la columna EFECTE; després decideix la glàndula i la situació."
      ] },
      { apartat: "2", title: "Dues vies de control: el nervi i l'hormona", time: "20 min", phase: "explica", instruction: "Llegeix la teoria, omple la taula comparativa (per on viatja, quant triga, quant dura, exemple) i respon la pregunta de la Mercè.", hints: [
        "Via elèctrica pel nervi contra via química per la sang: quin recorregut és més curt?",
        "La FC de la Mercè pujava ABANS d'arrencar: mira els temps de la teva taula i digues quina de les dues vies ho pot haver començat."
      ] },
      { apartat: "3", title: "El sistema excretor: el ronyó et manté net per dins", time: "30 min", phase: "explica", instruction: "Escriu el nom de cada número del dibuix i comprova-ho amb la llegenda. Explica per quina raó el ronyó és un filtre selectiu i connecta pulmons i ronyó. Després llegeix el dibuix de les hormones, resol els casos de la Júlia i el Pau i completa la cadena de l'EPO fins al cansament.", hints: [
        "Un residu és un gas i els altres van dissolts a la sang. Per on pot sortir cadascun?",
        "Compte: aquí «sang neta» vol dir sense urea, no amb oxigen.",
        "ADH: en fabriques més quan beus molt o quan beus poc? Per quina raó?"
      ] },
      { apartat: "4", title: "Integració: com es manté estable el medi intern", time: "15 min", phase: "elabora", instruction: "Completa el bucle de l'aigua i digues quin sistema de l'apartat 2 fa servir. Tanca el cas del Marc Fontana amb dues dades de la seva analítica i respon la reflexió sobre l'EPO i el dopatge.", hints: [
        "Homeòstasi = mantenir estable el medi intern. Fixa't que l'efecte del bucle apaga la causa que l'havia engegat.",
        "L'analítica del Marc és a la teva fitxa de la sessió 3, apartat 3. Tria dues dades que estiguin fora del rang.",
        "Si hagués estat el ronyó, quin valor de l'analítica hauria canviat? Busca'l al vocabulari del principi de la fitxa."
      ] },
      { apartat: "—", title: "Torna als objectius i full de sortida", time: "8 min", phase: "elabora", instruction: "Marca a la fitxa els objectius que has après, compara el teu dibuix de l'apartat 1 amb el que saps ara i anota què encara et preguntes. Després fes el full de sortida en paper.", hints: [] }
    ]
  },
  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "multiple", text: "Posa en ordre de velocitat: hormona / nervi / reflex", options: ["Reflex (ms) < Nervi voluntari (ms-seg) < Hormona (seg-min)", "Hormona < Nervi < Reflex", "Tots tres actuen a la mateixa velocitat", "Nervi < Reflex < Hormona"], correct: 0 },
    { id: "q2", type: "open", text: "Per quina raó l'adrenalina inhibeix la digestió durant l'exercici físic intens? Usa el concepte de 'prioritat de recursos'.", hint: "El cos no pot donar molta sang als músculs i a l'intestí alhora. Si està fugint o competint, quin dels dos prioritza?" },
    { id: "q3", type: "open", text: "Per quina raó l'orina és més fosca quan beus poca aigua? Connecta-ho amb l'ADH i el ronyó.", hint: "Quan en falta, l'ADH ordena al ronyó retenir aigua. Si retens aigua, l'orina queda més diluïda o més concentrada?" }
  ],
  homework: {
    readingNext: {
      session: 7,
      text: "Llegeix la lectura de la Sessió 7. A l'inici de la propera sessió faràs el formulari de comprensió (Google Forms).",
      pdfUrl: "/lectures/sa2-s7-lectura.pdf",
      easyUrl: "/lectures/sa2-s7-lectura-FACIL.pdf",
    }, description: "Durant un dia, anota a la fitxa quants gots d'aigua beus i de quin color és la teva orina (4 moments). A més, NO t'oblidis les dades de FC en repòs dels 3 matins de la sessió passada: són NECESSÀRIES per a la Sessió 7." },
  recoveryInstructions: [
    "Apartat 0: fes el repàs de memòria i comprova-ho amb les teves fitxes de les sessions 4 i 5",
    "Apartat 1: dibuixa la teva hipòtesi i respon les dues preguntes. Després fes el test de temps de reacció a casa: que algú et deixi caure un regle de 30 cm sense avisar; anota on l'agafes, 5 vegades amb cada mà",
    "Apartat 1: fes la pràctica al laboratori virtual (botó de sota) i copia el resum a la fitxa",
    "Apartats 2, 3 i 4: llegeix la teoria de cada apartat en aquesta pàgina i omple la fitxa en el mateix ordre",
    "Torna als objectius i compara la teva hipòtesi de l'apartat 1 amb el que saps ara",
    "Recorda: necessites les dades de FC en repòs dels 3 matins per a la Sessió 7"
  ],
  recoveryLinks: [{ label: "Laboratori virtual de la pràctica", url: "/labs/sa2/lab_s6_control.html", icon: "🧪" }],
  oaLinks: ["OA4"], competencies: ["CE1", "CE2", "CE3", "CE4"]
}
