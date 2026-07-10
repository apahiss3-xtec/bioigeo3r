export const sa2 = {
  id: "sa2",
  title: "El nostre cos en marxa",
  subtitle: "Per quina raó una anèmia pot fer que un corredor s'esgoti a meitat de cursa?",
  biome: "sa2",
  color: { primary: "#8B1A1A", accent: "#C0392B" },
  sessions: 7,
  portadaImage: "/images/sa2-portada.jpg",
  description: "Seguiràs el rastre de la glucosa i l'oxigen des que entren al cos fins que arriben al mitocondri de cada cèl·lula — i entendràs per quina raó un problema de ferro pot destrossar el rendiment d'un corredor.",
  product: "Informe científic en parelles sobre la freqüència cardíaca durant l'esforç",
  enigmas: [
    {
      id: "enigma1",
      title: "La gràfica de la Mercè",
      description: "Gràfica FC d'una corredora: repòs (~65 bpm) → pic (~185 bpm) → recuperació (~90 bpm als 10'). Forma asimètrica. Per quina raó canvia tant? Al final de la SA ho sabràs."
    },
    {
      id: "enigma2",
      title: "L'analítica de sang",
      description: "Analítica fictícia: hemoglobina baixa (9.2 g/dL), ferro baix, eritròcits petits. Alguns valors estan fora de rang. Per quina raó?"
    }
  ],
  objectives: [
    { id: "OA1", text: "Nutrients i digestió", desc: "Relacionar cada nutrient amb la seva funció cel·lular i el recorregut complet fins al mitocondri" },
    { id: "OA2", text: "Sang i circulació", desc: "Explicar com l'hemoglobina i el ferro transporten l'O₂ i per quina raó la circulació és doble" },
    { id: "OA3", text: "Respiració i FC", desc: "Interpretar gràfiques de FC i explicar la cadena esforç → ATP → O₂ → FC" },
    { id: "OA4", text: "Control integrat", desc: "Explicar com SN, SE i sistema excretor mantenen l'homeòstasi durant l'exercici" }
  ],
  competencies: ["CE1", "CE2", "CE3", "CE4", "CE5"],
  flippedClassroom: true,
  flippedNote: "S2–S7 usen aula invertida: lectura prèvia a casa (disponible aquí), formulari de comprensió al principi de classe."
}
