import React from "react";
import cn from "../utils/cn";
import { CheckCircle } from "lucide-react";

export default function Pricing() {
    const plans = [
        {
            title: "Free",
            price: "0",
            desc: "상담 분위기를 경험하고 싶은 학생",
            features: ["월 1회 30분 상담", "기본 채팅 상담", "AI 요약 체험"],
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
    ];

    return (
        <section id="pricing" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                        합리적인 비용으로 시작하세요
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
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
                                    <span className="text-slate-500 ml-1">
                                        /월
                                    </span>
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
}
