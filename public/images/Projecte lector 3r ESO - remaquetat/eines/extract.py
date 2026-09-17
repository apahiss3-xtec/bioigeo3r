import fitz, json, re
d=fitz.open(r'C:/Users/apahiss3/Downloads/Projecte_Lector_3r_ESO_1r_trimestre_ALUMNAT.pdf')
BLOCKS={1:'stem',31:'soc',64:'expr'}
readings=[]; cur=None; section=None; block=None
def txt(spans): return ''.join(s['text'] for s in spans)
for pi,p in enumerate(d):
    pn=pi+1
    if pn in BLOCKS: block=BLOCKS[pn]
    for b in p.get_text('dict')['blocks']:
        if b['type']!=0: continue
        spans=[s for l in b['lines'] for s in l['spans']]
        lines=[txt(l['spans']) for l in b['lines']]
        s0=spans[0]; size=round(s0['size'],1); font=s0['font']; col=s0['color']
        full=' '.join(x.strip() for x in lines).strip()
        full=re.sub(r'\s+',' ',full)
        if size==7.0: continue
        if full.startswith('PROJECTE LECTOR /'):
            m=re.search(r'LECTURA (\d+) · (.+)$',full)
            cur={'block':block,'srcNum':int(m.group(1)),'subjectSrc':m.group(2).strip(),'title':'','authorship':[],'body':[],'glossary':[],'bigQuestion':'','srcPages':[pn]}
            readings.append(cur); section='head'; continue
        if cur is None: continue
        if pn not in cur['srcPages']: cur['srcPages'].append(pn)
        if pn==85: cur=None; continue
        if size==20.0: cur['title']=(cur['title']+' '+full).strip(); continue
        if size==7.4 and col==3043181:
            section={'AUTORIA I FONT':'auth','VOCABULARI CLAU':'gloss','ANOTACIONS':'notes','LA GRAN PREGUNTA':'bq'}.get(full,section); continue
        if section=='auth' and size==7.5:
            cur['authorship'].append(full); continue
        if size==10.6: cur['body'].append({'h':full}); section='body'; continue
        if size==10.2 and section in ('auth','body'):
            section='body'; cur['body'].append({'p':full}); continue
        if section=='gloss':
            # split per line: bold span starts a term
            for l in b['lines']:
                for s in l['spans']:
                    t=s['text']
                    if 'Bold' in s['font'] and col==2175818 or ('Bold' in s['font'] and s['color']==2175818):
                        cur['glossary'].append({'term':t.strip(),'def':''})
                    elif cur['glossary']:
                        g=cur['glossary'][-1]; g['def']=(g['def']+' '+t.strip()).strip()
                    else:
                        cur['glossary'].append({'term':'','def':t.strip()})
            continue
        if size==13.5:
            if section=='bq': cur['bigQuestion']=(cur['bigQuestion']+' '+full).strip()
            else: cur['body'].append({'bq_inline':full})
            continue
        cur.setdefault('unparsed',[]).append([pn,size,font,col,full])
json.dump(readings,open('raw.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
for i,r in enumerate(readings):
    print(i+1,r['block'],r['srcNum'],r['subjectSrc'],'|',r['title'][:40],'| auth',len(r['authorship']),'body',len(r['body']),'gloss',len(r['glossary']),'bq',bool(r['bigQuestion']),'unp',len(r.get('unparsed',[])))
