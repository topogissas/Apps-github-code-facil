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
  { en: 'npm', es: 'Gestor de paquetes de Node', def: 'Herramienta para instalar y gestionar librerías de JavaScript', emoji: '📦' },
  { en: 'package.json', es: 'Archivo de configuración del proyecto', def: 'Lista todas las dependencias y scripts de tu proyecto Node.js', emoji: '📋' },
  { en: 'localhost', es: 'Servidor local / Tu propia computadora', def: 'Dirección que apunta a tu propio computador cuando corres un servidor', emoji: '🏠' },
  { en: 'Port', es: 'Puerto', def: 'Número que identifica a qué programa llega el tráfico de red (ej: :5173, :3000)', emoji: '🔌' },
  { en: 'Build', es: 'Construir/Compilar', def: 'Convertir tu código fuente en archivos listos para producción', emoji: '🏗️' },
  { en: 'Deploy', es: 'Desplegar/Publicar', def: 'Subir tu app a un servidor para que el mundo la vea', emoji: '🚀' },
  { en: 'Hosting', es: 'Alojamiento web', def: 'Servicio que guarda y sirve tu app en internet 24/7', emoji: '☁️' },
  { en: 'Dependencies', es: 'Dependencias', def: 'Librerías externas que tu proyecto necesita para funcionar', emoji: '🧩' },
  { en: 'Script', es: 'Script/Comando', def: 'Instrucción guardada en package.json para ejecutar con npm run', emoji: '⚡' },
  { en: 'Open Source', es: 'Código abierto', def: 'Código disponible públicamente para que cualquiera lo use o modifique', emoji: '🌍' },
  { en: 'Contributor', es: 'Colaborador', def: 'Persona que aporta código a un proyecto open source', emoji: '🤝' },
  { en: 'Production', es: 'Producción', def: 'El entorno real donde los usuarios finales usan tu app', emoji: '🌐' },
  { en: 'Development', es: 'Desarrollo', def: 'El entorno local donde tú trabajas y pruebas el código', emoji: '🛠️' },
  { en: 'Hot Reload', es: 'Recarga en caliente', def: 'El navegador se actualiza automáticamente cuando cambias el código', emoji: '🔥' },
  { en: 'IP Address', es: 'Dirección IP', def: 'Número único que identifica tu dispositivo en la red (ej: 192.168.1.5)', emoji: '📍' },
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
    id: 'clonar-repos',
    name: 'Clonar Repos',
    nameEn: 'Clone & Fork Repos',
    description: 'Descarga y usa proyectos de otras personas',
    icon: '🔄',
    color: '#00b4d8',
    requiresPath: 'github-workflow',
    lessons: [
      {
        id: 'clone-01',
        title: 'Clonar un repositorio',
        titleEn: 'Clone a Repository',
        description: 'Descarga cualquier proyecto de GitHub a tu PC',
        icon: '📥',
        xpReward: 40,
        type: 'multiple-choice',
        theory: {
          title: 'git clone: Descarga proyectos en segundos',
          content: `**git clone** descarga una copia COMPLETA de un repositorio a tu computadora.

**Sintaxis:**
\`git clone URL-del-repositorio\`

**¿Dónde encuentro la URL?**
En GitHub → botón verde **"< > Code"** → copias la URL HTTPS

**Ejemplo real:**
\`git clone https://github.com/facebook/react.git\`

Esto descarga:
✓ Todo el código fuente
✓ Todo el historial de commits
✓ Todas las branches
✓ El remoto ya configurado (origin)

**Después de clonar:**
\`cd nombre-del-repo\`  ← Entrar a la carpeta
\`ls\`                   ← Ver los archivos ("list" = listar)

💡 **"Clone"** = Clonar = Hacer una copia exacta`,
          glossaryWords: ['Clone', 'Remote', 'Open Source'],
        },
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Cuál es el comando para clonar un repositorio de GitHub?',
            questionNote: '"Clone" = Clonar | La URL la copias de GitHub',
            options: [
              { text: 'git clone https://github.com/usuario/repo.git', correct: true },
              { text: 'git download https://github.com/usuario/repo.git', correct: false },
              { text: 'git get https://github.com/usuario/repo.git', correct: false },
              { text: 'git copy https://github.com/usuario/repo.git', correct: false },
            ],
            explanation: '**git clone URL** es el comando correcto. La URL la encuentras en el botón verde "Code" de cualquier repo en GitHub.',
            xp: 10,
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '¿Qué descarga git clone exactamente?',
            options: [
              { text: 'El código, el historial completo de commits y todas las branches', correct: true },
              { text: 'Solo los archivos más recientes, sin historial', correct: false },
              { text: 'Solo el archivo README.md', correct: false },
              { text: 'Solo el código de la rama main', correct: false },
            ],
            explanation: '**git clone** descarga TODO: código actual, historial completo y todas las ramas. Es una copia perfecta.',
            xp: 10,
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'Después de clonar, para entrar a la carpeta del proyecto usas:',
            questionNote: '"cd" = "change directory" = cambiar directorio',
            answer: 'cd nombre-del-repo',
            hint: '___ nombre-del-repo',
            explanation: '**cd** (change directory) te mueve a una carpeta. Es uno de los comandos más usados en la terminal.',
            xp: 10,
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'En GitHub, ¿dónde encuentras la URL para clonar un repositorio?',
            options: [
              { text: 'En el botón verde "< > Code" del repositorio', correct: true },
              { text: 'En la sección "Issues" del repositorio', correct: false },
              { text: 'En el perfil del autor del repositorio', correct: false },
              { text: 'Solo en el README.md', correct: false },
            ],
            explanation: 'El botón verde **"< > Code"** en cualquier repo de GitHub te muestra la URL para clonar. ¡Es el botón más importante!',
            xp: 10,
          },
        ],
      },
      {
        id: 'clone-02',
        title: 'Fork: Tu copia en la nube',
        titleEn: 'Fork: Your Cloud Copy',
        description: 'Copia proyectos a tu cuenta para modificarlos',
        icon: '🍴',
        xpReward: 45,
        type: 'multiple-choice',
        theory: {
          title: 'Fork vs Clone: ¿cuándo usar cada uno?',
          content: `**Fork** y **Clone** parecen similares pero son muy diferentes:

**Clone** (Clonar):
• Descarga a tu PC local
• Para proyectos donde tienes permisos
• Conexión directa con el repo original

**Fork** (Bifurcar):
• Crea UNA COPIA en TU cuenta de GitHub
• Para proyectos de otras personas donde NO tienes permisos
• Puedes hacer cambios libremente
• Luego propones cambios con un **Pull Request**

**El flujo open source completo:**
1. Encuentras un proyecto en GitHub que quieres mejorar
2. Haces **Fork** → aparece en tu cuenta: \`tuusuario/nombre-repo\`
3. **Clonas TU fork**: \`git clone https://github.com/tuusuario/repo\`
4. Haces cambios, commits y push a tu fork
5. Abres **Pull Request** al repo original
6. El dueño revisa y hace **merge** si le gusta

🌍 Así funciona todo el **open source** del mundo`,
          glossaryWords: ['Fork', 'Clone', 'Pull Request', 'Open Source', 'Contributor'],
        },
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Cuándo debes usar "Fork" en lugar de "Clone"?',
            questionNote: '"Fork" = Bifurcar / Hacer tu propia copia en GitHub',
            options: [
              { text: 'Cuando quieres contribuir a un proyecto de OTRA persona', correct: true },
              { text: 'Cuando quieres borrar el repositorio original', correct: false },
              { text: 'Cuando el repo es privado y no puedes accederlo', correct: false },
              { text: 'Fork y clone son lo mismo, usa cualquiera', correct: false },
            ],
            explanation: 'Usa **Fork** cuando quieres contribuir a un proyecto ajeno. El Fork crea tu propia copia en GitHub para trabajar libremente.',
            xp: 10,
          },
          {
            id: 'q2',
            type: 'order',
            question: 'Ordena el flujo correcto para contribuir a un proyecto open source:',
            questionNote: '"Open source" = Código abierto · "Contribute" = Contribuir',
            items: ['git push a tu fork', 'Fork del repo original', 'Abrir Pull Request', 'git clone tu fork', 'Hacer cambios y commits'],
            correctOrder: [1, 3, 4, 0, 2],
            explanation: 'Fork → Clone tu fork → Cambios+Commits → Push → Pull Request. ¡Así contribuyen millones de devs a proyectos como React, Linux, etc.!',
            xp: 15,
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Después de hacer Fork, ¿dónde aparece la copia?',
            options: [
              { text: 'En TU cuenta de GitHub (tuusuario/nombre-repo)', correct: true },
              { text: 'Solo en tu computadora local', correct: false },
              { text: 'En la cuenta del dueño original', correct: false },
              { text: 'En un servidor temporal de GitHub', correct: false },
            ],
            explanation: 'El Fork crea una copia en **TU cuenta** de GitHub. Queda como: `tu-usuario/nombre-repo`. ¡Es tuya para modificar!',
            xp: 10,
          },
        ],
      },
      {
        id: 'clone-03',
        title: 'Explorar proyectos en GitHub',
        titleEn: 'Explore GitHub Projects',
        description: 'Encuentra y usa los mejores repos del mundo',
        icon: '🔭',
        xpReward: 35,
        type: 'multiple-choice',
        theory: {
          title: 'GitHub: El mayor archivo de código del planeta',
          content: `GitHub tiene más de **420 millones de repositorios**. Aquí te enseño a encontrar oro:

**Cómo buscar proyectos:**
• Barra de búsqueda: escribe el tema (ej: "calculator javascript")
• Filtra por **Language** (lenguaje), **Stars** ⭐, **Updated** (actualizado)
• Usa "Explore" → "Topics" para temas específicos

**Indicadores de un buen proyecto:**
• ⭐ **Stars** = popularidad ("star" = estrella/favorito)
• 🍴 **Forks** = cuántos lo han bifurcado
• 👁️ **Watchers** = quién lo sigue ("watch" = observar)
• 📅 **Last commit** = qué tan activo está ("last" = último)
• 📝 Buen **README.md** con instrucciones claras

**Proyectos imprescindibles para aprender:**
• **freeCodeCamp** - Cursos gratis de programación
• **awesome-lists** - Listas de recursos por tema
• **public-apis** - APIs gratis para tus proyectos
• **roadmap.sh** - Rutas de aprendizaje

💡 Mira el **README.md** primero, ahí están las instrucciones de uso`,
          glossaryWords: ['Open Source', 'Contributor', 'Fork', 'README'],
        },
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Qué indica el número de "Stars" ⭐ en un repositorio?',
            questionNote: '"Stars" = Estrellas / Favoritos · Como los likes de Instagram',
            options: [
              { text: 'La popularidad del proyecto en la comunidad', correct: true },
              { text: 'El número de archivos que tiene el repositorio', correct: false },
              { text: 'Los errores que tiene el código', correct: false },
              { text: 'El precio para usar el proyecto', correct: false },
            ],
            explanation: 'Las **Stars** ⭐ son como "me gusta". Un proyecto con muchas stars es popular y confiable. React tiene más de 220,000 stars.',
            xp: 8,
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'El archivo README.md de un proyecto es importante porque:',
            questionNote: '"README" = "Léeme" · "Instructions" = Instrucciones',
            options: [
              { text: 'Contiene las instrucciones de instalación y uso del proyecto', correct: true },
              { text: 'Es el archivo principal de código del proyecto', correct: false },
              { text: 'Lista todos los errores conocidos del proyecto', correct: false },
              { text: 'Solo contiene el nombre del autor', correct: false },
            ],
            explanation: 'El **README.md** es lo primero que debes leer. Tiene: descripción, cómo instalar, cómo usar y cómo contribuir.',
            xp: 10,
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Para usar un proyecto de GitHub que encontraste, el primer paso es:',
            options: [
              { text: 'Leer el README.md para entender cómo instalarlo', correct: true },
              { text: 'Borrar todos los archivos del proyecto', correct: false },
              { text: 'Cambiar el nombre del repositorio inmediatamente', correct: false },
              { text: 'Enviar un email al autor pidiendo permiso', correct: false },
            ],
            explanation: 'Siempre empieza por el **README.md**. Ahí están todas las instrucciones. Los proyectos open source están pensados para que cualquiera los use.',
            xp: 10,
          },
        ],
      },
    ],
  },
  {
    id: 'ejecutar-apps',
    name: 'Ejecutar Apps',
    nameEn: 'Run & Deploy Apps',
    description: 'Corre tu app en celular, PC y en internet',
    icon: '🚀',
    color: '#FF9600',
    requiresPath: 'vscode-mastery',
    lessons: [
      {
        id: 'run-01',
        title: 'Ejecutar apps en tu PC',
        titleEn: 'Run Apps on Your PC',
        description: 'Levanta cualquier proyecto con npm',
        icon: '▶️',
        xpReward: 45,
        type: 'multiple-choice',
        theory: {
          title: 'npm run dev: Tu app viva en segundos',
          content: `Cuando clonas un proyecto, hay que **instalar dependencias** antes de ejecutarlo.

**El flujo siempre es el mismo:**

**Paso 1 - Instalar dependencias ("dependencies"):**
\`npm install\`
Descarga todas las librerías que necesita el proyecto.
El resultado es la carpeta \`node_modules/\`

**Paso 2 - Ejecutar en modo desarrollo:**
\`npm run dev\`       ← Para proyectos React/Vite
\`npm start\`         ← Alternativa común
\`python app.py\`     ← Para proyectos Python

**Paso 3 - Abrir en el navegador:**
La terminal te dirá la dirección, normalmente:
\`http://localhost:5173\`  ← Vite
\`http://localhost:3000\`  ← React Create App
\`http://localhost:8000\`  ← Python/Django

**"localhost"** = Tu propia computadora
**":5173"** = El puerto ("port") donde está escuchando

⚠️ Si hay error: revisa que Node.js esté instalado con \`node -v\``,
          glossaryWords: ['Dependencies', 'localhost', 'Port', 'Development', 'Script'],
        },
        questions: [
          {
            id: 'q1',
            type: 'order',
            question: 'Ordena los pasos para ejecutar un proyecto clonado de GitHub:',
            questionNote: '"Install" = Instalar | "Run" = Ejecutar | "Open" = Abrir',
            items: ['npm run dev', 'git clone URL', 'Abrir localhost:5173 en el navegador', 'npm install', 'cd nombre-del-proyecto'],
            correctOrder: [1, 4, 3, 0, 2],
            explanation: 'Siempre: clone → cd (entrar) → npm install → npm run dev → abrir en el navegador.',
            xp: 15,
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '¿Para qué sirve "npm install"?',
            questionNote: '"Install" = Instalar · "Dependencies" = Dependencias/Librerías',
            options: [
              { text: 'Descarga todas las librerías que el proyecto necesita', correct: true },
              { text: 'Instala Node.js en tu computadora', correct: false },
              { text: 'Sube el proyecto a internet', correct: false },
              { text: 'Borra todos los archivos del proyecto', correct: false },
            ],
            explanation: '**npm install** lee el archivo `package.json` y descarga todas las dependencias a la carpeta `node_modules/`. ¡Sin esto el proyecto no funciona!',
            xp: 10,
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '"localhost:3000" significa:',
            questionNote: '"localhost" = Tu computadora · ":3000" = El puerto (port)',
            options: [
              { text: 'Tu app corriendo en tu propia computadora, puerto 3000', correct: true },
              { text: 'Una dirección de un servidor en internet', correct: false },
              { text: 'El número de archivos del proyecto', correct: false },
              { text: 'La versión de Node.js instalada', correct: false },
            ],
            explanation: '**localhost** = tu computadora. **:3000** = el puerto. Cuando ves esto en la terminal, ¡tu app está viva y funcionando!',
            xp: 10,
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'Para ver qué versión de Node.js tienes instalada, usas:',
            questionNote: '"-v" significa "version" = versión',
            answer: 'node -v',
            hint: '_____ -v',
            explanation: '**node -v** muestra la versión de Node instalada. Si no tienes Node, descárgalo de nodejs.org. ¡Es obligatorio para proyectos JavaScript!',
            xp: 10,
          },
        ],
      },
      {
        id: 'run-02',
        title: 'Ver tu app en el iPhone',
        titleEn: 'Open Your App on iPhone',
        description: 'Abre localhost desde tu celular en la misma WiFi',
        icon: '📱',
        xpReward: 50,
        type: 'multiple-choice',
        theory: {
          title: 'Tu app en el celular (mismo WiFi)',
          content: `Con un truco simple puedes ver tu app en cualquier celular de tu red WiFi.

**Paso 1 - Ejecuta con --host:**
En lugar de \`npm run dev\`, usa:
\`npm run dev -- --host\`

Esto expone tu servidor a toda la red local.

**Paso 2 - La terminal te muestra dos URLs:**
\`Local:    http://localhost:5173\`    ← Solo tu PC
\`Network:  http://192.168.1.X:5173\` ← ¡Esta es la que necesitas!

**Paso 3 - En tu iPhone:**
1. Conéctate al **mismo WiFi** que tu computadora
2. Abre **Safari** (o cualquier navegador)
3. Escribe la URL de **Network** (la del paso 2)
4. ¡Ya puedes ver tu app en el iPhone!

**Si no aparece la Network URL:**
En Mac/Linux abre otra terminal y escribe: \`ifconfig | grep inet\`
En Windows: \`ipconfig\`
Busca una IP que empiece con \`192.168.\` o \`10.0.\`

⚠️ Ambos dispositivos DEBEN estar en el **mismo WiFi**`,
          glossaryWords: ['localhost', 'IP Address', 'Port', 'Hot Reload'],
        },
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Qué comando usas para ver tu app en el celular (misma red WiFi)?',
            options: [
              { text: 'npm run dev -- --host', correct: true },
              { text: 'npm run mobile', correct: false },
              { text: 'npm run dev --phone', correct: false },
              { text: 'npm start --wifi', correct: false },
            ],
            explanation: '**npm run dev -- --host** expone tu servidor a la red local. La terminal te muestra la URL de red que debes abrir en el celular.',
            xp: 15,
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'Para ver tu app en iPhone desde la misma casa, ¿qué necesitas?',
            questionNote: '"Network" = Red · "WiFi" = Wifi · "Same" = El mismo',
            options: [
              { text: 'Que iPhone y PC estén conectados al MISMO WiFi', correct: true },
              { text: 'Tener datos móviles activos en el iPhone', correct: false },
              { text: 'Publicar la app en la App Store primero', correct: false },
              { text: 'Conectar el iPhone por cable USB a la PC', correct: false },
            ],
            explanation: '¡Solo necesitas el **mismo WiFi**! La PC y el iPhone deben estar en la misma red local. No necesitas internet externo ni cables.',
            xp: 10,
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'La terminal muestra: Network: http://192.168.1.5:5173 - ¿Qué abres en el iPhone?',
            options: [
              { text: 'http://192.168.1.5:5173 en Safari del iPhone', correct: true },
              { text: 'http://localhost:5173 en Safari del iPhone', correct: false },
              { text: 'La App Store para instalarla', correct: false },
              { text: 'Hay que escribirla manualmente en la terminal', correct: false },
            ],
            explanation: 'Escribe **http://192.168.1.X:5173** (tu IP de red) en Safari del iPhone. ¡"localhost" solo funciona en tu propia PC!',
            xp: 10,
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'En Windows, ¿qué comando encuentras tu dirección IP local?',
            questionNote: '"IP" = Internet Protocol · "Address" = Dirección',
            options: [
              { text: 'ipconfig', correct: true },
              { text: 'ip-address', correct: false },
              { text: 'myip', correct: false },
              { text: 'network status', correct: false },
            ],
            explanation: '**ipconfig** (Windows) e **ifconfig** (Mac/Linux) muestran tu IP local. Busca un número como 192.168.X.X o 10.0.X.X.',
            xp: 10,
          },
        ],
      },
      {
        id: 'run-03',
        title: 'Build y Deploy a internet',
        titleEn: 'Build & Deploy to the Internet',
        description: 'Publica tu app para que el mundo la vea',
        icon: '🌍',
        xpReward: 60,
        type: 'multiple-choice',
        theory: {
          title: 'Deploy gratuito con Vercel y Netlify',
          content: `**Build** = Construir · Convierte tu código en archivos optimizados listos para producción.

**Paso 1 - Hacer el build:**
\`npm run build\`
Crea una carpeta \`dist/\` con todo optimizado.

**Paso 2 - Deploy GRATIS con Vercel:**
Vercel es la forma más fácil de publicar una app.

Opción A (desde GitHub, recomendada):
1. Sube tu código a GitHub
2. Entra a **vercel.com** e inicia sesión con GitHub
3. Click "New Project" → selecciona tu repositorio
4. Click "Deploy" → ¡listo en 30 segundos!
5. Te da una URL como: \`mi-app.vercel.app\`

Opción B (desde la terminal):
\`npm install -g vercel\`
\`vercel\`

**Alternativas gratuitas:**
• **Netlify** → netlify.com (drag & drop de la carpeta dist/)
• **GitHub Pages** → Para sitios estáticos
• **Railway** → Para apps con backend

**"Production" vs "Development":**
• Development = Tu PC local, para trabajar
• Production = Internet, para usuarios reales`,
          glossaryWords: ['Build', 'Deploy', 'Hosting', 'Production', 'Development'],
        },
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Qué hace "npm run build"?',
            questionNote: '"Build" = Construir · "Production" = Para el mundo real',
            options: [
              { text: 'Crea archivos optimizados listos para publicar en internet', correct: true },
              { text: 'Instala las dependencias del proyecto', correct: false },
              { text: 'Borra el proyecto de tu computadora', correct: false },
              { text: 'Sube automáticamente a GitHub', correct: false },
            ],
            explanation: '**npm run build** genera la carpeta `dist/` con tu app optimizada y lista para producción. ¡Los archivos son más pequeños y rápidos!',
            xp: 10,
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '¿Cuál es la forma más fácil de publicar una app React en internet gratis?',
            options: [
              { text: 'Conectar el repo de GitHub a Vercel y hacer deploy con un click', correct: true },
              { text: 'Enviar los archivos por email al proveedor de hosting', correct: false },
              { text: 'Comprar un servidor dedicado y configurarlo manualmente', correct: false },
              { text: 'Solo se puede publicar pagando mínimo $50/mes', correct: false },
            ],
            explanation: '**Vercel** conectado a GitHub hace deploy automático: cada vez que haces push, tu app se actualiza sola. ¡Totalmente gratis para proyectos personales!',
            xp: 15,
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'La diferencia entre "Development" y "Production" es:',
            questionNote: '"Development" = Desarrollo · "Production" = Producción',
            options: [
              { text: 'Development es tu PC local; Production es la app pública en internet', correct: true },
              { text: 'Son lo mismo, solo cambia el nombre', correct: false },
              { text: 'Production es más lento que Development', correct: false },
              { text: 'Development requiere internet, Production no', correct: false },
            ],
            explanation: '**Development** = trabajas local en tu PC. **Production** = los usuarios reales usan tu app en internet. ¡Nunca pruebes cambios directamente en producción!',
            xp: 10,
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'Con Vercel/Netlify, ¿qué pasa cuando haces "git push" a tu repositorio?',
            questionNote: '"Automatic deploy" = Deploy automático · "Push" = Subir cambios',
            options: [
              { text: 'La app se actualiza automáticamente en internet sin hacer nada más', correct: true },
              { text: 'Nada, tienes que hacer deploy manualmente cada vez', correct: false },
              { text: 'El repositorio se borra', correct: false },
              { text: 'Te cobra por el deploy automático', correct: false },
            ],
            explanation: '¡La magia de Vercel! Conectas el repo una sola vez y después cada **git push** actualiza tu app en producción automáticamente. Se llama **CI/CD** ("Continuous Deployment").',
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
