import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SamplesHome from './pages/SamplesHome'
import TopicLanding from './pages/TopicLanding'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">페이지를 찾을 수 없습니다</h2>
        <p className="text-slate-600">샘플 목록으로 돌아가서 선택해 주세요.</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SamplesHome />} />
        <Route path="/sample/:id" element={<TopicLanding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}