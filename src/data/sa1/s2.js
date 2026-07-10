export const sa1s2 = {
  id: "s2",
  saId: "sa1",
  title: "Com entren i surten les coses de la cèl·lula?",
  sessionNumber: 2,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s2-osmosi.png",

  // Repte oral curt abans d'escriure: la mateixa predicció, en veu alta i tots alhora.
  engageChallenge: "Mà alçada, sense pensar-ho gaire: qui creu que el vostre ou s'inflarà si el poso en aigua pura? I qui creu que s'encongirà en aigua amb molt sucre? Ara escriviu-ho.",
  engageQuestion: "Tens l'ou en vinagre a la bossa. Quin creus que serà el resultat si ara el poses en aigua amb molt sucre? I en aigua pura? Escriu la teva predicció ABANS de fer res.",
  engageContext: "Prediccions escrites individuals. No es corregeixen — es comproven amb l'experiment.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Dissenyo un experiment alternatiu per comprovar l'osmosi de forma més rigorosa que amb l'ou: controls, rèpliques i mesures quantitatives.",
      "Raono per quina raó el sèrum fisiològic ha de tenir exactament 0,9% NaCl i quines coses passaria si fos 0,5% o 2%.",
      "Explico com l'osmosi funciona als ronyons (diàlisi renal) i a les arrels de les plantes, usant el concepte de concentració relativa.",
      "Distingeixo entre el model de l'ou i la membrana cel·lular real, i argumento per quina raó el model simplifica."
    ],
    B: [
      "Explico, usant el terme osmosi, per quina raó l'ou sense closca s'infla en aigua pura i s'encongeix en aigua sucrada.",
      "Defineixo membrana semipermeable i identifico quines molècules pot o no pot creuar.",
      "Aplico la idea d'osmosi a casos reals: planta amb massa adob, sèrum fisiològic, diàlisi renal.",
      "Justifico per quina raó el vinagre era el control de l'experiment."
    ],
    C: [
      "Sé dir cap a on va l'aigua en un cas d'osmosi: cap on hi ha més sal.",
      "Reconec que l'ou s'infla en aigua pura i s'encongeix en água salada.",
      "Completo: «l'osmosi és el moviment de l'_____ a través d'una membrana».",
      "Identifico en un dibuix quan entrarà o sortirà l'aigua d'una cèl·lula."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  apartatExtras: {
    "1": {
      challenge:
        "Dissenya un experiment millor: com podries comprovar l'osmosi de forma més rigorosa que amb l'ou? Quins controls afegiries? Quantes rèpliques calen per tenir dades fiables?"
    },
    "2": {
      scaffold:
        "Completa: l'osmosi és el moviment de l'_____ a través d'una membrana _______. L'aigua va cap on hi ha _______ sal.",
      challenge:
        "El sèrum fisiològic conté exactament 0,9% NaCl. Per quina raó ha de ser exactament aquest valor i no 0,5% o 2%? Quina cosa passaria si l'injectessin a les venes amb una concentració diferent?"
    },
    "3": {
      scaffold:
        "Per a cada cas (planta, ronyons, sèrum), pregunta't primer: la concentració de fora és _____ que la de dins? Cap a on anirà l'aigua?",
      challenge:
        "Raona per quina raó un esportista que beu molta aigua pura (sense sals) durant una prova llarga pot tenir un problema greu. Quina és l'osmosi implicada i quin teixit pateix primer?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES (prediccions ABANS del lab) ─
  ideesPrevies: {
    startPoint:
      "Avui no comencem amb la teoria. Comencem amb una predicció: quin creus que serà el resultat de l'experiment? Les prediccions no es corregeixen — es comproven. Escriu el que penses ara, sense mirar res.",
    prompts: [
      {
        kind: "write",
        text: "Tens un ou sense closca en vinagre. Si ara el poses en aigua pura, què creus que li passarà? Per quina raó?",
        starter: "Crec que..."
      },
      {
        kind: "write",
        text: "I si el poses en aigua amb molt de sucre? Serà diferent del primer cas?",
        starter: "Crec que..."
      },
      {
        kind: "draw",
        text: "Dibuixa una cèl·lula i com imaginaries que entra i surt l'aigua a través de la seva membrana."
      }
    ]
  },

  exploreActivity: {
    what: "Mesura i submergeix el teu ou en 3 medis (aigua pura, aigua sucrada, vinagre) i registra els canvis a la taula de la fitxa.",
    who: { mode: "parelles", label: "Per parelles (cada parella porta el seu ou)" },
    time: 15,
    note: "Mesura ABANS de submergir l'ou en cada medi nou — sense el 'abans' no podreu demostrar cap canvi. L'osmosi de l'ou és lenta: mentre espereu que es vegin canvis, feu l'app d'osmosi d'aquesta pàgina."
  },
  exploreInstructions: [
    "Mesura i pesa l'ou (o observa si ha canviat de mida des que el vas posar en vinagre)",
    "Prepara 3 gots: (1) aigua pura, (2) aigua molt sucrada, (3) vinagre",
    "Submergeix l'ou en cada medi i observa durant 15 minuts",
    "Mentre esperes que l'ou mostri canvis visibles: fes l'app d'osmosi d'aquesta pàgina (prediccions + laboratori lliure)",
    "Registra les observacions a la taula de la fitxa",
    "Moment epistèmic: amb 20 ous de la classe, podríem publicar-ho com a investigació científica? Quins problemes tindria?"
  ],
  exploreDuration: "35 min",
  exploreMaterials: ["Ou sense closca (preparat a casa)", "3 gots", "Aigua", "Sucre", "Regla o balança"],
  appSrc: "/apps/app_osmosi.html",

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "La ==membrana semipermeable==",
      text: "La ==membrana cel·lular== deixa passar l'==aigua|b== fàcilment però no les ==molècules grans|o== (sucre, proteïnes). Això s'anomena ==semipermeabilitat==.",
      type: "concept",
      video: "/animacions/sa1-s2-t1.mp4"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "L'==osmosi==: l'aigua segueix la concentració",
      text: "L'==osmosi== és el moviment net d'==aigua|b== a través d'una ==membrana semipermeable== des d'on hi ha menys ==concentració de solut|o== fins on n'hi ha més. L'ou s'infla en ==aigua pura|b== (l'aigua entra) i s'encongeix en ==aigua sucrada|o== (l'aigua surt).",
      type: "keyequation",
      video: "/animacions/sa1-s2-t2.mp4"
    },
    {
      id: "t5",
      apartat: "2",
      heading: "Límits del model de l'ou",
      text: "L'ou té una ==membrana biològica== real però és molt diferent d'una ==membrana cel·lular==: molt més gruixuda, menys selectiva. El ==model== simplifica però és útil per visualitzar el concepte.",
      type: "epistemic",
      badge: "🔬 Límits del model",
      video: "/animacions/sa1-s2-t5.mp4"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Transferència a la vida real",
      text: "El ==sèrum fisiològic== és 'fisiològic' perquè té la mateixa concentració que les cèl·lules (==isotònic|g==): ni entra ni surt aigua. Una planta es marceix si la reguem amb massa adob (==hipertònic|o==: l'aigua surt de les arrels). Els ==ronyons== usen ==osmosi== per filtrar la sang.",
      type: "transfer",
      video: "/animacions/sa1-s2-t3.mp4"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Connexió futura",
      text: "Aquest mateix intercanvi el retrobareu als ==pulmons|b== (O₂ entra a la sang, CO₂ surt) i als ==ronyons|g== (filtren la sang) a SA2.",
      type: "preview",
      badge: "🔗 Ho veuràs a SA2",
      video: "/animacions/sa1-s2-t4.mp4"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", title: "Membrana semipermeable: l'aigua busca l'equilibri", src: "/images/sa1-osmosi-semipermeable.png", note: "L'aigua travessa la membrana cap on hi ha més sal, fins a igualar les concentracions. La sal (massa grossa) no pot passar." },
    { id: "Fig.2", apartat: "2", title: "Resposta de la cèl·lula segons el medi", src: "/images/sa1-osmosi-tres-estats.png", note: "Hipotònic (s'infla), isotònic (equilibri) i hipertònic (s'encongeix). Igual que el teu ou en aigua pura vs. aigua sucrada." },
    { id: "Fig.3", apartat: "2", title: "L'experiment de l'ou sense closca", src: "/images/sa1-ou-sense-closca.png", note: "El vinagre dissol la closca i deixa la membrana a la vista: el model amb què veuràs l'osmosi a ull nu." },
    { id: "Fig.4", apartat: "3", title: "Transferència: la planta regada amb massa adob", src: "/images/sa1-planta-marcida-sal.png", note: "Sòl molt salat (hipertònic) → l'aigua surt de les arrels → la planta es marceix. El mateix que l'ou en aigua sucrada." },
    { id: "Fig.5", apartat: "3", title: "Transferència: el sèrum fisiològic", src: "/images/sa1-serum-fisiologic.png", note: "És 'fisiològic' perquè és isotònic (0,9% NaCl): té la mateixa concentració que les cèl·lules i no les fa explotar ni encongir." },
    { id: "Fig.6", apartat: "3", title: "Transferència: la diàlisi renal", src: "/images/sa1-dialisi-renal.png", note: "Una membrana semipermeable filtra els residus (urea) de la sang. Osmosi i difusió aplicades a la medicina." }
  ],

  fitxaUrl: { A: "/fitxes/sa1-s2-fitxa-A.html", B: "/fitxes/sa1-s2-fitxa-B.html", C: "/fitxes/sa1-s2-fitxa-C.html" },
  teoriaPdfUrl: null,

  // ── GUIA DE LA FITXA (apartats reals del full imprès) ────
  fitxaGuide: {
    fitxaName: "Fitxa S2 — L'ou i l'osmosi",
    steps: [
      {
        apartat: "0",
        title: "Prediccions",
        time: "10 min",
        phase: "engage",
        instruction: "Omple l'apartat 0 — Prediccions del full ABANS de tocar res: què creus que li passarà a l'ou en cada medi? No es corregeix: es comprova.",
        hints: []
      },
      {
        apartat: "1",
        title: "Lab: l'ou sense closca",
        time: "35 min",
        phase: "explore",
        instruction: "Durant l'experiment, omple la taula de l'apartat 1 del full: mesures i observacions de cada got.",
        hints: [
          "Anota les mides ABANS i DESPRÉS: sense el 'abans' no podràs demostrar cap canvi.",
          "Si dubtes de què mesurar: diàmetre o pes, sempre amb el mateix instrument."
        ]
      },
      {
        apartat: "2",
        title: "Osmosi: l'aigua busca l'equilibri",
        time: "25 min",
        phase: "explica",
        instruction: "Amb la teoria llegida, omple l'apartat 2 del full.",
        hints: [
          "Per a cada got pregunta't: on hi ha més solut, dins o fora de l'ou? L'aigua sempre va cap a una de les dues bandes.",
          "Si l'ou s'infla, l'aigua ha entrat. Què ens diu això de la concentració de dins respecte la de fora?"
        ]
      },
      {
        apartat: "3",
        title: "L'osmosi a la vida real",
        time: "20 min",
        phase: "explica",
        instruction: "Omple l'apartat 3 del full: aplica el que has vist a l'ou a casos del cos i de les plantes.",
        hints: [
          "El que has vist a l'ou passa igual a les cèl·lules de l'arrel d'una planta regada amb massa adob.",
          "Pregunta't en cada cas: el medi de fora és més o menys concentrat que la cèl·lula?"
        ]
      }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Descriu el que li va passar al teu ou en cada medi. Explica per quina raó va canviar de mida en cada cas.",
      hint: "Per a cada medi: compara la concentració de dins de l'ou amb la de fora. Cap on viatja l'aigua?"
    },
    {
      id: "q2",
      type: "open",
      text: "Una planta es marceix si li poses massa adob. Explica per quina raó usant el concepte d'osmosi.",
      hint: "L'adob fa que el terra quedi molt concentrat. Aplica la mateixa regla que vas veure amb l'ou en aigua sucrada."
    },
    {
      id: "q3",
      type: "multiple",
      text: "El sèrum fisiològic s'injecta a les venes sense que els eritròcits explotin ni s'encongissin. Per quina raó?",
      options: [
        "Perquè té la mateixa concentració de sals que l'interior dels eritròcits (isotònic)",
        "Perquè conté sucre que protegeix les cèl·lules",
        "Perquè els eritròcits no tenen membrana",
        "Perquè el sèrum és molt fred"
      ],
      correct: 0
    }
  ],

  // Entrega addicional en aquesta sessió
  deliverables: [
    { name: "Maqueta dels nivells d'organització", note: "Entrega en aquesta sessió (llarg termini des de S1)" }
  ],

  homework: {
    description: "Llegeix el text curt sobre divisió cel·lular (disponible a Classroom) per preparar la S3.",
    deadline: "2026-09-XX"
  },

  recoveryInstructions: [
    "Pots fer l'experiment a casa: ou dur cuit en vinagre 48h (o ou cru si en tens), després posa'l en un got d'aigua pura i en un got d'aigua molt sucrada",
    "Mira l'animació d'osmosi d'aquesta pàgina per entendre el concepte",
    "Omple la fitxa S2 amb les teves observacions",
    "L'exit tiquet en paper el trobaràs a S3, o fes-lo online aquí"
  ],

  oaLinks: ["OA3"],
  competencies: ["CE2", "CE1"]
}
