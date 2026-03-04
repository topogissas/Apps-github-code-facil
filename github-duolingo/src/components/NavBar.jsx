export default function NavBar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', icon: '🏠', label: 'Inicio' },
    { id: 'learn', icon: '📚', label: 'Aprender' },
    { id: 'github', icon: '🐙', label: 'GitHub' },
    { id: 'vscode', icon: '💻', label: 'VS Code' },
    { id: 'guide', icon: '🤖', label: 'Guía IA' },
  ]

  return (
    <nav className="nav-bar">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span style={{ fontSize: '1.4rem' }}>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
