// Resol rutes d'assets respectant la base de Vite ('./' per a
// GitHub Pages i Netlify). Les dades usen rutes absolutes (/images/...).
export const asset = (path) => {
  if (!path) return path
  return import.meta.env.BASE_URL + String(path).replace(/^\//, '')
}

