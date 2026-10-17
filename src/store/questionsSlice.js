import { createSlice, nanoid } from '@reduxjs/toolkit'
import { loadQuestions } from '../storage.js'

const startingQuestions = [
  { id: '1', title: 'Two Sum', category: 'DSA', difficulty: 'Easy', status: 'Completed' },
  { id: '2', title: 'Merge Intervals', category: 'DSA', difficulty: 'Medium', status: 'In Progress' },
  { id: '3', title: 'Explain git rebase vs merge', category: 'Git', difficulty: 'Medium', status: 'Completed' },
  { id: '4', title: 'Debounce vs throttle', category: 'Technical', difficulty: 'Medium', status: 'Pending' },
  { id: '5', title: 'Longest Valid Parentheses', category: 'DSA', difficulty: 'Hard', status: 'Pending' },
  { id: '6', title: 'Event loop and microtasks', category: 'Technical', difficulty: 'Hard', status: 'In Progress' },

  // DSA
  { id: '7', title: 'Valid Anagram', category: 'DSA', difficulty: 'Easy', status: 'Completed' },
  { id: '8', title: 'Best Time to Buy and Sell Stock', category: 'DSA', difficulty: 'Easy', status: 'Completed' },
  { id: '9', title: 'Valid Parentheses', category: 'DSA', difficulty: 'Easy', status: 'Completed' },
  { id: '10', title: 'Binary Search', category: 'DSA', difficulty: 'Easy', status: 'Completed' },
  { id: '11', title: 'Group Anagrams', category: 'DSA', difficulty: 'Medium', status: 'Completed' },
  { id: '12', title: 'Maximum Subarray', category: 'DSA', difficulty: 'Medium', status: 'Completed' },
  { id: '13', title: 'Climbing Stairs', category: 'DSA', difficulty: 'Easy', status: 'In Progress' },
  { id: '14', title: 'Trapping Rain Water', category: 'DSA', difficulty: 'Hard', status: 'Pending' },
  { id: '15', title: 'Course Schedule', category: 'DSA', difficulty: 'Medium', status: 'Pending' },

  // Git
  { id: '16', title: 'What does git stash do', category: 'Git', difficulty: 'Easy', status: 'Completed' },
  { id: '17', title: 'How to resolve merge conflicts', category: 'Git', difficulty: 'Medium', status: 'In Progress' },
  { id: '18', title: 'When to use cherry-pick', category: 'Git', difficulty: 'Medium', status: 'Pending' },
  { id: '19', title: 'git reset vs git revert', category: 'Git', difficulty: 'Medium', status: 'Pending' },

  // Technical
  { id: '20', title: 'What is a closure', category: 'Technical', difficulty: 'Easy', status: 'Completed' },
  { id: '21', title: 'var vs let vs const', category: 'Technical', difficulty: 'Easy', status: 'Completed' },
  { id: '22', title: 'Explain hoisting', category: 'Technical', difficulty: 'Easy', status: 'Completed' },
  { id: '23', title: 'Promises vs async await', category: 'Technical', difficulty: 'Medium', status: 'In Progress' },
  { id: '24', title: 'How React reconciliation works', category: 'Technical', difficulty: 'Hard', status: 'Pending' },
]

const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    list: loadQuestions() || startingQuestions,
    machineCoding: {
      status: 'In Progress',
      percent: 55,
      description: 'Todo app with drag and drop',
    },
  },
  reducers: {
    addQuestion: {
      reducer(state, action) {
        state.list.unshift(action.payload)
      },
      prepare(formData) {
        return { payload: { id: nanoid(), ...formData } }
      },
    },

    changeStatus(state, action) {
      const { id, status } = action.payload
      const question = state.list.find((q) => q.id === id)
      if (question) {
        question.status = status
      }
    },

    deleteQuestion(state, action) {
      state.list = state.list.filter((q) => q.id !== action.payload)
    },
  },
})

export const { addQuestion, changeStatus, deleteQuestion } = questionsSlice.actions
export default questionsSlice.reducer
