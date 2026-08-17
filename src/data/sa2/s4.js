export const sa2s4 = {
  id: "s4", saId: "sa2",
  title: "Dissecció de cor 🫀",
  sessionNumber: 4, biome: "sa2", duration: "2h",
  engageImage: "/images/sa2-s4-disseccio.jpg",

  // Repte oral curt: pregunta causal oberta (connexió amb S3), deixada penjada fins a l'Explica.
  engageChallenge: "Sabem que el cor té 4 cavitats. Però per quina raó 4 i no 2? Per quina raó no es pot barrejar la sang oxigenada amb la desoxigenada? (Pregunta oberta — la respondreu al final de l'Explica.)",
  engageQuestion: "Dibuixa el cor per dins tal com te l'imagines. Quantes cambres té? Hi ha algun punt on la sang oxigenada i la desoxigenada es barregen?",
  engageContext: "Predicció individual prèvia (2 min). Es compararà amb l'observació real al final de la sessió. Presentació del cor real + normes de seguretat.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Dedueixo, a partir de les pressions dels dos ventricles, cap a quin costat passa la sang per un forat al septe (CIV) i per quina raó el pacient es cansa en esforç PERÒ no es posa cianòtic.",
      "Explico per quina raó les cèl·les del miocardi necessiten molts mitocondris i com l'anèmia les afecta específicament.",
      "Argumento per quina raó Harvey va poder deduir la circulació sense microscopi, 30 anys ABANS que es veiessin els capil·lars.",
      "Analitzo un cas clínic cardiovascular relacionant el símptoma amb l'estructura anatòmica afectada (ventricle, vàlvula o coronària)."
    ],
    B: [
      "Explico per quina raó calen 4 cavitats al cor per mantenir pressions separades als dos circuits.",
      "Descric la funció de les artèries coronàries i per quina raó un infart (obstrucció coronària) és una emergència.",
      "Relaciono el gruix del ventricle esquerre amb la pressió que ha de generar per a la gran circulació.",
      "Vinculo l'anèmia del Marc amb un major esforç del miocardi, usant la connexió SA1 (mitocondris)."
    ],
    C: [
      "Nomeno les 4 cavitats del cor i el seu paper: les de dalt _______ i les de baix _______.",
      "Completo: «les artèries coronàries porten _______ al _______ perquè és un múscul que necessita _______».",
      "Associo infart = obstrucció de _______ → el miocardi no rep _______ → mort de cèl·les.",
      "Reconec en el diagrama del cor quin ventricle té la paret més gruixuda i per quina raó."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Les coronàries envolten el cor com una corona (d'aquí el nom). Completa: les coronàries porten _______ al _______ (el múscul del cor). Si s'obstrueixen → el miocardi no rep _______ → les cèl·les moren. Això és un _______.",
      challenge: "Harvey va demostrar la circulació SENSE veure els capil·lars. Com? Usant matemàtiques. Aplica el seu mètode: si el cor de porc que teniu bat 90 vegades/min i cada batec expulsa 40 mL, en 1 hora quants litres bombejaria? Un porc té ~3 L de sang al cos. Quina conclusió n'extreus?"
    },
    "2": {
      scaffold: "Completa: el ventricle DRET bomba sang cap als _______ (distància: petita, pressió baixa). El ventricle ESQUERRE bomba cap a _______ (distància: gran, pressió alta). Per tant, la paret del ventricle _______ ha de ser 3× més gruixuda.",
      challenge: "Imagina un forat al septe interventricular (CIV). El ventricle esquerre genera ~120 mmHg i el dret ~25 mmHg: cap a quin costat passarà la sang pel forat? Quin circuit rep, doncs, més sang del que li toca? Explica per quina raó el pacient es cansa en esforç i, en canvi, la sang que surt cap al cos NO porta menys oxigen (i per tant no es posa blau)."
    },
    "3": {
      scaffold: "Connecta miocardi i SA1: el cor és un múscul que mai para. Les cèl·les musculars necessiten moltíssim _______ (via hemoglobina) per fabricar _______ als mitocondris. Per quina raó el Marc (Hb 9.2) nota el cor treballar tant fins i tot en repòs?",
      challenge: "Raona: si el Marc tingués 0.5 g/dL de Hb (cas extrem), quin efecte tindria sobre la FC en repòs? I sobre la pressió arterial? Usa el concepte de compensació cardíaca (el cor batega més de pressa per compensar la manca de O₂ per litre)."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui dissecareu un cor real. Primer feu la predicció INDIVIDUAL — no es corregirà ara, la comparareu amb el cor real al final.",
    prompts: [
      {
        kind: "draw",
        text: "Dibuixa el cor per dins tal com te l'imagines. Quantes cambres té? On creus que entra i on surt la sang?"
      },
      {
        kind: "write",
        text: "Si el cor s'atura, el cos deixa de funcionar en pocs minuts. Per quina raó creus que és tan urgent?",
        starter: "Crec que és tan urgent perquè..."
      }
    ]
  },

  exploreActivity: {
    what: "Dissecció guiada d'un cor de porc o xai en 5 fases: exterior, tall sagital (4 cavitats), vàlvules, gruix dels ventricles, vasos principals. Cada fase té una pregunta causal.",
    who: { mode: "grup4", label: "Grups de 4 (un cor per grup)" },
    time: 50,
    note: "Si no vols participar-hi directament: vídeo de dissecció disponible al portal, amb la mateixa fitxa d'observació. No es penalitza."
  },
  exploreInstructions: [
    "Fase 1 — Exterior: vasos superficials (aorta, artèria pulmonar, coronàries). Per quina raó hi ha vasos AL VOLTANT del cor?",
    "Fase 2 — Protocol de tall (2 talls, un per ventricle): obrir, comptar les cavitats, localitzar el septe. Per quina raó el septe és complet?",
    "Fase 3 — Vàlvules: localitzar les vàlvules mitral, tricúspide, semilunars. Per quina raó existeixen?",
    "Fase 4 — Ventricles: mesurar amb el dit el gruix de la paret. Comparar dret i esquerre. Per quina raó és diferent?",
    "Fase 5 — Vasos: identificar l'aorta (gruixuda, rígida) vs artèria pulmonar",
    "Moment epistèmic (ètica): 'Usar models animals en ciència és èticament acceptable? On estan els límits?'"
  ],
  exploreDuration: "50 min",
  exploreMaterials: ["Cor de porc o xai (1 per grup)", "Safata, guants, pinces, bisturí o tisores"],
  exploreNote: "Alumnes que no volen participar: vídeo de dissecció disponible al portal. Mateixa fitxa d'observació. No es penalitza.",

  theoryPoints: [
    { id: "t5", apartat: "1", heading: "Harvey (1628): la demostració matemàtica", text: "Harvey va deduir la ==circulació== sense microscopi, únicament amb ==càlculs de volum==. La matemàtica com a eina científica, 30 anys abans de veure els ==capil·lars==.", type: "epistemic", badge: "🔬 Com funciona la ciència", video: "/animacions/sa2-s4-t5.mp4" },
    { id: "t1", apartat: "2", heading: "Per quina raó calen ==4 cavitats==", text: "==Petita circulació|b== (pulmons): ==pressió baixa== → no trenca els ==alvèols==. ==Gran circulació|o== (cos): ==pressió alta== → arriba al peu. Calen dues bombes separades. El ==septe== impedeix que es barregin.", type: "concept", video: "/animacions/sa2-s4-t1.mp4" },
    { id: "t2", apartat: "2", heading: "Arquitectura del ==cor==", text: "4 cavitats = ==2 aurícules== (reben) + ==2 ventricles== (bomben). ==Ventricle esquerre==: paret ==3× més gruixuda|o== perquè ha de bombar a tot el cos (pressió alta). ==Ventricle dret==: paret prima, pressió baixa cap als pulmons.", type: "concept", video: "/animacions/sa2-s4-t2.mp4" },
    { id: "t3", apartat: "3", heading: "El cor necessita la seva pròpia sang", text: "Les ==artèries coronàries|o== porten sang oxigenada al ==múscul cardíac (miocardi)==. Un ==infart|r== és l'==obstrucció d'una coronària|r== → el miocardi no rep O₂ → ==mort cel·lular|r==. Per quina raó és tan greu: el cor no pot aturar-se.", type: "concept", video: "/animacions/sa2-s4-t3.mp4" },
    { id: "t4", apartat: "3", heading: "Connexió SA1: ==miocardi== i ==mitocondris==", text: "Les cèl·les del ==miocardi== són musculars i contenen molt de ==mitocondris== → necessiten molt ==ATP|g== → molt ==O₂|b== → per quina raó el cor es ressent tant amb l'==anèmia|r==.", type: "transfer", badge: "🔗 Connexió SA1", video: "/animacions/sa2-s4-t4.mp4" }
  ],

  graphicResources: [
    { id: "Fig.1", title: "El cor humà etiquetat (secció)", src: "/images/sa2-cor-etiquetat.png", note: "Aurícules (reben) i ventricles (bomben), les vàlvules i els grans vasos. Localitza-ho mentre disseccionas i compara-ho amb el cor real." },
    { id: "Fig.2", title: "El cor mut — per repassar", src: "/images/sa2-cor-mut.png", note: "El mateix diagrama sense noms: posa-hi les etiquetes de memòria abans de l'exit tiquet." }
  ],

  fitxaUrl: { A: "/fitxes/sa2-s4-fitxa-A.html", B: "/fitxes/sa2-s4-fitxa-B.html", C: "/fitxes/sa2-s4-fitxa-C.html" }, teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S4 — Dissecció de cor",
    steps: [
      { apartat: "0", title: "Predicció — abans de veure el cor real", time: "8 min", phase: "engage", instruction: "Omple l'apartat 0 del full: dibuixa el cor per dins tal com te l'imagines. La compararàs amb el cor real al final.", hints: [] },
      { apartat: "1", title: "Observació exterior del cor", time: "15 min", phase: "explore", instruction: "Durant la fase 1, omple l'apartat 1 del full: vasos superficials i artèries coronàries.", hints: [
        "Per què hi ha vasos AL VOLTANT del cor? El múscul cardíac també necessita la seva pròpia sang."
      ] },
      { apartat: "2", title: "Obrim el cor — protocol de tall i cavitats", time: "35 min", phase: "explore", instruction: "Durant la fase 2, omple l'apartat 2 del full: compta les cavitats i localitza el septe.", hints: [
        "Per quina raó el septe ha de ser complet? Pensa en dues coses alhora: evita que es barregin dues sangs diferents I permet mantenir dues pressions diferents al mateix òrgan."
      ] },
      { apartat: "3", title: "Dues bombes en un sol cor", time: "20 min", phase: "explore", instruction: "Durant la fase 4, omple l'apartat 3 del full: mesura i compara el gruix de la paret dels dos ventricles.", hints: [
        "Un ventricle bomba només als pulmons (a prop); l'altre, a tot el cos (lluny). Quin necessita més força de paret?"
      ] },
      { apartat: "4", title: "Cas clínic — Elaborate", time: "25 min", phase: "elabora", instruction: "En parelles, trieu un cas (A o B) i resoleu-lo a l'apartat 4 del full.", hints: [
        "Connecta el problema del cas amb el que has vist disseccionant: gruix de paret, vàlvules, septe o coronàries."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Per quina raó el ventricle esquerre té la paret molt més gruixuda que el dret? Explica la connexió amb la doble circulació.", hint: "L'esquerre bomba a tot el cos (gran circulació, pressió alta); el dret només als pulmons. Més distància i pressió → més múscul." },
    { id: "q2", type: "open", text: "Si el septe interventricular tingués un forat (comunicació interventricular), cap a quin costat passaria la sang pel forat i quina part del cor hauria de moure més sang del que li toca? Digues també què NO canviaria.", hint: "Un dels dos ventricles empeny molt més fort que l'altre, i la sang sempre va del lloc amb més pressió al lloc amb menys. Pensa què implica això per a la sang que surt cap al cos." },
    { id: "q3", type: "open", text: "Marc Fontana té anèmia. Usa el que has vist avui per explicar per quina raó el seu cor ha de treballar més dur.", hint: "Si cada litre de sang porta menys O₂ (poca hemoglobina), com pot el cor fer arribar el mateix O₂ als músculs? Què ha d'augmentar?" }
  ],
  homework: { description: "Mesura't el pols en repòs (15 s × 4) i porta la xifra apuntada a la fitxa per a la Sessió 5. Nivell A: pren-te'l també just després de pujar tres pisos i porta les dues xifres.", deadline: null },
  recoveryInstructions: [
    "Mira el vídeo de dissecció de cor de porc (link a la secció EXPLICA, ~15 min)",
    "Omple la fitxa S4 seccions 1–4 basant-te en el vídeo",
    "Exit tiquet en paper a S5 o online aquí"
  ],
  oaLinks: ["OA2"], competencies: ["CE1", "CE2", "CE4"]
}
