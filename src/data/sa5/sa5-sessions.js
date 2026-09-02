import { sa5 } from './index.js'
import { sa5s1 } from './s1.js'

// SA5 té 3 sessions (vault: «00 - Índex» i «SA5 - Estructura sessions»).
// De moment només la S1 està feta i derivada d'una spec validada. Les S2
// («L'energia circula, la matèria torna») i S3 («Quan l'equilibri es trenca»)
// es fabricaran als propers runs.
//
// 2026-09-01: els antics s2.js, s3.js i s4.js s'han retirat d'aquí. Eren un
// esborrany anterior al sistema de specs, amb 4 sessions i un enigma diferent
// del del vault; quedar-se'ls hauria servit una SA5 que contradiu les fitxes.
// Estan arxivats a `SA5-xarxa-vida/_esborrany-web-antic/`.
// La SA té `published: false` a sas.js, així que res d'això no és viu.
export const sa5Sessions = [sa5s1]
export { sa5 }
