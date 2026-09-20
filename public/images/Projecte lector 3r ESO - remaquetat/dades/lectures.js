/* Contingut del Projecte lector · 3r ESO · 1r trimestre.
   Font única de dades: totes les variants (alumnat, docent, suport lingüístic) llegeixen aquest fitxer.
   Estructura documentada a ESTRUCTURA.md. */
window.DOSSIER = {
 "meta": {
  "titol": "Projecte lector",
  "curs": "3r ESO",
  "trimestre": "1r trimestre",
  "anyCurs": "2026–27",
  "centre": "Institut Escola el Temple",
  "subcentre": "Tortosa",
  "portada": "imatges/portada.jpg"
 },
 "blocs": [
  {
   "id": "stem",
   "num": 1,
   "rn": "I",
   "nom": "STEM",
   "lema": "Llegir per descobrir com funciona el món"
  },
  {
   "id": "soc",
   "num": 2,
   "rn": "II",
   "nom": "Sociocultural",
   "lema": "Llegir per comprendre les persones, la cultura i la societat"
  },
  {
   "id": "expr",
   "num": 3,
   "rn": "III",
   "nom": "Expressiva",
   "lema": "Llegir amb veu, ritme, intenció i imaginació"
  }
 ],
 "lectures": [
  {
   "id": "L01",
   "num": 1,
   "bloc": "stem",
   "numOriginal": "STEM 01",
   "materia": "Matemàtiques",
   "titol": "Quina porta triaries?",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "font",
     "v": "Problema de Monty Hall, popularitzat per Marilyn vos Savant a Parade (1990)"
    },
    {
     "k": "font",
     "v": "Referències de divulgació matemàtica sobre probabilitat condicionada"
    },
    {
     "k": "referencia",
     "v": "Problema de Monty Hall i probabilitat condicionada"
    },
    {
     "k": "nota",
     "v": "Text de divulgació matemàtica elaborat per al Projecte lector."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Participes en un concurs. Davant teu hi ha tres portes. Darrere d’una hi ha un cotxe; darrere de les altres dues, una cabra. Tries la porta 1. El presentador sap què hi ha darrere de totes tres i, abans d’obrir la teva, obre la porta 3: hi ha una cabra. Ara et pregunta si vols mantenir la teva elecció o canviar a la porta 2."
    },
    {
     "t": "p",
     "x": "La resposta més natural és pensar que ara hi ha dues portes i que, per tant, totes dues tenen un 50 % de probabilitat. Però no és així: si mantens sempre la primera elecció, guanyes aproximadament una vegada de cada tres; si canvies sempre, guanyes aproximadament dues de cada tres."
    },
    {
     "t": "h",
     "x": "Tornar al principi"
    },
    {
     "t": "p",
     "x": "Quan tries per primera vegada, la probabilitat d’haver escollit el cotxe és 1/3. La probabilitat que sigui en alguna de les altres dues portes juntes és 2/3. El presentador no obre una porta a l’atzar: sap on és el premi i sempre mostra una cabra."
    },
    {
     "t": "p",
     "x": "Si la teva primera elecció era correcta —cas que passa 1/3 de les vegades—, canviar et fa perdre. Si la primera elecció era incorrecta —cas que passa 2/3 de les vegades—, el presentador elimina l’única porta perdedora que pot eliminar i el canvi et porta al premi."
    },
    {
     "t": "h",
     "x": "Cent portes"
    },
    {
     "t": "p",
     "x": "Imaginem cent portes. En tries una: tens 1/100 de probabilitat d’haver encertat. El presentador obre 98 portes sense premi i en deixa dues tancades: la teva i una altra. Ara la diferència és més intuïtiva. La primera porta continua sent aquella que havies triat gairebé a cegues entre cent possibilitats."
    },
    {
     "t": "h",
     "x": "Per què dues portes no són sempre 50-50?"
    },
    {
     "t": "p",
     "x": "Si algú ens presentés dues portes des del principi sense informació addicional, sí que podrien tenir la mateixa probabilitat. Però aquí una porta ha desaparegut mitjançant un procés que depèn de la informació que té el presentador. Per això no podem mirar només l’estat final; també hem d’entendre com s’hi ha arribat."
    },
    {
     "t": "p",
     "x": "Quan aquest problema es va popularitzar, molta gent va rebutjar la resposta correcta, incloses persones amb formació científica. La intuïció «dues portes, meitat i meitat» és molt poderosa."
    },
    {
     "t": "h",
     "x": "Posar a prova la intuïció"
    },
    {
     "t": "p",
     "x": "Les matemàtiques no ens demanen que deixem de tenir intuïcions. Ens permeten provar-les. Podem enumerar els casos, simular el concurs amb cartes o programar milers de partides."
    },
    {
     "t": "p",
     "x": "Si el resultat repetit contradiu el que esperàvem, la pregunta interessant és: quina informació havíem ignorat?"
    }
   ],
   "vocabulari": [
    {
     "terme": "Probabilitat condicionada",
     "definicio": "Probabilitat d’un esdeveniment quan disposem d’una informació determinada."
    },
    {
     "terme": "Aleatori",
     "definicio": "Que depèn de l’atzar."
    },
    {
     "terme": "Simulació",
     "definicio": "Reproducció repetida d’una situació per estudiar-ne els resultats."
    },
    {
     "terme": "Intuïció",
     "definicio": "Judici immediat anterior a una anàlisi completa."
    }
   ],
   "granPregunta": "Per què, en el problema de Monty Hall, saber com el presentador ha eliminat una porta és tan important com saber quines portes queden tancades?"
  },
  {
   "id": "L02",
   "num": 2,
   "bloc": "stem",
   "numOriginal": "STEM 02",
   "materia": "Biologia i geologia",
   "titol": "Els bacteris no «aprenen» a resistir els antibiòtics",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "autoria",
     "v": "Text original elaborat a partir de fonts científiques de revisió"
    },
    {
     "k": "font",
     "v": "PubMed / revisió sobre l’evolució de la resistència als antibiòtics"
    },
    {
     "k": "data",
     "v": "2002; informació científica revisada i actualitzada en fonts posteriors"
    },
    {
     "k": "enllac",
     "v": "https://pubmed.ncbi.nlm.nih.gov/12102604/"
    },
    {
     "k": "nota",
     "v": "el text de la lectura és una redacció original elaborada a partir de la font indicada; no és una reproducció literal de la font."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Quan una persona pren un antibiòtic per tractar una infecció bacteriana, sovint imagina una escena senzilla: el medicament arriba, mata els bacteris i el problema desapareix."
    },
    {
     "t": "p",
     "x": "Però dins d’una població de bacteris les coses són més complicades."
    },
    {
     "t": "p",
     "x": "No tots els bacteris són exactament iguals. Encara que siguin de la mateixa espècie, poden presentar diferències genètiques. Algunes d’aquestes diferències poden fer que un bacteri sigui una mica menys sensible a un antibiòtic."
    },
    {
     "t": "p",
     "x": "Imagina una població de milers de bacteris. La majoria són sensibles a un determinat antibiòtic, però n’hi ha uns quants que tenen una característica que els permet resistir-lo millor."
    },
    {
     "t": "p",
     "x": "Ara arriba l’antibiòtic."
    },
    {
     "t": "p",
     "x": "Els bacteris sensibles poden morir o deixar de reproduir-se. Els que tenen resistència poden sobreviure. Si després continuen reproduint-se, els seus descendents heretaran aquesta característica."
    },
    {
     "t": "p",
     "x": "Al cap d’un temps, la població pot contenir una proporció molt més gran de bacteris resistents."
    },
    {
     "t": "p",
     "x": "Això és selecció natural."
    },
    {
     "t": "p",
     "x": "L’antibiòtic no necessita «ensenyar» als bacteris a resistir. Tampoc és que els bacteris decideixin adaptar-se perquè saben que hi ha un medicament. La variació ja pot existir abans de l’exposició, o pot aparèixer per canvis genètics. El que fa l’antibiòtic és crear una situació en què unes variants tenen més probabilitats de sobreviure que unes altres."
    },
    {
     "t": "p",
     "x": "Aquesta idea pot semblar estranya perquè, quan parlem d’evolució, és fàcil imaginar que els organismes desenvolupen una característica perquè la necessiten."
    },
    {
     "t": "p",
     "x": "Però l’evolució no funciona amb plans."
    },
    {
     "t": "p",
     "x": "Les mutacions apareixen sense que un bacteri «sàpiga» si li seran útils. Algunes no tenen gaire efecte, d’altres poden ser perjudicials i, en determinades situacions, algunes poden resultar beneficioses."
    },
    {
     "t": "p",
     "x": "L’entorn determina quines característiques tenen avantatge."
    },
    {
     "t": "p",
     "x": "Per exemple, una mutació que ofereix resistència pot ser poc important en un lloc on no hi ha antibiòtic. Però si apareix l’antibiòtic, aquesta mateixa característica pot marcar una gran diferència."
    },
    {
     "t": "p",
     "x": "A més, els bacteris tenen una altra capacitat sorprenent: alguns poden adquirir material genètic d’altres bacteris. Això pot facilitar que determinats gens de resistència es disseminin."
    },
    {
     "t": "p",
     "x": "Per això la resistència als antibiòtics és un problema evolutiu i també un problema de salut."
    },
    {
     "t": "p",
     "x": "Cada vegada que utilitzem un antibiòtic, estem aplicant una pressió selectiva sobre una població bacteriana. L’ús inadequat o innecessari dels antibiòtics pot afavorir la selecció i la propagació de resistències."
    },
    {
     "t": "p",
     "x": "Això no vol dir que els antibiòtics siguin dolents. Al contrari: són eines mèdiques fonamentals. El problema és que funcionen dins d’un món biològic que evoluciona."
    },
    {
     "t": "p",
     "x": "La resistència als antibiòtics és, per tant, una demostració molt clara d’una idea central de la biologia: les poblacions canvien al llarg del temps perquè existeix variació, perquè aquesta variació pot ser hereditària i perquè l’entorn afavoreix unes variants més que unes altres."
    },
    {
     "t": "p",
     "x": "Els bacteris no aprenen."
    },
    {
     "t": "p",
     "x": "Les poblacions evolucionen."
    }
   ],
   "vocabulari": [
    {
     "terme": "Resistència antimicrobiana",
     "definicio": "Capacitat d’un microorganisme de sobreviure o créixer davant d’un medicament que abans el controlava."
    },
    {
     "terme": "Mutació",
     "definicio": "Canvi en el material genètic."
    },
    {
     "terme": "Selecció natural",
     "definicio": "Procés pel qual les variants hereditàries que afavoreixen la supervivència o reproducció tendeixen a augmentar en una població."
    },
    {
     "terme": "Pressió selectiva",
     "definicio": "Factor ambiental que fa que algunes variants tinguin més èxit que d’altres."
    }
   ],
   "granPregunta": "Per què és més correcte dir que els antibiòtics seleccionen bacteris resistents que no pas dir que «fan que els bacteris es tornin resistents»?"
  },
  {
   "id": "L03",
   "num": 3,
   "bloc": "stem",
   "numOriginal": "STEM 03",
   "materia": "Tecnologia",
   "titol": "Què hi ha realment darrere del vidre del teu mòbil?",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "font",
     "v": "Adaptat d’articles de Mètode (UV) i la Secció de Tecnologia de SNCYT."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Un dels gestos més habituals de la nostra vida diària és tocar la pantalla del nostre telèfon mòbil. Hi passem el dit per veure vídeos, escriure missatges o jugar. La pantalla sembla una petita làmina de vidre transparent sense cap secret, però en realitat és un dels objectes d’enginyeria de materials més complexos que s’han fabricat mai. Darrere d’aquesta capa de pocs mil·límetres de gruix s’hi amaguen diferents tecnologies superposades que han d’estar perfectament sincronitzades."
    },
    {
     "t": "p",
     "x": "La primera capa, la que toquem directament amb els dits, no és un vidre qualsevol com el de la finestra d’una habitació. Si la pantalla del mòbil fos de vidre normal, es trencaria a la primera vegada que ens caigués a terra. Per evitar-ho, les empreses utilitzen un material anomenat vidre aluminosilicat reforçat químicament (més conegut per marques comercials com Gorilla Glass) que es fabrica mitjançant un bany de sals de potassi a més de 400 graus de temperatura."
    },
    {
     "t": "p",
     "x": "Just a sota del vidre hi ha la capa tàctil. La majoria de mòbils actuals tenen una pantalla capacitiva: una làmina molt fina recoberta d’un material conductor i transparent, com l’òxid d’indi i estany. Aquesta capa forma una xarxa d’elèctrodes transparents que crea i mesura un camp elèctric molt feble sobre la superfície."
    },
    {
     "t": "p",
     "x": "El cos humà és conductor. Quan acostem o posem el dit sobre la pantalla, alterem lleugerament el camp elèctric i la capacitat mesurada en aquella zona. El controlador tàctil compara aquests petits canvis i calcula les coordenades del contacte. Per això un objecte aïllant, com un llapis de fusta o molts guants de llana, no provoca el mateix canvi i la pantalla pot no detectar-lo."
    },
    {
     "t": "p",
     "x": "Més avall trobem la capa encarregada de generar les imatges que veiem: el panell d’exhibició. En els mòbils moderns, aquesta capa sol ser d’un material anomenat OLED (Díodes Orgànics Emissors de Llum). A diferència de les pantalles antigues, que necessitaven un llum blanc gran a la part del darrere per il·luminar-ho tot, les pantalles OLED tenen milions de punts microscòpics de llum independents anomenats píxels."
    },
    {
     "t": "p",
     "x": "Cada píxel OLED està format per tres petits subpíxels de colors primaris: vermell, verd i blau. Variant la quantitat de corrent que li arriba a cada subpíxel, el mòbil pot barrejar aquests tres colors per crear qualsevol altre color imaginable. A més, si el mòbil ha de mostrar el color negre, simplement «apaga» del tot aquells píxels concrets. Això fa que els colors negres siguin molt més purs i, al mateix temps, permet estalviar molta bateria."
    },
    {
     "t": "p",
     "x": "Totes aquestes capes (el vidre reforçat, la capa tàctil elèctrica i el panell OLED) estan unides entre si per un adhesiu òptic especialment dissenyat perquè no hi hagi cap espai d’aire entre elles. Aquesta unió evita que la llum es reflecteixi i permet que puguem veure la pantalla amb claredat fins i tot quan estem al carrer en un dia molt assolellat. Una autèntica meravella de la química i la microelectrònica en la palma de la nostra mà."
    }
   ],
   "vocabulari": [
    {
     "terme": "Pantalla capacitiva",
     "definicio": "Sistema tàctil que funciona detectant petits canvis elèctrics quan un cos conductor (com el dit humà) toca la superfície."
    },
    {
     "terme": "OLED",
     "definicio": "Tecnologia de pantalla on cada petit punt de llum (píxel) s’il·lumina de manera independent."
    },
    {
     "terme": "Píxel",
     "definicio": "Cadascun dels punts individuals de color que formen una imatge digital en una pantalla."
    }
   ],
   "granPregunta": "Com pot una pantalla detectar el punt exacte on la toquem sense que hi hagi cap botó físic, i què ens explica això sobre la relació entre materials, electricitat i tecnologia?"
  },
  {
   "id": "L04",
   "num": 4,
   "bloc": "stem",
   "numOriginal": "STEM 04",
   "materia": "Física i química",
   "titol": "L’ampolla que fa llum: com la física il·lumina les cases sense electricitat",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "autoria",
     "v": "Redacció de National Geographic / Adaptació didàctica"
    },
    {
     "k": "font",
     "v": "Basat en el projecte global Liter of Light (Un litre de llum) creat per Illac Diaz i en els principis de la reflexió i refracció de la llum."
    },
    {
     "k": "data",
     "v": "Adaptat per a ús escolar (2026)"
    },
    {
     "k": "enllac",
     "v": "Liter of Light Project"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Imagina’t que vius en una casa on no hi ha finestres i tampoc arriba la xarxa elèctrica. De dia, quan el sol brilla a fora, a l’interior de casa teva està tan fosc que gairebé no pots veure-hi per llegir, estudiar o cuinar. Això és el que passa a moltes comunitats amb pocs recursos econòmics arreu del món. Durant molt de temps, l’única opció per a aquestes famílies era encendre espelmes o llums de querosè, que no només són cars, sinó que generen un fum molt nociu per als pulmons i poden causar incendis accidentals."
    },
    {
     "t": "p",
     "x": "L’any 2002, un mecànic brasiler anomenat Alfredo Moser va tenir una idea tan senzilla com revolucionària: utilitzar la física dels materials quotidians per portar la llum del sol a l’interior de les habitacions fosques. La seva invenció es coneix com la «làmpada de Moser» o «l’ampolla de llum»."
    },
    {
     "t": "p",
     "x": "Com funciona aquesta tecnologia? El procediment és increïblement elemental: agafem una ampolla de plàstic transparent (de les que fem servir per a l’aigua o els refrescos) i la omplim d’aigua neta. A continuació, s’hi afegeixen un parell de taps de lleixiu domèstic. Després, es fa un forat al sostre de la casa (que sol ser de chapa o fusta) i s’hi encaixa l’ampolla, de manera que la meitat superior queda a l’exterior, rebent la llum directa del sol, i la meitat inferior queda penjant dins l’habitació."
    },
    {
     "t": "p",
     "x": "Aquí és on entra en joc l’òptica. La llum solar entra a l’ampolla i canvia de direcció quan passa de l’aire al plàstic i a l’aigua: és la refracció. La forma corbada de l’ampolla i les múltiples superfícies fan que la llum es redistribueixi cap a moltes direccions dins de l’habitació. No crea energia ni llum nova: aprofita i reparteix la llum del Sol que ja hi arriba."
    },
    {
     "t": "p",
     "x": "I per què hi posem lleixiu? Aquesta és una qüestió de química bàsica: si només hi poséssim aigua, amb la llum del sol i la calor hi creixerien algues i bacteris en pocs dies, fent que l’aigua es tornés verda i tèrbola. El lleixiu actua com a desinfectant i manté l’aigua completament transparent durant anys, permetent que la llum continuï passant-hi sense cap obstacle."
    },
    {
     "t": "p",
     "x": "La idea s’ha difós internacionalment i projectes com Liter of Light l’han adaptada a comunitats de diversos països. El seu valor no és substituir una xarxa elèctrica, sinó mostrar com una solució senzilla i barata pot aprofitar coneixements d’òptica i materials per resoldre un problema real durant les hores de sol."
    }
   ],
   "vocabulari": [
    {
     "terme": "Refracció",
     "definicio": "Canvi de direcció i velocitat que pateix una ona (com la llum) quan passa d’un medi a un altre (per exemple, de l’aire a l’aigua)."
    },
    {
     "terme": "Dispersió de la llum",
     "definicio": "Fenomen pel qual un feix de llum es separa o es distribueix en moltes direccions diferents en interactuar amb un medi."
    },
    {
     "terme": "Lleixiu",
     "definicio": "Dissolució química d’hipoclorit de sodi en aigua que s’utilitza a la llar com a desinfectant i blanquejador."
    },
    {
     "terme": "Incandescent",
     "definicio": "Que emet llum a causa de la seva alta temperatura (com les bombetes tradicionals de filferro)."
    }
   ],
   "granPregunta": "Què fa que una tecnologia tan simple com una ampolla amb aigua pugui ser una bona solució en alguns contextos, i quines limitacions impedeixen considerar-la un substitut d’una instal·lació elèctrica?"
  },
  {
   "id": "L05",
   "num": 5,
   "bloc": "stem",
   "numOriginal": "STEM 05",
   "materia": "Matemàtiques",
   "titol": "Com troba una app la ruta més ràpida?",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "font",
     "v": "Stanford University CS106B, materials sobre Dijkstra i A*"
    },
    {
     "k": "font",
     "v": "Princeton University COS 226, «Map Routing»"
    },
    {
     "k": "font",
     "v": "Edsger W. Dijkstra, algorisme de camins mínims"
    },
    {
     "k": "referencia",
     "v": "Teoria de grafs, pesos i algorismes de camí mínim"
    },
    {
     "k": "nota",
     "v": "Text de divulgació STEM elaborat per al Projecte lector. Les aplicacions comercials modernes combinen molts algorismes i dades; Dijkstra i A* s’utilitzen aquí com a models conceptuals per entendre el problema."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Escrius una adreça al mòbil i en segons apareixen tres rutes. Una té menys quilòmetres, una altra evita autopistes i una tercera sembla més llarga però arriba abans perquè hi ha menys trànsit. Com pot un ordinador buscar un camí útil entre milions de carrers sense provar-los tots un per un?"
    },
    {
     "t": "h",
     "x": "Convertir una ciutat en un graf"
    },
    {
     "t": "p",
     "x": "Una manera de començar és oblidar, per un moment, que veiem carrers i edificis. Podem representar les cruïlles com a punts —nodes— i els trams de carrer com a connexions —arestes—. A cada aresta li assignem un cost: distància, temps previst, consum o qualsevol criteri que vulguem minimitzar."
    },
    {
     "t": "p",
     "x": "Així, un mapa es converteix en un graf ponderat. La pregunta «com arribo abans?» passa a ser «quin camí entre aquests dos nodes té la suma de costos més petita?». Aquesta traducció és profundament matemàtica."
    },
    {
     "t": "h",
     "x": "Dijkstra: avançar pel millor camí conegut"
    },
    {
     "t": "p",
     "x": "L’algorisme de Dijkstra, publicat a finals dels anys cinquanta, parteix d’un punt d’origen i va ampliant la zona explorada. Manté, per a cada node, el cost més petit conegut per arribar-hi. Entre els nodes pendents, examina primer el que té el cost acumulat més baix i actualitza els seus veïns."
    },
    {
     "t": "p",
     "x": "La idea sembla modesta, però evita repetir una enorme quantitat de camins innecessaris. En grafs amb costos no negatius, l’algorisme garanteix trobar els camins de cost mínim."
    },
    {
     "t": "h",
     "x": "El camí més curt no sempre és el millor"
    },
    {
     "t": "p",
     "x": "Si el cost és la distància, obtindrem el trajecte més curt en quilòmetres. Si el cost és el temps previst, una carretera més llarga pot resultar millor. Les apps modernes canvien aquests pesos segons límits de velocitat, trànsit, obres, girs, transport públic o preferències de l’usuari."
    },
    {
     "t": "p",
     "x": "Per tant, «la millor ruta» no existeix en abstracte. Depèn de què estiguem minimitzant. Les matemàtiques necessiten que definim el problema abans de resoldre’l."
    },
    {
     "t": "h",
     "x": "Buscar sense mirar a tot arreu"
    },
    {
     "t": "p",
     "x": "Algorismes com A* afegeixen una idea útil: si coneixem aproximadament la direcció del destí, podem prioritzar els camins que semblen prometedors i evitar explorar zones que probablement no ajudaran. Aquesta estimació rep el nom d’heurística."
    },
    {
     "t": "p",
     "x": "A la pràctica, les grans aplicacions fan servir tècniques molt més sofisticades, preprocessament de xarxes i informació en temps real. Però el cor del problema continua sent recognoscible: una xarxa, uns costos i una cerca eficient."
    },
    {
     "t": "h",
     "x": "Matemàtiques per no perdre’ns"
    },
    {
     "t": "p",
     "x": "Quan una aplicació recalcula la ruta perquè hem girat abans d’hora, no «s’enfada» ni improvisa com una persona. Actualitza el punt de partida i torna a buscar un camí de baix cost dins d’una xarxa."
    },
    {
     "t": "p",
     "x": "Aquesta és una de les belleses dels models matemàtics: un problema caòtic com una ciutat plena de carrers es pot representar amb una estructura prou simple perquè un algorisme hi pugui raonar en mil·lisegons."
    }
   ],
   "vocabulari": [
    {
     "terme": "Graf",
     "definicio": "Estructura formada per nodes i connexions entre ells."
    },
    {
     "terme": "Node",
     "definicio": "Punt d’una xarxa, com ara una cruïlla."
    },
    {
     "terme": "Aresta",
     "definicio": "Connexió entre dos nodes, com un tram de carretera."
    },
    {
     "terme": "Pes o cost",
     "definicio": "Valor assignat a una connexió: temps, distància, preu, etc."
    },
    {
     "terme": "Heurística",
     "definicio": "Estimació que ajuda un algorisme a prioritzar opcions prometedores."
    }
   ],
   "granPregunta": "Per què una aplicació necessita saber què vol dir «millor» abans de poder calcular una ruta òptima?"
  },
  {
   "id": "L06",
   "num": 6,
   "bloc": "stem",
   "numOriginal": "STEM 06",
   "materia": "Biologia i geologia",
   "titol": "Com podem saber que hi ha planetes que no podem veure?",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "autoria",
     "v": "Text original elaborat a partir de divulgació científica"
    },
    {
     "k": "font",
     "v": "NASA Science – Exoplanet Watch"
    },
    {
     "k": "data",
     "v": "Actualitzat el 2026"
    },
    {
     "k": "enllac",
     "v": "https://science.nasa.gov/citizen-science/exoplanet-watch/"
    },
    {
     "k": "nota",
     "v": "el text de la lectura és una redacció original elaborada a partir de la font indicada; no és una reproducció literal de la font."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Mira una estrella al cel. És només un punt de llum. Ara imagina que al seu voltant hi ha un planeta, molt més petit, que gira a milions o milers de milions de quilòmetres de distància."
    },
    {
     "t": "h",
     "x": "Com podríem saber que hi és?"
    },
    {
     "t": "p",
     "x": "La primera dificultat és que un planeta no acostuma a emetre prou llum per ser vist fàcilment al costat de la seva estrella. A més, les distàncies són enormes."
    },
    {
     "t": "p",
     "x": "Per això els astrònoms sovint no busquen el planeta directament. Busquen els efectes que provoca."
    },
    {
     "t": "p",
     "x": "Un dels mètodes més coneguts és el mètode del trànsit."
    },
    {
     "t": "p",
     "x": "Imagina que estàs mirant una bombeta molt llunyana. Si una petita boleta passa just davant de la bombeta, taparà una part de la llum durant una estona. Des de lluny potser no veuries la boleta, però podries detectar que la bombeta s’ha enfosquit una mica."
    },
    {
     "t": "p",
     "x": "Amb una estrella passa una cosa semblant."
    },
    {
     "t": "p",
     "x": "Quan un planeta passa entre la seva estrella i nosaltres, bloqueja una petita part de la llum de l’estrella. Els instruments poden mesurar aquesta disminució de brillantor."
    },
    {
     "t": "p",
     "x": "El canvi és petit. Molt petit."
    },
    {
     "t": "p",
     "x": "Per això no n’hi ha prou amb observar una vegada. Els astrònoms busquen un patró que es repeteixi. Si la brillantor baixa de manera semblant cada vegada que arriba el mateix moment del moviment orbital, la hipòtesi d’un planeta es fa molt més interessant."
    },
    {
     "t": "p",
     "x": "Aquesta és una idea important de la ciència: una observació aïllada pot tenir moltes explicacions. Un patró que es repeteix és una evidència molt més forta."
    },
    {
     "t": "p",
     "x": "A més, la quantitat de llum que queda bloquejada pot donar pistes sobre la mida del planeta respecte de l’estrella."
    },
    {
     "t": "p",
     "x": "Però els científics han de vigilar amb els errors. Una estrella també pot canviar de brillantor per altres motius. Hi pot haver soroll en els instruments o altres objectes que produeixin senyals semblants."
    },
    {
     "t": "p",
     "x": "Per això una detecció no es converteix automàticament en un planeta confirmat. Cal analitzar les dades, comparar-les amb models i, quan és possible, utilitzar altres mètodes d’observació."
    },
    {
     "t": "p",
     "x": "Un d’aquests mètodes estudia el moviment de l’estrella. Un planeta exerceix una força gravitatòria sobre la seva estrella i això pot produir petits moviments que els instruments poden detectar."
    },
    {
     "t": "p",
     "x": "Així, un planeta invisible pot deixar una «empremta» en la llum o en el moviment de la seva estrella."
    },
    {
     "t": "p",
     "x": "Aquest tipus d’investigació també ha obert la porta a la ciència ciutadana. Projectes com Exoplanet Watch permeten que persones no professionals analitzin dades o participin en observacions."
    },
    {
     "t": "p",
     "x": "És una bona lliçó sobre com funciona la ciència moderna. No sempre podem anar fins al lloc que volem estudiar. A vegades només podem observar una petita pista des de molt lluny."
    },
    {
     "t": "p",
     "x": "La feina científica consisteix a preguntar: què podria haver produït aquest senyal?, quines altres explicacions són possibles?, es repeteix?, podem comprovar-lo amb una altra tècnica?"
    },
    {
     "t": "p",
     "x": "Quan diverses evidències independents encaixen, podem començar a construir una explicació molt sòlida."
    },
    {
     "t": "p",
     "x": "No veiem directament tots els exoplanetes."
    },
    {
     "t": "p",
     "x": "Però podem detectar les seves petjades."
    }
   ],
   "vocabulari": [
    {
     "terme": "Exoplaneta",
     "definicio": "Planeta que orbita una estrella diferent del Sol."
    },
    {
     "terme": "Trànsit",
     "definicio": "Pas d’un planeta per davant de la seva estrella, vist des de la Terra."
    },
    {
     "terme": "Brillantor",
     "definicio": "Quantitat de llum que rebem d’un objecte."
    },
    {
     "terme": "Evidència indirecta",
     "definicio": "Informació que permet inferir l’existència o les propietats d’alguna cosa que no observem directament."
    }
   ],
   "granPregunta": "Com pot una petita baixada periòdica de la brillantor d’una estrella convertir-se en evidència científica de l’existència d’un planeta que no veiem directament?"
  },
  {
   "id": "L07",
   "num": 7,
   "bloc": "stem",
   "numOriginal": "STEM 07",
   "materia": "Física i química",
   "titol": "Quan la cuina és un laboratori: canvis físics i transformacions químiques",
   "llengua": "ca",
   "minuts": 2,
   "autoria": [
    {
     "k": "autoria",
     "v": "Redacció de Ciència a la Cuina / Adaptació didàctica"
    },
    {
     "k": "font",
     "v": "Basat en conceptes de la química dels aliments i la diferenciació entre canvis físics i químics."
    },
    {
     "k": "data",
     "v": "Adaptat per a ús escolar (2026)"
    },
    {
     "k": "enllac",
     "v": "Investigación y Ciencia - La ciencia en la cocina"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Tots els dies, a la cuina de casa nostra, s’esdevenen fenòmens fascinants. Tanmateix, poques vegades ens aturem a pensar si el que està passant al foc o a la taula de tallar és un senzill canvi de forma o una vertadera transformació de la matèria. En la ciència de 3r d’ESO, aquesta és la diferència clau entre un canvi físic i un canvi químic."
    },
    {
     "t": "p",
     "x": "Imagina dues situacions quotidianes. D’una banda, agafem un bloc de xocolata i el posem en un cassó al bany maria. La xocolata, que era sòlida i dura, es torna líquida i cremosa. N’hem modificat l’aspecte i la textura, però la substància continua sent exactament la mateixa: xocolata. Si deixem refredar el cassó, la xocolata es tornarà a solidificar i mantindrà el mateix gust i les mateixes propietats. Això és un canvi físic: l’estat d’agregació ha canviat a causa de la temperatura, però les molècules de la xocolata no han esdevingut una substància nova."
    },
    {
     "t": "p",
     "x": "D’altra banda, trenquem un ou i el deixem caure a la paella calenta. La clara, que era transparent i viscosa, es torna blanca i sòlida, i el rovell s’endureix. Aquí no hi ha marxa enrere: per molt que el deixem refredar, l’ou ja no tornarà a ser cru. Què ha passat?"
    },
    {
     "t": "p",
     "x": "La calor de la paella modifica l’estructura tridimensional de moltes proteïnes de l’ou (un procés anomenat desnaturalització) i afavoreix que s’uneixin entre elles formant una xarxa nova. Durant la cocció també es poden produir altres reaccions químiques. El resultat és irreversible en les condicions habituals de la cuina: refredar l’ou no el converteix de nou en un ou cru. Per això, en aquest context, parlem d’una transformació química dels aliments."
    },
    {
     "t": "p",
     "x": "Reconèixer una reacció química no sempre és fàcil perquè no podem veure els àtoms a simple vista. Però la natura ens dona «pistes»: un canvi de color inesperat, l’aparició d’un gas (en forma de bombolles o fum), l’emissió de llum o calor, o la formació d’una substància que no es pot tornar a l’estat original fàcilment. La pròxima vegada que ajudis a fer el sopar, no miris només ingredients: mira reactius transformant-se en productes."
    }
   ],
   "vocabulari": [
    {
     "terme": "Canvi físic",
     "definicio": "Transformació de la matèria on no s’altera la seva naturalesa ni la seva composició química (ex: canvis d’estat, de forma o de posició)."
    },
    {
     "terme": "Reacció química",
     "definicio": "Procés en el qual una o més substàncies (reactius) es transformen en substàncies noves amb propietats diferents (productes)."
    },
    {
     "terme": "Desnaturalització",
     "definicio": "Canvi en la estructura tridimensional d’una proteïna (per calor o canvi de pH) que li fa perdre les seves funcions originals."
    },
    {
     "terme": "Reversibilitat",
     "definicio": "Capacitat d’un procés o sistema per tornar a l’estat inicial sense alterar el medi."
    }
   ],
   "granPregunta": "Quines evidències ens permeten defensar que un canvi observat a la cuina és una transformació química i no només un canvi físic?"
  },
  {
   "id": "L08",
   "num": 8,
   "bloc": "stem",
   "numOriginal": "STEM 08",
   "materia": "Matemàtiques",
   "titol": "Quan un petit canvi fa créixer una epidèmia",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "font",
     "v": "CDC Center for Forecasting and Outbreak Analytics, materials sobre Rₜ"
    },
    {
     "k": "font",
     "v": "Referències introductòries d’epidemiologia matemàtica"
    },
    {
     "k": "referencia",
     "v": "Creixement exponencial, nombre reproductiu R i models epidemiològics"
    },
    {
     "k": "nota",
     "v": "Text de divulgació STEM elaborat per al Projecte lector. Els exemples numèrics són simplificacions didàctiques: les epidèmies reals depenen de molts factors i R varia amb el temps."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Imaginem una infecció en què cada persona contagiosa transmet, de mitjana, la malaltia a dues persones. Comencem amb 10 casos. En una generació de contagis podríem passar aproximadament a 20; després a 40; després a 80. En poques passes, una diferència que semblava petita produeix un creixement enorme."
    },
    {
     "t": "p",
     "x": "Ara canviem una sola cosa: cada persona contagia, de mitjana, 0,8 persones. De 100 casos passaríem aproximadament a 80; després a 64; després a 51. El procés tendeix a disminuir."
    },
    {
     "t": "h",
     "x": "El llindar d’1"
    },
    {
     "t": "p",
     "x": "En epidemiologia s’utilitza el nombre reproductiu efectiu, sovint escrit Rₜ, per estimar quantes infeccions noves genera de mitjana una persona infectada en un moment determinat. Si R és superior a 1, la transmissió tendeix a créixer. Si és inferior a 1, tendeix a disminuir."
    },
    {
     "t": "p",
     "x": "La frontera entre 0,9 i 1,1 sembla petita. Però quan un procés es repeteix moltes vegades, aquesta diferència s’acumula. No estem sumant sempre el mateix nombre de casos: cada generació depèn de la mida de l’anterior."
    },
    {
     "t": "h",
     "x": "R no és una propietat fixa"
    },
    {
     "t": "p",
     "x": "R no pertany només al virus. Pot canviar amb la immunitat de la població, el comportament, l’estació, les mesures de salut pública o les característiques d’una variant. Per això els epidemiòlegs estimen R al llarg del temps a partir de dades observables com proves positives, hospitalitzacions o altres indicadors."
    },
    {
     "t": "p",
     "x": "A més, R és una mitjana. Que R sigui 1,2 no significa que cada persona contagiï exactament 1,2 persones. Algunes no contagiaran ningú; d’altres, moltes. El nombre resumeix un comportament col·lectiu."
    },
    {
     "t": "h",
     "x": "Predir no és endevinar"
    },
    {
     "t": "p",
     "x": "Els models epidemiològics no poden veure el futur. Fan explícites unes hipòtesis i calculen què podria passar si es mantenen determinades condicions. Quan les condicions canvien, les prediccions també han de canviar."
    },
    {
     "t": "p",
     "x": "Això explica per què dos escenaris poden separar-se tant amb diferències inicials modestes. Una reducció petita en la transmissió repetida milers de vegades pot evitar un nombre molt gran de contagis. I, a l’inrevés, una petita pujada mantinguda pot accelerar el creixement."
    },
    {
     "t": "h",
     "x": "La potència d’un model senzill"
    },
    {
     "t": "p",
     "x": "Cap epidèmia real segueix exactament la successió 10, 20, 40, 80. Hi ha recuperacions, immunitat, diferències de contacte, geografia i molts altres factors. Però el model simple permet entendre una idea essencial abans d’afegir complexitat."
    },
    {
     "t": "p",
     "x": "Les matemàtiques no substitueixen la biologia ni la medicina. Ajuden a veure les conseqüències d’un mecanisme repetit. En aquest cas, mostren per què una diferència aparentment petita al voltant del valor 1 pot separar un brot que creix d’un que s’apaga."
    }
   ],
   "vocabulari": [
    {
     "terme": "Epidèmia",
     "definicio": "Augment de casos d’una malaltia per damunt del que s’espera en una població."
    },
    {
     "terme": "Nombre reproductiu R",
     "definicio": "Nombre mitjà d’infeccions noves generades per cada persona infectada en unes condicions determinades."
    },
    {
     "terme": "Llindar",
     "definicio": "Valor que separa comportaments diferents d’un sistema."
    },
    {
     "terme": "Model",
     "definicio": "Representació simplificada d’un fenomen real."
    },
    {
     "terme": "Estimació",
     "definicio": "Valor aproximat obtingut a partir de dades i un mètode de càlcul."
    }
   ],
   "granPregunta": "Per què una diferència petita entre un valor de R lleugerament superior o inferior a 1 pot acabar produint evolucions tan diferents d’una epidèmia?"
  },
  {
   "id": "L09",
   "num": 9,
   "bloc": "stem",
   "numOriginal": "STEM 09",
   "materia": "Tecnologia",
   "titol": "Com pot un auricular esborrar el soroll de l’autobús perquè només escolti la meva cançó?",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "font",
     "v": "Adaptat dels principis de la mecànica d’ones i interferència destructiva de la Universitat de València."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Imagina que puges a l’autobús de línia per tornar a casa després d’un llarg dia de classe, el motor fa molt de soroll i la gent del teu voltant xarra fort. Et poses els auriculars, pitges el play per escoltar la teva cançó preferida. En molt poc temps, el brunzit constant del motor disminueix molt i la música es torna més clara."
    },
    {
     "t": "p",
     "x": "Com s’ho fan aquests auriculars? La majoria de la gent pensa que simplement tapen l’orella amb molt de plàstic o gomes, com quan tanquem la finestra de classe per no escoltar els companys jugant al pati. Però el truc real és molt més enginyós: per esborrar el soroll de fora, l’auricular fabrica un segon so dins de la teva orella."
    },
    {
     "t": "p",
     "x": "Per entendre aquest «truc de màgia», hem de recordar que el so no és un objecte, sinó una ona de so (com una onada del mar) que viatja per l’aire. Aquestes onades tenen muntanyes (punts d’alta pressió) i valls (punts de baixa pressió). Quan el soroll del motor arriba al teu cap, aquestes muntanyes i valls fan tremolar el teu timpà i el teu cervell ho interpreta com a soroll."
    },
    {
     "t": "p",
     "x": "Els auriculars porten un micròfon extern que «escolta» el soroll de l’autobús un mil·lisegon abans que entri a la teva orella. A l’acte, un microxip intern calcula la forma d’aquella onada i la reprodueix per l’altaveu, però convertida en una ona de so invertida, quan el soroll de fora envia una muntanya, l’auricular en fabrica una vall de la mateixa mida."
    },
    {
     "t": "p",
     "x": "Quan l’ona del soroll i l’ona generada per l’auricular arriben amb fases oposades, les variacions de pressió se superposen i es redueixen. És interferència destructiva: el soroll no desapareix de l’univers, però la pressió acústica que arriba al timpà pot disminuir molt."
    },
    {
     "t": "p",
     "x": "Si has provat aquesta tecnologia, hauràs notat un detall curiós: la cancel·lació activa acostuma a funcionar especialment bé amb el soroll continu d’un motor, d’un aire condicionat o del vent, però si algú pica de mans al teu costat o un companya et crida de cop, aquest so acostuma a reduir-se menys."
    },
    {
     "t": "p",
     "x": "Això passa perquè el microxip necessita un temps microscòpic per calcular el so i crear l’ona oposada. Els sorolls constants i repetitius són fàcils de predir i anul·lar. En canvi, un soroll imprevist i de cop arriba a la teva orella abans que el xip hagi tingut temps de fabricar la resposta."
    },
    {
     "t": "p",
     "x": "La pròxima vegada que et posis els auriculars i el món al teu voltant es quedi en silenci instantani, recorda que no estàs presenciant màgia, sinó una batalla de física pura a escala microscòpica. Aquesta tecnologia ens demostra que el silenci no és sempre l’absència de so, sinó el resultat de combinar la ciència de les ones i l’enginyeria per neutralitzar el soroll abans que toqui els teus sentits."
    }
   ],
   "vocabulari": [
    {
     "terme": "Ona de so",
     "definicio": "La manera com el so viatja per l’aire creant «muntanyes» (alta pressió) i «valls» (baixa pressió) invisibles que fan tremolar el nostre timpà."
    },
    {
     "terme": "Ona de so invertida",
     "definicio": "Un so creat a mida pel microxip que té exactament la forma contrària al soroll que ve de fora."
    },
    {
     "terme": "Cancel·lació de so",
     "definicio": "El fenomen físic que passa quan dos sons oposats xoquen i es cancel·len, fent que l’aire deixi de vibrar."
    }
   ],
   "granPregunta": "Com pot un auricular reduir un soroll generant un altre so, i per què aquest sistema funciona millor amb un brunzit continu que amb sons sobtats?"
  },
  {
   "id": "L10",
   "num": 10,
   "bloc": "stem",
   "numOriginal": "STEM 10",
   "materia": "Biologia i geologia",
   "titol": "Wegener es va equivocar? Quan una idea científica canvia",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "autoria",
     "v": "Text original elaborat a partir de fonts de divulgació científica"
    },
    {
     "k": "font",
     "v": "U.S. Geological Survey – Plate Tectonics / Wegener’s evidence"
    },
    {
     "k": "data",
     "v": "Consulta: setembre de 2026"
    },
    {
     "k": "enllac",
     "v": "https://www.usgs.gov/educational-resources/plate-tectonics"
    },
    {
     "k": "nota",
     "v": "el text de la lectura és una redacció original elaborada a partir de la font indicada; no és una reproducció literal de la font."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "A principis del segle XX, Alfred Wegener va proposar una idea que avui ens sembla familiar: els continents no sempre han estat on són ara."
    },
    {
     "t": "p",
     "x": "Si mires un mapa de l’Atlàntic, les costes d’Àfrica i d’Amèrica del Sud semblen encaixar, com peces d’un trencaclosques. Wegener va pensar que aquella semblança no podia ser una casualitat."
    },
    {
     "t": "p",
     "x": "Però no es va limitar a mirar la forma dels continents."
    },
    {
     "t": "p",
     "x": "Va buscar més proves."
    },
    {
     "t": "p",
     "x": "En diferents continents separats per oceans es trobaven fòssils semblants. També hi havia roques d’edats i característiques similars a bandes de terra que avui estan molt lluny unes de les altres. A més, alguns indicis del clima del passat semblaven difícils d’explicar si els continents sempre haguessin estat a la mateixa posició."
    },
    {
     "t": "p",
     "x": "Wegener va reunir aquestes dades per defensar la idea de la deriva continental."
    },
    {
     "t": "p",
     "x": "Però tenia un problema important."
    },
    {
     "t": "p",
     "x": "No podia explicar bé quin mecanisme feia moure els continents."
    },
    {
     "t": "p",
     "x": "Això és una part interessant de la història de la ciència. Una idea pot tenir evidències a favor i, alhora, tenir problemes importants."
    },
    {
     "t": "p",
     "x": "Durant dècades, la proposta va generar debat. No era suficient dir «les costes encaixen». Calia explicar com es podia produir aquell moviment."
    },
    {
     "t": "p",
     "x": "Després de la Segona Guerra Mundial, la tecnologia va permetre estudiar molt millor el fons dels oceans. Els científics van descobrir estructures que no coneixien bé i van obtenir dades sobre les roques del fons oceànic i el seu magnetisme."
    },
    {
     "t": "p",
     "x": "Aquestes noves evidències van canviar el panorama."
    },
    {
     "t": "p",
     "x": "A poc a poc es va construir una explicació més completa: la superfície rígida externa de la Terra està dividida en grans plaques que es mouen. Els continents formen part d’aquestes plaques i, per tant, també es poden desplaçar."
    },
    {
     "t": "p",
     "x": "Aquesta teoria és la tectònica de plaques."
    },
    {
     "t": "p",
     "x": "Observa què ha passat."
    },
    {
     "t": "p",
     "x": "Wegener no tenia «tota la teoria» que avui estudiem. Però algunes de les seves evidències eren valuoses. El problema no era necessàriament que totes les seves observacions fossin incorrectes; faltava una explicació física convincent del moviment."
    },
    {
     "t": "p",
     "x": "La ciència va avançar quan van aparèixer noves dades capaces de connectar diferents peces del problema."
    },
    {
     "t": "p",
     "x": "Això ens ajuda a entendre què significa que una teoria científica sigui sòlida. No és una opinió que s’ha convertit en veritat perquè molta gent hi creu. És una explicació que ha aconseguit encaixar una gran quantitat d’evidències i que ha resistit molts intents de contrastar-la."
    },
    {
     "t": "p",
     "x": "També ens mostra que la ciència no avança sempre en línia recta."
    },
    {
     "t": "p",
     "x": "Hi ha idees que fracassen. N’hi ha que es modifiquen. N’hi ha que contenen una part útil però necessiten ser incorporades a una explicació més completa."
    },
    {
     "t": "p",
     "x": "Per això la història de Wegener no és només la història d’un científic que «tenia raó» o «estava equivocat»."
    },
    {
     "t": "p",
     "x": "És la història de com una idea pot començar amb una pregunta, sobreviure al debat, trobar noves evidències i acabar transformant-se en una explicació científica molt més potent."
    }
   ],
   "vocabulari": [
    {
     "terme": "Deriva continental",
     "definicio": "Idea segons la qual els continents s’han desplaçat al llarg del temps."
    },
    {
     "terme": "Tectònica de plaques",
     "definicio": "Teoria que explica el moviment de grans plaques de la litosfera i molts fenòmens geològics."
    },
    {
     "terme": "Hipòtesi",
     "definicio": "Explicació proposada que es pot contrastar amb evidències."
    },
    {
     "terme": "Evidència",
     "definicio": "Dada o observació que permet valorar una explicació."
    }
   ],
   "granPregunta": "Quan una part de la idea de Wegener va acabar integrada en la tectònica de plaques, podem dir que «tenia raó» o és més rigorós dir que la ciència va construir una explicació nova amb evidències noves?"
  },
  {
   "id": "L11",
   "num": 11,
   "bloc": "stem",
   "numOriginal": "STEM 11",
   "materia": "Matemàtiques",
   "titol": "Com es pot mentir amb un gràfic sense falsejar cap dada?",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "font",
     "v": "Australian Association of Mathematics Teachers, Topdrawer, «Misleading graphs»"
    },
    {
     "k": "referencia",
     "v": "Estadística i visualització de dades"
    },
    {
     "k": "nota",
     "v": "Text de divulgació matemàtica elaborat per al Projecte lector sobre eixos, escales i decisions de representació."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Imagina dues empreses que venen el mateix producte. L’any passat, l’empresa A en va vendre 100.000 unitats. Aquest any n’ha venut 105.000. Les vendes han augmentat un 5 %."
    },
    {
     "t": "p",
     "x": "Ara imagina que l’empresa vol presentar els resultats als seus inversors. Dibuixa un gràfic de barres, però l’eix vertical no comença a zero: comença a 99.000. La barra de l’any passat és molt petita i la d’aquest any sembla enorme. El titular diu: «Les nostres vendes es disparen». Cap xifra és falsa. Aleshores, el gràfic menteix?"
    },
    {
     "t": "h",
     "x": "Els gràfics també argumenten"
    },
    {
     "t": "p",
     "x": "Sovint pensem que un gràfic és una fotografia neutral de les dades. Però per construir-lo algú ha hagut de prendre decisions: quines dades inclou, quin període mostra, on comença l’eix, quina escala utilitza i si representa valors absoluts o percentatges."
    },
    {
     "t": "p",
     "x": "Si representem 100.000 i 105.000 en un eix que comença a zero, veurem dues barres d’alçada molt semblant. Si l’eix comença a 99.000, la diferència visual serà enorme. Les dades no han canviat. Ha canviat la manera de mirar-les."
    },
    {
     "t": "h",
     "x": "Fer desaparèixer un canvi"
    },
    {
     "t": "p",
     "x": "La manipulació també pot funcionar al revés. Imaginem que una temperatura passa de 14 °C a 16 °C. Si dibuixem un gràfic que va de 13 a 17 °C, la diferència ocuparà una part important de l’espai. Però si l’eix va de −50 a 100 °C, les dues línies quedaran gairebé enganxades."
    },
    {
     "t": "p",
     "x": "Per tant, una escala pot exagerar una diferència, però també pot ocultar-la."
    },
    {
     "t": "h",
     "x": "Escollir el començament i el final"
    },
    {
     "t": "p",
     "x": "Hi ha una altra decisió menys evident: quin període mostrem. Si seleccionem només els últims sis mesos d’una sèrie que puja i baixa, pot semblar que un valor no para de créixer. Si comencem el gràfic dos anys abans, potser descobrim que simplement està recuperant un valor anterior."
    },
    {
     "t": "p",
     "x": "Totes dues representacions poden contenir dades correctes. Però expliquen històries diferents perquè han seleccionat fragments diferents de la realitat."
    },
    {
     "t": "h",
     "x": "Una decisió inevitable"
    },
    {
     "t": "p",
     "x": "Això no significa que qualsevol gràfic sigui manipulador. Un gràfic necessita una escala, un començament i un final. De vegades, fins i tot és raonable que un eix no comenci a zero si volem observar petites variacions. La qüestió és si aquestes decisions ajuden a comprendre les dades o ens condueixen cap a una interpretació distorsionada."
    },
    {
     "t": "p",
     "x": "Llegir críticament un gràfic significa preguntar què representa exactament, quina escala utilitza, què s’ha inclòs i què ha quedat fora, i si la impressió visual correspon realment a la diferència numèrica. No cal falsejar una sola dada per conduir algú cap a una conclusió determinada; de vegades només cal decidir com ensenyar-la."
    }
   ],
   "vocabulari": [
    {
     "terme": "Escala",
     "definicio": "Relació utilitzada per representar els valors d’un gràfic."
    },
    {
     "terme": "Eix truncat",
     "definicio": "Eix que no comença en el valor que habitualment esperaríem, sovint zero."
    },
    {
     "terme": "Proporció",
     "definicio": "Relació entre dues quantitats."
    },
    {
     "terme": "Distorsionar",
     "definicio": "Presentar alguna cosa de manera que la percepció que en tenim quedi alterada."
    },
    {
     "terme": "Visualització de dades",
     "definicio": "Representació gràfica d’informació quantitativa."
    }
   ],
   "granPregunta": "Quan podem considerar enganyós un gràfic encara que totes les dades que hi apareixen siguin correctes?"
  },
  {
   "id": "L12",
   "num": 12,
   "bloc": "stem",
   "numOriginal": "STEM 12",
   "materia": "Física i química",
   "titol": "L’error de dir «quin fred que fa!»: calor, temperatura i la física de l’abric",
   "llengua": "ca",
   "minuts": 2,
   "autoria": [
    {
     "k": "autoria",
     "v": "Redacció de Física Quotidiana / Adaptació didàctica"
    },
    {
     "k": "font",
     "v": "Basat en els conceptes de termodinàmica bàsica de 2n d’ESO (Diferència entre Calor i Temperatura)."
    },
    {
     "k": "data",
     "v": "Adaptat per a ús escolar (2026)"
    },
    {
     "k": "enllac",
     "v": "Cultura Científica - Selecció de lectures sobre Termodinàmica"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "En el llenguatge de carrer utilitzem les paraules «calor» i «temperatura» com si fossin el mateix concepte. Diem «avui fa molta calor» o «aquesta manta fa molta calor». Tanmateix, si li preguntes a un físic, et dirà que aquestes frases són bastant incorrectes des del punt de vista de la ciència. Per a la física, la calor i la temperatura són dos conceptes relacionats, però profundament diferents."
    },
    {
     "t": "p",
     "x": "La temperatura és una mesura de l’energia cinètica mitjana que tenen les partícules d’un cos. En paraules més senzilles: indica com de ràpid es mouen o vibren els àtoms que formen un objecte. Si les partícules es mouen molt de pressa, el cos té una temperatura alta; si es mouen lentament, la temperatura és baixa. La temperatura es mesura amb un termòmetre en graus Celsius (°C) o Kelvin (K) i és una propietat que pertany a l’objecte."
    },
    {
     "t": "p",
     "x": "La calor, en canvi, no és una propietat que els cossos «tinguin» o «guardin», sinó una energia en trànsit. La calor és l’energia tèrmica que es transfereix de forma espontània des d’un cos que està a major temperatura cap a un altre cos que està a menor temperatura, fins que tots dos s’igualen (assolint l’anomenat equilibri tèrmic)."
    },
    {
     "t": "p",
     "x": "Això ens porta a una reflexió sorprenent: un anorac de ploma o una manta de llana no «donen» calor. Els abrics no tenen cap calefactor a l’interior. El que fan realment els abrics és actuar com a aïllants tèrmics. El nostre cos, que està a uns 37 °C, intenta transferir la seva calor cap a l’aire de l’exterior (que a l’hivern pot estar a 5 °C). L’abric el que fa és reduir o frenar aquesta fuga d’energia, atrapant una capa d’aire immòbil al nostre voltant. És el teu propi cos el que produeix la calor; l’abric simplement evita que s’escapa."
    },
    {
     "t": "p",
     "x": "Així doncs, quan toques una barra de metall a l’hivern i dius que «està molt freda», el que estàs sentint no és el «fred» del metall, sinó la gran velocitat a la qual la calor del teu cos s’escapa cap al metall, que és un excel·lent conductor tèrmic."
    }
   ],
   "vocabulari": [
    {
     "terme": "Temperatura",
     "definicio": "Mesura de l’agitació o energia cinètica mitjana de les partícules d’un cos."
    },
    {
     "terme": "Calor",
     "definicio": "Energia tèrmica que es transmet d’un cos de major temperatura a un de menor temperatura de manera espontània."
    },
    {
     "terme": "Equilibri tèrmic",
     "definicio": "Estat en el qual dos o més cossos en contacte igualen la seva temperatura i cessen la transferència de calor."
    },
    {
     "terme": "Aïllant tèrmic",
     "definicio": "Material que dificulta o redueix el pas i la transferència de calor entre dos medis."
    }
   ],
   "granPregunta": "Si una peça de metall i una de fusta són a la mateixa temperatura, per què el metall ens pot semblar més fred quan el toquem?"
  },
  {
   "id": "L13",
   "num": 13,
   "bloc": "stem",
   "numOriginal": "STEM 13",
   "materia": "Matemàtiques",
   "titol": "Quan les mateixes dades expliquen dues històries contràries",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "font",
     "v": "Stanford Encyclopedia of Philosophy, «Simpson’s Paradox»"
    },
    {
     "k": "referencia",
     "v": "Paradoxa de Simpson i dades agregades"
    },
    {
     "k": "referencia",
     "v": "Edward H. Simpson"
    },
    {
     "k": "nota",
     "v": "Text de divulgació matemàtica elaborat per al Projecte lector."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Imaginem dos hospitals, A i B, que realitzen la mateixa operació. Mirem els resultats de tot un any. A l’hospital A, el 90 % dels pacients sobreviuen. A l’hospital B, el 80 %. Si haguessis de sotmetre’t a aquella operació, quin triaries? Sembla evident: l’hospital A."
    },
    {
     "t": "p",
     "x": "Però ara algú ens dona una informació nova. L’hospital A rep sobretot casos senzills. L’hospital B és un centre especialitzat al qual envien molts pacients greus. Decidim separar les dades segons la dificultat dels casos. I apareix una sorpresa: entre els pacients amb casos senzills, B té millors resultats; i entre els greus, B també. Com pot ser que B sigui millor en tots dos grups i, quan els ajuntem, sembli pitjor?"
    },
    {
     "t": "h",
     "x": "Una contradicció que no és una contradicció"
    },
    {
     "t": "p",
     "x": "Aquest fenomen es coneix com a paradoxa de Simpson. Pot aparèixer quan una tendència que observem en diversos grups canvia, desapareix o fins i tot s’inverteix quan ajuntem totes les dades. No hi ha cap error aritmètic. El problema és que els grups poden tenir mides i característiques molt diferents."
    },
    {
     "t": "p",
     "x": "Si l’hospital B atén una proporció molt superior de casos greus, el seu resultat global quedarà molt influït per aquests pacients. Comparar simplement els percentatges totals pot amagar aquesta diferència."
    },
    {
     "t": "h",
     "x": "Una universitat i les admissions"
    },
    {
     "t": "p",
     "x": "Un cas famós es va produir en analitzar les admissions de la Universitat de Califòrnia a Berkeley durant la dècada de 1970. Les dades globals semblaven mostrar una taxa d’admissió superior per als homes. Quan els investigadors van separar les dades per departaments, però, la situació va canviar considerablement."
    },
    {
     "t": "p",
     "x": "Una part important de la diferència global provenia del fet que les candidates havien sol·licitat plaça amb més freqüència en departaments amb taxes d’admissió molt baixes. Això no resolia automàticament qualsevol qüestió de discriminació; mostrava una cosa més precisa: la dada global, tota sola, no explicava la causa de la diferència observada."
    },
    {
     "t": "h",
     "x": "Ajuntar o separar?"
    },
    {
     "t": "p",
     "x": "Quan és millor mirar les dades juntes i quan cal separar-les? No existeix una resposta automàtica. Si dividim les dades en grups sense criteri, també podem crear interpretacions enganyoses. Però si existeix una variable important —com la gravetat dels pacients o el departament—, ignorar-la pot portar-nos a comparar coses que no són realment equivalents."
    },
    {
     "t": "p",
     "x": "Per això l’estadística no consisteix simplement a calcular percentatges. Cal entendre què representen els grups que estem comparant."
    },
    {
     "t": "h",
     "x": "Les dades necessiten preguntes"
    },
    {
     "t": "p",
     "x": "La paradoxa de Simpson ens recorda que les dades no parlen soles. Podem calcular perfectament un percentatge i arribar, tanmateix, a una conclusió equivocada si no sabem què estem comparant."
    },
    {
     "t": "p",
     "x": "Preguntar «quin percentatge és més gran?» pot ser només el començament. Després hem de preguntar qui forma part de cada grup, si són realment comparables i si hi ha alguna altra variable que expliqui la diferència. Les matemàtiques ens permeten resumir la realitat, però comprendre-la exigeix també saber com l’hem dividida abans de començar a comptar."
    }
   ],
   "vocabulari": [
    {
     "terme": "Paradoxa de Simpson",
     "definicio": "Fenomen estadístic en què una tendència pot canviar quan agrupem o separem les dades."
    },
    {
     "terme": "Variable",
     "definicio": "Característica que pot prendre diferents valors."
    },
    {
     "terme": "Taxa",
     "definicio": "Proporció amb què es produeix un determinat fenomen."
    },
    {
     "terme": "Correlació",
     "definicio": "Relació estadística observada entre dues variables."
    },
    {
     "terme": "Dada agregada",
     "definicio": "Dada obtinguda ajuntant informació procedent de diversos grups."
    }
   ],
   "granPregunta": "Com podem decidir si, per entendre una situació, hem de confiar més en les dades globals o en les dades separades per grups?"
  },
  {
   "id": "L14",
   "num": 14,
   "bloc": "soc",
   "numOriginal": "SOC 01",
   "materia": "Filosofia",
   "titol": "Qui soc jo a Internet?",
   "llengua": "ca",
   "minuts": 6,
   "autoria": [
    {
     "k": "font",
     "v": "Materials del CCCB sobre adolescents, identitat, privacitat i participació a la xarxa."
    },
    {
     "k": "referencia",
     "v": "Liliana Arroyo, sociòloga especialitzada en transformació digital."
    },
    {
     "k": "nota",
     "v": "Text de divulgació elaborat per al Projecte lector a partir de les reflexions i materials citats. No és una transcripció literal de l’autora."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Abans de publicar una fotografia, probablement fas una cosa que les persones de fa trenta anys gairebé mai no havien de fer. La mires, potser la tornes a mirar i decideixes si t’agrada. Potser en fas una altra, i després una altra, fins que tries la que et convenç més. Potser hi poses un filtre i penses què hi escriuràs. I, en algun moment, encara que sigui durant un segon, imagines què pensaran els altres quan la vegin. Publicar sembla una acció molt senzilla, però darrere d’aquell clic hi pot haver una pregunta força complicada: quina versió de mi vull que vegin els altres?"
    },
    {
     "t": "h",
     "x": "Una persona o moltes?"
    },
    {
     "t": "p",
     "x": "Pensa en com ets en situacions diferents. Potser amb els teus millors amics parles d’una manera que no utilitzaries davant d’un professor; potser expliques coses a casa que no explicaries a tota la classe, o hi ha bromes que només entendria un grup concret. Això significa que estàs fingint? No necessàriament. Les persones no ens comportem exactament igual en tots els contextos: mostrem parts diferents de nosaltres segons amb qui som, on som i què està passant."
    },
    {
     "t": "p",
     "x": "A Internet passa una cosa semblant, però amb una diferència important: quan publiques alguna cosa, no sempre saps exactament qui t’està mirant. Una fotografia pensada per als teus amics pot acabar veient-la algú de la família; un comentari escrit avui pot trobar-lo algú d’aquí a tres anys, i un vídeo pot arribar a persones que no coneixes. Això fa que la identitat digital tingui una característica estranya: nosaltres contribuïm a construir-la, però no la controlem completament."
    },
    {
     "t": "h",
     "x": "El perfil soc jo?"
    },
    {
     "t": "p",
     "x": "Imagina una noia que mira el seu propi perfil. Hi veu una excursió, un aniversari, una fotografia a la platja, un concert i una tarda amb les amigues. Si una persona desconeguda només veiés aquell perfil, potser pensaria que sempre està fent coses i que s’ho passa molt bé. El perfil, però, no mostra les hores estudiant, una discussió a casa, un diumenge avorrit o una tarda en què se sentia sola. Això vol dir que el perfil és fals? No necessàriament: les fotografies són reals i aquells moments van passar. Però seleccionar coses reals també construeix una determinada imatge de nosaltres. No cal mentir per explicar una història incompleta."
    },
    {
     "t": "h",
     "x": "Quan els altres entren en la història"
    },
    {
     "t": "p",
     "x": "Ara imagina que aquesta noia publica una fotografia que li encanta i, al cap d’una hora, gairebé ningú no hi ha reaccionat. Comença a pensar que potser no era tan bona. Un altre dia en publica una que no li agradava especialment i rep moltes reaccions. Potser conclou que aquesta és la mena de contingut que hauria de publicar. Al principi ella decidia què mostrava als altres; ara, en canvi, la reacció dels altres comença a influir en allò que decideix mostrar i, potser, també en la manera com es veu a si mateixa."
    },
    {
     "t": "p",
     "x": "Això no passa només a Internet: sempre ens ha importat què pensen els altres. Una burla pot fer-nos dubtar i un comentari d’un amic pot fer-nos sentir bé. Les persones construïm part de la nostra identitat en relació amb altres persones. Les xarxes, però, introdueixen una novetat: aquesta mirada pot convertir-se en nombres —visualitzacions, seguidors, comentaris o reaccions— i una cosa tan complexa com l’aprovació dels altres sembla que es pugui comptar."
    },
    {
     "t": "h",
     "x": "Els rastres que no triem"
    },
    {
     "t": "p",
     "x": "La nostra identitat digital tampoc no està formada només pel que publiquem. Deixem rastres quan busquem, mirem, comprem, reaccionem o naveguem. Les plataformes poden registrar informació sobre el nostre comportament i utilitzar-la per decidir quin contingut ens mostren. Així es pot formar una versió digital de nosaltres que no hem construït conscientment: una plataforma dedueix què ens interessa, ens mostra continguts relacionats, nosaltres hi reaccionem i aquestes reaccions generen nova informació. La identitat digital, per tant, no és només allò que diem de nosaltres mateixos, sinó també allò que altres persones i sistemes infereixen a partir del que fem."
    },
    {
     "t": "h",
     "x": "Tenim dret a canviar?"
    },
    {
     "t": "p",
     "x": "Hi ha encara un últim problema: les persones canviem. Una cosa que als tretze anys ens sembla divertidíssima pot fer-nos vergonya als setze; una opinió que defensàvem pot deixar de convèncer-nos, i podem canviar d’amics, d’aficions o de manera d’entendre’ns. Canviar forma part de créixer, però Internet té molta memòria. Una publicació antiga pot tornar, una fotografia pot haver estat guardada i una captura de pantalla pot continuar existint encara que eliminem l’original. Això crea una pregunta que abans tenia menys pes: tenim dret a deixar enrere la persona que érem?"
    },
    {
     "t": "p",
     "x": "Quan preguntem «qui soc jo a Internet?», doncs, potser no hi ha una única resposta. Soc el que publico, però també el que decideixo no publicar; soc la persona que els altres interpreten a partir del que veuen, però també soc molt més que allò que poden veure. I, sobretot, no soc una persona acabada: continuo canviant. Un perfil pot mostrar una part de nosaltres, però una part no és necessàriament el tot. La qüestió és fins a quin punt som nosaltres qui construïm la nostra identitat i fins a quin punt la construeix també la mirada dels altres."
    }
   ],
   "vocabulari": [
    {
     "terme": "Identitat",
     "definicio": "Conjunt de característiques, experiències, relacions i maneres d’entendre’ns que participen en qui som."
    },
    {
     "terme": "Identitat digital",
     "definicio": "Manera com una persona apareix i és percebuda a través de la seva activitat i els seus rastres digitals."
    },
    {
     "terme": "Privacitat",
     "definicio": "Capacitat de protegir aspectes de la nostra vida i decidir qui hi pot accedir."
    },
    {
     "terme": "Petjada digital",
     "definicio": "Rastre d’informació que deixem quan utilitzem serveis i espais digitals."
    },
    {
     "terme": "Reputació",
     "definicio": "Imatge o valoració que altres persones construeixen sobre algú."
    }
   ],
   "granPregunta": "Fins a quin punt construïm nosaltres la nostra identitat digital i fins a quin punt la construeixen també la mirada dels altres i els rastres que deixem?"
  },
  {
   "id": "L15",
   "num": 15,
   "bloc": "soc",
   "numOriginal": "SOC 02",
   "materia": "Geografia i història",
   "titol": "Fem memòria… 11 de setembre de 1976: recuperació de la Diada després del franquisme",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "font",
     "v": "Article educatiu de l’Equip edu (setembre de 2022) a partir de fonts com sapiens.cat, memoria.cat i premsa de l’època."
    },
    {
     "k": "referencia",
     "v": "Assemblea de Catalunya i Comissió Onze de Setembre."
    },
    {
     "k": "referencia",
     "v": "Primera celebració legal de la Diada Nacional de Catalunya a Sant Boi de Llobregat (1976) i fets de Manresa."
    },
    {
     "k": "nota",
     "v": "Text adaptat per al Projecte lector de l’àrea de Geografia i Història a partir de fets històrics de la Transició democràtica."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Un any més, l’11 de setembre es commemora la Diada Nacional de Catalunya. En la nostra història recent, però, no sempre s’ha pogut celebrar en llibertat."
    },
    {
     "t": "h",
     "x": "La celebració de la Diada fins al franquisme"
    },
    {
     "t": "p",
     "x": "La commemoració dels fets de 1714 va començar a finals del segle XIX. El primer acte va ser una missa a l’església de Santa Maria del Mar de Barcelona l’any 1886. Més endavant, l’any 1888, es va instal·lar l’estàtua dedicada a Rafael Casanova —conseller en cap de Barcelona durant el setge de 1714-, que es va convertir en un punt de referència per a ofrenes florals i reivindicacions polítiques."
    },
    {
     "t": "p",
     "x": "Amb el pas dels anys, la Diada va evolucionar des d’actes culturals o religiosos cap a un caràcter clarament massiu i de protesta política. Durant el segle XX, la celebració va patir interrupcions: va ser prohibida durant la dictadura de Primo de Rivera (1923-1930) i recuperada plenament durant la Segona República (1931-1939). Amb la victòria franquista després de la Guerra Civil, la Diada va ser de nou prohibida, el monument a Casanova es va retirar i la commemoració va haver de passar a la clandestinitat."
    },
    {
     "t": "h",
     "x": "La Diada de Sant Boi l’any 1976"
    },
    {
     "t": "p",
     "x": "La primera celebració autoritzada després de la dictadura va tenir lloc l’11 de setembre de 1976. No feia ni un any de la mort del dictador Francisco Franco i l’oposició política encara era il·legal. L’Assemblea de Catalunya i la Comissió Onze de Setembre van convocar un acte unitari."
    },
    {
     "t": "p",
     "x": "Inicialment, la concentració s’havia de fer al parc de la Ciutadella de Barcelona, però el Govern Civil la va prohibir per por a una gran mobilització urbana. Després de negociacions intenses, es va acordar traslladar l’acte a Sant Boi de Llobregat, on hi ha la tomba de Rafael Casanova. L’acte va reunir milers de persones sota el lema unitari: «Llibertat, amnistia, estatut d’autonomia». Aquest esdeveniment va suposar un punt de inflexió clau en la recuperació de les llibertats democràtiques."
    },
    {
     "t": "h",
     "x": "La mobilització a les comarques: el cas de Manresa"
    },
    {
     "t": "p",
     "x": "El moviment no es va limitar a la rodalia de Barcelona. A Manresa, el 10 de setembre de 1976, l’Assemblea del Bages va organitzar un míting al pavelló del Congost per preparar la jornada de l’endemà. Encara que el Govern Civil va obligar a eliminar les paraules «Diada Nacional de Catalunya» del cartell oficial com a condició per autoritzar-lo, l’acte va aplegar unes 3.000 persones i va esdevenir la primera celebració pública de la jornada a la ciutat després de gairebé quaranta anys de dictadura."
    },
    {
     "t": "p",
     "x": "Aquestes mobilitzacions de 1976 van obrir el camí per a la gran manifestació d’un milió de persones a Barcelona l’11 de setembre de 1977, el posterior restabliment de la Generalitat de Catalunya i la declaració oficial de la Diada com a Festa Nacional pel Parlament de Catalunya l’any 1980."
    }
   ],
   "vocabulari": [
    {
     "terme": "Clandestinitat",
     "definicio": "Situació en què es realitzen activitats polítiques, culturals o socials d’amagat per estar prohibides per la llei o per un règim autoritari."
    },
    {
     "terme": "Transició democràtica",
     "definicio": "Període històric de canvi polític mitjançant el qual Espanya va passar de la dictadura franquista a un estat social i democràtic de dret."
    },
    {
     "terme": "Assemblea de Catalunya",
     "definicio": "Plataforma unitària creada l’any 1971 que coordinava la major part de partits, sindicats i organitzacions antifranquistes catalanes."
    },
    {
     "terme": "Amnistia",
     "definicio": "Mesura jurídica per la qual s’extingeix la responsabilitat penal dels delictes polítics comesos durant un període determinat, molt reclamat durant la Transició per als presos del franquisme."
    },
    {
     "terme": "Govern Civil",
     "definicio": "Oficina i autoritat de l’Estat a cada província que durant el franquisme exercia el control de l’ordre públic i tenia la capacitat d’autoritzar o prohibir reunions i manifestacions."
    }
   ],
   "granPregunta": "Fins a quin punt les llibertats democràtiques es concedeixen des del poder i fins a quin punt es conquereixen mitjançant la pressió i la mobilització social?"
  },
  {
   "id": "L16",
   "num": 16,
   "bloc": "soc",
   "numOriginal": "SOC 03",
   "materia": "Orientació i tutoria",
   "titol": "La nouvinguda",
   "llengua": "ca",
   "minuts": 4,
   "autoria": [
    {
     "k": "autoria",
     "v": "M. Dolors Añón"
    },
    {
     "k": "font",
     "v": "Afers juvenils (Editorial Neopàtria)"
    },
    {
     "k": "data",
     "v": "2024"
    },
    {
     "k": "enllac",
     "v": "https://afersjuvenils.cat/index.html"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Vaig arribar al pati com cada dia i les noies més populars em van envoltar, rialleres. Jo era la nouvinguda i totes m’acollien. Però aquell migdia, en tombar la cantonada, em vaig trobar el Raül, que m’esperava. Em va dir que li agradava i em va fer un petó. «I la Cris?», li vaig preguntar, perquè tothom sabia que ell i la Cris havien estat junts. «Això és aigua passada —va respondre—. M’agrades tu, només tu.» I jo, que també m’hi sentia atreta, vaig acceptar. Vam començar a sortir d’amagat: ens vèiem cada tarda al parc o a la biblioteca i ens escrivíem a totes hores."
    },
    {
     "t": "p",
     "x": "L’endemà, però, tot va canviar. Les noies que sempre m’acollien es van apartar. Les saludava i no em contestaven. Quan em creuava amb la Cris, em tocava els cabells i em deia ben baixet: «fresca, ets una fresca». Les altres xiuxiuejaven al meu pas i, en veure’m venir, taral·lejaven una cançó que deia: «Fresca, ei! Tu ets una fresca»."
    },
    {
     "t": "p",
     "x": "Aviat allò va saltar del pati al mòbil. Un matí, en obrir l’armariet, hi vaig trobar la mateixa paraula escrita. Poc després van penjar a Instagram una foto antiga on sortíem totes; a mi em van etiquetar com a @lafresca i hi van afegir la cançó. La foto va córrer de mòbil en mòbil, amb comentaris i rialletes, i ja no la vaig poder aturar. I el Raül? El Raül no rebia res. Ningú no li deia mai res, tot i que ell havia començat aquella història igual que jo."
    },
    {
     "t": "p",
     "x": "Fins que un dia va deixar d’aparèixer. Em va deixar amb un missatge sec: «Ho havíem de deixar, aquesta relació ens estava fent mal». No li vaig respondre. Em vaig tancar a casa una setmana, dormint malament, mig malalta, sense anar a l’institut. Em sentia com una fera engabiada."
    },
    {
     "t": "p",
     "x": "Al final vaig prendre una determinació. Vaig agafar la roba de la mare, que havia estat actriu: unes mitges calades, una faldilla ben curta, unes sabates de taló. Em vaig pintar els llavis ben vermells i vaig entrar al pati amb pas ferm, davant les mirades de tothom. A classe, la professora em va fer aixecar i em va dir que aquella no era manera de venir a l’institut. «És que avui vinc disfressada de fresca, perquè és així com em diuen», vaig replicar. Tota la colla de la Cris va esclatar a riure. Em van portar a la cap d’estudis."
    },
    {
     "t": "p",
     "x": "Allà ja no vaig poder més i vaig començar a plorar. Havien reunit les proves: la paraula a l’armariet, la foto d’Instagram. Volien obrir el protocol d’assetjament i avisar els meus pares. Els vaig suplicar que no ho fessin: prou problemes tenien a casa."
    },
    {
     "t": "p",
     "x": "Just llavors va entrar la mare, resplendent. Venia a dir que ens traslladàvem: li havien ofert rodar una pel·lícula a Miami i havíem de marxar de seguida. La cap d’estudis em va felicitar per ser «tan valenta». De camí a casa, la mare em va explicar que buscaven una actriu adolescent i que potser jo m’hi podria presentar."
    },
    {
     "t": "p",
     "x": "—I quin paper hauré de fer? De fresca? —vaig dir."
    },
    {
     "t": "p",
     "x": "—Però filla, què dius? On has après aquestes paraulotes?"
    },
    {
     "t": "p",
     "x": "—Res, mare. Era una broma."
    }
   ],
   "vocabulari": [
    {
     "terme": "Assetjament",
     "definicio": "Acció de fer patir algú de manera repetida i intencionada."
    },
    {
     "terme": "Taral·lejar",
     "definicio": "Cantar una melodia en veu baixa, sense pronunciar-ne bé la lletra."
    },
    {
     "terme": "Engabiada",
     "definicio": "Tancada en una gàbia; aquí, sense llibertat ni sortida."
    },
    {
     "terme": "Determinació",
     "definicio": "Decisió ferma de fer una cosa."
    },
    {
     "terme": "Resplendent",
     "definicio": "Que brilla, que fa molt bon aspecte i sembla plena d’alegria."
    }
   ],
   "granPregunta": "Per què una mateixa relació fa que la protagonista sigui assenyalada i insultada mentre el Raül gairebé no rep conseqüències, i què revela això sobre el doble raser amb què jutgem nois i noies?"
  },
  {
   "id": "L17",
   "num": 17,
   "bloc": "soc",
   "numOriginal": "SOC 04",
   "materia": "Art",
   "titol": "L’art necessita tenir un autor?",
   "llengua": "ca",
   "minuts": 5,
   "autoria": [
    {
     "k": "autoria",
     "v": "Natxo Medina / Redacció de Cultura."
    },
    {
     "k": "font",
     "v": "Diari El País (Secció de Cultura)"
    },
    {
     "k": "font",
     "v": "«Un 'banksy' se autodestruye tras ser subastado por más de un millón de euros»"
    },
    {
     "k": "data",
     "v": "6 d’octubre de 2018"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Londres, 5 d’octubre de 2018. La sala està plena. A les parets hi ha algunes de les obres més cotitzades del món. Davant dels quadres, col·leccionistes, experts i persones disposades a pagar fortunes esperen el moment decisiu. Entre les obres que s’han de subhastar n’hi ha una especialment coneguda: Girl with Balloon. És una imatge senzilla d’una nena que allarga el braç cap a un globus vermell amb forma de cor. El seu autor és Banksy. O, millor dit, ningú sap exactament qui és Banksy."
    },
    {
     "t": "p",
     "x": "El subhastador aixeca el martell. El preu continua pujant. Finalment, algú ofereix més d’un milió de lliures. Venut. La gent aplaudeix. I aleshores passa una cosa que ningú espera. Se sent un soroll, una mena de brunzit mecànic. El quadre comença a baixar lentament dins del seu propi marc i, davant dels ulls dels compradors i de les càmeres, la pintura comença a ser triturada."
    },
    {
     "t": "p",
     "x": "Durant uns segons, ningú no entén què està passant. Una part de l’obra desapareix dins del marc. La pintura va sortint per la part inferior convertida en llargues tires. Una obra que acaba de ser venuda per més d’un milió de lliures s’acaba de destruir davant de tothom. Però no s’havia destruït sola. Dins del marc hi havia una trituradora que Banksy havia preparat. Posteriorment, l’artista va publicar un vídeo on mostrava com havia preparat el mecanisme. L’obra, que fins aquell moment es coneixia com Girl with Balloon, va passar a tenir un altre nom: Love Is in the Bin, «L’amor és a la paperera»."
    },
    {
     "t": "p",
     "x": "Però hi havia una cosa encara més curiosa: qui havia fet tot allò continuava sent un misteri."
    },
    {
     "t": "p",
     "x": "Banksy és un dels artistes d’art urbà més coneguts del món. Les seves obres han aparegut en parets, edificis i espais públics de diferents països. Les seves imatges acostumen a ser senzilles i fàcils de reconèixer: una nena, un globus, una rata, un policia, un manifestant o un soldat. Però darrere d’aquestes imatges hi ha temes més complexos, com la guerra, la desigualtat, la política, el consumisme o la mateixa societat."
    },
    {
     "t": "p",
     "x": "Durant anys han circulat teories sobre qui pot ser Banksy, però la seva identitat no ha estat confirmada públicament de manera definitiva. Aquest anonimat forma part de la manera com el públic rep i interpreta la seva obra."
    },
    {
     "t": "p",
     "x": "Durant anys, doncs, Banksy ha estat famós sense mostrar públicament qui és. I això ens porta a una pregunta interessant: per què ens importa tant saber qui ha fet una obra?"
    },
    {
     "t": "p",
     "x": "Quan mirem una obra d’art, sovint el primer que volem saber és qui l’ha fet. Si descobrim que és d’un artista molt famós, probablement la mirem d’una manera diferent que si ens diuen que l’ha pintada una persona desconeguda. Però imaginem que no sabem res de l’autor. Només tenim davant nostre una imatge. La mirem, pensem què ens provoca i intentem interpretar-la. I després algú ens diu: «És un Banksy.»"
    },
    {
     "t": "h",
     "x": "Canvia la nostra opinió?"
    },
    {
     "t": "p",
     "x": "Potser sí. De sobte sabem que l’ha fet un artista famós, que les seves obres poden arribar a vendre’s per milions de lliures i que la seva identitat és un misteri. Tot això pot influir en la nostra manera de mirar. Però l’obra continua sent la mateixa."
    },
    {
     "t": "p",
     "x": "Això ens porta a parlar de l’autoria. Saber qui ha creat una obra ens pot ajudar a entendre-la: podem conèixer la seva època, les seves idees, les seves intencions o la seva manera de treballar. Però també pot passar que el nom de l’artista pesi tant que decidim que una obra és important abans d’haver-la observat realment."
    },
    {
     "t": "p",
     "x": "El cas de Banksy ho fa especialment evident. Una obra seva pot aparèixer al carrer i ser vista per persones que no saben qui l’ha pintada. Després algú confirma que és un Banksy i, de sobte, aquella mateixa obra pot convertir-se en notícia i despertar l’interès de molta més gent."
    },
    {
     "t": "p",
     "x": "Què ha canviat? La pintura? No. El que ha canviat és el que sabem sobre l’autor."
    },
    {
     "t": "p",
     "x": "I encara hi ha una última sorpresa. Quan Love Is in the Bin va tornar a subhastar-se tres anys després, es va vendre per 18,6 milions de lliures. La mateixa obra que havia estat parcialment destruïda ara valia molt més. Banksy havia posat en qüestió el mercat de l’art, però la seva acció havia fet que l’obra fos encara més famosa i acabés assolint un preu superior."
    },
    {
     "t": "p",
     "x": "Per això, potser la pregunta més interessant no és només «Qui és Banksy?», sinó «Per què ens importa tant saber-ho?»"
    },
    {
     "t": "p",
     "x": "Quan mirem una obra d’art, què estem valorant realment: el que veiem, el missatge, la història que hi ha al darrere o el nom de l’artista?"
    },
    {
     "t": "p",
     "x": "Potser una obra continua sent la mateixa encara que no sapiguem qui l’ha creada. Però també és possible que, quan descobrim qui és l’autor, la nostra manera de mirar canviï."
    }
   ],
   "vocabulari": [
    {
     "terme": "Autoria",
     "definicio": "Relació entre una obra i la persona que l’ha creada."
    },
    {
     "terme": "Anonimat",
     "definicio": "Situació en què no es coneix públicament la identitat d’una persona."
    },
    {
     "terme": "Art urbà",
     "definicio": "Art que es crea o es presenta en espais públics, especialment als carrers."
    },
    {
     "terme": "Mercat de l’art",
     "definicio": "Conjunt de persones i institucions que participen en la compra i venda d’obres d’art."
    },
    {
     "terme": "Valor",
     "definicio": "Importància que donem a una obra, que no sempre coincideix amb el seu preu."
    }
   ],
   "granPregunta": "Cal saber qui ha creat una obra per poder valorar-la com a art, o el nom de l’autor pot arribar a condicionar massa la nostra mirada?"
  },
  {
   "id": "L18",
   "num": 18,
   "bloc": "soc",
   "numOriginal": "SOC 05",
   "materia": "Filosofia",
   "titol": "Si tothom diu que és veritat, tu també ho creuries?",
   "llengua": "ca",
   "minuts": 5,
   "autoria": [
    {
     "k": "font",
     "v": "OpenStax, Introduction to Sociology 3e, apartat dedicat als experiments de conformitat d’Asch."
    },
    {
     "k": "referencia",
     "v": "Solomon E. Asch, psicòleg social."
    },
    {
     "k": "referencia",
     "v": "Experiments sobre conformitat social desenvolupats durant la dècada de 1950."
    },
    {
     "k": "nota",
     "v": "Text de divulgació elaborat i adaptat al català per al Projecte lector a partir de l’experiment d’Asch i de fonts educatives sobre conformitat social."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Imagina que tens davant teu una targeta amb tres línies: una és curta, una altra és mitjana i la tercera és clarament més llarga. Al costat hi ha una quarta línia i et fan una pregunta molt senzilla: quina de les tres té la mateixa longitud que aquesta? No cal calcular res; ho veus a simple vista i la resposta et sembla evident."
    },
    {
     "t": "p",
     "x": "Estàs assegut en una sala amb altres persones. Respon primer una d’elles i, sorprenentment, tria una línia que és clarament incorrecta. La segona dona exactament la mateixa resposta. També la tercera i la quarta. Ara et toca a tu. Continues veient amb claredat quina és la resposta correcta, però acabes d’escoltar quatre persones afirmant el contrari. Què respondries?"
    },
    {
     "t": "h",
     "x": "L’experiment d’Asch"
    },
    {
     "t": "p",
     "x": "Durant la dècada de 1950, el psicòleg Solomon Asch va realitzar una sèrie d’experiments que s’han convertit en clàssics de la psicologia social. La persona que participava en l’estudi pensava que els altres membres del grup eren participants com ella, però en realitat formaven part de l’experiment. En algunes rondes, tots havien rebut la instrucció de donar deliberadament la mateixa resposta incorrecta. La pregunta era fàcil i l’error, evident; tanmateix, molts participants van acabar seguint alguna vegada la resposta del grup."
    },
    {
     "t": "p",
     "x": "Per què dir una cosa que els teus propis ulls et diuen que és falsa? Potser el grup et fa dubtar realment del teu judici: «És impossible que tots s’equivoquin; potser ho estic veient malament». Però també pot passar que continuïs pensant que tens raó i, malgrat això, donis la resposta del grup per no destacar, no quedar malament o evitar la incomoditat de ser l’única persona que discrepa. Anomenem conformitat aquesta tendència a modificar una conducta, una resposta o una posició per adaptar-nos al grup."
    },
    {
     "t": "h",
     "x": "Seguir els altres no sempre és un error"
    },
    {
     "t": "p",
     "x": "Ser influïts pels altres no és necessàriament dolent. Si arribes per primera vegada a un país i no saps com funciona el transport públic, observes què fa la gent; si sona una alarma en un edifici i tothom es dirigeix cap a una sortida, probablement els seguiràs. Aprenem molt observant altres persones i confiem constantment en professors, familiars, metges o científics. El problema, per tant, no pot resumir-se en «no segueixis mai els altres», sinó en una pregunta més difícil: quan tenim bones raons per confiar en el grup i quan hauríem de mantenir el nostre propi criteri?"
    },
    {
     "t": "h",
     "x": "Un sol aliat"
    },
    {
     "t": "p",
     "x": "Els experiments sobre conformitat van mostrar una dada especialment interessant: la pressió del grup disminuïa molt quan la persona deixava d’estar completament sola. N’hi podia haver prou que una altra persona trenqués la unanimitat. Això suggereix que discrepar no depèn només de saber quina és la resposta correcta; també depèn de com ens sentim quan hem de defensar-la. És més fàcil dir «no hi estic d’acord» quan algú altre ja ha obert aquesta possibilitat."
    },
    {
     "t": "h",
     "x": "Quan no hi ha cap regle per mesurar"
    },
    {
     "t": "p",
     "x": "Substitueix ara les línies per una situació de classe. Algú fa una broma sobre un company que no et sembla divertida, però tothom riu. Riuries també? O imagina un grup de missatgeria on es comparteix una afirmació sobre algú de l’institut. No saps si és certa, però tothom la comenta com si ho fos. La repetiries? En aquests casos ja no tenim una línia que puguem mesurar amb un regle. La realitat és més ambigua i, precisament per això, la influència del grup pot ser més difícil de detectar."
    },
    {
     "t": "p",
     "x": "És temptador pensar que, si molta gent defensa una idea, alguna raó hi deu haver. De vegades és així, però la història mostra que societats senceres han compartit idees que avui considerem profundament equivocades. Una opinió no es converteix automàticament en certa perquè milions de persones la comparteixin; però tampoc nosaltres tenim raó simplement perquè siguem els únics que pensem diferent. Ser diferent no garanteix tenir raó. Necessitem alguna cosa més: raons, proves i disposició a revisar el nostre judici."
    },
    {
     "t": "p",
     "x": "Pensar per un mateix, per tant, no significa ignorar els altres ni aferrar-se sempre a la primera opinió. Significa poder escoltar-los sense deixar automàticament el nostre judici a les seves mans, preguntar-nos per què pensem el que pensem i ser capaços de canviar d’opinió quan apareixen millors raons. L’experiment d’Asch ens mostra una tensió pròpia de viure amb altres persones: necessitem el grup per aprendre i conviure, però també necessitem conservar la capacitat de preguntar-nos si pensem una cosa perquè tenim raons per pensar-la o simplement perquè tothom al nostre voltant la pensa."
    }
   ],
   "vocabulari": [
    {
     "terme": "Conformitat",
     "definicio": "Canvi en una conducta, resposta o opinió provocat per la influència real o percebuda d’un grup."
    },
    {
     "terme": "Pressió social",
     "definicio": "Influència que exerceixen altres persones sobre la nostra manera d’actuar o pensar."
    },
    {
     "terme": "Unanimitat",
     "definicio": "Situació en què totes les persones d’un grup coincideixen en una mateixa posició."
    },
    {
     "terme": "Criteri propi",
     "definicio": "Capacitat de formar i revisar un judici a partir de raons, informació i reflexió."
    },
    {
     "terme": "Discrepar",
     "definicio": "Mantenir una opinió diferent de la d’una altra persona o grup."
    }
   ],
   "granPregunta": "Què significa tenir criteri propi si, inevitablement, el que pensen els altres també influeix en nosaltres?"
  },
  {
   "id": "L19",
   "num": 19,
   "bloc": "soc",
   "numOriginal": "SOC 06",
   "materia": "Geografia i història",
   "titol": "12 d’octubre: Dia de la Resistència Indígena",
   "llengua": "es",
   "minuts": 4,
   "autoria": [
    {
     "k": "autoria",
     "v": "Coordinadora de las Organizaciones Indígenas de la Cuenca Amazónica (COICA)."
    },
    {
     "k": "font",
     "v": "COICA – text sobre el Dia de la Resistència Indígena."
    },
    {
     "k": "referencia",
     "v": "La reinterpretació del 12 d’octubre com a Dia de la Resistència Indígena i la reivindicació dels drets dels pobles originaris d’Amèrica."
    },
    {
     "k": "referencia",
     "v": "COICA (Coordinadora de las Organizaciones Indígenas de la Cuenca Amazónica), organització que defensa els drets dels pobles indígenes de la conca amazònica."
    },
    {
     "k": "data",
     "v": "2024"
    }
   ],
   "text": [
    {
     "t": "h",
     "x": "12 de octubre: Día de la Resistencia Indígena"
    },
    {
     "t": "p",
     "x": "El 12 de octubre marca una fecha significativa en la historia de América. Durante siglos, este día fue conocido erróneamente como el Día de la Raza, una celebración que conmemoraba la llegada de Cristóbal Colón al continente americano en 1492. Sin embargo, esta perspectiva es totalmente rechazada por los pueblos indígenas, quienes sostenemos que: lo que ocurrió aquel 12 de octubre fue una invasión, un saqueo, una colonización forzada y un genocidio por parte de la corona española. Este acto fue el inicio de una era de opresión y despojo contra nuestros pueblos originarios."
    },
    {
     "t": "p",
     "x": "Frente a esta realidad, el 12 de octubre se ha resignificado como el Día de la Resistencia Indígena, un reconocimiento a la incansable resistencia de los pueblos indígenas por defender sus territorios, culturas, lenguas y formas de vida. No hay nada que celebrar en la colonización, pero sí en la resistencia que durante más de 500 años ha sido el pilar de la existencia indígena en el continente."
    },
    {
     "t": "h",
     "x": "¿Día de la Raza o Día de la Resistencia?"
    },
    {
     "t": "p",
     "x": "El 12 de octubre invita a una reflexión profunda: ¿qué significó realmente el «Encuentro de Dos Mundos»? Lo que muchas veces se ha presentado como un mestizaje enriquecedor, esconde una historia de violencia y saqueo que no puede ser ignorada. A través de la imposición del sistema colonial, miles de indígenas fueron asesinados, esclavizados y despojados de sus tierras, y con ellos, gran parte de su identidad y cosmovisión."
    },
    {
     "t": "p",
     "x": "Hoy, más de cinco siglos después, la resistencia indígena no es solo un recuerdo del pasado. Sigue siendo una realidad viva en las comunidades que día a día luchan por defender sus territorios frente a las amenazas de la minería, la tala ilegal, el agronegocio y los megaproyectos que intentan devastar la Amazonía y otros territorios indígenas. Este 2024, la Amazonía hogar de más de 500 nacionalidades, ha sido devorada por las llamas, muchas de ellas iniciadas para enriquecerse a costa de la vida y la naturaleza, el río amazonas ha experimentado una de las mayores sequías en siglos. Este 12 de octubre, entonces, no solo es un día para recordar la resistencia histórica, sino para reafirmar el compromiso actual con la defensa de los derechos indígenas, su autodeterminación y su soberanía territorial y para exigir reparación, justicia y acciones concretas que resignifiquen la valía de las comunidades y su contribución al cuidado del planeta."
    },
    {
     "t": "h",
     "x": "Un llamado a la justicia histórica"
    },
    {
     "t": "p",
     "x": "El Día de la Resistencia Indígena es también una oportunidad para exigir una justicia histórica integral. El reconocimiento de los crímenes cometidos durante la colonización no solo es un acto de memoria, sino un primer paso necesario hacia la reparación de los pueblos que aún hoy sufren las consecuencias de ese proceso violento. Los Estados latinoamericanos, muchos de los cuales se fundaron sobre tierras despojadas a los pueblos indígenas, tienen la obligación histórica y moral de comprometerse a garantizar plenamente los derechos territoriales, culturales y políticos de estos pueblos. Esta reparación debe ir más allá de la devolución de tierras o el reconocimiento simbólico; debe incluir una integración significativa de las voces indígenas en la creación de políticas públicas y en las decisiones que afectan directamente los territorios, la cultura y el modo de vida desde la cosmovisión indígena."
    },
    {
     "t": "p",
     "x": "Además, los conocimientos tradicionales de los pueblos indígenas, especialmente en lo que respecta a la gestión sostenible de los recursos naturales, tienen un valor incalculable en el contexto actual de crisis climática. Los sistemas de conocimiento como los alimenticios, basados en la armonía con la naturaleza y el respeto por los ciclos de la Tierra, ofrecen alternativas viables y sostenibles frente a los modelos de producción destructivos que han contribuido a la degradación ambiental. Incorporar estos saberes tradicionales en las políticas nacionales e internacionales no solo es una cuestión de justicia, sino una estrategia importante para la supervivencia de la humanidad ante los desafíos ambientales. [...]"
    }
   ],
   "vocabulari": [
    {
     "terme": "Resistència indígena",
     "definicio": "Acció dels pobles indígenes per defensar els seus territoris, cultures, llengües i formes de vida."
    },
    {
     "terme": "Colonització",
     "definicio": "Procés pel qual un territori és ocupat i controlat per un altre poble o estat."
    },
    {
     "terme": "Desposseïment",
     "definicio": "Acció de prendre a una persona o comunitat les seves terres, béns o drets."
    },
    {
     "terme": "Autodeterminació",
     "definicio": "Dret d’un poble a decidir per si mateix sobre la seva organització i el seu futur."
    },
    {
     "terme": "Reparació",
     "definicio": "Accions destinades a compensar o corregir els danys causats a persones o pobles."
    },
    {
     "terme": "Cosmovisió",
     "definicio": "Manera d’entendre i interpretar el món, la natura i la relació entre les persones."
    }
   ],
   "granPregunta": "Com canvia la interpretació del 12 d’octubre quan el relat històric es construeix des del punt de vista dels pobles que van patir la colonització?"
  },
  {
   "id": "L20",
   "num": 20,
   "bloc": "soc",
   "numOriginal": "SOC 07",
   "materia": "Orientació i tutoria",
   "titol": "Iaia, jo vull ser youtuber",
   "llengua": "ca",
   "minuts": 5,
   "autoria": [
    {
     "k": "autoria",
     "v": "M. Dolors Añón"
    },
    {
     "k": "font",
     "v": "Afers juvenils (Editorial Neopàtria)"
    },
    {
     "k": "data",
     "v": "2024"
    },
    {
     "k": "enllac",
     "v": "https://afersjuvenils.cat/index.html"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Els llums del plató enfoquen el Pol, que sent com li tremola tot el cos. Té por que la veu també li tremoli i nota la boca resseca. Fa un glop d’aigua just quan el presentador pren la paraula i li pregunta si se sent orgullós del premi i què diria als nois i noies que com ell, s’avorreixen a classe. «Que persegueixin el seu somni», respon, primer vacil·lant i després resolut. «Explica’ns la teva història, perquè a tu no t’agrada l’institut, oi?» El Pol fa una inspiració profunda i es trasllada uns mesos enrere."
    },
    {
     "t": "p",
     "x": "És la setmana de la ciència i té una conferència que se li fa un suplici. No li interessen ni els planetes ni les galàxies, i encara li fa més ràbia perdre’s la classe de visual i plàstica. Esbulla els cabells del company de davant, badalla i s’estiraria, però es reprimeix: no vol que li posin un full vermell i acabar expulsat una altra vegada. Mentre una professora vigila, ell mira el sostre i deixa volar el pensament. Només desitja que s’acabi tot i tornar a casa a gravar. Ha vist un munt de tutorials -«Com gravar un vídeo per a YouTube», «Errors que cometen els youtubers principiants»- i està convençut que triomfarà. Amb els seus estalvis s’ha comprat, d’amagat dels pares, un bon equip de gravació. Està tip que la mare remugui perquè gasta massa i no li compra roba de marca. Quan sigui famós i guanyi molts diners, ja se n’assabentaran."
    },
    {
     "t": "p",
     "x": "Aquella tarda es tanca a l’habitació amb l’excusa d’un treball. Penja el primer vídeo al canal que acaba de crear; sap que haurà de treballar dur, publicar sovint i, sobretot, fer vídeos de qualitat. Enmig del muntatge, sent unes passes feixugues que pugen l’escala: és la iaia, que el ve a visitar. Li costa caminar i s’asseu a poc a poc. Quan li explica que grava vídeos, ella s’entusiasma: «Que moderns que sou! Em sembla fantàstic que tinguis aquesta iniciativa». El Pol, cofoi per l’interès que mostra, li ho explica tot i li demana que no digui res a la mare. Li encanta com el tracta últimament, sense ser el corcó que sempre li preguntava pels deures i els exàmens."
    },
    {
     "t": "p",
     "x": "Però els vídeos no acaben d’arrencar. Al cap d’uns dies, la iaia torna a interrompre’l i li pregunta com van. «No tan bé com voldria. Necessitaria unes mil visualitzacions per començar a tenir algun ingrés, per ser viral i que les marques s’anunciïn al meu canal. No és tan fàcil.» Ella no vol que es desanimi i li proposa un tracte. Al casal fa un taller de crochet —el ganxet de tota la vida— per a un grup d’àvies, i li aniria molt bé un vídeo per a les que no hi poden anar, sobretot ara que vol fer unes figuretes Amigurumi per al pessebre. Al Pol la idea li sembla ridícula, però a la iaia no li pot dir que no. Això sí, amaga el seu nom rere un àlies: no vol ser la riota dels companys."
    },
    {
     "t": "p",
     "x": "Penja el vídeo en un canal nou, «El crochet de la iaia Paula». I, contra tot pronòstic, és un èxit des del primer moment. L’Amèlia, que sempre s’encallava amb el ganxet, i l’Antònia, que acaben d’operar, el miren una vegada i una altra. No són les úniques: les visualitzacions no paren de créixer."
    },
    {
     "t": "p",
     "x": "Poc després, però, la iaia cau per l’escala carregada amb una bossa de fils i es trenca la cama. No és res greu, però no podrà tornar al casal durant mesos ni viure sola, i s’ha de quedar a casa del Pol. Quan el director del casal li confirma per telèfon que hauran de suspendre el taller fins que es recuperi, a la iaia se li escapen unes llàgrimes que intenta dissimular."
    },
    {
     "t": "p",
     "x": "Aleshores al Pol se li acut una idea. «Truca al director i digues-li que faràs la classe des de casa, en directe.» Li explica què és un streaming: un vídeo en viu on les alumnes podran preguntar pel xat i que després quedarà penjat per repassar la lliçó. La iaia se sent superada, però ell la convenç. En el fons, no tot és per amor a la iaia: el canal ja començava a funcionar i li havien ofert inserir-hi publicitat."
    },
    {
     "t": "p",
     "x": "De tornada al plató, el Pol torna a sentir l’escalfor dels llums i unes gotes de suor al front. Abans que pugui respondre, la iaia Paula pren la paraula, orgullosa, i explica com el seu nét, en veure-la plorar perquè li suprimien el taller, li va dir: «Iaia, no ploris, que això ho arreglem amb uns vídeos». Així va néixer el projecte intergeneracional que avui els ha portat fins a aquest plató."
    }
   ],
   "vocabulari": [
    {
     "terme": "Suplici",
     "definicio": "Patiment molt gran; cosa molt pesada o molesta d’aguantar."
    },
    {
     "terme": "Remugar",
     "definicio": "Parlar entre dents queixant-se, rondinar."
    },
    {
     "terme": "Cofoi, -a",
     "definicio": "Molt content i satisfet, sovint amb una mica d’orgull."
    },
    {
     "terme": "Dissimular",
     "definicio": "Amagar allò que un sent o pensa perquè no es noti."
    },
    {
     "terme": "Intergeneracional",
     "definicio": "Que posa en relació persones de generacions o edats diferents."
    },
    {
     "terme": "Esbullar",
     "definicio": "Despentinar, embullar els cabells; deixar-los desordenats passant-hi la mà o remenant-los."
    },
    {
     "terme": "Streaming (anglicisme)",
     "definicio": "Tecnologia que permet veure o escoltar un contingut (vídeo, àudio) per internet en el mateix moment que es transmet, sense haver de descarregar-lo abans."
    }
   ],
   "granPregunta": "Quan el projecte del Pol deixa de buscar només fama i comença a respondre a una necessitat real, canvia també el seu valor? Què fa que un contingut sigui valuós més enllà de ser viral?"
  },
  {
   "id": "L21",
   "num": 21,
   "bloc": "soc",
   "numOriginal": "SOC 08",
   "materia": "Art",
   "titol": "Què fa que una obra es converteixi en una obra famosa?",
   "llengua": "ca",
   "minuts": 5,
   "autoria": [
    {
     "k": "autoria",
     "v": "J. M. Sadurní"
    },
    {
     "k": "font",
     "v": "El día que robaron la Mona Lisa del Museo del Louvre"
    },
    {
     "k": "font",
     "v": "Revista National Geographic (Secció Historia)"
    },
    {
     "k": "font",
     "v": "National Geographic España (nationalgeographic.com.es)"
    },
    {
     "k": "data",
     "v": "21 d’agost de 2023 (actualitzat)"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "París, 21 d’agost de 1911. Imagineu que entreu al Louvre i aneu directament a veure un dels quadres més famosos del món. Arribeu a la sala, mireu la paret i... el quadre no hi és."
    },
    {
     "t": "p",
     "x": "Això és exactament el que va passar amb la Mona Lisa, també coneguda com la Gioconda, el 21 d’agost de 1911. Aquell matí, un home anomenat Vincenzo Peruggia, que havia treballat al Louvre, va entrar al museu i va aconseguir endur-se el quadre. El va amagar i va sortir de l’edifici sense que ningú s’adonés immediatament del robatori. El més sorprenent és que el quadre no es va trobar a faltar fins l’endemà."
    },
    {
     "t": "p",
     "x": "Quan es va descobrir la desaparició, el Louvre va començar a buscar-la i la policia va iniciar una investigació. Van aparèixer diferents sospitosos i fins i tot es va arribar a relacionar amb el cas l’escriptor Guillaume Apollinaire i el pintor Pablo Picasso, tot i que no eren els responsables del robatori."
    },
    {
     "t": "p",
     "x": "Però el més sorprenent va passar fora del museu. Els diaris van començar a parlar constantment del robatori i la desaparició de la pintura es va convertir en una notícia internacional. La gent volia saber on era la Gioconda i qui l’havia robat."
    },
    {
     "t": "p",
     "x": "Durant els dies posteriors, moltes persones van anar al Louvre no per veure la Mona Lisa, sinó per veure el lloc buit on havia estat. La paret sense el quadre s’havia convertit gairebé en una atracció."
    },
    {
     "t": "p",
     "x": "Mentrestant, la Gioconda estava amagada. Peruggia l’havia traslladat al seu apartament i la va conservar amagada durant més de dos anys. Finalment, el 1913 va intentar vendre-la a un antiquari de Florència. Va ser descobert i detingut, i la pintura va poder tornar al Louvre el 1914."
    },
    {
     "t": "p",
     "x": "El robatori havia acabat, però la història de la Gioconda havia canviat per sempre."
    },
    {
     "t": "p",
     "x": "Avui és difícil imaginar algú que no conegui la Mona Lisa. La seva imatge ha aparegut en llibres, anuncis, pel·lícules, samarretes i tota mena de reproduccions. Però el 1911 la situació era diferent. La pintura ja era considerada una obra important i era admirada pels especialistes, però encara no tenia la fama extraordinària que té avui."
    },
    {
     "t": "p",
     "x": "El robatori va canviar aquesta situació. Els diaris van convertir la desaparició en una història que tothom volia seguir. Hi havia un quadre famós, un lladre, una investigació, sospitosos, una desaparició de més de dos anys i, finalment, la recuperació de l’obra. Gairebé semblava el guió d’una pel·lícula."
    },
    {
     "t": "p",
     "x": "I aquí apareix una pregunta interessant: què és el que fa famosa una obra d’art?"
    },
    {
     "t": "p",
     "x": "És la seva qualitat? És el seu autor? És el lloc on està exposada? És que en parlin els mitjans? És la història que hi ha al darrere?"
    },
    {
     "t": "p",
     "x": "Quan la Mona Lisa va tornar al Louvre, ja no era simplement el quadre que havia estat allà durant anys. Era el quadre que havia estat robat. La seva història havia passat a formar part de la seva identitat."
    },
    {
     "t": "p",
     "x": "Això ens fa pensar que la fama d’una obra no depèn només del que veiem quan la mirem. També pot dependre del que sabem sobre ella i de les històries que s’expliquen al seu voltant."
    },
    {
     "t": "p",
     "x": "Una obra pot ser molt famosa i no agradar-nos. I una obra extraordinària pot ser gairebé desconeguda. Per tant, fama i valor artístic no són exactament el mateix."
    },
    {
     "t": "p",
     "x": "La història de la Gioconda ens mostra que la fama pot transformar la manera com mirem una obra. El robatori no va canviar la pintura de Leonardo da Vinci. No va canviar els seus colors, la seva composició ni el seu misteriós somriure. El que va canviar va ser la història que la gent explicava sobre aquella pintura."
    },
    {
     "t": "p",
     "x": "I potser aquesta és una de les raons per les quals avui, quan pensem en la Mona Lisa, no pensem només en un quadre. Pensem en un misteri, un robatori, un museu, un lladre i una de les obres d’art més famoses del món."
    },
    {
     "t": "p",
     "x": "Així que la pròxima vegada que vegis la Gioconda, pots fer-te una pregunta:"
    },
    {
     "t": "q",
     "x": "Si la Gioconda no hagués estat robada, creus que avui seria tan famosa? Per què?"
    }
   ],
   "vocabulari": [
    {
     "terme": "Louvre",
     "definicio": "Museu de París on està exposada la Gioconda."
    },
    {
     "terme": "Gioconda",
     "definicio": "Nom amb què també es coneix la Mona Lisa."
    },
    {
     "terme": "Robatori",
     "definicio": "Acció d’endur-se una obra d’art sense permís."
    },
    {
     "terme": "Fama",
     "definicio": "Reconeixement que fa que una obra sigui coneguda per molta gent."
    },
    {
     "terme": "Patrimoni",
     "definicio": "Conjunt d’obres i béns que tenen valor cultural i històric."
    },
    {
     "terme": "Icona",
     "definicio": "Obra o imatge que es converteix en un símbol molt reconegut."
    }
   ],
   "granPregunta": "Si la Gioconda no hagués estat robada el 1911, fins a quin punt creus que avui tindria la mateixa fama?"
  },
  {
   "id": "L22",
   "num": 22,
   "bloc": "soc",
   "numOriginal": "SOC 09",
   "materia": "Filosofia",
   "titol": "Et connectaries a una màquina que et fes feliç per sempre?",
   "llengua": "ca",
   "minuts": 5,
   "autoria": [
    {
     "k": "font",
     "v": "Robert Nozick, Anarchy, State, and Utopia, 1974."
    },
    {
     "k": "referencia",
     "v": "Robert Nozick."
    },
    {
     "k": "referencia",
     "v": "The Experience Machine - la màquina d’experiències."
    },
    {
     "k": "nota",
     "v": "Text filosòfic de divulgació elaborat per al Projecte lector a partir de l’experiment mental proposat per Nozick. No és una transcripció literal de l’obra."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Imagina que existeix una màquina extraordinària. Quan t’hi connectes, pots viure qualsevol vida que desitgis: ser una estrella del futbol, viatjar per tot el món, tenir amics extraordinaris, enamorar-te o aconseguir allò que et proposes. No seria com mirar una pel·lícula. Tu ho sentiries tot com si fos real: l’alegria d’un èxit, una abraçada, l’orgull d’haver superat una dificultat o l’afecte per les persones que t’envolten. No sabries que ets dins d’una màquina; per a tu, aquella seria la teva vida."
    },
    {
     "t": "p",
     "x": "Només hi ha un problema: res del que experimentaries estaria passant realment. El teu cos continuaria connectat a la màquina, les persones amb qui parlaries no serien realment allí i els viatges o els èxits no haurien tingut lloc. Però tu no ho sabries. Series feliç, potser molt feliç. T’hi connectaries?"
    },
    {
     "t": "h",
     "x": "La màquina d’experiències"
    },
    {
     "t": "p",
     "x": "El filòsof nord-americà Robert Nozick va proposar als anys setanta un experiment mental semblant. Els experiments mentals són situacions imaginàries que serveixen per posar a prova les nostres idees. Nozick ens convida a preguntar-nos si, en cas de poder tenir totes les experiències agradables que desitgem, voldríem viure així per sempre. Si l’únic que ens importa és sentir-nos bé, sembla que hauríem d’acceptar la proposta. I, tanmateix, moltes persones dubten. Per què?"
    },
    {
     "t": "h",
     "x": "Sentir que ho fem o fer-ho de debò?"
    },
    {
     "t": "p",
     "x": "Imagina que sempre has volgut escriure una novel·la. La màquina pot donar-te l’experiència perfecta: durant mesos sentiràs que treballes, tindràs idees, superaràs dificultats, publicaràs el llibre i fins i tot rebràs un premi. Sentiràs una felicitat enorme. Fora de la màquina, però, mai no hauràs escrit ni una sola pàgina. Importa aquesta diferència? Des de dins sentiràs exactament el mateix orgull, però una cosa és sentir que hem fet alguna cosa i una altra és haver-la fet realment. Potser no volem només experimentar l’èxit; potser volem aconseguir alguna cosa."
    },
    {
     "t": "h",
     "x": "I les persones?"
    },
    {
     "t": "p",
     "x": "Ara imagina que dins de la màquina tens un millor amic. Confies en ell, t’ha ajudat quan ho necessitaves i heu viscut centenars de moments junts. Tu sents una amistat autèntica, però aquesta persona no existeix: és una experiència creada per la màquina. Podem ser amics d’algú que no existeix? Potser una part del que valorem de les relacions no és només com ens fan sentir, sinó que a l’altra banda hi hagi una persona real, amb una vida pròpia, que ens esculli lliurement i que també pugui discrepar de nosaltres."
    },
    {
     "t": "h",
     "x": "Una vida sense garanties"
    },
    {
     "t": "p",
     "x": "La màquina podria incloure dificultats perquè una vida completament fàcil acabaria sent avorrida. Podries perdre un partit abans de guanyar el campionat o suspendre un examen abans d’aconseguir el teu objectiu. Però serien dificultats programades perquè la història acabés bé. En el món real no tenim aquesta garantia: podem esforçar-nos i fracassar, estimar algú que no ens estima o prendre una decisió raonable i obtenir un mal resultat. Això fa la vida més difícil, però potser també fa que algunes coses tinguin valor precisament perquè podrien no haver passat."
    },
    {
     "t": "h",
     "x": "Què necessita una vida bona?"
    },
    {
     "t": "p",
     "x": "Pensa ara en dues opcions. En la primera, vius en el món real: tindràs moments fantàstics i moments dolents, relacions amb persones reals i decisions les conseqüències de les quals no pots controlar del tot. En la segona, et connectes a la màquina i vius la vida que consideres perfecta; et sentiràs estimat, aconseguiràs coses, tindràs aventures i mai no descobriràs que és una simulació. Quina tries?"
    },
    {
     "t": "p",
     "x": "Podem complicar encara més la pregunta. Imagina que un dia algú et diu que, en realitat, portes tota la vida connectat a la màquina i que tots els teus records han estat simulats. Et permet continuar exactament igual, oblidant aquesta conversa, o desconnectar-te i entrar en un món real del qual no saps res. Et desconnectaries? Si aquesta segona pregunta ens provoca una reacció diferent, potser és perquè, a més de la felicitat, valorem altres coses."
    },
    {
     "t": "p",
     "x": "La felicitat importa: volem sentir alegria, estimar, gaudir i evitar sofriments innecessaris. L’experiment de Nozick, però, ens obliga a preguntar si és l’única cosa que importa. Potser també valorem la veritat, fer coses i no només sentir que les fem, relacionar-nos amb persones reals, prendre decisions amb conseqüències reals i ser autors, almenys en part, de la nostra pròpia vida. O potser pensem que, si l’experiència és exactament la mateixa i mai no podem descobrir la diferència, la simulació és suficient. La força de l’experiment és precisament que no ens dona la resposta: ens obliga a descobrir què valorem quan diem que volem tenir una bona vida."
    }
   ],
   "vocabulari": [
    {
     "terme": "Experiment mental",
     "definicio": "Situació imaginària utilitzada per examinar una idea, una intuïció o un problema filosòfic."
    },
    {
     "terme": "Experiència",
     "definicio": "Allò que una persona viu, percep o sent."
    },
    {
     "terme": "Realitat",
     "definicio": "Allò que existeix o succeeix independentment que nosaltres ho imaginem o ho experimentem d’una determinada manera."
    },
    {
     "terme": "Simulació",
     "definicio": "Representació o reproducció d’una realitat que pot imitar-ne l’experiència sense ser aquella realitat."
    },
    {
     "terme": "Vida bona",
     "definicio": "Expressió filosòfica que pregunta quines condicions fan que una vida sigui valuosa o digna de ser viscuda."
    }
   ],
   "granPregunta": "Si una vida ens fes completament feliços però tot el que hi visquéssim fos una simulació, seria igualment una vida bona?"
  },
  {
   "id": "L23",
   "num": 23,
   "bloc": "soc",
   "numOriginal": "SOC 10",
   "materia": "Geografia i història",
   "titol": "Robatori al Tresor de Villena en un cop llampec de tot just quatre minuts",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "font",
     "v": "Article de divulgació cultural de la revista bonart (agost de 2026) sobre el patrimoni arqueològic de l’edat del bronze."
    },
    {
     "k": "referencia",
     "v": "Museu de Villena (MUVI)"
    },
    {
     "k": "referencia",
     "v": "Assalt i espoli parcial del Tresor de Villena l’agost de 2026."
    },
    {
     "k": "nota",
     "v": "Text adaptat per al Projecte lector de l’àrea de Geografia i Història a partir d’un fet d’actualitat relacionat amb la protecció del patrimoni històric."
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "La matinada del 27 d’agost de 2026, el patrimoni arqueològic europeu va patir un dels cops més greus dels darrers anys. El Museu de Villena (MUVI), a Alacant, va ser assaltat i bona part de l’històric Tresor de Villena, considerat un dels conjunts d’orfebreria prehistòrica més importants d’Europa, va ser sostreta en una operació que va durar només quatre minuts."
    },
    {
     "t": "h",
     "x": "Un assalt de precisió mil·limètrica"
    },
    {
     "t": "p",
     "x": "L’assalt es va produir de matinada mitjançant una maniobra curosament planificada. Segons les primeres investigacions, els lladres van activar una falsa alarma en un poliesportiu municipal a les 5.16 hores per distreure els efectius policials. Tot seguit, cap a les 5.20 hores, van arrencar una finestra lateral del museu, van accedir a l’interior i es van endur una part molt important de les peces d’or abans de fugir en diversos vehicles. Els assaltants van deixar enrere recipients de plata i un conjunt conegut com el Tesorillo (35 peces d’or), però es van endur peces d’un valor incalculable."
    },
    {
     "t": "h",
     "x": "Deu quilos de memòria històrica"
    },
    {
     "t": "p",
     "x": "El Tresor de Villena, datat cap a l’any 1000 aC (edat del bronze tardana), està format per 11 bols, 28 braçalets i tres ampolles d’or, a més de peces de plata, ambre i ferro, amb un pes total proper als deu quilos. Va ser descobert l’any 1963 per l’arqueòleg José María Soler García amagat en un recipient al llit d’una rambla."
    },
    {
     "t": "p",
     "x": "La importància científica d’aquest conjunt no rau en el pes del metall, sinó en la informació que aporta sobre la societat de l’edat del bronze. La presència d’objectes de ferro és especialment rellevant, ja que en aquella època el ferro era un metall extremadament rar i més valuós que l’or mateix. Per aquest motiu, el conjunt va ser declarat Bé d’Interès Cultural (BIC)."
    },
    {
     "t": "h",
     "x": "Un patrimoni que no es pot reduir al seu preu"
    },
    {
     "t": "p",
     "x": "Les primeres valoracions econòmiques publicades després del robatori van variar; fonts posteriors situaven el conjunt al voltant dels cinc milions d’euros, les autoritats subratllen que el seu valor cultural és impossible de traduir en xifres. El perill principal és que els lladres fossin capaços de fondre les peces per vendre l’or com a matèria primera. Això suposaria una pèrdua irreversible: esborrar les empremtes d’una societat de fa més de tres mil anys, les seves tècniques artesanals, les seves xarxes de comerç i la seva simbologia. Com va declarar l’alcalde de la localitat, el Tresor no és una col·lecció de joies privades, sinó un document històric fonamental i un pilar de la identitat col·lectiva."
    }
   ],
   "vocabulari": [
    {
     "terme": "Patrimoni arqueològic",
     "definicio": "Conjunt de béns mobles i immobles (objectes, restes, jaciments) que formen part del llegat històric d’una societat i que s’estudien mitjançant la metodologia arqueològica."
    },
    {
     "terme": "Edat del bronze",
     "definicio": "Etapa de la prehistòria (dins de l’edat dels metalls) caracteritzada pel desenvolupament de la metal·lúrgia del bronze, la complexitat social i el sorgiment de les primeres elits de poder."
    },
    {
     "terme": "Espoli patrimonial",
     "definicio": "Sostracció, destrucció o negociació il·legal de béns que formen part del patrimoni històric i cultural d’un país."
    },
    {
     "terme": "Bé d’Interès Cultural (BIC)",
     "definicio": "Figura jurídica de màxima protecció legal que atorga l’Estat a aquells béns materials o immaterials de valor històric, artístic o científic rellevant."
    },
    {
     "terme": "Orfebreria",
     "definicio": "Art i tècnica de fer objectes artístics o estris treballant els metalls preciosos com l’or o la plata."
    }
   ],
   "granPregunta": "A qui pertany realment un patrimoni arqueològic excepcional: a la ciutat que el custodia, a l’Estat o a tota la humanitat, i què implica cada resposta?"
  },
  {
   "id": "L24",
   "num": 24,
   "bloc": "soc",
   "numOriginal": "SOC 11",
   "materia": "Orientació i tutoria",
   "titol": "Un futur hipotecat",
   "llengua": "ca",
   "minuts": 4,
   "autoria": [
    {
     "k": "autoria",
     "v": "M. Dolors Añón"
    },
    {
     "k": "font",
     "v": "Afers juvenils (Editorial Neopàtria)"
    },
    {
     "k": "data",
     "v": "2024"
    },
    {
     "k": "enllac",
     "v": "https://afersjuvenils.cat/index.html"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Les cames em tremolaven i tenia les mans entresuades quan vaig prémer el timbre. Una noia em va fer passar a una sala d’espera plena de gent. Al cap d’una estona, una infermera va cridar el meu nom: «El senyor Xavier Batlle?». Vaig travessar la porta cap a un despatx senyorial, amb les parets plenes de títols i diplomes."
    },
    {
     "t": "p",
     "x": "Al cap d’uns minuts va entrar el Dr. Fernández, el neuròleg que m’havien recomanat després de fer-me un munt de proves. Em va preguntar com estava."
    },
    {
     "t": "p",
     "x": "No gaire bé, doctor. Per això soc aquí, vaig respondre amb un fil de veu."
    },
    {
     "t": "p",
     "x": "Aleshores va treure unes imatges grans del meu cervell, plenes de línies de colors i xifres."
    },
    {
     "t": "p",
     "x": "Miri, aquest és el seu cervell. Està molt danyat. Ha perdut part del lòbul frontal."
    },
    {
     "t": "p",
     "x": "Però, com?, vaig preguntar espantat."
    },
    {
     "t": "p",
     "x": "—Les proves mostren alteracions importants en algunes zones i funcions cerebrals. En persones amb consums intensos i prolongats d’alcohol o altres drogues podem observar problemes de memòria, atenció, control dels impulsos o presa de decisions. Però cada cas és diferent i les imatges no expliquen, totes soles, tota la història."
    },
    {
     "t": "p",
     "x": "I com es pot solucionar?"
    },
    {
     "t": "p",
     "x": "—No podem prometre que tot torni a ser com abans —va respondre el doctor—. Algunes seqüeles poden persistir, però el cervell també té capacitat d’adaptació i la recuperació depèn de molts factors. El més important és mantenir el tractament i no tornar a consumir."
    },
    {
     "t": "p",
     "x": "Les llàgrimes em van omplir els ulls. No em sortien les paraules i, amb prou feines un gest de comiat, vaig escapolir-me del despatx. Em vaig trobar al carrer caminant sense rumb, donant-li voltes al cap: «Però, per què a mi? Què he fet jo?»."
    },
    {
     "t": "p",
     "x": "I llavors em van venir imatges. Em veia de festa, uns amics acostant-me un got ple de glaçons. Em veia en una platja, entre ampolles per tot arreu, bevent, mig estirat i marejat. Els records eren borrosos. Ara em veia fumant un canut davant de l’institut i recordava la multa de tres-cents euros dels mossos."
    },
    {
     "t": "p",
     "x": "Vaig entrar a casa. La meva germana em va cridar, inquieta:"
    },
    {
     "t": "p",
     "x": "Xavier, què t’ha dit el doctor?."
    },
    {
     "t": "p",
     "x": "—Res de bo. Diu que hi ha alteracions que poden explicar per què em costa concentrar-me i recordar les coses —va respondre mentre les llàgrimes queien."
    },
    {
     "t": "p",
     "x": "Però, com pot ser?"
    },
    {
     "t": "p",
     "x": "Diu que ho ha vist en altres persones que de joves van ser addictes a l’alcohol i altres drogues."
    },
    {
     "t": "p",
     "x": "Em va abraçar ben fort i les nostres llàgrimes es van unir com dos rius."
    },
    {
     "t": "p",
     "x": "Xavier, quantes vegades t’havíem dit que no anessis amb aquells amics!? Tornaves de festa sense aguantar-te dret, i després ja no tornaves fins l’endemà, amb els ulls emboirats i sense ganes de res."
    },
    {
     "t": "p",
     "x": "Ho sento! Ja sé que us he fet patir molt. M’heu ajudat a superar l’addicció, ja quasi ho havia deixat... I ara, ara que volia ser una persona nova, que havia començat amb il·lusió la universitat…."
    },
    {
     "t": "p",
     "x": "Recordo l’enveja que et tenia —va dir ella—. Eres un alumne excel·lent, guanyaves premis: per Sant Jordi, la Lectura en veu alta, el Sambori... Jo m’havia de passar hores tancada estudiant per arribar a l’aprovat. Quan es va començar a tòrcer tot això?"
    },
    {
     "t": "p",
     "x": "No ho sé. Tinc la memòria borrosa. A la universitat no em puc concentrar: llegeixo i llegeixo, i després no recordo res. Per això vaig anar al neuròleg."
    },
    {
     "t": "p",
     "x": "Ella em va mirar i, amb la veu trencada, va dir el que jo ja sabia: «I ara què faràs? Has ben hipotecat el teu futur»."
    }
   ],
   "vocabulari": [
    {
     "terme": "Entresuades (mans ~)",
     "definicio": "Lleugerament suades, humides de nervis."
    },
    {
     "terme": "Lòbul frontal",
     "definicio": "Part del davant del cervell, clau per pensar, planificar i controlar-se."
    },
    {
     "terme": "Irreversible",
     "definicio": "Que no es pot desfer ni tornar enrere."
    },
    {
     "terme": "Emboirats (ulls ~)",
     "definicio": "Tèrbols, sense claredat, com coberts de boira."
    },
    {
     "terme": "Hipotecar (el futur)",
     "definicio": "Comprometre’l o posar-lo en perill per decisions preses ara."
    }
   ],
   "granPregunta": "Per què decisions que semblen petites, divertides o fàcils de controlar poden acabar tenint conseqüències importants, i què pot ajudar una persona a aturar-se o demanar ajuda a temps?"
  },
  {
   "id": "L25",
   "num": 25,
   "bloc": "soc",
   "numOriginal": "SOC 12",
   "materia": "Art",
   "titol": "Qui decideix què entra a la història de l’art?",
   "llengua": "ca",
   "minuts": 6,
   "autoria": [
    {
     "k": "autoria",
     "v": "Alessandra Pagano i Àlex Sala (Periodista especialitzat en Història de l’Art)"
    },
    {
     "k": "font",
     "v": "Artemisia Gentileschi, la lucha de una pintora herida / Judit decapitando a Holofernes: feminismo y venganza en el siglo XVII"
    },
    {
     "k": "font",
     "v": "Revista National Geographic Historia"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Quan pensem en la història de l’art, recordem noms com Leonardo da Vinci, Miquel Àngel, Caravaggio o Velázquez. Però ens hem preguntat mai qui decideix quins artistes recordem i quins queden fora dels llibres?"
    },
    {
     "t": "p",
     "x": "La història de l’art no és només una llista d’artistes i quadres. Al llarg del temps, historiadors, crítics, museus, col·leccionistes i institucions han contribuït a decidir quines obres es consideren importants. La història d’Artemisia Gentileschi és un bon exemple per entendre-ho."
    },
    {
     "t": "p",
     "x": "Roma, principis del segle XVII. Els carrers estan lluny de ser un lloc idíl·lic: fan olor de fang, fum i pólvora, i la violència forma part de la vida quotidiana. En aquesta ciutat plena d’artistes, tallers i esglésies, l’art no és només una qüestió de bellesa. També és una qüestió de poder, diners i prestigi."
    },
    {
     "t": "p",
     "x": "En un d’aquests tallers hi treballa una noia que aviat demostrarà tenir un talent extraordinari. Es diu Artemisia Gentileschi i és filla del pintor Orazio Gentileschi. Com que és dona, no pot accedir fàcilment a la mateixa educació artística que els homes. La seva escola és el taller del seu pare, on aprèn a preparar pigments, observar models i dominar el dibuix i la pintura."
    },
    {
     "t": "p",
     "x": "Artemisia creix envoltada d’artistes i coneix l’obra de pintors com Caravaggio, famós pels seus forts contrastos entre la llum i la foscor. Però Artemisia no es limita a copiar allò que veu. Desenvolupa una manera pròpia de pintar i, sobretot, una manera particular de representar les dones. En les seves obres apareixen protagonistes fortes, decidides i capaces de prendre decisions."
    },
    {
     "t": "p",
     "x": "La seva vida, però, queda marcada per un episodi molt dur. Quan és molt jove, és agredida sexualment pel pintor Agostino Tassi, que havia estat contractat per ensenyar-li perspectiva. El cas arriba als tribunals de Roma. El judici és especialment difícil per a Artemisia i queda registrat en nombrosos documents. Finalment, Tassi és declarat culpable, encara que la condemna no s’arriba a complir completament."
    },
    {
     "t": "p",
     "x": "Després del judici, Artemisia marxa a Florència i continua construint la seva carrera. Treballa com a pintora professional, rep encàrrecs importants i aconsegueix una cosa molt poc habitual per a una dona de la seva època: viure del seu propi treball artístic. El 1616 es converteix, a més, en la primera dona admesa a l’Accademia del Disegno de Florència."
    },
    {
     "t": "p",
     "x": "Una de les obres que millor mostra la seva manera de pintar és Judit decapitant Holofernes. La pintura representa una història de la Bíblia en què Judit, una jove vídua, derrota el general Holofernes per salvar el seu poble. Altres artistes ja havien representat aquesta escena, però Artemisia la pinta d’una manera especialment intensa. Judit i la seva criada apareixen actuant amb força i determinació, mentre Holofernes intenta resistir."
    },
    {
     "t": "p",
     "x": "Durant molts anys, aquesta pintura s’ha relacionat amb la història personal d’Artemisia. Algunes interpretacions han considerat que podia representar una mena de venjança contra Tassi. Però això no es pot demostrar amb certesa. La història de Judit era un tema conegut en aquella època i altres artistes també l’havien pintat. Això ens recorda que una obra d’art no sempre té una única interpretació i que, de vegades, els historiadors han de distingir entre allò que saben i allò que interpreten."
    },
    {
     "t": "p",
     "x": "I aquí comença una altra part de la història d’Artemisia."
    },
    {
     "t": "p",
     "x": "Durant la seva vida, la pintora va aconseguir reconeixement i va treballar en diferents ciutats, però després de la seva mort el seu nom va anar desapareixent. Amb el pas dels anys, algunes de les seves obres van ser atribuïdes a altres artistes i Artemisia va deixar d’ocupar un lloc important en els llibres d’història de l’art."
    },
    {
     "t": "p",
     "x": "Però com pot desaparèixer una artista que havia estat reconeguda durant la seva vida?"
    },
    {
     "t": "p",
     "x": "Aquesta pregunta ens porta a una qüestió molt més gran. La història de l’art no es conserva sola. Algú decideix quines obres es guarden, quines s’exposen als museus, quins artistes s’estudien i quins noms apareixen als llibres. Durant segles, aquestes decisions han estat preses per artistes, col·leccionistes, crítics, historiadors, museus i institucions. I aquestes persones també poden tenir els seus propis prejudicis."
    },
    {
     "t": "p",
     "x": "Durant el segle XX, diversos historiadors i historiadores de l’art van començar a revisar de nou la vida i les obres d’Artemisia. Van estudiar documents antics, signatures, estils i altres característiques de les pintures. Algunes obres que durant molt de temps havien estat atribuïdes a altres artistes van tornar a relacionar-se amb ella."
    },
    {
     "t": "p",
     "x": "A poc a poc, Artemisia va recuperar el seu lloc. Avui és considerada una de les pintores importants del Barroc i les seves obres es poden veure en alguns dels museus més importants del món."
    },
    {
     "t": "p",
     "x": "Però la seva història ens deixa una pregunta que va molt més enllà d’una sola artista."
    },
    {
     "t": "p",
     "x": "Potser, quan estudiem un llibre d’art i hi trobem una llista de grans artistes, hauríem de preguntar-nos també qui va construir aquella llista. Qui va decidir quins noms eren importants? Qui va decidir quines obres mereixien ser conservades i estudiades? I quants artistes poden haver quedat fora d’aquest relat?"
    },
    {
     "t": "p",
     "x": "Perquè potser la història de l’art no és una història acabada. Potser és una història que es pot revisar cada vegada que descobrim una obra, recuperem un artista oblidat o ens atrevim a fer una pregunta que abans ningú no havia fet."
    },
    {
     "t": "q",
     "x": "Creus que Artemisia Gentileschi hauria estat més coneguda si hagués estat un home? Per què?"
    }
   ],
   "vocabulari": [
    {
     "terme": "Atribuir",
     "definicio": "Considerar que una obra d’art ha estat creada per un artista determinat."
    },
    {
     "terme": "Prestigi",
     "definicio": "Reconeixement i bona consideració que una persona aconsegueix per la seva feina o les seves qualitats."
    },
    {
     "terme": "Institució",
     "definicio": "Organització, com un museu, una acadèmia o una universitat, que té una funció i una autoritat dins de la societat."
    },
    {
     "terme": "Prejudici",
     "definicio": "Idea o opinió que tenim sobre una persona o un grup abans de conèixer-lo prou i que pot influir en la nostra manera de valorar-lo."
    },
    {
     "terme": "Revaloritzar",
     "definicio": "Tornar a donar valor o importància a una persona, una obra o una idea que havia estat poc valorada o oblidada."
    }
   ],
   "granPregunta": "Si una artista pot ser reconeguda en vida i després desaparèixer dels llibres durant dècades, què ens diu això sobre qui construeix la història de l’art?"
  },
  {
   "id": "L26",
   "num": 26,
   "bloc": "expr",
   "numOriginal": "EXPR 01",
   "materia": "Lectura expressiva",
   "titol": "Galàxia 4",
   "llengua": "ca",
   "minuts": 2,
   "autoria": [
    {
     "k": "autoria",
     "v": "Emili Teixidor"
    },
    {
     "k": "font",
     "v": "Les rates malaltes. Cruïlla (text adaptat extret del llibre Lletres en context (pag. 55). Barcanova, Jordi Castells. 2016.)"
    },
    {
     "k": "data",
     "v": "1976"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Mentrestant, en Pere Recop m’explicava amb veu melodiosa i amical, no gens enfadat:"
    },
    {
     "t": "p",
     "x": "—Tori –em sorprengué sentir-li dir el meu nom, de què em coneixia?–, Tori: sigues bon noi i fes-nos cas. Ajuda Galàxia 4. Galàxia 4 no vol cap mal per a ningú, ans al contrari. Fes el que t’han dit a «La Veritat». Aprèn senzillament la lliçó. Espera les ordres i obeeix. No pateixis pel teu germà. Va patir un accident al museu."
    },
    {
     "t": "p",
     "x": "—Vull saber qui assassinà l’Esteve i qui robà les càpsules de Petri del laboratori i les llencà! —em semblava que encara podia aconseguir alguna cosa amb una actitud tossuda i hostil. Em semblava que encara hi havia possibilitats de poder organitzar un gran xarrabascat que atragués la policia i els pares i ho esbotzés tot d’un cop."
    },
    {
     "t": "p",
     "x": "—És inútil. I també infantil. Una curiositat inútil i infantil a la vegada. Si Galàxia 4 volgués, podria emmetzinar totes les aigües, fer irrespirable l’aire de les grans ciutats, empastifar el món de rates malaltes... Tots els mitjans estan a la nostra disposició. Cada dia tots els diaris del món porten notícies de la nostra potència, que és l’altra cara de la nostra fermesa, però gairebé ningú no em fa cas. La gent es pensa que quan vinguin els habitants d’un altre planeta ho faran amb naus aerodinàmiques, vestit d’alumini, amb gran enrenou de sorolls i llums de colors. Com que tenen mala consciència creuen en un apocalipsi. No saben que l’altre món arribarà sense dir res. Es ficarà a les llars per l’aigua de l’aixeta i l’aire de la finestra. No sospiten que la invasió ha començat, fa temps. Es pensen que reconeixeran els invasors i no saben que ja habiten enmig d’ells, buiden el cos de la persona que els interessa i s’hi fiquen."
    },
    {
     "t": "p",
     "x": "—Calleu! Calleu! Sou bojos! Sou folls! Folls! En Pep Recop, sense treure’m la manassa del braç, em deixà cridar una estona i discernir. Després em va deixar treure la camisa en una zona."
    }
   ],
   "vocabulari": [
    {
     "terme": "Ans al contrari",
     "definicio": "Ben al contrari."
    },
    {
     "terme": "Xarrabascat",
     "definicio": "Gran enrenou, aldarull o situació sorollosa i desordenada."
    },
    {
     "terme": "Esbotzar",
     "definicio": "Trencar o desfer alguna cosa de manera violenta."
    },
    {
     "terme": "Apocalipsi",
     "definicio": "Gran catàstrofe o destrucció general."
    },
    {
     "terme": "Discernir",
     "definicio": "Distingir o comprendre amb claredat una cosa."
    }
   ],
   "granPregunta": "Per què una amenaça pot resultar encara més inquietant quan qui la formula parla amb calma i aparent amabilitat?"
  },
  {
   "id": "L27",
   "num": 27,
   "bloc": "expr",
   "numOriginal": "EXPR 02",
   "materia": "Lectura expressiva",
   "titol": "Mecanoscrit del segon origen (fragment)",
   "llengua": "ca",
   "minuts": 3,
   "autoria": [
    {
     "k": "autoria",
     "v": "Manuel de Pedrolo"
    },
    {
     "k": "font",
     "v": "Educació 62. Barcelona, 2011."
    },
    {
     "k": "data",
     "v": "1974, publicació de l’original"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "(1) L’Alba, una noia de catorze anys, verge i bruna, tornava de l’hort de casa seva amb un cistellet de figues negres, de coll de dama, quan s’aturà a avergonyir dos nois, que n’apallissaven un altre i el feien caure al toll de la resclosa, i els va dir:"
    },
    {
     "t": "p",
     "x": "—Què us ha fet?"
    },
    {
     "t": "p",
     "x": "I ells li van contestar:"
    },
    {
     "t": "p",
     "x": "—No el volem amb nosaltres, perquè és negre."
    },
    {
     "t": "p",
     "x": "—I si s’ofega?"
    },
    {
     "t": "p",
     "x": "I ells es van arronsar d’espatlles, car eren dos nois formats en un ambient cruel, de prejudicis."
    },
    {
     "t": "p",
     "x": "(2) I aleshores, quan l’Alba ja deixava el cistellet per tal de llançar-se a l’aigua sense ni treure’s la roba, puix que només duia uns shorts i una brusa sobre la pell, el cel i la terra van començar a vibrar amb una mena de trepidació sorda que s’anava accentuant, i un dels nois, que havia alçat el cap, digué:"
    },
    {
     "t": "p",
     "x": "—Mireu!"
    },
    {
     "t": "p",
     "x": "Tots tres van poder veure una gran formació d’aparells que s’atansava remorosament de la llunyania, i n’hi havia tants que cobrien l’horitzó. L’altre noi va dir:"
    },
    {
     "t": "p",
     "x": "—Són platets voladors, tu!"
    },
    {
     "t": "p",
     "x": "(3) I l’Alba va mirar encara un moment cap als estranys objectes ovalats i plans que avançaven de pressa cap a la vila mentre la tremolor de la terra i de l’aire augmentava i el soroll creixia, però va pensar de nou en el fill de la seva veïna Margarida, en Dídac, que havia desaparegut en les profunditats de la resclosa, i es va capbussar en l’aigua, darrera els nois, que s’havien oblidat del tot de llur acció i ara deien:"
    },
    {
     "t": "p",
     "x": "—Guaita com brillen! Semblen de foc!"
    },
    {
     "t": "p",
     "x": "(4) I dins l’aigua, quan ja nedava cap a les pregoneses, l’Alba es va sentir com estirada per la puixança d’un moviment interior que volia endur-se-la altre cop a la superfície, però ella lluità enèrgicament i amb tot el seu braó contra les onades i els remolins, que alteraven la calma habitual del toll, i bracejà amb esforç per atansar-se a l’indret on havia vist desaparèixer en Dídac."
    },
    {
     "t": "p",
     "x": "Una altra commoció de l’aigua, més intensa, l’apartà de la riba sense vèncer-la, car ella li oposà tota la seva voluntat i els recursos de la seva destresa i, per sota el vòrtex que estava a punt de dominar-la, s’enfonsà encara i va nedar cap a les lianes que empresonaven el noi."
    }
   ],
   "vocabulari": [
    {
     "terme": "Resclosa",
     "definicio": "Construcció que reté o desvia l’aigua d’un riu o canal."
    },
    {
     "terme": "Puix que",
     "definicio": "Ja que, perquè."
    },
    {
     "terme": "Pregoneses",
     "definicio": "Zones profundes."
    },
    {
     "terme": "Braó",
     "definicio": "Força, coratge o energia amb què s’afronta una dificultat."
    },
    {
     "terme": "Vòrtex",
     "definicio": "Moviment circular i violent d’un fluid, com l’aigua."
    },
    {
     "terme": "Destresa",
     "definicio": "Habilitat per fer una acció amb eficàcia."
    }
   ],
   "granPregunta": "Què ens revela de l’Alba el fet que continuï intentant salvar en Dídac quan al seu voltant està passant una cosa extraordinària i amenaçadora?"
  },
  {
   "id": "L28",
   "num": 28,
   "bloc": "expr",
   "numOriginal": "EXPR 03",
   "materia": "Lectura expressiva",
   "titol": "El príncep encantador ve en socors (capítol IV)",
   "llengua": "ca",
   "minuts": 2,
   "autoria": [
    {
     "k": "autoria",
     "v": "Marcia Grad"
    },
    {
     "k": "font",
     "v": "Ed. Laertes. Barcelona, 1997."
    },
    {
     "k": "data",
     "v": "1977, primera edició"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Va introduir la clau daurada al forat del pany, la va fer girar i va entreobrir la porta. L’interior era tot fosc, i no s’hi sentia res."
    },
    {
     "t": "p",
     "x": "—Vicky, on ets? —va preguntar, obrint la porta de bat a bat."
    },
    {
     "t": "p",
     "x": "Arraulida al terra de l’armari, amb els braços al voltant del seu cap abaixat, es trobava la petita Vicky."
    },
    {
     "t": "p",
     "x": "—Estàs bé? No tinguis por. Sóc jo, Victoria."
    },
    {
     "t": "p",
     "x": "—Vés-te’n i deixa’m tranquil·la —va gemegar la nena, amagant-se al fons de l’armari."
    },
    {
     "t": "p",
     "x": "—Què tens, Vicky? He vingut a treure’t —va dir Victoria,"
    },
    {
     "t": "p",
     "x": "—No, vés-te’n. No vull sortir!"
    },
    {
     "t": "p",
     "x": "—Com és que no vols sortir? No et pots quedar aquí per sempre."
    },
    {
     "t": "p",
     "x": "—Sí que puc. M’hi vull quedar. Ja hi estic acostumada. Vés-te’n."
    },
    {
     "t": "p",
     "x": "—Tinc moltes coses per explicar-te. Sisplau, no tinguis por. No et faré mal."
    },
    {
     "t": "p",
     "x": "—Ja m’has fet mal, moltes vegades."
    },
    {
     "t": "p",
     "x": "—No te’n volia fer. Em sap greu, de debò. A més, ara tot és diferent. No tornarà a passar."
    },
    {
     "t": "p",
     "x": "Vicky va gemegar."
    },
    {
     "t": "p",
     "x": "—No et crec."
    },
    {
     "t": "p",
     "x": "—De debò, Vicky. T’ho prometo. Ho juro davant de Déu..., te’n recordes?"
    },
    {
     "t": "p",
     "x": "—Encara no et crec, i no sortiré. Va dirigir una ràpida mirada a Victoria—. Però suposo que et pots quedar aquí un moment, si vols."
    },
    {
     "t": "p",
     "x": "—No siguis beneita. Au va, surt. Seurem al llit, com abans, i..."
    },
    {
     "t": "p",
     "x": "—No, no puc."
    },
    {
     "t": "p",
     "x": "Victoria es va agenollar al costat de Vicky i li va posar un braç sobre les espatlles per consolar-la. Al començament van romandre arraulides en silenci al terra de l’armari. Aviat es van posar a parlar, a recordar i a plorar. Finalment, Victoria va convèncer la seva amigueta perquè sortís de l’armari."
    },
    {
     "t": "p",
     "x": "Es van asseure a l’enorme llit amb baldaquí i van continuar parlant, recordant i plorant, mullant les vànoves de seda fins que les llàgrimes van degotar al terra, com havia passat amb les llàgrimes de Vicky feia molts anys. I, al rompent de l’alba, es van alegrar que tornessin a estar juntes i haguessin trobat el príncep que havien esperat durant tant de temps."
    }
   ],
   "vocabulari": [
    {
     "terme": "De bat a bat",
     "definicio": "Completament oberta."
    },
    {
     "terme": "Arraulida",
     "definicio": "Ajupida o encongida sobre si mateixa, sovint per protegir-se o buscar escalfor."
    },
    {
     "terme": "Gemegar",
     "definicio": "Fer sons o dir paraules amb veu de dolor, pena o queixa."
    },
    {
     "terme": "Baldaquí",
     "definicio": "Coberta ornamental situada damunt d’un llit."
    },
    {
     "terme": "Rompent de l’alba",
     "definicio": "Moment en què comença a clarejar i s’inicia el dia."
    }
   ],
   "granPregunta": "Què fa possible que Vicky comenci a recuperar la confiança en Victòria després d’haver estat ferida per ella?"
  },
  {
   "id": "L29",
   "num": 29,
   "bloc": "expr",
   "numOriginal": "EXPR 04",
   "materia": "Lectura expressiva",
   "titol": "L’artista",
   "llengua": "ca",
   "minuts": 6,
   "autoria": [
    {
     "k": "autoria",
     "v": "Patricia Highsmith"
    },
    {
     "k": "font",
     "v": "Petits contes misògins."
    },
    {
     "k": "data",
     "v": "1977"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Quan la Jane es va casar, no semblava que tingués res d’estrany. Era una dona rodoneta, bonica i molt pràctica: sabia fer la respiració artificial en un tres i no res, reanimar una persona desmaiada i aturar una hemorràgia nasal. Treballava d’ajudant d’un dentista i no s’immutava davant d’una crisi o d’un dolor. Però tenia una dèria: l’art. Quin art? Tots."
    },
    {
     "t": "p",
     "x": "El primer any de casada, es va posar a pintar. Això li ocupava tots els dissabtes, o prou hores del dissabte per no poder fer la compra del cap de setmana, però ja la feia el Bob, el seu marit. També era ell qui pagava l’enquadernació dels retrats a l’oli, bruts i amb els colors correguts, de les seves amistats. Els caps de setmana es consumien en llargues sessions de posat dels amics. Finalment, la Jane va haver d’admetre que allò dels colors no tenia remei, i va deixar la pintura per la dansa."
    },
    {
     "t": "p",
     "x": "La dansa, amb un mallot negre que li ajustava la panxa, no va millorar gaire la seva figura, però sí la seva gana. Després van venir les sabatilles especials. Estava aprenent ballet. Havia descobert un lloc que es deia L’Escola de les Arts. En aquell edifici de cinc plantes ensenyaven piano, violí i altres instruments, composició musical, novel·la i poesia, i també dansa i pintura."
    },
    {
     "t": "p",
     "x": "—Ho veus, Bob? Es pot i s’ha de fer que la vida sigui bella —deia la Jane amb un somriure radiant—. I tothom vol contribuir-hi una mica, si pot, a la bellesa i la poesia del món."
    },
    {
     "t": "p",
     "x": "Mentrestant, el Bob buidava les escombraries i s’assegurava que no es quedessin sense patates. El ballet de la Jane no avançava més enllà d’un punt determinat, així que el va deixar i es va posar a cantar."
    },
    {
     "t": "p",
     "x": "—Jo crec que la vida ja és prou bonica tal com és —va dir el Bob—. Almenys, jo soc bastant feliç."
    },
    {
     "t": "p",
     "x": "Això va ser en la temporada del cant, que va obligar-los a encabir un piano vertical en un menjador ja ple a vessar."
    },
    {
     "t": "p",
     "x": "Per alguna raó, la Jane va deixar les classes de cant i es va posar a fer escultura i talla en fusta. El menjador es va convertir en un desastre de trossets de fang i estelles que ni l’aspiradora podia amb ells. La Jane, després de passar-se el dia a la consulta del dentista i de barallar-se amb el fang i la fusta fins a mitjanit, estava massa cansada per fer res més."
    },
    {
     "t": "p",
     "x": "El Bob va començar a odiar L’Escola de les Arts. L’havia vista unes quantes vegades, quan anava a recollir la Jane a les onze de la nit (el barri era massa perillós perquè ella tornés sola). A ell li semblava que tots els alumnes eren un munt d’il·lusos mal encaminats i els professors, un grapat de mediocres. Aquell lloc era un manicomi d’esforços desviats. I quantes llars, fills i marits es veien alterats perquè la dona de casa —la majoria d’alumnes eren dones— no hi era per fer tasques essencials? Al Bob li semblava que en aquell edifici no hi havia inspiració, només el desig d’imitar els qui sí que n’havien tingut, com Chopin, Beethoven o Bach, les obres dels quals ell escoltava destrossades mentre esperava la seva dona assegut en un banc del vestíbul."
    },
    {
     "t": "p",
     "x": "La gent diu que els artistes són bojos, però aquells estudiants semblaven incapaços d’aquella mena de bogeria. Semblaven bojos, sí, però no de la manera adequada. I tenint en compte que L’Escola de les Arts li havia robat la seva dona, el Bob estava disposat a fer volar l’edifici pels aires."
    },
    {
     "t": "p",
     "x": "No li va caldre esperar gaire. No va ser ell qui ho va fer, sinó un instructor que, pel que es va saber després, havia col·locat una bomba al soterrani de L’Escola de les Arts, programada per esclatar a les quatre de la tarda de Cap d’Any. Malgrat la mitja festa, els alumnes de totes les disciplines seguien practicant. La policia i alguns diaris havien rebut avisos de la bomba, però ningú no la trobava, i tampoc gaire gent s’ho prenia seriosament. El barri era com era i ja havien rebut amenaces d’aquest tipus abans. Però la bomba, evidentment, va esclatar."
    },
    {
     "t": "p",
     "x": "El Bob hi era, perquè havia d’anar a buscar la Jane a les cinc. Havia sentit el rumor de la bomba, però no sabia si creure-s’ho o no. Per precaució, o per una mena de premonició, en comptes d’esperar al vestíbul, es va quedar a l’altra banda del carrer."
    },
    {
     "t": "p",
     "x": "Un piano va sortir volant pel terrat, amb el pianista encara assegut al tamboret, teclejant en el buit. Una ballarina, per fi, va fer unes quantes voltes senceres sense tocar de peus a terra, perquè estava a quatre-cents metres d’altura i, a més, els peus li apuntaven al cel. Un alumne de pintura va travessar una paret, amb el pinzell suspès en l’aire, a punt de fer la seva gran pinzellada mestra, però cap a l’oblit. Un instructor, que es refugiava sempre que podia als lavabos de L’Escola de les Arts, va sortir disparat junt amb les canonades."
    },
    {
     "t": "p",
     "x": "Llavors va aparèixer la Jane, volant pels aires amb un mall en una mà, un cisell a l’altra i una expressió d’èxtasi a la cara. Estava esbalaïda? Concentrada encara en la seva obra? O ja era morta? El Bob no ho va saber. Les partícules van anar caient en un estrèpit suau i decreixent, aixecant una polseguera grisa."
    },
    {
     "t": "p",
     "x": "Hi va haver uns segons de silenci. El Bob es va quedar immòbil. Després, es va girar i se’n va anar cap a casa. Sorgiran altres Escoles de les Arts, d’això n’estava segur. Curiosament, aquesta idea li va creuar la ment abans que s’adonés que la seva dona s’havia esvaït per sempre."
    }
   ],
   "vocabulari": [
    {
     "terme": "Dèria",
     "definicio": "Afició o preocupació persistent."
    },
    {
     "terme": "Mallot",
     "definicio": "Peça de roba ajustada utilitzada en dansa."
    },
    {
     "terme": "Estelles",
     "definicio": "Petits fragments de fusta."
    },
    {
     "terme": "Premonició",
     "definicio": "Pressentiment d’allò que passarà."
    },
    {
     "terme": "Esbalaïda",
     "definicio": "Molt sorpresa o desconcertada."
    }
   ],
   "granPregunta": "Per què la ironia del relat funciona millor quan el narrador explica situacions cada vegada més absurdes amb una aparent normalitat?"
  },
  {
   "id": "L30",
   "num": 30,
   "bloc": "expr",
   "numOriginal": "EXPR 05",
   "materia": "Lectura expressiva",
   "titol": "Zerafina",
   "llengua": "ca",
   "minuts": 9,
   "autoria": [
    {
     "k": "autoria",
     "v": "Mercè Rodoreda"
    },
    {
     "k": "font",
     "v": "La meva Cristina i altres contes. Edicions 62."
    },
    {
     "k": "data",
     "v": "1967"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "Zí, zenyora, zóc la minyona nova... Ja ho zé que zón lez nou i que havia de venir a lez trez, però éz que m’he perdut una mica i quan em penzava que ja havia arribat, un zenyor molt ben veztit m’ha dit que era a Zantz. M’ha explicat per on havia de pazzar per anar a Zant Gervazi i, preguntant, preguntant, entre totz plegatz m’han enviat al Parque. He vizt totez lez bèztiez: elz tigrez, elz elefantz, lez cotorrez i lez monez. Dezpréz he zortit a la Rambla i m’he pazzejat per entre lez florz i elz zenyorz que pazzaven em deien cozez. Un que duia baztó m’ha convidat a beure una grazioza. No el coneixia, però de zeguida hem eztat conegutz. M’ha dit que era ric i que tenia ganez de cazar-ze... No z’ezpanti que no m’ha pazzat rez. Viu zola voztè? Doncz, zi em dezcuido, quin zuzto que li hauria donat... Zi zabéz l’eztona que fa que em pazzejo per aqueztz carrerz... Anava voltant la caza i he vizt entrar zenyorez, i cada vegada que corria per poder entrar amb ellez ja havia fet tard. He eztat a punt de zaltar la paret per darrere, però no acabava de zaber zi era la paret del zeu jardí... Per què no he trucat el timbre? Perquè zempre que el volia tocar em picava. Quan eztic una mica nervioza tot el que toco pica com zi eztiguéz ple d’electrizitat... De maletez no en tinc, tot ho duc en aquezt farzellet... No, no eztic genz canzada, de viatgez com aquezt n’hauria pogut fer deu zenze canzar-me, però, zi vol, m’azzeuré a la butaqueta. Veu? Em penzava que així que arribaria m’hauria de pozar a rentar elz platz. Zi ze’m queda, a l’eztiu li pozaré bé el jardí, i a la paret de l’acabament, perquè no ez vegi tan pelada, hi plantaré campanetez i una carabazzera. Li agrada, a voztè, menjar una bona zopa de carabazza? A mi zí, però zempre em fa zinglot... Que quina vida feia el poble? Zí, miri, era baztant pezat. Cuidarme de la caza i de lez gallinez i ajudar la mama a pujar elz meuz zet germanetz... I quan van eztar pujatz, la mama em va dir que valdria méz que anéz a zervir, que potzer m’ezpavilaria una mica i podria enviar-li zèntimz... Zí zenyora, he zervit en duez cazez; em penzo que ja li ho deia el zenyor rector en la carta que li va ezcriure... A la primera noméz hi vaig eztar quinze diez perquè el noi era molt dolent. Quan enz quedàvem zolz em cridava: «Zerafina!» El primer dia hi vaig córrer de zeguida. Em va fer pozar dreta al mig del pazzadíz com una fuzta, ze’n va anar un troz lluny darrere meu, va agafar embranzida i em va clavar una cozza al cul que zenze voler vaig haver de córrer zinc metrez, finz alz vidrez de la galeria. I va cridar: «Gol!». I això m’ho va fer tota la zanta tarda. Jo no zabia dir que no perquè encara que noméz foz un noi de catorze anys era el fill delz amoz i jo era la minyona. A la zegona caza, de moment, hi vaig eztar méz bé, però el zenyor i la zenyora eren vellz i no z’avenien i la zenyora, que zempre eztava malaltizza i ez pazzava elz diez eztirada al llit, tenia por que el zeu marit no li pozéz metzina alz remeiz i em deia que jo havia de vigilar molt, i volia que noméz foz jo la que li donéz el remei de lez gotez i lez hi havia de comptar davant zeu. Totz doz ez van engelozir de mi i quan em deixava l’un em prenia l’altre. I totz doz per zeparat em preguntaven: «Oi que a mi m’eztimez méz?»... Quan era el zenyor que m’arreplegava em deia que era un dezgraziat, que z’havia cazat amb una boja i que tot i que la zenyora zabia que tenia elz budellz delicatz li feia menjar menjarz fortz per veure zi ze li foradaven. I eztava zegur que pozava zofre a lez zalzez. Quan ja m’acoztumava a la caza vaig comenzar a trobar-me malament i al cap d’unz quantz diez vaig rumiar que potzer em pozaven alguna coza dolenta a la llet i em va venir tanta por que a lez nitz no dormia i l’endemà de no haver dormit, quan pazzava el plumero pelz moblez, tota jo zemblava que voléz... Zi tinc proméz? Ara no, però n’he tingut doz. El primer ez deia Miqueló. Era roz com lez ezpiguez i ez va morir a l’Àfrica. El vaig conèixer a la vora de la font. Jo em pazzejava per zota de lez acàziez i zento que diuen: «Quina merenga!». Em giro i veig unz quantz jovez que feien broma. Quan ja eztava a punt de tirar-loz un roc ze’m van acoztar i em van dir que era molt bufona, totz alhora, però que anava una mica mazza ezcabellada, i el qui havia dit que zemblava una merenga duia una fulleta a la mà per jugar i me la va clavar alz cabellz. Dezpréz zempre enz vèiem i anàvem a pazzejar per la carretera i un vespre que enz vam enfilar vinyez amunt, enz vam ficar en una barraqueta de fuzta, em va fer treure el veztit i em va dir que m’eztiréz per terra. Ell ez va eztirar al meu coztat, va enzendre un zigarret i m’anava tirant la zendra al melic. I quan va haver fumat el zigarret em va comenzar a eztirar elz pèlz de zota el braz, amb tanta fúria que a mi em zaltaven lez llàgrimez delz ullz. I un dia que plovia també enz vam ficar a la barraqueta, i l’aigua corria a regueronz per terra i quan vam haver acabat jo tenia tota l’ezquena bruta de fang i vam riure molt. A mi tot allò no m’agradava gaire perquè m’ezgarrifa que em toquin. Quan era petita, una vegada una nena que anava a eztudi amb mi em va encomanar elz zeuz pollz i quan la mama me’lz treia, cada matí, no m’agradava genz que em toquéz el cap. Van pazzar unz quantz mezoz i vaig haver d’anar-me’n del poble, tot i que el ventre no ze’m veia genz perquè la mama cada dia me’l faixava ben eztret. Vaig anar a caza d’una tia que viu a trez horez lluny de caza i allí vaig tenir una nena. Així que va respirar ez va morir perquè no tenia ozzoz. En Miqueló ja era a l’Àfrica... El dia que ze’n va anar em va dir que l’embarcaven cap a lez càbilez i que allí el matarien a copz de zabre i que no enz veuríem mai méz, i va dir que zi el mataven, mentre ez moriria penzaria en mi... Dezpréz d’allò de la nena em va comenzar a venir al darrere el fill del zenyor Vidal, el farmazèutic. Així com en Miqueló era roz, aquezt zemblava un gitano. Però era méz zimpàtic. A lez nitz zaltava per la fineztra i ze’m ficava al llit. I em deia unez cozez molt boniquez... Abanz de zortir el zol z’alzava, ez pozava l’americana i fugia correntz. Jo el mirava per la fineztra i li tirava un petó amb la mà, i un eztiu no va tornar perquè van dir que z’havia promèz a Barzelona. I zi m’agrada d’haver vingut a zervir a Barzelona éz perquè penzo que potzer el trobaré i li podré eztirar el ble de cabellz que zempre li queia damunt el front i que era una coza que a ell li agradava molt que li fez. I ara ja ho zap tot. Per la feina em penzo que li agradaré: zóc molt neta i menjo a miquez com un ozell. De malalta no n’eztic mai. Tot el que em pazza éz que a l’hivern zi no m’abrigo bé m’encoztipo. Noméz tinc el mal de zer una mica papizzota. Ze’m quedarà, oi?"
    }
   ],
   "vocabulari": [
    {
     "terme": "Minyona",
     "definicio": "Dona que treballa fent les feines de casa d’una altra família."
    },
    {
     "terme": "Farcellet",
     "definicio": "Paquet petit fet amb roba o paper per portar-hi coses."
    },
    {
     "terme": "Metzina",
     "definicio": "Verí."
    },
    {
     "terme": "Faixar",
     "definicio": "Embolicar una part del cos amb una faixa o una tela ben ajustada."
    },
    {
     "terme": "Càbiles",
     "definicio": "Pobles del nord d’Àfrica i també la gent que formen part d’aquests pobles."
    },
    {
     "terme": "Papissota",
     "definicio": "Persona que té dificultat per pronunciar alguns sons o paraules com ara la essa. Zerafina diu que ella parla així."
    }
   ],
   "granPregunta": "Què aconsegueix Mercè Rodoreda fent que Zerafina expliqui amb naturalitat situacions que el lector percep com a dures o extraordinàries?"
  },
  {
   "id": "L31",
   "num": 31,
   "bloc": "expr",
   "numOriginal": "EXPR 06",
   "materia": "Lectura expressiva",
   "titol": "El cor delator",
   "llengua": "ca",
   "minuts": 15,
   "autoria": [
    {
     "k": "autoria",
     "v": "Edgar Allan Poe"
    },
    {
     "k": "font",
     "v": "Contes IV. Quaderns Crema. Barcelona, 1991"
    },
    {
     "k": "data",
     "v": "1843"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "És veritat! He estat i soc una persona molt, molt nerviosa, però per què dieu que soc boig? La malaltia m’ha aguditzat els sentits, no me’ls ha pas destrossat, ni disminuït. Per damunt de tot, se’m va afinar el sentit de l’oïda. Ho sentia tot del cel i de la terra. Sentia moltes coses de l’infern. Com pot ser, per tant, que sigui boig? Escolteu-me! I observeu el seny i la serenitat amb què us puc explicar tota la història."
    },
    {
     "t": "p",
     "x": "És impossible precisar com la idea se’m va ficar al cap, però un cop se’m va haver ocorregut, m’obsessionava dia i nit. No hi havia cap motiu. No hi havia passió. Estimava aquell ancià. No m’havia enganyat mai. No m’havia insultat mai. El seu or no m’inspirava cap delit. Crec que era el seu ull! Sí, era això. Tenia un ull de voltor: un ull blau pàl·lid, amb un tel al damunt. Sempre que em mirava, se’m gelava la sang, i així, gradualment, molt gradualment, vaig prendre la decisió d’arrabassar-li la vida, a aquell ancià; per alliberar-me així del seu ull per sempre més."
    },
    {
     "t": "p",
     "x": "Ara bé, aquesta és la qüestió: vosaltres creieu que soc boig. Els folls no saben res. Però m’hauríeu d’haver vist. Hauríeu d’haver vist amb quanta saviesa vaig procedir, amb quina cautela, amb quanta previsió i com fingia quan anava a treballar! No havia estat mai tan amable amb el vell com durant tota la setmana abans de matar-lo. I cada nit, al voltant de la mitjanit, girava el pany de la seva porta i l’obria… ai, amb tanta delicadesa! I llavors, quan l’obertura era suficient per passar-hi el cap, hi entrava una llanterna sorda, ben tancada, ben tancada, perquè no se n’escapés gens de llum, i esmunyia el cap endins. Ah, hauríeu esclafit a riure si haguéssiu vist amb quina astúcia introduïa el cap a l’habitació! El movia a poc a poc, molt, molt a poc a poc, per no destorbar el son del vell. Trigava una hora a passar tot el cap per l’obertura i poder veure’l ajagut sobre el llit. Ah! Hauria estat tan intel·ligent com això, un boig? I llavors, quan havia ficat tot el cap dins la cambra, destapava la llàntia cautelosament, ai, amb tanta cautela, tanta, perquè les frontisses espetegaven… La destapava just el mínim per tal que un sol raig prim de llum caigués sobre l’ull de voltor. I vaig fer això set nits molt llargues, sempre pels volts de la mitjanit, i sempre vaig trobar l’ull tancat, i per tant resultava impossible fer la feina, perquè no era pas l’ancià qui em vexava, sinó el seu ull feréstec. Cada matí, quan trencava l’alba, entrava enèrgicament a la cambra i li parlava amb ànims, dient-li pel nom en to cordial, i li preguntava com havia passat la nit. Així que ja podeu comprendre que sens dubte hauria d’haver estat un vell molt savi, per sospitar que durant la nit, al pic de les dotze, l’espiava mentre dormia. La vuitena nit vaig prendre més precaucions que de costum en obrir la porta. La minutera d’un rellotge es mou més de pressa del que ho feia la meva mà. Fins a aquella nit, mai no havia percebut l’abast dels meus poders, de la meva sagacitat. Ben just si podia reprimir els meus sentiments de triomf. Pensar que em trobava justament allà, obrint la porta de mica en mica, i que ell ni tan sols hauria pogut somiar els meus actes o pensaments secrets… Vaig esclafir una rialleta sonora entre dents per aquella idea, i potser em va sentir, ja que tot d’una es va regirar al llit, com si s’hagués sobresaltat. Potser ara pensareu que em vaig fer enrere, però no. La seva habitació era negra com el carbó enmig d’aquella obscuritat impenetrable (atès que els porticons estaven tancats del tot, per por dels lladres), i per això sabia que el vell no podia veure que la porta era entreoberta, i vaig continuar empenyent-la amb gest ferm, ferm."
    },
    {
     "t": "p",
     "x": "Ja tenia el cap a dins, i estava a punt d’obrir la llàntia, quan amb el polze vaig tocar la balda de llautó, i el vell va fer un bot sobre el llit, cridant:"
    },
    {
     "t": "p",
     "x": "—Qui hi ha aquí?"
    },
    {
     "t": "p",
     "x": "Em vaig quedar immòbil i no vaig dir res. Em vaig passar una hora sense moure un múscul, i mentrestant no vaig sentir que es tornés a estirar. Encara estava assegut al llit, escoltant; tal com havia fet jo, nit rere nit, escoltant els rellotges de la mort de la paret."
    },
    {
     "t": "p",
     "x": "Al final vaig sentir un gemec lleu, i vaig saber que era el gemec d’un terror mortal. No era una queixa de dolor ni de pena (ah, no!), era la remor greu i sufocada que emergeix del fons de l’ànima quan la por l’aclapara. El coneixia bé, aquell so. Moltes nits, al punt de la mitjanit, quan tothom dormia, havia sorgit del meu pit, aprofundint amb el seu eco espantós els terrors que m’assetjaven. Sabia què sentia el vell i em feia llàstima, tot i que el meu cor reia en to sarcàstic. Sabia que estava estirat però despert des del primer sorollet, quan s’havia tombat al llit. Els seus temors havien augmentat des d’aleshores. S’havia esforçat per creure que eren imaginacions sense fonament, però no ho havia aconseguit. S’havia dit: «Només és el vent a la xemeneia… només és un ratolí creuant el terra», o bé: «No és més que un grill que ha carrisquejat un cop». Sí, havia intentat consolar-se amb aquestes suposicions, però s’havia adonat que tot era inútil. Tot era en va, perquè la mort, en acostar-s’hi, havia projectat la seva ombra negra damunt seu, i havia embolcallat la víctima. Era la influència lúgubre de l’ombra que no percebia el que havia provocat que sentís (tot i que no veia ni oïa res), que sentís la presència del meu cap dins el dormitori."
    },
    {
     "t": "p",
     "x": "Quan ja m’havia esperat molta estona, amb molta paciència, sense sentir que s’estirés, vaig decidir obrir la llàntia una mica… una escletxa molt, molt petita. Així que la vaig obrir (no us podeu imaginar amb quin sigil), fins que al final un raig tènue, com el fil de l’aranya, va sortir per l’escletxa i va anar a parar sobre l’ull del voltor."
    },
    {
     "t": "p",
     "x": "Era obert, obert de bat a bat, i em vaig enfurismar mentre l’observava. El veia amb una claredat perfecta: tot sencer d’un blau mat, amb un vel fastigós al damunt que m’esglaiava fins al moll de l’os, però no vaig poder veure res més ni de la cara ni de la resta del vell, ja que per instint havia dirigit el raig precisament sobre aquell lloc maleït."
    },
    {
     "t": "p",
     "x": "¿I no us he dit que això que erròniament interpreteu com a demència és una hipersensibilitat dels sentits? Doncs us dic que aleshores em va arribar a l’orella una remor greu, apagada, ràpida, com la que fa un rellotge embolicat en cotó. Aquell so també el coneixia molt bé. Era el batec del cor de l’ancià. Em va exacerbar la ràbia, com el repic d’un tambor estimula el coratge del soldat."
    },
    {
     "t": "p",
     "x": "Però fins i tot aleshores em vaig contenir i vaig romandre immòbil. Ben just si respirava. Sostenia la llàntia sense moure-la. M’esforçava tant com podia per mantenir el raig de llum sobre l’ull entelat. Mentrestant, el batec infernal del cor va augmentar. Cada vegada sonava més i més de pressa, i més i més fort. El terror del vell devia ser extrem! Sonava més fort, dic, cada vegada més fort! Recordeu bé que us he dit que soc de tarannà nerviós: ho soc. I ara, en plena nit, enmig del silenci esgarrifós d’aquella casa vella, un soroll tan extravagant com aquell em va alterar amb un terror incontrolable."
    },
    {
     "t": "p",
     "x": "Amb tot, em vaig contenir i vaig romandre immòbil uns quants minuts més. Però el batec era més fort, cada cop més fort! Em pensava que li explotaria el cor. I llavors em va tenallar una ansietat nova: algun veí sentiria aquell retruny! Al vell li havia arribat l’hora! Amb un crit estrident, vaig obrir la llàntia i vaig saltar dins l’habitació. Va xisclar una vegada, una i prou. Al cap d’un instant, el vaig empènyer a terra i vaig arrossegar aquell llit pesant per tirar-l’hi al damunt. Llavors vaig somriure ben content en veure que, fins al moment, tot rutllava bé. Però, durant molts minuts, el cor del vell va seguir bategant amb un so somort. Això, tanmateix, no m’impacientava, perquè a través de la paret no se sentiria. Al final va cessar. El vell havia mort. Vaig apartar el llit i vaig examinar el cos. Sí, estava mort i ben mort. Vaig posar-li una mà sobre el cor i l’hi vaig deixar una bona estona. No hi havia pols. Estava completament mort. El seu ull ja no em turmentaria més."
    },
    {
     "t": "p",
     "x": "Si encara creieu que soc boig, ja no ho pensareu quan us descrigui les sàvies precaucions que vaig prendre per a l’ocultament del cadàver. La nit s’aprimava i vaig treballar amb diligència, si bé en silenci. Primer de tot, vaig desmembrar el cadàver. Li vaig tallar el cap i els braços i les cames."
    },
    {
     "t": "p",
     "x": "Vaig treure tres planxes del terra de fusta de la cambra, i ho vaig dipositar tot entre els suports. Després vaig tornar a posar les planxes amb tanta intel·ligència, tanta astúcia, que cap ull humà (ni tan sols el seu) no hi hauria notat res de fora de lloc. No s’havia de fregar res, ni una taca de cap mena enlloc; de sang tampoc. Havia estat molt curós. Una banyera s’ho havia empassat tot, ha, ha!"
    },
    {
     "t": "p",
     "x": "Quan vaig haver enllestit aquestes tasques eren les quatre: fosc encara com a mitjanit. Quan la campana repicava l’hora, vaig sentir un truc a la porta del carrer. Vaig baixar a obrir amb despreocupació: què havia de témer, ara? Van entrar tres homes que es van presentar, amb una delicadesa absoluta, com a agents de policia. Aquella nit, un veí havia sentit un xiscle que li havia fet tenir sospites d’un acte criminal; havia traslladat la informació a la comissaria de policia i a ells tres (els agents) els havien assignat la inspecció d’aquella casa."
    },
    {
     "t": "p",
     "x": "Vaig somriure: què havia de témer? Vaig donar la benvinguda als cavallers. El crit, vaig aclarir, havia estat meu, durant un malson. El vell, vaig comentar, havia anat al camp. Vaig acompanyar els visitants per tota la casa. Els vaig convidar a escorcollar-la, a escorcollar-la a fons. Al final, els vaig conduir fins a la cambra de l’ancià. Els vaig mostrar els seus tresors, segurs, intactes. En ple entusiasme de confiança, vaig portar cadires a l’habitació, i els vaig convidar a reposar dels seus fatics, mentre jo, pel meu compte, per l’audàcia folla del meu triomf perfecte, vaig situar el meu seient just damunt del lloc on reposava el cos de la víctima."
    },
    {
     "t": "p",
     "x": "Els agents van quedar satisfets. El meu comportament els havia convençut. Jo em sentia especialment tranquil. Es van quedar asseguts, i mentre jo responia alegrement, ells xerraven d’assumptes rutinaris. Però, al cap de poc, em vaig adonar que empal·lidia i que desitjava que se n’anessin. Tenia mal de cap i m’imaginava un dring a l’oïda, però ells continuaven xerrant allà i asseguts. El brunzit es va perfilar: continuava i era més precís."
    },
    {
     "t": "p",
     "x": "Parlava amb més llibertat per treure’m aquella sensació de sobre, però prosseguia i guanyava definició… fins que, finalment, vaig descobrir que el sorollet no era només a les meves oïdes."
    },
    {
     "t": "p",
     "x": "És clar que havia empal·lidit de mala manera! Però parlava més de pressa i amb veu més forta. El so, malgrat tot, augmentava… I què hi podia fer jo? Era una remor greu, somorta, ràpida… molt semblant a la que fa un rellotge embolicat en cotó. Vaig boquejar per agafar aire, i a pesar de tot els agents encara no l’havien sentit. Jo parlava més de pressa i amb més vehemència, però el so augmentava de manera constant. Em vaig aixecar i vaig començar a discursejar sobre trivialitats, en to agut i gesticulant enèrgicament, però aquell soroll creixia constant. Per què no se n’anaven? Em passejava endavant i enrere amb gambades feixugues, com si els comentaris dels tres homes m’haguessin enfurismat… I el soroll augmentava constant. Ai, Déu! Què podia fer, jo? Escumejava, delirava, renegava! Vaig girar la cadira on seia, i va fregar sobre les planxes de fusta, però el soroll sorgia de pertot i creixia contínuament. Més fort, més fort, més fort! I aquells homes encara xerrotejaven en to amistós, somrient. Era possible que no ho sentissin? Déu totpoderós! No, no: ho sentien! Sospitaven! Ho sabien! Es burlaven del meu horror! Això vaig pensar, i encara ho penso. Però qualsevol cosa era preferible a aquella agonia! Qualsevol cosa seria més suportable que aquella mofa! No podia resistir més aquells somriures hipòcrites! Tenia la impressió que, si no xisclava, moriria! I ara… altre cop! Escolteu! Més fort! Més fort! Més fort! Més fort!"
    },
    {
     "t": "p",
     "x": "—Prou, miserables! —vaig bramar—. No fingiu més! Admeto els fets! Arranqueu les fustes! Aquí, aquí…! És el batec del seu cor repugnant!"
    }
   ],
   "vocabulari": [
    {
     "terme": "Vexar",
     "definicio": "Molestar, humiliar o fer patir algú."
    },
    {
     "terme": "Sagacitat",
     "definicio": "Capacitat de comprendre o actuar amb astúcia i perspicàcia."
    },
    {
     "terme": "Sigil",
     "definicio": "Manera d’actuar silenciosament i amb molta cautela per no ser descobert."
    },
    {
     "terme": "Somort",
     "definicio": "Apagat, poc intens o difícil de percebre."
    },
    {
     "terme": "Vehemència",
     "definicio": "Intensitat i força amb què s’actua o es parla."
    },
    {
     "terme": "Delirar",
     "definicio": "Parlar o actuar de manera desordenada, sovint a causa d’una gran excitació o alteració."
    }
   ],
   "granPregunta": "Quines contradiccions entre el que diu el narrador i la manera com actua ens fan dubtar de la serenitat i el seny que ell mateix afirma tenir?"
  },
  {
   "id": "L32",
   "num": 32,
   "bloc": "expr",
   "numOriginal": "EXPR 07",
   "materia": "Lectura expressiva",
   "titol": "Raspall",
   "llengua": "ca",
   "minuts": 8,
   "autoria": [
    {
     "k": "autoria",
     "v": "Pere Calders"
    },
    {
     "k": "font",
     "v": "conte del recull Cròniques de la veritat oculta (Editorial Selecta, 1955)"
    },
    {
     "k": "data",
     "v": "1955"
    }
   ],
   "text": [
    {
     "t": "p",
     "x": "El dia que el «Turc» —un cadell de gos— es va menjar el barret del senyor Sala, la senyora Sala va decidir que allò ja ultrapassava tota mesura canina, que només una paciència de sant podia haver tolerat que les coses arribessin fins allí. Per tant, reunida que fou la família i demanat el parer de cadascú, hom acordà que la noia casada del jardiner es faria càrrec del «Turc» i el tindria a casa seva."
    },
    {
     "t": "p",
     "x": "El nen Sala va tenir un disgust de mort. Li semblava que no trobaria la manera de portar més endavant la seva vida, que sense el gos tota cosa era fada i sense objecte. Passat el moment de les llàgrimes, el problema que se li va presentar era el de donar un destí honorable a la quantitat d’afecte que l’absència del «Turc» deixava vacant. Va provar de mirar-se amb uns altres ulls el canari de la seva tia, però podien fer-se tant poques combinacions realment divertides amb l’ocell que va veure de seguida que no passarien mai d’una superficial coneixença."
    },
    {
     "t": "p",
     "x": "Aleshores imaginà que el llum de peu de la biblioteca era un fidel soldat que no tenia altra feina que servir-lo. Això li va donar la il·lusió, durant dues hores curtes, d’haver resolt el seu cas, però va comprovar que li quedava encara una terrible quantitat d’estimació perduda per tots els racons de la seva ànima."
    },
    {
     "t": "p",
     "x": "Provà d’establir una companyonia duradora amb una pilota de roba, amb un manyoc de cordill que, com a cordill, era únic en el seu tipus i, successivament, amb una baldufa americana, una herba nova del jardí i una canya llarga que havia fet l’enveja de totes les seves amistats. I va adonar-se que tot el coratge que havia posat en joc per tal de superar la situació no li servia de res, que la diferència entre totes aquelles coses i un gos era tan gran que no era possible jugar a oblidar-la. Aleshores, va arribar al convenciment que li calia trobar un substitut de gos, quelcom que, sense que la memòria del «Turc» en patís, pogués fer-ne semblança."
    },
    {
     "t": "p",
     "x": "Va recórrer la casa de dalt a baix, regirà tots els armaris i tots els calaixos i, finalment, en un racó de les golfes va trobar un gran raspall passat de moda, definitivament bandejat de les necessitats de la família. Aclucant els ulls, va passar-li la mà plana per damunt del pèl, i és ben de debò que va fer-li l’efecte que acariciava el llom d’un gos. Per ésser una primera prova va resultar tan bona, que el nen Sala va creure que no li calia cercar més. Va lligar-lo amb un tros de cordill i al cap de cinc minuts escassos estava ben lluny de creure que arrossegava un raspall, sinó que tenia el convenciment que «Raspall», un gos de raça estranya, el seguia amunt i avall de casa seva."
    },
    {
     "t": "p",
     "x": "Al vespre, una mica cansat per la capacitat de seguiment del seu nou amic, el nen va anar-se’n a dormir, i abans de ficar-se al llit lligà «Raspall» a la pota d’una cadira. Però encara no s’havia acotxat que ja un entendriment obligador el feia pensar en la manyaguesa de «Raspall» i en la seva docilitat per a adaptar-se a qualsevol mena de joc. Va fer-li una mica de mal el pensament que hauria de passar tota la nit fermat, dormint damunt la fredor de les rajoles, i, seguint un impuls indomable, saltà del llit d’una revolada, alliberà «Raspall» de la seva lligadura i se l’emportà a dormir amb ell."
    },
    {
     "t": "p",
     "x": "I mireu si passen coses extraordinàries a vegades, que molt abans d’adormir-se el nen va adonar-se que el raspall irradiava calor de vida, que es premia contra el seu cos cercant una carícia. Això, naturalment, li va semblar molt seriós, perquè una cosa és que hom jugui a convertir un raspall en un gos i una altra cosa ben diferent és que la transformació es produeixi de bo de veres. Va alçar-se, obrí el llum i comprovà esbalaït que el raspall, sense perdre gens ni mica la forma de raspall, es movia com un gos. Va saltar donant algunes voltes prop del nen i després va posar-se de panxa enlaire, per tal que l’amanyaguessin. Qualsevol que tingui notícia d’aquest prodigi es preguntarà que d’on podia treure potes per a caminar i panxa per a mostrar un raspall que seguís tenint forma de raspall. Però, vençuda la principal dificultat de donar-li vida, aquest detall està tan desproveït d’importància que ni val la pena d’amoïnar-s’hi."
    },
    {
     "t": "p",
     "x": "El nen va considerar-ho així i tot seguit va tenir el desig d’anar a despertar els seus pares i explicar-los el meravellós esdeveniment. Però, assenyat com era, i coneixedor dels miraments que un fill ha de tenir amb els seus pares, va decidir esperar a l’endemà."
    },
    {
     "t": "p",
     "x": "Queda ben entès, és clar, que no va poder dormir en tota la nit, i de bon matí, quan va sentir que la seva mare ja feinejava, va anar-la a trobar amb «Raspall» sota el braç."
    },
    {
     "t": "p",
     "x": "—Mireu, mare —va dir-li—. He trobat un raspall que en realitat és un gos. Es belluga, coneix la meva veu i porta puces."
    },
    {
     "t": "p",
     "x": "La mare se’l va mirar sense deixar la feina i li respongué:"
    },
    {
     "t": "p",
     "x": "—No siguis beneit i llença aquesta andròmina. Ja ets gran i hauries de tenir més seny."
    },
    {
     "t": "p",
     "x": "El nen es va sentir ofès i va pensar una vegada més en l’aire de suficiència que tenen la gent gran i la seva manera absurda de viure. No digué res més, s’emportà «Raspall» a la seva habitació i pensà que, si no el volien creure, tot això que es perdrien."
    },
    {
     "t": "p",
     "x": "A l’hora de dinar la mare explicà, fent-ne burla, la descoberta del nen, i el pare va riure com si es tractés de la bajanada més gran de la terra. El nen no va replicar, perquè ja sabia que la justícia sempre s’obre camí, i esperava que, tard o d’hora tothom podria comprovar que hi ha coses que no fan riure tant com sembla."
    },
    {
     "t": "p",
     "x": "I mireu si anava poc errat que a la nit següent va despertar-lo un clapit de «Raspall». Va desvetllar-se i sentí soroll de baralla a la biblioteca i la veu del seu pare demanant auxili. «Raspall» furgava la porta i tenia un rar neguit; el nen obrí, baixà les escales de puntetes i va veure el seu pare barallant-se amb un lladre que el dominava i estava a punt de baldar-li el cap amb un ferro de la xemeneia."
    },
    {
     "t": "p",
     "x": "—Busca’l, «Raspall», mossega’l!"
    },
    {
     "t": "p",
     "x": "«Raspall» va córrer com el vent, s’abraonà damunt del lladre i va mossegar-li la canyella. I el lladre es va quedar tan sorprès per l’agressió d’aquella mena de cosa, que va rendir-se de seguida i fou lliurat a la policia lligat de peus i mans."
    },
    {
     "t": "p",
     "x": "Poc després, la mare afirmava amb llàgrimes als ulls que mai més no dubtaria de la paraula del seu fill, i el pare, passant la mà pel llom de «Raspall», deia:"
    },
    {
     "t": "p",
     "x": "—Li farem una caseta al jardí, amb tot el confort de les darreres descobertes. Damunt la porta, hi farem pintar unes lletres que diguin:"
    },
    {
     "t": "q",
     "x": "«No és segur que ho sigui, però mereixeria ésser-ho»"
    }
   ],
   "vocabulari": [
    {
     "terme": "Ultrapassar",
     "definicio": "Anar més enllà d’un límit; superar de manera excessiva."
    },
    {
     "terme": "Hom",
     "definicio": "Forma impersonal antiga equivalent a «es» o «la gent» (hom acordà = es va acordar)."
    },
    {
     "terme": "Fada",
     "definicio": "Aquí, adjectiu: insípida, sense gràcia ni sentit (no té res a veure amb la fada dels contes)."
    },
    {
     "terme": "Bandejat",
     "definicio": "Apartat, deixat de banda, expulsat de l’ús."
    },
    {
     "terme": "Andròmina",
     "definicio": "Objecte vell i inútil; trasto."
    },
    {
     "terme": "Clapit",
     "definicio": "Lladruc, el crit del gos."
    }
   ],
   "granPregunta": "Per què el conte ens fa acceptar, almenys mentre llegim, una cosa impossible com un raspall que es comporta com un gos?"
  }
 ]
};
