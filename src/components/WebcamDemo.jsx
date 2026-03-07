import React, { useRef, useEffect, useState } from "react";

export default function WebcamDemo() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [streaming, setStreaming] = useState(false);
    const [error, setError] = useState(null);

    const start = async () => {
        setError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                await videoRef.current.play();
                setStreaming(true);
                requestAnimationFrame(drawLoop);
            }
        } catch (err) {
            setError(err.message || "카메라 접근 오류");
        }
    };

    const stop = () => {
        const stream = videoRef.current?.srcObject;
        if (stream && stream.getTracks) {
            stream.getTracks().forEach((t) => t.stop());
        }
        if (videoRef.current) videoRef.current.srcObject = null;
        setStreaming(false);
    };

    const drawLoop = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!streaming || !video || !canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 360;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        // Placeholder overlay to simulate AI status
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.fillRect(0, canvas.height - 36, canvas.width, 36);
        ctx.fillStyle = "#fff";
        ctx.font = "16px sans-serif";
        ctx.fillText("AI 통역 대기중...", 12, canvas.height - 12);
        requestAnimationFrame(drawLoop);
    };

    useEffect(() => {
        return () => stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
            <div className="aspect-[16/9] bg-black rounded overflow-hidden mb-4 relative">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    playsInline
                    muted
                />
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                />
            </div>

            <div className="flex gap-3 justify-center">
                {!streaming ? (
                    <button
                        onClick={start}
                        className="px-6 py-2 bg-indigo-600 text-white rounded"
                    >
                        웹캠 시작
                    </button>
                ) : (
                    <button onClick={stop} className="px-6 py-2 border rounded">
                        중지
                    </button>
                )}
                <button
                    onClick={() =>
                        alert("여기에 AI 통역 연동 로직을 추가하세요.")
                    }
                    className="px-6 py-2 border rounded"
                >
                    AI 통역 시뮬레이션
                </button>
            </div>

            {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
        </div>
    );
}
