// Avaluacio SA5: checklist d'estudi + test de transferencia (el terratrèmol de l'Aquila, 2009)
// Cas NOU: diferent de l'enigma de les Preses — context de risc sísmic i comunicació científica.
export const sa5Avaluacio = {
  // Assaig de prova escrita. La prova individual de SA5 encara no esta
  // fabricada; aquestes preguntes segueixen el format i el nivell d'exigencia
  // de les de SA1-SA3 i cobreixen els quatre OA de la SA.
  escrita: {
    intro:
      "Aquestes preguntes són del tipus que trobaràs a la prova. Full, bolígraf i sense apunts. A geologia la temptació és descriure; el que es valora és EXPLICAR el procés i el temps que hi ha al darrere.",
    minutes: 26,
    questions: [
      {
        id: 'w1',
        oa: 'OA1',
        source: 'Tipus de pregunta de la prova · Roques ígnies',
        minutes: 6,
        text: "Tens dues roques ígnies: una amb cristalls grans que es veuen a simple vista i una altra gairebé sense cristalls visibles. Digues quina és intrusiva i quina extrusiva, i explica per quina raó.",
        model: {
          as: "La de cristalls grans és intrusiva (granit) i la de cristalls petits és extrusiva (basalt). Els cristalls grans es formen quan el magma es refreda a poc a poc.",
          ae: "La de cristalls grans és intrusiva, tipus granit: el magma s'ha quedat atrapat en profunditat, on la roca del voltant actua d'aïllant i el refredament dura milers d'anys; els cristalls tenen temps de créixer i es veuen a simple vista. La de cristalls minúsculs és extrusiva, tipus basalt: la lava ha sortit a la superfície i s'ha refredat en hores o dies, de manera que els cristalls no han tingut temps de créixer. La mida del cristall és, doncs, un rellotge: ens informa de la VELOCITAT de refredament i, indirectament, de la profunditat on es va formar la roca."
        },
        aeWhy: "L'AE converteix la textura en una eina de lectura («la mida del cristall és un rellotge») i quantifica l'escala de temps. Això és el que la prova valora com a raonament geològic.",
        must: [
          "Has identificat quina és cada una.",
          "Has relacionat la mida del cristall amb la velocitat de refredament.",
          "Has dit on es refreda cadascuna (en profunditat / a la superfície).",
          "Has posat un exemple de roca (granit, basalt)."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: 'Tipus de pregunta de la prova · Tectònica',
        minutes: 7,
        text: "Al Pirineu hi ha terratrèmols però no volcans, i a la Garrotxa hi ha volcans sense que hi hagi cap zona de subducció. Explica les dues coses.",
        model: {
          as: "Al Pirineu hi ha terratrèmols perquè hi va haver una col·lisió entre plaques i hi queden falles actives. A la Garrotxa hi ha volcans perquè la litosfera s'està estirant i el magma pot pujar.",
          ae: "Són dos fenòmens de la mateixa història. El Pirineu es va formar per la col·lisió alpina entre la placa Ibèrica i l'Euroasiàtica: una col·lisió aixeca muntanyes i deixa un sistema de falles que encara avui es reajusten, i per això hi ha sismicitat, però en una col·lisió no s'introdueix escorça freda i hidratada a l'interior del mantell, que és el que genera magma a les zones de subducció; per això no hi ha volcans. A la Garrotxa, en canvi, un cop acabada la compressió la litosfera va entrar en extensió (rift postalpí): en estirar-se s'aprima, el mantell de sota ascendeix i es fon per descompressió, i aquest magma troba fractures per pujar. Volcanisme sense subducció, doncs, però no sense explicació."
        },
        aeWhy: "L'AE diu explícitament per què una col·lisió NO genera volcans i anomena el mecanisme de fusió per descompressió. L'AS descriu; l'AE dona la causa.",
        must: [
          "Has explicat la sismicitat del Pirineu amb la col·lisió i les falles.",
          "Has dit per què una col·lisió no produeix volcans.",
          "Has anomenat l'extensió o el rift a la Garrotxa.",
          "Has dit que el magma es genera per descompressió, no per subducció."
        ]
      },
      {
        id: 'w3',
        oa: 'OA2',
        source: 'Tipus de pregunta de la prova · Magnitud i intensitat',
        minutes: 6,
        text: "Dos terratrèmols tenen la mateixa magnitud, 6,0, però un fa molts més danys que l'altre. Explica com pot ser, distingint magnitud d'intensitat.",
        model: {
          as: "La magnitud és l'energia alliberada i és la mateixa per a tot el terratrèmol; la intensitat és l'efecte en un lloc concret i depèn de la distància, la profunditat i el tipus de terreny.",
          ae: "La magnitud mesura l'energia alliberada a l'hipocentre: és un únic valor per a tot el sisme i és una escala logarítmica, de manera que cada punt de més multiplica per uns 32 l'energia. La intensitat mesura els EFECTES en un lloc determinat i, per tant, té un valor diferent a cada població. Dos sismes de magnitud 6,0 poden fer danys molt diferents segons la profunditat de l'hipocentre —com més superficial, més destructiu—, la distància a l'epicentre, el tipus de substrat (els sòls tous amplifiquen les ones) i, sobretot, com estan construïts els edificis. Per això el risc no depèn només de la geologia: depèn també de decisions humanes."
        },
        aeWhy: "L'AE recorda que l'escala és logarítmica, explica per què el substrat importa i arriba a la idea clau de la SA: el risc té un component humà.",
        must: [
          "Has definit magnitud com a energia i intensitat com a efecte local.",
          "Has dit que la magnitud és única i la intensitat varia segons el lloc.",
          "Has donat com a mínim dos factors que modifiquen la intensitat.",
          "Has esmentat la construcció o la vulnerabilitat de les persones."
        ]
      },
      {
        id: 'w4',
        oa: 'OA3',
        source: 'Tipus de pregunta de la prova · Recursos i clima',
        minutes: 7,
        text: "El ciment és un dels materials amb més impacte climàtic del món. Explica per quina raó, i connecta-ho amb el cicle del carboni.",
        model: {
          as: "Perquè per fer ciment cal escalfar el calcari a molta temperatura i, en fer-ho, el carbonat de calci es descompon i allibera CO₂. A més cal cremar combustible per arribar a aquesta temperatura.",
          ae: "Per dos motius que se sumen. El primer és químic i inevitable: per fabricar ciment cal descarbonatar el calcari, CaCO₃ → CaO + CO₂, de manera que la mateixa reacció allibera CO₂ encara que l'energia fos neta. El segon és energètic: cal arribar a uns 1.450 °C, i escalfar el forn fins aquí crema combustibles fòssils, que n'alliberen més. Entre les dues coses el ciment representa al voltant del 8 % de les emissions globals. En termes del cicle del carboni, el calcari és un magatzem geològic: carboni que els éssers vius van retirar de l'atmosfera fa milions d'anys i que va quedar tancat en roca. Fabricar ciment el torna a l'atmosfera en minuts, és a dir, desfà en un instant un procés que va trigar una era."
        },
        aeWhy: "L'AE separa els dos orígens del CO₂ —el químic i l'energètic— i acaba amb la comparació d'escales de temps, que és la idea que travessa tota la SA.",
        must: [
          "Has dit que la pròpia reacció química allibera CO₂.",
          "Has dit que a més cal cremar combustible per escalfar.",
          "Has anomenat el calcari com a magatzem de carboni.",
          "Has comparat el temps que va trigar a formar-se amb el que triga a alliberar-se."
        ]
      }
    ]
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé identificar les tres famílies de roques (ígnies, sedimentàries, metamòrfiques) per les seves característiques observables (textura, mida de cristalls, clivatge, reacció amb àcid) i explicar el procés de formació de cada família." },
    { id: 'c2', oa: 'OA1', text: "Explicar el cicle de les roques de forma completa: magma → ígnia → erosió → sediment → sedimentaria → calor/pressió → metamòrfica → fusió → magma. Identifico en quin punt del cicle estan les roques del laboratori." },
    { id: 'c3', oa: 'OA1', text: "Distingeixo roca ígnia intrusiva (granit, cristalls grans, refredat lent en profunditat) d'extrusiva (basalt, cristalls petits, refredat ràpid a la superfície) i relaciono aquesta diferència amb la velocitat de refredament del magma." },
    { id: 'c4', oa: 'OA2', text: "Descric les 4 capes de la Terra (escorça, mantell, nucli extern, nucli intern) amb els seus materials i estats físics, i explico per quina raó la litosfera es mou per convecció del mantell." },
    { id: 'c5', oa: 'OA2', text: "Relaciono els tres tipus de límits de plaques (divergents, convergents, transformants) amb els fenòmens associats (dorsals, subducció+volcans, col·lisió+muntanyes, falles+terratrèmols) i identifico exemples reals en un mapa." },
    { id: 'c6', oa: 'OA2', text: "Explico la resolució de l'enigma: per quina raó hi ha terratrèmols al Pirineu (col·lisió alpina + falles actives heretades) i per quina raó la Garrotxa té volcans sense subducció (rift postalpí = extensió litosfèrica)." },
    { id: 'c7', oa: 'OA2', text: "Distingeixo entre magnitud (energia alliberada, logarítmica: +1 mag = 32× energia) i intensitat (efecte local; depèn de la distància, profunditat i substrat) d'un terratrèmol, i entre hipocentre (origen en profunditat) i epicentre (punt superficial més proper)." },
    { id: 'c8', oa: 'OA3', text: "Distingeixo minerals de roques, identifico els 3 principals recursos geològics de Catalunya (calcari per a ciment, pissarra pirinenca, potassa del Bages) i explico per quina raó els combustibles fòssils són no renovables a escala humana." },
    { id: 'c9', oa: 'OA3', text: "Explico per quina raó el ciment és un dels materials amb major impacte climàtic (descarbonatació: CaCO₃→CaO+CO₂ a 1.450°C, ≈8% emissions globals) i el relaciono amb el cicle del carboni geològic (connexió amb el projecte «Ens enfonsem»)." },
    { id: 'c10', oa: 'OA4', text: "Identifico el procés geològic principal d'almenys 4 indrets del paisatge de Catalunya (Montserrat, Garrotxa, Delta de l'Ebre, Pirineus, Costa Brava, Cardona) i argumento com la geologia condiciona el paisatge i la vida de les persones." }
  ],

  // Cas de transferència: el terratrèmol de l'Aquila (Itàlia, 2009) — context nou, diferent de l'enigma.
  // Cobreix OA2 (tectònica, riscos sísmics), OA3 (recursos geològics), OA4 (paisatge i riscos).
  test: {
    context:
      "El 6 d'abril de 2009 un terratrèmol de magnitud 6,3 va destruir bona part de L'Aquila, una ciutat medieval dels Apenins. L'hipocentre era molt superficial (8,8 km). Els barris fets sobre sediments de vall van quedar molt més malmesos que els que seuen sobre la roca calcària, i la reconstrucció va consumir centenars de milers de tones de ciment.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "Per quina raó hi ha terratrèmols als Apenins, segons el model de tectònica de plaques?",
        options: [
          "Perquè hi ha una dorsal oceànica enterrada que separa dues plaques cap a fora",
          "Perquè hi ha un punt calent sota la península que escalfa i trenca l'escorça",
          "Perquè és una zona interna de placa i allà l'escorça es trenca sense cap causa",
          "Perquè hi convergeixen la microplaca Adriàtica i Euràsia i les falles acumulen tensió"
        ],
        correct: 3,
        feedback: {
          correct: "Exacte. És un límit convergent continental, com el que va aixecar el Pirineu: la tensió s'acumula a les falles i s'allibera de cop.",
          wrong: "Mira el mapa de plaques d'Itàlia. Els Apenins són una serralada jove: quin tipus de límit aixeca serralades i hi concentra terratrèmols?"
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "L'Etna és un volcà de subducció i la Garrotxa, de rift. Quina diferència principal hi ha entre tots dos?",
        options: [
          "Subducció dóna magma amb molta sílice i explosiu; el rift, basalt fluid i efusiu",
          "Subducció dóna magma basàltic i efusiu; el rift, magma silícic i molt explosiu",
          "No hi ha cap diferència de magma: la perillositat depèn només de la mida del volcà",
          "La diferència és l'edat: els de rift estan extingits i els de subducció, actius"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. La placa que s'enfonsa aporta aigua i sílice: magma vistós, gasos atrapats i erupcions explosives. Al rift el mantell fon directament i dóna basalt fluid, d'erupció tranquil·la.",
          wrong: "El que decideix si una erupció és explosiva és la viscositat del magma, i la viscositat depèn de la sílice. Quin dels dos contextos n'aporta més?"
        }
      },
      {
        id: 't3',
        oa: 'OA3',
        text: "Per quina raó els barris de L'Aquila fets sobre sediments van patir molts més danys que els fets sobre calcària?",
        options: [
          "Perquè els sediments absorbeixen l'energia sísmica i la roca sòlida la transmet sencera",
          "Perquè el substrat no hi té cap paper: l'únic que compta és la distància a l'epicentre",
          "Perquè els sediments amplifiquen l'amplitud de les ones i poden arribar a liquar-se",
          "Perquè sota els sediments l'hipocentre queda més a prop de la superfície de la ciutat"
        ],
        correct: 2,
        feedback: {
          correct: "Exacte: és l'efecte sòl. En un material tou les ones van més a poc a poc però amb més amplitud, i si els sediments estan saturats d'aigua poden liquar-se i l'edifici s'enfonsa.",
          wrong: "La magnitud va ser la mateixa per a tota la ciutat, però la intensitat no. Què li passa a una ona quan passa de roca dura a material tou?"
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "Si es van fer servir 500.000 t de ciment i cada quilo n'emet 0,9 de CO₂, quantes tones de CO₂ s'han emès i què s'hi podia fer?",
        options: [
          "450.000 t; i no hi ha cap alternativa possible perquè és una zona sísmica",
          "450.000 t; i es podien fer servir fusta estructural o ciments amb menys clínquer",
          "45.000 t; i n'hi hauria prou plantant arbres per compensar-ho tot en un sol any",
          "4.500.000 t; i l'única sortida és no reconstruir i traslladar la ciutat sencera"
        ],
        correct: 1,
        feedback: {
          correct: "Correcte: 500.000 × 0,9 = 450.000 t de CO₂. La fusta contralaminada es comporta molt bé davant d'un sisme perquè és lleugera i flèxible, i els ciments amb cendres volants rebaixen el clínquer sense perdre resistència.",
          wrong: "Primer fes el càlcul: si cada quilo de ciment n'emet 0,9 de CO₂, la proporció es manté en tones. Després pensa si de debò no hi ha cap material alternatiu."
        }
      }
    ]
  }
}
