export const SAMPLES = [
    {
        id: 'solv',
        title: 'SOLV 상담',
        description: '학생 맞춤 상담 랜딩',
        thumbnail:
            'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
        loader: () => import('../pages/LandingPage.jsx'),
    },
    {
        id: 'ai-sign',
        title: 'AI 수화통역',
        description: '관공서용 웹캠 + AI 기반 실시간 수화 통역 서비스 랜딩',
        thumbnail:
            'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1200',
        loader: () => import('../pages/samples/ai-sign/LandingPage.jsx'),
    },
    {
        id: 'java-3d',
        title: 'Java 3D',
        description: '3D 스타일 랜딩으로 구성된 Java 프로그래밍 학습 페이지',
        thumbnail:
            'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=1200',
        loader: () => import('../pages/samples/java-3d/LandingPage.jsx'),
    },
]
