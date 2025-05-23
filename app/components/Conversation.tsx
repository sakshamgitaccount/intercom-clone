// app/components/Conversation.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './Conversation.module.css'

type Message = {
  id: number
  text: string
  sender: 'agent' | 'user'
  timestamp: string
}

const initial: Message[] = [
  { id: 1, sender: 'agent', text: 'Hello! How can I help you today?', timestamp: '10:00 AM' },
  { id: 2, sender: 'user',  text: 'I have a question about my order.',  timestamp: '10:01 AM' },
]

export default function Conversation() {
  const [messages, setMessages] = useState<Message[]>(initial)
  const [draft, setDraft] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom whenever messages or typing state changes
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const send = () => {
    const text = draft.trim()
    if (!text) return

    const now = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })

    // 1️⃣ Add the user's message
    setMessages((msgs) => [
      ...msgs,
      { id: msgs.length + 1, sender: 'user', text, timestamp: now },
    ])
    setDraft('')

    // 2️⃣ Simulate agent "typing..."
    setIsTyping(true)
    setTimeout(() => {
      const replyTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })

      // 3️⃣ Add the agent's reply
      setMessages((msgs) => [
        ...msgs,
        {
          id: msgs.length + 1, // always the next unique id
          sender: 'agent',
          text: "Sure—I'll look into that and get back to you shortly!",
          timestamp: replyTime,
        },
      ])
      setIsTyping(false)
    }, 1500) // 1.5s simulated typing
  }

  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        {messages.map((m) => (
          <div
            key={m.id}
            className={`${styles.message} ${
              m.sender === 'user' ? styles.outgoing : styles.incoming
            }`}
          >
            <div className={styles.bubble}>{m.text}</div>
            <div className={styles.timestamp}>{m.timestamp}</div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className={`${styles.message} ${styles.incoming} ${styles.typingBubble}`}>
            <div className={styles.bubble}>Agent is typing...</div>
          </div>
        )}

        {/* Dummy element to scroll into */}
        <div ref={endRef} />
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type a message…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
        />
        <button
          onClick={send}
          disabled={!draft.trim()}
          style={{
            opacity: draft.trim() ? 1 : 0.5,
            cursor: draft.trim() ? 'pointer' : 'not-allowed',
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}
