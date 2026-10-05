export const sa3s3 = {
  id: "s3", saId: "sa3",
  title: "Vacunes: ciència o mite?",
  sessionNumber: 3, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s3-vacunes.jpg",

  engageQuestion: "Un article que has vist a les xarxes diu que les vacunes causen autisme. Has preguntat a casa i alguns adults en dubten. Avui analitzareu l'article original i veureu per quina raó la revista el va retirar. Però primer: com saps si una informació científica és fiable?",
  engageContext: "Avui tindràs davant el titular de l'article de Wakefield de 1998 i un estudi del 2019 fet amb 1,2 milions de nens, i hauràs de decidir quin dels dos et mereix confiança. Però primer cal aprendre amb quins criteris es decideix això.",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures). Tasca 2, 09/09/2026.
  teacherNotes: "Posada en comú dels titulars portats de S2 (deures). Connexió amb l'enigma 2 de la paret. El docent projecta els dos documents.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Explico el mecanisme d'acció de les vacunes (antigen atenuat → resposta adaptativa → memòria) i calculo el llindar d'immunitat de grup per a una malaltia donada.",
      "Analitzo l'article de Wakefield aplicant els 6 criteris de qualitat i identifico exactament quins criteris va incomplir i com.",
      "Dissenyo una campanya de comunicació que distingeixi pseudociència de ciència real, citant evidències concretes i anticipant contrarguments.",
      "Evaluo per quina raó l'immunitat de grup és un fenomen de solidaritat col·lectiva, no individual (CE5)."
    ],
    B: [
      "Explico com funciona una vacuna (antigen → resposta adaptativa → memòria) i el concepte d'immunitat de grup.",
      "Aplico els 6 criteris de qualitat d'una font (autor/a, on es publica, estudis verificables, mida de la mostra, conflicte d'interès, titular i contingut) a tres articles.",
      "Explico per quina raó l'article de Wakefield va ser retirat i per quina raó no es pot afirmar que les vacunes causen autisme.",
      "Relaciono l'immunitat de grup amb la protecció de persones que no es poden vacunar (bebès, immunodeprimits)."
    ],
    C: [
      "Completo: la vacuna conté l'antigen _____ (feble/inactivat) → el cos fabrica _____ → i guarda _____ immunològica → si el patogen real arriba, la resposta és _____.",
      "Identifico al menys 2 problemes de l'article Wakefield (mida de la mostra, conflicte d'interès).",
      "Sé dir que si el 95% de la classe es vacuna, els que no es poden vacunar (bebès, malalts) estan protegits perquè el virus _____ (no pot circular).",
      "Reconec que una afirmació de xarxes socials NO és evidència científica i sé dir 1 criteri per distingir-les."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Per a cada font (article Wakefield / estudi 2019), omple la graella: ¿Publicada en revista científica revisada per parells? (sí/no) · ¿Mida de la mostra? (nombre de participants) · ¿Hi ha conflicte d'interès del autor? (sí/no/desconegut) · ¿Ha estat replicat per altres grups? (sí/no). Puntua cada font de 0 a 4.",
      challenge: "L'article de Wakefield va ser retirat el 2010. Però molts pares no van llegir la retractació. Quins factors psicològics expliquen per quina raó la gent recorda millor la notícia original que la correcció posterior? Proposa una estratègia de comunicació que tingui en compte aquest biaix."
    },
    "2": {
      scaffold: "Completa el diagrama de la vacuna: (1) S'injecta l'antigen _____ del patogen. (2) Els limfòcits ___ fabriquen ___. (3) Queden _____ de memòria. (4) Si arriba el patogen real → resposta secundària → _____ en hores. Relació amb SA3·S2: quin tipus d'immunitat activa la vacuna?",
      challenge: "Calcula: si el R₀ del xarampió és 15, quin percentatge de la població cal vacunar per mantenir R₀ efectiu < 1? Fórmula: llindar = 1 - 1/R₀. Per quina raó si el xarampió és quasi eradicat en un país, UNA família sense vacunar pot provocar un brot local?"
    },
    "3": {
      scaffold: "Llegeix els 6 criteris per avaluar una font. Ara aplica'ls a una afirmació que coneixes de les xarxes ('la vitamina C cura el refredat'). Criteris: autor/a i credencials, on es publica (revista científica o xarxes), estudis originals verificables, mida de la mostra (gran/petita/no diu), conflicte d'interès (el qui ho diu ven suplements?), titular que reflecteix el contingut real. Puntua cada criteri de 0 a 2: quin és el resultat?",
      challenge: "Cerca un exemple real de pseudociència en salut que no hàgem vist a classe. Aplica-hi els 6 criteris i elabora una fitxa de 'desmuntatge': l'afirmació, els criteris que falla, i l'evidència real que la contradiu. Font: PubMed o Cochrane Library."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui analitzareu fonts científiques reals. Primer, la posada en comú dels titulars que heu portat. Després treballareu per grups amb dos documents contraposats. Escriviu el que penseu ara — al final de la sessió compareu.",
    prompts: [
      {
        kind: "write",
        text: "Has vist alguna vegada una notícia sobre vacunes o medicaments que et va semblar sospitosa? Per quina raó et va semblar sospitosa? Quines pistes et van fer dubtar?",
        starter: "Una vegada vaig veure una notícia que deia... i em va semblar sospitosa perquè..."
      },
      {
        kind: "write",
        text: "Si dos articles diuen coses oposades sobre la mateixa vacuna, com decideixes a quin creure? Quins criteris fas servir (o faràs servir a partir d'avui)?",
        starter: "Per decidir a quin creure, jo miraria..."
      }
    ]
  },

  exploreInstructions: [
    "Cada grup rep el full dels tres articles (A: estudi de la vacuna de la grip; B: resum de l'article de Wakefield 1998, n=12; C: titular enganxós d'un blog)",
    "Per grups de 3: apliqueu la graella dels 6 criteris (puntuant de 0 a 2) als tres articles (10 min)",
    "Posada en comú: cada grup comparteix la puntuació i el criteri decisiu (5 min)",
    "Es revela per quina raó The Lancet va retirar l'article: conflicte d'interès econòmic + dades manipulades + mostra massa petita",
    "Moment epistèmic: 'Un sol article, per gran que sigui la revista, mai és suficient. La ciència funciona per replicació.'"
  ],
  exploreDuration: "30 min",
  exploreMaterials: ["Full dels articles A, B i C (imprès, un per grup)", "Graella dels 6 criteris (fitxa S3)"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      video: "/animacions/sa3-s3-t1.mp4",
      heading: "Com funciona una ==vacuna==: l'entrenament del SI",
      text: "La vacuna conté l'==antigen|o== del patogen en forma ==atenuada, inactivada o com a fragment|o== (no causa la malaltia). El SI respon: limfòcits B → ==anticossos|g== → cèl·lules de ==memòria|g==. Quan arriba el patogen ==real|r==, la resposta secundària és ==immediata|g== → malaltia avortada o lleu. Connexió S2: la vacuna activa la ==immunitat adaptativa|g== sense passar la malaltia.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Immunitat de grup==: per quina raó TOTS hem de vacunar-nos",
      text: "Si prou persones estan immunitzades, el virus ==no pot circular|g== i protegeix fins i tot els que NO es poden vacunar (bebès <6 mesos, immunodeprimits, persones al·lèrgiques). ==Llindar d'immunitat de grup== = 1 − 1/R₀. Per a la ==grip (R₀≈2,5)|o== el llindar és 1 − 1/2,5 = ==60%|g==; per al ==xarampió (R₀≈15)|r== cal vacunar el ==93%|g== de la població. Per sota del llindar: risc de brots.",
      type: "concept",
      badge: "🤝 CE5 — Salut col·lectiva"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "El cas ==Wakefield== (1998): per quina raó l'article va ser retirat",
      text: "Andrew Wakefield va publicar a ==The Lancet|o== un estudi amb ==12 nens|r== que suggeria vincle entre la vacuna MMR i l'autisme. Problemes: ==mostra irrisòria (n=12)|r==, ==conflicte d'interès econòmic|r== (cobrava d'advocats anti-vacunes), ==dades manipulades|r==. El 2010, The Lancet ==va retirar l'article|r==. Wakefield va perdre la ==llicència mèdica|r==. Cap estudi posterior (milions de nens) ha trobat cap vincle.",
      type: "epistemic",
      badge: "⚠️ Enigma 2 — clau"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Com avaluar una font: 6 criteris (==CE2==)",
      text: "1. ==Qui ho signa?|o== (autor/a i credencials: és especialista en el tema?). 2. ==On es publica?|o== (revista científica revisada per parells vs blog o xarxes). 3. ==Estudis originals verificables|g== (cita estudis que pots trobar i comprovar? Un sol estudi no és suficient: cal que altres grups independents arribin al mateix resultat). 4. ==Mida de la mostra|o== (n=12 vs n=1.200.000 → la mida importa). 5. ==Conflicte d'interès|r== (qui ho diu en treu profit econòmic?). 6. ==Titular i contingut|g== (el titular diu el mateix que el cos de l'article?). Cada criteri es puntua de 0 a 2: ==més de 8 sobre 12 = font fiable|g==.",
      type: "concept",
      badge: "🔬 CE2 — Avaluació de fonts"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Connexió ==enigma 2==: resolució",
      text: "L'article de Wakefield era ==pseudociència amb frau intencional|r==: mostra massa petita, conflicte d'interès, dades manipulades. La ciència real: ==estudis de milions de nens|g== (Danès 2019, n=650.000; britànic, n=498.000; etc.) == no han trobat cap vincle|g== entre la vacuna MMR i l'autisme. L'article va ser retirat perquè ==no complia els criteris bàsics de la ciència|r==.",
      type: "synthesis",
      badge: "✅ Enigma 2 — resolt parcialment"
    }
  ],

  appSrc: "/apps/app_immunitat_grup.html",
  appApartat: "2",
  appNote: "Simulador d'immunitat de grup: tria el % de vacunats i la malaltia (grip o xarampió), introdueix un cas i observa fins on arriba el contagi. Repte: troba el % mínim que protegeix els no vacunats del xarampió.",

  graphicResources: [
    { id: "G2", apartat: "2", title: "Diagrama immunitat de grup", src: "/images/sa3-g2-immunitat-grup.svg", note: "Comparativa: 0% vacunats (virus circula lliurement) vs 50% (alguns protegits) vs 95% (virus no pot circular, protegit el bebè no vacunable)." }
  ],

  sessionMaterials: [
    { name: "Articles A, B i C — versions A i B", url: "/fitxes/sa3-s3-articles.html" },
    { name: "Articles A, B i C — versió C (simplificada)", url: "/fitxes/sa3-s3-articles-C.html" },
    { name: "Full de sortida — versions A i B", url: "/fitxes/sa3-s3-exit-ticket.html" },
    { name: "Full de sortida — versió C (amb bastida)", url: "/fitxes/sa3-s3-exit-ticket-C.html" }
  ],

  fitxaUrl: { A: "/fitxes/sa3-s3-fitxa-A.html", B: "/fitxes/sa3-s3-fitxa-B.html", C: "/fitxes/sa3-s3-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa3-s3-teoria.pdf",

  fitxaGuide: {
    fitxaName: "Fitxa S3 — Vacunes: ciència o mite?",
    steps: [
      { apartat: "0", title: "Posada en comú dels deures i idees prèvies", time: "10 min", phase: "engage", instruction: "Primer, posada en comú dels titulars que has portat de S2 (5 min). Després, apartat 0: escriu què és una vacuna (què conté i què li fa al cos) i com es poden protegir les persones que no es poden vacunar. Ho compararàs al final de la SA.", hints: [] },
      { apartat: "1", title: "Observar i avaluar fonts", time: "30 min", phase: "explore", instruction: "Apartat 1: part A, torna a observar les plaques de Petri 48 h després i anota si ha sortit el que esperaves; part B, llegeix els tres articles (A, B i C) i puntua cada criteri de 0 a 2 (suma de més de 8 = font fiable). Pensa si amb una mostra de 12 persones es poden treure conclusions fiables.", hints: [
        "Mira primer qui és l'autor/a, on s'ha publicat i quants casos té l'estudi.",
        "Pregunta't qui hi podria guanyar alguna cosa (conflicte d'interès)."
      ] },
      { apartat: "2", title: "Com funcionen les vacunes", time: "20 min", phase: "explica", instruction: "Apartat 2: completa el camí d'una vacuna (antigen → cèl·lules de memòria → resposta ràpida) i calcula el llindar d'immunitat de grup per al xarampió amb la fórmula 1 − 1/R₀. Després comprova-ho amb el simulador: posa el xarampió, prova diferents % de vacunats amb «Simula 100 brots» i busca el % mínim on cada persona contagiosa en contagia menys d'1. Coincideix amb el teu càlcul?", hints: [
        "Una vacuna ensenya el cos a fabricar el «pany» abans que arribi la «clau» perillosa.",
        "Llindar = 1 − 1/R₀. Amb calculadora: 1 − 1/15 = 0,93 → 93 %."
      ] },
      { apartat: "3", title: "Donació d'òrgans i resolució de l'enigma", time: "20 min", phase: "explica", instruction: "Apartat 3: explica per què cal compatibilitat HLA en una donació d'òrgans, escriu la resposta científica a l'enigma B amb les dades d'avui (12 nens vs més d'1.200.000) i esbossa el missatge d'una campanya per a una família que dubta.", hints: [
        "Els antígens HLA del donant i del receptor han d'encaixar, com el model clau-pany.",
        "Escriu la resposta en una frase i digues per què es pot confiar en les dades."
      ] },
      { apartat: "Final", title: "Full de sortida i metacognició", time: "13 min", phase: "elabora", instruction: "Full de sortida (10 min): sol/a i sense ajuda, tres preguntes de cas; el lliures a la professora. Després, metacognició (3 min): torna als objectius del principi, marca el que has après i apunta què et continues preguntant.", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Un vídeo viral diu: «les vacunes no serveixen: el cos ja es defensa sol». Fes servir el mecanisme d'una vacuna (antigen, memòria, resposta ràpida) per desmuntar aquesta afirmació.", hint: "Vacuna → antigen sense malaltia → anticossos + memòria → resposta ràpida si arriba el patogen real." },
    { id: "q2", type: "open", text: "Un brot de xarampió (R₀ = 12) arriba a una ciutat on el 90 % de la població està vacunada. Calcula el llindar d'immunitat de grup (1 − 1/R₀) i digues si la ciutat està protegida. Justifica-ho.", hint: "Llindar = 1 − 1/12 ≈ 0,92 → 92 %. 90 % és inferior: el brot encara es podria estendre." },
    { id: "q3", type: "open", text: "Et passen aquest missatge: «Un estudi amb 15 persones demostra que el suc X cura la grip». L'autor és l'empresari que ven el suc. Aplica dos criteris de fiabilitat d'una font i digues si hi confiaries.", hint: "Criteris: mostra (15 és molt petita), conflicte d'interès (ven el producte), on es publica (un blog no és una revista científica), estudis originals verificables (n'hi ha?)." }
  ],
  exitTicketNote: "Avaluació formativa. Criteri avaluat: 2.2 (OA2). Les tres preguntes són de cas i es responen sol/a i sense ajuda. Es fa en un full a part: /fitxes/sa3-s3-exit-ticket.html (versions A i B) i /fitxes/sa3-s3-exit-ticket-C.html (versió C, amb bastida). Qui ha faltat pot respondre-les en línia.",

  homework: { description: "Reflexió: pensa en una substància que modifica el cos o el comportament (un medicament, una beguda energètica, l'alcohol, el tabac, el cafè...). A S4 hauràs de dir per quina raó creus que és o no és una «droga». No cal recerca: cal pensar-hi." },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (vacunes, immunitat de grup, 6 criteris de qualitat)",
    "Aplica els 6 criteris a 1 afirmació sobre salut que trobis a les xarxes (qualsevol)",
    "Omple la fitxa S3 apartats 0–3",
    "Fes l'exit tiquet online a l'acordió de sota"
  ],
  oaLinks: ["OA1", "OA2"], competencies: ["CE2", "CE5"]
}
