'use client'
import { useSelector } from 'react-redux'
import Link from 'next/link'

export default function DashboardPage() {
  const user = useSelector(state => state.auth.user)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome{user ? `, ${user.name}` : ''} to Employee Manager
      </h1>

      <p className="text-gray-700 mb-6">
        Manage your team, track performance, and stay organized.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/employees"
          className="block p-4 bg-blue-100 rounded hover:bg-blue-200 transition"
        >
          👥 View All Employees
        </Link>
        <Link
          href="/employees/add"
          className="block p-4 bg-green-100 rounded hover:bg-green-200 transition"
        >
          ➕ Add New Employee
        </Link>
      </div>
    </div>
  )
}
