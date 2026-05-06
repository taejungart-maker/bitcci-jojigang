import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';

/**
 * 조지강 작품집 표지 — 수묵화 여백의 미
 * - 한지 톤 배경 (#f5f1e6)
 * - 박재동 그림 가운데 풀로 (사인 보존)
 * - 텍스트는 좌상단·우하단에 절제된 비대칭 배치
 */
export default function CoverPage() {
  return (
    <div className="w-full h-full bg-[#f5f1e6] relative overflow-hidden">
      {/* 박재동 화백 수묵 — 사인까지 풀로 보이게 */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}${exhibition.poster}`}
          alt={exhibition.title}
          className="w-auto h-auto max-w-[85%] max-h-[85%] object-contain"
          loading="eager"
          initial={{ filter: 'brightness(1.05)' }}
          animate={{ filter: 'brightness(1)' }}
          transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      {/* 좌상단 — 절제된 한자/한글 타이틀 (여백의 미) */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 1.4, ease: 'easeOut' }}
        className="absolute top-10 left-10 md:top-14 md:left-14 z-10"
      >
        <div
          className="text-[#1a1a1a] text-3xl md:text-4xl font-light tracking-[0.3em]"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          趙志剛
        </div>
        <div
          className="text-[#5a4f42] text-[14px] tracking-[0.4em] mt-2"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          조 지 강
        </div>
      </motion.div>

      {/* 우하단 — 영문명·연도 (수묵화 낙관 위치 미러링) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 2.2, ease: 'easeOut' }}
        className="absolute bottom-12 right-10 md:bottom-16 md:right-14 z-10 text-right"
      >
        <div
          className="text-[#1a1a1a] text-[15px] tracking-[0.35em] font-light"
          style={{ fontFamily: "'Montserrat', serif" }}
        >
          ZHAO ZHIGANG
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '40px' }}
          transition={{ duration: 1.2, delay: 2.6 }}
          className="h-px bg-[#5a4f42]/50 ml-auto mt-3 mb-3"
        />
        <div
          className="text-[#5a4f42] text-[12px] tracking-[0.3em]"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          1957  —
        </div>
      </motion.div>

      {/* Swipe hint — 한지 톤에 맞춰 어두운 회색 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.55, 0] }}
        transition={{ duration: 2.2, delay: 6, repeat: Infinity, repeatDelay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#5a4f42] text-[12px] tracking-[0.45em]"
        style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
      >
        넘 겨 보 기  →
      </motion.div>
    </div>
  );
}
