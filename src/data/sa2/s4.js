export const sa2s4 = {
  id: "s4", saId: "sa2",
  title: "El cor per dins",
  sessionNumber: 4, biome: "sa2", duration: "2h",
  guiaPerApartats: true,
  engageImage: "/images/sa2-s4-disseccio.jpg",

  // Repte oral curt: pregunta oberta que es resol a l'apartat 5 de la fitxa.
  engageChallenge: "Per quina raó el cor té 4 cavitats i no 2? Per quina raó no es pot barrejar la sang rica en oxigen amb la sang pobra en oxigen? No cal que ho responguis ara: ho resoldrem a l'apartat 5.",
  engageQuestion: "Avui obriràs un cor de debò amb les teves mans. Què t'esperes trobar-hi a dins?",
  engageContext: "Abans de tocar-lo faràs la teva predicció a l'apartat 1 de la fitxa. Al final la compararàs amb el cor real.",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures). Tasca 2, 09/09/2026.
  teacherNotes: "Apartat 0: repàs individual de les sessions 2 i 3 (8 min). Predicció individual a l'inici de l'apartat 1 (3 min), que es compara amb l'observació real al final. Presentació del cor real i normes de seguretat. Si hi ha temps al tancament, debat: usar models animals en ciència és èticament acceptable? On són els límits?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Dedueixo, a partir de les pressions dels dos ventricles, cap a quin costat passa la sang per un forat al septe (CIV) i per quina raó el pacient es cansa en esforç PERÒ no es posa cianòtic.",
      "Explico per quina raó les cèl·lules del miocardi necessiten molts mitocondris i com l'anèmia les afecta específicament.",
      "Argumento per quina raó Harvey va poder deduir la circulació sense microscopi, 30 anys ABANS que es veiessin els capil·lars.",
      "Analitzo un cas clínic cardiovascular relacionant el símptoma amb l'estructura anatòmica afectada (ventricle, vàlvula o coronària)."
    ],
    B: [
      "Explico per quina raó calen 4 cavitats al cor per mantenir pressions separades als dos circuits.",
      "Descric la funció de les artèries coronàries i per quina raó un infart (obstrucció coronària) és una emergència.",
      "Relaciono el gruix del ventricle esquerre amb la pressió que ha de generar per a la gran circulació.",
      "Vinculo l'anèmia del Marc amb un major esforç del miocardi, usant el que vam veure de la cèl·lula (mitocondris)."
    ],
    C: [
      "Nomeno les 4 cavitats del cor i el seu paper: les de dalt _______ i les de baix _______.",
      "Completo: «les artèries coronàries porten _______ al _______ perquè és un múscul que necessita _______».",
      "Associo infart = obstrucció de _______ → el miocardi no rep _______ → mort de cèl·lules.",
      "Reconec en el diagrama del cor quin ventricle té la paret més gruixuda i per quina raó."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Les coronàries envolten el cor com una corona (d'aquí el nom). Completa: les coronàries porten _______ al _______ (el múscul del cor). Si s'obstrueixen → el miocardi no rep _______ → les cèl·lules moren. Això és un _______.",
      challenge: "Harvey va demostrar la circulació SENSE veure els capil·lars. Com? Usant matemàtiques. Aplica el seu mètode: si el cor de porc que teniu batega 90 vegades per minut i cada batec expulsa 40 mL, en 1 hora quants litres bombejaria? Un porc té uns 3 L de sang al cos. Quina conclusió n'extreus?"
    },
    "2": {
      scaffold: "Comença per dalt i continua per baix: posa una etiqueta de color a cada cambra que trobis i només després compta-les. Els noms són al vocabulari de l'apartat 1 de la teva fitxa."
    },
    "3": {
      scaffold: "Completa: el ventricle DRET bombeja sang cap als _______ (distància: petita). El ventricle ESQUERRE bombeja cap a _______ (distància: gran). Per tant, la paret del ventricle _______ ha de ser més gruixuda. I recorda que el miocardi és un múscul que mai para: les seves cèl·lules necessiten moltíssim _______ (el porta l'hemoglobina) per fabricar _______ als mitocondris.",
      challenge: "A la teva fitxa, després d'aquest apartat hi ha l'★ Ampliació: compara el cor de diferents animals i dissenya com mesurar de debò el gruix de les parets. Comença-la dins d'aquests 20 min i acaba-la a casa. I per raonar més: si el Marc tingués 0,5 g/dL d'hemoglobina (cas extrem), quin efecte tindria sobre la freqüència cardíaca en repòs? I sobre la pressió arterial?"
    },
    "4": {
      scaffold: "Per explicar el cas, segueix la cadena: què falla al cor → què deixa d'arribar → a quines cèl·lules → per quina raó es nota fent esforç i no en repòs.",
      challenge: "Si has triat l'Arnau: el ventricle esquerre genera uns 120 mmHg i el dret uns 25 mmHg. Cap a quin costat passa la sang pel forat? Quin circuit rep, doncs, més sang del que li toca? Explica per quina raó es cansa en esforç i, en canvi, la sang que surt cap al cos no porta menys oxigen."
    },
    "5": {
      scaffold: "Per escriure la resposta, pots començar així: «El cor té 4 cavitats i no 2 perquè…». Fes servir aquestes paraules: septe, pressió, pulmons, cos.",
      challenge: "A la teva fitxa, aquest apartat porta el número 6. Quan responguis la pregunta del principi, argumenta-ho amb una dada de pressió i una de distància."
    }
  },

  // ── APARTAT 0 · REPÀS (sessions 2 i 3) ────────────────────
  repas: {
    prompts: [
      { text: "Sessió 2. La glucosa que absorbeix l'intestí prim passa a la sang. A través de quin vas tan fi hi entra?" },
      { text: "Sessió 3. Quina cèl·lula de la sang transporta l'oxigen, i quina proteïna amb ferro fa aquesta feina?" },
      { text: "Sessió 3. La circulació és doble. On va la sang a cada volta, i què li passa a l'oxigen en cadascuna?" },
      { text: "L'analítica del Marc Fontana: hemoglobina 9,2 g/dL (normal: 13,5–17,5). Per quina raó es cansa abans d'hora, tot i menjar bé?" }
    ],
    note: "Primer de memòria. Després comprova-ho a les teves fitxes de les sessions 2 i 3."
  },

  exploreActivity: {
    what: "Dissecció guiada d'un cor de porc o de xai: primer per fora, després els dos talls i les cavitats, i al final la comparació de les dues parets. Cada apartat de la fitxa té les seves preguntes.",
    who: { mode: "grup4", label: "Grups de 4 (un cor per grup)" },
    time: 70,
    note: "Si no vols participar-hi directament: fes la pràctica al laboratori virtual del portal, amb la mateixa fitxa. No es penalitza."
  },
  exploreInstructions: [
    "Apartat 1 — Per fora: localitza els vasos grans i les coronàries, i prem el cor amb el dit. No el tallis encara.",
    "Apartat 2 — Per dins: fes els dos talls, un a cada costat del solc, obre'l com un llibre i posa una etiqueta a cada cavitat que trobis. Busca el septe i les vàlvules.",
    "Apartat 3 — Les dues parets: toca la paret dels dos ventricles i compara-les."
  ],
  exploreDuration: "70 min",
  exploreMaterials: ["Cor de porc o de xai (1 per grup)", "Safata de dissecció, guants, pinces", "Tisores de punta rodona o bisturí", "4 etiquetes de colors, paper de cuina"],

  theoryPoints: [
    { id: "t5", images: [{"src":"images/sa2-fotos/s4-t5.jpg","caption":"Il·lustració de Harvey (1628): prement les venes del braç va demostrar que la sang circula en un sol sentit.","credit":"University of Liverpool Faculty of Health &amp; Life Science · CC BY-SA 2.0 · Wikimedia Commons"}], apartat: "1", heading: "Harvey (1628): la demostració matemàtica", text: "Harvey va deduir la ==circulació== sense microscopi, únicament amb ==càlculs de volum==. La matemàtica com a eina científica, 30 anys abans de veure els ==capil·lars==.", type: "epistemic", badge: "🔬 Com funciona la ciència" },
    { id: "t1", apartat: "5", heading: "Per quina raó calen ==4 cavitats==", text: "==Petita circulació|b== (pulmons): ==pressió baixa== → no trenca els ==alvèols==. ==Gran circulació|o== (cos): ==pressió alta== → arriba al peu. Calen dues bombes separades. El ==septe== impedeix que es barregin.", type: "concept", viz: "cor-pressions" },
    { id: "t2", apartat: "5", heading: "Arquitectura del ==cor==", text: "4 cavitats = ==2 aurícules== (reben) + ==2 ventricles== (bomben). ==Ventricle esquerre==: paret ==3× més gruixuda|o== perquè ha de bombar a tot el cos (pressió alta). ==Ventricle dret==: paret prima, pressió baixa cap als pulmons.", type: "concept", viz: "cor-cavitats" },
    { id: "t3", apartat: "5", heading: "El cor necessita la seva pròpia sang", text: "Les ==artèries coronàries|o== porten sang oxigenada al ==múscul cardíac (miocardi)==. Un ==infart|r== és l'==obstrucció d'una coronària|r== → el miocardi no rep O₂ → ==mort cel·lular|r==. Per quina raó és tan greu: el cor no pot aturar-se.", type: "concept", video: "/animacions/sa2-s4-t3.mp4" },
    { id: "t4", images: [{"src":"images/sa2-fotos/s4-t4.jpg","caption":"Múscul cardíac al microscopi: fibres ramificades i plenes de mitocondris, que mai no paren.","credit":"Alexander G. Cheroske · CC BY-SA 4.0 · Wikimedia Commons"}], apartat: "3", heading: "Connexió amb la cèl·lula: ==miocardi== i ==mitocondris==", text: "Les cèl·lules del ==miocardi== són musculars i contenen molts ==mitocondris== → necessiten molt ==ATP|g== → molt ==O₂|b== → per quina raó el cor es ressent tant amb l'==anèmia|r==.", type: "transfer", badge: "🔗 Connexió amb la cèl·lula" }
  ],

  // Figures de la fitxa B que NO es publiquen al web: cor_exterior_MUT, coronaries_MUT i valvules_MUT
  // (làmina d'atles retocada i dibuixos de tercers amb rètols esborrats, procedència sense documentar).
  // Si la docent confirma els drets: copiar a /images/ i descomentar.
  // { id: "Fig.3", apartat: "1", before: true, title: "El cor per fora", src: "/images/sa2-s4-cor-exterior.png", caption: "Cor vist per davant. Els 4 números marquen els vasos grans que entren i surten del cor." },
  // { id: "Fig.4", apartat: "1", title: "Les artèries del cor", src: "/images/sa2-s4-coronaries.png", caption: "Esquema del cor per fora: mira els vasos que hi corren per damunt." },
  // { id: "Fig.5", apartat: "2", title: "Com funciona una vàlvula", src: "/images/sa2-s4-valvules.png", caption: "Una vàlvula oberta i una de tancada. Fixa't en què canvia entre tots dos dibuixos." },
  graphicResources: [
    { id: "Fig.2", apartat: "2", before: true, title: "On farem els dos talls", src: "/images/sa2-s4-tall-ventricles.png", caption: "Cor de debò vist per davant. Les dues línies de punts marquen els dos talls: un per a cada ventricle. Fixa't que cap passa just per sobre del solc de greix.", note: "Procedència de la foto sense documentar: la docent ha de confirmar-ne els drets." },
    { id: "Fig.6", apartat: "2", title: "El cor mut", src: "/images/sa2-cor-mut.png", caption: "Un cor obert, sense noms. Compara'l amb el que tens a la safata: hi reconeixes les mateixes cambres?" },
    { id: "Fig.0", apartat: "5", inViz: "t1", title: "La doble circulació", src: "/images/sa2-circulacio-doble.png", note: "Petita circulació i gran circulació. Surt dins l'interactiu del punt de teoria, després que l'alumnat hagi contestat." },
    { id: "Fig.1", apartat: "5", inViz: "t2", title: "El cor humà etiquetat (secció)", src: "/images/sa2-cor-etiquetat.png", note: "Dona totes les respostes: només a l'apartat 5, dins l'interactiu del punt de teoria." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s4-fitxa-A.html", B: "/fitxes/sa2-s4-fitxa-B.html", C: "/fitxes/sa2-s4-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa2-s4-teoria.pdf",

  sessionMaterials: [
    { id: "fitxaAcollidaUR", title: "Fitxa de la sessió · acollida (urdú)", url: "/fitxes/sa2-s4-fitxa-acollida-UR.html", who: "alumnat d'acollida: mateixos apartats que la classe" },
    { id: "fitxaAcollidaAR", title: "Fitxa de la sessió · acollida (àrab)", url: "/fitxes/sa2-s4-fitxa-acollida-AR.html", who: "alumnat d'acollida: mateixos apartats que la classe" },
    { id: "sortida", title: "Exit tiquet (versions A i B)", url: "/fitxes/sa2-s4-exit-ticket.html", who: "per al final de la sessió" },
    { id: "sortidaC", title: "Exit tiquet (versió C)", url: "/fitxes/sa2-s4-exit-ticket-C.html", who: "per al final de la sessió" },
    { id: "labVirtual", title: "Laboratori virtual (si has faltat a la pràctica)", url: "/labs/sa2/lab_s4_disseccio.html", who: "per fer a casa si no vas poder fer la pràctica" }
  ],

  fitxaGuide: {
    fitxaName: "Fitxa de la sessió 4 — Dissecció de cor",
    steps: [
      { apartat: "—", title: "Formulari de comprensió de la lectura", time: "5 min", phase: "engage", instruction: "Abans de començar la fitxa, fes el formulari de comprensió (Google Forms) de la lectura de la sessió 4 que havies de llegir a casa.", hints: [] },
      { apartat: "0", title: "Repàs — la sang, les dues voltes i el Marc", time: "8 min", phase: "engage", instruction: "Sol o sola i sense mirar res, respon les preguntes de l'apartat 0 de la fitxa. Quan acabis, comprova-ho amb les teves fitxes de les sessions 2 i 3.", hints: [] },
      { apartat: "1", title: "Observació exterior", time: "15 min", phase: "explore", explora: true, instruction: "Primer, sol o sola i sense tocar el cor (3 min), fes la predicció de la fitxa: dibuixa el cor per dins tal com te l'imagines i respon les preguntes. No es corregeix. Després, en grups de 4, mireu el cor per fora: escriu el nom dels 4 vasos grans a la llegenda de la foto de la fitxa, mira l'esquema de les coronàries i respon les preguntes ①, ② i ③.", hints: [
        "Vasos grans: mira quins tenen la paret més gruixuda i per on pots ficar-hi el dit cap endins.",
        "Coronàries: la paret del cor és molt gruixuda. Es pot alimentar tota només amb la sang que passa per dins?"
      ] },
      { apartat: "2", title: "Obrim el cor — les cavitats per dins", time: "35 min", phase: "explore", instruction: "En grups de 4. Llegiu TOT el requadre de material i de com fer el tall abans de començar. Feu els dos talls, poseu una etiqueta a cada cavitat i responeu les preguntes ①, ② i ③ de la fitxa. Llegiu el text del so «lub-dub» i, al final, dibuixa el cor obert amb els noms de totes les cavitats que hi trobis.", hints: [
        "Si no trobes on tallar: busca la ratlla de greix que baixa en diagonal per davant. Els talls van a banda i banda, mai a sobre.",
        "Septe: passa-hi el dit. Imagina què passaria a cada costat si hi hagués un forat.",
        "Vàlvules: mou-les amb les pinces en els dos sentits. En quin sentit s'obren?"
      ] },
      { apartat: "3", title: "Dues bombes en un sol cor", time: "20 min", phase: "explore", instruction: "Individual. Toca la paret dels dos ventricles i respon la pregunta ① abans de llegir res més. Després llegeix el requadre «Ara comprova-ho», respon la pregunta ② i posa els números 1-2-3-4 per ordenar les dues voltes de la sang.", hints: [
        "Pensa fins on ha d'arribar la sang de cada ventricle.",
        "Per ordenar les voltes, comença allà on la sang arriba al cor pobra en oxigen."
      ] },
      { apartat: "4", title: "Cas clínic — quan el cor falla", time: "15 min", phase: "elabora", instruction: "En parelles. Trieu UN dels dos casos de la fitxa (l'Arnau o la Nadia) i responeu només aquell: explica el mecanisme, no el símptoma.", hints: [
        "Connecta el problema del cas amb el que has vist disseccionant: gruix de paret, vàlvules, septe o coronàries.",
        "Compara què necessita el cos en repòs i què necessita fent esforç."
      ] },
      { apartat: "5", title: "Posem-ho en comú — es resol el repte del principi", time: "10 min + 7 min de full de sortida", phase: "elabora", instruction: "Tota la classe. Un portaveu de cada grup diu una cosa que ha vist al cor i que no s'esperava. Després escriu a la fitxa la resposta de la classe a la pregunta del principi: per quina raó el cor té 4 cavitats i no 2? Compara el dibuix de l'apartat 1 (el cor imaginat) amb el de l'apartat 2 (el cor real), marca els objectius i fes el full de sortida. Els punts de teoria d'aquí sota, llegeix-los després d'haver escrit la teva resposta.", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Per quina raó el ventricle esquerre té la paret molt més gruixuda que el dret? Explica la connexió amb la doble circulació.", hint: "Pensa fins on ha d'arribar la sang que surt de cada ventricle i quina força cal per arribar-hi." },
    { id: "q2", type: "open", text: "Si el septe interventricular tingués un forat (comunicació interventricular), cap a quin costat passaria la sang pel forat i quina part del cor hauria de moure més sang del que li toca? Digues també què NO canviaria.", hint: "Un dels dos ventricles empeny molt més fort que l'altre, i la sang sempre va del lloc amb més pressió al lloc amb menys. Pensa què implica això per a la sang que surt cap al cos." },
    { id: "q3", type: "open", text: "Marc Fontana té anèmia. Usa el que has vist avui per explicar per quina raó el seu cor ha de treballar més dur.", hint: "Si cada litre de sang porta menys O₂ (poca hemoglobina), com pot el cor fer arribar el mateix O₂ als músculs? Què ha d'augmentar?" }
  ],
  homework: {
    readingNext: {
      session: 5,
      text: "Llegeix la lectura de la Sessió 5. A l'inici de la propera sessió faràs el formulari de comprensió (Google Forms).",
      pdfUrl: "/lectures/sa2-s5-lectura.pdf",
      easyUrl: "/lectures/sa2-s5-lectura-FACIL.pdf",
    }, description: "Cap." },
  recoveryInstructions: [
    "Apartat 0 de la fitxa: fes el repàs de memòria i comprova-ho amb les teves fitxes de les sessions 2 i 3.",
    "Apartat 1: fes la predicció abans de veure res. Després fes la pràctica al laboratori virtual (botó de sota) i omple els apartats 1, 2 i 3 de la fitxa amb el que hi observis.",
    "Apartat 4: tria un cas clínic i explica'n el mecanisme.",
    "Apartat 5: escriu la teva resposta a la pregunta del principi i compara-la amb els punts de teoria d'aquest apartat.",
    "Full de sortida: en paper a la sessió 5 o a l'acordió de sota."
  ],
  recoveryLinks: [{ label: "Laboratori virtual de la pràctica", url: "/labs/sa2/lab_s4_disseccio.html", icon: "🧪" }],
  oaLinks: ["OA2"], competencies: ["CE1", "CE2", "CE4"]
}
