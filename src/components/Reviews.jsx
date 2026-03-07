import React from "react";
import { REVIEWS } from "../data/landingData";
import { Star, ArrowRight } from "lucide-react";

export default function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-white dark:bg-slate-950">
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
                            <ArrowRight size={20} className="rotate-180" />
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
    );
}
