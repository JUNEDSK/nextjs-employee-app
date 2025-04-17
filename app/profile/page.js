'use client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { logout, setProfileImage } from '../../redux/slices/authSlice'

export default function ProfilePage() {
  const token = useSelector(state => state.auth.token)
  const profileImage = useSelector(state => state.auth.profileImage)
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        dispatch(setProfileImage(reader.result)) // ✅ Save to Redux
        localStorage.setItem('profileImage', reader.result) // ✅ Optional: Save to localStorage too
      }
      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    // ✅ Optional: Restore image from localStorage if available
    const savedImage = localStorage.getItem('profileImage')
    if (savedImage) {
      dispatch(setProfileImage(savedImage))
    }
  }, [dispatch])

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
        <>
          <div className="flex items-center space-x-4">
            <img
              src={profileImage || user.avatar}
              alt={user.first_name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">
                {user.first_name} {user.last_name}
              </p>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload New Profile Picture:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </>
      )}
    </div>
  )
}
