# AI 수화통역 샘플 추가

작업명: AI 수화통역 샘플 추가

날짜: 2026-03-07

변경 내용 요약:

- 라우팅 및 샘플 뷰 추가
  - `src/pages/SamplesHome.jsx` — 샘플 목록(시작) 페이지를 추가했습니다.
  - `src/pages/TopicLanding.jsx` — 샘플 선택 시 해당 샘플 컴포넌트를 동적 로드하는 페이지를 추가했습니다.

- AI 수화통역 샘플 페이지 추가
  - `src/pages/samples/ai-sign/LandingPage.jsx` — 관공서용 웹캠 + AI 수화통역 데모용 랜딩 페이지를 새로 추가했습니다. 기존 `LandingPage.jsx`의 스타일과 구성(히어로/특징/CTA)을 참고하여 작성했습니다.

- 패키지 및 설정
  - `package.json` — `react-router-dom` 의존성을 추가했습니다. (로컬에서 `npm install` 또는 `pnpm install` 해주세요.)

사용 방법:

1. 의존성 설치

```bash
npm install
# 또는
pnpm install
```

2. 개발서버 실행

```bash
npm run dev
```

3. 브라우저에서 열기

http://localhost:5173 에 접속 후 샘플 목록에서 "AI 수화통역"을 선택하거나 직접 `/#/sample/ai-sign`로 이동하세요.

추가 작업 제안:

- `src/pages/LandingPage.jsx`의 공통 컴포넌트(예: `Navbar`, `Hero`)를 `src/components`로 추출하면 샘플간 재사용이 쉬워집니다.
- 데모용 웹캠 접근 및 간단한 수화 인식 플로우(예: TensorFlow.js 모델 연동) 샘플 코드를 `src/pages/samples/ai-sign/demo/`로 추가할 수 있습니다.
