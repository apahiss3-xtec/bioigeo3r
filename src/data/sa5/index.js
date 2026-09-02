// SA5 · La xarxa de la vida — capçalera de la unitat
// REESCRIT el 2026-09-01 des del vault («SA5 - Vista general», «SA5 - Estructura
// sessions», «00 - Índex»). Vegeu §0bis de «SA5 - Sessió 1 - SPEC».
//
// Tres canvis respecte de la versió anterior, que era un esborrany anterior al
// sistema de specs:
//  · sessions: 4 → 3. L'Índex del vault ho fixa des del 06/05/2026 («SA5 i SA7
//    reduïdes a 3») i quadra el total del curs a 30 sessions. El 4 venia de
//    `planificacio_curs_bio_3eso.md`, que ja consta desfasat.
//  · enigma: la invasió de la cotorra argentina → el retorn de les llúdrigues
//    al riu. És l'enigma que el disseny 5E del vault penja a la S1 i resol a
//    la S3, i el que treballen totes les fitxes.
//  · color: verd #3E7C4F → blau riu #2E7BA6 (paleta «aigua» del sistema IE
//    Temple). El verd era pràcticament el mateix que el de SA3 «Defensors del
//    cos» (#2F6B5E) i dues SAs consecutives quedaven indistingibles.
export const sa5 = {
  id: "sa5",
  title: "La xarxa de la vida",
  subtitle: "Qui menja qui al nostre entorn?",
  biome: "sa5",
  color: { primary: '#2E7BA6', accent: '#12405C' },
  sessions: 3,
  portadaImage: "/images/sa5-portada.jpg",
  description: "Sortireu al pati a fer un cens de qui hi viu de debò i teixireu amb fils de llana la xarxa que uneix tots els éssers vius d'un riu — per notar al braç què passa quan en cau un. Després seguireu un àtom de carboni pel seu viatge i veureu per quina raó la matèria torna i l'energia no. I al final, un cas real: quan l'equilibri es trenca, qui hi guanya i qui hi perd.",
  product: "Investigació de l'entorn local: la xarxa tròfica d'un ecosistema proper, un desequilibri que l'amenaça i una proposta d'acció o de seguiment",
  enigmas: [
    {
      id: "enigma1",
      title: "Han tornat les llúdrigues",
      description: "Al riu que passa a prop de l'escola han vist llúdrigues per primera vegada en 30 anys. Una espècie que torna després de tres dècades. Algú hi guanya i algú hi perd — i no són només els peixos. Al final de la unitat sabreu qui, i per quina raó."
    }
  ],
  objectives: [
    { id: "OA1", text: "Qui viu i qui menja qui", desc: "Fer un cens d'un ecosistema real anotant-hi les interaccions, classificar les relacions ecològiques (competència, depredació, parasitisme, mutualisme, comensalisme) dient qui hi guanya i qui hi perd, i situar cada ésser viu com a productor, consumidor o descomponedor" },
    { id: "OA2", text: "L'efecte cascada", desc: "Raonar què li passa a una xarxa tròfica quan se'n treu o s'hi afegeix una espècie, arribant dos passos enllà de l'espècie afectada, i reconèixer les limitacions d'una observació de camp i d'un model" },
    { id: "OA3", text: "L'energia flueix, la matèria torna", desc: "Distingir el flux d'energia (entra com a llum i es degrada a cada nivell) del cicle de la matèria (els àtoms es reciclen), i descriure el cicle del carboni relacionant-hi l'activitat humana" },
    { id: "OA4", text: "Quan l'equilibri es trenca (CE4+CE5+CE6)", desc: "Explicar un efecte cascada real i la transformació del paisatge associada, relacionar els desequilibris dels ecosistemes amb la salut, i valorar l'impacte de diferents models d'alimentació sobre ecosistemes i biodiversitat" }
  ],
  competencies: ["CE1", "CE4", "CE5", "CE6"],
  flippedClassroom: false
}
