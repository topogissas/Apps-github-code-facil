import { useEffect, useRef } from 'react'
import useStore from '../store/useStore'

const SIZE = 200
const STROKE = 14
const R = (SIZE - STROKE) / 2
const CIRC = 2 * Math.PI * R

export default function Pomodoro() {
  const { pomodoro, togglePomodoro, setPomodoroTime, switchPomodoroMode, completePomodoro, resetPomodoro } = useStore()
  const intervalRef = useRef(null)

  useEffect(() => {
    if (pomodoro.isRunning) {
      intervalRef.current = setInterval(() => {
        const { pomodoro: p } = useStore.getState()
        if (p.timeLeft <= 1) {
          clearInterval(intervalRef.current)
          completePomodoro()
        } else {
          setPomodoroTime(p.timeLeft - 1)
        }
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [pomodoro.isRunning])

  const mins = Math.floor(pomodoro.timeLeft / 60).toString().padStart(2, '0')
  const secs = (pomodoro.timeLeft % 60).toString().padStart(2, '0')
  const progress = pomodoro.timeLeft / pomodoro.duration
  const dashOffset = CIRC * (1 - progress)

  const modeLabels = {
    work: { label: 'Enfoque', labelEn: 'Focus', color: '#FF4B4B' },
    'short-break': { label: 'Descanso corto', labelEn: 'Short Break', color: '#58CC02' },
    'long-break': { label: 'Descanso largo', labelEn: 'Long Break', color: '#1CB0F6' },
  }
  const currentMode = modeLabels[pomodoro.mode]

  return (
    <div style={{ padding: '16px 16px 100px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>🍅 Pomodoro</h2>
        <p style={{ color: '#8b949e', fontSize: '0.85rem', marginTop: '4px' }}>
          Técnica de estudio: 25 min de enfoque + descanso
        </p>
      </div>

      {/* Mode Selector */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
        {Object.entries(modeLabels).map(([mode, info]) => (
          <button
            key={mode}
            onClick={() => switchPomodoroMode(mode)}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '10px',
              fontSize: '0.72rem',
              fontWeight: 700,
              border: '2px solid',
              borderColor: pomodoro.mode === mode ? info.color : '#30363d',
              background: pomodoro.mode === mode ? `${info.color}20` : 'transparent',
              color: pomodoro.mode === mode ? info.color : '#8b949e',
              transition: 'all 0.2s',
            }}
          >
            {info.label}
          </button>
        ))}
      </div>

      {/* Timer Circle */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <div style={{ position: 'relative' }}>
          <svg width={SIZE} height={SIZE} style={{ display: 'block' }}>
            {/* Background ring */}
            <circle
              cx={SIZE / 2} cy={SIZE / 2} r={R}
              fill="none"
              stroke="#30363d"
              strokeWidth={STROKE}
            />
            {/* Progress ring */}
            <circle
              cx={SIZE / 2} cy={SIZE / 2} r={R}
              fill="none"
              stroke={currentMode.color}
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={dashOffset}
              className="pomodoro-circle"
            />
          </svg>
          {/* Time display */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '-0.04em', color: currentMode.color }}>
              {mins}:{secs}
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8b949e' }}>
              {currentMode.label}
            </div>
            <div style={{ fontSize: '0.62rem', color: '#8b949e', marginTop: '2px' }}>
              {currentMode.labelEn}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-ghost" onClick={resetPomodoro} style={{ padding: '12px 20px', fontSize: '0.85rem' }}>
            ↺ Reset
          </button>
          <button
            onClick={togglePomodoro}
            style={{
              background: pomodoro.isRunning ? '#FF4B4B' : '#58CC02',
              borderBottom: `4px solid ${pomodoro.isRunning ? '#cc0000' : '#3d8f00'}`,
              color: 'white',
              borderRadius: '12px',
              padding: '12px 32px',
              fontSize: '1rem',
              fontWeight: 800,
              transition: 'all 0.1s',
            }}
          >
            {pomodoro.isRunning ? '⏸ Pausar' : '▶ Iniciar'}
          </button>
        </div>

        {/* Session counter */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {Array.from({ length: pomodoro.totalSessions }).map((_, i) => (
            <div
              key={i}
              style={{
                width: '12px', height: '12px',
                borderRadius: '50%',
                background: i < (pomodoro.completedPomodoros % pomodoro.totalSessions)
                  ? '#FF4B4B' : '#30363d',
                transition: 'background 0.3s',
              }}
            />
          ))}
          <span style={{ fontSize: '0.75rem', color: '#8b949e', marginLeft: '8px' }}>
            {pomodoro.completedPomodoros} completados
          </span>
        </div>
      </div>

      {/* Tips */}
      <div className="card" style={{ marginTop: '32px', padding: '16px' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#58CC02', marginBottom: '8px' }}>
          💡 ¿Por qué funciona el Pomodoro?
        </div>
        <div style={{ fontSize: '0.82rem', color: '#8b949e', lineHeight: '1.5' }}>
          El cerebro aprende mejor en sesiones cortas con descansos.
          <br/>
          <span style={{ color: '#1CB0F6' }}>"Short break" = Descanso corto</span>
          <br/>
          <span style={{ color: '#1CB0F6' }}>"Long break" = Descanso largo</span>
          <br/>
          <span style={{ color: '#1CB0F6' }}>"Focus" = Enfoque</span>
          <br/>
          <br/>
          Cada 4 pomodoros, toma un descanso largo de 15 minutos. 🧠
        </div>
      </div>

      {/* Today's english word */}
      <div className="card" style={{ marginTop: '16px', padding: '16px', borderColor: '#1CB0F6' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1CB0F6', marginBottom: '8px' }}>
          🇺🇸 Palabra del día en inglés
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>Repository</div>
            <div style={{ fontSize: '0.85rem', color: '#8b949e' }}>= Repositorio</div>
          </div>
          <div style={{ fontSize: '2rem' }}>📁</div>
        </div>
        <div style={{ fontSize: '0.78rem', color: '#8b949e', marginTop: '8px', lineHeight: '1.5' }}>
          Carpeta que guarda todo tu proyecto y su historial completo de cambios.
        </div>
      </div>
    </div>
  )
}
