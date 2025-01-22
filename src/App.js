import './App.css';
import Questions from './Questions.json'
import Display from './Display';
import { useState } from 'react';

function App() {
  let arr = []
  const [marks, setMarks] = useState([])
   const changeHandler = (value, index) => {
    arr = marks
    arr[index] = value
    setMarks([...arr])
  }

  const handleQuizEnd = () => {
    alert(marks.reduce((a,b) => a + b, 0) + '/22')
  }
  return (
    <>
      {Questions.map((question, index) => {
        return (
         <div>
         <Display question = {question} index = {index} changeHandler = {changeHandler}/>
         </div>
        )
      })}
      <button type='btn' className='btn' onClick={handleQuizEnd}> End Quiz </button>
    </>
  );
}

export default App;
