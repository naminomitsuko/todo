'use client'
import { useState } from 'react'
import { Todo } from '@/types'
import styles from './TodoItem.module.css'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <li
      className={`${styles.item} ${todo.completed ? styles.completed : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className={styles.toggle}
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? '未完了に戻す' : '完了にする'}
      >
        {todo.completed && <span className={styles.check}>✓</span>}
      </button>

      <span className={styles.text}>{todo.text}</span>

      {hovered && (
        <button
          className={styles.delete}
          onClick={() => onDelete(todo.id)}
          aria-label="削除"
        >
          ✕
        </button>
      )}
    </li>
  )
}
