import React from "react";
import { Camera, Video, MessageSquare, Users, ArrowRight } from "lucide-react";
import WebcamDemo from "../../../components/WebcamDemo";

export default function AISignLanding() {
    return (
        <div className="antialiased text-slate-900 dark:text-slate-50">
            <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                            AI
                        </div>
                        <span className="text-xl font-bold">AI 수화통역</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="#features"
                            className="text-sm text-slate-600 hover:text-indigo-600"
                        >
                            기능
                        </a>
                        <a
                            href="#how"
                            className="text-sm text-slate-600 hover:text-indigo-600"
                        >
                            작동 방식
                        </a>
                        <a
                            href="#demo"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-full"
                        >
                            데모 보기
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-28">
                <section className="relative pt-16 pb-12">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-extrabold mb-6">
                                웹캠으로 바로 연결되는
                                <br />
                                <span className="text-indigo-600">
                                    AI 실시간 수화 통역
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-6">
                                관공서·병원·민원창구에서 웹캠과 AI를 이용해 즉시
                                수화 통역 서비스를 제공합니다.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="#demo"
                                    className="inline-flex px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold items-center gap-2"
                                >
                                    데모 시작 <ArrowRight size={18} />
                                </a>
                                <a
                                    href="#how"
                                    className="px-6 py-3 border rounded-2xl text-slate-700"
                                >
                                    자세히 보기
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-3xl p-4 shadow-2xl">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
                                    <Camera
                                        size={96}
                                        className="text-indigo-500"
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="font-bold">
                                        실시간 수화 인식 + 음성 합성
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        웹캠으로 포착한 수화를 AI가 실시간
                                        해석해 음성/자막으로 제공합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-20 bg-slate-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6">주요 기능</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow">
                                <div className="mb-3">
                                    <Video
                                        size={24}
                                        className="text-indigo-600"
                                    />
                                </div>
                                <h3 className="font-bold mb-2">
                                    실시간 영상 처리
                                </h3>
                                <p className="text-sm text-slate-500">
                                    지연 최소화로 즉시 통역 결과 제공.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow">
                                <div className="mb-3">
                                    <MessageSquare
                                        size={24}
                                        className="text-indigo-600"
                                    />
                                </div>
                                <h3 className="font-bold mb-2">
                                    자막 및 음성 출력
                                </h3>
                                <p className="text-sm text-slate-500">
                                    수화를 텍스트와 음성으로 동시에 제공합니다.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow">
                                <div className="mb-3">
                                    <Users
                                        size={24}
                                        className="text-indigo-600"
                                    />
                                </div>
                                <h3 className="font-bold mb-2">
                                    개인정보 보호
                                </h3>
                                <p className="text-sm text-slate-500">
                                    로컬 웹캠 처리 옵션으로 민감한 데이터 보호.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="how" className="py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6">작동 방식</h2>
                        <ol className="space-y-4 text-slate-600">
                            <li>1) 웹캠에서 손 동작을 캡처합니다.</li>
                            <li>
                                2) 모델이 손 모양과 움직임, 표정을 해석합니다.
                            </li>
                            <li>
                                3) 결과를 텍스트/음성으로 출력하거나 실시간
                                자막으로 표시합니다.
                            </li>
                        </ol>
                    </div>
                </section>

                <section id="demo" className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6">
                            데모: 웹캠 연결
                        </h2>
                        <p className="text-slate-600 mb-6">
                            브라우저 권한 허용 후 웹캠을 통해 실시간으로 화면을
                            확인할 수 있습니다. (이 예제는 AI 통역 연동을 위한
                            기본 UI/플로우를 제공합니다.)
                        </p>
                        <WebcamDemo />
                    </div>
                </section>

                <section className="py-16 bg-slate-50">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h3 className="text-2xl font-bold mb-3">
                            관공서 도입 사례
                        </h3>
                        <p className="text-slate-600 mb-6">
                            민원실과 병원에서 시범 운영 중인 표준 워크플로우
                            제공.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-6 py-3 bg-indigo-600 text-white rounded">
                                데모 요청
                            </button>
                            <a href="#" className="px-6 py-3 border rounded">
                                기술 자료 다운로드
                            </a>
                        </div>
                    </div>
                </section>

                <footer className="py-12">
                    <div className="max-w-6xl mx-auto px-6 text-center text-slate-500">
                        © {new Date().getFullYear()} AI 수화통역 프로젝트
                    </div>
                </footer>
            </main>
        </div>
    );
}
