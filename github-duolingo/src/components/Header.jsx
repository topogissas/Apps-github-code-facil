import useStore from '../store/useStore'

export default function Header() {
  const { user } = useStore()

  return (
    <header className="sticky top-0 z-50" style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}>
      <div className="flex items-center justify-between px-4 py-3 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span style={{ fontSize: '1.4rem' }}>🐙</span>
          <div>
            <div style={{ fontWeight: 900, fontSize: '0.9rem', color: '#58CC02', letterSpacing: '-0.02em' }}>
              GitLingo
            </div>
            <div style={{ fontSize: '0.6rem', color: '#8b949e', letterSpacing: '0.1em' }}>CODE DUOLINGO</div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3">
          {/* Streak */}
          <div className="flex items-center gap-1">
            <span className="streak-flame" style={{ fontSize: '1.1rem' }}>🔥</span>
            <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#FF9600' }}>{user.streak}</span>
          </div>

          {/* Hearts */}
          <div className="flex items-center gap-1">
            <span style={{ fontSize: '1rem' }}>❤️</span>
            <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#FF4B4B' }}>{user.hearts}</span>
          </div>

          {/* Gems */}
          <div className="flex items-center gap-1">
            <span style={{ fontSize: '1rem' }}>💎</span>
            <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1CB0F6' }}>{user.gems}</span>
          </div>

          {/* Level */}
          <div className="level-badge">
            {user.level}
          </div>
        </div>
      </div>

      {/* XP Bar */}
      <div style={{ padding: '0 16px 8px', maxWidth: '672px', margin: '0 auto' }}>
        <div className="xp-bar">
          <div
            className="xp-fill"
            style={{ width: `${Math.min(100, (user.xp / user.xpToNextLevel) * 100)}%` }}
          />
        </div>
        <div style={{ fontSize: '0.65rem', color: '#8b949e', marginTop: '2px', textAlign: 'right' }}>
          {user.xp} / {user.xpToNextLevel} XP · Nivel {user.level}
        </div>
      </div>
    </header>
  )
}
