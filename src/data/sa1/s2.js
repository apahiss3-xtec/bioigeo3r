import { lecturaS2 } from './lectura_s2.js'

export const sa1s2 = {
  id: "s2",
  saId: "sa1",
  title: "Com entren i surten les coses de la cèl·lula?",
  sessionNumber: 2,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-ou-sense-closca.png",

  // Repte oral curt abans d'escriure: la mateixa predicció, en veu alta i tots alhora.
  engageChallenge: "Mà alçada, sense pensar-ho gaire: qui creu que el vostre ou s'inflarà si el poso en aigua pura? I qui creu que s'encongirà en aigua amb molta sal? Ara escriviu-ho.",
  engageQuestion: "Tens l'ou en vinagre a la bossa. Què creus que li passarà si ara el poses en aigua amb molta sal? I en aigua pura? Escriu la teva predicció ABANS de fer res.",
  engageContext: "La teva predicció no es corregeix: es comprova. Escriu-la abans de tocar res i, al final de la sessió, mira què ha fet l'ou de veritat.",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures). Tasca 2, 09/09/2026.
  // Seqüència 5E refeta el 28/09/2026: els ous es submergeixen a l'Explora,
  // esperen durant l'Explica (app d'osmosi guiada) i els resultats es llegeixen
  // a l'Elabora. Res de dibuixar resultats ni treure conclusions abans d'hora.
  teacherNotes: "Engage 10' · Explore 25' (pesar i submergir; ous dins abans del minut 30) · Explain 30' (app d'osmosi guiada pel docent mentre els ous esperen) · Elaborate 40' (lectura de resultats, AER amb dades de la classe, casos reals) · Evaluate 15' (exit tiquet en paper + metacognició). Prediccions escrites individuals: no es corregeixen, es comproven.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Calculo la diferència de massa (final − inicial) i el percentatge de canvi, i comparo el meu ou amb la mitjana i la variabilitat de la classe.",
      "Explico amb l'osmosi, la concentració i la membrana semipermeable per què l'ou guanya o perd massa, i interpreto què ens diu el got control.",
      "Proposo una millora del disseny experimental (controls, rèpliques, temps, mesures) que faria les conclusions més sòlides.",
      "Raono per què el sèrum fisiològic ha de tenir un 0,9 % de sal i què passaria amb un 0,5 % o un 2 %, i argumento en què el model de l'ou simplifica una cèl·lula real."
    ],
    B: [
      "Peso l'ou abans i després i calculo la diferència (massa final − massa inicial), amb el signe.",
      "Explico, usant el terme osmosi, per què l'ou guanya massa en aigua pura i en perd en aigua amb molta sal.",
      "Defineixo membrana semipermeable: deixa passar l'aigua, però no deixa passar fàcilment la sal.",
      "Justifico per què el vinagre és el control i per què ens calen les dades de tota la classe.",
      "Aplico l'osmosi a casos reals: diàlisi, planta amb massa adob i sèrum fisiològic."
    ],
    C: [
      "Peso l'ou abans i després i sé si ha guanyat o ha perdut massa.",
      "Sé cap on va l'aigua en l'osmosi: cap on hi ha més sal.",
      "Reconec que l'ou s'infla en aigua pura i s'arruga en aigua amb molta sal.",
      "Completo: «l'osmosi és el moviment de l'_____ a través d'una membrana».",
      "Explico el cas de la planta amb massa sal amb el mètode OBSERVO → EM PREGUNTO → CONNECTO → DEDUEIXO."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons la versió ────────
  apartatExtras: {
    "1": {
      scaffold:
        "Què fem variar? La quantitat de sal de l'aigua de cada got. Què mesurem? La massa de l'ou. El got que no canviem (vinagre) és el control: serveix per comparar.",
      challenge:
        "Dissenya un experiment millor: com podries comprovar l'osmosi de forma més rigorosa que amb l'ou? Quins controls afegiries? Quantes rèpliques calen per tenir dades fiables?"
    },
    "2": {
      scaffold:
        "Completa: l'osmosi és el moviment de l'_____ a través d'una membrana _______. L'aigua va cap on hi ha _______ sal.",
      challenge:
        "Abans que surtin els resultats, fes una predicció amb números: quin ou creus que canviarà més de massa, el de l'aigua pura o el de la sal? Justifica-ho amb la concentració de dins i de fora de l'ou."
    },
    "3": {
      scaffold:
        "Exemple: un ou pesava 60 g i ara pesa 55 g. Diferència = 55 − 60 = −5 g. El número és negatiu: l'ou ha perdut aigua.",
      challenge:
        "Calcula el percentatge de canvi de cada ou (diferència ÷ massa inicial × 100) i compara'l amb la mitjana de la classe. Hi ha algun ou que es comporti diferent? Com ho explicaries?"
    },
    "4": {
      scaffold:
        "Per a cada cas (planta, diàlisi, sèrum), pregunta't primer: on hi ha més sal, a dins o a fora? Cap on anirà l'aigua?",
      challenge:
        "El sèrum fisiològic conté un 0,9 % de sal. Per què ha de ser aquest valor i no un 0,5 % o un 2 %? I per què un esportista que beu molta aigua pura (sense sals) durant una prova llarga pot tenir un problema greu?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES (prediccions ABANS del lab) ─
  ideesPrevies: {
    startPoint:
      "Avui no comencem amb la teoria. Comencem amb una predicció: què creus que passarà amb l'ou? Les prediccions no es corregeixen: es comproven al final de la sessió. Escriu el que penses ara, sense mirar res.",
    prompts: [
      {
        kind: "write",
        text: "Tens un ou sense closca que ha estat en vinagre. Si ara el poses en aigua pura, creus que guanyarà massa, en perdrà o quedarà igual? Per què?",
        starter: "Crec que..."
      },
      {
        kind: "write",
        text: "I si el poses en aigua amb molta sal? Serà diferent del primer cas?",
        starter: "Crec que..."
      }
    ]
  },

  exploreActivity: {
    what: "Pesa el teu ou, anota'n la massa inicial i submergeix-lo al seu got. Identifiqueu quin got és el control.",
    who: { mode: "grup3", label: "En grups de 3 (cada alumne porta el seu ou: un ou a cada got)" },
    time: 25,
    note: "Pesa ABANS de submergir: sense la massa inicial no podreu demostrar cap canvi. L'ou necessita temps per canviar: el traureu a l'apartat 3, al final de la sessió. No dibuixis ni escriguis conclusions encara."
  },
  exploreInstructions: [
    "Treu l'ou de la bossa, eixuga'l amb paper de cuina i pesa'l. Anota la massa inicial a la taula de l'apartat 1 de la fitxa.",
    "Prepareu 3 gots i etiqueteu-los: (1) aigua destil·lada, (2) aigua amb molta sal (una cullerada sopera de sal per got, ben remenada), (3) vinagre.",
    "Poseu un ou a cada got i apunteu l'hora. Des d'ara, els ous han d'esperar: no els toqueu fins a l'apartat 3.",
    "Completa el disseny de l'experiment a la fitxa: què investiguem, què fem variar, què mesurem i quin got és el control.",
    "Si et queda temps, dibuixa l'ou ABANS de submergir-lo."
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Ou sense closca (preparat a casa)", "3 gots per grup", "Aigua destil·lada", "Sal i una cullera", "Vinagre", "Balança", "Paper de cuina", "Retolador per etiquetar"],

  // App d'osmosi: a l'Explica (apartat 2), guiada pel docent mentre els ous
  // esperen. En 2 h no hi ha temps de descobrir l'osmosi per descobriment.
  appSrc: "/apps/app_osmosi.html",
  appApartat: "2",
  appNote: "Fem l'app d'osmosi tots junts, guiada pel professorat, mentre els ous esperen als gots. Abans de cada pas, digues cap on creus que anirà l'aigua.",

  // Laboratori virtual per a qui no ha portat l'ou (o ha faltat a classe).
  // A l'Explora (apartat 1): és quan es fa l'experiment.
  labVirtual: {
    apartat: "1",
    src: "/apps/app_lab_ou.html",
    icon: "🥚",
    kicker: "Laboratori virtual",
    text: "Pesa, submergeix, espera i torna a pesar tres ous virtuals. La diferència la calcules tu: massa final − massa inicial (si l'ou disminueix, surt negativa). Després copia les dades a la taula de l'apartat 1 de la fitxa.",
    button: "No has portat l'ou? Fes l'experiment virtual"
  },

  theoryPoints: [
    {
      id: "d1",
      apartat: "1",
      heading: "El disseny del nostre experiment",
      text: "==Què investiguem?== Influeix la quantitat de ==sal|o== de l'aigua en la ==massa== de l'ou? Fem variar la sal de cada got (==variable independent==) i mesurem la massa de l'ou (==variable dependent==). El got de ==vinagre== és el ==control|g==: no hi canviem res i ens serveix per comparar.",
      type: "epistemic",
      badge: "🔬 Disseny experimental"
    },
    {
      id: "t1",
      apartat: "2",
      heading: "La ==membrana semipermeable==",
      text: "La ==membrana cel·lular== deixa passar l'==aigua|b== fàcilment però no les ==molècules grans|o== (sucre, proteïnes) ni fàcilment la sal. Això s'anomena ==semipermeabilitat==.",
      type: "concept",
      video: "/animacions/sa1-s2-t1.mp4"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "L'==osmosi==: l'aigua segueix la concentració",
      text: "L'==osmosi== és el moviment net d'==aigua|b== a través d'una ==membrana semipermeable== des d'on hi ha menys ==concentració de solut|o== fins on n'hi ha més. Regla: ==l'aigua va cap on hi ha més sal==. Si fora hi ha ==aigua pura|b==, l'aigua entra; si fora hi ha ==molta sal|o==, l'aigua surt.",
      type: "keyequation",
      video: "/animacions/sa1-s2-t2.mp4"
    },
    {
      id: "r1",
      apartat: "3",
      heading: "Llegim els resultats: la ==diferència==",
      text: "==Diferència = massa final − massa inicial==. Sempre en aquest ordre. Si l'ou ha ==guanyat aigua|b==, la diferència és positiva (+). Si n'ha ==perdut|o==, és negativa (−). Compara cada ou amb el del ==control|g==: el vinagre ens diu quant canvia un ou quan no hi canviem res.",
      type: "keyequation"
    },
    {
      id: "r2",
      apartat: "3",
      heading: "Com es fa ciència de veritat: un ou no n'hi ha prou",
      text: "Un sol ou pot donar un resultat estrany (una membrana trencada, una balança mal posada). Per això posem en comú les ==dades de tota la classe== i mirem la ==mitjana==: com més ==rèpliques==, més ens podem refiar del resultat.",
      type: "epistemic",
      badge: "🔬 Com es fa ciència"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Límits del model de l'ou",
      text: "L'ou té una ==membrana biològica== real però és molt diferent d'una ==membrana cel·lular==: molt més gruixuda i menys selectiva. El ==model== simplifica, però és útil per veure el concepte a ull nu.",
      type: "epistemic",
      badge: "🔬 Límits del model",
      video: "/animacions/sa1-s2-t5.mp4"
    },
    {
      id: "t3",
      apartat: "4",
      heading: "Transferència a la vida real",
      text: "El ==sèrum fisiològic== és «fisiològic» perquè té la mateixa concentració que les cèl·lules (==isotònic|g==): ni entra ni surt aigua. Una planta es marceix si la reguem amb massa adob (==hipertònic|o==: l'aigua surt de les arrels). A la ==diàlisi==, una membrana semipermeable neteja la sang.",
      type: "transfer",
      video: "/animacions/sa1-s2-t3.mp4"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "Connexió futura",
      text: "Aquest mateix intercanvi el retrobareu als ==pulmons|b== (l'O₂ entra a la sang, el CO₂ en surt) i als ==ronyons|g== (filtren la sang) quan estudiem el cos humà.",
      type: "preview",
      badge: "🔗 Ho veuràs més endavant",
      video: "/animacions/sa1-s2-t4.mp4"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", title: "Membrana semipermeable: l'aigua busca l'equilibri", src: "/images/sa1-osmosi-semipermeable.png", note: "L'aigua travessa la membrana cap on hi ha més sal, fins a igualar les concentracions. La sal (massa grossa) no pot passar." },
    { id: "Fig.2", apartat: "2", title: "Resposta de la cèl·lula segons el medi", src: "/images/sa1-osmosi-tres-estats.png", note: "Hipotònic (s'infla), isotònic (equilibri) i hipertònic (s'encongeix). Igual que el teu ou en aigua pura o en aigua molt salada." },
    { id: "Fig.4", apartat: "4", title: "Transferència: la planta regada amb massa adob", src: "/images/sa1-planta-marcida-sal.png", note: "Sòl molt salat (hipertònic) → l'aigua surt de les arrels → la planta es marceix. El mateix que l'ou en aigua molt salada." },
    { id: "Fig.5", apartat: "4", title: "Transferència: el sèrum fisiològic", src: "/images/sa1-serum-fisiologic.png", note: "És «fisiològic» perquè és isotònic (0,9 % de sal): té la mateixa concentració que les cèl·lules i no les fa inflar ni encongir." },
    { id: "Fig.6", apartat: "4", title: "Transferència: la diàlisi renal", src: "/images/sa1-dialisi-renal.png", note: "Una membrana semipermeable filtra els residus (urea) de la sang. Osmosi i difusió aplicades a la medicina." }
  ],

  fitxaUrl: { A: "/fitxes/sa1-s2-fitxa-A.html", B: "/fitxes/sa1-s2-fitxa-B.html", C: "/fitxes/sa1-s2-fitxa-C.html" },
  teoriaPdfUrl: "/teoria/sa1-s2-teoria.pdf",

  // ── GUIA DE LA FITXA (apartats reals del full imprès) ────
  fitxaGuide: {
    fitxaName: "Fitxa de la Sessió 2 — L'ou i l'osmosi",
    steps: [
      {
        apartat: "0",
        title: "Prediccions",
        time: "10 min",
        phase: "engage",
        instruction: "Omple l'apartat 0 del full ABANS de tocar res: què creus que li passarà a l'ou en cada got? No es corregeix: es comprova al final.",
        hints: []
      },
      {
        apartat: "1",
        title: "Muntem l'experiment",
        time: "25 min",
        phase: "explore",
        instruction: "Pesa l'ou, escriu la massa inicial a la taula de l'apartat 1, submergeix-lo i completa el disseny de l'experiment. Les columnes de massa final i diferència les ompliràs a l'apartat 3.",
        hints: [
          "Pesa l'ou ABANS de posar-lo al got: sense el «abans» no podràs demostrar cap canvi.",
          "El control és el got on no canviem res respecte d'on era l'ou: quin és?"
        ]
      },
      {
        apartat: "2",
        title: "L'osmosi: per què es mou l'aigua",
        time: "30 min",
        phase: "explica",
        instruction: "Mentre els ous esperen, fes l'app d'osmosi amb el professorat i omple l'apartat 2 del full: la membrana, la regla de l'aigua i la frase per completar.",
        hints: [
          "Per a cada cas pregunta't: on hi ha més sal, a dins o a fora? L'aigua sempre va cap a una de les dues bandes.",
          "La membrana deixa passar l'aigua, però no deixa passar fàcilment la sal."
        ]
      },
      {
        apartat: "3",
        title: "Llegim els resultats",
        time: "25 min",
        phase: "elabora",
        instruction: "Treu l'ou, eixuga'l i pesa'l. Completa la taula de l'apartat 1 (massa final i diferència), dibuixa l'ou DESPRÉS i escriu l'explicació AER de l'apartat 3 amb les dades de la classe.",
        hints: [
          "Diferència = massa final − massa inicial. Si l'ou pesa menys que abans, el número és negatiu.",
          "A l'evidència de l'AER hi van els teus números, no només «s'ha inflat»."
        ]
      },
      {
        apartat: "4",
        title: "L'osmosi a la vida real",
        time: "15 min",
        phase: "elabora",
        instruction: "Omple l'apartat 4 del full: aplica el que has vist a l'ou a la diàlisi, a la planta amb massa adob i al sèrum fisiològic.",
        hints: [
          "El que has vist a l'ou passa igual a les cèl·lules de l'arrel d'una planta regada amb massa adob.",
          "Pregunta't en cada cas: el líquid de fora té més o menys sal que la cèl·lula?"
        ]
      }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Descriu què li ha passat al teu ou en cada got, amb la diferència de massa que has calculat. Explica per quina raó ha canviat, parlant del moviment de l'aigua.",
      hint: "Per a cada got: compara la sal de dins de l'ou amb la de fora. Cap on viatja l'aigua?"
    },
    {
      id: "q2",
      type: "open",
      text: "Una planta es marceix si li poses massa adob. Explica per quina raó usant el concepte d'osmosi.",
      hint: "L'adob fa que el terra quedi molt concentrat. Aplica la mateixa regla que vas veure amb l'ou en aigua molt salada."
    },
    {
      id: "q3",
      type: "multiple",
      text: "El sèrum fisiològic s'injecta a les venes sense que els glòbuls vermells s'inflin ni s'encongeixin. Per quina raó?",
      options: [
        "Perquè té la mateixa concentració de sal que l'interior dels glòbuls vermells",
        "Perquè conté sucre que protegeix les cèl·lules",
        "Perquè els glòbuls vermells no tenen membrana",
        "Perquè té molta més sal que la sang"
      ],
      correct: 0
    }
  ],

  // Entrega addicional en aquesta sessió
  deliverables: [
    { name: "Maqueta dels nivells d'organització", note: "Entrega en aquesta sessió (llarg termini des de la Sessió 1)" }
  ],

  homework: {
    description: "Llegeix la lectura sobre per què el cos fa cèl·lules noves i com es divideixen (a continuació, o a Classroom) per preparar la Sessió 3. Al començament de la Sessió 3 respondràs, a classe, un formulari de quatre preguntes sobre el que has llegit.",
    secondTask: "Grava a casa un vídeo (2-3 min) on ensenyis la teva maqueta i expliquis, un per un, els 10 nivells d'organització amb l'exemple que vas proposar (com es diu cada nivell, què és i com està fet de molts del nivell anterior). Puja'l a la tasca de Classroom abans de la Sessió 3.",
    extraTasks: [
      "Observa a casa: deixa un tros de pastanaga o d'api una estona en un got amb molta sal i mira què li passa. Anota-ho en una frase: és el mateix que ha passat a l'ou?"
    ],
    note: "El formulari es fa a classe, no a casa: llegeix-ho amb calma i, si hi ha paraules que no entens, subratlla-les.",
    // Lectura per versions: A/B (estàndard) i C (lectura fàcil). Font: SA1-celula/S2-ou-osmosi/build_lectura_s2.py
    reading: lecturaS2,
  },

  recoveryInstructions: [
    "Fes l'experiment virtual de l'ou (botó de sota): pesa els tres ous, submergeix-los, espera i torna'ls a pesar.",
    "Calcula la diferència de cada ou (massa final − massa inicial; si l'ou disminueix, surt negativa) i copia les dades a la taula de l'apartat 1 de la fitxa.",
    "Fes l'app d'osmosi de l'apartat 2 d'aquesta pàgina i omple l'apartat 2 de la fitxa.",
    "Omple els apartats 3 i 4 de la fitxa: l'explicació AER amb les teves dades i els casos reals.",
    "Si ho vols veure amb un ou de veritat: deixa un ou 48 h en vinagre i després posa'n un en aigua pura i un altre en aigua amb molta sal. Pesa'ls abans i al cap d'una hora.",
    "L'exit tiquet en paper el trobaràs a la Sessió 3, o fes-lo online aquí."
  ],
  recoveryLinks: [
    { label: "Fes l'experiment virtual de l'ou", url: "/apps/app_lab_ou.html", icon: "🥚" }
  ],

  oaLinks: ["OA3"],
  competencies: ["CE2", "CE1"]
}
