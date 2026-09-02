// SA5 · Sessió 1 — «Qui viu i qui menja qui?»
// REESCRIT SENCER el 2026-09-01 des de «SA5 - Sessió 1 - SPEC» del vault.
//
// Per què es va reescriure (§0bis de la spec): l'`s1.js` anterior era un
// esborrany generat abans que existís el sistema de specs. Tenia l'esquema
// antic (sense `levelObjectives`, sense `fitxaUrls`, sense `apartatExtras`) i,
// sobretot, descrivia una SA5 DIFERENT de la del vault: 4 sessions en lloc de
// 3, l'enigma de les cotorres argentines en lloc del de les llúdrigues, i
// continguts (regla del 10%, cicle del nitrogen) que el disseny 5E del vault
// no treballa a la S1. Decisió d'Albert de l'1/09/2026: mana el vault.
//
// La web és GUIA, no full de respostes: aquí no hi ha cap camp d'escriptura
// ni cap `hint` que doni la resposta que la fitxa demana omplir.
export const sa5s1 = {
  id: "s1", saId: "sa5",
  title: "Qui viu i qui menja qui?",
  sessionNumber: 1, biome: "sa5", duration: "2h",
  engageImage: "/images/sa5-s1-lludriga-riu.jpg",

  engageQuestion: "Al riu que passa a prop de l'escola han vist llúdrigues per primera vegada en 30 anys. Una espècie que torna: algú hi guanya i algú hi perd. I la pregunta d'avui: si d'un ecosistema en traiem un sol ésser viu, passa res a la resta?",
  engageContext: "S'obre l'enigma de la unitat i es penja el cartell a la paret. IMPORTANT: avui NO es resol — es resol a la sessió 3, quan ja tindreu les eines. Després d'escriure les idees prèvies es planteja el repte del dia: sortir al pati a fer un cens de qui hi viu de debò, i tornar a l'aula a construir la xarxa de la vida amb les mans, amb fils de llana.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  // Coincideixen LITERALMENT amb la caixa 🎯 de la fitxa del mateix nivell
  // (_s1_content.py: OA_A / OA_B / OA_C).
  levelObjectives: {
    A: [
      "Estimo quina proporció de les espècies vam detectar i dic què faria canviar aquest número.",
      "Proposo una millora del model de fils i dic explícitament què perd el model a canvi.",
      "Separo amb criteris propis dues relacions que tenen el mateix signe (depredació i parasitisme).",
      "Construeixo una explicació coherent d'una diferència de massa abans que me l'expliquin.",
      "Faig una predicció sobre una espècie invasora i dic quina observació la desmentiria."
    ],
    B: [
      "Faig un cens d'un ecosistema real i n'anoto les interaccions, no només els noms.",
      "Classifico cinc relacions ecològiques dient qui hi guanya i qui hi perd.",
      "Situo un ésser viu com a productor, consumidor o descomponedor i ho justifico.",
      "Raono un efecte en cascada dos passos enllà de l'espècie que desapareix.",
      "Reconec què no pot representar el model de fils i què no ha vist el nostre cens."
    ],
    C: [
      "Sé dir qui es menja qui en un riu i al pati.",
      "Sé que un ésser viu pot ser-hi encara que no el vegi (m'ho diu el seu rastre).",
      "Sé distingir la competència, la depredació i el mutualisme.",
      "Sé dir qui fabrica el menjar, qui se'l menja i qui el recicla.",
      "Sé explicar què els passa als altres si en trec un."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "La graella de camp porta dues files ja resoltes com a exemple (una planta i un rastre) i n'has d'afegir quatre més. Després, una pregunta d'encerclar sobre la fulla mossegada.",
      challenge: "Ajunta el teu cens amb el de l'altre grup que hagi mirat la mateixa zona i calcula quina proporció del total havíeu detectat vosaltres sols. Després digues què li passaria a aquest número si haguéssiu buscat de nit o cavat deu centímetres."
    },
    "2": {
      scaffold: "Els trencaments es responen numerant l'ordre en què va caure cada fil i encerclant entre dues opcions, amb la cadena simple del riu (figura F2c) a la vista.",
      challenge: "Proposa una manera de modificar el model de fils perquè pugui representar una relació que només passa de vegades (un depredador que caça de tot i només caça la presa X quan no troba la Y) — i digues què perd el model a canvi de guanyar això."
    },
    "3": {
      scaffold: "Cada bloc comença amb imatge i càpsula «Per llegir». Es treballen tres relacions (competència, depredació, mutualisme) amb la figura F1c, i els tres papers tròfics amb banc de paraules.",
      challenge: "La depredació i el parasitisme tenen el mateix signe (+/−): dona dos criteris que les separin i un cas de la vora del riu difícil de classificar. I proposa una explicació de per quina raó hi ha molta més massa d'algues que de truites."
    },
    "4": {
      scaffold: "La xarxa del pati ve semidibuixada (figura F3): tres éssers vius ja hi són i la primera cadena de fletxes està feta. N'has d'afegir tres del vostre cens. La pregunta d'escriptura va bastida amb OBSERVO → EM PREGUNTO → CONNECTO → DEDUEIXO, i aquest cop els dos últims passos ja no porten inici de frase.",
      challenge: "Introdueix a la vostra xarxa una espècie que menja de tot i no té depredadors, prediu quina espècie del pati desapareixeria primer i digues quina observació concreta, d'aquí a un mes, et desmentiria la predicció."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Comencem una unitat nova. Escriu i dibuixa el que penses ara — no es corregeix, i el tornaràs a mirar al final per veure com ha canviat el teu pensament.",
    prompts: [
      {
        kind: "draw",
        text: "Dibuixa qui es menja qui en un riu: posa-hi almenys quatre éssers vius i uneix-los amb fletxes.",
        starter: null
      },
      {
        kind: "write",
        text: "Si d'un ecosistema en desapareix un sol ésser viu, què els passa als altres?",
        starter: null
      }
    ]
  },

  exploreInstructions: [
    "PRIMERA PART (20 min, al pati): cada grup té una zona assignada — sol, ombra, paviment, plantes o paret",
    "Protocol del cens: anomenar l'ésser viu (o posar-li un codi i una foto si no en sabeu el nom), dir de quin regne és, descriure'l i anotar les interaccions que veieu (menja de? viu sobre? competeix amb?)",
    "Mínim 5 éssers vius o rastres per grup. Els rastres compten: fulles mossegades, galeries, fongs, teranyines, excrements, plomes",
    "Moment epistèmic al camp: dos grups a la mateixa zona heu trobat coses diferents. Hem fet un cens complet? Invisible no vol dir absent",
    "SEGONA PART (25 min, a l'aula): cadascú rep una targeta d'espècie del riu i s'estiren fils de llana de la presa cap al depredador fins a teixir la xarxa sencera",
    "Trencament 1: un herbicida acaba amb totes les algues i plantes de ribera alhora. Qui ha de deixar anar el fil? I qui el deixa anar després? (l'efecte cascada es nota al braç)",
    "Trencament 2: desapareix la llúdriga, el depredador de dalt. Qui prolifera ara, i què li passa al que aquell es menja?",
    "Addició: entra el cranc de riu americà, que menja gairebé de tot. Quins fils nous cal estirar? La xarxa queda més estable o menys?",
    "Moment epistèmic: el fil vol dir «es menja», sempre i en tota quantitat. Quines relacions que només passen de vegades ignora el model?"
  ],
  exploreDuration: "45 min",
  exploreMaterials: [
    "Fitxa del teu nivell (la graella de camp és l'apartat 1) i un llapis",
    "Mòbil per fer fotos del que no sapigueu identificar",
    "Targetes d'espècie — 12 al principi (una per persona o parella); la 13a, el cranc invasor, entra a la tercera prova (full imprimible M1)",
    "Fils de llana"
  ],

  // Material físic que la sessió dona per existent.
  sessionMaterials: [
    { id: "M1", title: "Targetes d'espècie per a la xarxa de fils (13)", url: "/fitxes/sa5-s1-targetes-especies.html", who: "docent imprimeix, 3 fulls A4, es retallen. La 13a (cranc de riu americà) NO es reparteix al principi: entra a la tercera prova" },
    { id: "M2", title: "Cartell de l'enigma de les llúdrigues", url: "/fitxes/sa5-s1-cartell-enigma.html", who: "docent el penja el primer dia i el despenja a la sessió 3" },
    { id: "M3", title: "Full de sortida (nivells A i B)", url: "/fitxes/sa5-s1-full-sortida.html", who: "es reparteix als últims 7 minuts" },
    { id: "M4", title: "Full de sortida (nivell C)", url: "/fitxes/sa5-s1-full-sortida-C.html", who: "es reparteix als últims 7 minuts" }
  ],

  theoryPoints: [
    {
      id: "t1",
      apartat: "3",
      heading: "Les ==relacions ecològiques==",
      text: "Els éssers vius d'un ecosistema no van cadascun a la seva: es relacionen. Quan és entre individus de la ==mateixa espècie== són ==intraespecífiques==; entre espècies diferents, ==interespecífiques==. N'hi ha cinc tipus, i la manera de distingir-les és preguntar-se ==a qui li va bé i a qui li va malament==: ==competència|o== (als dos els va malament), ==depredació|r== (un menja, l'altre mor), ==parasitisme|r== (viu a sobre o a dins i no el mata de seguida), ==mutualisme|g== (tots dos hi guanyen) i ==comensalisme== (un hi guanya i a l'altre li és igual). Connexió amb «Defensors del cos»: un ==patogen== és una relació interespecífica, i la ==microbiota|g== que vau estudiar és mutualisme dins vostre.",
      type: "concept",
      image: "/images/sa5-s1-relacions-ecologiques.svg",
      imageCaption: "Els signes de la figura no són decoració: són la manera de classificar. Mira primer com li va a cadascun i el nom surt sol."
    },
    {
      id: "t2",
      apartat: "3",
      heading: "Qui ==fabrica==, qui ==consumeix== i qui ==recicla==",
      text: "Els ==productors|g== es fabriquen el seu propi menjar amb la llum (les plantes i les algues — és la ==fotosíntesi== de la primera unitat). Els ==consumidors== no se'l saben fabricar i se l'han de menjar ja fet (la ==respiració cel·lular== que ja coneixeu). I els ==descomponedors|g== desfan el que ha mort i el tornen a matèria mineral, ==perquè els productors el puguin reutilitzar==: no netegen el bosc, el ==reciclen==. Una ==cadena tròfica== és un camí simple; quan les cadenes es creuen, tenim una ==xarxa tròfica==, i cada esglaó és un ==nivell tròfic==.",
      type: "concept",
      image: "/images/sa5-s1-xarxa-riu.svg",
      imageCaption: "Compte amb el sentit de la fletxa: va del que és menjat cap al que menja, no al revés. Vol dir «serveix d'aliment a»."
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Per quina raó la xarxa és ==fràgil==",
      text: "Treure o afegir una espècie no afecta només els seus veïns directes: ==reorganitza tota la xarxa|o==. Això és l'==efecte cascada|r==, i és exactament el que heu sentit al braç quan els fils han començat a caure un rere l'altre. I funciona en les ==dues direccions==: una ==espècie invasora== que entra també canvia la xarxa sencera. Aquí és on torna l'enigma: el retorn de la llúdriga és ==afegir un depredador de dalt|o== — i el que això desencadena riu avall es resoldrà a la sessió 3.",
      type: "epistemic",
      badge: "🔬 Moment epistèmic"
    }
  ],

  graphicResources: [
    { id: "F0c", apartat: "1", title: "Què és un rastre (nivell C)", src: "/images/sa5-s1-rastres-c.svg", note: "Tres rastres (fulla mossegada, teranyina, forat) amb el que indica cadascun. Obre la secció del cens a la fitxa C, que era l'única sense imatge. Només nivell C." },
    { id: "F1", apartat: "3", title: "Les cinc relacions ecològiques", src: "/images/sa5-s1-relacions-ecologiques.svg", note: "Cinc files amb la notació de signes (+ hi guanya, − hi perd, 0 li és igual) i un exemple real de cadascuna. Fitxes A i B." },
    { id: "F1c", apartat: "3", title: "Tres relacions ecològiques (nivell C)", src: "/images/sa5-s1-relacions-c.svg", note: "Versió pròpia del nivell C: només competència, depredació i mutualisme, sense notació de signes i amb la definició en llenguatge planer. No es recicla la F1." },
    { id: "F2", apartat: "3", title: "La xarxa tròfica del riu", src: "/images/sa5-s1-xarxa-riu.svg", note: "Dotze nodes numerats repartits en cinc bandes de nivell tròfic, més la banda de descomponedors amb la fletxa de retorn. Les 12 targetes d'espècie (M1) reprodueixen exactament aquesta xarxa. Fitxes A i B." },
    { id: "F2c", apartat: "2", title: "Cadena simple del riu (nivell C)", src: "/images/sa5-s1-xarxa-riu-c.svg", note: "Cinc nodes en línia: alga → insecte → peix petit → truita → llúdriga, més els fongs amb la fletxa de retorn. És la cadena que el full de sortida demana recórrer. Només nivell C." },
    { id: "F3", apartat: "4", title: "La xarxa del pati a mig fer (nivell C)", src: "/images/sa5-s1-xarxa-pati-semi.svg", note: "Bastida de l'Elaborate: herba, cargol i merla ja col·locats amb la primera cadena de fletxes feta, i tres caixes de punts per omplir amb el cens propi. Només nivell C." }
  ],

  fitxaUrls: {
    A: "/fitxes/sa5-s1-fitxa-A.html",
    B: "/fitxes/sa5-s1-fitxa-B.html",
    C: "/fitxes/sa5-s1-fitxa-C.html"
  },
  teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa Sessió 1 — Qui viu i qui menja qui?",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "7 min", phase: "engage", instruction: "Apartat 0: dibuixa qui es menja qui en un riu i escriu què creus que passa si en desapareix un de sol. No es corregeix: ho compararàs al final de la unitat.", hints: [] },
      { apartat: "1", title: "El cens del pati", time: "20 min", phase: "explore", instruction: "Apartat 1: al pati, amb el teu grup i la zona que us toqui, ompliu la graella amb un mínim de cinc éssers vius o rastres. Anoteu també què hi fan, no només com es diuen.", hints: [
        "Si no en saps el nom, no t'aturis: posa-li una lletra, fes-li una foto i descriu-lo.",
        "Mira també a terra i sota les fulles: la meitat del que hi viu no és a l'altura dels ulls.",
        "Un rastre és una dada tan bona com l'animal: anota'l i digues què t'indica."
      ] },
      { apartat: "2", title: "La xarxa de fils", time: "25 min", phase: "explore", instruction: "Apartat 2: amb la targeta d'espècie al coll, estireu els fils de la presa cap al depredador. Després responeu què passa a cada trencament i a l'addició de l'espècie invasora.", hints: [
        "Quan et diguin de deixar anar el fil, fixa't en qui el deixa anar DESPRÉS que tu: aquesta és la cascada.",
        "Al trencament 2 hi ha dues coses diferents a mirar: qui es queda sense menjar i qui es queda sense qui se'l menjava. No són els mateixos.",
        "Per a la pregunta del model: pensa en una relació que depengui de la situació, no que passi sempre."
      ] },
      { apartat: "3", title: "Relacions i papers tròfics", time: "20 min", phase: "explica", instruction: "Apartat 3: treballa les relacions ecològiques amb la figura F1 (o F1c si fas el nivell C) i els papers tròfics amb la figura F2. El format concret canvia segons el teu nivell.", hints: [
        "Per classificar una relació, pregunta't primer com li va a cadascun dels dos, i el nom surt sol.",
        "A la figura F2, segueix una fletxa amb el dit i llegeix-la en veu baixa: «serveix d'aliment a».",
        "Compte amb els descomponedors: la fletxa de retorn no va a un animal, va a les plantes."
      ] },
      { apartat: "4", title: "La nostra xarxa del pati", time: "16 min", phase: "elabora", instruction: "Apartat 4: amb el cens de l'apartat 1, dibuixeu la xarxa del vostre pati i marqueu el paper de cadascun. Després traieu-ne un i escriviu la cascada com a mínim dos passos enllà.", hints: [
        "És la vostra xarxa: no hi poseu res que no hàgiu vist al pati, encara que quedi més bonic.",
        "Si un ésser viu no encaixa enlloc, deixeu-lo apart i anoteu per què: és una troballa, no un error.",
        "«Dos passos enllà» vol dir que la conseqüència ha d'arribar a algú que no tocava directament el que heu tret."
      ] },
      { apartat: "5", title: "Metacognició", time: "3 min", phase: "avalua", instruction: "Apartat 5: marca el semàfor, escriu què has sentit quan has hagut de deixar anar el fil i repassa la llista d'objectius. No es recull.", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketNote: "El full de sortida va en un FULL A PART (no és dins la fitxa), es fa individualment i sense ajuda els últims 7 minuts, i es recull. Porta les mateixes tres preguntes als tres nivells: el nivell C les té bastides (amb els mateixos quatre passos OBSERVO→EM PREGUNTO→CONNECTO→DEDUEIXO que la fitxa, i aquest cop els dos últims sense inici de frase) i el nivell A hi afegeix una quarta pregunta.",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Del pati o del riu, posa un exemple de competència, un de mutualisme i un de depredació, i digues en cada cas qui hi guanya i qui hi perd.", hint: "Pensa primer com li va a cadascun dels dos i després busca el nom." },
    { id: "q2", type: "open", text: "Si un abocament acaba amb les algues del riu (només les algues), què li acaba passant a la llúdriga? Escriu la cadena sencera, pas a pas.", hint: "La llúdriga no es menja les algues. Justament per això la pregunta té gràcia: has d'anar pas a pas." },
    { id: "q3", type: "open", text: "El cens que heu fet al pati, és complet? Dona una raó concreta per la qual ens hem pogut deixar éssers vius.", hint: "Pensa en alguna cosa que hi era i que no es podia veure en el moment ni al lloc on vau mirar." }
  ],

  homework: {
    description: "Aquesta nit, mira què sopes: tria dos aliments del plat i escriu de quin ésser viu venia cadascun i si aquell ésser viu era un productor o un consumidor. Es porta escrit a mà i es fa servir a la sessió següent per entrar al flux d'energia i al cicle de la matèria. (Opcional: si de camí a casa veus una relació ecològica, fes-li una foto.)",
    deadline: "Sessió 2"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina: les cinc relacions ecològiques, els tres papers tròfics i l'efecte cascada",
    "Mira les figures F1 (relacions) i F2 (la xarxa del riu), i segueix amb el dit la cadena algues → insecte → peix petit → truita → llúdriga",
    "Descarrega la fitxa del teu nivell. L'apartat 1 el pots fer al teu carrer, a un parc o al pati d'un bloc: el cens funciona igual en qualsevol lloc amb éssers vius",
    "Fes l'apartat 4 amb el que hagis censat tu, i porta la feina del sopar feta",
    "Passa pel despatx a fer el full de sortida abans de la sessió següent"
  ],
  oaLinks: ["OA1", "OA2"], competencies: ["CE1", "CE4", "CE6"]
}
