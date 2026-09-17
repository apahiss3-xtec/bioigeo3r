/* Motor de maquetació del Projecte lector (plantilla IE Temple).
   Llegeix window.DOSSIER (dades/lectures.js) i, si n'hi ha, window.VARIANT (capa de variant),
   construeix les pàgines A4 mesurant-les en un escenari fora de pantalla i les passa a <doc-page>.
   Documentació: ESTRUCTURA.md */
(function () {
  'use strict';
  const D = window.DOSSIER;
  const V = window.VARIANT || { id: 'alumnat', etiqueta: 'Alumnat', hooks: {} };
  const H = V.hooks || {};
  const M = D.meta;
  const LOGO = 'motor/logo.png';

  const pad2 = n => String(n).padStart(2, '0');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const blocById = Object.fromEntries(D.blocs.map(b => [b.id, b]));
  const lectBloc = b => D.lectures.filter(l => l.bloc === b.id);
  const AUT = { autoria: 'Autoria', font: 'Font', referencia: 'Referència', data: 'Data', enllac: 'Enllaç', nota: 'Nota' };
  const subNom = `${M.titol} · ${M.curs}` + (V.id !== 'alumnat' ? ` · ${V.etiqueta}` : '');

  const stage = document.getElementById('escenari');
  const pages = [];

  function runhead(tag) {
    return `<div class="runhead"><img src="${LOGO}" alt=""><div class="rh-txt"><div class="rh-name">${esc(M.centre)}</div>` +
      `<div class="rh-sub">${esc(subNom)}</div></div><div class="rh-tag">${tag}</div></div>`;
  }
  const runfoot = left => `<div class="runfoot"><span>${left}</span><span class="fnum"></span></div>`;

  function newPage(cls, html, label) {
    const s = document.createElement('section');
    s.className = 'page ' + cls;
    s.dataset.screenLabel = label;
    s.innerHTML = html;
    stage.appendChild(s);
    pages.push(s);
    return s;
  }
  const overflows = el => el.scrollHeight > el.clientHeight + 1;

  /* ── Portada ─────────────────────────────────────────────── */
  function portada() {
    const n = D.lectures.length;
    newPage('cover', `
      <div class="hero">
        ${M.portada ? `<img class="hero-img" src="${esc(M.portada)}" alt="">` : '<image-slot id="projecte-lector-portada" shape="rect" fit="cover" placeholder="Arrossega aquí la imatge de portada"></image-slot>'}
        <div class="scrim"></div>
        <div class="brandbar">
          <img src="${LOGO}" alt="">
          <div class="bb-txt"><div class="bb-name">${esc(M.centre)}</div><div class="bb-sub">${esc(M.subcentre)}</div></div>
          <div class="bb-year">Curs ${esc(M.anyCurs)}</div>
        </div>
        <div class="plate">
          <div class="kicker">Dossier de lectures · ${esc(M.curs)} · ${esc(M.trimestre)}${V.id !== 'alumnat' ? ' · ' + esc(V.etiqueta) : ''}</div>
          <h1>Projecte<br><em>lector</em>.</h1>
          <p class="sub">${n} lectures en tres blocs (${D.blocs.map(b => b.id === 'stem' ? b.nom : b.nom.toLowerCase()).join(', ').replace(/, ([^,]*)$/, ' i $1')}) per llegir el món, les persones i les paraules amb el llapis a la mà.</p>
        </div>
      </div>
      <div class="base">
        <div class="idcol">
          <div class="idrow"><span class="l">Nom</span><span class="d"></span></div>
          <div class="idrow"><span class="l">Grup</span><span class="d"></span></div>
          <div class="idrow"><span class="l">Tutor/a</span><span class="d"></span></div>
        </div>
        <div class="metacol">
          <div class="mt">El dossier</div>
          <dl>
            <div class="r"><dt>Lectures</dt><dd>${n}</dd></div>
            <div class="r"><dt>Curs</dt><dd>${esc(M.curs)}</dd></div>
            <div class="r"><dt>Trimestre</dt><dd>${esc(M.trimestre.replace(' trimestre', ''))}</dd></div>
          </dl>
        </div>
      </div>`, '01 Portada');
  }

  /* ── Índex únic (es pagina sol) ──────────────────────────── */
  function index() {
    const foot = runfoot(`${esc(M.titol)} · ${esc(M.curs)} · IE Temple`);
    const first = () => newPage('idx pad', runhead('Índex') +
      `<h2>Què llegirem, i <em>en quin ordre</em>.</h2>
       <p class="lede">Tres blocs, ${D.lectures.length} lectures numerades de l’01 al ${pad2(D.lectures.length)}. Cada lectura acaba amb el seu vocabulari clau i una gran pregunta.</p>
       <div class="flux"></div>` + foot, 'Índex');
    const more = () => newPage('idx pad', runhead('Índex') + `<h2 class="cont">Índex <em>(continuació)</em></h2><div class="flux"></div>` + foot, 'Índex (cont.)');

    const items = [];
    D.blocs.forEach(b => {
      const ls = lectBloc(b);
      items.push({ keep: true, html: `<div class="blk-h"><span class="rn">${b.rn}</span><span class="tt">${esc(b.nom)}</span><span class="cnt">${ls.length} lectures · p. <span data-ref="bloc-${b.id}"></span></span></div>` });
      ls.forEach(l => items.push({
        html: `<div class="idx-row"><span class="c-n">${pad2(l.num)}</span><span class="c-t">${esc(l.titol)}${l.llengua === 'es' ? ' <span class="es">(text en castellà)</span>' : ''}</span>` +
          `<span class="c-g">${esc(l.materia)}</span><span class="c-p" data-ref="${l.id}"></span></div>`
      }));
    });
    items.push({ html: `<div class="note"><div class="nl">Cada lectura</div><p>Fitxa d’autoria i font · text amb marge per anotar · <b>vocabulari clau</b> amb les paraules difícils · <b>la gran pregunta</b> per pensar i respondre. Al final, el registre de lectura personal.</p></div>` });

    let page = first(), flux = page.querySelector('.flux');
    items.forEach(it => {
      const t = document.createElement('template'); t.innerHTML = it.html.trim();
      const node = t.content.firstElementChild;
      flux.appendChild(node);
      if (overflows(flux) && flux.children.length > 1) {
        const prev = node.previousElementSibling;
        page = more(); flux = page.querySelector('.flux');
        if (prev && prev.classList.contains('blk-h')) flux.appendChild(prev);
        flux.appendChild(node);
      }
    });
  }

  /* ── Com llegir ──────────────────────────────────────────── */
  function comLlegir() {
    newPage('how pad', runhead('Instruccions') + `
      <h2>Com llegir <em>amb el llapis a la mà</em>.</h2>
      <div class="cols">
        <div class="step"><div class="num">1</div><div><div class="st">Llegeix-ho sencer, sense parar</div><p>La primera passada és per agafar el to i la idea general. No t’aturis a buscar paraules: llegeix fins al final.</p></div></div>
        <div class="step"><div class="num">2</div><div><div class="st">Torna-hi amb el llapis</div><p>Ara sí: marca el que t’aturi amb els símbols de sota i escriu al marge el que et suggereix el text.</p></div></div>
        <div class="step"><div class="num">3</div><div><div class="st">Consulta el vocabulari clau</div><p>Al final de cada text hi ha les paraules difícils explicades. Si en trobes d’altres, apunta-les a «Paraules noves».</p></div></div>
        <div class="step"><div class="num">4</div><div><div class="st">Respon la gran pregunta</div><p>No té una resposta única: té una resposta pensada. Fes servir el text i el teu criteri, i porta-la a la conversa d’aula.</p></div></div>
      </div>
      <div class="legend">
        <div class="lh">Marques al marge</div>
        <div class="lb">
          <div class="mk m1"><span class="sym">!</span><div class="d"><div class="dn">Això m’ha sorprès</div><div class="dd">Una idea que no esperaves trobar.</div></div></div>
          <div class="mk m2"><span class="sym">?</span><div class="d"><div class="dn">No ho entenc</div><div class="dd">Torna-hi després o porta-ho a l’aula.</div></div></div>
          <div class="mk m3"><span class="sym">★</span><div class="d"><div class="dn">M’ho vull quedar</div><div class="dd">Una frase que t’endús.</div></div></div>
          <div class="mk m4"><span class="sym">↔</span><div class="d"><div class="dn">Connecta amb…</div><div class="dd">Un altre text, una pel·lícula, la teva vida.</div></div></div>
          <div class="mk m5"><span class="sym">≠</span><div class="d"><div class="dn">No hi estic d’acord</div><div class="dd">Digues per què al marge.</div></div></div>
          <div class="mk m6"><span class="sym">□</span><div class="d"><div class="dn">Paraula nova</div><div class="dd">Apunta-la a «Paraules noves».</div></div></div>
        </div>
      </div>
      <div class="quote">
        <p>«Un lector que no subratlla res és un lector que encara no ha començat a discutir amb el text.»</p>
        <cite>Anotació de classe</cite>
      </div>` + runfoot(`${esc(M.titol)} · ${esc(M.curs)} · IE Temple`), 'Com llegir');
  }

  /* ── Portada de bloc ─────────────────────────────────────── */
  function portadaBloc(b) {
    const ls = lectBloc(b);
    const mats = [...new Set(ls.map(l => l.materia))];
    const p = newPage('blc pad', runhead(`Bloc ${b.rn}`) + `
      <div class="blc-rn">${b.rn}</div>
      <h2>${esc(b.nom)}</h2>
      <p class="lede">${esc(b.lema)}.</p>
      <div class="blc-mat">${mats.map(m => `<span class="chip">${esc(m)}</span>`).join('')}</div>
      <div class="blc-list">${ls.map(l => `<div><b>${pad2(l.num)}</b><span>${esc(l.titol)}</span><i data-ref="${l.id}"></i></div>`).join('')}</div>` +
      runfoot(`Bloc ${b.rn} · ${esc(b.nom)}`), `Bloc ${b.rn}`);
    p.dataset.anchor = 'bloc-' + b.id;
  }

  /* ── Lectura ─────────────────────────────────────────────── */
  function marge(L, primera) {
    const linies = '<span class="ln"></span>'.repeat(48);
    let extra = H.margeExtra ? (H.margeExtra(L, primera) || '') : '';
    return `<aside class="margin"><div><div class="mh">Anotacions al marge</div>` +
      (primera ? `<div class="marques"><span>!</span><span>?</span><span>★</span><span>↔</span><span>≠</span><span>□</span></div>` : '') +
      `<div class="anot">${linies}</div></div>` + extra +
      (primera ? `<div class="voc"><div class="mh">Paraules noves</div>${'<div class="vr"><span class="w"></span><span class="ln"></span></div>'.repeat(3)}</div>` +
        `<div class="hand">marca amb ★ la frase que<br>t’enduries a casa</div>` : '') +
      `</aside>`;
  }

  // agrupa camps repetits (p. ex. dues fonts) en una sola fila
  function fitxa(autoria) {
    const g = [];
    autoria.forEach(a => { const last = g[g.length - 1]; if (last && last.k === a.k) last.v.push(a.v); else g.push({ k: a.k, v: [a.v] }); });
    return g.map(a => `<dt>${AUT[a.k]}</dt><dd>${a.v.map(v => a.k === 'enllac' ? `<a href="${esc(v)}">${esc(v)}</a>` : esc(v)).join('<br>')}</dd>`).join('');
  }

  function paginaLectura(L, primera) {
    const b = blocById[L.bloc];
    const tag = `Bloc ${b.rn} · Lectura ${pad2(L.num)}`;
    let head;
    if (primera) {
      const chips = [`<span class="chip a">${esc(L.materia)}</span>`, `<span class="chip b">Bloc ${b.rn} · ${esc(b.nom)}</span>`,
        `<span class="chip c">≈ ${L.minuts} min de lectura</span>`];
      if (L.llengua === 'es') chips.push('<span class="chip c">Text en castellà</span>');
      head = `<div class="rdhead"><div class="chips">${chips.join('')}</div><div class="rdnum">${pad2(L.num)}</div><h2>${esc(L.titol)}</h2>` +
        (L.autoria.length ? `<dl class="fitxa">${fitxa(L.autoria)}</dl>` : '') +
        `</div>`;
    } else {
      head = `<div class="rdcont"><span class="rdnum">${pad2(L.num)}</span><span class="ct">${esc(L.titol)}</span><span class="cs">continuació</span></div>`;
    }
    const p = newPage('rd pad', runhead(tag) + head + `<div class="body"><div class="txt"${L.llengua !== 'ca' ? ` lang="${L.llengua}"` : ''}></div>${marge(L, primera)}</div>` +
      runfoot(`${pad2(L.num)} · ${esc(L.titol)}`), `${pad2(L.num)} ${L.titol}${primera ? '' : ' (cont.)'}`);
    if (primera) p.dataset.anchor = L.id;
    return p;
  }

  function paragraf(it, words, o) {
    const p = document.createElement('p');
    if (it.t === 'q') p.classList.add('q');
    if (o.cont) p.classList.add('cont');
    if (o.brk) p.classList.add('brk');
    const s = words.join(' ');
    if (o.drop && /^\p{L}/u.test(s)) p.innerHTML = `<span class="drop">${esc(s[0])}</span>${esc(s.slice(1))}`;
    else p.textContent = s;
    return p;
  }

  function vocabulari(rows, cont) {
    const d = document.createElement('div');
    d.className = 'vc';
    d.innerHTML = `<div class="vh">Vocabulari clau${cont ? ' (continuació)' : ''}</div><dl>${rows.map(r => `<dt>${esc(r.terme)}</dt><dd>${esc(r.definicio)}</dd>`).join('')}</dl>`;
    return d;
  }

  function granPregunta(q, linies) {
    const d = document.createElement('div');
    d.className = 'gp';
    d.innerHTML = `<div class="eyebrow">La gran pregunta</div><div class="gq">${esc(q)}</div>` +
      `<div class="gl"><div class="cp">Respon amb les teves paraules i fes servir el text.</div>${'<span class="ln"></span>'.repeat(linies)}</div>`;
    return d;
  }

  // La gran pregunta: primer prova de cabre (amb 4 línies) al final del text; si no, va a una pàgina
  // nova i omple l'espai lliure amb línies de resposta.
  function colocaGranPregunta(it, txt, pagNova) {
    let node = granPregunta(it.x, 4);
    txt.appendChild(node);
    if (!overflows(txt)) return;
    node.remove();
    txt = pagNova();
    node = granPregunta(it.x, 4);
    txt.appendChild(node);
    const gl = node.querySelector('.gl');
    for (let i = 0; i < 40; i++) {
      const ln = document.createElement('span'); ln.className = 'ln'; gl.appendChild(ln);
      if (overflows(txt)) { ln.remove(); break; }
    }
  }

  function lectura(L) {
    let items = [
      ...L.text.map(t => Object.assign({}, t)),
      { t: 'vocabulari', rows: L.vocabulari },
      { t: 'granPregunta', x: L.granPregunta },
    ];
    if (H.elements) items = H.elements(L, items) || items;

    let page = paginaLectura(L, true), txt = page.querySelector('.txt');
    let firstP = true;
    const pagNova = () => {
      const last = txt.lastElementChild;
      page = paginaLectura(L, false); const nt = page.querySelector('.txt');
      if (last && last.tagName === 'H3' && txt.children.length > 1) nt.appendChild(last); // títol amb el que segueix
      txt = nt;
      return txt;
    };

    for (const it of items) {
      if (it.t === 'p' || it.t === 'q') {
        let words = it.x.split(' '), cont = false;
        const drop = firstP && it.t === 'p'; firstP = false;
        while (words.length) {
          const node = paragraf(it, words, { drop: drop && !cont, cont });
          txt.appendChild(node);
          if (!overflows(txt)) break;
          node.remove();
          // la part més llarga que hi cap (mínim 6 paraules a cada costat)
          let lo = 0, hi = words.length - 1;
          while (lo < hi) {
            const mid = Math.ceil((lo + hi) / 2);
            const n = paragraf(it, words.slice(0, mid), { drop: drop && !cont, cont, brk: true });
            txt.appendChild(n);
            const ok = !overflows(txt); n.remove();
            if (ok) lo = mid; else hi = mid - 1;
          }
          const forcat = words.length - lo < 8;
          if (forcat) lo = words.length - 8; // evita deixar una sola línia a la pàgina següent
          if (lo >= 6) {
            txt.appendChild(paragraf(it, words.slice(0, lo), { drop: drop && !cont, cont, brk: !forcat }));
            words = words.slice(lo); cont = true;
            pagNova();
          } else if (txt.children.length === 0) {
            txt.appendChild(paragraf(it, words, { drop, cont })); break; // no hauria de passar
          } else {
            pagNova();
          }
        }
      } else if (it.t === 'vocabulari') {
        let rows = it.rows, cont = false;
        while (rows.length) {
          const node = vocabulari(rows, cont);
          txt.appendChild(node);
          if (!overflows(txt)) break;
          node.remove();
          let k = rows.length - 1;
          for (; k >= 2; k--) {
            const n = vocabulari(rows.slice(0, k), cont); txt.appendChild(n);
            const ok = !overflows(txt); n.remove();
            if (ok) break;
          }
          if (k >= 2 && rows.length - k >= 2) {
            txt.appendChild(vocabulari(rows.slice(0, k), cont));
            rows = rows.slice(k); cont = true;
          }
          pagNova();
        }
      } else {
        let node;
        if (H.renderElement) node = H.renderElement(it, L);
        if (!node) {
          if (it.t === 'h') { node = document.createElement('h3'); node.textContent = it.x; }
          else if (it.t === 'granPregunta') { colocaGranPregunta(it, txt, pagNova); txt = page.querySelector('.txt'); continue; }
          else if (it.html) { const t = document.createElement('template'); t.innerHTML = it.html.trim(); node = t.content.firstElementChild; }
          else { console.warn('Element desconegut', it); continue; }
        }
        txt.appendChild(node);
        if (overflows(txt) && txt.children.length > 1) { node.remove(); pagNova(); txt.appendChild(node); }
      }
    }
    if (overflows(txt)) console.warn('Desbordament a', L.id);
    if (H.paginesDespres) (H.paginesDespres(L) || []).forEach(pg =>
      paginaExtra(pg, `Lectura ${pad2(L.num)}`, `${pad2(L.num)} · ${esc(L.titol)}`, pad2(L.num)));
  }

  /* Pàgina afegida per una variant. Si porta `blocs`, s'aboquen dins de .flux i es pagina sol
     (les pàgines de continuació fan servir `htmlCont`, o `html` si no n'hi ha). */
  function paginaExtra(pg, tagDef, peu, prefix) {
    const fer = cont => newPage(pg.classe, runhead(pg.etiqueta || tagDef) + (cont && pg.htmlCont ? pg.htmlCont : pg.html) + runfoot(peu),
      `${prefix} ${pg.etiqueta || ''}${cont ? ' (cont.)' : ''}`);
    let page = fer(false);
    if (!pg.blocs) return;
    let flux = page.querySelector('.flux');
    pg.blocs.forEach(h => {
      const t = document.createElement('template'); t.innerHTML = h.trim();
      const node = t.content.firstElementChild;
      flux.appendChild(node);
      if (overflows(flux) && flux.children.length > 1) {
        node.remove();
        if (node.hasAttribute('data-opcional')) return;   // bloc prescindible: no obre pàgina nova
        page = fer(true); flux = page.querySelector('.flux'); flux.appendChild(node);
      }
      if (overflows(flux)) console.warn('Desbordament a', prefix, pg.etiqueta);
    });
  }

  /* ── Registre de lectura ─────────────────────────────────── */
  function registre() {
    const p = newPage('log pad', runhead('Registre') + `
      <h2>El meu <em>registre</em> de lectura.</h2>
      <p class="lede">Anota-hi els llibres i textos que llegeixes pel teu compte. La valoració és teva i no compta per a la nota: serveix per saber què t’agrada llegir.</p>
      <div class="taula"><table>
        <thead><tr><th class="cn">Nº</th><th>Títol / autor</th><th class="cdate">Data</th><th class="cstars">M’ha agradat</th><th>Una idea, sensació o paraula</th></tr></thead>
        <tbody></tbody></table></div>
      <div class="sign">
        <div class="sc"><div class="sl">Signatura de l’alumne/a</div><div class="sd"></div></div>
        <div class="sc"><div class="sl">Vist i plau del tutor/a</div><div class="sd"></div></div>
      </div>` + runfoot(`${esc(M.titol)} · ${esc(M.curs)} · IE Temple`), 'Registre de lectura');
    const box = p.querySelector('.taula'), tb = p.querySelector('tbody');
    for (let i = 1; i < 60; i++) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td class="cn">${pad2(i)}</td><td></td><td></td><td class="cstars">☆ ☆ ☆ ☆ ☆</td><td></td>`;
      tb.appendChild(tr);
      if (overflows(box)) { tr.remove(); break; }
    }
  }

  /* ── Muntatge ────────────────────────────────────────────── */
  async function build() {
    const fonts = ['800 20px "Fira Sans Extra Condensed"', '700 20px "Fira Sans Extra Condensed"', 'italic 800 20px "Fira Sans Extra Condensed"',
      '400 20px "Source Serif 4"', '600 20px "Source Serif 4"', '700 20px "Source Serif 4"', 'italic 400 20px "Source Serif 4"',
      'italic 600 20px "Source Serif 4"', '400 20px "Caveat"'].concat(H.fonts || []);
    try { await Promise.all(fonts.map(f => Array.isArray(f) ? document.fonts.load(f[0], f[1]) : document.fonts.load(f, 'Aàç'))); await document.fonts.ready; } catch (e) { console.warn(e); }

    portada();
    index();
    comLlegir();
    if (H.paginesInici) (H.paginesInici() || []).forEach(pg => paginaExtra(pg, 'Instruccions', `${esc(M.titol)} · ${esc(M.curs)} · IE Temple`, ''));
    D.blocs.forEach(b => { portadaBloc(b); lectBloc(b).forEach(lectura); });
    registre();

    const anchors = {};
    pages.forEach((p, i) => {
      const f = p.querySelector('.fnum'); if (f) f.textContent = pad2(i + 1);
      if (p.dataset.anchor) anchors[p.dataset.anchor] = pad2(i + 1);
    });
    pages.forEach(p => p.querySelectorAll('[data-ref]').forEach(r => { r.textContent = anchors[r.dataset.ref] || '—'; }));
    pages.forEach((p, i) => { p.dataset.screenLabel = pad2(i + 1) + ' ' + p.dataset.screenLabel.replace(/^\d\d /, ''); });

    const doc = document.querySelector('doc-page');
    pages.forEach(p => doc.appendChild(p));
    stage.remove();
    window.DOSSIER_PAGINES = pages.length;

    for (const src of ['motor/image-slot.js', 'motor/doc-page.js']) {
      await new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.body.appendChild(s); });
    }
    document.documentElement.dataset.maquetat = 'ok';
  }
  build();
})();
