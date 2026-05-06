export interface Artwork {
  id: number;
  artist: string;
  title: string;
  /** 중문 제목 (옵션) — 작품 페이지에 한·중 병기 */
  titleCn?: string;
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
    { id: 1,  artist: "조지강", title: "보초병",          titleCn: "哨兵",        material: "Mixed media", size: "30×50",   year: "2017", image: "artworks/1.jpg",  description: "" },
    { id: 2,  artist: "조지강", title: "족장",            titleCn: "族长",        material: "Mixed media", size: "40×40",   year: "2017", image: "artworks/2.jpg",  description: "" },
    { id: 3,  artist: "조지강", title: "가족",            titleCn: "家族",        material: "Mixed media", size: "40×40",   year: "2018", image: "artworks/3.jpg",  description: "" },
    { id: 4,  artist: "조지강", title: "청백리",          titleCn: "清官",        material: "Mixed media", size: "30×60",   year: "2018", image: "artworks/4.jpg",  description: "" },
    { id: 5,  artist: "조지강", title: "메아리",          titleCn: "回响",        material: "Mixed media", size: "50×100",  year: "2019", image: "artworks/5.jpg",  description: "" },
    { id: 6,  artist: "조지강", title: "즐거움 · 예언",    titleCn: "乐. 预言",    material: "Mixed media", size: "320×1050",year: "2018", image: "artworks/6.jpg",  description: "" },
    { id: 7,  artist: "조지강", title: "즐거움 · 영혼의 대화", titleCn: "乐. 灵的对话", material: "Mixed media", size: "320×350", year: "2018", image: "artworks/7.jpg",  description: "" },
    { id: 8,  artist: "조지강", title: "소년과 소",       titleCn: "少年与牛",     material: "Mixed media", size: "150×150", year: "2001", image: "artworks/8.jpg",  description: "" },
    { id: 9,  artist: "조지강", title: "광부",            titleCn: "矿工",        material: "Mixed media", size: "150×150", year: "2018", image: "artworks/9.jpg",  description: "" },
    { id: 10, artist: "조지강", title: "가로등",          titleCn: "路灯",        material: "Mixed media", size: "150×150", year: "2015", image: "artworks/10.jpg", description: "" },
    { id: 11, artist: "조지강", title: "목공",            titleCn: "木工",        material: "Mixed media", size: "150×150", year: "2015", image: "artworks/11.jpg", description: "" },
    { id: 12, artist: "조지강", title: "목공방",          titleCn: "木工房",      material: "Oil on canvas",size: "198×200", year: "2018", image: "artworks/12.jpg", description: "" },
    { id: 13, artist: "조지강", title: "마굿간의 사랑",   titleCn: "马厩里的爱",   material: "Mixed media", size: "150×150", year: "2016", image: "artworks/13.jpg", description: "" },
    { id: 14, artist: "조지강", title: "마굿간의 사랑",   titleCn: "马厩里的爱",   material: "Mixed media", size: "150×150", year: "2016", image: "artworks/14.jpg", description: "" },
    { id: 15, artist: "조지강", title: "사신의 축복",     titleCn: "死神的祝",     material: "Mixed media", size: "150×150", year: "2016", image: "artworks/15.jpg", description: "" },
    { id: 16, artist: "조지강", title: "밤길의 소년",     titleCn: "走夜路的少年", material: "Mixed media", size: "150×150", year: "2015", image: "artworks/16.jpg", description: "" },
    { id: 17, artist: "조지강", title: "중년남자",        titleCn: "中年男子",     material: "Mixed media", size: "40×50",   year: "2005", image: "artworks/17.jpg", description: "" },
    { id: 18, artist: "조지강", title: "고양이와 물고기", titleCn: "猫和鱼",       material: "Mixed media", size: "150×150", year: "2006", image: "artworks/18.jpg", description: "" },
    { id: 19, artist: "조지강", title: "고양이와 물고기", titleCn: "猫和鱼",       material: "Mixed media", size: "150×150", year: "2007", image: "artworks/19.jpg", description: "" },
    { id: 20, artist: "조지강", title: "고양이와 물고기", titleCn: "猫和鱼",       material: "Mixed media", size: "120×120", year: "2006", image: "artworks/20.jpg", description: "" },
    { id: 21, artist: "조지강", title: "고양이와 물고기", titleCn: "猫和鱼",       material: "Mixed media", size: "120×120", year: "2006", image: "artworks/21.jpg", description: "" },
    { id: 22, artist: "조지강", title: "해바라기",        titleCn: "向日葵",       material: "Mixed media", size: "150×150", year: "2007", image: "artworks/22.jpg", description: "" },
    { id: 23, artist: "조지강", title: "천문",            titleCn: "天问",        material: "Mixed media", size: "320×960", year: "2007", image: "artworks/23.jpg", description: "" }
  ]
};
