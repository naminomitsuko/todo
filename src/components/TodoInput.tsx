'use client'
import { useState, KeyboardEvent } from 'react'
import styles from './TodoInput.module.css'

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
    <div className={styles.wrapper}>
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
