# 새 랜딩 페이지 추가 요청 템플릿 (복붙용)

아래 템플릿을 복사해서 {{...}} 부분만 바꾼 뒤 그대로 붙여넣어 요청하세요. 필수 항목은 `{{SAMPLE_ID}}`, `{{PAGE_TITLE}}`, `{{SECTIONS}}` 입니다.

---

템플릿 (복사해서 사용):

```
작업: 새 랜딩 페이지 생성
샘플 ID: {{SAMPLE_ID}}            # (필수, 영문 소문자/하이픈 권장, ex: ai-sign)
페이지 제목: {{PAGE_TITLE}}       # (필수, 예: AI 수화통역)
서브타이틀: {{SUBTITLE}}         # (옵션, 한 줄)
설명: {{DESCRIPTION}}            # (옵션, 1-2문단)
썸네일 URL: {{THUMBNAIL_URL}}     # (옵션, 서비스 목록에 표시할 이미지)
테마 컬러: {{THEME_COLOR}}        # (옵션, ex: indigo, teal, blue)
포함 섹션: {{SECTIONS}}           # (필수, 쉼표로 구분)
                                  # 가능한 값: hero, categories, features, reviews, pricing, cta, webcam, ai-simulation, contact
재사용 컴포넌트: {{REUSE_COMPONENTS}} # (옵션, ex: Navbar, Footer, Pricing 또는 none)
파일 경로(선택): {{DEST_PATH}}    # (옵션, 기본: src/pages/samples/{{SAMPLE_ID}}/LandingPage.jsx)
특별 동작/요청: {{EXTRA_BEHAVIOR}} # (옵션, ex: include webcam demo, lazy load, add contact form POST /api/demo)

응답 형식(필수):
- 적용할 파일 목록과 패치(apply_patch) (파일 경로와 한 줄 설명 포함)
- 새로 추가된 파일 링크(예: prompt-ex.md처럼 작업 결과 파일)

예시(채워서 보내는 예):
작업: 새 랜딩 페이지 생성
샘플 ID: ai-sign
페이지 제목: AI 수화통역
서브타이틀: 관공서용 웹캠 + AI 실시간 수화 통역
설명: 관공서·병원·민원창구에서 웹캠과 AI를 이용해 즉시 수화 통역 서비스를 제공합니다.
썸네일 URL: https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1200
테마 컬러: indigo
포함 섹션: hero,features,webcam,pricing,reviews,cta
재사용 컴포넌트: Navbar, Footer
파일 경로: src/pages/samples/ai-sign/LandingPage.jsx
특별 동작/요청: 웹캠 데모를 포함하고, src/data/samples.js에 loader 항목을 추가해주세요.

```

---

작성 가이드(짧게):

- `{{SAMPLE_ID}}`는 프로젝트 내에서 고유해야 하며 소문자/하이픈 형식을 권장합니다.
- `{{SECTIONS}}`는 필요한 섹션만 콤마로 나열하세요. 예: `hero,features,webcam`.
- `{{DEST_PATH}}`를 비워두면 기본 위치로 생성합니다: `src/pages/samples/{{SAMPLE_ID}}/LandingPage.jsx`.
- AI/웹캠 연동 등의 서버 작업이 필요하면 `{{EXTRA_BEHAVIOR}}`에 구체적으로 적어 주세요.

어시스턴트가 수행할 작업(요청 시 기대하는 동작):

1. `{{DEST_PATH}}`에 랜딩 페이지 컴포넌트 파일을 생성합니다. (파일 분할·코드 스플리팅 권장)
2. 필요 시 `src/components/`에 재사용 가능한 컴포넌트를 추가합니다.
3. `src/data/samples.js`에 새로운 샘플 항목(썸네일, title, description, loader)을 추가합니다.
4. 변경 요약을 `CHANGE-{{SAMPLE_ID}}.md` 형식으로 생성합니다.
5. 결과로 적용한 `apply_patch` 패치 목록과 생성된 파일 경로를 응답합니다.

필요한 패키지가 있으면 `package.json` 업데이트도 제안해 주세요. (예: react-router-dom, 추가 아이콘 라이브러리 등)

문의/예외:

- 세부 디자인(색상/아이콘/이미지)을 별도로 제공하지 않으면 기존 스타일을 재사용합니다.
- 불명확한 부분이 있으면 생성 전에 한두 개의 확인 질문을 먼저 합니다.

---

파일 위치: `prompt-ex.md`
