export interface Category {
  code: string;
  slug: string;
  en: string;
  ko: string;
  tagline: string;
  count: number;
  sealRotate: string;
}

export interface ServiceItem {
  code: string;
  title: string;
  lines: string[];
  fit: string;
  billing: string;
  plate: string;
}

export const categories: Category[] = [
  { code: 'S', slug: 'search',   en: 'SEARCH',   ko: '검색',   tagline: '먼저 찾아온 사람 앞에 선다',     count: 17, sealRotate: '-4deg'   },
  { code: 'D', slug: 'display',  en: 'DISPLAY',  ko: '노출',   tagline: '아직 모르는 사람에게 닿는다',    count: 18, sealRotate: '2deg'    },
  { code: 'V', slug: 'video',    en: 'VIDEO',    ko: '영상',   tagline: '멈춰 서게 만든다',              count: 8,  sealRotate: '-1deg'   },
  { code: 'C', slug: 'commerce', en: 'COMMERCE', ko: '판매',   tagline: '장바구니까지 데려간다',          count: 9,  sealRotate: '3deg'    },
  { code: 'R', slug: 'return',   en: 'RETURN',   ko: '재방문', tagline: '한 번 온 사람을 다시 부른다',    count: 12, sealRotate: '-2deg'   },
  { code: 'B', slug: 'brand',    en: 'BRAND',    ko: '제작',   tagline: '광고가 도착할 곳을 만든다',      count: 11, sealRotate: '1deg'    },
];

export const services: Record<string, ServiceItem[]> = {
  search: [
    { code: 'S-01', title: '구글 검색광고', lines: ['사람들은 모르는 것을 검색창에 적습니다.', '그 문장이 곧 수요이고, 그 자리에 답으로 서 있는 일입니다.'], fit: '문의·상담이 필요한 모든 업종', billing: 'CPC', plate: 'SearchResult' },
    { code: 'S-02', title: '구글 다이내믹 검색광고', lines: ['검색어는 수천 가지인데 키워드를 다 적을 수는 없습니다.', '사이트를 읽어 빠진 검색어를 대신 채워 넣습니다.'], fit: '상품 수가 많은 사이트', billing: 'CPC', plate: 'SearchResult' },
    { code: 'S-03', title: '구글 P-MAX', lines: ['검색, 지도, 유튜브, 메일함까지 한 번에 걸칩니다.', '어디서 반응이 올지 모를 때 전부 열어두는 방식입니다.'], fit: '첫 집행이라 감을 잡아야 할 때', billing: 'CPC / CPM', plate: 'BannerNetwork' },
    { code: 'S-04', title: '네이버 파워링크', lines: ['검색창에 무언가를 적어 넣은 사람은', '이미 마음을 절반쯤 정한 사람입니다.', '그 순간 가장 위에 있는 것.'], fit: '국내 수요가 확실한 업종', billing: 'CPC', plate: 'SearchResult' },
    { code: 'S-05', title: '네이버 브랜드검색', lines: ['회사 이름을 직접 친 사람에게는', '목록이 아니라 대문을 보여줘야 합니다.', '검색 결과 최상단 전체를 브랜드가 씁니다.'], fit: '이름은 알려졌으나 정리가 안 된 브랜드', billing: 'CPT', plate: 'SearchResult' },
    { code: 'S-06', title: '네이버 신제품검색', lines: ['아직 이름이 없는 물건을 파는 일이 있습니다.', '카테고리를 검색한 사람에게 새 이름을 먼저 알립니다.'], fit: '신제품 출시 시점', billing: 'CPT', plate: 'SearchResult' },
    { code: 'S-07', title: '네이버 플레이스', lines: ['"근처"라고 검색하는 사람은 이미 나갈 준비를 마쳤습니다.', '지도 위에서 먼저 눈에 띄는 자리.'], fit: '매장·병원·학원 등 오프라인', billing: 'CPC', plate: 'MapPlace' },
    { code: 'S-08', title: '네이버 파워콘텐츠', lines: ['광고처럼 보이면 닫히고, 글처럼 보이면 읽힙니다.', '설명이 길어야 팔리는 것들을 위한 자리.'], fit: '고관여 상품, 설명이 필요한 서비스', billing: 'CPC', plate: 'SearchResult' },
    { code: 'S-09', title: '네이버 지식스니펫 대응', lines: ['질문 하나에 답 하나만 뜨는 자리가 있습니다.', '그 답이 되도록 문서를 다시 씁니다.'], fit: '자주 묻는 질문이 명확한 업종', billing: '프로젝트', plate: 'Document' },
    { code: 'S-10', title: '네이버 쇼핑검색광고 (검색형)', lines: ['상품명을 친 사람은 이미 지갑을 열어둔 상태입니다.', '그 목록 안에서 먼저 보이는 자리.'], fit: '스마트스토어 운영 중인 곳', billing: 'CPC', plate: 'ProductGrid' },
    { code: 'S-11', title: '다음 검색광고', lines: ['네이버와 구글만 보는 사이 비어 있는 자리가 있습니다.', '경쟁이 적은 곳에서 같은 사람을 만납니다.'], fit: '검색 경쟁이 과열된 업종', billing: 'CPC', plate: 'SearchResult' },
    { code: 'S-12', title: '애플 서치애즈', lines: ['앱을 찾는 사람은 앱스토어 검색창에 있습니다.', '설치 직전의 목록 맨 위.'], fit: 'iOS 앱 서비스', billing: 'CPC / CPI', plate: 'SearchResult' },
    { code: 'S-13', title: 'AI 검색 노출 최적화 (AEO)', lines: ['사람들이 이제 검색창 대신 챗봇에 묻습니다.', '그 답변 안에 이름이 들어가도록 문서를 정리합니다.'], fit: '검색 유입이 줄고 있는 사이트', billing: '프로젝트', plate: 'Document' },
    { code: 'S-14', title: '구조화 데이터 설계', lines: ['사람이 읽는 글과 기계가 읽는 글은 다릅니다.', '같은 페이지를 기계도 읽을 수 있게 표시해둡니다.'], fit: '상품·후기·지점 정보가 많은 사이트', billing: '프로젝트', plate: 'Document' },
    { code: 'S-15', title: 'AI 친화 콘텐츠 작성', lines: ['문장이 길고 흐리면 인용되지 않습니다.', '질문과 답이 한 덩어리로 붙은 글로 다시 씁니다.'], fit: '블로그·FAQ·상세페이지', billing: '프로젝트', plate: 'Document' },
    { code: 'S-16', title: 'E-E-A-T 신뢰 신호 정비', lines: ['누가 썼는지, 왜 믿을 만한지가 보이지 않으면', '검색 엔진도 사람도 한 번 더 망설입니다.'], fit: '의료·금융·법률 등 신뢰가 중요한 업종', billing: '프로젝트', plate: 'Document' },
    { code: 'S-17', title: '음성 검색 대응', lines: ['말로 묻는 문장은 손으로 치는 문장과 다릅니다.', '입에서 나오는 말투에 맞춰 문서를 고칩니다.'], fit: '지역·매장 검색이 많은 업종', billing: '프로젝트', plate: 'Document' },
  ],
  display: [
    { code: 'D-01', title: '구글 디스플레이 네트워크', lines: ['찾지 않은 사람에게 먼저 가는 일입니다.', '뉴스, 블로그, 앱 사이사이 200만 곳이 넘는 자리.'], fit: '아직 이름을 모르는 단계', billing: 'CPC / CPM', plate: 'BannerNetwork' },
    { code: 'D-02', title: '구글 디맨드젠', lines: ['관심 있을 법한 사람을 골라 화면 흐름 안에 끼워 넣습니다.', '광고를 보러 온 게 아닌 사람에게 자연스럽게 닿는 방식.'], fit: '이미지·영상 소재가 있는 브랜드', billing: 'CPC / CPV', plate: 'SocialFeed' },
    { code: 'D-03', title: '네이버 GFA', lines: ['네이버 안에서 검색 밖의 자리들이 있습니다.', '메인, 뉴스, 카페, 블로그 사이의 빈틈.'], fit: '네이버 체류 시간이 긴 타겟', billing: 'CPC / CPM', plate: 'SocialFeed' },
    { code: 'D-04', title: '네이버 스마트채널', lines: ['뉴스와 콘텐츠 사이 최상단 띠 하나.', '스크롤이 시작되기 전에 먼저 보이는 자리.'], fit: '짧고 굵은 인지 확보', billing: 'CPM / CPT', plate: 'ChatList' },
    { code: 'D-05', title: '네이버 밴드 소셜광고', lines: ['40대 이상이 하루에 몇 번씩 들어가는 곳입니다.', '다른 매체로는 잘 닿지 않는 나이대.'], fit: '중장년 대상 상품·서비스', billing: 'CPC / CPM', plate: 'SocialFeed' },
    { code: 'D-06', title: '네이버 밴드 네이티브 피드', lines: ['모임 글 사이에 글처럼 놓입니다.', '읽던 흐름을 끊지 않는 노출.'], fit: '지역 커뮤니티·동호회 성격', billing: 'CPC / CPM', plate: 'SocialFeed' },
    { code: 'D-07', title: '카카오 비즈보드', lines: ['하루에 몇 번씩 여는 화면이 있습니다.', '그 목록 맨 위, 대화가 시작되기 직전의 한 줄.'], fit: '짧은 시간에 넓게 알려야 할 때', billing: 'CPC / CPM', plate: 'ChatList' },
    { code: 'D-08', title: '카카오 비즈보드 CPT', lines: ['같은 자리를 시간 단위로 통째로 씁니다.', '경쟁 없이 정해진 시간 동안 혼자 서 있는 방식.'], fit: '출시일·오픈일이 정해진 캠페인', billing: 'CPT', plate: 'ChatList' },
    { code: 'D-09', title: '카카오 디스플레이', lines: ['카카오톡 밖에도 카카오의 지면이 있습니다.', '다음, 카카오스토리, 제휴 매체까지.'], fit: '카카오 이용자 재접촉', billing: 'CPC / CPM', plate: 'BannerNetwork' },
    { code: 'D-10', title: '카카오 채널 메시지', lines: ['이미 친구를 맺은 사람에게 보내는 한 통.', '광고가 아니라 알림에 가깝게 도착합니다.'], fit: '채널 친구가 쌓인 브랜드', billing: '건당', plate: 'MessageBubble' },
    { code: 'D-11', title: 'META 피드 광고', lines: ['스크롤을 내리는 손가락은 하루에 수백 미터를 갑니다.', '그 사이에 잠깐 멈추게 만드는 한 장.'], fit: '눈으로 파는 상품', billing: 'CPC / CPM', plate: 'SocialFeed' },
    { code: 'D-12', title: 'META 스토리 광고', lines: ['전체 화면을 혼자 차지하는 몇 초입니다.', '다른 것이 보이지 않는 동안 말할 수 있는 것.'], fit: '20–30대 대상', billing: 'CPM', plate: 'FullScreen' },
    { code: 'D-13', title: 'META 캐러셀 광고', lines: ['한 장으로 부족한 이야기가 있습니다.', '옆으로 넘기며 순서대로 보여주는 방식.'], fit: '상품 여러 개, 단계별 설명', billing: 'CPC / CPM', plate: 'SocialFeed' },
    { code: 'D-14', title: 'META 어드밴티지+', lines: ['누구에게 보낼지 사람이 정하지 않습니다.', '반응하는 쪽으로 알아서 흘러가게 두는 방식.'], fit: '타겟이 아직 명확하지 않을 때', billing: 'CPC / CPA', plate: 'SocialFeed' },
    { code: 'D-15', title: '틱톡 인피드', lines: ['광고인지 콘텐츠인지 구분되지 않는 자리입니다.', '재미가 없으면 곧바로 다음으로 넘어갑니다.'], fit: '10–30대, 숏폼 소재가 있는 곳', billing: 'CPC / CPV', plate: 'ShortForm' },
    { code: 'D-16', title: '틱톡 탑뷰', lines: ['앱을 여는 순간 가장 먼저 나오는 화면.', '아직 아무것도 보지 않은 눈이 처음 닿는 곳.'], fit: '대규모 인지 확보', billing: 'CPT / CPM', plate: 'FullScreen' },
    { code: 'D-17', title: '당근 지역광고', lines: ['반경 몇 킬로미터 안의 사람에게만 보입니다.', '전국이 아니라 동네에 붙이는 전단.'], fit: '매장·병원·학원·부동산', billing: 'CPC / CPM', plate: 'MapPlace' },
    { code: 'D-18', title: '당근 네이티브 광고', lines: ['중고 거래 글 사이에 글처럼 놓입니다.', '동네 사람의 글과 같은 얼굴로 나타나는 방식.'], fit: '지역 밀착 브랜드', billing: 'CPC / CPM', plate: 'SocialFeed' },
  ],
  video: [
    { code: 'V-01', title: '유튜브 인스트림', lines: ['건너뛰기 버튼이 뜨기까지 5초.', '그 안에 끝내야 하는 이야기가 있습니다.'], fit: '영상 소재가 준비된 브랜드', billing: 'CPV', plate: 'VideoPreroll' },
    { code: 'V-02', title: '유튜브 범퍼애드', lines: ['6초. 건너뛸 수 없습니다.', '문장 하나, 장면 하나만 남기는 방식.'], fit: '이름을 반복해서 각인시킬 때', billing: 'CPM', plate: 'VideoPreroll' },
    { code: 'V-03', title: '유튜브 인피드', lines: ['재생 목록 사이에 영상 하나로 놓입니다.', '누른 사람만 보기 때문에 관심이 확실합니다.'], fit: '설명이 긴 상품·서비스', billing: 'CPV', plate: 'VideoPreroll' },
    { code: 'V-04', title: '유튜브 쇼츠', lines: ['세로 화면을 위로 넘기는 손가락 사이.', '멈추지 않으면 없었던 일이 됩니다.'], fit: '짧고 강한 한 장면이 있는 곳', billing: 'CPV / CPM', plate: 'ShortForm' },
    { code: 'V-05', title: '유튜브 마스트헤드', lines: ['유튜브를 열면 가장 먼저 보이는 상단 전체.', '하루 동안 그 자리를 혼자 씁니다.'], fit: '출시·론칭 당일', billing: 'CPT', plate: 'FullScreen' },
    { code: 'V-06', title: 'META 릴스 광고', lines: ['인스타그램에서 가장 오래 머무는 화면입니다.', '소리를 켜지 않아도 이해되어야 합니다.'], fit: '20–40대, 시각적 상품', billing: 'CPV / CPM', plate: 'ShortForm' },
    { code: 'V-07', title: '카카오 동영상 광고', lines: ['카카오톡과 다음 안에서 재생되는 자리.', '메시지를 확인하는 흐름 사이에 놓입니다.'], fit: '전 연령 대상 인지 확보', billing: 'CPV', plate: 'VideoPreroll' },
    { code: 'V-08', title: '틱톡 스파크애즈', lines: ['새로 만든 광고 대신 이미 반응이 온 게시물을 그대로 씁니다.', '광고 티가 가장 적게 나는 방식.'], fit: '자체 계정에서 반응 좋은 영상이 있을 때', billing: 'CPV / CPC', plate: 'ShortForm' },
  ],
  commerce: [
    { code: 'C-01', title: '구글 쇼핑광고', lines: ['글이 아니라 물건을 보여줍니다.', '가격과 사진이 먼저 나오는 자리.'], fit: '자사몰·쇼핑몰 운영 중', billing: 'CPC', plate: 'ProductGrid' },
    { code: 'C-02', title: '네이버 쇼핑검색광고', lines: ['상품명을 친 사람 앞에 상품으로 섭니다.', '비교가 시작되는 바로 그 화면.'], fit: '스마트스토어·쇼핑 입점', billing: 'CPC', plate: 'ProductGrid' },
    { code: 'C-03', title: '카카오 상품 카탈로그', lines: ['본 상품, 담아둔 상품이 다시 떠오릅니다.', '잊고 지나간 것을 다시 눈앞에.'], fit: '상품 수가 많은 쇼핑몰', billing: 'CPC', plate: 'ProductGrid' },
    { code: 'C-04', title: 'META 동적 광고', lines: ['사람마다 다른 상품이 보입니다.', '각자 봤던 것을 각자에게.'], fit: '상품 데이터가 정리된 몰', billing: 'CPC / CPA', plate: 'ProductGrid' },
    { code: 'C-05', title: '당근 카탈로그 상품광고', lines: ['동네 사람에게 파는 물건의 목록입니다.', '가까운 곳에서 살 수 있다는 사실이 함께 붙습니다.'], fit: '지역 기반 판매', billing: 'CPC', plate: 'ProductGrid' },
    { code: 'C-06', title: '쿠팡 광고', lines: ['검색부터 결제까지가 한 화면 안에서 끝나는 곳입니다.', '망설임이 가장 짧은 자리.'], fit: '쿠팡 입점 판매자', billing: 'CPC', plate: 'ProductGrid' },
    { code: 'C-07', title: '스마트스토어 운영대행', lines: ['상품을 올리는 일과 팔리게 하는 일은 다릅니다.', '등록, 정리, 노출까지 대신 맡습니다.'], fit: '손이 부족한 판매자', billing: '프로젝트', plate: 'ProductGrid' },
    { code: 'C-08', title: '배달앱 광고', lines: ['배가 고픈 사람이 앱을 켠 순간입니다.', '목록 어디에 있느냐가 곧 주문 수입니다.'], fit: '배달 매장', billing: 'CPC / CPT', plate: 'ProductGrid' },
    { code: 'C-09', title: '상세페이지 전환 설계', lines: ['들어온 사람이 나가는 자리가 정해져 있습니다.', '그 지점을 찾아 문장을 다시 배치합니다.'], fit: '유입은 있는데 구매가 없을 때', billing: '프로젝트', plate: 'LandingPage' },
  ],
  return: [
    { code: 'R-01', title: '구글 리마케팅', lines: ['왔다가 그냥 나간 사람이 대부분입니다.', '그들이 보는 다른 화면에서 다시 만납니다.'], fit: '방문은 있는데 문의가 없을 때', billing: 'CPC / CPM', plate: 'BannerNetwork' },
    { code: 'R-02', title: '구글 고객목록 타겟팅', lines: ['이미 알고 있는 사람의 명단이 있습니다.', '같은 사람을 광고 화면에서 다시 찾습니다.'], fit: '회원 데이터가 쌓인 곳', billing: 'CPC', plate: 'BannerNetwork' },
    { code: 'R-03', title: 'META 리타겟팅', lines: ['장바구니에 담고 결제하지 않은 사람.', '그 상품이 다시 화면에 떠오릅니다.'], fit: '이탈이 많은 쇼핑몰', billing: 'CPC / CPA', plate: 'SocialFeed' },
    { code: 'R-04', title: 'META 유사 타겟', lines: ['지금 사는 사람들과 닮은 사람을 찾습니다.', '찾지 말고 닮은 쪽으로 넓히는 방식.'], fit: '기존 고객이 어느 정도 쌓였을 때', billing: 'CPC', plate: 'SocialFeed' },
    { code: 'R-05', title: '카카오 알림톡', lines: ['문자보다 열리고, 광고보다 덜 밀립니다.', '꼭 전해야 하는 것만 보내는 통로.'], fit: '예약·주문·안내가 잦은 업종', billing: '건당', plate: 'MessageBubble' },
    { code: 'R-06', title: '카카오 친구톡', lines: ['이미 친구를 맺은 사람에게만 갑니다.', '낯선 번호가 아니라 아는 이름으로 도착합니다.'], fit: '채널 친구 보유 브랜드', billing: '건당', plate: 'MessageBubble' },
    { code: 'R-07', title: 'SMS · LMS', lines: ['가장 오래된 방식이 아직도 가장 확실할 때가 있습니다.', '앱을 깔지 않은 사람에게도 닿습니다.'], fit: '중장년 고객, 긴급 안내', billing: '건당', plate: 'MessageBubble' },
    { code: 'R-08', title: '이메일 마케팅', lines: ['받은 편지함은 아직 비어 있지 않습니다.', '길게 말할 수 있는 유일한 자리.'], fit: '구독자·회원 대상', billing: '프로젝트', plate: 'MessageBubble' },
    { code: 'R-09', title: '앱 푸시 설계', lines: ['알림은 잘 쓰면 재방문이고, 잘못 쓰면 삭제입니다.', '보낼 것과 보내지 않을 것을 나눕니다.'], fit: '자체 앱 운영 중', billing: '프로젝트', plate: 'MessageBubble' },
    { code: 'R-10', title: '리드 광고', lines: ['사이트로 보내지 않고 그 자리에서 받습니다.', '이름과 번호를 남기기까지 두 번의 터치.'], fit: '상담·견적이 필요한 업종', billing: 'CPA', plate: 'LandingPage' },
    { code: 'R-11', title: '앱 설치 캠페인 (UAC)', lines: ['검색, 유튜브, 플레이스토어를 한 번에 씁니다.', '설치 버튼까지의 거리를 줄이는 방식.'], fit: '앱 서비스 초기', billing: 'CPI', plate: 'SearchResult' },
    { code: 'R-12', title: '전환 이벤트 세팅', lines: ['어디까지 왔다가 어디서 멈추는지 표시해둡니다.', '표시가 없으면 광고는 방향을 잃습니다.'], fit: '집행 시작 전 모든 곳', billing: '프로젝트', plate: 'Document' },
  ],
  brand: [
    { code: 'B-01', title: '반응형 홈페이지 제작', lines: ['광고를 눌렀는데 도착한 곳이 허술하면', '그 앞의 모든 것이 없던 일이 됩니다.'], fit: '사이트가 없거나 오래된 곳', billing: '프로젝트', plate: 'LandingPage' },
    { code: 'B-02', title: '랜딩페이지 제작', lines: ['한 가지만 말하고 한 가지만 하게 만드는 한 장입니다.', '메뉴도, 다른 길도 없습니다.'], fit: '광고 유입 전용 페이지', billing: '프로젝트', plate: 'LandingPage' },
    { code: 'B-03', title: '쇼핑몰 구축', lines: ['물건을 보여주는 일과 결제까지 가게 하는 일은 다릅니다.', '그 사이의 걸림돌을 미리 치웁니다.'], fit: '자사몰이 필요한 브랜드', billing: '프로젝트', plate: 'ProductGrid' },
    { code: 'B-04', title: '예약·상담 페이지 제작', lines: ['전화를 걸기까지가 가장 어렵습니다.', '누르면 끝나는 자리로 바꿉니다.'], fit: '병원·학원·서비스업', billing: '프로젝트', plate: 'LandingPage' },
    { code: 'B-05', title: '맞춤 기능 개발', lines: ['기성품으로 안 되는 것이 하나씩은 있습니다.', '그 하나를 위해 따로 짓습니다.'], fit: '특수한 흐름이 필요한 곳', billing: '프로젝트', plate: 'LandingPage' },
    { code: 'B-06', title: '광고 소재 영상 제작', lines: ['15초 안에 끝나는 이야기는 따로 만들어야 합니다.', '긴 영상을 잘라 쓰면 잘린 티가 납니다.'], fit: '영상 광고 집행 예정', billing: '프로젝트', plate: 'VideoPreroll' },
    { code: 'B-07', title: '브랜드 필름', lines: ['파는 이야기가 아니라 어떤 회사인지에 대한 이야기입니다.', '한 번 만들어 오래 씁니다.'], fit: '회사 소개·투자·채용', billing: '프로젝트', plate: 'VideoPreroll' },
    { code: 'B-08', title: '모션그래픽', lines: ['설명하기 어려운 것을 움직임으로 보여줍니다.', '말보다 빠른 이해가 필요할 때.'], fit: '서비스·앱·기술 설명', billing: '프로젝트', plate: 'VideoPreroll' },
    { code: 'B-09', title: '숏폼 콘텐츠 제작', lines: ['세로 화면에는 세로의 문법이 있습니다.', '가로 영상을 세워두면 어색합니다.'], fit: '릴스·쇼츠·틱톡 집행', billing: '프로젝트', plate: 'ShortForm' },
    { code: 'B-10', title: '배너·소재 디자인', lines: ['같은 자리에 같은 그림을 오래 두면 보이지 않게 됩니다.', '바꿔 끼울 것을 미리 여러 벌 만들어둡니다.'], fit: '디스플레이 광고 집행 중', billing: '프로젝트', plate: 'BannerNetwork' },
    { code: 'B-11', title: '상세페이지 디자인', lines: ['읽히지 않는 상세페이지는 없는 것과 같습니다.', '읽는 순서대로 다시 세웁니다.'], fit: '쇼핑몰·스마트스토어', billing: '프로젝트', plate: 'LandingPage' },
  ],
};
