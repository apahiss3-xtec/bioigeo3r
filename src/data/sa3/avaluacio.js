// Material d'autoavaluació de SA3: checklist d'estudi + test de
// transferència amb un context NOU (un alumne nouvingut amb carnet de vacunes incomplet,
// diferent dels casos "grip de novembre" i "article anti-vacunes" que vertebren la SA).
export const sa3Avaluacio = {
  // Assaig de prova escrita. Preguntes i models extrets dels blocs reals de la
  // prova de SA3 (encarrec del CAP d'Ulldecona; solucionari a
  // SA3-defensors-cos/prova_sa3_solucionari.docx). Els descriptors AS/AE son
  // els de les rubriques OA1-OA4 d'aquell solucionari.
  escrita: {
    intro:
      "Aquestes preguntes són del mateix tipus que les de la prova dels defensors del cos. Escriu-les senceres a mà, sense apunts. Compte: tres de les quatre demanen JUSTIFICAR, i una justificació no és repetir l'afirmació amb altres paraules.",
    minutes: 26,
    questions: [
      {
        id: 'w1',
        oa: 'OA1',
        source: 'Bloc 1 de la prova · Vacuna i memòria immunitària',
        minutes: 7,
        text: "Explica què passa al cos quan et vacunes i per quina raó, si més endavant t'arriba el virus de debò, la resposta és molt més ràpida.",
        model: {
          as: "La vacuna porta antígens del virus inactivats. El cos els reconeix com a estranys i fabrica anticossos. També guarda cèl·lules de memòria, i per això la segona vegada respon més de pressa.",
          ae: "La vacuna introdueix antígens —trossos inactius o debilitats del patogen— que no poden provocar la malaltia però que el sistema immunitari sí que reconeix com a estranys. Es desencadena la resposta adaptativa: es fabriquen anticossos específics contra aquest antigen i, sobretot, queden cèl·lules de memòria. Si més tard entra el virus real, aquestes cèl·lules ja el reconeixen i la producció d'anticossos és molt més ràpida i molt més abundant que la primera vegada, de manera que el virus és neutralitzat abans que faci prou còpies per causar símptomes: la persona no emmalalteix o ho fa de forma molt lleu."
        },
        aeWhy: "L'AE distingeix antigen d'anticòs sense confondre'ls, diu que la 2a resposta és més ràpida I més abundant, i explica el motiu últim (neutralitzar el virus abans que es multipliqui).",
        must: [
          "Has fet servir bé les paraules antigen i anticòs (no són el mateix).",
          "Has dit que la vacuna no provoca la malaltia i per què.",
          "Has anomenat les cèl·lules de memòria.",
          "Has dit que la 2a resposta és més ràpida I més gran."
        ]
      },
      {
        id: 'w2',
        oa: 'OA1',
        source: 'Bloc 1 de la prova · Immunitat de grup',
        minutes: 6,
        text: "La Martina no es pot vacunar perquè està en tractament. Explica per quina raó, tot i això, pot estar protegida si els seus companys sí que s'han vacunat.",
        model: {
          as: "Perquè si tothom al seu voltant està vacunat, el virus gairebé no circula i no arriba fins a ella. Això és la immunitat de grup.",
          ae: "És la immunitat de grup. Un virus només es propaga si troba persones susceptibles a qui contagiar; si la gran majoria del grup és immune, cada persona infectada contagia de mitjana menys d'una altra persona i les cadenes de contagi s'apaguen soles abans d'arribar a la Martina. Per això la vacunació no és només una decisió individual: les persones que no es poden vacunar —nadons, immunodeprimides, en tractament— depenen directament que la resta sí que ho faci, i per sota d'un cert percentatge de cobertura aquesta protecció es trenca i tornen els brots."
        },
        aeWhy: "L'AE explica el MECANISME (les cadenes de contagi s'apaguen) i n'extreu la conseqüència ètica i de salut pública, que és el que la rúbrica demana per a l'AE.",
        must: [
          "Has anomenat la immunitat de grup.",
          "Has explicat per què el virus deixa de circular, no només que deixa de circular.",
          "Has dit que hi ha gent que no es pot vacunar.",
          "Has dit que això depèn d'assolir un percentatge mínim."
        ]
      },
      {
        id: 'w3',
        oa: 'OA2',
        source: 'Bloc 2 de la prova · Ciència o mite',
        minutes: 6,
        text: "Per les xarxes circula que «una vacuna provoca autisme», basat en un estudi de fa anys. Digues si és una font fiable i justifica-ho amb TRES criteris científics.",
        model: {
          as: "No és fiable. La mostra era molt petita (12 nens), la revista va retirar l'estudi i cap altre estudi no ha trobat la mateixa relació.",
          ae: "No és fiable, i ho és per tres motius independents: (1) la mostra era minúscula —12 nens—, insuficient per treure'n cap conclusió general; (2) hi havia conflicte d'interès i manipulació de dades, ja que l'autor cobrava d'un advocat interessat en el resultat, i la revista va acabar retirant l'article; (3) mai no s'ha replicat: estudis posteriors amb més d'un milió d'infants no troben cap relació. El criteri de fons és que una afirmació científica ha de poder ser repetida i revisada per altres equips independents; una sola publicació, per molt que soni científica, no és una prova."
        },
        aeWhy: "L'AE dona tres criteris DIFERENTS (no tres maneres de dir el mateix) i acaba enunciant el principi general —replicabilitat i revisió— en comptes de quedar-se al cas concret.",
        must: [
          "Has dit clarament que NO és fiable.",
          "Has donat tres criteris realment diferents.",
          "Has esmentat la mida de la mostra.",
          "Has esmentat la replicació o la revisió per altres científics."
        ]
      },
      {
        id: 'w4',
        oa: 'OA4',
        source: 'Bloc 4 de la prova · Pensa com un científic',
        minutes: 7,
        text: "Un influencer dona un suplement a 10 amics seus durant l'hivern; al final, 8 no s'han refredat i ho publica com a prova que funciona. Detecta com a mínim DOS errors de disseny i proposa com ho faries tu.",
        model: {
          as: "Errors: no hi ha grup control que no prengui res, i la mostra és massa petita (10). Jo faria dos grups, un amb el suplement i un altre sense, i amb més gent.",
          ae: "Errors: (1) no hi ha grup control, de manera que no hi ha res amb què comparar i no se sap quants s'haurien refredat igualment sense prendre res; (2) la mostra és molt petita i triada entre coneguts, així que el resultat pot ser pura casualitat; (3) tothom sabia què prenia, de manera que hi pot haver efecte placebo i biaix de qui mesura; (4) es confon correlació amb causalitat. Disseny millorat: agafar molts participants i repartir-los a l'atzar en dos grups, un amb el suplement (variable independent) i l'altre amb un placebo idèntic; mesurar quants es refreden (variable dependent) amb el mateix criteri per a tothom; fer-ho a doble cec, de manera que ni els participants ni qui recull les dades sàpiguen qui pren què; i repetir l'estudi abans de concloure res."
        },
        aeWhy: "L'AE no només llista errors: en diu el PROBLEMA que causa cadascun, separa variable independent i dependent, i inclou l'assignació a l'atzar i el doble cec al disseny nou.",
        must: [
          "Has dit que falta un grup control i per a què serveix.",
          "Has parlat de la mida de la mostra.",
          "Has anomenat el doble cec o el placebo.",
          "Has distingit correlació de causalitat.",
          "Has proposat un disseny concret, no només «ho faria millor»."
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
      "El Kemal acaba d'arribar de Turquia a la classe. Porta el carnet de vacunes però li falta la dosi de reforç del xarampió. El primer dia alguns companys li diuen que no cal vacunar-se perquè «el xarampió ja ha desaparegut a Europa» i que «les vacunes sobrecarreguen el sistema immunitari». Al cap d'una setmana, un company de la classe no vacunat té xarampió (R₀ = 15).",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "El company amb xarampió ha estat tres dies a classe sense saber-ho. Què vol dir que el xarampió tingui R₀ = 15?",
        options: [
          "Que el 15 % de les persones que s'hi exposen acabaran desenvolupant la malaltia",
          "Que cada cas en pot generar fins a 15 de nous en una població sense immunitat",
          "Que calen 15 dies de contacte seguit amb un malalt perquè el contagi sigui possible",
          "Que el virus resisteix 15 hores a l'aire abans no perd la capacitat d'infectar"
        ],
        correct: 1,
        feedback: {
          correct: "Exacte. R₀ = 15 és dels més alts que existeixen: la transmissió és aèria i el malalt ja encomana dos dies abans de tenir cap símptoma.",
          wrong: "R₀ és el nombre mitjà de contagis que provoca un sol cas en una població sense immunitat. No és ni un percentatge ni un temps."
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "El Kemal va passar el xarampió als 3 anys. Ara, als 14, s'exposa al company infectat. Per quina raó probablement no emmalaltirà?",
        options: [
          "Perquè el xarampió només afecta els infants i el sistema immunitari adult ja l'ignora",
          "Perquè encara li queden al cos els medicaments que va prendre quan era petit",
          "Perquè conserva limfòcits de memòria que responen abans que el virus faci símptomes",
          "Perquè el xarampió és un bacteri i la immunitat innàta l'elimina en poques hores"
        ],
        correct: 2,
        feedback: {
          correct: "Correcte. La memòria immunitària del xarampió dura dècades: quan el virus torna, la resposta secundària és tan ràpida que el destrueix abans no causa malaltia.",
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
          "Perquè els primers dies moren els bacteris més sensibles i queden vius els més resistents",
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
  }
}
