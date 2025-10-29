import { useState } from 'react'

import './App.css'

function App(){

  const[ques,setQues]=useState([
    {
      quesText:'What is the capital of India',
      answerOptions: [
        { answerText:'Anhra Pradesh',isCorrect:false },
        { answerText:'Kerala',isCorrect:false },
        { answerText:'Delhi',isCorrect:true },
        { answerText:'Tamilnadu',isCorrect:false },
      ],
    },
    {
      quesText:'What lab today',
      answerOptions:[
        { answerText:'mwt',isCorrect:false},
        { answerText:'devops',isCorrect:true},
        { answerText:'ai',isCorrect:false},
        { answerText:'wfp',isCorrect:false},
      ],
    },
  ]);
  const[currQues,setCurrQues]=useState(0);
  const[userAns,setUserAns]=useState([]);
  const score=userAns.filter(ans=>ans===true).length;
  const handleAnswer=(isCorrect)=>{
    setUserAns([...userAns,isCorrect]);
    const nextQues=currQues+1;
    if (nextQues<ques.length) {
      setCurrQues(nextQues);
    } else {
      alert('Quiz Completed',score+'out of'+ques.length);
    }
  };
  return (
    <div>
      <h2>Quiz App</h2>
      <div>
        <div>
        </div>
        <div>
          <div>{ques[currQues].quesText}</div>
          <div>
            {ques[currQues].answerOptions.map((ansOpt, index) => (
              <button key={index} onClick={() => handleAnswer(ansOpt.isCorrect)}>{ansOpt.answerText}</button>
            ))}
            score:{score} out of {ques.length}
            <div>
              {currQues+1}/{ques.length}
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default App;
