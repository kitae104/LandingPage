import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cn from "../utils/cn";
import { FEATURES } from "../data/landingData";

export default function FeatureTabs() {
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
}
