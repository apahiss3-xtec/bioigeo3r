export const sa2 = {
  id: "sa2",
  title: "El nostre cos en marxa",
  subtitle: "Per quina raó una anèmia pot fer que un corredor s'esgoti a meitat de cursa?",
  biome: "sa2",
  color: { primary: "#8B1A1A", accent: "#C0392B" },
  sessions: 7,
  portadaImage: "/images/sa2-portada.jpg",
  guiaDocent: "/docs/sa2-guia-docent.docx",
  description: "Seguiràs el rastre de la glucosa i l'oxigen des que entren al cos fins que arriben al mitocondri de cada cèl·lula — i entendràs per quina raó un problema de ferro pot destrossar el rendiment d'un corredor.",
  product: "Informe científic en parelles sobre la freqüència cardíaca durant l'esforç",
  enigmas: [
    {
      id: "enigma1",
      title: "La gràfica de la Mercè",
      description: "Gràfica FC d'una corredora: repòs (~65 bat/min) → pic (~185 bat/min) → recuperació (~90 bat/min als 10'). Forma asimètrica. Per quina raó canvia tant? Al final de la SA ho sabràs."
    },
    {
      id: "enigma2",
      title: "L'analítica de sang",
      description: "Analítica fictícia: hemoglobina baixa (9.2 g/dL), ferro baix, eritròcits petits. Alguns valors estan fora de rang. Per quina raó?"
    }
  ],
  objectives: [
    { id: "OA1", text: "Interpretar una analítica de sang", desc: "Llegir una analítica amb valors de referència, identificar què està alterat i explicar-ho amb la sang, l'hemoglobina i el ferro (criteri 1.1)" },
    { id: "OA2", text: "Camí dels nutrients i de l'O₂", desc: "Explicar el camí dels nutrients i de l'oxigen des de fora del cos fins al mitocondri de la cèl·lula (digestió, circulació doble i respiració cel·lular) (criteri 1.2)" },
    { id: "OA3", text: "Respiració i FC", desc: "Interpretar gràfiques de FC i explicar la cadena esforç → ATP → O₂ → FC (criteris 4.1 i 4.2)" },
    { id: "OA4", text: "Eliminació, medi intern i salut", desc: "Connectar l'esforç, l'eliminació de residus (sistema excretor) i el medi intern (SN i SE) amb hàbits saludables (criteris 1.2 i 5.3)" }
  ],
  competencies: ["CE1", "CE2", "CE3", "CE4", "CE5"],
  flippedClassroom: true,
  flippedNote: "S2–S7 usen aula invertida: lectura prèvia a casa (disponible aquí), formulari de comprensió al principi de classe."
}
