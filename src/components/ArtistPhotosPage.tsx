import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Lang = 'kr' | 'cn' | 'en';
const BASE = import.meta.env.BASE_URL;

const photos = [
  { id: 1,  kr: '북경 송장 예술촌',                          cn: '北京宋庄艺术村',                          en: 'Beijing Songzhuang Art Village' },
  { id: 2,  kr: '북경 송장 예술가 작업실에서',                cn: '北京宋庄艺术家工作室',                    en: 'At the Songzhuang artist studio' },
  { id: 3,  kr: '어머님과 동생',                             cn: '母亲和弟弟',                              en: 'With mother and brother' },
  { id: 4,  kr: '자택 응접실에서, 반려견들과 함께',           cn: '在客厅和养狗一起',                        en: 'At home with the dogs' },
  { id: 5,  kr: '북경 상상미술관, 이광명 관장 · 비서',         cn: '北京上上美术馆后院：李光明馆长，秘书',     en: 'Sunshine Museum Beijing — with Director Li Guangming' },
  { id: 6,  kr: '북경 상상미술관 정문, 예술제 참가',           cn: '北京上上美术馆正门参加艺术节',            en: 'Sunshine Museum Beijing — Art Festival' },
  { id: 7,  kr: '작업실에서',                                cn: '工作室',                                  en: 'In the studio' },
  { id: 8,  kr: '작업실에서',                                cn: '工作室',                                  en: 'In the studio' },
  { id: 9,  kr: '대만 전시회 참가',                          cn: '台湾参加展览',                            en: 'Exhibition in Taiwan' },
  { id: 10, kr: '이태리 예술 여행',                          cn: '意大利艺术旅游',                          en: 'Art journey in Italy' },
  { id: 11, kr: '작업실 찢어진 벽지, 찰나의 순간 촬영',       cn: '工作室破裂墙壁纸刹那瞬间拍照',            en: 'A moment captured against the cracked studio wall' },
];

const titles = {
  kr: { main: '작가의 시간', sub: 'A Painter\'s Days' },
  cn: { main: '艺术家的时光', sub: '艺术家的日常' },
  en: { main: 'A Painter\'s Days', sub: 'Moments from the Artist\'s Life' },
} as const;

export default function ArtistPhotosPage() {
  const [lang, setLang] = useState<Lang>('kr');
  const t = titles[lang];

  const langButtons: { key: Lang; label: string }[] = [
    { key: 'kr', label: '한국어' },
    { key: 'cn', label: '中文' },
    { key: 'en', label: 'English' },
  ];

  return (
    <div className="w-full h-full bg-[#f5f1e6] relative overflow-hidden">
      {/* 언어 토글 — 좌상단 (BGM과 분리) */}
      <div className="absolute top-5 left-5 z-30 flex gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-1.5 py-1 shadow-sm">
        {langButtons.map((b) => (
          <button
            key={b.key}
            onClick={() => setLang(b.key)}
            className={`text-[12px] tracking-wider px-3 py-1 rounded-full transition-all ${
              lang === b.key ? 'bg-[#3a3a3a] text-white' : 'text-[#5a4f42] hover:bg-white/80'
            }`}
            style={{ fontFamily: b.key === 'cn' ? "'Noto Serif KR', serif" : "'Noto Sans KR', sans-serif" }}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="absolute inset-0 overflow-y-auto px-6 py-14 z-10" style={{ touchAction: 'pan-y pinch-zoom' }}>
        <div className="max-w-3xl mx-auto pb-20">
          {/* Header */}
          <header className="text-center pt-2 pb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <h1
                  className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-2 tracking-[0.2em]"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {t.main}
                </h1>
                <p
                  className="text-[12px] tracking-[0.3em] text-[#7a6e5d]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.sub}
                </p>
                <div className="w-12 h-[1px] bg-[#7a6e5d]/40 mx-auto mt-5" />
              </motion.div>
            </AnimatePresence>
          </header>

          {/* 사진 그리드 — 2열 (모바일 1열) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {photos.map((p, i) => (
              <motion.figure
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * i, ease: 'easeOut' }}
                className="flex flex-col"
              >
                <div className="relative overflow-hidden rounded-sm shadow-md bg-white">
                  <img
                    src={`${BASE}personal/${p.id}.jpg`}
                    alt={p[lang]}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
                <AnimatePresence mode="wait">
                  <motion.figcaption
                    key={lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[13.5px] text-[#3a3a3a] tracking-[0.05em] mt-3 italic text-center px-2 leading-relaxed"
                    style={{ fontFamily: lang === 'en' ? "'Montserrat', serif" : "'Noto Serif KR', serif" }}
                  >
                    {p[lang]}
                  </motion.figcaption>
                </AnimatePresence>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
