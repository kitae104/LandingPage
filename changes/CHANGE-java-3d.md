# CHANGE - java-3d

작업: Java 3D 랜딩 페이지 추가

추가된 파일:

- src/pages/samples/java-3d/LandingPage.jsx : 3D 스타일의 자바 프로그래밍 랜딩 페이지 컴포넌트
- src/data/samples.js : `SAMPLES` 배열에 `java-3d` 항목 추가 (동적 로더 등록)

설명:

- 3D 느낌의 비주얼과 학습 로드맵, 주요 기능 섹션을 포함한 랜딩 페이지 컴포넌트를 추가했습니다.
- 기존 프로젝트의 샘플 로더 패턴(`src/data/samples.js`)을 따르도록 동적 import로 등록했습니다.

주의사항 / 다음 단계:

- Tailwind JIT 설정이 활성화되어 있어야 위의 임의 스타일(대괄호 표기법)이 제대로 적용됩니다.
- 필요하면 네비게이션이나 Footer와 통합하거나 라우팅을 추가해 주세요.
