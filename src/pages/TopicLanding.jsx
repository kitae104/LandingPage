import React, { Suspense } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SAMPLES } from '../data/samples'

export default function TopicLanding() {
  const { id } = useParams()
  const sample = SAMPLES.find((s) => s.id === id)

  if (!sample) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">샘플을 찾을 수 없습니다</h2>
          <p className="text-slate-600 mb-6">샘플 목록으로 돌아가 다른 항목을 선택해주세요.</p>
          <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded">샘플 목록으로</Link>
        </div>
      </div>
    )
  }

  const LazyComp = React.lazy(sample.loader)

  return (
    <Suspense fallback={<div className="p-8">로딩 중...</div>}>
      <LazyComp />
    </Suspense>
  )
}
