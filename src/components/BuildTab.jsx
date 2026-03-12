import { useState, useEffect } from 'react'
import { INGREDIENTS_DB, ALL_INGREDIENT_KEYS, getDisplayName, getCategoryColor } from '../data/ingredients'
import { suggestSpec } from '../utils/pairingAlgorithm'

const STATUS_CONFIG = {
  created: { label: 'Created', emoji: '💡', color: '#8b5cf6' },
  tested: { label: 'Tested', emoji: '🧪', color: '#f59e0b' },
  made: { label: 'Made', emoji: '🍸', color: '#10b981' },
}

function loadLog() {
  try { return JSON.parse(localStorage.getItem('mixcheck_log') || '[]') } catch { return [] }
}
function saveLog(log) { localStorage.setItem('mixcheck_log', JSON.stringify(log)) }

export default function BuildTab({ initialIngredients = [], initialName = '', onSaved }) {
  const [drinkName, setDrinkName] = useState(initialName || '')
  const [selectedIngredients, setSelectedIngredients] = useState(initialIngredients || [])
  const [spec, setSpec] = useState([])
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState('created')
  const [saved, setSaved] = useState(false)
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [method, setMethod] = useState('shaken')

  // Generate spec whenever ingredients change
  useEffect(() => {
    if (selectedIngredients.length > 0) {
      const generated = suggestSpec(selectedIngredients)
      setSpec(generated)
    }
  }, [selectedIngredients])

  useEffect(() => {
    if (initialIngredients?.length > 0) {
      setSelectedIngredients(initialIngredients)
    }
  }, [initialIngredients])

  const updateSpecLine = (idx, field, value) => {
    setSpec(prev => prev.map((line, i) => i === idx ? { ...line, [field]: value } : line))
  }

  const removeSpecLine = (idx) => {
    setSpec(prev => prev.filter((_, i) => i !== idx))
  }

  const addSpecLine = () => {
    setSpec(prev => [...prev, { key: '', amount: 1, unit: 'oz', role: 'ingredient' }])
  }

  const filtered = ALL_INGREDIENT_KEYS.filter(k => {
    const q = search.toLowerCase()
    return !selectedIngredients.includes(k) && (
      k.includes(q) ||
      getDisplayName(k).toLowerCase().includes(q) ||
      (INGREDIENTS_DB[k]?.category || '').includes(q)
    )
  }).slice(0, 10)

  const addToSpec = (key) => {
    setSelectedIngredients(prev => [...prev, key])
    setSearch('')
    setShowSearch(false)
  }

  const saveToLog = () => {
    const log = loadLog()
    const entry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      name: drinkName || 'Untitled Cocktail',
      ingredients: spec.map(l => l.key || l.customName || '').filter(Boolean),
      status,
      notes,
      rating: 0,
      spec: spec,
      method,
    }
    saveLog([entry, ...log])
    setSaved(true)
    setTimeout(() => {
      setSaved(false)
      if (onSaved) onSaved()
    }, 1500)
  }

  const roleColors = {
    base: '#8b5cf6',
    modifier: '#ec4899',
    citrus: '#f59e0b',
    sweetener: '#10b981',
    herb: '#6ee7b7',
    accent: '#f87171',
    mixer: '#60a5fa',
    garnish: '#a78bfa',
    ingredient: '#9ca3af',
  }

  return (
    <div className="px-4 py-5 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Quick Spec Builder</h2>
      </div>

      {/* Drink name */}
      <input
        value={drinkName}
        onChange={e => setDrinkName(e.target.value)}
        placeholder="Cocktail name…"
        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 text-base font-semibold focus:outline-none focus:border-emerald-500"
      />

      {/* Method selector */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Method</label>
        <div className="flex gap-2">
          {['shaken', 'stirred', 'built', 'blended'].map(m => (
            <button
              key={m}
              onClick={() => setMethod(m)}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold capitalize transition-colors ${
                method === m ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-900 text-zinc-500'
              }`}
            >
              {m === 'shaken' ? '🥤' : m === 'stirred' ? '🥃' : m === 'built' ? '🧊' : '🌀'} {m}
            </button>
          ))}
        </div>
      </div>

      {/* Spec lines */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Spec</label>
          <button onClick={addSpecLine} className="text-xs text-emerald-500 font-semibold">+ Add line</button>
        </div>

        {spec.length === 0 && selectedIngredients.length === 0 ? (
          <div className="text-center py-8 text-zinc-600 text-sm">
            Add ingredients below to generate your spec
          </div>
        ) : (
          <div className="space-y-2">
            {spec.map((line, idx) => {
              const roleColor = roleColors[line.role] || '#9ca3af'
              return (
                <div key={idx} className="flex items-center gap-2 p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  {/* Role indicator */}
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: roleColor }} />

                  {/* Ingredient name */}
                  <div className="flex-1 min-w-0">
                    {line.key ? (
                      <div className="text-sm font-medium text-white truncate">{getDisplayName(line.key)}</div>
                    ) : (
                      <input
                        value={line.customName || ''}
                        onChange={e => updateSpecLine(idx, 'customName', e.target.value)}
                        placeholder="Ingredient…"
                        className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-zinc-600"
                      />
                    )}
                    <div className="text-xs text-zinc-600 capitalize">{line.role}</div>
                  </div>

                  {/* Amount */}
                  <input
                    type="number"
                    value={line.amount}
                    onChange={e => updateSpecLine(idx, 'amount', parseFloat(e.target.value) || 0)}
                    step="0.25"
                    min="0"
                    className="w-14 bg-zinc-800 border border-zinc-700 rounded-lg px-2 py-1 text-white text-sm text-center focus:outline-none focus:border-emerald-500"
                  />

                  {/* Unit */}
                  <input
                    value={line.unit}
                    onChange={e => updateSpecLine(idx, 'unit', e.target.value)}
                    placeholder="oz"
                    className="w-16 bg-zinc-800 border border-zinc-700 rounded-lg px-2 py-1 text-zinc-400 text-sm focus:outline-none focus:border-emerald-500"
                  />

                  {/* Remove */}
                  <button
                    onClick={() => removeSpecLine(idx)}
                    className="text-zinc-600 text-lg flex-shrink-0 active:text-red-400"
                  >×</button>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Add more ingredients */}
      <div className="space-y-2">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="w-full py-2.5 border border-dashed border-zinc-700 rounded-xl text-zinc-500 text-sm font-medium hover:border-zinc-500 transition-colors"
        >
          + Add Ingredient to Spec
        </button>

        {showSearch && (
          <div className="space-y-2">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search ingredients…"
              autoFocus
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 text-base focus:outline-none focus:border-emerald-500"
            />
            {filtered.length > 0 && (
              <div className="grid grid-cols-2 gap-1.5">
                {filtered.map(key => {
                  const ing = INGREDIENTS_DB[key]
                  const color = getCategoryColor(ing?.category)
                  return (
                    <button
                      key={key}
                      onClick={() => addToSpec(key)}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-left"
                    >
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                      <div className="min-w-0">
                        <div className="text-sm text-white font-medium truncate">{getDisplayName(key)}</div>
                        <div className="text-xs text-zinc-600 capitalize">{ing?.category}</div>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Notes</label>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Inspiration, adjustments, serve…"
          rows={3}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500 resize-none"
        />
      </div>

      {/* Status */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Status</label>
        <div className="flex gap-2">
          {Object.entries(STATUS_CONFIG).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setStatus(k)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors`}
              style={
                status === k
                  ? { background: v.color + '22', color: v.color, border: `1px solid ${v.color}44` }
                  : { background: '#111', color: '#6b7280' }
              }
            >
              {v.emoji} {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Save */}
      <button
        onClick={saveToLog}
        disabled={saved}
        className={`w-full py-4 rounded-xl text-white font-bold text-base transition-all ${
          saved ? 'bg-emerald-600' : 'bg-emerald-500 active:bg-emerald-600'
        }`}
      >
        {saved ? '✅ Saved to Log!' : '💾 Save to Drink Log'}
      </button>
    </div>
  )
}
