import { FilterType } from '../types'
import './TodoFilter.css'

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
    <div className="todo-filter">
      {FILTERS.map(f => (
        <button
          key={f.value}
          className={`filter-btn ${filter === f.value ? 'active' : ''}`}
          onClick={() => onChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
