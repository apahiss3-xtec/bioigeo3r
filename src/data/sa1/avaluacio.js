// Material d'autoavaluació de SA1: checklist d'estudi (el que cal saber
// abans de la prova) + test de transferència amb un context NOU
// (diferent del cas de la prova escrita), per comprovar si
// l'alumne pot inferir i no només recordar.
export const sa1Avaluacio = {
  // Assaig de prova escrita (reescrit 29/09/2026). Entrena les MATEIXES
  // habilitats i el mateix nivell que cada bloc de la prova de SA1, però amb
  // un cas nou (la hidra d'aigua dolça) i preguntes noves: cap pregunta ni
  // cas de la prova es copia. Taula OA → habilitat a ESTAT.md (29/09/2026).
  // Comprovació: python scripts-avaluacio/audita_autoavaluacio.py sa1
  escrita: {
    intro:
      "Aquestes preguntes entrenen les mateixes habilitats que la prova, però amb un cas nou: la prova NO serà igual, i per això no val memoritzar respostes. Agafa un full, escriu cada resposta SENCERA a mà i sense apunts, i només després obre la solució. La diferència entre AS i AE gairebé mai no és saber més paraules: és explicar el PER QUÈ, fer servir les dades i lligar les idees entre elles.",
    minutes: 35,
    questions: [
      {
        id: 'w1',
        oa: 'OA1',
        source: "Entrena el bloc 1 de la prova · Estructures de la cèl·lula i unitat de vida",
        minutes: 5,
        text: "La hidra és un animal minúscul d'aigua dolça que viu enganxat a les plantes de les basses. Mentre n'observeu cèl·lules al microscopi, en Biel diu: «Si traiem el nucli d'una cèl·lula d'hidra i el deixem sol en una gota d'aigua, seguirà viu, perquè és on hi ha l'ADN». Té raó? Justifica-ho parlant de la funció de la membrana, el nucli i el mitocondri.",
        model: {
          as: "No té raó. El nucli guarda l'ADN, però sol no pot viure: li falta la membrana, que controla què entra i què surt, i el mitocondri, que fa l'energia. Només la cèl·lula sencera està viva.",
          ae: "No té raó. El nucli té les instruccions (l'ADN), però les instruccions soles no fan res: sense membrana no hi ha cap frontera que deixi entrar l'aliment i l'oxigen i en tregui els residus, i sense mitocondris no hi ha respiració cel·lular ni, per tant, energia. Una cosa viva s'ha de nodrir, relacionar-se amb el medi i reproduir-se, i això només ho aconsegueixen totes les parts treballant juntes. Per això la unitat més petita que està viva és la cèl·lula sencera, no cap de les seves parts, per important que sigui."
        },
        aeWhy: "L'AS anomena les funcions; l'AE les fa servir per ARGUMENTAR: mostra què fallaria sense cada part i ho lliga amb les funcions vitals. Tanca la porta a l'error típic de pensar que «on hi ha l'ADN, hi ha vida».",
        must: [
          "Has respost clarament que no té raó.",
          "Has dit la funció de la membrana, la del nucli i la del mitocondri (les tres).",
          "Has explicat què li faltaria al nucli sol per poder viure.",
          "Has conclòs que la unitat de vida és la cèl·lula sencera."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: "Entrena el bloc 2 de la prova · Interpretar dades de mitocondris i energia",
        minutes: 6,
        text: "Uns biòlegs han comptat els mitocondris de dos tipus de cèl·lules d'hidra. Cèl·lules dels tentacles (atrapen preses i es contrauen sense parar): unes 800 per cèl·lula. Cèl·lules del peu (enganxen la hidra a la planta i gairebé no es mouen): unes 90 per cèl·lula. A l'agost, l'aigua de la bassa s'escalfa i porta molt poc oxigen. Prediu quines cèl·lules deixaran de funcionar primer i justifica-ho amb les dades.",
        model: {
          as: "Les dels tentacles. Tenen molts més mitocondris perquè gasten més energia, i els mitocondris necessiten oxigen per fer la respiració cel·lular. Si en falta, seran les primeres a quedar-se sense energia.",
          ae: "Les dels tentacles. Tenen gairebé nou vegades més mitocondris (800 davant de 90) perquè es contrauen constantment i això demana molta energia. Aquesta energia surt de la respiració cel·lular, que es fa al mitocondri i consumeix glucosa i oxigen (glucosa + oxigen → energia + CO₂ + aigua). Com més respiració fa una cèl·lula, més oxigen gasta; per això, quan l'aigua en porta poc, les primeres que no poden cobrir la seva despesa són les que més en necessitaven. Tenir més mitocondris no les protegeix: sense oxigen, els mitocondris no poden treballar."
        },
        aeWhy: "L'AE fa servir les xifres de la taula, escriu què entra i què surt de la respiració i desmunta l'error típic de pensar que «més mitocondris = cèl·lula més forta».",
        must: [
          "Has triat un tipus de cèl·lula de forma explícita.",
          "Has citat les dades (800 i 90) per justificar-ho.",
          "Has dit que la respiració cel·lular es fa al mitocondri i consumeix oxigen.",
          "Has lligat la predicció amb la falta d'oxigen a l'aigua."
        ]
      },
      {
        id: 'w3',
        oa: 'OA2',
        source: "Entrena el bloc 2 de la prova · Autòtrof o heteròtrof segons la llum",
        minutes: 6,
        text: "Hi ha una hidra verda que porta algues vives dins de les seves cèl·lules, i una hidra marró que no en porta. Deixem dues setmanes sense menjar una hidra de cada: primer dins d'un armari fosc, i en un altre experiment al costat d'una finestra. Prediu quina aguantarà més en cada cas i justifica-ho. La hidra verda és autòtrofa?",
        model: {
          as: "A la finestra aguanta més la verda, perquè les algues fan fotosíntesi i li passen aliment. A l'armari fosc aguanten igual, perquè sense llum les algues no poden fer fotosíntesi. La hidra no és autòtrofa, ho són les algues.",
          ae: "A la finestra aguanta més la verda: les algues fan fotosíntesi amb la llum, fabriquen matèria orgànica i en comparteixen una part amb la hidra. A l'armari fosc aquest avantatge desapareix, perquè la fotosíntesi necessita llum; fins i tot les algues han de respirar i gastar reserves, així que la verda no aguantarà més que la marró. La hidra verda NO és autòtrofa: és un animal heteròtrof que caça i menja preses. Les autòtrofes són les algues que viuen a dins. El color verd no fa autòtrof ningú; el que compta és si hi ha fotosíntesi, i per a això cal llum."
        },
        aeWhy: "L'AE separa qui és autòtrof (les algues) de qui no ho és (la hidra) i explica per què a la foscor l'avantatge desapareix. Tanca la porta a l'error típic «és verda, doncs és autòtrofa».",
        must: [
          "Has fet una predicció per a cada experiment (armari i finestra).",
          "Has dit que la fotosíntesi necessita llum.",
          "Has dit que la hidra és heteròtrofa i que les autòtrofes són les algues.",
          "Has justificat per què a la foscor la verda no té avantatge."
        ]
      },
      {
        id: 'w4',
        oa: 'OA3',
        source: "Entrena el bloc 3 de la prova · Interpretar una taula de masses i transferir l'osmosi",
        minutes: 8,
        text: "A la bassa no hi ha patates, però al laboratori sí. Tallem tres daus de patata de 20,0 g i deixem cadascun una hora en un medi diferent. Aigua destil·lada: 23,1 g. Aigua amb una culleradeta de sucre: 20,1 g. Xarop molt ensucrat: 15,4 g. a) Cap on s'ha mogut l'aigua en cada got? b) Quin mecanisme ho explica i quin paper hi fa la membrana? c) Quan tires sucre sobre unes maduixes tallades, al cap de mitja hora són al plat banyades de suc. Explica-ho amb el mateix mecanisme.",
        model: {
          as: "a) A l'aigua destil·lada ha entrat aigua a la patata; amb una mica de sucre gairebé no ha canviat; al xarop n'ha sortit. b) És l'osmosi: l'aigua travessa la membrana i va cap on hi ha més sucre. c) El sucre de fora fa que l'aigua surti de les cèl·lules de la maduixa, i aquesta aigua és el suc.",
          ae: "a) Destil·lada: +3,1 g, ha entrat aigua perquè la patata estava més concentrada que el medi. Poc sucre: +0,1 g, el medi té una concentració gairebé igual a la de la patata i l'aigua entra i surt en la mateixa quantitat. Xarop: −4,6 g, ha sortit aigua cap al medi, que estava molt més concentrat. b) És l'osmosi: la membrana és semipermeable, deixa passar l'aigua però gairebé no el sucre, i l'aigua es mou cap al costat més concentrat. Els canvis de massa són aigua, no sucre: si el sucre entrés, el dau del xarop hauria guanyat massa, i n'ha perdut. c) El sucre que tires es dissol en la humitat de la superfície i hi forma un medi molt concentrat. Per osmosi, l'aigua de les cèl·lules de la maduixa en surt: el suc és aquesta aigua. Per això les maduixes queden més toves: les cèl·lules han perdut aigua."
        },
        aeWhy: "L'AE calcula els canvis, fa servir el cas «poc sucre» per veure que hi ha equilibri, explica per què la membrana deixa passar l'aigua i no el sucre i descarta amb les dades l'error típic «el sucre entra a la patata».",
        must: [
          "Has dit cap on va l'aigua en els tres gots, fent servir les masses.",
          "Has anomenat l'osmosi i has dit que la membrana és semipermeable.",
          "Has dit que l'aigua va cap al medi MÉS concentrat.",
          "Has aplicat el mateix mecanisme a les maduixes (l'aigua surt de les cèl·lules)."
        ]
      },
      {
        id: 'w5',
        oa: 'OA4',
        source: "Entrena el bloc 4 de la prova · Mitosi, meiosi i divisió sense control",
        minutes: 6,
        text: "A l'estiu, a la hidra li surt pel costat una petita hidra (un brot) que creix i es desenganxa: és idèntica a la mare. A la tardor, en canvi, fabrica òvuls i espermatozoides. a) Quina divisió cel·lular forma el brot i per què la filla és idèntica? b) Per què els gàmetes han de tenir la meitat del material genètic? c) Si les cèl·lules del costat es dividissin sense parar i sense formar cap hidra ordenada, a quina malaltia humana s'assemblaria?",
        model: {
          as: "a) La mitosi, que fa cèl·lules iguals; per això la filla és igual que la mare. b) Perquè quan s'uneixen un òvul i un espermatozoide es torna a tenir el material genètic complet. c) Al càncer.",
          ae: "a) La mitosi: abans de dividir-se, la cèl·lula copia tot el seu ADN i cada cèl·lula filla se n'emporta una còpia completa i idèntica. Com que el brot es fa només amb mitosis, té exactament el mateix ADN que la mare: és un clon. b) Els gàmetes es fan per meiosi i porten la meitat del material genètic. Quan un òvul i un espermatozoide s'uneixen, les dues meitats sumen el nombre complet; si no es reduís a la meitat, cada generació doblaria el material genètic. A més, les filles que surten de gàmetes barregen el material de dos progenitors i no són idèntiques. c) Al càncer: cèl·lules que han perdut el control de la mitosi i es divideixen sense parar fins a formar un tumor. La divisió en si és normal; el que falla és el control."
        },
        aeWhy: "L'AE explica el mecanisme (còpia de l'ADN abans de dividir-se), diu què passaria sense la reducció a la meitat i precisa que en el càncer no falla la mitosi sinó el seu CONTROL, que és on s'equivoca molta gent.",
        must: [
          "Has dit mitosi per al brot i meiosi per als gàmetes.",
          "Has explicat per què el brot és idèntic (còpia de tot l'ADN).",
          "Has explicat què passa amb el material genètic en la fecundació.",
          "Has definit el càncer com a divisió cel·lular sense control."
        ]
      },
      {
        id: 'w6',
        oa: 'OA4',
        source: "Entrena el bloc 5 de la prova · Com canvia el coneixement científic",
        minutes: 4,
        text: "L'any 1744, el naturalista Abraham Trembley va tallar hidres a trossos i va veure que cada tros refeia una hidra sencera. Molts savis no s'ho van creure: pensaven que un animal no podia fer una cosa així. Altres naturalistes van repetir l'experiment i els va sortir el mateix. Avui sabem que ho fan unes cèl·lules capaces de dividir-se i convertir-se en qualsevol tipus de cèl·lula. Què en pots deduir sobre la manera com avança el coneixement científic?",
        model: {
          as: "Que la ciència canvia quan hi ha proves noves. Al principi no s'ho creien, però altres ho van repetir, els va sortir igual i ho van acabar acceptant.",
          ae: "Que el coneixement científic és provisional: s'accepta la idea que millor explica les proves que hi ha en aquell moment. Una idea nova, per estranya que sembli, no s'accepta per qui la diu sinó perquè altres poden repetir l'experiment i obtenir el mateix resultat. El dubte dels primers savis no era un error: forma part del mètode, que demana proves abans de canviar d'idea. I l'explicació ha seguit creixent: segles després s'hi han afegit les cèl·lules que es divideixen i es diferencien. Que la ciència canviï no la fa menys fiable; és justament el que la fa fiable."
        },
        aeWhy: "L'AE diu què fa que una idea s'accepti (repetir l'experiment, no l'autoritat), valora el dubte com a part del mètode i tanca la porta a l'error típic «si la ciència canvia, no és de fiar».",
        must: [
          "Has dit que el coneixement científic canvia quan hi ha proves noves.",
          "Has explicat el paper de repetir l'experiment.",
          "Has fet servir el cas de la hidra, no una frase general sense exemple."
        ]
      }
    ]
  },

  // Versió fàcil de l'autoavaluació (nivell C · pilot 29/09/2026). Criteris:
  // vault «Nivell C - Criteris fitxes» — frases curtes, imatge + «Per llegir»
  // abans de cada pregunta, opcions TOTES plausibles, cap escriptura llarga.
  // Treballa els objectius C de les sessions (sN.js, levelObjectives.C): la
  // C no toca l'OA2 (tipus cel·lulars). Esquema: SAAvaluacioPage + AutoavaluacioC.jsx.
  c: {
    checklist: [
      { id: 'c1', oa: 'OA1', icon: '🍎', text: "Sé què necessita una cèl·lula per viure: aliment i oxigen." },
      { id: 'c2', oa: 'OA1', icon: '🔬', text: "Sé 3 parts de la cèl·lula: membrana, nucli i mitocondri." },
      { id: 'c3', oa: 'OA3', icon: '💧', text: "Sé cap on va l'aigua en l'osmosi: cap on hi ha més sal." },
      { id: 'c4', oa: 'OA4', icon: '🩹', text: "Sé per què el cos fa cèl·lules noves: per créixer i curar ferides." }
    ],
    preguntes: [
      {
        id: 'p1', oa: 'OA1',
        img: '/images/sa1-cel-3-parts.png',
        alt: "Cèl·lula amb tres parts numerades: 1 la membrana, 2 el nucli, 3 el mitocondri.",
        llegir: "1 = membrana: tanca la cèl·lula. 2 = nucli: guarda les instruccions. 3 = mitocondri: crema el menjar amb oxigen i fa energia.",
        text: "Una cèl·lula de múscul 💪 treballa molt i gasta molta energia. Què tindrà més?",
        options: ["Més mitocondris (3)", "Un nucli més gran (2)"],
        correct: 0
      },
      {
        id: 'p2', oa: 'OA3',
        img: '/images/sa1-planta-marcida-sal.png',
        alt: "Planta marcida en un test amb molts cristalls de sal a la terra.",
        llegir: "Osmosi: l'aigua travessa la membrana i va cap on hi ha més sal 🧂.",
        text: "Una onada de mar ha mullat la terra de l'hort 🌊. Cap on va l'aigua de l'arrel?",
        options: ["Surt de l'arrel cap a la terra", "Entra de la terra cap a l'arrel"],
        correct: 0
      },
      {
        id: 'p3', oa: 'OA4',
        img: '/images/sa1-ferida.png',
        alt: "Una ferida petita a la pell de la mà.",
        llegir: "Mitosi: 1 cèl·lula fa 2 cèl·lules iguals. Meiosi: fa òvuls i espermatozoides, amb la meitat de l'ADN.",
        text: "Per tancar aquesta ferida 🩹, quina divisió fa la pell?",
        options: ["Mitosi: 2 cèl·lules iguals", "Meiosi: cèl·lules amb la meitat"],
        correct: 0
      }
    ],
    completar: {
      id: 'k1', oa: 'OA1',
      llegir: "La cèl·lula fa energia com un foc petit 🔥: necessita menjar i oxigen.",
      frase: "Al {0} es crema el menjar amb l'{1} per fer energia.",
      respostes: ['mitocondri', 'oxigen'],
      banc: ['nucli', 'oxigen', 'mitocondri', 'aigua']
    }
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé què fan la membrana, el nucli i el mitocondri, i què passaria si en faltés un." },
    { id: 'c2', oa: 'OA1', text: "Puc explicar per quina raó necessitem menjar i respirar, connectant-ho amb el mitocondri." },
    { id: 'c3', oa: 'OA2', text: "Distingeixo cèl·lula animal i vegetal, i procariota i eucariota." },
    { id: 'c4', oa: 'OA2', text: "Sé la diferència entre autòtrof i heteròtrof i puc posar un exemple de cada." },
    { id: 'c5', oa: 'OA3', text: "Puc explicar l'osmosi i predir si una cèl·lula s'inflarà o s'encongirà segons el medi." },
    { id: 'c6', oa: 'OA3', text: "Entenc per quina raó una planta es marceix amb massa adob." },
    { id: 'c7', oa: 'OA4', text: "Sé per quina raó hi ha dos tipus de divisió (mitosi i meiosi) i per a què serveix cadascuna." },
    { id: 'c8', oa: 'OA4', text: "Puc explicar per quina raó totes les cèl·lules tenen el mateix ADN però són diferents." },
    { id: 'c9', oa: 'OA4', text: "Sé què és el càncer en termes de divisió cel·lular." }
  ],

  // Cas-fil NOU: una planta carnívora de torbera (context diferent de la
  // prova "Abissàlia"). Mateixos conceptes (energia, osmosi, divisió,
  // autòtrof/heteròtrof), context totalment nou → mesura transferència.
  test: {
    context:
      "La drosera és una planta de torbera que viu en sòls molt pobres i àcids. Fa fotosíntesi, però a més atrapa insectes amb unes gotes enganxoses i els digereix. Les seves fulles creixen i es regeneren ràpidament quan es malmeten.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "La drosera necessita molta energia per moure els pèls que atrapen els insectes. Quin orgànul esperaries trobar en gran quantitat en aquestes cèl·lules?",
        options: [
          "Molts nuclis, perquè un moviment complex demana moltes instruccions alhora",
          "Molts cloroplasts, perquè el moviment es fa directament amb l'energia de la llum",
          "Molts mitocondris, perquè el moviment consumeix molt ATP i l'ATP es fa allà",
          "Molts vacüols, perquè l'energia del moviment surt de l'aigua acumulada"
        ],
        correct: 2,
        feedback: {
          correct: "Exacte. Igual que la cèl·lula muscular, una cèl·lula que es mou molt fa molta respiració cel·lular i necessita molts mitocondris.",
          wrong: "L'energia utilitzable per al moviment és l'ATP, i l'ATP es fabrica al mitocondri. Quina cèl·lula en necessitarà més: una que es mou molt o una que no?"
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "La drosera fa fotosíntesi però també digereix insectes. Com la classificaries?",
        options: [
          "Només heteròtrofa: si captura preses, ja no fabrica el seu propi aliment",
          "Autòtrofa, i dels insectes en treu nutrients que el sòl pobre no li dóna",
          "Ni una cosa ni l'altra: és un cas intermedi que no es pot classificar",
          "Autòtrofa, i els insectes els atrapa només per defensar-se dels herbívors"
        ],
        correct: 1,
        feedback: {
          correct: "Molt bé. Fabrica el seu aliment amb llum (autòtrofa), però com que el sòl és molt pobre n'obté nutrients extra — sobretot nitrogen — dels insectes.",
          wrong: "Ser autòtrof vol dir fabricar el propi aliment amb llum, i això la drosera ho fa. Llavors, què li falta que hagi d'anar a buscar als insectes?"
        }
      },
      {
        id: 't3',
        oa: 'OA3',
        text: "Deixem una fulla de drosera una hora dins d'aigua destil·lada, sense cap sal ni sucre. Què els passa a les seves cèl·lules?",
        options: [
          "Guanyen aigua i s'inflen, però la paret cel·lular evita que esclatin",
          "Perden aigua i s'encongeixen, perquè a fora no hi ha cap nutrient",
          "Esclaten totes, perquè l'aigua entra sense parar fins a trencar la membrana",
          "No canvien, perquè la membrana només deixa passar l'aigua quan hi ha sal"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. L'interior de la cèl·lula és més concentrat que l'aigua destil·lada, així que per osmosi hi entra aigua; la paret de les cèl·lules vegetals aguanta la pressió i les manté turgents.",
          wrong: "Per osmosi l'aigua va cap al medi més concentrat. Aquí, què és més concentrat: l'aigua destil·lada o l'interior de la cèl·lula? I què té la cèl·lula vegetal que no té l'animal?"
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "Quan una fulla de drosera es malmet, es regenera amb cèl·lules noves idèntiques. Quin procés ho fa possible?",
        options: [
          "La meiosi, perquè genera cèl·lules noves a partir de les que queden sanes",
          "L'osmosi, perquè l'entrada d'aigua fa créixer i omplir el forat de la fulla",
          "La mitosi, perquè fa còpies exactes que substitueixen les cèl·lules perdudes",
          "La fotosíntesi, perquè fabrica la matèria nova amb què es refarà la fulla"
        ],
        correct: 2,
        feedback: {
          correct: "Així és. Reparar i regenerar un teixit demana còpies idèntiques de les cèl·lules que hi havia, i això ho fa la mitosi — igual que quan se't cura una ferida.",
          wrong: "Per reparar un teixit calen cèl·lules IDÈNTIQUES a les que s'han perdut. Quin dels dos tipus de divisió fa còpies exactes, la mitosi o la meiosi?"
        }
      }
    ]
  }
}
