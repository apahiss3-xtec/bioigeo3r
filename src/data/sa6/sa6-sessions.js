import { sa6 } from './index.js'

export { sa6 }

// Encara no hi ha cap sessió fabricada. L'ordre de fabricació és al vault,
// «SA6 - Inventari de materials» §4: primer el vídeo d'encàrrec (depèn de
// tercers), després B1 sencera. Mentre aquest array sigui buit, la SA viu a
// `upcomingSAs` i la portada la pinta com a «Pròximament».
export const sa6Sessions = []
