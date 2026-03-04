import { useState, useEffect } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Learn from './pages/Learn'
import GitHubSim from './pages/GitHubSim'
import VSCodeSim from './pages/VSCodeSim'
import AIGuide from './pages/AIGuide'
import useStore from './store/useStore'

function OnboardingScreen({ onComplete }) {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const { updateUsername, updateStreak } = useStore()

  const steps = [
    {
      emoji: '🐙',
      title: '¡Bienvenido a GitLingo!',
      subtitle: '"Welcome" = Bienvenido',
      desc: 'La app que te enseña Git, GitHub y VS Code como si fuera un juego. ¡Aprende a hacer videocoding de forma divertida!',
      color: '#58CC02',
    },
    {
      emoji: '🍅',
      title: 'Pomodoro + Código',
      subtitle: '"Focus" = Enfoque · "Break" = Descanso',
      desc: 'Aprendemos en sesiones de 25 minutos con descansos. ¡Tu cerebro absorbe mejor la información así!',
      color: '#FF4B4B',
    },
    {
      emoji: '🇺🇸',
      title: 'Inglés técnico incluido',
      subtitle: '"Included" = Incluido',
      desc: 'Cada término en inglés incluye su traducción al español. ¡Aprenderás a programar Y mejorarás tu inglés técnico!',
      color: '#1CB0F6',
    },
    {
      emoji: '🏆',
      title: '¡Gana XP y badges!',
      subtitle: '"Experience Points" = Puntos de experiencia · "Badges" = Insignias',
      desc: 'Completa lecciones, haz commits, crea repos. Todo suma XP. ¡Sube de nivel como en un RPG!',
      color: '#FF9600',
    },
  ]

  const current = steps[step]
  const isLast = step === steps.length - 1

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0d1117',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ maxWidth: '420px', width: '100%', textAlign: 'center' }}>
        {/* Progress dots */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '32px' }}>
          {steps.map((_, i) => (
            <div key={i} style={{
              width: i === step ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i <= step ? current.color : '#30363d',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>

        <div className="bounce-in" key={step}>
          <div style={{ fontSize: '5rem', marginBottom: '20px' }}>{current.emoji}</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '8px' }}>{current.title}</h2>
          <div style={{ color: current.color, fontWeight: 700, fontSize: '0.85rem', marginBottom: '16px' }}>
            {current.subtitle}
          </div>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '32px' }}>
            {current.desc}
          </p>
        </div>

        {isLast && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.82rem', color: '#8b949e', marginBottom: '8px' }}>
              ¿Cómo te llamas? · "What's your name?"
            </div>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Tu nombre o apodo · Your nickname"
              onKeyDown={e => {
                if (e.key === 'Enter' && name.trim()) {
                  updateUsername(name.trim())
                  updateStreak()
                  onComplete()
                }
              }}
              style={{
                width: '100%',
                background: '#161b22',
                border: `2px solid ${current.color}`,
                borderRadius: '12px',
                padding: '12px 16px',
                color: '#e6edf3',
                fontSize: '1rem',
                outline: 'none',
                textAlign: 'center',
                fontWeight: 700,
              }}
              autoFocus
            />
          </div>
        )}

        <button
          style={{
            width: '100%', padding: '16px', fontSize: '1rem',
            background: current.color, color: 'white',
            border: 'none', borderBottom: `4px solid ${current.color}cc`,
            borderRadius: '12px', fontWeight: 800, cursor: 'pointer',
            opacity: isLast && !name.trim() ? 0.5 : 1,
            transition: 'all 0.1s',
          }}
          onClick={() => {
            if (isLast) {
              if (name.trim()) updateUsername(name.trim())
              updateStreak()
              onComplete()
            } else {
              setStep(s => s + 1)
            }
          }}
          disabled={isLast && !name.trim()}
        >
          {isLast ? '¡Empezar a aprender! 🚀' : 'Siguiente · "Next" →'}
        </button>

        {!isLast && (
          <button
            onClick={() => setStep(steps.length - 1)}
            style={{ marginTop: '12px', color: '#8b949e', fontSize: '0.8rem', background: 'none', cursor: 'pointer' }}
          >
            Saltar intro · "Skip"
          </button>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const { user, updateStreak } = useStore()
  const [showOnboarding, setShowOnboarding] = useState(!user.lastLoginDate)

  useEffect(() => {
    if (user.lastLoginDate) {
      updateStreak()
    }
  }, [])

  if (showOnboarding) {
    return <OnboardingScreen onComplete={() => setShowOnboarding(false)} />
  }

  return (
    <div style={{ minHeight: '100vh', maxWidth: '768px', margin: '0 auto' }}>
      <Header />
      <main>
        {activeTab === 'home' && <Home setTab={setActiveTab} />}
        {activeTab === 'learn' && <Learn />}
        {activeTab === 'github' && <GitHubSim />}
        {activeTab === 'vscode' && <VSCodeSim />}
        {activeTab === 'guide' && <AIGuide />}
      </main>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
