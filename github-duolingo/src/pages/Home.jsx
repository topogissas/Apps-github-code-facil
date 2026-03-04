import { useState } from 'react'
import useStore from '../store/useStore'
import Pomodoro from '../components/Pomodoro'
import { GLOSSARY } from '../data/lessons'

export default function Home({ setTab }) {
  const { user, repositories, pomodoro, learnedWords, lessons } = useStore()
  const [showPomodoro, setShowPomodoro] = useState(false)
  const [dailyWord] = useState(() => GLOSSARY[Math.floor(Math.random() * GLOSSARY.length)])

  const totalLessonsCompleted = lessons.completedLessons.length
  const activeRepo = repositories[0]

  if (showPomodoro) {
    return (
      <div>
        <div style={{ padding: '16px 16px 0', maxWidth: '672px', margin: '0 auto' }}>
          <button
            className="btn-ghost"
            onClick={() => setShowPomodoro(false)}
            style={{ marginBottom: '8px', fontSize: '0.85rem', padding: '8px 16px' }}
          >
            ← Volver
          </button>
        </div>
        <Pomodoro />
      </div>
    )
  }

  return (
    <div style={{ padding: '16px', maxWidth: '672px', margin: '0 auto', paddingBottom: '100px' }}>

      {/* Welcome Banner */}
      <div className="slide-up" style={{
        background: 'linear-gradient(135deg, #0d2b00, #1a4400)',
        border: '2px solid #58CC02',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <div style={{ fontSize: '3rem' }}>🐙</div>
        <div>
          <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#58CC02' }}>
            ¡Hola, {user.name}!
          </div>
          <div style={{ color: '#e6edf3', fontSize: '0.85rem', marginTop: '4px' }}>
            Nivel {user.level} · <span style={{ color: '#FF9600' }}>🔥 {user.streak} días seguidos</span>
          </div>
          <div style={{ color: '#8b949e', fontSize: '0.78rem', marginTop: '4px' }}>
            {totalLessonsCompleted === 0
              ? '¡Comienza tu primera lección!'
              : `${totalLessonsCompleted} lección${totalLessonsCompleted > 1 ? 'es' : ''} completada${totalLessonsCompleted > 1 ? 's' : ''}`
            }
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '16px' }}>
        {[
          { icon: '💾', value: user.totalXp, label: 'XP Total', color: '#58CC02' },
          { icon: '📁', value: repositories.length, label: 'Repos', color: '#1CB0F6' },
          { icon: '🎓', value: totalLessonsCompleted, label: 'Lecciones', color: '#FF9600' },
        ].map(stat => (
          <div key={stat.label} className="card" style={{ padding: '14px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem' }}>{stat.icon}</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: '0.65rem', color: '#8b949e', fontWeight: 600 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Pomodoro Quick Start */}
      <button
        onClick={() => setShowPomodoro(true)}
        style={{
          width: '100%',
          background: pomodoro.isRunning
            ? 'linear-gradient(135deg, #2d0000, #4d0000)'
            : 'linear-gradient(135deg, #2d1a00, #4d2e00)',
          border: `2px solid ${pomodoro.isRunning ? '#FF4B4B' : '#FF9600'}`,
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '16px',
          cursor: 'pointer',
          transition: 'all 0.2s',
          textAlign: 'left',
        }}
      >
        <div style={{ fontSize: '2.5rem' }}>🍅</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: '1rem', color: pomodoro.isRunning ? '#FF4B4B' : '#FF9600' }}>
            {pomodoro.isRunning ? '⏱ Pomodoro corriendo...' : 'Iniciar Pomodoro'}
          </div>
          <div style={{ color: '#8b949e', fontSize: '0.78rem', marginTop: '2px' }}>
            {pomodoro.isRunning
              ? `${Math.floor(pomodoro.timeLeft / 60)}:${(pomodoro.timeLeft % 60).toString().padStart(2, '0')} restantes`
              : '25 min · "Focus" = Enfoque · Gana 10 XP + 2 💎'}
          </div>
        </div>
        <div style={{ color: '#8b949e', fontSize: '1.2rem' }}>›</div>
      </button>

      {/* Daily English Word */}
      <div className="card" style={{ padding: '16px', marginBottom: '16px', borderColor: '#1CB0F6' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1CB0F6', marginBottom: '6px', letterSpacing: '0.08em' }}>
              🇺🇸 PALABRA DEL DÍA
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 900 }}>{dailyWord.en}</div>
            <div style={{ color: '#58CC02', fontWeight: 700, marginTop: '2px' }}>= {dailyWord.es}</div>
            <div style={{ color: '#8b949e', fontSize: '0.78rem', marginTop: '6px', lineHeight: '1.5' }}>
              {dailyWord.def}
            </div>
          </div>
          <div style={{ fontSize: '2rem', marginLeft: '12px' }}>{dailyWord.emoji}</div>
        </div>
      </div>

      {/* Continue Learning */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '12px' }}>
          🎯 Continuar aprendiendo
        </div>
        <button
          onClick={() => setTab('learn')}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #001a00, #003300)',
            border: '2px solid #58CC02',
            borderRadius: '14px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: '2.5rem' }}>📚</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: '#58CC02' }}>
              {totalLessonsCompleted === 0 ? 'Git Básico - Lección 1' : `Continuar Git & GitHub`}
            </div>
            <div style={{ color: '#8b949e', fontSize: '0.78rem', marginTop: '4px' }}>
              Toca para ver todas las lecciones disponibles
            </div>
            <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
              <span className="badge badge-green">+30 XP</span>
              <span className="badge badge-blue">Interactivo</span>
            </div>
          </div>
          <div style={{ color: '#58CC02', fontSize: '1.5rem' }}>→</div>
        </button>
      </div>

      {/* Quick Actions */}
      <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '12px' }}>
        ⚡ Acciones rápidas
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
        {[
          { icon: '🐙', title: 'GitHub Sim', sub: 'Simula un repositorio real', tab: 'github', color: '#1CB0F6' },
          { icon: '💻', title: 'VS Code Sim', sub: 'Practica el editor', tab: 'vscode', color: '#FF9600' },
          { icon: '🤖', title: 'Guía IA', sub: 'Pregunta cualquier cosa', tab: 'guide', color: '#bf7fff' },
          { icon: '📖', title: 'Glosario', sub: `${GLOSSARY.length} términos en inglés`, tab: 'learn', color: '#58CC02' },
        ].map(action => (
          <button
            key={action.tab}
            onClick={() => setTab(action.tab)}
            className="card"
            style={{ padding: '14px', textAlign: 'left', cursor: 'pointer', border: `2px solid #30363d` }}
          >
            <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{action.icon}</div>
            <div style={{ fontWeight: 700, fontSize: '0.85rem', color: action.color }}>{action.title}</div>
            <div style={{ fontSize: '0.72rem', color: '#8b949e', marginTop: '2px' }}>{action.sub}</div>
          </button>
        ))}
      </div>

      {/* Badges */}
      {user.badges.length > 0 && (
        <div>
          <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '12px' }}>🏆 Mis insignias</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {user.badges.map(badge => (
              <div key={badge.id} style={{ fontSize: '2rem' }} title={badge.name}>
                {badge.icon}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
