'use client'

import { ReactNode, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function ClientLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Header onMenuClick={() => setOpen((v) => !v)} />
      <div style={{ display: 'flex' }}>
        <Sidebar isOpen={open} onClose={() => setOpen(false)} />
        <main style={{ flex: 1 }}>{children}</main>
      </div>
    </>
  )
}
