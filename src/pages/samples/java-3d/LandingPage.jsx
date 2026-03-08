import React from "react";

export default function Java3DLandingPage() {
    const features = [
        {
            title: "객체지향 설계",
            desc: "클래스, 상속, 다형성, 인터페이스를 실전 감각으로 익히는 Java 학습 흐름",
        },
        {
            title: "실무형 문법",
            desc: "컬렉션, 예외 처리, 파일 입출력, 람다까지 한 번에 연결되는 구성",
        },
        {
            title: "프로젝트 중심",
            desc: "기초 문법에서 끝나지 않고 웹, 백엔드, 알고리즘 학습으로 확장 가능한 기반",
        },
    ];

    const steps = [
        "기초 문법 이해",
        "객체지향 사고 익히기",
        "문제 해결력 강화",
        "실전 프로젝트 연결",
    ];

    return (
        <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1f2937_0%,_#0f172a_35%,_#020617_100%)] text-white">
            <section className="relative isolate min-h-screen">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
                    <div className="absolute right-[-5%] top-[20%] h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
                    <div className="absolute bottom-[-10%] left-[25%] h-96 w-96 rounded-full bg-amber-300/10 blur-3xl" />

                    <div className="absolute inset-0 [perspective:1200px]">
                        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10 [transform:rotateX(75deg)] shadow-[0_0_80px_rgba(249,115,22,0.18)]" />
                        <div className="absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-cyan-300/15 [transform:rotateX(75deg)_rotateZ(18deg)]" />
                        <div className="absolute left-1/2 top-40 h-[320px] w-[320px] -translate-x-1/2 rounded-full border border-orange-300/20 [transform:rotateX(75deg)_rotateZ(-18deg)]" />
                    </div>

                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                </div>

                <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-10">
                    <nav className="mb-16 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-400/30 bg-white/10 text-lg font-bold text-orange-300 backdrop-blur">
                                J
                            </div>
                            <div>
                                <p className="text-sm text-white/60">
                                    3D Learning Experience
                                </p>
                                <h1 className="text-lg font-semibold tracking-wide">
                                    Java Programming
                                </h1>
                            </div>
                        </div>
                        <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
                            <a
                                href="#features"
                                className="transition hover:text-white"
                            >
                                특징
                            </a>
                            <a
                                href="#roadmap"
                                className="transition hover:text-white"
                            >
                                학습 흐름
                            </a>
                            <a
                                href="#start"
                                className="transition hover:text-white"
                            >
                                시작하기
                            </a>
                        </div>
                    </nav>

                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <div className="relative z-10">
                            <div className="mb-6 inline-flex items-center rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm text-orange-200 backdrop-blur">
                                미래를 만드는 언어, Java로 시작하세요
                            </div>

                            <h2 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                                탄탄한 기초부터
                                <span className="block bg-gradient-to-r from-orange-300 via-amber-200 to-cyan-300 bg-clip-text text-transparent">
                                    실전 개발까지
                                </span>
                                연결되는 자바 프로그래밍
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                                Java 문법, 객체지향 프로그래밍, 알고리즘, 백엔드
                                확장까지. 학습자가 단계적으로 성장할 수 있도록
                                설계된 몰입형 랜딩 페이지입니다.
                            </p>

                            <div
                                className="mt-10 flex flex-wrap gap-4"
                                id="start"
                            >
                                <button className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:bg-orange-400">
                                    학습 시작하기
                                </button>
                                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10">
                                    커리큘럼 보기
                                </button>
                            </div>

                            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
                                {[
                                    ["01", "기초 문법"],
                                    ["02", "OOP 핵심"],
                                    ["03", "실전 확장"],
                                ].map(([num, label]) => (
                                    <div
                                        key={num}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                                    >
                                        <p className="text-xl font-bold text-orange-300">
                                            {num}
                                        </p>
                                        <p className="mt-2 text-sm text-white/70">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center [perspective:1400px]">
                            <div className="relative h-[520px] w-full [transform-style:preserve-3d] [transform:rotateX(18deg)_rotateY(-18deg)]">
                                <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-orange-300/30 bg-gradient-to-br from-orange-500/20 to-amber-200/10 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl [transform:translateZ(110px)]">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-white/60">
                                                Core Language
                                            </p>
                                            <h3 className="mt-1 text-3xl font-bold">
                                                JAVA
                                            </h3>
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-orange-200">
                                            OOP + Backend
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-4">
                                        {[
                                            "class Student { ... }",
                                            "public static void main",
                                            "List<String> skills",
                                            "try { } catch (Exception e)",
                                        ].map((line) => (
                                            <div
                                                key={line}
                                                className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 font-mono text-sm text-cyan-200"
                                            >
                                                {line}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="absolute left-[8%] top-[10%] w-52 rounded-[1.75rem] border border-cyan-300/20 bg-cyan-400/10 p-5 shadow-2xl backdrop-blur-xl [transform:translateZ(40px)_rotateY(18deg)]">
                                    <p className="text-sm text-cyan-200">
                                        핵심 개념
                                    </p>
                                    <h4 className="mt-2 text-xl font-bold">
                                        상속 · 다형성
                                    </h4>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        객체지향 설계를 통해 유지보수와 확장성을
                                        동시에 배웁니다.
                                    </p>
                                </div>

                                <div className="absolute bottom-[8%] right-[2%] w-56 rounded-[1.75rem] border border-orange-300/20 bg-orange-400/10 p-5 shadow-2xl backdrop-blur-xl [transform:translateZ(60px)_rotateY(-20deg)]">
                                    <p className="text-sm text-orange-200">
                                        실전 확장
                                    </p>
                                    <h4 className="mt-2 text-xl font-bold">
                                        Spring 연결
                                    </h4>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Java 기초가 끝나면 웹 백엔드와
                                        데이터베이스까지 연결할 수 있습니다.
                                    </p>
                                </div>

                                <div className="absolute bottom-10 left-1/2 h-44 w-[85%] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="features"
                className="relative mx-auto max-w-7xl px-6 pb-10 lg:px-10"
            >
                <div className="grid gap-6 md:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/8"
                        >
                            <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-400/40 to-cyan-300/20" />
                            <h3 className="text-xl font-semibold">
                                {feature.title}
                            </h3>
                            <p className="mt-4 leading-7 text-white/65">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                id="roadmap"
                className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
            >
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">
                            Roadmap
                        </p>
                        <h3 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                            자바 학습은
                            <span className="block text-white/70">
                                이런 흐름으로 강해집니다
                            </span>
                        </h3>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                            단순한 문법 암기가 아니라, 객체지향적 사고와 문제
                            해결 능력을 바탕으로 실제 프로젝트로 확장할 수 있는
                            구조를 중심으로 설계했습니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {steps.map((step, idx) => (
                            <div
                                key={step}
                                className="group flex items-center gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-orange-300/30 hover:bg-white/8"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-lg font-bold text-orange-300">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">
                                        {step}
                                    </h4>
                                    <p className="mt-1 text-sm leading-6 text-white/60">
                                        Java를 배우는 과정에서 자연스럽게 다음
                                        단계로 넘어갈 수 있도록 연결됩니다.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-orange-500/15 via-white/5 to-cyan-400/10 px-8 py-12 backdrop-blur-2xl md:px-12 md:py-16">
                    <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-orange-400/20 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />

                    <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm uppercase tracking-[0.3em] text-orange-200/90">
                                Start Java Now
                            </p>
                            <h3 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                                코드를 배우는 순간,
                                <span className="block">
                                    미래를 설계할 수 있습니다.
                                </span>
                            </h3>
                            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
                                Java는 기초 프로그래밍 교육, 알고리즘 학습,
                                백엔드 개발, 안드로이드 개발까지 넓게 확장되는
                                강력한 시작점입니다.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                                무료 가이드 받기
                            </button>
                            <button className="rounded-2xl border border-white/15 bg-slate-950/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-slate-950/50">
                                예제 코드 보기
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
