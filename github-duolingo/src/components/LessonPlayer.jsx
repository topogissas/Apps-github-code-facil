import { useState } from 'react'
import useStore from '../store/useStore'

function TheoryScreen({ theory, onNext }) {
  return (
    <div style={{ padding: '16px', paddingBottom: '100px', maxWidth: '672px', margin: '0 auto' }}>
      <div className="slide-up">
        <div className="card" style={{ padding: '20px', marginBottom: '16px', borderColor: '#1CB0F6' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1CB0F6', letterSpacing: '0.08em', marginBottom: '12px' }}>
            📖 TEORÍA · THEORY
          </div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '14px' }}>{theory.title}</h3>
          <div style={{ color: '#c9d1d9', fontSize: '0.875rem', lineHeight: '1.7' }}>
            {theory.content.split('\n').map((line, i) => {
              if (!line.trim()) return <br key={i} />
              const formatted = line
                .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#e6edf3">$1</strong>')
                .replace(/`(.*?)`/g, '<code style="background:#21262d;padding:2px 6px;border-radius:4px;font-family:monospace;font-size:0.8rem;color:#79c0ff">$1</code>')
              return <p key={i} style={{ marginBottom: '6px' }} dangerouslySetInnerHTML={{ __html: formatted }} />
            })}
          </div>
        </div>

        {theory.glossaryWords?.length > 0 && (
          <div className="card" style={{ padding: '16px', marginBottom: '20px', borderColor: '#FF9600' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FF9600', letterSpacing: '0.08em', marginBottom: '10px' }}>
              🇺🇸 VOCABULARIO · VOCABULARY
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {theory.glossaryWords.map(word => (
                <div key={word} style={{
                  background: 'rgba(255,150,0,0.1)',
                  border: '1px solid rgba(255,150,0,0.3)',
                  borderRadius: '8px',
                  padding: '6px 10px',
                  fontSize: '0.8rem',
                }}>
                  <span style={{ color: '#FF9600', fontWeight: 700 }}>{word}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button className="btn-primary" onClick={onNext} style={{ width: '100%', padding: '16px' }}>
          ¡Entendido! Ir a las preguntas →
        </button>
      </div>
    </div>
  )
}

function MultipleChoiceQ({ question, onAnswer, answered }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (idx, correct) => {
    if (answered) return
    setSelected(idx)
    setTimeout(() => onAnswer(correct), 800)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {question.options.map((opt, idx) => {
        let className = 'option-btn'
        if (selected === idx) {
          className += opt.correct ? ' correct' : ' wrong'
        } else if (answered && opt.correct) {
          className += ' correct'
        }
        return (
          <button
            key={idx}
            className={className}
            onClick={() => handleSelect(idx, opt.correct)}
          >
            <span style={{
              width: '28px', height: '28px',
              borderRadius: '50%',
              background: '#21262d',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700,
              flex: '0 0 28px',
            }}>
              {['A', 'B', 'C', 'D'][idx]}
            </span>
            {opt.text}
          </button>
        )
      })}
    </div>
  )
}

function FillBlankQ({ question, onAnswer }) {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(null)

  const handleSubmit = () => {
    const isCorrect = value.trim().toLowerCase() === question.answer.toLowerCase()
    setCorrect(isCorrect)
    setSubmitted(true)
    setTimeout(() => onAnswer(isCorrect), 900)
  }

  return (
    <div>
      {question.hint && (
        <div style={{ color: '#8b949e', fontSize: '0.8rem', marginBottom: '12px' }}>
          💡 Pista: <span style={{ color: '#1CB0F6' }}>{question.hint}</span>
        </div>
      )}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !submitted && handleSubmit()}
          placeholder="Escribe tu respuesta..."
          disabled={submitted}
          style={{
            flex: 1,
            background: submitted
              ? correct ? 'rgba(88,204,2,0.1)' : 'rgba(255,75,75,0.1)'
              : '#0d1117',
            border: `2px solid ${submitted ? (correct ? '#58CC02' : '#FF4B4B') : '#30363d'}`,
            borderRadius: '10px',
            padding: '12px 16px',
            color: '#e6edf3',
            fontSize: '0.9rem',
            fontFamily: 'Courier New, monospace',
            outline: 'none',
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={!value.trim() || submitted}
          className="btn-blue"
          style={{ whiteSpace: 'nowrap', opacity: !value.trim() || submitted ? 0.5 : 1 }}
        >
          Verificar
        </button>
      </div>
      {submitted && (
        <div style={{ marginTop: '10px', padding: '10px', borderRadius: '8px', background: correct ? 'rgba(88,204,2,0.1)' : 'rgba(255,75,75,0.1)' }}>
          <strong style={{ color: correct ? '#58CC02' : '#FF4B4B' }}>
            {correct ? '✓ ¡Correcto!' : '✗ Incorrecto'}
          </strong>
          {!correct && <div style={{ color: '#8b949e', fontSize: '0.82rem', marginTop: '4px' }}>Respuesta: <code style={{ color: '#79c0ff' }}>{question.answer}</code></div>}
        </div>
      )}
    </div>
  )
}

function OrderQ({ question, onAnswer }) {
  const [order, setOrder] = useState([...question.items])
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(null)
  const [dragIdx, setDragIdx] = useState(null)

  const moveItem = (from, to) => {
    const newOrder = [...order]
    const [item] = newOrder.splice(from, 1)
    newOrder.splice(to, 0, item)
    setOrder(newOrder)
  }

  const handleCheck = () => {
    const correctItems = question.correctOrder.map(i => question.items[i])
    const isCorrect = order.every((item, i) => item === correctItems[i])
    setCorrect(isCorrect)
    setSubmitted(true)
    setTimeout(() => onAnswer(isCorrect), 1000)
  }

  return (
    <div>
      <div style={{ color: '#8b949e', fontSize: '0.78rem', marginBottom: '12px' }}>
        Arrastra para reordenar · "Drag to reorder"
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
        {order.map((item, idx) => (
          <div
            key={item}
            style={{
              background: submitted
                ? correct ? 'rgba(88,204,2,0.1)' : 'rgba(255,75,75,0.1)'
                : '#161b22',
              border: `2px solid ${submitted ? (correct ? '#58CC02' : '#FF4B4B') : '#30363d'}`,
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: submitted ? 'default' : 'grab',
            }}
          >
            <span style={{ color: '#8b949e', fontSize: '0.85rem' }}>{idx + 1}.</span>
            <code style={{ flex: 1, fontSize: '0.85rem', color: '#79c0ff' }}>{item}</code>
            {!submitted && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <button
                  onClick={() => idx > 0 && moveItem(idx, idx - 1)}
                  style={{ color: '#8b949e', fontSize: '0.7rem', padding: '2px 6px' }}
                  disabled={idx === 0}
                >▲</button>
                <button
                  onClick={() => idx < order.length - 1 && moveItem(idx, idx + 1)}
                  style={{ color: '#8b949e', fontSize: '0.7rem', padding: '2px 6px' }}
                  disabled={idx === order.length - 1}
                >▼</button>
              </div>
            )}
          </div>
        ))}
      </div>
      {!submitted && (
        <button className="btn-primary" onClick={handleCheck} style={{ width: '100%' }}>
          Verificar orden
        </button>
      )}
    </div>
  )
}

export default function LessonPlayer({ lesson, pathId, onComplete, onBack }) {
  const { loseHeart, addBadge } = useStore()
  const [phase, setPhase] = useState(lesson.theory ? 'theory' : 'quiz')
  const [questionIdx, setQuestionIdx] = useState(0)
  const [hearts, setHearts] = useState(5)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [showFeedback, setShowFeedback] = useState(null)
  const [completed, setCompleted] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)

  const questions = lesson.questions || []
  const currentQ = questions[questionIdx]
  const progress = questions.length > 0 ? (questionIdx / questions.length) : 0

  const handleAnswer = (correct) => {
    setAnswered(true)
    setShowFeedback(correct)

    if (correct) {
      setScore(s => s + 1)
    } else {
      setHearts(h => Math.max(0, h - 1))
      loseHeart()
    }

    setTimeout(() => {
      setShowFeedback(null)
      setAnswered(false)
      if (questionIdx + 1 >= questions.length || hearts <= 1 && !correct) {
        const earned = Math.round((lesson.xpReward * score) / questions.length) + (correct ? 10 : 0)
        setXpEarned(earned)
        setCompleted(true)
      } else {
        setQuestionIdx(i => i + 1)
      }
    }, 1500)
  }

  if (completed) {
    const accuracy = Math.round((score / questions.length) * 100) || 0
    return (
      <div style={{ padding: '24px', textAlign: 'center', paddingBottom: '100px', maxWidth: '672px', margin: '0 auto' }}>
        <div className="bounce-in">
          <div style={{ fontSize: '5rem', marginBottom: '16px' }}>
            {accuracy >= 80 ? '🏆' : accuracy >= 50 ? '🌟' : '💪'}
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '8px' }}>
            {accuracy >= 80 ? '¡Excelente!' : accuracy >= 50 ? '¡Buen trabajo!' : '¡Sigue intentando!'}
          </h2>
          <div style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: '24px' }}>
            {accuracy >= 80 ? '"Excellent!" · ¡Lo lograste!' : '"Keep going!" · ¡No te rindas!'}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {[
              { icon: '⭐', value: `${xpEarned} XP`, label: 'Ganados' },
              { icon: '🎯', value: `${accuracy}%`, label: 'Precisión · "Accuracy"' },
              { icon: '❤️', value: hearts, label: 'Vidas · "Hearts"' },
            ].map(s => (
              <div key={s.label} className="card" style={{ padding: '14px' }}>
                <div style={{ fontSize: '1.5rem' }}>{s.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#58CC02', marginTop: '4px' }}>{s.value}</div>
                <div style={{ fontSize: '0.65rem', color: '#8b949e', marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <button className="btn-primary" onClick={() => onComplete(xpEarned)} style={{ width: '100%', marginBottom: '12px', padding: '16px' }}>
            ¡Continuar! · "Continue" →
          </button>
          <button className="btn-ghost" onClick={onBack} style={{ width: '100%' }}>
            Volver a lecciones
          </button>
        </div>
      </div>
    )
  }

  if (phase === 'theory' && lesson.theory) {
    return (
      <div>
        <div style={{ padding: '16px 16px 0', maxWidth: '672px', margin: '0 auto' }}>
          <button className="btn-ghost" onClick={onBack} style={{ marginBottom: '8px', padding: '8px 16px', fontSize: '0.85rem' }}>
            ← Volver
          </button>
        </div>
        <TheoryScreen theory={lesson.theory} onNext={() => setPhase('quiz')} />
      </div>
    )
  }

  return (
    <div style={{ padding: '16px', paddingBottom: '100px', maxWidth: '672px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <button className="btn-ghost" onClick={onBack} style={{ padding: '8px 12px', fontSize: '0.85rem' }}>
          ✕
        </button>
        <div style={{ flex: 1 }}>
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ fontSize: '1.1rem', opacity: i < hearts ? 1 : 0.3 }}>❤️</span>
          ))}
        </div>
      </div>

      {/* Question number */}
      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#8b949e', letterSpacing: '0.08em', marginBottom: '8px' }}>
        PREGUNTA {questionIdx + 1} DE {questions.length}
      </div>

      {/* Question */}
      <div className="slide-up" key={questionIdx}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '8px', lineHeight: '1.4' }}>
          {currentQ.question}
        </h3>
        {currentQ.questionNote && (
          <div style={{
            background: 'rgba(28,176,246,0.1)',
            border: '1px solid rgba(28,176,246,0.2)',
            borderRadius: '8px',
            padding: '8px 12px',
            fontSize: '0.78rem',
            color: '#1CB0F6',
            marginBottom: '16px',
          }}>
            🇺🇸 {currentQ.questionNote}
          </div>
        )}

        {/* Question Component */}
        {currentQ.type === 'multiple-choice' && (
          <MultipleChoiceQ question={currentQ} onAnswer={handleAnswer} answered={answered} />
        )}
        {currentQ.type === 'fill-blank' && (
          <FillBlankQ question={currentQ} onAnswer={handleAnswer} />
        )}
        {currentQ.type === 'order' && (
          <OrderQ question={currentQ} onAnswer={handleAnswer} />
        )}
      </div>

      {/* Feedback */}
      {showFeedback !== null && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '640px',
          background: showFeedback ? '#0f2400' : '#2d0000',
          border: `2px solid ${showFeedback ? '#58CC02' : '#FF4B4B'}`,
          borderRadius: '16px',
          padding: '16px',
          zIndex: 150,
          animation: 'slide-up 0.2s ease',
        }}>
          <div style={{ fontWeight: 800, color: showFeedback ? '#58CC02' : '#FF4B4B', marginBottom: '6px' }}>
            {showFeedback ? '✓ ¡Correcto! · "Correct!"' : '✗ Incorrecto · "Wrong"'}
          </div>
          <div style={{ fontSize: '0.82rem', color: '#c9d1d9', lineHeight: '1.5' }}
            dangerouslySetInnerHTML={{
              __html: (currentQ.explanation || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
          />
        </div>
      )}
    </div>
  )
}
