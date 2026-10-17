const QUESTIONS_KEY = 'preptrack-questions'
const THEME_KEY = 'preptrack-theme'

export function loadQuestions() {
  try {
    const saved = localStorage.getItem(QUESTIONS_KEY)
    return saved ? JSON.parse(saved) : null
  } catch (error) {
    return null
  }
}

export function saveQuestions(list) {
  try {
    localStorage.setItem(QUESTIONS_KEY, JSON.stringify(list))
  } catch (error) {
  }
}

export function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || 'light'
  } catch (error) {
    return 'light'
  }
}

export function saveTheme(mode) {
  try {
    localStorage.setItem(THEME_KEY, mode)
  } catch (error) {
    // ignore
  }
}
