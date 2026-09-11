/* =========================================================
   지점별 설정 — 강남점
   ---------------------------------------------------------
   관리 도구의 나머지 파일(index.html, columns-core.js, github-publish.js, tests/)은
   전주점·강남점이 똑같습니다. 지점마다 다른 값은 이 파일에만 둡니다.
   고친 뒤에는 어드민-제작-가이드.md 의 검증 두 가지를 꼭 실행하세요.
========================================================= */
(function (root) {
  // 컬럼 페이지·목록 카드·발행에 쓰는 값
  const SITE = {
    domain: 'https://gnhoowart.co.kr/',
    shortName: '강남',
    siteName: '후한의원 강남점',
    bizName: '후한의원 강남점',
    doctor: '홍진우',
    phone: '02-543-9696',
    region: '서울특별시',
    city: '강남구',
    street: '도산대로 110 KBL센터 지하 1층',
    twitterCard: 'summary_large_image',
    kakaoUrl: 'https://pf.kakao.com/_LYNVu',
    aboutCondition: '편평사마귀',
    defaultCategory: '편평사마귀',
    defaultImage: 'assets/images/doctor-hong.jpg',
    photoClass: ' object-top',          // 원장 사진이 세로라서 위쪽 기준으로 자른다 (얼굴이 잘리지 않게)
    copyright: 'GANGNAM',
    github: { owner: 'gkwngml1215-code', repo: 'gnwart', branch: 'main' },
    tokenKey: 'hoo-gangnam-admin-gh-token',
    storagePrefix: 'hoogangnam',
  };

  // 1~7번 SEO 설정 기본값 (이 브라우저에 저장된 값이 없을 때 쓰임)
  const DEFAULT_SETTINGS = {
    seoTitle: "강남편평사마귀 제거 | 후한의원 강남점 (도산대로)",
    seoDescription: "강남구 도산대로 후한의원 강남점 편평사마귀 제거 - 사율침과 줌 핸드피스 CO2레이저(코트라 플러스)를 병행해 재발까지 관리합니다. 홍진우 대표원장 외 의료진 5인.",
    seoKeywords: "강남편평사마귀, 강남사마귀제거, 강남사마귀, 후한의원 강남점, 강남쥐젖, 강남비립종, 논현동편평사마귀, 신사동편평사마귀, 도산대로한의원",
    siteDomain: "https://gnhoowart.co.kr/",
    naverVerify: "d096e1d61b5cfcca9b151f8207dcd7ddad7f4029",
    googleVerify: "M0bbDw6Xyh9pFX7fxj-CccaFtbbLrdosr2IWX2_34Uc",
    ogImage: "",
    ogSiteName: "후한의원 강남점",
    ogType: "website",
    twitterCard: "summary_large_image",
    bizName: "후한의원 강남점",
    bizDoctor: "홍진우",
    bizPhone: "02-543-9696",
    bizStreet: "도산대로 110 KBL센터 지하 1층",
    bizCity: "강남구",
    bizRegion: "서울특별시",
    bizPostal: "",
    bizLat: "",
    bizLng: "",
    bizPriceRange: "₩₩ (99,000원~)",
    bizSpecialty: "한의원 · 피부 병변 클리닉 (편평사마귀·쥐젖·비립종·한관종·피지선증식증·검버섯 제거)",
    hours: [
      {day:'월', code:'Mo', closed:false, open:'11:00', close:'20:30'},
      {day:'화', code:'Tu', closed:false, open:'11:00', close:'20:30'},
      {day:'수', code:'We', closed:false, open:'11:00', close:'20:30'},
      {day:'목', code:'Th', closed:false, open:'11:00', close:'20:30'},
      {day:'금', code:'Fr', closed:false, open:'11:00', close:'20:30'},
      {day:'토', code:'Sa', closed:false, open:'10:00', close:'15:00'},
      {day:'일', code:'Su', closed:true,  open:'10:00', close:'15:00'},
    ],
    faqItems: [
      {q:'편평사마귀 제거 후 어떻게 관리하나요?', a:'시술 부위가 아물기까지 3~7일 정도는 항생 연고나 습윤 밴드로 보호해 주세요. 딱지가 생기면 손으로 떼지 말고 자연스럽게 떨어질 때까지 기다려야 흉터·색소침착을 예방할 수 있습니다.'},
      {q:'쥐젖, 비립종도 같이 제거되나요?', a:'네, 정확한 감별 진단 후 편평사마귀와 함께 쥐젖·비립종 등을 동시에 제거할 수 있습니다. 병변 종류와 범위에 따라 추가 비용이 발생할 수 있어 상담 시 함께 확인해 드립니다.'},
      {q:'사율침 치료는 왜 함께 진행하나요?', a:'편평사마귀는 바이러스성 질환이라 겉으로 보이는 병변만 없애면 재발하기 쉽습니다. 사율침 치료로 국소 면역력을 높여 재발 가능성을 낮추는 방향까지 함께 관리합니다.'},
      {q:'치료 후 화장은 언제부터 가능한가요?', a:'습윤 밴드를 붙인 경우 겉면 위로는 다음 날부터 가벼운 화장이 가능합니다. 밴드를 붙이지 않았다면 미세한 상처가 있을 수 있어 며칠간 자극을 피하는 것이 좋습니다. 정확한 시기는 시술 후 안내드립니다.'},
      {q:'평일 퇴근 후에도 진료가 가능한가요?', a:'후한의원 강남점은 월요일부터 금요일까지 11:00~20:30 진료해 퇴근 후 방문도 가능합니다. 토요일은 10:00~15:00(점심시간 없이) 진료하며, 일요일은 휴진입니다. 평일 점심시간은 13:00~14:30입니다.'},
    ],
    bots: [
      {name:'GPTBot', label:'GPTBot (OpenAI 학습/검색)', allow:true},
      {name:'ChatGPT-User', label:'ChatGPT-User (OpenAI 사용자 열람)', allow:true},
      {name:'OAI-SearchBot', label:'OAI-SearchBot (OpenAI 검색 노출)', allow:true},
      {name:'Google-Extended', label:'Google-Extended (Google AI 답변)', allow:true},
      {name:'PerplexityBot', label:'PerplexityBot (Perplexity)', allow:true},
      {name:'ClaudeBot', label:'ClaudeBot (Anthropic 크롤러)', allow:true},
      {name:'anthropic-ai', label:'anthropic-ai (Anthropic)', allow:true},
      {name:'Applebot-Extended', label:'Applebot-Extended (Apple Intelligence)', allow:true},
      {name:'CCBot', label:'CCBot (Common Crawl, 다수 LLM 학습원)', allow:true},
      {name:'Bytespider', label:'Bytespider (ByteDance)', allow:false},
    ],
    llmsSummary: "서울특별시 강남구에 위치한 후한의원 강남점은 사율침과 줌 핸드피스 CO2레이저(코트라 플러스)를 병행해 편평사마귀·쥐젖·비립종을 제거하고 재발까지 관리하는 한의원입니다.",
    llmsDetail: "",
    lastmod: "2026-09-08",
  };

  const api = {SITE: SITE, DEFAULT_SETTINGS: DEFAULT_SETTINGS};
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.HOO_SITE = SITE; root.HOO_DEFAULT_SETTINGS = DEFAULT_SETTINGS; }
})(typeof globalThis !== 'undefined' ? globalThis : this);
