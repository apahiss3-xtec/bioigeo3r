// SA4 · Sessió 3 — «Sexualitat, identitat i una pregunta delicada»
// REESCRIT 2026-08-26 a partir de la spec «SA4 - Sessió 3 - SPEC» del vault.
//
// Per què s'ha reescrit sencer (vegeu §0bis de la spec):
//   La versió anterior (11/07) era «De la cèl·lula a la persona»: fecundació,
//   sexe cromosòmic, bessons i desenvolupament embrionari setmana a setmana.
//   (a) Duplicava la S2, que ja treballa la fecundació i el zigot amb les
//       targetes i les figures F3 i F5; i el desenvolupament embrionari
//       detallat no és cap saber llistat al currículum de 3r.
//   (b) Feia desaparèixer del curs sencer dos sabers oficials: «sexualitat…
//       identitat sexual… gènere com a construcció social [CH11]» i la
//       «desvinculació de la definició biològica d'embrió de la valoració
//       ètica de l'avortament».
//   El vault ([[SA4 - Estructura sessions]] §S3) és el que s'ha fabricat.
//
// Decisions de cura que van EMBEGUDES a les dades (spec §1bis):
//   · Cap camp d'aquesta pàgina ni del full de sortida demana res sobre la
//     pròpia persona: tots els casos són de terceres persones inventades.
//   · La part reflexiva («què he entès», «quina pregunta em queda») NO és a
//     l'exit ticket (que porta nom i es recull): és a l'apartat 4 de la fitxa.
//   · L'ítem de l'avortament és SIMÈTRIC: al full de sortida es donen DOS
//     titulars, un en cada direcció, i es demana criticar-los tots dos. Així
//     s'avalua l'error epistèmic i no la postura de l'alumne, en un full que
//     porta nom i es recull. (Corregit el 27/08: fins llavors el full només
//     duia el titular contrari a l'avortament, tot i que aquest comentari ja
//     afirmava el contrari.)
//   · El full de sortida és CONFIDENCIAL (`exitTicketConfidential`): és sumatiu
//     i es fa sense ajuda, de manera que les preguntes NO es publiquen a la
//     pàgina. Qui hagi faltat el fa presencialment.
//   · CAP `video:`. Les carpetes animacions/sa4-s3-t* estan desfasades una
//     posició i parlen d'anticonceptius i ITS: assignar-les repetiria l'error
//     corregit el 23/08 a la S1.
//   · Les `hints` orienten el mètode; cap no conté cap resposta.
export const sa4s3 = {
  id: "s3", saId: "sa4",
  title: "Sexualitat, identitat i una pregunta delicada",
  sessionNumber: 3, biome: "sa4", duration: "2h",
  engageImage: "/images/sa4-s3-cercle-dialeg.jpg",

  engageQuestion: "Què pot dir la ciència sobre nosaltres… i què no li toca decidir a ella?",
  engageContext: "El docent llegeix DUES preguntes de la bústia, ja transcrites a màquina (mai el paper original, perquè no es reconegui cap lletra), i les respon amb to serè. No es pregunta mai qui les ha escrites. Tot seguit marca el guió del dia: avui se separaran quatre coses que se solen barrejar, i al final es dirà una cosa incòmoda — hi ha preguntes que la ciència no pot respondre, i això no és cap defecte de la ciència. L'acord d'aula queda penjat i visible tota la sessió: ningú no ha de parlar de si mateix, tots els casos són de persones inventades.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  // Coincideixen literalment amb la caixa 🎯 de la fitxa del mateix nivell.
  levelObjectives: {
    A: [
      "Critico el model de les quatre finestres: dic què no hi cap i per quina raó serveix igualment.",
      "Distingeixo un descobriment d'una definició operativa (un acord), i argumento que un acord pot estar ben fonamentat sense deixar de ser un acord.",
      "Argumento què vol dir que el coneixement científic sigui revisable, a partir d'una classificació que va canviar.",
      "Reescric una valoració com a pregunta investigable dient què mesuraria, a qui i com."
    ],
    B: [
      "Distingeixo sexe biològic, sexualitat, identitat sexual i gènere, i els aplico a casos reals.",
      "Justifico amb una prova per quina raó el gènere és una construcció social i no una cosa del cos.",
      "Separo el que la ciència pot descriure d'un embrió del que decideix cada persona i la societat.",
      "Classifico una afirmació en comprovable i certa, comprovable i falsa o valoració, i dic com ho comprovaria."
    ],
    C: [
      "Sé que el sexe biològic és el cos i el gènere és el que espera la societat, i que no són el mateix.",
      "Sé que la sexualitat és molt més que la reproducció.",
      "Sé distingir una pregunta que respon la ciència d'una que decideix la societat.",
      "Sé dir si una frase es pot comprovar o és una valoració."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Es treballen QUATRE casos en comptes de vuit, i el primer ja ve resolt com a exemple. La finestra s'encercla entre els quatre números (no s'escriu), i cada cas demana només una línia de raó. La secció comença amb imatge pròpia i càpsula 'Per llegir'.",
      challenge: "Classifica els vuit casos de pressa i dedica el temps a la part difícil: inventa un cas nou que necessiti DUES finestres alhora, i després critica l'eina — què hi ha d'una persona real que no càpiga en cap de les quatre caselles, i per quina raó un model que no encaixa del tot serveix igualment."
    },
    "2": {
      scaffold: "La taula baixa a tres files i la primera ja ve resolta; a més de la taula, hi ha dues preguntes d'encerclar amb dues opcions plausibles. La pregunta d'escriptura va bastida amb OBSERVO → EM PREGUNTO → CONNECTO → DEDUEIXO, i aquesta vegada només el primer pas porta pista: la bastida baixa un graó respecte a la sessió passada.",
      challenge: "La pregunta no és què és un embrió, sinó quina mena de resposta és: la frontera de la vuitena setmana, és un descobriment o un acord? Per quina raó la ciència necessita posar-hi una ratlla si el desenvolupament és continu? Un acord es pot canviar: vol dir que és arbitrari? I el cas de 1990: què va canviar, les persones o el que la medicina considerava malaltia?"
    },
    "3": {
      scaffold: "Dos ítems en comptes de quatre, amb dues opcions (es pot comprovar / és una valoració) en comptes de tres, i un exemple resolt imprès abans de la tasca.",
      challenge: "Cinc ítems, un dels quals s'ha de PARTIR en la part descriptible i la part de valoració, i una valoració que s'ha de reescriure com a pregunta investigable dient què es mesuraria, a qui i com."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Escriu i dibuixa el que penses ara — no es corregeix, i el tornaràs a mirar al final de la unitat. Aquí no s'hi pregunta res sobre tu.",
    prompts: [
      {
        kind: "write",
        text: "Les paraules «sexe» i «gènere», volen dir el mateix?",
        starter: "Escriu el que penses ara, encara que no n'estiguis segur/a."
      },
      {
        kind: "write",
        text: "La sexualitat, és només reproducció? Si et sembla que no, què més hi entra?",
        starter: "Pensa en tot el que fa que dues persones se sentin a prop."
      },
      {
        kind: "draw",
        text: "Dibuixa el passadís d'una botiga de joguines tal com el recordes: què hi ha a cada banda i de quin color és cada banda?",
        starter: "Ràpid i sense pretensions: després el faràs servir per raonar."
      }
    ]
  },

  exploreInstructions: [
    "En grups de 3 o 4. Cada grup rep un joc de VUIT targetes de casos i les llegeix d'una en una en veu alta",
    "Per a cada cas, decidiu quina de les QUATRE FINESTRES l'explica millor: ① sexe biològic (el cos) · ② sexualitat (pràctiques i experiències) · ③ identitat sexual (el que se sent per dins) · ④ gènere (el que la societat espera)",
    "AVÍS de l'enunciat: algun cas pot tocar DUES finestres. Si us passa, digueu quines dues i per quina raó — no és cap error vostre, és el punt de l'activitat",
    "Es parla d'un en un seguint la pauta impresa: «la meva idea és… / la raó és… / una idea contrària podria ser…»",
    "Totes les persones dels casos són inventades. Ningú no ha de parlar de si mateix, i es pot dir «no ho sé» o passar el torn",
    "Moment epistèmic: quan algú diu «això és natural» o «això sempre ha estat així», en què s'està basant — en una prova, en un costum o en una creença? Com ho podries comprovar?"
  ],
  exploreDuration: "30 min (apartat 1 de la fitxa, que hi afegeix la càpsula de teoria i la graella)",
  exploreMaterials: [
    "Targetes de casos — 1 joc per grup (full imprimible 'Vuit casos per pensar')",
    "Cartell de l'acord d'aula i de la pauta d'argumentació, penjat i visible",
    "Fitxa del teu nivell, amb la graella de casos i la figura F1"
  ],

  // Material físic que la sessió dona per existent (comprovació transversal 'ah').
  sessionMaterials: [
    { id: "M1", title: "Targetes de casos (8 casos retallables)", url: "/fitxes/sa4-s3-targetes-casos.html", who: "docent imprimeix un joc per grup de 3-4" },
    { id: "M1b", title: "Clau del docent dels vuit casos", url: null, who: "NOMÉS docent. NO es publica a la web (27/08): la URL era endevinable des de la del full de l'alumnat. Es troba a la carpeta de la sessió, a SA4-creixer-reproduir/S3-ciencia-i-societat/targetes_casos_sessio3_DOCENT.html" },
    { id: "M2", title: "Cartell: acord d'aula + pauta d'argumentació", url: "/fitxes/sa4-s3-cartell-acord.html", who: "docent el penja abans de començar i el deixa visible tota la sessió" },
    { id: "M3", title: "Preguntes de la bústia transcrites a màquina (dues)", url: null, who: "docent. Es transcriuen fora de classe: mai es llegeix el paper original" },
    { id: "M4", title: "Full de sortida (nivells A i B)", url: "/fitxes/sa4-s3-full-sortida.html", who: "es reparteix als últims 7 minuts" },
    { id: "M5", title: "Full de sortida (nivell C)", url: "/fitxes/sa4-s3-full-sortida-C.html", who: "es reparteix als últims 7 minuts" }
  ],

  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "==Quatre finestres== per mirar una persona",
      text: "Se solen barrejar ==quatre coses|o== que no són la mateixa. ==① Sexe biològic==: el cos — òrgans, hormones, cromosomes. Es pot ==descriure i mesurar|g==. ==② Sexualitat==: el conjunt de ==pràctiques i experiències vitals== d'una persona (afecte, desig, companyia, plaer, cura). ==Va molt més enllà de la reproducció|g==: n'hi ha sense reproducció i n'hi ha a totes les edats. ==③ Identitat sexual==: com se sent una persona ==per dins==; és ==subjectiva|p== i ==es va construint al llarg de la vida|p== — ningú no la pot mesurar des de fora. ==④ Gènere==: el que una societat ==espera== de cadascú (feines, colors, robes, maneres). És una ==construcció social i cultural==: els papers de gènere ==no venen determinats pel cos|r==. La prova és senzilla: ==han canviat i canvien== d'una època a l'altra i d'un lloc a l'altre, mentre que els cossos són els mateixos. I una advertència: les quatre finestres són ==una eina per pensar, no calaixos on hagi d'entrar tothom|o==.",
      type: "concept",
      image: "/images/sa4-s3-quatre-finestres.svg",
      imageCaption: "Els números del dibuix es corresponen amb la llegenda de la fitxa: ① cromosomes i cos · ② el que es comparteix i es viu · ③ la fletxa és DINS de la persona i apunta al cor · ④ el rètol amb les etiquetes i les tres figures que hi miren (ratlletes de punts). Fixa-t'hi: a ④ la cosa ve de FORA; a ③ venia de DINS."
    },
    {
      id: "t2",
      apartat: "2",
      heading: "La ciència ==descriu==; la societat ==decideix==",
      text: "La ciència dona una ==definició biològica== d'embrió: l'estadi que va del ==zigot== fins a la ==vuitena setmana==; a partir d'aquí se'n diu ==fetus==. El que la ciència ==SÍ que pot dir|g==: quantes cèl·lules hi ha el cinquè dia, quan es tanca el tub neural, quan comença a bategar el cor. Tot això es pot ==mirar i comprovar==. El que la ciència ==NO pot dir|r==: ==quan comença a haver-hi una «persona»==, ni si l'avortament és acceptable o no ho és. «Persona» ==no és cap mesura biològica|o==: és una ==valoració==, i és de cada persona i de la societat, que ho debat i ho decideix ==amb lleis, no amb un microscopi==. Aquí ningú no et dirà què has de pensar: el que s'aprèn és a reconèixer ==quin tipus de pregunta|g== tens al davant.",
      type: "concept",
      image: "/images/sa4-s3-frontera-ciencia-valors.svg",
      imageCaption: "La fletxa taronja va en un sol sentit: les dades entren al debat i el fan millor, però no el decideixen. No hi ha cap fletxa de tornada."
    },
    {
      id: "t3",
      apartat: "2",
      heading: "Els primers dies, molt esquemàtics",
      text: "Contingut de suport, per si vols veure ==què és exactament el que la ciència sí que pot descriure==. Els quatre cercles del dibuix són ==de la mateixa mida expressament==: ⚠️ ==NO estan dibuixats a escala de temps|p==: els quatre moments només n'indiquen l'ORDRE (del dia 5 a la setmana 8 hi ha molt més temps que del dia 1 al 3). ① el ==zigot==, una sola cèl·lula. ② cap al ==tercer dia==, unes quantes cèl·lules encara totes iguals. ③ cap al ==cinquè dia==, una ==esfera buida== (mira el forat del mig) amb un grup de cèl·lules enganxades a la paret: és el que es pot ==implantar== a la paret de l'úter. ④ cap a la ==vuitena setmana==: a partir d'aquí se'n diu ==fetus==. Atenció a la idea fina: aquella ratlla ==es posa per acord|o==, no perquè aquell dia hi passi res de cop.",
      type: "deepen",
      image: "/images/sa4-s3-primers-dies.svg",
      imageCaption: "Escala esquemàtica dels primers dies. Cap detall anatòmic i cap imatgeria dramàtica: només el que fa falta per situar la frontera embrió/fetus."
    },
    {
      id: "t4",
      apartat: "3",
      heading: "==Tres== tipus de frase, no dos",
      text: "==Comprovable i certa==: es pot comprovar i, quan ho fas, surt que sí. ==Comprovable i falsa==: ==també|o== es pot comprovar, i quan ho fas, surt que no. ==Valoració==: no es pot comprovar de cap manera, perquè diu si una cosa està bé, malament o si val la pena. El parany que cal evitar: que una frase sigui ==falsa== no vol dir que sigui una ==opinió|r==. «El Sol gira al voltant de la Terra» és ==falsa==, i no és cap opinió. I al revés: ==«no es pot comprovar» no vol dir «no importa»|g== — les preguntes de valors solen ser les que més ens importen.",
      type: "concept",
      image: null,
      imageCaption: null
    }
  ],

  graphicResources: [
    { id: "F1", apartat: "1", title: "Les quatre finestres", src: "/images/sa4-s3-quatre-finestres.svg", note: "Quatre panells amb marcadors ①-④ i cap paraula dins la imatge: les etiquetes en català són la llegenda numerada de la fitxa. El nivell C té una versió pròpia (menys detall, marcadors al doble de mida, colors molt més contrastats)." },
    { id: "F1C", apartat: "1", title: "Les quatre finestres — versió nivell C", src: "/images/sa4-s3-quatre-finestres-C.svg", note: "Un sol pictograma per panell i un color de fons per finestra. És la que porta la fitxa C." },
    { id: "F2", apartat: "2", title: "On passa la ratlla: ciència / societat", src: "/images/sa4-s3-frontera-ciencia-valors.svg", note: "Ⓐ instruments de mesura · Ⓑ balança, mans alçades i converses · Ⓒ la ratlla · Ⓓ la fletxa d'un sol sentit. Marcadors amb LLETRA i no amb número (27/08): compartia els ①-④ i els mateixos colors amb F1, que es compara amb ella a la mateixa pàgina. És la figura que sosté tot l'apartat 3." },
    { id: "F3", apartat: "2", title: "Els primers dies (escala esquemàtica)", src: "/images/sa4-s3-primers-dies.svg", note: "Deliberadament sòbria: cercles del mateix diàmetre sobre un eix de temps. Serveix per concretar el «què SÍ que pot dir la ciència», no per il·lustrar emotivament." }
  ],

  fitxaUrls: {
    A: "/fitxes/sa4-s3-fitxa-A.html",
    B: "/fitxes/sa4-s3-fitxa-B.html",
    C: "/fitxes/sa4-s3-fitxa-C.html"
  },
  teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa Sessió 3 — Sexualitat, identitat i una pregunta delicada",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "7 min", phase: "engage", instruction: "Apartat 0: escriu si «sexe» i «gènere» volen dir el mateix i si la sexualitat és només reproducció, i dibuixa el passadís d'una botiga de joguines tal com el recordes. No es corregeix ara. Si la teva fitxa és de nivell C, el dibuix va primer.", hints: [] },
      { apartat: "1", title: "Els casos i les quatre finestres", time: "30 min", phase: "explore", instruction: "Apartat 1: en grup, llegiu les targetes de casos i decidiu quina finestra explica cada un. El format concret canvia segons el teu nivell: C en treballa quatre amb el primer resolt, B en treballa vuit, i A hi afegeix inventar-ne un i criticar el model.", hints: [
        "Abans de decidir res, pregunta't si el cas parla del COS, del que la persona VIU amb altres, del que SENT per dins, o del que ESPEREN els altres.",
        "Si dubtes entre dues finestres, mira si el cas té dues frases que diuen coses diferents: potser en necessita dues de debò.",
        "Quan un cas compari dues èpoques o dos llocs, pregunta't què hi ha canviat i què no. Aquesta comparació sola ja et diu molt."
      ] },
      { apartat: "2", title: "Què descriu la ciència i què decideix la societat", time: "22 min", phase: "explica", instruction: "Apartat 2: llegeix la càpsula sobre la definició d'embrió i la figura F2, i decideix per a cada pregunta qui la pot respondre. És la part més important del dia.", hints: [
        "Per saber de quin costat cau una pregunta, pregunta't: hi ha algun aparell, alguna mesura o alguna dada que hi pugui respondre? Si no n'hi ha cap, no és una pregunta de ciència.",
        "«Fins a quina setmana hauria de…» i «a partir de quina setmana se'n diu…» semblen la mateixa mena de frase i no ho són: fixa't en el verb.",
        "A la figura F2, compta les fletxes. Que només n'hi hagi una, i en aquell sentit, vol dir alguna cosa."
      ] },
      { apartat: "3", title: "Comprovable o valoració?", time: "14 min", phase: "elabora", instruction: "Apartat 3: classifica les frases i escriu COM ho comprovaries, no només la casella. Al nivell B i A hi ha tres possibilitats (certa, falsa, valoració); al nivell C n'hi ha dues i un exemple resolt abans.", hints: [
        "Fes-te sempre la mateixa pregunta primer: existeix alguna manera de comprovar-ho? Només després pensa si surt que sí o que no.",
        "Alguna frase sona a opinió i en canvi es pot contrastar amb dades. Abans de decidir, mira si la frase parla d'alguna cosa que algú hagi pogut comptar o mesurar.",
        "Alguna frase barreja dues coses: una part es pot descriure i l'altra no. Prova de partir-la per la meitat."
      ] },
      { apartat: "4", title: "Metacognició", time: "3 min", phase: "avalua", instruction: "Apartat 4: marca el semàfor, completa la frase «avui he entès que la ciència no pot…» i repassa la llista d'objectius. Això és a la fitxa que et quedes tu: no es puntua. Si et queda una pregunta, la pots deixar a la bústia en un paper a part, sense nom.", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketNote: "El full de sortida va en un FULL A PART (no és dins la fitxa), es fa individualment i sense ajuda els últims 7 minuts, i es recull. Aquí no s'hi pregunta res sobre tu: només s'hi analitzen casos de fora. La part personal («què he entès», «quina pregunta em queda») és a l'apartat 4 de la fitxa, que et quedes tu.",
  exitTicketConfidential: true,
  exitTicketConfidentialNote: "Aquest full de sortida es fa en paper i es recull, i per això les preguntes no es publiquen aquí. Si has faltat, passa pel despatx a fer-lo abans de la sessió següent.",

  // NOTA DEL DOCENT — no es renderitza a la vista de l'alumnat (27/08).
  // Abans era dins d'`exitTicketNote` i es pintava sencera a la pàgina, revelant
  // els dos casos del full abans de la classe.
  teacherNote: "Porta DUES preguntes; el nivell C les té bastides amb els mateixos quatre passos OBSERVO→EM PREGUNTO→CONNECTO→DEDUEIXO de la fitxa, i hi ha una tercera pregunta extra, oberta a tothom. Els casos són NOUS: cap resposta no és a la fitxa que l'alumne es queda. L'ítem de l'avortament és SIMÈTRIC (dos titulars, un en cada direcció): s'hi avalua l'error epistèmic, no la postura de l'alumne, en un full que porta nom.",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Fa 200 anys, en molts llocs d'Europa, dur pantalons era cosa d'homes: una dona amb pantalons cridava l'atenció. Avui en duu tothom. Què ha canviat en aquests 200 anys: el cos de les persones, o el que la societat espera de cadascú? Digues quina de les quatre finestres explica aquest canvi i per quina raó.", hint: null },
    { id: "q2", type: "open", text: "Dos diaris publiquen dos titulars diferents: A) «La ciència demostra que l'avortament està malament.» B) «La ciència demostra que un embrió de dues setmanes no és ningú.» Explica què tenen de mal plantejat tots dos. Després digues una cosa que la ciència SÍ que pot dir sobre un embrió i una cosa que NO pot dir.", hint: null },
    { id: "q3", type: "open", text: "PREGUNTA EXTRA (opcional per a tothom) — «Els nois d'ara es cuiden més el cos que els d'abans.» Tal com està, aquesta frase no es pot comprovar. Reescriu-la com a pregunta investigable: digues què mesuraries, a qui, i com sabries la resposta.", hint: null }
  ],

  homework: {
    description: "Tria UNA de les tres i porta-la escrita (dues línies). (a) Copia una frase PÚBLICA que hagis sentit o llegit sobre sexualitat, cossos o com evitar un embaràs: a la ràdio, a la tele, en un anunci, en un titular o en una xarxa. Digues de quin mitjà l'has treta i si és comprovable o una valoració. (b) Mira un anunci qualsevol i escriu una cosa que doni per fet sobre què és «de noi» o «de noia». (c) Busca a una font fiable (per exemple Canal Salut) una afirmació sobre salut sexual i copia-la amb la font. Les tres valen igual. Les opcions (a) i (b) no són delegables a cap IA: demanen una frase concreta captada en un mitjà real, amb la font. Les frases es recullen en un paper i es treballen a la sessió següent sense dir qui les ha portades; no s'hi copien converses privades ni cal dir on es va sentir res.",
    deadline: "la sessió següent"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina: les quatre finestres, la frontera ciència/societat i els tres tipus de frase",
    "Mira les figures F1 (les quatre finestres) i F2 (on passa la ratlla)",
    "Descarrega el full de casos i la fitxa del teu nivell, i fes els apartats 1, 2 i 3 tu sol/a",
    "Passa pel despatx a fer el full de sortida abans de la sessió següent",
    "Si el tema et remou alguna cosa, pots deixar una pregunta a la bústia sense posar-hi el nom, o parlar amb l'orientació del centre"
  ],
  oaLinks: ["OA3"], competencies: ["CE2", "CE5"]
}
