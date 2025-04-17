// app/layout.js or app/layout.tsx
import './globals.css'
import Providers from './provider'
import ClientLayout from './client-layout'

export const metadata = {
  title: 'Serb',
  description: 'Employee app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  )
}
