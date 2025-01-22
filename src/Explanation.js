import React from 'react'
import Questions from './Questions.json'
import './Explanation.css'

function Explanation() {
  return (
    <div className="explanation-container">
      {Questions.map((question, index) => (
        <div key={index}>
          <h3>{question.title}</h3>
          <p>Ans: {question.explanation}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Explanation
