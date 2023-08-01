import React, { useEffect, useState } from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  const [quizs, setQuizs] = useState([])
  const [question, setQuesion] = useState({})
  const [questionIndex, setQuestionIndex] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [marks, setMarks] = useState(0)

  // These are Controlling States
  const [showStart, setShowStart] = useState(true)
  const [showQuiz, setShowQuiz] = useState(false)
  const [showResult, setShowResult] = useState(false)

  return <></>
}

export default App
