'use client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { logout } from '../../redux/slices/authSlice'

export default function ProfilePage() {
  const token = useSelector(state => state.auth.token)
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (!token) {
      router.push('/login')
      return
    }

    const fetchUser = async () => {
      try {
        const res = await fetch('https://reqres.in/api/users/2')
        if (!res.ok) throw new Error(`Error ${res.status}`)
        const data = await res.json()
        setUser(data.data)
      } catch (error) {
        console.error('Fetch error:', error)
        setUser({ error: 'Could not load profile' })
      }
    }

    fetchUser()
  }, [token, router])

  const handleLogout = () => {
    dispatch(logout())
    router.push('/login')
  }

  if (!user) return <p className="p-4">Loading...</p>

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">User Profile</h2>
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>

      {user.error ? (
        <p className="text-red-500">{user.error}</p>
      ) : (
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.first_name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="font-semibold">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>
      )}
    </div>
  )
}
