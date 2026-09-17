/* Suport lingüístic per a alumnat nouvingut · lectures 01–08 (bloc STEM).
   Clau = id de lectura de dades/lectures.js.
   p: paraules  → [català, castellà, àrab, amazic, urdú, ucraïnès, revisar?]
   e: expressions → [expressió del text, significat en català fàcil, castellà, àrab, amazic, urdú, ucraïnès, revisar?]
   «revisar» = codis de llengua separats per espais ('ber', 'ur'…) que cal validar amb una persona nativa (surten amb °).
   Amazic: grafia llatina (base kabilenca / estàndard IRCAM, amb manlleus habituals). És orientatiu. */
window.NOUVINGUTS = window.NOUVINGUTS || {};

NOUVINGUTS.L01 = {
  p: [
    ["porta", "puerta", "باب", "tawwurt", "دروازہ", "двері"],
    ["concurs", "concurso", "مسابقة", "amennuɣ", "مقابلہ", "конкурс", "ber"],
    ["triar", "elegir", "يختار", "fren", "چننا", "обирати"],
    ["premi", "premio", "جائزة", "arraz", "انعام", "приз"],
    ["probabilitat", "probabilidad", "احتمال", "tamsiwt", "امکان", "ймовірність", "ber"],
    ["a l’atzar", "al azar", "عشوائيًا", "s zzher", "اتفاقاً", "випадково", "ber"],
    ["canviar", "cambiar", "يغيّر", "beddel", "بدلنا", "змінювати"],
    ["intuïció", "intuición", "حدس", "aḥulfu", "وجدان", "інтуїція", "ber"]
  ],
  e: [
    ["a cegues", "sense veure res, sense saber res", "a ciegas", "دون أن يعرف شيئًا", "war ma yeẓra", "اندھا دھند", "наосліп", "ber"],
    ["meitat i meitat", "50 % i 50 %", "mitad y mitad", "نصف ونصف", "azgen d uzgen", "آدھا آدھا", "навпіл"],
    ["posar a prova", "comprovar si una idea és correcta", "poner a prueba", "يضع على المحك", "jerreb", "آزمانا", "перевіряти", "ber"]
  ]
};

NOUVINGUTS.L02 = {
  p: [
    ["bacteri", "bacteria", "بكتيريا", "tabaktirit", "بیکٹیریا", "бактерія"],
    ["antibiòtic", "antibiótico", "مضاد حيوي", "antibyutik", "اینٹی بائیوٹک", "антибіотик"],
    ["medicament", "medicamento", "دواء", "ddwa", "دوا", "ліки"],
    ["infecció", "infección", "عدوى", "aɣellay", "انفیکشن", "інфекція", "ber"],
    ["resistir", "resistir", "يقاوم", "ṣber", "مزاحمت کرنا", "чинити опір", "ber"],
    ["mutació", "mutación", "طفرة", "abeddel n ujinat", "میوٹیشن", "мутація", "ber"],
    ["sobreviure", "sobrevivir", "ينجو", "fek", "زندہ بچنا", "виживати", "ber"],
    ["població", "población", "مجموعة (من الكائنات)", "agraw", "آبادی", "популяція"]
  ],
  e: [
    ["marcar una gran diferència", "fer que una cosa canviï molt", "marcar una gran diferencia", "يُحدث فرقًا كبيرًا", "ad yeg amgired meqqren", "بڑا فرق ڈالنا", "мати велике значення", "ber"],
    ["l’evolució no funciona amb plans", "l’evolució no té un objectiu decidit abans", "la evolución no sigue un plan", "التطور لا يسير وفق خطة", "tamenzawt ur tḍeffer ara aɣawas", "ارتقا کسی منصوبے کے مطابق نہیں ہوتا", "еволюція не діє за планом", "ber"],
    ["pressió selectiva", "situació que ajuda uns a viure i altres no", "presión selectiva", "ضغط انتقائي", "aẓeyyer n ufran", "انتخابی دباؤ", "селективний тиск", "ber"]
  ]
};

NOUVINGUTS.L03 = {
  p: [
    ["pantalla", "pantalla", "شاشة", "agdil", "اسکرین", "екран"],
    ["vidre", "cristal", "زجاج", "zzaj", "شیشہ", "скло"],
    ["capa", "capa", "طبقة", "tasfift", "تہہ", "шар", "ber"],
    ["tocar", "tocar", "يلمس", "nnal", "چھونا", "торкатися", "ber"],
    ["píxel", "píxel", "بكسل", "piksil", "پکسل", "піксель"],
    ["llum", "luz", "ضوء", "tafat", "روشنی", "світло"],
    ["conductor (elèctric)", "conductor", "موصِّل", "amessebrid n trisiti", "موصل", "провідник", "ber"],
    ["bateria", "batería", "بطارية", "tabatrit", "بیٹری", "батарея"]
  ],
  e: [
    ["sense cap secret", "molt simple, no hi ha res amagat", "sin ningún secreto", "بلا أي سر", "war tabaḍnit", "بغیر کسی راز کے", "без жодної таємниці", "ber"],
    ["a la primera vegada", "el primer cop que ho fas", "a la primera", "من المرة الأولى", "seg tikkelt tamezwarut", "پہلی ہی بار میں", "з першого разу"],
    ["a la palma de la mà", "a la mà, molt a prop", "en la palma de la mano", "في راحة اليد", "deg teɣzut n ufus", "ہتھیلی پر", "на долоні", "ber"]
  ]
};

NOUVINGUTS.L04 = {
  p: [
    ["ampolla", "botella", "زجاجة", "taqerɛett", "بوتل", "пляшка"],
    ["sostre", "techo", "سقف", "asqif", "چھت", "дах"],
    ["forat", "agujero", "ثقب", "tabburt / aɣzar", "سوراخ", "отвір", "ber"],
    ["aigua", "agua", "ماء", "aman", "پانی", "вода"],
    ["sol", "sol", "شمس", "tafukt", "سورج", "сонце"],
    ["lleixiu", "lejía", "مُبيِّض (ماء جافيل)", "jafil", "بلیچ", "відбілювач"],
    ["fosc", "oscuro", "مظلم", "yeɣli-d ṭlam", "اندھیرا", "темний", "ber"],
    ["electricitat", "electricidad", "كهرباء", "trisiti", "بجلی", "електрика"]
  ],
  e: [
    ["entra en joc", "comença a ser important", "entra en juego", "يدخل في اللعبة", "ad yekcem ɣer wurar", "کردار ادا کرنا شروع کرتا ہے", "вступає в гру", "ber"],
    ["tan senzilla com revolucionària", "molt simple i, alhora, molt nova i important", "tan sencilla como revolucionaria", "بسيطة وثورية في الوقت نفسه", "tefses, maca d tamaynut", "جتنی سادہ اتنی ہی انقلابی", "настільки ж проста, наскільки революційна", "ber"],
    ["arreu del món", "a molts llocs del món", "en todo el mundo", "في كل أنحاء العالم", "deg umaḍal akk", "دنیا بھر میں", "по всьому світу"]
  ]
};

NOUVINGUTS.L05 = {
  p: [
    ["ruta", "ruta", "مسار", "abrid", "راستہ", "маршрут"],
    ["carrer", "calle", "شارع", "azniq", "گلی", "вулиця"],
    ["cruïlla", "cruce", "تقاطع", "anmager n yibriden", "چوراہا", "перехрестя", "ber"],
    ["mapa", "mapa", "خريطة", "takarḍa", "نقشہ", "мапа"],
    ["distància", "distancia", "مسافة", "ameccaq", "فاصلہ", "відстань", "ber"],
    ["trànsit", "tráfico", "حركة المرور", "tikli n tkeṛṛusin", "ٹریفک", "рух транспорту", "ber"],
    ["temps (durada)", "tiempo", "وقت", "akud", "وقت", "час"],
    ["calcular", "calcular", "يحسب", "ḥseb", "حساب لگانا", "обчислювати"]
  ],
  e: [
    ["en segons", "molt ràpid, en molt poc temps", "en segundos", "في ثوانٍ", "deg kra n tasinin", "چند سیکنڈ میں", "за лічені секунди", "ber"],
    ["girar abans d’hora", "girar massa aviat", "girar antes de tiempo", "ينعطف قبل الأوان", "ad yezzi uqbel akud", "وقت سے پہلے مڑنا", "повернути зарано", "ber"],
    ["el cor del problema", "la part més important del problema", "el corazón del problema", "جوهر المشكلة", "ul n wugur", "مسئلے کی جڑ", "суть проблеми", "ber"]
  ]
};

NOUVINGUTS.L06 = {
  p: [
    ["estrella", "estrella", "نجم", "itri", "ستارہ", "зірка"],
    ["planeta", "planeta", "كوكب", "tamtunt", "سیارہ", "планета", "ber"],
    ["cel", "cielo", "سماء", "igenni", "آسمان", "небо"],
    ["brillantor", "brillo", "لمعان", "tafat / aberraq", "چمک", "яскравість", "ber"],
    ["mesurar", "medir", "يقيس", "ɛebber", "ناپنا", "вимірювати"],
    ["prova", "prueba", "دليل", "anagi", "ثبوت", "доказ", "ber"],
    ["patró", "patrón", "نمط", "tamudemt", "پیٹرن", "закономірність", "ber"],
    ["detectar", "detectar", "يكتشف", "af", "پتا لگانا", "виявляти"]
  ],
  e: [
    ["no n’hi ha prou", "no és suficient", "no es suficiente", "هذا لا يكفي", "ur yekfi ara", "یہ کافی نہیں", "цього недостатньо"],
    ["obrir la porta a", "fer possible una cosa nova", "abrir la puerta a", "يفتح الباب أمام", "ad yeldi tawwurt i", "کا دروازہ کھولنا", "відкривати шлях до", "ber"],
    ["deixar una empremta", "deixar un senyal que es pot veure", "dejar una huella", "يترك أثرًا", "ad yeǧǧ lateṛ", "نشان چھوڑنا", "залишати слід", "ber"]
  ]
};

NOUVINGUTS.L07 = {
  p: [
    ["cuina", "cocina", "مطبخ", "anwal", "باورچی خانہ", "кухня"],
    ["ou", "huevo", "بيضة", "tamellalt", "انڈا", "яйце"],
    ["paella (estri)", "sartén", "مقلاة", "tafeḍḍaḍt / lmeqla", "کڑاہی", "сковорідка", "ber"],
    ["xocolata", "chocolate", "شوكولاتة", "cukula", "چاکلیٹ", "шоколад"],
    ["calor", "calor", "حرارة", "tazɣelt", "حرارت", "тепло"],
    ["fondre’s", "derretirse", "يذوب", "fsi", "پگھلنا", "танути"],
    ["canvi", "cambio", "تغيُّر", "abeddel", "تبدیلی", "зміна"],
    ["substància", "sustancia", "مادة", "tanga", "مادہ", "речовина", "ber"]
  ],
  e: [
    ["no hi ha marxa enrere", "no es pot tornar a com era abans", "no hay vuelta atrás", "لا رجعة فيه", "ulac tuɣalin ɣer deffir", "واپسی کا کوئی راستہ نہیں", "шляху назад немає", "ber"],
    ["bany maria", "escalfar un recipient dins d’aigua calenta", "baño maría", "حمّام مائي", "asenweṛ deg waman yeḥman", "پانی کے برتن میں گرم کرنا", "водяна баня", "ber"],
    ["a simple vista", "només mirant, sense aparells", "a simple vista", "بالعين المجردة", "s tiṭ kan", "صرف دیکھنے سے", "неозброєним оком", "ber"]
  ]
};

NOUVINGUTS.L08 = {
  p: [
    ["malaltia", "enfermedad", "مرض", "aṭṭan", "بیماری", "хвороба"],
    ["contagiar", "contagiar", "يُعدي", "ɛdu", "بیماری لگانا", "заражати", "ber"],
    ["cas (de malaltia)", "caso", "حالة", "tamsalt", "کیس", "випадок", "ber"],
    ["créixer", "crecer", "يزداد", "ali / rnu", "بڑھنا", "зростати"],
    ["disminuir", "disminuir", "ينقص", "nqes", "کم ہونا", "зменшуватися"],
    ["mitjana", "media", "مُتوسِّط", "alemmas", "اوسط", "середнє", "ber"],
    ["salut", "salud", "صحة", "tazmert", "صحت", "здоровʼя"],
    ["predir", "predecir", "يتنبّأ", "ẓer-d uqbel", "پیش گوئی کرنا", "передбачати", "ber"]
  ],
  e: [
    ["de mitjana", "si fem la mitjana dels números", "de media", "في المتوسط", "s ulemmas", "اوسطاً", "в середньому", "ber"],
    ["a l’inrevés", "al contrari", "al revés", "بالعكس", "s lɛeks", "الٹا", "навпаки"],
    ["un brot que s’apaga", "una malaltia que deixa d’estendre’s", "un brote que se apaga", "تفشٍّ يخمد", "aṭṭan yettexsin", "وبا جو ختم ہو جاتی ہے", "спалах, що згасає", "ber"]
  ]
};
