import { useState, useCallback } from 'react'
import { Todo, FilterType } from './types'
import { useTodos } from './hooks/useTodos'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import './App.css'

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos()
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredTodos = useCallback(() => {
    switch (filter) {
      case 'active':
        return todos.filter((t: Todo) => !t.completed)
      case 'completed':
        return todos.filter((t: Todo) => t.completed)
      default:
        return todos
    }
  }, [todos, filter])()

  const activeCount = todos.filter((t: Todo) => !t.completed).length
  const completedCount = todos.filter((t: Todo) => t.completed).length

  return (
    <div className="app">
      <header className="app-header">
        <h1>TODO</h1>
      </header>

      <main className="app-main">
        <TodoInput onAdd={addTodo} />

        {todos.length > 0 && (
          <>
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />

            <footer className="app-footer">
              <span className="todo-count">
                {activeCount} 件残っています
              </span>

              <TodoFilter filter={filter} onChange={setFilter} />

              {completedCount > 0 && (
                <button className="clear-btn" onClick={clearCompleted}>
                  完了済みを削除
                </button>
              )}
            </footer>
          </>
        )}

        {todos.length === 0 && (
          <div className="empty-state">
            <p>タスクを追加してください</p>
          </div>
        )}
      </main>
    </div>
  )
}
