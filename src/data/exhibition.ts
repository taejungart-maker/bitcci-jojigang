export interface Artwork {
  id: number;
  artist: string;
  title: string;
  material: string;
  size: string;
  year: string;
  image: string;
  description: string;
  clipPath?: string;
  maxWidth?: string;
  maxHeight?: string;
  darkBg?: boolean;
  bgTheme?: 'green' | 'purple';
  /** 이미지 CSS filter (예: 'brightness(1.2)') */
  imageFilter?: string;
}

export interface ExhibitionData {
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  period: string;
  venue: string;
  opening: string;
  organizer: string;
  organizerContact: string;
  poster: string;
  foreword: string;
  forewordAuthor: string;
  artists: string[];
  artworks: Artwork[];
}

export const exhibition: ExhibitionData = {
  title: "조지강 작품집",
  titleEn: "ZHAO ZHIGANG Works",
  subtitle: "동양과 서양, 수묵과 유화의 사이를 거닐다",
  subtitleEn: "Between East and West, Ink and Oil",
  period: "1979 — 현재",
  venue: "온라인 작품집 (Online Portfolio)",
  opening: "—",
  organizer: "—",
  organizerContact: "",
  poster: "cover.jpg",

  foreword: `1957년 중국 사천성에서 태어나 길림성 교육대학 미술과를 졸업한 조지강(赵志刚)은
40여 년에 걸쳐 동양 수묵과 서양 유화, 사실주의와 추상의 경계를 자유롭게 넘나든 작가다.

2008년 베이징 올림픽과 2022년 베이징 동계올림픽 신청 홍보 작품의 비주얼 총감독을 맡았으며,
이 작품으로 제12회 국제 스포츠 영화제 최고 영상 대상을 수상했다.
영화감독 장예모(张艺谋)와 함께 작업한 이력이 있다.

노벨문학상 작가 모옌(莫言)은 그의 작품 〈呜〉를 소장하고 있으며,
그 인연으로 모옌이 작가에게 직접 서예 작품을 선물했다는 일화가 전해진다.

이 작품집은 작가가 1979년 중국 전국 군 미술전을 시작으로
2018년 광동성 중산 비상미술관 전시에 이르기까지 40년간 발표해 온 작품들을 엮었다.

수묵의 호흡과 유화의 두께,
동양의 비움과 서양의 채움 사이에서
시대의 풍경을 그려 온 한 작가의 궤적이 여기에 있다.`,

  forewordAuthor: "작가 소개 | 조지강 (赵志刚 / Zhao Zhigang)",

  artists: [
    "조지강"
  ],

  artworks: [
    { id: 1,  artist: "조지강", title: "작품 1",  material: "Mixed media", size: "—", year: "—", image: "artworks/1.jpg",  description: "" },
    { id: 2,  artist: "조지강", title: "작품 2",  material: "Mixed media", size: "—", year: "—", image: "artworks/2.jpg",  description: "" },
    { id: 3,  artist: "조지강", title: "작품 3",  material: "Mixed media", size: "—", year: "—", image: "artworks/3.jpg",  description: "" },
    { id: 4,  artist: "조지강", title: "작품 4",  material: "Mixed media", size: "—", year: "—", image: "artworks/4.jpg",  description: "" },
    { id: 5,  artist: "조지강", title: "작품 5",  material: "Mixed media", size: "—", year: "—", image: "artworks/5.jpg",  description: "" },
    { id: 6,  artist: "조지강", title: "작품 6",  material: "Mixed media", size: "—", year: "—", image: "artworks/6.jpg",  description: "" },
    { id: 7,  artist: "조지강", title: "작품 7",  material: "Mixed media", size: "—", year: "—", image: "artworks/7.jpg",  description: "" },
    { id: 8,  artist: "조지강", title: "작품 8",  material: "Mixed media", size: "—", year: "—", image: "artworks/8.jpg",  description: "" },
    { id: 9,  artist: "조지강", title: "작품 9",  material: "Mixed media", size: "—", year: "—", image: "artworks/9.jpg",  description: "" },
    { id: 10, artist: "조지강", title: "작품 10", material: "Mixed media", size: "—", year: "—", image: "artworks/10.jpg", description: "" },
    { id: 11, artist: "조지강", title: "작품 11", material: "Mixed media", size: "—", year: "—", image: "artworks/11.jpg", description: "" },
    { id: 12, artist: "조지강", title: "작품 12 — 장인", material: "Oil on canvas", size: "—", year: "—", image: "artworks/12.jpg", description: "" },
    { id: 13, artist: "조지강", title: "작품 13", material: "Mixed media", size: "—", year: "—", image: "artworks/13.jpg", description: "" },
    { id: 14, artist: "조지강", title: "작품 14", material: "Mixed media", size: "—", year: "—", image: "artworks/14.jpg", description: "" },
    { id: 15, artist: "조지강", title: "작품 15", material: "Mixed media", size: "—", year: "—", image: "artworks/15.jpg", description: "" },
    { id: 16, artist: "조지강", title: "작품 16", material: "Mixed media", size: "—", year: "—", image: "artworks/16.jpg", description: "" },
    { id: 17, artist: "조지강", title: "작품 17", material: "Mixed media", size: "—", year: "—", image: "artworks/17.jpg", description: "" },
    { id: 18, artist: "조지강", title: "작품 18", material: "Mixed media", size: "—", year: "—", image: "artworks/18.jpg", description: "" },
    { id: 19, artist: "조지강", title: "작품 19", material: "Mixed media", size: "—", year: "—", image: "artworks/19.jpg", description: "" },
    { id: 20, artist: "조지강", title: "작품 20", material: "Mixed media", size: "—", year: "—", image: "artworks/20.jpg", description: "" },
    { id: 21, artist: "조지강", title: "작품 21", material: "Mixed media", size: "—", year: "—", image: "artworks/21.jpg", description: "" },
    { id: 22, artist: "조지강", title: "작품 22", material: "Mixed media", size: "—", year: "—", image: "artworks/22.jpg", description: "" },
    { id: 23, artist: "조지강", title: "작품 23", material: "Mixed media", size: "—", year: "—", image: "artworks/23.jpg", description: "" }
  ]
};
