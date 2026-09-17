# Prompt · Dossiers del Projecte lector (1r–4t ESO) · 3 variants

> Copia tot el que hi ha sota la línia en una sessió nova i adjunta-hi: `ietemple.zip`, la imatge de portada i els PDFs de lectures (un per curs).

---

Ets maquetador/a editorial i revisor/a de continguts de l'Institut Escola el Temple (Tortosa). Has de convertir els PDFs adjunts del **Projecte lector** (un per curs: 1r, 2n, 3r i 4t d'ESO) en dossiers maquetats amb la plantilla **IE Temple** (`ietemple.zip`), en **tres variants per curs**:

1. **Alumnat**: el dossier de lectura.
2. **Docent**: la còpia de l'alumnat més orientacions per dinamitzar el debat i una sessió de 30 minuts per lectura.
3. **Suport lingüístic per a nouvinguts**: la còpia de l'alumnat més un glossari multilingüe (àrab, amazic, urdú, ucraïnès i castellà) del vocabulari bàsic i de les expressions difícils.

Treballa amb autonomia. Només aturat per preguntar-me si falta un PDF o si no s'entén quin curs és cada fitxer. Tot el text ha d'estar en català (excepte les traduccions i les lectures originals en una altra llengua).

## 0. Abans de començar

- Descomprimeix `ietemple.zip` i llegeix-ne tota la documentació i l'exemple. Fes servir els seus tokens de color (`--lila`, `--taronja`, `--verd`, `--ink*`, `--paper`, `--rule`), les tipografies (Fira Sans Extra Condensed, Source Serif 4 i Caveat) i les classes de pàgina (`.page`, `.pad`, `.runhead`, `.runfoot`, `.cover`, `.idx`, `.how`, `.rd`, `.log`…). No inventis un estil nou, amplia'l només quan calgui.
- `doc-page.js` espera un `<section class="page">` per pàgina. **No escriguis cap regla `@page`.**
- Llegeix sencers tots els PDFs abans de maquetar res i extreu-ne el contingut amb un script (PyMuPDF), no a mà.

## 1. Arquitectura (comuna a tots els cursos i variants)

Separa dades, estil i motor perquè les tres variants comparteixin el mateix contingut i el mateix disseny:

```
Projecte lector ESO/
├─ index.html                     ← enllaços als 12 dossiers
├─ estils/temple.css              ← de la plantilla, intacte
├─ estils/dossier.css             ← només components nous
├─ motor/render.js                ← paginació automàtica + ganxos de variant
├─ motor/doc-page.js, image-slot.js, logo.png
├─ imatges/portada.jpg            ← convertida a JPG (~200 KB)
├─ variants/docent.js             ← hooks de la variant docent
├─ variants/nouvinguts.js         ← hooks de la variant de suport lingüístic
├─ 1r/  dades/lectures.js · dades/docent.js · dades/nouvinguts.js
│       dossier-alumnat.html · dossier-docent.html · dossier-nouvinguts.html
│       Projecte lector 1r ESO - alumnat.pdf (· docent · nouvinguts)
├─ 2n/ … 3r/ … 4t/ …
├─ eines/extract.py, build.py     ← extracció reproduïble des dels PDFs
└─ ESTRUCTURA.md
```

**Esquema de dades** (`dades/lectures.js`):

```js
window.DOSSIER = {
  meta: { titol:'Projecte lector', curs:'3r ESO', trimestre, anyCurs:'2026–27',
          centre:'Institut Escola el Temple', subcentre:'Tortosa', portada:'../imatges/portada.jpg' },
  blocs: [{ id, num, rn:'I', nom, lema }],
  lectures: [{ id:'L01', num:1, bloc, numOriginal, materia, titol, llengua:'ca'|'es'|…, minuts,
               autoria:[{k:'autoria'|'font'|'referencia'|'data'|'enllac'|'nota', v}],
               text:[{t:'p'|'h'|'q', x}], vocabulari:[{terme, definicio}], granPregunta }]
};
```

Les capes de variant (`dades/docent.js`, `dades/nouvinguts.js`) fan servir l'`id` de lectura com a clau i **no dupliquen el text**.

**Ganxos del motor**: `window.VARIANT = { id, etiqueta, hooks: { elements(L, items), renderElement(item, L), margeExtra(L, primera), paginesDespres(L) } }`. L'etiqueta de la variant apareix a la portada i a la capçalera.

## 2. Maquetació del dossier d'alumnat

**Ordre**:
1. Portada
2. **Un únic índex** a l'inici, amb número de pàgina real per a cada lectura (paginat si no hi cap)
3. «Com llegir» (passos de lectura i llegenda de marques)
4. Per a cada bloc, una portada de bloc i les seves lectures
5. Registre de lectura amb espai per a la signatura

**Portada**:
- Fes servir la imatge adjunta a sang, amb un degradat fosc a dalt i a baix perquè el text es llegeixi bé.
- A la capçalera hi ha d'anar **només** «Institut Escola el Temple» i «Tortosa». No hi posis «Temple Obert».
- Hi ha d'haver línies per al nom, el grup i el tutor/a.

**Cada lectura**:
1. Xips amb la matèria, el bloc i els minuts de lectura (més «Text en castellà» o la llengua que sigui, quan no és català).
2. Número i títol.
3. Fitxa d'autoria, amb les claus repetides agrupades.
4. Text a una columna amb marge d'anotacions (línies, tira de marques `! ? ★ ↔ ✗ □`, «Paraules noves»).
5. **Vocabulari clau**: totes les lectures l'han de tenir.
6. **La gran pregunta**: **exactament una** per lectura, en una caixa lila amb línies de resposta.

**Numeració**: contínua **01–N** dins de cada curs, no reiniciada per blocs. Els números de pàgina de l'índex i de les portades de bloc s'han de calcular després de paginar.

**Paginació automàtica** (a `render.js`):
- Construeix les pàgines en un escenari fora de pantalla de 210×297 mm. Mesura el desbordament amb `el.scrollHeight > el.clientHeight + 1`, i **espera `document.fonts.load` abans de mesurar**.
- Si un paràgraf no hi cap, parteix-lo per paraules amb cerca binària. Deixa-hi com a mínim 6 paraules a la pàgina i 8 a la següent. Justifica l'última línia del tros partit, excepte si l'has partit per força.
- Un subtítol no pot quedar sol al final d'una pàgina.
- El vocabulari es pot partir per files, amb 2 files com a mínim a cada banda.
- Si la gran pregunta no hi cap amb 4 línies, passa-la a una pàgina nova i omple-la de línies de resposta. Una caixa sola a un terç de la pàgina no s'accepta.
- Cap pàgina en blanc. Les pàgines de continuació porten una capçalera petita «NN · Títol · continuació».
- En acabar, mou les pàgines a `<doc-page size="a4">`, carrega `image-slot.js` i `doc-page.js`, i marca `data-maquetat="ok"` perquè l'exportació sàpiga quan esperar.

## 3. Variant docent

A partir del dossier d'alumnat (la paginació pot canviar), afegeix una **Guia docent** després de la gran pregunta de cada lectura. Pot ser 1 pàgina o 2, com a molt. Ha d'incloure:

- **Resum i idea clau** en 2–3 línies. Afegeix-hi els conceptes del currículum amb què connecta la lectura (matèria i curs).
- **Possibles dificultats**: vocabulari, conceptes previs i passatges ambigus.
- **Respostes esperables a la gran pregunta**: de nivell bàsic, desenvolupat i excel·lent, amb les idees que haurien d'aparèixer.
- **Dinamització del debat**:
  - 5–6 preguntes esglaonades: literal, inferencial, crítica i connexió amb la vida de l'alumnat.
  - Preguntes de rellançament per si el debat s'encalla.
  - Opinions contràries per fer d'«advocat del diable».
  - Com tancar el debat.
  - Alertes per a temes sensibles (assetjament, migració, gènere, religió, salut mental…), amb indicacions de cura i derivació.
- **Sessió de 30 minuts**: taula amb minutatge, activitat, agrupament, paper del docent i material. Com a referència:
  - 0–3′: activació
  - 3–13′: lectura (en veu alta, compartida o silenciosa, segons el bloc)
  - 13–18′: vocabulari
  - 18–27′: debat sobre la gran pregunta
  - 27–30′: tancament i registre

  Adapta el minutatge a la llargada de la lectura i al bloc. Al bloc expressiu, fes-hi lectura en veu alta amb una pauta de fluïdesa.
- **Atenció a la diversitat**: una proposta de suport i una d'ampliació.

Al principi del dossier docent, afegeix 2 pàgines d'orientacions generals:
- com funciona el projecte
- normes de debat
- rúbrica breu de lectura i argumentació (4 nivells)
- com fer servir el registre

La capçalera ha de dir «Docent». Les pàgines de guia s'han de distingir visualment (per exemple, amb el filet i les etiquetes en taronja).

## 4. Variant de suport lingüístic (nouvinguts)

A partir del dossier d'alumnat, afegeix després de cada lectura una pàgina «**Paraules i expressions per entendre el text**»:

- **Vocabulari bàsic**: 8–12 paraules freqüents de la lectura que un alumne nouvingut (A1–A2) potser no coneix. No és el mateix que el vocabulari clau. Pots incloure-hi termes del vocabulari clau si són imprescindibles.
- **Expressions difícils**: 3–6 locucions, frases fetes, metàfores o construccions complexes de la lectura, citades tal com surten al text, amb una paràfrasi en **català fàcil**.
- **Taula**:
  - columnes: català · castellà · العربية · Tamaziɣt · اردو · Українська
  - una línia d'exemple en català fàcil
  - pictograma o emoji opcional, només si ajuda de debò
- **Tipografia i direcció**:
  - Àrab: `lang="ar" dir="rtl"`, Noto Naskh Arabic.
  - Urdú: `lang="ur" dir="rtl"`, Noto Nastaliq Urdu. Revisa que l'interlineat no es trepitgi.
  - Ucraïnès: `lang="uk"`, en ciríl·lic.
  - Amazic: en **alfabet llatí** (és el més llegible per a les famílies de Tortosa, sobretot rifenyes). Opcionalment, afegeix-hi el tifinagh petit sota (Noto Sans Tifinagh). Indica a ESTRUCTURA.md quina varietat has fet servir.
  - Carrega totes les fonts des de Google Fonts i comprova que no surtin quadrets (tofu).
- **Fiabilitat**:
  - Tradueix el sentit en context, no paraula per paraula.
  - Posa una nota breu i visible al peu de la primera pàgina de glossari: les traduccions s'han de revisar amb famílies o mediadors, sobretot l'amazic i l'urdú.
  - Marca amb `revisar:true` a les dades les entrades on no estiguis segur/a.
- **Al principi del dossier**: una pàgina de benvinguda multilingüe (les 5 llengües + català) que expliqui com fer servir el dossier, amb la llegenda de marques traduïda.
- **Capçalera**: ha de dir «Suport lingüístic».

## 5. Revisió de continguts (obligatòria, abans de maquetar)

Llegeix cada lectura amb ull d'editor/a i corregeix-la amb criteri propi. Busca sobretot:

**Estructura**:
- numeració duplicada o reiniciada
- índexs múltiples
- pàgines en blanc
- lectures sense glossari o amb glossari barrejat dins del text
- més d'una gran pregunta, o grans preguntes duplicades dins del text: deixa-les com a pregunta retòrica o treu el duplicat

**Coherència**:
- noms de personatges que no existeixen al text (per exemple, una gran pregunta que esmenta un nom que no hi surt)
- paràgrafs que falten o que comencen «Aquesta capa…» sense antecedent
- exemples anunciats però absents
- peus d'esquemes o imatges que no hi són
- títols que no corresponen al contingut
- dates, xifres o fets inversemblants: verifica'ls amb la data d'avui abans de marcar-los com a error

**Extracció del PDF**:
- paràgrafs partits per salts de pàgina (uneix-los quan l'anterior no acaba en puntuació final i el següent comença en minúscula o continua una cita)
- títols repetits en majúscules
- capçaleres o peus de pàgina colats dins del text
- guionets i guions de diàleg (- → —)
- apòstrofs i cometes tipogràfiques (’ «»)
- signe menys

**Llengua**: faltes, definicions del glossari errònies o mal escrites, format de fitxes d'autoria heterogeni (normalitza les claus), minúscules i majúscules dels termes.

**Adequació al curs**: marca les lectures que semblin clarament d'un altre nivell i les que tractin temes sensibles sense context.

**Com aplicar les correccions**:
- Corregeix directament els errors evidents.
- Si falta text, redacta'n el mínim imprescindible amb el to i el nivell de l'original.
- Aplica les correccions a `eines/build.py` (o en un fitxer de correccions que llegeixi) perquè no es perdin si es regenera tot.
- Documenta cada correcció a `REVISIO.md` (curs · lectura · problema · què s'ha fet).
- Marca-hi a part el text que has redactat tu, perquè el pugui contrastar.

## 6. Verificació i lliurament

- Serveix la carpeta amb un servidor local (`python -m http.server`), perquè els fitxers oberts com a `file://` o `data:` trenquen les rutes relatives. Revisa-ho al navegador:
  - cap `.txt`, índex o taula desborda
  - res trepitja el peu de pàgina
  - els números de l'índex coincideixen amb les pàgines reals
  - cap pàgina en blanc
  - no hi ha errors a la consola
- Exporta cada PDF amb Edge o Chrome sense interfície:
  `msedge --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=60000 --print-to-pdf="…pdf" http://localhost:PORT/…html`
  Comprova el nombre de pàgines amb PyMuPDF. Si en surten poques, vol dir que el PDF s'ha tallat abans d'acabar de maquetar: torna'l a exportar.
- Genera fulls de contacte (miniatures) de cada PDF i revisa'ls visualment. Fes zoom a una pàgina de cada tipus, incloses les pàgines RTL.
- Lliura:
  - els **12 PDFs** (4 cursos × 3 variants) amb el nom `Projecte lector {curs} ESO - {alumnat|docent|nouvinguts}.pdf`
  - `ESTRUCTURA.md`, que expliqui com editar un text, com afegir una lectura o un curs i com imprimir (A4, marges: cap, gràfics de fons activats)
  - `REVISIO.md`
- Resum final en català, amb:
  - què s'ha fet
  - les correccions de contingut més rellevants per curs
  - les entrades de traducció marcades per revisar
  - els dubtes pendents

Ordre de treball recomanat: revisa i maqueta 1r d'ESO en versió alumnat i valida-ho visualment. Després fes-ne la variant docent i la de nouvinguts, i quan tot funcioni, replica-ho a 2n, 3r i 4t.
