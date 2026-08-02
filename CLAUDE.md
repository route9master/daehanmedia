# 대한미디어그룹 (daehanmedia.kr) — 온라인 광고대행사 웹사이트

## 기준 문서

**DESIGN.md**와 **CONTENT.md**가 유일한 판단 기준이다.
모든 작업 전에 반드시 두 문서를 먼저 읽는다.

- DESIGN.md — 색, 폰트, 레이아웃, 모션, 로고 규칙
- CONTENT.md — 카피, 사이트맵, 페이지별 콘텐츠, SEO
- PRODUCT.md — 제품 정의, 포지셔닝, 원칙

## 절대 규칙

### 디자인
DESIGN.md에 없는 색·폰트·효과는 절대 쓰지 않는다.

### 카피 금지 (CONTENT.md §0)
다음을 포함하거나 암시하는 문구는 절대 쓰지 않는다:
- 가격·단가·비용 (금액, 최소 예산, 수수료율, "합리적인 비용" 같은 완곡 표현 포함)
- 실적 숫자 (업력, 관리 광고주 수, 누적 집행액, 재계약률, 만족도 %)
- 인원수
- 성과 보장 ("매출 보장", "1위 보장", "○○% 상승", "무조건", "확실히")
- 리포트·명세 약속 ("매달 리포트 드립니다", "지출을 명세합니다")
- 추적·데이터 강조 ("데이터 기반", "실시간 추적", "대시보드")

## 빌드·배포

- **Astro 정적 빌드 전용.** SSR 금지. `output: 'static'`
- 가비아 웹호스팅(PHP)에 FTP 업로드. Node 서버 없음
- 문의 폼: `POST → /api/contact.php` (PHPMailer + MySQL)
- 배포: GitHub Actions `SamKirkland/FTP-Deploy-Action`

## 금지 사항

- **브라우저 storage API 사용 금지** (localStorage, sessionStorage, IndexedDB)
- SSR, 서버 렌더링 의존 금지
- 방문자 분석 도구·광고 픽셀 설치 금지

## 설치된 패키지

```
motion
lenis
@fontsource/noto-serif-kr
wanted-sans
@fontsource/geist-mono
@fontsource/redaction-100
@fontsource/redaction-70
@fontsource/redaction-35
@fontsource/redaction-10
```

이것 외 새 라이브러리는 **먼저 물어보고** 추가한다.

## Development

Dev server는 background mode로 실행:

```
astro dev --background
```

`astro dev stop`, `astro dev status`, `astro dev logs`로 관리.

## Astro 문서

https://docs.astro.build
