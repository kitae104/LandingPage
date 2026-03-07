import React, { useState, useEffect } from "react";
import cn from "../utils/cn";

export default function Navbar() {
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
}
