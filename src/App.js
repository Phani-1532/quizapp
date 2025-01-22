import './App.css';
import Questions from './Questions.json';
import Display from './Display';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Browse from './Browse';
import Explanation from './Explanation';

function App() {
  const [marks, setMarks] = useState(Array(Questions.length).fill(0)); // Initialize with zeros
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(0);

  const changeHandler = (value, index) => {
    // Update the marks array at the specific index
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks); // Update the state with the new marks array
  };

  const handleQuizEnd = () => {
    // Calculate the total score by summing up the marks
    const totalScore = marks.reduce((acc, currentValue) => acc + currentValue, 0);
    setScore(totalScore);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <h1 className="heading">🌟 Ultimate Quiz Challenge 🌟</h1>
        {Questions.map((question, index) => (
          <div key={index}>
            <Display question={question} index={index} changeHandler={changeHandler} />
          </div>
        ))}
      </div>
      <div className="container">
        <button type="button" className="btn" onClick={handleQuizEnd}>
          End Quiz
        </button>
      </div>

      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'show' : ''}`}>
          <div className="modal-content">
            <h2>Your Score: {score}/30</h2>
            <p>{score >= 20 ? "Great job! You're a quiz master!" : "Better luck next time!"}</p>
            <button className="restart-btn" onClick={() => window.location.reload()}>Restart Quiz</button>
            <button className="close-btn" onClick={closeModal}>Close</button>
            <BrowserRouter>
            <Browse />
                    <Routes>
                        <Route path='/explanation' element={<Explanation />}></Route>
                    </Routes>
                </BrowserRouter>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
