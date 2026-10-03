const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));

const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav nav');
menu.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.right = '6vw';
  navLinks.style.flexDirection = 'column';
  navLinks.style.background = '#1c2a28';
  navLinks.style.padding = '20px';
  navLinks.style.borderRadius = '12px';
});

const translations = {
  en: {
    navApartment:'The Apartment', navTour:'Tour', navGallery:'Gallery', navLocation:'Location', navRates:'Rates', navAvailability:'Check availability',
    heroLead:'A calm, comfortable holiday apartment designed for slow mornings, long lunches and easy days by the Ionian Sea.', heroButton:'Explore the apartment', heroAsk:'Ask about dates →',
    introTitle:'A place to feel<br><em>at home in Greece.</em>', introP1:'Step into a bright, spacious apartment with a relaxed Mediterranean feel. Natural wood, soft neutrals and touches of Ionian blue create an easy, welcoming base for your Greek holiday.', introP2:'Whether you are heading to the beach, exploring the coast or simply enjoying a quiet evening at home, Grivas 7 is made for comfortable stays.',
    apartmentEyebrow:'THE APARTMENT', apartmentTitle:'Comfort, space &<br><em>simple details.</em>', featureLivingTitle:'Open living', featureLivingText:'A generous living and dining area connects naturally with the kitchen.', featureKitchenTitle:'Kitchen & dining', featureKitchenText:'A bright kitchen and a proper dining table for relaxed meals together.', featureBedroomTitle:'Peaceful bedrooms', featureBedroomText:'Two comfortable bedrooms with fresh linens, towels and plenty of storage.', featureBathroomTitle:'Modern bathroom', featureBathroomText:'A clean, contemporary bathroom with a spacious walk-in shower.',
    guestEyebrow:'FEEL AT HOME', guestTitle:'The things you need<br><em>for an easy stay.</em>', essentialsTitle:'Your apartment includes', essentialsIntro:'Your apartment is equipped with the things you need for a comfortable stay:', itemWashing:'Washing machine', itemIron:'Iron and ironing board', itemBathTowels:'Bath towels', itemBeachTowels:'Beach towels', itemToaster:'Toaster', itemCooker:'Cooker and kitchen essentials', itemCoffee:'Capsule coffee machine', itemToilet:'Toilet paper', shampooNote:'We don\'t provide shampoo or shower gel because everyone has their own preferences and favourites. <strong>Bring the products you love — we\'ll take care of the rest.</strong>',
    digitalLabel:'📵 DIGITAL DETOX', digitalTitle:'A little less screen time.', digitalText:'There is no TV in the apartment — intentionally. 😊 Think of it as a small digital detox. Instead of spending your evenings in front of a screen, enjoy a glass of wine, a walk by the sea, dinner in Vonitsa or a quiet evening at home.', digitalStrong:'Your holiday deserves a little less screen time and a little more Greece. 🇬🇷',
    guideLabel:'📍 YOUR LOCAL GUIDE', guideTitle:'Just scan, choose and enjoy.', guideText:'As soon as you arrive, you\'ll find QR codes for the Wi-Fi and our local guide. It includes beaches, restaurants and cafés, places worth visiting, day trips and GPS directions. Choose how many minutes you want to drive, pick a destination or beach, and you\'re ready to go.', guideQuote:'Your holiday, made simple.',
    beachLabel:'🏖️ OUR BEACH', beachTitle:'Easy days by the sea.', beachText:'The beach near the apartment has free sun loungers available for everyone, so you can enjoy a relaxing day by the sea without paying for a sunbed. Water shoes are recommended, as there are some sea urchins in the area.', beachShops:'If you don\'t have water shoes or space in your suitcase, there are local shops nearby where you can find water shoes and other useful holiday items.', packLine:'Pack your clothes. We\'ll take care of the rest.',
    ratesEyebrow:'STAY & RATES', ratesTitle:'Simple pricing,<br><em>easy planning.</em>', summerMonths:'June · July · August', winterMonths:'September · May', perNight:'per night', rateNote:'The apartment has two bedrooms. Contact us for availability and exact dates.',
    tourEyebrow:'TAKE A LOOK INSIDE', tourTitle:'The apartment<br><em>in motion.</em>', tourText:'Press play and take a relaxed walk through the space before you arrive.', musicNote:'♪ Greek music · final edited version',
    galleryEyebrow:'A FEW DETAILS', galleryTitle:'See yourself<br><em>here.</em>', galleryHint:'Tap or click any photo to see it larger.',
    locationEyebrow:'VONITSA · IONIAN COAST', locationTitle:'Close to the<br><em>Greek summer.</em>', locationText:'Grivas 7 is in Vonitsa, a relaxed town on the Ambracian Gulf, with easy access to the coast, beaches, local tavernas and day trips around the Ionian region.', mapsButton:'Explore Vonitsa on Maps',
    contactEyebrow:'READY WHEN YOU ARE', contactTitle:'Make Greece<br><em>your next stay.</em>', contactText:'For availability, rates or any questions about the apartment, get in touch directly.', contactNote:'For availability, please send us your preferred dates and number of guests.'
  },
  ro: {
    navApartment:'Apartamentul', navTour:'Tur video', navGallery:'Galerie', navLocation:'Locație', navRates:'Tarife', navAvailability:'Verifică disponibilitatea',
    heroLead:'Un apartament de vacanță calm și confortabil, creat pentru dimineți liniștite, prânzuri lungi și zile relaxante la Marea Ionică.', heroButton:'Descoperă apartamentul', heroAsk:'Întreabă despre date →',
    introTitle:'Un loc în care să te simți<br><em>ca acasă în Grecia.</em>', introP1:'Intră într-un apartament luminos și spațios, cu o atmosferă mediteraneană relaxată. Lemnul natural, tonurile calde și accentele de albastru ionic creează un loc primitor pentru vacanța ta în Grecia.', introP2:'Fie că mergi la plajă, explorezi coasta sau pur și simplu te bucuri de o seară liniștită acasă, Grivas 7 este creat pentru un sejur confortabil.',
    apartmentEyebrow:'APARTAMENTUL', apartmentTitle:'Confort, spațiu &<br><em>detalii simple.</em>', featureLivingTitle:'Living spațios', featureLivingText:'O zonă generoasă de living și dining comunică natural cu bucătăria.', featureKitchenTitle:'Bucătărie & dining', featureKitchenText:'O bucătărie luminoasă și o masă adevărată pentru mese relaxate împreună.', featureBedroomTitle:'Dormitoare liniștite', featureBedroomText:'Două dormitoare confortabile, cu lenjerie proaspătă, prosoape și spațiu suficient de depozitare.', featureBathroomTitle:'Baie modernă', featureBathroomText:'O baie curată și contemporană, cu un duș walk-in spațios.',
    guestEyebrow:'SIMTE-TE CA ACASĂ', guestTitle:'Lucrurile de care ai nevoie<br><em>pentru un sejur ușor.</em>', essentialsTitle:'Ce găsești în apartament', essentialsIntro:'Apartamentul este dotat cu lucrurile de care ai nevoie pentru un sejur confortabil:', itemWashing:'Mașină de spălat', itemIron:'Fier de călcat și masă de călcat', itemBathTowels:'Prosoape de baie', itemBeachTowels:'Prosoape de plajă', itemToaster:'Prăjitor de pâine', itemCooker:'Plită și lucruri esențiale pentru bucătărie', itemCoffee:'Aparat de cafea cu capsule', itemToilet:'Hârtie igienică', shampooNote:'Nu oferim șampon sau gel de duș, pentru că fiecare are propriile preferințe și produsele preferate. <strong>Adu produsele pe care le iubești — de restul ne ocupăm noi.</strong>',
    digitalLabel:'📵 DIGITAL DETOX', digitalTitle:'Puțin mai puțin timp în fața ecranului.', digitalText:'În apartament nu există televizor — intenționat. 😊 Gândește-te la el ca la un mic digital detox. În loc să-ți petreci serile în fața unui ecran, bucură-te de un pahar de vin, o plimbare pe lângă mare, o cină în Vonitsa sau o seară liniștită acasă.', digitalStrong:'Vacanța ta merită puțin mai puțin ecran și puțin mai multă Grecie. 🇬🇷',
    guideLabel:'📍 GHIDUL TĂU LOCAL', guideTitle:'Scanează, alege și bucură-te.', guideText:'Imediat ce ajungi, vei găsi coduri QR pentru Wi-Fi și pentru ghidul nostru local. Ghidul include plaje, restaurante și cafenele, locuri care merită vizitate, excursii de o zi și indicații GPS. Alegi câte minute vrei să conduci, alegi o destinație sau o plajă și ești gata de plecare.', guideQuote:'Vacanța ta, făcută simplă.',
    beachLabel:'🏖️ PLAJA NOASTRĂ', beachTitle:'Zile ușoare la mare.', beachText:'Plaja din apropierea apartamentului are șezlonguri gratuite disponibile pentru toată lumea, așa că te poți bucura de o zi relaxantă la mare fără să plătești pentru șezlong. Recomandăm încălțăminte de apă, deoarece în zonă există câțiva arici de mare.', beachShops:'Dacă nu ai încălțăminte de apă sau nu ai loc în bagaj, în apropiere sunt magazine locale de unde poți cumpăra încălțăminte de apă și alte lucruri utile pentru vacanță.', packLine:'Pune-ți hainele în bagaj. De restul ne ocupăm noi.',
    ratesEyebrow:'SEJUR & TARIFE', ratesTitle:'Prețuri simple,<br><em>planificare ușoară.</em>', summerMonths:'Iunie · Iulie · August', winterMonths:'Septembrie · Mai', perNight:'pe noapte', rateNote:'Apartamentul are două dormitoare. Contactează-ne pentru disponibilitate și date exacte.',
    tourEyebrow:'INTRĂ SĂ VEZI', tourTitle:'Apartamentul<br><em>în mișcare.</em>', tourText:'Apasă play și fă o plimbare relaxată prin apartament înainte să ajungi.', musicNote:'♪ Muzică grecească · versiunea finală editată',
    galleryEyebrow:'CÂTEVA DETALII', galleryTitle:'Imaginează-te<br><em>aici.</em>', galleryHint:'Apasă pe orice fotografie pentru a o vedea mai mare.',
    locationEyebrow:'VONITSA · COASTA IONICĂ', locationTitle:'Aproape de<br><em>vara grecească.</em>', locationText:'Grivas 7 se află în Vonitsa, un oraș relaxat pe Golful Ambracic, cu acces ușor la coastă, plaje, taverne locale și excursii de o zi în regiunea Ionică.', mapsButton:'Descoperă Vonitsa pe hartă',
    contactEyebrow:'CÂND EȘTI GATA', contactTitle:'Fă din Grecia<br><em>următorul tău sejur.</em>', contactText:'Pentru disponibilitate, tarife sau orice întrebare despre apartament, contactează-ne direct.', contactNote:'Pentru disponibilitate, trimite-ne datele preferate și numărul de persoane.'
  },
  de: {
    navApartment:'Das Apartment', navTour:'Rundgang', navGallery:'Galerie', navLocation:'Lage', navRates:'Preise', navAvailability:'Verfügbarkeit prüfen',
    heroLead:'Ein ruhiges, komfortables Ferienapartment für entspannte Morgen, lange Mittagessen und unbeschwerte Tage am Ionischen Meer.', heroButton:'Apartment entdecken', heroAsk:'Nach Terminen fragen →',
    introTitle:'Ein Ort zum Wohlfühlen<br><em>in Griechenland.</em>', introP1:'Dich erwartet ein helles, großzügiges Apartment mit entspannter mediterraner Atmosphäre. Natürliches Holz, warme Neutraltöne und Akzente in Ionischem Blau schaffen eine einladende Basis für deinen Griechenlandurlaub.', introP2:'Ob Strandtag, Küstenausflug oder ein ruhiger Abend zu Hause – Grivas 7 ist für einen komfortablen Aufenthalt gemacht.',
    apartmentEyebrow:'DAS APARTMENT', apartmentTitle:'Komfort, Raum &<br><em>einfache Details.</em>', featureLivingTitle:'Offener Wohnbereich', featureLivingText:'Ein großzügiger Wohn- und Essbereich verbindet sich ganz natürlich mit der Küche.', featureKitchenTitle:'Küche & Essen', featureKitchenText:'Eine helle Küche und ein richtiger Esstisch für entspannte gemeinsame Mahlzeiten.', featureBedroomTitle:'Ruhige Schlafzimmer', featureBedroomText:'Zwei komfortable Schlafzimmer mit frischer Bettwäsche, Handtüchern und viel Stauraum.', featureBathroomTitle:'Modernes Bad', featureBathroomText:'Ein sauberes, modernes Badezimmer mit großzügiger ebenerdiger Dusche.',
    guestEyebrow:'FÜHL DICH WIE ZU HAUSE', guestTitle:'Die Dinge, die du brauchst<br><em>für einen entspannten Aufenthalt.</em>', essentialsTitle:'Das ist im Apartment vorhanden', essentialsIntro:'Dein Apartment ist mit den Dingen ausgestattet, die du für einen komfortablen Aufenthalt brauchst:', itemWashing:'Waschmaschine', itemIron:'Bügeleisen und Bügelbrett', itemBathTowels:'Badetücher', itemBeachTowels:'Strandtücher', itemToaster:'Toaster', itemCooker:'Kochfeld und Küchenutensilien', itemCoffee:'Kapsel-Kaffeemaschine', itemToilet:'Toilettenpapier', shampooNote:'Wir stellen kein Shampoo oder Duschgel bereit, weil jeder seine eigenen Vorlieben und Lieblingsprodukte hat. <strong>Bring deine Lieblingsprodukte mit — um den Rest kümmern wir uns.</strong>',
    digitalLabel:'📵 DIGITAL DETOX', digitalTitle:'Ein bisschen weniger Bildschirm.', digitalText:'Im Apartment gibt es bewusst keinen Fernseher. 😊 Sieh es als kleinen Digital Detox. Statt die Abende vor einem Bildschirm zu verbringen, genieße ein Glas Wein, einen Spaziergang am Meer, ein Abendessen in Vonitsa oder einen ruhigen Abend zu Hause.', digitalStrong:'Dein Urlaub verdient etwas weniger Bildschirm und etwas mehr Griechenland. 🇬🇷',
    guideLabel:'📍 DEIN LOKALER GUIDE', guideTitle:'Scannen, auswählen und genießen.', guideText:'Bei deiner Ankunft findest du QR-Codes für das WLAN und unseren lokalen Guide. Dort findest du Strände, Restaurants und Cafés, sehenswerte Orte, Tagesausflüge und GPS-Routen. Wähle, wie viele Minuten du fahren möchtest, suche dir ein Ziel oder einen Strand aus – und los geht’s.', guideQuote:'Dein Urlaub, ganz einfach.',
    beachLabel:'🏖️ UNSER STRAND', beachTitle:'Entspannte Tage am Meer.', beachText:'Am Strand in der Nähe des Apartments stehen allen kostenlos Sonnenliegen zur Verfügung. So kannst du einen entspannten Tag am Meer verbringen, ohne für eine Liege zu bezahlen. Badeschuhe werden empfohlen, da es in der Gegend einige Seeigel gibt.', beachShops:'Wenn du keine Badeschuhe dabei hast oder keinen Platz im Koffer hast, gibt es in der Nähe lokale Geschäfte, in denen du Badeschuhe und andere nützliche Dinge für den Urlaub findest.', packLine:'Pack deine Kleidung. Um den Rest kümmern wir uns.',
    ratesEyebrow:'AUFENTHALT & PREISE', ratesTitle:'Einfache Preise,<br><em>einfache Planung.</em>', summerMonths:'Juni · Juli · August', winterMonths:'September · Mai', perNight:'pro Nacht', rateNote:'Das Apartment hat zwei Schlafzimmer. Kontaktiere uns für Verfügbarkeit und genaue Termine.',
    tourEyebrow:'EIN BLICK INS INNERE', tourTitle:'Das Apartment<br><em>in Bewegung.</em>', tourText:'Drücke auf Play und mach einen entspannten Rundgang durch das Apartment, bevor du ankommst.', musicNote:'♪ Griechische Musik · final bearbeitete Version',
    galleryEyebrow:'EINIGE DETAILS', galleryTitle:'Sieh dich selbst<br><em>hier.</em>', galleryHint:'Tippe oder klicke auf ein Foto, um es größer zu sehen.',
    locationEyebrow:'VONITSA · IONISCHE KÜSTE', locationTitle:'Nah am<br><em>griechischen Sommer.</em>', locationText:'Grivas 7 liegt in Vonitsa, einem entspannten Ort am Ambrakischen Golf, mit einfachem Zugang zur Küste, zu Stränden, lokalen Tavernen und Tagesausflügen in der Ionischen Region.', mapsButton:'Vonitsa auf der Karte entdecken',
    contactEyebrow:'WENN DU BEREIT BIST', contactTitle:'Mach Griechenland zu<br><em>deinem nächsten Aufenthalt.</em>', contactText:'Für Verfügbarkeit, Preise oder Fragen zum Apartment kannst du uns direkt kontaktieren.', contactNote:'Für eine Anfrage sende uns bitte deine Wunschdaten und die Anzahl der Gäste.'
  },
  it: {
    navApartment:'L’appartamento', navTour:'Tour', navGallery:'Galleria', navLocation:'Posizione', navRates:'Tariffe', navAvailability:'Verifica disponibilità',
    heroLead:'Un appartamento per vacanze tranquillo e confortevole, pensato per mattine lente, lunghi pranzi e giornate rilassate sul Mar Ionio.', heroButton:'Scopri l’appartamento', heroAsk:'Chiedi per le date →',
    introTitle:'Un luogo dove sentirsi<br><em>a casa in Grecia.</em>', introP1:'Entra in un appartamento luminoso e spazioso, dall’atmosfera mediterranea rilassata. Legno naturale, tonalità neutre e tocchi di blu ionico creano una base accogliente per la tua vacanza in Grecia.', introP2:'Che tu voglia andare in spiaggia, esplorare la costa o semplicemente goderti una serata tranquilla a casa, Grivas 7 è pensato per un soggiorno confortevole.',
    apartmentEyebrow:'L’APPARTAMENTO', apartmentTitle:'Comfort, spazio &<br><em>semplici dettagli.</em>', featureLivingTitle:'Living aperto', featureLivingText:'Un’ampia zona living e pranzo si collega naturalmente alla cucina.', featureKitchenTitle:'Cucina & pranzo', featureKitchenText:'Una cucina luminosa e un vero tavolo da pranzo per pasti rilassati insieme.', featureBedroomTitle:'Camere tranquille', featureBedroomText:'Due camere da letto confortevoli con biancheria fresca, asciugamani e molto spazio per riporre le cose.', featureBathroomTitle:'Bagno moderno', featureBathroomText:'Un bagno pulito e contemporaneo con un’ampia doccia walk-in.',
    guestEyebrow:'SENTITI A CASA', guestTitle:'Le cose che ti servono<br><em>per un soggiorno facile.</em>', essentialsTitle:'Cosa trovi nell’appartamento', essentialsIntro:'L’appartamento è dotato delle cose che ti servono per un soggiorno confortevole:', itemWashing:'Lavatrice', itemIron:'Ferro e asse da stiro', itemBathTowels:'Asciugamani da bagno', itemBeachTowels:'Teli da mare', itemToaster:'Tostapane', itemCooker:'Piano cottura e accessori essenziali per la cucina', itemCoffee:'Macchina da caffè a capsule', itemToilet:'Carta igienica', shampooNote:'Non forniamo shampoo o gel doccia perché ognuno ha le proprie preferenze e i propri prodotti preferiti. <strong>Porta con te i prodotti che ami — al resto pensiamo noi.</strong>',
    digitalLabel:'📵 DIGITAL DETOX', digitalTitle:'Un po’ meno tempo davanti allo schermo.', digitalText:'Nell’appartamento non c’è la TV — volutamente. 😊 Pensala come una piccola pausa digitale. Invece di passare le serate davanti a uno schermo, goditi un bicchiere di vino, una passeggiata sul mare, una cena a Vonitsa o una serata tranquilla a casa.', digitalStrong:'La tua vacanza merita un po’ meno schermo e un po’ più Grecia. 🇬🇷',
    guideLabel:'📍 LA TUA GUIDA LOCALE', guideTitle:'Scansiona, scegli e goditi la vacanza.', guideText:'Appena arrivi troverai i QR code per il Wi-Fi e per la nostra guida locale. Troverai spiagge, ristoranti e caffè, luoghi da visitare, escursioni di un giorno e indicazioni GPS. Scegli quanti minuti vuoi guidare, seleziona una destinazione o una spiaggia e sei pronto a partire.', guideQuote:'La tua vacanza, resa semplice.',
    beachLabel:'🏖️ LA NOSTRA SPIAGGIA', beachTitle:'Giornate facili al mare.', beachText:'La spiaggia vicino all’appartamento dispone di lettini gratuiti disponibili per tutti, così puoi goderti una giornata rilassante al mare senza pagare per il lettino. Consigliamo le scarpe da scoglio perché nella zona ci sono alcuni ricci di mare.', beachShops:'Se non hai scarpe da scoglio o non hai spazio in valigia, nelle vicinanze ci sono negozi locali dove puoi trovare scarpe da acqua e altri articoli utili per la vacanza.', packLine:'Metti in valigia i tuoi vestiti. Al resto pensiamo noi.',
    ratesEyebrow:'SOGGIORNO & TARIFFE', ratesTitle:'Prezzi semplici,<br><em>pianificazione facile.</em>', summerMonths:'Giugno · Luglio · Agosto', winterMonths:'Settembre · Maggio', perNight:'a notte', rateNote:'L’appartamento dispone di due camere da letto. Contattaci per disponibilità e date precise.',
    tourEyebrow:'DAI UN’OCCHIATA', tourTitle:'L’appartamento<br><em>in movimento.</em>', tourText:'Premi play e fai una passeggiata rilassata nell’appartamento prima di arrivare.', musicNote:'♪ Musica greca · versione finale modificata',
    galleryEyebrow:'ALCUNI DETTAGLI', galleryTitle:'Immaginati<br><em>qui.</em>', galleryHint:'Tocca o clicca una foto per vederla più grande.',
    locationEyebrow:'VONITSA · COSTA IONICA', locationTitle:'Vicino alla<br><em>estate greca.</em>', locationText:'Grivas 7 si trova a Vonitsa, una cittadina rilassata sul Golfo Ambracico, con facile accesso alla costa, alle spiagge, alle taverne locali e alle escursioni nella regione ionica.', mapsButton:'Scopri Vonitsa sulla mappa',
    contactEyebrow:'QUANDO VUOI', contactTitle:'Fai della Grecia<br><em>la tua prossima vacanza.</em>', contactText:'Per disponibilità, tariffe o qualsiasi domanda sull’appartamento, contattaci direttamente.', contactNote:'Per la disponibilità, inviaci le date che preferisci e il numero degli ospiti.'
  }
};

function applyLanguage(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('grivas7-language', lang);
}

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
applyLanguage(localStorage.getItem('grivas7-language') || 'en');

// Image lightbox: every image marked data-lightbox can be opened full-size.
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxImages = [...document.querySelectorAll('img[data-lightbox]')];
let lightboxIndex = 0;

function showLightbox(index) {
  lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
  const source = lightboxImages[lightboxIndex];
  lightboxImage.src = source.currentSrc || source.src;
  lightboxImage.alt = source.alt || '';
  lightboxCaption.textContent = source.alt || '';
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  lightboxImage.src = '';
}

lightboxImages.forEach((img, index) => {
  img.classList.add('zoomable');
  img.setAttribute('tabindex', '0');
  img.addEventListener('click', () => showLightbox(index));
  img.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); showLightbox(index); }
  });
});

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev').addEventListener('click', () => showLightbox(lightboxIndex - 1));
document.querySelector('.lightbox-next').addEventListener('click', () => showLightbox(lightboxIndex + 1));
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => {
  if (!lightbox.classList.contains('open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') showLightbox(lightboxIndex - 1);
  if (event.key === 'ArrowRight') showLightbox(lightboxIndex + 1);
});
