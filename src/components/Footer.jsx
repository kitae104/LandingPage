import React from "react";
import { ShieldCheck, Lock } from "lucide-react";

export default function Footer() {
    return (
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
                            학생들의 건강한 마음과 명확한 미래를 위한 온라인
                            상담 No.1 플랫폼
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
}
