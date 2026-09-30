"""Auditoria prova escrita <-> autoavaluació (3r ESO, SA1-SA4).

L'autoavaluació pre-examen (web/src/data/saN/avaluacio.js: blocs `escrita`,
`test` i `c`) ha de PREPARAR la prova sense copiar-la. Aquest script ho
comprova de manera mecànica:

  1. Cap seqüència de >= 8 paraules seguides coincident entre qualsevol text
     de la prova (B, C, solucionari) i qualsevol text de l'autoavaluació.
  2. Cap cas ni personatge coincident: noms propis de la prova (paraules amb
     majúscula que no van a inici de frase) que reapareixen a l'autoavaluació,
     i xifres "de cas" (amb decimals o 3+ xifres) repetides.
  3. Test de transferència i preguntes de la versió C: la correcta no sempre
     a la mateixa posició, ni la primera a totes, ni la més llarga en més d'una.
     La posició que es comprova és la que veu l'alumne (els components barregen
     les opcions amb permutacioEstable de src/utils.js).
  4. Cada `source` de l'escrita diu «Entrena el bloc ...».

Ús:  python scripts-avaluacio/audita_autoavaluacio.py     (des de web/)
Surt amb codi 1 si hi ha cap error (🔴); els avisos (🟡) no fan fallar.
"""
import json
import re
import subprocess
import sys
import unicodedata
from pathlib import Path

WEB = Path(__file__).resolve().parents[1]
ROOT = WEB.parent

# Fitxers de prova per SA (glob relatius a l'arrel del projecte).
PROVES = {
    'sa1': ['SA1-celula/S4-poster/prova_escrita_*.docx',
            'SA1-celula/S4-poster/solucionari_prova_*.docx',
            'SA1-celula/S4-poster/solucionari_prova_escrita.md',
            'SA1-celula/prova_escrita.docx'],
    'sa2': ['SA2-cos-huma/prova_escrita_sa2_*.docx',
            'SA2-cos-huma/solucionari_prova_sa2.docx'],
    'sa3': ['SA3-defensors-cos/prova_sa3_*.docx'],
    'sa4': ['SA4-creixer-reproduir/**/*prova*.docx',
            'SA4-creixer-reproduir/**/*solucionari*.docx',
            'SA4-creixer-reproduir/**/*prova*.md',
            'SA4-creixer-reproduir/**/*solucionari*.md'],
}

NGRAM = 8

# Elements que identifiquen el CAS de cada prova (organisme, persona, lloc,
# situació-problema). Cap d'ells pot aparèixer a l'autoavaluació.
CAS = {
    'sa1': ['abissàlia', 'adob', 'margulis', '2.000 m', 'fibrosi quística', 'golgi'],
    'sa2': ['nora', 'pau', 'cursa popular', 'ulldecona', '9,8'],
    'sa3': ['xarampió', 'autisme', 'suplement', 'influencer', 'yasmina', 'martina', 'trivírica'],
    'sa4': ['ratpenat', 'neandertal', 'ximpanzé', 'bústia', 'cosina', '400.000',
            'diu de coure', 'setmana 10', '26 dies', "3 d'octubre", 'biblioteca', 'sargantana'],
}

# Paraules amb majúscula que no identifiquen cap cas (sigles, termes, rètols).
NO_CAS = set('''
OA AS AN AE NA ADN ARN ATP CO O₂ FC FCmàx VIH HPV ITS IST ISTs EPO ADH FSH LH
CAP IE Temple ESO SA Bloc V F Versió Figura Rúbrica Annex Resposta Encara
Sé Explico Interpreto Relaciono Connecto Justifico Argumento Detecto Identifico
Reconec Avaluo Descric Llegeixo Ho Si Quin Quina Quins Quines Per Com Què On
Amb Sense Recorda Paraules Marca Ordena Explica Calcula Completa Relaciona
Decideix Imagina Proposa Escriu Indica Observa Llegeix Anomena Justifica Dona
Contrafactual Bona Gràcies NOM I COGNOMS CURS GRUP DATA NIVELL GLOBAL
Biologia Geologia BIOLOGIA GEOLOGIA Europa Catalunya Sol Terra Homo
'''.split())


def norm(s):
    s = unicodedata.normalize('NFKD', s.lower())
    s = ''.join(c for c in s if not unicodedata.combining(c))
    return re.findall(r"[a-z0-9·']+", s)


def llegeix_docx(p):
    import docx
    d = docx.Document(p)
    out = [x.text for x in d.paragraphs]
    for t in d.tables:
        for r in t.rows:
            seen = set()
            for c in r.cells:
                if id(c._tc) not in seen:
                    seen.add(id(c._tc))
                    out.append(c.text)
    return out


def textos_prova(sa):
    fitxers, textos = [], []
    for pat in PROVES[sa]:
        for p in sorted(ROOT.glob(pat)):
            if '_arxiu' in p.parts or '_to_delete' in str(p):
                continue
            if p in fitxers:
                continue
            fitxers.append(p)
            if p.suffix == '.docx':
                textos += llegeix_docx(p)
            else:
                textos += p.read_text(encoding='utf-8').splitlines()
    return fitxers, [t for t in textos if t.strip()]


def avaluacio(sa):
    f = (WEB / 'src' / 'data' / sa / 'avaluacio.js').as_uri()
    u = (WEB / 'src' / 'utils.js').as_uri()
    # Els components (TransferTest, AutoavaluacioC) barregen les opcions amb
    # permutacioEstable(id|text): afegim `_shown`, la posició que VEU l'alumne.
    js = ("Promise.all([import(%r),import(%r)]).then(([m,u])=>{"
          "const o=Object.values(m)[0];"
          "const pos=q=>u.permutacioEstable(q.id+'|'+(q.text??''),q.options.length).indexOf(q.correct);"
          "for(const q of (o.test?.questions??[]))q._shown=pos(q);"
          "for(const q of (o.c?.preguntes??[]))q._shown=pos(q);"
          "process.stdout.write(JSON.stringify(o))})" % (f, u))
    r = subprocess.run(['node', '-e', js], capture_output=True, text=True,
                       encoding='utf-8', cwd=WEB)
    if r.returncode:
        sys.exit(f'No puc llegir {sa}/avaluacio.js:\n{r.stderr}')
    return json.loads(r.stdout)


def textos_autoaval(a):
    """(etiqueta, text) de tot el que l'alumne llegeix a escrita/test/c."""
    out = []
    e = a.get('escrita') or {}
    for q in e.get('questions', []):
        out.append((f"escrita.{q['id']}.text", q['text']))
        out.append((f"escrita.{q['id']}.as", q['model']['as']))
        out.append((f"escrita.{q['id']}.ae", q['model']['ae']))
        out.append((f"escrita.{q['id']}.aeWhy", q.get('aeWhy', '')))
        out += [(f"escrita.{q['id']}.must", m) for m in q.get('must', [])]
    t = a.get('test') or {}
    out.append(('test.context', t.get('context', '')))
    for q in t.get('questions', []):
        out.append((f"test.{q['id']}.text", q['text']))
        out += [(f"test.{q['id']}.opt", o) for o in q['options']]
        out += [(f"test.{q['id']}.fb", v) for v in q.get('feedback', {}).values()]
    c = a.get('c') or {}
    for q in c.get('preguntes', []):
        out += [(f"c.{q['id']}", q.get(k, '')) for k in ('llegir', 'text')]
        out += [(f"c.{q['id']}.opt", o) for o in q['options']]
    k = c.get('completar')
    if k:
        out.append((f"c.{k['id']}", k.get('frase', '') + ' ' + k.get('llegir', '')))
    return [(l, x) for l, x in out if x]


def ngrams(words, n=NGRAM):
    return {' '.join(words[i:i + n]) for i in range(len(words) - n + 1)}


def noms_propis(linies):
    noms = set()
    for l in linies:
        for frase in re.split(r'[.!?:;«»"()\n]|—|·', l):
            paraules = frase.strip().split()
            for w in paraules[1:]:
                w = w.strip(",'’")
                if re.fullmatch(r"[A-ZÀÈÉÍÒÓÚÇ][a-zàèéíòóúïüç·]{2,}", w) and w not in NO_CAS:
                    noms.add(w)
    return noms


def xifres_cas(linies):
    s = ' '.join(linies)
    return set(re.findall(r'\b\d+,\d+\b|\b\d{1,3}\.\d{3}\b', s))


def comprova_opcions(etiqueta, qs, errors, avisos):
    if not qs:
        return
    # Posició a pantalla (després de la barreja); si no n'hi ha, la de la dada.
    pos = [q.get('_shown', q['correct']) for q in qs]
    llarga = []
    for q in qs:
        lens = [len(o) for o in q['options']]
        c = lens[q['correct']]
        if c == max(lens) and lens.count(c) == 1:
            llarga.append(q['id'])
    if len(qs) > 1 and len(set(pos)) == 1:
        errors.append(f"{etiqueta}: a pantalla la correcta és SEMPRE la posició {pos[0]} ({pos})")
    if pos.count(0) == len(qs):
        errors.append(f"{etiqueta}: a pantalla la correcta és sempre la primera")
    if len(llarga) > 1:
        errors.append(f"{etiqueta}: la correcta és la MÉS LLARGA a {llarga}")
    elif llarga:
        avisos.append(f"{etiqueta}: la correcta és la més llarga a {llarga} (només una, tolerat)")
    return pos, llarga


def audita(sa):
    errors, avisos = [], []
    fitxers, prova = textos_prova(sa)
    a = avaluacio(sa)
    auto = textos_autoaval(a)
    print(f"\n=== {sa.upper()} ===")
    if not fitxers:
        avisos.append("no s'ha trobat cap prova escrita: només es comproven test i sources")
    else:
        print('  prova:', ', '.join(str(f.relative_to(ROOT)) for f in fitxers))

    # 1 · frases coincidents
    ng_prova = set()
    for l in prova:
        ng_prova |= ngrams(norm(l))
    for etiq, txt in auto:
        comuns = ngrams(norm(txt)) & ng_prova
        if comuns:
            errors.append(f"{etiq}: {len(comuns)} seqüència/es de {NGRAM} paraules de la prova, p. ex. «{sorted(comuns)[0]}»")

    # 2 · casos i personatges
    tot_auto = ' '.join(x for _, x in auto)
    tot_min = ' '.join(prova) + ' ' + tot_auto
    for nom in sorted(noms_propis(prova)):
        # Si la paraula també surt en minúscula, és una paraula comuna a inici
        # de frase («Les», «Perquè»), no un nom propi.
        if re.search(r'(?<!\w)' + re.escape(nom.lower()) + r'(?!\w)', tot_min):
            continue
        if re.search(r'\b' + re.escape(nom) + r'\b', tot_auto):
            on = [l for l, x in auto if re.search(r'\b' + re.escape(nom) + r'\b', x)]
            errors.append(f"cas/personatge de la prova «{nom}» a {', '.join(sorted(set(on))[:4])}")
    baix = [(l, x.lower()) for l, x in auto]
    for marca in CAS.get(sa, []):
        rx = r'(?<!\w)' + re.escape(marca) + r'(?!\w)'
        on = sorted({l for l, x in baix if re.search(rx, x)})
        if on:
            errors.append(f"element del cas de la prova «{marca}» a {', '.join(on[:4])}")
    for x in sorted(xifres_cas(prova)):
        if re.search(r'(?<![\d,.])' + re.escape(x) + r'(?![\d,])', tot_auto):
            avisos.append(f"la xifra «{x}» de la prova reapareix a l'autoavaluació (comprova que no sigui el mateix cas)")

    # 3 · posicions i longituds
    comprova_opcions('test', (a.get('test') or {}).get('questions', []), errors, avisos)
    comprova_opcions('c.preguntes', (a.get('c') or {}).get('preguntes', []), errors, avisos)

    # 4 · sources
    for q in (a.get('escrita') or {}).get('questions', []):
        if not q.get('source', '').startswith('Entrena el bloc'):
            errors.append(f"escrita.{q['id']}.source no diu «Entrena el bloc …»: «{q.get('source')}»")

    if sa != 'sa1' and not a.get('c'):
        avisos.append("no té clau `c` (versió fàcil)")

    for e in errors:
        print('  🔴', e)
    for w in avisos:
        print('  🟡', w)
    if not errors:
        print('  ✅ cap coincidència ni problema de posicions')
    return len(errors)


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    sas = sys.argv[1:] or ['sa1', 'sa2', 'sa3', 'sa4']
    n = sum(audita(s) for s in sas)
    print(f"\n{'🔴 ' + str(n) + ' error/s' if n else '✅ Tot net'}")
    sys.exit(1 if n else 0)
