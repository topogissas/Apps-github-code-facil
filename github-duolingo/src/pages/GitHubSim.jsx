import { useState } from 'react'
import useStore from '../store/useStore'

function CreateRepoModal({ onClose, onCreate }) {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [lang, setLang] = useState('JavaScript')
  const [isPrivate, setIsPrivate] = useState(false)

  const langs = ['JavaScript', 'Python', 'TypeScript', 'HTML/CSS', 'Java', 'Rust']
  const langColors = { JavaScript: '#f7df1e', Python: '#3572A5', TypeScript: '#3178c6', 'HTML/CSS': '#e34c26', Java: '#b07219', Rust: '#dea584' }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 style={{ fontWeight: 900, fontSize: '1.1rem', marginBottom: '16px' }}>
          📁 Crear repositorio · "Create repository"
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#8b949e', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              Nombre · "Repository name"
            </label>
            <input
              value={name}
              onChange={e => setName(e.target.value.toLowerCase().replace(/\s/g, '-'))}
              placeholder="mi-proyecto-genial"
              style={{
                width: '100%', background: '#0d1117', border: '2px solid #30363d',
                borderRadius: '8px', padding: '10px 14px', color: '#e6edf3', fontSize: '0.9rem', outline: 'none',
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#8b949e', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              Descripción · "Description" (opcional)
            </label>
            <input
              value={desc}
              onChange={e => setDesc(e.target.value)}
              placeholder="¿De qué trata tu proyecto?"
              style={{
                width: '100%', background: '#0d1117', border: '2px solid #30363d',
                borderRadius: '8px', padding: '10px 14px', color: '#e6edf3', fontSize: '0.9rem', outline: 'none',
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#8b949e', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              Lenguaje · "Language"
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {langs.map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    padding: '6px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 700,
                    border: `2px solid ${lang === l ? langColors[l] : '#30363d'}`,
                    background: lang === l ? `${langColors[l]}20` : 'transparent',
                    color: lang === l ? langColors[l] : '#8b949e',
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              id="private"
              checked={isPrivate}
              onChange={e => setIsPrivate(e.target.checked)}
              style={{ width: '18px', height: '18px' }}
            />
            <label htmlFor="private" style={{ fontSize: '0.85rem', cursor: 'pointer' }}>
              🔒 Privado · "Private"
            </label>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button className="btn-ghost" onClick={onClose} style={{ flex: 1 }}>Cancelar</button>
          <button
            className="btn-primary"
            onClick={() => {
              if (name.trim()) {
                onCreate({ name: name.trim(), description: desc, language: lang, languageColor: { JavaScript: '#f7df1e', Python: '#3572A5', TypeScript: '#3178c6', 'HTML/CSS': '#e34c26', Java: '#b07219', Rust: '#dea584' }[lang], isPrivate })
                onClose()
              }
            }}
            style={{ flex: 1 }}
            disabled={!name.trim()}
          >
            Crear 📁
          </button>
        </div>
      </div>
    </div>
  )
}

function CommitModal({ repo, onClose, onCommit }) {
  const [message, setMessage] = useState('')
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 style={{ fontWeight: 900, fontSize: '1.1rem', marginBottom: '8px' }}>
          💾 Nuevo commit
        </h3>
        <div style={{ color: '#8b949e', fontSize: '0.78rem', marginBottom: '16px' }}>
          "Commit" = Guardar un punto en la historia del código
        </div>
        <div className="code-block" style={{ marginBottom: '12px', fontSize: '0.78rem', color: '#8b949e' }}>
          <span style={{ color: '#58CC02' }}>$</span> git add .<br/>
          <span style={{ color: '#58CC02' }}>$</span> git commit -m "<span style={{ color: '#f0c674' }}>{message || 'tu mensaje aquí'}</span>"
        </div>
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='Ej: "Agrega página de inicio"'
          style={{
            width: '100%', background: '#0d1117', border: '2px solid #30363d',
            borderRadius: '8px', padding: '10px 14px', color: '#e6edf3', fontSize: '0.9rem', outline: 'none', marginBottom: '16px',
          }}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-ghost" onClick={onClose} style={{ flex: 1 }}>Cancelar</button>
          <button
            className="btn-primary"
            onClick={() => { if (message.trim()) { onCommit(message.trim()); onClose() } }}
            disabled={!message.trim()}
            style={{ flex: 1 }}
          >
            💾 Commit
          </button>
        </div>
      </div>
    </div>
  )
}

function IssueModal({ onClose, onCreate }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [label, setLabel] = useState('bug')

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 style={{ fontWeight: 900, fontSize: '1.1rem', marginBottom: '8px' }}>
          🐛 Nueva Issue
        </h3>
        <div style={{ color: '#8b949e', fontSize: '0.78rem', marginBottom: '16px' }}>
          "Issue" = Problema o tarea pendiente en el proyecto
        </div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Título: Ej: "Error en formulario de login"'
          style={{
            width: '100%', background: '#0d1117', border: '2px solid #30363d',
            borderRadius: '8px', padding: '10px 14px', color: '#e6edf3', fontSize: '0.9rem', outline: 'none', marginBottom: '10px',
          }}
        />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder='Describe el problema detalladamente...'
          rows={3}
          style={{
            width: '100%', background: '#0d1117', border: '2px solid #30363d',
            borderRadius: '8px', padding: '10px 14px', color: '#e6edf3', fontSize: '0.85rem', outline: 'none',
            resize: 'vertical', fontFamily: 'inherit', marginBottom: '10px',
          }}
        />
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {['bug', 'feature', 'docs', 'help'].map(l => (
            <button
              key={l}
              onClick={() => setLabel(l)}
              style={{
                padding: '4px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700,
                border: `1px solid ${label === l ? '#58CC02' : '#30363d'}`,
                background: label === l ? 'rgba(88,204,2,0.15)' : 'transparent',
                color: label === l ? '#58CC02' : '#8b949e',
              }}
            >
              {l}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-ghost" onClick={onClose} style={{ flex: 1 }}>Cancelar</button>
          <button
            className="btn-primary"
            onClick={() => { if (title.trim()) { onCreate({ title, body, labels: [label] }); onClose() } }}
            disabled={!title.trim()}
            style={{ flex: 1 }}
          >
            Crear Issue 🐛
          </button>
        </div>
      </div>
    </div>
  )
}

function BranchModal({ repo, onClose, onCreate }) {
  const [name, setName] = useState('')
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 style={{ fontWeight: 900, fontSize: '1.1rem', marginBottom: '8px' }}>
          🌿 Nueva Branch
        </h3>
        <div style={{ color: '#8b949e', fontSize: '0.78rem', marginBottom: '12px' }}>
          "Branch" = Rama | Crear desde: <span style={{ color: '#58CC02' }}>{repo.currentBranch}</span>
        </div>
        <div className="code-block" style={{ marginBottom: '12px', fontSize: '0.78rem', color: '#8b949e' }}>
          <span style={{ color: '#58CC02' }}>$</span> git branch <span style={{ color: '#f0c674' }}>{name || 'nombre-rama'}</span><br/>
          <span style={{ color: '#58CC02' }}>$</span> git checkout <span style={{ color: '#f0c674' }}>{name || 'nombre-rama'}</span>
        </div>
        <input
          value={name}
          onChange={e => setName(e.target.value.toLowerCase().replace(/\s/g, '-'))}
          placeholder='Ej: "feature/nueva-funcion"'
          style={{
            width: '100%', background: '#0d1117', border: '2px solid #30363d',
            borderRadius: '8px', padding: '10px 14px', color: '#e6edf3', fontSize: '0.9rem', outline: 'none', marginBottom: '16px',
          }}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-ghost" onClick={onClose} style={{ flex: 1 }}>Cancelar</button>
          <button
            className="btn-primary"
            onClick={() => { if (name.trim()) { onCreate(name.trim()); onClose() } }}
            disabled={!name.trim()}
            style={{ flex: 1 }}
          >
            Crear 🌿
          </button>
        </div>
      </div>
    </div>
  )
}

function RepoDetail({ repo, onBack }) {
  const { commitChanges, createBranch, createIssue, repositories } = useStore()
  const [activeTab, setActiveTab] = useState('code')
  const [showCommitModal, setShowCommitModal] = useState(false)
  const [showBranchModal, setShowBranchModal] = useState(false)
  const [showIssueModal, setShowIssueModal] = useState(false)

  const liveRepo = repositories.find(r => r.id === repo.id) || repo

  const tabs = [
    { id: 'code', label: 'Code', emoji: '📄' },
    { id: 'commits', label: 'Commits', emoji: '💾' },
    { id: 'branches', label: 'Branches', emoji: '🌿' },
    { id: 'issues', label: 'Issues', emoji: '🐛' },
  ]

  return (
    <div style={{ padding: '16px', paddingBottom: '100px', maxWidth: '672px', margin: '0 auto' }}>
      {showCommitModal && <CommitModal repo={liveRepo} onClose={() => setShowCommitModal(false)} onCommit={(msg) => commitChanges(liveRepo.id, msg)} />}
      {showBranchModal && <BranchModal repo={liveRepo} onClose={() => setShowBranchModal(false)} onCreate={(name) => createBranch(liveRepo.id, name)} />}
      {showIssueModal && <IssueModal onClose={() => setShowIssueModal(false)} onCreate={(issue) => createIssue(liveRepo.id, issue)} />}

      <button className="btn-ghost" onClick={onBack} style={{ marginBottom: '16px', padding: '8px 16px', fontSize: '0.85rem' }}>
        ← Mis repositorios
      </button>

      {/* Repo Header */}
      <div className="card" style={{ padding: '16px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#58CC02' }}>
              📁 {liveRepo.name}
            </div>
            <div style={{ color: '#8b949e', fontSize: '0.8rem', marginTop: '4px' }}>{liveRepo.description}</div>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
            <span className="badge badge-blue" style={{ marginLeft: '4px' }}>
              {liveRepo.isPrivate ? '🔒 Private' : '🌐 Public'}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px', fontSize: '0.8rem', color: '#8b949e', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: liveRepo.languageColor, display: 'inline-block' }} />
            {liveRepo.language}
          </span>
          <span>⭐ {liveRepo.stars}</span>
          <span>🍴 {liveRepo.forks} forks</span>
          <span>🌿 {liveRepo.branches?.length || 1} ramas</span>
          <span>💾 {liveRepo.commits?.length || 0} commits</span>
        </div>
        <div style={{ marginTop: '8px' }}>
          <span style={{ fontSize: '0.75rem', color: '#8b949e', background: '#21262d', padding: '3px 8px', borderRadius: '6px', fontFamily: 'monospace' }}>
            🌿 {liveRepo.currentBranch || 'main'}
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '16px' }}>
        <button className="btn-primary" onClick={() => setShowCommitModal(true)} style={{ fontSize: '0.78rem', padding: '10px' }}>
          💾 Commit
        </button>
        <button className="btn-blue" onClick={() => setShowBranchModal(true)} style={{ fontSize: '0.78rem', padding: '10px' }}>
          🌿 Branch
        </button>
        <button className="btn-orange" onClick={() => setShowIssueModal(true)} style={{ fontSize: '0.78rem', padding: '10px' }}>
          🐛 Issue
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', background: '#0d1117', borderRadius: '10px', padding: '4px' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '8px',
              fontSize: '0.72rem',
              fontWeight: 700,
              background: activeTab === tab.id ? '#161b22' : 'transparent',
              color: activeTab === tab.id ? '#e6edf3' : '#8b949e',
              border: activeTab === tab.id ? '1px solid #30363d' : 'none',
              transition: 'all 0.2s',
            }}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'code' && (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {Object.keys(liveRepo.files || {}).map(filename => (
              <div key={filename} className="card" style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1rem' }}>
                  {filename.endsWith('.md') ? '📝' : filename.endsWith('.js') ? '🟨' : filename.endsWith('.py') ? '🐍' : '📄'}
                </span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', flex: 1 }}>{filename}</span>
                <span style={{ fontSize: '0.72rem', color: '#8b949e' }}>
                  {liveRepo.commits?.[0]?.message?.slice(0, 20) || 'Initial commit'}
                </span>
              </div>
            ))}
          </div>
          {liveRepo.files?.['README.md'] && (
            <div className="card" style={{ marginTop: '12px', padding: '16px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#8b949e', marginBottom: '10px', letterSpacing: '0.08em' }}>
                📝 README.md
              </div>
              <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.82rem', lineHeight: '1.6', color: '#c9d1d9', fontFamily: 'inherit' }}>
                {liveRepo.files['README.md']}
              </pre>
            </div>
          )}
        </div>
      )}

      {activeTab === 'commits' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {(liveRepo.commits || []).map((commit, idx) => (
            <div key={commit.id} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid #21262d' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', paddingTop: '4px' }}>
                <div className="commit-dot" />
                {idx < (liveRepo.commits.length - 1) && <div style={{ width: '2px', height: '24px', background: '#30363d' }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{commit.message}</div>
                <div style={{ color: '#8b949e', fontSize: '0.74rem', marginTop: '2px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span>👤 {commit.author}</span>
                  <code style={{ color: '#79c0ff' }}>{commit.id}</code>
                  <span>{new Date(commit.date).toLocaleDateString('es', { day: '2-digit', month: 'short' })}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'branches' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {(liveRepo.branches || ['main']).map(branch => (
            <div key={branch} className="card" style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🌿</span>
              <span style={{ fontFamily: 'monospace', flex: 1 }}>{branch}</span>
              {branch === liveRepo.currentBranch && <span className="badge badge-green">actual · current</span>}
              {branch === 'main' && <span className="badge badge-blue">main</span>}
            </div>
          ))}
          <div className="card" style={{ padding: '12px', background: 'rgba(88,204,2,0.05)' }}>
            <div style={{ fontSize: '0.8rem', color: '#58CC02', fontWeight: 700, marginBottom: '4px' }}>
              💡 Tip: Naming conventions · Convenciones de nombre
            </div>
            <div style={{ fontSize: '0.75rem', color: '#8b949e', lineHeight: '1.5' }}>
              <code>feature/nombre</code> → nueva función<br/>
              <code>fix/descripcion</code> → corrección de bug<br/>
              <code>docs/readme</code> → documentación
            </div>
          </div>
        </div>
      )}

      {activeTab === 'issues' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {liveRepo.issues?.length === 0 && (
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎉</div>
              <div style={{ fontWeight: 700 }}>¡Sin issues! · "No issues"</div>
              <div style={{ color: '#8b949e', fontSize: '0.82rem', marginTop: '4px' }}>Tu código está limpio por ahora</div>
            </div>
          )}
          {(liveRepo.issues || []).map(issue => (
            <div key={issue.id} className="card" style={{ padding: '14px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: issue.state === 'open' ? '#3fb950' : '#8b949e', fontSize: '1rem', flexShrink: 0 }}>
                  {issue.state === 'open' ? '🟢' : '🔴'}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{issue.title}</div>
                  {issue.body && <div style={{ color: '#8b949e', fontSize: '0.78rem', marginTop: '4px' }}>{issue.body}</div>}
                  <div style={{ display: 'flex', gap: '6px', marginTop: '6px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.72rem', color: '#8b949e' }}>#{issue.number} · {issue.author}</span>
                    {issue.labels?.map(l => (
                      <span key={l} className="badge badge-green">{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function GitHubSim() {
  const { repositories, createRepo, user } = useStore()
  const [selectedRepo, setSelectedRepo] = useState(null)
  const [showCreateModal, setShowCreateModal] = useState(false)

  if (selectedRepo) {
    const liveRepo = repositories.find(r => r.id === selectedRepo.id)
    return <RepoDetail repo={liveRepo || selectedRepo} onBack={() => setSelectedRepo(null)} />
  }

  return (
    <div style={{ padding: '16px', paddingBottom: '100px', maxWidth: '672px', margin: '0 auto' }}>
      {showCreateModal && (
        <CreateRepoModal
          onClose={() => setShowCreateModal(false)}
          onCreate={(data) => createRepo(data)}
        />
      )}

      {/* GitHub Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 900 }}>🐙 GitHub Simulator</h2>
          <p style={{ color: '#8b949e', fontSize: '0.82rem' }}>
            👤 {user.name} · {repositories.length} repositorios · "repositories"
          </p>
        </div>
        <button className="btn-primary" onClick={() => setShowCreateModal(true)} style={{ padding: '10px 14px', fontSize: '0.82rem' }}>
          + New
        </button>
      </div>

      {/* Profile card */}
      <div className="card" style={{ padding: '16px', marginBottom: '16px', display: 'flex', gap: '14px', alignItems: 'center' }}>
        <div style={{
          width: '56px', height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #58CC02, #1CB0F6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.8rem', flexShrink: 0,
        }}>
          {user.avatar}
        </div>
        <div>
          <div style={{ fontWeight: 900, fontSize: '1rem' }}>{user.name}</div>
          <div style={{ color: '#8b949e', fontSize: '0.78rem' }}>Nivel {user.level} · {user.totalXp} XP total</div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
            <span className="badge badge-green">🔥 {user.streak} días</span>
            <span className="badge badge-blue">⭐ {repositories.reduce((a, r) => a + r.stars, 0)} stars</span>
          </div>
        </div>
      </div>

      {/* Contribution graph (fake but fun) */}
      <div className="card" style={{ padding: '16px', marginBottom: '16px' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8b949e', marginBottom: '10px', letterSpacing: '0.08em' }}>
          📊 CONTRIBUTION GRAPH · Gráfica de contribuciones
        </div>
        <div style={{ display: 'flex', gap: '3px', overflowX: 'auto' }} className="scroll-hide">
          {Array.from({ length: 52 }).map((_, week) => (
            <div key={week} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {Array.from({ length: 7 }).map((_, day) => {
                const level = Math.random()
                const bg = level > 0.8 ? '#39d353' : level > 0.6 ? '#26a641' : level > 0.4 ? '#006d32' : level > 0.15 ? '#0e4429' : '#161b22'
                return (
                  <div key={day} style={{ width: '10px', height: '10px', borderRadius: '2px', background: bg }} />
                )
              })}
            </div>
          ))}
        </div>
        <div style={{ fontSize: '0.68rem', color: '#8b949e', marginTop: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span>Menos</span>
          {['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'].map(c => (
            <div key={c} style={{ width: '10px', height: '10px', borderRadius: '2px', background: c }} />
          ))}
          <span>Más</span>
        </div>
      </div>

      {/* Repositories */}
      <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '12px' }}>
        📁 Repositorios · "Repositories"
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {repositories.map(repo => (
          <button
            key={repo.id}
            onClick={() => setSelectedRepo(repo)}
            className="repo-card"
            style={{ textAlign: 'left', cursor: 'pointer', width: '100%' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontWeight: 700, color: '#58CC02', fontSize: '0.95rem' }}>
                📁 {repo.name}
              </div>
              <span style={{ fontSize: '0.72rem', color: '#8b949e', background: '#21262d', padding: '2px 8px', borderRadius: '999px' }}>
                {repo.isPrivate ? '🔒' : '🌐'}
              </span>
            </div>
            <div style={{ color: '#8b949e', fontSize: '0.78rem', margin: '6px 0' }}>{repo.description}</div>
            <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: '#8b949e', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: repo.languageColor, display: 'inline-block' }} />
                {repo.language}
              </span>
              <span>⭐ {repo.stars}</span>
              <span>🍴 {repo.forks}</span>
              <span>💾 {repo.commits?.length || 0} commits</span>
              <span>🌿 {repo.branches?.length || 1} ramas</span>
            </div>
          </button>
        ))}
      </div>

      {/* Git cheatsheet */}
      <div className="card" style={{ marginTop: '20px', padding: '16px', borderColor: '#FF9600' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FF9600', marginBottom: '12px', letterSpacing: '0.08em' }}>
          ⚡ CHEATSHEET · Comandos esenciales
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            ['git init', 'Inicializar repositorio · "Initialize"'],
            ['git clone URL', 'Clonar repositorio · "Clone"'],
            ['git add .', 'Preparar todos los archivos · "Stage all"'],
            ['git commit -m "msg"', 'Guardar cambios · "Commit"'],
            ['git push origin main', 'Subir a GitHub · "Push"'],
            ['git pull origin main', 'Descargar cambios · "Pull"'],
            ['git branch nombre', 'Crear rama · "Create branch"'],
            ['git checkout nombre', 'Cambiar de rama · "Switch branch"'],
            ['git status', 'Ver estado · "Check status"'],
            ['git log --oneline', 'Ver historial · "View history"'],
          ].map(([cmd, desc]) => (
            <div key={cmd} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <code style={{ color: '#79c0ff', fontSize: '0.75rem', flex: '0 0 auto', fontFamily: 'monospace', minWidth: '140px' }}>
                {cmd}
              </code>
              <span style={{ color: '#8b949e', fontSize: '0.72rem', lineHeight: '1.4' }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
