import { useState } from "react";
import QUESTIONS from "../questions";
import completedImage from "../assets/quiz-complete.png";

function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectAnswer) {
    setUserAnswer((prevAns) => {
      return [...prevAns, selectAnswer];
    });
  }
  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={completedImage} alt="" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswer.sort((a, b) => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <h2>Question : {QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswer.map((answer, index) => (
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
