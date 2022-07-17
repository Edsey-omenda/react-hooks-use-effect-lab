import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [count, setCount] = useState(0);

  // add useEffect code
  useEffect(()=>{

    if(timeRemaining === 0){
      return onAnswered(false);
    }

    const timerId = setTimeout(() =>{ setTimeRemaining(count>1? count -1: 0)
      // console.log("time decreases by one second")
    },1000);
    setCount(timeRemaining)

    return function cleanup(){
      clearTimeout(timerId)
    }


  })

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;
 

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
