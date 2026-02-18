import React, { useState, useEffect } from "react";
import {
    Video,
    MessageSquare,
    Calendar,
    FileText,
    ShieldCheck,
    LayoutDashboard,
    UserCheck,
    ArrowRight,
    CheckCircle,
    ChevronDown,
    Star,
    Users,
    Lock,
    Zap,
    Menu,
    X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// --- Dummy Data ---
const CATEGORIES = [
    {
        id: "life",
        title: "학교생활",
        icon: <Users />,
        bullets: ["교우 관계 고민", "학교 적응 상담", "동아리 및 활동"],
        color: "bg-blue-500",
    },
    {
        id: "study",
        title: "학습 전략",
        icon: <Zap />,
        bullets: ["공부법 코칭", "성적 관리", "학업 스트레스"],
        color: "bg-teal-500",
    },
    {
        id: "career",
        title: "진로 설계",
        icon: <ArrowRight />,
        bullets: ["학과 탐색", "적성 검사 해석", "목표 설정"],
        color: "bg-indigo-500",
    },
    {
        id: "job",
        title: "취업/포폴",
        icon: <UserCheck />,
        bullets: ["자소서 첨삭", "면접 시뮬레이션", "직무 상담"],
        color: "bg-purple-500",
    },
];

const FEATURES = [
    {
        id: "video",
        title: "화상 상담",
        description: "고화질 WebRTC 기반으로 끊김 없는 대면 상담을 경험하세요.",
        icon: <Video />,
        img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "chat",
        title: "실시간 채팅",
        description: "부담 없는 텍스트 기반 상담으로 언제든 고민을 나눕니다.",
        icon: <MessageSquare />,
        img: "https://images.unsplash.com/photo-1577563908411-5077b6ac7624?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "summary",
        title: "AI 요약",
        description: "상담 후 AI가 핵심 내용과 할 일을 정리해 드립니다.",
        icon: <FileText />,
        img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800",
    },
];

const REVIEWS = [
    {
        name: "김*민",
        school: "한국대학교",
        grade: "3학년",
        content:
            "진로 문제로 막막했는데, 상담사님이 구체적인 로드맵을 그려주셔서 큰 도움이 됐어요.",
        stars: 5,
        tag: "진로",
    },
    {
        name: "이*서",
        school: "서울고교",
        grade: "2학년",
        content:
            "익명이 보장되니 친구 관계 고민도 솔직하게 말할 수 있어 좋았습니다.",
        stars: 5,
        tag: "학교생활",
    },
    {
        name: "박*준",
        school: "대한대학교",
        grade: "4학년",
        content: "자소서 피드백이 정말 날카롭고 전문적입니다. 바로 합격했어요!",
        stars: 5,
        tag: "취업",
    },
];

// --- Components ---

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
                isScrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm"
                    : "bg-transparent",
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        S
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                        SOLV 상담
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <a
                        href="#features"
                        className="hover:text-blue-600 transition-colors"
                    >
                        기능
                    </a>
                    <a
                        href="#categories"
                        className="hover:text-blue-600 transition-colors"
                    >
                        상담분야
                    </a>
                    <a
                        href="#reviews"
                        className="hover:text-blue-600 transition-colors"
                    >
                        후기
                    </a>
                    <a
                        href="#pricing"
                        className="hover:text-blue-600 transition-colors"
                    >
                        요금
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <button className="hidden sm:block px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                        로그인
                    </button>
                    <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-500/20">
                        무료로 시작
                    </button>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => (
    <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    현재 1,240명의 학생이 상담 중
                </div>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] mb-6">
                    화상·채팅으로 <br />
                    <span className="text-blue-600">바로 연결되는</span> <br />
                    학생 맞춤 상담
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
                    학교생활, 학습 전략, 진로 고민부터 취업 준비까지. 검증된
                    전문가와 함께 당신의 가능성을 찾아보세요.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center gap-2 shadow-xl shadow-blue-500/25 transition-transform active:scale-95">
                        상담 예약하기 <ArrowRight size={20} />
                    </button>
                    <div className="flex flex-col justify-center">
                        <div className="flex -space-x-2 mb-1">
                            {[1, 2, 3, 4].map((i) => (
                                <img
                                    key={i}
                                    className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900"
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt="user"
                                />
                            ))}
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                            실시간 만족도 4.9/5.0
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
            >
                <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-4 shadow-2xl border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 relative">
                        <img
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                            className="w-full h-full object-cover"
                            alt="counseling"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-sm font-medium opacity-80">
                                상담 전문가
                            </p>
                            <p className="text-xl font-bold">
                                이지은 수석 상담사
                            </p>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2">
                            <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold">
                                REC 00:42:12
                            </div>
                        </div>
                    </div>
                    {/* Floating UI Elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute -right-6 top-1/4 bg-white dark:bg-slate-700 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-600 w-48"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <CheckCircle size={16} />
                            </div>
                            <span className="text-xs font-bold dark:text-white">
                                상담 요약 완료
                            </span>
                        </div>
                        <div className="space-y-1">
                            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-600 rounded" />
                            <div className="h-1.5 w-[80%] bg-slate-100 dark:bg-slate-600 rounded" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </section>
);

const CounselingCategories = () => (
    <section id="categories" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                    어떤 고민을 나누고 싶나요?
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    네 가지 주요 분야의 전문가가 여러분을 기다립니다.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORIES.map((cat, idx) => (
                    <motion.div
                        key={cat.id}
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
                    >
                        <div
                            className={cn(
                                "w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform",
                                cat.color,
                            )}
                        >
                            {cat.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 dark:text-white">
                            {cat.title}
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {cat.bullets.map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />{" "}
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                            사례 보기
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const FeatureTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="features" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10 dark:text-white leading-tight">
                            상담에만 집중할 수 있는 <br />
                            최적의 도구들
                        </h2>
                        <div className="space-y-4">
                            {FEATURES.map((f, idx) => (
                                <button
                                    key={f.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={cn(
                                        "w-full flex text-left p-6 rounded-2xl transition-all duration-300 border-2",
                                        activeTab === idx
                                            ? "bg-blue-50 dark:bg-blue-900/20 border-blue-600 shadow-lg"
                                            : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800",
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "mr-5 mt-1",
                                            activeTab === idx
                                                ? "text-blue-600"
                                                : "text-slate-400",
                                        )}
                                    >
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4
                                            className={cn(
                                                "font-bold mb-1",
                                                activeTab === idx
                                                    ? "text-blue-900 dark:text-white"
                                                    : "text-slate-500",
                                            )}
                                        >
                                            {f.title}
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            {f.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[500px] relative rounded-3xl overflow-hidden shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                src={FEATURES[activeTab].img}
                                className="w-full h-full object-cover"
                                alt="feature"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const AIPromptSection = () => (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    상담이 끝나면, <br />
                    AI가 성장을 정리해 드립니다.
                </h2>
                <p className="text-slate-400 mb-8 text-lg">
                    상담 내용을 일일이 기록할 필요 없습니다. AI가 핵심 요약,
                    감정 키워드, 그리고 실천해야 할 행동 리스트를 즉시
                    생성합니다.
                </p>
                <div className="space-y-4">
                    {[
                        "주요 대화 요약 (3줄)",
                        "개인별 맞춤형 실천 과제",
                        "다음 상담 추천 키워드",
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <CheckCircle size={14} />
                            </div>
                            <span className="font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-3xl">
                <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                            Counseling Summary
                        </p>
                        <h4 className="text-xl font-bold">
                            2026.02.18 상담 리포트
                        </h4>
                    </div>
                    <div className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold italic">
                        AI Verified
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="text-sm font-bold text-blue-400 mb-2">
                            💡 핵심 요약
                        </p>
                        <p className="text-slate-300 leading-relaxed text-sm bg-slate-800/50 p-4 rounded-xl italic">
                            "졸업 후 진로에 대한 막연한 불안감이 주된
                            원인이었습니다. 현재 본인이 가진 기술 스택이 시장
                            요구와 일치함을 확인하고, 포트폴리오의 '협업' 부분을
                            강화하기로 결정했습니다."
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-teal-400 mb-3">
                            ✅ 액션 아이템
                        </p>
                        <div className="space-y-2">
                            {[
                                "GitHub Readme 업데이트 하기",
                                "현직자 인터뷰 질문지 작성 (3개)",
                                "다음 주 화요일 후속 상담 예약",
                            ].map((t, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 text-sm text-slate-400"
                                >
                                    <div className="w-4 h-4 border border-slate-700 rounded mr-1" />{" "}
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                    합리적인 비용으로 시작하세요
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Free",
                        price: "0",
                        desc: "상담 분위기를 경험하고 싶은 학생",
                        features: [
                            "월 1회 30분 상담",
                            "기본 채팅 상담",
                            "AI 요약 체험",
                        ],
                        cta: "시작하기",
                        popular: false,
                    },
                    {
                        title: "Standard",
                        price: "49,000",
                        desc: "집중적인 관리가 필요한 학생",
                        features: [
                            "월 4회 화상 상담",
                            "무제한 채팅 상담",
                            "상세 AI 리포트",
                            "우선 예약 권한",
                        ],
                        cta: "가장 인기 있음",
                        popular: true,
                    },
                    {
                        title: "School",
                        price: "별도문의",
                        desc: "전체 학생의 복지를 생각하는 대학/고교",
                        features: [
                            "전용 관리자 대시보드",
                            "상담 데이터 통계 리포트",
                            "학교별 커스텀 도메인",
                            "보안/익명 강화 옵션",
                        ],
                        cta: "도입 문의",
                        popular: false,
                    },
                ].map((plan, i) => (
                    <div
                        key={i}
                        className={cn(
                            "p-8 rounded-3xl border transition-all",
                            plan.popular
                                ? "bg-white dark:bg-slate-800 border-blue-500 shadow-2xl scale-105 relative z-10"
                                : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-90",
                        )}
                    >
                        {plan.popular && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                                Recommended
                            </span>
                        )}
                        <h3 className="text-xl font-bold mb-2 dark:text-white">
                            {plan.title}
                        </h3>
                        <p className="text-sm text-slate-500 mb-6">
                            {plan.desc}
                        </p>
                        <div className="mb-8">
                            <span className="text-4xl font-black dark:text-white">
                                {plan.price}
                            </span>
                            {plan.price !== "별도문의" && (
                                <span className="text-slate-500 ml-1">/월</span>
                            )}
                        </div>
                        <ul className="space-y-4 mb-10">
                            {plan.features.map((f, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                                >
                                    <CheckCircle
                                        size={16}
                                        className="text-blue-500"
                                    />{" "}
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={cn(
                                "w-full py-4 rounded-2xl font-bold transition-all",
                                plan.popular
                                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200",
                            )}
                        >
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            S
                        </div>
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                            SOLV
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed">
                        학생들의 건강한 마음과 명확한 미래를 위한 온라인 상담
                        No.1 플랫폼
                    </p>
                </div>
                <div>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-6">
                        서비스
                    </h5>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                화상 상담
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                채팅 상담
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                AI 리포트
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-6">
                        고객 지원
                    </h5>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                상담사 지원
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                도입 문의 (학교용)
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-6">
                        법적 고지
                    </h5>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                이용약관
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-blue-600 font-bold text-blue-600"
                            >
                                개인정보처리방침
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                청소년 보호 정책
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:row items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800 text-xs">
                <p>© 2026 SOLV Inc. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <ShieldCheck size={18} className="opacity-50" />
                    <Lock size={18} className="opacity-50" />
                </div>
            </div>
        </div>
    </footer>
);

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main>
                <Hero />
                <div className="flex justify-center -mt-8">
                    <div className="bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 px-10 py-8 rounded-[2rem] flex flex-wrap gap-12 justify-center items-center z-20">
                        <div className="text-center">
                            <p className="text-3xl font-black text-blue-600 mb-1">
                                98%
                            </p>
                            <p className="text-xs font-bold text-slate-500 uppercase">
                                상담 만족도
                            </p>
                        </div>
                        <div className="w-px h-10 bg-slate-200 hidden sm:block" />
                        <div className="text-center">
                            <p className="text-3xl font-black text-slate-800 dark:text-white mb-1">
                                24/7
                            </p>
                            <p className="text-xs font-bold text-slate-500 uppercase">
                                실시간 대응
                            </p>
                        </div>
                        <div className="w-px h-10 bg-slate-200 hidden sm:block" />
                        <div className="text-center">
                            <p className="text-3xl font-black text-slate-800 dark:text-white mb-1">
                                100%
                            </p>
                            <p className="text-xs font-bold text-slate-500 uppercase">
                                완전 익명 보장
                            </p>
                        </div>
                    </div>
                </div>
                <CounselingCategories />
                <FeatureTabs />
                <AIPromptSection />

                {/* Review Section */}
                <section
                    id="reviews"
                    className="py-24 bg-white dark:bg-slate-950"
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                                    학생들이 직접 남긴 이야기
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400">
                                    이미 많은 친구들이 고민의 해답을 찾았습니다.
                                </p>
                            </div>
                            <div className="hidden md:flex gap-2">
                                <button className="p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <ArrowRight
                                        size={20}
                                        className="rotate-180"
                                    />
                                </button>
                                <button className="p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {REVIEWS.map((r, i) => (
                                <div
                                    key={i}
                                    className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-transparent hover:border-blue-500/20 transition-all"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(r.stars)].map((_, idx) => (
                                            <Star
                                                key={idx}
                                                size={16}
                                                className="fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed font-medium">
                                        "{r.content}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={`https://i.pravatar.cc/100?img=${i + 20}`}
                                            className="w-12 h-12 rounded-full object-cover"
                                            alt="user"
                                        />
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white text-sm">
                                                {r.name}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                {r.school} · {r.grade}
                                            </p>
                                        </div>
                                        <div className="ml-auto px-2 py-1 bg-white dark:bg-slate-800 rounded-md text-[10px] font-bold text-blue-600 border border-blue-100 dark:border-slate-700">
                                            {r.tag}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Pricing />

                {/* Final CTA */}
                <section className="py-20 px-6">
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-500/30">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
                            더 이상 혼자 고민하지 마세요
                        </h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto opacity-90 relative z-10">
                            전문 상담사가 당신의 이야기를 들을 준비를
                            마쳤습니다. <br className="hidden md:block" />
                            지금 첫 상담을 시작하고 마음의 짐을 덜어보세요.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
                            <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all active:scale-95">
                                지금 무료 시작하기
                            </button>
                            <button className="px-8 py-5 border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                                도입 문의하기
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
