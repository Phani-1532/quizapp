import './App.css';
import Questions from './Questions.json';
import Display from './Display';
import { useState } from 'react';

function App() {
  let arr = [];
  const [marks, setMarks] = useState([]);
  
  const changeHandler = (value, index) => {
    arr = marks;
    arr[index] = value;
    setMarks([...arr]);
  };

  const handleQuizEnd = () => {
    alert(marks.reduce((a, b) => a + b, 0) + '/30');
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
      <div className='container'>
      <button type="button" className="btn" onClick={handleQuizEnd}>
        End Quiz
      </button>
      </div>
    </>
   
  );
}

export default App;