# Projecte lector · 3r ESO · 1r trimestre — estructura

Dossier maquetat amb la plantilla **IE Temple**. El contingut, l’estil i el motor de maquetació estan separats: així, les variants (docent, suport lingüístic per a nouvinguts) poden reaprofitar les mateixes dades i el mateix disseny.

```
Projecte lector 3r ESO - remaquetat/
├─ dossier-alumnat.html        ← versió alumnat (obrir i imprimir)
├─ dossier-nouvinguts.html     ← versió amb suport lingüístic (ca · es · àrab · amazic · urdú · ucraïnès)
├─ Projecte lector 3r ESO - alumnat.pdf · - nouvinguts.pdf
├─ dades/lectures.js           ← TOT el contingut (única font de dades)
├─ dades/nouvinguts-1…4.js     ← paraules i expressions traduïdes, per id de lectura
├─ variants/nouvinguts.js      ← ganxos de la variant (benvinguda + pàgina de paraules)
├─ estils/nouvinguts.css
├─ estils/temple.css           ← estils de la plantilla, sense tocar
├─ estils/dossier.css          ← components nous (índex paginat, portades de bloc, vocabulari, gran pregunta…)
├─ imatges/portada.jpg
├─ motor/render.js             ← paginació automàtica A4 + ganxos per a variants
├─ motor/doc-page.js, image-slot.js, logo.png   ← fitxers de la plantilla
└─ eines/extract.py, build.py  ← scripts de migració des del PDF original (traçabilitat)
```

## Ordre del dossier

1. Portada · 2. Índex únic (totes les lectures, amb pàgina) · 3. Com llegir · 4. Per a cada bloc: portada de bloc + lectures · 5. Registre de lectura.

Cada lectura: capçalera (matèria, bloc, minuts, número 01–32, títol, fitxa d’autoria) → text amb marge per anotar → **Vocabulari clau** → **La gran pregunta** (una per lectura). Si el text no hi cap, continua a pàgines amb capçalera «continuació». Si la gran pregunta no hi cap, va a una pàgina pròpia plena de línies de resposta.

## Esquema de dades (`dades/lectures.js`)

```js
window.DOSSIER = {
  meta:   { titol, curs, trimestre, anyCurs, centre, subcentre, portada },
  blocs:  [{ id: 'stem'|'soc'|'expr', num, rn: 'I', nom, lema }],
  lectures: [{
    id: 'L01',            // clau estable: l’usen les variants
    num: 1,               // numeració contínua 01–32
    bloc: 'stem',
    numOriginal: 'STEM 01',
    materia, titol,
    llengua: 'ca'|'es',   // 'es' → xip «Text en castellà» i guionatge en castellà
    minuts,
    autoria: [{ k: 'autoria'|'font'|'referencia'|'data'|'enllac'|'nota', v }],
    text: [{ t: 'p'|'h'|'q', x }],   // paràgraf · subtítol · cita/pregunta destacada
    vocabulari: [{ terme, definicio }],
    granPregunta: '…'
  }]
};
```

**Editar un text:** canvia’l a `dades/lectures.js` i recarrega l’HTML; la paginació i els números de pàgina de l’índex es refan sols. (No cal tornar a executar els scripts d’`eines/`: només serveixen per regenerar des del PDF original i sobreescriurien els canvis manuals.)

## Variant «Suport lingüístic» (`dossier-nouvinguts.html`)

Afegeix, després de «Com llegir», una **benvinguda en sis llengües** (amb les marques al marge traduïdes i una nota per al professorat) i, després de cada lectura, una pàgina **«Paraules per entendre…»**: 8 paraules en taula de sis columnes i 3–4 expressions del text amb el significat en català fàcil i la traducció.

```js
NOUVINGUTS.L01 = {
  p: [[ca, es, ar, amazic, urdu, ucraines, revisar?], …],
  e: [[expressio, significatEnCatalaFacil, es, ar, amazic, urdu, ucraines, revisar?], …]
};
```

`revisar` = codis separats per espais (`'ber'`, `'ur'`…): la cel·la surt amb un **°** taronja perquè una persona nativa la validi. Per corregir una traducció, edita-la i treu el codi. L19 (text en castellà): `ca` és l’equivalent català i `es` la paraula del text.

## Com afegir una variant

Crear `dossier-<variant>.html` copiant el d’alumnat i carregant, entre les dades i el motor:

```html
<script src="dades/lectures.js"></script>
<script src="dades/<variant>.js"></script>     <!-- capa pròpia, clau = id de lectura -->
<script src="variants/<variant>.js"></script>  <!-- defineix window.VARIANT -->
<script src="motor/render.js"></script>
```

`window.VARIANT = { id, etiqueta, hooks }` — ganxos disponibles:

| Ganxo | Per a què |
|---|---|
| `elements(L, items)` | Afegir/treure elements del flux d’una lectura. Retorna la llista nova. Tipus base: `p`, `h`, `q`, `vocabulari`, `granPregunta`; qualsevol altre amb `html`. |
| `renderElement(item, L)` | Dibuixar un tipus d’element propi (retorna un node DOM). |
| `margeExtra(L, primeraPagina)` | HTML addicional a la columna del marge. |
| `paginesInici()` | Pàgines després de «Com llegir» (mateix format que `paginesDespres`). |
| `paginesDespres(L)` | Pàgines després de la lectura: `[{ classe, etiqueta, html, htmlCont?, blocs? }]`. Amb `blocs` (llista d’HTML) s’aboquen dins de `.flux` i es pagina sol; un bloc amb `data-opcional` es descarta si no hi cap. |
| `fonts` | Fonts extra a esperar abans de mesurar: `'700 20px "Font"'` o `['400 20px "Font"', 'text de mostra']` (per a alfabets no llatins). |

L’etiqueta de la variant apareix automàticament a la portada i a la capçalera.

## Imprimir / exportar PDF

L’HTML necessita servir-se des d’un servidor local (els navegadors bloquegen alguns fitxers en obrir-lo amb doble clic). Per exemple, dins de la carpeta: `python -m http.server` i obrir `http://localhost:8000/dossier-alumnat.html`.

Export sense interfície (Edge): `msedge --headless=new --no-pdf-header-footer --virtual-time-budget=180000 --print-to-pdf="sortida.pdf" http://localhost:8000/dossier-nouvinguts.html` (amb pressupost baix el PDF surt tallat).

Imprimir amb Chrome/Edge: **A4 · marges: cap · gràfics de fons activats · sense capçaleres ni peus**.
