import { categories } from './constants.js'

function countQuestions(list, status, category) {
  return list.filter(
    (q) => q.status === status && (!category || q.category === category)
  ).length
}

export function getStats(list) {
  const total = list.length
  const completed = countQuestions(list, 'Completed')
  const inProgress = countQuestions(list, 'In Progress')
  const pending = countQuestions(list, 'Pending')
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100)

  const byCategory = categories.map((name) => ({
    name,
    done: countQuestions(list, 'Completed', name),
    total: list.filter((q) => q.category === name).length,
  }))

  const dsa = byCategory.find((c) => c.name === 'DSA')
  const git = byCategory.find((c) => c.name === 'Git')
  const technical = byCategory.find((c) => c.name === 'Technical')

  return {
    total,
    completed,
    inProgress,
    pending,
    percent,
    byCategory,
    dsa,
    interviewDone: git.done + technical.done,
    interviewTotal: git.total + technical.total,
  }
}

export function toPercent(done, total) {
  return total === 0 ? 0 : (done / total) * 100
}
