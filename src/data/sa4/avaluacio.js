// Avaluació SA4: checklist d'estudi + test de transferència amb la Núria
// (context NOU, diferent de l'enigma de la Laia que vertebra la SA).
export const sa4Avaluacio = {
  // Assaig de prova escrita. La prova individual de SA4 encara no esta
  // fabricada; aquestes preguntes segueixen el format i el nivell d'exigencia
  // de les de SA1-SA3 i cobreixen els quatre OA de la SA, de manera que quan
  // es redacti la prova es pugui alinear amb aquests models AS/AE.
  escrita: {
    intro:
      "Aquestes preguntes són del tipus que trobaràs a la prova. Full, bolígraf i sense apunts: escriu la resposta sencera i després compara-la amb els dos models. La majoria demanen CALCULAR o JUSTIFICAR, no recordar una llista.",
    minutes: 25,
    questions: [
      {
        id: 'w1',
        oa: 'OA2',
        source: 'Tipus de pregunta de la prova · Cicle menstrual',
        minutes: 6,
        text: "Una noia té cicles regulars de 32 dies. Calcula quin dia ovula aproximadament i explica per quina raó dir «s'ovula el dia 14» és inexacte.",
        model: {
          as: "32 − 14 = 18. Ovularia cap al dia 18. El dia 14 només val si el cicle és de 28 dies.",
          ae: "32 − 14 = dia 18 aproximadament. El que es manté força constant no és el principi del cicle sinó el final: la fase lútea dura uns 14 dies des de l'ovulació fins a la menstruació següent. Per tant l'ovulació es compta cap enrere des de la propera regla, no cap endavant des de l'última. Dir «dia 14» només és correcte en un cicle de 28 dies, que és una mitjana, no una norma: en cicles més llargs o més curts el dia d'ovulació es desplaça, i a més varia entre cicles d'una mateixa persona."
        },
        aeWhy: "L'AE explica D'ON surt el 14 (la fase lútea és la part constant) en comptes de tractar-lo com una fórmula màgica. Aquest és el pas que separa aplicar de comprendre.",
        must: [
          "Has fet el càlcul i has donat un dia concret.",
          "Has dit que es compta des de la propera regla, no des de l'última.",
          "Has anomenat la fase lútea com la part que dura ~14 dies.",
          "Has dit que 28 dies és una mitjana, no una norma."
        ]
      },
      {
        id: 'w2',
        oa: 'OA3',
        source: 'Tipus de pregunta de la prova · Gàmetes i fecundació',
        minutes: 6,
        text: "Els gàmetes tenen 23 cromosomes i el zigot en té 46. Explica per quina raó ha de ser així i què passaria si els gàmetes en tinguessin 46.",
        model: {
          as: "Perquè a la fecundació s'uneixen dos gàmetes: 23 + 23 = 46. Si en tinguessin 46, el zigot en tindria 92 i el nombre es duplicaria cada generació.",
          ae: "Els gàmetes es formen per meiosi, una divisió que redueix el material genètic a la meitat: de 46 a 23. A la fecundació s'uneixen l'òvul (23) i l'espermatozoide (23) i el zigot en recupera 46, la meitat de cada progenitor. Si els gàmetes en tinguessin 46, cada generació duplicaria el nombre de cromosomes (92, 184...), cosa incompatible amb la vida. La meiosi és, doncs, el mecanisme que manté constant el nombre de cromosomes de l'espècie generació rere generació, i alhora barreja el material dels dos progenitors, que és l'origen de la variabilitat."
        },
        aeWhy: "L'AE anomena la meiosi i afegeix la segona funció —la variabilitat—, que és el que converteix una resposta aritmètica en una resposta biològica.",
        must: [
          "Has fet el compte 23 + 23 = 46.",
          "Has anomenat la meiosi com la divisió que redueix a la meitat.",
          "Has dit què passaria si no fos així (duplicació cada generació).",
          "Has dit que la meitat ve de cada progenitor."
        ]
      },
      {
        id: 'w3',
        oa: 'OA4',
        source: 'Tipus de pregunta de la prova · Mètodes anticonceptius',
        minutes: 7,
        text: "Una parella fa servir la píndola. Un amic els diu que, per tant, ja estan protegits de tot. Explica per quina raó això és fals i quina diferència hi ha entre la píndola i el preservatiu.",
        model: {
          as: "És fals. La píndola evita l'embaràs però no protegeix de les infeccions de transmissió sexual. El preservatiu sí que protegeix de les dues coses.",
          ae: "És fals. La píndola actua per via hormonal: aporta hormones sintètiques que inhibeixen l'ovulació, de manera que no hi ha òvul per fecundar. Això evita l'embaràs amb molta eficàcia, però no posa cap barrera física entre les mucoses, i les ISTs —VIH, HPV, herpes, clamídia— es transmeten precisament pel contacte de fluids i mucoses. El preservatiu, en canvi, és un mètode de barrera i per això dona doble protecció: embaràs i ISTs. La diferència és crítica perquè algunes ISTs són víriques i no tenen curació (VIH, herpes, HPV), mentre que d'altres són bacterianes i sí que es tracten amb antibiòtic."
        },
        aeWhy: "L'AE explica el mecanisme de cada mètode (hormonal contra barrera) i per això la conclusió no s'ha de memoritzar: se'n dedueix. A més distingeix ISTs víriques de bacterianes.",
        must: [
          "Has dit clarament que l'afirmació és falsa.",
          "Has explicat com actua la píndola (inhibeix l'ovulació).",
          "Has dit que el preservatiu és un mètode de barrera.",
          "Has anomenat almenys dues ISTs."
        ]
      },
      {
        id: 'w4',
        oa: 'OA1',
        source: 'Tipus de pregunta de la prova · Classificació i proves',
        minutes: 6,
        text: "Un cladograma que havies estudiat canvia després de seqüenciar l'ADN d'un fòssil. Un company diu: «llavors la ciència no serveix, si cada dos per tres canvien d'opinió». Respon-li.",
        model: {
          as: "No té raó. La ciència canvia quan apareixen proves noves, i això és bo: vol dir que la classificació nova s'ajusta millor a les dades que tenim.",
          ae: "Al contrari: que canviï és justament el senyal que funciona. Un cladograma és un model, una hipòtesi sobre el parentiu entre espècies construïda amb les proves disponibles —abans, sobretot caràcters anatòmics—. Quan apareix una prova nova i millor, com l'ADN d'un fòssil, el model es revisa perquè s'ajusti a les dades. El que seria preocupant és el contrari: mantenir la classificació antiga tot i tenir proves que la contradiuen. El coneixement científic és provisional i revisable, i això no vol dir que qualsevol cosa valgui igual: la versió nova és millor perquè explica més proves que l'anterior."
        },
        aeWhy: "L'AE evita la trampa del relativisme («tot és opinable»): diu explícitament per què la versió nova és MILLOR i no només diferent.",
        must: [
          "Has dit que canviar amb proves noves és una virtut, no un defecte.",
          "Has dit que un cladograma és un model o una hipòtesi.",
          "Has dit quina prova nova hi ha (l'ADN).",
          "Has explicat per què la nova classificació és millor, no només diferent."
        ]
      }
    ]
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé situar l'ésser humà com a única espècie vivent del gènere Homo i justificar-ho amb caràcters compartits i les funcions vitals (nutrició, relació, reproducció)." },
    { id: 'c2', oa: 'OA1', text: "Sé per quina raó les classificacions científiques (cladogrames) són provisionals i poden canviar amb noves proves, com l'ADN." },
    { id: 'c3', oa: 'OA2', text: "Sé identificar les 4 fases del cicle menstrual (menstruació, fol·licular, ovulació, lútea) i les hormones principals de cadascuna (FSH, LH, estrògens, progesterona)." },
    { id: 'c4', oa: 'OA2', text: "Puc calcular el dia d'ovulació aproximat d'un cicle de qualsevol durada (fórmula: dies del cicle − 14) i sé per quina raó el 'dia 14' no és universal." },
    { id: 'c5', oa: 'OA2', text: "Sé identificar les estructures principals de l'aparell reproductor masculí (testicles, epidídim, conducte deferent) i femení (ovaris, trompes, úter, endometri) i n'explico la funció." },
    { id: 'c6', oa: 'OA3', text: "Sé explicar per quina raó els gàmetes tenen 23 cromosomes (meiosi, SA1) i el zigot en té 46 (fecundació), i per quina raó aquest nombre es manté constant cada generació." },
    { id: 'c7', oa: 'OA3', text: "Sé distingir embrió (0-8 setmanes) de fetus i identifico les fites clau de cada trimestre (cor batega S4, fetus S9, viabilitat S22-24)." },
    { id: 'c8', oa: 'OA3', text: "Sé explicar la diferència entre bessons univitel·lins (1 zigot dividit → mateixa genètica → mateix sexe biològic) i bivitel·lins (2 fecundacions → genètica diferent → poden ser sexes distints)." },
    { id: 'c9', oa: 'OA4', text: "Distingeixo el preservatiu (doble protecció: embaràs + ISTs) dels mètodes hormonals (embaràs, NO ISTs) i sé per quina raó la diferència és crítica per a la salut." },
    { id: 'c10', oa: 'OA4', text: "Sé explicar el mecanisme de la píndola (inhibició de l'ovulació per hormones sintètiques) i puc matisar el mite 'la píndola engreixa' amb evidència." },
    { id: 'c11', oa: 'OA4', text: "Identifico les ISTs principals (VIH, HPV, herpes, clamidia), la via de transmissió principal i si són bacterianes (tractables amb antibiòtic) o víriques." },
    { id: 'c12', oa: 'OA4', text: "Sé explicar per quina raó el mètode del calendari és poc fiable: variació del dia d'ovulació (±3-5 dies) + supervivència dels espermatozoides 3-5 dies." }
  ],

  // Cas-fil NOU: la Núria i la Sandra — context diferent de l'enigma de la Laia.
  // Toca els 3 OA: cicle i aparells (OA1), cromosomes i determinació de sexe (OA2), mètodes i ISTs (OA3).
  test: {
    context:
      "La Núria té 14 anys i porta mig any apuntant el cicle a una aplicació. Normalment li dura 28 dies, però el mes dels exàmens se li va allargar fins a 35. A més, una companya li ha dit coses sobre la píndola i sobre el VIH que no acaben de quadrar amb el que heu treballat a classe.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "Si un mes el cicle de la Núria dura 35 dies en comptes de 28, quin dia ovularà aproximadament?",
        options: [
          "El dia 14, perquè l'ovulació cau sempre el mateix dia visqui el cicle que visqui",
          "El dia 21, perquè la fase que s'allarga és la primera i l'última dura sempre 14 dies",
          "El dia 17, perquè l'ovulació es produeix just a la meitat de qualsevol cicle",
          "No es pot saber, perquè sense una analítica hormonal no hi ha cap manera de deduir-ho"
        ],
        correct: 1,
        feedback: {
          correct: "Exacte. La fase lútia és la constant (≈14 dies); el que varia és la fol·licular. Per això 35 − 14 = 21, i per això el mètode del calendari és tan poc fiable.",
          wrong: "Una de les dues fases dura sempre el mateix i l'altra és la que s'allarga o s'escurça. Compta enrere des del final del cicle, no endavant des del principi."
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "Una companya li diu a la Núria que la píndola deixa estèril per sempre. És cert?",
        options: [
          "Sí: les hormones de la píndola malmeten els ovaris de manera definitiva",
          "És cert a mitges: la fertilitat no torna fins al cap de dos anys d'haver-la deixada",
          "No: inhibeix FSH i LH i atura l'ovulació, però en deixar-la el cicle es recupera",
          "No: la píndola no és hormonal i actua només com una barrera dins de l'úter"
        ],
        correct: 2,
        feedback: {
          correct: "Correcte. Són estrògens i progesterona sintètics que impedeixen el pic de FSH i LH, de manera que no hi ha ovulació. En deixar-la, el cicle sol recuperar-se en pocs mesos.",
          wrong: "La píndola actua sobre les hormones que ordenen l'ovulació, no sobre l'ovari. Què passa amb aquelles hormones quan es deixa de prendre?"
        }
      },
      {
        id: 't3',
        oa: 'OA3',
        text: "La Núria pregunta com es transmet realment el VIH i quina és la millor prevenció. Quina resposta és correcta?",
        options: [
          "Es transmet per saliva com qualsevol virus respiratori i per això cal evitar compartir el got",
          "Es transmet per sang i fluids sexuals, i el preservatiu és la prevenció més eficaç",
          "Només es transmet per transfusions, de manera que les relacions sexuals no hi tenen risc",
          "És un bacteri de transmissió sexual i es cura amb antibiòtics si es detecta aviat"
        ],
        correct: 1,
        feedback: {
          correct: "Així és. Les vies són la sanguínia i els fluids sexuals; la saliva no transmet. El preservatiu és l'únic mètode que protegeix alhora d'embaràs i d'ITS.",
          wrong: "Repassa quines vies de transmissió té el VIH i quines no. I fixa't que el preservatiu és l'únic mètode que fa dues feines a la vegada."
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "Connecta amb la SA3: per quina raó el VIH és tan perillós per al sistema immunitari?",
        options: [
          "Perquè destrueix els eritròcits i provoca una anèmia com la del Marc de la SA2",
          "Perquè provoca una febre tan alta i tan llarga que acaba matant totes les defenses",
          "Perquè destrueix els macròfags, que són la primera barrera de la immunitat innàta",
          "Perquè destrueix els limfòcits T CD4+, que coordinen tota la resposta adaptativa"
        ],
        correct: 3,
        feedback: {
          correct: "Exacte. Sense limfòcits T CD4+ no es coordina ni la fabricació d'anticossos ni la destrucció de cèl·lules infectades, i el cos queda exposat a infeccions oportunistes.",
          wrong: "El VIH no ataca qualsevol cèl·lula: ataca justament la que fa de director d'orquestra de la resposta adaptativa. Quina era, a la SA3?"
        }
      }
    ]
  }
}
