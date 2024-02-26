import React from 'react'
import './styles.css'
import quizQuestions from '../resources/quizQuestion.json'
import { useState } from 'react'
export default function QuizComponent() {
    const [qNo,setqNo]=useState(0)
    const [question, setQuestion] = useState(quizQuestions[qNo])

    const previous=()=>{
        if(qNo>0 && qNo<=14){
        setqNo(n=>n-1)
        setQuestion(quizQuestions[qNo-1])}
    }
    const next=()=>{
        if(qNo>=0 && qNo<=13){
        setqNo(n=>n+1)
        setQuestion(quizQuestions[qNo+1])}
    }
    const quit=()=>{
      if(window.confirm("Are you sure, you want to quit?")){
        setqNo(0)
        setQuestion(quizQuestions[0])}
    }
  return (
        <div id="quiz">
        <div id="container">
            <h1 id="Heading">Question</h1>
            <p id="q-number">{qNo+1} of 15</p>
            <p id="question">{question.question}</p>
            <div id="options-container">
                <button className="options">{question.optionA}</button>
                <button className="options">{question.optionB}</button>
                <button className="options">{question.optionC}</button>
                <button className="options">{question.optionD}</button>
            </div>
            <div id="btn-container">
                <button className="btn" onClick={previous} id="previous">Previous</button>
                <button className="btn" onClick={next} id="next">Next</button>
                <button className="btn" onClick={quit}id="quit">Quit</button>
            </div>
        </div>
      </div>
    
  )
}