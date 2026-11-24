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
      "Evaluo per quina raó l'immunitat de grup és un fenomen de solidaritat col·lectiva, no individual."
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
      scaffold: "Per a cada font (article Wakefield / estudi 2019), omple la graella: Publicada en revista científica revisada per parells? (sí/no) · Mida de la mostra? (nombre de participants) · Hi ha conflicte d'interès de l'autor? (sí/no/desconegut) · Ha estat replicat per altres grups? (sí/no). Puntua cada font de 0 a 4.",
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
    "Reflexió científica: 'Un sol article, per gran que sigui la revista, mai és suficient. La ciència funciona per replicació.'"
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
      images: [
        {
          "src": "images/sa3-fotos/s3-t2.jpg",
          "caption": "Immunitat de grup: si la majoria està vacunada, el patogen no troba camí per arribar a qui no ho pot estar.",
          "credit": "Tkarcher · CC BY-SA 4.0 · Wikimedia Commons"
        }
      ],
      apartat: "2",
      heading: "==Immunitat de grup==: per quina raó TOTS hem de vacunar-nos",
      text: "Si prou persones estan immunitzades, el virus ==no pot circular|g== i protegeix fins i tot els que NO es poden vacunar (bebès <6 mesos, immunodeprimits, persones al·lèrgiques). ==Llindar d'immunitat de grup== = 1 − 1/R₀. Per a la ==grip (R₀≈2,5)|o== el llindar és 1 − 1/2,5 = ==60%|g==; per al ==xarampió (R₀≈15)|r== cal vacunar el ==93%|g== de la població. Per sota del llindar: risc de brots.",
      type: "concept",
      badge: "🤝 Salut col·lectiva"
    },
    {
      id: "t3",
      images: [
        {
          "src": "images/sa3-fotos/s3-t3.jpg",
          "caption": "La vacuna triple vírica (xarampió, galteres i rubèola), la que va ser injustament assenyalada per l'article de Wakefield.",
          "credit": "Whispyhistory · CC BY-SA 4.0 · Wikimedia Commons"
        }
      ],
      apartat: "3",
      heading: "El cas ==Wakefield== (1998): per quina raó l'article va ser retirat",
      text: "Andrew Wakefield va publicar a ==The Lancet|o== un estudi amb ==12 nens|r== que suggeria vincle entre la vacuna MMR i l'autisme. Problemes: ==mostra irrisòria (n=12)|r==, ==conflicte d'interès econòmic|r== (cobrava d'advocats anti-vacunes), ==dades manipulades|r==. El 2010, The Lancet ==va retirar l'article|r==. Wakefield va perdre la ==llicència mèdica|r==. Cap estudi posterior (milions de nens) ha trobat cap vincle.",
      type: "epistemic",
      badge: "⚠️ Enigma 2 — clau"
    },
    {
      id: "t4",
      images: [
        {
          "src": "images/sa3-fotos/s3-t4.jpg",
          "caption": "Revistes científiques: abans de publicar, altres experts revisen els articles.",
          "credit": "Andrepach · CC BY-SA 4.0 · Wikimedia Commons"
        }
      ],
      apartat: "3",
      heading: "Com avaluar una font: 6 criteris",
      text: "1. ==Qui ho signa?|o== (autor/a i credencials: és especialista en el tema?). 2. ==On es publica?|o== (revista científica revisada per parells vs blog o xarxes). 3. ==Estudis originals verificables|g== (cita estudis que pots trobar i comprovar? Un sol estudi no és suficient: cal que altres grups independents arribin al mateix resultat). 4. ==Mida de la mostra|o== (n=12 vs n=1.200.000 → la mida importa). 5. ==Conflicte d'interès|r== (qui ho diu en treu profit econòmic?). 6. ==Titular i contingut|g== (el titular diu el mateix que el cos de l'article?). Cada criteri es puntua de 0 a 2: ==més de 8 sobre 12 = font fiable|g==.",
      type: "concept",
      badge: "🔬 Avaluació de fonts"
    },
    {
      id: "t5",
      images: [
        {
          "src": "images/sa3-fotos/s3-t5.jpg",
          "caption": "Vacunació infantil al centre de salut.",
          "credit": "Shixart1985 · CC BY 2.0 · Wikimedia Commons"
        }
      ],
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
    { name: "Full de sortida — versió C (amb bastida)", url: "/fitxes/sa3-s3-exit-ticket-C.html" },
    { name: "Fitxa de la sessió · acollida (urdú)", url: "/fitxes/sa3-s3-fitxa-acollida-UR.html" },
    { name: "Fitxa de la sessió · acollida (àrab)", url: "/fitxes/sa3-s3-fitxa-acollida-AR.html" }
  ],

  fitxaUrl: { A: "/fitxes/sa3-s3-fitxa-A.html", B: "/fitxes/sa3-s3-fitxa-B.html", C: "/fitxes/sa3-s3-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa3-s3-teoria.pdf",

  fitxaGuide: {
    fitxaName: "Fitxa S3 — Vacunes: ciència o mite?",
    steps: [
      { apartat: "↺", title: "Els titulars que heu portat", time: "10 min", phase: "engage", instruction: "En parelles, ensenyeu-vos el titular que heu portat: tema, font i si d'entrada us sembla fiable. La classe en tria un, que serà l'article C de l'apartat 2.", hints: ["Si no n'has portat cap, treballa amb el del company."] },
      { apartat: "1", title: "Ronda 3: vacunem", time: "30 min", phase: "explore", instruction: "Repetim la simulació amb el 30 % i el 80 % de vacunats. Predius abans, compteu després i compares amb el llindar d'immunitat de grup (1 − 1/R₀).", hints: ["1 − 1/R₀: amb R₀ = 2,5 cal vacunar el 60 %."] },
      { apartat: "2", title: "Com funciona una vacuna", time: "15 min", phase: "explica", instruction: "Completa el mecanisme: antigen sense malaltia → memòria → resposta secundària ràpida. Per què la de la grip s'ha de repetir cada any i la del xarampió no?", hints: [] },
      { apartat: "3", title: "Ciència o mite? Avaluem fonts", time: "25 min", phase: "elabora", instruction: "Graella de 6 criteris de fiabilitat aplicada als articles A i B i al titular triat per la classe (C), i el cas Wakefield. Compara-ho amb el disseny de les nostres plaques: què teníem que ell no tenia?", hints: ["Mida de la mostra, grup control, conflicte d'interès, revisió per experts."] },
      { apartat: "4", title: "Trasplantaments", time: "10 min", phase: "elabora", instruction: "Per què el cos pot rebutjar un òrgan d'una altra persona (HLA) i per què cal prendre immunosupressors?", hints: [] },
      { apartat: "5", title: "Comencem la campanya", time: "15 min", phase: "elabora", instruction: "En grup: missatge, públic i format de la campanya. Enigma B (Wakefield): primera hipòtesi.", hints: [] },
      { apartat: "Final", title: "Full de sortida", time: "10 min", phase: "elabora", instruction: "Sol/a i sense ajuda, en un full a part. A les versions A i B, les respostes obertes van a la llibreta sense copiar l'enunciat; només s'omplen a la fitxa les taules, les frases i els esquemes (icona 📄).", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Un vídeo viral diu: «les vacunes no serveixen: el cos ja es defensa sol». Desmunta-ho amb el mecanisme d'una vacuna (antigen, memòria, resposta ràpida).", hint: "La vacuna porta l'antigen sense la malaltia → memòria → …" },
    { id: "q2", type: "open", text: "Un brot de xarampió (R₀ = 12) arriba a una ciutat amb el 90 % de la població vacunada. Calcula el llindar (1 − 1/R₀) i digues si la ciutat està protegida.", hint: "1 − 1/12 = …" },
    { id: "q3", type: "open", text: "«Un estudi amb 15 persones demostra que el suc X cura la grip.» L'autor ven el suc. Aplica dos criteris de fiabilitat: hi confiaries?", hint: "Mida de la mostra, conflicte d'interès…" }
  ],
  exitTicketNote: "Fulls de sortida individuals, sense ajuda, es recullen. Versions A i B: dos fulls per A4 (es retallen); versió C: un per pàgina, amb pistes. Qui ha faltat pot respondre-les en línia.",

  homework: { description: "Reflexió: pensa en una substància que modifica el cos o el comportament (un medicament, una beguda energètica, l'alcohol, el tabac, el cafè...). És una «droga»? Porta una raó pensada: la posarem en comú a l'inici de la S4 (5 min). No cal recerca." },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (vacunes, immunitat de grup, 6 criteris de qualitat)",
    "Aplica els 6 criteris a 1 afirmació sobre salut que trobis a les xarxes (qualsevol)",
    "Omple la fitxa S3 apartats 0–3",
    "Fes l'exit tiquet online a l'acordió de sota"
  ],
  oaLinks: ["OA1", "OA2"], competencies: ["CE2", "CE5"]
}
