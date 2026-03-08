import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CounselingCategories from "../components/CounselingCategories";
import FeatureTabs from "../components/FeatureTabs";
import AIPromptSection from "../components/AIPromptSection";
import Reviews from "../components/Reviews";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

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
                <Reviews />
                <Pricing />

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
                            <Link
                                to="/sample/java-3d"
                                className="inline-block px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all active:scale-95 text-center"
                            >
                                지금 무료 시작하기
                            </Link>
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
