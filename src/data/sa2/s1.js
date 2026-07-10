export const sa2s1 = {
  id: "s1", saId: "sa2",
  title: "Nutrients: el combustible del cos",
  sessionNumber: 1, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s1-nutrients.jpg",

  // Repte oral curt abans d'escriure: presentació col·lectiva dels dos enigmes que pengen a la paret tota la SA.
  engageChallenge: "Mirem els dos enigmes que penjaran a la paret tota la SA: la gràfica de FC d'una corredora (per quina raó canvia tant?) i una analítica de sang amb valors alterats (per quina raó?). Avui no els podeu resoldre — al final de la SA, sí.",
  engageQuestion: "Mireu els dos enigmes a la paret. No els podeu resoldre encara. Al final de la SA, sí. Comencen avui: quin nutrient creus que és el combustible principal del corredor?",
  engageContext: "Presentació dels dos enigmes de la SA (gràfica FC Mercè + analítica sang) que quedaran físicament a la paret tota la SA. Idees prèvies nutrients: 'Quins nutrients coneixes? Diferència entre nutrient i aliment?'",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Explico, en termes de flux d'energia, per quina raó un atleta de velocitat usa sobretot hidrats i un de marató usa greixos als últims kilòmetres.",
      "Raono per quina raó la manca de ferro causa fatiga seguint la cadena causal: ferro → hemoglobina → O₂ als músculs → ATP disponible.",
      "Dissenyo un test alternatiu al de iode per detectar hidrats, especificant el control positiu, el negatiu i les variables.",
      "Argumento per quina raó el test de lugol és un test de midó, no de sucre, i quines conseqüències té per a la interpretació de resultats."
    ],
    B: [
      "Identifico els 4 macronutrients (hidrats, greixos, proteïnes, vitamines/minerals) i la seva funció principal al cos.",
      "Explico la cadena glucosa → mitocondri → ATP i per quina raó mengem hidrats com a combustible ràpid.",
      "Relaciono el ferro amb la hemoglobina i la hemoglobina amb el transport d'O₂.",
      "Interpreto el resultat del test de lugol i explico per quina raó dona fals negatiu amb la fructosa."
    ],
    C: [
      "Nomeno 3 nutrients i associo cada un a un aliment concret.",
      "Completo: «els hidrats es converteixen en _____ que va al mitocondri per fer _____».",
      "Reconec que el lugol canvia de color quan hi ha ______ i no canvia quan hi ha ______.",
      "Sé dir que el ferro serveix per fabricar _______, que porta oxigen per la sang."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Completa la taula: si el lugol canvia a blau-negre → hi ha ______. Si NO canvia → no hi ha ______. La poma dona negatiu perquè la fructosa és un sucre ______ (no un polímer) i no reacciona amb el iode.",
      challenge: "Dissenya un test diferent del de iode per detectar greixos sense paper de cuina. Defineix: (a) control positiu, (b) control negatiu, (c) variable que mesuraràs. Quines limitacions tindria el teu test?"
    },
    "2": {
      scaffold: "Fes servir el patró: «[Nutrient] serveix per a ___». Hidrats: ___·  Greixos: ___ · Proteïnes: ___ · Ferro: ___.",
      challenge: "Explica per quina raó la manca de ferro causa fatiga. Segueix la cadena completa en ordre: ferro baix → _____ → _____ → _____ → músculs amb menys energia. Connecta-ho amb l'enigma 2 de la paret."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui comencem una SA nova sobre el cos en marxa. Teniu dos enigmes a la paret que haureu de resoldre al final. Avui poseu la primera peça. Anoteu sense por — les idees prèvies no es corregeixen, es comparen al final de la SA.",
    prompts: [
      {
        kind: "write",
        text: "Quins aliments creus que necessita el teu cos per funcionar bé? Fes una llista de 5 aliments i escriu PER QUINA RAÓ creus que els necessites.",
        starter: "Crec que el meu cos necessita..."
      },
      {
        kind: "write",
        text: "Un corredor fa una cursa de 10 km. Per quina raó creus que ha de menjar hidrats abans i beure durant la cursa?",
        starter: "Crec que necessita menjar perquè..."
      }
    ]
  },

  exploreActivity: {
    what: "Escriu una hipòtesi (midó? greix?) per a cada aliment i comprova-la amb el test de iode (midó) i el test de paper (greixos).",
    who: { mode: "grup4", label: "Grups de 4" },
    time: 35,
    note: "Hipòtesi ABANS de cada test, sense excepcions. Al final: per quina raó el test de iode dona fals negatiu amb la poma?"
  },
  exploreInstructions: [
    "Hipòtesi individual (escrita): 'Creus que en un pa hi ha midó? En una ametlla, greix? Com ho comprovaries?'",
    "Test midó (iode): posa una gota de lugol sobre cada aliment → blau-negre = midó present",
    "Test greixos: frega sobre paper de cuina, aixeca al llum → taca translúcida = greix",
    "Registra els resultats a la taula de la fitxa",
    "Moment epistèmic: 'El test de iode falla amb la poma. Per quina raó?' (la poma té fructosa, no midó)"
  ],
  exploreDuration: "35 min",
  exploreMaterials: ["Lugol en comptagotes", "Paper de cuina", "Patata crua, pa, pasta, clara d'ou, rovell, poma, ametlles"],

  theoryPoints: [
    {
      id: "t5",
      apartat: "1",
      heading: "Per quina raó el ==lugol== no detecta tots els hidrats",
      text: "El ==iode== reacciona amb l'estructura helicoïdal del ==midó|o== (polímer de glucosa). La ==fructosa== (sucre simple de la poma) no té aquesta estructura → ==fals negatiu|r==. Límit del test científic.",
      type: "epistemic",
      badge: "🔬 Límit del test",
      video: "/animacions/sa2-s1-t5.mp4"
    },
    {
      id: "t0",
      apartat: "2",
      heading: "⭐ L'equació que ho explica tot",
      text: "Tot el que fareu aquestes 7 setmanes serveix per a una sola cosa: portar ==glucosa|o== (dels aliments) i ==O₂|b== (de l'aire) fins al ==mitocondri==, i treure el ==CO₂|r== i l'==aigua|b== que sobren.",
      formula: "glucosa + O₂ → CO₂ + H₂O + ATP (al mitocondri)",
      type: "keyequation",
      badge: "⭐ La peça clau de tota la SA",
      video: "/animacions/sa2-s1-t0.mp4"
    },
    { id: "t1", apartat: "2", heading: "==Hidrats de carboni== → ==glucosa|o== → ==ATP|g==", text: "Els ==hidrats== es digereixen fins a ==glucosa|o==. La glucosa entra al ==mitocondri== (connexió SA1) i produeix ==ATP|g==. Sense hidrats → sense glucosa → sense ==energia ràpida|g==.", type: "concept", video: "/animacions/sa2-s1-t1.mp4" },
    { id: "t2", apartat: "2", heading: "==Greixos== → ==energia de reserva|o== + membrana", text: "Els ==greixos== donen el ==doble d'energia|o== per gram que els hidrats, però més lentament. A més, la ==membrana cel·lular== és feta de ==fosfolípids|o== (greixos modificats) — connexió SA1.", type: "concept", video: "/animacions/sa2-s1-t2.mp4" },
    { id: "t3", apartat: "2", heading: "==Proteïnes== → ==construcció==", text: "Les ==proteïnes== es digereixen fins a ==aminoàcids|o== → s'usen per fabricar cèl·lules, ==enzims==, ==hormones==. No és el combustible principal però és imprescindible per reparar i créixer.", type: "concept", video: "/animacions/sa2-s1-t3.mp4" },
    { id: "t4", apartat: "2", heading: "==Ferro== → ==hemoglobina== (primer vincle enigma)", text: "El ==ferro== és necessari per fabricar ==hemoglobina== (la proteïna dels ==eritròcits|r== que porta ==O₂|b==). Sense ferro → menys hemoglobina → menys O₂ als músculs. Primer vincle amb l'analítica de sang, però no revelarem res més ara.", type: "concept", badge: "🔗 Enigma 2 — primera pista", video: "/animacions/sa2-s1-t4.mp4" }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s1-fitxa-A.html", B: "/fitxes/sa2-s1-fitxa-B.html", C: "/fitxes/sa2-s1-fitxa-C.html" }, teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S1 — Nutrients",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Omple l'apartat 0 — Idees prèvies del full: quins nutrients coneixes? Quina diferència hi ha entre nutrient i aliment? No es corregeix.", hints: [] },
      { apartat: "1", title: "Pràctica de laboratori", time: "25 min", phase: "explore", instruction: "Durant els tests, omple la taula de l'apartat 1 del full: resultat del test de iode (midó) i del paper (greixos) per a cada aliment.", hints: [
        "Anota la teva hipòtesi ABANS de fer cada test: després compara-la amb el resultat.",
        "Si un aliment dona un resultat que no esperaves, no l'esborris: aquest és el cas interessant per pensar-hi."
      ] },
      { apartat: "2", title: "Els 6 nutrients essencials", time: "20 min", phase: "explica", instruction: "Omple els espais en blanc de l'apartat 2 del full: cada nutrient amb la seva funció.", hints: [
        "Per a cada nutrient pensa la FUNCIÓ al cos, no només exemples d'aliments.",
        "Quin nutrient és el combustible ràpid? Quin construeix i repara? Quin forma part de la membrana cel·lular?"
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica per quina raó el corredor necessita sobretot hidrats durant la cursa. Usa la connexió glucosa → mitocondri → ATP.", hint: "Segueix la cadena: hidrats → glucosa → on va la glucosa? → què hi produeix? El múscul en cursa necessita molt d'això." },
    { id: "q2", type: "open", text: "El test de iode dona negatiu amb la poma. Significa que no té hidrats? Explica per quina raó sí o per quina raó no.", hint: "El iode només detecta un tipus d'hidrat (el midó). La poma té sucre, però del mateix tipus que detecta el test?" },
    { id: "q3", type: "multiple", text: "Quin és el nutrient que fabrica la membrana cel·lular?", options: ["Greixos (fosfolípids)", "Hidrats de carboni", "Proteïnes", "Vitamines"], correct: 0 }
  ],

  homework: {
    description: "Fotografiar els 3 productes que realment menges (no els que creus que hauries de menjar). Classifica'ls per nutrient dominant i anota si és ultraprocessat. Es defensarà oralment a S2.",
    note: "No realitzable amb IA si cal explicar-ho en veu alta.",
    deadline: "2026-09-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina, especialment l'equació central (glucosa + O₂ → ATP)",
    "Fes el test de lugol a casa: iode antisèptic marró + pa, patata, poma, ametlla",
    "Omple la fitxa S1 seccions 0–2",
    "Prepara igualment els 3 productes fotografiats — es defensarà oralment a S2",
    "Exit tiquet en paper a S2 o online aquí"
  ],
  oaLinks: ["OA1"], competencies: ["CE2", "CE1"]
}
