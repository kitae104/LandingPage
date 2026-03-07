import React from "react";
import { motion } from "framer-motion";
import cn from "../utils/cn";
import { CATEGORIES } from "../data/landingData";

export default function CounselingCategories() {
    return (
        <section
            id="categories"
            className="py-24 bg-slate-50 dark:bg-slate-900/50"
        >
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
                    {CATEGORIES.map((cat) => (
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
}
