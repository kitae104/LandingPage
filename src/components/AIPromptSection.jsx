import React from "react";
import { Zap, CheckCircle } from "lucide-react";

export default function AIPromptSection() {
    return (
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
                                원인이었습니다. 현재 본인이 가진 기술 스택이
                                시장 요구와 일치함을 확인하고, 포트폴리오의
                                '협업' 부분을 강화하기로 결정했습니다."
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
}
