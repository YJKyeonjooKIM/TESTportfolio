'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold dark:text-white">
            Your Name
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              홈
            </Link>
            <Link href="/about" className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              소개
            </Link>
            <Link href="/projects" className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              프로젝트
            </Link>
            <Link href="/contact" className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              연락처
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
} 