import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
    return (
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
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                        </span>
                        현재 1,240명의 학생이 상담 중
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] mb-6">
                        화상·채팅으로 <br />
                        <span className="text-blue-600">
                            바로 연결되는
                        </span>{" "}
                        <br />
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
}
