import { useState, KeyboardEvent } from 'react'
import './TodoInput.css'

interface Props {
  onAdd: (text: string) => void
}

export default function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('')

  const submit = () => {
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') submit()
  }

  return (
    <div className="todo-input">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKey}
        placeholder="タスクを入力してEnterキーを押す..."
        autoFocus
      />
      <button onClick={submit} disabled={!value.trim()}>
        追加
      </button>
    </div>
  )
}
