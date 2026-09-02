export const sa1s4 = {
  id: "s4",
  saId: "sa1",
  title: "Repte final: el pòster de la cèl·lula",
  sessionNumber: 4,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s4-poster.jpg",
  isFinalSession: true,

  engageQuestion: "Ara que ho enteneu: sabríeu explicar la cèl·lula a algú de 1r ESO que no n'ha sentit a parlar mai? Teniu 45 minuts per demostrar-ho.",
  engageContext: "Presentació del repte i de la rúbrica. Els alumnes ja coneixen la rúbrica des de S1.",

  exploreActivity: {
    what: "Individual: planifica el teu pòster sobre el cas de l'Elna (el tall al dit), decideix quines seccions hi posaràs i comença a elaborar-lo en digital.",
    who: { mode: "individual", label: "Individual" },
    time: 40,
    note: "40 min per planificar i començar el pòster (seccions, diagrama propi i connexió personal). Després es fa la prova escrita individual (50 min); el pòster s'acaba a casa."
  },
  exploreInstructions: [
    "Llegeix el cas de l'Elna i decideix quines seccions tindrà el teu pòster (el full de l'enunciat en llista sis)",
    "Fes-lo en digital, mida DIN A3 (Canva, Slides, etc.). L'imprimeix el docent, no tu",
    "Dissenya tu mateix/a el diagrama del procés clau: no pot ser una imatge copiada",
    "Tens 40 minuts per planificar-lo i començar-lo: l'acabaràs a casa"
  ],
  exploreDuration: "40 min (planificació i inici) + 50 min (prova escrita)",

  theoryPoints: [
    {
      id: "t1",
      heading: "Repàs: les 3 idees clau de la SA",
      text: "1. La cèl·lula és la unitat viva: necessita matèria i energia (mitocondri). 2. La membrana regula el que entra i surt (osmosi). 3. Hi ha dos tipus de divisió: mitosi (còpies) i meiosi (la meitat).",
      type: "synthesis"
    }
  ],

  rubricUrl: "/fitxes/sa1-rubrica-poster.html",
  fitxaUrl: "/fitxes/sa1-s4-enunciat-poster.html",
  teoriaPdfUrl: null,

  exitTicketType: "web",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Torna al dibuix que vas fer a S1 (la cosa viva petita del teu cos). Compara'l amb el que saps ara. Quina és la diferència més gran entre el que pensaves i el que has après?"
    },
    {
      id: "q2",
      type: "open",
      text: "Quina idea de la SA t'ha semblat més difícil d'entendre? Per quina raó creus que ha estat difícil?"
    },
    {
      id: "q3",
      type: "open",
      text: "Quina connexió entre la cèl·lula i la teva vida quotidiana trobes ara que no trobaves al principi?"
    }
  ],
  exitTicketNote: "Exit tiquet metacognitiu: no avalua contingut sinó reflexió sobre el propi aprenentatge.",

  deliverables: [
    { name: "Pòster (digital, DIN A3)", note: "Si no s'acaba a classe, entrega via Classroom (termini 1 setmana)" },
    { name: "Vídeo de presentació (2-3 min)", note: "La setmana següent, via Classroom" }
  ],

  homework: {
    description: "Acaba el pòster i puja'l a Google Classroom (PDF o imatge). La setmana següent, grava i entrega el vídeo de 2-3 minuts explicant-lo sense llegir.",
    deadline: "A concretar a Google Classroom"
  },

  recoveryInstructions: [
    "Fes el pòster en format digital, mida DIN A3 (Canva, Google Slides, PowerPoint)",
    "Consulta la rúbrica (descarrega-la a ELABORA)",
    "Repassa tota la teoria al hub d'aquesta pàgina",
    "Entrega el pòster via Google Classroom",
    "La prova escrita la faràs quan tornis — parla amb el professor"
  ],

  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE1", "CE3", "CE4"]
}
