import { useState, useRef } from 'react'
import { INGREDIENTS_DB, getDisplayName, getCategoryColor } from '../data/ingredients'
import { parsePrompt } from '../data/promptKeywords'

const EXAMPLE_PROMPTS = [
  { label: '🌋 Smoky Tropical', prompt: 'smoky tropical tiki drink' },
  { label: '🍊 Bitter Citrus',  prompt: 'bitter and herbal with citrus' },
  { label: '🍫 Creamy Dessert', prompt: 'sweet and creamy dessert cocktail' },
  { label: '🌿 Herbal Refresher', prompt: 'herbal refreshing with citrus' },
  { label: '🌴 Tiki Vibes',     prompt: 'tropical tiki rum punch' },
  { label: '🥃 Classic Sour',   prompt: 'classic whiskey sour' },
]

export default function CocktailPrompt({ onAddIngredient, selected }) {
  const [prompt, setPrompt]         = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [hasResults, setHasResults] = useState(false)
  const [visible, setVisible]       = useState(false)   // drives the CSS transition
  const textareaRef = useRef(null)
  const selectedSet = new Set(selected)

  const runParse = (text) => {
    const results = parsePrompt(text)
    setSuggestions(results)
    setVisible(false)                        // reset so animation retriggers
    setHasResults(true)
    // tiny tick to let React flush the opacity:0 frame before animating in
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
  }

  const handleSubmit = () => {
    if (!prompt.trim()) return
    runParse(prompt)
  }

  const handleExampleClick = (ex) => {
    setPrompt(ex.prompt)
    runParse(ex.prompt)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleClear = () => {
    setPrompt('')
    setSuggestions([])
    setHasResults(false)
    setVisible(false)
    textareaRef.current?.focus()
  }

  // Split into not-yet-added vs already in selection
  const available = suggestions.filter(s => !selectedSet.has(s.key))
  const alreadyIn = suggestions.filter(s =>  selectedSet.has(s.key))
  const maxScore  = suggestions[0]?.score || 1

  return (
    <div
      className="rounded-2xl p-4 space-y-3 mb-1"
      style={{
        background:
          'linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(99,102,241,0.05) 100%)',
        border: '1px solid rgba(16,185,129,0.22)',
        boxShadow:
          '0 0 40px rgba(16,185,129,0.07), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="flex items-center gap-2.5">
        <span
          className="text-xl flex-shrink-0"
          style={{ filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.6))' }}
        >
          ✨
        </span>
        <div className="min-w-0">
          <h2 className="text-sm font-bold text-white leading-tight">
            Describe Your Cocktail
          </h2>
          <p className="text-xs text-zinc-500 leading-tight">
            Type a vibe — get instant ingredient ideas
          </p>
        </div>
      </div>

      {/* ── Textarea ───────────────────────────────────────── */}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={"Describe your cocktail idea…\ne.g. \"smoky tropical tiki\" or \"bitter herbal citrus\""}
          rows={3}
          className="w-full px-4 py-3 pr-8 rounded-xl text-sm text-white placeholder-zinc-600
                     resize-none leading-relaxed
                     bg-black/50 border border-zinc-700/60
                     focus:outline-none focus:border-emerald-500/50 transition-colors duration-200"
          style={{ caretColor: '#10b981' }}
        />
        {prompt && (
          <button
            onClick={handleClear}
            aria-label="Clear"
            className="absolute top-2.5 right-2.5 w-5 h-5 flex items-center justify-center
                       rounded-full bg-zinc-700 text-zinc-400 text-xs
                       hover:bg-zinc-600 active:scale-90 transition-all"
          >
            ×
          </button>
        )}
      </div>

      {/* ── Quick-tap pills ────────────────────────────────── */}
      <div className="flex flex-wrap gap-1.5">
        {EXAMPLE_PROMPTS.map(ex => (
          <button
            key={ex.label}
            onClick={() => handleExampleClick(ex)}
            className="px-2.5 py-1 rounded-full text-xs font-medium transition-all active:scale-95"
            style={{
              background: 'rgba(16,185,129,0.09)',
              border:     '1px solid rgba(16,185,129,0.22)',
              color:      '#6ee7b7',
            }}
          >
            {ex.label}
          </button>
        ))}
      </div>

      {/* ── Submit button ──────────────────────────────────── */}
      <button
        onClick={handleSubmit}
        disabled={!prompt.trim()}
        className="w-full py-2.5 rounded-xl text-sm font-bold
                   transition-all duration-200 active:scale-[0.98]
                   disabled:opacity-35 disabled:cursor-not-allowed"
        style={
          prompt.trim()
            ? {
                background:
                  'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color:      '#fff',
                boxShadow:  '0 4px 20px rgba(16,185,129,0.28)',
              }
            : {
                background: 'rgba(255,255,255,0.05)',
                color:      '#6b7280',
              }
        }
      >
        ✨ Find Ingredients
      </button>

      {/* ── Results ────────────────────────────────────────── */}
      {hasResults && (
        <div
          className="space-y-2.5"
          style={{
            opacity:    visible ? 1 : 0,
            transform:  visible ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.28s ease, transform 0.28s ease',
          }}
        >
          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-xs font-semibold text-zinc-500 whitespace-nowrap">
              {available.length > 0
                ? `${available.length} suggested`
                : alreadyIn.length > 0
                ? 'All added ✓'
                : 'No matches'}
            </span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          {/* Ingredient pills */}
          {available.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {available.slice(0, 24).map(({ key, score }) => {
                const ing    = INGREDIENTS_DB[key]
                const color  = getCategoryColor(ing?.category)
                const canAdd = selected.length < 4
                // Glow intensity = relative score strength
                const glowAlpha = Math.round((score / maxScore) * 0.35 * 255)
                  .toString(16)
                  .padStart(2, '0')

                return (
                  <button
                    key={key}
                    onClick={() => canAdd && onAddIngredient(key)}
                    disabled={!canAdd}
                    title={
                      canAdd
                        ? `Add ${getDisplayName(key)} (${score} keyword match${score !== 1 ? 'es' : ''})`
                        : 'Remove an ingredient first (max 4)'
                    }
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
                               transition-all duration-150 active:scale-95
                               disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      background: color + '18',
                      border:     `1px solid ${color}45`,
                      color,
                      boxShadow:  score > 1 ? `0 0 8px ${color}${glowAlpha}` : 'none',
                    }}
                  >
                    {/* Hot dot for multi-match */}
                    {score > 1 && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: color, opacity: 0.8 }}
                      />
                    )}
                    + {getDisplayName(key)}
                  </button>
                )
              })}
            </div>
          )}

          {/* Already-added note */}
          {alreadyIn.length > 0 && available.length > 0 && (
            <p className="text-xs text-zinc-600 text-center">
              {alreadyIn.length} suggestion{alreadyIn.length !== 1 ? 's' : ''} already added
            </p>
          )}

          {/* All added */}
          {available.length === 0 && alreadyIn.length > 0 && (
            <p className="text-xs text-emerald-600 text-center py-1">
              All suggested ingredients are already in your selection ✓
            </p>
          )}

          {/* No matches */}
          {suggestions.length === 0 && (
            <p className="text-xs text-zinc-600 text-center py-2">
              No matches — try different words like "bitter", "tropical", or "creamy"
            </p>
          )}

          {/* Category legend (compact) */}
          {available.length > 0 && (
            <p className="text-xs text-zinc-600 text-center leading-snug">
              Tap to add · Brighter = more keyword matches
            </p>
          )}
        </div>
      )}
    </div>
  )
}
