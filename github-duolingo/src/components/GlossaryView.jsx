import { useState } from 'react'
import { GLOSSARY } from '../data/lessons'
import useStore from '../store/useStore'

export default function GlossaryView({ onBack }) {
  const { learnedWords, learnWord } = useStore()
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = GLOSSARY.filter(w =>
    w.en.toLowerCase().includes(search.toLowerCase()) ||
    w.es.toLowerCase().includes(search.toLowerCase()) ||
    w.def.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ padding: '16px', paddingBottom: '100px', maxWidth: '672px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <button className="btn-ghost" onClick={onBack} style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
          ←
        </button>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 900 }}>📖 Glosario Tech</h2>
          <div style={{ color: '#8b949e', fontSize: '0.78rem' }}>
            {learnedWords.length}/{GLOSSARY.length} aprendidas · "Learned"
          </div>
        </div>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: '16px' }}>
        <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#8b949e' }}>
          🔍
        </span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar término... · Search..."
          style={{
            width: '100%',
            background: '#161b22',
            border: '2px solid #30363d',
            borderRadius: '12px',
            padding: '12px 16px 12px 40px',
            color: '#e6edf3',
            fontSize: '0.9rem',
            outline: 'none',
          }}
        />
      </div>

      {/* Word detail modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '12px' }}>{selected.emoji}</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, textAlign: 'center' }}>{selected.en}</h3>
            <div style={{ textAlign: 'center', color: '#58CC02', fontWeight: 700, fontSize: '1rem', marginBottom: '16px' }}>
              = {selected.es}
            </div>
            <div style={{ color: '#c9d1d9', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
              {selected.def}
            </div>
            <button
              className="btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                learnWord(selected)
                setSelected(null)
              }}
            >
              {learnedWords.find(w => w.en === selected.en) ? '✓ Ya aprendida' : '✅ Marcar como aprendida'}
            </button>
          </div>
        </div>
      )}

      {/* Word list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filtered.map(word => {
          const isLearned = learnedWords.find(w => w.en === word.en)
          return (
            <button
              key={word.en}
              onClick={() => setSelected(word)}
              style={{
                background: isLearned ? 'rgba(88,204,2,0.05)' : '#161b22',
                border: `1px solid ${isLearned ? '#58CC02' : '#30363d'}`,
                borderRadius: '12px',
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.15s',
                width: '100%',
              }}
            >
              <span style={{ fontSize: '1.4rem', flex: '0 0 auto' }}>{word.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{word.en}</span>
                  {isLearned && <span style={{ fontSize: '0.7rem', color: '#58CC02' }}>✓</span>}
                </div>
                <div style={{ color: '#8b949e', fontSize: '0.78rem' }}>{word.es}</div>
              </div>
              <div style={{ color: '#8b949e', fontSize: '1rem' }}>›</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
