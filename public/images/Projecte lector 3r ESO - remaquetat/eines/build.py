import json, re, os
R = json.load(open('raw.json', encoding='utf-8'))

def typo(s):
    s = re.sub(r"(\w)'(\w)", r"\1’\2", s)
    s = re.sub(r'"([^"]+)"', r'«\1»', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def norm_cmp(s):
    return re.sub(r'\W', '', s.lower().replace('’', "'"))

SUBJ = {'MATEMÀTIQUES': 'Matemàtiques', 'BIOLOGIA I GEOLOGIA': 'Biologia i geologia', 'TECNOLOGIA': 'Tecnologia',
        'FÍSICA I QUÍMICA': 'Física i química', 'FILOSOFIA': 'Filosofia', 'GEOGRAFIA I HISTÒRIA': 'Geografia i història',
        'ORIENTACIÓ I TUTORIA': 'Orientació i tutoria', 'ART': 'Art', 'LECTURA EXPRESSIVA': 'Lectura expressiva'}

LABELS = [
    ('autoria', r"Autor/a|Autora|Autors principals|Autoria|Autor"),
    ('referencia', r"Àmbit / concepte de referència|Matemàtic de referència|Autora de referència|Organització de referència|Esdeveniment de referència|Institució de referència|Investigador de referència|Experiment de referència|Filòsof de referència|Experiment mental"),
    ('font', r"Font / publicació|Font real d'inspiració|Font de suport|Fonts de referència|Font principal de la notícia|Títol original de l'article|Títol de l'article original|Títol del reportatge|Publicació|Font original|URL / Font d'origen|Font"),
    ('data', r"Data de publicació, si és rellevant|Data de publicació"),
    ('enllac', r"Enllaç, si escau|Enllaç"),
    ('nota', r"Nota"),
]
ORDER = ['autoria', 'font', 'referencia', 'data', 'enllac', 'nota']

def parse_auth(lines):
    out = []
    for line in lines:
        parts = [p.strip() for p in line.split(' · ')]
        for p in parts:
            p = p.replace('’', "'") if p.startswith(('Font real', 'Títol', 'URL')) else p
            if re.match(r'https?://', p):
                out.append({'k': 'enllac', 'v': p}); continue
            if re.fullmatch(r'\d{4}\.?', p):
                out.append({'k': 'data', 'v': p.rstrip('.')}); continue
            for k, rx in LABELS:
                m = re.match(r'(?:' + rx + r')\s*:\s*(.*)$', p)
                if m:
                    v = m.group(1).strip()
                    if v in ('', '-', '–'):
                        break
                    if k == 'data':
                        v = v.rstrip('.')
                    out.append({'k': k, 'v': v if k == 'enllac' else typo(v)})
                    break
            else:
                raise SystemExit('Etiqueta desconeguda: ' + p)
    return sorted(out, key=lambda e: ORDER.index(e['k']))

KEEP = {'OLED', 'R', 'BIC'}
PROPER = {'LOUVRE': 'Louvre', 'GIOCONDA': 'Gioconda', 'SIMPSON': 'Simpson'}

def term_case(t):
    t = t.strip()
    if t != t.upper():
        return typo(t)
    t = t.replace(' -A', ', -a')
    ws = []
    for w in t.split(' '):
        core = re.sub(r'[^\wÀ-ÿ’·]', '', w)
        if core in KEEP:
            ws.append(w)
        elif core in PROPER:
            ws.append(w.replace(core, PROPER[core]))
        else:
            ws.append(w.lower())
    s = ' '.join(ws)
    return typo(s[0].upper() + s[1:])

def def_fix(d):
    d = typo(d).replace(' .', '.')
    d = re.sub(r'\.\s*\.', '.', d)
    d = d[0].upper() + d[1:]
    if not d.endswith(('.', '?', '!')):
        d += '.'
    return d

INLINE_TERMS = {
    15: ['Clandestinitat', 'Transició democràtica', 'Assemblea de Catalunya', 'Amnistia', 'Govern Civil'],
    19: ['Resistència indígena', 'Colonització', 'Desposseïment', 'Autodeterminació', 'Reparació', 'Cosmovisió'],
    23: ['Patrimoni arqueològic', 'Edat del bronze', 'Espoli patrimonial', 'Bé d’Interès Cultural (BIC)', 'Orfebreria'],
}

def split_inline(text, terms):
    idx = [text.index(t) for t in terms]
    res = []
    for i, t in enumerate(terms):
        end = idx[i + 1] if i + 1 < len(terms) else len(text)
        res.append({'term': t, 'def': text[idx[i] + len(t):end].strip()})
    return res

BLOCKS = [
    {'id': 'stem', 'num': 1, 'rn': 'I', 'nom': 'STEM', 'lema': 'Llegir per descobrir com funciona el món'},
    {'id': 'soc', 'num': 2, 'rn': 'II', 'nom': 'Sociocultural', 'lema': 'Llegir per comprendre les persones, la cultura i la societat'},
    {'id': 'expr', 'num': 3, 'rn': 'III', 'nom': 'Expressiva', 'lema': 'Llegir amb veu, ritme, intenció i imaginació'},
]

lectures = []
for i, r in enumerate(R):
    n = i + 1
    title = typo(r['title'])
    unparsed_txt = [u[4] for u in r.get('unparsed', []) if u[1] == 10.2]

    body = []
    for b in r['body']:
        if 'h' in b:
            t = b['h']
            if norm_cmp(t) == norm_cmp(r['title']):
                continue
            if t.startswith('TEXT '):
                t = t[5:].replace('octubre Día', 'octubre: Día')
            body.append({'t': 'h', 'x': t})
        elif 'p' in b:
            t = b['p']
            if norm_cmp(t) == norm_cmp(r['title']) or t in unparsed_txt:
                continue
            if body and body[-1]['t'] == 'p' and not re.search(r'[.!?:»"”…)]$', body[-1]['x']) and (
                    t[:1].islower() or (t[:1] not in '-—' and (body[-1]['x'].count('«') > body[-1]['x'].count('»') or body[-1]['x'].count('"') % 2 or body[-1]['x'].endswith(',')))):
                body[-1]['x'] += ' ' + t
                continue
            body.append({'t': 'p', 'x': t})

    # «(LA GRAN PREGUNTA)» dins del text: només n'hi ha d'haver una per lectura
    nb, skip = [], False
    for k, b in enumerate(body):
        if skip:
            skip = False; continue
        if b['t'] == 'h' and 'GRAN PREGUNTA' in b['x']:
            if n == 17:
                skip = True  # Banksy: duplicat quasi literal de la gran pregunta final
            else:
                body[k + 1]['t'] = 'q'  # es manté com a pregunta retòrica del text
            continue
        nb.append(b)
    body = nb

    for b in body:
        if n == 32 and b['t'] == 'h':
            b['t'] = 'q'
        if b['t'] == 'p' and b['x'].startswith('¿Día de la Raza'):
            b['t'] = 'h'
        if b['t'] == 'p' and n <= 25 and n not in (16, 20, 24) and len(b['x']) <= 60 and b['x'].endswith('?') and b['x'][0] not in '-—':
            b['t'] = 'h'  # subtítol en forma de pregunta que a l'original no tenia estil
        x = b['x']
        if x.startswith('-'):
            x = '—' + x[1:]
        # guions de diàleg i incisos: - → —
        x = re.sub(r'(?<=\s)-(?=[^\W\d_])', '—', x)
        x = re.sub(r'(?<=[\w’!?.,])-(?=(va|vaig|digué|respongué|dic)\b)', ' —', x)
        x = re.sub(r'(?<=[a-zà-ú])-(?=[.,;:!?]|\s)', '—', x)
        b['x'] = typo(x)
    # paràgrafs partits per un salt de pàgina de l'original
    merged = []
    for b in body:
        if b['x'] == 'Esquema elaborat per al Projecte lector.':
            continue  # peu d'un esquema que no apareix a l'original
        if b['t'] == 'h' and b['x'] == b['x'].upper() and len(b['x']) > 20:
            continue  # repetició en majúscules del títol (L21, L25)
        b['x'] = re.sub(r'(?<=\s)-(?=\d)', '−', b['x'])  # signe menys
        if merged and n == 28 and b['x'] == 'Vés-te’n.':
            merged[-1]['x'] += ' ' + b['x']; continue
        merged.append(b)
    body = merged
    # correccions de contingut (text que faltava a l'original)
    for k, b in enumerate(body):
        if n == 3 and b['x'].startswith('Aquesta capa forma'):
            b['x'] = 'Just a sota del vidre hi ha la capa tàctil. La majoria de mòbils actuals tenen una pantalla capacitiva: una làmina molt fina recoberta d’un material conductor i transparent, com l’òxid d’indi i estany. ' + b['x']
        if n == 7 and b['x'].startswith('La calor de la paella'):
            body.insert(k, {'t': 'p', 'x': 'D’altra banda, trenquem un ou i el deixem caure a la paella calenta. La clara, que era transparent i viscosa, es torna blanca i sòlida, i el rovell s’endureix. Aquí no hi ha marxa enrere: per molt que el deixem refredar, l’ou ja no tornarà a ser cru. Què ha passat?'})
            break

    if n in INLINE_TERMS:
        gl = split_inline(' '.join((g['term'] + ' ' + g['def']).strip() for g in r['glossary']), INLINE_TERMS[n])
    else:
        gl = r['glossary']
    gl = [{'terme': term_case(g['term']), 'definicio': def_fix(g['def'])} for g in gl]
    for g in gl:
        if g['terme'] == 'Minyona':
            g['definicio'] = 'Dona que treballa fent les feines de casa d’una altra família.'
        if g['terme'] == 'Incandescent':
            g['definicio'] = 'Que emet llum a causa de la seva alta temperatura (com les bombetes tradicionals de filferro).'

    auth = unparsed_txt if n == 19 else r['authorship']
    words = sum(len(b['x'].split()) for b in body)
    lectures.append({
        'id': 'L%02d' % n,
        'num': n,
        'bloc': r['block'],
        'numOriginal': '%s %02d' % ({'stem': 'STEM', 'soc': 'SOC', 'expr': 'EXPR'}[r['block']], r['srcNum']),
        'materia': SUBJ[r['subjectSrc']],
        'titol': title,
        'llengua': 'es' if n == 19 else 'ca',
        'minuts': max(2, round(words / 150)),
        'autoria': parse_auth(auth),
        'text': body,
        'vocabulari': gl,
        'granPregunta': typo(r['bigQuestion']).replace('la Mariam', 'la protagonista'),
    })

data = {
    'meta': {'titol': 'Projecte lector', 'curs': '3r ESO', 'trimestre': '1r trimestre', 'anyCurs': '2026–27',
             'centre': 'Institut Escola el Temple', 'subcentre': 'Tortosa', 'portada': 'imatges/portada.jpg'},
    'blocs': BLOCKS,
    'lectures': lectures,
}
os.makedirs('out/dades', exist_ok=True)
with open('out/dades/lectures.js', 'w', encoding='utf-8') as f:
    f.write('/* Contingut del Projecte lector · 3r ESO · 1r trimestre.\n'
            '   Font única de dades: totes les variants (alumnat, docent, suport lingüístic) llegeixen aquest fitxer.\n'
            '   Estructura documentada a ESTRUCTURA.md. */\n')
    f.write('window.DOSSIER = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')

for l in lectures:
    print(l['id'], l['materia'], l['minuts'], 'min |', l['titol'][:45], '| voc', len(l['vocabulari']), '|',
          [a['k'] for a in l['autoria']], 'q', sum(1 for b in l['text'] if b['t'] == 'q'), 'h', sum(1 for b in l['text'] if b['t'] == 'h'))
