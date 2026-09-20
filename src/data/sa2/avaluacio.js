// Material d'autoavaluació de SA2: checklist d'estudi + test de
// transferència amb un context NOU (un escalador a l'altitud, diferent
// del cas "corredor amb anèmia ferropènica" que vertebra la SA i la prova).
export const sa2Avaluacio = {
  // Assaig de prova escrita. Preguntes i models extrets dels blocs reals de la
  // prova de SA2 (cas de la Nora i en Pau; solucionari a
  // SA2-cos-huma/solucionari_prova_sa2.docx). Els descriptors AS/AE son els de
  // les rubriques OA1-OA4 d'aquell solucionari.
  escrita: {
    intro:
      "Aquestes preguntes són del mateix tipus que les de la prova del cos humà. Full i bolígraf, resposta sencera a mà i sense apunts. A la prova, la diferència entre AS i AE la marca si LLIGUES els passos o només en cites un.",
    minutes: 25,
    questions: [
      {
        id: 'w1',
        oa: 'OA1',
        source: "Bloc 2 de la prova · L'analítica",
        minutes: 7,
        text: "La Nora té l'hemoglobina a 9,8 g/dL (normal: 12–16) i el ferro a 28 µg/dL (normal: 50–170). Diu que s'ofega de seguida quan corre. Explica tota la cadena que va del ferro baix fins al cansament.",
        model: {
          as: "Té poc ferro, i el ferro fa falta per fabricar hemoglobina. Amb poca hemoglobina la sang transporta menys oxigen i per això es cansa de seguida.",
          ae: "Poc ferro → poca hemoglobina, perquè l'hemoglobina necessita ferro per poder unir-s'hi l'oxigen → els eritròcits transporten menys O₂ des dels pulmons → arriba menys oxigen als músculs → els mitocondris poden fer menys respiració cel·lular → s'obté menys energia (ATP) → fatiga ràpida. És una anèmia ferropènica: el problema no és el cor ni el pulmó, és la capacitat de transport de la sang."
        },
        aeWhy: "L'AE arriba fins al mitocondri i l'ATP (connecta amb SA1) i posa nom al diagnòstic. L'AS es queda a «menys oxigen».",
        must: [
          "Has lligat ferro → hemoglobina.",
          "Has dit què fa exactament l'hemoglobina (transportar O₂ des dels pulmons).",
          "Has arribat fins al mitocondri i l'energia, no t'has aturat a la sang.",
          "Has posat nom al problema (anèmia ferropènica)."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: 'Bloc 1 de la prova · Del plat a la cèl·lula',
        minutes: 6,
        text: "Segueix un tros de pa des que entra per la boca fins que dona energia a una cèl·lula del múscul de la cama. Digues en quina molècula es converteix, on s'absorbeix i on s'acaba fent servir.",
        model: {
          as: "El pa té midó, que es converteix en glucosa. La glucosa s'absorbeix a l'intestí prim, passa a la sang i arriba al múscul, on entra al mitocondri i dona energia.",
          ae: "El midó del pa es va descomponent al llarg del tub digestiu (boca → esòfag → estómac → intestí prim) fins a glucosa. S'absorbeix a l'intestí prim, que té vellositats que multipliquen la superfície de contacte i on l'aliment ja és prou petit per travessar cap a la sang. La sang la porta fins a la cèl·lula del múscul, on entra al mitocondri i es fa la respiració cel·lular: glucosa + oxigen → CO₂ + aigua + energia (ATP). Aquest ATP és el que permet la contracció del múscul."
        },
        aeWhy: "L'AE justifica PER QUÈ s'absorbeix a l'intestí prim (vellositats + mida de la molècula) i escriu l'equació de la respiració cel·lular amb els dos productes i l'energia.",
        must: [
          "Has dit midó → glucosa.",
          "Has dit intestí prim i has justificat per què (vellositats, superfície).",
          "Has anomenat el mitocondri.",
          "Has escrit l'equació amb l'oxigen, el CO₂, l'aigua i l'energia."
        ]
      },
      {
        id: 'w3',
        oa: 'OA3',
        source: 'Bloc 3 de la prova · El cor sota esforç',
        minutes: 6,
        text: "En Pau té la freqüència cardíaca en repòs a 60 bpm i es recupera molt de pressa després de córrer; la Nora la té a 80 bpm i es queda alta molta estona. Qui està més entrenat i per quina raó? I per quina raó puja la freqüència cardíaca quan corres?",
        model: {
          as: "En Pau, perquè té la freqüència de repòs més baixa i es recupera abans. La freqüència puja en córrer perquè els músculs necessiten més oxigen.",
          ae: "En Pau. Un cor entrenat és més eficient: bombeja més sang a cada batec, de manera que en repòs necessita menys batecs per minut (60 contra 80) i, sobretot, torna abans als valors de repòs quan s'acaba l'esforç — la velocitat de recuperació és el millor indicador dels dos. La freqüència puja en córrer perquè els músculs fan molta més respiració cel·lular i necessiten més oxigen i més glucosa i, alhora, generar més CO₂ que cal retirar: el cor accelera per moure més sang per minut i cobrir les dues coses."
        },
        aeWhy: "L'AE explica per què un cor entrenat batega menys (més volum per batec), diu que la recuperació és el millor indicador, i en la segona part no oblida la retirada de CO₂.",
        must: [
          "Has dit qui és i has fet servir DADES del cas (60 i 80 bpm).",
          "Has parlat de la velocitat de recuperació, no només del repòs.",
          "Has connectat l'esforç amb la respiració cel·lular.",
          "Has esmentat que també cal retirar el CO₂."
        ]
      },
      {
        id: 'w4',
        oa: 'OA4',
        source: 'Bloc 4 de la prova · Residus i salut',
        minutes: 6,
        text: "A l'analítica de la Nora, la creatinina i la urea són normals. Què et diu això? I per quina raó el cos ha d'anar eliminant aquests residus?",
        model: {
          as: "Que el ronyó filtra bé la sang. Per tant el cansament no ve del ronyó, sinó de la falta de ferro. Cal eliminar els residus perquè si s'acumulessin ens farien mal.",
          ae: "La urea i la creatinina són residus que elimina el ronyó; si estan dins del marge normal vol dir que el ronyó filtra correctament. Això permet DESCARTAR el ronyó com a causa del cansament i reforça el diagnòstic d'anèmia ferropènica: en ciència, una dada normal també és informació. Cal eliminar aquests residus contínuament per mantenir estable el medi intern (homeòstasi); si s'acumulessin, la composició de la sang canviaria, es tornaria tòxica i les cèl·lules no podrien funcionar. El CO₂ s'elimina pels pulmons i la urea, les sals i l'aigua sobrant pel ronyó, en forma d'orina."
        },
        aeWhy: "L'AE fa el pas que la prova busca de debò: entendre que un valor NORMAL serveix per descartar una hipòtesi. I posa el nom del concepte (homeòstasi, medi intern).",
        must: [
          "Has dit que el ronyó funciona bé.",
          "Has fet servir aquesta dada per descartar una causa.",
          "Has anomenat el medi intern o l'homeòstasi.",
          "Has dit per on surt cada residu (CO₂ pels pulmons, urea pel ronyó)."
        ]
      }
    ]
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé relacionar cada nutrient (hidrats, greixos, proteïnes) amb la seva funció al cos." },
    { id: 'c2', oa: 'OA1', text: "Puc explicar el recorregut de la glucosa des de l'intestí prim fins al mitocondri." },
    { id: 'c3', oa: 'OA1', text: "Entenc per quina raó l'absorció passa a l'intestí prim i no a l'estómac." },
    { id: 'c4', oa: 'OA2', text: "Sé què transporta la sang i quins són els seus components principals." },
    { id: 'c5', oa: 'OA2', text: "Puc explicar el paper del ferro i de l'hemoglobina en el transport d'O₂." },
    { id: 'c6', oa: 'OA2', text: "Entenc per quina raó la circulació és doble i per a què serveixen les 4 cavitats del cor." },
    { id: 'c7', oa: 'OA3', text: "Sé interpretar una gràfica de FC (pujada, pic, recuperació) i explicar-la." },
    { id: 'c8', oa: 'OA3', text: "Puc explicar la cadena esforç → ATP → O₂ → FC." },
    { id: 'c9', oa: 'OA4', text: "Sé distingir la via nerviosa (ràpida) de l'hormonal (lenta però duradora)." },
    { id: 'c10', oa: 'OA4', text: "Entenc com el ronyó manté l'equilibri intern i quin paper hi té l'ADH." }
  ],

  // Cas-fil NOU: un escalador a 4.000 m d'altitud (poc O₂ a l'aire),
  // context diferent del corredor amb anèmia. Toca els 4 OA: nutrients,
  // sang/hemoglobina, FC/respiració i control hormonal (EPO).
  test: {
    context:
      "La Júlia és alpinista i passa dues setmanes en un campament a 4.000 m d'altitud. A aquesta alçada hi ha molt menys oxigen a l'aire. Els primers dies nota que s'ofega de seguida i el cor li va molt ràpid fins i tot en repòs. Després de dues setmanes, el seu cos s'ha adaptat i una analítica mostra que ha fabricat més eritròcits.",
    questions: [
      {
        id: 't1',
        oa: 'OA3',
        text: "Per quina raó els primers dies la Júlia té la freqüència cardíaca alta fins i tot en repòs?",
        options: [
          "Perquè a l'altitud fa més fred i el cor s'accelera per escalfar tot el cos",
          "Perquè la pressió baixa fa que el cor s'encongeixi i hagi de batre més sovint",
          "Perquè cada batec reparteix menys O₂ i el cor ho compensa batent més de pressa",
          "Perquè en repòs el cos gasta més oxigen que quan es fa un esforç moderat"
        ],
        correct: 2,
        feedback: {
          correct: "Exacte. És el mateix mecanisme que en l'anèmia del Marc: si arriba menys O₂ per batec, el cor compensa augmentant la freqüència.",
          wrong: "Connecta-ho amb el cas del Marc. Si cada batec porta poc O₂ als músculs, què pot fer el cor per repartir-ne prou al llarg d'un minut?"
        }
      },
      {
        id: 't2',
        oa: 'OA4',
        text: "Després de dues setmanes el cos ha fabricat més eritròcits. Quina hormona ho ha ordenat, i quin òrgan la fabrica?",
        options: [
          "L'EPO, fabricada pel ronyó quan detecta que arriba poc oxigen",
          "L'ADH, fabricada per la hipòfisi quan detecta que falta oxigen",
          "L'adrenalina, fabricada per les glàndules suprarenals en situació d'esforç",
          "La insulina, fabricada pel pàncrees quan augmenta la despesa energètica"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. El ronyó detecta la manca d'O₂ i allibera EPO, que ordena a la medul·la òssia fabricar més eritròcits. Per això a l'esport se'n fa un ús com a dopatge.",
          wrong: "Repassa les hormones de S6. Busca'n una que fabriqui el ronyó i que actuï sobre la medul·la òssia: és la mateixa que s'ha fet servir com a dopatge."
        }
      },
      {
        id: 't3',
        oa: 'OA2',
        text: "Per quina raó tenir més eritròcits ajuda la Júlia a rendir millor a l'altitud?",
        options: [
          "Perquè els eritròcits fabriquen ATP i així els músculs tenen més energia",
          "Perquè més eritròcits fan la sang més fluida i arriba més ràpid als músculs",
          "Perquè els eritròcits acumulen calor i mantenen la temperatura del cos",
          "Perquè més eritròcits és més hemoglobina, i cada litre de sang porta més O₂"
        ],
        correct: 3,
        feedback: {
          correct: "Així és. És exactament l'avantatge contrari a l'anèmia: més hemoglobina vol dir més O₂ transportat per litre de sang.",
          wrong: "Pensa-ho al revés que en l'anèmia: si menys hemoglobina porta menys O₂, què passa quan n'hi ha més? Què transporten exactament els eritròcits?"
        }
      },
      {
        id: 't4',
        oa: 'OA1',
        text: "Durant l'escalada la Júlia menja fruits secs i barretes de cereals. Per quina raó és una bona elecció?",
        options: [
          "Perquè els cereals donen glucosa ràpida i els fruits secs, greixos per a l'esforç llarg",
          "Perquè les proteïnes dels fruits secs són l'únic combustible que fa servir el múscul",
          "Perquè són aliments que aporten molt poca energia i així el cos no es cansa",
          "Perquè els greixos no es poden cremar i queden guardats per si la baixada s'allarga"
        ],
        correct: 0,
        feedback: {
          correct: "Molt bé. Combina combustible ràpid (la glucosa dels hidrats) i combustible dens per a esforç llarg (els greixos): just el que demana una jornada d'escalada.",
          wrong: "Repassa els nutrients de S1: quin dóna energia ràpida i quin en dóna molta però a poc a poc? Per a una jornada llarga interessen tots dos."
        }
      }
    ]
  }
}
