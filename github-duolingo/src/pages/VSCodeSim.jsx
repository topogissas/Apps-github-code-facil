import { useState } from 'react'
import useStore from '../store/useStore'

const STARTER_FILES = {
  'index.html': `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>¡Hola Mundo!</h1>
  <p>Mi primera página web</p>
  <script src="app.js"></script>
</body>
</html>`,
  'styles.css': `/* Estilos (Styles) para mi app */
body {
  font-family: Arial, sans-serif;
  background: #0d1117;
  color: #e6edf3;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #58CC02;
  /* "color" = color | "font" = fuente */
}

p {
  color: #8b949e;
  font-size: 1rem;
}`,
  'app.js': `// JavaScript - El lenguaje de la web
// "//" indica un comentario (comment)

// Variables (variables = contenedores de datos)
const mensaje = "¡Hola Mundo!";  // "const" = constante
let contador = 0;  // "let" = variable que cambia

// Function (función = bloque de código reutilizable)
function saludar(nombre) {
  // "return" = retornar/devolver
  return \`Hola, \${nombre}!\`;
}

// Array (arreglo = lista de elementos)
const lenguajes = ["JavaScript", "Python", "Rust"];

// Loop (bucle = repetir algo)
lenguajes.forEach(lang => {
  console.log(\`Lenguaje: \${lang}\`);
});

// Llamar la función (Call the function)
console.log(saludar("Coder"));`,
  'README.md': `# Mi Proyecto · My Project

## Descripción · Description
Este es mi proyecto de práctica.
This is my practice project.

## Tecnologías · Technologies
- HTML · Estructura (Structure)
- CSS · Estilos (Styles)
- JavaScript · Lógica (Logic)

## Cómo usar · How to use
1. Abre index.html en tu navegador
   Open index.html in your browser
2. ¡Disfruta! · Enjoy!`,
}

const SYNTAX_COLORS = {
  html: {
    keywords: ['<!DOCTYPE', '<html', '<head', '<body', '<h1', '<p', '<div', '<span', '<link', '<script', '<meta', '<title', '</html>', '</head>', '</body>', '</h1>', '</p>', '</div>', '</span>'],
    color: '#f47067',
    attrColor: '#79c0ff',
    strColor: '#a5d6ff',
    commentColor: '#8b949e',
  },
  js: {
    keywords: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'default', 'new', 'this', 'forEach', 'map', 'filter', 'true', 'false', 'null', 'undefined', 'async', 'await'],
    color: '#ff7b72',
    strColor: '#a5d6ff',
    commentColor: '#8b949e',
  },
  css: {
    keywords: ['body', 'div', 'span', 'h1', 'h2', 'p', 'a', 'ul', 'li'],
    propColor: '#79c0ff',
    valColor: '#a5d6ff',
    commentColor: '#8b949e',
  },
}

function SyntaxHighlight({ code, lang }) {
  const lines = code.split('\n')

  const highlight = (line) => {
    if (lang === 'js' || lang === 'javascript') {
      return line
        .replace(/(\/\/.*$)/g, '<span style="color:#8b949e;font-style:italic">$1</span>')
        .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|default|new|this|forEach|map|filter|true|false|null|undefined|async|await)\b/g, '<span style="color:#ff7b72">$1</span>')
        .replace(/(`[^`]*`|"[^"]*"|'[^']*')/g, '<span style="color:#a5d6ff">$1</span>')
        .replace(/\b(\d+)\b/g, '<span style="color:#79c0ff">$1</span>')
    }
    if (lang === 'css') {
      return line
        .replace(/(\/\*.*?\*\/)/g, '<span style="color:#8b949e">$1</span>')
        .replace(/([a-z-]+)(\s*:)/g, '<span style="color:#79c0ff">$1</span>$2')
        .replace(/:\s*([^;{]+)/g, ': <span style="color:#a5d6ff">$1</span>')
    }
    if (lang === 'html') {
      return line
        .replace(/(&lt;\/?[a-zA-Z][^&]*?&gt;|<\/?[a-zA-Z][^>]*?>)/g, (m) => `<span style="color:#f47067">${m}</span>`)
        .replace(/(["'][^"']*["'])/g, '<span style="color:#a5d6ff">$1</span>')
    }
    return line
  }

  return (
    <div style={{ overflow: 'auto' }} className="scroll-hide">
      {lines.map((line, i) => (
        <div key={i} style={{ display: 'flex', minHeight: '1.7em' }}>
          <span className="line-number">{i + 1}</span>
          <span
            style={{ whiteSpace: 'pre', flex: 1 }}
            dangerouslySetInnerHTML={{ __html: highlight(line.replace(/</g, '&lt;').replace(/>/g, '&gt;')) }}
          />
        </div>
      ))}
    </div>
  )
}

const SHORTCUTS = [
  { keys: 'Ctrl+S', action: 'Save · Guardar', icon: '💾' },
  { keys: 'Ctrl+Z', action: 'Undo · Deshacer', icon: '↩' },
  { keys: 'Ctrl+/', action: 'Comment · Comentar', icon: '💬' },
  { keys: 'Ctrl+P', action: 'Quick Open · Abrir rápido', icon: '🔍' },
  { keys: 'Ctrl+⇧+P', action: 'Command Palette · Paleta de comandos', icon: '⚡' },
  { keys: 'Ctrl+`', action: 'Terminal · Terminal integrada', icon: '🖥️' },
  { keys: 'Alt+↑↓', action: 'Move Line · Mover línea', icon: '↕' },
  { keys: 'Ctrl+D', action: 'Select Next · Seleccionar siguiente igual', icon: '🎯' },
  { keys: 'Ctrl+F', action: 'Find · Buscar en archivo', icon: '🔎' },
  { keys: 'Ctrl+H', action: 'Replace · Reemplazar', icon: '🔄' },
]

const EXTENSIONS = [
  { name: 'Prettier', desc: 'Formatea tu código automáticamente', icon: '✨', category: 'Formatter · Formateador', installed: true },
  { name: 'ESLint', desc: 'Detecta errores en JavaScript', icon: '🔍', category: 'Linter · Verificador', installed: true },
  { name: 'GitLens', desc: 'Mejora la integración con Git', icon: '🐙', category: 'Git · Control de versiones', installed: false },
  { name: 'Live Server', desc: 'Recarga automática del navegador', icon: '🌐', category: 'Server · Servidor local', installed: false },
  { name: 'GitHub Copilot', desc: 'IA que completa tu código', icon: '🤖', category: 'AI · Inteligencia Artificial', installed: false },
  { name: 'Material Icon Theme', desc: 'Íconos bonitos para los archivos', icon: '🎨', category: 'Theme · Tema', installed: true },
  { name: 'Auto Rename Tag', desc: 'Renombra tags HTML automáticamente', icon: '🏷️', category: 'HTML · Etiquetas', installed: false },
  { name: 'Path Intellisense', desc: 'Autocompletado de rutas de archivo', icon: '📁', category: 'Utility · Utilidad', installed: false },
]

export default function VSCodeSim() {
  const { repositories, activeRepoId, activeFile, setActiveFile, updateFile, commitChanges, addXP } = useStore()
  const [sidebarTab, setSidebarTab] = useState('explorer')
  const [openFiles, setOpenFiles] = useState(['index.html', 'styles.css', 'app.js'])
  const [currentFile, setCurrentFile] = useState('index.html')
  const [fileContents, setFileContents] = useState(STARTER_FILES)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: '$ VS Code Terminal · Terminal integrada' },
    { type: 'output', text: 'Tip: Usa "git status" para ver el estado de tu repositorio' },
  ])
  const [terminalInput, setTerminalInput] = useState('')
  const [viewMode, setViewMode] = useState('editor') // 'editor' | 'shortcuts' | 'extensions'
  const [editMode, setEditMode] = useState(false)
  const [editContent, setEditContent] = useState('')
  const [saved, setSaved] = useState(false)

  const fileExt = currentFile.split('.').pop()
  const langMap = { js: 'javascript', css: 'css', html: 'html', md: 'markdown' }
  const lang = langMap[fileExt] || 'text'

  const fileIcons = { html: '🌐', css: '🎨', js: '🟨', md: '📝', json: '📋', ts: '🔷', py: '🐍' }
  const fileIcon = fileIcons[fileExt] || '📄'

  const openFile = (filename) => {
    setCurrentFile(filename)
    if (!openFiles.includes(filename)) {
      setOpenFiles([...openFiles, filename])
    }
    setEditMode(false)
  }

  const handleTerminalSubmit = (e) => {
    e.preventDefault()
    if (!terminalInput.trim()) return

    const cmd = terminalInput.trim()
    const newHistory = [...terminalHistory, { type: 'input', text: `$ ${cmd}` }]

    const responses = {
      'git status': ['On branch main · Estás en la rama main', 'nothing to commit, working tree clean', '"working tree clean" = Todo guardado ✓'],
      'git log --oneline': ['abc123f (HEAD -> main) Initial commit', 'Tip: HEAD = tu posición actual en el historial'],
      'git branch': ['* main  ← el asterisco (*) indica la rama actual'],
      'ls': ['index.html  styles.css  app.js  README.md'],
      'pwd': ['/home/codinator/mi-proyecto  ← "pwd" = Print Working Directory'],
      'clear': null,
      'help': ['Comandos disponibles · Available commands:', 'git status, git log --oneline, git branch, ls, pwd', 'Tip: En inglés "command" = comando'],
    }

    let output = []
    if (cmd === 'clear') {
      setTerminalHistory([])
      setTerminalInput('')
      return
    } else if (responses[cmd]) {
      output = responses[cmd].map(t => ({ type: 'output', text: t }))
    } else if (cmd.startsWith('git commit')) {
      output = [
        { type: 'output', text: '[main abc1234] ' + (cmd.split('"')[1] || 'commit') },
        { type: 'output', text: '1 file changed · "changed" = cambiado' },
        { type: 'success', text: '✓ +15 XP ganados!' },
      ]
      addXP(15)
    } else if (cmd.startsWith('git add')) {
      output = [{ type: 'output', text: '✓ Archivos preparados · "Staged" files ready for commit' }]
    } else if (cmd.startsWith('echo')) {
      output = [{ type: 'output', text: cmd.replace('echo ', '').replace(/"/g, '') }]
    } else {
      output = [{ type: 'error', text: `Comando no encontrado · "command not found": ${cmd}` }]
    }

    setTerminalHistory([...newHistory, ...output])
    setTerminalInput('')
  }

  const handleSave = () => {
    if (editMode) {
      setFileContents({ ...fileContents, [currentFile]: editContent })
      setEditMode(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
      addXP(5)
    }
  }

  const startEdit = () => {
    setEditContent(fileContents[currentFile] || '')
    setEditMode(true)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)', paddingBottom: '60px' }}>
      {/* VS Code Title bar */}
      <div style={{ background: '#323233', padding: '6px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #3e3e42' }}>
        <div style={{ fontSize: '0.75rem', color: '#cccccc', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1rem' }}>💻</span>
          <strong>Visual Studio Code</strong>
          <span style={{ color: '#8b949e' }}>· mi-proyecto</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setViewMode(viewMode === 'shortcuts' ? 'editor' : 'shortcuts')}
            style={{ fontSize: '0.7rem', color: viewMode === 'shortcuts' ? '#58CC02' : '#8b949e', background: 'none', padding: '2px 6px' }}
          >
            ⌨️
          </button>
          <button
            onClick={() => setViewMode(viewMode === 'extensions' ? 'editor' : 'extensions')}
            style={{ fontSize: '0.7rem', color: viewMode === 'extensions' ? '#58CC02' : '#8b949e', background: 'none', padding: '2px 6px' }}
          >
            🧩
          </button>
        </div>
      </div>

      {viewMode === 'shortcuts' && (
        <div style={{ flex: 1, overflow: 'auto', padding: '16px', background: '#1e1e1e' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#58CC02', marginBottom: '12px', letterSpacing: '0.08em' }}>
            ⌨️ KEYBOARD SHORTCUTS · Atajos de teclado
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {SHORTCUTS.map(s => (
              <div key={s.keys} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', background: '#252526', borderRadius: '8px' }}>
                <span style={{ fontSize: '1rem' }}>{s.icon}</span>
                <code style={{ color: '#79c0ff', fontSize: '0.78rem', minWidth: '90px', fontFamily: 'monospace' }}>{s.keys}</code>
                <span style={{ color: '#cccccc', fontSize: '0.78rem' }}>{s.action}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {viewMode === 'extensions' && (
        <div style={{ flex: 1, overflow: 'auto', padding: '16px', background: '#1e1e1e' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#58CC02', marginBottom: '12px', letterSpacing: '0.08em' }}>
            🧩 EXTENSIONS · Extensiones recomendadas
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {EXTENSIONS.map(ext => (
              <div key={ext.name} style={{ background: '#252526', borderRadius: '8px', padding: '10px 12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>{ext.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#cccccc', fontSize: '0.85rem' }}>{ext.name}</span>
                    {ext.installed && <span style={{ fontSize: '0.65rem', color: '#58CC02', fontWeight: 700 }}>INSTALADA</span>}
                  </div>
                  <div style={{ color: '#8b949e', fontSize: '0.75rem', marginTop: '2px' }}>{ext.desc}</div>
                  <div style={{ color: '#79c0ff', fontSize: '0.7rem', marginTop: '2px' }}>{ext.category}</div>
                </div>
                <button style={{
                  background: ext.installed ? 'transparent' : '#0078d4',
                  color: ext.installed ? '#8b949e' : 'white',
                  border: ext.installed ? '1px solid #3e3e42' : 'none',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  fontSize: '0.7rem',
                  cursor: ext.installed ? 'default' : 'pointer',
                }}>
                  {ext.installed ? 'Instalada' : 'Instalar'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {viewMode === 'editor' && (
        <>
          {/* Main area */}
          <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            {/* Sidebar icons */}
            <div className="vs-sidebar">
              {[
                { id: 'explorer', icon: '📁' },
                { id: 'search', icon: '🔍' },
                { id: 'git', icon: '🌿' },
                { id: 'extensions', icon: '🧩' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSidebarTab(sidebarTab === tab.id ? null : tab.id)}
                  style={{
                    padding: '10px',
                    borderRadius: '6px',
                    background: sidebarTab === tab.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: sidebarTab === tab.id ? '#58CC02' : '#858585',
                    fontSize: '1.1rem',
                    transition: 'all 0.15s',
                  }}
                >
                  {tab.icon}
                </button>
              ))}
            </div>

            {/* File explorer */}
            {sidebarTab === 'explorer' && (
              <div style={{ width: '160px', background: '#252526', borderRight: '1px solid #3e3e42', overflow: 'auto', flexShrink: 0 }}>
                <div style={{ padding: '8px 10px', fontSize: '0.65rem', fontWeight: 700, color: '#bbb', letterSpacing: '0.1em' }}>
                  EXPLORER
                </div>
                <div style={{ padding: '0 4px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#969696', padding: '4px 8px', fontWeight: 600 }}>
                    📁 MI-PROYECTO
                  </div>
                  {Object.keys(fileContents).map(filename => (
                    <button
                      key={filename}
                      onClick={() => openFile(filename)}
                      style={{
                        width: '100%', textAlign: 'left',
                        padding: '4px 8px 4px 20px',
                        background: currentFile === filename ? '#37373d' : 'transparent',
                        color: currentFile === filename ? '#e6edf3' : '#969696',
                        fontSize: '0.78rem',
                        borderRadius: '4px',
                        display: 'flex', alignItems: 'center', gap: '6px',
                      }}
                    >
                      <span>{fileIcons[filename.split('.').pop()] || '📄'}</span>
                      {filename}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Editor area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              {/* Tab bar */}
              <div className="vs-tab-bar scroll-hide">
                {openFiles.map(f => (
                  <div
                    key={f}
                    className={`vs-tab ${currentFile === f ? 'active' : ''}`}
                    onClick={() => openFile(f)}
                  >
                    <span>{fileIcons[f.split('.').pop()] || '📄'}</span>
                    {f}
                    {currentFile === f && saved && <span style={{ color: '#58CC02', fontSize: '0.7rem' }}>✓</span>}
                  </div>
                ))}
              </div>

              {/* Breadcrumb */}
              <div style={{ background: '#1e1e1e', padding: '4px 14px', fontSize: '0.7rem', color: '#858585', borderBottom: '1px solid #3e3e42', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>mi-proyecto › {currentFile} · {lang.toUpperCase()}</span>
                <button
                  onClick={editMode ? handleSave : startEdit}
                  style={{
                    fontSize: '0.68rem', color: editMode ? '#58CC02' : '#1CB0F6',
                    background: 'none', padding: '2px 6px',
                    border: `1px solid ${editMode ? '#58CC02' : '#1CB0F6'}`,
                    borderRadius: '4px',
                  }}
                >
                  {editMode ? '💾 Ctrl+S Guardar' : '✏️ Editar'}
                </button>
              </div>

              {/* Code editor */}
              <div className="vs-editor">
                {editMode ? (
                  <textarea
                    value={editContent}
                    onChange={e => setEditContent(e.target.value)}
                    onKeyDown={e => { if (e.ctrlKey && e.key === 's') { e.preventDefault(); handleSave() } }}
                    style={{
                      width: '100%', height: '100%', background: 'transparent',
                      color: '#d4d4d4', border: 'none', outline: 'none',
                      fontFamily: 'Courier New, monospace', fontSize: '0.82rem',
                      lineHeight: '1.7', resize: 'none',
                    }}
                  />
                ) : (
                  <SyntaxHighlight code={fileContents[currentFile] || ''} lang={lang} />
                )}
              </div>

              {/* Status bar */}
              <div style={{
                background: '#007acc', padding: '2px 12px',
                display: 'flex', gap: '16px', alignItems: 'center',
                fontSize: '0.65rem', color: 'white',
              }}>
                <span>🌿 main</span>
                <span>{lang.toUpperCase()}</span>
                <span>UTF-8</span>
                <span style={{ marginLeft: 'auto' }}>
                  {editMode ? '✏️ EDITANDO · EDITING' : '👀 LECTURA · READ'}
                </span>
              </div>
            </div>
          </div>

          {/* Terminal panel */}
          <div style={{ borderTop: '1px solid #3e3e42' }}>
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              style={{
                width: '100%', background: '#1e1e1e', padding: '4px 12px',
                display: 'flex', alignItems: 'center', gap: '8px',
                color: '#8b949e', fontSize: '0.72rem', borderBottom: '1px solid #3e3e42',
              }}
            >
              <span>🖥️ TERMINAL</span>
              <span style={{ marginLeft: 'auto' }}>{terminalOpen ? '▼' : '▲'}</span>
            </button>

            {terminalOpen && (
              <div style={{ background: '#1e1e1e', height: '140px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, overflow: 'auto', padding: '8px 12px', fontFamily: 'Courier New, monospace', fontSize: '0.78rem' }} className="scroll-hide">
                  {terminalHistory.map((line, i) => (
                    <div key={i} style={{
                      color: line.type === 'input' ? '#58CC02' : line.type === 'error' ? '#FF4B4B' : line.type === 'success' ? '#58CC02' : '#cccccc',
                      lineHeight: '1.5',
                    }}>
                      {line.text}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleTerminalSubmit} style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #3e3e42', padding: '6px 12px' }}>
                  <span style={{ color: '#58CC02', fontFamily: 'monospace', fontSize: '0.82rem', marginRight: '8px' }}>$</span>
                  <input
                    value={terminalInput}
                    onChange={e => setTerminalInput(e.target.value)}
                    placeholder='Escribe un comando · Type a command (help)'
                    style={{
                      flex: 1, background: 'transparent', border: 'none', outline: 'none',
                      color: '#e6edf3', fontFamily: 'Courier New, monospace', fontSize: '0.82rem',
                    }}
                  />
                </form>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
