// Material d'autoavaluació de SA2: checklist d'estudi + test de
// transferència amb un context NOU (un escalador a l'altitud, diferent
// del cas "corredor amb anèmia ferropènica" que vertebra la SA i la prova).
export const sa2Avaluacio = {
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
        text: "Per quina raó els primers dies la Júlia té la FC alta fins i tot en repòs?",
        options: [
          "Amb menys O₂ a l'aire, cada batec en reparteix menys, i el cor ho compensa batent més de pressa",
          "Perquè l'altitud fa que el cor s'encongeixi",
          "Perquè fa més fred i el cor s'accelera per escalfar el cos",
          "Perquè a l'altitud no cal oxigen"
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. És el mateix mecanisme que en l'anèmia del Marc: si arriba menys O₂ per batec, el cor compensa augmentant la freqüència.",
          wrong: "Connecta-ho amb el cas del Marc: quan arriba poc O₂ als músculs, què fa el cor per intentar repartir-ne prou? Pensa en la FC."
        }
      },
      {
        id: 't2',
        oa: 'OA4',
        text: "Després de dues setmanes el cos ha fabricat més eritròcits. Quina hormona, fabricada pel ronyó, ha ordenat aquesta producció?",
        options: [
          "L'EPO (eritropoetina)",
          "L'adrenalina",
          "La insulina",
          "L'ADH"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. El ronyó detecta la manca d'O₂ i allibera EPO, que ordena a la medul·la òssia fabricar més eritròcits. Per això a l'esport és una forma de dopatge.",
          wrong: "Recorda les hormones de S6: quina fabrica el ronyó per estimular la producció d'eritròcits? És la mateixa que s'usa com a dopatge."
        }
      },
      {
        id: 't3',
        oa: 'OA2',
        text: "Per quina raó tenir més eritròcits ajuda la Júlia a rendir millor a l'altitud?",
        options: [
          "Més eritròcits → més hemoglobina → cada litre de sang transporta més O₂ als músculs",
          "Més eritròcits fan la sang més lleugera",
          "Més eritròcits escalfen més el cos",
          "Els eritròcits fabriquen energia directament"
        ],
        correct: 0,
        feedback: {
          correct: "Així és. És exactament l'avantatge contrari a l'anèmia: més hemoglobina vol dir més O₂ per litre de sang.",
          wrong: "Pensa al revés que en l'anèmia: si menys hemoglobina porta menys O₂, què passa quan n'hi ha MÉS? Què transporten els eritròcits?"
        }
      },
      {
        id: 't4',
        oa: 'OA1',
        text: "Durant l'escalada, la Júlia menja molts fruits secs i barretes de cereals. Per quina raó són una bona elecció energètica?",
        options: [
          "Els cereals donen glucosa ràpida i els fruits secs, greixos amb molta energia per a l'esforç llarg",
          "Perquè no aporten cap energia i així no cansen",
          "Perquè les proteïnes són l'únic combustible del múscul",
          "Perquè el greix no es pot fer servir mai com a energia"
        ],
        correct: 0,
        feedback: {
          correct: "Molt bé. Combina combustible ràpid (glucosa dels hidrats) i combustible dens per a esforç llarg (greixos): just el que necessita una jornada d'escalada.",
          wrong: "Repassa els nutrients de S1: quin dona energia ràpida i quin en dona molta però a poc a poc? Per a una jornada llarga interessen tots dos."
        }
      }
    ]
  }
}
