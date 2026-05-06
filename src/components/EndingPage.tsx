import { motion } from 'motion/react';

/**
 * 조지강 작품집 엔딩
 * - 한지 톤 + 절제된 동양 미학
 * - 표지 박재동 그림과 톤 통일
 */
export default function EndingPage() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#f5f1e6]">
      {/* 배경 — 작가 작업 사진 (또렷하게 — 작가의 인상이 남도록) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={`${import.meta.env.BASE_URL}bio/artist_drawing.jpg`}
          alt="작가 수묵 작업"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(1.0) saturate(0.9) contrast(1.05)' }}
        />
      </motion.div>
      {/* 한지 오버레이 — 텍스트 영역만 가독성 확보 (가운데 부드럽게, 가장자리는 작가 사진 살림) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 65% at 50% 50%, rgba(245,241,230,0.78) 0%, rgba(245,241,230,0.55) 50%, rgba(245,241,230,0.2) 100%)',
        }}
      />

      {/* 컨텐츠 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center px-8"
      >
        <div className="text-center max-w-lg">
          {/* 인사 */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.7em' }}
            animate={{ opacity: 0.7, letterSpacing: '0.5em' }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-[#5a4f42] text-[14px] mb-8"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            감 사 합 니 다
          </motion.p>

          {/* 작가 이름 — 한자·한글·영문 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.2 }}
          >
            <h2
              className="text-[#1a1a1a] text-3xl md:text-4xl font-light tracking-[0.3em] mb-2"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              趙志剛
            </h2>
            <p
              className="text-[#5a4f42] text-[14px] tracking-[0.4em] mb-2"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              조 지 강
            </p>
            <p
              className="text-[#7a6e5d] text-[12px] tracking-[0.35em]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ZHAO ZHIGANG
            </p>
          </motion.div>

          {/* 가는 라인 */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '48px' }}
            transition={{ duration: 1.4, delay: 1.8 }}
            className="h-[1px] bg-[#7a6e5d]/40 mx-auto my-9"
          />

          {/* 시그니처 인용 — 모옌이 보낸 서예 의역 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.2 }}
          >
            <p
              className="text-[#3a3a3a] text-[20px] md:text-[22px] leading-[1.8] tracking-wider mb-2"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontStyle: 'italic',
              }}
            >
              "붓 끝에 산이 솟고,
              <br />
              마음 가운데 강이 흐른다"
            </p>
            <p
              className="text-[#7a6e5d] text-[13px] tracking-[0.2em] mt-3"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              筆下生山, 心中有江
            </p>
          </motion.div>

          {/* 활동 영역 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 1.2, delay: 2.8 }}
            className="text-[#5a4f42] mt-10 leading-relaxed tracking-wider"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            <p className="text-[13px] tracking-[0.2em]">
              화가 · Visual Director
            </p>
            <p className="text-[12px] tracking-[0.3em] mt-1 text-[#7a6e5d]">
              四川 1957 — 北京
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* 하단 작은 시그니처 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 3.2 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[#7a6e5d] text-[10px] tracking-[0.4em]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        END  ·  終
      </motion.p>
    </div>
  );
}
