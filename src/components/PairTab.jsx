import { useState, useMemo, useRef } from 'react'
import { INGREDIENTS_DB, ALL_INGREDIENT_KEYS, getDisplayName, getCategoryColor } from '../data/ingredients'
import { calculatePairing } from '../utils/pairingAlgorithm'
import CocktailPrompt from './CocktailPrompt'

export default function PairTab({ onBuildSpec }) {
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef(null)
  const result = useMemo(() => calculatePairing(selected), [selected])

  const filtered = useMemo(() => {
    if (!search.trim()) return []
    const q = search.toLowerCase()
    return ALL_INGREDIENT_KEYS
      .filter(k => !selected.includes(k) && (
        k.includes(q) ||
        getDisplayName(k).toLowerCase().includes(q) ||
        (INGREDIENTS_DB[k]?.flavors || []).some(f => f.includes(q)) ||
        (INGREDIENTS_DB[k]?.category || '').includes(q) ||
        (INGREDIENTS_DB[k]?.subcategory || '').includes(q)
      ))
      .slice(0, 12)
  }, [search, selected])

  const addIngredient = (key) => {
    if (selected.length >= 4) return
    setSelected(prev => [...prev, key])
    setSearch('')
    setShowSearch(false)
  }

  const removeIngredient = (key) => {
    setSelected(prev => prev.filter(k => k !== key))
  }

  const openSearch = () => {
    setShowSearch(true)
    setTimeout(() => searchRef.current?.focus(), 50)
  }

  const levelConfig = {
    great: { color: '#10b981', bg: 'bg-emerald-500/10 border-emerald-500/30', label: 'Great Pairing', emoji: '✅' },
    interesting: { color: '#f59e0b', bg: 'bg-amber-500/10 border-amber-500/30', label: 'Interesting Tension', emoji: '⚡' },
    clash: { color: '#ef4444', bg: 'bg-red-500/10 border-red-500/30', label: 'Flavor Clash', emoji: '❌' },
  }

  const conf = result ? levelConfig[result.level] : null

  return (
    <div className="px-4 py-5 space-y-5">
      {/* ── AI Cocktail Prompt ─────────────────────────────── */}
      <CocktailPrompt
        onAddIngredient={addIngredient}
        selected={selected}
      />

      {/* Selected ingredients */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Ingredients</h2>
          <span className="text-xs text-zinc-600">{selected.length}/4</span>
        </div>

        <div className="flex flex-wrap gap-2 min-h-[52px] p-3 rounded-xl bg-zinc-900 border border-zinc-800">
          {selected.map(key => {
            const ing = INGREDIENTS_DB[key]
            const color = getCategoryColor(ing?.category)
            return (
              <button
                key={key}
                onClick={() => removeIngredient(key)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all active:scale-95"
                style={{ background: color + '22', border: `1px solid ${color}55`, color }}
              >
                {getDisplayName(key)}
                <span className="text-xs opacity-60">×</span>
              </button>
            )
          })}

          {selected.length < 4 && (
            <button
              onClick={openSearch}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm text-zinc-500 border border-dashed border-zinc-700 hover:border-zinc-500 transition-colors"
            >
              <span className="text-base leading-none">+</span>
              <span>Add</span>
            </button>
          )}
        </div>
      </div>

      {/* Search */}
      {showSearch && (
        <div className="space-y-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">🔍</span>
            <input
              ref={searchRef}
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === 'Escape' && setShowSearch(false)}
              placeholder="Search spirits, fruits, herbs…"
              className="w-full pl-9 pr-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 text-base focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              onClick={() => { setShowSearch(false); setSearch('') }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 text-lg"
            >×</button>
          </div>

          {filtered.length > 0 && (
            <div className="grid grid-cols-2 gap-1.5">
              {filtered.map(key => {
                const ing = INGREDIENTS_DB[key]
                const color = getCategoryColor(ing?.category)
                return (
                  <button
                    key={key}
                    onClick={() => addIngredient(key)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-left transition-all active:scale-95"
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

          {search && filtered.length === 0 && (
            <p className="text-center text-zinc-600 py-4 text-sm">No ingredients found for "{search}"</p>
          )}

          {/* Browse by category if no search */}
          {!search && <CategoryBrowser onSelect={addIngredient} excluded={selected} />}
        </div>
      )}

      {/* Result */}
      {result && selected.length >= 2 && (
        <div className={`rounded-xl border p-4 space-y-4 ${conf.bg}`}>
          {/* Score */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-black" style={{ color: conf.color }}>{result.score}</div>
              <div className="text-sm font-semibold mt-0.5" style={{ color: conf.color }}>
                {conf.emoji} {conf.label}
              </div>
            </div>
            {/* Gauge */}
            <div className="w-24 h-24 relative">
              <GaugeCircle score={result.score} color={conf.color} />
            </div>
          </div>

          {/* Bar gauge */}
          <div className="space-y-1">
            <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${result.score}%`, background: conf.color }}
              />
            </div>
            <div className="flex justify-between text-xs text-zinc-600">
              <span>Clash</span>
              <span>Interesting</span>
              <span>Great</span>
            </div>
          </div>

          {/* Reasons */}
          {result.reasons.length > 0 && (
            <div className="space-y-1.5">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Why</h3>
              {result.reasons.map((r, i) => (
                <p key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                  <span className="mt-0.5 text-zinc-600">•</span>
                  {r}
                </p>
              ))}
            </div>
          )}

          {/* Suggestions */}
          {result.suggestions.length > 0 && selected.length < 4 && (
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Would complete this</h3>
              <div className="flex flex-wrap gap-1.5">
                {result.suggestions.map(key => {
                  const color = getCategoryColor(INGREDIENTS_DB[key]?.category)
                  return (
                    <button
                      key={key}
                      onClick={() => addIngredient(key)}
                      className="px-2.5 py-1 rounded-full text-xs font-medium transition-all active:scale-95"
                      style={{ background: color + '22', border: `1px solid ${color}44`, color }}
                    >
                      + {getDisplayName(key)}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Build Spec CTA */}
          <button
            onClick={() => onBuildSpec(selected, '')}
            className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base transition-colors"
          >
            🍸 Build Spec
          </button>
        </div>
      )}

      {/* Empty state */}
      {selected.length < 2 && !showSearch && (
        <div className="text-center py-10 space-y-3">
          <div className="text-5xl">🧪</div>
          <p className="text-zinc-500">Add 2–4 ingredients to check their pairing</p>
          <button
            onClick={openSearch}
            className="px-6 py-3 bg-emerald-500 rounded-xl text-white font-semibold active:bg-emerald-600"
          >
            Add Ingredient
          </button>
        </div>
      )}
    </div>
  )
}

function GaugeCircle({ score, color }) {
  const r = 36
  const circ = 2 * Math.PI * r
  const offset = circ - (score / 100) * circ

  return (
    <svg viewBox="0 0 90 90" className="w-full h-full -rotate-90">
      <circle cx="45" cy="45" r={r} fill="none" stroke="#1f2937" strokeWidth="8" />
      <circle
        cx="45" cy="45" r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
      />
    </svg>
  )
}

function CategoryBrowser({ onSelect, excluded }) {
  const [activeCategory, setActiveCategory] = useState('spirit')
  const excludedSet = new Set(excluded)

  const categories = [
    { id: 'spirit', label: 'Spirits', emoji: '🥃' },
    { id: 'liqueur', label: 'Liqueurs', emoji: '🍾' },
    { id: 'citrus', label: 'Citrus', emoji: '🍋' },
    { id: 'fruit', label: 'Fruit', emoji: '🍓' },
    { id: 'herb', label: 'Herbs', emoji: '🌿' },
    { id: 'sweetener', label: 'Sweet', emoji: '🍯' },
    { id: 'mixer', label: 'Mixers', emoji: '💧' },
    { id: 'bitters', label: 'Bitters', emoji: '✨' },
  ]

  const items = ALL_INGREDIENT_KEYS.filter(k =>
    INGREDIENTS_DB[k]?.category === activeCategory && !excludedSet.has(k)
  )

  return (
    <div className="space-y-3">
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === cat.id
                ? 'bg-emerald-500 text-white'
                : 'bg-zinc-800 text-zinc-400'
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-1.5 max-h-64 overflow-y-auto">
        {items.map(key => {
          const ing = INGREDIENTS_DB[key]
          const color = getCategoryColor(ing?.category)
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-left transition-all active:scale-95"
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
              <div className="min-w-0">
                <div className="text-sm text-white font-medium truncate">{getDisplayName(key)}</div>
                <div className="text-xs text-zinc-600 capitalize">{ing?.subcategory?.replace(/_/g, ' ')}</div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
