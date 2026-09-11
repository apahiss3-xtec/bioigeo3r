// SA6 · Ens enfonsem — Projecte STEM (Biologia i Geologia + Tecnologia i Digitalització)
// CREAT el 2026-09-10 des del vault («SA6 - Vista general», «SA6 - Estructura sessions»).
//
// Substitueix les antigues SA5 «La xarxa de la vida» i SA6 «El planeta que s'escalfa»,
// suprimides el mateix dia. La geologia (antiga SA7) ha passat a ser SA5 i es fa ABANS
// d'aquest projecte, perquè l'erosió, el transport i la sedimentació que s'hi estudien
// són exactament el que explica per què el delta desapareix.
//
// `stem: true` fa que la portada la pinti com a casella destacada amb l'etiqueta
// «Projecte STEM». Mentre no hi hagi cap sN.js, viu a `upcomingSAs` (marcada
// «Pròximament»); quan es fabriqui B1, passa a `publishedSAs`.
export const sa6 = {
  id: "sa6",
  title: "Ens enfonsem",
  subtitle: "El delta s'enfonsa i els camions hi queden encallats. Què hi podem fer?",
  biome: "sa6",
  color: { primary: '#1F6F8B', accent: '#0E4D63' },
  sessions: 8,
  stem: true,
  partners: ["Biologia i Geologia", "Tecnologia i Digitalització"],
  portadaImage: "/images/sa6-portada.jpg",
  description: "Una empresa us fa un encàrrec de debò: cada hivern un temporal inunda la platja del Trabucador i hi deixa camions encallats. Us demanen dues coses. Una, un aparell que detecti que el pas està inundat i avisi abans que hi entri ningú — això ho fareu a Tecnologia. I dues, l'explicació científica de per què això passa cada any i què s'hi hauria de fer a llarg termini — això, aquí. Al final ho presentareu a qui us ho ha demanat.",
  product: "Un prototip amb micro:bit muntat sobre una maqueta del delta, un pòster científic amb la proposta a llarg termini, i una carta de resposta a l'empresa signada per tota la classe.",
  enigmas: [
    {
      id: "enigma1",
      title: "Per què el delta ja no es refà tot sol?",
      description: "Durant sis mil anys el riu va anar portant fang i sorra, i el delta creixia. Ara el mar se'l menja i ningú el reposa. Cada hivern un temporal talla el Trabucador. Què ha canviat, i qui ho ha canviat? Ho respondràs a la tercera sessió."
    }
  ],
  objectives: [
    { id: "OA1", text: "Qui menja qui al delta", desc: "Construir la xarxa tròfica del delta, classificar-hi les relacions ecològiques (competència, depredació, parasitisme, mutualisme, comensalisme) dient qui hi guanya i qui hi perd, i predir l'efecte d'un impacte dos passos enllà de l'espècie afectada." },
    { id: "OA2", text: "L'energia es degrada, la matèria torna", desc: "Distingir el flux d'energia del cicle de la matèria, descriure el cicle del carboni identificant l'aiguamoll com a embornal, i estimar i reduir la petjada d'un menú propi." },
    { id: "OA3", text: "Per què s'enfonsa un delta", desc: "Explicar la regressió del delta com un balanç entre el sediment que arriba, la subsidència i la pujada del nivell del mar, dissenyar un experiment identificant-ne les variables, i distingir correlació de causalitat en dades reals." },
    { id: "OA4", text: "Decidir amb proves quan no hi ha bons ni dolents", desc: "Argumentar una posició sobre una controvèrsia sociocientífica real (embassaments, energia renovable i sediments) sostenint-la amb proves, i proposar una mesura dient qui hi guanya i qui hi perd." }
  ],
  competencies: ["CE1", "CE4", "CE5", "CE6"],
  flippedClassroom: true
}
