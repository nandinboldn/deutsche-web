"use client";

import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";
import Footer from "./Footer";

const STORY_IMAGE = "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=1600&q=85";

export default function StoryPageView() {
  const { lang } = useLanguage();
  const ref = useReveal();
  const isMn = lang === "mn";

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60svh] min-h-[420px] bg-charcoal flex items-end overflow-hidden">
        <img src={STORY_IMAGE} alt="Deutsche Bäckerei" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />
        <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 lg:px-12 pb-14 pt-32">
          <div className="section-label text-brand-green mb-4">{t(lang, "storyLabel")}</div>
          <h1 className="font-serif text-display-lg text-flour leading-none">{t(lang, "storyTitle")}</h1>
        </div>
      </section>

      {/* Story content */}
      <section ref={ref} className="bg-flour py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Opening quote */}
          <blockquote className="reveal font-serif text-display-sm text-charcoal/25 italic leading-snug mb-14 border-l-2 border-brand-green pl-8">
            &ldquo;{t(lang, "storyQuote")}&rdquo;
          </blockquote>

          {/* Story sections — placeholder text that company can replace */}
          {[
            {
              num: "01",
              titleEn: "Where We Started",
              titleMn: "Эхлэл",
              bodyEn: "Deutsche Bäckerei was founded on a simple conviction: that Mongolia deserved better bread. Not imported bread. Not bread from recipes designed for industrial convenience. Bread made the right way — with quality ingredients, proper process and enough time.",
              bodyMn: "Deutsche Bäckerei нь энгийн итгэл дээр үүссэн: Монгол улс илүү сайн талхыг хүлээн авах ёстой. Импортын бус. Үйлдвэрийн тохь тохиромжийн тулд бэлтгэгдсэн бус. Зөв найрлага, зохих үйл явц, хангалттай цагаар зохих ёсоор хийсэн талх.",
            },
            {
              num: "02",
              titleEn: "Why Bread",
              titleMn: "Яагаад талх вэ",
              bodyEn: "Bread is one of the oldest foods humans make. Every culture has its version. It is simple, honest and universal. In Mongolia, bread is eaten every day — yet great bread, bread that is genuinely memorable, was difficult to find. We wanted to change that.",
              bodyMn: "Талх бол хүн төрөлхтний хамгийн эртний хоолны нэг. Аль ч соёл иргэнчлэлд өөрийн хувилбар байдаг. Энэ нь энгийн, шударга, нийтлэг зүйл. Монголд талх өдөр бүр идэгддэг — гэсэн ч үнэхээр ямаршуухан сайн талхыг олоход хэцүү байсан. Бид үүнийг өөрчлөхийг хүссэн.",
            },
            {
              num: "03",
              titleEn: "Why German Baking",
              titleMn: "Яагаад Германы жигнэлт вэ",
              bodyEn: "Germany has one of the world's great bread cultures. Hundreds of regional varieties. Centuries of technique. A deep understanding of fermentation, crust and crumb. We chose to build Deutsche Bäckerei around German baking standards not as a gimmick — but because those standards genuinely produce excellent bread.",
              bodyMn: "Германы орны дэлхийн хамгийн агуу талхны соёлын нэг байдаг. Хэдэн зуун бүс нутгийн олон янз байдал. Зуун жилийн арга техник. Исгэлт, хальс, дотрыг гүнээр ойлгох. Бид Deutsche Bäckerei-г Германы жигнэлтийн стандартаар байгуулахаар шийдсэн — энэ нь гэгч биш, харин тэдгээр стандарт үнэхээр гайхалтай талх гаргадаг тул.",
            },
            {
              num: "04",
              titleEn: "Our Bakery in Mongolia",
              titleMn: "Монгол дахь бидний үйлдвэр",
              bodyEn: "[PLACEHOLDER — Deutsche Bäckerei to provide details about founding date, bakery location, and key milestones. This text is intentionally left as a placeholder.]",
              bodyMn: "[PLACEHOLDER — Deutsche Bäckerei нь үйлдвэрийн нээлтийн огноо, байрлал болон гол үе шатуудын талаар мэдээлэл нэмнэ.]",
            },
          ].map((s, i) => (
            <div key={s.num} className={`reveal delay-${i * 100 + 100} mb-14 pb-14 border-b border-charcoal/8 last:border-0`}>
              <div className="font-serif italic text-brand-green text-sm mb-3">{s.num}</div>
              <h2 className="font-serif text-display-sm text-charcoal leading-tight mb-5">
                {isMn ? s.titleMn : s.titleEn}
              </h2>
              <p className={`text-base leading-relaxed text-charcoal/60 ${s.bodyEn.startsWith("[PLACEHOLDER") ? "italic opacity-50" : ""}`}>
                {isMn ? s.bodyMn : s.bodyEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
