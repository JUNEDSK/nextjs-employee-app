'use client'

import useLogout from '@/hooks/useLogout'

const LogoutButton = () => {
  const logout = useLogout()

  return (
    <button onClick={logout} className="text-red-500 px-4 py-2 hover:underline">
      Logout
    </button>
  )
}

export default LogoutButton
