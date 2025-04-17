'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import useLogout from '@/hooks/useLogout'

export default function Navbar() {
  const user = useSelector((state) => state.auth.user)
  const [menuOpen, setMenuOpen] = useState(false)
  const logout = useLogout()

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Test Project
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden sm:flex space-x-4 items-center">
            <Link href="/" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition">Home</Link>
            <Link href="/employees" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition">Employees</Link>
            {user && (
              <Link href="/profile" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition">Profile</Link>
            )}

            {user ? (
              <button
                onClick={logout}
                className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition flex items-center gap-1"
              >
                <span>Logout</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <Link
                href="/login"
                className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden mt-2 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Home</Link>
            <Link href="/employees" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Employees</Link>
            {user && (
              <Link href="/profile" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Profile</Link>
            )}
            {user ? (
              <button
                onClick={() => {
                  setMenuOpen(false)
                  logout()
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Login</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
