export type Lang = "en" | "mn";

export const UI_TEXT: Record<string, Record<Lang, any>> = {
  // ── NAV ───────────────────────────────────────────────
  navProducts:      { en: "Products", mn: "Бүтээгдэхүүн" },
  navStory:         { en: "Our Story", mn: "Бидний тухай" },
  navBakery:        { en: "Our Bakery", mn: "Үйлдвэр" },
  navB2B:           { en: "For Business", mn: "Бизнес" },
  navContact:       { en: "Contact", mn: "Холбоо барих" },
  navOrderOnline:   { en: "Order Online", mn: "Захиалга өгөх" },
  navMenuOpen:      { en: "Menu", mn: "Цэс" },
  navMenuClose:     { en: "Close", mn: "Хаах" },

  // ── HERO ──────────────────────────────────────────────
  heroLabel:        { en: "German-Inspired. Made in Mongolia.", mn: "Германы уламжлал. Монголд бэлтгэсэн." },
  heroTitle1:       { en: "GOOD BREAD", mn: "ЧАНАР БОЛОН АМТ" },
  heroTitle2:       { en: "TAKES TIME.", mn: "БИДНИЙ ДАВУУ ТАЛ." },
  heroSubtitle:     { en: "Crafted with precision. Baked with care.", mn: "Ням нарийнаар бэлтгэж, анхааралтайгаар жигнэнэ." },
  heroCta1:         { en: "Explore Our Bread", mn: "Бүтээгдэхүүн үзэх" },
  heroCta2:         { en: "Our Story", mn: "Бидний тухай" },

  // ── PRODUCTS FEATURE ──────────────────────────────────
  pfLabel:          { en: "The Bread", mn: "Бидний талх" },
  pfTitle:          { en: "BREAD IS SIMPLE.\nMAKING IT GREAT\nIS NOT.", mn: "ТАЛХ ЭНГИйН.\nТҮҮНИЙГ ГАЙХАЛТАЙ\nБОЛГОХ БИШ." },
  pfBody:           { en: "Flour, water, salt, yeast, time and heat. The ingredients are simple. But great bread depends on everything that happens between them.", mn: "Гурил, ус, давс, мөөгөнцөр, цаг хугацаа, дулаан — энгийн найрлага. Гэвч гайхалтай талх эдгээрийн хооронд болдог бүх зүйлээс хамаарна." },
  pfCta:            { en: "View All Products", mn: "Бүх бүтээгдэхүүн" },

  // ── PHILOSOPHY ────────────────────────────────────────
  philLabel:        { en: "Our Philosophy", mn: "Бидний зарчим" },
  philTitle:        { en: "WE BELIEVE\nIN THE BASICS.", mn: "БИДНИЙ ИТГЭЛ\nҮНДЭС ДЭЭ." },
  p1Title:          { en: "Good Ingredients", mn: "Чанартай үрлийн бүтэц" },
  p1Body:           { en: "We start with ingredients we trust. Because no technique can turn poor ingredients into exceptional bread.", mn: "Бид итгэлтэй найрлагаас эхэлдэг. Учир нь ямар ч арга чанар муутай түүхий эдийг гайхалтай талх болгож чадахгүй." },
  p2Title:          { en: "Proper Fermentation", mn: "Зохих исгэлт" },
  p2Body:           { en: "Time transforms dough. Fermentation develops flavour, texture and character that cannot be rushed.", mn: "Цаг хугацаа зуйрыг өөрчилдөг. Исгэлт нь яаравчлан гаргаж болдоггүй амт, бүтэц, шинж чанарыг бүрдүүлдэг." },
  p3Title:          { en: "German Precision", mn: "Германы ням нарийн" },
  p3Body:           { en: "From mixing and fermentation to baking and cooling — consistency in every step is what separates good bread from great bread.", mn: "Хольж бэлтгэхээс эхлээд жигнэж хөргөх хүртэл — алхам бүрийн тогтвортой байдал нь сайн талхыг гайхалтай талхаас ялгадаг." },
  p4Title:          { en: "Freshness", mn: "Шинэлэг байдал" },
  p4Body:           { en: "Bread should taste like bread — fresh from the oven, with a crackling crust and a soft, fragrant interior.", mn: "Талх нь талхны амттай байх ёстой — зуухнаас шинэхэн, хэврэг гадаргуутай, зөөлөн, үнэртэй дотортой." },

  // ── JOURNEY ───────────────────────────────────────────
  journeyLabel:     { en: "The Journey", mn: "Аялал" },
  journeyTitle:     { en: "FROM GRAIN\nTO TABLE.", mn: "ҮРНЭЭС\nШИРЭЭ ХҮРТЭЛ." },
  j1Label:          { en: "01 — GRAIN", mn: "01 — ҮРЛИЙН БҮТЭЦ" },
  j1Title:          { en: "Mongolian Wheat", mn: "Монголын улаан буудай" },
  j1Body:           { en: "It starts on the steppe. Mongolian wheat, grown in clean air with long summer days and cold nights.", mn: "Энэ нь талд эхэлдэг. Монголын улаан буудай — цэвэр агаарт, урт зуны өдөр, хүйтэн шөнөөр ургасан." },
  j2Label:          { en: "02 — FLOUR", mn: "02 — ГУРИЛ" },
  j2Title:          { en: "Milled to Order", mn: "Нарийн нунтаглалт" },
  j2Body:           { en: "The grain is carefully milled into flour. Protein content, moisture, particle size — all carefully controlled.", mn: "Үр нь нарийн нунтагт болгон тээрэмдэгддэг. Уургийн агууламж, чийг, тоосонцрын хэмжээ — бүгдийг нарийн хянадаг." },
  j3Label:          { en: "03 — DOUGH", mn: "03 — ЗУЙР" },
  j3Title:          { en: "Mixed with Care", mn: "Анхааралтайгаар холих" },
  j3Body:           { en: "Flour meets water, salt and yeast. Mixing time, hydration and temperature define the character of what becomes bread.", mn: "Гурил ус, давс, мөөгөнцөртэй нийлдэг. Холих хугацаа, чийглэлт, температур нь талхны шинж чанарыг тодорхойлдог." },
  j4Label:          { en: "04 — FERMENTATION", mn: "04 — ИСГЭЛТ" },
  j4Title:          { en: "Time is an Ingredient", mn: "Цаг хугацаа бол найрлага" },
  j4Body:           { en: "The dough rests and rises. Fermentation is where flavour lives — it cannot be rushed without losing everything that makes bread exceptional.", mn: "Зуйр амардаг, хөөдөг. Амт нь исгэлтийн үед бий болдог — яаравчилж болохгүй, эс тэгвэл талхыг гайхалтай болгодог бүх зүйл алдагдана." },
  j5Label:          { en: "05 — THE OVEN", mn: "05 — ЗУУх" },
  j5Title:          { en: "Where Dough Becomes Bread", mn: "Зуйр талх болдог газар" },
  j5Body:           { en: "The moment of transformation. Heat, steam, crust formation, caramelisation. A few minutes that change everything.", mn: "Өөрчлөгдөх мөч. Дулаан, уур, хальс үүсэх, карамелжих. Бүх зүйлийг өөрчлөх хэдхэн минут." },

  // ── BAKERY ────────────────────────────────────────────
  bakeryLabel:      { en: "Our Bakery", mn: "Бидний үйлдвэр" },
  bakeryTitle:      { en: "PRECISION\nAT SCALE.", mn: "ХЭМЖИЛТ\nДЭЭРХ НЯМ НАРИЙН." },
  bakeryBody:       { en: "We believe modern production and great bread are not opposites. Our bakery combines professional technology, disciplined process and the knowledge of experienced bakers to deliver consistent quality — every single day.", mn: "Орчин үеийн үйлдвэрлэл ба гайхалтай талх хоёр харагдахдаа эсрэг биш. Бидний үйлдвэр мэргэжлийн технологи, тогтмол үйл явц, туршлагатай нарийн боовчдын мэдлэгийг нэгтгэн өдөр бүр тогтвортой чанар гаргадаг." },
  bakeryCtaLabel:   { en: "See Our Production", mn: "Үйлдвэр үзэх" },
  bakeryStat1Num:   { en: "8,000+", mn: "8,000+" },
  bakeryStat1Label: { en: "Units daily", mn: "Өдөрт" },
  bakeryStat2Num:   { en: "15+", mn: "15+" },
  bakeryStat2Label: { en: "Product lines", mn: "Бүтээгдэхүүний төрөл" },
  bakeryStat3Num:   { en: "6", mn: "6" },
  bakeryStat3Label: { en: "Days a week", mn: "Долоо хоногийн өдөр" },

  // ── B2B SECTION ───────────────────────────────────────
  b2bLabel:         { en: "For Business", mn: "Бизнес харилцагч" },
  b2bTitle:         { en: "GOOD BREAD\nBUILDS GOOD\nBUSINESS.", mn: "САЙН ТАЛХ\nСАЙН БИЗНЕС\nБАЙГУУЛДАГ." },
  b2bBody:          { en: "We supply cafés, restaurants, hotels, supermarkets and catering businesses across Mongolia. Consistent quality. Reliable delivery. Products your customers will come back for.", mn: "Бид Монгол даяар кафе, ресторан, зочид буудал, дэлгүүр, хоолны газарт нийлүүлдэг. Тогтвортой чанар. Найдвартай хүргэлт. Таны хэрэглэгчид дахин эргэж ирэх бүтээгдэхүүн." },
  b2bCta:           { en: "Become a Partner", mn: "Түнш болох" },
  b2bCta2:          { en: "Contact Sales", mn: "Борлуулалтын багтай холбогдох" },
  b2bPartner1:      { en: "Cafés & Coffee Shops", mn: "Кафе" },
  b2bPartner2:      { en: "Restaurants", mn: "Ресторан" },
  b2bPartner3:      { en: "Hotels", mn: "Зочид буудал" },
  b2bPartner4:      { en: "Supermarkets", mn: "Супермаркет" },
  b2bPartner5:      { en: "Burger Restaurants", mn: "Бургерний газар" },
  b2bPartner6:      { en: "Catering & Events", mn: "Кейтеринг" },

  // ── FROZEN / BAKE-OFF ─────────────────────────────────
  frozenLabel:      { en: "Bake-Off Technology", mn: "Хагас жигнэлт технологи" },
  frozenTitle:      { en: "FRESHNESS,\nON DEMAND.", mn: "ШИНЭЛЭГ БАЙДАЛ,\nШААРДСАН ҮЕДЭЭ." },
  frozenBody:       { en: "Selected Deutsche Bäckerei products are partially baked, rapidly frozen and delivered to your kitchen. You finish them in your own oven and serve them warm — fresh every time, no matter what time of day.", mn: "Deutsche Bäckerei-н сонгосон бүтээгдэхүүнийг хагас жигнэж, хурдан хөлдөөж, таны гал тогооруу хүргэдэг. Та өөрийн зуухандаа дуусгаж, дулаанаар өгдөг — өдрийн аль цагт ч шинэхэн." },
  frozenStep1:      { en: "Baked at Deutsche Bäckerei", mn: "Deutsche Bäckerei-д жигнэнэ" },
  frozenStep2:      { en: "Rapidly frozen", mn: "Хурдан хөлдөөнө" },
  frozenStep3:      { en: "Stored & delivered", mn: "Хадгалж хүргэнэ" },
  frozenStep4:      { en: "Finished in your oven", mn: "Таны зуухнаа дуусгана" },
  frozenStep5:      { en: "Served warm, fresh", mn: "Дулаан, шинэхэн өгнө" },

  // ── STORY TEASER ──────────────────────────────────────
  storyLabel:       { en: "Our Story", mn: "Бидний тухай" },
  storyTitle:       { en: "WHY WE BAKE.", mn: "ЯАГААД ЖИГНЭДЭГ ВЭ." },
  storyBody:        { en: "Deutsche Bäckerei was born from a belief that Mongolia deserved better bread. Not imitation bread. Not industrial bread. Bread made properly — with good ingredients, the right process and enough time. That belief is still everything.", mn: "Deutsche Bäckerei нь Монгол улс илүү сайн талхыг хүлээн авах ёстой гэсэн итгэл үнэмшлээс үүдэлтэй. Дуурайлган бус. Үйлдвэрийн бус. Зөв найрлага, зохих үйл явц, хангалттай цаг хугацаатайгаар зохих ёсоор хийгдсэн талх. Тэр итгэл үнэмшил одоо ч бүх зүйл хэвээрээ." },
  storyCta:         { en: "Read Our Story", mn: "Бидний түүхийг уншина уу" },
  storyQuote:       { en: "Good bread starts with good ingredients, good technique, and enough time.", mn: "Сайн талх сайн найрлага, зөв арга техник, хангалттай цагаас эхэлдэг." },

  // ── QUALITY ───────────────────────────────────────────
  qualLabel:        { en: "Quality", mn: "Чанар" },
  qualTitle:        { en: "NOTHING EXTRA.\nNOTHING TO HIDE.", mn: "НЭМЭЛТГҮЙ.\nНУУЦАЛЖ БАЙГААГҮЙ." },
  qual1:            { en: "Carefully selected ingredients", mn: "Нарийн сонгосон түүхий эд" },
  qual2:            { en: "Controlled fermentation process", mn: "Хянагдсан исгэлтийн үйл явц" },
  qual3:            { en: "Consistent baking standards", mn: "Тогтмол жигнэлтийн стандарт" },
  qual4:            { en: "Professional bakery equipment", mn: "Мэргэжлийн тоног төхөөрөмж" },
  qual5:            { en: "Trained, experienced bakers", mn: "Сургагдсан, туршлагатай нарийн боовчид" },
  qual6:            { en: "Strict hygiene & quality control", mn: "Хатуу ариун цэврийн болон чанарын хяналт" },

  // ── NEWSLETTER ────────────────────────────────────────
  nlTitle:          { en: "GOOD THINGS\nARE BAKING.", mn: "САЙХАН ЗҮЙЛС\nЖИГНЭГДЭЖ БАЙНА." },
  nlBody:           { en: "New products, bakery stories and occasional things worth knowing.", mn: "Шинэ бүтээгдэхүүн, үйлдвэрийн түүх, мэдэх үнэ цэнтэй зүйлс." },
  nlPlaceholder:    { en: "Your email address", mn: "И-мэйл хаяг" },
  nlCta:            { en: "Subscribe", mn: "Бүртгүүлэх" },

  // ── SOCIAL ────────────────────────────────────────────
  socialTitle:      { en: "SEE WHAT'S BAKING.", mn: "ЮУ ЖИГНЭГДЭЖ БАЙГААГ ҮЗ." },
  socialCta:        { en: "Follow @deutschebaeckerei.mn", mn: "@deutschebaeckerei.mn-г дага" },

  // ── FOOTER ────────────────────────────────────────────
  footerTagline:    { en: "German-inspired baking. Made in Mongolia.", mn: "Германы уламжлалт жигнэлт. Монголд бэлтгэсэн." },
  footerProducts:   { en: "Products", mn: "Бүтээгдэхүүн" },
  footerCompany:    { en: "Company", mn: "Компани" },
  footerContact:    { en: "Contact", mn: "Холбоо барих" },
  footerAllRights:  { en: "All rights reserved.", mn: "Бүх эрх хамгаалагдсан." },
  footerAddress:    { en: "Khan-Uul District, Ulaanbaatar, Mongolia", mn: "Хан-Уул дүүрэг, Улаанбаатар, Монгол" },

  // ── ORDER FLOW (legacy) ───────────────────────────────
  orderOnline:        { en: "Order Online", mn: "Онлайнаар захиалах" },
  heroEst:            { en: "Est. 1987", mn: "1987 оноос" },
  heroEyebrow:        { en: "Wholesale Catalogue 2026", mn: "Бөөний каталог 2026" },
  heroTitleLine1:     { en: "Bread", mn: "Талх" },
  heroTitleLine2:     { en: "worth stocking.", mn: "лангуунд тавих эрхтэй." },
  heroSub:            { en: "Artisan German breads baked daily. Shelf-ready cases. Reliable delivery across Ulaanbaatar.", mn: "Өдөр тутам жигнэсэн гар хийцийн германы талх. Лангуунд шууд тавих хайрцаглалт. Улаанбаатарт найдвартай хүргэлт." },
  statProducts:       { en: "Products", mn: "Бүтээгдэхүүн" },
  statDailyLoaves:    { en: "Daily loaves", mn: "Өдрийн талх" },
  statEst:            { en: "Est.", mn: "Байгуулагдсан" },
  aboutLabel:         { en: "About Us", mn: "Бидний тухай" },
  introTextPlain:     { en: "Baking since 1987, with German tradition at our core.", mn: "1987 оноос хойш германы уламжлалыг үндэс болгон жигнэж байна." },
  introTextEmphasis:  { en: "No additives, no shortcuts", mn: "Нэмэлт бодис, хялбарчилгаа байхгүй" },
  galleryLabel:       { en: "From the Bakery", mn: "Бидний жигнэх газраас" },
  productsLabel:      { en: "Product Range", mn: "Бүтээгдэхүүний төрөл" },
  specWeightLabel:    { en: "Weight", mn: "Жин" },
  specShelfLabel:     { en: "Shelf life", mn: "Хадгалах хугацаа" },
  specCaseLabel:      { en: "Case", mn: "Хайрцаг" },
  orderThis:          { en: "Order This", mn: "Үүнийг захиалах" },
  outOfStock:         { en: "Out of stock", mn: "Нөөц дууссан" },
  whyLabel:           { en: "Why Partner With Us", mn: "Бидэнтэй хамтран ажиллах нь яагаад ашигтай" },
  contactLabel:       { en: "Get In Touch", mn: "Бидэнтэй холбогдох" },
  contactTradeLabel:  { en: "Trade Sales", mn: "Худалдааны борлуулалт" },
  contactTradeValue:  { en: "Bold — Wholesale Manager", mn: "Болд — Бөөний борлуулалтын менежер" },
  contactPhoneLabel:  { en: "Phone", mn: "Утас" },
  contactEmailLabel:  { en: "Email", mn: "Имэйл" },
  contactAddressLabel:{ en: "Address", mn: "Хаяг" },
  contactAddressValue:{ en: "Khan-Uul District, Ulaanbaatar, Mongolia", mn: "Хан-Уул дүүрэг, Улаанбаатар, Монгол улс" },
  ctaText:            { en: "Ready to stock our bread? Place an order online or call us directly.", mn: "Бидний талхыг лангуундаа байрлуулахад бэлэн үү? Онлайнаар захиал эсвэл шууд утасдаарай." },
  callButtonLabel:    { en: "Call", mn: "Утасдах" },
  orderEyebrow:       { en: "Wholesale Order", mn: "Бөөний захиалга" },
  orderTitle:         { en: "Place an order", mn: "Захиалга өгөх" },
  orderErrorMsg:      { en: "Please select at least one product.", mn: "Дор хаяж нэг бүтээгдэхүүн сонгоно уу." },
  backLink:           { en: "Back", mn: "Буцах" },
  callCardLabel:      { en: "Prefer to talk?", mn: "Утсаар ярих дуртай юу?" },
  callNowBtn:         { en: "Call Now", mn: "Одоо залгах" },
  selectProductsLabel:{ en: "Select Products", mn: "Бүтээгдэхүүн сонгох" },
  yourDetailsLabel:   { en: "Your Details", mn: "Таны мэдээлэл" },
  fieldStoreLabel:    { en: "Store / Supermarket Name", mn: "Дэлгүүр / Супермаркетын нэр" },
  fieldStorePlaceholder: { en: "e.g. Nomin Supermarket, Khan Uul", mn: "ж: Номин супермаркет, Хан-Уул" },
  fieldContactNameLabel: { en: "Contact Name", mn: "Холбоо барих хүний нэр" },
  fieldContactNamePlaceholder: { en: "Your name", mn: "Таны нэр" },
  fieldPhoneLabel:    { en: "Phone Number", mn: "Утасны дугаар" },
  fieldAddressLabel:  { en: "Delivery Address", mn: "Хүргэлтийн хаяг" },
  fieldAddressPlaceholder: { en: "Store address / district", mn: "Дэлгүүрийн хаяг / дүүрэг" },
  fieldNotesLabel:    { en: "Notes", mn: "Тэмдэглэл" },
  fieldOptional:      { en: "optional", mn: "заавал биш" },
  fieldNotesPlaceholder: { en: "Delivery preferences, special requests...", mn: "Хүргэлтийн хүсэлт, тусгай шаардлага..." },
  submitOrderBtn:     { en: "Submit Order", mn: "Захиалга илгээх" },
  perCase:            { en: "per case", mn: "хайрцагт" },
  orderReceivedEyebrow: { en: "Order Received", mn: "Захиалга хүлээн авлаа" },
  confirmThankYou:    { en: "Thank you!", mn: "Баярлалаа!" },
  confirmCallNow:     { en: "Call Us Now", mn: "Одоо утасдах" },
  confirmBackHome:    { en: "Back to Home", mn: "Нүүр хуудас руу буцах" },
  stickyCallToOrder:  { en: "Call to Order", mn: "Захиалахын тулд залгах" },
};

export function t(lang: Lang, key: string): string {
  return UI_TEXT[key]?.[lang] ?? UI_TEXT[key]?.en ?? key;
}

export function itemsSelectedText(lang: Lang, n: number): string {
  if (lang === "mn") return `${n} бараа сонгогдсон`;
  return `${n} item${n === 1 ? "" : "s"} selected`;
}

export const PILLARS_KEYS = [
  { titleEn: "Reliable at scale", titleMn: "Олон тоогоор найдвартай", bodyEn: "8,000 units baked daily across 3 lines. We haven't missed a delivery window in 6 years.", bodyMn: "Өдөрт 3 шугамаар 8,000 ширхэг жигнэдэг. 6 жилийн турш хүргэлтийн хугацаа алдаагүй." },
  { titleEn: "Clean ingredients", titleMn: "Цэвэр найрлага", bodyEn: "No artificial preservatives, no hydrogenated fats. Full labelling on every SKU.", bodyMn: "Хиймэл нэмэлт, тослог бодисгүй. Бүтээгдэхүүн бүр дээр дэлгэрэнгүй шошго." },
  { titleEn: "Shelf-ready packaging", titleMn: "Лангуунд шууд тавих баглаа", bodyEn: "SRP cases, own-label capability, bespoke sizing — at no extra charge.", bodyMn: "SRP хайрцаг, өөрийн шошгоор баглах боломж, тусгай хэмжээ — нэмэлт төлбөргүй." },
  { titleEn: "Next-day delivery", titleMn: "Дараа өдрийн хүргэлт", bodyEn: "Routes covering all of Ulaanbaatar. Minimum order from just 2 cases per SKU.", bodyMn: "Улаанбаатар хотыг бүхэлд нь хамарсан маршрут. Хамгийн бага захиалга нэг төрлөөс 2 хайрцаг." },
  { titleEn: "Flexible trade terms", titleMn: "Уян хатан худалдааны нөхцөл", bodyEn: "Invoice terms for qualified accounts. Dedicated account manager from day one.", bodyMn: "Тохирсон харилцагчдад нэхэмжлэлийн нөхцөл. Эхний өдрөөс хариуцсан менежертэй." },
  { titleEn: "Award winning", titleMn: "Шагнал хүртсэн", bodyEn: "Our Seeded Sourdough holds 3 stars in the national bakery competition.", bodyMn: "Бидний Үрэлсэн исгэсэн талх улсын жигнэмэгийн уралдаанд 3 одонтой." },
];

export const GALLERY_SLIDES = [
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", alt: "Stone deck ovens", labelEn: "The Ovens", labelMn: "Зуухнууд", tagEn: "Production", tagMn: "Үйлдвэрлэл", titleEn: "Stone Deck Ovens", titleMn: "Чулуун зуух", textEn: "Traditional deck ovens at 240°C give every loaf its distinctive crust and even bake.", textMn: "240°C-т ажилладаг уламжлалт чулуун зуух нь талх бүрд өвөрмөц гадаргуу, жигд жигнэлт өгдөг." },
  { src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80", alt: "Fresh bread loaves", labelEn: "Fresh Daily", labelMn: "Өдөр бүр шинэ", tagEn: "Craft", tagMn: "Урлал", titleEn: "Baked Every Morning", titleMn: "Өглөө бүр жигнэдэг", textEn: "Production starts at 3 AM. By 6 AM the first cases are loaded for same-day delivery.", textMn: "Үйлдвэрлэл шөнийн 3 цагт эхэлдэг. 6 цагт анхны хайрцгууд тэр өдрийн хүргэлтэнд бэлэн болдог." },
  { src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80", alt: "Rye sourdough bread", labelEn: "Roggenbrot", labelMn: "Роггенброт", tagEn: "Signature", tagMn: "Онцлог", titleEn: "German Rye Bread", titleMn: "Германы хар будаатай талх", textEn: "100% rye, fermented 20 hours. Dense, moist, and rich.", textMn: "100% хар будаа, 20 цаг исгэсэн. Нягт, чийглэг, баялаг амттай." },
  { src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&q=80", alt: "Seeded bread close up", labelEn: "Seeded Sourdough", labelMn: "Үрэлсэн исгэсэн талх", tagEn: "Bestseller", tagMn: "Шилдэг борлуулалттай", titleEn: "Seeded Sourdough", titleMn: "Үрэлсэн исгэсэн талх", textEn: "Sunflower, sesame and linseed on a 48-hour live-culture base.", textMn: "48 цагийн исгэсэн үндэс дээр наран цэцгийн үр, кунжут, маалинган үр шигтгэсэн." },
  { src: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80", alt: "Bread rolls", labelEn: "Brötchen", labelMn: "Брётхен", tagEn: "Rolls", tagMn: "Хобууд", titleEn: "Brötchen Rolls", titleMn: "Брётхен хобууд", textEn: "Thin, crackling crust with a soft interior — ideal for deli counters.", textMn: "Нимгэн, шажигнам гадаргуу, зөөлөн дотортой — лангуунд тавиулахад тохиромжтой." },
  { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", alt: "Bakery interior", labelEn: "Our Bakery", labelMn: "Бидний цех", tagEn: "Ulaanbaatar", tagMn: "Улаанбаатар", titleEn: "The Bakery Floor", titleMn: "Жигнэх цех", textEn: "Modern production space. Three lines running daily, six days a week.", textMn: "Орчин үеийн үйлдвэрлэлийн талбай. Өдөр бүр 3 шугам, долоо хоногт 6 өдөр ажилладаг." },
];
