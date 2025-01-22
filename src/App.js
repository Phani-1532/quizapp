import './App.css';
import Questions from './Questions.json'
import Display from './Display';

function App() {
  const endQuiz = (marks) => {
    alert(marks)
  }
  return (
    <>
      {Questions.map((question, index) => {
        return (
         <div>
         <Display question = {question} index = {index} endQuiz = {endQuiz}/>
         </div>
        )
      })}
      <button type='btn' className='btn' onClick={endQuiz}> End Quiz </button>
    </>
  );
}

export default App;
