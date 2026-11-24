export const sa3s2 = {
  id: "s2", saId: "sa3",
  title: "Les defenses del cos",
  sessionNumber: 2, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s2-immunitat.jpg",

  engageQuestion: "Si el virus de la grip entra al teu cos avui, quan trigues a curar-te? Per quina raó alguns es curen en 3 dies i altres triguen 10? I per quina raó la varicel·la mai et torna a infectar un cop l'has passada?",
  engageContext: "El virus ja ha entrat: ara li toca respondre al cos. Avui descobrirem com respon el cos per dins i tornarem a l'enigma: per quina raó la Martina no va agafar la grip?",

  // NO es renderitza al web: guió del docent (logística, temps,
  // material, revisió de deures). Tasca 2, 09/09/2026.
  teacherNotes: "Revisió breu de S1 (sense deures). Enllaç amb l'enigma A.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Explico la seqüència temporal completa de la resposta immunitària (innata → adaptativa) amb els temps de resposta concrets i justific per quina raó la resposta secundària és molt més ràpida.",
      "Argumento per quina raó una persona immunodeprimida (sense limfòcits T funcionals) és especialment vulnerable a infeccions que normalment serien lleus.",
      "Dissenyo un experiment per demostrar que anticossos específics no protegeixen contra un altre antigen, explicant el grup control i la variable.",
      "Formulo una hipòtesi sobre per quina raó la Martina (no vacunada) no va agafar la grip i la contrasto amb dues explicacions alternatives."
    ],
    B: [
      "Distingeixo immunitat innata (ràpida, no específica) d'adaptativa (lenta, específica, amb memòria) i n'identifico les cèl·lules principals.",
      "Explico el mecanisme de l'antigen-anticòs (clau-pany) i per quina raó els anticossos contra la grip no protegeixen contra la varicel·la.",
      "Explico per quina raó la varicel·la no et torna a infectar gràcies a la memòria immunològica.",
      "Formulo una hipòtesi fonamentada sobre per quina raó la Martina no va agafar la grip."
    ],
    C: [
      "Completo: immunitat innata (macròfags, inflamació, febre) → actua en _____ hores. Immunitat adaptativa (limfòcits, anticossos) → actua en _____ dies.",
      "Dibuixo l'esquema antigen-anticòs amb fletxes i etiquetes (antigen, anticòs, unió específica).",
      "Completo: la varicel·la no em torna a infectar perquè el meu cos té _____ immunològica que recorda el _____ del virus.",
      "Sé dir que la Martina no va agafar la grip probablement perquè _____ (ja l'havia passada / el seu sistema immunitari tenia memòria)."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "2": {
      scaffold: "Omple la taula de les dues immunitats: Innata → Temps (hores/dies): ___ · Cèl·lules: ___ · Específica? (sí/no): ___. Adaptativa → Temps: ___ · Cèl·lules: ___ · Específica?: ___. Quin tipus de memòria té NOMÉS la innata o l'adaptativa?",
      challenge: "Per quina raó una persona amb VIH (que destrueix limfòcits T) pot morir de malalties que normalment no maten? Explica la cadena: menys limfòcits T → _____ → _____ → mort per infecció oportunista. Quin tipus d'immunitat queda intacta i quina queda compromesa?"
    },
    "3": {
      scaffold: "Esquema antigen-anticòs: dibuixa un antigen (cercle amb protuberàncies) i un anticòs (forma de Y). Uneix-los amb una fletxa i escriu 'unió específica: clau-pany'. Per quina raó un anticòs contra la grip no funciona contra la varicel·la? Pista: les protuberàncies de la 'clau' són _____ per a cada patogen.",
      challenge: "Dissenya un experiment per comprovar que l'anticòs contra la grip és específic. Quins grups tindries? Quina és la variable independent? Quin seria el resultat si el teu model és correcte? I si no ho és?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui descobrireu per quina raó el cos no defensa igual la primera vegada que agafa un patogen que la segona. Abans de començar, recordeu la simulació de S1: què va passar amb el virus? Anoteu sense por.",
    prompts: [
      {
        kind: "write",
        text: "Quan agafes un refredat, per quina raó creus que et cures al cap d'una setmana sense prendre cap medicament específic?",
        starter: "Crec que em curo perquè el meu cos..."
      },
      {
        kind: "write",
        text: "Per quina raó la varicel·la no et pot infectar dues vegades (si ja l'has passada), però la grip sí que et pot infectar cada any?",
        starter: "Crec que la diferència és..."
      }
    ]
  },

  exploreInstructions: [
    "Part A: observa les dues plaques de Petri que vau preparar a S1 (mà bruta i mà rentada), compta les colònies i descriu les diferències",
    "Pregunta't: si la placa bruta té tants microbis, per què no ens posem malalts cada cop que toquem alguna cosa?",
    "Part B: amb plastilina, modela antígens i els anticossos que hi encaixen (model clau-pany)",
    "Intercanvia els antígens amb un altre grup: per què no encaixen els anticossos del teu grup?",
    "Reflexió científica: una clau no canvia de forma, però un virus sí que muta. Això explica que cada any hi hagi noves soques de grip?"
  ],
  exploreDuration: "30 min",
  exploreMaterials: ["Plaques de Petri de S1 (mà bruta / mà rentada)", "Plastilina de colors", "Fitxa S2 per anotar les observacions"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      video: "/animacions/sa3-s2-t1.mp4",
      heading: "==Immunitat innata==: la resposta immediata",
      text: "==Pell i mucoses|o==: primera barrera física — si el patogen hi entra, és la primera defensa. ==Macròfags i neutròfils|g==: 'mengen' patògens (==fagocitosi==) en ==minuts–hores|o==. ==Inflamació==: enrogiment + calor + inflor → atreu més cèl·lules immunitàries. ==Febre== (connexió S1): el cos augmenta la temperatura per dificultar la reproducció del patogen.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa3-s2-t2.mp4",
      heading: "==Immunitat adaptativa==: la resposta específica",
      text: "S'activa al cap de ==7–14 dies|o== de la primera infecció. ==Limfòcits B|b==: produeixen ==anticossos== específics contra l'antigen. ==Limfòcits T|g==: destrueixen cèl·lules del propi cos que estan infectades. Primera infecció dura ~1 setmana perquè el cos ==tarda a fabricar anticossos|r== suficients.",
      type: "concept"
    },
    {
      id: "t3",
      images: [
        {
          "src": "images/sa3-fotos/s2-t3.jpg",
          "caption": "Estructura d'un anticòs en forma de Y: els extrems encaixen amb un antigen concret, com una clau al pany.",
          "credit": "Tokenzero · CC BY-SA 4.0 · Wikimedia Commons"
        }
      ],
      apartat: "3",
      heading: "==Antigen== i ==anticòs==: el sistema clau-pany",
      text: "==Antigen==: qualsevol molècula estranya (proteïna de la superfície del patogen) que el SI reconeix com a 'no-pròpia'. ==Anticòs== (immunoglobulina): proteïna en forma de ==Y== fabricada pels limfòcits B que s'enganxa ==específicament== a un antigen concret (cada clau encaixa en un sol pany). Funció: ==neutralitza|g== el patogen o el ==marca per a fagocitosi|g==.",
      type: "concept"
    },
    {
      id: "t4",
      images: [
        {
          "src": "images/sa3-fotos/s2-t4.jpg",
          "caption": "Resposta immunitària específica: després de la primera infecció queden cèl·lules de memòria.",
          "credit": "Cooper Ackley · CC BY-SA 3.0 · Wikimedia Commons"
        }
      ],
      apartat: "3",
      heading: "==Memòria immunològica==: per quina raó la varicel·la no torna",
      text: "Després de la resposta adaptativa, queden ==limfòcits de memòria== que persisteixen ==anys o dècades==. Quan el mateix patogen torna, la ==resposta secundària|g== és molt més ràpida (hores, no dies) i intensa → el patogen es destrueix ==abans de causar símptomes|g==. Per quina raó la varicel·la no torna? Memòria. Per quina raó la grip sí? El virus ==muta|r== cada any i el SI no el reconeix.",
      type: "concept",
      badge: "🔗 Enigma 1 — primera pista"
    },
    {
      id: "t5",
      images: [
        {
          "src": "images/sa3-fotos/s2-t5.jpg",
          "caption": "Una vacunació: el cos aprèn a reconèixer el patogen sense haver de passar la malaltia.",
          "credit": "United States House of Representatives - Office of Rick Craw · Public domain · Wikimedia Commons"
        }
      ],
      apartat: "3",
      heading: "Connexió ==enigma 1==: la Martina no vacunada",
      text: "La Martina podria tenir memòria d'una soca de grip similar d'anys anteriors (resposta ràpida que va avortar la infecció). O bé, la ==immunitat de grup|g==: si la meitat de la classe estava vacunada, el virus va tenir menys vectors per arribar a ella. Les dues raons són compatibles. Enigma 1 — ==primera pista|o==, resolució completa a S5.",
      type: "epistemic",
      badge: "🧩 Enigma 1"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Corba de resposta immunitària", src: "/images/sa3-g1-resposta-immunitaria.svg", note: "Resposta primària (lenta) vs secundària (ràpida). Eix X: dies. Eix Y: concentració d'anticossos." }
  ],

  sessionMaterials: [
    { name: "Full de sortida — versions A i B", url: "/fitxes/sa3-s2-exit-ticket.html" },
    { name: "Full de sortida — versió C (amb bastida)", url: "/fitxes/sa3-s2-exit-ticket-C.html" },
    { name: "Full de disseny del grup (plaques) — versió A", url: "/fitxes/sa3-disseny-grup-A.html" },
    { name: "Full de disseny del grup (plaques) — versió B", url: "/fitxes/sa3-disseny-grup-B.html" },
    { name: "Full de disseny del grup (plaques) — versió C", url: "/fitxes/sa3-disseny-grup-C.html" },
    { name: "Fitxa de la sessió · acollida (urdú)", url: "/fitxes/sa3-s2-fitxa-acollida-UR.html" },
    { name: "Fitxa de la sessió · acollida (àrab)", url: "/fitxes/sa3-s2-fitxa-acollida-AR.html" }
  ],

  fitxaUrl: { A: "/fitxes/sa3-s2-fitxa-A.html", B: "/fitxes/sa3-s2-fitxa-B.html", C: "/fitxes/sa3-s2-fitxa-C.html" }, teoriaPdfUrl: "/teoria/sa3-s2-teoria.pdf",

  fitxaGuide: {
    fitxaName: "Fitxa S2 — Les defenses del cos",
    steps: [
      { apartat: "1", title: "Llegim les plaques", time: "40 min", phase: "explore", instruction: "Compteu les colònies de cada sector, poseu-les a la taula de classe i compareu grups (variabilitat). Escriu una afirmació amb proves i raonament (CER) i separa el que observes del que dedueixes.", hints: ["Si dos grups fan el mateix i surten números molt diferents, què ens diu?"] },
      { apartat: "2", title: "Un model que prediu", time: "25 min", phase: "explore", instruction: "Amb el model de plastilina antigen–anticòs, predius a la gràfica què passa a la segona infecció i què passa si el virus muta. Després ho compares amb l'esquema.", hints: [] },
      { apartat: "3", title: "Dues línies de defensa", time: "25 min", phase: "explica", instruction: "Taula defensa innata / adaptativa i frases per completar a partir de la infografia.", hints: ["Innata = ràpida i general. Adaptativa = lenta la 1a vegada, però recorda."] },
      { apartat: "4", title: "El cas Semmelweis i què ha canviat", time: "10 min", phase: "elabora", instruction: "Mira les dades de mortalitat abans i després de rentar-se les mans i explica per què no el creien. Acaba amb «Abans pensava… / Ara penso… / La prova és…». La classe actualitza el pòster (v2).", hints: [] },
      { apartat: "Final", title: "Full de sortida", time: "10 min", phase: "elabora", instruction: "Sol/a i sense ajuda, en un full a part. A les versions A i B, les respostes obertes van a la llibreta sense copiar l'enunciat; només s'omplen a la fitxa les taules, les frases i els esquemes (icona 📄).", hints: [] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "L'Aina s'ha fet un tall. Al cap de poques hores la ferida està vermella, calenta i inflada. Quina defensa ha actuat primer? Per què no és específica?", hint: "Inflamació = defensa ràpida i general." },
    { id: "q2", type: "open", text: "En Marc es cura d'un virus nou en uns dies. Mesos després hi torna a estar exposat i ni se n'adona. Compara les dues respostes i digues quina cèl·lula ho fa possible.", hint: "La 2a vegada és més ràpida gràcies a les cèl·lules de…" },
    { id: "q3", type: "open", text: "Un grup compta 30 colònies amb aigua i 25 amb sabó, amb una sola placa. Pot concloure que el sabó funciona millor? Què li falta?", hint: "Pensa en rèpliques i en la variabilitat." }
  ],
  exitTicketNote: "Fulls de sortida individuals, sense ajuda, es recullen. Versions A i B: dos fulls per A4 (es retallen); versió C: un per pàgina, amb pistes. Qui ha faltat pot respondre-les en línia.",

  homework: { description: "Porta un titular real (retallat, captura o imprès) sobre una malaltia, una vacuna o un medicament. A S3 explicaràs per quina raó l'has triat i si la font et sembla fiable. Repàs: mira la teoria del sistema immunitari d'aquesta pàgina i apunta una cosa que t'hagi sorprès." },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (immunitat innata, adaptativa, antigen-anticòs, memòria)",
    "Fes el diagrama de flux: virus entra → primer actua ___ (hores) → després actua ___ (dies) → queden cèl·lules de ___",
    "Omple la fitxa S2 apartats 0–3",
    "Fes l'exit tiquet online a l'acordió de sota"
  ],
  oaLinks: ["OA1"], competencies: ["CE2", "CE3", "CE5"]
}
