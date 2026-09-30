// Material d'autoavaluació de SA2: checklist d'estudi + test de
// transferència amb un context NOU (un escalador a l'altitud, diferent
// del cas "corredor amb anèmia ferropènica" que vertebra la SA i la prova).
export const sa2Avaluacio = {
  // Assaig de prova escrita (reescrit 29/09/2026). Entrena les MATEIXES
  // habilitats i el mateix nivell que cada bloc de la prova de SA2, però amb
  // un cas nou (l'Aina, sortida en bicicleta amb calor) i preguntes noves:
  // cap pregunta ni cas de la prova es copia. Taula OA → habilitat a ESTAT.md.
  // Comprovació: python scripts-avaluacio/audita_autoavaluacio.py sa2
  escrita: {
    intro:
      "Aquestes preguntes entrenen les mateixes habilitats que la prova del cos humà, però amb un cas nou: la prova NO serà igual. Full i bolígraf, resposta sencera a mà i sense apunts. La diferència entre AS i AE la marca si fas servir les DADES i si LLIGUES els passos o només en cites un.",
    minutes: 35,
    questions: [
      {
        id: 'w1',
        oa: 'OA2',
        source: "Entrena el bloc 1 de la prova · Seguir una substància d'un aparell a un altre",
        minutes: 7,
        text: "L'Aina (14 anys) fa una sortida en bicicleta per la Via Verda un matí de juny. A cada pedalada, els músculs de les cames consumeixen oxigen. a) Descriu el camí d'una molècula d'oxigen des de l'aire fins a un mitocondri del múscul de la cama, anomenant els òrgans per on passa. b) On passa l'oxigen a la sang i per què aquell lloc està fet per fer-ho bé? c) Escriu l'equació de la respiració cel·lular i explica per quin camí surt el CO₂ que s'hi fabrica.",
        model: {
          as: "a) Nas o boca → tràquea → bronquis → pulmons (alvèols) → sang → cor → artèries → múscul → cèl·lula → mitocondri. b) Als alvèols, perquè tenen la paret molt fina i estan envoltats de capil·lars. c) Glucosa + oxigen → CO₂ + aigua + energia. El CO₂ torna per la sang fins als pulmons i surt en expirar.",
          ae: "a) Fosses nasals → faringe → laringe → tràquea → bronquis → bronquíols → alvèols. Allà l'oxigen passa a la sang i s'enganxa a l'hemoglobina dels eritròcits; la sang oxigenada va al costat esquerre del cor, que la impulsa per l'aorta i les artèries fins als capil·lars del múscul; l'oxigen surt del capil·lar, entra a la cèl·lula i arriba al mitocondri. b) Als alvèols. Són milions de bossetes que sumen una superfície enorme, tenen la paret d'una sola capa de cèl·lules i estan embolicats de capil·lars: molta superfície i poca distància fan que l'intercanvi sigui ràpid. c) Glucosa + oxigen → energia + CO₂ + aigua. El CO₂ fa el camí invers: surt de la cèl·lula a la sang, torna pel costat dret del cor fins als pulmons, passa a l'alvèol i surt amb l'aire expirat. Són tres aparells (respiratori, circulatori i la cèl·lula) treballant com una sola cadena."
        },
        aeWhy: "L'AE no fa una llista d'òrgans: explica on es fa cada canvi (alvèol, hemoglobina, capil·lar), justifica l'estructura de l'alvèol per la seva funció i tanca el cercle amb el CO₂. Tanca la porta a l'error típic «l'oxigen es respira als pulmons» (la respiració cel·lular es fa al mitocondri).",
        must: [
          "Has posat els òrgans en l'ordre correcte, fins al mitocondri.",
          "Has dit que l'intercanvi es fa als alvèols i has justificat per què (superfície, paret fina, capil·lars).",
          "Has escrit bé l'equació de la respiració cel·lular.",
          "Has explicat el camí de tornada del CO₂."
        ]
      },
      {
        id: 'w2',
        oa: 'OA1',
        source: "Entrena el bloc 2 de la prova · Interpretar una analítica amb valors de referència",
        minutes: 7,
        text: "L'Aina ha sortit sense esmorzar i ha begut molt poca aigua. Al quilòmetre 25 es mareja i la porten al CAP, on li fan una analítica. Glucosa: 62 mg/dL (normal 70–110). Urea: 51 mg/dL (normal 15–45). Creatinina: 0,7 mg/dL (normal 0,5–1,1). Hemoglobina: 13,4 g/dL (normal 12–16). a) Quins valors estan fora del rang normal? b) Quants mg/dL li falten a la glucosa per arribar al mínim? c) Explica la cadena que va de «no esmorzar» fins a «marejar-se».",
        model: {
          as: "a) La glucosa (baixa) i la urea (alta). b) 70 − 62 = 8 mg/dL. c) No ha menjat, per això té poca glucosa a la sang. Les cèl·lules no tenen prou energia i es mareja.",
          ae: "a) La glucosa, per sota (62 < 70), i la urea, per sobre (51 > 45); la creatinina i l'hemoglobina són normals. b) 70 − 62 = 8 mg/dL. c) Sense esmorzar no ha absorbit glucosa a l'intestí, i les reserves que tenia s'han gastat en 25 km de pedalar. La glucosa de la sang baixa, i les cèl·lules en reben menys. Al mitocondri, sense glucosa no hi ha respiració cel·lular i, per tant, no hi ha energia. Les primeres a notar-ho són les neurones, que gairebé només fan servir glucosa: per això el primer símptoma és el mareig. L'hemoglobina és normal, així que el problema no és el transport d'oxigen, sinó el combustible."
        },
        aeWhy: "L'AE fa servir les xifres per identificar i calcular, lliga cada pas de la cadena (intestí → sang → cèl·lula → mitocondri → energia) i fa servir un valor NORMAL per descartar una causa. Tanca la porta a l'error típic de marcar valors «que sonen malament» sense comparar-los amb el rang.",
        must: [
          "Has marcat només els dos valors fora de rang, comparant-los amb la referència.",
          "Has fet bé el càlcul (8 mg/dL).",
          "La cadena passa per la sang, la cèl·lula i el mitocondri, i acaba en l'energia.",
          "Has fet servir l'hemoglobina normal per descartar un problema d'oxigen."
        ]
      },
      {
        id: 'w3',
        oa: 'OA3',
        source: "Entrena el bloc 3 de la prova · Llegir i comparar dades de freqüència cardíaca",
        minutes: 7,
        text: "L'Aina es mesura la freqüència cardíaca (FC) amb el rellotge en la mateixa pujada. Al setembre: repòs 84 bpm, màxim 182 bpm, 3 minuts després d'acabar 150 bpm. Al desembre, després d'entrenar tres dies per setmana: repòs 70 bpm, màxim 176 bpm, 3 minuts després 110 bpm. a) En quin mes està més entrenada? Justifica-ho amb DUES dades. b) Calcula la seva FC màxima teòrica i quin percentatge n'ha fet servir al desembre. c) Per què la FC puja quan pedala?",
        model: {
          as: "a) Al desembre, perquè en repòs té les pulsacions més baixes (70) i es recupera més de pressa (110). b) 220 − 14 = 206 bpm; 176 / 206 = 85 %. c) Perquè en pedalar les cames demanen més oxigen, i per portar-l'hi cal més sang per minut.",
          ae: "a) Al desembre. En repòs baixa de 84 a 70 bpm: el cor entrenat és més fort i en cada batec impulsa més sang, així que necessita menys batecs per fer la mateixa feina. I 3 minuts després ha baixat fins a 110, en comparació amb els 150 del setembre: es recupera molt més de pressa. b) FCmàx = 220 − 14 = 206 bpm. 176 / 206 × 100 ≈ 85 %: ha fet un esforç intens, però per sota del seu màxim. c) En pedalar, els músculs fan molta més respiració cel·lular i necessiten més oxigen i glucosa, i treure més CO₂. El cor accelera per fer passar més sang per minut pels músculs i pels pulmons."
        },
        aeWhy: "L'AE no només compara xifres: explica el PER QUÈ de cada diferència (cor més fort, més sang per batec) i fa el percentatge sencer. Tanca la porta a l'error típic de pensar que «entrenat = arriba a més pulsacions» (al desembre el màxim és fins i tot més baix).",
        must: [
          "Has triat el desembre i has fet servir dues dades del text.",
          "Has explicat per què un cor entrenat batega menys en repòs.",
          "Has calculat la FCmàx (206 bpm) i el percentatge (≈ 85 %).",
          "Has lligat la pujada de la FC amb la necessitat d'oxigen dels músculs."
        ]
      },
      {
        id: 'w4',
        oa: 'OA3',
        source: "Entrena el bloc 3 de la prova · Predir un canvi en una situació nova",
        minutes: 4,
        text: "Un altre dia, l'Aina fa la mateixa pujada, però havent begut molt poca aigua i amb molta calor. Ha perdut molta aigua suant i té menys volum de sang. Prediu com seran les seves pulsacions en comparació amb les del desembre i justifica-ho.",
        model: {
          as: "Seran més altes, perquè té menys sang i el cor ha de bategar més de pressa per portar prou oxigen als músculs.",
          ae: "Seran més altes durant la pujada i trigaran més a baixar. Amb menys volum de sang, a cada batec el cor impulsa menys sang, i per tant menys oxigen, cap als músculs. Per portar-los la mateixa quantitat d'oxigen per minut, l'única sortida és bategar més vegades. A més, part de la sang ha d'anar a la pell per refredar el cos, i encara en queda menys per als músculs. El cor és el mateix de desembre: el que ha canviat és la quantitat de sang que pot moure."
        },
        aeWhy: "L'AE raona amb la sang per batec × batecs per minut, afegeix l'efecte de la calor i deixa clar que el cor no s'ha desentrenat. Tanca la porta a l'error típic de dir «puja perquè està cansada» sense cap mecanisme.",
        must: [
          "Has fet una predicció clara (més altes).",
          "Has lligat menys sang amb menys oxigen per batec.",
          "Has explicat que el cor ho compensa augmentant la freqüència."
        ]
      },
      {
        id: 'w5',
        oa: 'OA4',
        source: "Entrena el bloc 4 de la prova · Interpretar dades d'excreció i fer recomanacions",
        minutes: 7,
        text: "Torna a mirar l'analítica de l'Aina. a) Té la urea alta i la creatinina normal. Vol dir que el ronyó li funciona malament? Justifica-ho. b) Aquella nit, l'Aina beu dos litres d'aigua abans d'anar a dormir. L'endemà orina molt, i l'orina és gairebé transparent. Explica per què, fent servir l'hormona ADH. c) Fes-li dues recomanacions per a la propera sortida i justifica-les.",
        model: {
          as: "a) No, perquè la creatinina és normal; la urea alta ve de la falta d'aigua. b) Com que ha begut molta aigua, el cos fabrica menys ADH i el ronyó deixa sortir més aigua per l'orina, que queda més clara. c) Esmorzar i beure aigua durant la sortida.",
          ae: "a) Probablement no. La creatinina, que és el millor indicador de com filtra el ronyó, és normal. La urea alta s'explica per la deshidratació: amb poca aigua la sang està més concentrada i es fa menys orina, i la urea s'acumula. Si el ronyó filtrés malament, també pujaria la creatinina. b) Amb tanta aigua, la sang es dilueix; la hipòfisi ho detecta i allibera MENYS ADH. Sense ADH, el ronyó recupera poca aigua i en deixa sortir molta: l'orina és abundant i diluïda, gairebé transparent. És el cas contrari a la deshidratació, quan hi ha molta ADH i poca orina, fosca. Totes dues respostes mantenen constant l'aigua del cos (homeòstasi). c) 1) Esmorzar hidrats de carboni (pa, cereals, fruita): donen la glucosa que li va faltar i que necessita el mitocondri. 2) Beure a glops durant tota la sortida, sense esperar a tenir set: així no perd volum de sang, el cor no s'ha d'accelerar tant i el ronyó pot eliminar la urea."
        },
        aeWhy: "L'AE fa servir una dada NORMAL per descartar una causa, explica l'ADH en les dues direccions (més aigua → menys ADH) i justifica cada recomanació amb un mecanisme de la SA. Tanca la porta a l'error típic de dir que l'ADH «fa orinar» (fa el contrari: fa recuperar aigua).",
        must: [
          "Has fet servir la creatinina normal per descartar un problema de ronyó.",
          "Has explicat la urea alta amb la deshidratació.",
          "Has dit que beure molt fa baixar l'ADH i que per això l'orina és abundant i clara.",
          "Cada recomanació porta la seva justificació."
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
      "La Júlia és alpinista i passa dues setmanes en un campament a 3.800 m d'altitud. A aquesta alçada hi ha molt menys oxigen a l'aire. Els primers dies nota que s'ofega de seguida i el cor li va molt ràpid fins i tot en repòs. Després de dues setmanes, el seu cos s'ha adaptat i una analítica mostra que ha fabricat més eritròcits.",
    questions: [
      {
        id: 't1',
        oa: 'OA3',
        text: "Per quina raó els primers dies la Júlia té la freqüència cardíaca alta fins i tot en repòs?",
        options: [
          "Perquè a l'altitud fa més fred i el cor s'accelera per escalfar tot el cos",
          "Perquè la pressió baixa fa que el cor s'encongeixi i hagi de batre més sovint",
          "Perquè cada batec porta menys O₂ i el cor ho compensa",
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
          "Perquè combinen glucosa ràpida i greixos per a l'esforç llarg",
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
  },

  // Versió fàcil de l'autoavaluació (nivell C). Mateix esquema que SA1:
  // frases curtes, imatge + «Per llegir», 2 opcions plausibles, cap escriptura llarga.
  c: {
    checklist: [
      { id: 'c1', oa: 'OA2', icon: '🍞', text: "Sé que l'aliment passa a la sang a l'intestí prim." },
      { id: 'c2', oa: 'OA1', icon: '🩸', text: "Sé que els glòbuls vermells porten l'oxigen." },
      { id: 'c3', oa: 'OA3', icon: '❤️', text: "Sé que el cor batega més de pressa quan faig esport." },
      { id: 'c4', oa: 'OA4', icon: '💧', text: "Sé que el ronyó neteja la sang i fa l'orina." }
    ],
    preguntes: [
      {
        id: 'p1', oa: 'OA2',
        img: '/images/sa2-vellositats.png',
        alt: "Paret de l'intestí prim amb molts plecs petits (vellositats) plens de vasos de sang.",
        llegir: "L'intestí prim té milers de plecs petits: les vellositats. Tenen molts vasos de sang a dins.",
        text: "On passa l'aliment digerit a la sang? 🍎",
        options: ["A l'estómac", "A l'intestí prim"],
        correct: 1
      },
      {
        id: 'p2', oa: 'OA1',
        img: '/images/sa2-composicio-sang.png',
        alt: "Composició de la sang: plasma, glòbuls vermells, glòbuls blancs i plaquetes.",
        llegir: "Glòbuls vermells: porten l'oxigen. Glòbuls blancs: defensen el cos dels microbis.",
        text: "Una noia té pocs glòbuls vermells. Què li passarà?",
        options: ["Es cansarà de seguida", "Es posarà malalta sovint"],
        correct: 0
      },
      {
        id: 'p3', oa: 'OA3',
        img: '/images/sa2-cor-etiquetat.png',
        alt: "Cor amb les seves quatre cavitats i els vasos principals.",
        llegir: "El cor és una bomba 💓. Quan corres, els músculs demanen més oxigen.",
        text: "Quan puges una costa en bici 🚲, què fa el cor?",
        options: ["Batega més a poc a poc", "Batega més de pressa"],
        correct: 1
      }
    ],
    completar: {
      id: 'k1', oa: 'OA4',
      llegir: "La sang porta residus. Un òrgan la filtra i els treu del cos amb l'aigua.",
      frase: "El {0} filtra la sang i fa l'{1}.",
      respostes: ['ronyó', 'orina'],
      banc: ['cor', 'ronyó', 'suor', 'orina']
    }
  }
}
