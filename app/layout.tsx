// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import ClientLayout from './components/ClientLayout' 

export const metadata = {
  title: 'My AI Admin',
  description: 'Intercom-style clone',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '"Inter", sans-serif' }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
