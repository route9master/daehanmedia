(()=>{
const $=id=>document.getElementById(id);
const LINKS={"home": "/", "services": "/services", "process": "/process", "about": "/about", "contact": "/contact", "privacy": "/privacy"};
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const TEL='02-2088-4840',TELH='tel:0220884840';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ARROW='';
const LENS='<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="m15 15 6 6" stroke="currentColor" stroke-width="2.2"/></svg>';

/* ───── 질문 데이터 ───── */
const BIZ=[
 {id:'own',l:'개인사업자'},{id:'corp',l:'법인사업자'},{id:'fr',l:'프랜차이즈',s:'가맹점 · 본사'},{id:'pre',l:'창업 준비 중',s:'아직 오픈 전'}];
const REG_LOCAL=[{l:'매장 · 사무실 주변 동네',s:'가까운 고객이 직접 찾아오거나 부름',t:'근처',inp:1},{l:'시 · 구 단위 지역',s:'차로 움직이는 범위',t:'근처',inp:1},{l:'전국',s:'지역 상관없이',t:'전국'},{l:'해외 · 외국인 고객',s:'외국어로 찾는 고객',t:'',fx:1}];
const IND={
 svc:{l:'생활 서비스',s:'청소 · 이사 · 인테리어 · 수리 · 철거',tok:'업체',
  det:[{l:'입주 · 이사청소',k:'입주청소'},{l:'포장이사 · 용달',k:'포장이사'},{l:'인테리어 · 리모델링',k:'인테리어'},{l:'누수 · 설비 · 수리',k:'누수탐지'},{l:'철거 · 폐기물',k:'철거'},{l:'에어컨 · 가전 청소',k:'에어컨 청소'}],
  reg:REG_LOCAL,
  tg:[{l:'1인 가구 · 20~30대',a:'young'},{l:'30~40대 가정',a:'mid'},{l:'50대 이상',a:'old'},{l:'사무실 · 상가 · 건물 관리',a:'b2b'}],
  act:'견적 전화',
  hook:{call:'연락이 줄었다면, 고객이 {k를} 찾는 자리에서 잠시 보이지 않았던 것입니다.',
   comp:'같은 동네, 같은 일. 고객의 연락은 먼저 눈에 띈 곳으로 향합니다.',
   waste:'광고비가 머무는 곳과 고객이 찾는 곳이 다를 수 있습니다. 그 간격부터 좁힙니다.',
   first:'첫 광고는 크게 시작하지 않아도 됩니다. 고객이 {k를} 찾는 자리 한 곳이면 충분합니다.',
   newb:'간판을 단 날부터, {q를} 찾는 이웃에게 이름이 보이도록 준비합니다.'}},
 med:{l:'병원 · 의원 · 뷰티',s:'진료과 · 피부관리 · 에스테틱',tok:'잘하는 곳',
  det:[{l:'피부과',k:'피부과'},{l:'치과',k:'치과'},{l:'성형외과',k:'성형외과'},{l:'한의원',k:'한의원'},{l:'정형외과 · 통증',k:'도수치료'},{l:'피부관리 · 에스테틱',k:'피부관리'}],
  reg:REG_LOCAL,
  tg:[{l:'20대',a:'young'},{l:'30~40대',a:'mid'},{l:'50대 이상',a:'old'},{l:'외국인 환자',a:'foreign'}],
  act:'예약',
  hook:{call:'예약이 줄었다면, 환자가 병원을 찾는 길 위에서 잠시 보이지 않았던 것입니다.',
   comp:'진료가 같다면, 환자는 먼저 신뢰를 준 곳을 고릅니다.',
   waste:'예약은 노출의 양보다 자리의 정확함에서 나옵니다. 환자가 찾는 곳에만 머물게 합니다.',
   first:'입소문에는 시간이 걸립니다. 그사이 환자가 {k를} 찾는 자리에 먼저 서 있겠습니다.',
   newb:'개원 첫 달, 환자는 아직 병원 이름을 모릅니다. 대신 {k를} 찾습니다.'}},
 pro:{l:'전문직',s:'법률 · 세무 · 행정 · 노무',tok:'상담',
  det:[{l:'이혼 · 가사 변호사',k:'이혼 변호사'},{l:'형사 변호사',k:'형사 변호사'},{l:'세무사 · 회계',k:'세무사'},{l:'행정사',k:'행정사'},{l:'노무사',k:'노무사'},{l:'법무사',k:'법무사'}],
  reg:REG_LOCAL,
  tg:[{l:'개인 의뢰인',a:'mid'},{l:'자영업자',a:'mid'},{l:'기업 · 법인',a:'b2b'},{l:'외국인',a:'foreign'}],
  act:'상담 전화',
  hook:{call:'의뢰인은 {q를} 찾고, 처음 신뢰가 간 사무실에 연락합니다.',
   comp:'역량이 비슷하다면, 의뢰는 먼저 신뢰를 보여 준 곳으로 향합니다.',
   waste:'상담으로 이어지지 않는 노출은 정리하고, 의뢰인이 찾는 말과 자리에만 집중합니다.',
   first:'소개를 기다리는 동안에도 {k를} 찾는 의뢰인은 매일 있습니다.',
   newb:'개업 인사는 지인에게, 첫 의뢰는 고객이 찾는 자리에서.'}},
 shop:{l:'쇼핑몰 · 온라인 판매',s:'자사몰 · 스마트스토어 · 오픈마켓',tok:'추천',
  det:[{l:'여성 의류',k:'여성 의류'},{l:'남성 의류',k:'남성 의류'},{l:'화장품',k:'화장품'},{l:'식품 · 건강식품',k:'건강식품'},{l:'반려동물 용품',k:'강아지 사료'},{l:'가구 · 인테리어 소품',k:'인테리어 소품'}],
  reg:[{l:'국내 전국 배송',s:'온라인으로 전국 판매',t:'인기'},{l:'오프라인 매장도 함께',s:'매장 방문까지 유도',t:'근처',inp:1},{l:'해외 판매',s:'역직구 · 해외 고객',t:'',fx:1}],
  tg:[{l:'10대',a:'teen'},{l:'20~30대',a:'young'},{l:'40~50대',a:'mid'},{l:'60대 이상',a:'old'},{l:'기업 · 단체 구매',a:'b2b'}],
  act:'주문',
  hook:{call:'방문이 줄었다면, 고객이 {k를} 둘러보는 자리에서 잠시 보이지 않았던 것입니다.',
   comp:'같은 상품이라면, 고객은 먼저 마음이 간 곳에서 결제합니다.',
   waste:'광고비는 많이 보이는 곳보다, 살 사람이 머무는 곳에 써야 합니다.',
   first:'좋은 상세페이지도 고객이 들어와야 읽힙니다. 들어오는 길부터 만듭니다.',
   newb:'출시 첫 주, 고객은 브랜드 이름보다 {k를} 먼저 찾습니다.'}},
 food:{l:'음식점 · 카페 · 매장',s:'외식 · 카페 · 오프라인 매장',tok:'맛집',
  det:[{l:'고깃집',k:'고기'},{l:'카페 · 디저트',k:'카페',tok:'추천'},{l:'횟집 · 해산물',k:'횟집',tok:'추천'},{l:'술집 · 포차',k:'술집',tok:'추천'},{l:'브런치 · 양식',k:'브런치'},{l:'배달 전문',k:'배달',tok:'맛집'}],
  reg:[{l:'매장 주변 동네',s:'걸어서 · 차로 오는 손님',t:'근처',inp:1},{l:'관광지 · 상권 방문객',s:'놀러 와서 찾는 손님',t:'근처',inp:1},{l:'배달 가능 지역',s:'배달 앱 · 포장 주문',t:'근처',inp:1},{l:'외국인 관광객',s:'외국어로 찾는 손님',t:'',fx:1}],
  tg:[{l:'10~20대',a:'young'},{l:'직장인 점심 · 회식',a:'work'},{l:'가족 단위',a:'mid'},{l:'관광객 · 외국인',a:'foreign'}],
  act:'방문',
  hook:{call:'손님이 줄었다면, {q를} 찾는 자리에 다른 가게가 먼저 보였을 뿐입니다.',
   comp:'길 건너 가게가 붐비는 이유는 맛보다 먼저 보이는 자리에 있을지도 모릅니다.',
   waste:'아무에게나 보이는 광고 대신, 지금 근처에서 메뉴를 고르는 사람에게 보입니다.',
   first:'오늘 저녁 메뉴는 지금 휴대폰 안에서 정해지고 있습니다.',
   newb:'오픈의 관심은 금방 지나갑니다. 그다음 손님은 지도와 피드에서 옵니다.'}},
 re:{l:'부동산 · 분양',s:'분양 현장 · 민간임대 · 중개',tok:'분양',
  det:[{l:'아파트 분양',k:'아파트'},{l:'오피스텔',k:'오피스텔'},{l:'상가 · 지식산업센터',k:'지식산업센터'},{l:'민간임대',k:'민간임대',tok:'아파트'},{l:'공인중개사무소',k:'부동산',tok:'추천'}],
  reg:[{l:'현장 인근 실수요',s:'같은 생활권에서 갈아타는 고객',t:'근처',inp:1},{l:'수도권 전체',s:'서울 · 경기 · 인천',t:'수도권'},{l:'전국 투자 수요',s:'지역 상관없이',t:'전국'}],
  tg:[{l:'신혼 · 30대 실거주',a:'young'},{l:'40~50대 갈아타기',a:'mid'},{l:'투자자',a:'invest'},{l:'법인 · 사업자',a:'b2b'}],
  act:'관심고객 등록',
  hook:{call:'관심고객 등록이 줄었다면, 집을 알아보는 사람들의 시선이 다른 현장에 머물고 있다는 뜻입니다.',
   comp:'같은 생활권의 다른 현장도 같은 고객을 만나고 있습니다. 먼저 기억되는 쪽이 방문 예약을 받습니다.',
   waste:'넓게 뿌리는 광고는 일정만 길게 만듭니다. 집을 알아보는 사람에게만 보이게 합니다.',
   first:'현수막은 지나가는 사람에게, 디지털 광고는 집을 찾는 사람에게 닿습니다.',
   newb:'분양 첫 주, 관심이 높은 시기에 맞춰 고객이 지나는 모든 자리를 준비합니다.'}},
 edu:{l:'교육 · 학원',s:'입시 · 어학 · 예체능 · 성인 교육',tok:'학원',
  det:[{l:'입시 · 수학',k:'수학'},{l:'영어 · 어학',k:'영어'},{l:'예체능',k:'미술'},{l:'어린이 · 유아',k:'유아 놀이',tok:'학원'},{l:'성인 · 자격증',k:'자격증',tok:'학원'},{l:'온라인 강의',k:'인강',tok:'추천'}],
  reg:REG_LOCAL,
  tg:[{l:'초등 학부모',a:'parent'},{l:'중 · 고등 학부모',a:'parent'},{l:'대학생 · 취업 준비생',a:'young'},{l:'직장인 · 성인',a:'mid'}],
  act:'상담',
  hook:{call:'학부모는 {q를} 찾고, 처음 신뢰가 간 곳부터 상담을 예약합니다.',
   comp:'설명회보다 먼저, 학부모의 휴대폰 안에서 선택이 시작됩니다.',
   waste:'학원을 찾지 않는 사람에게 쓰는 광고비는 정리하고, 학부모가 머무는 곳에 집중합니다.',
   first:'전단지는 지나치기 쉽습니다. 학원을 찾는 학부모의 화면에 먼저 닿습니다.',
   newb:'개원 첫 학기, 첫 원생은 학부모의 검색과 추천에서 옵니다.'}},
 b2b:{l:'제조 · 유통 · 기업 간 거래',s:'제조 · 부품 · 물류 · 장비 · 정보기술',tok:'업체',
  det:[{l:'제조 · 위탁 생산',k:'위탁 생산'},{l:'부품 · 자재',k:'부품'},{l:'물류 · 운송',k:'화물 운송'},{l:'장비 · 기계',k:'산업 장비'},{l:'소프트웨어 · 정보기술',k:'솔루션',tok:'도입'},{l:'고철 · 폐기물 매입',k:'고철 매입'}],
  reg:[{l:'공장 · 사무실 인근',s:'가까운 거래처 위주',t:'근처',inp:1},{l:'전국',s:'지역 상관없이',t:'전국'},{l:'해외 바이어',s:'수출 · 해외 거래처',t:'',fx:1}],
  tg:[{l:'중소기업 대표',a:'b2b'},{l:'구매 · 자재 담당자',a:'b2b'},{l:'공공기관 · 관공서',a:'b2b'},{l:'해외 바이어',a:'foreign'}],
  act:'견적 문의',
  hook:{call:'구매 담당자는 {q를} 찾고, 먼저 믿음이 간 회사에 견적을 요청합니다.',
   comp:'거래처는 영업 전화보다, 담당자의 검색에서 먼저 바뀝니다.',
   waste:'견적과 무관한 노출은 걷어 내고, 담당자가 찾는 말에만 집중합니다.',
   first:'먼저 찾아오는 견적 문의 한 통을 만드는 일부터 시작합니다.',
   newb:'신규 거래처는 소개보다 검색에서 먼저 시작됩니다.'}}
};
const SIT=[{id:'call',l:'문의와 전화가 줄었다'},{id:'comp',l:'경쟁 업체에 고객을 빼앗기고 있다'},{id:'waste',l:'광고비에 비해 남는 것이 없다'},{id:'first',l:'광고는 처음이다'},{id:'newb',l:'막 오픈했거나 출시했다'}];
const NOW=[{id:'none',l:'아직 하고 있는 광고가 없다'},{id:'naver',l:'네이버 광고만 하고 있다'},{id:'sns',l:'블로그 · 소셜 미디어만 하고 있다'},{id:'google',l:'구글 광고를 해 봤지만 아쉬웠다'},{id:'all',l:'여러 매체를 함께 하고 있다'}];

/* 근거 문장 */
/* 매체 전체에서 답에 맞춰 점수를 매긴다. 1순위는 업종에 맞는 매체가 차지하고, 구글 상품은 반드시 4순위 안에 든다. 한 매체에서 최대 2개까지 */
const PNAME={naver_sa:'네이버 파워링크',naver_place:'네이버 플레이스',naver_shop:'네이버 쇼핑검색 광고',naver_pc:'네이버 파워콘텐츠',naver_gfa:'네이버 배너 광고 (GFA)',
 search:'구글 검색광고',pmax:'구글 실적 최대화 (P-MAX)',shopping:'구글 쇼핑광고',dg:'구글 디맨드젠',gdn:'구글 디스플레이 네트워크',rmk:'구글 리마케팅',local:'구글 지도 · 위치 광고',call:'구글 통화 광고',multi:'구글 해외 · 다국어 캠페인',
 yt:'유튜브 광고 (인스트림 · 쇼츠)',meta:'메타 광고 (인스타그램 · 페이스북)',meta_lead:'메타 리드 광고',kakao:'카카오 비즈보드',tiktok:'틱톡 피드 광고',daangn:'당근 지역광고',coupang:'쿠팡 광고',baedal:'배달앱 광고',aeo:'AI 답변 노출 (챗GPT · 제미나이)'};
const GOOGLE=['search','pmax','shopping','dg','gdn','rmk','local','call','multi'];
const MEDIA=k=>GOOGLE.includes(k)?'google':k.split('_')[0];
/* 같은 점수일 때 앞에 둘 순서 */
const ORDER=['naver_place','naver_sa','coupang','naver_shop','meta','search','pmax','baedal','daangn','yt','meta_lead','local','call','rmk','shopping','dg','kakao','tiktok','naver_pc','aeo','gdn','naver_gfa','multi'];
const BASE={
 svc:{naver_sa:10,daangn:9,naver_place:8,search:8,call:7,local:6,pmax:6,meta:5,naver_pc:4,rmk:4,yt:3,kakao:3},
 med:{naver_place:10,naver_sa:9,meta:9,search:7,naver_pc:6,yt:6,rmk:6,pmax:6,dg:5,local:5,meta_lead:5,kakao:4,tiktok:3},
 pro:{naver_sa:10,search:9,naver_pc:8,call:6,pmax:6,rmk:6,aeo:5,meta_lead:4,naver_place:4,yt:4,meta:3},
 shop:{coupang:10,naver_shop:10,meta:10,pmax:9,shopping:8,rmk:7,dg:6,yt:5,tiktok:5,kakao:5,naver_gfa:4,search:4},
 food:{naver_place:12,meta:8,daangn:7,local:7,yt:6,pmax:5,tiktok:4,kakao:3,search:3,baedal:0},
 re:{naver_sa:9,meta_lead:9,dg:8,yt:8,pmax:8,meta:7,kakao:7,rmk:7,gdn:6,naver_gfa:6,search:6},
 edu:{naver_sa:9,naver_place:8,meta:8,yt:7,daangn:6,rmk:6,search:6,kakao:5,pmax:5,dg:5,meta_lead:4},
 b2b:{search:10,naver_sa:9,rmk:7,pmax:6,naver_pc:5,aeo:5,yt:4,gdn:4,call:4,kakao:2,meta:2}};
const MOD_TG={teen:{tiktok:5,yt:4,meta:3,search:-2,naver_sa:-1},young:{meta:4,tiktok:3,yt:2},mid:{naver_sa:1,naver_place:1,kakao:1},
 old:{naver_sa:2,call:4,kakao:2,yt:1,meta:-2,tiktok:-4},b2b:{search:3,naver_sa:1,rmk:2,aeo:1,meta:-3,tiktok:-5,daangn:-5,yt:-1},
 foreign:{multi:10},parent:{naver_sa:1,naver_place:1,meta:2,yt:1,kakao:1},work:{naver_place:3,local:2,baedal:2},invest:{rmk:3,dg:2,meta:1,yt:1}};
const MOD_SIT={call:{naver_sa:2,call:2,naver_place:2,search:1},comp:{naver_sa:2,search:2,naver_place:1,rmk:1},
 waste:{rmk:2,search:1,naver_sa:1,gdn:-2,naver_gfa:-2,tiktok:-2,dg:-1},first:{naver_sa:1,search:1,naver_place:1,gdn:-2,naver_gfa:-2},
 newb:{meta:3,daangn:2,naver_place:2,yt:2,tiktok:2,dg:2,kakao:1}};
const MOD_NOW={none:{naver_sa:1,search:1,naver_place:1},naver:{naver_sa:-4,naver_place:-3,naver_shop:-3,naver_pc:-3,naver_gfa:-3,search:3,pmax:2,yt:1,meta:1},
 sns:{meta:-2,search:2,naver_sa:2,rmk:1},google:{naver_sa:2,meta:1,pmax:1},all:{rmk:2,pmax:1}};
const MOD_DET={'여성 의류':{meta:2,naver_shop:1},'남성 의류':{naver_shop:2,meta:1},'화장품':{meta:2,naver_shop:1},'건강식품':{coupang:2,naver_shop:1},'강아지 사료':{coupang:3},'인테리어 소품':{naver_shop:2,meta:1},
 '카페':{meta:2},'술집':{meta:1,tiktok:1},'횟집':{naver_place:1},
 '피부과':{meta:2},'성형외과':{meta:2},'피부관리':{meta:2,daangn:1},'치과':{naver_sa:1},'한의원':{naver_place:1},'도수치료':{naver_place:1},
 '이혼 변호사':{naver_pc:1,search:1},'형사 변호사':{search:1,call:1},'세무사':{naver_sa:1},'노무사':{naver_sa:1},
 '입주청소':{daangn:1},'포장이사':{naver_sa:1},'인테리어':{meta:1,naver_pc:1},'누수탐지':{call:2},'에어컨 청소':{daangn:1},
 '미술':{meta:1},'인강':{yt:3,meta:1},'유아 놀이':{meta:1,daangn:1}};
const MOD_BIZ={pre:{meta:1,dg:1,yt:1,daangn:1},fr:{naver_place:2,local:1,meta:1}};
function rank(){const I=A.ind,tg=ind().tg[A.tg],r=reg(),d=det(),sc={...BASE[I]};
  const ad=m=>{for(const k in m)if(k in sc||k==='multi')sc[k]=(sc[k]||0)+m[k]};
  ad(MOD_TG[tg.a]||{});ad(MOD_SIT[SIT[A.sit].id]);ad(MOD_NOW[NOW[A.now].id]);ad(MOD_BIZ[A.biz]||{});if(d)ad(MOD_DET[d.k]||{});
  if(I==='food'){if(d&&d.k==='배달')sc.baedal=(sc.baedal||0)+16;else if(/배달/.test(r.l))sc.baedal=(sc.baedal||0)+12;else delete sc.baedal}
  if(r.inp){ad({naver_place:3,daangn:3,local:2,call:1,gdn:-1});if(!('naver_place' in sc))sc.naver_place=5}
  else{['naver_place','daangn','local','baedal'].forEach(k=>delete sc[k]);ad({pmax:1,yt:1})}
  if(r.fx){sc.multi=(sc.multi||0)+12;ad({search:2,meta:1});['naver_sa','naver_place','naver_shop','naver_pc','naver_gfa','kakao','coupang'].forEach(k=>{if(k in sc)sc[k]-=6});delete sc.daangn;delete sc.baedal}
  const ix=k=>{const i=ORDER.indexOf(k);return i<0?99:i},by=(a,b)=>sc[b]-sc[a]||ix(a)-ix(b);
  const top=[],per={};
  for(const k of Object.keys(sc).sort(by)){const m=MEDIA(k);if((per[m]||0)>=2)continue;per[m]=(per[m]||0)+1;top.push(k);if(top.length===4)break}
  if(!top.some(k=>GOOGLE.includes(k))){const g=Object.keys(sc).filter(k=>GOOGLE.includes(k)).sort(by)[0]||'search';top[3]=g}
  return top}
function pwhy(p,q,k){const I=A.ind,a=ind().tg[A.tg].a,act=ind().act;
  switch(p){
  case 'naver_sa':return `국내에서 ‘${k}’${jo(k,'를')} 찾는 고객이 처음 마주하는 검색 결과 상단에 이름을 둡니다.`;
  case 'naver_place':return I==='food'?'메뉴를 고르는 사람은 지도와 리뷰를 함께 봅니다. 네이버 지도와 플레이스에서 매장을 먼저 보이게 합니다.':'네이버 지도와 지역 검색에서 위치, 리뷰, 예약을 한 화면에 보여 줍니다. 근처에서 찾는 고객이 바로 찾아옵니다.';
  case 'naver_shop':return '네이버 쇼핑 검색 결과에 상품을 먼저 보입니다. 가격과 후기를 비교하는 단계의 고객을 만납니다.';
  case 'naver_pc':return '설명이 필요한 서비스입니다. 블로그 글 형태의 광고로 고민하는 고객에게 충분한 정보를 건넵니다.';
  case 'naver_gfa':return '네이버 메인과 뉴스, 카페 화면에 배너로 노출해 오래 머무는 고객에게 이름을 넓게 알립니다.';
  case 'search':return `‘${q}’처럼 필요해서 검색하는 사람에게 구글 검색 결과 상단에서 보입니다. 클릭이 일어날 때만 비용이 발생합니다.`;
  case 'pmax':return `검색, 유튜브, 지도, 지메일, 디스플레이를 하나의 캠페인으로 묶고, ${act}${jo(act,'이')} 일어날 만한 사람 쪽으로 예산을 옮깁니다.`;
  case 'shopping':return '구글 검색 결과에 상품 사진과 가격을 함께 보여, 클릭 한 번에 상세페이지로 이어지게 합니다.';
  case 'dg':return I==='re'?'아직 검색하지 않은 실수요층에게 유튜브, 디스커버, 지메일 피드로 현장을 먼저 보여 줍니다.':'유튜브, 디스커버, 지메일 피드에 이미지와 영상으로 노출해, 아직 검색하지 않은 사람에게 먼저 다가갑니다.';
  case 'gdn':return '뉴스와 블로그, 앱 화면에 배너로 노출합니다. 적은 비용으로 이름을 넓게 알립니다.';
  case 'rmk':return a==='invest'?'투자자는 여러 현장을 오래 비교합니다. 관심을 보인 사람에게 결정의 순간까지 계속 보입니다.':({med:'상담 페이지만 보고 나간 환자에게 다시 보여, 예약으로 이어지게 합니다.',pro:'한 번 읽고 나간 의뢰인에게 다시 보여, 상담으로 이어지게 합니다.',edu:'상담만 받고 돌아간 학부모에게 등록 마감 전 다시 보입니다.',b2b:'홈페이지를 살펴본 담당자에게 견적을 결정하기까지 꾸준히 보입니다.',shop:'장바구니에 담고 나간 고객에게 그 상품을 다시 보여 줍니다.'})[I]||'한 번 방문했던 고객에게 다시 보여, 고민의 끝에서 결정을 돕습니다.';
  case 'local':return a==='work'?'점심 메뉴는 금방 정해집니다. 지금 근처에 있는 사람에게 구글 지도로 위치와 길찾기를 보여 줍니다.':'구글 지도와 검색 결과에 위치, 길찾기, 전화 버튼이 함께 보입니다. 외국인과 구글 사용자가 바로 찾아옵니다.';
  case 'call':return a==='old'?'50대 이상 고객은 홈페이지보다 전화를 먼저 겁니다. 광고를 누르면 바로 전화가 연결됩니다.':'광고를 누르면 홈페이지를 거치지 않고 바로 전화가 연결됩니다. 급하게 찾는 고객을 놓치지 않습니다.';
  case 'multi':return '외국인과 해외 고객은 주로 구글로 찾습니다. 언어와 국가별로 캠페인을 나누어 운영합니다.';
  case 'yt':return a==='teen'?'10대는 검색보다 영상에서 먼저 발견합니다. 쇼츠로 알리고, 검색과 피드에서 다시 만납니다.':a==='young'?'20~30대는 영상으로 먼저 보고, 검색으로 확인합니다. 두 길을 함께 잇습니다.':a==='parent'?'학부모는 검색하고, 후기 영상을 보고, 다시 검색합니다. 그 흐름이 끊기지 않게 잇습니다.':I==='food'?'첫 3초에 메뉴를 보여 주는 쇼츠 한 편이, 오늘 갈 곳을 정하게 합니다.':I==='re'?'현장과 단지 영상을 실수요층에게 먼저 보여 주고, 끝까지 본 사람은 다시 찾아오게 이어 둡니다.':`첫 3초 안에 ‘${k}’${jo(k,'를')} 보여 주고, 끝까지 본 사람은 다시 찾아오게 이어 둡니다.`;
  case 'meta':return a==='teen'||a==='young'?'인스타그램 피드와 릴스에서 먼저 눈에 띄고, 검색으로 확인하게 만듭니다.':I==='shop'?'관심사와 구매 성향으로 대상을 골라, 아직 검색하지 않은 고객까지 상품으로 데려옵니다.':I==='food'?'근처에 사는 사람에게 인스타그램 피드와 릴스로 메뉴와 매장 분위기를 보여 줍니다.':'인스타그램과 페이스북에서 지역, 나이, 관심사로 대상을 골라 보여 줍니다.';
  case 'meta_lead':return I==='re'?'광고 안에서 바로 관심고객 등록을 받습니다. 홈페이지를 거치지 않아 이탈이 줄어듭니다.':'광고 안에서 바로 이름과 연락처를 받아 상담 신청을 모읍니다.';
  case 'kakao':return '카카오톡 채팅 목록 상단에 노출합니다. 매일 여는 화면에서 이름을 반복해 보여 줍니다.';
  case 'tiktok':return '10~30대가 머무는 숏폼 피드에서 브랜드를 처음 만나게 합니다. 짧고 인상적인 장면 하나로 시작합니다.';
  case 'daangn':return '매장 반경 안의 이웃에게만 노출합니다. 동네에서 찾는 고객을 가까운 거리에서 만납니다.';
  case 'coupang':return '구매를 앞둔 사람이 검색하는 쿠팡 검색 결과 상단에 상품을 올립니다.';
  case 'baedal':return '주문하기 직전 고객이 보는 배달앱 가게 목록 상단에 매장을 올립니다.';
  case 'aeo':return '챗GPT, 제미나이 같은 AI에게 물었을 때 답변에 회사가 언급되도록 홈페이지 콘텐츠를 정리합니다.';}}
const BY_SIT={
 call:['연락 동선 정리','광고에서 바로 전화하고 길을 찾을 수 있도록, 전화번호와 위치를 광고와 함께 보이게 합니다.'],
 comp:['노출 자리 재설계','같은 {k} 검색에서 경쟁 업체와 나란히 설 수 있도록, 입찰과 광고 문구를 다시 짭니다.'],
 waste:['지출 점검','구매로 이어지지 않는 검색어와 지면을 걸러 내고, 남는 예산을 반응이 있는 곳으로 옮깁니다.'],
 first:['작게 시작하기','정해 둔 예산 안에서 작게 시작하고, 반응을 확인한 만큼 넓혀 갑니다.'],
 newb:['오픈 준비','리뷰와 입소문이 쌓이기 전, 오픈 첫날부터 고객이 찾을 수 있도록 준비합니다.']};
const BY_NOW={
 none:'지금 진행 중인 광고가 없다면 위 순서대로 하나씩 시작하시면 됩니다. 처음부터 모두 켤 필요는 없습니다.',
 naver:'네이버만으로는 유튜브, 인스타그램, 구글에서 같은 고객을 만나는 길이 비어 있습니다. 네이버는 이어 가고, 빈자리를 채웁니다.',
 sns:'블로그와 소셜 미디어는 쌓이는 데 시간이 걸립니다. 검색과 지도 광고는 시작한 날부터 고객 앞에 보입니다.',
 google:'구글 광고가 아쉬웠다면 매체보다 설정의 문제인 경우가 많습니다. 검색어와 문구, 입찰부터 다시 살핍니다.',
 all:'여러 매체를 함께 하고 있다면, 겹치는 지출을 정리하고 매체마다 맡을 역할을 나눕니다.'};
const BY_BIZ={own:'대표님이 따로 신경 쓰지 않으셔도 되도록, 세팅부터 운영까지 맡습니다.',corp:'광고 담당자를 따로 두지 않아도 되도록, 기획부터 운영까지 맡습니다.',fr:'지점마다 지역을 나누어 따로 운영할 수 있습니다.',pre:'오픈 전에 준비를 마쳐 두고, 오픈하는 날 바로 시작합니다.'};
const CTA_ALL='이 조합으로 상담 신청';
const CAP={call:'같은 순간, 고객의 연락은 다른 곳에 닿고 있습니다.',comp:'지금은 다른 업체가 먼저 보이는 자리입니다.',waste:'광고는 나가고 있지만, 어디에서 반응이 끊기는지 보이지 않습니다.',first:'아직 이 자리에는 당신의 이름이 없습니다.',newb:'고객은 아직 당신의 이름을 모릅니다.'};

/* ───── 상태 ───── */
const A={};let step=0,regionText='';
const steps=['biz','ind','det','reg','tg','sit','now'];
function ind(){return IND[A.ind]}
function opts(i){const k=steps[i];
  if(k==='biz')return BIZ;if(k==='ind')return Object.keys(IND).map(id=>({id,l:IND[id].l,s:IND[id].s}));
  if(k==='det')return ind().det;if(k==='reg')return ind().reg;if(k==='tg')return ind().tg;if(k==='sit')return SIT;return NOW}
const det=()=>A.det!=null?ind().det[A.det]:null;
const reg=()=>A.reg!=null?ind().reg[A.reg]:null;
function regionTok(){const r=reg();if(!r)return'';if(r.inp&&regionText)return regionText;return r.t}
function query(upto){ // upto: 몇 번째 답까지 반영할지
  if(upto<2||!A.ind)return'';const I=ind(),d=upto>=3?det():null,tok=(d&&d.tok)||I.tok;
  if(!d)return I.tok;const parts=[];if(upto>=4){const r=regionTok();if(r)parts.push(r)}parts.push(d.k,tok);return parts.join(' ')}


function jo(w,p){const c=w.charCodeAt(w.length-1),fin=c>=0xAC00&&c<=0xD7A3?(c-0xAC00)%28:(/[0-9LMNRlmnr]$/.test(w)?4:0),has=fin>0;return({'를':has?'을':'를','이':has?'이':'가','는':has?'은':'는','로':has&&fin!==8?'으로':'로'})[p]||p}
function fill(s,q,k){const a=ind().act;return s.replace(/\{([qka])(를|이|는|로)?\}/g,(_,v,p)=>{if(v==='a')return a+(p?jo(a,p):'');const w=v==='q'?q:k;return `‘${w}’`+(p?'\u2060'+jo(w,p):'')})}


/* ───── 질문 문구 ───── */
function qText(i){const k=steps[i];return({
  biz:'어떤 형태로 사업하고 계신가요?',ind:'업종이 어떻게 되시나요?',det:`${A.ind?ind().l:''} 중에서도, 어떤 일을 하시나요?`,
  reg:'주로 어느 지역 고객을 받으시나요?',tg:'가장 중요한 고객은 누구인가요?',sit:'지금 가장 고민되는 부분은 무엇인가요?',now:'지금 진행 중인 광고는 무엇인가요?'})[k]}
const CHIP={biz:'사업',tg:'고객',sit:'고민',now:'지금 광고'};

/* ───── 큰 검색어: 글자 크기를 칸에 맞춘다 ───── */
const Q=$('q');let shown='',ghost='',typing=null;
/* 글자 크기 맞춤: 검색어 + 커서까지 잰 너비가 좌우 여백 안(패딩 제외)에 들어올 때까지 줄인다. 커서 오른쪽에 커서 폭만큼 숨 쉴 자리 */
function fit(){if(!Q)return;const max=innerWidth<=980?64:132,min=innerWidth<=980?26:44,cs=getComputedStyle(Q),room=Q.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight),rg=document.createRange();let f=max;Q.style.fontSize=f+'px';
  const w=()=>{rg.selectNodeContents(Q);return rg.getBoundingClientRect().width+f*.06};
  while(f>min&&w()>room){f-=2;Q.style.fontSize=f+'px'}}
function paint(){let h;
  if(ghost&&ghost!==shown){
    if(ghost.startsWith(shown))h=esc(shown)+'<span class="caret"></span><span class="gh">'+esc(ghost.slice(shown.length))+'</span>';
    else if(shown&&ghost.endsWith(shown))h='<span class="gh">'+esc(ghost.slice(0,ghost.length-shown.length))+'</span>'+esc(shown)+'<span class="caret"></span>';
    else h='<span class="gh">'+esc(ghost)+'</span><span class="caret"></span>';
  }else h=shown?esc(shown)+'<span class="caret"></span>':'<span class="caret"></span><span class="ph">검색어</span>';
  Q.innerHTML=h;fit()}
function typeTo(t){if(typing)clearTimeout(typing);ghost='';
  if(RM){shown=t;paint();return}
  let common=0;while(common<shown.length&&common<t.length&&shown[common]===t[common])common++;
  let del=true;const tick=()=>{if(del&&shown.length>common){shown=shown.slice(0,-1)}else{del=false;if(shown.length<t.length)shown=t.slice(0,shown.length+1);else{typing=null;return}}
    paint();typing=setTimeout(tick,del?16:48)};tick()}

/* ───── 화면 그리기 ───── */
function chips(){const c=[];
  if(A.biz)c.push(['사업',BIZ.find(b=>b.id===A.biz).l]);
  if(A.tg!=null&&A.ind)c.push(['고객',ind().tg[A.tg].l]);
  if(A.sit!=null)c.push(['고민',SIT[A.sit].l]);
  if(A.now!=null)c.push(['지금 광고',NOW[A.now].l]);
  $('chips').innerHTML=c.map(([a,b])=>`<span class="chip"><small>${a}</small>${esc(b)}</span>`).join('')}
let act=0;
function render(){const os=opts(step),k=steps[step],hasInp=k==='reg'&&os.some(o=>o.inp);act=0;
  $('ask').innerHTML=`<span class="n"><b>${String(step+1).padStart(2,'0')}</b> / 07</span><span>${esc(qText(step))}</span>`;
  $('drop').innerHTML=`<div class="fade">${hasInp?`<label class="reg"><span>지역명 직접 입력</span><input id="regIn" maxlength="10" placeholder="예: 강서구 (비워 두면 '근처')" value="${esc(regionText)}" autocomplete="off"></label>`:''}
   ${os.map((o,i)=>`<button class="sug${i===0?' on':''}" data-i="${i}" role="option">${LENS}<span class="l">${esc(o.l)}</span><span class="s">${o.s?esc(o.s):''}<span class="k">${i+1}</span></span></button>`).join('')}</div>`;
  $('drop').querySelectorAll('.sug').forEach(b=>{const i=+b.dataset.i;b.onclick=()=>pick(i);b.onmouseenter=()=>hl(i)});
  $('back').disabled=!step;
  const ri=$('regIn');if(ri){ri.oninput=()=>{regionText=ri.value.replace(/[^\p{L}\p{N} ·-]/gu,'').trim().slice(0,10);preview(act)};ri.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();pick(act)}else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();move(e.key==='ArrowDown'?1:-1)}}}
  preview(0)}
function hl(i){act=i;$('drop').querySelectorAll('.sug').forEach(b=>b.classList.toggle('on',+b.dataset.i===i));preview(i)}
function move(d){const n=opts(step).length;hl((act+d+n)%n)}
function preview(i){if(typing)return;const k=steps[step];
  if(k==='ind'||k==='det'||k==='reg'){const keep=A[k];A[k]=k==='ind'?Object.keys(IND)[i]:i;
    if(k==='ind'){A.det=null}ghost=query(step+1);A[k]=keep;if(k==='ind'&&keep===undefined)delete A[k]}else ghost='';
  paint()}

let busy=false;
function pick(i){if(busy||step>=7)return;busy=true;const k=steps[step];
  const b=$('drop').querySelector(`.sug[data-i="${i}"]`);if(b)b.classList.add('pick');
  if(k==='ind'&&A.ind!==Object.keys(IND)[i]){A.det=A.reg=A.tg=null;regionText=''}
  A[k]=k==='biz'?BIZ[i].id:k==='ind'?Object.keys(IND)[i]:i;
  step++;ghost='';typeTo(query(step));chips();
  setTimeout(()=>{busy=false;if(step>=7)finish();else render()},RM?40:380)}
function back(){if(busy||!step)return;step--;const k=steps[step];delete A[k];if(typing)clearTimeout(typing);typing=null;shown=query(step);chips();render()}

/* ───── 결과: 검색 결과 페이지 ───── */
function finish(){const I=ind(),q=query(7),k=det().k,sit=SIT[A.sit].id,tg=I.tg[A.tg],now=NOW[A.now].id;
  $('drop').innerHTML='';const en=$('enter');en.classList.add('hit');
  const mix=rank().map(p=>[PNAME[p],pwhy(p,q,k)]);const tac=(sit==='call'&&A.ind==='shop')?['상품 먼저 보이기','검색 결과에 상품 사진과 가격을 함께 보여, 보고 바로 들어오게 합니다.']:BY_SIT[sit];
  const why=[BY_NOW[now],`${tac[0]}: ${fill(tac[1],q,k)}`,BY_BIZ[A.biz],'전략 수립부터 세팅, 운영, 최적화까지 대한미디어그룹이 직접 집행합니다.'];
  const ctaT=CTA_ALL;
  window.__lastDiag={q,ind:I.l,tg:tg.l,sit:SIT[A.sit].l,now:NOW[A.now].l,biz:BIZ.find(b=>b.id===A.biz).l,top:mix.map(m=>m[0])};
  setTimeout(()=>{en.classList.remove('hit');
    $('serp').innerHTML=`<div class="sbar"><span class="q2">${esc(q)}</span><button id="again">↺ 다시 진단</button></div>
    <p class="stat">고객 <b>${esc(tg.l)}</b> · ${esc(I.l)} · ${esc(SIT[A.sit].l)}</p>
    <div class="grid"><div>
      <h2 class="hook">${esc(fill(I.hook[sit],q,k))}</h2>
      <p class="hsub">‘${esc(q)}’${jo(q,'를')} 찾는 고객이 지나는 자리마다, 당신의 이름이 보이도록 설계합니다.</p>
      <div class="cta"><a class="plate" href="${contactLink()}">${ARROW}${esc(ctaT)}</a><a class="tel" href="${TELH}">전화 상담 ${TEL}</a></div>
      <div class="res">
        <div class="ad me"><span class="tg"><i>광고</i>당신의 브랜드</span><span class="tt">${esc(q)} · 지금 ${esc(I.act)} 가능</span><p class="ds">이 자리가 비어 있는 동안, 고객의 선택은 다른 곳으로 향합니다.</p></div>
        <div class="ad them"><span class="tg"><i>광고</i>다른 업체</span><span class="tt">같은 검색어, 다음 자리</span><p class="ds">${esc(CAP[sit])}</p></div>
        <div class="ad them"><span class="tg"><i>광고</i>다른 업체</span><span class="tt">같은 검색어, 그다음 자리</span></div>
      </div>
      <p class="cap">이 자리에, 당신의 이름을 세웁니다.</p>
    </div>
    <aside class="kp"><h2>이 순서를 권합니다.</h2>
      <p class="qh">고르신 답을 바탕으로 매체마다 우선순위를 매겼습니다. 위에서부터 차례로 시작하시면 됩니다.</p>
      <ol class="mix">${mix.map(m=>`<li><div><b>${esc(m[0])}</b><span>${esc(m[1])}</span></div></li>`).join('')}</ol>
      <h4>운영 포인트</h4><ul class="why">${why.map(w=>`<li>${esc(w)}</li>`).join('')}</ul>
    </aside></div>`;
    document.body.classList.add('done');scrollTo(0,0);$('again').onclick=reset;
  },RM?0:450)}
function reset(){for(const k in A)delete A[k];step=0;regionText='';shown='';ghost='';
  document.body.classList.remove('done');$('serp').innerHTML='';chips();render();scrollTo(0,0)}

addEventListener('keydown',e=>{if(route!=='home'||step>=7||e.metaKey||e.ctrlKey||e.altKey)return;const ae=document.activeElement;if(ae&&(ae.id==='regIn'||/^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)))return;if(scrollY>innerHeight*.6)return;
  const n=+e.key;
  if(n>=1&&n<=opts(step).length){e.preventDefault();pick(n-1)}
  else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();move(e.key==='ArrowDown'?1:-1)}
  else if(e.key==='Enter'&&!(ae&&(ae.classList.contains('sug')||ae.tagName==='A'||ae.tagName==='BUTTON'))){e.preventDefault();pick(act)}
  else if(e.key==='Backspace'){e.preventDefault();back()}});
addEventListener('resize',fit);
window.__diag={pick:i=>pick(i),region:t=>{regionText=t;const r=$('regIn');if(r)r.value=t;preview(act)},hover:i=>hl(i),state:()=>({step,A:{...A},q:query(step)})};
if($('back'))$('back').onclick=back;
document.fonts&&document.fonts.ready.then(fit);
if($('search')){chips();render();}

/* ───── 페이지 이동 ───── */
let route=document.body.dataset.page||'home';
function contactLink(){const d=window.__lastDiag;let u=LINKS.contact;if(d){try{u+='?d='+encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(d)))))}catch(_){}}return u}
function go(){document.querySelectorAll('.nav a.t').forEach(a=>a.classList.toggle('on',a.dataset.r===route));
  if(route==='home'){const m=location.hash.match(/^#\/(services|process|about|contact|privacy)(?:\/([a-z]+))?/);if(m){location.replace(LINKS[m[1]]+(m[2]?'#'+m[2]:''));return}fit()}
  if(route==='services'){const sub=location.hash.slice(1);document.querySelectorAll('#tabs a').forEach(a=>a.classList.toggle('on',a.dataset.c===sub))}
  if(route==='contact')attachDiag()}
addEventListener('hashchange',go);
const menu=o=>{document.body.classList.toggle('mopen',o);$('menu').setAttribute('aria-expanded',o)};
$('menu').onclick=()=>menu(!document.body.classList.contains('mopen'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>menu(false)));
/* 덮개(body::after)를 누르면 클릭 대상이 body가 된다 */
document.body.addEventListener('click',e=>{if(e.target===document.body&&document.body.classList.contains('mopen'))menu(false)});
addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('mopen')){menu(false);$('menu').focus()}});
document.querySelectorAll('[data-go="diag"]').forEach(a=>a.addEventListener('click',e=>{if(route==='home'){e.preventDefault();scrollTo({top:0,behavior:RM?'auto':'smooth'})}}));
/* 광고 페이지: 스크롤 위치에 따라 탭 표시 */
addEventListener('scroll',()=>{if(route!=='services')return;let cur='';document.querySelectorAll('.svc-cat').forEach(sec=>{if(sec.getBoundingClientRect().top<200)cur=sec.id});
  document.querySelectorAll('#tabs a').forEach(a=>a.classList.toggle('on',a.dataset.c===cur))},{passive:true});

/* ───── 상담 신청: 진단 결과 첨부 + 메일 앱으로 보내기 ───── */
function getDiag(){if(window.__lastDiag)return window.__lastDiag;try{const v=new URLSearchParams(location.search).get('d');return v?JSON.parse(decodeURIComponent(escape(atob(v)))):null}catch(_){return null}}
function attachDiag(){const d=getDiag(),box=$('dgAtt');if(!d){box.hidden=true;box.innerHTML='';return}
  box.hidden=false;box.innerHTML=`<div class="dg-att"><p class="k">마케팅 진단 결과 함께 보내기</p><b>${esc(d.q)}</b><p>${esc(d.ind)} · ${esc(d.biz)} · 고객 ${esc(d.tg)} · ${esc(d.sit)} · 지금 광고: ${esc(d.now)}<br>추천 1순위 ${esc(d.top[0])}</p><label><input type="checkbox" id="dgOn" checked> 이 진단 결과를 문의에 붙여 보냅니다</label></div>`;
  const ta=$('f6');if(!ta.value)ta.value=`진단 검색어: ‘${d.q}’\n지금 고민: ${d.sit}`}
$('cform')&&$('cform').addEventListener('submit',e=>{e.preventDefault();const f=e.target,msg=$('cmsg');msg.classList.remove('err');
  const need=[['f1','업체명'],['f2','담당자명'],['f3','이메일'],['f4','연락처'],['f6','문의 내용']];
  for(const [id,n] of need){if(!$(id).value.trim()){msg.textContent=`${n}${jo(n,'를')} 적어 주세요.`;msg.classList.add('err');$(id).focus();return}}
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test($('f3').value.trim())){msg.textContent='이메일 주소 형식을 확인해 주세요.';msg.classList.add('err');$('f3').focus();return}
  if(!$('f7').checked){msg.textContent='개인정보 수집 · 이용에 동의해 주셔야 보낼 수 있습니다.';msg.classList.add('err');return}
  const cats=[...f.querySelectorAll('input[name=cat]:checked')].map(x=>x.value).join(', ');
  let body=`업체명: ${$('f1').value}\n담당자명: ${$('f2').value}\n이메일: ${$('f3').value}\n연락처: ${$('f4').value}\n사이트: ${$('f5').value||'-'}\n관심 분류: ${cats||'-'}\n\n문의 내용:\n${$('f6').value}\n`;
  const d=getDiag();if(d&&$('dgOn')&&$('dgOn').checked)body+=`\n─ 마케팅 진단 결과 ─\n검색어: ${d.q}\n업종: ${d.ind} / ${d.biz}\n고객: ${d.tg}\n고민: ${d.sit}\n지금 광고: ${d.now}\n추천 순위: ${d.top.map((t,i)=>(i+1)+'. '+t).join('  ')}\n`;
  location.href=`mailto:dmg@daehanmedia.kr?subject=${encodeURIComponent('[상담 문의] '+$('f1').value)}&body=${encodeURIComponent(body)}`;
  msg.innerHTML='메일 앱이 열렸습니다. 내용을 확인하고 보내기를 눌러 주세요. 열리지 않으면 <a class="mail" href="mailto:dmg@daehanmedia.kr">dmg@daehanmedia.kr</a> 또는 02-2088-4840으로 연락 주세요.'});
go();

/* ───── 인트로 ───── */
(()=>{const I=$('opening');if(!I)return;
  let seen=false;try{seen=sessionStorage.getItem('dmgIntro')==='1'}catch(_){}
  if(RM||seen||/^#\//.test(location.hash)){I.remove();return}
  document.body.classList.add('intro-on');
  const LINE=.469; // 영상 속 밑줄 높이(영상 세로의 46.9%) — 화면 비율이 달라도 글자를 밑줄 바로 위에 맞춘다
  const place=()=>{const w=innerWidth,h=innerHeight,ar=16/9;let y;if(w/h>ar){const H=w/ar;y=LINE*H-(H-h)/2}else y=LINE*h;I.style.setProperty('--ly',y+'px')};
  place();addEventListener('resize',place);
  const V=$('introV'),T=$('introT'),TX=$('introTx'),K=$('introK');const WORD='대한미디어그룹';let done=false,timers=[];
  const at=(ms,f)=>timers.push(setTimeout(f,ms));
  function end(){if(done)return;done=true;timers.forEach(clearTimeout);try{sessionStorage.setItem('dmgIntro','1')}catch(_){}
    I.classList.add('out');document.body.classList.remove('intro-on');setTimeout(()=>{I.remove();fit()},800)}
  function run(){if(!V||V.paused||V.readyState<2){I.style.background='#FFFFFF';I.classList.add('lit');if(V)V.style.display='none';I.querySelector('.shade').style.display='none'}
    const d=V&&V.duration&&isFinite(V.duration)?V.duration*1000:5000;
    const tType=Math.max(900,d*0.60),per=150;
    at(tType-300,()=>{I.classList.add('lit');T.classList.add('on')});
    [...WORD].forEach((c,i)=>at(tType+i*per,()=>{TX.textContent=WORD.slice(0,i+1)}));
    const tEnter=tType+WORD.length*per+450;
    at(tEnter-350,()=>K.classList.add('on'));
    at(tEnter,()=>{K.classList.add('hit');T.classList.add('gone')});
    at(tEnter+180,()=>K.classList.remove('hit'));
    at(Math.max(tEnter+650,d-50),end)}
  $('introSkip').onclick=end;addEventListener('keydown',e=>{if(!done&&(e.key==='Escape'))end()});
  let started=false;const go=()=>{if(started)return;started=true;run()};
  if(V){V.addEventListener('playing',go,{once:true});const p=V.play();if(p&&p.catch)p.catch(()=>go());}
  setTimeout(go,1800); // 영상이 늦으면 글자 연출만으로 진행
  setTimeout(end,9000);
})();
})();
