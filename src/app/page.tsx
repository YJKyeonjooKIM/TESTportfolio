'use client'

import { motion } from 'framer-motion'

export default function Home() {
  const techSkills = ['JS', 'TS', 'React', 'Tailwindcss', 'Premierepro']

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Profile Section */}
      <motion.div 
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-6 border-b border-sky-700 pb-2 text-sky-400">Profile : Title</h2>
        <div className="flex items-start gap-8">
          <div className="w-32 h-32 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-600 to-blue-800 flex items-center justify-center text-xl text-white shadow-lg">
              사진
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 text-blue-400">_I AM</h3>
              <p className="mb-2 text-gray-300">이름 :  옴옴이</p>
              <p className="mb-2 text-gray-300">포지션: 많이 모구기 / 통통이에서 뚱뚱이 대으기</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 text-blue-400">_Contact</h3>
              <p className="mb-2 text-gray-300">Email : omomee</p>
              <p className="mb-2 text-gray-300">Phone : +082 - 1234-5678</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-blue-400">_Channel</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-16 text-gray-300">SNS :</span>
                  <div className="flex-1 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-inner"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-16 text-gray-300">GitHub :</span>
                  <div className="flex-1 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Introduce Section */}
      <motion.div 
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-6 border-b border-sky-700 pb-2 text-sky-400">Introduce</h2>
        <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 shadow-inner">
          <p className="text-center text-gray-300">
            간단한 자기소개 및 인사말
          </p>
        </div>
      </motion.div>

      {/* Tech Skill Section */}
      <motion.div 
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-6 border-b border-sky-700 pb-2 text-sky-400">Tech Skill</h2>
        <div className="flex flex-wrap gap-4">
          {techSkills.map((skill) => (
            <div 
              key={skill}
              className="px-4 py-2 bg-gradient-to-r from-sky-900 to-blue-900 text-sky-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:from-sky-800 hover:to-blue-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}