import LandingPage from './pages/LandingPage';

// 만약 나중에 react-router-dom을 추가한다면 여기서 Routes를 구성합니다.
function App() {
  return (
    <div className="antialiased text-slate-900 dark:text-slate-50">
      {/* 메인 랜딩 페이지 렌더링 
          추후 다크모드 토글 상태 관리 로직을 여기에 추가할 수 있습니다.
      */}
      <LandingPage />
    </div>
  );
}

export default App;