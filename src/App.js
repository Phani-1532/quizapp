import './App.css';
import Questions from './Questions.json'
import Display from './Display';

function App() {
  return (
    <>
      {Questions.map((question, index) => {
        return (
          <Display question = {question} index = {index} />
        )
      })}
    </>
  );
}

export default App;
