'use client'

import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { setToken, setUser } from '@/redux/slices/authSlice'

const useLogout = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    router.push('/login')
  }

  return handleLogout
}

export default useLogout
