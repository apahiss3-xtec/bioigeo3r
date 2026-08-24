// SA4 · Sessió 2 — «Com funcionem? La biologia de la reproducció»
// REESCRIT 2026-08-24 a partir de la spec «SA4 - Sessió 2 - SPEC» del vault.
//
// Per què s'ha reescrit sencer (vegeu §0bis de la spec):
//   La versió anterior (11/07) era «Els canvis del cos» (pubertat, hormones,
//   cicle) i pertanyia a l'estructura de SA4 que la web havia derivat pel seu
//   compte. Aquella estructura feia desaparèixer la sessió de sexualitat,
//   identitat i gènere — i amb ella dos sabers oficials de 3r ([CH11] i la
//   desvinculació embrió/valoració ètica), que no es treballaven enlloc del
//   curs. El vault ([[SA4 - Estructura sessions]], disseny confirmat) desplega
//   S2 = biologia de la reproducció, i és el que s'ha fabricat.
//   Conseqüència: s3.js s'ha de reescriure com a identitat i gènere.
//
// Decisions d'aquest run:
//   · CAP `video:`. Les carpetes animacions/sa4-s1-t* parlen de pubertat i
//     hormones: existeixen, però expliquen una altra sessió. Assignar-les
//     repetiria en sentit invers l'error corregit el 23/08.
//   · Les `hints` orienten el mètode; cap no conté la resposta que la fitxa
//     demana omplir.
//   · L'exit ticket usa NOMÉS casos nous (espècies de 5 i de 6 parells, i la
//     Núria amb cicles de 25 dies): mai la Laia, la resposta de la qual és a
//     la fitxa que l'alumne es queda i té damunt la taula.
export const sa4s2 = {
  id: "s2", saId: "sa4",
  title: "Com funcionem? La biologia de la reproducció",
  sessionNumber: 2, biome: "sa4", duration: "2h",
  engageImage: "/images/sa4-s2-generacions.jpg",

  engageQuestion: "A la primera unitat vau veure que la meiosi fa cèl·lules sexuals amb la meitat de cromosomes. Per quina raó la meitat i no la mateixa quantitat? Què passaria, generació rere generació, si cada gàmeta portés les DUES còpies de cada cromosoma?",
  engageContext: "Primera resposta de la bústia: el docent porta DUES preguntes ja transcrites a màquina (mai el paper original, perquè no es reconegui cap lletra) i en respon una amb to científic i serè. No es pregunta mai qui l'ha escrita ni es comenta cap tret d'estil. La caixa continua oberta tota la unitat. Després, idees prèvies amb connexió explícita a la primera unitat: la meiosi deixa de ser un nom i passa a explicar una cosa concreta — d'on surten els gàmetes.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  // Coincideixen literalment amb la caixa 🎯 de la fitxa del mateix nivell.
  levelObjectives: {
    A: [
      "Dedueixo la fórmula del nombre de gàmetes possibles (2 elevat a n) i la verifico amb un cas.",
      "Detecto què NO mostra el model de targetes i el diagrama del cicle: critico el model, no només l'aplico.",
      "Distingeixo regularitat d'exactitud quan faig una predicció a partir de dades reals, i hi poso un marge d'error.",
      "Argumento per quina raó el dia fèrtil només es pot confirmar mirant enrere, un cop ha arribat la regla."
    ],
    B: [
      "Explico que els gàmetes es fan per meiosi i porten una sola còpia de cada cromosoma, i per quina raó això és necessari.",
      "Descric la fecundació com la unió de dos gàmetes que recompon les parelles senceres, meitat de cada progenitor.",
      "Interpreto el diagrama del cicle menstrual i n'identifico les fases.",
      "Predic quin dia ovularia una persona amb un cicle que no dura 28 dies, i escric el càlcul."
    ],
    C: [
      "Sé que un gàmeta porta una sola còpia de cada cromosoma.",
      "Sé què passa a la fecundació: dos gàmetes s'uneixen i es forma el zigot.",
      "Sé llegir el dibuix del cicle: quin dia comença i quin dia surt l'òvul.",
      "Sé que un cicle pot durar entre 21 i 35 dies i que això és normal."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "El primer intent de meiosi ja hi és resolt com a exemple, i la resposta sobre si els gàmetes són iguals es tria encerclant entre dues opcions. La frase de la fecundació es completa amb banc de paraules.",
      challenge: "Completa la sèrie (1, 2, 3 parells) fins a trobar la fórmula general, aplica-la als 23 parells humans i després digues què li falta al model de targetes perquè dos germans siguin encara més diferents del que la fórmula fa pensar."
    },
    "2": {
      scaffold: "Cada bloc comença amb imatge i càpsula 'Per llegir'. A les figures dels aparells només cal escriure el NÚMERO del marcador, no el nom; al diagrama del cicle, la primera fila de la taula ja ve resolta d'exemple i el dia de l'ovulació s'ha de trobar a la marca ② de la figura.",
      challenge: "Explica per quina raó té sentit que la trobada dels gàmetes passi a la trompa i no a l'úter, escriu tres coses de la realitat que el diagrama del cicle no mostra i, a partir de sis durades reals de cicle (33, 36, 34, 35, 38 i 34 dies), fes la millor predicció possible AMB marge d'error distingint regularitat d'exactitud."
    },
    "3": {
      scaffold: "El càlcul va desglossat (35 − 14 = ___) i les dues conclusions es trien encerclant. La pregunta d'escriptura va bastida amb OBSERVO → EM PREGUNTO → CONNECTO → DEDUEIXO.",
      challenge: "Argumenta per quina raó el dia fèrtil només es pot confirmar mirant enrere, un cop ha arribat la regla, i digues en quines condicions el model del cicle es pot fer servir per predir i en quines no."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Escriu i dibuixa el que penses ara — no es corregeix, i el tornaràs a mirar al final de la unitat.",
    prompts: [
      {
        kind: "write",
        text: "Per quina raó et sembla que un gàmeta té la meitat de cromosomes i no les dues còpies de cada un?",
        starter: "Crec que és perquè..."
      },
      {
        kind: "draw",
        text: "Dibuixa què passaria amb el nombre de cromosomes si cada gàmeta portés les dues còpies de cada cromosoma: tu, els teus fills, els teus néts.",
        starter: "Jo en tinc..., els meus fills en tindrien..."
      }
    ]
  },

  exploreInstructions: [
    "PART A — En parelles: rebeu 8 targetes-cromosoma, quatre blaves i quatre roses, numerades de l'1 al 4. La blava 1 i la rosa 1 formen un parell; les blaves són els cromosomes que van venir d'un progenitor i les roses, els de l'altre",
    "Tasca 1: formeu la cèl·lula de partida amb els quatre parells aparellats per número",
    "Tasca 2: feu una meiosi — repartiu UNA targeta de cada parell al gàmeta (quina de les dues, ho tries tu) i anoteu a la fitxa què hi ha quedat",
    "Tasca 3: repetiu-ho tres vegades més i compareu els quatre gàmetes que us han sortit",
    "Tasca 4: ajunteu les vostres quatre targetes amb les quatre d'una altra parella de treball i compteu els cromosomes del zigot: això és el que passa a la fecundació",
    "PART B — Recorregut guiat de les figures F1 (aparell femení), F2 (aparell masculí) i F4 (el cicle): cada resposta de la fitxa s'ha de LOCALITZAR a la figura, no recordar",
    "Moment epistèmic: les targetes són un model i, com tot model, simplifica. Què no mostra? (Pista per al debat: què passa dins de cada parell abans de repartir-lo.)"
  ],
  exploreDuration: "35 min (repartits dins dels apartats 1 i 2 de la fitxa, que hi afegeixen l'explicació)",
  exploreMaterials: [
    "Targetes de cromosomes — 1 joc per parella (full imprimible 'Targetes de cromosomes')",
    "Fitxa del teu nivell, amb la taula dels quatre intents i les figures F1, F2 i F4"
  ],

  // Material físic que la sessió dona per existent (comprovació transversal 'ah').
  sessionMaterials: [
    { id: "M1", title: "Targetes de cromosomes (8 targetes + plantilles de gàmeta i zigot)", url: "/fitxes/sa4-s2-targetes-cromosomes.html", who: "docent imprimeix tants jocs com parelles hi hagi: 1 joc per parella" },
    { id: "M1b", title: "Guió i solucionari del docent (targetes)", url: "/fitxes/sa4-s2-targetes-DOCENT.html", who: "NOMÉS docent. Fitxer separat del material de l'alumnat, expressament" },
    { id: "M2", title: "Preguntes de la bústia transcrites a màquina", url: null, who: "docent. Es transcriuen fora de classe: mai es llegeix el paper original" },
    { id: "M3", title: "Full de sortida (nivells A i B)", url: "/fitxes/sa4-s2-full-sortida.html", who: "es reparteix als últims 7 minuts" },
    { id: "M4", title: "Full de sortida (nivell C)", url: "/fitxes/sa4-s2-full-sortida-C.html", who: "es reparteix als últims 7 minuts" }
  ],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Els ==aparells reproductors==, en clau de funció",
      text: "No és una llista de noms per memoritzar: cada estructura respon una pregunta. ==On es fabriquen els gàmetes?== Als ==ovaris== i als ==testicles==. ==Per on viatgen?== Per les ==trompes== i pels ==conductes==. ==On es troben els dos gàmetes?== Dins la ==trompa|g==, no dins l'úter. ==On es pot implantar l'embrió?== A la ==paret de l'úter==. I una cosa que sovint sorprèn: els ovaris i els testicles fan ==dues feines alhora|o== — fabriquen gàmetes ==i== fabriquen ==hormones==, que envien per la sang. Són glàndules del sistema endocrí, com les de la unitat del cos humà.",
      type: "concept",
      image: "/images/sa4-s2-aparell-femeni.svg",
      imageCaption: "Els números del dibuix es corresponen amb la llegenda de la fitxa: ① ovari · ② trompa · ③ paret de l'úter (és aquí on s'implanta l'embrió) · ④ interior de l'úter, l'espai buit del mig · ⑤ coll de l'úter i vagina."
    },
    {
      id: "t2",
      apartat: "1",
      heading: "De la ==meiosi== al gàmeta — ve de la primera unitat",
      text: "Les teves cèl·lules tenen els cromosomes ==per parelles==: de cada un en tens ==dues còpies|o==, una que va venir del pare i una de la mare. La ==meiosi== reparteix ==un de cada parella== a cada gàmeta: el gàmeta no té parelles, té ==una sola còpia|g== de cada cromosoma. A la ==fecundació==, dos gàmetes s'uneixen i el zigot ==torna a tenir les parelles senceres|g==. Si el gàmeta portés les parelles senceres, cada generació ==doblaria|r==: 46 → 92 → 184. I com que el repartiment de cada parella es fa ==a l'atzar|p==, dos germans reben combinacions diferents: ==per això s'assemblen sense ser idèntics==.",
      type: "concept",
      image: "/images/sa4-s2-meiosi-2parells.svg",
      imageCaption: "El color diu d'on ve cada cromosoma. ② és el moment de l'atzar: les parelles es poden col·locar de dues maneres, i per això surten quatre tipus de gàmeta."
    },
    {
      id: "t3",
      apartat: "2",
      heading: "El ==cicle menstrual== és una resposta hormonal",
      text: "Unes ==hormones== fan dues coses alhora: fan ==madurar un òvul== i fan ==engruixir la paret de l'úter==, per si hi arriba un embrió. A la meitat del cicle l'òvul ==s'allibera==: és l'==ovulació==. Si no hi ha fecundació, la paret engruixida ==es desprèn|r== — això és la ==regla==, i el primer dia de la regla és el ==dia 1== del cicle següent. Atenció a la idea més estesa i més falsa: ==un cicle no dura 28 dies per a tothom|o==. En dura ==entre 21 i 35, i tots són normals|g==. El que sol ser bastant estable és el tram que va ==de l'ovulació a la regla següent: uns 14 dies==. Per tant l'ovulació ==no cau el dia 14 fix|r==: cau uns 14 dies ==abans|g== de la regla següent.",
      type: "concept",
      image: "/images/sa4-s2-cicle-menstrual.svg",
      imageCaption: "L'eix de sota són els dies. La línia lila és el gruix de la paret de l'úter: cau durant la regla (dies 1-5) i es manté gruixuda fins al final del cicle."
    }
  ],

  graphicResources: [
    { id: "F1", apartat: "2", title: "Aparell reproductor femení (esquema)", src: "/images/sa4-s2-aparell-femeni.svg", note: "Tall esquemàtic amb marcadors numerats ①-⑤. Cap paraula dins la imatge: les etiquetes en català són la llegenda numerada de la fitxa. Mateix codi F1 als tres nivells." },
    { id: "F2", apartat: "2", title: "Aparell reproductor masculí (esquema)", src: "/images/sa4-s2-aparell-masculi.svg", note: "Tall esquemàtic amb marcadors numerats ①-④, amb el mateix criteri que F1." },
    { id: "F3", apartat: "1", title: "De la cèl·lula amb dos parells als quatre tipus de gàmeta", src: "/images/sa4-s2-meiosi-2parells.svg", note: "Es dibuixen només DOS parells (no els 23 humans) perquè les quatre combinacions es puguin veure alhora. El pas ② mostra les dues alineacions possibles: és on viu l'atzar." },
    { id: "F4", apartat: "2", title: "El cicle menstrual, dia a dia", src: "/images/sa4-s2-cicle-menstrual.svg", note: "Eix de 28 dies, gruix de l'endometri, marca d'ovulació i acotació del tram ovulació→regla. És la figura amb què es resol l'enigma de la Laia: cal poder llegir-hi els dies amb precisió." },
    { id: "F5", apartat: "2", title: "De la fecundació a la implantació", src: "/images/sa4-s2-fecundacio.svg", note: "Quatre vinyetes seguides. A ③ les divisions són per mitosi: connexió explícita amb la primera unitat." }
  ],

  fitxaUrls: {
    A: "/fitxes/sa4-s2-fitxa-A.html",
    B: "/fitxes/sa4-s2-fitxa-B.html",
    C: "/fitxes/sa4-s2-fitxa-C.html"
  },
  teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa Sessió 2 — Com funcionem?",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "7 min", phase: "engage", instruction: "Apartat 0: escriu per quina raó et sembla que un gàmeta té la meitat de cromosomes i dibuixa què passaria si en portés les dues còpies durant tres generacions. No es corregeix ara.", hints: [] },
      { apartat: "1", title: "Les targetes de cromosomes", time: "26 min", phase: "explore", instruction: "Apartat 1: amb la teva parella, feu quatre meiosis seguides amb les vuit targetes, anoteu-les i després ajunteu les vostres targetes amb les d'una altra parella de treball. El format concret canvia segons el teu nivell.", hints: [
        "Al gàmeta hi ha d'anar una targeta de cada NÚMERO. Si t'hi queden dues targetes del mateix número, has separat malament un parell.",
        "Quina de les dues tries en cada parell? La que vulguis: aquesta llibertat és exactament el que representa l'atzar.",
        "Abans de comptar els cromosomes del zigot, comprova que el gàmeta de la parella del costat també en porta quatre."
      ] },
      { apartat: "2", title: "Els aparells i el cicle", time: "31 min", phase: "explica", instruction: "Apartat 2: recorre les figures F1 i F2 per respondre on es fabriquen i per on viatgen els gàmetes, i després llegeix el diagrama del cicle (F4) i la seqüència de la fecundació (F5).", hints: [
        "A les figures dels aparells, cada número del dibuix té una entrada a la llegenda de sota: busca-hi la que encaixa amb la frase.",
        "A la figura F4, l'eix de sota són els dies i la línia lila és el GRUIX de la paret: com més amunt arriba, més gruixuda és.",
        "La zona ombrejada del principi de F4 i la baixada de la línia són la mateixa cosa vista de dues maneres. Pregunta't què està passant allà."
      ] },
      { apartat: "3", title: "Prediccions: combinacions i el cas de la Laia", time: "18 min", phase: "elabora", instruction: "Apartat 3: resol l'enigma de la Laia escrivint el CÀLCUL, no només el resultat. Si la teva fitxa és de nivell B, abans hi trobaràs les combinacions de gàmetes; si és de nivell A, les combinacions ja les has fet a l'apartat 1; si és de nivell C, l'apartat 3 és només l'enigma.", hints: [
        "Per a les combinacions, comença pel cas més petit (1 parell) i ves afegint-ne un: mira què li passa al número cada vegada.",
        "Per a la Laia: rellegeix la frase del cicle que diu des d'on es compten els 14 dies. No es compten cap endavant.",
        "Comprova la teva resposta amb el cas del dibuix: si el cicle dura 28 dies, el teu mètode ha de donar el dia 14."
      ] },
      { apartat: "4", title: "Metacognició", time: "3 min", phase: "avalua", instruction: "Apartat 4: marca el semàfor, completa la frase «ara la meiosi de la primera unitat té sentit perquè…» i repassa la llista d'objectius.", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketNote: "El full de sortida va en un FULL A PART (no és dins la fitxa), es fa individualment i sense ajuda els últims 7 minuts, i es recull. Porta les mateixes tres preguntes als tres nivells; el nivell C les té bastides (amb els mateixos quatre passos OBSERVO→EM PREGUNTO→CONNECTO→DEDUEIXO que la fitxa) i el nivell A hi afegeix una quarta pregunta. Els tres casos són NOUS (una espècie de 5 parells, una de 6 parells i la Núria amb cicles de 25 dies): cap resposta no és a la fitxa, i el nivell A té un quart cas de dades irregulars. Les pistes d'aquestes preguntes NO es publiquen a la vista de l'alumnat: el full es fa sense ajuda i es recull.",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Una espècie té 10 cromosomes (5 parells) a les cèl·lules del cos. Escriu quants en tindria cada generació si el gàmeta en portés 10 en comptes de 5: l'individu, els seus fills i els seus néts. Després explica per quina raó això no passa a la realitat.", hint: null },
    { id: "q2", type: "open", text: "En una espècie imaginària, les cèl·lules del cos tenen 12 cromosomes, és a dir 6 parells. Quants cromosomes tindrà un gàmeta? I el zigot que es formi quan dos gàmetes s'uneixin? D'on ve cada meitat?", hint: null },
    { id: "q3", type: "open", text: "La Núria té cicles de 25 dies. Una aplicació del mòbil li diu que el seu dia fèrtil és el dia 14. Cap a quin dia ovularia realment? Escriu el càlcul i digues si l'aplicació encerta.", hint: null }
  ],

  homework: {
    description: "Tria UNA de les tres i escriu dues línies. (a) Pregunta a algú de casa o a un adult de confiança a quina edat va sentir a parlar per primera vegada del cicle menstrual i qui li ho va explicar. (b) Escriu on ho vas sentir tu per primera vegada. (c) Mira com ho explica una font fiable (per exemple Canal Salut) i resumeix-ho. Les tres valen igual. L'opció (a) no és delegable a cap IA ni a cap cercador: la resposta només existeix en aquella conversa.",
    deadline: "la sessió següent"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina: els aparells en clau de funció, de la meiosi al gàmeta, i el cicle menstrual",
    "Mira les figures F3 (meiosi), F4 (el cicle) i F5 (de la fecundació a la implantació)",
    "Descarrega la fitxa del teu nivell i fes els apartats 1, 2 i 3. Per a l'apartat 1 pots imprimir el full de targetes (M1) i fer les quatre meiosis tu sol/a, o dibuixar-les",
    "Passa pel despatx a fer el full de sortida abans de la sessió següent"
  ],
  oaLinks: ["OA3"], competencies: ["CE1"]
}
