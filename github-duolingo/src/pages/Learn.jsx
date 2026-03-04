import { useState } from 'react'
import useStore from '../store/useStore'
import { LESSON_PATHS, GLOSSARY } from '../data/lessons'
import LessonPlayer from '../components/LessonPlayer'
import GlossaryView from '../components/GlossaryView'

export default function Learn() {
  const { lessons, user, completeLesson } = useStore()
  const [view, setView] = useState('paths') // 'paths' | 'lessons' | 'lesson' | 'glossary'
  const [selectedPath, setSelectedPath] = useState(null)
  const [selectedLesson, setSelectedLesson] = useState(null)

  const isPathUnlocked = (path) => {
    if (!path.requiresPath) return true
    return lessons.paths[path.requiresPath]?.unlocked || false
  }

  const isPathCompleted = (pathId) => {
    const path = LESSON_PATHS.find(p => p.id === pathId)
    if (!path) return false
    return path.lessons.every(l => lessons.completedLessons.includes(l.id))
  }

  if (view === 'glossary') {
    return <GlossaryView onBack={() => setView('paths')} />
  }

  if (view === 'lesson' && selectedLesson) {
    return (
      <LessonPlayer
        lesson={selectedLesson}
        pathId={selectedPath?.id}
        onComplete={(xp) => {
          completeLesson(selectedLesson.id, selectedPath?.id, xp)
          setView('lessons')
        }}
        onBack={() => setView('lessons')}
      />
    )
  }

  if (view === 'lessons' && selectedPath) {
    return (
      <div style={{ padding: '16px', paddingBottom: '100px', maxWidth: '672px', margin: '0 auto' }}>
        <button className="btn-ghost" onClick={() => setView('paths')} style={{ marginBottom: '16px', padding: '8px 16px', fontSize: '0.85rem' }}>
          ← Volver
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ fontSize: '2.5rem' }}>{selectedPath.icon}</div>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 900 }}>{selectedPath.name}</h2>
            <div style={{ color: '#8b949e', fontSize: '0.8rem' }}>{selectedPath.nameEn}</div>
            <div style={{ color: '#8b949e', fontSize: '0.8rem' }}>{selectedPath.description}</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {selectedPath.lessons.length === 0 ? (
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🚧</div>
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>¡Próximamente!</div>
              <div style={{ color: '#8b949e', fontSize: '0.85rem', marginTop: '8px' }}>
                Más lecciones en camino. ¡Sigue con las otras rutas!
              </div>
            </div>
          ) : (
            selectedPath.lessons.map((lesson, idx) => {
              const isCompleted = lessons.completedLessons.includes(lesson.id)
              const isLocked = idx > 0 && !lessons.completedLessons.includes(selectedPath.lessons[idx - 1].id)

              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    if (!isLocked) {
                      setSelectedLesson(lesson)
                      setView('lesson')
                    }
                  }}
                  style={{
                    background: isCompleted ? 'rgba(88,204,2,0.08)' : '#161b22',
                    border: `2px solid ${isCompleted ? '#58CC02' : isLocked ? '#21262d' : '#30363d'}`,
                    borderRadius: '14px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    opacity: isLocked ? 0.5 : 1,
                    cursor: isLocked ? 'not-allowed' : 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    width: '100%',
                  }}
                >
                  <div style={{
                    width: '48px', height: '48px',
                    borderRadius: '50%',
                    background: isCompleted ? '#58CC02' : isLocked ? '#21262d' : selectedPath.color + '20',
                    border: `3px solid ${isCompleted ? '#3d8f00' : selectedPath.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem',
                    flex: '0 0 48px',
                  }}>
                    {isCompleted ? '✓' : isLocked ? '🔒' : lesson.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{lesson.title}</div>
                    <div style={{ color: '#8b949e', fontSize: '0.75rem' }}>{lesson.titleEn}</div>
                    <div style={{ color: '#8b949e', fontSize: '0.78rem', marginTop: '4px' }}>{lesson.description}</div>
                    <div style={{ marginTop: '8px' }}>
                      <span className="badge badge-green">+{lesson.xpReward} XP</span>
                      {isCompleted && <span className="badge badge-blue" style={{ marginLeft: '6px' }}>✓ Completada</span>}
                    </div>
                  </div>
                  {!isLocked && <div style={{ color: '#8b949e', fontSize: '1.2rem' }}>›</div>}
                </button>
              )
            })
          )}
        </div>
      </div>
    )
  }

  // Paths view
  return (
    <div style={{ padding: '16px', paddingBottom: '100px', maxWidth: '672px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 900 }}>📚 Aprender</h2>
        <p style={{ color: '#8b949e', fontSize: '0.85rem', marginTop: '4px' }}>
          Rutas de aprendizaje: "Learning paths"
        </p>
      </div>

      {/* Glossary button */}
      <button
        onClick={() => setView('glossary')}
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #001630, #002855)',
          border: '2px solid #1CB0F6',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          cursor: 'pointer',
          marginBottom: '20px',
          textAlign: 'left',
        }}
      >
        <div style={{ fontSize: '2rem' }}>📖</div>
        <div>
          <div style={{ fontWeight: 800, fontSize: '1rem', color: '#1CB0F6' }}>Glosario Inglés-Español</div>
          <div style={{ color: '#8b949e', fontSize: '0.78rem', marginTop: '2px' }}>
            {GLOSSARY.length} términos técnicos con traducción · "Glossary" = Glosario
          </div>
        </div>
        <div style={{ marginLeft: 'auto', color: '#1CB0F6', fontSize: '1.2rem' }}>›</div>
      </button>

      {/* Path cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {LESSON_PATHS.map((path) => {
          const unlocked = isPathUnlocked(path)
          const completed = isPathCompleted(path.id)
          const storeProgress = lessons.paths[path.id]?.progress || 0
          const lessonsCompleted = path.lessons.filter(l => lessons.completedLessons.includes(l.id)).length
          const totalLessons = path.lessons.length

          return (
            <button
              key={path.id}
              onClick={() => {
                if (unlocked) {
                  setSelectedPath(path)
                  setView('lessons')
                }
              }}
              style={{
                background: '#161b22',
                border: `2px solid ${completed ? path.color : unlocked ? '#30363d' : '#21262d'}`,
                borderRadius: '16px',
                padding: '16px',
                opacity: unlocked ? 1 : 0.6,
                cursor: unlocked ? 'pointer' : 'not-allowed',
                textAlign: 'left',
                transition: 'all 0.2s',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  fontSize: '2.5rem',
                  width: '56px', height: '56px',
                  background: `${path.color}15`,
                  border: `3px solid ${path.color}`,
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flex: '0 0 56px',
                }}>
                  {unlocked ? path.icon : '🔒'}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1rem' }}>{path.name}</div>
                      <div style={{ color: '#8b949e', fontSize: '0.72rem' }}>{path.nameEn}</div>
                    </div>
                    {completed && <span style={{ color: path.color, fontSize: '0.75rem', fontWeight: 700 }}>✓ Completo</span>}
                    {!unlocked && <span style={{ color: '#8b949e', fontSize: '0.72rem' }}>🔒 Bloqueado</span>}
                  </div>
                  <div style={{ color: '#8b949e', fontSize: '0.78rem', marginTop: '4px' }}>
                    {path.description}
                  </div>
                  {unlocked && totalLessons > 0 && (
                    <div style={{ marginTop: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.72rem', color: '#8b949e' }}>
                          {lessonsCompleted}/{totalLessons} lecciones
                        </span>
                        <span style={{ fontSize: '0.72rem', color: path.color }}>
                          {totalLessons > 0 ? Math.round((lessonsCompleted / totalLessons) * 100) : 0}%
                        </span>
                      </div>
                      <div className="xp-bar">
                        <div
                          className="xp-fill"
                          style={{
                            width: `${totalLessons > 0 ? (lessonsCompleted / totalLessons) * 100 : 0}%`,
                            background: `linear-gradient(90deg, ${path.color}, ${path.color}aa)`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                  {!unlocked && (
                    <div style={{ fontSize: '0.75rem', color: '#8b949e', marginTop: '6px' }}>
                      Completa "{LESSON_PATHS.find(p => p.id === path.requiresPath)?.name}" primero
                    </div>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
