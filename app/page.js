'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function Home() {
  const router = useRouter()
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    if (token === null) {
      router.push('/login')
    } else if (token) {
      router.push('/dashboard')
    }
  }, [token])

  return null
}
