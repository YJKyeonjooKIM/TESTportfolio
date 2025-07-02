'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 폼 제출 로직을 구현하세요
    console.log(formData)
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">연락하기</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">연락처 정보</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <span className="font-medium mr-2">Email:</span>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </p>
            <p className="flex items-center">
              <span className="font-medium mr-2">위치:</span>
              대한민국 서울
            </p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">이름</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">이메일</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">메시지</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              메시지 보내기
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 