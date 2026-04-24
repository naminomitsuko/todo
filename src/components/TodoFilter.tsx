'use client'
import { FilterType } from '@/types'
import styles from './TodoFilter.module.css'

interface Props {
  filter: FilterType
  onChange: (filter: FilterType) => void
}

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'すべて', value: 'all' },
  { label: '未完了', value: 'active' },
  { label: '完了済み', value: 'completed' },
]

export default function TodoFilter({ filter, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      {FILTERS.map(f => (
        <button
          key={f.value}
          className={`${styles.btn} ${filter === f.value ? styles.active : ''}`}
          onClick={() => onChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
