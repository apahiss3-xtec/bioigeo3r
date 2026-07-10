// Material d'autoavaluació de SA1: checklist d'estudi (el que cal saber
// abans de la prova) + test de transferència amb un context NOU
// (diferent del cas "Abissàlia" de la prova escrita), per comprovar si
// l'alumne pot inferir i no només recordar.
export const sa1Avaluacio = {
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
        text: "La drosera necessita molta energia per moure els pèls que atrapen els insectes. Quin orgànul esperaries trobar en gran quantitat a aquestes cèl·lules?",
        options: [
          "Mitocondris, perquè el moviment necessita molta energia (ATP)",
          "Nuclis, perquè calen moltes instruccions",
          "Membranes, perquè cal més frontera",
          "No necessita cap orgànul especial"
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. Igual que la cèl·lula muscular, una cèl·lula que es mou molt fa molta respiració cel·lular i necessita molts mitocondris.",
          wrong: "Torna a la idea clau: l'energia (ATP) per al moviment es produeix al mitocondri. Quina cèl·lula necessitarà més mitocondris, una que es mou molt o una que no?"
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "La drosera fa fotosíntesi però també 'menja' insectes. Com la classificaries?",
        options: [
          "Fa de les dues coses: és autòtrofa (fotosíntesi) i complementa amb nutrients dels insectes",
          "És només heteròtrofa, perquè menja insectes",
          "No és ni una cosa ni l'altra",
          "És autòtrofa i per això no necessita res més"
        ],
        correct: 0,
        feedback: {
          correct: "Molt bé. Fabrica el seu aliment amb llum (autòtrofa), però com que el sòl és molt pobre, obté nutrients extra (com el nitrogen) dels insectes.",
          wrong: "Pensa què vol dir autòtrof: fabricar el propi aliment amb llum. La drosera ho fa? Llavors per què atrapa insectes si el sòl és tan pobre?"
        }
      },
      {
        id: 't3',
        oa: 'OA3',
        text: "Si reguéssim una drosera amb aigua de mar (molt salada), què li passaria a les cèl·lules de les seves arrels?",
        options: [
          "Perdrien aigua per osmosi i la planta es marciria",
          "Guanyarien aigua i s'inflarien",
          "No passaria res, l'aigua salada és igual que la dolça",
          "Es tornarien autòtrofes"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. El medi salat està molt concentrat, així que per osmosi l'aigua surt de les cèl·lules de l'arrel: el mateix que vas veure amb l'ou en aigua sucrada.",
          wrong: "Recorda l'ou en aigua sucrada. L'aigua de mar és un medi molt concentrat: cap a quina banda es mou l'aigua per osmosi?"
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "Quan una fulla de drosera es malmet, es regenera ràpidament amb cèl·lules noves idèntiques. Quin procés ho fa possible?",
        options: [
          "La mitosi, que fa còpies idèntiques per reparar i substituir cèl·lules",
          "La meiosi, que fa cèl·lules amb la meitat del material",
          "L'osmosi, que mou aigua",
          "La fotosíntesi, que fabrica fulles"
        ],
        correct: 0,
        feedback: {
          correct: "Així és. Reparar i regenerar teixits necessita còpies idèntiques: això ho fa la mitosi, igual que quan se't cura una ferida.",
          wrong: "Per reparar un teixit calen cèl·lules IDÈNTIQUES a les que hi havia. Quin dels dos tipus de divisió fa còpies exactes?"
        }
      }
    ]
  }
}
