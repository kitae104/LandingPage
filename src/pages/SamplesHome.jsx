import React from 'react'
import { Link } from 'react-router-dom'
import { SAMPLES } from '../data/samples'

export default function SamplesHome() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold mb-2">랜딩 페이지 샘플 모음</h1>
          <p className="text-slate-600">원하는 주제를 선택해 랜딩 페이지를 미리 확인하세요.</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-6">
          {SAMPLES.map((s) => (
            <Link
              key={s.id}
              to={`/sample/${s.id}`}
              className="block bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow"
            >
              <img src={s.thumbnail} alt={s.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
