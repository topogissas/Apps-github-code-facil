import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      // --- USER PROFILE ---
      user: {
        name: 'Codinator',
        avatar: '🧑‍💻',
        level: 1,
        xp: 0,
        xpToNextLevel: 100,
        totalXp: 0,
        streak: 0,
        lastLoginDate: null,
        hearts: 5,
        maxHearts: 5,
        gems: 50,
        badges: [],
        league: 'Bronze',
      },

      // --- LESSONS PROGRESS ---
      lessons: {
        completedLessons: [],
        currentPath: 'git-basics',
        paths: {
          'git-basics': { unlocked: true, progress: 0 },
          'github-workflow': { unlocked: false, progress: 0 },
          'vscode-mastery': { unlocked: false, progress: 0 },
          'branching': { unlocked: false, progress: 0 },
          'pull-requests': { unlocked: false, progress: 0 },
          'ai-coding': { unlocked: false, progress: 0 },
        },
      },

      // --- REPOSITORIES (GitHub Simulator) ---
      repositories: [
        {
          id: 'repo-1',
          name: 'mi-primer-proyecto',
          description: 'My first coding project (Mi primer proyecto de código)',
          language: 'JavaScript',
          languageColor: '#f7df1e',
          stars: 0,
          forks: 0,
          isPrivate: false,
          createdAt: new Date().toISOString(),
          branches: ['main'],
          currentBranch: 'main',
          commits: [
            {
              id: 'abc123f',
              message: 'Initial commit (Commit inicial)',
              author: 'Codinator',
              date: new Date().toISOString(),
              files: ['README.md'],
            }
          ],
          files: {
            'README.md': '# Mi Primer Proyecto\n\nBienvenido a mi primer repositorio!\n\n## Description (Descripción)\nThis is my first GitHub repository.\n',
          },
          issues: [],
          pullRequests: [],
        }
      ],
      activeRepoId: 'repo-1',
      activeFile: 'README.md',
      activeTab: 'code',

      // --- POMODORO ---
      pomodoro: {
        mode: 'work',       // 'work' | 'short-break' | 'long-break'
        timeLeft: 25 * 60,
        duration: 25 * 60,
        isRunning: false,
        session: 1,
        totalSessions: 4,
        completedPomodoros: 0,
        settings: {
          workDuration: 25,
          shortBreak: 5,
          longBreak: 15,
        },
      },

      // --- GLOSSARY / DICTIONARY ---
      learnedWords: [],

      // --- ACTIVE LESSON ---
      activeLesson: null,
      lessonProgress: { questionIndex: 0, score: 0, hearts: 5 },

      // --- AI GUIDE ---
      aiMessages: [
        {
          id: 1,
          from: 'ai',
          text: '¡Hola! Soy Octo, tu guía de código 🐙 Estoy aquí para ayudarte a aprender Git, GitHub y VS Code de forma divertida. ¿Por dónde empezamos?',
          timestamp: new Date().toISOString(),
        }
      ],

      // ===================== ACTIONS =====================

      addXP: (amount) => {
        const { user } = get()
        const newTotalXp = user.totalXp + amount
        let newXp = user.xp + amount
        let newLevel = user.level
        let newXpToNext = user.xpToNextLevel

        while (newXp >= newXpToNext) {
          newXp -= newXpToNext
          newLevel++
          newXpToNext = Math.floor(100 * Math.pow(1.3, newLevel - 1))
        }

        set({
          user: {
            ...user,
            xp: newXp,
            totalXp: newTotalXp,
            level: newLevel,
            xpToNextLevel: newXpToNext,
          }
        })
      },

      updateStreak: () => {
        const { user } = get()
        const today = new Date().toDateString()
        const lastLogin = user.lastLoginDate

        if (lastLogin === today) return

        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const isConsecutive = lastLogin === yesterday.toDateString()

        set({
          user: {
            ...user,
            streak: isConsecutive ? user.streak + 1 : 1,
            lastLoginDate: today,
          }
        })
      },

      loseHeart: () => {
        const { user } = get()
        if (user.hearts > 0) {
          set({ user: { ...user, hearts: user.hearts - 1 } })
        }
      },

      gainHeart: () => {
        const { user } = get()
        if (user.hearts < user.maxHearts) {
          set({ user: { ...user, hearts: user.hearts + 1 } })
        }
      },

      addGems: (amount) => {
        const { user } = get()
        set({ user: { ...user, gems: user.gems + amount } })
      },

      spendGems: (amount) => {
        const { user } = get()
        if (user.gems >= amount) {
          set({ user: { ...user, gems: user.gems - amount } })
          return true
        }
        return false
      },

      addBadge: (badge) => {
        const { user } = get()
        if (!user.badges.find(b => b.id === badge.id)) {
          set({ user: { ...user, badges: [...user.badges, badge] } })
        }
      },

      completeLesson: (lessonId, pathId, xpEarned) => {
        const { lessons } = get()
        const completedLessons = [...lessons.completedLessons]
        if (!completedLessons.includes(lessonId)) {
          completedLessons.push(lessonId)
        }

        const paths = { ...lessons.paths }
        if (paths[pathId]) {
          paths[pathId] = {
            ...paths[pathId],
            progress: Math.min(100, paths[pathId].progress + 20),
          }
        }

        set({ lessons: { ...lessons, completedLessons, paths } })
        get().addXP(xpEarned)
      },

      unlockPath: (pathId) => {
        const { lessons } = get()
        set({
          lessons: {
            ...lessons,
            paths: {
              ...lessons.paths,
              [pathId]: { ...lessons.paths[pathId], unlocked: true, progress: 0 },
            }
          }
        })
      },

      setActiveLesson: (lesson) => set({ activeLesson: lesson, lessonProgress: { questionIndex: 0, score: 0, hearts: 5 } }),
      clearActiveLesson: () => set({ activeLesson: null }),

      nextQuestion: (correct) => {
        const { lessonProgress } = get()
        set({
          lessonProgress: {
            ...lessonProgress,
            questionIndex: lessonProgress.questionIndex + 1,
            score: correct ? lessonProgress.score + 1 : lessonProgress.score,
            hearts: correct ? lessonProgress.hearts : Math.max(0, lessonProgress.hearts - 1),
          }
        })
      },

      // --- REPO ACTIONS ---
      createRepo: (repoData) => {
        const { repositories } = get()
        const newRepo = {
          id: `repo-${Date.now()}`,
          stars: 0, forks: 0, isPrivate: false,
          createdAt: new Date().toISOString(),
          branches: ['main'],
          currentBranch: 'main',
          commits: [{ id: 'abc1234', message: 'Initial commit', author: get().user.name, date: new Date().toISOString(), files: ['README.md'] }],
          files: { 'README.md': `# ${repoData.name}\n\n${repoData.description}\n` },
          issues: [], pullRequests: [],
          ...repoData,
        }
        set({ repositories: [...repositories, newRepo], activeRepoId: newRepo.id })
        get().addXP(20)
      },

      setActiveRepo: (id) => set({ activeRepoId: id }),
      setActiveFile: (filename) => set({ activeFile: filename }),
      setActiveTab: (tab) => set({ activeTab: tab }),

      updateFile: (repoId, filename, content) => {
        const { repositories } = get()
        set({
          repositories: repositories.map(r =>
            r.id === repoId
              ? { ...r, files: { ...r.files, [filename]: content } }
              : r
          )
        })
      },

      commitChanges: (repoId, message) => {
        const { repositories } = get()
        const commit = {
          id: Math.random().toString(36).substr(2, 7),
          message,
          author: get().user.name,
          date: new Date().toISOString(),
          files: Object.keys(repositories.find(r => r.id === repoId)?.files || {}),
        }
        set({
          repositories: repositories.map(r =>
            r.id === repoId
              ? { ...r, commits: [commit, ...r.commits] }
              : r
          )
        })
        get().addXP(15)
      },

      createBranch: (repoId, branchName) => {
        const { repositories } = get()
        set({
          repositories: repositories.map(r =>
            r.id === repoId && !r.branches.includes(branchName)
              ? { ...r, branches: [...r.branches, branchName], currentBranch: branchName }
              : r
          )
        })
        get().addXP(10)
      },

      createIssue: (repoId, issue) => {
        const { repositories } = get()
        const newIssue = {
          id: Date.now(),
          number: (repositories.find(r => r.id === repoId)?.issues.length || 0) + 1,
          title: issue.title,
          body: issue.body,
          state: 'open',
          labels: issue.labels || [],
          createdAt: new Date().toISOString(),
          author: get().user.name,
        }
        set({
          repositories: repositories.map(r =>
            r.id === repoId
              ? { ...r, issues: [newIssue, ...r.issues] }
              : r
          )
        })
        get().addXP(5)
      },

      // --- POMODORO ---
      setPomodoroTime: (timeLeft) => {
        set(state => ({ pomodoro: { ...state.pomodoro, timeLeft } }))
      },

      togglePomodoro: () => {
        set(state => ({ pomodoro: { ...state.pomodoro, isRunning: !state.pomodoro.isRunning } }))
      },

      resetPomodoro: () => {
        const { pomodoro } = get()
        const dur = pomodoro.mode === 'work'
          ? pomodoro.settings.workDuration * 60
          : pomodoro.mode === 'short-break'
            ? pomodoro.settings.shortBreak * 60
            : pomodoro.settings.longBreak * 60
        set({ pomodoro: { ...pomodoro, timeLeft: dur, duration: dur, isRunning: false } })
      },

      switchPomodoroMode: (mode) => {
        const { pomodoro } = get()
        const dur = mode === 'work'
          ? pomodoro.settings.workDuration * 60
          : mode === 'short-break'
            ? pomodoro.settings.shortBreak * 60
            : pomodoro.settings.longBreak * 60
        set({ pomodoro: { ...pomodoro, mode, timeLeft: dur, duration: dur, isRunning: false } })
      },

      completePomodoro: () => {
        const { pomodoro } = get()
        const completed = pomodoro.completedPomodoros + 1
        get().addXP(10)
        get().addGems(2)
        if (completed % 4 === 0) {
          get().switchPomodoroMode('long-break')
        } else {
          get().switchPomodoroMode('short-break')
        }
        set(state => ({
          pomodoro: {
            ...state.pomodoro,
            completedPomodoros: completed,
            session: completed + 1,
          }
        }))
      },

      // --- GLOSSARY ---
      learnWord: (word) => {
        const { learnedWords } = get()
        if (!learnedWords.find(w => w.en === word.en)) {
          set({ learnedWords: [...learnedWords, word] })
        }
      },

      // --- AI MESSAGES ---
      addAiMessage: (text) => {
        const { aiMessages } = get()
        set({
          aiMessages: [...aiMessages, {
            id: Date.now(),
            from: 'ai',
            text,
            timestamp: new Date().toISOString(),
          }]
        })
      },

      addUserMessage: (text) => {
        const { aiMessages } = get()
        set({
          aiMessages: [...aiMessages, {
            id: Date.now(),
            from: 'user',
            text,
            timestamp: new Date().toISOString(),
          }]
        })
      },

      // --- SETTINGS ---
      updateUsername: (name) => {
        set(state => ({ user: { ...state.user, name } }))
      },
    }),
    {
      name: 'github-duolingo-store',
      partialize: (state) => ({
        user: state.user,
        lessons: state.lessons,
        repositories: state.repositories,
        learnedWords: state.learnedWords,
        pomodoro: {
          ...state.pomodoro,
          isRunning: false,
        },
      }),
    }
  )
)

export default useStore
