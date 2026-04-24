import { useState } from 'react'
import { Todo } from '../types'
import './TodoItem.css'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <li
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className="toggle-btn"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? '未完了に戻す' : '完了にする'}
      >
        <span className="checkmark">{todo.completed ? '✓' : ''}</span>
      </button>

      <span className="todo-text">{todo.text}</span>

      {hovered && (
        <button
          className="delete-btn"
          onClick={() => onDelete(todo.id)}
          aria-label="削除"
        >
          ✕
        </button>
      )}
    </li>
  )
}
