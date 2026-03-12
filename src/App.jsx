import { useState } from 'react'
import PairTab from './components/PairTab'
import LogTab from './components/LogTab'
import BuildTab from './components/BuildTab'

const NAV = [
  { id: 'pair', label: 'Pair', icon: '🔗' },
  { id: 'log', label: 'Log', icon: '📋' },
  { id: 'build', label: 'Build', icon: '🍸' },
]

export default function App() {
  const [tab, setTab] = useState('pair')
  const [buildIngredients, setBuildIngredients] = useState([])
  const [buildName, setBuildName] = useState('')

  const handleBuildSpec = (ingredients, name) => {
    setBuildIngredients(ingredients)
    setBuildName(name || '')
    setTab('build')
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#0a0a0a] border-b border-zinc-800 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍸</span>
            <h1 className="text-xl font-bold text-white tracking-tight">MixCheck</h1>
          </div>
          <span className="text-xs text-zinc-600 font-mono">v1.0</span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-2xl mx-auto">
          {tab === 'pair' && <PairTab onBuildSpec={handleBuildSpec} />}
          {tab === 'log' && <LogTab />}
          {tab === 'build' && <BuildTab initialIngredients={buildIngredients} initialName={buildName} onSaved={() => setTab('log')} />}
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-[#111111] border-t border-zinc-800">
        <div className="max-w-2xl mx-auto flex">
          {NAV.map(n => (
            <button
              key={n.id}
              onClick={() => setTab(n.id)}
              className={`flex-1 flex flex-col items-center py-3 gap-1 transition-colors ${
                tab === n.id
                  ? 'text-emerald-400'
                  : 'text-zinc-500 active:text-zinc-300'
              }`}
            >
              <span className="text-xl">{n.icon}</span>
              <span className="text-xs font-medium">{n.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
