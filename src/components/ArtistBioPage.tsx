import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Lang = 'kr' | 'cn' | 'en';

const exhibitions = [
  { year: '1979', kr: '중국 전국 군 미술전', cn: '中国全军美术展览', en: 'China National Army Art Exhibition' },
  { year: '1980', kr: '산서성 전국 판화전', cn: '山西省全国版画展', en: 'Shanxi National Printmaking Exhibition' },
  { year: '1982', kr: '동북 3성 미술전', cn: '东北三省美术展', en: 'Northeast Three Provinces Art Exhibition' },
  { year: '1985', kr: '동북 3성 연합 미술전', cn: '东北三省联合美术展', en: 'Northeast Three Provinces Joint Art Exhibition' },
  { year: '1987', kr: '길림성 제2회 청년 미술 대전', cn: '吉林省第二节青年美术大展', en: 'Jilin Province 2nd Youth Art Exhibition' },
  { year: '1988', kr: '중국 문화부 주최 대외 대사관 순회전', cn: '中国文化部主办对外大使馆循环展', en: 'Ministry of Culture Foreign Embassy Circular Exhibition' },
  { year: '1988', kr: '동북 3성 청년 유화전', cn: '东北三省青年油画展', en: 'Northeast Three Provinces Youth Oil Painting Exhibition' },
  { year: '1994', kr: '동북 3성 미술전 / 길림성 미술전', cn: '东北三省美术展 / 吉林省美术展', en: 'Northeast Three Provinces / Jilin Province Art Exhibition' },
  { year: '1998', kr: '길림성 유화전', cn: '吉林省油画展', en: 'Jilin Province Oil Painting Exhibition' },
  { year: '2000', kr: '길림성 회화 학술전', cn: '吉林省绘画学术展', en: 'Jilin Province Painting Academic Exhibition' },
  { year: '2005', kr: '북경 상상국제미술관 예술 대전', cn: '北京上上国际美术馆艺术大展', en: 'Beijing Sunshine International Museum Art Exhibition' },
  { year: '2006', kr: '한국 서울미술관 중국 당대 미술 대전', cn: '韩国首尔美术馆中国当代美术大展', en: 'Korea Seoul Museum China Contemporary Art Exhibition' },
  { year: '2006', kr: '대만 국문기념관 미술전', cn: '台湾国文纪念馆美术展', en: 'Taiwan Guowen Memorial Hall Art Exhibition' },
  { year: '2006', kr: '북경 송장 미술 대전', cn: '北京宋庄美术大展', en: 'Beijing Songzhuang Art Exhibition' },
  { year: '2007', kr: '북경 798 홍정 갤러리 미술전', cn: '北京798红静画廊美术展', en: 'Beijing 798 Hongjing Gallery Art Exhibition' },
  { year: '2007', kr: '북경 상상국제미술관 송장 3 수묵전', cn: '北京上上国际美术馆宋庄3水墨展', en: 'Beijing Sunshine Songzhuang3 Ink Painting Exhibition' },
  { year: '2007', kr: '대만 신죽 흑양미술관 「송장과의 대화전」', cn: '台湾新竹黑羊美术馆"和宋庄对话展"', en: 'Taiwan Xinzhuheiyang Museum "dialogue with Songzhuang"' },
  { year: '2007', kr: '북경 동안마터우 당대 미술전', cn: '北京东安码头当代美术展', en: 'Beijing Donganmatou Contemporary Art Exhibition' },
  { year: '2007', kr: '한국 M.J 미술관 전시', cn: '韩国M.J美术馆展览', en: 'Korea M.J Museum Art Exhibition' },
  { year: '2008', kr: '북경 상상국제미술관 개인전', cn: '北京上上国际美术馆个人展', en: 'Beijing Sunshine International Museum Solo Exhibition' },
  { year: '2008', kr: '북경 송장 국제 예술 대전', cn: '北京宋庄国际艺术大展', en: 'Beijing Songzhuang International Art Exhibition' },
  { year: '2010', kr: '대만 양안 예술 교류전', cn: '台湾两岸艺术交流展', en: 'Taiwan Cross-Strait Art Exchange Exhibition' },
  { year: '2010', kr: '대만 신죽 흑양미술관 「송장과의 대화전」', cn: '台湾新竹黑羊美术馆"和宋庄对话展"', en: 'Taiwan Xinzhuheiyang "dialogue with Songzhuang"' },
  { year: '2011', kr: '광동성 중산 비상미술관 전시', cn: '广东省中山飞翔美术馆展览', en: 'Guangdong Zhongshan Feixiang Museum Exhibition' },
  { year: '2014', kr: '광동성 중산 청년 국제예술제 총책임자', cn: '广东省中山青年国际艺术节总策划', en: 'Director of Guangdong Zhongshan Youth International Art Festival' },
  { year: '2017', kr: '북경 상상국제미술관 조지강·조덕위 연합전', cn: '北京上上国际美术馆赵志刚，赵德威联合展览', en: 'Beijing Sunshine Zhaozhigang Zhaodewei Joint Exhibition' },
  { year: '2018', kr: '광동성 중산 비상미술관 전시', cn: '广东省中山飞翔美术馆展览', en: 'Guangdong Zhongshan Feixiang Museum Exhibition' },
];

const bio = {
  kr: {
    name: '조지강',
    nameSub: '趙志剛 / ZHAO ZHIGANG',
    role: '화가 · Visual Director',
    sectionEdu: '학력 · 출신',
    edu: ['1957년 중국 사천성(四川省) 출생', '길림성 교육대학 미술과 졸업'],
    sectionSpecial: '특별 경력',
    special: [
      '2008  베이징 올림픽 신청 홍보 작품 비주얼 총감독',
      '         · 제12회 국제 스포츠 영화제 최고 영상 대상 수상',
      '2022  베이징 동계올림픽 신청 홍보 작품 비주얼 총감독',
      '         · 영화감독 장예모(張藝謀)와 협업',
    ],
    sectionCollect: '주요 소장',
    collect: [
      '노벨문학상 작가 모옌(莫言), 작품 「呜」 소장',
      '모옌이 작가에게 직접 서예 작품 선물',
    ],
    sectionExh: '전시 경력 (1979 — 2018)',
  },
  cn: {
    name: '赵志刚',
    nameSub: '조지강 / ZHAO ZHIGANG',
    role: '画家 · Visual Director',
    sectionEdu: '学历',
    edu: ['1957年 中国四川省出生', '吉林省教育大学美术系毕业'],
    sectionSpecial: '特别经历',
    special: [
      '2008  申办北京奥运会宣传作品视觉总导演',
      '         · 获得第12届国际体育电影节最高映像大奖',
      '2022  申办北京冬奥运会宣传作品视觉总导演',
      '         · 与张艺谋导演一起合作',
    ],
    sectionCollect: '主要收藏',
    collect: [
      '"红高粱"作家 莫言 (2012年诺贝尔文学奖) 收藏作品「呜」',
      '莫言先生送给赵志刚老师书法作品',
    ],
    sectionExh: '展览 (1979 — 2018)',
  },
  en: {
    name: 'ZHAO ZHIGANG',
    nameSub: '赵志刚 / 조지강',
    role: 'Painter · Visual Director',
    sectionEdu: 'Education',
    edu: [
      '1957 — Born in Sichuan Province, China',
      'Graduated, Department of Fine Arts, Jilin Provincial University of Education',
    ],
    sectionSpecial: 'Special Experience',
    special: [
      '2008  Visual Director — Beijing Olympics Bid promotional works',
      '         · 12th International Sports Film Festival, Highest Picture Award',
      '2022  Visual Director — Beijing Winter Olympics Bid promotional works',
      '         · Collaboration with Director Zhang Yimou',
    ],
    sectionCollect: 'Notable Collections',
    collect: [
      '"Red Sorghum" Writer Mo Yan (Nobel Prize in Literature, 2012) — Collected work 「呜」',
      'Mo Yan gifted his calligraphy to Zhao Zhigang',
    ],
    sectionExh: 'Exhibitions (1979 — 2018)',
  },
} as const;

export default function ArtistBioPage() {
  const [lang, setLang] = useState<Lang>('kr');
  const t = bio[lang];

  const langButtons: { key: Lang; label: string }[] = [
    { key: 'kr', label: '한국어' },
    { key: 'cn', label: '中文' },
    { key: 'en', label: 'English' },
  ];

  return (
    <div className="w-full h-full bg-[#f5f1e6] relative overflow-hidden">
      {/* 언어 토글 — 우상단 고정 */}
      <div className="absolute top-5 right-5 z-30 flex gap-1.5 bg-white/70 backdrop-blur-sm rounded-full px-1.5 py-1 shadow-sm">
        {langButtons.map((b) => (
          <button
            key={b.key}
            onClick={() => setLang(b.key)}
            className={`text-[12px] tracking-wider px-3 py-1 rounded-full transition-all ${
              lang === b.key
                ? 'bg-[#3a3a3a] text-white'
                : 'text-[#5a4f42] hover:bg-white/80'
            }`}
            style={{ fontFamily: b.key === 'cn' ? "'Noto Serif KR', serif" : "'Noto Sans KR', sans-serif" }}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* 스크롤 영역 */}
      <div className="absolute inset-0 overflow-y-auto px-6 py-14 z-10" style={{ touchAction: 'pan-y pinch-zoom' }}>
        <div className="max-w-2xl mx-auto flex flex-col gap-7 pb-20 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col gap-7"
            >
              {/* Header */}
              <header className="text-center pt-2">
                <h1
                  className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-1 tracking-[0.2em]"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {t.name}
                </h1>
                <p
                  className="text-[12px] tracking-[0.3em] text-[#7a6e5d]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.nameSub}
                </p>
                <p
                  className="text-xs tracking-[0.3em] text-[#7a6e5d] mt-2"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  {t.role}
                </p>
                <div className="w-12 h-[1px] bg-[#7a6e5d]/40 mx-auto mt-6" />
              </header>

              <Section title={t.sectionEdu}>
                {t.edu.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </Section>

              <Section title={t.sectionSpecial}>
                {t.special.map((line, i) => (
                  <li key={i} className="whitespace-pre-wrap">{line}</li>
                ))}
              </Section>

              <Section title={t.sectionCollect}>
                {t.collect.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </Section>

              {/* 전시 경력 */}
              <section className="flex flex-col gap-2">
                <h2
                  className="text-sm tracking-[0.25em] text-[#5a4f42] font-bold"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  {t.sectionExh}
                </h2>
                <ul
                  className="text-[14px] text-[#3a3a3a] leading-[1.9] flex flex-col gap-1.5"
                  style={{ fontFamily: lang === 'en' ? "'Montserrat', sans-serif" : "'Noto Sans KR', sans-serif" }}
                >
                  {exhibitions.map((ex, i) => (
                    <li key={i} className="flex gap-3 items-baseline break-keep">
                      <span className="text-[#7a6e5d] shrink-0 w-[60px]">{ex.year}</span>
                      <span>{ex[lang]}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2
        className="text-sm tracking-[0.25em] text-[#5a4f42] font-bold"
        style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
      >
        {title}
      </h2>
      <ul
        className="text-[15px] text-[#3a3a3a] leading-[1.9] flex flex-col gap-1"
        style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
      >
        {children}
      </ul>
    </section>
  );
}
