'use client'
import { useEffect, useRef } from 'react'
import styles from './Header.module.css'

export default function Header({ onMenuClick }: Readonly<{ onMenuClick: () => void }>) {
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <header className={styles.container}>
      <button className="md:hidden p-2 mr-4" onClick={onMenuClick} aria-label="Toggle menu">
        ☰
      </button>

      <h1 className={styles.title}>My AI Admin</h1>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <div className={styles.avatar} />
      </div>
    </header>
  )
}
