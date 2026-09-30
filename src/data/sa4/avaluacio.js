// Avaluació SA4: escrita (entrena els blocs de la prova sense copiar-los),
// checklist, test de transferència amb la Núria (context NOU, diferent de
// l'enigma de la Laia, de la prova i de l'escrita) i versió fàcil (c).
export const sa4Avaluacio = {
  // Assaig de prova escrita (reescrit 29/09/2026, un cop feta la prova de
  // SA4). Entrena les MATEIXES habilitats i el mateix nivell que cada bloc de
  // la prova, però amb casos nous (un altre cladograma, el gos, un cicle de 30
  // dies, un altre rumor, una altra taula de mètodes) i preguntes noves: cap
  // pregunta ni cas de la prova es copia. Taula OA → habilitat a ESTAT.md.
  // Comprovació: python scripts-avaluacio/audita_autoavaluacio.py sa4
  escrita: {
    intro:
      "Aquestes preguntes entrenen les mateixes habilitats que la prova, però amb casos nous: la prova NO serà igual. Full, bolígraf i sense apunts: escriu la resposta sencera i després compara-la amb els dos models. La majoria demanen CALCULAR, JUSTIFICAR o PREDIR, no recordar una llista.",
    minutes: 44,
    questions: [
      {
        id: 'w1',
        oa: 'OA1',
        source: "Entrena el bloc 1 de la prova · Llegir una taula de caràcters i corregir una classificació",
        minutes: 7,
        text: "Taula de caràcters. A = columna vertebral · B = quatre extremitats · C = amni (l'embrió es pot desenvolupar fora de l'aigua) · D = pèl i glàndules que fan llet · E = plomes. Estrella de mar: cap. Tonyina: A. Salamandra: A, B. Cocodril: A, B, C. Pardal: A, B, C, E. Dofí: A, B, C, D. a) En quin ordre van aparèixer els caràcters? Hi ha dos caràcters que no surten un darrere l'altre: quins són i per què? b) Un company diu: «El dofí és un peix, perquè viu a l'aigua i neda amb aletes». Corregeix-lo amb la taula. c) Un altre diu: «Els ocells vénen dels cocodrils». Reescriu la frase perquè sigui correcta.",
        model: {
          as: "a) A, B, C i després D i E. D i E estan en branques diferents: el dofí no té plomes i el pardal no té pèl. b) El dofí és un mamífer, perquè té pèl i fa llet (D). c) Els ocells i els cocodrils tenen un avantpassat comú.",
          ae: "a) Primer A (columna: la tenen tots menys l'estrella de mar), després B (tots menys la tonyina), després C (cocodril, pardal i dofí). A partir d'aquí la branca es parteix: D apareix només a la branca del dofí i E només a la del pardal. No surten un darrere l'altre perquè cap organisme els té tots dos: són caràcters de dues branques germanes, no d'una línia. b) El dofí és un mamífer: té D (pèl, encara que sigui poc, i llet) i, a més, C, que la tonyina no té. Nedar amb aletes és una semblança de forma que han desenvolupat grups diferents per viure a l'aigua; per classificar es fan servir caràcters heretats d'un avantpassat comú, no la manera de viure. c) «Els ocells i els cocodrils són grups germans: comparteixen un avantpassat comú que no era ni ocell ni cocodril». Els cocodrils actuals no són avantpassats de ningú: són parents que han continuat evolucionant."
        },
        aeWhy: "L'AE justifica cada pas amb qui té i qui no té el caràcter, explica per què D i E són branques paral·leles i per què nedar no serveix per classificar. Tanca la porta a l'error típic de llegir un cladograma com una escala on una espècie actual «es converteix» en una altra.",
        must: [
          "Has ordenat A, B, C i has dit que D i E són de branques diferents.",
          "Has classificat el dofí com a mamífer amb un caràcter de la taula.",
          "Has explicat per què viure a l'aigua o nedar no serveix per classificar.",
          "Has reescrit la frase amb la idea d'avantpassat comú."
        ]
      },
      {
        id: 'w2',
        oa: 'OA1',
        source: "Entrena el bloc 1 de la prova · Explicar per què les classificacions canvien",
        minutes: 4,
        text: "Fa unes dècades, els llibres posaven els cocodrils dins dels «rèptils», al costat de les sargantanes, i els ocells en un grup a part. En comparar-ne l'ADN i trobar fòssils de dinosaures amb plomes, es va veure que els cocodrils són més parents dels ocells que de les sargantanes. Què demostren aquestes proves? Què ens ensenyen sobre com funciona la ciència?",
        model: {
          as: "Demostren que els cocodrils i els ocells són parents propers. La ciència canvia les classificacions quan troba proves noves.",
          ae: "Demostren que ocells i cocodrils comparteixen un avantpassat comú més recent que el que comparteixen amb les sargantanes, i que els ocells són un grup de dinosaures que ha sobreviscut. La classificació antiga es basava en l'aspecte (escates, sang freda), i les proves noves (ADN, fòssils amb plomes) mesuren directament el parentiu. La ciència és provisional: no canvia d'idea per moda, sinó perquè apareixen proves que expliquen millor els fets, i qualsevol persona les pot tornar a comprovar. Una classificació és una hipòtesi sobre el parentiu, i per això es revisa."
        },
        aeWhy: "L'AE diu QUÈ demostren exactament les proves, per què l'aspecte enganyava i què fa que un canvi d'idea sigui científic. Tanca la porta a l'error típic «la ciència canvia, per tant no és de fiar».",
        must: [
          "Has dit què demostren les proves (avantpassat comú més proper).",
          "Has explicat per què la classificació antiga es basava en l'aspecte.",
          "Has dit que la ciència és provisional i canvia amb proves noves."
        ]
      },
      {
        id: 'w3',
        oa: 'OA2',
        source: "Entrena el bloc 2 de la prova · Cromosomes, combinacions 2ⁿ i un contrafactual",
        minutes: 7,
        text: "Els gossos tenen 78 cromosomes a cada cèl·lula del cos (39 parells). a) Quants cromosomes té un espermatozoide de gos? I el zigot? I una cèl·lula d'un cadell ja nascut? Anomena el procés de cada pas. b) Calcula (2ⁿ) quantes combinacions de gàmetes pot formar una mosca que té 4 parells, i una espècie que en té 6. Fes servir la idea per explicar per què els cadells d'una mateixa ventrada s'assemblen però no són idèntics. c) Imagina que la meiosi no reduís el nombre de cromosomes a la meitat. Què passaria generació rere generació?",
        model: {
          as: "a) Espermatozoide 39 (meiosi), zigot 78 (fecundació), cèl·lula del cadell 78 (mitosi). b) 2⁴ = 16 i 2⁶ = 64. Cada cadell ve d'un espermatozoide i un òvul diferents, per això no són iguals. c) Cada generació tindria el doble de cromosomes.",
          ae: "a) Cèl·lula del testicle 78 → (meiosi) → espermatozoide 39. Espermatozoide 39 + òvul 39 → (fecundació) → zigot 78. Zigot → (mitosi, moltes vegades) → cèl·lules del cadell amb 78 cadascuna. b) 2⁴ = 16 i 2⁶ = 64. En un gos, amb 39 parells, 2³⁹ és un nombre enorme de gàmetes diferents. Cada cadell neix d'un espermatozoide i un òvul amb una combinació diferent: tenen trets en comú perquè el seu material genètic surt de la mateixa mare i del mateix pare, però cadascun n'ha rebut una barreja única, i per això es diferencien. c) Els gàmetes tindrien 78 cromosomes i el zigot en tindria 156; a la generació següent, 312, i així doblant-se cada vegada. Les cèl·lules no podrien funcionar amb tant material genètic. La meiosi és justament el que manté constant el nombre de cromosomes d'una espècie."
        },
        aeWhy: "L'AE fa l'esquema complet amb el procés de cada pas, explica per què els cadells s'assemblen I per què no són iguals, i porta el contrafactual fins al final (la meiosi manté el nombre constant). Tanca la porta a l'error típic de posar «mitosi» per fer els gàmetes.",
        must: [
          "Has donat 39, 78 i 78 amb meiosi, fecundació i mitosi al lloc correcte.",
          "Has calculat 16 i 64.",
          "Has explicat per què s'assemblen i per què no són idèntics.",
          "Has predit que el nombre de cromosomes es doblaria a cada generació."
        ]
      },
      {
        id: 'w4',
        oa: 'OA2',
        source: "Entrena el bloc 2 de la prova · Calcular l'ovulació i raonar amb cicles irregulars",
        minutes: 6,
        text: "a) Una noia té cicles regulars de 30 dies i la regla li ha començat el 20 de novembre. Quin dia del cicle ovula, aproximadament, i a quina data correspon? b) Una altra noia té cicles que van de 27 a 36 dies. Entre quins dies del cicle pot ovular? Pot fer servir aquest càlcul per saber quins dies no es pot quedar embarassada? Justifica-ho.",
        model: {
          as: "a) 30 − 14 = 16. Ovula el dia 16 del cicle, que és el 5 de desembre. b) 27 − 14 = 13 i 36 − 14 = 22: entre el dia 13 i el 22. No, perquè no sap quin cicle tindrà.",
          ae: "a) Es compta enrere: entre l'ovulació i la menstruació següent hi ha uns 14 dies, sigui quin sigui el cicle. 30 − 14 = dia 16. Si el dia 1 és el 20 de novembre, el dia 16 és el 5 de desembre (novembre té 30 dies). b) Cicle curt: 27 − 14 = dia 13. Cicle llarg: 36 − 14 = dia 22. L'ovulació li pot caure del dia 13 al dia 22, i no sap per endavant si el cicle serà curt o llarg. A més, els espermatozoides poden sobreviure uns quants dies dins del cos, així que la finestra de risc encara és més ampla. No pot saber amb seguretat quins dies són «segurs»: el càlcul dona una aproximació, no una garantia."
        },
        aeWhy: "L'AE explica d'on surt el 14 (compta enrere des de la regla següent), converteix bé el dia del cicle en data i, al cas irregular, hi afegeix la supervivència dels espermatozoides. Tanca la porta a l'error típic de comptar 14 dies des del principi del cicle.",
        must: [
          "Has calculat el dia 16 i la data (5 de desembre).",
          "Has calculat l'interval del dia 13 al 22.",
          "Has respost que NO i ho has justificat amb la variabilitat del cicle.",
          "Has tingut en compte que els espermatozoides sobreviuen uns quants dies."
        ]
      },
      {
        id: 'w5',
        oa: 'OA3',
        source: "Entrena el bloc 3 de la prova · Classificar afirmacions i desmuntar un rumor amb biologia",
        minutes: 7,
        text: "a) Posa a cada frase CC (es pot comprovar i és certa), CF (es pot comprovar i és falsa) o V (és una valoració). 1) La testosterona es fabrica als testicles. 2) El VIH es pot encomanar compartint un got d'aigua. 3) Els nois no haurien de plorar. 4) Durant la pubertat, l'hipòfisi augmenta la producció de FSH i LH. b) En un fòrum, algú escriu: «Si el noi es retira abans d'ejacular, és impossible un embaràs. Nosaltres ho fem així fa un any i no ha passat res». Dona dues raons per les quals aquest missatge no és una prova fiable. c) Explica amb biologia per què aquest mètode sí que pot acabar en embaràs. d) On aconsellaries comprovar-ho? Digues dues fonts fiables i per què ho són.",
        model: {
          as: "a) 1 CC · 2 CF · 3 V · 4 CC. b) És el cas d'una sola parella, i no dona cap dada. c) Abans d'ejacular ja poden sortir espermatozoides i arribar a l'òvul. d) L'ASSIR i la web de l'OMS, perquè hi ha professionals de la salut.",
          ae: "a) 1 CC · 2 CF (el VIH passa per la sang i els fluids sexuals, no per la saliva) · 3 V (és una opinió sobre com s'han de comportar els nois; la ciència no ho pot decidir) · 4 CC. b) 1) És una experiència d'una sola parella: que a ells no els hagi passat no demostra que no pugui passar (també podria ser sort, o que ella no ovulés aquells dies). 2) No explica cap mecanisme ni dona cap dada de quantes parelles s'han quedat embarassades fent-ho. c) Abans de l'ejaculació pot sortir líquid que porta espermatozoides; aquests espermatozoides poden pujar fins a la trompa i, com que sobreviuen uns quants dies, poden trobar-hi un òvul encara que l'ovulació arribi més tard. Aleshores hi ha fecundació. A més, retirar-se a temps depèn de la persona i falla sovint. Per això és un mètode amb molts embarassos amb l'ús real. d) El centre de salut sexual i reproductiva (ASSIR) o el metge o la metgessa de família, i la web de l'Organització Mundial de la Salut: hi treballen professionals, les recomanacions es basen en estudis amb moltes persones, l'autor és conegut i no hi guanyen diners."
        },
        aeWhy: "L'AE justifica cada classificació difícil, dona dues raons DIFERENTS contra el missatge i desmunta el rumor amb el mecanisme (espermatozoides abans de l'ejaculació + supervivència). Tanca la porta a l'error típic de dir només «és fals» sense explicar per què el cos no funciona així.",
        must: [
          "Has classificat bé les quatre frases (CC, CF, V, CC).",
          "Has donat dues raons diferents contra el missatge.",
          "Has explicat el mecanisme pel qual hi pot haver fecundació.",
          "Has donat dues fonts fiables amb el motiu."
        ]
      },
      {
        id: 'w6',
        oa: 'OA3',
        source: "Entrena el bloc 3 de la prova · Separar el que diu la ciència d'una valoració",
        minutes: 3,
        text: "Un esborrany de cartell diu: «Als 13 anys, el cos d'una noia ja està preparat per ser mare». Separa què pot dir la ciència sobre aquesta frase i què és una valoració. Per què aquesta segona part no es resol amb un experiment?",
        model: {
          as: "Ciència: als 13 anys moltes noies ja ovulen i es poden quedar embarassades. Valoració: si estan «preparades» per ser mares. La ciència no pot decidir què està bé o malament.",
          ae: "Ciència: després de la primera regla els ovaris poden alliberar òvuls, i per tant biològicament hi pot haver embaràs; també sap que als 13 anys el cos encara creix i que els embarassos adolescents tenen més riscos per a la salut. Valoració: «estar preparada per ser mare» inclou maduresa, projecte de vida, drets i lleis, que depenen de valors i de la societat. La ciència aporta dades per decidir, però no pot dir què és millor o què està bé: això es decideix amb ètica, lleis i la decisió de cada persona."
        },
        aeWhy: "L'AE separa amb precisió el que és comprovable (ovulació, riscos) del que és una valoració, i explica QUÈ té la valoració que la ciència no pot mesurar. Tanca la porta a l'error típic de pensar que «si el cos pot, ja està preparat».",
        must: [
          "Has dit què pot afirmar la ciència (hi pot haver ovulació i embaràs; hi ha riscos).",
          "Has dit quina part és una valoració.",
          "Has explicat per què la ciència sola no la pot decidir."
        ]
      },
      {
        id: 'w7',
        oa: 'OA4',
        source: "Entrena el bloc 4 de la prova · Interpretar dades d'eficàcia i predir amb un contrafactual",
        minutes: 6,
        text: "Taula d'eficàcia (nombre d'embarassos en un any de cada 100 usuàries; primer si es fa servir perfectament i després com s'usa a la vida real): DIU hormonal 0,2 / 0,2 · Injecció hormonal cada 3 mesos 0,2 / 4 · Preservatiu intern 5 / 21 · Marxa enrere 4 / 20. Recorda la cadena: ① ordre d'ovular · ② surt l'òvul · ③ els gàmetes es troben · ④ l'embrió s'implanta. a) Amb la injecció, quants embarassos més hi ha amb l'ús real que amb el perfecte? Per què? b) Un grup de 400 persones usa el preservatiu intern tal com es fa a la vida real. Calcula quants embarassos hi haurà en un any. c) Suposa que s'inventa un mètode que actua ÚNICAMENT sobre la baula ②. Prediu què passaria amb l'embaràs i què passaria amb les ITS, i raona cada predicció.",
        model: {
          as: "a) 4 − 0,2 = 3,8 més, perquè de vegades la gent s'oblida de tornar a posar-se la injecció. b) 21 × 4 = 84. c) Sí que evitaria l'embaràs, perquè no hi hauria òvul. No protegiria de les ITS, perquè no fa de barrera.",
          ae: "a) 4 − 0,2 = 3,8: gairebé 4 embarassos més de cada 100 usuàries. El motiu és el comportament de les persones: si la dosi següent arriba tard, l'efecte s'acaba i torna l'ovulació. El DIU hormonal, en canvi, dona 0,2 en totes dues situacions: el posa una professional i funciona sol durant anys. b) 21 per cada 100 → 21 × 4 = 84 embarassos en un any. c) Evitaria l'embaràs: si no surt cap òvul, els espermatozoides no tenen res a fecundar i la cadena es trenca. En canvi, les ITS seguirien passant: els virus i els bacteris es transmeten de pell a pell i amb els líquids del sexe, i això no té res a veure amb l'òvul. Només un mètode de barrera (preservatiu) talla aquest camí."
        },
        aeWhy: "L'AE calcula i explica la diferència amb l'ús real, la compara amb un mètode que no depèn de la persona, i al contrafactual separa les dues cadenes: la de l'embaràs i la de les ITS. Tanca la porta a l'error típic de creure que tot mètode que evita l'embaràs també protegeix de les ITS.",
        must: [
          "Has calculat 3,8 i has explicat la diferència amb l'ús.",
          "Has calculat 84 embarassos.",
          "Has respost les dues parts del contrafactual per separat.",
          "Has dit que les ITS només les frena un mètode de barrera."
        ]
      },
      {
        id: 'w8',
        oa: 'OA4',
        source: "Entrena el bloc 4 de la prova · Recomanar un mètode justificant-ho amb dades i context",
        minutes: 4,
        text: "En Marc i la Jana (17 anys) comencen a sortir. Cap dels dos s'ha fet mai les proves d'ITS. La Jana diu: «Soc molt despistada: el mes passat em vaig oblidar tres vegades de prendre'm l'antibiòtic». Volen saber quina combinació de mètodes els convé. Fes servir la taula de la pregunta anterior. Escriu-los una resposta que: tingui en compte el seu context, faci servir dades, parli de les ITS i digui on poden demanar ajuda.",
        model: {
          as: "Com que la Jana s'oblida de les coses, li convé un DIU hormonal, que té 0,2 embarassos tant amb l'ús perfecte com amb el real. Com que no s'han fet les proves, han de fer servir també el preservatiu per a les ITS. Ho poden preguntar a l'ASSIR.",
          ae: "El seu context diu dues coses. 1) La Jana oblida sovint les coses: els mètodes que depenen de recordar-se'n tenen molta diferència entre l'ús perfecte i el real (la injecció passa de 0,2 a 4). Li convé un mètode que no depengui d'ella, com el DIU hormonal: 0,2 a les dues columnes. 2) La relació és nova i no s'han fet les proves: el DIU no fa barrera, així que el preservatiu és imprescindible per a les ITS. Per tant, la millor combinació és un mètode de llarga durada + preservatiu. Si més endavant són parella estable i tots dos es fan les proves amb resultat negatiu, la recomanació podria canviar. Poden anar a l'ASSIR (centre de salut sexual i reproductiva), on els informaran de les opcions i els faran les proves."
        },
        aeWhy: "L'AE llegeix el context (oblits, relació nova, sense proves), tria el mètode comparant l'ús perfecte amb el real, i separa la protecció contra l'embaràs de la protecció contra les ITS. També diu quan canviaria la recomanació. Tanca la porta a l'error típic de recomanar «el que té el número més baix» sense mirar la persona.",
        must: [
          "Has triat el mètode segons el context (els oblits de la Jana).",
          "Has fet servir dades d'eficàcia (ús perfecte i ús real).",
          "Has afegit el preservatiu per a les ITS i has explicat per què.",
          "Has dit on poden demanar ajuda."
        ]
      }
    ]
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé situar l'ésser humà com a única espècie vivent del gènere Homo i justificar-ho amb caràcters compartits i les funcions vitals (nutrició, relació, reproducció)." },
    { id: 'c2', oa: 'OA1', text: "Sé per quina raó les classificacions científiques (cladogrames) són provisionals i poden canviar amb noves proves, com l'ADN." },
    { id: 'c3', oa: 'OA2', text: "Sé identificar les 4 fases del cicle menstrual (menstruació, fol·licular, ovulació, lútea) i les hormones principals de cadascuna (FSH, LH, estrògens, progesterona)." },
    { id: 'c4', oa: 'OA2', text: "Puc calcular el dia d'ovulació aproximat d'un cicle de qualsevol durada (fórmula: dies del cicle − 14) i sé per quina raó el 'dia 14' no és universal." },
    { id: 'c5', oa: 'OA2', text: "Sé identificar les estructures principals de l'aparell reproductor masculí (testicles, epidídim, conducte deferent) i femení (ovaris, trompes, úter, endometri) i n'explico la funció." },
    { id: 'c6', oa: 'OA3', text: "Sé explicar per quina raó els gàmetes tenen 23 cromosomes (meiosi, SA1) i el zigot en té 46 (fecundació), i per quina raó aquest nombre es manté constant cada generació." },
    { id: 'c7', oa: 'OA3', text: "Sé distingir embrió (0-8 setmanes) de fetus i identifico les fites clau de cada trimestre (cor batega S4, fetus S9, viabilitat S22-24)." },
    { id: 'c8', oa: 'OA3', text: "Sé explicar la diferència entre bessons univitel·lins (1 zigot dividit → mateixa genètica → mateix sexe biològic) i bivitel·lins (2 fecundacions → genètica diferent → poden ser sexes distints)." },
    { id: 'c9', oa: 'OA4', text: "Distingeixo el preservatiu (doble protecció: embaràs + ISTs) dels mètodes hormonals (embaràs, NO ISTs) i sé per quina raó la diferència és crítica per a la salut." },
    { id: 'c10', oa: 'OA4', text: "Sé explicar el mecanisme de la píndola (inhibició de l'ovulació per hormones sintètiques) i puc matisar el mite 'la píndola engreixa' amb evidència." },
    { id: 'c11', oa: 'OA4', text: "Identifico les ISTs principals (VIH, HPV, herpes, clamidia), la via de transmissió principal i si són bacterianes (tractables amb antibiòtic) o víriques." },
    { id: 'c12', oa: 'OA4', text: "Sé explicar per quina raó el mètode del calendari és poc fiable: variació del dia d'ovulació (±3-5 dies) + supervivència dels espermatozoides 3-5 dies." }
  ],

  // Cas-fil NOU: la Núria i la Sandra — context diferent de l'enigma de la Laia.
  // Toca els 3 OA: cicle i aparells (OA1), cromosomes i determinació de sexe (OA2), mètodes i ISTs (OA3).
  test: {
    context:
      "La Núria té 14 anys i porta mig any apuntant el cicle a una aplicació. Normalment li dura 28 dies, però el mes dels exàmens se li va allargar fins a 31. A més, una companya li ha dit coses sobre la píndola i sobre el VIH que no acaben de quadrar amb el que heu treballat a classe.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "Si un mes el cicle de la Núria dura 31 dies en comptes de 28, quin dia ovularà aproximadament?",
        options: [
          "El dia 14, perquè l'ovulació cau sempre el mateix dia visqui el cicle que visqui",
          "El dia 17, perquè s'allarga la primera fase i l'última dura uns 14 dies",
          "El dia 15 o 16, perquè l'ovulació es produeix just a la meitat de qualsevol cicle",
          "No es pot saber, perquè sense una analítica hormonal no hi ha cap manera de deduir-ho"
        ],
        correct: 1,
        feedback: {
          correct: "Exacte. La fase lútia és la constant (≈14 dies); el que varia és la fol·licular. Per això 31 − 14 = 17, i per això el mètode del calendari és tan poc fiable.",
          wrong: "Una de les dues fases dura sempre el mateix i l'altra és la que s'allarga o s'escurça. Compta enrere des del final del cicle, no endavant des del principi."
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "Una companya li diu a la Núria que la píndola deixa estèril per sempre. És cert?",
        options: [
          "Sí: les hormones de la píndola malmeten els ovaris de manera definitiva",
          "És cert a mitges: la fertilitat no torna fins al cap de dos anys d'haver-la deixada",
          "No: inhibeix FSH i LH i atura l'ovulació, però en deixar-la el cicle es recupera",
          "No: la píndola no és hormonal i actua només com una barrera dins de l'úter"
        ],
        correct: 2,
        feedback: {
          correct: "Correcte. Són estrògens i progesterona sintètics que impedeixen el pic de FSH i LH, de manera que no hi ha ovulació. En deixar-la, el cicle sol recuperar-se en pocs mesos.",
          wrong: "La píndola actua sobre les hormones que ordenen l'ovulació, no sobre l'ovari. Què passa amb aquelles hormones quan es deixa de prendre?"
        }
      },
      {
        id: 't3',
        oa: 'OA3',
        text: "La Núria pregunta com es transmet realment el VIH i quina és la millor prevenció. Quina resposta és correcta?",
        options: [
          "Es transmet per saliva com qualsevol virus respiratori i per això cal evitar compartir el got",
          "Es transmet per sang i fluids sexuals, i el preservatiu és la prevenció més eficaç",
          "Només es transmet per transfusions, de manera que les relacions sexuals no hi tenen risc",
          "És un bacteri de transmissió sexual i es cura amb antibiòtics si es detecta aviat"
        ],
        correct: 1,
        feedback: {
          correct: "Així és. Les vies són la sanguínia i els fluids sexuals; la saliva no transmet. El preservatiu és l'únic mètode que protegeix alhora d'embaràs i d'ITS.",
          wrong: "Repassa quines vies de transmissió té el VIH i quines no. I fixa't que el preservatiu és l'únic mètode que fa dues feines a la vegada."
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "Connecta amb la SA3: per quina raó el VIH és tan perillós per al sistema immunitari?",
        options: [
          "Perquè destrueix els eritròcits i provoca una anèmia com la del Marc de la SA2",
          "Perquè provoca una febre tan alta i tan llarga que acaba matant totes les defenses",
          "Perquè destrueix els macròfags, que són la primera barrera de la immunitat innàta",
          "Perquè destrueix els limfòcits T CD4+, que coordinen tota la resposta adaptativa"
        ],
        correct: 3,
        feedback: {
          correct: "Exacte. Sense limfòcits T CD4+ no es coordina ni la fabricació d'anticossos ni la destrucció de cèl·lules infectades, i el cos queda exposat a infeccions oportunistes.",
          wrong: "El VIH no ataca qualsevol cèl·lula: ataca justament la que fa de director d'orquestra de la resposta adaptativa. Quina era, a la SA3?"
        }
      }
    ]
  },

  // Versió fàcil (PROMPT 3): frases curtes, una idea per pregunta, 2 opcions.
  c: {
    checklist: [
      { id: 'c1', oa: 'OA1', icon: '🌳', text: "Sé que dos animals s'assemblen quan tenen un avantpassat comú." },
      { id: 'c2', oa: 'OA2', icon: '🧬', text: "Sé que l'òvul i l'espermatozoide porten la meitat dels cromosomes." },
      { id: 'c3', oa: 'OA3', icon: '🔍', text: "Sé que el que li ha passat a una sola persona no és una prova." },
      { id: 'c4', oa: 'OA4', icon: '🛡️', text: "Sé que només el preservatiu protegeix de les ITS." }
    ],
    preguntes: [
      {
        id: 'p1', oa: 'OA2',
        img: '/images/sa4-s2-fecundacio.svg',
        alt: "Un espermatozoide s'uneix a un òvul i en surt una sola cèl·lula, el zigot.",
        llegir: "L'òvul porta 23 cromosomes. L'espermatozoide també en porta 23. Quan s'uneixen, fan el zigot 🧬.",
        text: "Quants cromosomes té el zigot?",
        options: ["23, com l'òvul i l'espermatozoide", "46, la suma dels dos"],
        correct: 1
      },
      {
        id: 'p2', oa: 'OA4',
        img: '/images/sa4-s4-cadena-metodes.svg',
        alt: "Cadena de quatre passos que porten a un embaràs, amb el lloc on actua cada mètode anticonceptiu.",
        llegir: "La píndola evita l'embaràs. Però no fa de barrera: no atura els microbis de les ITS. El preservatiu, sí 🛡️.",
        text: "La Lara pren la píndola. La protegeix de les ITS?",
        options: ["No, per a les ITS cal el preservatiu", "Sí, la protegeix de l'embaràs i de les ITS"],
        correct: 0
      },
      {
        id: 'p3', oa: 'OA3',
        img: '/images/sa4-s4-video-viral.jpg',
        alt: "Un mòbil que mostra un vídeo amb moltes visualitzacions.",
        llegir: "Una història d'una sola persona no demostra res. Per saber-ho, cal preguntar a un professional de la salut.",
        text: "Un noi diu en un vídeo: «A mi no em va passar res». Això és una prova?",
        options: ["Sí, perquè ell ho ha viscut en primera persona", "No, és el cas d'una sola persona"],
        correct: 1
      }
    ],
    completar: {
      id: 'k1', oa: 'OA2',
      llegir: "Cada mes, un ovari allibera un òvul. Si no hi ha embaràs, l'úter es buida i ve la regla.",
      frase: "Cada mes, l'{0} allibera un {1}.",
      respostes: ['ovari', 'òvul'],
      banc: ['ovari', 'estómac', 'òvul', 'os']
    }
  }
}
