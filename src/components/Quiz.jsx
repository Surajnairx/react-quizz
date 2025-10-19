import { useState } from "react";
import QUESTIONS from "../questions";

function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  function handleSelectAnswer(selectAnswer) {
    setUserAnswer((prevAns) => {
      return [...prevAns, selectAnswer];
    });
  }
  return (
    <div id="quiz">
      <div id="question">
        <h2>Question : {QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
            <li className="answer" key={index}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
