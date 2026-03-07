import React from 'react'
import {
    Users,
    Zap,
    ArrowRight,
    UserCheck,
    Video,
    MessageSquare,
    FileText,
} from 'lucide-react'

export const CATEGORIES = [
    {
        id: 'life',
        title: '학교생활',
        icon: <Users />,
        bullets: ['교우 관계 고민', '학교 적응 상담', '동아리 및 활동'],
        color: 'bg-blue-500',
    },
    {
        id: 'study',
        title: '학습 전략',
        icon: <Zap />,
        bullets: ['공부법 코칭', '성적 관리', '학업 스트레스'],
        color: 'bg-teal-500',
    },
    {
        id: 'career',
        title: '진로 설계',
        icon: <ArrowRight />,
        bullets: ['학과 탐색', '적성 검사 해석', '목표 설정'],
        color: 'bg-indigo-500',
    },
    {
        id: 'job',
        title: '취업/포폴',
        icon: <UserCheck />,
        bullets: ['자소서 첨삭', '면접 시뮬레이션', '직무 상담'],
        color: 'bg-purple-500',
    },
]

export const FEATURES = [
    {
        id: 'video',
        title: '화상 상담',
        description: '고화질 WebRTC 기반으로 끊김 없는 대면 상담을 경험하세요.',
        icon: <Video />,
        img: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'chat',
        title: '실시간 채팅',
        description: '부담 없는 텍스트 기반 상담으로 언제든 고민을 나눕니다.',
        icon: <MessageSquare />,
        img: 'https://images.unsplash.com/photo-1577563908411-5077b6ac7624?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'summary',
        title: 'AI 요약',
        description: '상담 후 AI가 핵심 내용과 할 일을 정리해 드립니다.',
        icon: <FileText />,
        img: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800',
    },
]

export const REVIEWS = [
    {
        name: '김*민',
        school: '한국대학교',
        grade: '3학년',
        content:
            '진로 문제로 막막했는데, 상담사님이 구체적인 로드맵을 그려주셔서 큰 도움이 됐어요.',
        stars: 5,
        tag: '진로',
    },
    {
        name: '이*서',
        school: '서울고교',
        grade: '2학년',
        content:
            '익명이 보장되니 친구 관계 고민도 솔직하게 말할 수 있어 좋았습니다.',
        stars: 5,
        tag: '학교생활',
    },
    {
        name: '박*준',
        school: '대한대학교',
        grade: '4학년',
        content: '자소서 피드백이 정말 날카롭고 전문적입니다. 바로 합격했어요!',
        stars: 5,
        tag: '취업',
    },
]
