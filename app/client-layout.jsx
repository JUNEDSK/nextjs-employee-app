// app/client-layout.jsx
'use client'

import { usePathname } from 'next/navigation'
import Navbar from '../components/Navbar'

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const hideNavbarRoutes = ['/login']

  return (
    <>
      {!hideNavbarRoutes.includes(pathname) && <Navbar />}
      <main className="p-4">{children}</main>
    </>
  )
}
