// Competències específiques de Bio/Geo en llenguatge alumne
// (del sistema de gamificació — s'usen com a etiquetes informatives)
export const competencyLabels = {
  CE1: { emoji: '🔍', name: 'Investigar i preguntar-se' },
  CE2: { emoji: '🧩', name: 'Entendre com funcionen els éssers vius' },
  CE3: { emoji: '🌱', name: 'Comprendre la vida i la salut' },
  CE4: { emoji: '📊', name: 'Llegir i interpretar dades científiques' },
  CE5: { emoji: '🌍', name: 'Cuidar el planeta' },
  CE6: { emoji: '🔬', name: 'Fer ciència amb rigor' }
}

export const getCompetency = (code) =>
  competencyLabels[code] || { emoji: '📘', name: code }
