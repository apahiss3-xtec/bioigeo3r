/* Variant «Suport lingüístic» per a alumnat nouvingut.
   Llegeix window.NOUVINGUTS (dades/nouvinguts-*.js) i afegeix:
   · després de «Com llegir», una pàgina de benvinguda en sis llengües;
   · després de cada lectura, una pàgina de paraules i expressions traduïdes (es pagina sola).
   Documentació: ESTRUCTURA.md */
(function () {
  'use strict';
  const NV = window.NOUVINGUTS || {};
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pad2 = n => String(n).padStart(2, '0');

  const LL = [
    { k: 'ca', nom: 'Català', dir: 'ltr' },
    { k: 'es', nom: 'Castellano', dir: 'ltr' },
    { k: 'ar', nom: 'العربية', dir: 'rtl' },
    { k: 'ber', nom: 'Tamaziɣt', dir: 'ltr' },
    { k: 'ur', nom: 'اردو', dir: 'rtl' },
    { k: 'uk', nom: 'Українська', dir: 'ltr' }
  ];
  const lang = k => LL.find(l => l.k === k);
  const cel = (k, txt, rev) => {
    const l = lang(k);
    const buit = txt == null || txt === '';
    return `<span class="c l-${k}" lang="${k === 'ber' ? 'kab' : k}" dir="${l.dir}">${buit ? '—' : esc(txt)}${rev ? '<sup class="rev">°</sup>' : ''}</span>`;
  };
  const revisa = (fila, idx) => { const r = fila[idx] || ''; return k => r.split(/\s+/).includes(k); };

  function paginaParaules(L) {
    const d = NV[L.id];
    if (!d) { console.warn('Sense suport lingüístic per a', L.id); return []; }
    const titol = `<span class="eyebrow">Suport lingüístic · lectura ${pad2(L.num)}</span>`;
    const html = `<div class="sl-h">${titol}<h2>Paraules per entendre <em>${esc(L.titol)}</em></h2>
      <p class="lede">${L.llengua === 'es'
        ? 'El text és en castellà. Primer hi ha la paraula en català i, al costat, la paraula del text.'
        : 'Mira aquestes paraules abans de llegir i torna-hi quan no entenguis alguna cosa.'}</p></div>
      <div class="flux"></div>`;
    const htmlCont = `<div class="sl-h cont">${titol}<h2 class="cont">Paraules <em>(continuació)</em></h2></div><div class="flux"></div>`;

    const blocs = [];
    blocs.push(`<div class="sl-sec"><span class="n">1</span>Paraules</div>`);
    blocs.push(`<div class="sl-row sl-cap">${LL.map(l => `<span class="c l-${l.k}" dir="${l.dir}">${l.nom}</span>`).join('')}</div>`);
    d.p.forEach(f => {
      const r = revisa(f, 6);
      blocs.push(`<div class="sl-row">${LL.map((l, i) => cel(l.k, f[i], r(l.k))).join('')}</div>`);
    });
    blocs.push(`<div class="sl-sec"><span class="n">2</span>Expressions del text</div>`);
    d.e.forEach(f => {
      const r = revisa(f, 7);
      blocs.push(`<div class="sl-exp"><div class="eq"><span class="cita">«${esc(f[0])}»</span><span class="vol">${esc(f[1])}</span></div>
        <div class="tr">${LL.slice(1).map((l, i) => `<div class="t"><span class="lk">${l.k === 'ber' ? 'tmz' : l.k}</span>${cel(l.k, f[i + 2], r(l.k))}</div>`).join('')}</div></div>`);
    });
    blocs.push(`<div class="sl-meves" data-opcional><div class="mh">Les meves paraules noves</div>${'<div class="ln"></div>'.repeat(3)}</div>`);
    return [{ classe: 'sl pad', etiqueta: `Lectura ${pad2(L.num)} · Paraules`, html, htmlCont, blocs }];
  }

  const BENVINGUDA = [
    ['ca', 'Benvingut, benvinguda!', 'Aquest dossier té les mateixes lectures que el dels teus companys. Després de cada lectura hi ha una pàgina amb les paraules i les expressions més importants traduïdes a la teva llengua. Abans de llegir, mira aquella pàgina.'],
    ['es', '¡Bienvenido, bienvenida!', 'Este dossier tiene las mismas lecturas que el de tus compañeros. Después de cada lectura hay una página con las palabras y expresiones más importantes traducidas a tu lengua. Antes de leer, mira esa página.'],
    ['ar', 'أهلًا وسهلًا!', 'في هذا الملف النصوص نفسها التي يقرؤها زملاؤك. بعد كل نص توجد صفحة فيها أهم الكلمات والعبارات مترجمة إلى لغتك. قبل أن تقرأ، انظر إلى تلك الصفحة.'],
    ['ber', 'Ansuf yis-k, ansuf yis-m!', 'Deg udlis-a llan yiḍrisen i ɣrin yimeddukal-ik. Deffir yal aḍris tella tasna s wawalen d yinawen igejdanen s tutlayt-ik. Uqbel ad teɣreḍ, muqel tasna-nni.', true],
    ['ur', 'خوش آمدید!', 'اس کتابچے میں وہی تحریریں ہیں جو آپ کے ہم جماعت پڑھتے ہیں۔ ہر تحریر کے بعد ایک صفحہ ہے جس میں اہم الفاظ اور محاورے آپ کی زبان میں ترجمہ کیے گئے ہیں۔ پڑھنے سے پہلے وہ صفحہ دیکھیں۔'],
    ['uk', 'Ласкаво просимо!', 'У цьому зошиті ті самі тексти, що й у твоїх однокласників. Після кожного тексту є сторінка з найважливішими словами та висловами, перекладеними твоєю мовою. Перед читанням переглянь цю сторінку.']
  ];
  const MARQUES = [
    ['!', 'M’ha sorprès', 'Me ha sorprendido', 'فاجأني', 'Yessewhem-iyi', 'مجھے حیرت ہوئی', 'Мене здивувало'],
    ['?', 'No ho entenc', 'No lo entiendo', 'لا أفهم', 'Ur fhimeɣ ara', 'مجھے سمجھ نہیں آیا', 'Не розумію'],
    ['★', 'M’ho vull quedar', 'Me lo quiero quedar', 'أريد أن أحتفظ به', 'Bɣiɣ ad t-ḥerzeɣ', 'یہ مجھے یاد رکھنا ہے', 'Хочу запамʼятати'],
    ['↔', 'Connecta amb…', 'Conecta con…', 'يرتبط بـ…', 'Yeqqen ɣer…', '…سے جڑتا ہے', 'Повʼязано з…'],
    ['≠', 'No hi estic d’acord', 'No estoy de acuerdo', 'لا أوافق', 'Ur qbileɣ ara', 'میں متفق نہیں', 'Не згоден / не згодна'],
    ['□', 'Paraula nova', 'Palabra nueva', 'كلمة جديدة', 'Awal amaynut', 'نیا لفظ', 'Нове слово']
  ];

  function paginesInici() {
    const html = `<span class="eyebrow">Suport lingüístic</span>
      <h2>Benvinguda <em>en la teva llengua</em>.</h2>
      <div class="bv">${BENVINGUDA.map(([k, t, p, rev]) => `<div class="bv-i l-${k}" lang="${k === 'ber' ? 'kab' : k}" dir="${lang(k).dir}">
        <div class="bv-l">${lang(k).nom}</div><div class="bv-t">${esc(t)}${rev ? '<sup class="rev">°</sup>' : ''}</div><p>${esc(p)}</p></div>`).join('')}</div>
      <div class="mq"><div class="mq-h">Marques al marge · en sis llengües</div>
        ${MARQUES.map(m => `<div class="sl-row mq-r"><span class="sym">${m[0]}</span>${LL.map((l, i) => cel(l.k, m[i + 1], l.k === 'ber')).join('')}</div>`).join('')}
      </div>
      <div class="nota-doc"><b>Per al professorat.</b> Les traduccions són una ajuda orientativa per entendre el text, no un diccionari. Cal revisar-les amb famílies, mediadors o alumnat que parli la llengua abans de repartir el dossier, especialment l’<b>amazic</b> (grafia llatina de base kabilenca; varia molt segons la regió: rifeny, tamazight del Marroc central, taixelhit…) i l’<b>urdú</b>. El signe <sup class="rev">°</sup> marca les entrades que convé validar primer. Les dades són a <code>dades/nouvinguts-1.js</code>…<code>-4.js</code>.</div>`;
    return [{ classe: 'sl-bv pad', etiqueta: 'Benvinguda', html }];
  }

  window.VARIANT = {
    id: 'nouvinguts',
    etiqueta: 'Suport lingüístic',
    hooks: {
      paginesInici,
      paginesDespres: paginaParaules,
      fonts: [['400 20px "Noto Naskh Arabic"', 'باب'], ['700 20px "Noto Naskh Arabic"', 'باب'],
        ['400 20px "Noto Nastaliq Urdu"', 'دروازہ'], ['700 20px "Noto Nastaliq Urdu"', 'دروازہ'],
        ['400 20px "Noto Sans"', 'aɣḍɛ'], ['700 20px "Noto Sans"', 'aɣḍɛ'], ['400 20px "Noto Sans"', 'двері'],
        ['700 20px "Fira Sans Extra Condensed"', 'двері'], ['400 20px "Source Serif 4"', 'двері']]
    }
  };
})();
