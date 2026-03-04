// ================================================================
// LECCIONES - Duolingo-style GitHub & VS Code learning content
// ================================================================

export const GLOSSARY = [
  { en: 'Repository', es: 'Repositorio', def: 'Carpeta que guarda todo tu proyecto y su historial de cambios', emoji: '📁' },
  { en: 'Commit', es: 'Confirmar/Guardar', def: 'Guardar una instantánea de tus cambios con un mensaje descriptivo', emoji: '💾' },
  { en: 'Branch', es: 'Rama', def: 'Una versión paralela de tu código para experimentar sin afectar el principal', emoji: '🌿' },
  { en: 'Merge', es: 'Fusionar', def: 'Combinar los cambios de una rama con otra', emoji: '🔀' },
  { en: 'Pull Request', es: 'Solicitud de cambios', def: 'Pedir que tus cambios se integren al proyecto principal', emoji: '📬' },
  { en: 'Clone', es: 'Clonar', def: 'Descargar una copia completa de un repositorio', emoji: '🔄' },
  { en: 'Fork', es: 'Bifurcar', def: 'Copiar el repositorio de alguien para modificarlo libremente', emoji: '🍴' },
  { en: 'Push', es: 'Empujar/Subir', def: 'Enviar tus commits locales al servidor remoto (GitHub)', emoji: '⬆️' },
  { en: 'Pull', es: 'Jalar/Descargar', def: 'Traer los cambios más recientes del servidor a tu computadora', emoji: '⬇️' },
  { en: 'Staging Area', es: 'Área de preparación', def: 'Zona donde preparas los archivos antes de hacer commit', emoji: '🎭' },
  { en: 'Remote', es: 'Remoto', def: 'El repositorio que está en internet (en GitHub)', emoji: '🌐' },
  { en: 'Local', es: 'Local', def: 'El repositorio en tu propia computadora', emoji: '💻' },
  { en: 'Issue', es: 'Problema/Tarea', def: 'Registro de un bug, feature o tarea en un proyecto', emoji: '🐛' },
  { en: 'README', es: 'Léeme', def: 'Archivo principal de documentación de un proyecto', emoji: '📝' },
  { en: 'Workflow', es: 'Flujo de trabajo', def: 'Pasos organizados para desarrollar software', emoji: '⚡' },
  { en: 'Terminal', es: 'Terminal', def: 'Interfaz de texto para dar comandos a tu computadora', emoji: '🖥️' },
  { en: 'Debug', es: 'Depurar', def: 'Encontrar y corregir errores en el código', emoji: '🔍' },
  { en: 'Deploy', es: 'Desplegar', def: 'Publicar tu aplicación para que otros la usen', emoji: '🚀' },
  { en: 'Extension', es: 'Extensión', def: 'Plugin que agrega funcionalidades a VS Code', emoji: '🧩' },
  { en: 'Snippet', es: 'Fragmento de código', def: 'Código reutilizable que puedes insertar rápidamente', emoji: '✂️' },
  { en: 'Shortcut', es: 'Atajo de teclado', def: 'Combinación de teclas para hacer acciones rápido', emoji: '⌨️' },
  { en: 'Refactor', es: 'Refactorizar', def: 'Mejorar el código sin cambiar su funcionalidad', emoji: '🔧' },
  { en: 'Variable', es: 'Variable', def: 'Contenedor que guarda un valor que puede cambiar', emoji: '📦' },
  { en: 'Function', es: 'Función', def: 'Bloque de código reutilizable que hace una tarea específica', emoji: '⚙️' },
  { en: 'Array', es: 'Arreglo/Lista', def: 'Colección ordenada de elementos', emoji: '📋' },
  { en: 'Object', es: 'Objeto', def: 'Colección de propiedades y valores relacionados', emoji: '🗂️' },
  { en: 'String', es: 'Cadena de texto', def: 'Secuencia de caracteres de texto', emoji: '💬' },
  { en: 'Boolean', es: 'Booleano', def: 'Valor que es verdadero (true) o falso (false)', emoji: '✅' },
  { en: 'Loop', es: 'Bucle', def: 'Repetir una acción múltiples veces', emoji: '🔁' },
  { en: 'API', es: 'Interfaz de Programación', def: 'Forma de que dos programas se comuniquen entre sí', emoji: '🔌' },
]

export const LESSON_PATHS = [
  {
    id: 'git-basics',
    name: 'Git Básico',
    nameEn: 'Git Basics',
    description: 'Aprende los fundamentos de Git para controlar tu código',
    icon: '🌱',
    color: '#58CC02',
    requiresPath: null,
    lessons: [
      {
        id: 'git-01',
        title: '¿Qué es Git?',
        titleEn: 'What is Git?',
        description: 'Conoce la herramienta más importante de un programador',
        icon: '🐙',
        xpReward: 30,
        type: 'multiple-choice',
        theory: {
          title: '¿Qué es Git?',
          content: `**Git** es un sistema de control de versiones.

Imagínalo como el historial de cambios de un documento de Word... pero para tu código.

Con Git puedes:
• Guardar "fotos" de tu código (**commits** = confirmaciones)
• Regresar a versiones anteriores
• Trabajar en equipo sin conflictos
• Experimentar sin miedo en **branches** (ramas)

Git fue creado por **Linus Torvalds** (el mismo creador de Linux) en 2005.`,
          glossaryWords: ['Commit', 'Branch'],
        },
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Para qué sirve Git?',
            questionNote: '"Version control" = Control de versiones',
            options: [
              { text: 'Para guardar el historial de cambios del código', correct: true },
              { text: 'Para diseñar páginas web', correct: false },
              { text: 'Para enviar emails', correct: false },
              { text: 'Para crear bases de datos', correct: false },
            ],
            explanation: '¡Exacto! Git es un sistema de **control de versiones** que guarda el historial completo de tu proyecto.',
            xp: 10,
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'Un "commit" en Git significa:',
            questionNote: '"Commit" = Confirmar / Guardar un punto en el historial',
            options: [
              { text: 'Guardar una fotografía del estado actual del código', correct: true },
              { text: 'Borrar archivos permanentemente', correct: false },
              { text: 'Compartir código en redes sociales', correct: false },
              { text: 'Instalar un programa nuevo', correct: false },
            ],
            explanation: 'Un **commit** es como tomar una foto de tu código. Puedes volver a ese punto en cualquier momento.',
            xp: 10,
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'Para inicializar un repositorio Git en tu carpeta, usas el comando:',
            questionNote: '"Initialize" = Inicializar | "repository" = repositorio',
            answer: 'git init',
            hint: 'git ____',
            explanation: '**git init** crea un repositorio Git nuevo en tu carpeta actual. ¡Es el primer paso siempre!',
            xp: 10,
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: '¿Quién creó Git?',
            options: [
              { text: 'Linus Torvalds', correct: true },
              { text: 'Bill Gates', correct: false },
              { text: 'Mark Zuckerberg', correct: false },
              { text: 'Elon Musk', correct: false },
            ],
            explanation: '**Linus Torvalds** creó Git en 2005, ¡el mismo que creó el sistema operativo Linux!',
            xp: 10,
          },
        ],
      },
      {
        id: 'git-02',
        title: 'Tu primer Commit',
        titleEn: 'Your First Commit',
        description: 'Aprende a guardar cambios con commits',
        icon: '💾',
        xpReward: 40,
        type: 'multiple-choice',
        theory: {
          title: 'El flujo básico de Git',
          content: `Para guardar cambios en Git, hay **3 pasos**:

**1. git add** - Preparar archivos (staging)
Seleccionas qué archivos quieres guardar
\`git add archivo.txt\` ← un archivo
\`git add .\` ← todos los archivos

**2. git commit** - Confirmar los cambios
Creas un punto en la historia con un mensaje
\`git commit -m "Mi primer commit"\`

**3. git status** - Ver el estado actual
Te muestra qué archivos están modificados
\`git status\`

Recuerda: **Staging Area** = Área de preparación`,
          glossaryWords: ['Staging Area', 'Commit'],
        },
        questions: [
          {
            id: 'q1',
            type: 'order',
            question: 'Pon en orden los pasos para hacer un commit:',
            questionNote: '"Add" = Agregar | "Commit" = Confirmar | "Status" = Estado',
            items: ['git add .', 'git commit -m "mensaje"', 'git status'],
            correctOrder: [2, 0, 1],
            explanation: 'El orden correcto es: **git status** (ver cambios) → **git add** (preparar) → **git commit** (guardar)',
            xp: 15,
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '¿Qué hace "git add ." ?',
            questionNote: 'El punto "." significa "todo aquí"',
            options: [
              { text: 'Prepara TODOS los archivos modificados para el commit', correct: true },
              { text: 'Agrega un nuevo colaborador al proyecto', correct: false },
              { text: 'Descarga el proyecto de internet', correct: false },
              { text: 'Crea una nueva rama', correct: false },
            ],
            explanation: '**git add .** agrega TODOS los archivos modificados al área de preparación (staging area).',
            xp: 10,
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'Completa el comando para ver el estado de tu repositorio:',
            answer: 'git status',
            hint: 'git ______',
            explanation: '**git status** es tu comando favorito - te dice exactamente qué está pasando en tu repositorio.',
            xp: 10,
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'Un buen mensaje de commit debe ser:',
            questionNote: '"Descriptive" = Descriptivo | "Clear" = Claro',
            options: [
              { text: 'Descriptivo y claro: qué cambió y por qué', correct: true },
              { text: 'Solo un número: "commit 1", "commit 2"', correct: false },
              { text: 'Lo más largo posible con todos los detalles', correct: false },
              { text: 'En mayúsculas siempre', correct: false },
            ],
            explanation: 'Un buen commit message describe QUÉ cambió. Ejemplo: "Agrega botón de login" o "Fix: corrige error en formulario"',
            xp: 10,
          },
        ],
      },
      {
        id: 'git-03',
        title: 'Ramas (Branches)',
        titleEn: 'Branches',
        description: 'Trabaja en paralelo sin romper nada',
        icon: '🌿',
        xpReward: 50,
        type: 'multiple-choice',
        theory: {
          title: 'El poder de las Ramas',
          content: `Las **branches** (ramas) son como universos paralelos de tu código.

**¿Para qué sirven?**
• Desarrollar una nueva función sin afectar el código principal
• Experimentar libremente
• Trabajar en equipo sin conflictos

**Comandos básicos:**
\`git branch\` - Ver todas las ramas
\`git branch nueva-feature\` - Crear una rama
\`git checkout nueva-feature\` - Cambiar a esa rama
\`git merge nueva-feature\` - Fusionar cambios

La rama principal siempre se llama **main** (antes se llamaba master).

💡 **Pro tip**: Crea una rama para CADA nueva característica.`,
          glossaryWords: ['Branch', 'Merge'],
        },
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Para qué se usan las "branches" (ramas)?',
            options: [
              { text: 'Para desarrollar features sin afectar el código principal', correct: true },
              { text: 'Para hacer el código más lento', correct: false },
              { text: 'Para borrar archivos viejos', correct: false },
              { text: 'Para cambiar el lenguaje de programación', correct: false },
            ],
            explanation: 'Las **branches** te permiten trabajar en paralelo. La rama **main** siempre tiene el código que funciona.',
            xp: 10,
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Para crear una nueva rama llamada "mi-feature":',
            answer: 'git branch mi-feature',
            hint: 'git ______ mi-feature',
            explanation: '**git branch nombre** crea una nueva rama. Luego usa **git checkout nombre** para moverte a ella.',
            xp: 15,
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '"git merge" sirve para:',
            questionNote: '"Merge" = Fusionar / Combinar',
            options: [
              { text: 'Combinar los cambios de una rama con otra', correct: true },
              { text: 'Borrar una rama', correct: false },
              { text: 'Ver el historial de commits', correct: false },
              { text: 'Sincronizar con GitHub', correct: false },
            ],
            explanation: '**git merge** fusiona los cambios. Después de terminar tu feature, haces merge a main.',
            xp: 10,
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: '¿Cómo se llama la rama principal en un proyecto moderno?',
            options: [
              { text: 'main', correct: true },
              { text: 'master', correct: false },
              { text: 'primary', correct: false },
              { text: 'root', correct: false },
            ],
            explanation: 'Hoy en día la rama principal se llama **main**. Antes se llamaba "master" pero se cambió en 2020.',
            xp: 10,
          },
        ],
      },
    ],
  },
  {
    id: 'github-workflow',
    name: 'GitHub',
    nameEn: 'GitHub Workflow',
    description: 'Domina la plataforma social de código',
    icon: '🐙',
    color: '#1CB0F6',
    requiresPath: 'git-basics',
    lessons: [
      {
        id: 'gh-01',
        title: '¿Qué es GitHub?',
        titleEn: 'What is GitHub?',
        description: 'La red social de los programadores',
        icon: '🌐',
        xpReward: 35,
        type: 'multiple-choice',
        theory: {
          title: 'GitHub = Git + Nube + Colaboración',
          content: `**GitHub** es una plataforma web para guardar y compartir código.

**Git vs GitHub:**
• **Git** = Herramienta local en tu computadora
• **GitHub** = Servidor en internet para guardar tu Git

**Lo que puedes hacer en GitHub:**
• Guardar tu código en la **nube** ("cloud")
• Colaborar con otros programadores
• Mostrar tu portafolio de proyectos
• Contribuir a proyectos de código abierto (**open source**)
• Usar herramientas de CI/CD (**Continuous Integration**)

**Comandos para conectar con GitHub:**
\`git remote add origin URL\` - Conectar con GitHub
\`git push origin main\` - Subir código a GitHub
\`git pull origin main\` - Descargar cambios de GitHub`,
          glossaryWords: ['Remote', 'Push', 'Pull', 'Fork'],
        },
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Cuál es la diferencia entre Git y GitHub?',
            options: [
              { text: 'Git es la herramienta local, GitHub es el servidor en internet', correct: true },
              { text: 'Son exactamente lo mismo', correct: false },
              { text: 'GitHub es más nuevo que Git', correct: false },
              { text: 'Git es de Microsoft y GitHub es de Google', correct: false },
            ],
            explanation: '**Git** = herramienta en tu PC. **GitHub** = plataforma web. Microsoft compró GitHub en 2018.',
            xp: 10,
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '"git push" significa:',
            questionNote: '"Push" = Empujar/Subir',
            options: [
              { text: 'Subir tus commits locales a GitHub', correct: true },
              { text: 'Descargar el código de GitHub', correct: false },
              { text: 'Crear un nuevo repositorio', correct: false },
              { text: 'Borrar el repositorio remoto', correct: false },
            ],
            explanation: '**git push** envía tus cambios guardados (commits) al repositorio remoto en GitHub.',
            xp: 10,
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Para descargar un repositorio de GitHub a tu PC, usas:',
            questionNote: '"Clone" = Clonar/Copiar',
            options: [
              { text: 'git clone URL-del-repositorio', correct: true },
              { text: 'git download URL', correct: false },
              { text: 'git fetch --all', correct: false },
              { text: 'git copy URL', correct: false },
            ],
            explanation: '**git clone** descarga una copia completa del repositorio incluyendo todo el historial.',
            xp: 10,
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'Un "fork" de un repositorio significa:',
            questionNote: '"Fork" = Tenedor / Bifurcación',
            options: [
              { text: 'Copiar el repositorio de alguien para modificarlo libremente', correct: true },
              { text: 'Eliminar el repositorio original', correct: false },
              { text: 'Unir dos repositorios en uno', correct: false },
              { text: 'Cambiar el nombre del repositorio', correct: false },
            ],
            explanation: 'Un **fork** es tu propia copia de un proyecto. Puedes modificarla y luego proponer cambios al original con un **Pull Request**.',
            xp: 10,
          },
        ],
      },
      {
        id: 'gh-02',
        title: 'Pull Requests',
        titleEn: 'Pull Requests',
        description: 'Propón cambios y colabora en equipo',
        icon: '📬',
        xpReward: 45,
        type: 'multiple-choice',
        theory: {
          title: 'Pull Requests: La magia de colaborar',
          content: `Un **Pull Request** (PR) es la forma de proponer cambios a un proyecto.

**Flujo de trabajo con PR:**
1. Creas una **branch** nueva
2. Haces tus cambios y **commits**
3. Haces **push** a GitHub
4. Abres un **Pull Request**
5. Tu equipo revisa (**code review**)
6. Se hace **merge** al código principal

**Partes de un Pull Request:**
• **Title**: Nombre descriptivo del cambio
• **Description**: Qué cambió y por qué
• **Reviewers**: Quién lo va a revisar
• **Labels**: Etiquetas (bug, feature, docs...)
• **Comments**: Discusión sobre el código

Un buen PR es pequeño y enfocado en UNA sola cosa.`,
          glossaryWords: ['Pull Request', 'Merge', 'Branch'],
        },
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Qué es un Pull Request?',
            options: [
              { text: 'Una propuesta para integrar cambios al proyecto principal', correct: true },
              { text: 'Un comando para descargar código', correct: false },
              { text: 'Un error grave en el código', correct: false },
              { text: 'Una extensión de VS Code', correct: false },
            ],
            explanation: 'Un **Pull Request** es como decir "Oye equipo, hice estos cambios, ¿los revisamos y los agregamos?"',
            xp: 10,
          },
          {
            id: 'q2',
            type: 'order',
            question: 'Ordena el flujo correcto de un Pull Request:',
            items: ['Merge a main', 'Crear branch', 'Abrir Pull Request', 'Code Review', 'Hacer commits'],
            correctOrder: [1, 4, 2, 3, 0],
            explanation: 'El flujo es: Crear branch → Commits → Abrir PR → Code Review → Merge',
            xp: 15,
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '"Code Review" significa:',
            questionNote: '"Review" = Revisión | "Code" = Código',
            options: [
              { text: 'Que el equipo revisa y comenta el código antes de integrarlo', correct: true },
              { text: 'Escribir código más rápido', correct: false },
              { text: 'Borrar código antiguo', correct: false },
              { text: 'Compilar el código para producción', correct: false },
            ],
            explanation: 'El **Code Review** mejora la calidad. Otro programador revisa tu código antes de integrarlo. ¡Aprendes mucho de este proceso!',
            xp: 10,
          },
        ],
      },
    ],
  },
  {
    id: 'vscode-mastery',
    name: 'VS Code',
    nameEn: 'VS Code Mastery',
    description: 'Domina el editor favorito de los programadores',
    icon: '💻',
    color: '#FF9600',
    requiresPath: 'git-basics',
    lessons: [
      {
        id: 'vsc-01',
        title: 'VS Code Esencial',
        titleEn: 'VS Code Essentials',
        description: 'Aprende los atajos que te hacen 10x más rápido',
        icon: '⌨️',
        xpReward: 40,
        type: 'multiple-choice',
        theory: {
          title: 'VS Code: Tu mejor amigo como programador',
          content: `**VS Code** (Visual Studio Code) es el editor de código más popular del mundo.

**Atajos esenciales:**
• \`Ctrl+S\` - **Save** (Guardar archivo)
• \`Ctrl+Z\` - **Undo** (Deshacer)
• \`Ctrl+/\` - **Comment** (Comentar línea)
• \`Ctrl+P\` - **Quick Open** (Abrir archivo rápido)
• \`Ctrl+Shift+P\` - **Command Palette** (Todos los comandos)
• \`Ctrl+\`\` - **Terminal** (Abrir terminal integrada)
• \`Alt+↑/↓\` - **Move line** (Mover línea arriba/abajo)
• \`Ctrl+D\` - **Select next** (Seleccionar siguiente igual)

**Panel izquierdo (sidebar):**
• 📁 Explorer - Tus archivos
• 🔍 Search - Buscar en código
• 🌿 Source Control - Git integrado
• 🧩 Extensions - Plugins

La **Command Palette** (Ctrl+Shift+P) es tu super poder.`,
          glossaryWords: ['Extension', 'Snippet', 'Shortcut'],
        },
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Qué hace Ctrl+S en VS Code?',
            questionNote: '"Save" = Guardar',
            options: [
              { text: 'Guarda el archivo actual', correct: true },
              { text: 'Busca texto en el archivo', correct: false },
              { text: 'Abre la terminal', correct: false },
              { text: 'Cierra VS Code', correct: false },
            ],
            explanation: '**Ctrl+S** = Save (Guardar). ¡Úsalo constantemente mientras programas!',
            xp: 8,
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'La "Command Palette" (Ctrl+Shift+P) te permite:',
            questionNote: '"Palette" = Paleta | "Command" = Comando',
            options: [
              { text: 'Acceder a TODOS los comandos de VS Code', correct: true },
              { text: 'Cambiar los colores del editor', correct: false },
              { text: 'Solo ver el historial de Git', correct: false },
              { text: 'Instalar VS Code de nuevo', correct: false },
            ],
            explanation: 'La **Command Palette** es tu super poder. Si no sabes un atajo, búscalo ahí.',
            xp: 10,
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '¿Para qué sirve Ctrl+` (acento invertido)?',
            options: [
              { text: 'Abre la terminal integrada de VS Code', correct: true },
              { text: 'Busca y reemplaza texto', correct: false },
              { text: 'Formatea el código', correct: false },
              { text: 'Guarda todos los archivos', correct: false },
            ],
            explanation: '**Ctrl+`** abre la **Terminal** integrada. Desde ahí puedes ejecutar git y tus programas sin salir de VS Code.',
            xp: 10,
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'Las "Extensions" en VS Code son:',
            questionNote: '"Extensions" = Extensiones / Plugins',
            options: [
              { text: 'Plugins que agregan nuevas funcionalidades al editor', correct: true },
              { text: 'Los archivos de tu proyecto', correct: false },
              { text: 'Los temas de color del editor', correct: false },
              { text: 'Las teclas de acceso rápido', correct: false },
            ],
            explanation: 'Las **Extensions** hacen VS Code más poderoso. Recomendadas: Prettier, ESLint, GitLens, GitHub Copilot.',
            xp: 10,
          },
        ],
      },
    ],
  },
  {
    id: 'branching',
    name: 'Branching Pro',
    nameEn: 'Advanced Branching',
    description: 'Estrategias avanzadas de ramas',
    icon: '🔀',
    color: '#8a2be2',
    requiresPath: 'github-workflow',
    lessons: [],
  },
  {
    id: 'pull-requests',
    name: 'PR Workflow',
    nameEn: 'Pull Request Workflow',
    description: 'Flujos de trabajo profesionales',
    icon: '📬',
    color: '#FF4B4B',
    requiresPath: 'branching',
    lessons: [],
  },
  {
    id: 'ai-coding',
    name: 'AI Coding',
    nameEn: 'AI-Assisted Coding',
    description: 'Programa con inteligencia artificial',
    icon: '🤖',
    color: '#FFD700',
    requiresPath: 'vscode-mastery',
    lessons: [],
  },
]

export const AI_RESPONSES = {
  greet: [
    '¡Hola! Soy Octo 🐙 ¿Listo para aprender a programar hoy?',
    '¡Bienvenido de vuelta! 🎉 Tu racha sigue activa. ¡No la rompas!',
    '¡Woop woop! 🚀 ¿Qué aprenderemos hoy? ¡Tengo muchas lecciones para ti!',
  ],
  commit: [
    '💡 Recuerda: un buen **commit message** describe QUÉ cambió. Ejemplo: "Agrega formulario de login"',
    '🎯 Pro tip: Haz commits pequeños y frecuentes. Es mejor "Corrige error en validación" que "Muchos cambios"',
    '✨ ¡Excelente commit! Cada commit es como un punto de guardado en un videojuego.',
  ],
  branch: [
    '🌿 Una rama nueva para cada feature. La regla de oro del trabajo en equipo.',
    '💡 Nombra tus ramas descriptivamente: "feature/login", "fix/header-bug", "docs/readme"',
    '🔀 Las ramas te permiten experimentar sin miedo. ¡La rama main siempre está a salvo!',
  ],
  lesson: [
    '📚 ¡Muy bien! Cada lección te acerca más a ser un programador profesional.',
    '🏆 ¡Lo estás haciendo increíble! Sigue así.',
    '💪 La consistencia es clave. Un poco cada día es mejor que mucho de vez en cuando.',
  ],
  pomodoro: [
    '🍅 ¡Pomodoro completado! Tu cerebro absorbe mejor la información con descansos.',
    '⏰ La técnica Pomodoro fue inventada por Francesco Cirillo en los 90s. ¡Funciona!',
    '🧠 25 minutos de enfoque + 5 de descanso = máximo aprendizaje. ¡Científicamente comprobado!',
  ],
  help: [
    '🐙 Estoy aquí para ayudarte. Puedo explicarte cualquier concepto de Git, GitHub o VS Code.',
    '❓ ¿Tienes dudas? Pregúntame sobre **commits**, **branches**, **pull requests** o **VS Code**.',
    '💬 No hay preguntas tontas. ¡Todo programador experto fue principiante una vez!',
  ],
}
