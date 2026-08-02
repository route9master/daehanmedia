export interface MediaItem {
  code: string;
  name: string;
  scale: string;
  scaleNum: string;
  scaleUnit: string;
  numeric: boolean;
  audience: string;
  purpose: string;
}

export const media: MediaItem[] = [
  { code: 'M-01', name: '네이버 통합검색', scale: '국내 검색 점유율 1위', scaleNum: '', scaleUnit: '', numeric: false, audience: '전 연령', purpose: '살 마음이 선 사람 잡기' },
  { code: 'M-02', name: '카카오톡 채팅목록', scale: '일 4,500만 도달', scaleNum: '4,500', scaleUnit: '만', numeric: true, audience: '전 연령', purpose: '짧고 굵게 알리기' },
  { code: 'M-03', name: '유튜브', scale: '월 24억 사용자', scaleNum: '24', scaleUnit: '억', numeric: true, audience: '전 연령', purpose: '브랜드 각인' },
  { code: 'M-04', name: '구글 디스플레이 네트워크', scale: '300만+ 사이트·앱', scaleNum: '300', scaleUnit: '만+', numeric: true, audience: '전 연령', purpose: '넓게 퍼뜨리기' },
  { code: 'M-05', name: '당근', scale: 'MAU 2,000만+', scaleNum: '2,000', scaleUnit: '만+', numeric: true, audience: '전 연령', purpose: '동네 손님 부르기' },
  { code: 'M-06', name: '토스', scale: 'MAU 2,677만 · 도달률 58.3%', scaleNum: '2,677', scaleUnit: '만', numeric: true, audience: '20–50대', purpose: '금융·생활 서비스' },
  { code: 'M-07', name: '인스타그램·페이스북', scale: '국내 최대 소셜 지면', scaleNum: '', scaleUnit: '', numeric: false, audience: '20–40대', purpose: '눈으로 파는 상품' },
  { code: 'M-08', name: '틱톡', scale: '숏폼 최대 지면', scaleNum: '', scaleUnit: '', numeric: false, audience: '10–30대', purpose: '빠르게 퍼지는 콘텐츠' },
  { code: 'M-09', name: '네이버 밴드', scale: '40–60대 도달 채널', scaleNum: '', scaleUnit: '', numeric: false, audience: '40–60대', purpose: '중장년 대상' },
  { code: 'M-10', name: '쿠팡', scale: '국내 최대 이커머스', scaleNum: '', scaleUnit: '', numeric: false, audience: '전 연령', purpose: '결제 직전 노출' },
];
