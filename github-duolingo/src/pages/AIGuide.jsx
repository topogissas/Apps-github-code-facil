import { useState, useRef, useEffect } from 'react'
import useStore from '../store/useStore'
import { AI_RESPONSES, GLOSSARY } from '../data/lessons'

const QUICK_QUESTIONS = [
  '¿Qué es un commit?',
  '¿Cómo hago un push?',
  '¿Para qué sirven las branches?',
  '¿Qué es un Pull Request?',
  'Explícame git clone',
  '¿Cómo uso VS Code con Git?',
  '¿Qué es el staging area?',
  '¿Cómo resuelvo un merge conflict?',
  '¿Cómo hago un fork?',
  '¿Cómo ejecuto la app en mi iPhone?',
  '¿Cómo hago deploy gratis con Vercel?',
  '¿Para qué sirve npm install?',
  '¿Cómo ejecuto un proyecto clonado?',
  '¿Qué es Vercel?',
]

const AI_KNOWLEDGE = {
  'commit': {
    answer: `💾 **Commit** (Confirmar/Guardar)

Un commit es como tomar una FOTO de tu código en un momento específico.

**Cómo hacerlo:**
\`\`\`
git add .          ← Preparar archivos ("stage")
git commit -m "mensaje descriptivo"
\`\`\`

**Reglas de oro:**
• Escribe mensajes descriptivos en presente
• Un commit = un cambio lógico
• Ejemplo: "Agrega botón de login"

📚 En inglés: "commit" también significa "comprometerse" o "confirmar". ¡Comprométete con tu código! 😄`,
  },
  'push': {
    answer: `⬆️ **Push** = Empujar/Subir

"Push" literalmente significa "empujar". ¡Estás empujando tu código hacia GitHub!

**Comando completo:**
\`\`\`
git push origin main
\`\`\`

**Desglose:**
• \`origin\` = el servidor remoto (GitHub)
• \`main\` = la rama que estás subiendo

**Flujo completo:**
1. \`git add .\` ← Preparar
2. \`git commit -m "msg"\` ← Guardar local
3. \`git push origin main\` ← ¡Subir a GitHub!

💡 La primera vez usa: \`git push -u origin main\``,
  },
  'branch': {
    answer: `🌿 **Branch** (Rama)

Imagina que tu código es un árbol 🌳. La rama principal es **main** (el tronco). Puedes crear ramas para nuevas funciones sin tocar el tronco.

**Comandos esenciales:**
\`\`\`
git branch nueva-feature      ← Crear
git checkout nueva-feature    ← Cambiar a ella
git branch                    ← Ver todas
git merge nueva-feature       ← Fusionar ("merge")
\`\`\`

**Convenciones de nombres:**
• \`feature/nombre\` → Nueva función
• \`fix/descripcion\` → Corrección de bug
• \`docs/readme\` → Documentación

🔀 "Merge" = Fusionar = Unir los cambios de regreso al tronco principal`,
  },
  'pull request': {
    answer: `📬 **Pull Request** (Solicitud de cambios)

Un Pull Request (PR) es literalmente "una solicitud para que jalen (pull) tus cambios".

**¿Cuándo se usa?**
Cuando terminas una feature en tu rama y quieres integrarla al proyecto principal.

**El flujo completo:**
1. Crear branch → \`git checkout -b mi-feature\`
2. Hacer commits → \`git commit -m ".."\`
3. Subir a GitHub → \`git push origin mi-feature\`
4. Abrir Pull Request en GitHub
5. Code Review (revisión de código) con el equipo
6. Merge al main ✅

**Anatomía de un buen PR:**
• **Title** (título): Descriptivo y corto
• **Description** (descripción): Qué cambió y por qué
• **Labels** (etiquetas): bug, feature, docs...

🔍 "Review" = Revisión | "Reviewer" = Revisor`,
  },
  'clone': {
    answer: `🔄 **Clone** (Clonar)

"Clone" = Clonar = Hacer una copia exacta.

\`\`\`
git clone https://github.com/usuario/repo.git
\`\`\`

Esto descarga:
• Todo el código ✓
• Todo el historial de commits ✓
• Todas las ramas ✓
• La conexión con el remoto ya configurada ✓

**Clone vs Fork:**
• **Clone** = Copiar a tu PC local
• **Fork** = Copiar a tu cuenta de GitHub

💡 Después de clonar, ya puedes trabajar con el proyecto directamente sin configurar nada más.`,
  },
  'staging area': {
    answer: `🎭 **Staging Area** (Área de preparación)

Es la zona intermedia entre tus archivos modificados y un commit.

**Analogía:** Imagina que estás empacando una maleta:
• Tus archivos modificados = ropa sucia en el piso
• \`git add\` = meter ropa en la maleta (staging)
• \`git commit\` = cerrar y etiquetar la maleta

**Por qué existe:**
Te permite elegir EXACTAMENTE qué cambios incluir en cada commit, aunque hayas modificado muchos archivos.

\`\`\`
git add archivo.txt     ← Agregar uno
git add carpeta/        ← Agregar una carpeta
git add .               ← Agregar TODO
git status              ← Ver qué está en staging
\`\`\`

📌 En inglés: "stage" también significa "etapa" o "escenario"`,
  },
  'merge conflict': {
    answer: `⚔️ **Merge Conflict** (Conflicto de fusión)

Ocurre cuando dos personas modificaron la MISMA línea de código.

**Cómo se ve en el archivo:**
\`\`\`
<<<<<<< HEAD (tu versión)
color: blue;
=======
color: red;
>>>>>>> feature-branch (otra versión)
\`\`\`

**Cómo resolverlo:**
1. Abre el archivo con el conflicto
2. Decide qué versión queda (o combínalas)
3. Elimina las marcas (\`<<<<<<<\`, \`=======\`, \`>>>>>>>\`)
4. \`git add archivo.txt\`
5. \`git commit\`

💡 VS Code tiene una interfaz visual para resolver conflictos. ¡Úsala!

🛡️ Tip: La mejor prevención es hacer commits frecuentes y comunicarte con tu equipo.`,
  },
  'vs code': {
    answer: `💻 **VS Code** (Visual Studio Code)

El editor más popular del mundo. Creado por Microsoft, gratuito y de código abierto (open source).

**Atajos que te cambian la vida:**
• \`Ctrl+S\` → Save (Guardar)
• \`Ctrl+P\` → Quick Open (Abrir archivo rápido)
• \`Ctrl+Shift+P\` → Command Palette (¡Tu super poder!)
• \`Ctrl+\`\` → Terminal integrada
• \`Ctrl+/\` → Comentar línea
• \`Alt+↑↓\` → Mover línea

**Extensiones recomendadas:**
• **Prettier** → Formatea código automáticamente
• **GitLens** → Supercar los poderes de Git
• **Live Server** → Ver cambios en tiempo real
• **GitHub Copilot** → IA que escribe código contigo
• **ESLint** → Detecta errores en JS

🚀 Tip: La **Command Palette** (Ctrl+Shift+P) = acceso a TODO`,
  },
  'workflow': {
    answer: `⚡ **GitHub Workflow** (Flujo de trabajo)

El flujo profesional para trabajar en equipo:

\`\`\`
1. git pull origin main          ← Actualizar
2. git checkout -b mi-feature    ← Nueva rama
3. [hacer cambios en el código]
4. git add .                     ← Preparar
5. git commit -m "Descripción"   ← Guardar
6. git push origin mi-feature    ← Subir
7. [Abrir Pull Request en GitHub]
8. [Code Review con el equipo]
9. [Merge a main] ✅
\`\`\`

**Reglas de oro:**
🚫 NUNCA hagas push directo a main
✅ Siempre trabaja en una branch propia
✅ Un PR = una sola funcionalidad
✅ Revisa el código de tus compañeros

💬 "Workflow" = Flujo de trabajo = Los pasos que sigues`,
  },
  'clonar': {
    answer: `🔄 **Clonar un repositorio** (git clone)

Clonar = descargar una copia completa de un proyecto de GitHub a tu PC.

**El flujo completo:**
\`\`\`
# 1. Copia la URL del botón verde "< > Code" en GitHub
git clone https://github.com/usuario/repo.git

# 2. Entrar a la carpeta
cd nombre-del-repo

# 3. Instalar dependencias
npm install

# 4. Ejecutar el proyecto
npm run dev
\`\`\`

**Clone vs Fork:**
• **Clone** → Copias a tu PC local (para repos donde tienes permisos)
• **Fork** → Copias a tu cuenta de GitHub (para contribuir a proyectos ajenos)

🌍 GitHub tiene 420 millones de repositorios para explorar. ¡Clona cualquiera!`,
  },
  'fork': {
    answer: `🍴 **Fork** (Bifurcar / Tu copia en GitHub)

Fork = Hacer tu propia copia de un repo en TU cuenta de GitHub.

**¿Para qué?**
Para contribuir a proyectos de otras personas que no puedes modificar directamente.

**El flujo open source:**
\`\`\`
1. Click "Fork" en el repo original (botón arriba a la derecha)
2. git clone https://github.com/TU-USUARIO/repo.git
3. [Haz tus cambios]
4. git add . && git commit -m "Mi mejora"
5. git push origin mi-branch
6. Abrir Pull Request al repo original
\`\`\`

Así es como se construye todo el software open source del mundo: React, Linux, VS Code, etc. ¡Tú puedes contribuir también!`,
  },
  'npm install': {
    answer: `📦 **npm install** (Instalar dependencias)

Antes de ejecutar cualquier proyecto JavaScript/Node, debes instalar sus dependencias.

\`\`\`
npm install        # Instala todo lo que está en package.json
npm install react  # Instala un paquete específico
npm install -D eslint  # Instala solo para desarrollo ("devDependency")
\`\`\`

**¿Qué es package.json?**
Es el "recetario" del proyecto. Lista todas las librerías que necesita.

**¿Qué es node_modules/?**
La carpeta donde se guardan las librerías instaladas. ¡Nunca la subas a GitHub! (añade al .gitignore)

💡 Si ves el error "module not found", la solución casi siempre es: **npm install**`,
  },
  'ejecutar': {
    answer: `▶️ **Ejecutar una aplicación**

**Para proyectos JavaScript/React:**
\`\`\`
npm install      # Primero instala dependencias
npm run dev      # Inicia en modo desarrollo
\`\`\`
Luego abre: **http://localhost:5173** en el navegador

**Para ver en tu iPhone (mismo WiFi):**
\`\`\`
npm run dev -- --host
\`\`\`
La terminal mostrará: Network: http://192.168.X.X:5173
Abre ESA URL en Safari de tu iPhone. ¡Ambos deben estar en el mismo WiFi!

**Para publicar en internet (gratis):**
\`\`\`
npm run build    # Crea carpeta dist/ optimizada
\`\`\`
Luego sube a **Vercel** (vercel.com) conectando tu repo de GitHub.`,
  },
  'iphone': {
    answer: `📱 **Ver tu app en iPhone**

¡Sin cables ni App Store! Solo necesitas el mismo WiFi.

**Paso 1:** En la terminal ejecuta:
\`npm run dev -- --host\`

**Paso 2:** La terminal te muestra algo así:
\`\`\`
Local:   http://localhost:5173
Network: http://192.168.1.15:5173  ← ¡Esta!
\`\`\`

**Paso 3:** En tu iPhone:
1. Conecta al **mismo WiFi** que tu computadora
2. Abre **Safari**
3. Escribe la URL de **Network** (la 192.168.X.X)
4. ¡Tu app aparece en el iPhone! 🎉

**¿No ves la URL de Network?**
- En Mac: \`ifconfig | grep "inet "\`
- En Windows: \`ipconfig\`
Busca un número como 192.168.X.X

💡 Tip: Guarda esa URL como favorito en Safari para abrirla rápido`,
  },
  'deploy': {
    answer: `🚀 **Deploy** (Publicar en internet)

**Opción más fácil: Vercel** (gratis para proyectos personales)

**Método 1 - Conectar GitHub (recomendado):**
1. Sube tu código a GitHub: \`git push origin main\`
2. Ve a **vercel.com** e inicia sesión con GitHub
3. "New Project" → selecciona tu repositorio
4. Click "Deploy" → ¡listo en 30 segundos!
5. Tu app queda en: \`tu-app.vercel.app\`

**Bonus:** Cada vez que hagas \`git push\`, Vercel actualiza tu app automáticamente.

**Método 2 - Netlify** (también gratis):
\`\`\`
npm run build
\`\`\`
Luego arrastra la carpeta \`dist/\` a **netlify.com**

**Otras opciones:**
• **GitHub Pages** → Solo para sitios estáticos (HTML/CSS/JS)
• **Railway** → Para apps con backend/base de datos`,
  },
  'vercel': {
    answer: `☁️ **Vercel** - Deploy gratuito en segundos

Vercel es la plataforma preferida para publicar apps React, Next.js, Vue, etc.

**Por qué Vercel:**
✅ 100% gratis para proyectos personales
✅ HTTPS automático
✅ Deploy automático en cada git push
✅ URLs personalizadas
✅ Edge network global (rápido en todo el mundo)

**Cómo empezar:**
1. Crea cuenta en **vercel.com** (usa tu cuenta de GitHub)
2. "New Project" → "Import Git Repository"
3. Selecciona tu repo → "Deploy"
4. En ~30 segundos tienes tu app en internet

**URL que te da:**
\`https://mi-proyecto.vercel.app\`

Y cada vez que hagas \`git push origin main\`, la app se actualiza sola. ¡Magia! ✨`,
  },
}


function generateAIResponse(userMessage) {
  const msg = userMessage.toLowerCase()

  // Check knowledge base
  for (const [keyword, data] of Object.entries(AI_KNOWLEDGE)) {
    if (msg.includes(keyword)) {
      return data.answer
    }
  }

  // Check glossary
  const glossaryMatch = GLOSSARY.find(w =>
    msg.includes(w.en.toLowerCase()) || msg.includes(w.es.toLowerCase())
  )
  if (glossaryMatch) {
    return `📚 **${glossaryMatch.en}** = ${glossaryMatch.es}

${glossaryMatch.def}

${glossaryMatch.emoji} ¿Quieres que te explique más sobre este concepto?`
  }

  // Default responses
  const defaults = [
    `🐙 Buena pregunta! Para entender mejor "${userMessage}", te recomiendo empezar con las lecciones de Git Básico. ¡Están diseñadas para aprender paso a paso!

**Mientras tanto, tip rápido:**
La clave del éxito en programación es la consistencia. Un poco cada día es mejor que muchas horas de vez en cuando.

¿Quieres que te explique algún concepto específico de Git o GitHub?`,
    `💡 Sobre "${userMessage}"...

Lo más importante que debes saber es que **todo programador empezó desde cero**. Git puede parecer complicado al principio, pero con práctica se vuelve natural.

Te recomiendo:
1. Completar las lecciones en orden
2. Practicar en el Simulador de GitHub
3. Usar el Pomodoro para sesiones enfocadas

¿Tienes alguna pregunta específica sobre Git, GitHub o VS Code?`,
  ]

  return defaults[Math.floor(Math.random() * defaults.length)]
}

export default function AIGuide() {
  const { aiMessages, addAiMessage, addUserMessage, user, lessons, pomodoro } = useStore()
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [aiMessages, isTyping])

  const sendMessage = async (text) => {
    const messageText = text || input.trim()
    if (!messageText) return

    addUserMessage(messageText)
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking
    await new Promise(r => setTimeout(r, 800 + Math.random() * 600))

    const response = generateAIResponse(messageText)
    addAiMessage(response)
    setIsTyping(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage()
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 130px)', paddingBottom: '0' }}>
      {/* Header */}
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', gap: '12px', background: '#161b22' }}>
        <div style={{
          width: '42px', height: '42px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #1CB0F6, #0078d4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', flexShrink: 0,
          boxShadow: '0 0 12px rgba(28,176,246,0.4)',
        }}>
          🐙
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>Octo, tu Guía IA</div>
          <div style={{ fontSize: '0.72rem', color: '#58CC02', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#58CC02', display: 'inline-block' }} />
            Online · En línea
          </div>
        </div>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <div style={{ fontSize: '0.7rem', color: '#8b949e' }}>{user.name}</div>
          <div style={{ fontSize: '0.7rem', color: '#FF9600' }}>Nivel {user.level} · {user.totalXp} XP</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflow: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }} className="scroll-hide">
        {aiMessages.map(msg => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
              gap: '8px',
              alignItems: 'flex-end',
            }}
          >
            {msg.from === 'ai' && (
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #1CB0F6, #0078d4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.9rem', flexShrink: 0,
              }}>🐙</div>
            )}
            <div style={{
              maxWidth: '85%',
              background: msg.from === 'user' ? '#1CB0F6' : '#161b22',
              border: msg.from === 'ai' ? '1px solid #30363d' : 'none',
              borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              padding: '10px 14px',
              fontSize: '0.85rem',
              lineHeight: '1.6',
              color: msg.from === 'user' ? 'white' : '#c9d1d9',
            }}>
              {msg.from === 'ai' ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: msg.text
                      .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#e6edf3">$1</strong>')
                      .replace(/`([^`]+)`/g, '<code style="background:#21262d;padding:1px 5px;border-radius:4px;font-family:monospace;font-size:0.8rem;color:#79c0ff">$1</code>')
                      .replace(/```\n?([\s\S]*?)```/g, '<pre style="background:#0d1117;padding:10px;border-radius:6px;margin:8px 0;overflow-x:auto;font-family:monospace;font-size:0.78rem;color:#79c0ff;border:1px solid #30363d">$1</pre>')
                      .replace(/\n/g, '<br/>')
                  }}
                />
              ) : msg.text}
            </div>
            {msg.from === 'user' && (
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #58CC02, #3d8f00)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.9rem', flexShrink: 0,
              }}>{user.avatar}</div>
            )}
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #1CB0F6, #0078d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.9rem',
            }}>🐙</div>
            <div style={{
              background: '#161b22', border: '1px solid #30363d',
              borderRadius: '16px 16px 16px 4px', padding: '12px 16px',
              display: 'flex', gap: '4px', alignItems: 'center',
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#1CB0F6', opacity: 0.7,
                  animation: `typing-dot 1.2s ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick questions */}
      <div style={{ padding: '8px 16px', borderTop: '1px solid #21262d' }}>
        <div style={{ overflowX: 'auto', display: 'flex', gap: '8px', paddingBottom: '6px' }} className="scroll-hide">
          {QUICK_QUESTIONS.slice(0, 6).map(q => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              style={{
                background: '#21262d',
                border: '1px solid #30363d',
                borderRadius: '999px',
                padding: '6px 14px',
                fontSize: '0.72rem',
                color: '#c9d1d9',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div style={{ padding: '10px 16px 70px', background: '#0d1117', borderTop: '1px solid #30363d' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Pregúntame sobre Git, GitHub, VS Code...'
            style={{
              flex: 1,
              background: '#161b22',
              border: '2px solid #30363d',
              borderRadius: '24px',
              padding: '10px 16px',
              color: '#e6edf3',
              fontSize: '0.88rem',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            style={{
              background: input.trim() && !isTyping ? '#1CB0F6' : '#30363d',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              cursor: input.trim() && !isTyping ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
          >
            ↑
          </button>
        </form>
      </div>

      <style>{`
        @keyframes typing-dot {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
