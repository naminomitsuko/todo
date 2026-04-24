'use client'
import { useState } from 'react'
import { FilterType, Todo } from '@/types'
import { useTodos } from '@/hooks/useTodos'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import styles from './TodoApp.module.css'

export default function TodoApp() {
  const { todos, hydrated, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos()
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered: Todo[] = todos.filter(t => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const activeCount = todos.filter(t => !t.completed).length
  const completedCount = todos.filter(t => t.completed).length

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>TODO</h1>
      </header>

      <main>
        <TodoInput onAdd={addTodo} />

        {hydrated && todos.length > 0 && (
          <>
            <TodoList todos={filtered} onToggle={toggleTodo} onDelete={deleteTodo} />

            <footer className={styles.footer}>
              <span className={styles.count}>{activeCount} 件残っています</span>

              <TodoFilter filter={filter} onChange={setFilter} />

              {completedCount > 0 && (
                <button className={styles.clearBtn} onClick={clearCompleted}>
                  完了済みを削除
                </button>
              )}
            </footer>
          </>
        )}

        {hydrated && todos.length === 0 && (
          <p className={styles.empty}>タスクを追加してください</p>
        )}
      </main>
    </div>
  )
}
