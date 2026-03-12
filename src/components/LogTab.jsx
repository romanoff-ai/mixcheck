import { useState, useEffect } from 'react'
import { getDisplayName } from '../data/ingredients'

const STATUS_CONFIG = {
  created: { label: 'Created', emoji: '💡', color: '#8b5cf6', bg: 'bg-purple-500/10 border-purple-500/30' },
  tested: { label: 'Tested', emoji: '🧪', color: '#f59e0b', bg: 'bg-amber-500/10 border-amber-500/30' },
  made: { label: 'Made', emoji: '🍸', color: '#10b981', bg: 'bg-emerald-500/10 border-emerald-500/30' },
}

function loadLog() {
  try {
    return JSON.parse(localStorage.getItem('mixcheck_log') || '[]')
  } catch { return [] }
}

function saveLog(log) {
  localStorage.setItem('mixcheck_log', JSON.stringify(log))
}

export default function LogTab() {
  const [log, setLog] = useState(loadLog)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [showAdd, setShowAdd] = useState(false)

  const filtered = log.filter(entry => {
    const matchStatus = filter === 'all' || entry.status === filter
    const q = search.toLowerCase()
    const matchSearch = !q ||
      entry.name.toLowerCase().includes(q) ||
      (entry.ingredients || []).some(i => getDisplayName(i).toLowerCase().includes(q) || i.includes(q)) ||
      (entry.notes || '').toLowerCase().includes(q)
    return matchStatus && matchSearch
  }).sort((a, b) => new Date(b.date) - new Date(a.date))

  const updateEntry = (id, updates) => {
    const next = log.map(e => e.id === id ? { ...e, ...updates } : e)
    setLog(next)
    saveLog(next)
  }

  const deleteEntry = (id) => {
    const next = log.filter(e => e.id !== id)
    setLog(next)
    saveLog(next)
  }

  const addEntry = (entry) => {
    const next = [{ ...entry, id: Date.now().toString(), date: entry.date || new Date().toISOString() }, ...log]
    setLog(next)
    saveLog(next)
    setShowAdd(false)
  }

  return (
    <div className="px-4 py-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Drink Log</h2>
        <button
          onClick={() => setShowAdd(true)}
          className="px-4 py-2 bg-emerald-500 rounded-xl text-white text-sm font-semibold active:bg-emerald-600"
        >
          + Add
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">🔍</span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search name or ingredient…"
          className="w-full pl-9 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-base focus:outline-none focus:border-zinc-600"
        />
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2">
        {[['all', 'All', '📋'], ...Object.entries(STATUS_CONFIG).map(([k, v]) => [k, v.label, v.emoji])].map(([id, label, emoji]) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-colors ${
              filter === id ? 'bg-zinc-700 text-white' : 'bg-zinc-900 text-zinc-500'
            }`}
          >
            {emoji} {label}
          </button>
        ))}
      </div>

      {/* Stats bar */}
      <div className="flex gap-3">
        {Object.entries(STATUS_CONFIG).map(([k, v]) => {
          const count = log.filter(e => e.status === k).length
          return (
            <div key={k} className="flex-1 text-center py-2 rounded-xl bg-zinc-900">
              <div className="text-lg font-bold" style={{ color: v.color }}>{count}</div>
              <div className="text-xs text-zinc-600">{v.label}</div>
            </div>
          )
        })}
      </div>

      {/* Entries */}
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-4xl mb-3">📋</div>
          <p className="text-zinc-500">
            {log.length === 0 ? 'Your drink log is empty. Start building!' : 'No drinks match your filter.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(entry => (
            <DrinkCard
              key={entry.id}
              entry={entry}
              onUpdate={(updates) => updateEntry(entry.id, updates)}
              onDelete={() => deleteEntry(entry.id)}
              isEditing={editingId === entry.id}
              onEditToggle={() => setEditingId(editingId === entry.id ? null : entry.id)}
            />
          ))}
        </div>
      )}

      {/* Add modal */}
      {showAdd && (
        <AddModal onAdd={addEntry} onClose={() => setShowAdd(false)} />
      )}
    </div>
  )
}

function DrinkCard({ entry, onUpdate, onDelete, isEditing, onEditToggle }) {
  const sc = STATUS_CONFIG[entry.status] || STATUS_CONFIG.created
  const [editNotes, setEditNotes] = useState(entry.notes || '')
  const [editName, setEditName] = useState(entry.name)

  const saveEdit = () => {
    onUpdate({ name: editName, notes: editNotes })
    onEditToggle()
  }

  const cycleStatus = () => {
    const statuses = ['created', 'tested', 'made']
    const next = statuses[(statuses.indexOf(entry.status) + 1) % statuses.length]
    onUpdate({ status: next })
  }

  return (
    <div className={`rounded-xl border p-4 space-y-3 ${sc.bg}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              value={editName}
              onChange={e => setEditName(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-2 py-1 text-white font-bold text-base focus:outline-none focus:border-emerald-500"
            />
          ) : (
            <h3 className="font-bold text-white text-base truncate">{entry.name}</h3>
          )}
          <div className="text-xs text-zinc-500 mt-0.5">
            {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Status badge — tap to cycle */}
          <button
            onClick={cycleStatus}
            className="px-2 py-1 rounded-full text-xs font-semibold"
            style={{ background: sc.color + '33', color: sc.color }}
          >
            {sc.emoji} {sc.label}
          </button>
        </div>
      </div>

      {/* Ingredients */}
      {(entry.ingredients || []).length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {entry.ingredients.map((ing, i) => (
            <span key={i} className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 text-xs">
              {typeof ing === 'string' && ing.includes('_') ? getDisplayName(ing) : ing}
            </span>
          ))}
        </div>
      )}

      {/* Rating */}
      <StarRating
        value={entry.rating || 0}
        onChange={v => onUpdate({ rating: v })}
      />

      {/* Notes */}
      {isEditing ? (
        <textarea
          value={editNotes}
          onChange={e => setEditNotes(e.target.value)}
          placeholder="Tasting notes, adjustments…"
          rows={3}
          className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-3 py-2 text-zinc-300 text-sm focus:outline-none focus:border-emerald-500 resize-none"
        />
      ) : (
        entry.notes && <p className="text-sm text-zinc-400 leading-relaxed">{entry.notes}</p>
      )}

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        {isEditing ? (
          <>
            <button onClick={saveEdit} className="flex-1 py-2 bg-emerald-500 rounded-lg text-white text-sm font-semibold">Save</button>
            <button onClick={onEditToggle} className="px-4 py-2 bg-zinc-800 rounded-lg text-zinc-400 text-sm">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={onEditToggle} className="flex-1 py-2 bg-zinc-800 rounded-lg text-zinc-400 text-sm font-medium">Edit</button>
            <button onClick={onDelete} className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">Delete</button>
          </>
        )}
      </div>
    </div>
  )
}

function StarRating({ value, onChange }) {
  const [hover, setHover] = useState(0)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          onClick={() => onChange(n === value ? 0 : n)}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          className="text-xl transition-colors"
          style={{ color: n <= (hover || value) ? '#f59e0b' : '#374151' }}
        >
          ★
        </button>
      ))}
    </div>
  )
}

function AddModal({ onAdd, onClose }) {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [status, setStatus] = useState('created')
  const [notes, setNotes] = useState('')
  const [rating, setRating] = useState(0)

  const submit = () => {
    if (!name.trim()) return
    const ingList = ingredients.split(',').map(s => s.trim()).filter(Boolean)
    onAdd({ name: name.trim(), ingredients: ingList, status, notes, rating })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/70" onClick={onClose}>
      <div className="w-full bg-[#111] rounded-t-2xl p-5 space-y-4 max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">New Drink</h3>
          <button onClick={onClose} className="text-zinc-500 text-2xl">×</button>
        </div>

        <div className="space-y-3">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Drink name *"
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 text-base focus:outline-none focus:border-emerald-500"
          />

          <input
            value={ingredients}
            onChange={e => setIngredients(e.target.value)}
            placeholder="Ingredients (comma separated)"
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 text-base focus:outline-none focus:border-emerald-500"
          />

          <div className="flex gap-2">
            {Object.entries(STATUS_CONFIG).map(([k, v]) => (
              <button
                key={k}
                onClick={() => setStatus(k)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  status === k ? 'text-white' : 'bg-zinc-900 text-zinc-500'
                }`}
                style={status === k ? { background: v.color + '33', color: v.color, border: `1px solid ${v.color}55` } : {}}
              >
                {v.emoji} {v.label}
              </button>
            ))}
          </div>

          <StarRating value={rating} onChange={setRating} />

          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Notes, tasting, adjustments…"
            rows={3}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-600 text-base focus:outline-none focus:border-emerald-500 resize-none"
          />

          <button
            onClick={submit}
            disabled={!name.trim()}
            className="w-full py-3 bg-emerald-500 disabled:opacity-40 rounded-xl text-white font-bold text-base"
          >
            Save Drink
          </button>
        </div>
      </div>
    </div>
  )
}
