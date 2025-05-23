'use client'

import { useState } from 'react'
import styles from '../page.module.css'

interface SidebarProps {
  /** controls mobile drawer open/closed */
  isOpen: boolean
  /** called to close the drawer on mobile */
  onClose: () => void
}

const chats = ['Customer A', 'Customer B', 'Customer C']

export default function Sidebar({ isOpen, onClose }: Readonly<SidebarProps>) {
  const [collapsed, setCollapsed] = useState(false)
  const classList = [
    styles.sidebar,
    collapsed && styles.collapsedSidebar,
    isOpen && styles.sidebarOpen 
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <aside className={classList}>
      <button
        className="md:hidden mb-4 p-2"
        onClick={onClose}
        aria-label="Close menu"
      >
        ✕
      </button>
      <button
        className={styles.toggleButton}
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? '▶' : '◀'}
      </button>
      {!collapsed && <h2 className={styles.title}>Chats</h2>}
      <ul>
        {chats.map((name) => (
          <li key={name} className={styles.chatItem}>
            {collapsed ? name.charAt(0) : name}
          </li>
        ))}
      </ul>
    </aside>
  )
}
