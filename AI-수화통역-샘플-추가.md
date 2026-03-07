# AI 수화통역 샘플 추가

다음 변경을 적용하여 관공서용 웹캠 + AI 기반 실시간 수화 통역 랜딩 페이지 샘플을 추가했습니다.

- 추가된 파일
    - `src/pages/samples/ai-sign/LandingPage.jsx` — AI 수화통역 랜딩 페이지 컴포넌트
    - `src/components/WebcamDemo.jsx` — 브라우저 `getUserMedia` 기반의 간단한 웹캠 데모 컴포넌트 (플레이스홀더 AI 오버레이 포함)

- 기존 파일(참고)
    - `src/data/samples.js` — 샘플 메타가 이미 포함되어 있으며 (`id: 'ai-sign'`) 위 샘플을 로드합니다.
    - `src/pages/SamplesHome.jsx` — 샘플 목록(홈) 페이지
    - `src/pages/TopicLanding.jsx` — 선택한 샘플을 동적으로 로드하는 라우터 페이지
    - `src/App.jsx` — 라우팅(`react-router-dom`) 설정

- 실행 방법
    1. 의존성 설치(처음 실행 시):
        ```bash
        npm install
        ```
    2. 개발 서버 시작:
        ```bash
        npm run dev
        ```
    3. 브라우저에서 `http://localhost:5173`에 접속 후 "AI 수화통역" 샘플을 선택합니다.

- 비고
    - `package.json`에 `react-router-dom`이 포함되어 있습니다. (없으면 `npm install react-router-dom`)
    - 새 샘플은 `src/data/samples.js`의 `loader`를 통해 코드 분할(Lazy loading)로 로드됩니다.
    - 데모 사용 시 브라우저의 카메라 권한을 허용해야 합니다. 이 예제는 AI 연동 로직을 포함하지 않으며, `WebcamDemo.jsx`의 버튼에 AI 통역 연동 포인트를 제공하고 있습니다.
