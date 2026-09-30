// Material d'autoavaluació de SA3: checklist d'estudi + test de
// transferència amb un context NOU (un alumne nouvingut amb carnet de vacunes incomplet i rubèola a classe,
// diferent dels casos "grip de novembre" i "article anti-vacunes" que vertebren la SA).
export const sa3Avaluacio = {
  // Assaig de prova escrita (reescrit 29/09/2026). Entrena les MATEIXES
  // habilitats i el mateix nivell que cada bloc de la prova de SA3, però amb
  // casos nous (tètanus, galteres a tres escoles, vídeo de vitamina C, vaper,
  // finestres obertes) i preguntes noves: cap pregunta ni cas de la prova es
  // copia. Taula OA → habilitat a ESTAT.md.
  // Comprovació: python scripts-avaluacio/audita_autoavaluacio.py sa3
  escrita: {
    intro:
      "Aquestes preguntes entrenen les mateixes habilitats que la prova dels defensors del cos, però amb casos nous: la prova NO serà igual. Escriu-les senceres a mà, sense apunts. Compte: gairebé totes demanen JUSTIFICAR, i justificar no és repetir l'afirmació amb altres paraules; és dir el mecanisme o la dada que la fa certa.",
    minutes: 38,
    questions: [
      {
        id: 'w1',
        oa: 'OA1',
        source: "Entrena el bloc 1 de la prova · Ordenar les defenses i explicar com actua una vacuna",
        minutes: 7,
        text: "L'Arnau es clava un clau rovellat al peu. Al CAP li posen una dosi de record de la vacuna del tètanus, que conté la toxina del bacteri inactivada (no fa mal, però el cos la reconeix). a) Ordena les defenses que es troba el bacteri, de la primera a la més específica. b) Explica què fa el cos amb la vacuna i per què, si mai el tètanus li entra de veritat, estarà protegit. Fes servir «antigen», «anticòs» i «memòria». c) Per què cal una dosi de record cada uns quants anys?",
        model: {
          as: "a) La pell (que s'ha trencat), la inflamació, els anticossos i la memòria. b) La toxina inactivada és un antigen; el cos fabrica anticossos contra ella i en guarda memòria. Si després entra el tètanus, el reconeix i fa anticossos de seguida. c) Perquè la memòria es va perdent amb els anys.",
          ae: "a) 1) Barrera externa: la pell, que el clau ha travessat. 2) Resposta innata: inflamació (vermellor, calor) i cèl·lules que es mengen microbis sense distingir-los. 3) Resposta adaptativa: limfòcits que fabriquen anticossos específics. 4) Memòria immunitària, que queda per a la propera vegada. b) La toxina inactivada no fa mal, però té la mateixa forma que la de debò: és un antigen. Els limfòcits que la reconeixen es multipliquen i fabriquen anticossos que s'hi enganxen; en acabar, en queden limfòcits de memòria. Si un dia entra la toxina real, aquests limfòcits la reconeixen a l'instant i fan molts anticossos en pocs dies, abans que la toxina paralitzi cap múscul. Sense vacuna, aquesta primera resposta seria massa lenta. c) Amb els anys queden menys limfòcits de memòria i menys anticossos; la dosi de record torna a presentar l'antigen i en refà la quantitat. Protegeix la vacuna, no l'haver-se clavat el clau abans: el tètanus no deixa prou memòria per si sol."
        },
        aeWhy: "L'AE distingeix innata i adaptativa a l'ordre, explica per què la resposta amb memòria arriba a temps i justifica el record amb la quantitat de memòria. Tanca la porta a l'error típic de confondre antigen (el que el cos reconeix) amb anticòs (el que el cos fabrica).",
        must: [
          "Has posat les quatre defenses en ordre: pell, innata, anticossos, memòria.",
          "Has dit que la toxina inactivada fa d'antigen i que el cos hi fabrica anticossos.",
          "Has explicat per què la resposta amb memòria és més ràpida i arriba a temps.",
          "Has justificat la dosi de record."
        ]
      },
      {
        id: 'w2',
        oa: 'OA1',
        source: "Entrena el bloc 1 de la prova · Llegir una taula, calcular el llindar d'immunitat de grup i raonar un contrafactual",
        minutes: 8,
        text: "Les galteres són una malaltia vírica amb R₀ ≈ 10. Aquest curs, tres escoles del Montsià tenen aquestes cobertures de vacuna: Escola del Riu, 93 % (cap cas); Escola del Pla, 86 % (onze casos); Escola del Port, 90,5 % (un sol cas). a) Calcula el llindar d'immunitat de grup (1 − 1/R₀), en % amb un decimal. b) Quines escoles queden per sota del llindar? Encaixa amb els casos? c) El Jan, germà d'una alumna de l'Escola del Riu, té dos mesos i encara no es pot vacunar. Explica com el protegeix que la resta estigui vacunada, i què canviaria si la seva germana anés a l'Escola del Pla.",
        model: {
          as: "a) 1 − 1/10 = 0,9 → 90,0 %. b) Només l'Escola del Pla (86 %) està per sota, i és la que té més casos. c) Si gairebé tothom està vacunat, el virus no troba prou gent per contagiar i no arriba al Jan. A l'Escola del Pla seria més fàcil que la germana el portés a casa.",
          ae: "a) 1 − 1/10 = 1 − 0,1 = 0,9 → 90,0 %. b) Només l'Escola del Pla (86 % < 90,0 %). Les dades hi encaixen: és l'única amb un brot. L'Escola del Port (90,5 %) està just per sobre: el virus hi ha entrat però no s'ha pogut escampar, i per això s'ha quedat en un sol cas. c) Cada malalt contagiaria unes 10 persones si ningú estigués protegit; amb més del 90 % vacunat, cada cas troba de mitjana menys d'una persona que es pugui encomanar i la cadena s'atura abans d'arribar a casa del Jan. Ell no té cap defensa pròpia: el protegeix la barrera que fan els altres. A l'Escola del Pla, per sota del llindar, les cadenes de contagi continuen, és molt més probable que la germana s'encomani i, per tant, que el virus arribi al Jan."
        },
        aeWhy: "L'AE fa el càlcul amb el decimal que es demana, compara CADA escola amb el llindar (també la que hi està just per sobre) i explica la protecció amb la cadena de contagis. Tanca la porta a l'error típic de dir que el Jan està protegit perquè «els vacunats no el poden encomanar» sense explicar per què la cadena s'atura.",
        must: [
          "Has calculat el llindar: 90,0 %.",
          "Has comparat les tres escoles amb el llindar i ho has relacionat amb els casos.",
          "Has explicat que el Jan no té defenses pròpies i que el protegeix que la cadena de contagis s'aturi.",
          "Has dit què canviaria amb una escola per sota del llindar."
        ]
      },
      {
        id: 'w3',
        oa: 'OA2',
        source: "Entrena el bloc 2 de la prova · Avaluar una font amb tres criteris",
        minutes: 6,
        text: "Circula un vídeo d'un home amb bata blanca que diu que prendre 10 grams de vitamina C al dia cura la grip en 24 hores. Hi surten tres persones que expliquen que a elles els va funcionar. Diu que «la indústria farmacèutica no vol que ho sàpigues». Al final del vídeo, ensenya com comprar les seves càpsules de vitamina C. És una font fiable? Justifica-ho amb tres criteris diferents.",
        model: {
          as: "No és fiable. Només hi ha tres persones, que és molt poc. Ell ven les càpsules, així que guanya diners si t'ho creus. I no diu cap estudi que ho hagi comprovat.",
          ae: "No és fiable, per tres motius independents. 1) Nombre de casos: tres testimonis no són un estudi; no sabem quants la van prendre sense notar-hi res, i la grip ja se cura sola en pocs dies, per tant sense un grup de comparació no es pot saber si va ser la vitamina. 2) Interès econòmic: qui ho afirma ven el producte i guanya diners si la gent se'l creu. 3) Revisió: no cita cap estudi publicat ni repetit per altres científics; la bata blanca no és una prova. A més, «la indústria no vol que ho sàpigues» és un senyal d'alerta: substitueix les dades per una sospita. Una font fiable ensenya les dades perquè altres les puguin comprovar."
        },
        aeWhy: "L'AE fa servir tres criteris DIFERENTS i explica per què cadascun invalida la conclusió (per exemple, que la grip es cura sola). Tanca la porta a l'error típic de donar tres vegades el mateix criteri amb paraules diferents.",
        must: [
          "Has dit clarament que no és fiable.",
          "Has fet servir tres criteris diferents, no el mateix repetit.",
          "Per a cada criteri, has explicat per què fa que la conclusió no sigui de fiar."
        ]
      },
      {
        id: 'w4',
        oa: 'OA3',
        source: "Entrena el bloc 3 de la prova · Explicar com actua una droga i la base física de l'addicció",
        minutes: 6,
        text: "En Pol, de 16 anys, vapeja amb nicotina «només els caps de setmana». Al cap de tres mesos, en necessita cada vegada més per notar el mateix efecte, i els dilluns està irritable i no es pot concentrar. a) Explica què fa la nicotina al cervell i per què en Pol necessita cada vegada més dosi. Fes servir «neurotransmissor», «receptors» i «tolerància». b) Què li passa els dilluns i com es diu? c) En Pol diu: «Ho deixo quan vulgui, és qüestió de voluntat». Per què no és del tot cert?",
        model: {
          as: "a) La nicotina s'assembla a un neurotransmissor i s'enganxa als receptors de les neurones. Com que n'hi ha molta, el cervell treu receptors i en cal més per notar-la: és la tolerància. b) És l'abstinència: com que no en pren, es troba malament. c) Perquè el cervell ha canviat i ara la necessita.",
          ae: "a) La nicotina té una forma semblant a un neurotransmissor i s'enganxa als seus receptors, però arriba en molta més quantitat que el neurotransmissor natural. El cervell s'hi adapta reduint el nombre de receptors; amb menys receptors, la mateixa dosi fa menys efecte i cal més quantitat: és la tolerància. b) És la síndrome d'abstinència. Amb menys receptors, sense nicotina el senyal queda per sota del normal, i el cervell funciona pitjor: irritabilitat i falta de concentració fins que torna a vapejar. c) Perquè l'addicció té una base física: el cervell ha canviat els seus receptors i ara funciona «normal» només amb nicotina. La voluntat hi compta, però cal temps perquè el cervell recuperi els receptors, i per això sovint cal ajuda. Que sigui «només el cap de setmana» no evita el canvi: la tolerància ja hi és."
        },
        aeWhy: "L'AE encadena imitació → excés → menys receptors → tolerància → abstinència, i fa servir aquesta cadena per desmuntar la frase de la voluntat. Tanca la porta a l'error típic de pensar que la tolerància és que «el cos s'acostuma» sense dir què canvia al cervell.",
        must: [
          "Has fet servir bé neurotransmissor, receptors i tolerància.",
          "Has explicat que el cervell redueix els receptors i per això cal més dosi.",
          "Has anomenat l'abstinència i l'has explicada.",
          "Has argumentat la base física de l'addicció a partir del que has explicat abans."
        ]
      },
      {
        id: 'w5',
        oa: 'OA3',
        source: "Entrena el bloc 3 de la prova · Justificar una decisió de salut amb fisiologia",
        minutes: 4,
        text: "A la farmàcia et venen paracetamol sense recepta, però per a un antibiòtic et demanen la recepta del metge. A casa de la teva àvia hi ha antibiòtics que van sobrar d'una infecció d'orina i els vol guardar per a «la propera vegada que es trobi malament». a) Per què l'antibiòtic necessita que decideixi el metge? b) Quins riscos té el pla de l'àvia?",
        model: {
          as: "a) Perquè els antibiòtics només serveixen contra bacteris, i cal saber si la malaltia és bacteriana. b) Que el prengui quan no toca, per exemple per a un virus, i que els bacteris es tornin resistents.",
          ae: "a) El paracetamol alleuja un símptoma (el dolor o la febre) sigui quina sigui la causa. L'antibiòtic, en canvi, és específic: mata o atura bacteris, i no fa res contra els virus, que causen la majoria de refredats i grips. Cal que el metge decideixi si la infecció és bacteriana, quin antibiòtic hi funciona i quants dies s'ha de prendre. b) 1) Si la «propera vegada» és un virus, no li farà res i n'haurà patit els efectes secundaris. 2) Les sobres no són una tanda sencera: una dosi curta mata els bacteris més sensibles i deixa vius els resistents, que es multipliquen. Així es creen bacteris resistents, i un dia l'antibiòtic no funcionarà ni per a ella ni per als altres. 3) Pot amagar els símptomes d'una malaltia que caldria diagnosticar."
        },
        aeWhy: "L'AE justifica amb l'especificitat del fàrmac (símptoma vs causa, bacteri vs virus) i explica la resistència com a selecció dels bacteris supervivents. Tanca la porta a l'error típic de dir que «el cos es fa resistent a l'antibiòtic» (els resistents són els bacteris).",
        must: [
          "Has diferenciat un fàrmac que tracta un símptoma d'un que ataca la causa.",
          "Has dit que els antibiòtics no fan res contra els virus.",
          "Has explicat que els resistents són els BACTERIS, no la persona.",
          "Has donat almenys dos riscos del pla de l'àvia."
        ]
      },
      {
        id: 'w6',
        oa: 'OA4',
        source: "Entrena el bloc 4 de la prova · Detectar errors de disseny i proposar un experiment fiable",
        minutes: 7,
        text: "La tutora de 3r A té les finestres obertes cada hora durant el mes de gener. Al final de mes compta 4 alumnes que han faltat per grip. A 3r B, amb les finestres tancades, n'han faltat 12. Conclou: «Obrir les finestres evita la grip». a) Troba almenys dos errors de disseny i explica per què cadascun fa que la conclusió no sigui fiable. b) Proposa un experiment millor. Explica què seria el grup control, i si aquí es pot fer doble cec o què hi faries en lloc seu.",
        model: {
          as: "a) Només hi ha una classe de cada, i les classes poden ser diferents per altres coses (més alumnes, més vacunats). b) Faria servir més classes: unes amb les finestres obertes i unes altres (grup control) amb les finestres tancades, igual en tot el que es pugui. Doble cec no es pot fer perquè les finestres es veuen.",
          ae: "a) 1) No hi ha rèpliques: una sola classe per grup, i amb tan pocs casos la diferència pot ser casualitat. 2) Hi ha altres variables que no s'han controlat: 3r B pot tenir més alumnes, menys vacunats de la grip o algun germà malalt a casa; no sabem si la diferència ve de les finestres. 3) Qui compta és qui creu en la hipòtesi i sap quin grup és quin, i pot comptar d'una altra manera les faltes dubtoses. b) VI: finestres obertes o tancades. VD: nombre d'alumnes amb grip diagnosticada. Moltes classes de mida semblant, repartides a l'atzar entre els dos grups, durant el mateix període; el grup control és el de les finestres tancades, igual en tot el que es pot controlar. En un estudi doble cec, tant els alumnes com la persona que fa el recompte desconeixen a quin grup pertany cadascú; aquí els alumnes veuen les finestres, així que no es pot fer. El que sí es pot fer és que qui compta les baixes no sàpiga quin grup és cada classe (estudi cec per a qui mesura)."
        },
        aeWhy: "L'AE explica per què CADA error invalida la conclusió, defineix VI, VD i grup control, i en lloc de repetir «doble cec» de memòria reconeix que aquí no es pot fer i proposa la millor alternativa. Tanca la porta a l'error típic de dir «falten més dades» sense concretar quin error és.",
        must: [
          "Has trobat almenys dos errors diferents (rèpliques, variables no controlades, qui mesura).",
          "Per a cada error, has explicat per què fa que la conclusió no sigui fiable.",
          "La proposta té grup control i moltes classes repartides a l'atzar.",
          "Has explicat què és el doble cec i com l'adaptaries en aquest cas."
        ]
      }
    ]
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé distingir bacteris (procariotes) de virus (no cèl·lules) i explicar per quina raó els antibiòtics no funcionen contra la grip." },
    { id: 'c2', oa: 'OA1', text: "Puc interpretar el R₀ d'una malaltia i dir si una epidèmia s'estén (R₀>1) o s'extingeix (R₀<1)." },
    { id: 'c3', oa: 'OA1', text: "Conec les vies de transmissió principals (aèria, contacte, fecal-oral, vectorial) i una mesura preventiva per a cadascuna." },
    { id: 'c4', oa: 'OA2', text: "Sé explicar la seqüència immunitat innata (hores, inespecífica) → adaptativa (dies, específica, amb memòria)." },
    { id: 'c5', oa: 'OA2', text: "Puc explicar el mecanisme antigen-anticòs (clau-pany) i per quina raó un anticòs contra la grip no protegeix contra la varicel·la." },
    { id: 'c6', oa: 'OA2', text: "Entenc per quina raó la memòria immunològica impedeix una segona infecció i per quina raó la grip pot infectar-te cada any (el virus muta)." },
    { id: 'c7', oa: 'OA3', text: "Puc explicar el mecanisme d'acció de les vacunes (antigen atenuat → resposta adaptativa → memòria) i el concepte d'immunitat de grup." },
    { id: 'c8', oa: 'OA3', text: "Sé aplicar els 4 criteris de qualitat d'una font (revisió per parells, mida de la mostra, conflicte d'interès, replicació) a qualsevol afirmació sobre salut." },
    { id: 'c9', oa: 'OA4', text: "Sé distingir antibiòtics (bacteris), antivirals (virus) i analgèsics (símptomes), i explicar per quina raó l'automedicació amb antibiòtics és perillosa." },
    { id: 'c10', oa: 'OA4', text: "Entenc per quina raó les drogues causen addicció: activen la via de la dopamina de forma artificial → tolerància → comportament compulsiu." }
  ],

  // Cas-fil NOU: Kemal, alumne nouvingut de Turquia, té el carnet de vacunes incomplet.
  // Context diferent dels casos "grip de novembre" i "article anti-vacunes" de la SA.
  // Toca els 4 OA: patògens (OA1), SI i memòria (OA2), vacunes i fonts (OA3), antibiòtics (OA4).
  test: {
    context:
      "El Kemal acaba d'arribar de Turquia a la classe. Porta el carnet de vacunes però li falta la dosi de reforç de la rubèola. El primer dia alguns companys li diuen que no cal vacunar-se perquè «la rubèola ja ha desaparegut a Europa» i que «les vacunes sobrecarreguen el sistema immunitari». Al cap d'una setmana, un company de la classe no vacunat té rubèola (R₀ ≈ 6).",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "El company amb rubèola ha estat tres dies a classe sense saber-ho. Què vol dir que la rubèola tingui R₀ ≈ 6?",
        options: [
          "Que el 6 % de les persones que s'hi exposen acabaran desenvolupant la malaltia",
          "Que cada cas en pot generar uns 6 de nous en una població sense immunitat",
          "Que calen 6 dies de contacte seguit amb un malalt perquè el contagi sigui possible",
          "Que el virus resisteix 6 hores a l'aire abans no perd la capacitat d'infectar"
        ],
        correct: 1,
        feedback: {
          correct: "Exacte. Amb R₀ ≈ 6, si ningú fos immune cada malalt n'encomanaria uns sis, i cadascun d'ells uns altres sis: per això un sol cas pot fer un brot.",
          wrong: "R₀ és el nombre mitjà de contagis que provoca un sol cas en una població sense immunitat. No és ni un percentatge ni un temps."
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "El Kemal va passar la rubèola als 3 anys. Ara, als 14, s'exposa al company infectat. Per quina raó probablement no emmalaltirà?",
        options: [
          "Perquè la rubèola només afecta els infants i el sistema immunitari adult ja l'ignora",
          "Perquè encara li queden al cos els medicaments que va prendre quan era petit",
          "Perquè conserva limfòcits de memòria que responen abans que el virus faci símptomes",
          "Perquè la rubèola és un bacteri i la immunitat innàta l'elimina en poques hores"
        ],
        correct: 2,
        feedback: {
          correct: "Correcte. La memòria immunitària de la rubèola dura molts anys: quan el virus torna, la resposta secundària és tan ràpida que el destrueix abans no causa malaltia.",
          wrong: "Després d'una primera infecció queden limfòcits de memòria. Què fan aquests limfòcits quan el mateix patogen torna a entrar?"
        }
      },
      {
        id: 't3',
        oa: 'OA3',
        text: "Un company li ensenya un vídeo sense fonts que diu que «les vacunes sobrecarreguen el sistema immunitari». Quin criteri de qualitat falla primer?",
        options: [
          "La mida de la mostra, perquè el vídeo no diu amb quantes persones s'ha comprovat",
          "El conflicte d'interès, perquè qui el va penjar hi té un benefici econòmic directe",
          "L'actualitat de la font, perquè el vídeo es va publicar fa uns quants anys",
          "La revisió per parells, perquè un vídeo penjat sense fonts no l'ha revisat ningú"
        ],
        correct: 3,
        feedback: {
          correct: "El primer filtre és sempre el tipus de font. Si no ha passat cap revisió, ja no cal mirar els altres criteris: la font queda descartada d'entrada.",
          wrong: "Els criteris tenen un ordre. Abans de discutir mostres o interessos, pregunta't si algun expert ha comprovat mai el que diu aquella font."
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "El Kemal pren amoxicil·lina set dies per una faringitis bacteriana. Al quart dia es troba bé i vol deixar-la. Per quina raó ha d'acabar-la?",
        options: [
          "Perquè primer moren els bacteris més sensibles i queden els resistents",
          "Perquè l'antibiòtic necessita una setmana sencera per començar a fabricar anticossos",
          "Perquè els antibiòtics actuen tan lentament que els quatre primers dies no han fet res",
          "Perquè si el deixa abans d'hora el cos perdrà la memòria immunitària del bacteri"
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. Se sent bé perquè han mort els més febles, però si para ara els resistents es reproduiran sense competència i la infecció tornarà molt més difícil de tractar.",
          wrong: "Pensa en selecció natural: amb l'antibiòtic moren primer els bacteris més sensibles. Qui queda viu al quart dia, i què passa si els deixes tranquils?"
        }
      }
    ]
  },

  // Versió fàcil de l'autoavaluació (nivell C). Mateix esquema que SA1:
  // frases curtes, imatge + «Per llegir», 2 opcions plausibles, cap escriptura llarga.
  c: {
    checklist: [
      { id: 'c1', oa: 'OA1', icon: '🛡️', text: "Sé que la pell és la primera defensa del cos." },
      { id: 'c2', oa: 'OA1', icon: '💉', text: "Sé que una vacuna fa que el cos recordi un microbi." },
      { id: 'c3', oa: 'OA2', icon: '🔍', text: "Sé que una frase en un vídeo no és una prova." },
      { id: 'c4', oa: 'OA3', icon: '💊', text: "Sé que l'antibiòtic mata bacteris, però no virus." }
    ],
    preguntes: [
      {
        id: 'p1', oa: 'OA1',
        img: '/images/sa3-g1-resposta-immunitaria.svg',
        alt: "Esquema de la resposta del cos quan entra un microbi: primer la pell, després la inflamació i al final els anticossos.",
        llegir: "La vacuna ensenya el microbi al cos 💉. El cos el recorda. Si el microbi torna, el cos respon molt de pressa.",
        text: "La Lia està vacunada del tètanus. Si el microbi li entra per una ferida, què passa?",
        options: ["El cos el reconeix i respon ràpid", "El cos no el reconeix i respon tard"],
        correct: 0
      },
      {
        id: 'p2', oa: 'OA3',
        img: '/images/sa3-s4-farmacs.jpg',
        alt: "Diverses capses de medicaments sobre una taula.",
        llegir: "Els bacteris i els virus són microbis diferents. L'antibiòtic mata bacteris. Contra els virus no fa res.",
        text: "En Nil té la grip 🤧 (és un virus). Li anirà bé un antibiòtic?",
        options: ["Sí, perquè mata tots els microbis del cos", "No, no fa res contra els virus"],
        correct: 1
      },
      {
        id: 'p3', oa: 'OA1',
        img: '/images/sa3-g2-immunitat-grup.svg',
        alt: "Grup de persones: la majoria vacunades en verd, i poques sense vacunar entremig.",
        llegir: "Quan quasi tothom està vacunat, el microbi no troba ningú a qui encomanar-se. Així també protegim qui no es pot vacunar 👶.",
        text: "Un nadó encara no es pot vacunar. Què el protegeix més?",
        options: ["Que la gent del seu voltant estigui vacunada", "Que es quedi a casa amb les finestres tancades"],
        correct: 0
      }
    ],
    completar: {
      id: 'k1', oa: 'OA2',
      llegir: "Per creure una informació de salut, cal que l'hagin comprovat molts científics, no una sola persona.",
      frase: "Una font és fiable si l'han {0} altres {1}.",
      respostes: ['comprovat', 'científics'],
      banc: ['comprovat', 'venut', 'científics', 'famosos']
    }
  }
}
