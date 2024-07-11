import { useEffect, useState } from 'react'
import questionsData from "./question.json";
import './App.css'

function App() {
const [currentQuiz, setCurrentQuiz] = useState(0);
const [score, setScore] = useState(0);
const [showScore, setShowScore] = useState(false);
const [timer, setTimer] = useState(10);

useEffect(() => {
  let interval;
  if(timer>0 && !showScore){
interval = setInterval(() => {
setTimer((prevTimer) => prevTimer - 1);
  },1000);
}

else{
  clearInterval(interval);
  setShowScore(true);
}
return () => clearInterval(interval);
}, [timer, showScore]);

const handleAnswerClick = (selectedOption ) =>{
  if(selectedOption===questionsData
    [currentQuiz].correctOption){
setScore((prevScore)=>prevScore +1);
    }
  
  if(currentQuiz<questionsData.length -1)
  {
    setCurrentQuiz((prevQuestion) => prevQuestion + 1);
    setTimer(10);
  }
  else{
    setShowScore(true)
  }
  
};

const handleRestartQuiz = () => {
  setCurrentQuiz(0);
  setScore(0);
  setShowScore(false);
  setTimer(10);
}
  return (
    <>
    <div className='app-container'>
      {showScore ? ( <div className='score-section'>
        <h2>Your Score: {score}/{questionsData.length}</h2>
        <div className='restart'>
      <button onClick={handleRestartQuiz}>Restart</button>
      </div>
      </div>) : (<div className='question-section'>
        <h2>Question {currentQuiz + 1}</h2>
        <p>{questionsData[currentQuiz].question}</p>
        <div className="options">
        {questionsData[currentQuiz].options.map((option,index) =>(
          <button key={index} onClick={()=> handleAnswerClick(option)}>{option}</button>
        ))}
        </div>
        <div className='timer'>Time Left: <span>{timer}</span></div>
      </div>)}
     
      
      
      
    </div>
    </>
  )
}

export default App
