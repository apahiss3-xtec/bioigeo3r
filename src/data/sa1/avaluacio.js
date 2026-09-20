// Material d'autoavaluació de SA1: checklist d'estudi (el que cal saber
// abans de la prova) + test de transferència amb un context NOU
// (diferent del cas "Abissàlia" de la prova escrita), per comprovar si
// l'alumne pot inferir i no només recordar.
export const sa1Avaluacio = {
  // Assaig de prova escrita. Les preguntes son del mateix tipus i del mateix
  // nivell que les de la prova individual de SA1 (cas-fil «Abissalia»,
  // solucionari a SA1-celula/S4-poster/solucionari_prova_escrita.md): mateixos
  // blocs, mateixa exigencia de redaccio. Els models AS/AE estan calcats dels
  // descriptors de la conversio d'assoliments del solucionari.
  escrita: {
    intro:
      "Aquestes quatre preguntes són del mateix tipus que les de la prova. Agafa un full, escriu cada resposta SENCERA a mà i sense apunts, i només després obre la solució. Fixa't que la diferència entre AS i AE gairebé mai no és saber més paraules: és explicar el PER QUÈ i lligar les idees entre elles.",
    minutes: 25,
    questions: [
      {
        id: 'w1',
        oa: 'OA1',
        source: 'Bloc 2 de la prova · Energia i respiració',
        minutes: 6,
        text: "Una cèl·lula de la cua d'un microorganisme té moltíssims més mitocondris que una cèl·lula del seu cos. Explica quina de les dues consumeix més oxigen i per quina raó.",
        model: {
          as: "La de la cua. Té més mitocondris, i els mitocondris són els orgànuls que fan la respiració cel·lular, que necessita oxigen.",
          ae: "La de la cua. La cua es mou constantment i moure's costa energia; l'energia s'obté al mitocondri fent la respiració cel·lular, que consumeix aliment (glucosa) i oxigen i en treu energia, CO₂ i aigua. Per això una cèl·lula que necessita molta energia té molts mitocondris i consumeix molt més oxigen: el nombre d'orgànuls no és casual, s'ajusta a la funció que fa la cèl·lula."
        },
        aeWhy: "L'AS diu QUÈ passa; l'AE tanca la cadena sencera funció → energia → mitocondri → oxigen, i n'extreu una idea general (l'estructura de la cèl·lula s'ajusta a la seva funció).",
        must: [
          "Has dit clarament quina de les dues cèl·lules és.",
          "Has anomenat la respiració cel·lular, no només «els mitocondris fan energia».",
          "Has relacionat el nombre de mitocondris amb la FUNCIÓ de la cèl·lula (moure's).",
          "Has dit que l'oxigen és el que es consumeix, no el que es produeix."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: 'Bloc 2 de la prova · Autòtrof o heteròtrof',
        minutes: 5,
        text: "L'organisme viu a 2.000 m de fondària. Pot ser autòtrof? Respon sí o no i justifica-ho.",
        model: {
          as: "No. A 2.000 m no hi arriba la llum i per fer la fotosíntesi cal llum, així que ha de ser heteròtrof.",
          ae: "No pot ser autòtrof fotosintètic. La fotosíntesi necessita llum solar i a 2.000 m de fondària no n'hi arriba gens, de manera que ha d'obtenir la matèria i l'energia menjant restes o altres éssers vius: és heteròtrof. (Matís: al fons marí hi ha bacteris que fabriquen matèria orgànica a partir de compostos químics i no de llum, així que «autòtrof» no equival exactament a «fa fotosíntesi».)"
        },
        aeWhy: "L'AE no es limita a aplicar la regla: distingeix «autòtrof» de «fotosintètic» i reconeix que el cas té un matís. Això és exactament el que la prova valora com a raonament propi.",
        must: [
          "Has respost sí o no de forma explícita.",
          "Has dit que la fotosíntesi necessita llum.",
          "Has connectat la fondària amb l'absència de llum.",
          "Has dit quin tipus de nutrició tindrà, doncs (heteròtrofa)."
        ]
      },
      {
        id: 'w3',
        oa: 'OA3',
        source: 'Bloc 3 de la prova · Membrana i osmosi',
        minutes: 7,
        text: "Un pagès posa massa adob a l'hort i al cap de dos dies les plantes es marceixen, tot i que ha regat. Explica què ha passat a les cèl·lules de l'arrel.",
        model: {
          as: "Amb tant adob, a fora hi ha més sals que dins de les cèl·lules de l'arrel. Per osmosi l'aigua surt de les cèl·lules cap al terra i la planta es marceix.",
          ae: "L'adob és sal: en posar-ne massa, el terra queda més concentrat en sals que l'interior de les cèl·lules de l'arrel. La membrana és semipermeable —deixa passar l'aigua però controla la resta de substàncies— i per osmosi l'aigua va sempre cap al medi més concentrat, és a dir, cap a fora. Les cèl·lules perden aigua, es deshidraten i la planta es marceix. Per això regar més no ho arregla: mentre el terra segueixi més salat que la cèl·lula, l'aigua continuarà sortint; el que cal és diluir o rentar l'excés de sal."
        },
        aeWhy: "L'AE explica la propietat de la membrana que ho fa possible i respon la part del cas que l'AS deixa penjada: per quina raó regar no ho soluciona.",
        must: [
          "Has anomenat l'osmosi.",
          "Has dit en quina direcció va l'aigua i per què (cap al medi amb més sal).",
          "Has parlat de la membrana com a semipermeable.",
          "Has explicat per què regar més no salva la planta."
        ]
      },
      {
        id: 'w4',
        oa: 'OA4',
        source: 'Bloc 4 de la prova · Divisió i diferenciació',
        minutes: 7,
        text: "Totes les teves cèl·lules tenen exactament el mateix ADN. Com pot ser, doncs, que una neurona i una cèl·lula de la pell siguin tan diferents?",
        model: {
          as: "Perquè cada cèl·lula fa servir només una part dels gens. Encara que tinguin el mateix ADN, no expressen els mateixos gens i per això són diferents.",
          ae: "Perquè l'ADN és el manual sencer, però cada cèl·lula només en llegeix els capítols que li toquen: això és la diferenciació cel·lular. Amb el mateix ADN, la neurona expressa els gens que fabriquen proteïnes per transmetre senyals i la cèl·lula de la pell expressa els que fabriquen proteïnes de protecció. Gens diferents expressats → proteïnes diferents → forma i funció diferents. L'ADN no canvia; el que canvia és quina part se'n fa servir."
        },
        aeWhy: "L'AE posa la cadena completa (gens expressats → proteïnes → forma i funció), fa servir el terme «diferenciació» i deixa clar que l'ADN NO canvia, que és l'error més freqüent en aquesta pregunta.",
        must: [
          "Has dit que l'ADN és el mateix i que NO canvia.",
          "Has parlat de gens que s'expressen o es fan servir (no de gens que es perden).",
          "Has anomenat la diferenciació cel·lular.",
          "Has arribat fins a les proteïnes, no t'has quedat als gens."
        ]
      }
    ]
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
        text: "Si reguéssim una drosera amb aigua de mar, què li passaria a les cèl·lules de les arrels?",
        options: [
          "Guanyarien aigua i s'inflarien, perquè fora hi hauria més aigua disponible",
          "No els passaria res, perquè la membrana no deixa passar l'aigua en cap sentit",
          "Absorbirien la sal i la farien servir com a nutrient per créixer més",
          "Perdrien aigua cap al medi salat i la planta es marciria"
        ],
        correct: 3,
        feedback: {
          correct: "Correcte. El medi salat està molt més concentrat, així que per osmosi l'aigua surt de les cèl·lules de l'arrel: el mateix que vas veure amb l'ou en aigua molt salada.",
          wrong: "Recorda l'ou en aigua molt salada. Per osmosi l'aigua va del medi menys concentrat cap al més concentrat: on és aquí el més concentrat?"
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
