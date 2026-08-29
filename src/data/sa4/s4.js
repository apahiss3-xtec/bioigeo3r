// ─────────────────────────────────────────────────────────────────────────────
// SA4 · Sessió 4 — «Decisions informades»  ·  ÚLTIMA SESSIÓ DE LA UNITAT
// Reescrit sencer el 2026-08-28. Font de veritat: «SA4 - Sessió 4 - SPEC» (vault).
//
// Què s'ha corregit respecte de la versió anterior (28/06), i per què:
//  · RESOLIA «L'ENIGMA DE LA LAIA». Aquell enigma es va crear i RESOLDRE a la
//    Sessió 2 (24/08), amb la figura del cicle. Tenir-lo aquí volia dir tornar a
//    presentar com a novetat una cosa tancada dues sessions abans, i hi dedicava
//    dos punts de teoria sencers. Retirat. El que es conserva és USAR-NE la
//    conclusió per explicar la distància entre l'ús perfecte i l'ús real del
//    mètode del calendari.
//  · DEIA «ISTs». El currículum oficial escriu «ITS» (infeccions de transmissió
//    sexual), literal al saber [CH19-20]. Unificat.
//  · ASSIGNAVA video: /animacions/sa4-s3-t1..t5.mp4. Aquestes carpetes SÍ que
//    són d'aquesta sessió (numeració desfasada una posició, documentat el 23/08),
//    però no s'usen: la nota «Animacions — Criteri i pla curt» no en llista cap
//    entre les 12 que es guanyen el lloc, la seva intro diu literalment
//    «SA4 · Sessió 3 · Punt N» (número equivocat i nomenclatura prohibida en
//    material d'alumnat) i dues resolen l'enigma de la Laia. Cap `video:` aquí.
//
// Cura (SPEC §1bis): les TRES preguntes del producte són les MATEIXES per a tota
// la classe — si cada parella en rebés una de diferent, quedaria associada a
// aquella pregunta davant de tothom. Cap material que porti nom demana res sobre
// la pròpia persona. El formulari és sumatiu i es fa a classe: exitTicketConfidential.
// ─────────────────────────────────────────────────────────────────────────────

export const sa4s4 = {
  id: "s4", saId: "sa4",
  title: "Decisions informades",
  sessionNumber: 4, biome: "sa4", duration: "2h",
  engageImage: "/images/sa4-s4-video-viral.jpg",
  isFinalSession: true,

  engageQuestion: "Com es decideix una cosa sobre el propi cos sense fer-ho per por ni per un vídeo?",
  engageContext: "En entrar es recullen, en paper i sense nom, les frases que cadascú va portar de casa. El docent en llegeix tres, barrejades, sense dir de qui són ni preguntar-ho, i n'hi afegeix una quarta: «els anticonceptius et fan infèrtil per sempre», que circula molt. Es projecta el vídeo una sola vegada. Avui l'afirmació no s'accepta ni es rebutja: es comprova. I al final es responen, amb ciència i per escrit, tres preguntes que la classe mateixa va deixar a la bústia el primer dia.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    // ⚠️ Aquestes tres llistes han de ser LITERALMENT les de OA_A / OA_B / OA_C
    // de SA4-creixer-reproduir/_s4_content.py, que són les que s'imprimeixen a la
    // fitxa. El 28/08 divergien en tres entrades i l'alumnat no sabia quina valia.
    A: [
      "Explico on talla la cadena cada família de mètodes (hormonal, de barrera, DIU de coure) i per quina raó això evita l'embaràs.",
      "Justifico per quina raó només la família de barrera protegeix també d'ITS.",
      "Llegeixo una gràfica d'ús perfecte contra ús real i explico d'on ve la diferència.",
      "Dissenyo la comprovació d'una afirmació sobre el cos: variable independent, variable dependent i grup de comparació.",
      "Distingeixo correlació de causalitat i proposo la tercera variable que explicaria les dues coses alhora.",
      "Desmunto un mite amb el checklist i dic què s'hauria de mesurar per comprovar-lo."
    ],
    B: [
      "Explico on talla la cadena cada família de mètodes (hormonal, de barrera, DIU de coure) i per quina raó això evita l'embaràs.",
      "Justifico per quina raó només la família de barrera protegeix també d'ITS.",
      "Llegeixo una gràfica d'ús perfecte contra ús real i explico d'on ve la diferència.",
      "Passo el checklist CRITIC a una afirmació viral i dic com es comprovaria.",
      "Escric una resposta de salut basada en fisiologia i en una font fiable, sense judicis sobre ningú."
    ],
    C: [
      "Sé que només el preservatiu protegeix també de les ITS.",
      "Sé dir què fa la píndola: fer que no surti l'òvul.",
      "Sé que el mètode del calendari no fa res al cos i per això falla molt.",
      "Sé distingir una anècdota d'una prova.",
      "Sé escriure una resposta amb una font fiable i sense jutjar ningú."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Tres caselles en comptes de sis, i amb un exemple ja resolt sencer al davant (l'aigua amb llimona): qui ho diu · quines dades hi posa · es pot comprovar i com. Després, dues preguntes d'encerclar entre dues opcions que totes dues sonen raonables.",
      challenge: "Dissenya la comprovació sencera de l'afirmació: quina és la pregunta investigable, quina és la variable independent, quina la dependent, amb quin grup es compara i durant quant de temps. I el cas de la IA que dona una font que existeix però que no diu el que ella deia."
    },
    "2": {
      scaffold: "La graella ja porta escrites tres respostes, una de cada columna, com a exemple; la del mètode del calendari no s'hi dona, perquè és el descobriment de l'activitat. La columna d'ITS és una taula a part que només s'omple DESPRÉS d'haver llegit per quina raó la barrera protegeix i la resta no. La pregunta d'escriptura porta els quatre passos OBSERVO → EM PREGUNTO → CONNECTO → DEDUEIXO.",
      challenge: "Calcula quantes vegades és més gran el nombre d'embarassos amb ús real que amb ús perfecte per a cada mètode i ordena'ls. Després comprova que el mètode amb la diferència més gran en nombre d'embarassos NO és el mateix que el de la raó més gran, i explica per quina raó passa això."
    },
    "3": {
      scaffold: "La plantilla del producte guia frase per frase: frase 1 la resposta, frase 2 què passa al cos, frase 3 d'on ho hem tret — amb una llista tancada de fonts per encerclar.",
      challenge: "Una quarta secció al producte: «Un mite que hem desmuntat», amb el checklist en tres línies i què s'hauria de mesurar per comprovar-lo. I la trampa de la tercera variable aplicada a una afirmació que hagis sentit tu."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "És l'últim dia de la unitat. Escriu el que saps ARA: no es corregeix, i al final ho compararàs amb el que vas escriure el primer dia. Aquí no es pregunta res sobre tu.",
    prompts: [
      {
        kind: "write",
        text: "Quins mètodes anticonceptius has sentit anomenar? Escriu-los i, al costat de cadascun, com et sembla que funciona.",
        starter: null
      },
      {
        kind: "write",
        text: "D'aquests, n'hi ha algun que protegeixi també d'infeccions? Quin, i per quina raó ho creus?",
        starter: null
      },
      {
        kind: "write",
        // 28/08: abans preguntava d'on ho havia tret CADASCÚ i s'encerclava en un
        // full que porta el nom i que el company del costat veu — marcar «la
        // família» o «un professional sanitari» diu com és casa teva. Passa a ser
        // una enquesta sobre la gent de la seva edat.
        text: "I aquesta va de tothom, no de tu: d'on treu la gent de la vostra edat el que sap sobre aquests temes? Marca les DUES que et sembla que són més freqüents (la família, les amistats, internet i xarxes, una classe, un professional sanitari, no se'n parla).",
        starter: null
      }
    ]
  },

  exploreInstructions: [
    "PART A (15 min) · Primer sol/a 5 minuts, després amb la parella. Passa el checklist CRITIC a l'afirmació del vídeo: «els anticonceptius et fan infèrtil per sempre»",
    "Les sis caselles: Consigna (quina és exactament l'afirmació?) · Rol (qui ho diu i què hi guanya?) · Idees (quin mecanisme proposa? en proposa cap?) · Test (es podria comprovar? COM?) · Informació (quines dades hi posa? una anècdota no és una dada) · Conclusions (què en puc dir ara i què em falta saber?)",
    "Dins de la casella d'Informació hi va també la pregunta de la IA: si li preguntes a una intel·ligència artificial, d'on treu ella la resposta? Es pot equivocar? Com ho comprovaries?",
    "PART B (15 min) · En grups de 3: vuit targetes de mètodes, i a cap no hi diu de quina família és. Col·loqueu cadascuna sota la columna del seu mecanisme. Les tres columnes es diuen igual a la fitxa, a les targetes i aquí: hormonal · de barrera · actua dins de l'úter",
    "ATENCIÓ: una de les vuit no encaixa a cap columna. Quan la trobeu, deixeu-la a part i escriviu per quina raó no hi encaixa. No és cap error: és el punt de l'activitat",
    "Moment epistèmic: «a una amiga meva li va passar» — quantes amigues fan una prova? Què hauria de tenir una comprovació perquè te la creguessis?"
  ],
  exploreDuration: "30 min (15 min de CRITIC + 15 min de targetes; apartats 1 i 2 de la fitxa)",
  exploreMaterials: [
    "El vídeo viral projectat una sola vegada, o la seva transcripció impresa",
    "Targetes de mètodes — 1 joc per grup de 3 (vuit targetes retallables, sense la família escrita)",
    "Fitxa del teu nivell, amb la graella CRITIC i la graella de mètodes"
  ],

  // Material físic que la sessió dona per existent (comprovació transversal 'ah').
  sessionMaterials: [
    { id: "M1", title: "Targetes de mètodes (8 targetes retallables)", url: "/fitxes/sa4-s4-targetes-metodes.html", who: "docent imprimeix un joc per grup de 3" },
    { id: "M1b", title: "Clau del docent de les vuit targetes", url: null, who: "NOMÉS docent. NO es publica a la web: la URL seria endevinable des de la del material de l'alumnat. És a SA4-creixer-reproduir/_NO-PUBLICAR/targetes_metodes_sessio4_DOCENT.html" },
    { id: "M2", title: "Plantilla del producte final (nivells B i A)", url: "/fitxes/sa4-s4-plantilla-producte.html", who: "una per parella, es reparteix a l'inici de l'apartat 3" },
    { id: "M3", title: "Plantilla del producte final (nivell C, guiada frase a frase)", url: "/fitxes/sa4-s4-plantilla-producte-C.html", who: "una per parella" },
    { id: "M4", title: "Rúbrica del producte final", url: "/fitxes/sa4-s4-rubrica-producte.html", who: "la té l'alumnat AL DAVANT des del primer minut de l'apartat 3, no en acabar" },
    { id: "M5", title: "Les tres preguntes de la bústia, transcrites a màquina", url: null, who: "docent. Es transcriuen i es reformulen en tercera persona fora de classe; mai el paper original. Són les MATEIXES per a tota la classe" },
    { id: "M6", title: "Vídeo viral (o la seva transcripció impresa)", url: null, who: "docent. Es projecta un sol cop i no es deixa enllaçat enlloc: l'objecte d'estudi és l'afirmació, no el canal" },
    { id: "M7", title: "Formulari Google de la unitat", url: null, who: "docent. L'enllaç es comparteix JUST en el moment de respondre'l, els últims 10 minuts" }
  ],

  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "==CRITIC==: com es mira una afirmació que corre",
      text: "Davant d'una afirmació no cal ==creure-se-la ni rebutjar-la de cop|o==: es mira amb sis caselles. ==C==onsigna — quina és ==exactament== l'afirmació? · ==R==ol — qui ho diu i ==què hi guanya|o==? · ==I==dees — quin ==mecanisme|g== proposa? En proposa cap? · ==T==est — ==es podria comprovar|g==, i com? · ==I==nformació — quines ==dades== hi posa? Un cas que algú explica és una ==anècdota|r==, i una anècdota ==no és una dada|r==: sempre n'hi haurà alguna en cada direcció. · ==C==onclusions — què en puc dir ara i ==què em falta saber==? I una advertència sobre la ==IA|r==: no és una font, és un programa que ==redacta==. Pot donar-te una font que ==no diu el que ell diu==, o que no existeix. Si te'n dona una, ==ves a mirar-la|g==.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "La ==cadena de quatre baules== i on talla cada família",
      text: "Perquè hi hagi un embaràs han de passar ==quatre coses seguides|o==: ==① el cervell dona l'ordre d'ovular== (les hormones de la hipòfisi) → ==② surt l'òvul== de l'ovari → ==③ els gàmetes es troben== a la trompa → ==④ l'embrió s'implanta== a la paret de l'úter. ==Si en falla una, no hi ha embaràs|g==. Per això cada família de mètodes ==talla la cadena en un punt diferent==. ==Hormonals|o== (píndola, pegat, anell, implant, DIU hormonal): aporten hormones que fan que ==no arribi l'ordre d'ovular== → tallen a ==①-②==; a més espesseixen el moc del coll de l'úter. ==De barrera|b== (preservatiu extern i intern): impedeixen físicament que el semen entri en contacte amb la vagina → tallen a ==③==. ==DIU de coure|g==: els ions de coure fan l'ambient ==tòxic per als espermatozoides== i, si tot i així hi ha fecundació, dificulten la implantació → talla a ==③-④==. I el ==mètode del calendari|r== ==no talla res==: no fa res al cos, només intenta endevinar quins dies són fèrtils.",
      type: "concept",
      image: "/images/sa4-s4-cadena-metodes.svg"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "Per quina raó ==només una família== atura també els patògens",
      text: "El preservatiu és l'únic que atura ==els fluids|b==. I és als fluids que hi van els ==patògens|r== — recorda «Defensors del cos»: una ==ITS|r== (infecció de transmissió sexual) és una infecció, i el preservatiu hi fa de ==barrera==, exactament igual que la pell. Els mètodes ==hormonals== i el ==DIU== actuen sobre el cicle o dins de l'úter: eviten l'embaràs, però ==no impedeixen que els fluids es trobin|r==. Fixa-t'hi bé, perquè és l'error més freqüent: la pregunta no és ==com de bo és== un mètode contra l'embaràs, és ==què atura==. Per això el consell sanitari és la ==doble protecció|g==: preservatiu ==més== un altre mètode. I un matís que cal dir bé: el preservatiu ==redueix molt== el risc d'ITS, però ==no el deixa a zero|o== — hi ha infeccions que passen per ==contacte de pell== que la funda no cobreix. Dir «protegeix» és correcte; dir «protegeix del tot», no.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "2",
      heading: "La ==píndola de l'endemà==: què fa i què no fa",
      text: "És un mètode ==d'emergència|o==, no del dia a dia. El que fa és ==retardar o impedir l'ovulació==: actua a les baules ==①-②==, com la resta d'hormonals. Per això com abans es pren, ==millor funciona==. I una cosa que convé tenir clara perquè es confon molt sovint: ==no interromp un embaràs que ja està en marxa|r== — si la implantació ja s'ha produït, no hi fa res.",
      type: "concept",
      badge: "⚠️ La confusió més estesa"
    },
    {
      id: "t5",
      apartat: "2",
      heading: "==Ús perfecte== i ==ús real==: la distància entre les dues barres",
      text: "Els mètodes es comparen amb una xifra: quantes persones de cada ==100== tenen un embaràs no buscat ==en un any==. I sempre se'n donen ==dues|o==: la de l'==ús perfecte== (fent-ho sempre bé, sense cap badada) i la de l'==ús real== (com ho fa la gent de veritat). ==La segona mai no és millor|r== —i sovint és molt pitjor—, però no en la mateixa mesura per a tots: n'hi ha que tenen les dues barres iguals. com ==més depèn el mètode de fer alguna cosa bé cada vegada== (o cada dia), ==més s'allunyen les dues barres|o==. Un implant, un cop col·locat, no depèn de res; una píndola depèn de cada dia; un preservatiu, de cada vegada. I el ==mètode del calendari|r== depèn de cada cicle ==i a més cal encertar-lo== — i a la sessió 2 ja vas veure, amb el cicle de la Laia, que el dia d'ovulació ==no és fix==.",
      type: "concept",
      image: "/images/sa4-s4-eficacia-us-real.svg"
    },
    {
      id: "t6",
      apartat: "3",
      heading: "El mite, ==desmuntat==",
      text: "«Els anticonceptius et fan infèrtil per sempre.» Mirem-ho amb el que sabem. ==Què diu l'evidència|g==: quan es deixa un anticonceptiu hormonal, ==el cicle es restableix==, i els estudis que han seguit ==molta gent durant anys== no troben que la fertilitat quedi tocada a llarg termini. ==I per quina raó l'afirmació no s'aguanta?== Per tres coses alhora: ==(a)== no proposa ==cap mecanisme|r== — no diu ==què== faria l'hormona per espatllar res; ==(b)== no aporta ==cap dada|r==, només casos que algú explica; i ==(c)== confon ==una cosa que passa després== amb ==una cosa que passa per culpa de|r==. Si algú deixa la píndola als 34 anys i triga a tenir un embaràs, la píndola no és l'única cosa que ha canviat: ==també ha canviat l'edat|o==. Això té nom: la ==tercera variable|o== — una cosa que ha canviat alhora i que ningú no havia mirat, i que pot estar causant les altres dues. *(A la fitxa de nivell A hi ha una figura que ho dibuixa; a la resta n'hi ha prou amb aquest exemple.)* I sobre el «la píndola engreixa»: aquí no es discuteix el cos de ningú, es discuteix ==fins on arriba l'afirmació==. Els efectes secundaris ==existeixen== i són ==diferents en cada persona== — per això això es parla amb un professional. El que no té base és el salt de «a algunes persones els passa» a ==«això li passa a tothom, sempre»|r==.",
      type: "concept",
      badge: "🔬 El nucli epistèmic del dia",
      image: "/images/sa4-s4-tercera-variable.svg"
    },
    {
      id: "t7",
      apartat: "3",
      heading: "Com es decideix una cosa sobre el propi cos",
      text: "No per por i no perquè una cosa estigui de moda. Es miren ==tres coses alhora|g==: ==(1)== què diu l'==evidència==; ==(2)== quina és l'==eficàcia real==, no la del paper; i ==(3)== el ==context de cada persona==, que és diferent per a cadascú. I qui ho decideix és ==la persona, amb un professional sanitari|o== — no una xarxa social i no una classe de biologia. El que fa la biologia és donar-te el ==mecanisme==, perquè puguis ==entendre el que et diguin== i preguntar bé. On es pot preguntar de debò: el ==CAP== del barri (hi ha consulta jove, gratuïta i confidencial), el programa ==Salut i Escola== del centre i ==Canal Salut==, el web sanitari públic.",
      type: "synthesis",
      badge: "🏁 Tancament de la unitat"
    }
  ],

  graphicResources: [
    { id: "F1", apartat: "2", title: "La cadena i on talla cada família", src: "/images/sa4-s4-cadena-metodes.svg", note: "A dalt, les quatre baules amb marcadors ①-④. A baix, quatre files amb marcadors Ⓐ-Ⓓ EN QUADRAT (sistema diferent del rodó, perquè no es confonguin amb les baules) i una ✗ sota cada baula que talla aquella família. La fila Ⓓ no en té cap: aquest buit és el missatge, no un oblit. Cap paraula dins la imatge; les etiquetes són la llegenda de la fitxa." },
    { id: "F2", apartat: "2", title: "Ús perfecte contra ús real", src: "/images/sa4-s4-eficacia-us-real.svg", note: "Barres aparellades: embarassos no buscats per cada 100 persones en un any. Barra clara = ús perfecte, barra plena = ús real. Ⓐ implant · Ⓑ píndola · Ⓒ preservatiu · Ⓓ calendari · Ⓔ cap mètode. Marcadors amb LLETRA i no amb número, perquè a la mateixa pàgina hi ha F1 amb els ①-④. Xifres aproximades d'organismes de salut: serveixen per comparar mètodes, no per predir res d'una persona concreta." },
    { id: "F3", apartat: "3", title: "La tercera variable", src: "/images/sa4-s4-tercera-variable.svg", note: "① deixar l'anticonceptiu · ② trigar a tenir un embaràs · ③ l'edat, que ha canviat alhora. La fletxa ratllada entre ① i ② és la conclusió que la gent dona per bona; les dues taronges són l'explicació alternativa. Només és a la fitxa de nivell A: als altres dos nivells la idea es treballa amb text, sense la figura." }
  ],

  fitxaUrls: {
    A: "/fitxes/sa4-s4-fitxa-A.html",
    B: "/fitxes/sa4-s4-fitxa-B.html",
    C: "/fitxes/sa4-s4-fitxa-C.html"
  },
  teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa Sessió 4 — Decisions informades",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "6 min", phase: "engage", instruction: "Apartat 0: escriu quins mètodes coneixes i com et sembla que funcionen, si n'hi ha algun que també protegeixi d'infeccions, i d'on ho has tret. No es corregeix ara: al final ho compararàs amb el que vas escriure el primer dia.", hints: [] },
      { apartat: "1", title: "El checklist CRITIC sobre el vídeo", time: "15 min", phase: "explore", instruction: "Apartat 1: primer sol/a 5 minuts, després amb la parella. Passa el checklist a l'afirmació del vídeo. El format canvia segons el teu nivell: C en fa tres caselles amb un exemple ja resolt sencer al davant, B en fa sis, i A hi afegeix dissenyar la comprovació amb variable independent, dependent i grup de comparació.", hints: [
        "Comença sempre per la primera casella, i escriu l'afirmació amb les teves paraules. Moltes afirmacions es desmunten soles quan les has d'escriure exactament.",
        "A la casella d'Idees, pregunta't si el vídeo diu QUÈ passaria al cos. Si no proposa cap mecanisme, ja saps una cosa important.",
        "«Es pot comprovar?» i «és veritat?» no són la mateixa pregunta. Contesta primer la primera."
      ] },
      { apartat: "2", title: "Els mètodes: on talla cadascun", time: "37 min", phase: "explica", instruction: "Apartat 2: primer les targetes en grup (15 min) i després la teoria, les figures i les preguntes. Col·loqueu cada targeta a la columna del seu mecanisme; una no hi encaixa. Després mira la figura F1 i digues on talla la cadena cada família.", hints: [
        "A cap targeta no hi diu de quina família és: has de deduir-ho del que FA. Pregunta't sempre «i això, què li fa al cos?».",
        "Per a la que no encaixa: fixa't que la seva targeta no diu que es prengui res ni que es col·loqui res. Aquesta és la pista.",
        "Per saber quina família protegeix d'ITS, no et preguntis quina és més eficaç contra l'embaràs: pregunta't quina atura els FLUIDS.",
        "A la figura F2, la distància entre les dues barres d'un mètode et diu com de sensible és a les badades. Compara-la amb la columna que has omplert a la graella."
      ] },
      { apartat: "3", title: "El producte final: la fitxa informativa", time: "23 min", phase: "elabora", instruction: "Apartat 3: llegeix les càpsules del mite i de com es decideix, i comença la fitxa informativa amb la teva parella sobre la plantilla impresa. Les tres preguntes són les mateixes per a tota la classe. Tingues la rúbrica al davant mentre escrius: no és una sorpresa del final.", hints: [
        "Escriu la resposta a la primera frase i explica-la després. Si has de llegir tot el paràgraf per saber si la resposta és sí o no, encara no hi és.",
        "«Què passa al cos» vol dir el mecanisme, no el consell. «Cal fer servir preservatiu» no és un mecanisme; «el preservatiu atura els fluids, i és pels fluids que passen els patògens» sí que ho és.",
        "Rellegiu-ho buscant els «s'hauria de» i els «està malament»: cada un d'aquests es pot reescriure com un «passa això, i per aquesta raó»."
      ] },
      { apartat: "4", title: "Metacognició de final d'unitat", time: "3 min", phase: "avalua", instruction: "Apartat 4: marca el semàfor, completa la frase sobre què t'ha canviat el que pensaves en aquestes quatre sessions i repassa la llista d'objectius. Això és a la fitxa que et quedes tu: no es puntua. Si et queda una pregunta, la pots deixar a la bústia en un paper a part, sense nom.", hints: [] }
    ]
  },

  exitTicketType: "form",
  exitTicketNote: "L'avaluació d'aquesta sessió és el formulari de tota la unitat: quatre preguntes que es corregeixen soles i una d'oberta que llegeix el professor. Es respon els últims 10 minuts, aquí a classe, tot sol/a i sense mirar la fitxa. Aquí tampoc no s'hi pregunta res sobre tu: la pregunta oberta demana què li diries a una altra persona.",
  exitTicketConfidential: true,
  exitTicketConfidentialNote: "Aquest formulari compta per a la nota i es fa a classe sense ajuda, i per això les preguntes no es publiquen aquí. Si has faltat, passa pel despatx a fer-lo.",

  // NOTA DEL DOCENT — no es renderitza a la vista de l'alumnat.
  teacherNote: "El formulari (script_formulari_google_sa4.js) és el checkpoint sumatiu de tota SA4: no hi ha prova escrita. Q1-Q2 avaluen OA-S4.1 (CE1·1.2), Q3-Q4 avaluen OA-S4.2 (CE2·2.2) i la Q5 oberta avalua OA-S4.3 (CE5·5.3). L'enllaç es comparteix JUST en el moment de respondre'l. La Q5 és la que contrasta el criteri «rigor científic» de la rúbrica del producte: si una fitxa impecable conviu amb una Q5 que no distingeix una barrera d'una hormona, la discrepància és el senyal. El solucionari per nivells d'assoliment és al peu del mateix script, que NO es publica.",
  exitTicketQuestions: [],

  deliverables: [
    { name: "Fitxa informativa de la parella (les tres preguntes de la bústia)", note: "Producte final de la unitat. Es comença a classe sobre la plantilla impresa i es lliura a Classroom en una setmana. S'avalua amb la rúbrica: rigor científic · claredat · ús de fonts · to i respecte. Cada criteri es mira per separat." }
  ],

  homework: {
    description: "Acabar la fitxa informativa amb la parella i lliurar-la a Classroom. Recorda les quatre coses de la rúbrica: la resposta directa a la primera frase · què passa al cos · d'on ho heu tret · sense jutjar ningú. Per què no es pot delegar a una IA: es comença a classe sobre la plantilla, durant 23 minuts i amb el professor voltant, de manera que el que arribi ha de ser continuació del que ell ha vist començar; i el formulari d'avui, fet a classe i sense ajuda, avalua els mateixos objectius — una fitxa impecable amb un formulari que no distingeix una barrera d'una hormona és una discrepància que es veu.",
    deadline: "una setmana"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina: el checklist CRITIC, la cadena de quatre baules i on talla cada família, per quina raó només la barrera protegeix d'ITS, i com es desmunta el mite",
    "Mira les figures F1 (on talla cada família) i F2 (ús perfecte contra ús real)",
    "Descarrega la fitxa del teu nivell i el full de targetes, i fes els apartats 1 i 2 tu sol/a",
    "Parla amb la teva parella per acabar la fitxa informativa: és el producte final de la unitat i es lliura a Classroom",
    "Passa pel despatx a fer el formulari: compta per a la nota i no es pot fer des de casa",
    "Si et queda un dubte personal, el pots deixar a la bústia sense nom, o preguntar-ho al CAP o a l'orientació del centre"
  ],
  oaLinks: ["OA4"], competencies: ["CE1", "CE2", "CE5"]
}
